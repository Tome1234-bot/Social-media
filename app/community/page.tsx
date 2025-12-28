import { Header } from "@/components/layout/header"
import { BottomNavigation } from "@/components/layout/bottom-navigation"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PostCard } from "@/components/feed/post-card"
import { Users, TrendingUp } from "lucide-react"

const topContributors = [
  { name: "Alex Turner", avatar: "/placeholder.svg?height=48&width=48", badge: "Gold" },
  { name: "Maria Garcia", avatar: "/placeholder.svg?height=48&width=48", badge: "Silver" },
  { name: "James Wilson", avatar: "/placeholder.svg?height=48&width=48", badge: "Bronze" },
  { name: "Lisa Chen", avatar: "/placeholder.svg?height=48&width=48", badge: "Bronze" },
  { name: "Tom Anderson", avatar: "/placeholder.svg?height=48&width=48", badge: "Bronze" },
]

const communityPosts = [
  {
    author: { name: "Sarah Mitchell", avatar: "/placeholder.svg?height=40&width=40", badge: "Gold" },
    content: "Tutorial: Building scalable microservices with Node.js and Docker. Check out my latest guide!",
    timestamp: "1 hour ago",
    badge: "green" as const,
    engagement: { comments: 34, votes: 189 },
  },
]

export default function CommunityPage() {
  return (
    <div className="min-h-screen pb-20">
      <Header />

      <main className="max-w-screen-xl mx-auto px-4 py-6">
        {/* Community Header */}
        <Card className="p-6 mb-6">
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="gradient-glow rounded-lg p-3">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">Web Development</h1>
                  <p className="text-sm text-muted-foreground">52.3K members</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                A community for web developers to share knowledge, ask questions, and grow together
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Community XP</p>
              <div className="flex items-center gap-2">
                <p className="text-3xl font-bold text-accent">8,450</p>
                <TrendingUp className="h-5 w-5 text-success" />
              </div>
              <p className="text-xs text-muted-foreground">Moderator: @admin_jane</p>
            </div>
          </div>

          {/* Community Tabs */}
          <Tabs defaultValue="all" className="mt-6">
            <TabsList className="w-full justify-start overflow-x-auto flex-wrap h-auto">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
              <TabsTrigger value="tips">Tips</TabsTrigger>
              <TabsTrigger value="questions">Questions</TabsTrigger>
              <TabsTrigger value="discussions">Discussions</TabsTrigger>
              <TabsTrigger value="posts">Posts</TabsTrigger>
              <TabsTrigger value="trending">Trending</TabsTrigger>
            </TabsList>
          </Tabs>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Top Contributors - Sidebar */}
          <aside className="lg:col-span-1">
            <Card className="p-4">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <span className="gradient-glow rounded p-1">
                  <TrendingUp className="h-4 w-4 text-white" />
                </span>
                Top Contributors
              </h3>
              <div className="space-y-3">
                {topContributors.map((contributor, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={contributor.avatar || "/placeholder.svg"} />
                      <AvatarFallback>{contributor.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{contributor.name}</p>
                      <Badge variant="secondary" className="text-xs">
                        {contributor.badge}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </aside>

          {/* Community Feed */}
          <div className="lg:col-span-3 space-y-4">
            {/* Filter Tabs */}
            <Tabs defaultValue="relevance">
              <TabsList>
                <TabsTrigger value="relevance">Relevance</TabsTrigger>
                <TabsTrigger value="newest">Newest</TabsTrigger>
                <TabsTrigger value="trending">Trending</TabsTrigger>
                <TabsTrigger value="engaging">Most Engaging</TabsTrigger>
              </TabsList>
            </Tabs>

            {/* Posts */}
            <div className="space-y-4">
              {communityPosts.map((post, index) => (
                <PostCard key={index} {...post} />
              ))}
              {communityPosts.map((post, index) => (
                <PostCard key={`repeat-${index}`} {...post} />
              ))}
            </div>
          </div>
        </div>
      </main>

      <BottomNavigation />
    </div>
  )
}
