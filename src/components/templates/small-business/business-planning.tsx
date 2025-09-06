"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
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
  Edit,
  Trash2,
  FileText,
  Target,
  Lightbulb,
  Users,
  TrendingUp
} from "lucide-react"
import { useSmallBusiness } from "@/contexts/small-business-context"

interface BusinessPlanItem {
  id: string
  name: string
  type: 'mission' | 'vision' | 'strategy' | 'goal' | 'research'
  status: 'pending' | 'in-progress' | 'completed'
  description: string
  priority: 'low' | 'medium' | 'high'
  dueDate: string
  progress: number
  notes?: string
  createdAt: Date
  updatedAt: Date
}

export function BusinessPlanning() {
  const { data, updateData } = useSmallBusiness()
  const [items, setItems] = useState<BusinessPlanItem[]>([])
  const [isAddingItem, setIsAddingItem] = useState(false)
  const [editingItem, setEditingItem] = useState<BusinessPlanItem | null>(null)

  const [formData, setFormData] = useState({
    name: '',
    type: 'strategy' as const,
    description: '',
    priority: 'medium' as const,
    dueDate: '',
    progress: 0,
    notes: '',
  })

  useEffect(() => {
    const savedItems = localStorage.getItem('small-business-business-planning-items')
    if (savedItems) {
      const parsed = JSON.parse(savedItems)
      setItems(parsed.map((item: any) => ({
        ...item,
        createdAt: new Date(item.createdAt),
        updatedAt: new Date(item.updatedAt)
      })))
    }
  }, [])

  const saveItems = (newItems: BusinessPlanItem[]) => {
    setItems(newItems)
    localStorage.setItem('small-business-business-planning-items', JSON.stringify(newItems))
  }

  const addItem = () => {
    if (!formData.name.trim()) return

    const newItem: BusinessPlanItem = {
      id: Date.now().toString(),
      ...formData,
      status: 'pending',
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    saveItems([...items, newItem])
    resetForm()
    setIsAddingItem(false)
  }

  const updateItem = (id: string, updates: Partial<BusinessPlanItem>) => {
    const updatedItems = items.map(item => 
      item.id === id 
        ? { ...item, ...updates, updatedAt: new Date() }
        : item
    )
    saveItems(updatedItems)
  }

  const deleteItem = (id: string) => {
    const filteredItems = items.filter(item => item.id !== id)
    saveItems(filteredItems)
  }

  const resetForm = () => {
    setFormData({
      name: '',
      type: 'strategy',
      description: '',
      priority: 'medium',
      dueDate: '',
      progress: 0,
      notes: '',
    })
  }

  const completedCount = items.filter(item => item.status === 'completed').length
  const progressPercentage = items.length > 0 ? (completedCount / items.length) * 100 : 0

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'mission': return <Target className="h-4 w-4" />
      case 'vision': return <Lightbulb className="h-4 w-4" />
      case 'strategy': return <TrendingUp className="h-4 w-4" />
      case 'goal': return <Target className="h-4 w-4" />
      case 'research': return <FileText className="h-4 w-4" />
      default: return <FileText className="h-4 w-4" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'mission': return 'bg-purple-100 text-purple-800'
      case 'vision': return 'bg-blue-100 text-blue-800'
      case 'strategy': return 'bg-green-100 text-green-800'
      case 'goal': return 'bg-orange-100 text-orange-800'
      case 'research': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Business Planning</h1>
          <p className="text-muted-foreground">Define your business strategy and goals</p>
        </div>
        <Dialog open={isAddingItem} onOpenChange={setIsAddingItem}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Business Plan Item
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Business Plan Item</DialogTitle>
              <DialogDescription>
                Create a new strategic element for your business plan.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Item Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="e.g., Define target market"
                />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="type">Type</Label>
                <Select value={formData.type} onValueChange={(value: any) => setFormData({...formData, type: value})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mission">Mission Statement</SelectItem>
                    <SelectItem value="vision">Vision Statement</SelectItem>
                    <SelectItem value="strategy">Strategy</SelectItem>
                    <SelectItem value="goal">Business Goal</SelectItem>
                    <SelectItem value="research">Market Research</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  placeholder="Detailed description of this business plan element"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="priority">Priority</Label>
                  <Select value={formData.priority} onValueChange={(value: any) => setFormData({...formData, priority: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="dueDate">Target Date</Label>
                  <Input
                    id="dueDate"
                    type="date"
                    value={formData.dueDate}
                    onChange={(e) => setFormData({...formData, dueDate: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="notes">Notes</Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  placeholder="Additional notes or details..."
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={addItem}>
                Add Item
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Progress Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Planning Progress</CardTitle>
          <CardDescription>
            {completedCount} of {items.length} business plan items completed
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Progress value={progressPercentage} className="w-full" />
          <p className="text-sm text-muted-foreground mt-2">
            {progressPercentage.toFixed(1)}% complete
          </p>
        </CardContent>
      </Card>

      {/* Business Plan Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {['mission', 'vision', 'strategy', 'goal', 'research'].map(type => {
          const typeItems = items.filter(item => item.type === type)
          const typeProgress = typeItems.length > 0 
            ? (typeItems.filter(item => item.status === 'completed').length / typeItems.length) * 100 
            : 0

          return (
            <Card key={type}>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  {getTypeIcon(type)}
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </CardTitle>
                <CardDescription>
                  {typeItems.length} items • {Math.round(typeProgress)}% complete
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Progress value={typeProgress} className="mb-2" />
                <p className="text-sm text-muted-foreground">
                  {typeItems.filter(item => item.status === 'completed').length} of {typeItems.length} completed
                </p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Items List */}
      <Card>
        <CardHeader>
          <CardTitle>Business Plan Items</CardTitle>
          <CardDescription>Manage your strategic planning elements</CardDescription>
        </CardHeader>
        <CardContent>
          {items.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No business plan items yet. Add your first item to get started!</p>
            </div>
          ) : (
            <Table>
              <TableCaption>Your business planning items</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead>Due Date</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {items.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">
                      <div>
                        <div className="font-medium">{item.name}</div>
                        {item.description && (
                          <div className="text-sm text-muted-foreground mt-1 max-w-xs truncate">
                            {item.description}
                          </div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={getTypeColor(item.type)}>
                        {item.type}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant={
                        item.status === 'completed' ? 'default' :
                        item.status === 'in-progress' ? 'secondary' :
                        'outline'
                      }>
                        {item.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant={
                        item.priority === 'high' ? 'destructive' :
                        item.priority === 'medium' ? 'secondary' :
                        'outline'
                      }>
                        {item.priority}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {item.dueDate ? new Date(item.dueDate).toLocaleDateString() : 'No date set'}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateItem(item.id, { 
                            status: item.status === 'completed' ? 'pending' : 'completed' 
                          })}
                        >
                          {item.status === 'completed' ? 'Mark Pending' : 'Complete'}
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => deleteItem(item.id)}
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