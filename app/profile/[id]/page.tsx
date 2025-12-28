import { Header } from "@/components/layout/header"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PostCard } from "@/components/feed/post-card"
import { MessageCircle, Settings, Share2 } from "lucide-react"
import { ProfileFloatingMenu } from "@/components/profile/floating-menu"

export default function ProfilePage() {
  return (
    <div className="min-h-screen pb-20">
      <Header showIcons={false} />

      <main className="max-w-screen-xl mx-auto">
        {/* Cover Photo */}
        <div className="h-48 md:h-64 bg-gradient-to-br from-primary via-accent to-primary relative">
          <img src="/abstract-cover.jpg" alt="Cover" className="w-full h-full object-cover opacity-50" />
        </div>

        <div className="px-4">
          {/* Profile Info */}
          <div className="relative -mt-16 mb-6">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-end">
              <div className="relative">
                <Avatar className="h-32 w-32 border-4 border-background">
                  <AvatarImage src="/placeholder.svg?height=128&width=128" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <Badge className="absolute bottom-2 right-2 gradient-glow border-0 text-white">Expert</Badge>
              </div>

              <div className="flex-1">
                <h1 className="text-2xl md:text-3xl font-bold">John Doe</h1>
                <p className="text-muted-foreground">Full Stack Developer | Tech Enthusiast | Lifelong Learner</p>

                {/* Social Points */}
                <div className="flex items-center gap-2 mt-2">
                  <div className="gradient-glow rounded-lg px-3 py-1">
                    <span className="text-white font-bold">2,450 SP</span>
                  </div>
                  <span className="text-sm text-muted-foreground">Social Points</span>
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <MessageCircle className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon">
                  <Settings className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <Card className="p-4 text-center">
              <p className="text-2xl font-bold text-accent">156</p>
              <p className="text-sm text-muted-foreground">Posts</p>
            </Card>
            <Card className="p-4 text-center">
              <p className="text-2xl font-bold text-accent">89</p>
              <p className="text-sm text-muted-foreground">Questions</p>
            </Card>
            <Card className="p-4 text-center">
              <p className="text-2xl font-bold text-accent">234</p>
              <p className="text-sm text-muted-foreground">Discussions</p>
            </Card>
            <Card className="p-4 text-center">
              <p className="text-2xl font-bold text-accent">1.2K</p>
              <p className="text-sm text-muted-foreground">Contributions</p>
            </Card>
          </div>

          {/* About & Categories */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <Card className="p-4 lg:col-span-2">
              <h3 className="font-semibold mb-2 flex items-center justify-between">
                About Me
                <Button variant="ghost" size="sm">
                  See More
                </Button>
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Passionate software engineer with 5+ years of experience in building scalable web applications. Love
                exploring new technologies and sharing knowledge with the community. Currently focusing on React,
                Next.js, and cloud architecture.
              </p>
            </Card>

            <Card className="p-4">
              <h3 className="font-semibold mb-3">Categories</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Web Development</Badge>
                <Badge variant="secondary">JavaScript</Badge>
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">Cloud</Badge>
                <Badge variant="secondary">AI/ML</Badge>
              </div>
            </Card>
          </div>

          {/* Activity Tabs */}
          <Tabs defaultValue="posts" className="mb-6">
            <TabsList className="w-full justify-start overflow-x-auto">
              <TabsTrigger value="posts">Posts</TabsTrigger>
              <TabsTrigger value="discussions">Discussions</TabsTrigger>
              <TabsTrigger value="questions">Questions</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
            </TabsList>
          </Tabs>

          {/* User Content */}
          <div className="space-y-4 pb-6">
            <PostCard
              author={{ name: "John Doe", avatar: "/placeholder.svg?height=40&width=40", badge: "Expert" }}
              content="Just launched my new portfolio website! Built with Next.js 15, Framer Motion, and lots of coffee ☕"
              timestamp="3 hours ago"
              badge="green"
              engagement={{ comments: 45, votes: 289 }}
            />
          </div>
        </div>
      </main>

      <ProfileFloatingMenu />
    </div>
  )
}
