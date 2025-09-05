"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, CheckCircle, Clock, AlertCircle, Star } from "lucide-react"

export function Timeline() {
  const [notes, setNotes] = useState({
    early_planning: "",
    mid_planning: "",
    final_month: "",
    wedding_day: "",
    personal_notes: ""
  })

  useEffect(() => {
    const savedNotes = localStorage.getItem('wedding-timeline-notes')
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('wedding-timeline-notes', JSON.stringify(notes))
  }, [notes])

  const handleNotesChange = (field: keyof typeof notes, value: string) => {
    setNotes(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Wedding Timeline & Countdown</h1>
        <p className="text-muted-foreground">Track important milestones and create your wedding day timeline.</p>
      </div>

      <Tabs defaultValue="early-planning" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="early-planning">Early Planning</TabsTrigger>
          <TabsTrigger value="mid-planning">Mid Planning</TabsTrigger>
          <TabsTrigger value="final-month">Final Month</TabsTrigger>
          <TabsTrigger value="wedding-day">Wedding Day</TabsTrigger>
          <TabsTrigger value="notes">My Notes</TabsTrigger>
        </TabsList>

        <TabsContent value="early-planning" className="space-y-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CalendarIcon className="h-5 w-5 text-primary" />
                  <CardTitle>12+ Months Before Wedding</CardTitle>
                </div>
                <CardDescription>Foundation planning and major bookings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-semibold">Key Questions to Consider:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• What's your ideal wedding date and backup options?</li>
                    <li>• What's your overall budget and how will you allocate it?</li>
                    <li>• Who will be on your guest list and what's your target headcount?</li>
                    <li>• What venues align with your vision and budget?</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">Major Tasks to Complete:</h4>
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Book your venue and set the date</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Create initial guest list with addresses</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Research and book your photographer</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Start shopping for wedding dress</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Consider hiring a wedding planner</span>
                    </div>
                  </div>
                </div>
                <Card className="bg-muted/50">
                  <CardContent className="pt-4">
                    <Textarea
                      placeholder="Track your early planning progress, vendor research, and initial decisions..."
                      value={notes.early_planning}
                      onChange={(e) => handleNotesChange("early_planning", e.target.value)}
                      rows={4}
                    />
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="mid-planning" className="space-y-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <CardTitle>6 Months Before Wedding</CardTitle>
                </div>
                <CardDescription>Vendor bookings and invitation planning</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-semibold">Key Questions to Consider:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• What vendors do you still need to book?</li>
                    <li>• How will you communicate the date to guests?</li>
                    <li>• What's your catering style and menu preferences?</li>
                    <li>• Who will officiate your ceremony?</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">Major Tasks to Complete:</h4>
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Send save-the-dates</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Book caterer, florist, and DJ/band</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Order wedding invitations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Plan your honeymoon</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Register for gifts</span>
                    </div>
                  </div>
                </div>
                <Card className="bg-muted/50">
                  <CardContent className="pt-4">
                    <Textarea
                      placeholder="Track mid-planning tasks, vendor communications, and invitation details..."
                      value={notes.mid_planning}
                      onChange={(e) => handleNotesChange("mid_planning", e.target.value)}
                      rows={4}
                    />
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="final-month" className="space-y-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-primary" />
                  <CardTitle>Final Month Before Wedding</CardTitle>
                </div>
                <CardDescription>Final preparations and coordination</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-semibold">Key Questions to Consider:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• What are your final headcount numbers?</li>
                    <li>• How will you coordinate with all your vendors?</li>
                    <li>• What last-minute details need attention?</li>
                    <li>• Who's responsible for day-of coordination?</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">Critical Tasks to Complete:</h4>
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Final dress fitting and pickup</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Confirm details with all vendors</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Create day-of timeline for wedding party</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Prepare rehearsal dinner plans</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Pack for honeymoon</span>
                    </div>
                  </div>
                </div>
                <Card className="bg-muted/50">
                  <CardContent className="pt-4">
                    <Textarea
                      placeholder="Track final month preparations, vendor confirmations, and last-minute details..."
                      value={notes.final_month}
                      onChange={(e) => handleNotesChange("final_month", e.target.value)}
                      rows={4}
                    />
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="wedding-day" className="space-y-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-primary" />
                  <CardTitle>Wedding Day & Beyond</CardTitle>
                </div>
                <CardDescription>Day-of timeline and post-wedding plans</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-semibold">Key Questions to Consider:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• What's your ideal wedding day timeline?</li>
                    <li>• How will you handle any last-minute issues?</li>
                    <li>• What are your post-wedding plans?</li>
                    <li>• How will you preserve your wedding memories?</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">Sample Wedding Day Timeline:</h4>
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="w-16 justify-center text-xs">9:00 AM</Badge>
                      <span className="text-sm">Hair & makeup start</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="w-16 justify-center text-xs">12:00 PM</Badge>
                      <span className="text-sm">Hair & makeup complete</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="w-16 justify-center text-xs">2:00 PM</Badge>
                      <span className="text-sm">Photography begins</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="w-16 justify-center text-xs">4:00 PM</Badge>
                      <span className="text-sm">Ceremony starts</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="w-16 justify-center text-xs">5:00 PM</Badge>
                      <span className="text-sm">Cocktails & reception</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="w-16 justify-center text-xs">11:00 PM</Badge>
                      <span className="text-sm">Reception ends</span>
                    </div>
                  </div>
                </div>
                <Card className="bg-muted/50">
                  <CardContent className="pt-4">
                    <Textarea
                      placeholder="Create your detailed wedding day timeline and post-wedding plans..."
                      value={notes.wedding_day}
                      onChange={(e) => handleNotesChange("wedding_day", e.target.value)}
                      rows={4}
                    />
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="notes" className="space-y-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Early Planning Notes</CardTitle>
                <CardDescription>12+ months before wedding thoughts and planning</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Venue booking, photographer selection, initial planning thoughts..."
                  value={notes.early_planning}
                  onChange={(e) => handleNotesChange("early_planning", e.target.value)}
                  rows={4}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Mid-Planning Notes</CardTitle>
                <CardDescription>6 months before wedding planning and coordination</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Vendor bookings, invitation planning, coordination details..."
                  value={notes.mid_planning}
                  onChange={(e) => handleNotesChange("mid_planning", e.target.value)}
                  rows={4}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Final Month Notes</CardTitle>
                <CardDescription>Last-minute preparations and final details</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Final preparations, vendor confirmations, last-minute details..."
                  value={notes.final_month}
                  onChange={(e) => handleNotesChange("final_month", e.target.value)}
                  rows={4}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Wedding Day Timeline</CardTitle>
                <CardDescription>Detailed day-of schedule and timeline</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Hour-by-hour wedding day timeline, vendor coordination, emergency contacts..."
                  value={notes.wedding_day}
                  onChange={(e) => handleNotesChange("wedding_day", e.target.value)}
                  rows={4}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>General Timeline Notes</CardTitle>
                <CardDescription>Overall planning thoughts and considerations</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="General timeline thoughts, buffer time considerations, backup plans..."
                  value={notes.personal_notes}
                  onChange={(e) => handleNotesChange("personal_notes", e.target.value)}
                  rows={4}
                />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}