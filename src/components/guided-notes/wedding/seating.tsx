"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Users2, LayoutGrid, AlertTriangle, MapPin, Clipboard } from "lucide-react"

export function Seating() {
  const [notes, setNotes] = useState({
    guest_grouping: "",
    table_layout: "",
    special_considerations: "",
    final_execution: "",
    seating_chart: ""
  })

  useEffect(() => {
    const savedNotes = localStorage.getItem('wedding-seating-notes')
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('wedding-seating-notes', JSON.stringify(notes))
  }, [notes])

  const handleNotesChange = (field: keyof typeof notes, value: string) => {
    setNotes(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Seating Arrangements</h1>
        <p className="text-muted-foreground">Plan your reception seating to create a comfortable and enjoyable experience for all guests.</p>
      </div>

      <Tabs defaultValue="grouping" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="grouping">Grouping</TabsTrigger>
          <TabsTrigger value="layout">Layout</TabsTrigger>
          <TabsTrigger value="considerations">Special Needs</TabsTrigger>
          <TabsTrigger value="execution">Execution</TabsTrigger>
          <TabsTrigger value="chart">My Notes</TabsTrigger>
        </TabsList>

        <TabsContent value="grouping" className="space-y-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Users2 className="h-5 w-5 text-primary" />
                  <CardTitle>Guest Grouping Strategy</CardTitle>
                </div>
                <CardDescription>How to organize guests into compatible groups</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-semibold">Questions to Consider:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• How will you group guests (by relationship, age, interests)?</li>
                    <li>• Who are your VIP guests that need special consideration?</li>
                    <li>• Which guests know each other and would enjoy sitting together?</li>
                    <li>• Are there any guests who should be kept apart?</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">Grouping Ideas:</h4>
                  <div className="bg-muted/30 p-3 rounded-lg text-sm text-muted-foreground">
                    <p>• Group college friends, work colleagues, family by generation</p>
                    <p>• Parents, grandparents, wedding party at prominent tables</p>
                    <p>• Consider shared interests, life stages, personality types</p>
                  </div>
                </div>
                <Card className="bg-muted/50">
                  <CardContent className="pt-4">
                    <Textarea
                      placeholder="Plan your guest grouping strategy, VIP placement, and compatibility considerations..."
                      value={notes.guest_grouping}
                      onChange={(e) => handleNotesChange("guest_grouping", e.target.value)}
                      rows={6}
                    />
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="layout" className="space-y-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <LayoutGrid className="h-5 w-5 text-primary" />
                  <CardTitle>Table Layout & Logistics</CardTitle>
                </div>
                <CardDescription>Physical arrangement and table logistics</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-semibold">Questions to Consider:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• What's your venue layout and how many tables do you need?</li>
                    <li>• What table sizes work best (rounds of 8, 10, or long tables)?</li>
                    <li>• Where will you place the head table or sweetheart table?</li>
                    <li>• How will you handle accessibility needs and special requirements?</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">Layout Examples:</h4>
                  <div className="bg-muted/30 p-3 rounded-lg text-sm text-muted-foreground">
                    <p>• 10 tables of 8 guests each for 80 people</p>
                    <p>• Head table near dance floor, older guests away from speakers</p>
                    <p>• Reserve accessible spots for wheelchairs, high chairs for kids</p>
                  </div>
                </div>
                <Card className="bg-muted/50">
                  <CardContent className="pt-4">
                    <Textarea
                      placeholder="Design your table layout, sizes, positioning, and accessibility considerations..."
                      value={notes.table_layout}
                      onChange={(e) => handleNotesChange("table_layout", e.target.value)}
                      rows={6}
                    />
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="considerations" className="space-y-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-primary" />
                  <CardTitle>Special Considerations</CardTitle>
                </div>
                <CardDescription>Handling sensitive situations and special needs</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-semibold">Questions to Consider:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• How will you handle divorced parents or family conflicts?</li>
                    <li>• Where will children sit and do they need special accommodations?</li>
                    <li>• How will you seat single guests to help them feel included?</li>
                    <li>• What's your plan for last-minute changes or no-shows?</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">Special Situations:</h4>
                  <div className="bg-muted/30 p-3 rounded-lg text-sm text-muted-foreground">
                    <p>• Seat divorced parents at separate tables with buffer zones</p>
                    <p>• Kids table with coloring books, or mixed with family</p>
                    <p>• Pair single guests with friendly, outgoing couples</p>
                  </div>
                </div>
                <Card className="bg-muted/50">
                  <CardContent className="pt-4">
                    <Textarea
                      placeholder="Plan for family conflicts, children's needs, single guests, and contingencies..."
                      value={notes.special_considerations}
                      onChange={(e) => handleNotesChange("special_considerations", e.target.value)}
                      rows={6}
                    />
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="execution" className="space-y-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <CardTitle>Final Execution</CardTitle>
                </div>
                <CardDescription>Implementing your seating plan on wedding day</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-semibold">Questions to Consider:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• How will you display the seating chart for guests?</li>
                    <li>• Who will help direct guests to their tables?</li>
                    <li>• What's your backup plan if people switch seats?</li>
                    <li>• How will you handle place cards or table assignments?</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">Execution Ideas:</h4>
                  <div className="bg-muted/30 p-3 rounded-lg text-sm text-muted-foreground">
                    <p>• Large display board with table numbers and guest names</p>
                    <p>• Ushers or family members to help direct guests</p>
                    <p>• Place cards at each seat vs. just table assignments</p>
                  </div>
                </div>
                <Card className="bg-muted/50">
                  <CardContent className="pt-4">
                    <Textarea
                      placeholder="Plan your seating chart display, guest direction, and day-of execution..."
                      value={notes.final_execution}
                      onChange={(e) => handleNotesChange("final_execution", e.target.value)}
                      rows={6}
                    />
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="chart" className="space-y-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Guest Grouping Strategy</CardTitle>
                <CardDescription>Plan how you'll organize guests into compatible groups</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Record your guest grouping strategy, VIP placement, and compatibility considerations..."
                  value={notes.guest_grouping}
                  onChange={(e) => handleNotesChange("guest_grouping", e.target.value)}
                  rows={4}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Table Layout Planning</CardTitle>
                <CardDescription>Design your table arrangement and logistics</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Plan your table layout, sizes, positioning, and accessibility considerations..."
                  value={notes.table_layout}
                  onChange={(e) => handleNotesChange("table_layout", e.target.value)}
                  rows={4}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Special Considerations</CardTitle>
                <CardDescription>Handle sensitive situations and special needs</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Plan for family conflicts, children's needs, single guests, and contingencies..."
                  value={notes.special_considerations}
                  onChange={(e) => handleNotesChange("special_considerations", e.target.value)}
                  rows={4}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Execution Planning</CardTitle>
                <CardDescription>Implement your seating plan on wedding day</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Plan your seating chart display, guest direction, and day-of execution..."
                  value={notes.final_execution}
                  onChange={(e) => handleNotesChange("final_execution", e.target.value)}
                  rows={4}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Seating Chart Details</CardTitle>
                <CardDescription>Your complete seating arrangement plan</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Create your detailed seating chart with table assignments and special notes..."
                  value={notes.seating_chart}
                  onChange={(e) => handleNotesChange("seating_chart", e.target.value)}
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