interface MetricTileProps {
  value: string
  label: string
}

export function MetricTile({ value, label }: MetricTileProps) {
  return (
    <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
      <div className="text-2xl font-bold mb-2">{value}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  )
}
