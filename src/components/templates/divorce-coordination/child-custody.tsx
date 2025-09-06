"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  Plus,
  Users,
  Calendar,
  Clock,
  School,
  Home,
  Phone,
  Trash2,
  CheckCircle2
} from "lucide-react"
import { useDivorceCoordination } from "@/contexts/divorce-coordination-context"

interface CustodyItem {
  id: string
  type: 'schedule' | 'arrangement' | 'decision' | 'activity' | 'evaluation' | 'other'
  title: string
  description: string
  status: 'pending' | 'proposed' | 'agreed' | 'disputed' | 'court-ordered' | 'completed'
  priority: 'low' | 'medium' | 'high' | 'urgent'
  childrenAffected: string[]
  deadline?: string
  nextReviewDate?: string
  custodyType?: 'physical' | 'legal' | 'both'
  percentage?: number
  notes?: string
  createdAt: Date
  updatedAt: Date
}

interface Child {
  id: string
  name: string
  age: number
  school?: string
  activities?: string
}

export function ChildCustody() {
  const { data, updateData } = useDivorceCoordination()
  const [custodyItems, setCustodyItems] = useState<CustodyItem[]>([])
  const [children, setChildren] = useState<Child[]>([])
  const [isAddingItem, setIsAddingItem] = useState(false)
  const [isAddingChild, setIsAddingChild] = useState(false)

  const [formData, setFormData] = useState({
    type: 'arrangement' as CustodyItem['type'],
    title: '',
    description: '',
    priority: 'medium' as CustodyItem['priority'],
    childrenAffected: [] as string[],
    deadline: '',
    nextReviewDate: '',
    custodyType: undefined as CustodyItem['custodyType'],
    percentage: 50,
    notes: '',
  })

  const [childFormData, setChildFormData] = useState({
    name: '',
    age: 0,
    school: '',
    activities: '',
  })

  useEffect(() => {
    const savedItems = localStorage.getItem('divorce-coordination-child-custody')
    const savedChildren = localStorage.getItem('divorce-coordination-children')
    
    if (savedItems) {
      const parsed = JSON.parse(savedItems)
      setCustodyItems(parsed.map((item: any) => ({
        ...item,
        createdAt: new Date(item.createdAt),
        updatedAt: new Date(item.updatedAt),
      })))
    }

    if (savedChildren) {
      setChildren(JSON.parse(savedChildren))
    }
  }, [])

  const saveCustodyItems = (newItems: CustodyItem[]) => {
    setCustodyItems(newItems)
    localStorage.setItem('divorce-coordination-child-custody', JSON.stringify(newItems))
  }

  const saveChildren = (newChildren: Child[]) => {
    setChildren(newChildren)
    localStorage.setItem('divorce-coordination-children', JSON.stringify(newChildren))
  }

  const addCustodyItem = () => {
    const newItem: CustodyItem = {
      id: Date.now().toString(),
      ...formData,
      status: 'pending',
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    saveCustodyItems([...custodyItems, newItem])
    resetForm()
    setIsAddingItem(false)
  }

  const addChild = () => {
    const newChild: Child = {
      id: Date.now().toString(),
      ...childFormData,
    }
    saveChildren([...children, newChild])
    resetChildForm()
    setIsAddingChild(false)
  }

  const updateCustodyItem = (id: string, updates: Partial<CustodyItem>) => {
    const updatedItems = custodyItems.map(item => 
      item.id === id 
        ? { ...item, ...updates, updatedAt: new Date() }
        : item
    )
    saveCustodyItems(updatedItems)
  }

  const deleteCustodyItem = (id: string) => {
    const filteredItems = custodyItems.filter(item => item.id !== id)
    saveCustodyItems(filteredItems)
  }

  const deleteChild = (id: string) => {
    const filteredChildren = children.filter(child => child.id !== id)
    saveChildren(filteredChildren)
  }

  const resetForm = () => {
    setFormData({
      type: 'arrangement',
      title: '',
      description: '',
      priority: 'medium',
      childrenAffected: [],
      deadline: '',
      nextReviewDate: '',
      custodyType: undefined,
      percentage: 50,
      notes: '',
    })
  }

  const resetChildForm = () => {
    setChildFormData({
      name: '',
      age: 0,
      school: '',
      activities: '',
    })
  }

  const completedCount = custodyItems.filter(item => 
    item.status === 'completed' || item.status === 'agreed' || item.status === 'court-ordered'
  ).length
  const progressPercentage = custodyItems.length > 0 ? (completedCount / custodyItems.length) * 100 : 0

  const getStatusBadge = (status: CustodyItem['status']) => {
    switch (status) {
      case 'completed':
        return <Badge variant="default">Completed</Badge>
      case 'court-ordered':
        return <Badge variant="default" className="bg-purple-600">Court Ordered</Badge>
      case 'agreed':
        return <Badge variant="default" className="bg-green-600">Agreed</Badge>
      case 'disputed':
        return <Badge variant="destructive">Disputed</Badge>
      case 'proposed':
        return <Badge variant="secondary">Proposed</Badge>
      default:
        return <Badge variant="outline">Pending</Badge>
    }
  }

  const getPriorityBadge = (priority: CustodyItem['priority']) => {
    switch (priority) {
      case 'urgent':
        return <Badge variant="destructive">Urgent</Badge>
      case 'high':
        return <Badge variant="destructive" className="bg-orange-600">High</Badge>
      case 'medium':
        return <Badge variant="secondary">Medium</Badge>
      default:
        return <Badge variant="outline">Low</Badge>
    }
  }

  const getTypeIcon = (type: CustodyItem['type']) => {
    switch (type) {
      case 'schedule':
        return <Calendar className="h-4 w-4" />
      case 'arrangement':
        return <Home className="h-4 w-4" />
      case 'activity':
        return <School className="h-4 w-4" />
      case 'evaluation':
        return <Users className="h-4 w-4" />
      default:
        return <Clock className="h-4 w-4" />
    }
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Child Custody</h1>
          <p className="text-muted-foreground">Manage custody arrangements, schedules, and decisions for your children</p>
        </div>
        <div className="flex gap-2">
          <Dialog open={isAddingChild} onOpenChange={setIsAddingChild}>
            <DialogTrigger asChild>
              <Button variant="outline">
                <Users className="h-4 w-4 mr-2" />
                Add Child
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Add Child</DialogTitle>
                <DialogDescription>
                  Add information about a child involved in the custody arrangements.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="childName">Name</Label>
                  <Input
                    id="childName"
                    value={childFormData.name}
                    onChange={(e) => setChildFormData({...childFormData, name: e.target.value})}
                    placeholder="Child's name"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="childAge">Age</Label>
                  <Input
                    id="childAge"
                    type="number"
                    value={childFormData.age || ''}
                    onChange={(e) => setChildFormData({...childFormData, age: parseInt(e.target.value) || 0})}
                    placeholder="0"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="school">School (Optional)</Label>
                  <Input
                    id="school"
                    value={childFormData.school}
                    onChange={(e) => setChildFormData({...childFormData, school: e.target.value})}
                    placeholder="School name"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="activities">Activities (Optional)</Label>
                  <Input
                    id="activities"
                    value={childFormData.activities}
                    onChange={(e) => setChildFormData({...childFormData, activities: e.target.value})}
                    placeholder="Sports, music, etc."
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" onClick={addChild}>
                  Add Child
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Dialog open={isAddingItem} onOpenChange={setIsAddingItem}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Custody Item
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Add Custody Item</DialogTitle>
                <DialogDescription>
                  Create a new custody-related item to track.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    placeholder="e.g., Weekly Schedule, Holiday Arrangement"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="type">Type</Label>
                  <Select value={formData.type} onValueChange={(value: CustodyItem['type']) => setFormData({...formData, type: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="schedule">Schedule</SelectItem>
                      <SelectItem value="arrangement">Living Arrangement</SelectItem>
                      <SelectItem value="decision">Decision Rights</SelectItem>
                      <SelectItem value="activity">Activity/Event</SelectItem>
                      <SelectItem value="evaluation">Evaluation</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="priority">Priority</Label>
                  <Select value={formData.priority} onValueChange={(value: CustodyItem['priority']) => setFormData({...formData, priority: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="urgent">Urgent</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="deadline">Deadline (Optional)</Label>
                  <Input
                    id="deadline"
                    type="date"
                    value={formData.deadline}
                    onChange={(e) => setFormData({...formData, deadline: e.target.value})}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    placeholder="Describe the custody item..."
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" onClick={addCustodyItem}>
                  Add Item
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Children Overview */}
      {children.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Children</CardTitle>
            <CardDescription>Children involved in custody arrangements</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {children.map((child) => (
                <div key={child.id} className="p-4 border rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">{child.name}</h3>
                      <p className="text-sm text-muted-foreground">Age: {child.age}</p>
                      {child.school && (
                        <p className="text-sm text-muted-foreground">School: {child.school}</p>
                      )}
                      {child.activities && (
                        <p className="text-sm text-muted-foreground">Activities: {child.activities}</p>
                      )}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => deleteChild(child.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Progress Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Custody Progress</CardTitle>
          <CardDescription>
            {completedCount} of {custodyItems.length} items resolved
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Progress value={progressPercentage} className="w-full" />
          <p className="text-sm text-muted-foreground mt-2">
            {progressPercentage.toFixed(1)}% complete
          </p>
        </CardContent>
      </Card>

      {/* Custody Items */}
      <Card>
        <CardHeader>
          <CardTitle>Custody Items</CardTitle>
          <CardDescription>All custody arrangements, schedules, and decisions</CardDescription>
        </CardHeader>
        <CardContent>
          {custodyItems.length === 0 ? (
            <div className="text-center py-8">
              <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No custody items yet. Add your first item to get started!</p>
            </div>
          ) : (
            <Table>
              <TableCaption>Your custody arrangements and items</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Item</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead>Deadline</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {custodyItems.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        {getTypeIcon(item.type)}
                        <div>
                          <div>{item.title}</div>
                          {item.description && (
                            <div className="text-sm text-muted-foreground">
                              {item.description}
                            </div>
                          )}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">
                        {item.type}
                      </Badge>
                    </TableCell>
                    <TableCell>{getStatusBadge(item.status)}</TableCell>
                    <TableCell>{getPriorityBadge(item.priority)}</TableCell>
                    <TableCell>
                      {item.deadline ? (
                        new Date(item.deadline).toLocaleDateString()
                      ) : (
                        <span className="text-muted-foreground">—</span>
                      )}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Select
                          value={item.status}
                          onValueChange={(value: CustodyItem['status']) => 
                            updateCustodyItem(item.id, { status: value })
                          }
                        >
                          <SelectTrigger className="w-32">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pending">Pending</SelectItem>
                            <SelectItem value="proposed">Proposed</SelectItem>
                            <SelectItem value="agreed">Agreed</SelectItem>
                            <SelectItem value="disputed">Disputed</SelectItem>
                            <SelectItem value="court-ordered">Court Ordered</SelectItem>
                            <SelectItem value="completed">Completed</SelectItem>
                          </SelectContent>
                        </Select>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => deleteCustodyItem(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  )
}