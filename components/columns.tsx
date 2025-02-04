"use client"

import type { ColumnDef } from "@tanstack/react-table"
import { Badge } from "@/components/ui/badge"

export type Device = {
  id: string
  eventDate: string
  eventTime: string
  touchDetected: boolean
  responseDateTime: string
}

export const columns: ColumnDef<Device>[] = [
  {
    accessorKey: "id",
    header: "Device ID",
  },
  {
    accessorKey: "eventDate",
    header: "Event Date",
  },
  {
    accessorKey: "eventTime",
    header: "Event Time",
  },
  {
    accessorKey: "touchDetected",
    header: "Touch Detected",
    cell: ({ row }) => {
      const touchDetected = row.getValue("touchDetected")
      return <Badge variant={touchDetected ? "default" : "secondary"}>{touchDetected ? "Yes" : "No"}</Badge>
    },
  },
  {
    accessorKey: "responseDateTime",
    header: "Response Received",
    cell: ({ row }) => {
      const date = new Date(row.getValue("responseDateTime"))
      return date.toLocaleString()
    },
  },
]

