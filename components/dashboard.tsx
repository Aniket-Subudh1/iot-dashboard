import { Stats } from "@/components/stats"
import { DataTable } from "@/components/data-table"
import { columns } from "@/components/columns"
import { DeviceActivityChart } from "@/components/device-activity-chart"
import { TouchDetectionChart } from "@/components/touch-detection-chart"
import { DeviceModel } from "@/components/device-model"

const data = [
  {
    id: "DEV001",
    eventDate: "2025-02-04",
    eventTime: "14:30:00",
    touchDetected: true,
    responseDateTime: "2025-02-04T14:30:05",
  },
  {
    id: "DEV002",
    eventDate: "2025-02-04",
    eventTime: "15:45:00",
    touchDetected: false,
    responseDateTime: "2025-02-04T15:45:02",
  },
  // Add more sample data as needed
]

export default function Dashboard() {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-8">Device Dashboard</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="md:col-span-2 lg:col-span-3">
          <Stats activeDevices={15} totalDevices={20} />
        </div>
        <div className="md:col-span-2 lg:col-span-2">
          <DeviceActivityChart />
        </div>
        <div>
          <TouchDetectionChart />
        </div>
        <div className="md:col-span-2 lg:col-span-3">
          <DataTable columns={columns} data={data} />
        </div>
      </div>
      <div className="mt-8 h-[400px]">
        <DeviceModel />
      </div>
    </div>
  )
}

