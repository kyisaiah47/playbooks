"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Camera, Clock, Users, PartyPopper, Image } from "lucide-react"

export function Photos() {
  const [notes, setNotes] = useState({
    pre_ceremony: "",
    ceremony: "",
    family_groups: "",
    reception: "",
    shot_list: ""
  })

  useEffect(() => {
    const savedNotes = localStorage.getItem('wedding-photos-notes')
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('wedding-photos-notes', JSON.stringify(notes))
  }, [notes])

  const handleNotesChange = (field: keyof typeof notes, value: string) => {
    setNotes(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Photography Shot List</h1>
        <p className="text-muted-foreground">Create a comprehensive shot list to ensure your photographer captures all the important moments.</p>
      </div>

      <Tabs defaultValue="pre-ceremony" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="pre-ceremony">Pre-Ceremony</TabsTrigger>
          <TabsTrigger value="ceremony">Ceremony</TabsTrigger>
          <TabsTrigger value="groups">Groups</TabsTrigger>
          <TabsTrigger value="reception">Reception</TabsTrigger>
          <TabsTrigger value="shot-list">My Notes</TabsTrigger>
        </TabsList>

        <TabsContent value="pre-ceremony" className="space-y-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <CardTitle>Pre-Ceremony Shots</CardTitle>
                </div>
                <CardDescription>Getting ready moments and detail shots</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-semibold">Questions to Consider:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• What getting-ready moments do you want captured?</li>
                    <li>• Which detail shots are most important to you?</li>
                    <li>• What family and wedding party photos do you want before the ceremony?</li>
                    <li>• Are there any special locations or backdrops you want to use?</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">Pre-Ceremony Ideas:</h4>
                  <div className="bg-muted/30 p-3 rounded-lg text-sm text-muted-foreground">
                    <p>• Bride getting makeup done, putting on dress, first look with parents</p>
                    <p>• Rings, shoes, bouquet, dress details, invitation suite</p>
                    <p>• Bridesmaids helping bride, groomsmen getting ready</p>
                    <p>• Venue exterior, ceremony setup, floral arrangements</p>
                  </div>
                </div>
                <Card className="bg-muted/50">
                  <CardContent className="pt-4">
                    <Textarea
                      placeholder="List specific pre-ceremony shots, getting ready moments, and detail shots you want captured..."
                      value={notes.pre_ceremony}
                      onChange={(e) => handleNotesChange("pre_ceremony", e.target.value)}
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
                  <Camera className="h-5 w-5 text-primary" />
                  <CardTitle>Ceremony Photography</CardTitle>
                </div>
                <CardDescription>Key moments and angles during the ceremony</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-semibold">Questions to Consider:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• What key ceremony moments must be captured?</li>
                    <li>• Which guests' reactions are most important to photograph?</li>
                    <li>• Are there any cultural or religious elements to document?</li>
                    <li>• What angles or perspectives do you prefer for ceremony shots?</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">Ceremony Must-Haves:</h4>
                  <div className="bg-muted/30 p-3 rounded-lg text-sm text-muted-foreground">
                    <p>• Processional, vows, ring exchange, first kiss, recessional</p>
                    <p>• Parents' reactions, grandparents, wedding party emotions</p>
                    <p>• Unity ceremony, cultural traditions, religious rituals</p>
                    <p>• Wide shots of full ceremony, close-ups of expressions</p>
                  </div>
                </div>
                <Card className="bg-muted/50">
                  <CardContent className="pt-4">
                    <Textarea
                      placeholder="Detail your ceremony photography priorities, special moments, and important reactions to capture..."
                      value={notes.ceremony}
                      onChange={(e) => handleNotesChange("ceremony", e.target.value)}
                      rows={6}
                    />
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="groups" className="space-y-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <CardTitle>Family & Group Photos</CardTitle>
                </div>
                <CardDescription>Organized group shots and family combinations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-semibold">Questions to Consider:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Which family combinations are most important to capture?</li>
                    <li>• What friend groups or special relationships should be photographed?</li>
                    <li>• Are there any family members who won't be able to stay late?</li>
                    <li>• What's your plan for organizing and timing group shots efficiently?</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">Group Photo Ideas:</h4>
                  <div className="bg-muted/30 p-3 rounded-lg text-sm text-muted-foreground">
                    <p>• Immediate families, grandparents, siblings, extended family</p>
                    <p>• College friends, work colleagues, childhood friends</p>
                    <p>• Prioritize elderly or traveling guests for early photos</p>
                    <p>• Create a timeline and assign someone to gather groups</p>
                  </div>
                </div>
                <Card className="bg-muted/50">
                  <CardContent className="pt-4">
                    <Textarea
                      placeholder="List specific family combinations, friend groups, and organization strategy for group photos..."
                      value={notes.family_groups}
                      onChange={(e) => handleNotesChange("family_groups", e.target.value)}
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
                  <CardTitle>Reception & Candid Moments</CardTitle>
                </div>
                <CardDescription>Reception events and candid photography</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-semibold">Questions to Consider:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Which reception events and traditions do you want documented?</li>
                    <li>• What candid moments and interactions are most meaningful?</li>
                    <li>• Are there any special dances or performances to capture?</li>
                    <li>• What final shots do you want at the end of the night?</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">Reception Highlights:</h4>
                  <div className="bg-muted/30 p-3 rounded-lg text-sm text-muted-foreground">
                    <p>• First dance, parent dances, cake cutting, bouquet toss</p>
                    <p>• Guests laughing, dancing, toasts, emotional moments</p>
                    <p>• Special performances, cultural dances, surprise moments</p>
                    <p>• Sparkler exit, last dance, departure shots</p>
                  </div>
                </div>
                <Card className="bg-muted/50">
                  <CardContent className="pt-4">
                    <Textarea
                      placeholder="Plan reception photography including key events, candid moments, and special performances..."
                      value={notes.reception}
                      onChange={(e) => handleNotesChange("reception", e.target.value)}
                      rows={6}
                    />
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="shot-list" className="space-y-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Pre-Ceremony Photos</CardTitle>
                <CardDescription>Getting ready moments and detail shots</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="List specific pre-ceremony shots, getting ready moments, and detail shots you want captured..."
                  value={notes.pre_ceremony}
                  onChange={(e) => handleNotesChange("pre_ceremony", e.target.value)}
                  rows={4}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Ceremony Photography</CardTitle>
                <CardDescription>Key moments and angles during the ceremony</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Detail your ceremony photography priorities and special moments to capture..."
                  value={notes.ceremony}
                  onChange={(e) => handleNotesChange("ceremony", e.target.value)}
                  rows={4}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Family & Group Photos</CardTitle>
                <CardDescription>Organized group shots and family combinations</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="List specific family combinations and friend groups to photograph..."
                  value={notes.family_groups}
                  onChange={(e) => handleNotesChange("family_groups", e.target.value)}
                  rows={4}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Reception & Candid Moments</CardTitle>
                <CardDescription>Reception events and candid photography</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Plan reception photography including key events and candid moments..."
                  value={notes.reception}
                  onChange={(e) => handleNotesChange("reception", e.target.value)}
                  rows={4}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Complete Shot List</CardTitle>
                <CardDescription>Your comprehensive photography requirements</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Create your complete shot list organized by timeline with specific people and moments..."
                  value={notes.shot_list}
                  onChange={(e) => handleNotesChange("shot_list", e.target.value)}
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