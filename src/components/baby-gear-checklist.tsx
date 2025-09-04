"use client"

import { useState } from "react"
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
  ShoppingCart,
  Plus,
  Check,
  Star,
  DollarSign,
  Package,
  Baby,
  Home,
  Shirt,
  Car,
  Shield,
  Search,
} from "lucide-react"

interface GearItem {
  id: string
  name: string
  category: string
  priority: 'essential' | 'nice-to-have' | 'luxury'
  estimatedCost: number
  purchased: boolean
  notes: string
  brand?: string
  purchaseDate?: string
}

const defaultGearItems: GearItem[] = [
  // Sleep & Safety
  { id: '1', name: 'Crib', category: 'sleep-safety', priority: 'essential', estimatedCost: 300, purchased: false, notes: '' },
  { id: '2', name: 'Crib Mattress', category: 'sleep-safety', priority: 'essential', estimatedCost: 150, purchased: false, notes: '' },
  { id: '3', name: 'Fitted Crib Sheets (3-4)', category: 'sleep-safety', priority: 'essential', estimatedCost: 50, purchased: false, notes: '' },
  { id: '4', name: 'Sleep Sacks', category: 'sleep-safety', priority: 'essential', estimatedCost: 40, purchased: false, notes: '' },
  { id: '5', name: 'Baby Monitor', category: 'sleep-safety', priority: 'essential', estimatedCost: 200, purchased: false, notes: '' },
  { id: '6', name: 'White Noise Machine', category: 'sleep-safety', priority: 'nice-to-have', estimatedCost: 30, purchased: false, notes: '' },
  { id: '7', name: 'Blackout Curtains', category: 'sleep-safety', priority: 'nice-to-have', estimatedCost: 60, purchased: false, notes: '' },
  
  // Feeding
  { id: '8', name: 'Bottles (6-8)', category: 'feeding', priority: 'essential', estimatedCost: 80, purchased: false, notes: '' },
  { id: '9', name: 'Bottle Brush', category: 'feeding', priority: 'essential', estimatedCost: 15, purchased: false, notes: '' },
  { id: '10', name: 'Burp Cloths (6-8)', category: 'feeding', priority: 'essential', estimatedCost: 25, purchased: false, notes: '' },
  { id: '11', name: 'High Chair', category: 'feeding', priority: 'nice-to-have', estimatedCost: 150, purchased: false, notes: 'Needed around 6 months' },
  { id: '12', name: 'Breast Pump', category: 'feeding', priority: 'essential', estimatedCost: 300, purchased: false, notes: 'If breastfeeding' },
  { id: '13', name: 'Nursing Pillow', category: 'feeding', priority: 'nice-to-have', estimatedCost: 40, purchased: false, notes: '' },
  { id: '14', name: 'Bottle Warmer', category: 'feeding', priority: 'nice-to-have', estimatedCost: 50, purchased: false, notes: '' },
  
  // Diaper & Bath
  { id: '15', name: 'Diapers (Newborn & Size 1)', category: 'diaper-bath', priority: 'essential', estimatedCost: 100, purchased: false, notes: 'Start with variety pack' },
  { id: '16', name: 'Baby Wipes', category: 'diaper-bath', priority: 'essential', estimatedCost: 30, purchased: false, notes: '' },
  { id: '17', name: 'Changing Table/Pad', category: 'diaper-bath', priority: 'essential', estimatedCost: 200, purchased: false, notes: '' },
  { id: '18', name: 'Diaper Pail', category: 'diaper-bath', priority: 'nice-to-have', estimatedCost: 50, purchased: false, notes: '' },
  { id: '19', name: 'Baby Bathtub', category: 'diaper-bath', priority: 'essential', estimatedCost: 40, purchased: false, notes: '' },
  { id: '20', name: 'Hooded Baby Towels (2-3)', category: 'diaper-bath', priority: 'essential', estimatedCost: 30, purchased: false, notes: '' },
  { id: '21', name: 'Baby Washcloths (6-8)', category: 'diaper-bath', priority: 'essential', estimatedCost: 20, purchased: false, notes: '' },
  { id: '22', name: 'Baby Shampoo/Body Wash', category: 'diaper-bath', priority: 'essential', estimatedCost: 15, purchased: false, notes: '' },
  
  // Clothing
  { id: '23', name: 'Onesies (8-10)', category: 'clothing', priority: 'essential', estimatedCost: 50, purchased: false, notes: 'Newborn and 0-3 months' },
  { id: '24', name: 'Sleepers/Pajamas (6-8)', category: 'clothing', priority: 'essential', estimatedCost: 60, purchased: false, notes: '' },
  { id: '25', name: 'Going Home Outfit', category: 'clothing', priority: 'essential', estimatedCost: 25, purchased: false, notes: '2 sizes just in case' },
  { id: '26', name: 'Socks/Booties (6 pairs)', category: 'clothing', priority: 'essential', estimatedCost: 20, purchased: false, notes: '' },
  { id: '27', name: 'Hats (2-3)', category: 'clothing', priority: 'essential', estimatedCost: 15, purchased: false, notes: '' },
  { id: '28', name: 'Mittens', category: 'clothing', priority: 'nice-to-have', estimatedCost: 10, purchased: false, notes: 'To prevent scratching' },
  
  // Mobility & Travel
  { id: '29', name: 'Car Seat (Infant)', category: 'travel', priority: 'essential', estimatedCost: 200, purchased: false, notes: 'Must have before leaving hospital' },
  { id: '30', name: 'Stroller', category: 'travel', priority: 'essential', estimatedCost: 300, purchased: false, notes: '' },
  { id: '31', name: 'Baby Carrier/Wrap', category: 'travel', priority: 'nice-to-have', estimatedCost: 80, purchased: false, notes: '' },
  { id: '32', name: 'Diaper Bag', category: 'travel', priority: 'essential', estimatedCost: 70, purchased: false, notes: '' },
  
  // Health & Safety
  { id: '33', name: 'Baby Thermometer', category: 'health-safety', priority: 'essential', estimatedCost: 40, purchased: false, notes: '' },
  { id: '34', name: 'Baby First Aid Kit', category: 'health-safety', priority: 'essential', estimatedCost: 30, purchased: false, notes: '' },
  { id: '35', name: 'Nail Clippers/File', category: 'health-safety', priority: 'essential', estimatedCost: 10, purchased: false, notes: '' },
  { id: '36', name: 'Baby Gates', category: 'health-safety', priority: 'nice-to-have', estimatedCost: 100, purchased: false, notes: 'Needed when mobile' },
  { id: '37', name: 'Outlet Covers', category: 'health-safety', priority: 'nice-to-have', estimatedCost: 20, purchased: false, notes: '' },
  { id: '38', name: 'Cabinet Locks', category: 'health-safety', priority: 'nice-to-have', estimatedCost: 25, purchased: false, notes: '' },
]

