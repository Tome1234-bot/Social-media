"use client"

import Link from "next/link"
import { Search, Bell, Menu, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

interface HeaderProps {
  showIcons?: boolean
}

export function Header({ showIcons = true }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="gradient-glow rounded-lg w-10 h-10 flex items-center justify-center">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <span className="text-2xl font-bold text-foreground">Maxme</span>
          </Link>

          {showIcons && (
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" asChild>
                <Link href="/search">
                  <Search className="h-5 w-5" />
                  <span className="sr-only">Search</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="/notifications">
                  <Bell className="h-5 w-5" />
                  <span className="sr-only">Notifications</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="/messages">
                  <MessageCircle className="h-5 w-5" />
                  <span className="sr-only">Messages</span>
                </Link>
              </Button>
              <ThemeToggle />
              <Button variant="ghost" size="icon" asChild>
                <Link href="/settings">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Menu</span>
                </Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
