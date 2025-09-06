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
  Trash2,
  Settings,
  Users,
  Truck,
  Monitor,
  Shield,
  FileText,
  Clock,
  CheckCircle,
  Workflow,
  Building
} from "lucide-react"
import { useSmallBusiness } from "@/contexts/small-business-context"

interface OperationItem {
  id: string
  name: string
  type: 'system' | 'process' | 'equipment' | 'supplier' | 'staff' | 'location' | 'policy' | 'software'
  status: 'planning' | 'in-progress' | 'testing' | 'operational' | 'needs-review'
  priority: 'low' | 'medium' | 'high' | 'critical'
  cost: number
  implementationDate: string
  assignedTo: string
  description: string
  dependencies?: string
  notes?: string
  createdAt: Date
  updatedAt: Date
}

export function OperationsSetup() {
  const { data, updateData } = useSmallBusiness()
  const [items, setItems] = useState<OperationItem[]>([])
  const [isAddingItem, setIsAddingItem] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    type: 'system' as const,
    priority: 'medium' as const,
    cost: 0,
    implementationDate: '',
    assignedTo: '',
    description: '',
    dependencies: '',
    notes: '',
  })

  useEffect(() => {
    const savedItems = localStorage.getItem('small-business-operations-setup-items')
    if (savedItems) {
      const parsed = JSON.parse(savedItems)
      setItems(parsed.map((item: any) => ({
        ...item,
        createdAt: new Date(item.createdAt),
        updatedAt: new Date(item.updatedAt)
      })))
    }
  }, [])

  const saveItems = (newItems: OperationItem[]) => {
    setItems(newItems)
    localStorage.setItem('small-business-operations-setup-items', JSON.stringify(newItems))
  }

  const addItem = () => {
    if (!formData.name.trim()) return

    const newItem: OperationItem = {
      id: Date.now().toString(),
      ...formData,
      status: 'planning',
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    saveItems([...items, newItem])
    resetForm()
    setIsAddingItem(false)
  }

  const updateItem = (id: string, updates: Partial<OperationItem>) => {
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
      type: 'system',
      priority: 'medium',
      cost: 0,
      implementationDate: '',
      assignedTo: '',
      description: '',
      dependencies: '',
      notes: '',
    })
  }

  // Calculate operations metrics
  const totalCost = items.reduce((sum, item) => sum + item.cost, 0)
  const operationalItems = items.filter(item => item.status === 'operational').length
  const totalItems = items.length
  const operationalProgress = totalItems > 0 ? (operationalItems / totalItems) * 100 : 0
  const criticalItems = items.filter(item => item.priority === 'critical' && item.status !== 'operational').length

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'system': return <Monitor className="h-4 w-4" />
      case 'process': return <Workflow className="h-4 w-4" />
      case 'equipment': return <Settings className="h-4 w-4" />
      case 'supplier': return <Truck className="h-4 w-4" />
      case 'staff': return <Users className="h-4 w-4" />
      case 'location': return <Building className="h-4 w-4" />
      case 'policy': return <FileText className="h-4 w-4" />
      case 'software': return <Monitor className="h-4 w-4" />
      default: return <Settings className="h-4 w-4" />
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational': return <CheckCircle className="h-4 w-4 text-green-600" />
      case 'testing': return <Settings className="h-4 w-4 text-blue-600" />
      case 'in-progress': return <Clock className="h-4 w-4 text-yellow-600" />
      case 'needs-review': return <Shield className="h-4 w-4 text-orange-600" />
      default: return <Clock className="h-4 w-4 text-gray-600" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'system': return 'bg-blue-100 text-blue-800'
      case 'process': return 'bg-green-100 text-green-800'
      case 'equipment': return 'bg-purple-100 text-purple-800'
      case 'supplier': return 'bg-orange-100 text-orange-800'
      case 'staff': return 'bg-pink-100 text-pink-800'
      case 'location': return 'bg-indigo-100 text-indigo-800'
      case 'policy': return 'bg-yellow-100 text-yellow-800'
      case 'software': return 'bg-cyan-100 text-cyan-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Operations Setup</h1>
          <p className="text-muted-foreground">Set up systems, processes, and infrastructure</p>
        </div>
        <Dialog open={isAddingItem} onOpenChange={setIsAddingItem}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Operations Item
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Add New Operations Item</DialogTitle>
              <DialogDescription>
                Add a system, process, or operational requirement.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Item Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="e.g., Point of Sale System, Employee Handbook"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="type">Type</Label>
                  <Select value={formData.type} onValueChange={(value: any) => setFormData({...formData, type: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="system">System/Technology</SelectItem>
                      <SelectItem value="process">Business Process</SelectItem>
                      <SelectItem value="equipment">Equipment/Hardware</SelectItem>
                      <SelectItem value="supplier">Supplier/Vendor</SelectItem>
                      <SelectItem value="staff">Staffing/HR</SelectItem>
                      <SelectItem value="location">Location/Facility</SelectItem>
                      <SelectItem value="policy">Policy/Procedure</SelectItem>
                      <SelectItem value="software">Software/Tools</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

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
                      <SelectItem value="critical">Critical</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  placeholder="Detailed description of what needs to be implemented"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="cost">Cost ($)</Label>
                  <Input
                    id="cost"
                    type="number"
                    value={formData.cost}
                    onChange={(e) => setFormData({...formData, cost: parseFloat(e.target.value) || 0})}
                    placeholder="0"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="implementationDate">Target Implementation</Label>
                  <Input
                    id="implementationDate"
                    type="date"
                    value={formData.implementationDate}
                    onChange={(e) => setFormData({...formData, implementationDate: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="assignedTo">Assigned To</Label>
                <Input
                  id="assignedTo"
                  value={formData.assignedTo}
                  onChange={(e) => setFormData({...formData, assignedTo: e.target.value})}
                  placeholder="Person or team responsible"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="dependencies">Dependencies</Label>
                <Input
                  id="dependencies"
                  value={formData.dependencies}
                  onChange={(e) => setFormData({...formData, dependencies: e.target.value})}
                  placeholder="What needs to be completed first?"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="notes">Notes</Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  placeholder="Additional notes, requirements, or considerations..."
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={addItem}>
                Add Operations Item
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Operations Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Operational Progress</CardTitle>
            <Settings className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{operationalProgress.toFixed(1)}%</div>
            <Progress value={operationalProgress} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Items</CardTitle>
            <Workflow className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalItems}</div>
            <p className="text-xs text-muted-foreground">{operationalItems} operational</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Setup Cost</CardTitle>
            <Building className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalCost.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">total investment</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Critical Items</CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{criticalItems}</div>
            <p className="text-xs text-muted-foreground">need attention</p>
          </CardContent>
        </Card>
      </div>

      {/* Operations Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {['system', 'process', 'equipment', 'supplier', 'staff', 'location', 'policy', 'software'].map(type => {
          const typeItems = items.filter(item => item.type === type)
          const typeProgress = typeItems.length > 0 
            ? (typeItems.filter(item => item.status === 'operational').length / typeItems.length) * 100 
            : 0
          const typeCost = typeItems.reduce((sum, item) => sum + item.cost, 0)

          return (
            <Card key={type}>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm flex items-center gap-2">
                  {getTypeIcon(type)}
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </CardTitle>
                <CardDescription>
                  {typeItems.length} items • ${typeCost.toLocaleString()}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Progress value={typeProgress} className="mb-2" />
                <p className="text-sm text-muted-foreground">
                  {Math.round(typeProgress)}% operational
                </p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Critical Items Alert */}
      {criticalItems > 0 && (
        <Card className="border-orange-200 bg-orange-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-orange-800">
              <Shield className="h-5 w-5" />
              Critical Items Need Attention
            </CardTitle>
            <CardDescription>
              {criticalItems} critical operational items are not yet operational
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {items.filter(item => item.priority === 'critical' && item.status !== 'operational')
                .slice(0, 3).map((item) => (
                <div key={item.id} className="flex items-center justify-between p-2 bg-white rounded border">
                  <span className="font-medium">{item.name}</span>
                  <Badge variant="destructive">Critical</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Operations Items List */}
      <Card>
        <CardHeader>
          <CardTitle>Operations Items</CardTitle>
          <CardDescription>Manage your operational systems and processes</CardDescription>
        </CardHeader>
        <CardContent>
          {items.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No operations items yet. Add your first item to get started!</p>
            </div>
          ) : (
            <Table>
              <TableCaption>Your operational setup items</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead>Cost</TableHead>
                  <TableHead>Due Date</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {items.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        {getStatusIcon(item.status)}
                        <div>
                          <div className="font-medium">{item.name}</div>
                          {item.assignedTo && (
                            <div className="text-sm text-muted-foreground">
                              Assigned to: {item.assignedTo}
                            </div>
                          )}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={getTypeColor(item.type)} variant="secondary">
                        {item.type}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant={
                        item.status === 'operational' ? 'default' :
                        item.status === 'testing' ? 'secondary' :
                        item.status === 'in-progress' ? 'secondary' :
                        item.status === 'needs-review' ? 'destructive' :
                        'outline'
                      }>
                        {item.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant={
                        item.priority === 'critical' ? 'destructive' :
                        item.priority === 'high' ? 'destructive' :
                        item.priority === 'medium' ? 'secondary' :
                        'outline'
                      }>
                        {item.priority}
                      </Badge>
                    </TableCell>
                    <TableCell>${item.cost.toLocaleString()}</TableCell>
                    <TableCell>
                      {item.implementationDate ? new Date(item.implementationDate).toLocaleDateString() : 'No date set'}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            const nextStatus = item.status === 'planning' ? 'in-progress' :
                                             item.status === 'in-progress' ? 'testing' :
                                             item.status === 'testing' ? 'operational' :
                                             item.status === 'operational' ? 'needs-review' : 'planning'
                            updateItem(item.id, { status: nextStatus })
                          }}
                        >
                          Next Stage
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