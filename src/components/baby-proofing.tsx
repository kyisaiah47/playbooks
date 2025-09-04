"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle2, Home, Shield, AlertTriangle, Baby, Info, Clock, Eye } from "lucide-react"
import { useBabyPlanning } from "@/contexts/baby-planning-context"

interface SafetyItem {
  id: string
  name: string
  area: 'kitchen' | 'bathroom' | 'living' | 'bedroom' | 'stairs' | 'general'
  priority: 'critical' | 'important' | 'recommended'
  ageRange: string
  estimatedCost: string
  description: string
  installationDifficulty: 'easy' | 'moderate' | 'difficult'
  completed: boolean
}

export function BabyProofing() {
  const { babyPlanningData } = useBabyPlanning()
  
  const [safetyItems, setSafetyItems] = useState<SafetyItem[]>([
    // Kitchen Safety
    { id: '1', name: 'Cabinet Locks', area: 'kitchen', priority: 'critical', ageRange: '6-18 months', estimatedCost: '$15-30', description: 'Lock cabinets containing chemicals, knives, breakables', installationDifficulty: 'easy', completed: false },
    { id: '2', name: 'Drawer Locks', area: 'kitchen', priority: 'critical', ageRange: '6-18 months', estimatedCost: '$10-25', description: 'Secure drawers with sharp objects or small items', installationDifficulty: 'easy', completed: false },
    { id: '3', name: 'Stove Knob Covers', area: 'kitchen', priority: 'critical', ageRange: '12+ months', estimatedCost: '$8-15', description: 'Prevent accidental gas or heat activation', installationDifficulty: 'easy', completed: false },
    { id: '4', name: 'Refrigerator Lock', area: 'kitchen', priority: 'important', ageRange: '12+ months', estimatedCost: '$10-20', description: 'Keep toddlers out of fridge and freezer', installationDifficulty: 'easy', completed: false },
    { id: '5', name: 'Appliance Locks', area: 'kitchen', priority: 'important', ageRange: '8-24 months', estimatedCost: '$20-40', description: 'Secure dishwasher, oven, microwave', installationDifficulty: 'moderate', completed: false },

    // Bathroom Safety
    { id: '6', name: 'Toilet Locks', area: 'bathroom', priority: 'critical', ageRange: '6-36 months', estimatedCost: '$8-15', description: 'Prevent drowning hazard and unsanitary play', installationDifficulty: 'easy', completed: false },
    { id: '7', name: 'Bathtub Non-Slip Mats', area: 'bathroom', priority: 'critical', ageRange: '6+ months', estimatedCost: '$10-25', description: 'Prevent slipping in tub', installationDifficulty: 'easy', completed: false },
    { id: '8', name: 'Faucet Cover', area: 'bathroom', priority: 'important', ageRange: '6-24 months', estimatedCost: '$8-15', description: 'Soft cover for hard faucet edges', installationDifficulty: 'easy', completed: false },
    { id: '9', name: 'Medicine Cabinet Lock', area: 'bathroom', priority: 'critical', ageRange: '6+ months', estimatedCost: '$5-12', description: 'Secure all medications and toiletries', installationDifficulty: 'easy', completed: false },
    { id: '10', name: 'Razor/Sharp Object Storage', area: 'bathroom', priority: 'critical', ageRange: '6+ months', estimatedCost: '$10-20', description: 'High, locked storage for sharp items', installationDifficulty: 'easy', completed: false },

    // Living Areas
    { id: '11', name: 'Outlet Covers/Plugs', area: 'living', priority: 'critical', ageRange: '6-24 months', estimatedCost: '$10-20', description: 'Cover all accessible electrical outlets', installationDifficulty: 'easy', completed: false },
    { id: '12', name: 'Corner Guards', area: 'living', priority: 'important', ageRange: '8-24 months', estimatedCost: '$15-30', description: 'Soft padding for sharp furniture corners', installationDifficulty: 'easy', completed: false },
    { id: '13', name: 'Furniture Anchors', area: 'living', priority: 'critical', ageRange: '8+ months', estimatedCost: '$20-50', description: 'Secure tall furniture and TVs to walls', installationDifficulty: 'moderate', completed: false },
    { id: '14', name: 'Cord Shorteners/Covers', area: 'living', priority: 'important', ageRange: '6-24 months', estimatedCost: '$15-25', description: 'Manage blind cords and electrical cords', installationDifficulty: 'easy', completed: false },
    { id: '15', name: 'Fireplace Guard', area: 'living', priority: 'critical', ageRange: '6+ months', estimatedCost: '$50-150', description: 'Physical barrier around fireplace', installationDifficulty: 'moderate', completed: false },

    // Bedroom Safety
    { id: '16', name: 'Window Locks/Guards', area: 'bedroom', priority: 'critical', ageRange: '8+ months', estimatedCost: '$25-60', description: 'Prevent falls from windows', installationDifficulty: 'moderate', completed: false },
    { id: '17', name: 'Dresser Anchors', area: 'bedroom', priority: 'critical', ageRange: '8+ months', estimatedCost: '$15-30', description: 'Secure dressers and changing tables', installationDifficulty: 'moderate', completed: false },
    { id: '18', name: 'Closet Locks', area: 'bedroom', priority: 'recommended', ageRange: '12+ months', estimatedCost: '$10-20', description: 'Keep closets with hazards secured', installationDifficulty: 'easy', completed: false },

    // Stairs
    { id: '19', name: 'Top-of-Stairs Gate', area: 'stairs', priority: 'critical', ageRange: '6-24 months', estimatedCost: '$40-100', description: 'Hardware-mounted gate at top of stairs', installationDifficulty: 'moderate', completed: false },
    { id: '20', name: 'Bottom-of-Stairs Gate', area: 'stairs', priority: 'important', ageRange: '6-24 months', estimatedCost: '$30-80', description: 'Gate to block access to stairs', installationDifficulty: 'easy', completed: false },
    { id: '21', name: 'Banister Guards', area: 'stairs', priority: 'important', ageRange: '6-36 months', estimatedCost: '$25-60', description: 'Prevent climbing through railings', installationDifficulty: 'moderate', completed: false },

    // General
    { id: '22', name: 'Door Knob Covers', area: 'general', priority: 'important', ageRange: '12+ months', estimatedCost: '$10-20', description: 'Keep toddlers out of dangerous rooms', installationDifficulty: 'easy', completed: false },
    { id: '23', name: 'Sliding Door Locks', area: 'general', priority: 'important', ageRange: '12+ months', estimatedCost: '$15-30', description: 'Secure patio and closet doors', installationDifficulty: 'easy', completed: false },
    { id: '24', name: 'Smoke/CO Detector Check', area: 'general', priority: 'critical', ageRange: '0+ months', estimatedCost: '$20-60', description: 'Test batteries and update old units', installationDifficulty: 'easy', completed: false }
  ])

  const toggleCompleted = (id: string) => {
    setSafetyItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    )
  }

  const completedItems = safetyItems.filter(i => i.completed).length
  const totalItems = safetyItems.length
  const progressPercentage = (completedItems / totalItems) * 100

  const criticalItems = safetyItems.filter(i => i.priority === 'critical')
  const completedCritical = criticalItems.filter(i => i.completed).length

  const areas = [
    { key: 'kitchen', label: 'Kitchen', icon: '🍳', color: 'bg-red-100' },
    { key: 'bathroom', label: 'Bathroom', icon: '🛁', color: 'bg-blue-100' },
    { key: 'living', label: 'Living Areas', icon: '🛋️', color: 'bg-green-100' },
    { key: 'bedroom', label: 'Bedrooms', icon: '🛏️', color: 'bg-purple-100' },
    { key: 'stairs', label: 'Stairs', icon: '🪜', color: 'bg-yellow-100' },
    { key: 'general', label: 'General', icon: '🏠', color: 'bg-gray-100' }
  ]

  const ageTimeline = [
    {
      age: '0-6 months',
      focus: 'Preparation Phase',
      items: ['Install smoke detectors', 'Plan layout changes', 'Research products'],
      description: 'Baby is not mobile yet - time to prepare and install basics'
    },
    {
      age: '6-12 months',
      focus: 'Critical Safety Phase',
      items: ['Cabinet locks', 'Outlet covers', 'Stair gates', 'Toilet locks'],
      description: 'Baby becomes mobile - crawling and pulling up'
    },
    {
      age: '12-24 months',
      focus: 'Advanced Mobility',
      items: ['Door knob covers', 'Appliance locks', 'Window guards', 'Furniture anchors'],
      description: 'Toddler can walk, climb, and reach higher places'
    },
    {
      age: '24+ months',
      focus: 'Ongoing Updates',
      items: ['Remove some barriers', 'Teach safety rules', 'Update as needed'],
      description: 'Begin teaching safety while maintaining key protections'
    }
  ]

  const priorityColors = {
    critical: 'bg-red-500',
    important: 'bg-orange-500',
    recommended: 'bg-blue-500'
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Baby-Proofing</h2>
          <p className="text-muted-foreground">Create a safe environment as your baby becomes mobile</p>
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
            <CardTitle className="text-sm font-medium">Overall Progress</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{completedItems}/{totalItems}</div>
            <Progress value={progressPercentage} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">
              safety items completed
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Critical Items</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{completedCritical}/{criticalItems.length}</div>
            <Progress 
              value={(completedCritical / criticalItems.length) * 100} 
              className="mt-2" 
            />
            <p className="text-xs text-muted-foreground mt-2">
              critical safety items
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Areas to Secure</CardTitle>
            <Home className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{areas.length}</div>
            <p className="text-xs text-muted-foreground">
              home areas covered
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Budget Range</CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$300-800</div>
            <p className="text-xs text-muted-foreground">
              estimated total cost
            </p>
          </CardContent>
        </Card>
      </div>

      <Alert>
        <Baby className="h-4 w-4" />
        <AlertDescription>
          <strong>Start early:</strong> Begin baby-proofing around 4-6 months, before your baby becomes mobile. Critical items should be installed before baby starts crawling.
        </AlertDescription>
      </Alert>

      <Tabs defaultValue="checklist" className="w-full">
        <TabsList>
          <TabsTrigger value="checklist">Safety Checklist</TabsTrigger>
          <TabsTrigger value="areas">By Area</TabsTrigger>
          <TabsTrigger value="timeline">Age Timeline</TabsTrigger>
          <TabsTrigger value="tips">Safety Tips</TabsTrigger>
        </TabsList>

        <TabsContent value="checklist" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Complete Baby-Proofing Checklist</CardTitle>
              <CardDescription>All safety items organized by priority and area</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {['critical', 'important', 'recommended'].map(priority => {
                  const priorityItems = safetyItems.filter(item => item.priority === priority)
                  const priorityCompleted = priorityItems.filter(item => item.completed).length
                  
                  return (
                    <div key={priority} className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <div className={`w-3 h-3 rounded-full ${priorityColors[priority as keyof typeof priorityColors]}`} />
                        <h3 className="text-lg font-semibold capitalize">{priority} Items</h3>
                        <Badge variant="outline">
                          {priorityCompleted}/{priorityItems.length}
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {priorityItems.map(item => (
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
                                <Badge variant="outline" className="text-xs">
                                  {areas.find(area => area.key === item.area)?.label}
                                </Badge>
                              </div>
                              
                              <p className="text-sm text-muted-foreground">
                                {item.description}
                              </p>
                              
                              <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                                <div className="flex items-center space-x-1">
                                  <Baby className="h-3 w-3" />
                                  <span>{item.ageRange}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <span>${item.estimatedCost}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <Clock className="h-3 w-3" />
                                  <span>{item.installationDifficulty}</span>
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

        <TabsContent value="areas" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {areas.map(area => {
              const areaItems = safetyItems.filter(item => item.area === area.key)
              const areaCompleted = areaItems.filter(item => item.completed).length
              
              return (
                <Card key={area.key}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <span className="text-2xl">{area.icon}</span>
                      {area.label}
                    </CardTitle>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline">
                        {areaCompleted}/{areaItems.length} completed
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {areaItems.map(item => (
                        <div key={item.id} className="flex items-start space-x-3 p-3 border rounded-lg">
                          <button 
                            onClick={() => toggleCompleted(item.id)}
                            className="mt-0.5"
                          >
                            <CheckCircle2 
                              className={`h-4 w-4 ${
                                item.completed 
                                  ? 'text-primary' 
                                  : 'text-muted-foreground'
                              }`} 
                            />
                          </button>
                          
                          <div className="flex-1 space-y-1">
                            <div className="flex items-center space-x-2">
                              <h5 className={`font-medium text-sm ${item.completed ? 'line-through text-muted-foreground' : ''}`}>
                                {item.name}
                              </h5>
                              <div className={`w-2 h-2 rounded-full ${priorityColors[item.priority as keyof typeof priorityColors]}`} />
                            </div>
                            <p className="text-xs text-muted-foreground">
                              {item.description}
                            </p>
                            <div className="text-xs text-muted-foreground">
                              {item.ageRange} • {item.estimatedCost}
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

        <TabsContent value="timeline" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Age-Based Safety Timeline
              </CardTitle>
              <CardDescription>When to implement different safety measures</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {ageTimeline.map((phase, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-muted">
                    <div className="absolute w-4 h-4 bg-primary rounded-full -left-2.5 top-1" />
                    
                    <div className="space-y-3">
                      <div>
                        <h3 className="text-lg font-semibold">{phase.age}</h3>
                        <h4 className="text-md font-medium text-primary">{phase.focus}</h4>
                        <p className="text-sm text-muted-foreground">{phase.description}</p>
                      </div>
                      
                      <div>
                        <h5 className="font-medium mb-2">Key Safety Items:</h5>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {phase.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tips" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5" />
                Baby-Proofing Tips & Guidelines
              </CardTitle>
              <CardDescription>Expert advice for creating a safe home environment</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-3">Installation Tips</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Test all locks and latches regularly</li>
                      <li>• Follow manufacturer installation instructions</li>
                      <li>• Use power tools safely when drilling</li>
                      <li>• Check weight limits on furniture anchors</li>
                      <li>• Replace worn or broken safety devices immediately</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-3">Common Mistakes</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Waiting until baby is already mobile</li>
                      <li>• Only focusing on obvious hazards</li>
                      <li>• Forgetting about visitors&apos; belongings</li>
                      <li>• Not updating safety measures as child grows</li>
                      <li>• Inconsistent application throughout home</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-3">Hidden Hazards</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Small objects that can cause choking</li>
                      <li>• Magnetic items (buttons, decorations)</li>
                      <li>• Plant soil and fertilizers</li>
                      <li>• Pet food and water bowls</li>
                      <li>• Purses and bags with small items</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-3">Emergency Preparedness</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Keep poison control number handy (1-800-222-1222)</li>
                      <li>• Learn infant/child CPR and first aid</li>
                      <li>• Have emergency contact list posted</li>
                      <li>• Know how to quickly remove safety devices</li>
                      <li>• Practice emergency evacuation routes</li>
                    </ul>
                  </div>
                </div>

                <Alert>
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Regular safety checks:</strong> Walk through your home monthly from a child&apos;s perspective (get down to their eye level) to spot new hazards as your child grows and develops new abilities.
                  </AlertDescription>
                </Alert>

                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-3">Professional Safety Assessment</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Consider hiring a professional baby-proofing service for:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Comprehensive home safety evaluation</li>
                    <li>• Custom solutions for unique home features</li>
                    <li>• Professional installation of complex items</li>
                    <li>• Peace of mind with expert recommendations</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}