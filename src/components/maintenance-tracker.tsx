"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Wrench, Calendar, DollarSign, Plus, Edit, Trash2, AlertTriangle, CheckCircle } from "lucide-react"

interface MaintenanceRecord {
  id: string
  vehicleId: string
  vehicleName: string
  date: string
  mileage: number
  serviceType: string
  description: string
  cost: number
  serviceProvider: string
  nextServiceDue: string
  nextMileageDue: number
  warranty: boolean
  priority: 'low' | 'medium' | 'high'
  status: 'scheduled' | 'completed' | 'overdue'
  documents: string[]
}

export function MaintenanceTracker() {
  const [records, setRecords] = useState<MaintenanceRecord[]>([
    {
      id: "1",
      vehicleId: "vehicle1",
      vehicleName: "2023 Honda Accord",
      date: "2024-01-10",
      mileage: 15000,
      serviceType: "Oil Change",
      description: "Regular oil change with synthetic oil",
      cost: 65,
      serviceProvider: "Honda Service Center",
      nextServiceDue: "2024-04-10",
      nextMileageDue: 20000,
      warranty: true,
      priority: "medium",
      status: "completed",
      documents: ["receipt.pdf"]
    },
    {
      id: "2",
      vehicleId: "vehicle1", 
      vehicleName: "2023 Honda Accord",
      date: "2024-02-15",
      mileage: 18000,
      serviceType: "Tire Rotation",
      description: "Tire rotation and pressure check",
      cost: 35,
      serviceProvider: "Quick Lube Plus",
      nextServiceDue: "2024-08-15",
      nextMileageDue: 25000,
      warranty: false,
      priority: "low",
      status: "completed",
      documents: []
    },
    {
      id: "3",
      vehicleId: "vehicle1",
      vehicleName: "2023 Honda Accord", 
      date: "2024-03-20",
      mileage: 20000,
      serviceType: "Brake Inspection",
      description: "Scheduled brake system inspection",
      cost: 0,
      serviceProvider: "Honda Service Center",
      nextServiceDue: "2024-01-25",
      nextMileageDue: 22000,
      warranty: true,
      priority: "high",
      status: "overdue",
      documents: []
    }
  ])

  const [editingRecord, setEditingRecord] = useState<MaintenanceRecord | null>(null)

  const addRecord = (data: Partial<MaintenanceRecord>) => {
    const newRecord: MaintenanceRecord = {
      id: Date.now().toString(),
      vehicleId: data.vehicleId || "vehicle1",
      vehicleName: data.vehicleName || "",
      date: data.date || "",
      mileage: data.mileage || 0,
      serviceType: data.serviceType || "",
      description: data.description || "",
      cost: data.cost || 0,
      serviceProvider: data.serviceProvider || "",
      nextServiceDue: data.nextServiceDue || "",
      nextMileageDue: data.nextMileageDue || 0,
      warranty: data.warranty || false,
      priority: data.priority || "medium",
      status: data.status || "scheduled",
      documents: data.documents || []
    }
    setRecords(prev => [...prev, newRecord])
  }

  const updateRecord = (id: string, updates: Partial<MaintenanceRecord>) => {
    setRecords(prev => prev.map(record => 
      record.id === id ? { ...record, ...updates } : record
    ))
    setEditingRecord(null)
  }

  const deleteRecord = (id: string) => {
    setRecords(prev => prev.filter(record => record.id !== id))
  }

  const getStatusColor = (status: MaintenanceRecord['status']) => {
    switch (status) {
      case 'completed': return 'bg-primary/10 text-primary'
      case 'scheduled': return 'bg-primary/10 text-primary'
      case 'overdue': return 'bg-destructive/10 text-destructive'
    }
  }

  const getPriorityColor = (priority: MaintenanceRecord['priority']) => {
    switch (priority) {
      case 'high': return 'bg-destructive/10 text-destructive'
      case 'medium': return 'bg-muted text-muted-foreground'
      case 'low': return 'bg-primary/10 text-primary'
    }
  }

  const upcomingServices = records.filter(r => 
    r.status === 'scheduled' || r.status === 'overdue'
  ).sort((a, b) => new Date(a.nextServiceDue).getTime() - new Date(b.nextServiceDue).getTime())

  const totalSpent = records.filter(r => r.status === 'completed').reduce((sum, r) => sum + r.cost, 0)

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold flex items-center mb-2">
            <Wrench className="mr-2 h-8 w-8" />
            Maintenance Tracker
          </h1>
          <p className="text-muted-foreground">
            Track vehicle maintenance and service records
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Service Record
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Add Service Record</DialogTitle>
            </DialogHeader>
            <MaintenanceForm onSubmit={addRecord} />
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalSpent}</div>
            <p className="text-xs text-muted-foreground">This year</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Services Completed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{records.filter(r => r.status === 'completed').length}</div>
            <p className="text-xs text-muted-foreground">This year</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Services</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{records.filter(r => r.status === 'scheduled').length}</div>
            <p className="text-xs text-muted-foreground">Scheduled</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Overdue Services</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">{records.filter(r => r.status === 'overdue').length}</div>
            <p className="text-xs text-muted-foreground">Need attention</p>
          </CardContent>
        </Card>
      </div>

      {/* Upcoming Services Alert */}
      {upcomingServices.length > 0 && (
        <Card className="border-destructive/30">
          <CardHeader>
            <CardTitle className="flex items-center text-destructive">
              <AlertTriangle className="mr-2 h-5 w-5" />
              Upcoming Services
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {upcomingServices.slice(0, 3).map((service) => (
                <div key={service.id} className="flex justify-between items-center p-2 bg-muted rounded">
                  <div>
                    <span className="font-medium">{service.serviceType}</span>
                    <span className="text-sm text-muted-foreground ml-2">- {service.vehicleName}</span>
                  </div>
                  <div className="text-sm">
                    <Badge variant={service.status === 'overdue' ? 'destructive' : 'secondary'}>
                      {service.status === 'overdue' ? 'Overdue' : service.nextServiceDue}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Service Records */}
      <Card>
        <CardHeader>
          <CardTitle>Service Records</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {records.map((record) => (
              <div key={record.id} className="border rounded-lg p-4 hover:shadow-sm transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="font-semibold">{record.serviceType}</h3>
                      <Badge className={getStatusColor(record.status)}>
                        {record.status}
                      </Badge>
                      <Badge className={getPriorityColor(record.priority)}>
                        {record.priority}
                      </Badge>
                      {record.warranty && (
                        <Badge variant="outline">Warranty</Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{record.vehicleName}</p>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" onClick={() => setEditingRecord(record)}>
                      <Edit className="h-3 w-3" />
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => deleteRecord(record.id)}>
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="flex items-center mb-1">
                      <Calendar className="mr-1 h-3 w-3" />
                      <span className="font-medium">Service Date:</span>
                    </div>
                    <p className="text-muted-foreground">{record.date}</p>
                    <p className="text-muted-foreground">{record.mileage.toLocaleString()} miles</p>
                  </div>
                  <div>
                    <div className="flex items-center mb-1">
                      <DollarSign className="mr-1 h-3 w-3" />
                      <span className="font-medium">Cost:</span>
                    </div>
                    <p className="text-muted-foreground">${record.cost}</p>
                    <p className="text-muted-foreground text-xs">{record.serviceProvider}</p>
                  </div>
                  <div>
                    <span className="font-medium">Next Service:</span>
                    <p className="text-muted-foreground">{record.nextServiceDue}</p>
                    <p className="text-muted-foreground text-xs">{record.nextMileageDue.toLocaleString()} miles</p>
                  </div>
                </div>

                {record.description && (
                  <p className="text-sm text-muted-foreground mt-2 pt-2 border-t">
                    {record.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Edit Dialog */}
      {editingRecord && (
        <Dialog open={!!editingRecord} onOpenChange={() => setEditingRecord(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Edit Service Record</DialogTitle>
            </DialogHeader>
            <MaintenanceForm 
              record={editingRecord} 
              onSubmit={(updates) => updateRecord(editingRecord.id, updates)} 
            />
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}

function MaintenanceForm({ record, onSubmit }: { record?: MaintenanceRecord; onSubmit: (data: Partial<MaintenanceRecord>) => void }) {
  const [formData, setFormData] = useState({
    vehicleName: record?.vehicleName || "2023 Honda Accord",
    date: record?.date || "",
    mileage: record?.mileage || 0,
    serviceType: record?.serviceType || "",
    description: record?.description || "",
    cost: record?.cost || 0,
    serviceProvider: record?.serviceProvider || "",
    nextServiceDue: record?.nextServiceDue || "",
    nextMileageDue: record?.nextMileageDue || 0,
    warranty: record?.warranty || false,
    priority: record?.priority || "medium",
    status: record?.status || "scheduled"
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label>Vehicle</Label>
          <Input
            value={formData.vehicleName}
            onChange={(e) => setFormData(prev => ({ ...prev, vehicleName: e.target.value }))}
            required
          />
        </div>
        <div>
          <Label>Service Type</Label>
          <Input
            value={formData.serviceType}
            onChange={(e) => setFormData(prev => ({ ...prev, serviceType: e.target.value }))}
            placeholder="Oil Change, Tire Rotation, etc."
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div>
          <Label>Service Date</Label>
          <Input
            type="date"
            value={formData.date}
            onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
            required
          />
        </div>
        <div>
          <Label>Mileage</Label>
          <Input
            type="number"
            value={formData.mileage}
            onChange={(e) => setFormData(prev => ({ ...prev, mileage: parseInt(e.target.value) || 0 }))}
          />
        </div>
        <div>
          <Label>Cost</Label>
          <Input
            type="number"
            step="0.01"
            value={formData.cost}
            onChange={(e) => setFormData(prev => ({ ...prev, cost: parseFloat(e.target.value) || 0 }))}
          />
        </div>
      </div>

      <div>
        <Label>Service Provider</Label>
        <Input
          value={formData.serviceProvider}
          onChange={(e) => setFormData(prev => ({ ...prev, serviceProvider: e.target.value }))}
          placeholder="Honda Service Center, Quick Lube Plus, etc."
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label>Next Service Due Date</Label>
          <Input
            type="date"
            value={formData.nextServiceDue}
            onChange={(e) => setFormData(prev => ({ ...prev, nextServiceDue: e.target.value }))}
          />
        </div>
        <div>
          <Label>Next Service Due Mileage</Label>
          <Input
            type="number"
            value={formData.nextMileageDue}
            onChange={(e) => setFormData(prev => ({ ...prev, nextMileageDue: parseInt(e.target.value) || 0 }))}
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div>
          <Label>Status</Label>
          <select
            className="w-full border border-input bg-background px-3 py-2 text-sm ring-offset-background rounded-md"
            value={formData.status}
            onChange={(e) => setFormData(prev => ({ ...prev, status: e.target.value as MaintenanceRecord['status'] }))}
          >
            <option value="scheduled">Scheduled</option>
            <option value="completed">Completed</option>
            <option value="overdue">Overdue</option>
          </select>
        </div>
        <div>
          <Label>Priority</Label>
          <select
            className="w-full border border-input bg-background px-3 py-2 text-sm ring-offset-background rounded-md"
            value={formData.priority}
            onChange={(e) => setFormData(prev => ({ ...prev, priority: e.target.value as MaintenanceRecord['priority'] }))}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div className="flex items-center space-x-2 pt-6">
          <input
            type="checkbox"
            id="warranty"
            checked={formData.warranty}
            onChange={(e) => setFormData(prev => ({ ...prev, warranty: e.target.checked }))}
          />
          <Label htmlFor="warranty">Under Warranty</Label>
        </div>
      </div>

      <div>
        <Label>Description/Notes</Label>
        <Textarea
          value={formData.description}
          onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
          placeholder="Details about the service performed..."
        />
      </div>

      <Button type="submit" className="w-full">
        {record ? 'Update Record' : 'Add Record'}
      </Button>
    </form>
  )
}