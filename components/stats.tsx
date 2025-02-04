import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface StatsProps {
  activeDevices: number
  totalDevices: number
}

export function Stats({ activeDevices, totalDevices }: StatsProps) {
  const inactiveDevices = totalDevices - activeDevices

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Devices</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{activeDevices}</div>
          <p className="text-xs text-muted-foreground">{((activeDevices / totalDevices) * 100).toFixed(1)}% of total</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Inactive Devices</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{inactiveDevices}</div>
          <p className="text-xs text-muted-foreground">
            {((inactiveDevices / totalDevices) * 100).toFixed(1)}% of total
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Devices</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalDevices}</div>
        </CardContent>
      </Card>
    </div>
  )
}

