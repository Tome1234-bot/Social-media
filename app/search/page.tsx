import { Header } from "@/components/layout/header"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { SearchIcon, TrendingUp } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const trendingTopics = ["Next.js 15", "React Server Components", "AI Integration", "TypeScript", "Web Performance"]

const recentSearches = ["JavaScript best practices", "CSS Grid tutorial", "React Hooks"]

export default function SearchPage() {
  return (
    <div className="min-h-screen pb-20">
      <Header showIcons={false} />

      <main className="max-w-4xl mx-auto px-4 py-6">
        {/* Search Input */}
        <div className="relative mb-8">
          <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-muted-foreground" />
          <Input
            placeholder="Search for people, posts, communities, videos..."
            className="pl-14 h-14 text-lg"
            autoFocus
          />
        </div>

        {/* Trending Topics */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-accent" />
            Trending Topics
          </h2>
          <div className="flex flex-wrap gap-2">
            {trendingTopics.map((topic) => (
              <Badge
                key={topic}
                variant="secondary"
                className="cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors text-sm px-4 py-2"
              >
                {topic}
              </Badge>
            ))}
          </div>
        </div>

        {/* Recent Searches */}
        <div>
          <h2 className="text-xl font-bold mb-4">Recent Searches</h2>
          <div className="space-y-2">
            {recentSearches.map((search, index) => (
              <Card key={index} className="p-4 cursor-pointer hover:bg-accent/5 transition-colors">
                <div className="flex items-center gap-3">
                  <SearchIcon className="h-5 w-5 text-muted-foreground" />
                  <span>{search}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
