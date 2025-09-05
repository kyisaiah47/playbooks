"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Sparkles, Shirt, Heart, Wrench, Package } from "lucide-react"

export function Emergency() {
  const [notes, setNotes] = useState({
    beauty_essentials: "",
    wardrobe_fixes: "",
    health_comfort: "",
    practical_tools: "",
    emergency_kit: ""
  })

  useEffect(() => {
    const savedNotes = localStorage.getItem('wedding-emergency-notes')
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('wedding-emergency-notes', JSON.stringify(notes))
  }, [notes])

  const handleNotesChange = (field: keyof typeof notes, value: string) => {
    setNotes(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Wedding Day Emergency Kit</h1>
        <p className="text-muted-foreground">Prepare for common wedding day mishaps with a comprehensive emergency kit.</p>
      </div>

      <Tabs defaultValue="beauty" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="beauty">Beauty</TabsTrigger>
          <TabsTrigger value="wardrobe">Wardrobe</TabsTrigger>
          <TabsTrigger value="health">Health</TabsTrigger>
          <TabsTrigger value="tools">Tools</TabsTrigger>
          <TabsTrigger value="kit">My Notes</TabsTrigger>
        </TabsList>

        <TabsContent value="beauty" className="space-y-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  <CardTitle>Beauty & Touch-Up Essentials</CardTitle>
                </div>
                <CardDescription>Items for makeup, hair, and beauty touch-ups</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-semibold">Questions to Consider:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• What makeup and beauty items might need touch-ups throughout the day?</li>
                    <li>• What hair products and tools should you have on standby?</li>
                    <li>• What nail care items might be needed for last-minute fixes?</li>
                    <li>• What skincare items could help with wedding day stress?</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">Beauty Emergency Items:</h4>
                  <div className="bg-muted/30 p-3 rounded-lg text-sm text-muted-foreground">
                    <p>• Lipstick, powder, mascara, blotting papers, makeup remover</p>
                    <p>• Bobby pins, hair spray, small brush, hair ties</p>
                    <p>• Clear nail polish, nail file, cuticle oil</p>
                    <p>• Face mist, oil-absorbing sheets, lip balm</p>
                  </div>
                </div>
                <Card className="bg-muted/50">
                  <CardContent className="pt-4">
                    <Textarea
                      placeholder="List beauty and touch-up items for your emergency kit..."
                      value={notes.beauty_essentials}
                      onChange={(e) => handleNotesChange("beauty_essentials", e.target.value)}
                      rows={6}
                    />
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="wardrobe" className="space-y-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Shirt className="h-5 w-5 text-primary" />
                  <CardTitle>Fashion & Wardrobe Fixes</CardTitle>
                </div>
                <CardDescription>Solutions for dress, suit, and accessory emergencies</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-semibold">Questions to Consider:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• What sewing supplies are essential for dress or suit emergencies?</li>
                    <li>• What items could help with shoe discomfort or wardrobe malfunctions?</li>
                    <li>• What undergarment backups might be needed?</li>
                    <li>• What accessories could get lost or broken?</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">Wardrobe Emergency Items:</h4>
                  <div className="bg-muted/30 p-3 rounded-lg text-sm text-muted-foreground">
                    <p>• Safety pins, needle and thread, fabric tape, stain remover</p>
                    <p>• Band-aids, heel grips, fashion tape, spare buttons</p>
                    <p>• Extra stockings, bra straps, shapewear backups</p>
                    <p>• Backup jewelry, extra boutonnieres, spare ties</p>
                  </div>
                </div>
                <Card className="bg-muted/50">
                  <CardContent className="pt-4">
                    <Textarea
                      placeholder="List wardrobe and fashion emergency items..."
                      value={notes.wardrobe_fixes}
                      onChange={(e) => handleNotesChange("wardrobe_fixes", e.target.value)}
                      rows={6}
                    />
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="health" className="space-y-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-primary" />
                  <CardTitle>Health & Comfort Supplies</CardTitle>
                </div>
                <CardDescription>Medications, comfort items, and weather protection</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-semibold">Questions to Consider:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• What medications might you or your wedding party need?</li>
                    <li>• What items will help keep everyone comfortable throughout the day?</li>
                    <li>• What snacks and drinks should you have available?</li>
                    <li>• What weather-related items might be necessary?</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">Health & Comfort Items:</h4>
                  <div className="bg-muted/30 p-3 rounded-lg text-sm text-muted-foreground">
                    <p>• Advil, antacids, allergy medication, anxiety relief</p>
                    <p>• Deodorant, tissues, wet wipes, hand sanitizer</p>
                    <p>• Protein bars, crackers, water bottles, mints</p>
                    <p>• Umbrella, shawl, sunscreen, bug spray</p>
                  </div>
                </div>
                <Card className="bg-muted/50">
                  <CardContent className="pt-4">
                    <Textarea
                      placeholder="List health, comfort, and weather-related emergency items..."
                      value={notes.health_comfort}
                      onChange={(e) => handleNotesChange("health_comfort", e.target.value)}
                      rows={6}
                    />
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="tools" className="space-y-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Wrench className="h-5 w-5 text-primary" />
                  <CardTitle>Practical Problem Solvers</CardTitle>
                </div>
                <CardDescription>Tools and supplies for coordination and quick fixes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-semibold">Questions to Consider:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• What tools might be needed for last-minute setup or fixes?</li>
                    <li>• What communication and coordination items are essential?</li>
                    <li>• What cleaning supplies could handle spills or stains?</li>
                    <li>• What items will help with vendor or timeline issues?</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">Practical Emergency Items:</h4>
                  <div className="bg-muted/30 p-3 rounded-lg text-sm text-muted-foreground">
                    <p>• Scissors, tape, zip ties, multi-tool, extension cord</p>
                    <p>• Phone chargers, vendor contact list, timeline copies</p>
                    <p>• Stain removal pens, paper towels, disinfecting wipes</p>
                    <p>• Cash for tips, vendor payment envelopes, timeline schedule</p>
                  </div>
                </div>
                <Card className="bg-muted/50">
                  <CardContent className="pt-4">
                    <Textarea
                      placeholder="List practical tools and coordination items for your emergency kit..."
                      value={notes.practical_tools}
                      onChange={(e) => handleNotesChange("practical_tools", e.target.value)}
                      rows={6}
                    />
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="kit" className="space-y-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Beauty & Touch-Up Items</CardTitle>
                <CardDescription>Makeup, hair, and beauty emergency supplies</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="List beauty and touch-up items for your emergency kit..."
                  value={notes.beauty_essentials}
                  onChange={(e) => handleNotesChange("beauty_essentials", e.target.value)}
                  rows={4}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Wardrobe & Fashion Fixes</CardTitle>
                <CardDescription>Solutions for dress, suit, and accessory emergencies</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="List wardrobe and fashion emergency items..."
                  value={notes.wardrobe_fixes}
                  onChange={(e) => handleNotesChange("wardrobe_fixes", e.target.value)}
                  rows={4}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Health & Comfort Supplies</CardTitle>
                <CardDescription>Medications, comfort items, and weather protection</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="List health, comfort, and weather-related emergency items..."
                  value={notes.health_comfort}
                  onChange={(e) => handleNotesChange("health_comfort", e.target.value)}
                  rows={4}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Practical Tools</CardTitle>
                <CardDescription>Tools and supplies for coordination and quick fixes</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="List practical tools and coordination items for your emergency kit..."
                  value={notes.practical_tools}
                  onChange={(e) => handleNotesChange("practical_tools", e.target.value)}
                  rows={4}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Complete Emergency Kit</CardTitle>
                <CardDescription>Your comprehensive wedding day emergency kit list</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Create your complete emergency kit list with specific items and quantities..."
                  value={notes.emergency_kit}
                  onChange={(e) => handleNotesChange("emergency_kit", e.target.value)}
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