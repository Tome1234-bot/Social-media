import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, ThumbsUp, MoreHorizontal } from "lucide-react"
import { cn } from "@/lib/utils"

interface PostCardProps {
  author: {
    name: string
    avatar: string
    badge?: string
  }
  content: string
  timestamp: string
  badge: "red" | "yellow" | "green"
  engagement: {
    comments: number
    votes: number
  }
  type?: "post" | "discussion" | "question"
}

export function PostCard({ author, content, timestamp, badge, engagement, type = "post" }: PostCardProps) {
  const badgeColors = {
    red: "bg-destructive text-destructive-foreground",
    yellow: "bg-warning text-foreground",
    green: "bg-success text-white",
  }

  return (
    <Card className="p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-3">
        <Avatar className="h-10 w-10">
          <AvatarImage src={author.avatar || "/placeholder.svg"} />
          <AvatarFallback>{author.name[0]}</AvatarFallback>
        </Avatar>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <h4 className="font-semibold text-sm">{author.name}</h4>
              {author.badge && (
                <Badge variant="secondary" className="text-xs">
                  {author.badge}
                </Badge>
              )}
              <Badge className={cn("text-xs", badgeColors[badge])}>
                {badge === "red" ? "Hot" : badge === "yellow" ? "Trending" : "Top"}
              </Badge>
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mb-1">{timestamp}</p>
          <p className="text-sm leading-relaxed mb-3">{content}</p>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="gap-2">
              <ThumbsUp className="h-4 w-4" />
              <span className="text-xs">{engagement.votes}</span>
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              <MessageCircle className="h-4 w-4" />
              <span className="text-xs">{engagement.comments}</span>
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
}
