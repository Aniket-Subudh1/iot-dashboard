"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { name: "Jan", value: 200 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 250 },
  { name: "Apr", value: 400 },
  { name: "May", value: 350 },
  { name: "Jun", value: 500 },
]

export function DeviceActivityChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Device Activity</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

