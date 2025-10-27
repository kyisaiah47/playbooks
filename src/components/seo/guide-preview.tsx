import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { CalendarIcon, DollarSign, Users, CheckCircle2, MapPin, Heart } from "lucide-react"

interface TemplatePreviewProps {
  templateType: 'wedding' | 'baby' | 'home-buying'
}

export function TemplatePreview({ templateType }: TemplatePreviewProps) {
  if (templateType !== 'wedding') {
    return <div>Preview for {templateType} coming soon...</div>
  }

  return (
    <div id="preview" className="max-w-6xl mx-auto">
      <div className="bg-gradient-to-br from-background to-muted/50 rounded-2xl p-8 border shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b">
          <div>
            <h3 className="text-xl font-semibold">Wedding Overview - Sarah & Michael</h3>
            <p className="text-muted-foreground">Your wedding planning dashboard</p>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="text-sm">
              <CalendarIcon className="mr-1 h-3 w-3" />
              June 15, 2024
            </Badge>
            <Badge variant="outline" className="text-sm">
              <CalendarIcon className="mr-1 h-3 w-3" />
              127 days left
            </Badge>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="border-0 shadow-sm">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-muted-foreground">Days Until</span>
                <CalendarIcon className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="text-2xl font-bold">127</div>
              <p className="text-xs text-muted-foreground">June 15, 2024 at 4:00 PM</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-muted-foreground">Budget Progress</span>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="text-2xl font-bold">$28,500</div>
              <p className="text-xs text-muted-foreground mb-2">of $45,000 total budget</p>
              <Progress value={63.3} className="h-1" />
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-muted-foreground">Guest RSVPs</span>
                <Users className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="text-2xl font-bold">127</div>
              <p className="text-xs text-muted-foreground mb-2">of 180 invited guests</p>
              <Progress value={70.5} className="h-1" />
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-muted-foreground">Tasks Complete</span>
                <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="text-2xl font-bold">34</div>
              <p className="text-xs text-muted-foreground mb-2">of 52 total tasks</p>
              <Progress value={65.4} className="h-1" />
            </CardContent>
          </Card>
        </div>

        {/* Details Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              <h4 className="font-semibold mb-4">Wedding Details</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Rosewood Country Club</p>
                    <p className="text-xs text-muted-foreground">Ceremony Venue</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Grand Ballroom</p>
                    <p className="text-xs text-muted-foreground">Reception Venue</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Heart className="h-4 w-4 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Garden Party Elegant</p>
                    <p className="text-xs text-muted-foreground">Wedding Style</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              <h4 className="font-semibold mb-4">Vendor Status</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Photography</span>
                  </div>
                  <Badge variant="secondary" className="text-xs">Booked</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Catering</span>
                  </div>
                  <Badge variant="secondary" className="text-xs">Confirmed</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm">Florist</span>
                  </div>
                  <Badge variant="outline" className="text-xs">In Progress</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-destructive rounded-full"></div>
                    <span className="text-sm">Band</span>
                  </div>
                  <Badge variant="destructive" className="text-xs">Pending</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center pt-4 border-t">
          <p className="text-muted-foreground mb-4">Ready to start planning your perfect wedding?</p>
          <Button size="lg" className="text-lg px-8">
            Start Using This Guide
          </Button>
        </div>
      </div>
    </div>
  )
}