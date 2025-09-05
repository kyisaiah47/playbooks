"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Sun, Truck, Church, PartyPopper, Calendar } from "lucide-react"

export function DaySchedule() {
  const [notes, setNotes] = useState({
    morning_prep: "",
    vendor_setup: "",
    ceremony_transition: "",
    reception_events: "",
    day_schedule: ""
  })

  useEffect(() => {
    const savedNotes = localStorage.getItem('wedding-schedule-notes')
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('wedding-schedule-notes', JSON.stringify(notes))
  }, [notes])

  const handleNotesChange = (field: keyof typeof notes, value: string) => {
    setNotes(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Wedding Day Schedule</h1>
        <p className="text-muted-foreground">Create a detailed timeline to keep your wedding day running smoothly for everyone involved.</p>
      </div>

      <Tabs defaultValue="morning" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="morning">Morning Prep</TabsTrigger>
          <TabsTrigger value="vendors">Vendors</TabsTrigger>
          <TabsTrigger value="ceremony">Ceremony</TabsTrigger>
          <TabsTrigger value="reception">Reception</TabsTrigger>
          <TabsTrigger value="schedule">My Notes</TabsTrigger>
        </TabsList>

        <TabsContent value="morning" className="space-y-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Sun className="h-5 w-5 text-primary" />
                  <CardTitle>Morning Preparation Schedule</CardTitle>
                </div>
                <CardDescription>Getting ready timeline for wedding party</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-semibold">Questions to Consider:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• What time do you need to start getting ready on wedding day?</li>
                    <li>• How will you coordinate hair and makeup for the wedding party?</li>
                    <li>• What's your timeline for getting dressed and final preparations?</li>
                    <li>• When and where will the wedding party gather before the ceremony?</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">Sample Morning Timeline:</h4>
                  <div className="bg-muted/30 p-3 rounded-lg text-sm text-muted-foreground">
                    <p>• Start at 8am for 4pm ceremony - allows time for photos</p>
                    <p>• Hair: 8-10am bride, 10-12pm bridesmaids; Makeup: 10-12pm bride</p>
                    <p>• Bride gets dressed at 1pm, photos at 1:30pm, party ready by 2pm</p>
                    <p>• Wedding party meets at venue at 3pm for final instructions</p>
                  </div>
                </div>
                <Card className="bg-muted/50">
                  <CardContent className="pt-4">
                    <Textarea
                      placeholder="Plan your morning preparation schedule including hair, makeup, getting dressed, and gathering times..."
                      value={notes.morning_prep}
                      onChange={(e) => handleNotesChange("morning_prep", e.target.value)}
                      rows={6}
                    />
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="vendors" className="space-y-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Truck className="h-5 w-5 text-primary" />
                  <CardTitle>Vendor & Setup Timeline</CardTitle>
                </div>
                <CardDescription>Coordination schedule for all wedding vendors</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-semibold">Questions to Consider:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• When do vendors need to arrive and complete their setup?</li>
                    <li>• Who will coordinate with vendors and handle any issues that arise?</li>
                    <li>• What's the timeline for ceremony setup and final decorating touches?</li>
                    <li>• How will you ensure all vendors have the information they need?</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">Vendor Timeline Example:</h4>
                  <div className="bg-muted/30 p-3 rounded-lg text-sm text-muted-foreground">
                    <p>• Florist: 10am setup, Caterer: 12pm prep, DJ: 2pm sound check</p>
                    <p>• Wedding coordinator or designated family member as point person</p>
                    <p>• Ceremony setup complete by 3pm, final touches by 3:30pm</p>
                    <p>• Vendor contact sheet with timeline and key coordinator phone numbers</p>
                  </div>
                </div>
                <Card className="bg-muted/50">
                  <CardContent className="pt-4">
                    <Textarea
                      placeholder="Plan your vendor coordination including arrival times, setup schedules, and point person responsibilities..."
                      value={notes.vendor_setup}
                      onChange={(e) => handleNotesChange("vendor_setup", e.target.value)}
                      rows={6}
                    />
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="ceremony" className="space-y-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Church className="h-5 w-5 text-primary" />
                  <CardTitle>Ceremony & Transition Schedule</CardTitle>
                </div>
                <CardDescription>Detailed ceremony timeline and photo transitions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-semibold">Questions to Consider:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• What's your detailed ceremony timeline from start to finish?</li>
                    <li>• How will you coordinate guest seating and wedding party lineup?</li>
                    <li>• What's your plan for transitioning from ceremony to cocktail hour?</li>
                    <li>• How long do you need for post-ceremony photos before joining guests?</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">Ceremony Timeline Example:</h4>
                  <div className="bg-muted/30 p-3 rounded-lg text-sm text-muted-foreground">
                    <p>• 3:30pm guests seated, 4pm processional, 4:30pm ceremony ends</p>
                    <p>• Ushers seat guests 30 min before, wedding party lines up at 3:55pm</p>
                    <p>• Guests to cocktail area while couple does photos for 45 minutes</p>
                    <p>• Family photos: 15 min, couple photos: 30 min, rejoin by 5:15pm</p>
                  </div>
                </div>
                <Card className="bg-muted/50">
                  <CardContent className="pt-4">
                    <Textarea
                      placeholder="Plan your ceremony timeline including guest seating, processional, ceremony length, and photo transitions..."
                      value={notes.ceremony_transition}
                      onChange={(e) => handleNotesChange("ceremony_transition", e.target.value)}
                      rows={6}
                    />
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="reception" className="space-y-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <PartyPopper className="h-5 w-5 text-primary" />
                  <CardTitle>Reception Timeline & Events</CardTitle>
                </div>
                <CardDescription>Reception flow, dinner, and celebration schedule</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-semibold">Questions to Consider:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• How will you structure the reception flow and key events?</li>
                    <li>• When will dinner be served and how will you coordinate courses?</li>
                    <li>• What's your timeline for speeches, dances, and special traditions?</li>
                    <li>• How will the evening wind down and what's your departure plan?</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">Reception Timeline Example:</h4>
                  <div className="bg-muted/30 p-3 rounded-lg text-sm text-muted-foreground">
                    <p>• 5:30pm cocktails, 6:30pm dinner, 8pm dancing starts</p>
                    <p>• Salad served after couple entrance, main course after toasts</p>
                    <p>• Toasts during dinner, first dance at 8pm, cake cutting at 9pm</p>
                    <p>• Last dance at 11pm, sparkler exit at 11:30pm, afterparty till 2am</p>
                  </div>
                </div>
                <Card className="bg-muted/50">
                  <CardContent className="pt-4">
                    <Textarea
                      placeholder="Plan your reception timeline including cocktails, dinner service, speeches, dancing, and departure..."
                      value={notes.reception_events}
                      onChange={(e) => handleNotesChange("reception_events", e.target.value)}
                      rows={6}
                    />
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="schedule" className="space-y-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Morning Preparation Schedule</CardTitle>
                <CardDescription>Getting ready timeline for wedding party</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Plan your morning preparation schedule including hair, makeup, getting dressed, and gathering times..."
                  value={notes.morning_prep}
                  onChange={(e) => handleNotesChange("morning_prep", e.target.value)}
                  rows={4}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Vendor & Setup Timeline</CardTitle>
                <CardDescription>Coordination schedule for all wedding vendors</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Plan your vendor coordination including arrival times, setup schedules, and responsibilities..."
                  value={notes.vendor_setup}
                  onChange={(e) => handleNotesChange("vendor_setup", e.target.value)}
                  rows={4}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Ceremony & Transition Schedule</CardTitle>
                <CardDescription>Detailed ceremony timeline and photo transitions</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Plan your ceremony timeline including guest seating, processional, ceremony length, and photo transitions..."
                  value={notes.ceremony_transition}
                  onChange={(e) => handleNotesChange("ceremony_transition", e.target.value)}
                  rows={4}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Reception Timeline & Events</CardTitle>
                <CardDescription>Reception flow, dinner, and celebration schedule</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Plan your reception timeline including cocktails, dinner service, speeches, dancing, and departure..."
                  value={notes.reception_events}
                  onChange={(e) => handleNotesChange("reception_events", e.target.value)}
                  rows={4}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Complete Wedding Day Schedule</CardTitle>
                <CardDescription>Your detailed timeline from morning to night</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Create your complete wedding day timeline from morning preparation through reception end..."
                  value={notes.day_schedule}
                  onChange={(e) => handleNotesChange("day_schedule", e.target.value)}
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