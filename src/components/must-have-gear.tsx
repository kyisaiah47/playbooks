"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, ShoppingCart, DollarSign, Baby, CheckCircle2, AlertTriangle } from "lucide-react"
import { useBabyPlanning, getBabyPlanningDisplayData } from "@/contexts/baby-planning-context"

interface GearItem {
  id: string
  name: string
  category: 'feeding' | 'sleep' | 'safety' | 'travel' | 'clothing' | 'bathing' | 'play'
  importance: 'essential' | 'recommended' | 'nice-to-have'
  estimatedCost: number
  description: string
  whenNeeded: 'immediately' | 'first-month' | 'first-three-months' | 'later'
  acquired: boolean
  notes?: string
}

const defaultGearItems: GearItem[] = [
  // Feeding
  {
    id: "1", name: "Baby Bottles", category: "feeding", importance: "essential", estimatedCost: 30,
    description: "4-6 bottles for feeding (even if breastfeeding)", whenNeeded: "immediately", acquired: false
  },
  {
    id: "2", name: "Burp Cloths", category: "feeding", importance: "essential", estimatedCost: 20,
    description: "6-8 cloth diapers or burp cloths for spit-up", whenNeeded: "immediately", acquired: false
  },
  {
    id: "3", name: "High Chair", category: "feeding", importance: "recommended", estimatedCost: 100,
    description: "Adjustable high chair for when baby starts solids", whenNeeded: "first-three-months", acquired: false
  },

  // Sleep
  {
    id: "4", name: "Crib", category: "sleep", importance: "essential", estimatedCost: 300,
    description: "Safe sleep space meeting current safety standards", whenNeeded: "first-month", acquired: false
  },
  {
    id: "5", name: "Crib Mattress", category: "sleep", importance: "essential", estimatedCost: 150,
    description: "Firm mattress that fits crib snugly", whenNeeded: "first-month", acquired: false
  },
  {
    id: "6", name: "Fitted Crib Sheets", category: "sleep", importance: "essential", estimatedCost: 25,
    description: "4-6 fitted sheets for easy changing", whenNeeded: "first-month", acquired: false
  },
  {
    id: "7", name: "Sleep Sacks", category: "sleep", importance: "recommended", estimatedCost: 60,
    description: "2-3 wearable blankets for safe sleep", whenNeeded: "immediately", acquired: false
  },

  // Safety
  {
    id: "8", name: "Infant Car Seat", category: "safety", importance: "essential", estimatedCost: 200,
    description: "Rear-facing car seat for newborns", whenNeeded: "immediately", acquired: false
  },
  {
    id: "9", name: "Baby Gates", category: "safety", importance: "recommended", estimatedCost: 80,
    description: "Safety gates for stairs and doorways", whenNeeded: "later", acquired: false
  },

  // Travel
  {
    id: "10", name: "Stroller", category: "travel", importance: "essential", estimatedCost: 250,
    description: "Versatile stroller for daily outings", whenNeeded: "first-month", acquired: false
  },
  {
    id: "11", name: "Baby Carrier", category: "travel", importance: "recommended", estimatedCost: 80,
    description: "Hands-free carrying for bonding and mobility", whenNeeded: "immediately", acquired: false
  },

  // Clothing
  {
    id: "12", name: "Newborn Onesies", category: "clothing", importance: "essential", estimatedCost: 40,
    description: "8-10 onesies in newborn and 0-3 month sizes", whenNeeded: "immediately", acquired: false
  },
  {
    id: "13", name: "Sleep Gowns", category: "clothing", importance: "recommended", estimatedCost: 35,
    description: "4-6 gowns for easy diaper changes", whenNeeded: "immediately", acquired: false
  },

  // Bathing
  {
    id: "14", name: "Baby Bathtub", category: "bathing", importance: "recommended", estimatedCost: 25,
    description: "Small tub or bath insert for newborn safety", whenNeeded: "first-month", acquired: false
  },
  {
    id: "15", name: "Baby Towels", category: "bathing", importance: "essential", estimatedCost: 30,
    description: "2-3 hooded towels for warmth", whenNeeded: "immediately", acquired: false
  },

  // Play
  {
    id: "16", name: "Play Mat", category: "play", importance: "recommended", estimatedCost: 60,
    description: "Tummy time and sensory development", whenNeeded: "first-month", acquired: false
  }
]

