import { Header } from "@/components/layout/header"
import { BottomNavigation } from "@/components/layout/bottom-navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Code, Palette, PenTool, Mic, Trophy, Users, BookOpen } from "lucide-react"

const skillCategories = [
  {
    name: "Technology & Programming",
    icon: Code,
    members: "45.2K",
    color: "from-blue-500 to-cyan-500",
    subcategories: ["Web Dev", "Mobile", "AI/ML", "DevOps"],
  },
  {
    name: "Design & Creative",
    icon: Palette,
    members: "32.8K",
    color: "from-pink-500 to-rose-500",
    subcategories: ["UI/UX", "Graphic Design", "3D", "Animation"],
  },
  {
    name: "Writing & Content",
    icon: PenTool,
    members: "28.5K",
    color: "from-purple-500 to-indigo-500",
    subcategories: ["Copywriting", "Technical Writing", "Blogging", "SEO"],
  },
  {
    name: "Public Speaking",
    icon: Mic,
    members: "19.3K",
    color: "from-orange-500 to-amber-500",
    subcategories: ["Presentations", "Podcasting", "Voice Acting", "Coaching"],
  },
]

const topRanked = [
  { name: "Alex Chen", rank: 1, score: 9850, sphere: "Technology" },
  { name: "Maria Rodriguez", rank: 2, score: 9620, sphere: "Design" },
  { name: "James Wilson", rank: 3, score: 9385, sphere: "Technology" },
]

export default function SkillspherePage() {
  return (
    <div className="min-h-screen pb-20">
      <Header />

      <main className="max-w-screen-xl mx-auto px-4 py-6">
        {/* Hero Section */}
        <div className="text-center mb-10">
          <div className="gradient-glow rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
            <Trophy className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold mb-3">Skillsphere</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Join specialized communities, compete in challenges, and earn 2x social points in your chosen skill sphere
          </p>
        </div>

        {/* Top Ranked Members */}
        <Card className="p-6 mb-8 bg-gradient-to-br from-accent/5 to-primary/5">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Trophy className="h-6 w-6 text-accent" />
            Top Ranked Members This Month
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {topRanked.map((member) => (
              <div key={member.rank} className="flex items-center gap-3 p-3 bg-card rounded-lg">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl
                  ${member.rank === 1 ? "gradient-glow text-white" : "bg-muted"}`}
                >
                  {member.rank}
                </div>
                <div className="flex-1">
                  <p className="font-semibold">{member.name}</p>
                  <p className="text-xs text-muted-foreground">{member.sphere}</p>
                  <p className="text-sm font-bold text-accent">{member.score} pts</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Skill Categories */}
        <h2 className="text-2xl font-bold mb-6">Choose Your Skillsphere</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {skillCategories.map((category) => {
            const Icon = category.icon
            return (
              <Card
                key={category.name}
                className="overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer"
              >
                <div className={`h-24 bg-gradient-to-br ${category.color} relative`}>
                  <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <Icon className="h-16 w-16 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{category.name}</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span>{category.members} members</span>
                      </div>
                    </div>
                    <Badge className="gradient-glow border-0 text-white">2x SP</Badge>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {category.subcategories.map((sub) => (
                      <Badge key={sub} variant="secondary" className="text-xs">
                        {sub}
                      </Badge>
                    ))}
                  </div>

                  <Button className="w-full gradient-glow text-white border-0 hover:opacity-90">
                    Join Skillsphere
                  </Button>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Activities Section */}
        <Card className="p-6">
          <h3 className="text-xl font-bold mb-4">Skillsphere Activities</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-muted rounded-lg">
              <div className="gradient-glow rounded-lg w-12 h-12 flex items-center justify-center mb-3">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Courses</h4>
              <p className="text-sm text-muted-foreground mb-3">Access curated learning paths and earn certificates</p>
              <Button variant="outline" size="sm">
                Browse Courses
              </Button>
            </div>

            <div className="p-4 bg-muted rounded-lg">
              <div className="gradient-glow rounded-lg w-12 h-12 flex items-center justify-center mb-3">
                <Trophy className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Competitions</h4>
              <p className="text-sm text-muted-foreground mb-3">Compete with peers and climb the leaderboard</p>
              <Button variant="outline" size="sm">
                View Competitions
              </Button>
            </div>

            <div className="p-4 bg-muted rounded-lg">
              <div className="gradient-glow rounded-lg w-12 h-12 flex items-center justify-center mb-3">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Quiz Challenges</h4>
              <p className="text-sm text-muted-foreground mb-3">Test your knowledge and win rewards</p>
              <Button variant="outline" size="sm">
                Take Quiz
              </Button>
            </div>
          </div>
        </Card>
      </main>

      <BottomNavigation />
    </div>
  )
}
