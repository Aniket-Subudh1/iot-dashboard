import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const devices = [
  { id: "DEV001", name: "Living Room Sensor", status: "Online" },
  { id: "DEV002", name: "Kitchen Sensor", status: "Offline" },
  { id: "DEV003", name: "Bedroom Sensor", status: "Online" },
  { id: "DEV004", name: "Bathroom Sensor", status: "Online" },
  { id: "DEV005", name: "Garage Sensor", status: "Offline" },
]

export function DeviceStatusCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Device Status</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {devices.map((device) => (
            <div key={device.id} className="flex items-center justify-between">
              <div>
                <p className="font-medium">{device.name}</p>
                <p className="text-sm text-muted-foreground">{device.id}</p>
              </div>
              <Badge variant={device.status === "Online" ? "default" : "secondary"}>{device.status}</Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

