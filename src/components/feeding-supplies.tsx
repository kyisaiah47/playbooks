"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle2, ShoppingCart, DollarSign, Baby, Milk, Info, Clock } from "lucide-react"
import { useBabyPlanning } from "@/contexts/baby-planning-context"

interface FeedingSupply {
  id: string
  name: string
  category: 'breastfeeding' | 'bottle' | 'pumping' | 'weaning'
  priority: 'essential' | 'helpful' | 'nice-to-have'
  quantity: string
  estimatedCost: string
  description: string
  whenNeeded: string
  purchased: boolean
}

export function FeedingSupplies() {
  const { babyPlanningData } = useBabyPlanning()
  
  const [supplies, setSupplies] = useState<FeedingSupply[]>([
    // Breastfeeding Essentials
    { id: '1', name: 'Nursing Bras (3-4)', category: 'breastfeeding', priority: 'essential', quantity: '3-4', estimatedCost: '$60-120', description: 'Well-fitting supportive bras for nursing', whenNeeded: 'Before birth', purchased: false },
    { id: '2', name: 'Breast Pads', category: 'breastfeeding', priority: 'essential', quantity: '2-3 packs', estimatedCost: '$15-30', description: 'Disposable or reusable pads to prevent leaks', whenNeeded: 'Before birth', purchased: false },
    { id: '3', name: 'Nipple Cream', category: 'breastfeeding', priority: 'essential', quantity: '1-2 tubes', estimatedCost: '$10-20', description: 'Lanolin or coconut oil based cream', whenNeeded: 'Before birth', purchased: false },
    { id: '4', name: 'Nursing Pillow', category: 'breastfeeding', priority: 'helpful', quantity: '1', estimatedCost: '$25-50', description: 'Support pillow for comfortable positioning', whenNeeded: 'Before birth', purchased: false },
    { id: '5', name: 'Nursing Cover', category: 'breastfeeding', priority: 'helpful', quantity: '1-2', estimatedCost: '$20-40', description: 'For discreet nursing in public', whenNeeded: 'First few weeks', purchased: false },

    // Bottle Feeding
    { id: '6', name: 'Baby Bottles (6-8)', category: 'bottle', priority: 'essential', quantity: '6-8', estimatedCost: '$30-80', description: 'Various sizes: 4oz and 8oz bottles', whenNeeded: 'Before birth', purchased: false },
    { id: '7', name: 'Bottle Nipples', category: 'bottle', priority: 'essential', quantity: '8-10', estimatedCost: '$15-25', description: 'Different flow rates (slow, medium, fast)', whenNeeded: 'Before birth', purchased: false },
    { id: '8', name: 'Baby Formula', category: 'bottle', priority: 'essential', quantity: '1-2 cans', estimatedCost: '$25-50', description: 'Have backup formula on hand', whenNeeded: 'Before birth', purchased: false },
    { id: '9', name: 'Bottle Brush', category: 'bottle', priority: 'essential', quantity: '1-2', estimatedCost: '$5-15', description: 'For thorough cleaning of bottles', whenNeeded: 'Before birth', purchased: false },
    { id: '10', name: 'Bottle Drying Rack', category: 'bottle', priority: 'helpful', quantity: '1', estimatedCost: '$15-30', description: 'Hygienic drying for bottles and parts', whenNeeded: 'Before birth', purchased: false },

    // Pumping
    { id: '11', name: 'Breast Pump', category: 'pumping', priority: 'essential', quantity: '1', estimatedCost: '$50-400', description: 'Manual or electric pump', whenNeeded: 'Before returning to work', purchased: false },
    { id: '12', name: 'Pump Parts (extra set)', category: 'pumping', priority: 'helpful', quantity: '1 set', estimatedCost: '$20-40', description: 'Extra flanges, valves, tubing', whenNeeded: 'Before returning to work', purchased: false },
    { id: '13', name: 'Milk Storage Bags', category: 'pumping', priority: 'essential', quantity: '2-3 boxes', estimatedCost: '$20-40', description: 'For freezing and storing breast milk', whenNeeded: 'Before returning to work', purchased: false },
    { id: '14', name: 'Cooler Bag', category: 'pumping', priority: 'helpful', quantity: '1', estimatedCost: '$15-35', description: 'For transporting pumped milk', whenNeeded: 'Before returning to work', purchased: false },

    // Weaning/Solid Foods (6+ months)
    { id: '15', name: 'High Chair', category: 'weaning', priority: 'essential', quantity: '1', estimatedCost: '$50-200', description: 'Safe feeding chair with tray', whenNeeded: '5-6 months', purchased: false },
    { id: '16', name: 'Baby Spoons', category: 'weaning', priority: 'essential', quantity: '4-6', estimatedCost: '$10-20', description: 'Soft-tipped spoons for first foods', whenNeeded: '5-6 months', purchased: false },
    { id: '17', name: 'Sippy Cups', category: 'weaning', priority: 'essential', quantity: '2-3', estimatedCost: '$15-25', description: 'Transition cups with handles', whenNeeded: '6-8 months', purchased: false },
    { id: '18', name: 'Bibs', category: 'weaning', priority: 'essential', quantity: '6-8', estimatedCost: '$15-30', description: 'Easy-clean bibs for messy eating', whenNeeded: '5-6 months', purchased: false }
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
    { key: 'breastfeeding', label: 'Breastfeeding', icon: '🤱' },
    { key: 'bottle', label: 'Bottle Feeding', icon: '🍼' },
    { key: 'pumping', label: 'Pumping', icon: '🥛' },
    { key: 'weaning', label: 'Weaning/Solids', icon: '🥄' }
  ]

  const priorityColors = {
    essential: 'bg-primary',
    helpful: 'bg-secondary',
    'nice-to-have': 'bg-muted'
  }

  const feedingTips = [
    { category: 'Breastfeeding', tip: 'Stock up on nursing bras in different sizes as your body changes' },
    { category: 'Bottle Feeding', tip: 'Try different bottle brands to find what baby prefers' },
    { category: 'Pumping', tip: 'Correct flange size is crucial for comfortable and efficient pumping' },
    { category: 'Formula', tip: 'Consult pediatrician before choosing formula brand' },
    { category: 'Storage', tip: 'Label all stored milk with date and time' },
    { category: 'Cleaning', tip: 'Sterilize bottles and pump parts regularly, especially in first 3 months' }
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Feeding Supplies</h2>
          <p className="text-muted-foreground">Everything you need for breastfeeding, bottle feeding, and beyond</p>
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
              feeding categories
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Budget Range</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$400-800</div>
            <p className="text-xs text-muted-foreground">
              estimated total cost
            </p>
          </CardContent>
        </Card>
      </div>

      <Alert>
        <Info className="h-4 w-4" />
        <AlertDescription>
          <strong>Timing matters:</strong> Some items like nursing bras and bottles are needed before birth, while weaning supplies can wait until baby is 5-6 months old.
        </AlertDescription>
      </Alert>

      <Tabs defaultValue="all" className="w-full">
        <TabsList>
          <TabsTrigger value="all">All Items</TabsTrigger>
          <TabsTrigger value="breastfeeding">Breastfeeding</TabsTrigger>
          <TabsTrigger value="bottle">Bottle Feeding</TabsTrigger>
          <TabsTrigger value="pumping">Pumping</TabsTrigger>
          <TabsTrigger value="weaning">Weaning</TabsTrigger>
          <TabsTrigger value="tips">Tips</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Complete Feeding Supplies Checklist</CardTitle>
              <CardDescription>All items organized by priority and category</CardDescription>
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
                <Milk className="h-5 w-5" />
                Feeding Tips & Guidelines
              </CardTitle>
              <CardDescription>Helpful advice for feeding your baby</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {feedingTips.map((tip, index) => (
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
                <h4 className="font-semibold">Important Considerations:</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <h5 className="font-medium mb-2">Before Baby Arrives</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Have feeding supplies ready by 36 weeks</li>
                      <li>• Test breast pump if planning to pump</li>
                      <li>• Practice sterilizing bottles and parts</li>
                      <li>• Read instruction manuals</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-muted rounded-lg">
                    <h5 className="font-medium mb-2">First Few Weeks</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Focus on establishing feeding routine</li>
                      <li>• Don't worry about pumping immediately</li>
                      <li>• Have backup formula just in case</li>
                      <li>• Ask for help from lactation consultant</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-muted rounded-lg">
                    <h5 className="font-medium mb-2">Budget-Friendly Tips</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Check if insurance covers breast pump</li>
                      <li>• Buy bottles in sets for better value</li>
                      <li>• Generic nipple creams work just as well</li>
                      <li>• Consider borrowing or buying used high chair</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-muted rounded-lg">
                    <h5 className="font-medium mb-2">Safety Reminders</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Check expiration dates on formula</li>
                      <li>• Replace bottle nipples every 2-3 months</li>
                      <li>• Follow safe milk storage guidelines</li>
                      <li>• Never prop bottles for feeding</li>
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