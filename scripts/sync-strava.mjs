import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const outputPath = path.join(process.cwd(), "public", "strava-summary.json");
const maxPages = 4;
const perPage = 200;

const round = (value, digits = 1) => {
  const factor = 10 ** digits;
  return Math.round(value * factor) / factor;
};

const toKm = (meters) => meters / 1000;

const dateOnly = (iso) => (typeof iso === "string" ? iso.slice(0, 10) : "");

const dayMs = 24 * 60 * 60 * 1000;

function parseDate(value) {
  if (!value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;
  return date;
}

function toDateStringUTC(date) {
  return date.toISOString().slice(0, 10);
}

function addDays(dateString, deltaDays) {
  const date = new Date(`${dateString}T00:00:00Z`);
  date.setUTCDate(date.getUTCDate() + deltaDays);
  return toDateStringUTC(date);
}

function daysBetween(a, b) {
  const aDate = new Date(`${a}T00:00:00Z`);
  const bDate = new Date(`${b}T00:00:00Z`);
  return Math.round((bDate.getTime() - aDate.getTime()) / dayMs);
}

function getStartOfWeekUtc(date) {
  const start = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
  const day = (start.getUTCDay() + 6) % 7;
  start.setUTCDate(start.getUTCDate() - day);
  return start;
}

function buildDefaultSummary() {
  return {
    generated_at: new Date().toISOString(),
    athlete: {
      id: null,
      username: null,
    },
    metrics: {
      ytd_mileage_km: 0,
      ytd_target_km: 200,
      ytd_progress: 0,
      current_streak_days: 0,
      longest_streak_days: 0,
      longest_run_km: 0,
      total_elevation_m: 0,
      run_count_ytd: 0,
    },
    weekly_mileage_km: [],
    easy_pace_trend: [],
    latest_run: {
      activity_id: null,
      name: "No run data yet",
      date: "",
      distance_km: 0,
      moving_time_sec: 0,
      elevation_m: 0,
      pace_sec_per_km: 0,
      map_polyline: null,
      url: null,
    },
  };
}

async function readExistingSummary() {
  try {
    const raw = await readFile(outputPath, "utf8");
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

async function writeSummary(summary) {
  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, `${JSON.stringify(summary, null, 2)}\n`, "utf8");
}

function normalizeRun(activity) {
  const activityDate = parseDate(activity.start_date_local || activity.start_date);
  if (!activityDate) return null;
  const distanceMeters = Number(activity.distance || 0);
  const movingSeconds = Number(activity.moving_time || 0);
  const pace = distanceMeters > 0 ? movingSeconds / (distanceMeters / 1000) : 0;

  return {
    id: Number(activity.id || 0),
    name: String(activity.name || "Run"),
    date: activity.start_date_local || activity.start_date || "",
    dateOnly: dateOnly(activity.start_date_local || activity.start_date || ""),
    distanceMeters,
    distanceKm: toKm(distanceMeters),
    movingSeconds,
    paceSecPerKm: pace,
    elevationMeters: Number(activity.total_elevation_gain || 0),
    averageSpeed: Number(activity.average_speed || 0),
    polyline: activity.map?.summary_polyline || null,
    url: activity.id ? `https://www.strava.com/activities/${activity.id}` : null,
  };
}

function isRunActivity(activity) {
  const sportType = String(activity.sport_type || "");
  const type = String(activity.type || "");
  return sportType === "Run" || type === "Run";
}

function calculateStreaks(runDays) {
  if (runDays.length === 0) {
    return { current: 0, longest: 0 };
  }

  const uniqueSorted = [...new Set(runDays)].sort();

  let longest = 1;
  let currentRun = 1;
  for (let i = 1; i < uniqueSorted.length; i += 1) {
    const delta = daysBetween(uniqueSorted[i - 1], uniqueSorted[i]);
    if (delta === 1) {
      currentRun += 1;
      longest = Math.max(longest, currentRun);
    } else {
      currentRun = 1;
    }
  }

  const today = toDateStringUTC(new Date());
  const yesterday = addDays(today, -1);
  const latest = uniqueSorted[uniqueSorted.length - 1];
  const baseDay = latest === today || latest === yesterday ? latest : null;

  if (!baseDay) {
    return { current: 0, longest };
  }

  let current = 0;
  let cursor = baseDay;
  const daySet = new Set(uniqueSorted);
  while (daySet.has(cursor)) {
    current += 1;
    cursor = addDays(cursor, -1);
  }

  return { current, longest };
}

function calculateWeeklyMileage(runs) {
  const weekBuckets = [];
  const now = new Date();
  const currentWeekStart = getStartOfWeekUtc(now);

  for (let i = 7; i >= 0; i -= 1) {
    const weekStart = new Date(currentWeekStart);
    weekStart.setUTCDate(currentWeekStart.getUTCDate() - i * 7);
    const weekEnd = new Date(weekStart);
    weekEnd.setUTCDate(weekStart.getUTCDate() + 7);

    const km = runs
      .filter((run) => {
        const runDate = parseDate(run.date);
        if (!runDate) return false;
        return runDate >= weekStart && runDate < weekEnd;
      })
      .reduce((sum, run) => sum + run.distanceKm, 0);

    weekBuckets.push({
      week_start: toDateStringUTC(weekStart),
      label: weekStart.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
      km: round(km, 1),
    });
  }

  return weekBuckets;
}

function calculateEasyPaceTrend(runs) {
  let easyRuns = runs.filter(
    (run) =>
      run.distanceMeters >= 4000 &&
      run.distanceMeters <= 18000 &&
      run.movingSeconds >= 1200 &&
      run.averageSpeed >= 2.4 &&
      run.averageSpeed <= 4.2
  );

  if (easyRuns.length < 4) {
    easyRuns = runs.filter((run) => run.distanceMeters >= 3000 && run.movingSeconds >= 900);
  }

  return easyRuns
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(-8)
    .map((run) => ({
      date: run.dateOnly,
      label: formatMonthDay(run.dateOnly),
      pace_sec_per_km: round(run.paceSecPerKm, 1),
    }));
}

function formatMonthDay(dateString) {
  const date = parseDate(dateString);
  if (!date) return "";
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

async function fetchActivities(accessToken) {
  const all = [];

  for (let page = 1; page <= maxPages; page += 1) {
    const response = await fetch(
      `https://www.strava.com/api/v3/athlete/activities?per_page=${perPage}&page=${page}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (!response.ok) {
      const body = await response.text();
      throw new Error(`Strava activities request failed (${response.status}): ${body}`);
    }

    const pageData = await response.json();
    if (!Array.isArray(pageData) || pageData.length === 0) break;

    all.push(...pageData);
    if (pageData.length < perPage) break;
  }

  return all;
}

async function main() {
  const clientId = process.env.STRAVA_CLIENT_ID;
  const clientSecret = process.env.STRAVA_CLIENT_SECRET;
  const refreshToken = process.env.STRAVA_REFRESH_TOKEN;
  const existing = await readExistingSummary();

  if (!clientId || !clientSecret || !refreshToken) {
    if (!existing) {
      await writeSummary(buildDefaultSummary());
      console.log("Created default public/strava-summary.json (missing Strava secrets).");
    } else {
      console.log("Skipped Strava sync (missing Strava secrets). Keeping existing summary.");
    }
    return;
  }

  try {
    const tokenResponse = await fetch("https://www.strava.com/oauth/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: "refresh_token",
        refresh_token: refreshToken,
      }),
    });

    if (!tokenResponse.ok) {
      const body = await tokenResponse.text();
      throw new Error(`Strava token refresh failed (${tokenResponse.status}): ${body}`);
    }

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    if (!accessToken) {
      throw new Error("Strava token refresh response did not include access_token.");
    }

    const activities = await fetchActivities(accessToken);
    const runs = activities.filter(isRunActivity).map(normalizeRun).filter(Boolean);

    const now = new Date();
    const currentYear = now.getUTCFullYear();
    const ytdRuns = runs.filter((run) => parseDate(run.date)?.getUTCFullYear() === currentYear);

    const ytdMileageKm = ytdRuns.reduce((sum, run) => sum + run.distanceKm, 0);
    const ytdTargetKm = Math.max(200, Math.ceil((ytdMileageKm || 1) / 200) * 200);
    const ytdProgress = ytdMileageKm / ytdTargetKm;

    const longestRunKm = ytdRuns.reduce((max, run) => Math.max(max, run.distanceKm), 0);
    const totalElevationM = ytdRuns.reduce((sum, run) => sum + run.elevationMeters, 0);

    const runDays = runs.map((run) => run.dateOnly).filter(Boolean);
    const streaks = calculateStreaks(runDays);

    const latestRun = runs
      .slice()
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0] || null;

    const summary = {
      generated_at: new Date().toISOString(),
      athlete: {
        id: tokenData.athlete?.id ?? null,
        username: tokenData.athlete?.username ?? null,
      },
      metrics: {
        ytd_mileage_km: round(ytdMileageKm, 1),
        ytd_target_km: round(ytdTargetKm, 0),
        ytd_progress: round(ytdProgress, 4),
        current_streak_days: streaks.current,
        longest_streak_days: streaks.longest,
        longest_run_km: round(longestRunKm, 1),
        total_elevation_m: round(totalElevationM, 0),
        run_count_ytd: ytdRuns.length,
      },
      weekly_mileage_km: calculateWeeklyMileage(runs),
      easy_pace_trend: calculateEasyPaceTrend(runs),
      latest_run: latestRun
        ? {
            activity_id: latestRun.id || null,
            name: latestRun.name,
            date: latestRun.dateOnly,
            distance_km: round(latestRun.distanceKm, 1),
            moving_time_sec: latestRun.movingSeconds,
            elevation_m: round(latestRun.elevationMeters, 0),
            pace_sec_per_km: round(latestRun.paceSecPerKm, 1),
            map_polyline: latestRun.polyline || null,
            url: latestRun.url,
          }
        : buildDefaultSummary().latest_run,
    };

    await writeSummary(summary);
    console.log(`Synced Strava summary: ${runs.length} runs processed.`);
  } catch (error) {
    if (existing) {
      console.warn(`Strava sync failed. Keeping existing summary. ${error instanceof Error ? error.message : String(error)}`);
      return;
    }
    throw error;
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
