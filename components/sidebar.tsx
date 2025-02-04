import Link from "next/link"
import { Home, BarChart2, Settings, HelpCircle, Bell, Users, Zap } from "lucide-react"
import { ModeToggle } from "./mode-toggle"

const navItems = [
  { href: "/", icon: Home, label: "Dashboard" },
  { href: "/analytics", icon: BarChart2, label: "Analytics" },
  { href: "/devices", icon: Zap, label: "Devices" },
  { href: "/alerts", icon: Bell, label: "Alerts" },
  { href: "/users", icon: Users, label: "Users" },
  { href: "/settings", icon: Settings, label: "Settings" },
  { href: "/help", icon: HelpCircle, label: "Help" },
]

export function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col w-64 bg-background border-r">
      <div className="p-6">
        <h2 className="text-2xl font-bold">DeviceDash</h2>
      </div>
      <nav className="flex-1">
        <ul className="space-y-2 px-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="flex items-center p-2 rounded-lg hover:bg-secondary">
                <item.icon className="mr-2 h-5 w-5" />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4">
        <ModeToggle />
      </div>
    </div>
  )
}

