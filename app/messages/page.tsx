import { Header } from "@/components/layout/header"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Send } from "lucide-react"

const conversations = [
  {
    id: 1,
    user: { name: "Sarah Chen", avatar: "/placeholder.svg?height=48&width=48" },
    lastMessage: "Thanks for the help with React!",
    time: "5m ago",
    unread: 2,
  },
  {
    id: 2,
    user: { name: "Mike Ross", avatar: "/placeholder.svg?height=48&width=48" },
    lastMessage: "Let's discuss the project tomorrow",
    time: "1h ago",
    unread: 0,
  },
  {
    id: 3,
    user: { name: "Emma Wilson", avatar: "/placeholder.svg?height=48&width=48" },
    lastMessage: "Great tutorial! Very helpful",
    time: "3h ago",
    unread: 1,
  },
]

export default function MessagesPage() {
  return (
    <div className="min-h-screen pb-20">
      <Header />

      <main className="max-w-screen-xl mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold mb-6">Messages</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Conversations List */}
          <div className="md:col-span-1">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search messages..." className="pl-10" />
            </div>

            <div className="space-y-2">
              {conversations.map((conversation) => (
                <Card key={conversation.id} className="p-4 cursor-pointer hover:bg-accent/5 transition-colors">
                  <div className="flex items-start gap-3">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={conversation.user.avatar || "/placeholder.svg"} />
                      <AvatarFallback>{conversation.user.name[0]}</AvatarFallback>
                    </Avatar>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-semibold text-sm truncate">{conversation.user.name}</h3>
                        <span className="text-xs text-muted-foreground">{conversation.time}</span>
                      </div>
                      <p className="text-sm text-muted-foreground truncate">{conversation.lastMessage}</p>
                    </div>

                    {conversation.unread > 0 && (
                      <div className="gradient-glow rounded-full w-6 h-6 flex items-center justify-center">
                        <span className="text-white text-xs font-bold">{conversation.unread}</span>
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <Card className="md:col-span-2 p-6 flex flex-col h-[600px]">
            <div className="flex items-center gap-3 pb-4 border-b border-border">
              <Avatar className="h-10 w-10">
                <AvatarImage src="/placeholder.svg?height=40&width=40" />
                <AvatarFallback>SC</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold">Sarah Chen</h3>
                <p className="text-xs text-muted-foreground">Active now</p>
              </div>
            </div>

            <div className="flex-1 py-4 overflow-y-auto">
              <p className="text-center text-sm text-muted-foreground">Select a conversation to start messaging</p>
            </div>

            <div className="flex gap-2 pt-4 border-t border-border">
              <Input placeholder="Type a message..." />
              <Button size="icon" className="gradient-glow text-white border-0">
                <Send className="h-5 w-5" />
              </Button>
            </div>
          </Card>
        </div>
      </main>
    </div>
  )
}
