"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle2, Users, Heart, Phone, Baby, Info, Clock, MapPin } from "lucide-react"
import { useBabyPlanning } from "@/contexts/baby-planning-context"

interface SupportContact {
  id: string
  name: string
  relationship: string
  role: 'emergency' | 'practical' | 'emotional' | 'professional' | 'backup'
  phone: string
  email: string
  availability: string
  description: string
  isActive: boolean
}

interface SupportTask {
  id: string
  task: string
  category: 'preparation' | 'postpartum' | 'ongoing'
  timing: string
  priority: 'high' | 'medium' | 'low'
  description: string
  completed: boolean
}

export function SupportSystem() {
  const { babyPlanningData } = useBabyPlanning()
  
  const [supportContacts, setSupportContacts] = useState<SupportContact[]>([
    { id: '1', name: 'Mom', relationship: 'Mother', role: 'emotional', phone: '', email: '', availability: 'Anytime', description: 'Primary emotional support and baby care advice', isActive: true },
    { id: '2', name: 'Dad', relationship: 'Father', role: 'practical', phone: '', email: '', availability: 'Weekends', description: 'Help with household tasks and errands', isActive: true },
    { id: '3', name: 'Sister', relationship: 'Sister', role: 'backup', phone: '', email: '', availability: 'Evenings', description: 'Backup childcare and meal preparation', isActive: false },
    { id: '4', name: 'Best Friend', relationship: 'Friend', role: 'emotional', phone: '', email: '', availability: 'Most evenings', description: 'Someone to talk to and process feelings', isActive: true },
    { id: '5', name: 'Neighbor', relationship: 'Neighbor', role: 'emergency', phone: '', email: '', availability: 'Varies', description: 'Emergency contact nearby', isActive: false }
  ])

  const [supportTasks, setSupportTasks] = useState<SupportTask[]>([
    // Preparation Phase
    { id: '1', task: 'Identify Support Network', category: 'preparation', timing: '2nd trimester', priority: 'high', description: 'List family, friends, neighbors who can help', completed: false },
    { id: '2', task: 'Have Support Conversations', category: 'preparation', timing: '2nd-3rd trimester', priority: 'high', description: 'Discuss availability and preferences with potential supporters', completed: false },
    { id: '3', task: 'Create Emergency Contact List', category: 'preparation', timing: '3rd trimester', priority: 'high', description: 'Compile and share important phone numbers', completed: false },
    { id: '4', task: 'Plan Meal Train', category: 'preparation', timing: '3rd trimester', priority: 'medium', description: 'Organize friends/family to provide meals postpartum', completed: false },
    { id: '5', task: 'Research Professional Support', category: 'preparation', timing: '2nd-3rd trimester', priority: 'medium', description: 'Lactation consultant, postpartum doula, cleaning service', completed: false },
    { id: '6', task: 'Join Parent Groups', category: 'preparation', timing: '2nd-3rd trimester', priority: 'low', description: 'Find local new parent groups or online communities', completed: false },

    // Postpartum Support
    { id: '7', task: 'Arrange First Week Help', category: 'postpartum', timing: 'Before birth', priority: 'high', description: 'Schedule daily visitors for first 1-2 weeks', completed: false },
    { id: '8', task: 'Set Up Communication Plan', category: 'postpartum', timing: 'Before birth', priority: 'high', description: 'How to update family and ask for help', completed: false },
    { id: '9', task: 'Plan Visitor Guidelines', category: 'postpartum', timing: 'Before birth', priority: 'medium', description: 'Set expectations for visits and help', completed: false },
    { id: '10', task: 'Organize Household Help Schedule', category: 'postpartum', timing: 'Before birth', priority: 'medium', description: 'Cleaning, laundry, shopping rotation', completed: false },

    // Ongoing Support
    { id: '11', task: 'Establish Regular Check-ins', category: 'ongoing', timing: 'After birth', priority: 'medium', description: 'Weekly calls or visits with key supporters', completed: false },
    { id: '12', task: 'Create Babysitting Network', category: 'ongoing', timing: '2-3 months postpartum', priority: 'low', description: 'Trusted people for occasional babysitting', completed: false },
    { id: '13', task: 'Join Ongoing Mom Groups', category: 'ongoing', timing: '1-3 months postpartum', priority: 'low', description: 'Regular meetups with other new parents', completed: false }
  ])

  const toggleContactActive = (id: string) => {
    setSupportContacts(prev => 
      prev.map(contact => 
        contact.id === id ? { ...contact, isActive: !contact.isActive } : contact
      )
    )
  }

  const toggleTaskCompleted = (id: string) => {
    setSupportTasks(prev => 
      prev.map(task => 
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  const activeContacts = supportContacts.filter(c => c.isActive).length
  const completedTasks = supportTasks.filter(t => t.completed).length
  const totalTasks = supportTasks.length
  const progressPercentage = (completedTasks / totalTasks) * 100

  const roleCategories = [
    { key: 'emergency', label: 'Emergency Support', icon: '🚨', description: 'Immediate help when needed' },
    { key: 'practical', label: 'Practical Help', icon: '🛠️', description: 'Household tasks and errands' },
    { key: 'emotional', label: 'Emotional Support', icon: '❤️', description: 'Someone to talk to and process feelings' },
    { key: 'professional', label: 'Professional Help', icon: '👩‍⚕️', description: 'Paid services and healthcare providers' },
    { key: 'backup', label: 'Backup Support', icon: '🔄', description: 'Secondary options when primary help unavailable' }
  ]

  const supportPhases = [
    {
      phase: 'Pregnancy',
      timeframe: '2nd-3rd Trimester',
      focus: 'Building Your Network',
      needs: ['Emotional processing', 'Preparation help', 'Information sharing', 'Planning assistance'],
      description: 'Identify and engage your support system before baby arrives'
    },
    {
      phase: 'First 2 Weeks',
      timeframe: 'Immediate Postpartum',
      focus: 'Intensive Support',
      needs: ['Daily practical help', 'Meal provision', 'Household tasks', 'Emotional support'],
      description: 'Maximum support during initial recovery and adjustment'
    },
    {
      phase: '2 Weeks - 3 Months',
      timeframe: 'Early Postpartum',
      focus: 'Ongoing Assistance',
      needs: ['Weekly check-ins', 'Specific task help', 'Social connection', 'Professional support'],
      description: 'Continued but less intensive support as you adjust'
    },
    {
      phase: '3+ Months',
      timeframe: 'Long-term',
      focus: 'Sustainable Support',
      needs: ['Regular social contact', 'Occasional babysitting', 'Emergency backup', 'Parent community'],
      description: 'Long-term sustainable support system'
    }
  ]

  const supportTypes = [
    { type: 'Family Support', examples: ['Parents helping with meals', 'Siblings providing childcare', 'Extended family visits'] },
    { type: 'Friend Network', examples: ['Meal trains organized by friends', 'Emotional support calls', 'Help with errands'] },
    { type: 'Professional Services', examples: ['Postpartum doula', 'Lactation consultant', 'Housekeeping service'] },
    { type: 'Community Resources', examples: ['New parent groups', 'Breastfeeding support groups', 'Parent education classes'] },
    { type: 'Online Support', examples: ['Parenting forums', 'Social media groups', 'Virtual support groups'] }
  ]

  const visitorGuidelines = [
    'Call before coming over',
    'Bring food or offer to help with tasks',
    'Keep visits short (1-2 hours max initially)',
    'Help with household tasks while visiting',
    'Wash hands before holding baby',
    'Don&apos;t visit if feeling sick',
    'Respect the new family&apos;s schedule and needs',
    'Ask how you can help rather than just holding baby'
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Support System</h2>
          <p className="text-muted-foreground">Build your network of help for pregnancy and beyond</p>
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
            <CardTitle className="text-sm font-medium">Task Progress</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{completedTasks}/{totalTasks}</div>
            <Progress value={progressPercentage} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">
              support tasks completed
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Contacts</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeContacts}</div>
            <p className="text-xs text-muted-foreground">
              people in support network
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Support Roles</CardTitle>
            <Heart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{roleCategories.length}</div>
            <p className="text-xs text-muted-foreground">
              types of support
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Timeline</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">9+</div>
            <p className="text-xs text-muted-foreground">
              months of support needed
            </p>
          </CardContent>
        </Card>
      </div>

      <Alert>
        <Info className="h-4 w-4" />
        <AlertDescription>
          <strong>Start early:</strong> Building a support system takes time. Begin identifying and engaging your support network during your second trimester.
        </AlertDescription>
      </Alert>

      <Tabs defaultValue="tasks" className="w-full">
        <TabsList>
          <TabsTrigger value="tasks">Support Tasks</TabsTrigger>
          <TabsTrigger value="contacts">Contact List</TabsTrigger>
          <TabsTrigger value="timeline">Support Timeline</TabsTrigger>
          <TabsTrigger value="types">Types of Support</TabsTrigger>
          <TabsTrigger value="guidelines">Visitor Guidelines</TabsTrigger>
        </TabsList>

        <TabsContent value="tasks" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Support System Building Tasks</CardTitle>
              <CardDescription>Steps to create your support network</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {['preparation', 'postpartum', 'ongoing'].map(category => {
                  const categoryTasks = supportTasks.filter(task => task.category === category)
                  const categoryCompleted = categoryTasks.filter(task => task.completed).length
                  
                  return (
                    <div key={category} className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <h3 className="text-lg font-semibold capitalize">{category} Phase</h3>
                        <Badge variant="outline">
                          {categoryCompleted}/{categoryTasks.length} completed
                        </Badge>
                      </div>
                      
                      <div className="space-y-3">
                        {categoryTasks.map(task => (
                          <div key={task.id} className="flex items-start space-x-3 p-4 border rounded-lg">
                            <button 
                              onClick={() => toggleTaskCompleted(task.id)}
                              className="mt-1"
                            >
                              <CheckCircle2 
                                className={`h-5 w-5 ${
                                  task.completed 
                                    ? 'text-primary' 
                                    : 'text-muted-foreground'
                                }`} 
                              />
                            </button>
                            
                            <div className="flex-1 space-y-2">
                              <div className="flex items-center space-x-2 flex-wrap">
                                <h4 className={`font-medium ${task.completed ? 'line-through text-muted-foreground' : ''}`}>
                                  {task.task}
                                </h4>
                                <Badge 
                                  variant={task.priority === 'high' ? 'default' : 'secondary'}
                                  className="text-xs"
                                >
                                  {task.priority}
                                </Badge>
                              </div>
                              
                              <p className="text-sm text-muted-foreground">
                                {task.description}
                              </p>
                              
                              <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                                <div className="flex items-center space-x-1">
                                  <Clock className="h-3 w-3" />
                                  <span>{task.timing}</span>
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

        <TabsContent value="contacts" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Support Contact List</CardTitle>
              <CardDescription>Your personal support network directory</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {supportContacts.map(contact => (
                  <div key={contact.id} className="flex items-start space-x-3 p-4 border rounded-lg">
                    <button 
                      onClick={() => toggleContactActive(contact.id)}
                      className="mt-1"
                    >
                      <CheckCircle2 
                        className={`h-5 w-5 ${
                          contact.isActive 
                            ? 'text-primary' 
                            : 'text-muted-foreground'
                        }`} 
                      />
                    </button>
                    
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center space-x-2 flex-wrap">
                        <h4 className={`font-medium ${contact.isActive ? '' : 'text-muted-foreground'}`}>
                          {contact.name}
                        </h4>
                        <Badge variant="outline" className="text-xs">
                          {contact.relationship}
                        </Badge>
                        <Badge 
                          variant="secondary"
                          className="text-xs"
                        >
                          {roleCategories.find(role => role.key === contact.role)?.label}
                        </Badge>
                      </div>
                      
                      <p className="text-sm text-muted-foreground">
                        {contact.description}
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Phone className="h-3 w-3" />
                          <span>{contact.phone || 'Phone not added'}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <span>📧 {contact.email || 'Email not added'}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{contact.availability}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                <Alert className="mt-4">
                  <Users className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Tip:</strong> Click the checkboxes to activate contacts you&apos;ve confirmed will be part of your support system. Add real contact information as you build your network.
                  </AlertDescription>
                </Alert>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="timeline" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Support Timeline
              </CardTitle>
              <CardDescription>How your support needs change over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {supportPhases.map((phase, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-muted">
                    <div className="absolute w-4 h-4 bg-primary rounded-full -left-2.5 top-1" />
                    
                    <div className="space-y-3">
                      <div>
                        <h3 className="text-lg font-semibold">{phase.phase}</h3>
                        <div className="text-sm text-primary font-medium">{phase.timeframe}</div>
                        <h4 className="text-md font-medium">{phase.focus}</h4>
                        <p className="text-sm text-muted-foreground">{phase.description}</p>
                      </div>
                      
                      <div>
                        <h5 className="font-medium mb-2">Key Support Needs:</h5>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {phase.needs.map((need, needIndex) => (
                            <li key={needIndex} className="flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                              <span>{need}</span>
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

        <TabsContent value="types" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5" />
                Types of Support
              </CardTitle>
              <CardDescription>Different ways people can help during pregnancy and postpartum</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {supportTypes.map((supportType, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-3">{supportType.type}</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      {supportType.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {roleCategories.map(role => (
                    <div key={role.key} className="p-4 bg-muted rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-lg">{role.icon}</span>
                        <h4 className="font-semibold">{role.label}</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">{role.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="guidelines" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Visitor & Support Guidelines
              </CardTitle>
              <CardDescription>Setting expectations for helpful visits and support</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-3">Helpful Visitor Guidelines</h4>
                  <div className="space-y-2">
                    {visitorGuidelines.map((guideline, index) => (
                      <div key={index} className="flex items-start space-x-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{guideline}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-3">Communication Tips</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Be specific about what help you need</li>
                      <li>• It&apos;s okay to say no to unhelpful offers</li>
                      <li>• Create a group text for updates</li>
                      <li>• Use a meal train app to coordinate food</li>
                      <li>• Let people know your preferred visiting hours</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-3">Boundary Setting</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• It&apos;s okay to limit visitors initially</li>
                      <li>• Ask for help with tasks, not just baby holding</li>
                      <li>• Set quiet hours for rest</li>
                      <li>• Communicate your parenting preferences</li>
                      <li>• Don&apos;t feel guilty about your needs</li>
                    </ul>
                  </div>
                </div>

                <Alert>
                  <Heart className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Remember:</strong> Good support feels helpful, not stressful. Don&apos;t hesitate to guide your support network on how to best help you during this important time.
                  </AlertDescription>
                </Alert>

                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-3">Sample Support Requests</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p><strong>For meals:</strong> &quot;We&apos;d love a freezer meal that can feed our family of 3. Casseroles, soups, or anything easy to reheat work great!&quot;</p>
                    <p><strong>For visits:</strong> &quot;We&apos;re accepting visitors from 2-5 PM on weekends. Please text before coming and consider bringing a snack for us!&quot;</p>
                    <p><strong>For practical help:</strong> &quot;If you&apos;re coming to visit, we&apos;d love help with dishes, laundry, or a grocery run instead of just holding the baby.&quot;</p>
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