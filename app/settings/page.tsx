import { Header } from "@/components/layout/header"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { User, Bell, Lock, Palette } from "lucide-react"

export default function SettingsPage() {
  return (
    <div className="min-h-screen pb-20">
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold mb-6">Settings</h1>

        <Tabs defaultValue="account" className="space-y-6">
          <TabsList className="w-full justify-start overflow-x-auto">
            <TabsTrigger value="account" className="gap-2">
              <User className="h-4 w-4" />
              Account
            </TabsTrigger>
            <TabsTrigger value="notifications" className="gap-2">
              <Bell className="h-4 w-4" />
              Notifications
            </TabsTrigger>
            <TabsTrigger value="privacy" className="gap-2">
              <Lock className="h-4 w-4" />
              Privacy
            </TabsTrigger>
            <TabsTrigger value="appearance" className="gap-2">
              <Palette className="h-4 w-4" />
              Appearance
            </TabsTrigger>
          </TabsList>

          <TabsContent value="account">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Account Settings</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" defaultValue="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="john@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Input id="bio" defaultValue="Full Stack Developer | Tech Enthusiast" />
                </div>
                <Button className="gradient-glow text-white border-0">Save Changes</Button>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="notifications">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Notification Preferences</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Post Interactions</p>
                    <p className="text-sm text-muted-foreground">Get notified when someone interacts with your posts</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">New Friend Requests</p>
                    <p className="text-sm text-muted-foreground">Receive alerts for new connection requests</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Community Updates</p>
                    <p className="text-sm text-muted-foreground">Stay updated with your communities</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Weekly Digest</p>
                    <p className="text-sm text-muted-foreground">Receive a weekly summary of activities</p>
                  </div>
                  <Switch />
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="privacy">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Privacy Settings</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Profile Visibility</p>
                    <p className="text-sm text-muted-foreground">Make your profile visible to everyone</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Show Activity Status</p>
                    <p className="text-sm text-muted-foreground">Let others see when you're online</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Allow Friend Requests</p>
                    <p className="text-sm text-muted-foreground">Allow others to send you connection requests</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="appearance">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Appearance</h3>
              <div className="space-y-4">
                <div>
                  <Label className="mb-3 block">Theme</Label>
                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" className="h-20 bg-transparent">
                      <div className="text-center">
                        <div className="w-8 h-8 rounded-full bg-white border-2 border-border mx-auto mb-2" />
                        <span>Light</span>
                      </div>
                    </Button>
                    <Button variant="outline" className="h-20 bg-transparent">
                      <div className="text-center">
                        <div className="w-8 h-8 rounded-full bg-foreground mx-auto mb-2" />
                        <span>Dark</span>
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
