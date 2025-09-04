"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Trash2, Gift, ExternalLink, DollarSign, ShoppingCart, Heart, Baby, Home } from "lucide-react"
import { useBabyPlanning, getBabyPlanningDisplayData } from "@/contexts/baby-planning-context"

interface RegistryItem {
  id: string
  name: string
  category: string
  price: number
  priority: 'essential' | 'nice-to-have' | 'luxury'
  quantity: number
  received: number
  store: string
  url?: string
  notes?: string
  customAdded?: boolean
}

const defaultRegistryItems: RegistryItem[] = [
  // Feeding
  { id: "1", name: "High Chair", category: "feeding", price: 120, priority: "essential", quantity: 1, received: 0, store: "Target" },
  { id: "2", name: "Bottles (8-pack)", category: "feeding", price: 35, priority: "essential", quantity: 1, received: 0, store: "Amazon" },
  { id: "3", name: "Breast Pump", category: "feeding", price: 250, priority: "essential", quantity: 1, received: 0, store: "Buy Buy Baby" },
  { id: "4", name: "Bottle Warmer", category: "feeding", price: 45, priority: "nice-to-have", quantity: 1, received: 0, store: "Amazon" },
  { id: "5", name: "Nursing Pillow", category: "feeding", price: 40, priority: "essential", quantity: 1, received: 0, store: "Target" },

  // Safety & Travel
  { id: "6", name: "Car Seat", category: "safety", price: 200, priority: "essential", quantity: 1, received: 0, store: "Buy Buy Baby" },
  { id: "7", name: "Stroller", category: "safety", price: 300, priority: "essential", quantity: 1, received: 0, store: "Buy Buy Baby" },
  { id: "8", name: "Baby Gates (2-pack)", category: "safety", price: 80, priority: "nice-to-have", quantity: 1, received: 0, store: "Amazon" },
  { id: "9", name: "Outlet Covers", category: "safety", price: 15, priority: "nice-to-have", quantity: 1, received: 0, store: "Target" },

  // Nursery
  { id: "10", name: "Crib", category: "nursery", price: 350, priority: "essential", quantity: 1, received: 0, store: "IKEA" },
  { id: "11", name: "Crib Mattress", category: "nursery", price: 120, priority: "essential", quantity: 1, received: 0, store: "Amazon" },
  { id: "12", name: "Changing Table", category: "nursery", price: 180, priority: "essential", quantity: 1, received: 0, store: "Buy Buy Baby" },
  { id: "13", name: "Glider/Rocking Chair", category: "nursery", price: 250, priority: "nice-to-have", quantity: 1, received: 0, store: "Pottery Barn Kids" },
  { id: "14", name: "Crib Sheets (4-pack)", category: "nursery", price: 40, priority: "essential", quantity: 1, received: 0, store: "Target" },

  // Clothing
  { id: "15", name: "Newborn Onesies (10-pack)", category: "clothing", price: 25, priority: "essential", quantity: 2, received: 0, store: "Target" },
  { id: "16", name: "0-3 Month Sleepers (6-pack)", category: "clothing", price: 35, priority: "essential", quantity: 1, received: 0, store: "Carter's" },
  { id: "17", name: "Baby Socks (12-pack)", category: "clothing", price: 20, priority: "essential", quantity: 1, received: 0, store: "Target" },
  { id: "18", name: "Going Home Outfit", category: "clothing", price: 30, priority: "nice-to-have", quantity: 1, received: 0, store: "Carter's" },

  // Diapering & Bath
  { id: "19", name: "Diapers - Newborn (2 cases)", category: "diapering", price: 60, priority: "essential", quantity: 1, received: 0, store: "Costco" },
  { id: "20", name: "Baby Wipes (12-pack)", category: "diapering", price: 30, priority: "essential", quantity: 1, received: 0, store: "Amazon" },
  { id: "21", name: "Diaper Pail", category: "diapering", price: 50, priority: "nice-to-have", quantity: 1, received: 0, store: "Target" },
  { id: "22", name: "Baby Bathtub", category: "bath", price: 35, priority: "essential", quantity: 1, received: 0, store: "Buy Buy Baby" },
  { id: "23", name: "Baby Towels (4-pack)", category: "bath", price: 25, priority: "essential", quantity: 1, received: 0, store: "Target" },

  // Toys & Development
  { id: "24", name: "Play Mat", category: "toys", price: 60, priority: "nice-to-have", quantity: 1, received: 0, store: "Fisher-Price" },
  { id: "25", name: "Mobile", category: "toys", price: 45, priority: "nice-to-have", quantity: 1, received: 0, store: "Buy Buy Baby" },
  { id: "26", name: "Soft Blocks Set", category: "toys", price: 20, priority: "nice-to-have", quantity: 1, received: 0, store: "Target" },

  // Gear & Equipment
  { id: "27", name: "Baby Swing", category: "gear", price: 150, priority: "nice-to-have", quantity: 1, received: 0, store: "Buy Buy Baby" },
  { id: "28", name: "Bouncy Seat", category: "gear", price: 60, priority: "nice-to-have", quantity: 1, received: 0, store: "Fisher-Price" },
  { id: "29", name: "Baby Carrier", category: "gear", price: 80, priority: "essential", quantity: 1, received: 0, store: "Ergobaby" },
  { id: "30", name: "Baby Monitor", category: "gear", price: 120, priority: "essential", quantity: 1, received: 0, store: "Amazon" }
]

