"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle2, Home, DollarSign, Baby, Palette, Info, Clock, Lightbulb } from "lucide-react"
import { useBabyPlanning } from "@/contexts/baby-planning-context"

interface NurseryItem {
  id: string
  name: string
  category: 'furniture' | 'decor' | 'lighting' | 'storage' | 'comfort'
  priority: 'essential' | 'helpful' | 'nice-to-have'
  estimatedCost: string
  description: string
  timing: string
  completed: boolean
}

export function NurseryDesign() {
  const { babyPlanningData } = useBabyPlanning()
  
  const [nurseryItems, setNurseryItems] = useState<NurseryItem[]>([
    // Essential Furniture
    { id: '1', name: 'Crib', category: 'furniture', priority: 'essential', estimatedCost: '$150-800', description: 'Safe sleeping space that meets current safety standards', timing: 'Before birth', completed: false },
    { id: '2', name: 'Crib Mattress', category: 'furniture', priority: 'essential', estimatedCost: '$100-400', description: 'Firm, well-fitting mattress', timing: 'Before birth', completed: false },
    { id: '3', name: 'Changing Table/Dresser Combo', category: 'furniture', priority: 'essential', estimatedCost: '$200-600', description: 'Safe changing surface with storage', timing: 'Before birth', completed: false },
    { id: '4', name: 'Glider/Rocking Chair', category: 'furniture', priority: 'helpful', estimatedCost: '$200-800', description: 'Comfortable seating for feeding and bonding', timing: 'Before birth', completed: false },
    { id: '5', name: 'Ottoman', category: 'furniture', priority: 'nice-to-have', estimatedCost: '$100-300', description: 'Footrest for nursing chair', timing: 'Before birth', completed: false },

    // Storage Solutions
    { id: '6', name: 'Closet Organization System', category: 'storage', priority: 'helpful', estimatedCost: '$50-200', description: 'Maximize closet space efficiency', timing: '2nd trimester', completed: false },
    { id: '7', name: 'Storage Bins/Baskets', category: 'storage', priority: 'helpful', estimatedCost: '$30-100', description: 'Organize toys, clothes, and supplies', timing: '2nd trimester', completed: false },
    { id: '8', name: 'Bookshelf', category: 'storage', priority: 'nice-to-have', estimatedCost: '$50-300', description: 'Store books and decorative items', timing: '3rd trimester', completed: false },
    { id: '9', name: 'Toy Chest/Bench', category: 'storage', priority: 'nice-to-have', estimatedCost: '$100-400', description: 'Large toy storage with seating', timing: '6+ months', completed: false },

    // Lighting
    { id: '10', name: 'Overhead Light/Ceiling Fan', category: 'lighting', priority: 'essential', estimatedCost: '$50-300', description: 'Main room lighting with dimmer', timing: '2nd trimester', completed: false },
    { id: '11', name: 'Table Lamp', category: 'lighting', priority: 'helpful', estimatedCost: '$30-150', description: 'Soft lighting for nighttime feeds', timing: 'Before birth', completed: false },
    { id: '12', name: 'Night Light', category: 'lighting', priority: 'helpful', estimatedCost: '$10-50', description: 'Gentle navigation light', timing: 'Before birth', completed: false },
    { id: '13', name: 'Blackout Curtains', category: 'lighting', priority: 'helpful', estimatedCost: '$40-150', description: 'Block light for better sleep', timing: 'Before birth', completed: false },

    // Decor & Comfort
    { id: '14', name: 'Wall Art/Decor', category: 'decor', priority: 'nice-to-have', estimatedCost: '$50-300', description: 'Personalize and beautify the space', timing: '2nd-3rd trimester', completed: false },
    { id: '15', name: 'Mobile', category: 'decor', priority: 'nice-to-have', estimatedCost: '$30-100', description: 'Visual stimulation above crib', timing: 'Before birth', completed: false },
    { id: '16', name: 'Area Rug', category: 'comfort', priority: 'helpful', estimatedCost: '$50-300', description: 'Warmth and comfort for floor time', timing: '3rd trimester', completed: false },
    { id: '17', name: 'Window Treatments', category: 'decor', priority: 'helpful', estimatedCost: '$50-200', description: 'Privacy and light control', timing: '2nd trimester', completed: false },
    { id: '18', name: 'Hamper', category: 'storage', priority: 'essential', estimatedCost: '$20-80', description: 'Dirty clothes storage', timing: 'Before birth', completed: false },
    { id: '19', name: 'Mirror', category: 'decor', priority: 'nice-to-have', estimatedCost: '$30-150', description: 'Make room feel larger and brighter', timing: '3rd trimester', completed: false },
    { id: '20', name: 'Humidifier', category: 'comfort', priority: 'helpful', estimatedCost: '$40-120', description: 'Maintain healthy air moisture', timing: 'Before birth', completed: false }
  ])

  const [designTheme, setDesignTheme] = useState<string>('neutral')
  const [budget, setBudget] = useState<string>('moderate')

  const toggleCompleted = (id: string) => {
    setNurseryItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    )
  }

  const completedItems = nurseryItems.filter(i => i.completed).length
  const totalItems = nurseryItems.length
  const progressPercentage = (completedItems / totalItems) * 100

  const essentialItems = nurseryItems.filter(i => i.priority === 'essential')
  const completedEssentials = essentialItems.filter(i => i.completed).length

  const categories = [
    { key: 'furniture', label: 'Furniture', icon: '🪑' },
    { key: 'storage', label: 'Storage', icon: '📦' },
    { key: 'lighting', label: 'Lighting', icon: '💡' },
    { key: 'decor', label: 'Decor', icon: '🖼️' },
    { key: 'comfort', label: 'Comfort', icon: '🛏️' }
  ]

  const designThemes = [
    { key: 'neutral', label: 'Gender Neutral', description: 'Yellows, greens, whites, and grays' },
    { key: 'modern', label: 'Modern Minimalist', description: 'Clean lines, white/black/gray palette' },
    { key: 'woodland', label: 'Woodland Adventure', description: 'Forest animals, trees, earth tones' },
    { key: 'celestial', label: 'Celestial Dreams', description: 'Stars, moons, soft blues and whites' },
    { key: 'vintage', label: 'Vintage Classic', description: 'Timeless patterns, soft pastels' },
    { key: 'bohemian', label: 'Bohemian Chic', description: 'Macrame, natural textures, warm tones' }
  ]

  const budgetRanges = [
    { key: 'budget', label: 'Budget-Friendly', range: '$500-1,500', description: 'Focus on essentials, DIY elements' },
    { key: 'moderate', label: 'Moderate', range: '$1,500-3,000', description: 'Good quality basics plus some nice touches' },
    { key: 'luxury', label: 'Luxury', range: '$3,000+', description: 'High-end furniture and custom elements' }
  ]

  const designTips = [
    { category: 'Safety', tip: 'Ensure all furniture is secured to walls and meets current safety standards' },
    { category: 'Functionality', tip: 'Design for easy cleaning and accessibility during nighttime visits' },
    { category: 'Growth', tip: 'Choose pieces that can adapt as your child grows' },
    { category: 'Comfort', tip: 'Prioritize comfortable seating for long feeding sessions' },
    { category: 'Storage', tip: 'Plan for more storage than you think you need' },
    { category: 'Lighting', tip: 'Layer lighting: bright for daily care, dim for nighttime' }
  ]

  const safetyChecklist = [
    'Crib meets current CPSC safety standards',
    'All furniture secured to walls (especially tall pieces)',
    'No loose cords near crib or changing area',
    'Outlet covers installed',
    'Sharp corners protected with guards',
    'Small objects kept out of reach',
    'Blinds/curtain cords secured or eliminated',
    'Smoke detector installed and working'
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Nursery Design</h2>
          <p className="text-muted-foreground">Create a safe, functional, and beautiful space for your baby</p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="secondary" className="text-lg px-3 py-1">
            Home & Family Prep
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Progress</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{completedItems}/{totalItems}</div>
            <Progress value={progressPercentage} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">
              items completed
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Essentials</CardTitle>
            <Baby className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{completedEssentials}/{essentialItems.length}</div>
            <Progress 
              value={(completedEssentials / essentialItems.length) * 100} 
              className="mt-2" 
            />
            <p className="text-xs text-muted-foreground mt-2">
              essential items
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Categories</CardTitle>
            <Home className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{categories.length}</div>
            <p className="text-xs text-muted-foreground">
              design categories
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Budget Range</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$500-3K+</div>
            <p className="text-xs text-muted-foreground">
              typical nursery cost
            </p>
          </CardContent>
        </Card>
      </div>

      <Alert>
        <Info className="h-4 w-4" />
        <AlertDescription>
          <strong>Start early:</strong> Begin nursery planning in your second trimester to allow time for delivery and setup before baby arrives.
        </AlertDescription>
      </Alert>

      <Tabs defaultValue="items" className="w-full">
        <TabsList>
          <TabsTrigger value="items">Nursery Items</TabsTrigger>
          <TabsTrigger value="themes">Design Themes</TabsTrigger>
          <TabsTrigger value="budget">Budget Planning</TabsTrigger>
          <TabsTrigger value="safety">Safety Checklist</TabsTrigger>
          <TabsTrigger value="tips">Design Tips</TabsTrigger>
        </TabsList>

        <TabsContent value="items" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Nursery Items Checklist</CardTitle>
              <CardDescription>Everything you need to create a complete nursery</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {categories.map(category => {
                  const categoryItems = nurseryItems.filter(i => i.category === category.key)
                  const categoryCompleted = categoryItems.filter(i => i.completed).length
                  
                  return (
                    <div key={category.key} className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl">{category.icon}</span>
                        <h3 className="text-lg font-semibold">{category.label}</h3>
                        <Badge variant="outline">
                          {categoryCompleted}/{categoryItems.length}
                        </Badge>
                      </div>
                      
                      <div className="space-y-3">
                        {categoryItems.map(item => (
                          <div key={item.id} className="flex items-start space-x-3 p-4 border rounded-lg">
                            <button 
                              onClick={() => toggleCompleted(item.id)}
                              className="mt-1"
                            >
                              <CheckCircle2 
                                className={`h-5 w-5 ${
                                  item.completed 
                                    ? 'text-primary' 
                                    : 'text-muted-foreground'
                                }`} 
                              />
                            </button>
                            
                            <div className="flex-1 space-y-2">
                              <div className="flex items-center space-x-2 flex-wrap">
                                <h4 className={`font-medium ${item.completed ? 'line-through text-muted-foreground' : ''}`}>
                                  {item.name}
                                </h4>
                                <Badge 
                                  variant={item.priority === 'essential' ? 'default' : 'secondary'}
                                  className="text-xs"
                                >
                                  {item.priority}
                                </Badge>
                              </div>
                              
                              <p className="text-sm text-muted-foreground">
                                {item.description}
                              </p>
                              
                              <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                                <div className="flex items-center space-x-1">
                                  <Clock className="h-3 w-3" />
                                  <span>{item.timing}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <DollarSign className="h-3 w-3" />
                                  <span>{item.estimatedCost}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="themes" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5" />
                Nursery Design Themes
              </CardTitle>
              <CardDescription>Popular themes to inspire your nursery design</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {designThemes.map((theme, index) => (
                  <div key={theme.key} className="p-4 border rounded-lg cursor-pointer hover:bg-muted"
                       onClick={() => setDesignTheme(theme.key)}>
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="font-semibold">{theme.label}</h4>
                      {designTheme === theme.key && (
                        <Badge variant="default" className="text-xs">
                          Selected
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{theme.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-muted rounded-lg">
                <h4 className="font-semibold mb-3">Theme Selection Tips</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Choose colors and patterns you'll enjoy looking at every day</li>
                  <li>• Consider themes that can grow with your child</li>
                  <li>• Don't feel locked into traditional "baby" themes</li>
                  <li>• Mix patterns and textures in the same color family</li>
                  <li>• Add personality with accessories rather than large furniture</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="budget" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5" />
                Budget Planning Guide
              </CardTitle>
              <CardDescription>Plan your nursery within your budget</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {budgetRanges.map((budgetRange, index) => (
                  <div key={budgetRange.key} className="p-4 border rounded-lg cursor-pointer hover:bg-muted"
                       onClick={() => setBudget(budgetRange.key)}>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">{budgetRange.label}</h4>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium">{budgetRange.range}</span>
                        {budget === budgetRange.key && (
                          <Badge variant="default" className="text-xs">
                            Selected
                          </Badge>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{budgetRange.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-muted rounded-lg">
                <h4 className="font-semibold mb-3">Money-Saving Tips</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Buy used furniture and refinish if needed</li>
                  <li>• DIY artwork and decorations</li>
                  <li>• Shop end-of-season sales</li>
                  <li>• Ask family for hand-me-down furniture</li>
                  <li>• Focus budget on safety essentials first</li>
                  <li>• Consider convertible furniture that grows with baby</li>
                  <li>• Mix high and low-end pieces</li>
                </ul>
              </div>

              <div className="mt-4 p-4 border rounded-lg">
                <h4 className="font-semibold mb-3">Investment Priorities</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="font-medium text-primary">Splurge On</div>
                    <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                      <li>• Quality crib mattress</li>
                      <li>• Comfortable chair</li>
                      <li>• Good lighting</li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <div className="font-medium">Moderate On</div>
                    <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                      <li>• Changing table</li>
                      <li>• Storage solutions</li>
                      <li>• Window treatments</li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <div className="font-medium">Save On</div>
                    <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                      <li>• Decorative items</li>
                      <li>• Storage baskets</li>
                      <li>• Wall art</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="safety" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Baby className="h-5 w-5" />
                Nursery Safety Checklist
              </CardTitle>
              <CardDescription>Essential safety measures for your baby's room</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {safetyChecklist.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 border rounded-lg">
                    <CheckCircle2 className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <Alert className="mt-6">
                <Baby className="h-4 w-4" />
                <AlertDescription>
                  <strong>Safety first:</strong> Review and update safety measures as your child grows and becomes more mobile. What's safe for a newborn may not be safe for a toddler.
                </AlertDescription>
              </Alert>

              <div className="mt-4 p-4 bg-muted rounded-lg">
                <h4 className="font-semibold mb-3">Age-Based Safety Updates</h4>
                <div className="space-y-3">
                  <div>
                    <span className="font-medium text-sm">0-6 months:</span>
                    <span className="text-sm text-muted-foreground ml-2">Focus on sleep safety and secure furniture</span>
                  </div>
                  <div>
                    <span className="font-medium text-sm">6-12 months:</span>
                    <span className="text-sm text-muted-foreground ml-2">Add outlet covers and cabinet locks as baby becomes mobile</span>
                  </div>
                  <div>
                    <span className="font-medium text-sm">12+ months:</span>
                    <span className="text-sm text-muted-foreground ml-2">Full childproofing including drawer locks and corner guards</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tips" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5" />
                Design Tips & Ideas
              </CardTitle>
              <CardDescription>Expert advice for creating the perfect nursery</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {designTips.map((tip, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {tip.category}
                      </Badge>
                    </div>
                    <p className="text-sm">{tip.tip}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold">Room Planning Tips:</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <h5 className="font-medium mb-2">Layout Considerations</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Place crib away from windows and blinds</li>
                      <li>• Position changing table near diaper supplies</li>
                      <li>• Ensure good lighting over changing area</li>
                      <li>• Keep nursing chair near light switch</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-muted rounded-lg">
                    <h5 className="font-medium mb-2">Smart Storage Ideas</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Use vertical space with tall shelving</li>
                      <li>• Under-crib storage for extra linens</li>
                      <li>• Over-door organizers for small items</li>
                      <li>• Multi-functional furniture with storage</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-muted rounded-lg">
                    <h5 className="font-medium mb-2">Future-Proofing</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Choose convertible crib to toddler bed</li>
                      <li>• Select timeless colors and patterns</li>
                      <li>• Plan for toy storage and play area</li>
                      <li>• Consider desk space for future homework</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-muted rounded-lg">
                    <h5 className="font-medium mb-2">Personal Touches</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Display meaningful photos and keepsakes</li>
                      <li>• Create a gallery wall with favorite art</li>
                      <li>• Add plants for natural beauty (safe varieties)</li>
                      <li>• Include special books from your childhood</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}