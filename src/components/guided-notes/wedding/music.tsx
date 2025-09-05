"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Church, Coffee, PartyPopper, Clock, Music as MusicIcon } from "lucide-react"

export function Music() {
  const [notes, setNotes] = useState({
    ceremony_music: "",
    cocktail_dinner: "",
    dancing_party: "",
    special_moments: "",
    playlist: ""
  })

  useEffect(() => {
    const savedNotes = localStorage.getItem('wedding-music-notes')
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('wedding-music-notes', JSON.stringify(notes))
  }, [notes])

  const handleNotesChange = (field: keyof typeof notes, value: string) => {
    setNotes(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Music & Playlist Planning</h1>
        <p className="text-muted-foreground">Curate the perfect soundtrack for your wedding day, from ceremony to reception.</p>
      </div>

      <Tabs defaultValue="ceremony" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="ceremony">Ceremony</TabsTrigger>
          <TabsTrigger value="cocktail">Cocktail/Dinner</TabsTrigger>
          <TabsTrigger value="dancing">Dancing</TabsTrigger>
          <TabsTrigger value="special">Special Moments</TabsTrigger>
          <TabsTrigger value="playlist">My Notes</TabsTrigger>
        </TabsList>

        <TabsContent value="ceremony" className="space-y-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Church className="h-5 w-5 text-primary" />
                  <CardTitle>Ceremony Music</CardTitle>
                </div>
                <CardDescription>Processional, recessional, and ceremony music</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-semibold">Questions to Consider:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• What songs do you want for the processional and recessional?</li>
                    <li>• Do you want music during the ceremony (signing, unity ceremony)?</li>
                    <li>• Are there any religious or cultural musical requirements?</li>
                    <li>• What's your backup plan for live vs. recorded music?</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">Ceremony Music Ideas:</h4>
                  <div className="bg-muted/30 p-3 rounded-lg text-sm text-muted-foreground">
                    <p>• Processional: Canon in D, At Last, Perfect by Ed Sheeran</p>
                    <p>• Recessional: Signed Sealed Delivered, September by Earth Wind & Fire</p>
                    <p>• Unity ceremony: acoustic version of your first dance song</p>
                    <p>• Have recorded versions ready if live musicians have issues</p>
                  </div>
                </div>
                <Card className="bg-muted/50">
                  <CardContent className="pt-4">
                    <Textarea
                      placeholder="Plan your ceremony music including processional, recessional, and any special ceremony moments..."
                      value={notes.ceremony_music}
                      onChange={(e) => handleNotesChange("ceremony_music", e.target.value)}
                      rows={6}
                    />
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="cocktail" className="space-y-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Coffee className="h-5 w-5 text-primary" />
                  <CardTitle>Cocktail Hour & Dinner</CardTitle>
                </div>
                <CardDescription>Background music for socializing and dining</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-semibold">Questions to Consider:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• What vibe do you want during cocktail hour (upbeat, mellow, sophisticated)?</li>
                    <li>• What dinner music will encourage conversation but not overpower?</li>
                    <li>• Are there any songs that represent your relationship story?</li>
                    <li>• Do you want to take requests from guests during this time?</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">Cocktail & Dinner Ideas:</h4>
                  <div className="bg-muted/30 p-3 rounded-lg text-sm text-muted-foreground">
                    <p>• Jazz standards, acoustic covers, light indie pop</p>
                    <p>• Instrumental versions, soft rock, singer-songwriter</p>
                    <p>• Songs from your first date, travel memories, special moments</p>
                    <p>• Set up request cards at tables or online form</p>
                  </div>
                </div>
                <Card className="bg-muted/50">
                  <CardContent className="pt-4">
                    <Textarea
                      placeholder="Plan cocktail hour and dinner music including atmosphere, relationship songs, and guest requests..."
                      value={notes.cocktail_dinner}
                      onChange={(e) => handleNotesChange("cocktail_dinner", e.target.value)}
                      rows={6}
                    />
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="dancing" className="space-y-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <PartyPopper className="h-5 w-5 text-primary" />
                  <CardTitle>Dancing & Party Music</CardTitle>
                </div>
                <CardDescription>First dance and party music for all ages</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-semibold">Questions to Consider:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• What's your first dance song and do you need it edited?</li>
                    <li>• What songs will get different generations dancing?</li>
                    <li>• Are there any cultural or family traditions to include?</li>
                    <li>• What songs absolutely must be played vs. must NOT be played?</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">Dancing Music Ideas:</h4>
                  <div className="bg-muted/30 p-3 rounded-lg text-sm text-muted-foreground">
                    <p>• First dance: full song vs. 2-3 minute edit for comfort</p>
                    <p>• Mix of current hits, 80s/90s classics, Motown, country</p>
                    <p>• Cultural dances, family favorites, meaningful traditions</p>
                    <p>• Must play: your favorites; Don't play: ex's favorite song</p>
                  </div>
                </div>
                <Card className="bg-muted/50">
                  <CardContent className="pt-4">
                    <Textarea
                      placeholder="Plan your dancing music including first dance, multi-generational hits, and must-play/don't-play lists..."
                      value={notes.dancing_party}
                      onChange={(e) => handleNotesChange("dancing_party", e.target.value)}
                      rows={6}
                    />
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="special" className="space-y-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <CardTitle>Special Moments & Timeline</CardTitle>
                </div>
                <CardDescription>Music for key events and transitions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-semibold">Questions to Consider:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• What songs do you want for parent dances and special dances?</li>
                    <li>• How will music cue key reception events (cake cutting, bouquet toss)?</li>
                    <li>• What's your plan for the last song and send-off?</li>
                    <li>• How will you communicate timing and transitions to your DJ/band?</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">Special Moment Ideas:</h4>
                  <div className="bg-muted/30 p-3 rounded-lg text-sm text-muted-foreground">
                    <p>• Father-daughter: What a Wonderful World, Isn't She Lovely</p>
                    <p>• Cake cutting: Sugar, Cake by the Ocean, Sweet Caroline</p>
                    <p>• Last dance: slow romantic song for intimate moment</p>
                    <p>• Create timeline with music cues and share with DJ/coordinator</p>
                  </div>
                </div>
                <Card className="bg-muted/50">
                  <CardContent className="pt-4">
                    <Textarea
                      placeholder="Plan special moment music including parent dances, event cues, and timeline coordination..."
                      value={notes.special_moments}
                      onChange={(e) => handleNotesChange("special_moments", e.target.value)}
                      rows={6}
                    />
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="playlist" className="space-y-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Ceremony Music</CardTitle>
                <CardDescription>Processional, recessional, and ceremony music</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Plan your ceremony music including processional, recessional, and special moments..."
                  value={notes.ceremony_music}
                  onChange={(e) => handleNotesChange("ceremony_music", e.target.value)}
                  rows={4}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cocktail Hour & Dinner</CardTitle>
                <CardDescription>Background music for socializing and dining</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Plan cocktail hour and dinner music including atmosphere and guest requests..."
                  value={notes.cocktail_dinner}
                  onChange={(e) => handleNotesChange("cocktail_dinner", e.target.value)}
                  rows={4}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Dancing & Party Music</CardTitle>
                <CardDescription>First dance and party music for all ages</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Plan your dancing music including first dance and multi-generational hits..."
                  value={notes.dancing_party}
                  onChange={(e) => handleNotesChange("dancing_party", e.target.value)}
                  rows={4}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Special Moments & Timeline</CardTitle>
                <CardDescription>Music for key events and transitions</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Plan special moment music including parent dances and event cues..."
                  value={notes.special_moments}
                  onChange={(e) => handleNotesChange("special_moments", e.target.value)}
                  rows={4}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Complete Wedding Playlist</CardTitle>
                <CardDescription>Your comprehensive music plan organized by timeline</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Create your comprehensive wedding playlist organized by timeline and events..."
                  value={notes.playlist}
                  onChange={(e) => handleNotesChange("playlist", e.target.value)}
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