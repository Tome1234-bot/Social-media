import { Header } from "@/components/layout/header"
import { BottomNavigation } from "@/components/layout/bottom-navigation"
import { CreatePost } from "@/components/feed/create-post"
import { StoryCarousel } from "@/components/feed/story-carousel"
import { XPCard } from "@/components/xp-card"
import { PostCard } from "@/components/feed/post-card"

const mockPosts = [
  {
    author: { name: "Sarah Mitchell", avatar: "/placeholder.svg?height=40&width=40", badge: "Expert" },
    content:
      "Just completed my first React Native app! The journey from web to mobile has been incredible. Anyone else working on cross-platform projects?",
    timestamp: "2 hours ago",
    badge: "green" as const,
    engagement: { comments: 24, votes: 156 },
  },
  {
    author: { name: "David Chen", avatar: "/placeholder.svg?height=40&width=40", badge: "Pro" },
    content:
      "What's the best approach for state management in large-scale applications? Redux, Zustand, or Context API?",
    timestamp: "4 hours ago",
    badge: "yellow" as const,
    engagement: { comments: 45, votes: 89 },
    type: "question" as const,
  },
  {
    author: { name: "Emma Rodriguez", avatar: "/placeholder.svg?height=40&width=40", badge: "Mentor" },
    content:
      "Let's discuss the future of AI in software development. How do you see it changing our daily workflows in the next 5 years?",
    timestamp: "6 hours ago",
    badge: "red" as const,
    engagement: { comments: 67, votes: 234 },
    type: "discussion" as const,
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen pb-20">
      <Header />

      <main className="max-w-screen-xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Sidebar - Desktop Only */}
          <aside className="hidden lg:block space-y-4">
            <XPCard />
          </aside>

          {/* Main Feed */}
          <div className="lg:col-span-2 space-y-4">
            {/* Create Post */}
            <CreatePost />

            {/* Story Carousel */}
            <StoryCarousel />

            {/* XP Card - Mobile Only */}
            <div className="lg:hidden">
              <XPCard />
            </div>

            {/* Feed Posts */}
            <div className="space-y-4">
              {mockPosts.map((post, index) => (
                <PostCard key={index} {...post} />
              ))}
              {mockPosts.map((post, index) => (
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