export function MustHaveGear() {
  const { babyPlanningData } = useBabyPlanning()
  const displayData = getBabyPlanningDisplayData(babyPlanningData)
  
  const [gearItems, setGearItems] = useState<GearItem[]>(defaultGearItems)
  const [filterCategory, setFilterCategory] = useState<string>('all')
  const [filterImportance, setFilterImportance] = useState<string>('all')
  const [filterWhenNeeded, setFilterWhenNeeded] = useState<string>('all')
  
  const toggleAcquired = (id: string) => {
    setGearItems(gearItems.map(item => 
      item.id === id ? { ...item, acquired: !item.acquired } : item
    ))
  }

  const getFilteredItems = () => {
    return gearItems.filter(item => {
      if (filterCategory !== 'all' && item.category !== filterCategory) return false
      if (filterImportance !== 'all' && item.importance !== filterImportance) return false
      if (filterWhenNeeded !== 'all' && item.whenNeeded !== filterWhenNeeded) return false
      return true
    })
  }

  const getStats = () => {
    const essential = gearItems.filter(item => item.importance === 'essential')
    const recommended = gearItems.filter(item => item.importance === 'recommended')
    const immediate = gearItems.filter(item => item.whenNeeded === 'immediately')
    
    const acquiredEssential = essential.filter(item => item.acquired).length
    const acquiredRecommended = recommended.filter(item => item.acquired).length
    const acquiredImmediate = immediate.filter(item => item.acquired).length
    
    const totalCost = gearItems.reduce((sum, item) => sum + item.estimatedCost, 0)
    const acquiredCost = gearItems.filter(item => item.acquired).reduce((sum, item) => sum + item.estimatedCost, 0)
    
    return {
      essential: { total: essential.length, acquired: acquiredEssential },
      recommended: { total: recommended.length, acquired: acquiredRecommended },
      immediate: { total: immediate.length, acquired: acquiredImmediate },
      totalCost,
      acquiredCost,
      remaining: totalCost - acquiredCost
    }
  }

  const getCategoryProgress = () => {
    const categories = ['feeding', 'sleep', 'safety', 'travel', 'clothing', 'bathing', 'play']
    return categories.map(category => {
      const items = gearItems.filter(item => item.category === category)
      const acquired = items.filter(item => item.acquired).length
      const essential = items.filter(item => item.importance === 'essential').length
      return {
        category,
        total: items.length,
        acquired,
        essential,
        progress: items.length > 0 ? (acquired / items.length) * 100 : 0
      }
    })
  }

  const getPriorityList = () => {
    return gearItems
      .filter(item => !item.acquired)
      .sort((a, b) => {
        const importanceOrder = { essential: 0, recommended: 1, 'nice-to-have': 2 }
        const timingOrder = { immediately: 0, 'first-month': 1, 'first-three-months': 2, later: 3 }
        
        if (importanceOrder[a.importance] !== importanceOrder[b.importance]) {
          return importanceOrder[a.importance] - importanceOrder[b.importance]
        }
        
        return timingOrder[a.whenNeeded] - timingOrder[b.whenNeeded]
      })
      .slice(0, 5)
  }

  const getImportanceColor = (importance: string) => {
    switch (importance) {
      case 'essential': return 'destructive'
      case 'recommended': return 'default'
      case 'nice-to-have': return 'secondary'
      default: return 'secondary'
    }
  }

  const filteredItems = getFilteredItems()
  const stats = getStats()
  const categoryProgress = getCategoryProgress()
  const priorityList = getPriorityList()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Must-Have Baby Gear</h2>
          <p className="text-muted-foreground">Essential items for your baby's arrival</p>
        </div>
        <Badge variant="secondary" className="text-lg px-3 py-1">
          {stats.essential.acquired}/{stats.essential.total} Essential
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Essential Items</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {stats.essential.acquired}/{stats.essential.total}
            </div>
            <Progress 
              value={stats.essential.total > 0 ? (stats.essential.acquired / stats.essential.total) * 100 : 0} 
              className="mt-2" 
            />
            <p className="text-xs text-muted-foreground mt-2">
              critical items acquired
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Immediate Needs</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {stats.immediate.acquired}/{stats.immediate.total}
            </div>
            <Progress 
              value={stats.immediate.total > 0 ? (stats.immediate.acquired / stats.immediate.total) * 100 : 0} 
              className="mt-2" 
            />
            <p className="text-xs text-muted-foreground mt-2">
              needed right away
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Investment</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${stats.totalCost}</div>
            <p className="text-xs text-muted-foreground">
              ${stats.acquiredCost} spent • ${stats.remaining} remaining
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overall Progress</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {gearItems.filter(item => item.acquired).length}/{gearItems.length}
            </div>
            <Progress 
              value={(gearItems.filter(item => item.acquired).length / gearItems.length) * 100} 
              className="mt-2" 
            />
            <p className="text-xs text-muted-foreground mt-2">
              items acquired
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5" />
            Top Priority Items
          </CardTitle>
          <CardDescription>Items you should focus on getting first</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {priorityList.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <Checkbox
                    checked={item.acquired}
                    onCheckedChange={() => toggleAcquired(item.id)}
                  />
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">{item.name}</span>
                      <Badge variant={getImportanceColor(item.importance)} className="text-xs">
                        {item.importance}
                      </Badge>
                      <Badge variant="outline" className="text-xs capitalize">
                        {item.whenNeeded.replace('-', ' ')}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium">${item.estimatedCost}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="flex items-center space-x-4 mb-4">
        <div className="flex items-center space-x-2">
          <label className="text-sm font-medium">Category:</label>
          <Select value={filterCategory} onValueChange={setFilterCategory}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="feeding">Feeding</SelectItem>
              <SelectItem value="sleep">Sleep</SelectItem>
              <SelectItem value="safety">Safety</SelectItem>
              <SelectItem value="travel">Travel</SelectItem>
              <SelectItem value="clothing">Clothing</SelectItem>
              <SelectItem value="bathing">Bathing</SelectItem>
              <SelectItem value="play">Play</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center space-x-2">
          <label className="text-sm font-medium">Importance:</label>
          <Select value={filterImportance} onValueChange={setFilterImportance}>
            <SelectTrigger className="w-36">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="essential">Essential</SelectItem>
              <SelectItem value="recommended">Recommended</SelectItem>
              <SelectItem value="nice-to-have">Nice to Have</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center space-x-2">
          <label className="text-sm font-medium">When Needed:</label>
          <Select value={filterWhenNeeded} onValueChange={setFilterWhenNeeded}>
            <SelectTrigger className="w-36">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="immediately">Immediately</SelectItem>
              <SelectItem value="first-month">First Month</SelectItem>
              <SelectItem value="first-three-months">First 3 Months</SelectItem>
              <SelectItem value="later">Later</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="checklist" className="w-full">
        <TabsList>
          <TabsTrigger value="checklist">Shopping Checklist</TabsTrigger>
          <TabsTrigger value="categories">By Category</TabsTrigger>
          <TabsTrigger value="timeline">When You Need It</TabsTrigger>
        </TabsList>

        <TabsContent value="checklist" className="space-y-4">
          <div className="space-y-3">
            {filteredItems.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      checked={item.acquired}
                      onCheckedChange={() => toggleAcquired(item.id)}
                      className="mt-1"
                    />
                    
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <h3 className={`font-medium ${item.acquired ? 'line-through text-muted-foreground' : ''}`}>
                            {item.name}
                          </h3>
                          <Badge variant={getImportanceColor(item.importance)} className="text-xs">
                            {item.importance}
                          </Badge>
                          <Badge variant="outline" className="text-xs capitalize">
                            {item.category}
                          </Badge>
                          <Badge variant="secondary" className="text-xs">
                            ${item.estimatedCost}
                          </Badge>
                        </div>
                      </div>
                      
                      <p className={`text-sm ${item.acquired ? 'text-muted-foreground' : ''}`}>
                        {item.description}
                      </p>
                      
                      <div className="text-xs text-muted-foreground">
                        Needed: {item.whenNeeded.replace('-', ' ')}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="categories" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {categoryProgress.map((category) => (
              <Card key={category.category}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base capitalize">
                      {category.category} ({category.acquired}/{category.total})
                    </CardTitle>
                    <Badge variant="outline" className="text-xs">
                      {category.essential} essential
                    </Badge>
                  </div>
                  <Progress value={category.progress} />
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {gearItems
                      .filter(item => item.category === category.category)
                      .slice(0, 3)
                      .map((item) => (
                        <div key={item.id} className="flex items-center space-x-2 text-sm">
                          <CheckCircle2 className={`h-3 w-3 ${item.acquired ? 'text-primary' : 'text-muted-foreground'}`} />
                          <span className={item.acquired ? 'line-through text-muted-foreground' : ''}>
                            {item.name}
                          </span>
                        </div>
                      ))}
                    {gearItems.filter(item => item.category === category.category).length > 3 && (
                      <div className="text-xs text-muted-foreground">
                        +{gearItems.filter(item => item.category === category.category).length - 3} more items
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="timeline" className="space-y-4">
          <div className="space-y-6">
            {['immediately', 'first-month', 'first-three-months', 'later'].map((timing) => {
              const timingItems = gearItems.filter(item => item.whenNeeded === timing)
              const acquired = timingItems.filter(item => item.acquired).length
              
              return (
                <Card key={timing}>
                  <CardHeader>
                    <CardTitle className="capitalize flex items-center justify-between">
                      {timing.replace('-', ' ')} ({acquired}/{timingItems.length})
                      <Progress value={timingItems.length > 0 ? (acquired / timingItems.length) * 100 : 0} className="w-24" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {timingItems.map((item) => (
                        <div key={item.id} className="flex items-center space-x-2">
                          <Checkbox
                            checked={item.acquired}
                            onCheckedChange={() => toggleAcquired(item.id)}
                          />
                          <span className={`text-sm ${item.acquired ? 'line-through text-muted-foreground' : ''}`}>
                            {item.name}
                          </span>
                          <Badge variant={getImportanceColor(item.importance)} className="text-xs">
                            {item.importance}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}