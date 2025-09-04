"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle2, Heart, Baby, Home, Info, Clock, Lightbulb, AlertTriangle } from "lucide-react"
import { useBabyPlanning } from "@/contexts/baby-planning-context"

interface PetPrepItem {
  id: string
  name: string
  category: 'training' | 'environment' | 'routine' | 'safety' | 'behavior' | 'care'
  timing: string
  difficulty: 'easy' | 'moderate' | 'challenging'
  petType: 'dog' | 'cat' | 'both' | 'other'
  description: string
  completed: boolean
}

export function PetPreparation() {
  const { babyPlanningData } = useBabyPlanning()
  
  const [petItems, setPetItems] = useState<PetPrepItem[]>([
    // Training & Behavior
    { id: '1', name: 'Basic Obedience Training', category: 'training', timing: '2nd trimester', difficulty: 'moderate', petType: 'dog', description: 'Ensure solid sit, stay, come, down commands', completed: false },
    { id: '2', name: 'Leash Training', category: 'training', timing: '2nd trimester', difficulty: 'moderate', petType: 'dog', description: 'No pulling, walking calmly beside stroller', completed: false },
    { id: '3', name: 'Crate Training Refresher', category: 'training', timing: '2nd trimester', difficulty: 'easy', petType: 'both', description: 'Comfortable staying in crate/carrier when needed', completed: false },
    { id: '4', name: 'Gentle Touch Training', category: 'training', timing: '2nd-3rd trimester', difficulty: 'moderate', petType: 'both', description: 'Accept handling paws, tail, ears gently', completed: false },
    { id: '5', name: 'Calm Greeting Behavior', category: 'behavior', timing: '2nd-3rd trimester', difficulty: 'moderate', petType: 'dog', description: 'No jumping on people, especially pregnant women', completed: false },
    { id: '6', name: 'Sound Desensitization', category: 'behavior', timing: '2nd-3rd trimester', difficulty: 'easy', petType: 'both', description: 'Gradually introduce baby crying sounds', completed: false },

    // Environment Changes
    { id: '7', name: 'Nursery Introduction', category: 'environment', timing: '3rd trimester', difficulty: 'easy', petType: 'both', description: 'Allow supervised exploration of nursery', completed: false },
    { id: '8', name: 'Baby Scent Introduction', category: 'environment', timing: 'Before birth', difficulty: 'easy', petType: 'both', description: 'Introduce baby lotion, powder scents', completed: false },
    { id: '9', name: 'Furniture Boundaries', category: 'environment', timing: '2nd-3rd trimester', difficulty: 'moderate', petType: 'both', description: 'Keep pets off changing table, crib area', completed: false },
    { id: '10', name: 'Safe Space Setup', category: 'environment', timing: '3rd trimester', difficulty: 'easy', petType: 'both', description: 'Create retreat areas where pets feel secure', completed: false },
    { id: '11', name: 'Baby Gate Training', category: 'environment', timing: '3rd trimester', difficulty: 'easy', petType: 'both', description: 'Respect barriers without anxiety', completed: false },

    // Routine Adjustments
    { id: '12', name: 'Feeding Schedule Changes', category: 'routine', timing: '2nd-3rd trimester', difficulty: 'easy', petType: 'both', description: 'Adjust to accommodate baby feeding times', completed: false },
    { id: '13', name: 'Walk Schedule Adjustments', category: 'routine', timing: '2nd-3rd trimester', difficulty: 'moderate', petType: 'dog', description: 'Plan for different walking times/helpers', completed: false },
    { id: '14', name: 'Play Time Changes', category: 'routine', timing: '3rd trimester', difficulty: 'easy', petType: 'both', description: 'Adapt to shorter, different play sessions', completed: false },
    { id: '15', name: 'Attention Distribution', category: 'routine', timing: '3rd trimester', difficulty: 'moderate', petType: 'both', description: 'Practice giving less constant attention', completed: false },

    // Safety Measures
    { id: '16', name: 'Pet-Proofing Review', category: 'safety', timing: '3rd trimester', difficulty: 'easy', petType: 'both', description: 'Secure pet toys, food, litter boxes from baby', completed: false },
    { id: '17', name: 'Vaccination Updates', category: 'safety', timing: '2nd trimester', difficulty: 'easy', petType: 'both', description: 'Ensure all vaccinations are current', completed: false },
    { id: '18', name: 'Parasite Prevention', category: 'safety', timing: '2nd trimester', difficulty: 'easy', petType: 'both', description: 'Up-to-date flea, tick, worm prevention', completed: false },
    { id: '19', name: 'Nail Trimming Routine', category: 'safety', timing: '2nd-3rd trimester', difficulty: 'moderate', petType: 'both', description: 'Keep nails short to prevent scratching', completed: false },
    { id: '20', name: 'Supervision Plan', category: 'safety', timing: '3rd trimester', difficulty: 'easy', petType: 'both', description: 'Never leave pets alone with baby', completed: false },

    // Care Arrangements
    { id: '21', name: 'Hospital Care Plan', category: 'care', timing: '3rd trimester', difficulty: 'easy', petType: 'both', description: 'Arrange care during hospital stay', completed: false },
    { id: '22', name: 'Backup Caregiver', category: 'care', timing: '3rd trimester', difficulty: 'easy', petType: 'both', description: 'Emergency pet care contacts', completed: false },
    { id: '23', name: 'Vet Relationship', category: 'care', timing: '2nd trimester', difficulty: 'easy', petType: 'both', description: 'Ensure good relationship with current vet', completed: false },
    { id: '24', name: 'Pet Supply Stock', category: 'care', timing: '3rd trimester', difficulty: 'easy', petType: 'both', description: 'Stock up on food, medications, supplies', completed: false }
  ])

  const toggleCompleted = (id: string) => {
    setPetItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    )
  }

  const completedItems = petItems.filter(i => i.completed).length
  const totalItems = petItems.length
  const progressPercentage = (completedItems / totalItems) * 100

  const categories = [
    { key: 'training', label: 'Training', icon: '🎓', description: 'Basic commands and behavior' },
    { key: 'behavior', label: 'Behavior', icon: '🐕', description: 'Adjusting reactions and habits' },
    { key: 'environment', label: 'Environment', icon: '🏠', description: 'Home setup and boundaries' },
    { key: 'routine', label: 'Routine', icon: '⏰', description: 'Schedule and attention changes' },
    { key: 'safety', label: 'Safety', icon: '🛡️', description: 'Health and safety measures' },
    { key: 'care', label: 'Care Plans', icon: '❤️', description: 'Ongoing care arrangements' }
  ]

  const petTypes = [
    { key: 'dog', label: 'Dogs', icon: '🐕' },
    { key: 'cat', label: 'Cats', icon: '🐱' },
    { key: 'both', label: 'Both/General', icon: '🐾' },
    { key: 'other', label: 'Other Pets', icon: '🐾' }
  ]

  const difficultyColors = {
    easy: 'bg-green-500',
    moderate: 'bg-yellow-500',
    challenging: 'bg-red-500'
  }

  const preparationTimeline = [
    {
      timing: '1st Trimester',
      focus: 'Assessment & Planning',
      actions: ['Evaluate current pet behavior', 'Research training needs', 'Begin basic preparations'],
      description: 'Start thinking about what needs to change'
    },
    {
      timing: '2nd Trimester',
      focus: 'Active Training',
      actions: ['Begin obedience training', 'Update vaccinations', 'Start routine adjustments'],
      description: 'Implement major behavioral changes'
    },
    {
      timing: '3rd Trimester',
      focus: 'Final Preparations',
      actions: ['Introduce nursery gradually', 'Finalize care arrangements', 'Practice new routines'],
      description: 'Complete preparations and test systems'
    },
    {
      timing: 'After Birth',
      focus: 'Integration',
      actions: ['Supervised introductions', 'Monitor interactions', 'Adjust as needed'],
      description: 'Help pets adjust to life with baby'
    }
  ]

  const warningSignsToWatch = [
    'Increased aggression or territorial behavior',
    'Excessive anxiety or stress signs',
    'Destructive behavior increases',
    'Changes in eating or bathroom habits',
    'Withdrawal from family interactions',
    'Resource guarding around baby items'
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Pet Preparation</h2>
          <p className="text-muted-foreground">Help your furry family members adjust to life with baby</p>
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
              preparation items completed
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Categories</CardTitle>
            <Heart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{categories.length}</div>
            <p className="text-xs text-muted-foreground">
              preparation areas
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Timeline</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">6-9</div>
            <p className="text-xs text-muted-foreground">
              months to prepare
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Focus</CardTitle>
            <Baby className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Safety</div>
            <p className="text-xs text-muted-foreground">
              and gradual adjustment
            </p>
          </CardContent>
        </Card>
      </div>

      <Alert>
        <Info className="h-4 w-4" />
        <AlertDescription>
          <strong>Start early:</strong> Pet behavior changes take time. Begin training and adjustments in your second trimester to allow plenty of time for your pets to adapt.
        </AlertDescription>
      </Alert>

      <Tabs defaultValue="checklist" className="w-full">
        <TabsList>
          <TabsTrigger value="checklist">Preparation Checklist</TabsTrigger>
          <TabsTrigger value="categories">By Category</TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
          <TabsTrigger value="tips">Training Tips</TabsTrigger>
          <TabsTrigger value="safety">Safety & Signs</TabsTrigger>
        </TabsList>

        <TabsContent value="checklist" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Pet Preparation Checklist</CardTitle>
              <CardDescription>All preparation items organized by pet type and difficulty</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {petTypes.map(petType => {
                  const typeItems = petItems.filter(item => item.petType === petType.key)
                  const typeCompleted = typeItems.filter(item => item.completed).length
                  
                  if (typeItems.length === 0) return null
                  
                  return (
                    <div key={petType.key} className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl">{petType.icon}</span>
                        <h3 className="text-lg font-semibold">{petType.label}</h3>
                        <Badge variant="outline">
                          {typeCompleted}/{typeItems.length} completed
                        </Badge>
                      </div>
                      
                      <div className="space-y-3">
                        {typeItems.map(item => (
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
                                  {categories.find(cat => cat.key === item.category)?.label}
                                </Badge>
                                <div className={`w-2 h-2 rounded-full ${difficultyColors[item.difficulty as keyof typeof difficultyColors]}`} 
                                     title={item.difficulty} />
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
                                  <span>Difficulty: {item.difficulty}</span>
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

        <TabsContent value="categories" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {categories.map(category => {
              const categoryItems = petItems.filter(item => item.category === category.key)
              const categoryCompleted = categoryItems.filter(item => item.completed).length
              
              return (
                <Card key={category.key}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <span className="text-2xl">{category.icon}</span>
                      {category.label}
                    </CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline">
                        {categoryCompleted}/{categoryItems.length} completed
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {categoryItems.map(item => (
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
                              <span className="text-xs">{petTypes.find(p => p.key === item.petType)?.icon}</span>
                              <div className={`w-2 h-2 rounded-full ${difficultyColors[item.difficulty as keyof typeof difficultyColors]}`} />
                            </div>
                            <p className="text-xs text-muted-foreground">
                              {item.description}
                            </p>
                            <div className="text-xs text-muted-foreground">
                              {item.timing}
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
                Pet Preparation Timeline
              </CardTitle>
              <CardDescription>When to start different preparation activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {preparationTimeline.map((phase, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-muted">
                    <div className="absolute w-4 h-4 bg-primary rounded-full -left-2.5 top-1" />
                    
                    <div className="space-y-3">
                      <div>
                        <h3 className="text-lg font-semibold">{phase.timing}</h3>
                        <h4 className="text-md font-medium text-primary">{phase.focus}</h4>
                        <p className="text-sm text-muted-foreground">{phase.description}</p>
                      </div>
                      
                      <div>
                        <h5 className="font-medium mb-2">Key Actions:</h5>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {phase.actions.map((action, actionIndex) => (
                            <li key={actionIndex} className="flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                              <span>{action}</span>
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
                <Lightbulb className="h-5 w-5" />
                Pet Training & Preparation Tips
              </CardTitle>
              <CardDescription>Expert advice for helping pets adjust to baby</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-3">Training Basics</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Use positive reinforcement consistently</li>
                      <li>• Keep training sessions short (5-15 minutes)</li>
                      <li>• Practice new behaviors daily</li>
                      <li>• Be patient - changes take time</li>
                      <li>• Consider professional trainer if needed</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-3">Gradual Introduction</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Introduce changes slowly over weeks</li>
                      <li>• Let pets explore baby items supervised</li>
                      <li>• Play baby sounds at low volume first</li>
                      <li>• Practice new routines before baby arrives</li>
                      <li>• Reward calm, appropriate behavior</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-3">Creating Positive Associations</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Give treats when baby items are present</li>
                      <li>• Maintain regular affection and attention</li>
                      <li>• Include pets in baby preparation activities</li>
                      <li>• Create special pet spaces near baby areas</li>
                      <li>• Keep pets&apos; favorite routines when possible</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-3">Stress Reduction</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Maintain consistent feeding schedules</li>
                      <li>• Provide quiet retreat spaces</li>
                      <li>• Use calming aids if recommended by vet</li>
                      <li>• Exercise pets adequately to reduce anxiety</li>
                      <li>• Monitor for signs of stress or illness</li>
                    </ul>
                  </div>
                </div>

                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Professional help:</strong> Don&apos;t hesitate to consult a professional animal behaviorist or trainer if your pet shows concerning behaviors or if you&apos;re having difficulty with preparations.
                  </AlertDescription>
                </Alert>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="safety" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Safety Guidelines & Warning Signs
              </CardTitle>
              <CardDescription>Important safety measures and concerning behaviors to watch for</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="p-4 border border-destructive rounded-lg">
                  <h4 className="font-semibold text-destructive mb-3">Warning Signs to Watch For</h4>
                  <div className="space-y-2">
                    {warningSignsToWatch.map((sign, index) => (
                      <div key={index} className="flex items-start space-x-2 text-sm">
                        <AlertTriangle className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
                        <span>{sign}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-3">Safety Rules</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Never leave pets alone with baby</li>
                      <li>• Always supervise interactions</li>
                      <li>• Teach children gentle pet interaction</li>
                      <li>• Keep pet food/water away from baby</li>
                      <li>• Maintain pet hygiene and health</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-3">Emergency Preparedness</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Have vet contact information readily available</li>
                      <li>• Know signs of pet illness or stress</li>
                      <li>• Plan for emergency pet separation if needed</li>
                      <li>• Keep first aid supplies for pets</li>
                      <li>• Have backup care arrangements ready</li>
                    </ul>
                  </div>
                </div>

                <Alert>
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>When to seek professional help:</strong> Contact a veterinary behaviorist immediately if your pet shows aggression, excessive anxiety, or other concerning behavioral changes during preparation or after baby arrives.
                  </AlertDescription>
                </Alert>

                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-3">Successful Integration Signs</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Look for these positive signs that your pet is adjusting well:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Calm behavior around baby items and sounds</li>
                    <li>• Maintaining normal eating and sleeping patterns</li>
                    <li>• Curious but respectful interest in the baby</li>
                    <li>• Responding to commands consistently</li>
                    <li>• Seeking attention appropriately, not demandingly</li>
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