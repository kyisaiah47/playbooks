"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Checkbox } from "@/components/ui/checkbox"
import { Search, Calendar as CalendarIcon, FileText, AlertTriangle, CheckCircle2, Clock, Home, Shield, Zap, Droplets, Plus, Download, Eye } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

interface Inspection {
  id: number
  propertyAddress: string
  inspectionType: 'general' | 'pest' | 'structural' | 'electrical' | 'plumbing' | 'hvac' | 'roof' | 'environmental'
  inspectorName: string
  inspectorCompany: string
  contactInfo: string
  scheduledDate: Date
  status: 'scheduled' | 'in-progress' | 'completed' | 'cancelled'
  cost: number
  duration: string
  reportUrl?: string
  summary: string
  issues: Issue[]
  recommendations: string[]
}

interface Issue {
  id: number
  category: 'major' | 'minor' | 'safety' | 'informational'
  area: string
  description: string
  severity: 'low' | 'medium' | 'high' | 'critical'
  estimatedCost?: number
  urgent: boolean
  photos?: string[]
}

export function Inspections() {
  const [inspections, setInspections] = useState<Inspection[]>([
    {
      id: 1,
      propertyAddress: "456 Maple Avenue, Springfield",
      inspectionType: 'general',
      inspectorName: "Mike Rodriguez",
      inspectorCompany: "ProInspect Services",
      contactInfo: "mike@proinspect.com - (555) 234-5678",
      scheduledDate: new Date('2024-05-15'),
      status: 'completed',
      cost: 450,
      duration: "3-4 hours",
      reportUrl: "#",
      summary: "Overall good condition with minor issues identified. No major structural concerns.",
      issues: [
        {
          id: 1,
          category: 'minor',
          area: 'Kitchen',
          description: 'Loose kitchen faucet, minor water stains under sink',
          severity: 'low',
          estimatedCost: 150,
          urgent: false
        },
        {
          id: 2,
          category: 'safety',
          area: 'Electrical Panel',
          description: 'Missing GFCI outlets in bathrooms - code violation',
          severity: 'medium',
          estimatedCost: 300,
          urgent: true
        },
        {
          id: 3,
          category: 'informational',
          area: 'HVAC',
          description: 'Air filter needs replacement, system due for annual service',
          severity: 'low',
          estimatedCost: 250,
          urgent: false
        }
      ],
      recommendations: [
        "Install GFCI outlets in all bathrooms within 30 days",
        "Schedule HVAC maintenance before winter",
        "Consider upgrading kitchen faucet during move-in"
      ]
    },
    {
      id: 2,
      propertyAddress: "789 Pine Road, Springfield",
      inspectionType: 'pest',
      inspectorName: "Jennifer Chen",
      inspectorCompany: "Guardian Pest Control",
      contactInfo: "jennifer@guardian.com - (555) 876-5432",
      scheduledDate: new Date('2024-05-20'),
      status: 'scheduled',
      cost: 200,
      duration: "1-2 hours",
      summary: "",
      issues: [],
      recommendations: []
    }
  ])

  const [isAddInspectionOpen, setIsAddInspectionOpen] = useState(false)
  const [selectedInspection, setSelectedInspection] = useState<Inspection | null>(null)
  const [newInspection, setNewInspection] = useState<Partial<Inspection>>({})

  const handleAddInspection = () => {
    if (!newInspection.propertyAddress || !newInspection.inspectionType || !newInspection.scheduledDate) return

    const inspection: Inspection = {
      id: Math.max(...inspections.map(i => i.id), 0) + 1,
      propertyAddress: newInspection.propertyAddress,
      inspectionType: newInspection.inspectionType as any,
      inspectorName: newInspection.inspectorName || "",
      inspectorCompany: newInspection.inspectorCompany || "",
      contactInfo: newInspection.contactInfo || "",
      scheduledDate: newInspection.scheduledDate,
      status: 'scheduled',
      cost: newInspection.cost || 0,
      duration: newInspection.duration || "2-3 hours",
      summary: "",
      issues: [],
      recommendations: []
    }

    setInspections([...inspections, inspection])
    setNewInspection({})
    setIsAddInspectionOpen(false)
  }

  const handleUpdateStatus = (inspectionId: number, status: Inspection['status']) => {
    setInspections(inspections.map(i => 
      i.id === inspectionId ? { ...i, status } : i
    ))
  }

  const completedInspections = inspections.filter(i => i.status === 'completed')
  const scheduledInspections = inspections.filter(i => i.status === 'scheduled')
  const allIssues = completedInspections.flatMap(i => i.issues)
  const criticalIssues = allIssues.filter(issue => issue.severity === 'critical' || issue.urgent)
  const totalEstimatedCosts = allIssues.reduce((sum, issue) => sum + (issue.estimatedCost || 0), 0)

  const inspectionTypes = [
    { value: 'general', label: 'General Home Inspection', icon: Home },
    { value: 'pest', label: 'Pest Inspection', icon: Search },
    { value: 'structural', label: 'Structural Inspection', icon: Shield },
    { value: 'electrical', label: 'Electrical Inspection', icon: Zap },
    { value: 'plumbing', label: 'Plumbing Inspection', icon: Droplets },
    { value: 'hvac', label: 'HVAC Inspection', icon: Shield },
    { value: 'roof', label: 'Roof Inspection', icon: Home },
    { value: 'environmental', label: 'Environmental (Mold/Asbestos)', icon: AlertTriangle }
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Inspections</h1>
          <p className="text-muted-foreground">Schedule and track property inspections</p>
        </div>
        <Button onClick={() => setIsAddInspectionOpen(true)} className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Schedule Inspection
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Inspections</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{inspections.length}</div>
            <p className="text-xs text-muted-foreground">
              {completedInspections.length} completed
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Issues Found</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{allIssues.length}</div>
            <p className="text-xs text-muted-foreground">
              {criticalIssues.length} critical/urgent
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Estimated Repairs</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalEstimatedCosts.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              Repair cost estimates
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{scheduledInspections.length}</div>
            <p className="text-xs text-muted-foreground">
              Scheduled inspections
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Scheduled Inspections */}
      {scheduledInspections.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Scheduled Inspections</CardTitle>
            <CardDescription>Upcoming property inspections</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {scheduledInspections.map((inspection) => (
                <div key={inspection.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="font-medium">{inspection.propertyAddress}</h3>
                      <Badge variant="outline">
                        {inspectionTypes.find(t => t.value === inspection.inspectionType)?.label}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {format(inspection.scheduledDate, "PPP")} • {inspection.duration}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {inspection.inspectorName} - {inspection.inspectorCompany}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className="text-xs">
                      ${inspection.cost}
                    </Badge>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleUpdateStatus(inspection.id, 'completed')}
                    >
                      Mark Complete
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Completed Inspections */}
      <Card>
        <CardHeader>
          <CardTitle>Inspection Reports</CardTitle>
          <CardDescription>Completed inspections and findings</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {completedInspections.map((inspection) => (
              <div key={inspection.id} className="border rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold text-lg">{inspection.propertyAddress}</h3>
                    <p className="text-muted-foreground">
                      {inspectionTypes.find(t => t.value === inspection.inspectionType)?.label} • 
                      {format(inspection.scheduledDate, "MMM dd, yyyy")}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {inspection.inspectorName} - {inspection.inspectorCompany}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <Badge variant="secondary">
                      <CheckCircle2 className="w-3 h-3 mr-1" />
                      Completed
                    </Badge>
                    {inspection.reportUrl && (
                      <Button size="sm" variant="outline" asChild>
                        <a href={inspection.reportUrl} target="_blank" rel="noopener noreferrer">
                          <Download className="h-4 w-4 mr-1" />
                          Report
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                {inspection.summary && (
                  <div className="mb-4 p-3 bg-muted rounded-lg">
                    <h4 className="font-medium mb-2">Summary</h4>
                    <p className="text-sm">{inspection.summary}</p>
                  </div>
                )}

                {inspection.issues.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-medium mb-3">Issues Found ({inspection.issues.length})</h4>
                    <div className="space-y-3">
                      {inspection.issues.map((issue) => (
                        <div key={issue.id} className={`p-3 rounded-lg border ${
                          issue.severity === 'critical' ? 'border-destructive/20 bg-destructive/5' :
                          issue.severity === 'high' ? 'border-orange-200 bg-orange-50' :
                          issue.severity === 'medium' ? 'border-orange-200 bg-orange-50/50' :
                          'border-blue-100 bg-blue-100 dark:bg-blue-950/20'
                        }`}>
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-1">
                                <span className="font-medium">{issue.area}</span>
                                <Badge variant={
                                  issue.severity === 'critical' ? 'destructive' :
                                  issue.severity === 'high' ? 'destructive' :
                                  issue.severity === 'medium' ? 'default' :
                                  'secondary'
                                } className="text-xs">
                                  {issue.severity}
                                </Badge>
                                {issue.urgent && (
                                  <Badge variant="destructive" className="text-xs">
                                    Urgent
                                  </Badge>
                                )}
                                <Badge variant="outline" className="text-xs">
                                  {issue.category}
                                </Badge>
                              </div>
                              <p className="text-sm text-muted-foreground">{issue.description}</p>
                            </div>
                            {issue.estimatedCost && (
                              <div className="text-right">
                                <div className="font-medium">${issue.estimatedCost}</div>
                                <div className="text-xs text-muted-foreground">est. cost</div>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {inspection.recommendations.length > 0 && (
                  <div>
                    <h4 className="font-medium mb-2">Recommendations</h4>
                    <ul className="space-y-1">
                      {inspection.recommendations.map((rec, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start space-x-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Add Inspection Dialog */}
      <Dialog open={isAddInspectionOpen} onOpenChange={setIsAddInspectionOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Schedule Inspection</DialogTitle>
            <DialogDescription>Schedule a new property inspection</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">Property Address</label>
              <Input
                placeholder="123 Main Street, City"
                value={newInspection.propertyAddress || ""}
                onChange={(e) => setNewInspection({...newInspection, propertyAddress: e.target.value})}
              />
            </div>
            <div>
              <label className="text-sm font-medium">Inspection Type</label>
              <Select onValueChange={(value) => setNewInspection({...newInspection, inspectionType: value as any})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select inspection type" />
                </SelectTrigger>
                <SelectContent>
                  {inspectionTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium">Scheduled Date</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !newInspection.scheduledDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {newInspection.scheduledDate ? format(newInspection.scheduledDate, "PPP") : "Pick a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={newInspection.scheduledDate}
                    onSelect={(date) => setNewInspection({...newInspection, scheduledDate: date})}
                    disabled={(date) => date < new Date()}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Inspector Name</label>
                <Input
                  placeholder="John Smith"
                  value={newInspection.inspectorName || ""}
                  onChange={(e) => setNewInspection({...newInspection, inspectorName: e.target.value})}
                />
              </div>
              <div>
                <label className="text-sm font-medium">Company</label>
                <Input
                  placeholder="Inspection Company"
                  value={newInspection.inspectorCompany || ""}
                  onChange={(e) => setNewInspection({...newInspection, inspectorCompany: e.target.value})}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Cost</label>
                <Input
                  type="number"
                  placeholder="450"
                  value={newInspection.cost || ""}
                  onChange={(e) => setNewInspection({...newInspection, cost: Number(e.target.value)})}
                />
              </div>
              <div>
                <label className="text-sm font-medium">Duration</label>
                <Input
                  placeholder="2-3 hours"
                  value={newInspection.duration || ""}
                  onChange={(e) => setNewInspection({...newInspection, duration: e.target.value})}
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium">Contact Information</label>
              <Input
                placeholder="Email and phone number"
                value={newInspection.contactInfo || ""}
                onChange={(e) => setNewInspection({...newInspection, contactInfo: e.target.value})}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddInspectionOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddInspection}>
              Schedule Inspection
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}