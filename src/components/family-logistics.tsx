"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle2, Users, Calendar, Clock, Baby, Info, DollarSign, Phone } from "lucide-react"
import { useBabyPlanning } from "@/contexts/baby-planning-context"

interface LogisticsItem {
  id: string
  name: string
  category: 'childcare' | 'work' | 'household' | 'transportation' | 'finances' | 'legal'
  priority: 'urgent' | 'important' | 'nice-to-have'
  timing: string
  estimatedTime: string
  description: string
  completed: boolean
}

export function FamilyLogistics() {
  const { babyPlanningData } = useBabyPlanning()
  
  const [logisticsItems, setLogisticsItems] = useState<LogisticsItem[]>([
    // Childcare Planning
    { id: '1', name: 'Research Daycare Options', category: 'childcare', priority: 'urgent', timing: '2nd trimester', estimatedTime: '2-3 weeks', description: 'Visit centers, check waitlists, compare costs', completed: false },
    { id: '2', name: 'Apply to Daycare Centers', category: 'childcare', priority: 'urgent', timing: '2nd trimester', estimatedTime: '1 week', description: 'Submit applications and deposits', completed: false },
    { id: '3', name: 'Interview Nanny/Babysitter', category: 'childcare', priority: 'important', timing: '3rd trimester', estimatedTime: '2-3 weeks', description: 'Screen, interview, and check references', completed: false },
    { id: '4', name: 'Backup Childcare Plan', category: 'childcare', priority: 'important', timing: '3rd trimester', estimatedTime: '1 week', description: 'Arrange emergency care options', completed: false },

    // Work Arrangements
    { id: '5', name: 'Plan Maternity/Paternity Leave', category: 'work', priority: 'urgent', timing: '2nd trimester', estimatedTime: '1 week', description: 'Review policies, submit paperwork', completed: false },
    { id: '6', name: 'Discuss Return-to-Work Plans', category: 'work', priority: 'important', timing: '3rd trimester', estimatedTime: '1 week', description: 'Flexible schedules, pumping arrangements', completed: false },
    { id: '7', name: 'Train Replacement/Handover', category: 'work', priority: 'urgent', timing: '3rd trimester', estimatedTime: '2-3 weeks', description: 'Document processes, train coverage', completed: false },
    { id: '8', name: 'Set Up Home Office', category: 'work', priority: 'nice-to-have', timing: '3rd trimester', estimatedTime: '1 week', description: 'If planning to work from home', completed: false },

    // Household Management
    { id: '9', name: 'Meal Planning System', category: 'household', priority: 'important', timing: '3rd trimester', estimatedTime: '1 week', description: 'Prep freezer meals, grocery delivery', completed: false },
    { id: '10', name: 'Cleaning Service/Help', category: 'household', priority: 'nice-to-have', timing: '3rd trimester', estimatedTime: '1 week', description: 'Hire help or arrange family support', completed: false },
    { id: '11', name: 'Household Task Division', category: 'household', priority: 'important', timing: '3rd trimester', estimatedTime: '1 week', description: 'Redistribute chores with partner', completed: false },
    { id: '12', name: 'Emergency Meal Plan', category: 'household', priority: 'important', timing: 'Before birth', estimatedTime: '1 day', description: 'Easy meals for postpartum period', completed: false },

    // Transportation
    { id: '13', name: 'Car Seat Installation', category: 'transportation', priority: 'urgent', timing: '3rd trimester', estimatedTime: '1 day', description: 'Professional installation and inspection', completed: false },
    { id: '14', name: 'Hospital Transportation Plan', category: 'transportation', priority: 'urgent', timing: 'Before birth', estimatedTime: '1 day', description: 'Multiple routes, backup drivers', completed: false },
    { id: '15', name: 'Pediatrician Transportation', category: 'transportation', priority: 'important', timing: 'Before birth', estimatedTime: '1 day', description: 'Plan routes to doctor appointments', completed: false },

    // Finances
    { id: '16', name: 'Update Health Insurance', category: 'finances', priority: 'urgent', timing: '2nd trimester', estimatedTime: '1 week', description: 'Add baby, review coverage', completed: false },
    { id: '17', name: 'Life Insurance Review', category: 'finances', priority: 'urgent', timing: '2nd trimester', estimatedTime: '1 week', description: 'Increase coverage, add beneficiaries', completed: false },
    { id: '18', name: 'Baby Budget Planning', category: 'finances', priority: 'important', timing: '2nd trimester', estimatedTime: '1 week', description: 'Calculate ongoing costs, adjust budget', completed: false },
    { id: '19', name: 'FSA/HSA Planning', category: 'finances', priority: 'important', timing: '2nd trimester', estimatedTime: '1 day', description: 'Plan healthcare spending accounts', completed: false },
    { id: '20', name: '529 Education Plan', category: 'finances', priority: 'nice-to-have', timing: 'After birth', estimatedTime: '1 week', description: 'Set up college savings account', completed: false },

    // Legal/Administrative
    { id: '21', name: 'Update Will/Estate Planning', category: 'legal', priority: 'urgent', timing: '2nd-3rd trimester', estimatedTime: '2 weeks', description: 'Guardian designation, asset distribution', completed: false },
    { id: '22', name: 'FMLA Paperwork', category: 'legal', priority: 'urgent', timing: '3rd trimester', estimatedTime: '1 week', description: 'Submit leave documentation', completed: false },
    { id: '23', name: 'Birth Certificate Process', category: 'legal', priority: 'important', timing: 'After birth', estimatedTime: '1 week', description: 'Understand hospital procedures', completed: false },
    { id: '24', name: 'Social Security Number', category: 'legal', priority: 'important', timing: 'After birth', estimatedTime: '1 week', description: 'Apply for baby&apos;s SSN', completed: false }
  ])

  const toggleCompleted = (id: string) => {
    setLogisticsItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    )
  }

  const completedItems = logisticsItems.filter(i => i.completed).length
  const totalItems = logisticsItems.length
  const progressPercentage = (completedItems / totalItems) * 100

  const urgentItems = logisticsItems.filter(i => i.priority === 'urgent')
  const completedUrgent = urgentItems.filter(i => i.completed).length

  const categories = [
    { key: 'childcare', label: 'Childcare', icon: '👶', description: 'Daycare, nannies, backup care' },
    { key: 'work', label: 'Work Plans', icon: '💼', description: 'Leave policies, return arrangements' },
    { key: 'household', label: 'Household', icon: '🏠', description: 'Meals, cleaning, organization' },
    { key: 'transportation', label: 'Transportation', icon: '🚗', description: 'Car seats, hospital routes' },
    { key: 'finances', label: 'Finances', icon: '💰', description: 'Insurance, budgets, savings' },
    { key: 'legal', label: 'Legal/Admin', icon: '📋', description: 'Documents, wills, benefits' }
  ]

  const timelinePhases = [
    {
      phase: '1st Trimester',
      focus: 'Initial Planning',
      items: ['Research childcare options', 'Review work policies', 'Initial budget planning'],
      description: 'Start thinking about major logistical needs'
    },
    {
      phase: '2nd Trimester', 
      focus: 'Active Planning',
      items: ['Apply to daycares', 'Update insurance', 'Estate planning', 'Detailed budgeting'],
      description: 'Take action on time-sensitive items'
    },
    {
      phase: '3rd Trimester',
      focus: 'Final Preparations', 
      items: ['Submit leave paperwork', 'Finalize childcare', 'Prepare household systems'],
      description: 'Complete preparations before baby arrives'
    },
    {
      phase: 'After Birth',
      focus: 'Implementation',
      items: ['Legal documents for baby', 'Start using new systems', 'Adjust as needed'],
      description: 'Put plans into action and refine'
    }
  ]

  const priorityColors = {
    urgent: 'bg-red-500',
    important: 'bg-orange-500',
    'nice-to-have': 'bg-blue-500'
  }

  const logisticsChecklist = [
    'Create master calendar for important deadlines',
    'Set up shared family calendar system',
    'Organize important documents in one place',
    'Create emergency contact list',
    'Establish communication plan for labor',
    'Prepare postpartum support rotation',
    'Set up meal delivery or prep system',
    'Arrange pet care during hospital stay'
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Family Logistics</h2>
          <p className="text-muted-foreground">Organize the practical aspects of welcoming your baby</p>
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
              logistics items completed
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Urgent Items</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{completedUrgent}/{urgentItems.length}</div>
            <Progress 
              value={(completedUrgent / urgentItems.length) * 100} 
              className="mt-2" 
            />
            <p className="text-xs text-muted-foreground mt-2">
              urgent items completed
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Categories</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{categories.length}</div>
            <p className="text-xs text-muted-foreground">
              logistics areas
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Timeline</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">9</div>
            <p className="text-xs text-muted-foreground">
              months to plan
            </p>
          </CardContent>
        </Card>
      </div>

      <Alert>
        <Info className="h-4 w-4" />
        <AlertDescription>
          <strong>Start early:</strong> Many logistics items have long lead times (daycare waitlists, insurance changes, legal documents). Begin planning in your second trimester.
        </AlertDescription>
      </Alert>

      <Tabs defaultValue="checklist" className="w-full">
        <TabsList>
          <TabsTrigger value="checklist">Master Checklist</TabsTrigger>
          <TabsTrigger value="categories">By Category</TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
          <TabsTrigger value="tips">Organization Tips</TabsTrigger>
        </TabsList>

        <TabsContent value="checklist" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Family Logistics Master Checklist</CardTitle>
              <CardDescription>All logistical preparations organized by priority</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {['urgent', 'important', 'nice-to-have'].map(priority => {
                  const priorityItems = logisticsItems.filter(item => item.priority === priority)
                  const priorityCompleted = priorityItems.filter(item => item.completed).length
                  
                  return (
                    <div key={priority} className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <div className={`w-3 h-3 rounded-full ${priorityColors[priority as keyof typeof priorityColors]}`} />
                        <h3 className="text-lg font-semibold capitalize">{priority.replace('-', ' ')} Items</h3>
                        <Badge variant="outline">
                          {priorityCompleted}/{priorityItems.length}
                        </Badge>
                      </div>
                      
                      <div className="space-y-3">
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
                                  {categories.find(cat => cat.key === item.category)?.label}
                                </Badge>
                              </div>
                              
                              <p className="text-sm text-muted-foreground">
                                {item.description}
                              </p>
                              
                              <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                                <div className="flex items-center space-x-1">
                                  <Calendar className="h-3 w-3" />
                                  <span>{item.timing}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <Clock className="h-3 w-3" />
                                  <span>{item.estimatedTime}</span>
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
              const categoryItems = logisticsItems.filter(item => item.category === category.key)
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
                              <div className={`w-2 h-2 rounded-full ${priorityColors[item.priority as keyof typeof priorityColors]}`} />
                            </div>
                            <p className="text-xs text-muted-foreground">
                              {item.description}
                            </p>
                            <div className="text-xs text-muted-foreground">
                              {item.timing} • {item.estimatedTime}
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
                <Calendar className="h-5 w-5" />
                Logistics Planning Timeline
              </CardTitle>
              <CardDescription>When to tackle different logistical preparations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {timelinePhases.map((phase, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-muted">
                    <div className="absolute w-4 h-4 bg-primary rounded-full -left-2.5 top-1" />
                    
                    <div className="space-y-3">
                      <div>
                        <h3 className="text-lg font-semibold">{phase.phase}</h3>
                        <h4 className="text-md font-medium text-primary">{phase.focus}</h4>
                        <p className="text-sm text-muted-foreground">{phase.description}</p>
                      </div>
                      
                      <div>
                        <h5 className="font-medium mb-2">Key Actions:</h5>
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
                <Users className="h-5 w-5" />
                Organization & Planning Tips
              </CardTitle>
              <CardDescription>Expert strategies for managing family logistics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-3">Planning Strategies</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Start with a master timeline working backwards</li>
                      <li>• Set up shared digital calendars with reminders</li>
                      <li>• Break large tasks into smaller actionable steps</li>
                      <li>• Schedule regular planning check-ins with partner</li>
                      <li>• Keep important documents in one place</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-3">Communication Tips</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Discuss expectations and concerns openly</li>
                      <li>• Create a shared vision for post-baby life</li>
                      <li>• Plan who handles which responsibilities</li>
                      <li>• Set up emergency communication protocols</li>
                      <li>• Keep family informed of key plans</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-3">Money-Saving Tips</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Research employer benefits thoroughly</li>
                      <li>• Compare multiple childcare options</li>
                      <li>• Look into tax advantages (FSA, dependent care)</li>
                      <li>• Consider family help before paid services</li>
                      <li>• Buy frozen meals in bulk vs. meal delivery</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-3">Flexibility Planning</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Have backup plans for critical items</li>
                      <li>• Build in buffer time for delays</li>
                      <li>• Stay flexible on non-essential preferences</li>
                      <li>• Plan for the unexpected (early/late baby)</li>
                      <li>• Regular plan reviews and adjustments</li>
                    </ul>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-3">Essential Organization Checklist</h4>
                  <div className="space-y-2">
                    {logisticsChecklist.map((item, index) => (
                      <div key={index} className="flex items-start space-x-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Alert>
                  <Phone className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Emergency planning:</strong> Create a labor communication tree with who to call in what order, backup transportation plans, and pet/child care arrangements for when you go to the hospital.
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