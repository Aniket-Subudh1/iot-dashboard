"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ActivityItem } from "@/components/activity-item"

// Simulated WebSocket for real-time updates
const mockWebSocket = {
  onmessage: null as ((data: any) => void) | null,
  addEventListener: (event: string, callback: (data: any) => void) => {
    mockWebSocket.onmessage = callback
  },
}

// Simulate incoming real-time data
setInterval(() => {
  if (mockWebSocket.onmessage) {
    mockWebSocket.onmessage({
      data: JSON.stringify({
        id: Date.now(),
        device: `DEV${Math.floor(Math.random() * 1000)}`,
        event: ["Touch Detected", "Status Change", "Alert Triggered"][Math.floor(Math.random() * 3)],
        timestamp: new Date().toISOString(),
      }),
    })
  }
}, 5000)

export function RecentActivity() {
  const [activities, setActivities] = useState<any[]>([])

  useEffect(() => {
    mockWebSocket.addEventListener("message", (event) => {
      const newActivity = JSON.parse(event.data)
      setActivities((prev) => [newActivity, ...prev].slice(0, 10))
    })
  }, [])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px]">
          {activities.map((activity) => (
            <ActivityItem key={activity.id} {...activity} />
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  )
}

