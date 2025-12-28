import { Header } from "@/components/layout/header"
import { BottomNavigation } from "@/components/layout/bottom-navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UserPlus, UserCheck, Users } from "lucide-react"

const friendRequests = [
  {
    name: "Alice Johnson",
    avatar: "/placeholder.svg?height=48&width=48",
    mutualFriends: 12,
    bio: "Full Stack Developer | Open Source Enthusiast",
  },
  {
    name: "Bob Smith",
    avatar: "/placeholder.svg?height=48&width=48",
    mutualFriends: 8,
    bio: "UI/UX Designer | Creative Problem Solver",
  },
]

const suggestions = [
  {
    name: "Charlie Brown",
    avatar: "/placeholder.svg?height=48&width=48",
    mutualFriends: 15,
    community: "Web Development",
  },
  {
    name: "Diana Prince",
    avatar: "/placeholder.svg?height=48&width=48",
    mutualFriends: 6,
    community: "Design",
  },
]

export default function NetworkPage() {
  return (
    <div className="min-h-screen pb-20">
      <Header />

      <main className="max-w-screen-xl mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold mb-6">Network & Connections</h1>

        <Tabs defaultValue="requests" className="mb-6">
          <TabsList>
            <TabsTrigger value="requests" className="gap-2">
              <UserPlus className="h-4 w-4" />
              Friend Requests
              <Badge variant="secondary" className="ml-1">
                2
              </Badge>
            </TabsTrigger>
            <TabsTrigger value="suggestions" className="gap-2">
              <Users className="h-4 w-4" />
              Suggestions
            </TabsTrigger>
            <TabsTrigger value="friends" className="gap-2">
              <UserCheck className="h-4 w-4" />
              My Network
            </TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Friend Requests */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Pending Friend Requests</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {friendRequests.map((request, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={request.avatar || "/placeholder.svg"} />
                    <AvatarFallback>{request.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold mb-1">{request.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2 line-clamp-2">{request.bio}</p>
                    <p className="text-xs text-muted-foreground mb-3">{request.mutualFriends} mutual connections</p>
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1 gradient-glow text-white border-0">
                        Accept
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                        Decline
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Suggestions */}
        <div>
          <h2 className="text-xl font-bold mb-4">People You May Know</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {suggestions.map((suggestion, index) => (
              <Card key={index} className="p-6 text-center">
                <Avatar className="h-20 w-20 mx-auto mb-3">
                  <AvatarImage src={suggestion.avatar || "/placeholder.svg"} />
                  <AvatarFallback>{suggestion.name[0]}</AvatarFallback>
                </Avatar>
                <h3 className="font-bold mb-1">{suggestion.name}</h3>
                <Badge variant="secondary" className="mb-2">
                  {suggestion.community}
                </Badge>
                <p className="text-xs text-muted-foreground mb-4">{suggestion.mutualFriends} mutual connections</p>
                <Button size="sm" variant="outline" className="w-full gap-2 bg-transparent">
                  <UserPlus className="h-4 w-4" />
                  Connect
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <BottomNavigation />
    </div>
  )
}
