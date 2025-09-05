"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { ShoppingCart, Package, Settings, Heart, Gift } from "lucide-react"

export function Registry() {
  const [notes, setNotes] = useState({
    planning_strategy: "",
    gift_categories: "",
    registry_management: "",
    creative_options: "",
    registry_plan: ""
  })

  useEffect(() => {
    const savedNotes = localStorage.getItem('wedding-registry-notes')
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('wedding-registry-notes', JSON.stringify(notes))
  }, [notes])

  const handleNotesChange = (field: keyof typeof notes, value: string) => {
    setNotes(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Wedding Registry Management</h1>
        <p className="text-muted-foreground">Create and manage your wedding registry to help guests choose meaningful gifts.</p>
      </div>

      <Tabs defaultValue="planning" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="planning">Planning</TabsTrigger>
          <TabsTrigger value="categories">Categories</TabsTrigger>
          <TabsTrigger value="management">Management</TabsTrigger>
          <TabsTrigger value="creative">Creative Options</TabsTrigger>
          <TabsTrigger value="registry">My Notes</TabsTrigger>
        </TabsList>

        <TabsContent value="planning" className="space-y-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <ShoppingCart className="h-5 w-5 text-primary" />
                  <CardTitle>Registry Planning & Strategy</CardTitle>
                </div>
                <CardDescription>Foundation and approach for your wedding registry</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-semibold">Questions to Consider:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• What are your priorities for setting up a wedding registry?</li>
                    <li>• Which stores or online platforms work best for your needs?</li>
                    <li>• How will you balance practical items with special wishes?</li>
                    <li>• What's your budget range guidance for different guest relationships?</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">Planning Ideas:</h4>
                  <div className="bg-muted/30 p-3 rounded-lg text-sm text-muted-foreground">
                    <p>• Focus on home essentials, experiences, or upgrading current items</p>
                    <p>• Amazon, Target, Crate & Barrel, local specialty stores</p>
                    <p>• Mix of everyday necessities with dream items or experiences</p>
                    <p>• Range from $25-$300+ to accommodate all guest budgets</p>
                  </div>
                </div>
                <Card className="bg-muted/50">
                  <CardContent className="pt-4">
                    <Textarea
                      placeholder="Plan your registry strategy including priorities, store selections, and budget considerations..."
                      value={notes.planning_strategy}
                      onChange={(e) => handleNotesChange("planning_strategy", e.target.value)}
                      rows={6}
                    />
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="categories" className="space-y-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Package className="h-5 w-5 text-primary" />
                  <CardTitle>Gift Categories & Selection</CardTitle>
                </div>
                <CardDescription>Specific items and categories for your registry</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-semibold">Questions to Consider:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• What kitchen and cooking items do you need for your new home?</li>
                    <li>• Which bedroom, bathroom, and home decor items are priorities?</li>
                    <li>• Are there any experiences or non-traditional gifts you'd prefer?</li>
                    <li>• What items do you already have that you don't need duplicates of?</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">Category Ideas:</h4>
                  <div className="bg-muted/30 p-3 rounded-lg text-sm text-muted-foreground">
                    <p>• Stand mixer, quality knife set, dinnerware, small appliances</p>
                    <p>• Sheet sets, towels, artwork, furniture, storage solutions</p>
                    <p>• Honeymoon fund, date night experiences, subscription services</p>
                    <p>• Review current household items to avoid duplicate registrations</p>
                  </div>
                </div>
                <Card className="bg-muted/50">
                  <CardContent className="pt-4">
                    <Textarea
                      placeholder="List specific items by category that you need for your new home and life together..."
                      value={notes.gift_categories}
                      onChange={(e) => handleNotesChange("gift_categories", e.target.value)}
                      rows={6}
                    />
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="management" className="space-y-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Settings className="h-5 w-5 text-primary" />
                  <CardTitle>Registry Management</CardTitle>
                </div>
                <CardDescription>Maintaining and communicating your registry</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-semibold">Questions to Consider:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• How will you organize and update your registry as items are purchased?</li>
                    <li>• What's your plan for communicating registry information to guests?</li>
                    <li>• How will you handle duplicate gifts or unwanted items?</li>
                    <li>• What's your strategy for thank you notes and gift tracking?</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">Management Tips:</h4>
                  <div className="bg-muted/30 p-3 rounded-lg text-sm text-muted-foreground">
                    <p>• Check registry weekly, add items if popular ones sell out</p>
                    <p>• Include registry info on wedding website, not on invitations</p>
                    <p>• Research store return/exchange policies ahead of time</p>
                    <p>• Create spreadsheet tracking gifts received and thank you notes sent</p>
                  </div>
                </div>
                <Card className="bg-muted/50">
                  <CardContent className="pt-4">
                    <Textarea
                      placeholder="Plan your registry management approach including updates, communication, and gift tracking..."
                      value={notes.registry_management}
                      onChange={(e) => handleNotesChange("registry_management", e.target.value)}
                      rows={6}
                    />
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="creative" className="space-y-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-primary" />
                  <CardTitle>Alternative & Creative Options</CardTitle>
                </div>
                <CardDescription>Non-traditional registry ideas and alternatives</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-semibold">Questions to Consider:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Would you prefer cash funds for specific goals (house, honeymoon)?</li>
                    <li>• Are there charitable donations or causes you'd like guests to support?</li>
                    <li>• What handmade or personalized items would be meaningful?</li>
                    <li>• How will you handle guests who prefer to give cash or personal gifts?</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">Creative Ideas:</h4>
                  <div className="bg-muted/30 p-3 rounded-lg text-sm text-muted-foreground">
                    <p>• Honeymoon fund, down payment fund, home renovation fund</p>
                    <p>• Charity registry where guests donate to your favorite causes</p>
                    <p>• Family recipes, photo albums, custom artwork</p>
                    <p>• Graciously accept all gifts and focus on the thoughtfulness</p>
                  </div>
                </div>
                <Card className="bg-muted/50">
                  <CardContent className="pt-4">
                    <Textarea
                      placeholder="Explore alternative gift ideas including experiences, funds, charitable options, and personal touches..."
                      value={notes.creative_options}
                      onChange={(e) => handleNotesChange("creative_options", e.target.value)}
                      rows={6}
                    />
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="registry" className="space-y-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Registry Planning & Strategy</CardTitle>
                <CardDescription>Foundation and approach for your wedding registry</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Plan your registry strategy including priorities, store selections, and budget considerations..."
                  value={notes.planning_strategy}
                  onChange={(e) => handleNotesChange("planning_strategy", e.target.value)}
                  rows={4}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Gift Categories & Selection</CardTitle>
                <CardDescription>Specific items and categories for your registry</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="List specific items by category that you need for your new home and life together..."
                  value={notes.gift_categories}
                  onChange={(e) => handleNotesChange("gift_categories", e.target.value)}
                  rows={4}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Registry Management</CardTitle>
                <CardDescription>Maintaining and communicating your registry</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Plan your registry management approach including updates, communication, and gift tracking..."
                  value={notes.registry_management}
                  onChange={(e) => handleNotesChange("registry_management", e.target.value)}
                  rows={4}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Creative & Alternative Options</CardTitle>
                <CardDescription>Non-traditional registry ideas and alternatives</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Explore alternative gift ideas including experiences, funds, and charitable options..."
                  value={notes.creative_options}
                  onChange={(e) => handleNotesChange("creative_options", e.target.value)}
                  rows={4}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Complete Registry Plan</CardTitle>
                <CardDescription>Your comprehensive registry strategy and item list</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Create your complete registry plan including stores, categories, and management strategy..."
                  value={notes.registry_plan}
                  onChange={(e) => handleNotesChange("registry_plan", e.target.value)}
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