"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Library, LayoutDashboard, Users, Briefcase, Plus, X } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

export function ProfileFloatingMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { icon: Library, label: "Library", href: "/library", color: "bg-blue-500" },
    { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard", color: "bg-green-500" },
    { icon: Users, label: "Rooms", href: "/rooms", color: "bg-purple-500" },
    { icon: Briefcase, label: "Jobs", href: "/jobs", color: "bg-orange-500" },
  ]

  return (
    <>
      {/* Floating Button */}
      <Button
        size="icon"
        className="fixed bottom-24 right-6 h-14 w-14 rounded-full gradient-glow shadow-lg z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6 text-white" /> : <Plus className="h-6 w-6 text-white" />}
      </Button>

      {/* Menu Items */}
      {isOpen && (
        <div className="fixed bottom-40 right-6 flex flex-col gap-3 z-40">
          {menuItems.map((item, index) => {
            const Icon = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-full shadow-lg transition-all",
                  "hover:scale-110",
                  item.color,
                  "animate-in slide-in-from-right",
                )}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="p-3 flex items-center gap-2">
                  <Icon className="h-5 w-5 text-white" />
                  <span className="text-white font-medium pr-2">{item.label}</span>
                </div>
              </Link>
            )
          })}
        </div>
      )}

      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/20 z-30" onClick={() => setIsOpen(false)} />}
    </>
  )
}