const categories = {
  "feeding": "Feeding",
  "safety": "Safety & Travel", 
  "nursery": "Nursery",
  "clothing": "Clothing",
  "diapering": "Diapering",
  "bath": "Bath Time",
  "toys": "Toys & Development",
  "gear": "Gear & Equipment"
}

const stores = [
  "Amazon", "Target", "Buy Buy Baby", "Walmart", "Costco", "IKEA", 
  "Pottery Barn Kids", "Carter's", "Fisher-Price", "Ergobaby", "Other"
]

export function BabyRegistry() {
  const { babyPlanningData } = useBabyPlanning()
  const displayData = getBabyPlanningDisplayData(babyPlanningData)
  
  const [items, setItems] = useState<RegistryItem[]>(defaultRegistryItems)
  const [showReceived, setShowReceived] = useState(true)
  const [newItem, setNewItem] = useState({
    name: "",
    category: "feeding",
    price: "",
    priority: "nice-to-have" as 'essential' | 'nice-to-have' | 'luxury',
    quantity: "1",
    store: "Amazon",
    url: "",
    notes: ""
  })

  const markAsReceived = (id: string, receivedCount: number) => {
    setItems(items.map(item => 
      item.id === id 
        ? { ...item, received: Math.min(receivedCount, item.quantity) }
        : item
    ))
  }

  const addItem = () => {
    if (!newItem.name.trim()) return

    const item: RegistryItem = {
      id: Date.now().toString(),
      name: newItem.name.trim(),
      category: newItem.category,
      price: parseFloat(newItem.price) || 0,
      priority: newItem.priority,
      quantity: parseInt(newItem.quantity) || 1,
      received: 0,
      store: newItem.store,
      url: newItem.url || undefined,
      notes: newItem.notes || undefined,
      customAdded: true
    }

    setItems([...items, item])
    setNewItem({
      name: "",
      category: "feeding",
      price: "",
      priority: "nice-to-have",
      quantity: "1", 
      store: "Amazon",
      url: "",
      notes: ""
    })
  }

  const removeItem = (id: string) => {
    setItems(items.filter(item => item.id !== id))
  }

  const getItemsByCategory = (category: string) => {
    return items.filter(item => item.category === category)
  }

  const getCategoryStats = (category: string) => {
    const categoryItems = getItemsByCategory(category)
    const totalValue = categoryItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    const receivedValue = categoryItems.reduce((sum, item) => sum + (item.price * item.received), 0)
    const completion = totalValue > 0 ? (receivedValue / totalValue) * 100 : 0

    return {
      totalItems: categoryItems.length,
      receivedItems: categoryItems.filter(item => item.received >= item.quantity).length,
      totalValue,
      receivedValue,
      completion: Math.round(completion)
    }
  }

  const getOverallStats = () => {
    const totalValue = items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    const receivedValue = items.reduce((sum, item) => sum + (item.price * item.received), 0)
    const essentialItems = items.filter(item => item.priority === 'essential')
    const receivedEssential = essentialItems.filter(item => item.received >= item.quantity)
    
    return {
      totalValue,
      receivedValue,
      completion: totalValue > 0 ? Math.round((receivedValue / totalValue) * 100) : 0,
      totalItems: items.length,
      receivedItems: items.filter(item => item.received >= item.quantity).length,
      essentialCompletion: essentialItems.length > 0 ? Math.round((receivedEssential.length / essentialItems.length) * 100) : 0
    }
  }

  const stats = getOverallStats()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Baby Registry</h2>
          <p className="text-muted-foreground">Manage your baby shower and registry gifts</p>
        </div>
        <Badge variant="secondary" className="text-lg px-3 py-1">
          {stats.completion}% Received
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Registry Value</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${stats.totalValue}</div>
            <p className="text-xs text-muted-foreground">
              ${stats.receivedValue} received
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Items Received</CardTitle>
            <Gift className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.receivedItems}/{stats.totalItems}</div>
            <Progress value={stats.completion} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Essential Items</CardTitle>
            <Heart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.essentialCompletion}%</div>
            <p className="text-xs text-muted-foreground">
              essentials received
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Registry Items</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalItems}</div>
            <p className="text-xs text-muted-foreground">
              items on registry
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowReceived(!showReceived)}
          >
            {showReceived ? "Hide" : "Show"} Received Items
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Add New Registry Item</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Item Name</label>
              <Input
                value={newItem.name}
                onChange={(e) => setNewItem({...newItem, name: e.target.value})}
                placeholder="e.g., Baby Monitor"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Category</label>
              <Select value={newItem.category} onValueChange={(value) => setNewItem({...newItem, category: value})}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(categories).map(([key, label]) => (
                    <SelectItem key={key} value={key}>{label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Price ($)</label>
              <Input
                type="number"
                value={newItem.price}
                onChange={(e) => setNewItem({...newItem, price: e.target.value})}
                placeholder="0.00"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Priority</label>
              <Select value={newItem.priority} onValueChange={(value: 'essential' | 'nice-to-have' | 'luxury') => setNewItem({...newItem, priority: value})}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="essential">Essential</SelectItem>
                  <SelectItem value="nice-to-have">Nice to Have</SelectItem>
                  <SelectItem value="luxury">Luxury</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Quantity</label>
              <Input
                type="number"
                value={newItem.quantity}
                onChange={(e) => setNewItem({...newItem, quantity: e.target.value})}
                min="1"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Store</label>
              <Select value={newItem.store} onValueChange={(value) => setNewItem({...newItem, store: value})}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {stores.map(store => (
                    <SelectItem key={store} value={store}>{store}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">URL (optional)</label>
              <Input
                value={newItem.url}
                onChange={(e) => setNewItem({...newItem, url: e.target.value})}
                placeholder="https://..."
              />
            </div>

            <div className="flex items-end">
              <Button onClick={addItem} className="w-full">
                <Plus className="h-4 w-4 mr-2" />
                Add Item
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="by-category" className="w-full">
        <TabsList>
          <TabsTrigger value="by-category">By Category</TabsTrigger>
          <TabsTrigger value="by-priority">By Priority</TabsTrigger>
          <TabsTrigger value="by-store">By Store</TabsTrigger>
        </TabsList>

        <TabsContent value="by-category" className="space-y-6">
          {Object.entries(categories).map(([categoryKey, categoryLabel]) => {
            const categoryItems = getItemsByCategory(categoryKey)
            const filteredItems = showReceived ? categoryItems : categoryItems.filter(item => item.received < item.quantity)
            const categoryStats = getCategoryStats(categoryKey)

            if (filteredItems.length === 0) return null

            return (
              <Card key={categoryKey}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        {categoryKey === 'nursery' && <Home className="h-5 w-5" />}
                        {categoryKey === 'feeding' && <Baby className="h-5 w-5" />}
                        {categoryKey === 'safety' && <ShoppingCart className="h-5 w-5" />}
                        {categoryKey === 'clothing' && <Heart className="h-5 w-5" />}
                        {(categoryKey === 'diapering' || categoryKey === 'bath' || categoryKey === 'toys' || categoryKey === 'gear') && <Gift className="h-5 w-5" />}
                        {categoryLabel}
                      </CardTitle>
                      <CardDescription>
                        {categoryStats.receivedItems}/{categoryStats.totalItems} items received • 
                        ${categoryStats.receivedValue}/${categoryStats.totalValue} ({categoryStats.completion}%)
                      </CardDescription>
                    </div>
                    <Progress value={categoryStats.completion} className="w-24" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {filteredItems.map((item) => (
                      <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center space-x-2">
                            <span className={`font-medium ${item.received >= item.quantity ? "line-through text-muted-foreground" : ""}`}>
                              {item.name}
                            </span>
                            <Badge 
                              variant={item.priority === 'essential' ? 'destructive' : item.priority === 'luxury' ? 'default' : 'secondary'}
                              className="text-xs"
                            >
                              {item.priority}
                            </Badge>
                            {item.customAdded && (
                              <Badge variant="outline" className="text-xs">Custom</Badge>
                            )}
                          </div>
                          
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <span>${item.price}</span>
                            <span>{item.store}</span>
                            {item.quantity > 1 && <span>Qty: {item.quantity}</span>}
                            {item.url && (
                              <a href={item.url} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-primary">
                                <ExternalLink className="h-3 w-3 mr-1" />
                                Link
                              </a>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center space-x-2">
                          {item.quantity > 1 && (
                            <div className="text-center">
                              <div className="text-sm font-medium">{item.received}/{item.quantity}</div>
                              <div className="text-xs text-muted-foreground">received</div>
                            </div>
                          )}
                          
                          <div className="flex items-center space-x-1">
                            {item.quantity === 1 ? (
                              <Checkbox
                                checked={item.received >= item.quantity}
                                onCheckedChange={(checked) => markAsReceived(item.id, checked ? 1 : 0)}
                              />
                            ) : (
                              <div className="flex items-center space-x-2">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => markAsReceived(item.id, Math.max(0, item.received - 1))}
                                  disabled={item.received === 0}
                                >
                                  -
                                </Button>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => markAsReceived(item.id, Math.min(item.quantity, item.received + 1))}
                                  disabled={item.received >= item.quantity}
                                >
                                  +
                                </Button>
                              </div>
                            )}
                          </div>

                          {item.customAdded && (
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeItem(item.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </TabsContent>

        <TabsContent value="by-priority" className="space-y-6">
          {['essential', 'nice-to-have', 'luxury'].map(priority => {
            const priorityItems = items.filter(item => item.priority === priority)
            const filteredItems = showReceived ? priorityItems : priorityItems.filter(item => item.received < item.quantity)

            if (filteredItems.length === 0) return null

            const priorityValue = priorityItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
            const receivedValue = priorityItems.reduce((sum, item) => sum + (item.price * item.received), 0)
            const completion = priorityValue > 0 ? Math.round((receivedValue / priorityValue) * 100) : 0

            return (
              <Card key={priority}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="capitalize">{priority.replace('-', ' ')} Items</CardTitle>
                      <CardDescription>
                        {priorityItems.filter(item => item.received >= item.quantity).length}/{priorityItems.length} items received • 
                        ${receivedValue}/${priorityValue} ({completion}%)
                      </CardDescription>
                    </div>
                    <Progress value={completion} className="w-24" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {filteredItems.map((item) => (
                      <div key={item.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center space-x-2">
                            <span className={`font-medium ${item.received >= item.quantity ? "line-through text-muted-foreground" : ""}`}>
                              {item.name}
                            </span>
                            <Badge variant="secondary" className="text-xs">
                              {categories[item.category as keyof typeof categories]}
                            </Badge>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <span>${item.price}</span>
                            <span>{item.store}</span>
                          </div>
                        </div>
                        <Checkbox
                          checked={item.received >= item.quantity}
                          onCheckedChange={(checked) => markAsReceived(item.id, checked ? item.quantity : 0)}
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </TabsContent>

        <TabsContent value="by-store" className="space-y-6">
          {Array.from(new Set(items.map(item => item.store))).map(store => {
            const storeItems = items.filter(item => item.store === store)
            const filteredItems = showReceived ? storeItems : storeItems.filter(item => item.received < item.quantity)

            if (filteredItems.length === 0) return null

            const storeValue = storeItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
            const receivedValue = storeItems.reduce((sum, item) => sum + (item.price * item.received), 0)
            const completion = storeValue > 0 ? Math.round((receivedValue / storeValue) * 100) : 0

            return (
              <Card key={store}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>{store}</CardTitle>
                      <CardDescription>
                        {storeItems.filter(item => item.received >= item.quantity).length}/{storeItems.length} items received • 
                        ${receivedValue}/${storeValue} ({completion}%)
                      </CardDescription>
                    </div>
                    <Progress value={completion} className="w-24" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {filteredItems.map((item) => (
                      <div key={item.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center space-x-2">
                            <span className={`font-medium ${item.received >= item.quantity ? "line-through text-muted-foreground" : ""}`}>
                              {item.name}
                            </span>
                            <Badge variant="secondary" className="text-xs">
                              {categories[item.category as keyof typeof categories]}
                            </Badge>
                            {item.url && (
                              <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                                <ExternalLink className="h-3 w-3" />
                              </a>
                            )}
                          </div>
                          <div className="text-sm text-muted-foreground">${item.price}</div>
                        </div>
                        <Checkbox
                          checked={item.received >= item.quantity}
                          onCheckedChange={(checked) => markAsReceived(item.id, checked ? item.quantity : 0)}
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </TabsContent>
      </Tabs>
    </div>
  )
}