const categories = [
  { id: 'sleep-safety', name: 'Sleep & Safety', icon: Baby, color: 'bg-blue-100 text-blue-700' },
  { id: 'feeding', name: 'Feeding', icon: Package, color: 'bg-green-100 text-green-700' },
  { id: 'diaper-bath', name: 'Diaper & Bath', icon: Home, color: 'bg-purple-100 text-purple-700' },
  { id: 'clothing', name: 'Clothing', icon: Shirt, color: 'bg-pink-100 text-pink-700' },
  { id: 'travel', name: 'Travel & Mobility', icon: Car, color: 'bg-orange-100 text-orange-700' },
  { id: 'health-safety', name: 'Health & Safety', icon: Shield, color: 'bg-red-100 text-red-700' }
]

export function BabyGearChecklist() {
  const [gearItems, setGearItems] = useState<GearItem[]>(defaultGearItems)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [selectedPriority, setSelectedPriority] = useState<string>("all")

  const toggleItemPurchased = (id: string) => {
    setGearItems(items =>
      items.map(item =>
        item.id === id ? { ...item, purchased: !item.purchased } : item
      )
    )
  }

  const filteredItems = gearItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.notes.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory
    const matchesPriority = selectedPriority === "all" || item.priority === selectedPriority
    
    return matchesSearch && matchesCategory && matchesPriority
  })

  const getProgressStats = () => {
    const essentialItems = gearItems.filter(item => item.priority === 'essential')
    const purchasedEssential = essentialItems.filter(item => item.purchased)
    const totalPurchased = gearItems.filter(item => item.purchased)
    
    const totalCost = gearItems.reduce((sum, item) => sum + item.estimatedCost, 0)
    const spentCost = gearItems.filter(item => item.purchased).reduce((sum, item) => sum + item.estimatedCost, 0)
    
    return {
      essentialProgress: Math.round((purchasedEssential.length / essentialItems.length) * 100),
      totalProgress: Math.round((totalPurchased.length / gearItems.length) * 100),
      totalCost,
      spentCost,
      essentialCount: essentialItems.length,
      purchasedEssentialCount: purchasedEssential.length,
      totalCount: gearItems.length,
      purchasedCount: totalPurchased.length
    }
  }

  const stats = getProgressStats()

  const addCustomItem = () => {
    const newItem: GearItem = {
      id: Date.now().toString(),
      name: 'Custom Item',
      category: 'custom',
      priority: 'nice-to-have',
      estimatedCost: 0,
      purchased: false,
      notes: ''
    }
    setGearItems([...gearItems, newItem])
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold flex items-center">
          <ShoppingCart className="mr-2 h-8 w-8" />
          Baby Gear Checklist
        </h1>
        <p className="text-muted-foreground">
          Track essential items you'll need for your baby's arrival
        </p>
      </div>

      {/* Progress Overview */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Essential Items</CardTitle>
            <Star className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.purchasedEssentialCount}/{stats.essentialCount}</div>
            <div className="flex items-center space-x-2 mt-2">
              <Progress value={stats.essentialProgress} className="flex-1 h-2" />
              <span className="text-xs text-muted-foreground">{stats.essentialProgress}%</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">Must-have items for baby</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Progress</CardTitle>
            <Check className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.purchasedCount}/{stats.totalCount}</div>
            <div className="flex items-center space-x-2 mt-2">
              <Progress value={stats.totalProgress} className="flex-1 h-2" />
              <span className="text-xs text-muted-foreground">{stats.totalProgress}%</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">Overall completion</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Estimated Budget</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${stats.totalCost.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground mt-1">Total estimated cost</p>
            <div className="mt-2">
              <Badge variant="outline" className="text-xs">
                ${(stats.totalCost * 0.7).toLocaleString()} essential
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Spent So Far</CardTitle>
            <DollarSign className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${stats.spentCost.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {Math.round((stats.spentCost / stats.totalCost) * 100)}% of budget used
            </p>
            <div className="mt-2">
              <Progress 
                value={Math.min((stats.spentCost / stats.totalCost) * 100, 100)} 
                className="h-2" 
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search gear items..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <div className="flex gap-2">
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map(category => (
                <SelectItem key={category.id} value={category.id}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedPriority} onValueChange={setSelectedPriority}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="All Priorities" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Priorities</SelectItem>
              <SelectItem value="essential">Essential</SelectItem>
              <SelectItem value="nice-to-have">Nice to Have</SelectItem>
              <SelectItem value="luxury">Luxury</SelectItem>
            </SelectContent>
          </Select>

          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Item
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add Custom Item</DialogTitle>
                <DialogDescription>
                  Add a custom baby gear item to your checklist
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="item-name">Item Name</Label>
                  <Input id="item-name" placeholder="e.g., Rocking Chair" />
                </div>
                <div>
                  <Label htmlFor="item-category">Category</Label>
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
                  <Label htmlFor="item-priority">Priority</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="essential">Essential</SelectItem>
                      <SelectItem value="nice-to-have">Nice to Have</SelectItem>
                      <SelectItem value="luxury">Luxury</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="item-cost">Estimated Cost</Label>
                  <Input id="item-cost" type="number" placeholder="50" />
                </div>
                <div>
                  <Label htmlFor="item-notes">Notes</Label>
                  <Textarea id="item-notes" placeholder="Any additional information..." />
                </div>
                <Button onClick={addCustomItem} className="w-full">Add to Checklist</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Category Tabs */}
      <Tabs defaultValue="all" className="space-y-4">
        <TabsList className="grid w-full grid-cols-7">
          <TabsTrigger value="all">All</TabsTrigger>
          {categories.map(category => (
            <TabsTrigger key={category.id} value={category.id} className="text-xs">
              {category.name.split(' ')[0]}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="all">
          <div className="space-y-6">
            {categories.map(category => {
              const categoryItems = filteredItems.filter(item => item.category === category.id)
              if (categoryItems.length === 0) return null

              const IconComponent = category.icon
              const purchasedCount = categoryItems.filter(item => item.purchased).length
              const totalCost = categoryItems.reduce((sum, item) => sum + item.estimatedCost, 0)

              return (
                <Card key={category.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center">
                        <IconComponent className="mr-2 h-5 w-5" />
                        {category.name}
                      </CardTitle>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="text-xs">
                          {purchasedCount}/{categoryItems.length} items
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          ${totalCost.toLocaleString()}
                        </Badge>
                      </div>
                    </div>
                    <Progress 
                      value={Math.round((purchasedCount / categoryItems.length) * 100)} 
                      className="h-2" 
                    />
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3">
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
                            <div className="flex items-center space-x-2">
                              <div className={`font-medium ${item.purchased ? 'line-through text-muted-foreground' : ''}`}>
                                {item.name}
                              </div>
                              <Badge
                                variant={
                                  item.priority === 'essential' ? 'destructive' :
                                  item.priority === 'nice-to-have' ? 'secondary' : 'outline'
                                }
                                className="text-xs"
                              >
                                {item.priority === 'essential' ? 'Essential' :
                                 item.priority === 'nice-to-have' ? 'Nice to Have' : 'Luxury'}
                              </Badge>
                            </div>
                            {item.notes && (
                              <div className="text-sm text-muted-foreground">{item.notes}</div>
                            )}
                            <div className="flex items-center justify-between">
                              <div className="text-sm font-medium text-green-600">
                                ${item.estimatedCost}
                              </div>
                              {item.brand && (
                                <div className="text-xs text-muted-foreground">
                                  Brand: {item.brand}
                                </div>
                              )}
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

        {categories.map(category => (
          <TabsContent key={category.id} value={category.id}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <category.icon className="mr-2 h-5 w-5" />
                  {category.name}
                </CardTitle>
                <CardDescription>
                  Essential items for {category.name.toLowerCase()}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3">
                  {gearItems
                    .filter(item => item.category === category.id)
                    .filter(item => 
                      item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
                      (selectedPriority === "all" || item.priority === selectedPriority)
                    )
                    .map(item => (
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
                          <div className="flex items-center space-x-2">
                            <div className={`font-medium ${item.purchased ? 'line-through text-muted-foreground' : ''}`}>
                              {item.name}
                            </div>
                            <Badge
                              variant={
                                item.priority === 'essential' ? 'destructive' :
                                item.priority === 'nice-to-have' ? 'secondary' : 'outline'
                              }
                              className="text-xs"
                            >
                              {item.priority === 'essential' ? 'Essential' :
                               item.priority === 'nice-to-have' ? 'Nice to Have' : 'Luxury'}
                            </Badge>
                          </div>
                          {item.notes && (
                            <div className="text-sm text-muted-foreground">{item.notes}</div>
                          )}
                          <div className="text-sm font-medium text-green-600">
                            ${item.estimatedCost}
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}