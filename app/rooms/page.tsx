import { Header } from "@/components/layout/header"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Plus, Lock, Globe } from "lucide-react"

const myRooms = [
  {
    name: "React Developers Hub",
    members: 24,
    community: "Web Development",
    privacy: "private",
    lastActivity: "2 hours ago",
  },
]

const suggestedRooms = [
  {
    name: "Next.js Enthusiasts",
    members: 156,
    community: "Web Development",
    privacy: "public",
  },
  {
    name: "TypeScript Masters",
    members: 89,
    community: "Web Development",
    privacy: "private",
  },
]

export default function RoomsPage() {
  return (
    <div className="min-h-screen pb-20">
      <Header />

      <main className="max-w-screen-xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Rooms</h1>
            <p className="text-muted-foreground">Connect with community members in focused groups</p>
          </div>
          <Button className="gradient-glow text-white border-0 gap-2">
            <Plus className="h-5 w-5" />
            Create Room
          </Button>
        </div>

        {/* My Rooms */}
        {myRooms.length > 0 ? (
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Your Rooms</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {myRooms.map((room, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="flex items-start justify-between mb-4">
                    <div className="gradient-glow rounded-lg p-3">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <Badge variant="secondary" className="flex items-center gap-1">
                      {room.privacy === "private" ? <Lock className="h-3 w-3" /> : <Globe className="h-3 w-3" />}
                      {room.privacy}
                    </Badge>
                  </div>

                  <h3 className="font-bold text-lg mb-2">{room.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{room.community}</p>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>{room.members} members</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{room.lastActivity}</span>
                  </div>

                  <Button className="w-full mt-4">Open Room</Button>
                </Card>
              ))}
            </div>
          </div>
        ) : null}

        {/* Suggested Rooms */}
        <div>
          <h2 className="text-xl font-bold mb-4">Suggested Rooms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {suggestedRooms.map((room, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-muted rounded-lg p-3">
                    <Users className="h-6 w-6" />
                  </div>
                  <Badge variant="secondary" className="flex items-center gap-1">
                    {room.privacy === "private" ? <Lock className="h-3 w-3" /> : <Globe className="h-3 w-3" />}
                    {room.privacy}
                  </Badge>
                </div>

                <h3 className="font-bold text-lg mb-2">{room.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{room.community}</p>

                <div className="flex items-center gap-1 text-sm text-muted-foreground mb-4">
                  <Users className="h-4 w-4" />
                  <span>{room.members} members</span>
                </div>

                <Button variant="outline" className="w-full bg-transparent">
                  Request to Join
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
