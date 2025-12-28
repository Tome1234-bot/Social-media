"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Play, Users, UserPlus, Trophy } from "lucide-react"
import { cn } from "@/lib/utils"

export function BottomNavigation() {
  const pathname = usePathname()

  // Don't show bottom nav on certain pages
  const hideNav = pathname.startsWith("/profile") || pathname === "/notifications" || pathname === "/search"

  if (hideNav) return null

  const navItems = [
    { icon: Play, label: "Videos", href: "/videos" },
    { icon: Users, label: "Community", href: "/community" },
    { icon: Home, label: "Home", href: "/", isCenter: true },
    { icon: UserPlus, label: "Network", href: "/network" },
    { icon: Trophy, label: "Skillsphere", href: "/skillsphere" },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border pb-safe">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex items-center justify-around h-16">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex flex-col items-center justify-center gap-1 relative group transition-all",
                  item.isCenter ? "scale-110" : "",
                )}
              >
                {item.isCenter ? (
                  <div className="gradient-glow rounded-full p-3 transition-transform group-hover:scale-110">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                ) : (
                  <div
                    className={cn(
                      "p-2 rounded-lg transition-colors",
                      isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground",
                    )}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                )}
                <span
                  className={cn(
                    "text-xs font-medium",
                    item.isCenter && "sr-only",
                    isActive ? "text-primary" : "text-muted-foreground",
                  )}
                >
                  {item.label}
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
