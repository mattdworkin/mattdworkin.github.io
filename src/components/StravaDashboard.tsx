import { StravaSummary } from "@/lib/strava"

function round(value: number, digits = 1): number {
  const factor = 10 ** digits
  return Math.round(value * factor) / factor
}

function formatPace(secondsPerKm: number): string {
  if (!Number.isFinite(secondsPerKm) || secondsPerKm <= 0) return "--"
  const minutes = Math.floor(secondsPerKm / 60)
  const seconds = Math.round(secondsPerKm % 60)
  return `${minutes}:${seconds.toString().padStart(2, "0")}/km`
}

function formatDuration(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds <= 0) return "--"
  const h = Math.floor(seconds / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  if (h > 0) return `${h}h ${m}m`
  return `${m}m`
}

function formatDateLabel(isoDate: string): string {
  if (!isoDate) return "--"
  const date = new Date(isoDate)
  if (Number.isNaN(date.getTime())) return "--"
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" })
}

function decodePolyline(encoded: string): Array<[number, number]> {
  const points: Array<[number, number]> = []
  let index = 0
  let lat = 0
  let lng = 0

  while (index < encoded.length) {
    let shift = 0
    let result = 0
    let byte = 0

    do {
      byte = encoded.charCodeAt(index++) - 63
      result |= (byte & 0x1f) << shift
      shift += 5
    } while (byte >= 0x20)

    const deltaLat = (result & 1) !== 0 ? ~(result >> 1) : result >> 1
    lat += deltaLat

    shift = 0
    result = 0

    do {
      byte = encoded.charCodeAt(index++) - 63
      result |= (byte & 0x1f) << shift
      shift += 5
    } while (byte >= 0x20)

    const deltaLng = (result & 1) !== 0 ? ~(result >> 1) : result >> 1
    lng += deltaLng

    points.push([lat / 1e5, lng / 1e5])
  }

  return points
}

function buildMapPath(polyline: string | null): { path: string; points: Array<[number, number]> } {
  if (!polyline) return { path: "", points: [] }
  const coords = decodePolyline(polyline)
  if (coords.length < 2) return { path: "", points: coords }

  let minLat = Infinity
  let maxLat = -Infinity
  let minLng = Infinity
  let maxLng = -Infinity

  for (const [lat, lng] of coords) {
    minLat = Math.min(minLat, lat)
    maxLat = Math.max(maxLat, lat)
    minLng = Math.min(minLng, lng)
    maxLng = Math.max(maxLng, lng)
  }

  const latRange = Math.max(maxLat - minLat, 0.00001)
  const lngRange = Math.max(maxLng - minLng, 0.00001)
  const size = 100
  const padding = 8
  const drawWidth = size - padding * 2
  const drawHeight = size - padding * 2

  const normalized = coords.map(([lat, lng]) => {
    const x = padding + ((lng - minLng) / lngRange) * drawWidth
    const y = padding + ((maxLat - lat) / latRange) * drawHeight
    return [x, y] as [number, number]
  })

  const path = normalized
    .map(([x, y], index) => `${index === 0 ? "M" : "L"} ${round(x, 2)} ${round(y, 2)}`)
    .join(" ")

  return { path, points: normalized }
}

function buildTrendPath(values: number[]): string {
  if (values.length < 2) return ""

  const width = 100
  const height = 54
  const left = 6
  const top = 6
  const plotWidth = width - left * 2
  const plotHeight = height - top * 2

  const minValue = Math.min(...values)
  const maxValue = Math.max(...values)
  const range = Math.max(maxValue - minValue, 1)

  return values
    .map((value, index) => {
      const x = left + (index / (values.length - 1)) * plotWidth
      const y = top + ((value - minValue) / range) * plotHeight
      return `${index === 0 ? "M" : "L"} ${round(x, 2)} ${round(y, 2)}`
    })
    .join(" ")
}

