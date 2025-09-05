"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Users, ClipboardList, BarChart3, CheckCircle, Mail } from "lucide-react"

export function RSVP() {
  const [notes, setNotes] = useState({
    guest_organization: "",
    rsvp_process: "",
    tracking_management: "",
    final_headcount: "",
    personal_notes: ""
  })

  useEffect(() => {
    const savedNotes = localStorage.getItem('wedding-rsvp-notes')
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('wedding-rsvp-notes', JSON.stringify(notes))
  }, [notes])

  const handleNotesChange = (field: keyof typeof notes, value: string) => {
    setNotes(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Guest RSVP Tracking</h1>
        <p className="text-muted-foreground">Track guest responses and manage your final headcount for vendors.</p>
      </div>

      <Tabs defaultValue="organization" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="organization">Organization</TabsTrigger>
          <TabsTrigger value="collection">Collection</TabsTrigger>
          <TabsTrigger value="tracking">Tracking</TabsTrigger>
          <TabsTrigger value="headcount">Headcount</TabsTrigger>
          <TabsTrigger value="notes">My Notes</TabsTrigger>
        </TabsList>

        <TabsContent value="organization" className="space-y-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <CardTitle>Guest List Organization</CardTitle>
                </div>
                <CardDescription>Structure your guest list for easy management</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-semibold">Questions to Consider:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• How will you categorize your guests (family, friends, work, etc.)?</li>
                    <li>• What information do you need to collect from each guest?</li>
                    <li>• How will you track plus-ones and children?</li>
                    <li>• What's your process for handling late responses?</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">Organization Ideas:</h4>
                  <div className="bg-muted/30 p-3 rounded-lg text-sm text-muted-foreground">
                    <p>• Family (immediate, extended), Friends (close, college, work)</p>
                    <p>• Names, dietary restrictions, contact info, meal choice</p>
                    <p>• Note if +1 is confirmed and get their name/dietary needs</p>
                  </div>
                </div>
                <Card className="bg-muted/50">
                  <CardContent className="pt-4">
                    <Textarea
                      placeholder="Plan how you'll organize your guest list, categorize guests, and track important information..."
                      value={notes.guest_organization}
                      onChange={(e) => handleNotesChange("guest_organization", e.target.value)}
                      rows={6}
                    />
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="collection" className="space-y-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <CardTitle>RSVP Collection Process</CardTitle>
                </div>
                <CardDescription>How you'll gather responses from guests</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-semibold">Questions to Consider:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• What's your RSVP deadline and how will you communicate it?</li>
                    <li>• How will guests submit their responses (online, mail, phone)?</li>
                    <li>• What information will you include on RSVP cards?</li>
                    <li>• How will you follow up with non-responders?</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">Collection Methods:</h4>
                  <div className="bg-muted/30 p-3 rounded-lg text-sm text-muted-foreground">
                    <p>• RSVP by [date] - 3-4 weeks before wedding</p>
                    <p>• Wedding website, mail-in cards, or phone/text</p>
                    <p>• Attendance, meal choice, dietary restrictions, song requests</p>
                  </div>
                </div>
                <Card className="bg-muted/50">
                  <CardContent className="pt-4">
                    <Textarea
                      placeholder="Define your RSVP collection process, deadlines, methods, and follow-up procedures..."
                      value={notes.rsvp_process}
                      onChange={(e) => handleNotesChange("rsvp_process", e.target.value)}
                      rows={6}
                    />
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="tracking" className="space-y-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  <CardTitle>Tracking & Management</CardTitle>
                </div>
                <CardDescription>System for managing responses as they come in</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-semibold">Questions to Consider:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• How will you track responses as they come in?</li>
                    <li>• What's your system for updating vendors with headcounts?</li>
                    <li>• How will you handle dietary restrictions and special requests?</li>
                    <li>• What's your backup plan for last-minute changes?</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">Tracking Systems:</h4>
                  <div className="bg-muted/30 p-3 rounded-lg text-sm text-muted-foreground">
                    <p>• Spreadsheet with guest name, response date, meal choice</p>
                    <p>• Update caterer weekly with running count</p>
                    <p>• Create separate list of all dietary needs for caterer</p>
                  </div>
                </div>
                <Card className="bg-muted/50">
                  <CardContent className="pt-4">
                    <Textarea
                      placeholder="Describe your system for tracking responses, managing dietary restrictions, and updating vendors..."
                      value={notes.tracking_management}
                      onChange={(e) => handleNotesChange("tracking_management", e.target.value)}
                      rows={6}
                    />
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="headcount" className="space-y-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <CardTitle>Final Headcount Planning</CardTitle>
                </div>
                <CardDescription>Finalizing numbers for vendors and seating</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-semibold">Questions to Consider:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• When do you need to give final numbers to vendors?</li>
                    <li>• How will you handle the gap between RSVP deadline and vendor deadline?</li>
                    <li>• What's your plan for seating arrangement based on responses?</li>
                    <li>• How will you communicate final details to confirmed guests?</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">Finalization Process:</h4>
                  <div className="bg-muted/30 p-3 rounded-lg text-sm text-muted-foreground">
                    <p>• Final count to caterer 1 week before wedding</p>
                    <p>• Follow up with non-responders personally</p>
                    <p>• Use RSVP list to create seating chart</p>
                  </div>
                </div>
                <Card className="bg-muted/50">
                  <CardContent className="pt-4">
                    <Textarea
                      placeholder="Plan your final headcount process, vendor deadlines, and seating arrangements..."
                      value={notes.final_headcount}
                      onChange={(e) => handleNotesChange("final_headcount", e.target.value)}
                      rows={6}
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
                <CardTitle>Guest List Organization</CardTitle>
                <CardDescription>Plan how you'll organize and categorize your guest list</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Record your guest list organization strategy, categories, and tracking methods..."
                  value={notes.guest_organization}
                  onChange={(e) => handleNotesChange("guest_organization", e.target.value)}
                  rows={4}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>RSVP Collection Process</CardTitle>
                <CardDescription>Define your process for gathering guest responses</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Outline your RSVP collection methods, deadlines, and follow-up procedures..."
                  value={notes.rsvp_process}
                  onChange={(e) => handleNotesChange("rsvp_process", e.target.value)}
                  rows={4}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Response Tracking</CardTitle>
                <CardDescription>System for managing responses and updating vendors</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Describe your tracking system, dietary restrictions management, and vendor updates..."
                  value={notes.tracking_management}
                  onChange={(e) => handleNotesChange("tracking_management", e.target.value)}
                  rows={4}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Final Headcount Planning</CardTitle>
                <CardDescription>Process for finalizing guest numbers and seating</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Plan your final headcount process, vendor deadlines, and seating arrangements..."
                  value={notes.final_headcount}
                  onChange={(e) => handleNotesChange("final_headcount", e.target.value)}
                  rows={4}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>General RSVP Notes</CardTitle>
                <CardDescription>Overall RSVP thoughts, decisions, and reminders</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Record general RSVP considerations, decisions, timeline reminders..."
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