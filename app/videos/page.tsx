import { Header } from "@/components/layout/header"
import { BottomNavigation } from "@/components/layout/bottom-navigation"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Play } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const videos = [
  {
    id: 1,
    title: "React Hooks Complete Guide - useEffect, useState, useContext",
    channel: "CodeMaster Pro",
    views: "125K",
    duration: "24:35",
    thumbnail: "/react-hooks-tutorial.jpg",
  },
  {
    id: 2,
    title: "Building a Full Stack App with Next.js 15 and Supabase",
    channel: "Dev Journey",
    views: "89K",
    duration: "45:12",
    thumbnail: "/nextjs-fullstack.jpg",
  },
  {
    id: 3,
    title: "CSS Grid vs Flexbox - When to Use Each",
    channel: "Design Code",
    views: "203K",
    duration: "15:48",
    thumbnail: "/css-grid-flexbox.jpg",
  },
  {
    id: 4,
    title: "TypeScript Tips Every Developer Should Know",
    channel: "TypeScript Weekly",
    views: "156K",
    duration: "18:22",
    thumbnail: "/typescript-tips.jpg",
  },
]

export default function VideosPage() {
  return (
    <div className="min-h-screen pb-20">
      <Header />

      <main className="max-w-screen-xl mx-auto px-4 py-6">
        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input placeholder="Search videos, tutorials, discussions..." className="pl-10 h-12" />
        </div>

        {/* Video Tabs */}
        <Tabs defaultValue="all" className="mb-6">
          <TabsList className="w-full justify-start overflow-x-auto flex-wrap h-auto">
            <TabsTrigger value="all">All Videos</TabsTrigger>
            <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
            <TabsTrigger value="tips">Tips & Tricks</TabsTrigger>
            <TabsTrigger value="qa">Questions Answered</TabsTrigger>
            <TabsTrigger value="discussions">Discussion/Podcast</TabsTrigger>
            <TabsTrigger value="trending">Trending</TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Suggested Videos Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Suggested for You</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {videos.map((video) => (
              <Card key={video.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="relative aspect-video bg-muted">
                  <img
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="gradient-glow rounded-full p-4">
                      <Play className="h-8 w-8 text-white fill-white" />
                    </div>
                  </div>
                  <Badge className="absolute bottom-2 right-2 bg-black/80 text-white">{video.duration}</Badge>
                </div>
                <div className="p-3">
                  <h3 className="font-semibold text-sm line-clamp-2 mb-2 leading-tight">{video.title}</h3>
                  <p className="text-xs text-muted-foreground">{video.channel}</p>
                  <p className="text-xs text-muted-foreground">{video.views} views</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Short Videos Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Short Videos</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card
                key={i}
                className="overflow-hidden aspect-[9/16] relative group cursor-pointer hover:shadow-lg transition-shadow"
              >
                <img
                  src={`/short-video-.jpg?height=400&width=225&query=short-video-${i}`}
                  alt={`Short ${i}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-3">
                  <p className="text-white text-xs font-semibold line-clamp-2">Quick Tip #{i}: Essential Dev Hack</p>
                  <p className="text-white/80 text-xs">25K views</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <BottomNavigation />
    </div>
  )
}
