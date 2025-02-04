import { Circle } from "lucide-react"

export function ActivityItem({ device, event, timestamp }: { device: string; event: string; timestamp: string }) {
  return (
    <div className="flex items-center space-x-4 rounded-md p-2 hover:bg-accent">
      <Circle className="h-2 w-2 fill-current text-blue-500" />
      <div className="flex-1 space-y-1">
        <p className="text-sm font-medium">{device}</p>
        <p className="text-xs text-muted-foreground">{event}</p>
      </div>
      <p className="text-xs text-muted-foreground">{new Date(timestamp).toLocaleTimeString()}</p>
    </div>
  )
}

