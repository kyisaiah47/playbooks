"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle2, Baby, Clock, Heart, Milk, Info, Calendar, Target } from "lucide-react"
import { useBabyPlanning } from "@/contexts/baby-planning-context"

interface FeedingPlan {
  id: string
  name: string
  type: 'breastfeeding' | 'formula' | 'combination' | 'weaning'
  ageRange: string
  frequency: string
  description: string
  benefits: string[]
  considerations: string[]
  isSelected: boolean
}

interface FeedingGoal {
  id: string
  goal: string
  category: 'establishment' | 'routine' | 'nutrition' | 'weaning'
  targetDate: string
  completed: boolean
}

export function FeedingPlans() {
  const { babyPlanningData } = useBabyPlanning()
  
  const [feedingPlans, setFeedingPlans] = useState<FeedingPlan[]>([
    {
      id: '1',
      name: 'Exclusive Breastfeeding',
      type: 'breastfeeding',
      ageRange: '0-6 months',
      frequency: 'On demand (8-12 times/day)',
      description: 'Feeding only breast milk with no supplements or solids',
      benefits: ['Optimal nutrition', 'Immune protection', 'Bonding', 'Cost-effective'],
      considerations: ['Requires time commitment', 'May be challenging initially', 'Partner involvement limited'],
      isSelected: true
    },
    {
      id: '2', 
      name: 'Exclusive Formula Feeding',
      type: 'formula',
      ageRange: '0-12 months',
      frequency: '6-8 times/day (2-4oz per feeding)',
      description: 'Feeding only formula milk with measured portions',
      benefits: ['Flexible scheduling', 'Partner can help', 'Measured intake', 'Less maternal stress'],
      considerations: ['More expensive', 'Preparation required', 'Less immune benefits'],
      isSelected: false
    },
    {
      id: '3',
      name: 'Combination Feeding',
      type: 'combination',
      ageRange: '0-12 months', 
      frequency: 'Mixed schedule (4-6 breast + 2-4 formula/day)',
      description: 'Combining breast milk and formula feeding',
      benefits: ['Flexibility', 'Shared feeding duties', 'Maintains breastfeeding', 'Backup option'],
      considerations: ['Complex scheduling', 'Supply management', 'Nipple confusion risk'],
      isSelected: false
    },
    {
      id: '4',
      name: 'Introduction to Solids',
      type: 'weaning',
      ageRange: '4-6 months onwards',
      frequency: '1-3 solid meals + milk feeds',
      description: 'Gradually introducing solid foods while maintaining milk feeds',
      benefits: ['Nutritional variety', 'Developmental milestone', 'Family meal participation'],
      considerations: ['Allergy monitoring', 'Texture progression', 'Nutritional balance'],
      isSelected: false
    }
  ])

  const [feedingGoals, setFeedingGoals] = useState<FeedingGoal[]>([
    { id: '1', goal: 'Establish breastfeeding routine', category: 'establishment', targetDate: '2 weeks', completed: false },
    { id: '2', goal: 'Build milk supply', category: 'establishment', targetDate: '4 weeks', completed: false },
    { id: '3', goal: 'Create feeding schedule', category: 'routine', targetDate: '6 weeks', completed: false },
    { id: '4', goal: 'Introduce bottle (if combo feeding)', category: 'routine', targetDate: '3-4 weeks', completed: false },
    { id: '5', goal: 'Ensure adequate weight gain', category: 'nutrition', targetDate: 'Ongoing', completed: false },
    { id: '6', goal: 'Start solid foods introduction', category: 'weaning', targetDate: '4-6 months', completed: false },
    { id: '7', goal: 'Establish family meal routine', category: 'weaning', targetDate: '8-10 months', completed: false }
  ])

  const togglePlanSelection = (id: string) => {
    setFeedingPlans(prev => 
      prev.map(plan => 
        plan.id === id ? { ...plan, isSelected: !plan.isSelected } : plan
      )
    )
  }

  const toggleGoalCompletion = (id: string) => {
    setFeedingGoals(prev => 
      prev.map(goal => 
        goal.id === id ? { ...goal, completed: !goal.completed } : goal
      )
    )
  }

  const selectedPlans = feedingPlans.filter(p => p.isSelected).length
  const completedGoals = feedingGoals.filter(g => g.completed).length
  const totalGoals = feedingGoals.length
  const progressPercentage = (completedGoals / totalGoals) * 100

  const feedingTypes = [
    { key: 'breastfeeding', label: 'Breastfeeding', icon: '🤱', color: 'bg-green-100' },
    { key: 'formula', label: 'Formula Feeding', icon: '🍼', color: 'bg-blue-100' },
    { key: 'combination', label: 'Combination', icon: '🤝', color: 'bg-purple-100' },
    { key: 'weaning', label: 'Weaning/Solids', icon: '🥄', color: 'bg-orange-100' }
  ]

  const feedingTimeline = [
    {
      stage: '0-2 weeks',
      focus: 'Establishment',
      goals: ['Frequent feeding (8-12 times/day)', 'Establish milk supply', 'Learn feeding cues'],
      tips: ['Feed on demand', 'Ensure proper latch', 'Stay hydrated and nourished']
    },
    {
      stage: '2-6 weeks', 
      focus: 'Routine Building',
      goals: ['More predictable schedule', 'Increased feeding efficiency', 'Better sleep patterns'],
      tips: ['Track feeding times', 'Introduce bottle if desired', 'Monitor weight gain']
    },
    {
      stage: '2-4 months',
      focus: 'Established Routine',
      goals: ['Consistent feeding schedule', 'Adequate nutrition', 'Growth milestones'],
      tips: ['Maintain routine flexibility', 'Adjust to growth spurts', 'Consider return-to-work plans']
    },
    {
      stage: '4-6 months',
      focus: 'Introduction to Solids',
      goals: ['Start solid foods', 'Maintain milk as primary nutrition', 'Explore textures'],
      tips: ['Start with single ingredients', 'Watch for allergic reactions', 'Let baby self-feed']
    },
    {
      stage: '6+ months',
      focus: 'Diverse Nutrition',
      goals: ['Varied diet', 'Family meal participation', 'Independent eating skills'],
      tips: ['Offer variety', 'Model eating behaviors', 'Be patient with messiness']
    }
  ]

  const nutritionGuidelines = [
    {
      category: 'Breastfeeding Nutrition',
      guidelines: [
        'Exclusive breastfeeding recommended for first 6 months',
        'Breast milk provides optimal nutrition and antibodies', 
        'On-demand feeding supports milk supply',
        'Additional calories needed for nursing mothers (300-500/day)'
      ]
    },
    {
      category: 'Formula Guidelines',
      guidelines: [
        'Iron-fortified formula recommended',
        'Follow mixing instructions exactly',
        'Prepared formula expires after 24 hours refrigerated',
        'Never microwave formula - warm in bottle warmer or warm water'
      ]
    },
    {
      category: 'Starting Solids',
      guidelines: [
        'Introduce single ingredients one at a time',
        'Wait 3-5 days between new foods',
        'Start with iron-rich foods (cereals, meat, beans)',
        'Honey should not be given before 12 months'
      ]
    }
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Feeding Plans</h2>
          <p className="text-muted-foreground">Create a personalized feeding strategy for your baby</p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="secondary" className="text-lg px-3 py-1">
            Care & Development
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Goal Progress</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{completedGoals}/{totalGoals}</div>
            <Progress value={progressPercentage} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">
              feeding goals achieved
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Selected Plans</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{selectedPlans}</div>
            <p className="text-xs text-muted-foreground">
              feeding approaches chosen
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Feeding Types</CardTitle>
            <Milk className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{feedingTypes.length}</div>
            <p className="text-xs text-muted-foreground">
              feeding options available
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Timeline</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12+</div>
            <p className="text-xs text-muted-foreground">
              months of planning
            </p>
          </CardContent>
        </Card>
      </div>

      <Alert>
        <Info className="h-4 w-4" />
        <AlertDescription>
          <strong>Remember:</strong> Every baby is different. These are guidelines - always consult your pediatrician for personalized feeding advice and if you have concerns.
        </AlertDescription>
      </Alert>

      <Tabs defaultValue="plans" className="w-full">
        <TabsList>
          <TabsTrigger value="plans">Feeding Plans</TabsTrigger>
          <TabsTrigger value="goals">Goals & Milestones</TabsTrigger>
          <TabsTrigger value="timeline">Development Timeline</TabsTrigger>
          <TabsTrigger value="nutrition">Nutrition Guidelines</TabsTrigger>
        </TabsList>

        <TabsContent value="plans" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Choose Your Feeding Approach</CardTitle>
              <CardDescription>Select the feeding plans that work best for your family</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {feedingPlans.map(plan => (
                  <div key={plan.id} className="border rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <button 
                        onClick={() => togglePlanSelection(plan.id)}
                        className="mt-1"
                      >
                        <CheckCircle2 
                          className={`h-5 w-5 ${
                            plan.isSelected 
                              ? 'text-primary' 
                              : 'text-muted-foreground'
                          }`} 
                        />
                      </button>
                      
                      <div className="flex-1 space-y-3">
                        <div className="flex items-center space-x-2">
                          <h3 className={`font-semibold text-lg ${plan.isSelected ? '' : 'text-muted-foreground'}`}>
                            {plan.name}
                          </h3>
                          <Badge variant="outline" className="text-xs">
                            {plan.ageRange}
                          </Badge>
                          <span className="text-lg">
                            {feedingTypes.find(type => type.key === plan.type)?.icon}
                          </span>
                        </div>
                        
                        <p className="text-sm text-muted-foreground">
                          {plan.description}
                        </p>
                        
                        <div className="text-sm">
                          <span className="font-medium">Frequency: </span>
                          <span className="text-muted-foreground">{plan.frequency}</span>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-medium text-sm mb-2 text-primary">Benefits:</h4>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              {plan.benefits.map((benefit, index) => (
                                <li key={index} className="flex items-start space-x-2">
                                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                                  <span>{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-medium text-sm mb-2">Considerations:</h4>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              {plan.considerations.map((consideration, index) => (
                                <li key={index} className="flex items-start space-x-2">
                                  <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
                                  <span>{consideration}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="goals" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Feeding Goals & Milestones</CardTitle>
              <CardDescription>Track your progress toward feeding milestones</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {['establishment', 'routine', 'nutrition', 'weaning'].map(category => {
                  const categoryGoals = feedingGoals.filter(goal => goal.category === category)
                  const categoryCompleted = categoryGoals.filter(goal => goal.completed).length
                  
                  return (
                    <div key={category} className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <h3 className="text-lg font-semibold capitalize">{category} Goals</h3>
                        <Badge variant="outline">
                          {categoryCompleted}/{categoryGoals.length} completed
                        </Badge>
                      </div>
                      
                      <div className="space-y-3">
                        {categoryGoals.map(goal => (
                          <div key={goal.id} className="flex items-start space-x-3 p-3 border rounded-lg">
                            <button 
                              onClick={() => toggleGoalCompletion(goal.id)}
                              className="mt-0.5"
                            >
                              <CheckCircle2 
                                className={`h-5 w-5 ${
                                  goal.completed 
                                    ? 'text-primary' 
                                    : 'text-muted-foreground'
                                }`} 
                              />
                            </button>
                            
                            <div className="flex-1 space-y-1">
                              <h4 className={`font-medium ${goal.completed ? 'line-through text-muted-foreground' : ''}`}>
                                {goal.goal}
                              </h4>
                              <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                                <div className="flex items-center space-x-1">
                                  <Calendar className="h-3 w-3" />
                                  <span>Target: {goal.targetDate}</span>
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

        <TabsContent value="timeline" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Feeding Development Timeline
              </CardTitle>
              <CardDescription>Age-based feeding milestones and expectations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {feedingTimeline.map((phase, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-muted">
                    <div className="absolute w-4 h-4 bg-primary rounded-full -left-2.5 top-1" />
                    
                    <div className="space-y-3">
                      <div>
                        <h3 className="text-lg font-semibold">{phase.stage}</h3>
                        <h4 className="text-md font-medium text-primary">{phase.focus}</h4>
                      </div>
                      
                      <div>
                        <h5 className="font-medium mb-2">Key Goals:</h5>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {phase.goals.map((goal, goalIndex) => (
                            <li key={goalIndex} className="flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                              <span>{goal}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="font-medium mb-2">Helpful Tips:</h5>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {phase.tips.map((tip, tipIndex) => (
                            <li key={tipIndex} className="flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0" />
                              <span>{tip}</span>
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

        <TabsContent value="nutrition" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5" />
                Nutrition Guidelines
              </CardTitle>
              <CardDescription>Evidence-based feeding recommendations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {nutritionGuidelines.map((section, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-3">{section.category}</h4>
                    <ul className="space-y-2">
                      {section.guidelines.map((guideline, guidelineIndex) => (
                        <li key={guidelineIndex} className="flex items-start space-x-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>{guideline}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                <Alert>
                  <Baby className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Professional guidance:</strong> Always consult with your pediatrician before making major changes to your baby&apos;s feeding routine or if you have concerns about growth or nutrition.
                  </AlertDescription>
                </Alert>

                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold mb-3">Signs of Adequate Nutrition</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium mb-2">Physical Signs:</h5>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Steady weight gain</li>
                        <li>• Regular wet and dirty diapers</li>
                        <li>• Alert and active periods</li>
                        <li>• Good muscle tone</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium mb-2">Feeding Behaviors:</h5>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Satisfied after feeds</li>
                        <li>• Shows hunger cues</li>
                        <li>• Sleeps well between feeds</li>
                        <li>• Interest in food (older babies)</li>
                      </ul>
                    </div>
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