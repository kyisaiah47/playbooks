"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { FileSpreadsheet, Mail, Edit, CheckSquare, Heart } from "lucide-react"

export function ThankYou() {
  const [notes, setNotes] = useState({
    gift_tracking: "",
    note_planning: "",
    writing_content: "",
    organization: "",
    thank_you_plan: ""
  })

  useEffect(() => {
    const savedNotes = localStorage.getItem('wedding-thankyou-notes')
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('wedding-thankyou-notes', JSON.stringify(notes))
  }, [notes])

  const handleNotesChange = (field: keyof typeof notes, value: string) => {
    setNotes(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Thank You Card Tracking</h1>
        <p className="text-muted-foreground">Organize and track your wedding thank you notes to ensure everyone feels appreciated.</p>
      </div>

      <Tabs defaultValue="tracking" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="tracking">Gift Tracking</TabsTrigger>
          <TabsTrigger value="planning">Note Planning</TabsTrigger>
          <TabsTrigger value="writing">Writing Strategy</TabsTrigger>
          <TabsTrigger value="organization">Organization</TabsTrigger>
          <TabsTrigger value="plan">My Notes</TabsTrigger>
        </TabsList>

        <TabsContent value="tracking" className="space-y-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <FileSpreadsheet className="h-5 w-5 text-primary" />
                  <CardTitle>Gift & Guest Tracking</CardTitle>
                </div>
                <CardDescription>System for recording gifts and guest information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-semibold">Questions to Consider:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• How will you track what gifts you received from each guest?</li>
                    <li>• What system will you use to record guest information and addresses?</li>
                    <li>• How will you handle gifts that arrive before vs. after the wedding?</li>
                    <li>• What's your plan for tracking cash gifts and gift cards?</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">Tracking Methods:</h4>
                  <div className="bg-muted/30 p-3 rounded-lg text-sm text-muted-foreground">
                    <p>• Spreadsheet with guest name, gift description, date received</p>
                    <p>• Collect addresses during RSVP process or from family/friends</p>
                    <p>• Log engagement and shower gifts separately from wedding gifts</p>
                    <p>• Record exact cash amounts and gift card stores/values</p>
                  </div>
                </div>
                <Card className="bg-muted/50">
                  <CardContent className="pt-4">
                    <Textarea
                      placeholder="Design your gift tracking system including what information to record and how to organize it..."
                      value={notes.gift_tracking}
                      onChange={(e) => handleNotesChange("gift_tracking", e.target.value)}
                      rows={6}
                    />
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="planning" className="space-y-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <CardTitle>Thank You Note Planning</CardTitle>
                </div>
                <CardDescription>Style, format, and logistics of your thank you cards</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-semibold">Questions to Consider:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• What style and format do you want for your thank you cards?</li>
                    <li>• How will you personalize each note to mention specific gifts?</li>
                    <li>• Who will write the notes and how will you divide the task?</li>
                    <li>• What's your timeline for sending thank you cards?</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">Planning Considerations:</h4>
                  <div className="bg-muted/30 p-3 rounded-lg text-sm text-muted-foreground">
                    <p>• Photo cards from wedding, classic stationery, or custom design</p>
                    <p>• Mention specific gift and how you'll use/enjoy it</p>
                    <p>• Bride writes to her side, groom to his side, or alternate</p>
                    <p>• Send within 3 months of wedding, 2 weeks for shower/engagement gifts</p>
                  </div>
                </div>
                <Card className="bg-muted/50">
                  <CardContent className="pt-4">
                    <Textarea
                      placeholder="Plan your thank you card style, personalization approach, writing division, and timeline..."
                      value={notes.note_planning}
                      onChange={(e) => handleNotesChange("note_planning", e.target.value)}
                      rows={6}
                    />
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="writing" className="space-y-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Edit className="h-5 w-5 text-primary" />
                  <CardTitle>Writing & Content Strategy</CardTitle>
                </div>
                <CardDescription>Tone, content, and personalization approach</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-semibold">Questions to Consider:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• What key elements will you include in every thank you note?</li>
                    <li>• How will you handle different types of gifts (experiences, cash, handmade)?</li>
                    <li>• What tone and style reflects your personality as a couple?</li>
                    <li>• How will you make each note feel personal and heartfelt?</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">Writing Guidelines:</h4>
                  <div className="bg-muted/30 p-3 rounded-lg text-sm text-muted-foreground">
                    <p>• Thank for specific gift, mention how you'll use it, express gratitude</p>
                    <p>• Cash: 'generous gift will help with our home/honeymoon goals'</p>
                    <p>• Warm and genuine, formal vs. casual based on your relationship</p>
                    <p>• Reference their presence at wedding, shared memories, future plans</p>
                  </div>
                </div>
                <Card className="bg-muted/50">
                  <CardContent className="pt-4">
                    <Textarea
                      placeholder="Develop your writing strategy including key elements, tone, and approaches for different gift types..."
                      value={notes.writing_content}
                      onChange={(e) => handleNotesChange("writing_content", e.target.value)}
                      rows={6}
                    />
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="organization" className="space-y-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CheckSquare className="h-5 w-5 text-primary" />
                  <CardTitle>Organization & Follow-Through</CardTitle>
                </div>
                <CardDescription>System for staying organized and meeting deadlines</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-semibold">Questions to Consider:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• How will you stay organized and ensure no one is missed?</li>
                    <li>• What's your system for tracking completed vs. pending thank you notes?</li>
                    <li>• How will you handle late gifts or gifts that arrive after you've sent cards?</li>
                    <li>• What's your backup plan if you fall behind on your timeline?</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">Organization Methods:</h4>
                  <div className="bg-muted/30 p-3 rounded-lg text-sm text-muted-foreground">
                    <p>• Check off names as notes are written and mailed</p>
                    <p>• Use spreadsheet status column or physical checklist system</p>
                    <p>• Send separate thank you note for late gifts within 2 weeks of receipt</p>
                    <p>• Set weekly goals, ask family to help with addressing envelopes</p>
                  </div>
                </div>
                <Card className="bg-muted/50">
                  <CardContent className="pt-4">
                    <Textarea
                      placeholder="Plan your organization system for tracking progress, handling late gifts, and staying on schedule..."
                      value={notes.organization}
                      onChange={(e) => handleNotesChange("organization", e.target.value)}
                      rows={6}
                    />
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="plan" className="space-y-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Gift & Guest Tracking</CardTitle>
                <CardDescription>System for recording gifts and guest information</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Design your gift tracking system including what information to record and how to organize it..."
                  value={notes.gift_tracking}
                  onChange={(e) => handleNotesChange("gift_tracking", e.target.value)}
                  rows={4}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Thank You Note Planning</CardTitle>
                <CardDescription>Style, format, and logistics of your thank you cards</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Plan your thank you card style, personalization approach, and timeline..."
                  value={notes.note_planning}
                  onChange={(e) => handleNotesChange("note_planning", e.target.value)}
                  rows={4}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Writing & Content Strategy</CardTitle>
                <CardDescription>Tone, content, and personalization approach</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Develop your writing strategy including key elements and approaches for different gift types..."
                  value={notes.writing_content}
                  onChange={(e) => handleNotesChange("writing_content", e.target.value)}
                  rows={4}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Organization & Follow-Through</CardTitle>
                <CardDescription>System for staying organized and meeting deadlines</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Plan your organization system for tracking progress and staying on schedule..."
                  value={notes.organization}
                  onChange={(e) => handleNotesChange("organization", e.target.value)}
                  rows={4}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Complete Thank You Plan</CardTitle>
                <CardDescription>Your comprehensive thank you note strategy and timeline</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Create your comprehensive thank you card plan including tracking, style, writing approach, and timeline..."
                  value={notes.thank_you_plan}
                  onChange={(e) => handleNotesChange("thank_you_plan", e.target.value)}
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