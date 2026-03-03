import { readFile } from "fs/promises"
import path from "path"

export type WeeklyMileage = {
  week_start: string
  label: string
  km: number
}

export type PacePoint = {
  date: string
  label: string
  pace_sec_per_km: number
}

export type LatestRun = {
  activity_id: number | null
  name: string
  date: string
  distance_km: number
  moving_time_sec: number
  elevation_m: number
  pace_sec_per_km: number
  map_polyline: string | null
  url: string | null
}

export type StravaSummary = {
  generated_at: string
  athlete: {
    id: number | null
    username: string | null
  }
  metrics: {
    ytd_mileage_km: number
    ytd_target_km: number
    ytd_progress: number
    current_streak_days: number
    longest_streak_days: number
    longest_run_km: number
    total_elevation_m: number
    run_count_ytd: number
  }
  weekly_mileage_km: WeeklyMileage[]
  easy_pace_trend: PacePoint[]
  latest_run: LatestRun
}

const defaultSummary: StravaSummary = {
  generated_at: new Date(0).toISOString(),
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
}

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null
}

function toNumber(value: unknown, fallback: number): number {
  return typeof value === "number" && Number.isFinite(value) ? value : fallback
}

function toString(value: unknown, fallback: string): string {
  return typeof value === "string" ? value : fallback
}

function parseSummary(input: unknown): StravaSummary {
  if (!isObject(input)) return defaultSummary

  const athleteInput = isObject(input.athlete) ? input.athlete : {}
  const metricsInput = isObject(input.metrics) ? input.metrics : {}
  const latestInput = isObject(input.latest_run) ? input.latest_run : {}
  const weeklyInput = Array.isArray(input.weekly_mileage_km) ? input.weekly_mileage_km : []
  const paceInput = Array.isArray(input.easy_pace_trend) ? input.easy_pace_trend : []

  return {
    generated_at: toString(input.generated_at, defaultSummary.generated_at),
    athlete: {
      id: toNumber(athleteInput.id, defaultSummary.athlete.id ?? 0) || null,
      username: typeof athleteInput.username === "string" ? athleteInput.username : null,
    },
    metrics: {
      ytd_mileage_km: toNumber(metricsInput.ytd_mileage_km, 0),
      ytd_target_km: toNumber(metricsInput.ytd_target_km, 200),
      ytd_progress: toNumber(metricsInput.ytd_progress, 0),
      current_streak_days: toNumber(metricsInput.current_streak_days, 0),
      longest_streak_days: toNumber(metricsInput.longest_streak_days, 0),
      longest_run_km: toNumber(metricsInput.longest_run_km, 0),
      total_elevation_m: toNumber(metricsInput.total_elevation_m, 0),
      run_count_ytd: toNumber(metricsInput.run_count_ytd, 0),
    },
    weekly_mileage_km: weeklyInput
      .map((entry) => {
        if (!isObject(entry)) return null
        return {
          week_start: toString(entry.week_start, ""),
          label: toString(entry.label, ""),
          km: toNumber(entry.km, 0),
        }
      })
      .filter((entry): entry is WeeklyMileage => entry !== null),
    easy_pace_trend: paceInput
      .map((entry) => {
        if (!isObject(entry)) return null
        return {
          date: toString(entry.date, ""),
          label: toString(entry.label, ""),
          pace_sec_per_km: toNumber(entry.pace_sec_per_km, 0),
        }
      })
      .filter((entry): entry is PacePoint => entry !== null),
    latest_run: {
      activity_id: toNumber(latestInput.activity_id, 0) || null,
      name: toString(latestInput.name, "Latest run"),
      date: toString(latestInput.date, ""),
      distance_km: toNumber(latestInput.distance_km, 0),
      moving_time_sec: toNumber(latestInput.moving_time_sec, 0),
      elevation_m: toNumber(latestInput.elevation_m, 0),
      pace_sec_per_km: toNumber(latestInput.pace_sec_per_km, 0),
      map_polyline: typeof latestInput.map_polyline === "string" ? latestInput.map_polyline : null,
      url: typeof latestInput.url === "string" ? latestInput.url : null,
    },
  }
}

export async function readStravaSummary(): Promise<StravaSummary> {
  try {
    const filePath = path.join(process.cwd(), "public", "strava-summary.json")
    const raw = await readFile(filePath, "utf8")
    return parseSummary(JSON.parse(raw))
  } catch {
    return defaultSummary
  }
}
