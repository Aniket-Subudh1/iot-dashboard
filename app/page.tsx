import { Suspense } from "react"
import { Stats } from "@/components/stats"
import { DeviceActivityChart } from "@/components/device-activity-chart"
import { TouchDetectionChart } from "@/components/touch-detection-chart"
import { RecentActivity } from "@/components/recent-activity"
import { DeviceStatusCard } from "@/components/device-status-card"
import { Skeleton } from "@/components/ui/skeleton"

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<Skeleton className="h-[100px]" />}>
          <Stats />
        </Suspense>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-4">
          <DeviceActivityChart />
        </div>
        <div className="col-span-3">
          <TouchDetectionChart />
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <DeviceStatusCard />
        </div>
        <div>
          <RecentActivity />
        </div>
      </div>
    </div>
  )
}

