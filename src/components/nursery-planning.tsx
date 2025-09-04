"use client"

import { useState } from "react"
import { useBabyPlanning } from "@/contexts/baby-planning-context"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Home,
  Plus,
  Palette,
  Package,
  Ruler,
  CheckCircle,
  Clock,
  DollarSign,
  Lightbulb,
  Sofa,
} from "lucide-react"

interface NurseryItem {
  id: string
  name: string
  category: 'furniture' | 'decor' | 'storage' | 'lighting'
  priority: 'essential' | 'nice-to-have' | 'luxury'
  purchased: boolean
  cost: number
  notes: string
  dimensions?: string
  color?: string
}

interface DesignIdea {
  id: string
  theme: string
  colors: string[]
  style: string
  description: string
  inspiration: string
}

const defaultNurseryItems: NurseryItem[] = [
  { id: '1', name: 'Crib', category: 'furniture', priority: 'essential', purchased: false, cost: 400, notes: 'Convertible to toddler bed', dimensions: '54" x 30"' },
  { id: '2', name: 'Changing Table', category: 'furniture', priority: 'essential', purchased: false, cost: 250, notes: 'With storage underneath' },
  { id: '3', name: 'Glider/Rocking Chair', category: 'furniture', priority: 'essential', purchased: false, cost: 300, notes: 'For feeding and comfort' },
  { id: '4', name: 'Dresser', category: 'furniture', priority: 'nice-to-have', purchased: false, cost: 200, notes: 'Can double as changing table' },
  { id: '5', name: 'Bookshelf', category: 'furniture', priority: 'nice-to-have', purchased: false, cost: 80, notes: 'For books and toys' },
  { id: '6', name: 'Wall Art/Prints', category: 'decor', priority: 'nice-to-have', purchased: false, cost: 60, notes: 'Matches theme' },
  { id: '7', name: 'Mobile', category: 'decor', priority: 'nice-to-have', purchased: false, cost: 40, notes: 'Above crib for visual stimulation' },
  { id: '8', name: 'Area Rug', category: 'decor', priority: 'nice-to-have', purchased: false, cost: 100, notes: 'Soft for tummy time' },
  { id: '9', name: 'Curtains/Blinds', category: 'decor', priority: 'essential', purchased: false, cost: 80, notes: 'Blackout for better sleep' },
  { id: '10', name: 'Toy Storage Bins', category: 'storage', priority: 'nice-to-have', purchased: false, cost: 50, notes: 'Easy to clean' },
  { id: '11', name: 'Closet Organizers', category: 'storage', priority: 'nice-to-have', purchased: false, cost: 60, notes: 'Maximize closet space' },
  { id: '12', name: 'Ceiling Light', category: 'lighting', priority: 'essential', purchased: false, cost: 120, notes: 'Adjustable brightness' },
  { id: '13', name: 'Night Light', category: 'lighting', priority: 'nice-to-have', purchased: false, cost: 25, notes: 'For nighttime feeding' },
  { id: '14', name: 'Table Lamp', category: 'lighting', priority: 'nice-to-have', purchased: false, cost: 45, notes: 'Soft reading light' }
]

const designIdeas: DesignIdea[] = [
  {
    id: '1',
    theme: 'Modern Minimalist',
    colors: ['white', 'gray', 'natural wood'],
    style: 'Clean lines, simple forms',
    description: 'A serene, uncluttered space with natural materials and neutral colors.',
    inspiration: 'Scandinavian design principles'
  },
  {
    id: '2',
    theme: 'Woodland Adventure',
    colors: ['forest green', 'brown', 'cream'],
    style: 'Nature-inspired, cozy',
    description: 'Bring the outdoors in with forest animals, trees, and natural textures.',
    inspiration: 'Camping and forest adventures'
  },
  {
    id: '3',
    theme: 'Celestial Dreams',
    colors: ['navy blue', 'gold', 'white'],
    style: 'Dreamy, magical',
    description: 'Stars, moons, and clouds create a peaceful nighttime atmosphere.',
    inspiration: 'Night sky and constellation maps'
  },
  {
    id: '4',
    theme: 'Vintage Charm',
    colors: ['dusty rose', 'cream', 'sage green'],
    style: 'Classic, timeless',
    description: 'Antique-inspired pieces with soft, muted colors and vintage details.',
    inspiration: 'Victorian nurseries and heirloom pieces'
  }
]

