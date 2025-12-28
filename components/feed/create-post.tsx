import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageSquare, HelpCircle, Users } from "lucide-react"
import Link from "next/link"

export function CreatePost() {
  return (
    <Card className="p-4">
      <div className="flex gap-3">
        <Link href="/profile/me">
          <Avatar className="h-10 w-10 cursor-pointer hover:opacity-80 transition-opacity">
            <AvatarImage src="/placeholder.svg?height=40&width=40" />
            <AvatarFallback>ME</AvatarFallback>
          </Avatar>
        </Link>

        <div className="flex-1">
          <Button
            variant="outline"
            className="w-full justify-start text-muted-foreground hover:text-foreground bg-transparent"
          >
            What's on your mind?
          </Button>

          <Tabs defaultValue="post" className="mt-3">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="post" className="gap-2">
                <MessageSquare className="h-4 w-4" />
                <span className="hidden sm:inline">Post</span>
              </TabsTrigger>
              <TabsTrigger value="discussion" className="gap-2">
                <Users className="h-4 w-4" />
                <span className="hidden sm:inline">Discussion</span>
              </TabsTrigger>
              <TabsTrigger value="question" className="gap-2">
                <HelpCircle className="h-4 w-4" />
                <span className="hidden sm:inline">Question</span>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>
    </Card>
  )
}
