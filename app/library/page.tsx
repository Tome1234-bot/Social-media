import { Header } from "@/components/layout/header"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Download, Trophy, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

const courses = [
  {
    title: "Advanced React Patterns",
    progress: 75,
    modules: "12/16",
    thumbnail: "/react-course.jpg",
  },
  {
    title: "Node.js Microservices",
    progress: 45,
    modules: "9/20",
    thumbnail: "/nodejs-course.jpg",
  },
  {
    title: "UI/UX Design Fundamentals",
    progress: 90,
    modules: "18/20",
    thumbnail: "/uiux-course.jpg",
  },
]

const downloads = [
  { title: "CSS Grid Mastery Tutorial", size: "45 MB", date: "2 days ago" },
  { title: "JavaScript ES2024 Features", size: "28 MB", date: "1 week ago" },
  { title: "Docker for Beginners", size: "67 MB", date: "2 weeks ago" },
]

export default function LibraryPage() {
  return (
    <div className="min-h-screen pb-20">
      <Header />

      <main className="max-w-screen-xl mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold mb-6">Your Library</h1>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="h-5 w-5 text-accent" />
              <p className="text-sm text-muted-foreground">Courses</p>
            </div>
            <p className="text-2xl font-bold">12</p>
            <p className="text-xs text-muted-foreground">3 in progress</p>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <Trophy className="h-5 w-5 text-accent" />
              <p className="text-sm text-muted-foreground">Quizzes</p>
            </div>
            <p className="text-2xl font-bold">45</p>
            <p className="text-xs text-success">32 won</p>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <Download className="h-5 w-5 text-accent" />
              <p className="text-sm text-muted-foreground">Downloads</p>
            </div>
            <p className="text-2xl font-bold">28</p>
            <p className="text-xs text-muted-foreground">1.2 GB</p>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="h-5 w-5 text-accent" />
              <p className="text-sm text-muted-foreground">Challenges</p>
            </div>
            <p className="text-2xl font-bold">18</p>
            <p className="text-xs text-muted-foreground">Participated</p>
          </Card>
        </div>

        <Tabs defaultValue="courses" className="mb-6">
          <TabsList>
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="downloads">Downloads</TabsTrigger>
            <TabsTrigger value="quizzes">Quizzes</TabsTrigger>
            <TabsTrigger value="challenges">Challenges</TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Courses Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Your Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {courses.map((course, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={course.thumbnail || "/placeholder.svg"}
                  alt={course.title}
                  className="w-full h-32 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold mb-2 line-clamp-1">{course.title}</h3>
                  <div className="mb-3">
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                      <span>{course.modules} modules</span>
                      <span>{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                  </div>
                  {course.progress === 90 ? (
                    <Badge variant="secondary" className="bg-success text-white w-full justify-center">
                      Almost Done!
                    </Badge>
                  ) : (
                    <Button variant="outline" className="w-full bg-transparent" size="sm">
                      Continue Learning
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Downloaded Videos */}
        <div>
          <h2 className="text-xl font-bold mb-4">Downloaded Videos</h2>
          <Card className="p-4">
            <div className="space-y-3">
              {downloads.map((download, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="gradient-glow rounded p-2">
                      <Download className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{download.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {download.size} • {download.date}
                      </p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    Open
                  </Button>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </main>
    </div>
  )
}
