"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle2, ShoppingCart, DollarSign, Baby, Droplets, Info, Clock } from "lucide-react"
import { useBabyPlanning } from "@/contexts/baby-planning-context"

interface DiaperBathingSupply {
  id: string
  name: string
  category: 'diapers' | 'bathing' | 'skincare' | 'changing'
  priority: 'essential' | 'helpful' | 'nice-to-have'
  quantity: string
  estimatedCost: string
  description: string
  whenNeeded: string
  purchased: boolean
}

export function DiaperBathing() {
  const { babyPlanningData } = useBabyPlanning()
  
  const [supplies, setSupplies] = useState<DiaperBathingSupply[]>([
    // Diapers
    { id: '1', name: 'Newborn Diapers', category: 'diapers', priority: 'essential', quantity: '2-3 packs', estimatedCost: '$25-40', description: 'For babies 6-10 lbs', whenNeeded: 'Before birth', purchased: false },
    { id: '2', name: 'Size 1 Diapers', category: 'diapers', priority: 'essential', quantity: '3-4 packs', estimatedCost: '$35-50', description: 'For babies 8-14 lbs', whenNeeded: 'Before birth', purchased: false },
    { id: '3', name: 'Baby Wipes', category: 'diapers', priority: 'essential', quantity: '6-8 packs', estimatedCost: '$25-40', description: 'Sensitive, fragrance-free wipes', whenNeeded: 'Before birth', purchased: false },
    { id: '4', name: 'Diaper Rash Cream', category: 'diapers', priority: 'essential', quantity: '2-3 tubes', estimatedCost: '$15-25', description: 'Zinc oxide based protection', whenNeeded: 'Before birth', purchased: false },
    { id: '5', name: 'Cloth Diapers (if using)', category: 'diapers', priority: 'essential', quantity: '20-30', estimatedCost: '$200-400', description: 'Various sizes and inserts', whenNeeded: 'Before birth', purchased: false },
    { id: '6', name: 'Diaper Pail', category: 'diapers', priority: 'helpful', quantity: '1', estimatedCost: '$30-80', description: 'Odor-containing diaper disposal', whenNeeded: 'Before birth', purchased: false },

    // Changing Area
    { id: '7', name: 'Changing Table/Pad', category: 'changing', priority: 'essential', quantity: '1', estimatedCost: '$50-200', description: 'Safe changing surface with safety straps', whenNeeded: 'Before birth', purchased: false },
    { id: '8', name: 'Changing Pad Covers', category: 'changing', priority: 'essential', quantity: '3-4', estimatedCost: '$20-30', description: 'Waterproof, washable covers', whenNeeded: 'Before birth', purchased: false },
    { id: '9', name: 'Portable Changing Pad', category: 'changing', priority: 'helpful', quantity: '1', estimatedCost: '$15-30', description: 'For diaper changes on-the-go', whenNeeded: 'Before birth', purchased: false },
    { id: '10', name: 'Diaper Caddy', category: 'changing', priority: 'helpful', quantity: '1-2', estimatedCost: '$15-35', description: 'Organize changing supplies', whenNeeded: 'Before birth', purchased: false },

    // Bathing
    { id: '11', name: 'Baby Bathtub', category: 'bathing', priority: 'essential', quantity: '1', estimatedCost: '$15-50', description: 'Newborn-safe bathing tub', whenNeeded: 'First week', purchased: false },
    { id: '12', name: 'Bath Support/Sling', category: 'bathing', priority: 'helpful', quantity: '1', estimatedCost: '$10-25', description: 'Extra support for newborn bathing', whenNeeded: 'First week', purchased: false },
    { id: '13', name: 'Hooded Towels', category: 'bathing', priority: 'essential', quantity: '3-4', estimatedCost: '$30-60', description: 'Soft, absorbent hooded towels', whenNeeded: 'First week', purchased: false },
    { id: '14', name: 'Washcloths', category: 'bathing', priority: 'essential', quantity: '8-10', estimatedCost: '$15-25', description: 'Soft baby washcloths', whenNeeded: 'First week', purchased: false },
    { id: '15', name: 'Baby Shampoo/Body Wash', category: 'bathing', priority: 'essential', quantity: '1-2 bottles', estimatedCost: '$8-15', description: 'Gentle, tear-free formula', whenNeeded: 'First week', purchased: false },
    { id: '16', name: 'Bath Thermometer', category: 'bathing', priority: 'helpful', quantity: '1', estimatedCost: '$5-15', description: 'Ensure safe water temperature', whenNeeded: 'First week', purchased: false },
    { id: '17', name: 'Non-slip Bath Mat', category: 'bathing', priority: 'helpful', quantity: '1', estimatedCost: '$10-20', description: 'Safety mat for bathtub', whenNeeded: '6+ months', purchased: false },

    // Skincare
    { id: '18', name: 'Baby Lotion', category: 'skincare', priority: 'essential', quantity: '1-2 bottles', estimatedCost: '$8-15', description: 'Gentle, hypoallergenic moisturizer', whenNeeded: 'Before birth', purchased: false },
    { id: '19', name: 'Baby Oil', category: 'skincare', priority: 'helpful', quantity: '1 bottle', estimatedCost: '$5-10', description: 'For massage and dry skin', whenNeeded: 'Before birth', purchased: false },
    { id: '20', name: 'Cotton Balls/Swabs', category: 'skincare', priority: 'essential', quantity: '2-3 packs', estimatedCost: '$5-10', description: 'For gentle cleaning', whenNeeded: 'Before birth', purchased: false },
    { id: '21', name: 'Baby Nail Clippers', category: 'skincare', priority: 'essential', quantity: '1 set', estimatedCost: '$5-15', description: 'Specially designed for tiny nails', whenNeeded: 'First week', purchased: false },
    { id: '22', name: 'Baby Brush/Comb Set', category: 'skincare', priority: 'helpful', quantity: '1 set', estimatedCost: '$8-15', description: 'Soft bristles for delicate scalp', whenNeeded: 'First month', purchased: false }
  ])

  const togglePurchased = (id: string) => {
    setSupplies(prev => 
      prev.map(supply => 
        supply.id === id ? { ...supply, purchased: !supply.purchased } : supply
      )
    )
  }

  const purchasedSupplies = supplies.filter(s => s.purchased).length
  const totalSupplies = supplies.length
  const progressPercentage = (purchasedSupplies / totalSupplies) * 100

  const essentialSupplies = supplies.filter(s => s.priority === 'essential')
  const purchasedEssentials = essentialSupplies.filter(s => s.purchased).length

  const categories = [
    { key: 'diapers', label: 'Diapers & Wipes', icon: '👶' },
    { key: 'changing', label: 'Changing Area', icon: '🔄' },
    { key: 'bathing', label: 'Bathing', icon: '🛁' },
    { key: 'skincare', label: 'Skincare & Grooming', icon: '🧴' }
  ]

  const careTips = [
    { category: 'Diapering', tip: 'Change diapers every 2-3 hours or immediately after bowel movements' },
    { category: 'Rash Prevention', tip: 'Let baby air dry before putting on new diaper when possible' },
    { category: 'Bathing', tip: 'Newborns only need baths 2-3 times per week until they crawl' },
    { category: 'Water Temperature', tip: 'Bath water should feel warm, not hot (98-100°F)' },
    { category: 'Skin Care', tip: 'Pat skin dry gently instead of rubbing to prevent irritation' },
    { category: 'Safety', tip: 'Never leave baby unattended during diaper changes or baths' }
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Diaper & Bathing Supplies</h2>
          <p className="text-muted-foreground">Essential items for keeping baby clean and comfortable</p>
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
            <div className="text-2xl font-bold">{purchasedSupplies}/{totalSupplies}</div>
            <Progress value={progressPercentage} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">
              supplies purchased
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Essentials</CardTitle>
            <Baby className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{purchasedEssentials}/{essentialSupplies.length}</div>
            <Progress 
              value={(purchasedEssentials / essentialSupplies.length) * 100} 
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
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{categories.length}</div>
            <p className="text-xs text-muted-foreground">
              supply categories
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Budget Range</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$300-600</div>
            <p className="text-xs text-muted-foreground">
              estimated total cost
            </p>
          </CardContent>
        </Card>
      </div>

      <Alert>
        <Info className="h-4 w-4" />
        <AlertDescription>
          <strong>Stock up gradually:</strong> Newborns use 8-12 diapers per day. Buy a variety of sizes as babies grow quickly in the first months.
        </AlertDescription>
      </Alert>

      <Tabs defaultValue="all" className="w-full">
        <TabsList>
          <TabsTrigger value="all">All Items</TabsTrigger>
          <TabsTrigger value="diapers">Diapers</TabsTrigger>
          <TabsTrigger value="changing">Changing</TabsTrigger>
          <TabsTrigger value="bathing">Bathing</TabsTrigger>
          <TabsTrigger value="skincare">Skincare</TabsTrigger>
          <TabsTrigger value="tips">Care Tips</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Complete Diaper & Bathing Checklist</CardTitle>
              <CardDescription>All items organized by category and priority</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {categories.map(category => {
                  const categorySupplies = supplies.filter(s => s.category === category.key)
                  const categoryPurchased = categorySupplies.filter(s => s.purchased).length
                  
                  return (
                    <div key={category.key} className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl">{category.icon}</span>
                        <h3 className="text-lg font-semibold">{category.label}</h3>
                        <Badge variant="outline">
                          {categoryPurchased}/{categorySupplies.length}
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {categorySupplies.map(supply => (
                          <div key={supply.id} className="flex items-start space-x-3 p-4 border rounded-lg">
                            <button 
                              onClick={() => togglePurchased(supply.id)}
                              className="mt-1"
                            >
                              <CheckCircle2 
                                className={`h-5 w-5 ${
                                  supply.purchased 
                                    ? 'text-primary' 
                                    : 'text-muted-foreground'
                                }`} 
                              />
                            </button>
                            
                            <div className="flex-1 space-y-2">
                              <div className="flex items-center space-x-2">
                                <h4 className={`font-medium ${supply.purchased ? 'line-through text-muted-foreground' : ''}`}>
                                  {supply.name}
                                </h4>
                                <Badge 
                                  variant={supply.priority === 'essential' ? 'default' : 'secondary'}
                                  className="text-xs"
                                >
                                  {supply.priority}
                                </Badge>
                              </div>
                              
                              <p className="text-sm text-muted-foreground">
                                {supply.description}
                              </p>
                              
                              <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                                <div className="flex items-center space-x-1">
                                  <Clock className="h-3 w-3" />
                                  <span>{supply.whenNeeded}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <DollarSign className="h-3 w-3" />
                                  <span>{supply.estimatedCost}</span>
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
                  {category.label} Supplies
                </CardTitle>
                <CardDescription>Essential items for {category.label.toLowerCase()}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {supplies
                    .filter(supply => supply.category === category.key)
                    .map(supply => (
                      <div key={supply.id} className="flex items-start space-x-3 p-4 border rounded-lg">
                        <button 
                          onClick={() => togglePurchased(supply.id)}
                          className="mt-1"
                        >
                          <CheckCircle2 
                            className={`h-5 w-5 ${
                              supply.purchased 
                                ? 'text-primary' 
                                : 'text-muted-foreground'
                            }`} 
                          />
                        </button>
                        
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center space-x-2">
                            <h4 className={`font-medium ${supply.purchased ? 'line-through text-muted-foreground' : ''}`}>
                              {supply.name}
                            </h4>
                            <Badge 
                              variant={supply.priority === 'essential' ? 'default' : 'secondary'}
                              className="text-xs"
                            >
                              {supply.priority}
                            </Badge>
                          </div>
                          
                          <p className="text-sm text-muted-foreground">
                            {supply.description}
                          </p>
                          
                          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <Clock className="h-3 w-3" />
                              <span>{supply.whenNeeded}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <DollarSign className="h-3 w-3" />
                              <span>{supply.estimatedCost}</span>
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

        <TabsContent value="tips" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Droplets className="h-5 w-5" />
                Diaper & Bathing Care Tips
              </CardTitle>
              <CardDescription>Expert guidance for keeping baby clean and comfortable</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {careTips.map((tip, index) => (
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
                <h4 className="font-semibold">Important Guidelines:</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <h5 className="font-medium mb-2">Diaper Changing Safety</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Always keep one hand on baby</li>
                      <li>• Have all supplies within reach</li>
                      <li>• Clean from front to back (girls)</li>
                      <li>• Check diaper fit - not too tight or loose</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-muted rounded-lg">
                    <h5 className="font-medium mb-2">Bath Time Safety</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Water depth: 2-3 inches maximum</li>
                      <li>• Always test water temperature first</li>
                      <li>• Support baby's head and neck</li>
                      <li>• Never leave baby alone, even briefly</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-muted rounded-lg">
                    <h5 className="font-medium mb-2">Diaper Rash Prevention</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Change wet/soiled diapers promptly</li>
                      <li>• Let skin air dry before new diaper</li>
                      <li>• Use barrier cream as prevention</li>
                      <li>• Consider different diaper brands if rash persists</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-muted rounded-lg">
                    <h5 className="font-medium mb-2">Product Selection Tips</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Choose fragrance-free, hypoallergenic products</li>
                      <li>• Test new products on small skin area first</li>
                      <li>• Buy diapers in smaller quantities initially</li>
                      <li>• Save receipts in case of reactions</li>
                    </ul>
                  </div>
                </div>
              </div>

              <Alert className="mt-4">
                <Info className="h-4 w-4" />
                <AlertDescription>
                  <strong>When to call the doctor:</strong> Contact your pediatrician if you notice severe diaper rash, signs of infection, or if baby shows signs of dehydration or unusual fussiness.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}