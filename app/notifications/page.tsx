import { Header } from "@/components/layout/header"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ThumbsUp, MessageCircle, UserPlus, Trophy } from "lucide-react"

const notifications = [
  {
    type: "like",
    user: { name: "Sarah Chen", avatar: "/placeholder.svg?height=40&width=40" },
    action: "liked your post",
    time: "5 minutes ago",
    unread: true,
  },
  {
    type: "comment",
    user: { name: "Mike Ross", avatar: "/placeholder.svg?height=40&width=40" },
    action: "commented on your discussion",
    time: "1 hour ago",
    unread: true,
  },
  {
    type: "friend",
    user: { name: "Emma Wilson", avatar: "/placeholder.svg?height=40&width=40" },
    action: "sent you a friend request",
    time: "3 hours ago",
    unread: false,
  },
  {
    type: "achievement",
    user: { name: "Maxme", avatar: "/placeholder.svg?height=40&width=40" },
    action: "You earned the Expert badge!",
    time: "1 day ago",
    unread: false,
  },
]

const iconMap = {
  like: ThumbsUp,
  comment: MessageCircle,
  friend: UserPlus,
  achievement: Trophy,
}

export default function NotificationsPage() {
  return (
    <div className="min-h-screen pb-20">
      <Header />

      <main className="max-w-3xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Notifications</h1>
          <Button variant="outline" size="sm">
            Mark all as read
          </Button>
        </div>

        <Tabs defaultValue="all" className="mb-6">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="unread">Unread</TabsTrigger>
            <TabsTrigger value="mentions">Mentions</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="space-y-2">
          {notifications.map((notification, index) => {
            const Icon = iconMap[notification.type as keyof typeof iconMap]
            return (
              <Card
                key={index}
                className={`p-4 cursor-pointer hover:bg-accent/5 transition-colors ${
                  notification.unread ? "border-l-4 border-l-accent" : ""
                }`}
              >
                <div className="flex items-start gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={notification.user.avatar || "/placeholder.svg"} />
                    <AvatarFallback>{notification.user.name[0]}</AvatarFallback>
                  </Avatar>

                  <div className="flex-1 min-w-0">
                    <p className="text-sm">
                      <span className="font-semibold">{notification.user.name}</span>{" "}
                      <span className="text-muted-foreground">{notification.action}</span>
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                  </div>

                  <div className="gradient-glow rounded-full p-2">
                    <Icon className="h-4 w-4 text-white" />
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </main>
    </div>
  )
}
