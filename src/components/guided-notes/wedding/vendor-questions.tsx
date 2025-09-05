"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { 
  DollarSign,
  Calendar,
  Shield,
  Users,
  Camera,
  Utensils,
  Music,
  MapPin,
  AlertCircle
} from "lucide-react"

export function VendorQuestions() {
  const [notes, setNotes] = useState({
    photography: "",
    catering: "",
    venue: "",
    music: "",
    florist: "",
    general: ""
  })

  const handleNotesChange = (section: string, value: string) => {
    setNotes(prev => ({ ...prev, [section]: value }))
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Vendor Questions & Contracts</h1>
        <p className="text-muted-foreground">Essential questions to ask potential vendors and important contract details to track</p>
      </div>

      <Tabs defaultValue="research" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="research">Research</TabsTrigger>
          <TabsTrigger value="logistics">Logistics</TabsTrigger>
          <TabsTrigger value="contracts">Contracts</TabsTrigger>
          <TabsTrigger value="vendor-specific">By Vendor</TabsTrigger>
          <TabsTrigger value="notes">My Notes</TabsTrigger>
        </TabsList>
        
        <TabsContent value="research" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <DollarSign className="mr-2 h-5 w-5 text-primary" />
                Initial Research & Pricing
              </CardTitle>
              <CardDescription>Key questions to ask when first contacting vendors</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Pricing Questions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• What is your pricing structure and what's included in the base package?</li>
                      <li>• Are there any additional fees I should know about?</li>
                      <li>• What is your payment schedule and when are payments due?</li>
                      <li>• Do you offer payment plans or financing options?</li>
                      <li>• What happens if we need to cancel or postpone?</li>
                      <li>• Are there seasonal pricing differences?</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Package & Services</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Can you walk me through what's included in each package?</li>
                      <li>• Do you offer customizable packages?</li>
                      <li>• What are your most popular add-ons?</li>
                      <li>• How do you handle special requests or dietary restrictions?</li>
                      <li>• Do you have backup plans for weather or emergencies?</li>
                      <li>• Can I see examples of your recent work?</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-muted/30 border-muted-foreground/20">
                <CardHeader>
                  <CardTitle className="text-lg">Questions to Ask References</CardTitle>
                </CardHeader>
                <CardContent className="text-sm space-y-2">
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• How was their communication throughout the planning process?</li>
                    <li>• Did they arrive on time and stay for the entire event?</li>
                    <li>• Were there any unexpected issues and how were they handled?</li>
                    <li>• Would you hire them again for another event?</li>
                    <li>• Any advice for working with this vendor?</li>
                  </ul>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="logistics" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="mr-2 h-5 w-5 text-primary" />
                Availability & Logistics
              </CardTitle>
              <CardDescription>Timeline and coordination questions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Timing & Availability</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Are you available on our wedding date and time?</li>
                      <li>• How many events do you typically book per day?</li>
                      <li>• What is your arrival and setup timeline?</li>
                      <li>• How much time do you need for setup and breakdown?</li>
                      <li>• Do you work with an assistant or team?</li>
                      <li>• What time will you leave the venue?</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Coordination</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• How do you coordinate with other vendors?</li>
                      <li>• Do you have a preferred vendor list you work with?</li>
                      <li>• What information do you need from us before the wedding?</li>
                      <li>• How many pre-wedding meetings or consultations are included?</li>
                      <li>• What's your communication style and preferred contact method?</li>
                      <li>• Do you attend the rehearsal?</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Equipment & Setup</CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-medium">Equipment Needs</h4>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• What equipment do you provide?</li>
                        <li>• Do you need power outlets or special setup?</li>
                        <li>• Are there venue restrictions we should know about?</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium">Delivery & Setup</h4>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• When will items be delivered?</li>
                        <li>• Who handles setup and breakdown?</li>
                        <li>• Are delivery fees included?</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium">Weather Contingency</h4>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• What's your rain/weather backup plan?</li>
                        <li>• Do you provide tents or covered options?</li>
                        <li>• Any additional fees for weather changes?</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contracts" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="mr-2 h-5 w-5 text-primary" />
                Contract Details & Legal
              </CardTitle>
              <CardDescription>Important contract terms and legal protections</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              
              <Card className="bg-destructive/10 border-destructive/20">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <AlertCircle className="mr-2 h-5 w-5 text-destructive" />
                    Critical Contract Questions
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm space-y-2">
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• <strong>Cancellation policy:</strong> What happens if we need to cancel or postpone?</li>
                    <li>• <strong>Payment schedule:</strong> When are payments due and what methods are accepted?</li>
                    <li>• <strong>Liability insurance:</strong> Are you insured and bonded?</li>
                    <li>• <strong>Force majeure:</strong> What happens in case of emergency or natural disaster?</li>
                    <li>• <strong>Substitutions:</strong> What if you can't perform due to illness or emergency?</li>
                  </ul>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Contract Must-Haves</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Detailed description of services included</li>
                      <li>• Specific date, time, and venue information</li>
                      <li>• Complete breakdown of all costs and fees</li>
                      <li>• Payment schedule and accepted methods</li>
                      <li>• Cancellation and refund policies</li>
                      <li>• What happens if vendor cancels</li>
                      <li>• Timeline for deliverables (photos, etc.)</li>
                      <li>• Setup and breakdown responsibilities</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Red Flags to Avoid</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Requests for full payment upfront</li>
                      <li>• No written contract or very vague terms</li>
                      <li>• Won't provide references from recent clients</li>
                      <li>• Pressure tactics or limited-time offers</li>
                      <li>• No liability insurance or business license</li>
                      <li>• Unrealistic promises or prices too good to be true</li>
                      <li>• Poor communication or slow response times</li>
                      <li>• No backup plan or substitute arrangements</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="vendor-specific" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="mr-2 h-5 w-5 text-primary" />
                Vendor-Specific Questions
              </CardTitle>
              <CardDescription>Tailored questions for different types of vendors</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              
              <div className="grid gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <Camera className="mr-2 h-5 w-5 text-muted-foreground" />
                      Photography & Videography
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• How many edited photos will we receive and when?</li>
                      <li>• Do you provide an online gallery for sharing?</li>
                      <li>• What's your shooting style and can we see full wedding galleries?</li>
                      <li>• Do you scout the venue beforehand?</li>
                      <li>• How do you handle low light or challenging lighting conditions?</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <Utensils className="mr-2 h-5 w-5 text-muted-foreground" />
                      Catering & Bar Service
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Can we schedule a tasting and is there a fee?</li>
                      <li>• How do you handle dietary restrictions and allergies?</li>
                      <li>• What's included in service (linens, plates, cleanup)?</li>
                      <li>• How many servers will you provide?</li>
                      <li>• Do you provide alcohol or do we need our own license?</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <MapPin className="mr-2 h-5 w-5 text-muted-foreground" />
                      Venue Questions
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• What's included in the rental fee (tables, chairs, linens)?</li>
                      <li>• Are there restrictions on decorations or vendor choices?</li>
                      <li>• What time can we access the venue for setup?</li>
                      <li>• Is there a bridal suite or getting-ready space?</li>
                      <li>• What's the rain/weather backup plan?</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <Music className="mr-2 h-5 w-5 text-muted-foreground" />
                      Music & Entertainment
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Do you take song requests and do you have a "do not play" list?</li>
                      <li>• What equipment do you provide (microphones, speakers, lighting)?</li>
                      <li>• How do you handle special moments (first dance, toasts)?</li>
                      <li>• Do you provide music during cocktail hour and dinner?</li>
                      <li>• What's your backup plan if equipment fails?</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notes" className="space-y-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Photography Notes</CardTitle>
                <CardDescription>Research notes, quotes, and comparisons for photographers</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Record photographer contacts, pricing, style notes, pros/cons..."
                  value={notes.photography}
                  onChange={(e) => handleNotesChange("photography", e.target.value)}
                  rows={4}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Catering Notes</CardTitle>
                <CardDescription>Caterer research, menu options, and pricing details</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Caterer contacts, menu tastings, pricing, dietary accommodations..."
                  value={notes.catering}
                  onChange={(e) => handleNotesChange("catering", e.target.value)}
                  rows={4}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Venue Notes</CardTitle>
                <CardDescription>Venue visits, availability, and contract details</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Venue tours, availability, pricing, what's included, restrictions..."
                  value={notes.venue}
                  onChange={(e) => handleNotesChange("venue", e.target.value)}
                  rows={4}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Music & Entertainment Notes</CardTitle>
                <CardDescription>DJ/band research and music preferences</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="DJ/band contacts, music style, equipment, must-play and do-not-play lists..."
                  value={notes.music}
                  onChange={(e) => handleNotesChange("music", e.target.value)}
                  rows={4}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Other Vendors</CardTitle>
                <CardDescription>Florist, transportation, and other vendor notes</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Florist, transportation, officiant, other vendor research and notes..."
                  value={notes.florist}
                  onChange={(e) => handleNotesChange("florist", e.target.value)}
                  rows={4}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>General Vendor Notes</CardTitle>
                <CardDescription>Overall thoughts, comparisons, and decisions</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="General vendor thoughts, decision criteria, budget considerations..."
                  value={notes.general}
                  onChange={(e) => handleNotesChange("general", e.target.value)}
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
