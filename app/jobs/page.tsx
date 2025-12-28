import { Header } from "@/components/layout/header"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, MapPin, Clock, DollarSign, Briefcase } from "lucide-react"

const jobs = [
  {
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    location: "Remote",
    type: "Full-time",
    budget: "$120k - $150k",
    spCost: 50,
    posted: "2 days ago",
    description: "Looking for an experienced React developer to join our team...",
    skills: ["React", "TypeScript", "Next.js"],
  },
  {
    title: "UI/UX Designer",
    company: "Design Studio",
    location: "New York, NY",
    type: "Contract",
    budget: "$80/hour",
    spCost: 35,
    posted: "5 days ago",
    description: "We need a talented designer for a 3-month project...",
    skills: ["Figma", "UI Design", "Prototyping"],
  },
  {
    title: "Full Stack Engineer",
    company: "StartupXYZ",
    location: "San Francisco, CA",
    type: "Full-time",
    budget: "$100k - $140k",
    spCost: 45,
    posted: "1 week ago",
    description: "Join our fast-growing startup building the future of...",
    skills: ["Node.js", "React", "MongoDB"],
  },
]

export default function JobsPage() {
  return (
    <div className="min-h-screen pb-20">
      <Header />

      <main className="max-w-screen-xl mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">Find Your Next Opportunity</h1>
          <p className="text-muted-foreground">Apply to jobs using your social points</p>
        </div>

        {/* Search Bar */}
        <div className="flex gap-2 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input placeholder="Search jobs, companies, or skills..." className="pl-10" />
          </div>
          <Button className="gradient-glow text-white border-0">Search</Button>
        </div>

        {/* Job Listings */}
        <div className="space-y-4">
          {jobs.map((job, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{job.title}</h3>
                      <p className="text-muted-foreground">{job.company}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Briefcase className="h-4 w-4" />
                      {job.type}
                    </span>
                    <span className="flex items-center gap-1">
                      <DollarSign className="h-4 w-4" />
                      {job.budget}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {job.posted}
                    </span>
                  </div>

                  <p className="text-sm mb-3 leading-relaxed">{job.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col items-end gap-2">
                  <div className="text-right mb-2">
                    <p className="text-sm text-muted-foreground">Application Cost</p>
                    <div className="gradient-glow rounded-lg px-3 py-1">
                      <span className="text-white font-bold">{job.spCost} SP</span>
                    </div>
                  </div>
                  <Button className="w-full md:w-auto">Apply Now</Button>
                  <Button variant="outline" className="w-full md:w-auto bg-transparent">
                    Save
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}
