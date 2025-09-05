"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Checkbox } from "@/components/ui/checkbox"
import { Truck, Calendar as CalendarIcon, CheckCircle2, Clock, Phone, Zap, Droplets, Wifi, MapPin, Package, Plus, Edit, Trash2, FileText } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

interface MovingCompany {
  id: number
  name: string
  contactInfo: string
  quote: number
  services: string[]
  rating: number
  estimatedDate: Date
  status: 'quoted' | 'booked' | 'confirmed' | 'completed'
  notes: string
  insurance: boolean
}

interface Utility {
  id: number
  service: 'electricity' | 'gas' | 'water' | 'internet' | 'cable' | 'trash' | 'security' | 'phone'
  provider: string
  accountNumber?: string
  contactInfo: string
  transferDate?: Date
  status: 'research' | 'contacted' | 'scheduled' | 'transferred' | 'active'
  setupFee?: number
  monthlyRate?: number
  notes: string
}

interface MovingTask {
  id: number
  task: string
  category: 'packing' | 'utilities' | 'address-change' | 'documents' | 'cleaning' | 'planning'
  dueDate: Date
  completed: boolean
  priority: 'low' | 'medium' | 'high'
  notes: string
}

export function Moving() {
  const [movingCompanies, setMovingCompanies] = useState<MovingCompany[]>([
    {
      id: 1,
      name: "Premier Moving Services",
      contactInfo: "contact@premiermove.com - (555) 123-4567",
      quote: 2400,
      services: ["Packing", "Loading", "Transportation", "Insurance"],
      rating: 4.8,
      estimatedDate: new Date('2024-06-15'),
      status: 'booked',
      notes: "Full service including packing materials",
      insurance: true
    },
    {
      id: 2,
      name: "Budget Movers Inc",
      contactInfo: "info@budgetmovers.com - (555) 987-6543",
      quote: 1800,
      services: ["Loading", "Transportation"],
      rating: 4.2,
      estimatedDate: new Date('2024-06-15'),
      status: 'quoted',
      notes: "Basic moving service, no packing",
      insurance: false
    }
  ])

  const [utilities, setUtilities] = useState<Utility[]>([
    {
      id: 1,
      service: 'electricity',
      provider: "City Power & Light",
      contactInfo: "(555) 111-2222",
      transferDate: new Date('2024-06-10'),
      status: 'scheduled',
      setupFee: 25,
      monthlyRate: 120,
      notes: "Transfer scheduled 5 days before move"
    },
    {
      id: 2,
      service: 'internet',
      provider: "FastNet Broadband",
      contactInfo: "(555) 333-4444",
      status: 'contacted',
      setupFee: 99,
      monthlyRate: 79,
      notes: "Installation available same week"
    },
    {
      id: 3,
      service: 'gas',
      provider: "Metro Gas Company",
      contactInfo: "(555) 555-6666",
      status: 'research',
      monthlyRate: 45,
      notes: "Need to call for transfer"
    }
  ])

  const [movingTasks, setMovingTasks] = useState<MovingTask[]>([
    {
      id: 1,
      task: "Change address with bank and credit cards",
      category: 'address-change',
      dueDate: new Date('2024-05-20'),
      completed: true,
      priority: 'high',
      notes: "Completed for all major accounts"
    },
    {
      id: 2,
      task: "Update voter registration",
      category: 'address-change',
      dueDate: new Date('2024-06-01'),
      completed: false,
      priority: 'medium',
      notes: "Can be done online"
    },
    {
      id: 3,
      task: "Schedule utility disconnection at old address",
      category: 'utilities',
      dueDate: new Date('2024-06-16'),
      completed: false,
      priority: 'high',
      notes: "Day after move to ensure overlap"
    },
    {
      id: 4,
      task: "Pack non-essential items",
      category: 'packing',
      dueDate: new Date('2024-06-01'),
      completed: false,
      priority: 'medium',
      notes: "Start with books, decorations, seasonal items"
    },
    {
      id: 5,
      task: "Confirm moving truck and crew",
      category: 'planning',
      dueDate: new Date('2024-06-10'),
      completed: false,
      priority: 'high',
      notes: "Call 5 days before move date"
    }
  ])

  const [isAddCompanyOpen, setIsAddCompanyOpen] = useState(false)
  const [isAddUtilityOpen, setIsAddUtilityOpen] = useState(false)
  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false)
  const [newCompany, setNewCompany] = useState<Partial<MovingCompany>>({})
  const [newUtility, setNewUtility] = useState<Partial<Utility>>({})
  const [newTask, setNewTask] = useState<Partial<MovingTask>>({})

  const handleToggleTask = (taskId: number) => {
    setMovingTasks(tasks => tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ))
  }

  const handleUpdateUtilityStatus = (utilityId: number, status: Utility['status']) => {
    setUtilities(utilities.map(u => 
      u.id === utilityId ? { ...u, status } : u
    ))
  }

  const handleAddMovingCompany = () => {
    if (!newCompany.name || !newCompany.quote) return

    const company: MovingCompany = {
      id: Math.max(...movingCompanies.map(c => c.id), 0) + 1,
      name: newCompany.name,
      contactInfo: newCompany.contactInfo || "",
      quote: newCompany.quote,
      services: [],
      rating: 0,
      estimatedDate: newCompany.estimatedDate || new Date(),
      status: 'quoted',
      notes: newCompany.notes || "",
      insurance: newCompany.insurance || false
    }

    setMovingCompanies([...movingCompanies, company])
    setNewCompany({})
    setIsAddCompanyOpen(false)
  }

  const completedTasks = movingTasks.filter(t => t.completed)
  const totalTasks = movingTasks.length
  const progressPercentage = (completedTasks.length / totalTasks) * 100

  const utilitiesSetup = utilities.filter(u => u.status === 'transferred' || u.status === 'active').length
  const totalUtilities = utilities.length

  const bookedCompany = movingCompanies.find(c => c.status === 'booked')
  const urgentTasks = movingTasks.filter(t => !t.completed && t.priority === 'high')

  const utilityIcons = {
    electricity: Zap,
    gas: Zap,
    water: Droplets,
    internet: Wifi,
    cable: Wifi,
    trash: Package,
    security: CheckCircle2,
    phone: Phone
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Moving</h1>
          <p className="text-muted-foreground">Plan and organize your move</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" onClick={() => setIsAddTaskOpen(true)} className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Add Task
          </Button>
          <Button onClick={() => setIsAddCompanyOpen(true)} className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Add Moving Company
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Moving Progress</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{Math.round(progressPercentage)}%</div>
            <p className="text-xs text-muted-foreground">
              {completedTasks.length} of {totalTasks} tasks complete
            </p>
            <Progress value={progressPercentage} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Moving Cost</CardTitle>
            <Truck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${bookedCompany ? bookedCompany.quote.toLocaleString() : 'TBD'}
            </div>
            <p className="text-xs text-muted-foreground">
              {bookedCompany ? bookedCompany.name : 'No company selected'}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Utilities</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{utilitiesSetup}/{totalUtilities}</div>
            <p className="text-xs text-muted-foreground">
              Services transferred
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Urgent Tasks</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{urgentTasks.length}</div>
            <p className="text-xs text-muted-foreground">
              High priority items
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Moving Companies */}
      <Card>
        <CardHeader>
          <CardTitle>Moving Companies</CardTitle>
          <CardDescription>Compare quotes and book your moving service</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {movingCompanies.map((company) => (
              <div key={company.id} className="p-4 border rounded-lg">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold text-lg">{company.name}</h3>
                    <p className="text-sm text-muted-foreground">{company.contactInfo}</p>
                    {company.rating > 0 && (
                      <div className="flex items-center mt-1">
                        <span className="text-orange-500">★</span>
                        <span className="text-sm ml-1">{company.rating}/5.0</span>
                      </div>
                    )}
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">${company.quote.toLocaleString()}</div>
                    <Badge variant={
                      company.status === 'booked' ? 'secondary' :
                      company.status === 'confirmed' ? 'default' :
                      'outline'
                    }>
                      {company.status}
                    </Badge>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
                  <div>
                    <div className="text-sm font-medium">Move Date</div>
                    <div className="text-sm text-muted-foreground">
                      {format(company.estimatedDate, 'MMM dd, yyyy')}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-medium">Insurance</div>
                    <div className="text-sm text-muted-foreground">
                      {company.insurance ? 'Included' : 'Not included'}
                    </div>
                  </div>
                  <div className="col-span-2">
                    <div className="text-sm font-medium">Services</div>
                    <div className="text-sm text-muted-foreground">
                      {company.services.length > 0 ? company.services.join(', ') : 'Basic moving'}
                    </div>
                  </div>
                </div>

                {company.notes && (
                  <p className="text-sm text-muted-foreground mb-3">{company.notes}</p>
                )}

                <div className="flex space-x-2">
                  {company.status === 'quoted' && (
                    <Button 
                      size="sm"
                      onClick={() => setMovingCompanies(companies => 
                        companies.map(c => 
                          c.id === company.id ? { ...c, status: 'booked' } : 
                          { ...c, status: c.status === 'booked' ? 'quoted' : c.status }
                        )
                      )}
                    >
                      Book This Company
                    </Button>
                  )}
                  {company.status === 'booked' && (
                    <Button size="sm" variant="outline">
                      Confirm Details
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Utilities Setup */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Utilities Setup</CardTitle>
              <CardDescription>Manage utility transfers and new connections</CardDescription>
            </div>
            <Button variant="outline" onClick={() => setIsAddUtilityOpen(true)} size="sm">
              <Plus className="h-4 w-4 mr-1" />
              Add Utility
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {utilities.map((utility) => {
              const Icon = utilityIcons[utility.service] || Zap
              return (
                <div key={utility.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-3 flex-1">
                    <Icon className="h-5 w-5 text-muted-foreground" />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <span className="font-medium capitalize">{utility.service}</span>
                        <span className="text-sm text-muted-foreground">• {utility.provider}</span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {utility.contactInfo}
                        {utility.monthlyRate && ` • $${utility.monthlyRate}/month`}
                      </div>
                      {utility.transferDate && (
                        <div className="text-xs text-muted-foreground">
                          Transfer: {format(utility.transferDate, 'MMM dd, yyyy')}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant={
                      utility.status === 'active' || utility.status === 'transferred' ? 'secondary' :
                      utility.status === 'scheduled' ? 'default' :
                      'outline'
                    }>
                      {utility.status}
                    </Badge>
                    {utility.status === 'research' && (
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleUpdateUtilityStatus(utility.id, 'contacted')}
                      >
                        Contact
                      </Button>
                    )}
                    {utility.status === 'contacted' && (
                      <Button 
                        size="sm" 
                        onClick={() => handleUpdateUtilityStatus(utility.id, 'scheduled')}
                      >
                        Schedule
                      </Button>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Moving Tasks Checklist */}
      <Card>
        <CardHeader>
          <CardTitle>Moving Checklist</CardTitle>
          <CardDescription>Track your moving tasks and deadlines</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {movingTasks
              .sort((a, b) => a.dueDate.getTime() - b.dueDate.getTime())
              .map((task) => (
              <div key={task.id} className={`flex items-center space-x-3 p-3 rounded-lg border ${
                task.completed ? 'bg-muted/30' : 
                task.priority === 'high' ? 'border-destructive/20 bg-destructive/5' :
                'border-accent/20'
              }`}>
                <Checkbox
                  checked={task.completed}
                  onCheckedChange={() => handleToggleTask(task.id)}
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <span className={`font-medium ${task.completed ? 'line-through text-muted-foreground' : ''}`}>
                      {task.task}
                    </span>
                    <Badge variant="outline" className="text-xs capitalize">
                      {task.category}
                    </Badge>
                    <Badge variant={
                      task.priority === 'high' ? 'destructive' :
                      task.priority === 'medium' ? 'default' :
                      'secondary'
                    } className="text-xs">
                      {task.priority}
                    </Badge>
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Due: {format(task.dueDate, 'MMM dd, yyyy')}
                    {task.notes && ` • ${task.notes}`}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Add Moving Company Dialog */}
      <Dialog open={isAddCompanyOpen} onOpenChange={setIsAddCompanyOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Moving Company</DialogTitle>
            <DialogDescription>Add a moving company quote to compare</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">Company Name</label>
              <Input
                placeholder="Moving Company Name"
                value={newCompany.name || ""}
                onChange={(e) => setNewCompany({...newCompany, name: e.target.value})}
              />
            </div>
            <div>
              <label className="text-sm font-medium">Quote Amount</label>
              <Input
                type="number"
                placeholder="2400"
                value={newCompany.quote || ""}
                onChange={(e) => setNewCompany({...newCompany, quote: Number(e.target.value)})}
              />
            </div>
            <div>
              <label className="text-sm font-medium">Contact Information</label>
              <Input
                placeholder="Email and phone number"
                value={newCompany.contactInfo || ""}
                onChange={(e) => setNewCompany({...newCompany, contactInfo: e.target.value})}
              />
            </div>
            <div>
              <label className="text-sm font-medium">Notes</label>
              <Textarea
                placeholder="Services included, special requirements, etc."
                value={newCompany.notes || ""}
                onChange={(e) => setNewCompany({...newCompany, notes: e.target.value})}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddCompanyOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddMovingCompany}>
              Add Company
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Add Utility Dialog */}
      <Dialog open={isAddUtilityOpen} onOpenChange={setIsAddUtilityOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Utility Service</DialogTitle>
            <DialogDescription>Add a utility service to track</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">Service Type</label>
              <Select onValueChange={(value) => setNewUtility({...newUtility, service: value as any})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select service type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="electricity">Electricity</SelectItem>
                  <SelectItem value="gas">Gas</SelectItem>
                  <SelectItem value="water">Water</SelectItem>
                  <SelectItem value="internet">Internet</SelectItem>
                  <SelectItem value="cable">Cable TV</SelectItem>
                  <SelectItem value="trash">Trash/Recycling</SelectItem>
                  <SelectItem value="security">Security System</SelectItem>
                  <SelectItem value="phone">Phone Service</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium">Provider</label>
              <Input
                placeholder="Service provider name"
                value={newUtility.provider || ""}
                onChange={(e) => setNewUtility({...newUtility, provider: e.target.value})}
              />
            </div>
            <div>
              <label className="text-sm font-medium">Contact Information</label>
              <Input
                placeholder="Phone number"
                value={newUtility.contactInfo || ""}
                onChange={(e) => setNewUtility({...newUtility, contactInfo: e.target.value})}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Setup Fee</label>
                <Input
                  type="number"
                  placeholder="99"
                  value={newUtility.setupFee || ""}
                  onChange={(e) => setNewUtility({...newUtility, setupFee: Number(e.target.value)})}
                />
              </div>
              <div>
                <label className="text-sm font-medium">Monthly Rate</label>
                <Input
                  type="number"
                  placeholder="79"
                  value={newUtility.monthlyRate || ""}
                  onChange={(e) => setNewUtility({...newUtility, monthlyRate: Number(e.target.value)})}
                />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddUtilityOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => {
              if (newUtility.service && newUtility.provider) {
                const utility: Utility = {
                  id: Math.max(...utilities.map(u => u.id), 0) + 1,
                  service: newUtility.service as any,
                  provider: newUtility.provider,
                  contactInfo: newUtility.contactInfo || "",
                  status: 'research',
                  setupFee: newUtility.setupFee,
                  monthlyRate: newUtility.monthlyRate,
                  notes: ""
                }
                setUtilities([...utilities, utility])
                setNewUtility({})
                setIsAddUtilityOpen(false)
              }
            }}>
              Add Utility
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}