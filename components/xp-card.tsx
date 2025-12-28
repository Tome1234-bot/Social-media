import { Card } from "@/components/ui/card"
import { Trophy, TrendingUp } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export function XPCard() {
  return (
    <Card className="p-4 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="gradient-glow rounded-lg p-2">
            <Trophy className="h-5 w-5 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-sm">Your XP</h3>
            <p className="text-xs text-muted-foreground">Community Performance</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-accent">2,450</p>
          <div className="flex items-center gap-1 text-xs text-success">
            <TrendingUp className="h-3 w-3" />
            <span>+12%</span>
          </div>
        </div>
      </div>
      <Progress value={65} className="h-2" />
      <p className="text-xs text-muted-foreground mt-2">Level 12 • 550 XP to next level</p>
    </Card>
  )
}
