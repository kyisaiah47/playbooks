"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle2, ShoppingCart, DollarSign, Baby, Shield, AlertTriangle, Info, Clock, Phone } from "lucide-react"
import { useBabyPlanning } from "@/contexts/baby-planning-context"

interface SafetyHealthItem {
  id: string
  name: string
  category: 'first-aid' | 'safety' | 'monitoring' | 'car' | 'emergency'
  priority: 'essential' | 'helpful' | 'nice-to-have'
  estimatedCost: string
  description: string
  whenNeeded: string
  ageRange: string
  purchased: boolean
}

export function SafetyHealth() {
  const { babyPlanningData } = useBabyPlanning()
  
  const [safetyItems, setSafetyItems] = useState<SafetyHealthItem[]>([
    // First Aid & Health
    { id: '1', name: 'Digital Thermometer', category: 'first-aid', priority: 'essential', estimatedCost: '$10-25', description: 'Rectal thermometer for accurate readings', whenNeeded: 'Before birth', ageRange: '0+ months', purchased: false },
    { id: '2', name: 'Baby First Aid Kit', category: 'first-aid', priority: 'essential', estimatedCost: '$20-40', description: 'Infant-specific medical supplies', whenNeeded: 'Before birth', ageRange: '0+ months', purchased: false },
    { id: '3', name: 'Saline Drops', category: 'first-aid', priority: 'essential', estimatedCost: '$5-10', description: 'For congestion relief', whenNeeded: 'Before birth', ageRange: '0+ months', purchased: false },
    { id: '4', name: 'Bulb Syringe', category: 'first-aid', priority: 'essential', estimatedCost: '$3-8', description: 'Clear nasal passages', whenNeeded: 'Before birth', ageRange: '0-6 months', purchased: false },
    { id: '5', name: 'Baby Medicine Dispenser', category: 'first-aid', priority: 'helpful', estimatedCost: '$8-15', description: 'Accurate dosing syringe', whenNeeded: 'Before birth', ageRange: '0+ months', purchased: false },
    { id: '6', name: 'Humidifier', category: 'first-aid', priority: 'helpful', estimatedCost: '$30-80', description: 'Maintain proper room humidity', whenNeeded: 'Before birth', ageRange: '0+ months', purchased: false },

    // Car Safety
    { id: '7', name: 'Infant Car Seat', category: 'car', priority: 'essential', estimatedCost: '$100-400', description: 'Rear-facing infant seat', whenNeeded: 'Before birth', ageRange: '0-12 months', purchased: false },
    { id: '8', name: 'Car Seat Base (extra)', category: 'car', priority: 'helpful', estimatedCost: '$50-100', description: 'For second vehicle', whenNeeded: 'Before birth', ageRange: '0-12 months', purchased: false },
    { id: '9', name: 'Car Seat Mirror', category: 'car', priority: 'helpful', estimatedCost: '$15-30', description: 'Monitor rear-facing baby', whenNeeded: 'Before birth', ageRange: '0-24 months', purchased: false },
    { id: '10', name: 'Window Shades', category: 'car', priority: 'helpful', estimatedCost: '$10-20', description: 'Sun protection for car rides', whenNeeded: 'First month', ageRange: '0+ months', purchased: false },

    // Home Safety
    { id: '11', name: 'Outlet Covers', category: 'safety', priority: 'essential', estimatedCost: '$5-15', description: 'Childproof electrical outlets', whenNeeded: '4-6 months', ageRange: '6+ months', purchased: false },
    { id: '12', name: 'Cabinet Locks', category: 'safety', priority: 'essential', estimatedCost: '$15-30', description: 'Secure cabinets and drawers', whenNeeded: '4-6 months', ageRange: '6+ months', purchased: false },
    { id: '13', name: 'Safety Gates', category: 'safety', priority: 'essential', estimatedCost: '$50-150', description: 'Block stairs and doorways', whenNeeded: '6-8 months', ageRange: '6+ months', purchased: false },
    { id: '14', name: 'Corner Guards', category: 'safety', priority: 'helpful', estimatedCost: '$10-25', description: 'Protect from sharp edges', whenNeeded: '6-8 months', ageRange: '8+ months', purchased: false },
    { id: '15', name: 'Toilet Locks', category: 'safety', priority: 'helpful', estimatedCost: '$8-15', description: 'Prevent drowning hazard', whenNeeded: '8-10 months', ageRange: '8+ months', purchased: false },
    { id: '16', name: 'Door Knob Covers', category: 'safety', priority: 'helpful', estimatedCost: '$10-20', description: 'Prevent room access', whenNeeded: '12+ months', ageRange: '12+ months', purchased: false },

    // Monitoring
    { id: '17', name: 'Baby Monitor', category: 'monitoring', priority: 'helpful', estimatedCost: '$50-300', description: 'Audio/video monitoring system', whenNeeded: 'Before birth', ageRange: '0+ months', purchased: false },
    { id: '18', name: 'Breathing Monitor', category: 'monitoring', priority: 'nice-to-have', estimatedCost: '$200-400', description: 'Movement/breathing sensor', whenNeeded: 'Before birth', ageRange: '0-12 months', purchased: false },
    { id: '19', name: 'Night Light', category: 'monitoring', priority: 'helpful', estimatedCost: '$10-30', description: 'Soft lighting for night feeds', whenNeeded: 'Before birth', ageRange: '0+ months', purchased: false },

    // Emergency Preparedness
    { id: '20', name: 'Emergency Contact List', category: 'emergency', priority: 'essential', estimatedCost: 'Free', description: 'Posted emergency numbers', whenNeeded: 'Before birth', ageRange: '0+ months', purchased: false },
    { id: '21', name: 'Fire Extinguisher', category: 'emergency', priority: 'helpful', estimatedCost: '$20-50', description: 'Kitchen/nursery fire safety', whenNeeded: 'Before birth', ageRange: '0+ months', purchased: false },
    { id: '22', name: 'Smoke/CO Detectors', category: 'emergency', priority: 'essential', estimatedCost: '$20-60', description: 'Check batteries, update units', whenNeeded: 'Before birth', ageRange: '0+ months', purchased: false },
    { id: '23', name: 'Emergency Kit', category: 'emergency', priority: 'helpful', estimatedCost: '$50-100', description: 'Disaster preparedness supplies', whenNeeded: 'Before birth', ageRange: '0+ months', purchased: false }
  ])

  const togglePurchased = (id: string) => {
    setSafetyItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, purchased: !item.purchased } : item
      )
    )
  }

  const purchasedItems = safetyItems.filter(i => i.purchased).length
  const totalItems = safetyItems.length
  const progressPercentage = (purchasedItems / totalItems) * 100

  const essentialItems = safetyItems.filter(i => i.priority === 'essential')
  const purchasedEssentials = essentialItems.filter(i => i.purchased).length

  const categories = [
    { key: 'first-aid', label: 'First Aid & Health', icon: '🏥' },
    { key: 'car', label: 'Car Safety', icon: '🚗' },
    { key: 'safety', label: 'Home Safety', icon: '🏠' },
    { key: 'monitoring', label: 'Monitoring', icon: '📱' },
    { key: 'emergency', label: 'Emergency Prep', icon: '🚨' }
  ]

  const safetyTips = [
    { category: 'Car Safety', tip: 'Have car seat professionally installed and inspected' },
    { category: 'Sleep Safety', tip: 'Always place baby on back to sleep, keep crib bare' },
    { category: 'Temperature', tip: 'Check baby\'s temperature if they feel warm or cool' },
    { category: 'Childproofing', tip: 'Start childproofing before baby becomes mobile' },
    { category: 'Emergency', tip: 'Keep important phone numbers easily accessible' },
    { category: 'First Aid', tip: 'Take an infant CPR and first aid class' }
  ]

  const emergencyNumbers = [
    'Pediatrician Office',
    'After-Hours Pediatric Line', 
    'Poison Control: 1-800-222-1222',
    'Emergency Services: 911',
    'Hospital Labor & Delivery',
    'Pharmacy'
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Safety & Health</h2>
          <p className="text-muted-foreground">Essential items for keeping your baby safe and healthy</p>
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
            <Shield className="h-4 w-4 text-muted-foreground" />
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
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{categories.length}</div>
            <p className="text-xs text-muted-foreground">
              safety categories
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Budget Range</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$400-900</div>
            <p className="text-xs text-muted-foreground">
              estimated total cost
            </p>
          </CardContent>
        </Card>
      </div>

      <Alert>
        <Shield className="h-4 w-4" />
        <AlertDescription>
          <strong>Safety first:</strong> Some items like car seats are legally required, while others like outlet covers become essential as baby grows and becomes mobile.
        </AlertDescription>
      </Alert>

      <Tabs defaultValue="all" className="w-full">
        <TabsList>
          <TabsTrigger value="all">All Items</TabsTrigger>
          <TabsTrigger value="first-aid">Health & First Aid</TabsTrigger>
          <TabsTrigger value="car">Car Safety</TabsTrigger>
          <TabsTrigger value="safety">Home Safety</TabsTrigger>
          <TabsTrigger value="emergency">Emergency</TabsTrigger>
          <TabsTrigger value="tips">Safety Tips</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Complete Safety & Health Checklist</CardTitle>
              <CardDescription>All items organized by category and when they're needed</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {categories.map(category => {
                  const categoryItems = safetyItems.filter(i => i.category === category.key)
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
                                <Badge variant="outline" className="text-xs">
                                  {item.ageRange}
                                </Badge>
                              </div>
                              
                              <p className="text-sm text-muted-foreground">
                                {item.description}
                              </p>
                              
                              <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                                <div className="flex items-center space-x-1">
                                  <Clock className="h-3 w-3" />
                                  <span>{item.whenNeeded}</span>
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

        {categories.slice(0, 4).map(category => (
          <TabsContent key={category.key} value={category.key} className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">{category.icon}</span>
                  {category.label}
                </CardTitle>
                <CardDescription>Essential {category.label.toLowerCase()} items for your baby</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {safetyItems
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
                            <Badge variant="outline" className="text-xs">
                              {item.ageRange}
                            </Badge>
                          </div>
                          
                          <p className="text-sm text-muted-foreground">
                            {item.description}
                          </p>
                          
                          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <Clock className="h-3 w-3" />
                              <span>{item.whenNeeded}</span>
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

        <TabsContent value="emergency" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Emergency Preparedness
              </CardTitle>
              <CardDescription>Essential preparation for emergencies and urgent situations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {safetyItems
                  .filter(item => item.category === 'emergency')
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
                        </div>
                        
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                        
                        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Clock className="h-3 w-3" />
                            <span>{item.whenNeeded}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <DollarSign className="h-3 w-3" />
                            <span>{item.estimatedCost}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                <div className="mt-6 p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Essential Emergency Numbers
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {emergencyNumbers.map((number, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                        <span>{number}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Alert className="mt-4">
                    <Info className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Create an emergency contact sheet</strong> and post it on your refrigerator, in your diaper bag, and save in your phone contacts.
                    </AlertDescription>
                  </Alert>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tips" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Safety Tips & Guidelines
              </CardTitle>
              <CardDescription>Important safety information for new parents</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {safetyTips.map((tip, index) => (
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
                <h4 className="font-semibold">Age-Based Safety Timeline:</h4>
                
                <div className="space-y-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <h5 className="font-medium mb-2">Before Birth - 0-3 Months</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Install and inspect car seat</li>
                      <li>• Set up safe sleep environment</li>
                      <li>• Check smoke/CO detectors</li>
                      <li>• Stock first aid supplies</li>
                      <li>• Take infant CPR class</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-muted rounded-lg">
                    <h5 className="font-medium mb-2">3-6 Months</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Baby becomes more active and alert</li>
                      <li>• Start thinking about childproofing</li>
                      <li>• Ensure safe sleep practices continue</li>
                      <li>• Monitor for developmental milestones</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-muted rounded-lg">
                    <h5 className="font-medium mb-2">6-12 Months</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Install outlet covers and cabinet locks</li>
                      <li>• Set up safety gates</li>
                      <li>• Remove or secure small objects</li>
                      <li>• Childproof bathrooms and kitchens</li>
                      <li>• Install corner guards on furniture</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-muted rounded-lg">
                    <h5 className="font-medium mb-2">12+ Months</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Complete full home childproofing</li>
                      <li>• Install door knob covers</li>
                      <li>• Secure heavy furniture to walls</li>
                      <li>• Teach basic safety rules</li>
                      <li>• Transition to forward-facing car seat (when ready)</li>
                    </ul>
                  </div>
                </div>

                <Alert>
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Remember:</strong> Always supervise your baby and toddler. Safety equipment reduces risks but doesn't replace attentive supervision.
                  </AlertDescription>
                </Alert>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}