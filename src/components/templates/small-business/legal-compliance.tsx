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
  Scale,
  FileText,
  Shield,
  AlertTriangle,
  CheckCircle,
  Clock,
  DollarSign
} from "lucide-react"
import { useSmallBusiness } from "@/contexts/small-business-context"

interface LegalComplianceItem {
  id: string
  name: string
  type: 'license' | 'permit' | 'registration' | 'insurance' | 'contract' | 'tax'
  status: 'pending' | 'in-progress' | 'completed' | 'expired'
  jurisdiction: string
  cost: number
  applicationDate: string
  expirationDate: string
  renewalRequired: boolean
  contactInfo: string
  notes?: string
  createdAt: Date
  updatedAt: Date
}

export function LegalCompliance() {
  const { data, updateData } = useSmallBusiness()
  const [items, setItems] = useState<LegalComplianceItem[]>([])
  const [isAddingItem, setIsAddingItem] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    type: 'license' as const,
    jurisdiction: '',
    cost: 0,
    applicationDate: '',
    expirationDate: '',
    renewalRequired: false,
    contactInfo: '',
    notes: '',
  })

  useEffect(() => {
    const savedItems = localStorage.getItem('small-business-legal-compliance-items')
    if (savedItems) {
      const parsed = JSON.parse(savedItems)
      setItems(parsed.map((item: any) => ({
        ...item,
        createdAt: new Date(item.createdAt),
        updatedAt: new Date(item.updatedAt)
      })))
    }
  }, [])

  const saveItems = (newItems: LegalComplianceItem[]) => {
    setItems(newItems)
    localStorage.setItem('small-business-legal-compliance-items', JSON.stringify(newItems))
  }

  const addItem = () => {
    if (!formData.name.trim()) return

    const newItem: LegalComplianceItem = {
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

  const updateItem = (id: string, updates: Partial<LegalComplianceItem>) => {
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
      type: 'license',
      jurisdiction: '',
      cost: 0,
      applicationDate: '',
      expirationDate: '',
      renewalRequired: false,
      contactInfo: '',
      notes: '',
    })
  }

  const completedCount = items.filter(item => item.status === 'completed').length
  const progressPercentage = items.length > 0 ? (completedCount / items.length) * 100 : 0
  const totalCost = items.reduce((sum, item) => sum + item.cost, 0)
  const expiringSoon = items.filter(item => {
    if (!item.expirationDate || item.status !== 'completed') return false
    const expDate = new Date(item.expirationDate)
    const now = new Date()
    const monthsUntilExpiry = (expDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24 * 30)
    return monthsUntilExpiry > 0 && monthsUntilExpiry <= 3
  }).length

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'license': return <FileText className="h-4 w-4" />
      case 'permit': return <CheckCircle className="h-4 w-4" />
      case 'registration': return <Scale className="h-4 w-4" />
      case 'insurance': return <Shield className="h-4 w-4" />
      case 'contract': return <FileText className="h-4 w-4" />
      case 'tax': return <DollarSign className="h-4 w-4" />
      default: return <FileText className="h-4 w-4" />
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="h-4 w-4 text-green-600" />
      case 'in-progress': return <Clock className="h-4 w-4 text-yellow-600" />
      case 'expired': return <AlertTriangle className="h-4 w-4 text-red-600" />
      default: return <Clock className="h-4 w-4 text-gray-600" />
    }
  }

  const isExpiringSoon = (item: LegalComplianceItem) => {
    if (!item.expirationDate || item.status !== 'completed') return false
    const expDate = new Date(item.expirationDate)
    const now = new Date()
    const monthsUntilExpiry = (expDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24 * 30)
    return monthsUntilExpiry > 0 && monthsUntilExpiry <= 3
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Legal Compliance</h1>
          <p className="text-muted-foreground">Track licenses, permits, and legal requirements</p>
        </div>
        <Dialog open={isAddingItem} onOpenChange={setIsAddingItem}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Legal Requirement
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Add New Legal Requirement</DialogTitle>
              <DialogDescription>
                Add a license, permit, or other legal requirement for your business.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Requirement Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="e.g., Business License, Food Handler's Permit"
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
                      <SelectItem value="license">Business License</SelectItem>
                      <SelectItem value="permit">Permit</SelectItem>
                      <SelectItem value="registration">Registration</SelectItem>
                      <SelectItem value="insurance">Insurance</SelectItem>
                      <SelectItem value="contract">Contract</SelectItem>
                      <SelectItem value="tax">Tax Registration</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="jurisdiction">Jurisdiction</Label>
                  <Input
                    id="jurisdiction"
                    value={formData.jurisdiction}
                    onChange={(e) => setFormData({...formData, jurisdiction: e.target.value})}
                    placeholder="e.g., State of California, City of SF"
                  />
                </div>
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
                  <Label htmlFor="applicationDate">Application Date</Label>
                  <Input
                    id="applicationDate"
                    type="date"
                    value={formData.applicationDate}
                    onChange={(e) => setFormData({...formData, applicationDate: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="expirationDate">Expiration Date</Label>
                <Input
                  id="expirationDate"
                  type="date"
                  value={formData.expirationDate}
                  onChange={(e) => setFormData({...formData, expirationDate: e.target.value})}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="contactInfo">Contact Information</Label>
                <Input
                  id="contactInfo"
                  value={formData.contactInfo}
                  onChange={(e) => setFormData({...formData, contactInfo: e.target.value})}
                  placeholder="Agency phone, website, or email"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="notes">Notes</Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  placeholder="Additional details, requirements, or reminders..."
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={addItem}>
                Add Requirement
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Progress Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Compliance Progress</CardTitle>
            <Scale className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{progressPercentage.toFixed(1)}%</div>
            <Progress value={progressPercentage} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Requirements</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{items.length}</div>
            <p className="text-xs text-muted-foreground">{completedCount} completed</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Cost</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalCost.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">compliance costs</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Expiring Soon</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{expiringSoon}</div>
            <p className="text-xs text-muted-foreground">within 3 months</p>
          </CardContent>
        </Card>
      </div>

      {/* Compliance Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {['license', 'permit', 'registration', 'insurance', 'contract', 'tax'].map(type => {
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
          <CardTitle>Legal Requirements</CardTitle>
          <CardDescription>Manage your licenses, permits, and compliance items</CardDescription>
        </CardHeader>
        <CardContent>
          {items.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No legal requirements yet. Add your first requirement to get started!</p>
            </div>
          ) : (
            <Table>
              <TableCaption>Your legal compliance requirements</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Jurisdiction</TableHead>
                  <TableHead>Cost</TableHead>
                  <TableHead>Expiration</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {items.map((item) => (
                  <TableRow key={item.id} className={isExpiringSoon(item) ? 'bg-yellow-50' : ''}>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        {getStatusIcon(item.status)}
                        <div>
                          <div className="font-medium">{item.name}</div>
                          {isExpiringSoon(item) && (
                            <div className="text-sm text-yellow-600">
                              Expires soon!
                            </div>
                          )}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="flex items-center gap-1">
                        {getTypeIcon(item.type)}
                        {item.type}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant={
                        item.status === 'completed' ? 'default' :
                        item.status === 'in-progress' ? 'secondary' :
                        item.status === 'expired' ? 'destructive' :
                        'outline'
                      }>
                        {item.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{item.jurisdiction || 'Not specified'}</TableCell>
                    <TableCell>${item.cost.toLocaleString()}</TableCell>
                    <TableCell>
                      {item.expirationDate ? new Date(item.expirationDate).toLocaleDateString() : 'No expiration'}
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