export function StravaDashboard({ summary }: { summary: StravaSummary }) {
  const weekly = summary.weekly_mileage_km.slice(-8)
  const weeklyMax = Math.max(1, ...weekly.map((entry) => entry.km))
  const paceTrend = summary.easy_pace_trend.slice(-8)
  const paceValues = paceTrend.map((entry) => entry.pace_sec_per_km)
  const pacePath = buildTrendPath(paceValues)

  const map = buildMapPath(summary.latest_run.map_polyline)
  const mapStart = map.points[0]
  const mapEnd = map.points[map.points.length - 1]

  const progress = Math.max(0, Math.min(summary.metrics.ytd_progress, 1))
  const ringRadius = 44
  const circumference = 2 * Math.PI * ringRadius
  const ringOffset = circumference * (1 - progress)

  const hasData = summary.metrics.run_count_ytd > 0

  return (
    <section className="mt-5 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground">
        <span className="kicker">Strava Dashboard</span>
        <span>Synced {formatDateLabel(summary.generated_at)}</span>
      </div>

      {!hasData && (
        <div className="rounded-lg border border-white/10 bg-black/20 p-3 text-xs text-muted-foreground">
          No Strava runs synced yet. Add Strava secrets and run `npm run sync:strava`.
        </div>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        <div className="rounded-lg border border-white/10 bg-black/20 p-2.5">
          <p className="kicker">Streak</p>
          <p className="mt-1 text-lg font-semibold">{summary.metrics.current_streak_days} days</p>
        </div>
        <div className="rounded-lg border border-white/10 bg-black/20 p-2.5">
          <p className="kicker">Longest Run</p>
          <p className="mt-1 text-lg font-semibold">{round(summary.metrics.longest_run_km)} km</p>
        </div>
        <div className="rounded-lg border border-white/10 bg-black/20 p-2.5">
          <p className="kicker">Elevation YTD</p>
          <p className="mt-1 text-lg font-semibold">{Math.round(summary.metrics.total_elevation_m)} m</p>
        </div>
        <div className="rounded-lg border border-white/10 bg-black/20 p-2.5">
          <p className="kicker">Runs YTD</p>
          <p className="mt-1 text-lg font-semibold">{summary.metrics.run_count_ytd}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[160px_1fr] gap-3">
        <div className="rounded-lg border border-white/10 bg-black/20 p-3 flex flex-col items-center justify-center">
          <svg viewBox="0 0 100 100" className="h-28 w-28">
            <circle cx="50" cy="50" r={ringRadius} fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth="8" />
            <circle
              cx="50"
              cy="50"
              r={ringRadius}
              fill="none"
              stroke="rgba(119,224,255,0.95)"
              strokeWidth="8"
              strokeLinecap="round"
              transform="rotate(-90 50 50)"
              strokeDasharray={circumference}
              strokeDashoffset={ringOffset}
            />
            <text x="50" y="48" textAnchor="middle" fontSize="11" fill="rgb(226 232 240)" fontWeight="600">
              {round(summary.metrics.ytd_mileage_km)} km
            </text>
            <text x="50" y="62" textAnchor="middle" fontSize="8" fill="rgb(148 163 184)">
              of {Math.round(summary.metrics.ytd_target_km)} YTD
            </text>
          </svg>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-3">
          <div className="min-w-0 overflow-hidden rounded-lg border border-white/10 bg-black/20 p-3">
            <p className="kicker">Last 8 Weeks Mileage</p>
            <div className="mt-3 flex h-24 items-end gap-2">
              {weekly.map((entry, index) => {
                const height = Math.max(8, Math.round((entry.km / weeklyMax) * 88))
                const showLabel = index % 2 === 0 || index === weekly.length - 1
                return (
                  <div key={entry.week_start} className="flex-1">
                    <div
                      className="w-full rounded-t-sm bg-gradient-to-t from-cyan-400/80 to-sky-200/90"
                      style={{ height: `${height}px` }}
                      title={`${entry.label}: ${round(entry.km)} km`}
                    />
                    <p className="mt-1 h-7 text-[10px] leading-3 text-center text-muted-foreground">
                      {showLabel ? entry.label : ""}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="min-w-0 overflow-hidden rounded-lg border border-white/10 bg-black/20 p-3">
            <p className="kicker">Easy Pace Trend</p>
            <svg viewBox="0 0 100 54" className="mt-2 h-24 w-full">
              <rect x="0.5" y="0.5" width="99" height="53" fill="rgba(7, 12, 22, 0.45)" stroke="rgba(255,255,255,0.12)" />
              {pacePath ? (
                <>
                  <path d={pacePath} fill="none" stroke="rgba(114,239,255,0.95)" strokeWidth="2" />
                  {paceValues.map((value, index) => {
                    const minValue = Math.min(...paceValues)
                    const maxValue = Math.max(...paceValues)
                    const range = Math.max(maxValue - minValue, 1)
                    const x = 6 + (index / Math.max(paceValues.length - 1, 1)) * 88
                    const y = 6 + ((value - minValue) / range) * 42
                    return <circle key={`${paceTrend[index]?.date ?? index}-pt`} cx={x} cy={y} r="1.5" fill="rgb(186 230 253)" />
                  })}
                </>
              ) : (
                <text x="50" y="29" textAnchor="middle" fill="rgb(148 163 184)" fontSize="6">
                  Need more easy runs
                </text>
              )}
            </svg>
            {paceTrend.length > 0 && (
              <p className="mt-2 text-xs text-muted-foreground text-right">
                Latest: {formatPace(paceTrend[paceTrend.length - 1].pace_sec_per_km)}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-white/10 bg-black/20 p-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="kicker">Latest Run</p>
          {summary.latest_run.url && (
            <a href={summary.latest_run.url} target="_blank" rel="noopener noreferrer" className="text-xs underline underline-offset-4">
              Open on Strava
            </a>
          )}
        </div>
        <p className="mt-2 text-sm font-semibold">{summary.latest_run.name}</p>
        <p className="text-xs text-muted-foreground">
          {formatDateLabel(summary.latest_run.date)} · {round(summary.latest_run.distance_km)} km · {formatDuration(summary.latest_run.moving_time_sec)} ·{" "}
          {formatPace(summary.latest_run.pace_sec_per_km)}
        </p>
        <div className="mt-3 h-28 w-full rounded border border-white/10 bg-slate-950/45">
          {map.path ? (
            <svg viewBox="0 0 100 100" className="h-full w-full">
              <path d={map.path} fill="none" stroke="rgba(89, 229, 255, 0.9)" strokeWidth="1.6" />
              {mapStart && <circle cx={mapStart[0]} cy={mapStart[1]} r="1.8" fill="rgba(125, 211, 252, 1)" />}
              {mapEnd && <circle cx={mapEnd[0]} cy={mapEnd[1]} r="1.8" fill="rgba(45, 212, 191, 1)" />}
            </svg>
          ) : (
            <div className="flex h-full items-center justify-center text-xs text-muted-foreground">No map polyline on latest run</div>
          )}
        </div>
      </div>
    </section>
  )
}
