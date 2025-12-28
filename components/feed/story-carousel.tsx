"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Plus } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"

const stories = [
  { id: 1, name: "Your Story", avatar: "/placeholder.svg?height=64&width=64", isOwn: true },
  { id: 2, name: "Alex Johnson", avatar: "/placeholder.svg?height=64&width=64" },
  { id: 3, name: "Sarah Chen", avatar: "/placeholder.svg?height=64&width=64" },
  { id: 4, name: "Mike Ross", avatar: "/placeholder.svg?height=64&width=64" },
  { id: 5, name: "Emma Wilson", avatar: "/placeholder.svg?height=64&width=64" },
  { id: 6, name: "Chris Lee", avatar: "/placeholder.svg?height=64&width=64" },
  { id: 7, name: "Nina Patel", avatar: "/placeholder.svg?height=64&width=64" },
]

export function StoryCarousel() {
  return (
    <ScrollArea className="w-full whitespace-nowrap">
      <div className="flex gap-3 p-1">
        {stories.map((story) => (
          <button key={story.id} className="flex flex-col items-center gap-2 flex-shrink-0 group">
            <div className="relative">
              <div className="p-[2px] bg-gradient-to-br from-accent via-warning to-accent rounded-full">
                <Avatar className="h-16 w-16 border-2 border-background">
                  <AvatarImage src={story.avatar || "/placeholder.svg"} />
                  <AvatarFallback>{story.name[0]}</AvatarFallback>
                </Avatar>
              </div>
              {story.isOwn && (
                <div className="absolute bottom-0 right-0 gradient-glow rounded-full p-1">
                  <Plus className="h-3 w-3 text-white" />
                </div>
              )}
            </div>
            <span className="text-xs font-medium max-w-[70px] truncate">{story.name}</span>
          </button>
        ))}
      </div>
    </ScrollArea>
  )
}
