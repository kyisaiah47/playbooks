"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Heart, Users, Stars, Church, PenTool } from "lucide-react"

export function VowsCeremony() {
  const [notes, setNotes] = useState({
    reflection: "",
    promises: "",
    future_dreams: "",
    ceremony_planning: "",
    final_vows: ""
  })

  useEffect(() => {
    const savedNotes = localStorage.getItem('wedding-vows-notes')
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('wedding-vows-notes', JSON.stringify(notes))
  }, [notes])

  const handleNotesChange = (field: keyof typeof notes, value: string) => {
    setNotes(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Vows & Ceremony Script</h1>
        <p className="text-muted-foreground">Draft your personal wedding vows and plan your ceremony flow.</p>
      </div>

      <Tabs defaultValue="reflection" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="reflection">Reflection</TabsTrigger>
          <TabsTrigger value="promises">Promises</TabsTrigger>
          <TabsTrigger value="future">Future Dreams</TabsTrigger>
          <TabsTrigger value="ceremony">Ceremony</TabsTrigger>
          <TabsTrigger value="vows">My Notes</TabsTrigger>
        </TabsList>

        <TabsContent value="reflection" className="space-y-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-primary" />
                  <CardTitle>Reflecting on Your Relationship</CardTitle>
                </div>
                <CardDescription>Think about what makes your love special</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-semibold">Questions to Consider:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• What are 3 things you love most about your partner?</li>
                    <li>• What is your favorite memory together?</li>
                    <li>• How has your partner made you a better person?</li>
                    <li>• What moment did you know they were 'the one'?</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">Example Reflections:</h4>
                  <div className="bg-muted/30 p-3 rounded-lg text-sm text-muted-foreground">
                    <p>"I love how you make me laugh even on my worst days"</p>
                    <p>"Our first trip together when we got completely lost but had the best time"</p>
                    <p>"You've taught me to be more patient and understanding"</p>
                  </div>
                </div>
                <Card className="bg-muted/50">
                  <CardContent className="pt-4">
                    <Textarea
                      placeholder="Reflect on your relationship, special moments, and what makes your love unique..."
                      value={notes.reflection}
                      onChange={(e) => handleNotesChange("reflection", e.target.value)}
                      rows={6}
                    />
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="promises" className="space-y-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <CardTitle>Promises & Commitments</CardTitle>
                </div>
                <CardDescription>The vows and promises you want to make</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-semibold">Questions to Consider:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• What promises do you want to make for your future together?</li>
                    <li>• How do you want to support each other through challenges?</li>
                    <li>• What kind of life do you want to build together?</li>
                    <li>• What traditions do you want to create as a couple?</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">Example Promises:</h4>
                  <div className="bg-muted/30 p-3 rounded-lg text-sm text-muted-foreground">
                    <p>"I promise to support your dreams, even when they scare me"</p>
                    <p>"I vow to be your partner in all things, big and small"</p>
                    <p>"I promise to choose you every day, even when it's hard"</p>
                  </div>
                </div>
                <Card className="bg-muted/50">
                  <CardContent className="pt-4">
                    <Textarea
                      placeholder="Write the promises and commitments you want to make to your partner..."
                      value={notes.promises}
                      onChange={(e) => handleNotesChange("promises", e.target.value)}
                      rows={6}
                    />
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="future" className="space-y-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Stars className="h-5 w-5 text-primary" />
                  <CardTitle>Future Dreams & Hopes</CardTitle>
                </div>
                <CardDescription>Your vision for your life together</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-semibold">Questions to Consider:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• What are your hopes and dreams as a married couple?</li>
                    <li>• How do you envision growing old together?</li>
                    <li>• What adventures do you want to share?</li>
                    <li>• What legacy do you want to leave together?</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">Example Dreams:</h4>
                  <div className="bg-muted/30 p-3 rounded-lg text-sm text-muted-foreground">
                    <p>"I can't wait to travel the world with you and create new memories"</p>
                    <p>"I look forward to building a family and home together"</p>
                    <p>"I want to grow old laughing with you on our front porch"</p>
                  </div>
                </div>
                <Card className="bg-muted/50">
                  <CardContent className="pt-4">
                    <Textarea
                      placeholder="Describe your dreams, hopes, and vision for your future together..."
                      value={notes.future_dreams}
                      onChange={(e) => handleNotesChange("future_dreams", e.target.value)}
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
                  <CardTitle>Ceremony Planning</CardTitle>
                </div>
                <CardDescription>Plan the flow and elements of your ceremony</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-semibold">Questions to Consider:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• What traditions or readings do you want to include in your ceremony?</li>
                    <li>• Do you want to exchange rings, and what will you say?</li>
                    <li>• Are there any cultural or religious elements to incorporate?</li>
                    <li>• What music or special moments do you want during the ceremony?</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">Ceremony Ideas:</h4>
                  <div className="bg-muted/30 p-3 rounded-lg text-sm text-muted-foreground">
                    <p>• Include a meaningful quote, poem, or religious text</p>
                    <p>• Unity candle, handfasting, or cultural traditions</p>
                    <p>• Special songs for processional, recessional, or during ceremony</p>
                  </div>
                </div>
                <Card className="bg-muted/50">
                  <CardContent className="pt-4">
                    <Textarea
                      placeholder="Plan your ceremony elements, traditions, readings, music, and special moments..."
                      value={notes.ceremony_planning}
                      onChange={(e) => handleNotesChange("ceremony_planning", e.target.value)}
                      rows={6}
                    />
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="vows" className="space-y-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Relationship Reflection</CardTitle>
                <CardDescription>Think about what makes your love special</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Reflect on your relationship, special moments, and what makes your love unique..."
                  value={notes.reflection}
                  onChange={(e) => handleNotesChange("reflection", e.target.value)}
                  rows={4}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Promises & Commitments</CardTitle>
                <CardDescription>The vows and promises you want to make</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Write the promises and commitments you want to make to your partner..."
                  value={notes.promises}
                  onChange={(e) => handleNotesChange("promises", e.target.value)}
                  rows={4}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Future Dreams & Hopes</CardTitle>
                <CardDescription>Your vision for your life together</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Describe your dreams, hopes, and vision for your future together..."
                  value={notes.future_dreams}
                  onChange={(e) => handleNotesChange("future_dreams", e.target.value)}
                  rows={4}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Ceremony Planning</CardTitle>
                <CardDescription>Plan the flow and elements of your ceremony</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Plan your ceremony elements, traditions, readings, music, and special moments..."
                  value={notes.ceremony_planning}
                  onChange={(e) => handleNotesChange("ceremony_planning", e.target.value)}
                  rows={4}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Final Wedding Vows</CardTitle>
                <CardDescription>Your complete wedding vows and personal notes</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Write your final wedding vows combining your reflections, promises, and dreams..."
                  value={notes.final_vows}
                  onChange={(e) => handleNotesChange("final_vows", e.target.value)}
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