export function NurseryPlanning() {
  const { babyPlanningData } = useBabyPlanning()
  const [nurseryItems, setNurseryItems] = useState<NurseryItem[]>(defaultNurseryItems)
  const [selectedTab, setSelectedTab] = useState("design")

  const toggleItemPurchased = (id: string) => {
    setNurseryItems(items =>
      items.map(item =>
        item.id === id ? { ...item, purchased: !item.purchased } : item
      )
    )
  }

  const getProgressStats = () => {
    const essentialItems = nurseryItems.filter(item => item.priority === 'essential')
    const purchasedEssential = essentialItems.filter(item => item.purchased)
    const totalPurchased = nurseryItems.filter(item => item.purchased)
    
    const totalCost = nurseryItems.reduce((sum, item) => sum + item.cost, 0)
    const spentCost = nurseryItems.filter(item => item.purchased).reduce((sum, item) => sum + item.cost, 0)
    
    return {
      essentialProgress: Math.round((purchasedEssential.length / essentialItems.length) * 100),
      totalProgress: Math.round((totalPurchased.length / nurseryItems.length) * 100),
      totalCost,
      spentCost
    }
  }

  const stats = getProgressStats()

  const categories = [
    { id: 'furniture', name: 'Furniture', icon: Sofa, color: 'bg-blue-100 text-blue-700' },
    { id: 'decor', name: 'Decor', icon: Palette, color: 'bg-pink-100 text-pink-700' },
    { id: 'storage', name: 'Storage', icon: Package, color: 'bg-green-100 text-green-700' },
    { id: 'lighting', name: 'Lighting', icon: Lightbulb, color: 'bg-yellow-100 text-yellow-700' }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold flex items-center">
          <Home className="mr-2 h-8 w-8" />
          Nursery Planning
        </h1>
        <p className="text-muted-foreground">
          Design and organize the perfect space for {babyPlanningData.babyName || 'your baby'}
        </p>
      </div>

      {/* Current Nursery Info */}
      <Card>
        <CardHeader>
          <CardTitle>Current Nursery Plan</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <Label className="text-sm font-medium">Theme</Label>
              <p className="text-sm text-muted-foreground">
                {babyPlanningData.nurseryTheme || "No theme selected"}
              </p>
            </div>
            <div>
              <Label className="text-sm font-medium">Style</Label>
              <p className="text-sm text-muted-foreground">
                {babyPlanningData.nurseryStyle.charAt(0).toUpperCase() + babyPlanningData.nurseryStyle.slice(1)}
              </p>
            </div>
            <div>
              <Label className="text-sm font-medium">Completion Goal</Label>
              <p className="text-sm text-muted-foreground">
                {babyPlanningData.nurseryCompletionGoal ? 
                  new Date(babyPlanningData.nurseryCompletionGoal).toLocaleDateString() : 
                  "No goal set"
                }
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Progress Stats */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Essential Items</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.essentialProgress}%</div>
            <Progress value={stats.essentialProgress} className="mt-2 h-2" />
            <p className="text-xs text-muted-foreground mt-1">Must-have nursery items</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overall Progress</CardTitle>
            <Clock className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalProgress}%</div>
            <Progress value={stats.totalProgress} className="mt-2 h-2" />
            <p className="text-xs text-muted-foreground mt-1">All nursery items</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Budget</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${stats.totalCost.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground mt-1">Estimated total cost</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Spent</CardTitle>
            <DollarSign className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${stats.spentCost.toLocaleString()}</div>
            <Progress value={Math.round((stats.spentCost / stats.totalCost) * 100)} className="mt-2 h-2" />
            <p className="text-xs text-muted-foreground mt-1">
              {Math.round((stats.spentCost / stats.totalCost) * 100)}% of budget
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="design">Design Ideas</TabsTrigger>
          <TabsTrigger value="shopping">Shopping List</TabsTrigger>
          <TabsTrigger value="layout">Room Layout</TabsTrigger>
          <TabsTrigger value="inspiration">Inspiration</TabsTrigger>
        </TabsList>

        <TabsContent value="design" className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Design Themes & Ideas</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {designIdeas.map((idea) => (
              <Card key={idea.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{idea.theme}</CardTitle>
                  <CardDescription>{idea.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <Label className="text-sm font-medium">Color Palette</Label>
                    <div className="flex gap-2 mt-1">
                      {idea.colors.map((color, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {color}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <Label className="text-sm font-medium">Style</Label>
                    <p className="text-sm text-muted-foreground">{idea.style}</p>
                  </div>
                  
                  <div>
                    <Label className="text-sm font-medium">Inspiration</Label>
                    <p className="text-sm text-muted-foreground">{idea.inspiration}</p>
                  </div>

                  <Button variant="outline" className="w-full mt-3">
                    Choose This Theme
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="shopping" className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Nursery Shopping List</h3>
            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Item
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add Nursery Item</DialogTitle>
                  <DialogDescription>
                    Add a new item to your nursery shopping list
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="item-name">Item Name</Label>
                    <Input id="item-name" placeholder="e.g., Ottoman for Glider" />
                  </div>
                  <div>
                    <Label htmlFor="category">Category</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map(category => (
                          <SelectItem key={category.id} value={category.id}>
                            {category.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="cost">Estimated Cost</Label>
                    <Input id="cost" type="number" placeholder="100" />
                  </div>
                  <div>
                    <Label htmlFor="notes">Notes</Label>
                    <Textarea id="notes" placeholder="Color, size, specific requirements..." />
                  </div>
                  <Button className="w-full">Add to List</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="space-y-4">
            {categories.map(category => {
              const categoryItems = nurseryItems.filter(item => item.category === category.id)
              if (categoryItems.length === 0) return null

              const IconComponent = category.icon
              const purchasedCount = categoryItems.filter(item => item.purchased).length

              return (
                <Card key={category.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center">
                        <IconComponent className="mr-2 h-5 w-5" />
                        {category.name}
                      </CardTitle>
                      <Badge variant="outline" className="text-xs">
                        {purchasedCount}/{categoryItems.length} purchased
                      </Badge>
                    </div>
                    <Progress 
                      value={Math.round((purchasedCount / categoryItems.length) * 100)} 
                      className="h-2" 
                    />
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {categoryItems.map(item => (
                        <div
                          key={item.id}
                          className={`flex items-start space-x-3 p-3 rounded-lg border transition-colors ${
                            item.purchased ? 'bg-green-50 border-green-200' : 'bg-background'
                          }`}
                        >
                          <Checkbox
                            checked={item.purchased}
                            onCheckedChange={() => toggleItemPurchased(item.id)}
                            className="mt-1"
                          />
                          <div className="flex-1 space-y-1">
                            <div className="flex items-center justify-between">
                              <div className={`font-medium ${item.purchased ? 'line-through text-muted-foreground' : ''}`}>
                                {item.name}
                              </div>
                              <div className="text-sm font-medium text-green-600">
                                ${item.cost}
                              </div>
                            </div>
                            {item.notes && (
                              <div className="text-sm text-muted-foreground">{item.notes}</div>
                            )}
                            {item.dimensions && (
                              <div className="text-xs text-muted-foreground">
                                Dimensions: {item.dimensions}
                              </div>
                            )}
                            <div className="flex gap-1">
                              <Badge
                                variant={item.priority === 'essential' ? 'destructive' : 'secondary'}
                                className="text-xs"
                              >
                                {item.priority === 'essential' ? 'Essential' : 'Nice to Have'}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </TabsContent>

        <TabsContent value="layout" className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Room Layout Planning</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Ruler className="mr-2 h-5 w-5" />
                  Room Measurements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Room Length</Label>
                    <Input placeholder="12 ft" />
                  </div>
                  <div>
                    <Label>Room Width</Label>
                    <Input placeholder="10 ft" />
                  </div>
                </div>
                <div>
                  <Label>Window Locations</Label>
                  <Textarea placeholder="Describe window placement..." />
                </div>
                <div>
                  <Label>Door Locations</Label>
                  <Textarea placeholder="Describe door placement..." />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Layout Tips</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>Place crib away from windows to avoid drafts and direct sunlight</div>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>Position glider near a window for natural light during feeding</div>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>Keep changing table close to dresser for easy access to supplies</div>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>Leave enough space to walk around furniture comfortably</div>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>Ensure electrical outlets are available for monitors and lamps</div>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>Consider a small rug for tummy time and play area</div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Safety Considerations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3 text-sm">
                  <div className="font-medium">Essential Safety Items:</div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="outlet-covers" />
                      <label htmlFor="outlet-covers" className="text-sm">Outlet covers</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="corner-guards" />
                      <label htmlFor="corner-guards" className="text-sm">Furniture corner guards</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="window-guards" />
                      <label htmlFor="window-guards" className="text-sm">Window guards/stops</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="cord-covers" />
                      <label htmlFor="cord-covers" className="text-sm">Blind cord covers</label>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3 text-sm">
                  <div className="font-medium">Baby-Proofing Checklist:</div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="furniture-anchors" />
                      <label htmlFor="furniture-anchors" className="text-sm">Furniture anchored to wall</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="drawer-latches" />
                      <label htmlFor="drawer-latches" className="text-sm">Drawer/cabinet latches</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="door-knob-covers" />
                      <label htmlFor="door-knob-covers" className="text-sm">Door knob covers</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="temperature-check" />
                      <label htmlFor="temperature-check" className="text-sm">Room temperature monitoring</label>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="inspiration" className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Design Inspiration</h3>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Inspiration
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <div className="aspect-square bg-gradient-to-br from-pink-100 to-blue-100 rounded-t-lg flex items-center justify-center">
                  <div className="text-muted-foreground">
                    <Package className="h-12 w-12" />
                  </div>
                </div>
                <CardContent className="p-4">
                  <h4 className="font-medium mb-2">Inspiration #{index}</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Beautiful nursery design with {index % 2 === 0 ? 'modern' : 'classic'} elements
                  </p>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="text-xs">
                      {index % 2 === 0 ? 'Modern' : 'Classic'}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {index % 3 === 0 ? 'Neutral' : index % 3 === 1 ? 'Colorful' : 'Pastel'}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}