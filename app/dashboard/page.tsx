import { Header } from "@/components/layout/header"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Trophy, TrendingUp, Zap, Gift, Crown, Target } from "lucide-react"

const challenges = [
  { title: "Complete 5 Tutorials", progress: 60, reward: 250 },
  { title: "Answer 10 Questions", progress: 40, reward: 300 },
  { title: "Join 3 New Communities", progress: 33, reward: 150 },
]

const bonuses = [
  { name: "Post Reach Coupon", quantity: 3, icon: TrendingUp },
  { name: "Premium Badge", quantity: 1, icon: Crown },
  { name: "XP Multiplier (7 days)", quantity: 2, icon: Zap },
]

export default function DashboardPage() {
  return (
    <div className="min-h-screen pb-20">
      <Header />

      <main className="max-w-screen-xl mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">Your Dashboard</h1>
          <p className="text-muted-foreground">Track your progress and manage your rewards</p>
        </div>

        {/* Social Points Balance */}
        <Card className="p-6 mb-6 bg-gradient-to-br from-primary to-accent relative overflow-hidden">
          <div className="absolute top-0 right-0 opacity-10">
            <Trophy className="h-32 w-32" />
          </div>
          <div className="relative z-10">
            <p className="text-primary-foreground/80 text-sm font-medium mb-2">Total Balance</p>
            <h2 className="text-5xl font-bold text-primary-foreground mb-4">2,450 SP</h2>
            <div className="flex items-center gap-2 text-primary-foreground/90">
              <TrendingUp className="h-5 w-5" />
              <span className="text-sm">+320 SP this week</span>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Weekly Challenges */}
          <Card className="p-6 lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Target className="h-6 w-6 text-accent" />
                Weekly Challenges
              </h3>
              <Badge variant="secondary">3 Active</Badge>
            </div>

            <div className="space-y-4">
              {challenges.map((challenge, index) => (
                <div key={index} className="p-4 bg-muted rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">{challenge.title}</h4>
                    <div className="flex items-center gap-1 text-accent font-bold">
                      <Trophy className="h-4 w-4" />
                      <span>{challenge.reward} SP</span>
                    </div>
                  </div>
                  <Progress value={challenge.progress} className="h-2 mb-2" />
                  <p className="text-xs text-muted-foreground">{challenge.progress}% complete</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Tips to Earn More */}
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Zap className="h-6 w-6 text-accent" />
              Earn More SP
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="gradient-glow rounded p-1.5 mt-0.5">
                  <span className="text-white text-xs font-bold">+50</span>
                </div>
                <div>
                  <p className="text-sm font-medium">Daily Login</p>
                  <p className="text-xs text-muted-foreground">Visit every day</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="gradient-glow rounded p-1.5 mt-0.5">
                  <span className="text-white text-xs font-bold">+100</span>
                </div>
                <div>
                  <p className="text-sm font-medium">Create Quality Content</p>
                  <p className="text-xs text-muted-foreground">Post with high engagement</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="gradient-glow rounded p-1.5 mt-0.5">
                  <span className="text-white text-xs font-bold">+75</span>
                </div>
                <div>
                  <p className="text-sm font-medium">Help Others</p>
                  <p className="text-xs text-muted-foreground">Answer questions</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="gradient-glow rounded p-1.5 mt-0.5">
                  <span className="text-white text-xs font-bold">+200</span>
                </div>
                <div>
                  <p className="text-sm font-medium">Join Skillsphere</p>
                  <p className="text-xs text-muted-foreground">2x XP in your sphere</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Your Bonuses */}
        <Card className="p-6 mt-6">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Gift className="h-6 w-6 text-accent" />
            Your Bonuses & Unlocked Features
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {bonuses.map((bonus, index) => {
              const Icon = bonus.icon
              return (
                <div key={index} className="p-4 border border-border rounded-lg hover:border-accent transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <div className="gradient-glow rounded-lg p-2">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <Badge variant="secondary">{bonus.quantity}x</Badge>
                  </div>
                  <h4 className="font-semibold text-sm mb-1">{bonus.name}</h4>
                  <Button size="sm" variant="outline" className="w-full mt-2 bg-transparent">
                    Use Now
                  </Button>
                </div>
              )
            })}
          </div>

          {/* Premium Features */}
          <div className="mt-6 pt-6 border-t border-border">
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <Crown className="h-5 w-5 text-accent" />
              Premium Features Unlocked
            </h4>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="bg-accent/10 text-accent">
                Advanced Analytics
              </Badge>
              <Badge variant="secondary" className="bg-accent/10 text-accent">
                Priority Support
              </Badge>
              <Badge variant="secondary" className="bg-accent/10 text-accent">
                Custom Profile Badge
              </Badge>
              <Badge variant="secondary" className="bg-accent/10 text-accent">
                Ad-Free Experience
              </Badge>
              <Badge variant="secondary" className="bg-accent/10 text-accent">
                Early Access
              </Badge>
            </div>
          </div>
        </Card>
      </main>
    </div>
  )
}
