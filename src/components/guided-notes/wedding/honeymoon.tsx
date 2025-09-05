"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, DollarSign, Briefcase, Camera, Plane } from "lucide-react"

export function Honeymoon() {
  const [notes, setNotes] = useState({
    destination_timing: "",
    budget_planning: "",
    logistics_prep: "",
    creating_memories: "",
    honeymoon_plan: ""
  })

  useEffect(() => {
    const savedNotes = localStorage.getItem('wedding-honeymoon-notes')
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('wedding-honeymoon-notes', JSON.stringify(notes))
  }, [notes])

  const handleNotesChange = (field: keyof typeof notes, value: string) => {
    setNotes(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Honeymoon Planning</h1>
        <p className="text-muted-foreground">Plan the perfect post-wedding getaway to celebrate your new marriage.</p>
      </div>

      <Tabs defaultValue="destination" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="destination">Destination</TabsTrigger>
          <TabsTrigger value="budget">Budget</TabsTrigger>
          <TabsTrigger value="logistics">Logistics</TabsTrigger>
          <TabsTrigger value="memories">Memories</TabsTrigger>
          <TabsTrigger value="plan">My Notes</TabsTrigger>
        </TabsList>

        <TabsContent value="destination" className="space-y-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <CardTitle>Destination & Timing</CardTitle>
                </div>
                <CardDescription>Where and when to take your honeymoon</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-semibold">Questions to Consider:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• What type of honeymoon experience are you both dreaming of?</li>
                    <li>• When do you want to travel - immediately after the wedding or later?</li>
                    <li>• What destinations are on your bucket list and why?</li>
                    <li>• What's your ideal length for the honeymoon trip?</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">Destination Ideas:</h4>
                  <div className="bg-muted/30 p-3 rounded-lg text-sm text-muted-foreground">
                    <p>• Beach relaxation, cultural exploration, adventure activities, city experiences</p>
                    <p>• Leave 2 days after wedding vs. wait a few weeks to decompress</p>
                    <p>• Europe for history, Caribbean for beaches, Asia for culture</p>
                    <p>• 1 week for nearby destinations, 2+ weeks for international travel</p>
                  </div>
                </div>
                <Card className="bg-muted/50">
                  <CardContent className="pt-4">
                    <Textarea
                      placeholder="Plan your ideal honeymoon destination, timing, experience type, and trip duration..."
                      value={notes.destination_timing}
                      onChange={(e) => handleNotesChange("destination_timing", e.target.value)}
                      rows={6}
                    />
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="budget" className="space-y-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-primary" />
                  <CardTitle>Budget & Planning</CardTitle>
                </div>
                <CardDescription>Financial planning and cost allocation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-semibold">Questions to Consider:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• What's your realistic budget for the entire honeymoon?</li>
                    <li>• How will you divide costs between flights, accommodation, and activities?</li>
                    <li>• Are there ways to save money or find deals on your dream trip?</li>
                    <li>• What splurges are worth it vs. where can you be practical?</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">Budget Planning Tips:</h4>
                  <div className="bg-muted/30 p-3 rounded-lg text-sm text-muted-foreground">
                    <p>• Set total budget including flights, hotels, meals, activities, shopping</p>
                    <p>• Allocate 40% accommodation, 30% flights, 30% food/activities</p>
                    <p>• Travel rewards, off-season dates, package deals, last-minute bookings</p>
                    <p>• Splurge on romantic dinners, save on lunch by exploring local spots</p>
                  </div>
                </div>
                <Card className="bg-muted/50">
                  <CardContent className="pt-4">
                    <Textarea
                      placeholder="Set your honeymoon budget, cost allocation, money-saving strategies, and splurge priorities..."
                      value={notes.budget_planning}
                      onChange={(e) => handleNotesChange("budget_planning", e.target.value)}
                      rows={6}
                    />
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="logistics" className="space-y-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-primary" />
                  <CardTitle>Logistics & Preparation</CardTitle>
                </div>
                <CardDescription>Travel documents, packing, and reservations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-semibold">Questions to Consider:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• What travel documents and preparations do you need?</li>
                    <li>• How will you pack for your destination and activities?</li>
                    <li>• What reservations and bookings should you make in advance?</li>
                    <li>• How will you handle work and responsibilities while away?</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">Logistics Checklist:</h4>
                  <div className="bg-muted/30 p-3 rounded-lg text-sm text-muted-foreground">
                    <p>• Passports, visas, travel insurance, vaccination requirements</p>
                    <p>• Check weather, pack versatile outfits, comfortable shoes, dressy options</p>
                    <p>• Special restaurants, tours, shows, spa treatments, romantic experiences</p>
                    <p>• Set out-of-office messages, delegate tasks, truly disconnect</p>
                  </div>
                </div>
                <Card className="bg-muted/50">
                  <CardContent className="pt-4">
                    <Textarea
                      placeholder="Plan travel logistics including documents, packing, advance reservations, and work arrangements..."
                      value={notes.logistics_prep}
                      onChange={(e) => handleNotesChange("logistics_prep", e.target.value)}
                      rows={6}
                    />
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="memories" className="space-y-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Camera className="h-5 w-5 text-primary" />
                  <CardTitle>Creating Memories</CardTitle>
                </div>
                <CardDescription>Experiences, documentation, and romantic moments</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-semibold">Questions to Consider:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• What experiences or activities are must-dos for your honeymoon?</li>
                    <li>• How do you want to document and remember your trip?</li>
                    <li>• What romantic moments or surprises do you want to plan?</li>
                    <li>• How will you balance planned activities with spontaneous relaxation?</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">Memory-Making Ideas:</h4>
                  <div className="bg-muted/30 p-3 rounded-lg text-sm text-muted-foreground">
                    <p>• Couple's massage, sunset dinner, local cultural experiences, adventure activities</p>
                    <p>• Professional photo session, travel journal, collect mementos</p>
                    <p>• Surprise dinner reservation, couples activities, meaningful gifts</p>
                    <p>• Plan 2-3 key experiences, leave rest of time flexible for spontaneity</p>
                  </div>
                </div>
                <Card className="bg-muted/50">
                  <CardContent className="pt-4">
                    <Textarea
                      placeholder="Plan memorable experiences, documentation methods, romantic surprises, and activity balance..."
                      value={notes.creating_memories}
                      onChange={(e) => handleNotesChange("creating_memories", e.target.value)}
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
                <CardTitle>Destination & Timing</CardTitle>
                <CardDescription>Where and when to take your honeymoon</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Plan your ideal honeymoon destination, timing, experience type, and trip duration..."
                  value={notes.destination_timing}
                  onChange={(e) => handleNotesChange("destination_timing", e.target.value)}
                  rows={4}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Budget & Planning</CardTitle>
                <CardDescription>Financial planning and cost allocation</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Set your honeymoon budget, cost allocation, and money-saving strategies..."
                  value={notes.budget_planning}
                  onChange={(e) => handleNotesChange("budget_planning", e.target.value)}
                  rows={4}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Logistics & Preparation</CardTitle>
                <CardDescription>Travel documents, packing, and reservations</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Plan travel logistics including documents, packing, and advance reservations..."
                  value={notes.logistics_prep}
                  onChange={(e) => handleNotesChange("logistics_prep", e.target.value)}
                  rows={4}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Creating Memories</CardTitle>
                <CardDescription>Experiences, documentation, and romantic moments</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Plan memorable experiences, documentation methods, and romantic surprises..."
                  value={notes.creating_memories}
                  onChange={(e) => handleNotesChange("creating_memories", e.target.value)}
                  rows={4}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Complete Honeymoon Plan</CardTitle>
                <CardDescription>Your comprehensive honeymoon strategy and itinerary</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Create your complete honeymoon plan including destination, timeline, budget, and activities..."
                  value={notes.honeymoon_plan}
                  onChange={(e) => handleNotesChange("honeymoon_plan", e.target.value)}
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