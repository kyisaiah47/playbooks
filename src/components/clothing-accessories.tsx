"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle2, ShoppingCart, DollarSign, Baby, Shirt, Info, Clock, Thermometer } from "lucide-react"
import { useBabyPlanning } from "@/contexts/baby-planning-context"

interface ClothingItem {
  id: string
  name: string
  category: 'basics' | 'sleepwear' | 'outerwear' | 'accessories' | 'special'
  sizes: string[]
  priority: 'essential' | 'helpful' | 'nice-to-have'
  quantity: string
  estimatedCost: string
  description: string
  season: 'all' | 'warm' | 'cold'
  purchased: boolean
}

export function ClothingAccessories() {
  const { babyPlanningData } = useBabyPlanning()
  
  const [clothingItems, setClothingItems] = useState<ClothingItem[]>([
    // Basics
    { id: '1', name: 'Onesies (short sleeve)', category: 'basics', sizes: ['NB', '0-3M', '3-6M'], priority: 'essential', quantity: '8-10 per size', estimatedCost: '$30-50', description: 'Basic bodysuits for layering', season: 'all', purchased: false },
    { id: '2', name: 'Onesies (long sleeve)', category: 'basics', sizes: ['NB', '0-3M', '3-6M'], priority: 'essential', quantity: '6-8 per size', estimatedCost: '$35-60', description: 'Warmer bodysuits for cooler weather', season: 'cold', purchased: false },
    { id: '3', name: 'Pants/Leggings', category: 'basics', sizes: ['NB', '0-3M', '3-6M'], priority: 'essential', quantity: '6-8 per size', estimatedCost: '$25-45', description: 'Comfortable elastic waist pants', season: 'all', purchased: false },
    { id: '4', name: 'T-shirts', category: 'basics', sizes: ['NB', '0-3M', '3-6M'], priority: 'helpful', quantity: '4-6 per size', estimatedCost: '$20-35', description: 'Easy-on shirts for daily wear', season: 'warm', purchased: false },
    { id: '5', name: 'Rompers/Playsuits', category: 'basics', sizes: ['NB', '0-3M', '3-6M'], priority: 'helpful', quantity: '3-5 per size', estimatedCost: '$25-40', description: 'One-piece outfits for easy dressing', season: 'warm', purchased: false },

    // Sleepwear
    { id: '6', name: 'Sleep Gowns', category: 'sleepwear', sizes: ['NB', '0-3M'], priority: 'essential', quantity: '4-6 per size', estimatedCost: '$20-35', description: 'Easy access for nighttime changes', season: 'all', purchased: false },
    { id: '7', name: 'Footie Pajamas', category: 'sleepwear', sizes: ['NB', '0-3M', '3-6M'], priority: 'essential', quantity: '6-8 per size', estimatedCost: '$30-50', description: 'Full coverage for warmth', season: 'all', purchased: false },
    { id: '8', name: 'Sleep Sacks', category: 'sleepwear', sizes: ['NB', '0-3M', '3-6M'], priority: 'helpful', quantity: '2-3 per size', estimatedCost: '$25-50', description: 'Safe alternative to blankets', season: 'all', purchased: false },
    { id: '9', name: 'Swaddle Blankets', category: 'sleepwear', sizes: ['One size'], priority: 'essential', quantity: '4-6', estimatedCost: '$30-60', description: 'For newborn sleep comfort', season: 'all', purchased: false },

    // Outerwear
    { id: '10', name: 'Cardigan/Sweater', category: 'outerwear', sizes: ['NB', '0-3M', '3-6M'], priority: 'helpful', quantity: '2-3 per size', estimatedCost: '$20-40', description: 'Light layers for temperature control', season: 'cold', purchased: false },
    { id: '11', name: 'Hoodies', category: 'outerwear', sizes: ['0-3M', '3-6M'], priority: 'helpful', quantity: '1-2 per size', estimatedCost: '$15-30', description: 'Casual warm layer', season: 'cold', purchased: false },
    { id: '12', name: 'Winter Coat/Bunting', category: 'outerwear', sizes: ['NB', '0-3M', '3-6M'], priority: 'helpful', quantity: '1 per size', estimatedCost: '$25-60', description: 'For cold weather protection', season: 'cold', purchased: false },

    // Accessories
    { id: '13', name: 'Socks', category: 'accessories', sizes: ['NB', '0-3M', '3-6M'], priority: 'essential', quantity: '8-12 pairs per size', estimatedCost: '$15-25', description: 'Keep tiny feet warm', season: 'all', purchased: false },
    { id: '14', name: 'Hats', category: 'accessories', sizes: ['NB', '0-3M', '3-6M'], priority: 'essential', quantity: '3-4 per size', estimatedCost: '$10-20', description: 'Temperature regulation and sun protection', season: 'all', purchased: false },
    { id: '15', name: 'Mittens', category: 'accessories', sizes: ['NB', '0-3M'], priority: 'essential', quantity: '3-4 pairs per size', estimatedCost: '$8-15', description: 'Prevent scratching', season: 'all', purchased: false },
    { id: '16', name: 'Booties/Soft Shoes', category: 'accessories', sizes: ['NB', '0-3M', '3-6M'], priority: 'nice-to-have', quantity: '2-3 pairs per size', estimatedCost: '$15-30', description: 'Soft shoes for special occasions', season: 'all', purchased: false },
    { id: '17', name: 'Bibs', category: 'accessories', sizes: ['One size'], priority: 'helpful', quantity: '8-10', estimatedCost: '$15-25', description: 'Keep clothes clean during feeding', season: 'all', purchased: false },

    // Special Occasion
    { id: '18', name: 'Going-Home Outfit', category: 'special', sizes: ['NB', '0-3M'], priority: 'helpful', quantity: '1 per size', estimatedCost: '$25-50', description: 'Special outfit for hospital discharge', season: 'all', purchased: false },
    { id: '19', name: 'Dress-up Outfits', category: 'special', sizes: ['NB', '0-3M', '3-6M'], priority: 'nice-to-have', quantity: '1-2 per size', estimatedCost: '$20-60', description: 'For photos and special occasions', season: 'all', purchased: false }
  ])

  const togglePurchased = (id: string) => {
    setClothingItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, purchased: !item.purchased } : item
      )
    )
  }

  const purchasedItems = clothingItems.filter(i => i.purchased).length
  const totalItems = clothingItems.length
  const progressPercentage = (purchasedItems / totalItems) * 100

  const essentialItems = clothingItems.filter(i => i.priority === 'essential')
  const purchasedEssentials = essentialItems.filter(i => i.purchased).length

  const categories = [
    { key: 'basics', label: 'Basic Clothing', icon: '👕' },
    { key: 'sleepwear', label: 'Sleepwear', icon: '🌙' },
    { key: 'outerwear', label: 'Outerwear', icon: '🧥' },
    { key: 'accessories', label: 'Accessories', icon: '🧦' },
    { key: 'special', label: 'Special Occasion', icon: '👗' }
  ]

  const sizingTips = [
    { category: 'Newborn', tip: 'Many babies skip newborn size - buy fewer NB items' },
    { category: '0-3 Months', tip: 'Stock up on this size - babies wear it the longest' },
    { category: '3-6 Months', tip: 'Buy basics in this size before baby arrives' },
    { category: 'Growth Rate', tip: 'Babies can grow out of sizes in just 2-4 weeks' },
    { category: 'Seasonal', tip: 'Consider what season baby will be each size' },
    { category: 'Comfort', tip: 'Choose soft, breathable fabrics over synthetic materials' }
  ]

  const clothingBudget = {
    essential: '$200-350',
    helpful: '$150-250', 
    niceToHave: '$100-200',
    total: '$450-800'
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Clothing & Accessories</h2>
          <p className="text-muted-foreground">Essential wardrobe items for your baby's first year</p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="secondary" className="text-lg px-3 py-1">
            Baby Essentials
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overall Progress</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{purchasedItems}/{totalItems}</div>
            <Progress value={progressPercentage} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">
              items purchased
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Essentials</CardTitle>
            <Baby className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{purchasedEssentials}/{essentialItems.length}</div>
            <Progress 
              value={(purchasedEssentials / essentialItems.length) * 100} 
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
            <Shirt className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{categories.length}</div>
            <p className="text-xs text-muted-foreground">
              clothing categories
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Budget Range</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{clothingBudget.total}</div>
            <p className="text-xs text-muted-foreground">
              estimated total cost
            </p>
          </CardContent>
        </Card>
      </div>

      <Alert>
        <Info className="h-4 w-4" />
        <AlertDescription>
          <strong>Size smart:</strong> Buy fewer newborn items and more 0-3 month clothes. Many babies skip newborn size or grow out of it quickly.
        </AlertDescription>
      </Alert>

      <Tabs defaultValue="all" className="w-full">
        <TabsList>
          <TabsTrigger value="all">All Items</TabsTrigger>
          <TabsTrigger value="basics">Basics</TabsTrigger>
          <TabsTrigger value="sleepwear">Sleepwear</TabsTrigger>
          <TabsTrigger value="outerwear">Outerwear</TabsTrigger>
          <TabsTrigger value="accessories">Accessories</TabsTrigger>
          <TabsTrigger value="sizing">Sizing Guide</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Complete Clothing Checklist</CardTitle>
              <CardDescription>All clothing items organized by category and size</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {categories.map(category => {
                  const categoryItems = clothingItems.filter(i => i.category === category.key)
                  const categoryPurchased = categoryItems.filter(i => i.purchased).length
                  
                  return (
                    <div key={category.key} className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl">{category.icon}</span>
                        <h3 className="text-lg font-semibold">{category.label}</h3>
                        <Badge variant="outline">
                          {categoryPurchased}/{categoryItems.length}
                        </Badge>
                      </div>
                      
                      <div className="space-y-3">
                        {categoryItems.map(item => (
                          <div key={item.id} className="flex items-start space-x-3 p-4 border rounded-lg">
                            <button 
                              onClick={() => togglePurchased(item.id)}
                              className="mt-1"
                            >
                              <CheckCircle2 
                                className={`h-5 w-5 ${
                                  item.purchased 
                                    ? 'text-primary' 
                                    : 'text-muted-foreground'
                                }`} 
                              />
                            </button>
                            
                            <div className="flex-1 space-y-2">
                              <div className="flex items-center space-x-2 flex-wrap">
                                <h4 className={`font-medium ${item.purchased ? 'line-through text-muted-foreground' : ''}`}>
                                  {item.name}
                                </h4>
                                <Badge 
                                  variant={item.priority === 'essential' ? 'default' : 'secondary'}
                                  className="text-xs"
                                >
                                  {item.priority}
                                </Badge>
                                {item.season !== 'all' && (
                                  <Badge variant="outline" className="text-xs">
                                    <Thermometer className="h-3 w-3 mr-1" />
                                    {item.season}
                                  </Badge>
                                )}
                              </div>
                              
                              <p className="text-sm text-muted-foreground">
                                {item.description}
                              </p>
                              
                              <div className="flex items-center space-x-2 text-xs">
                                <span className="font-medium">Sizes:</span>
                                {item.sizes.map((size, sizeIndex) => (
                                  <Badge key={sizeIndex} variant="outline" className="text-xs">
                                    {size}
                                  </Badge>
                                ))}
                              </div>
                              
                              <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                                <div className="flex items-center space-x-1">
                                  <ShoppingCart className="h-3 w-3" />
                                  <span>{item.quantity}</span>
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

        {categories.map(category => (
          <TabsContent key={category.key} value={category.key} className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">{category.icon}</span>
                  {category.label}
                </CardTitle>
                <CardDescription>Essential {category.label.toLowerCase()} for your baby</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {clothingItems
                    .filter(item => item.category === category.key)
                    .map(item => (
                      <div key={item.id} className="flex items-start space-x-3 p-4 border rounded-lg">
                        <button 
                          onClick={() => togglePurchased(item.id)}
                          className="mt-1"
                        >
                          <CheckCircle2 
                            className={`h-5 w-5 ${
                              item.purchased 
                                ? 'text-primary' 
                                : 'text-muted-foreground'
                            }`} 
                          />
                        </button>
                        
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center space-x-2 flex-wrap">
                            <h4 className={`font-medium ${item.purchased ? 'line-through text-muted-foreground' : ''}`}>
                              {item.name}
                            </h4>
                            <Badge 
                              variant={item.priority === 'essential' ? 'default' : 'secondary'}
                              className="text-xs"
                            >
                              {item.priority}
                            </Badge>
                            {item.season !== 'all' && (
                              <Badge variant="outline" className="text-xs">
                                <Thermometer className="h-3 w-3 mr-1" />
                                {item.season}
                              </Badge>
                            )}
                          </div>
                          
                          <p className="text-sm text-muted-foreground">
                            {item.description}
                          </p>
                          
                          <div className="flex items-center space-x-2 text-xs">
                            <span className="font-medium">Sizes:</span>
                            {item.sizes.map((size, sizeIndex) => (
                              <Badge key={sizeIndex} variant="outline" className="text-xs">
                                {size}
                              </Badge>
                            ))}
                          </div>
                          
                          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <ShoppingCart className="h-3 w-3" />
                              <span>{item.quantity}</span>
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
              </CardContent>
            </Card>
          </TabsContent>
        ))}

        <TabsContent value="sizing" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Baby className="h-5 w-5" />
                Baby Clothing Size Guide
              </CardTitle>
              <CardDescription>Tips for choosing the right sizes and quantities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {sizingTips.map((tip, index) => (
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
                <h4 className="font-semibold">Size Guidelines:</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <h5 className="font-medium mb-2">Newborn (NB)</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Weight: 5-8 lbs</li>
                      <li>• Length: up to 21.5"</li>
                      <li>• Duration: 0-6 weeks (if used)</li>
                      <li>• Buy less - many babies skip this size</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-muted rounded-lg">
                    <h5 className="font-medium mb-2">0-3 Months</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Weight: 8-12 lbs</li>
                      <li>• Length: 21.5-24"</li>
                      <li>• Duration: 6-12 weeks</li>
                      <li>• Stock up on this size</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-muted rounded-lg">
                    <h5 className="font-medium mb-2">3-6 Months</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Weight: 12-17 lbs</li>
                      <li>• Length: 24-26.5"</li>
                      <li>• Duration: 8-12 weeks</li>
                      <li>• Buy basics before baby arrives</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-muted rounded-lg">
                    <h5 className="font-medium mb-2">Shopping Strategy</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Buy 2-3 NB items, more 0-3M</li>
                      <li>• Consider your due date season</li>
                      <li>• Keep tags on larger sizes</li>
                      <li>• Ask for gift receipts</li>
                    </ul>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-3">Budget Breakdown</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div className="p-3 bg-muted rounded">
                      <div className="font-semibold text-primary">Essential</div>
                      <div className="text-sm text-muted-foreground">{clothingBudget.essential}</div>
                    </div>
                    <div className="p-3 bg-muted rounded">
                      <div className="font-semibold text-secondary">Helpful</div>
                      <div className="text-sm text-muted-foreground">{clothingBudget.helpful}</div>
                    </div>
                    <div className="p-3 bg-muted rounded">
                      <div className="font-semibold">Nice-to-Have</div>
                      <div className="text-sm text-muted-foreground">{clothingBudget.niceToHave}</div>
                    </div>
                    <div className="p-3 bg-primary text-primary-foreground rounded">
                      <div className="font-semibold">Total</div>
                      <div className="text-sm">{clothingBudget.total}</div>
                    </div>
                  </div>
                </div>
              </div>

              <Alert className="mt-4">
                <Info className="h-4 w-4" />
                <AlertDescription>
                  <strong>Pro tip:</strong> Register for larger sizes (6-12M, 12-18M) for baby shower gifts. You'll have plenty of newborn clothes but will need larger sizes later.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}