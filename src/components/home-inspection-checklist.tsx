"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
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
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Progress } from "@/components/ui/progress"
import {
  CheckSquare,
  Plus,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Clock,
  FileText,
  Home,
  Zap,
  Droplets,
  Wind,
  Flame,
  Shield
} from "lucide-react"

interface InspectionItem {
  id: string
  name: string
  category: string
  status: 'not-checked' | 'pass' | 'fail' | 'needs-attention'
  notes: string
  priority: 'low' | 'medium' | 'high' | 'critical'
  estimatedCost?: number
}

interface InspectionReport {
  id: string
  propertyAddress: string
  inspectionDate: Date
  inspectorName: string
  inspectorCompany: string
  items: InspectionItem[]
  overallStatus: 'in-progress' | 'completed' | 'issues-found'
  totalIssues: number
  criticalIssues: number
  estimatedRepairCosts: number
  notes: string
}

const defaultInspectionItems: Omit<InspectionItem, 'id' | 'status' | 'notes' | 'estimatedCost'>[] = [
  // Exterior
  { name: 'Roof condition', category: 'Exterior', priority: 'high' },
  { name: 'Gutters and downspouts', category: 'Exterior', priority: 'medium' },
  { name: 'Exterior walls and siding', category: 'Exterior', priority: 'medium' },
  { name: 'Windows and doors', category: 'Exterior', priority: 'medium' },
  { name: 'Foundation', category: 'Exterior', priority: 'high' },
  { name: 'Driveway and walkways', category: 'Exterior', priority: 'low' },
  { name: 'Fence and gates', category: 'Exterior', priority: 'low' },
  
  // Interior
  { name: 'Flooring condition', category: 'Interior', priority: 'medium' },
  { name: 'Wall and ceiling condition', category: 'Interior', priority: 'medium' },
  { name: 'Interior doors and hardware', category: 'Interior', priority: 'low' },
  { name: 'Stairs and railings', category: 'Interior', priority: 'medium' },
  { name: 'Fireplace and chimney', category: 'Interior', priority: 'medium' },
  { name: 'Built-in storage', category: 'Interior', priority: 'low' },
  
  // Electrical
  { name: 'Electrical panel', category: 'Electrical', priority: 'high' },
  { name: 'Wiring condition', category: 'Electrical', priority: 'high' },
  { name: 'Outlets and switches', category: 'Electrical', priority: 'medium' },
  { name: 'Light fixtures', category: 'Electrical', priority: 'low' },
  { name: 'GFCI outlets', category: 'Electrical', priority: 'high' },
  
  // Plumbing
  { name: 'Water pressure', category: 'Plumbing', priority: 'medium' },
  { name: 'Plumbing fixtures', category: 'Plumbing', priority: 'medium' },
  { name: 'Water heater', category: 'Plumbing', priority: 'high' },
  { name: 'Pipes and connections', category: 'Plumbing', priority: 'high' },
  { name: 'Drainage', category: 'Plumbing', priority: 'medium' },
  
  // HVAC
  { name: 'Heating system', category: 'HVAC', priority: 'high' },
  { name: 'Air conditioning', category: 'HVAC', priority: 'medium' },
  { name: 'Ductwork', category: 'HVAC', priority: 'medium' },
  { name: 'Ventilation', category: 'HVAC', priority: 'medium' },
  { name: 'Air filters', category: 'HVAC', priority: 'low' },
  
  // Safety
  { name: 'Smoke detectors', category: 'Safety', priority: 'critical' },
  { name: 'Carbon monoxide detectors', category: 'Safety', priority: 'critical' },
  { name: 'Security system', category: 'Safety', priority: 'low' },
  { name: 'Garage door safety', category: 'Safety', priority: 'medium' },
]

export function HomeInspectionChecklist() {
  const [inspectionReports, setInspectionReports] = useState<InspectionReport[]>([])
  const [currentReport, setCurrentReport] = useState<InspectionReport | null>(null)
  const [isNewReportOpen, setIsNewReportOpen] = useState(false)
  const [newReportData, setNewReportData] = useState({
    propertyAddress: '',
    inspectionDate: new Date(),
    inspectorName: '',
    inspectorCompany: '',
    notes: ''
  })

  const createNewReport = () => {
    const items: InspectionItem[] = defaultInspectionItems.map((item, index) => ({
      ...item,
      id: `item-${index}`,
      status: 'not-checked' as const,
      notes: '',
    }))

    const newReport: InspectionReport = {
      id: Date.now().toString(),
      ...newReportData,
      items,
      overallStatus: 'in-progress',
      totalIssues: 0,
      criticalIssues: 0,
      estimatedRepairCosts: 0
    }

    setInspectionReports([...inspectionReports, newReport])
    setCurrentReport(newReport)
    setNewReportData({
      propertyAddress: '',
      inspectionDate: new Date(),
      inspectorName: '',
      inspectorCompany: '',
      notes: ''
    })
    setIsNewReportOpen(false)
  }

  const updateInspectionItem = (reportId: string, itemId: string, updates: Partial<InspectionItem>) => {
    setInspectionReports(reports => 
      reports.map(report => {
        if (report.id !== reportId) return report
        
        const updatedItems = report.items.map(item => 
          item.id === itemId ? { ...item, ...updates } : item
        )
        
        const totalIssues = updatedItems.filter(item => 
          item.status === 'fail' || item.status === 'needs-attention'
        ).length
        
        const criticalIssues = updatedItems.filter(item => 
          (item.status === 'fail' || item.status === 'needs-attention') && 
          item.priority === 'critical'
        ).length
        
        const estimatedRepairCosts = updatedItems.reduce((sum, item) => 
          sum + (item.estimatedCost || 0), 0
        )
        
        const overallStatus: InspectionReport['overallStatus'] = 
          totalIssues > 0 ? 'issues-found' : 'completed'
        
        const updatedReport = {
          ...report,
          items: updatedItems,
          totalIssues,
          criticalIssues,
          estimatedRepairCosts,
          overallStatus
        }
        
        if (currentReport?.id === reportId) {
          setCurrentReport(updatedReport)
        }
        
        return updatedReport
      })
    )
  }

  const getStatusIcon = (status: InspectionItem['status']) => {
    switch (status) {
      case 'pass': return <CheckCircle className="h-4 w-4 text-green-600" />
      case 'fail': return <XCircle className="h-4 w-4 text-red-600" />
      case 'needs-attention': return <AlertTriangle className="h-4 w-4 text-yellow-600" />
      default: return <Clock className="h-4 w-4 text-gray-400" />
    }
  }

  const getPriorityColor = (priority: InspectionItem['priority']) => {
    switch (priority) {
      case 'critical': return 'bg-red-100 text-red-800 border-red-200'
      case 'high': return 'bg-orange-100 text-orange-800 border-orange-200'
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'low': return 'bg-blue-100 text-blue-800 border-blue-200'
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Exterior': return <Home className="h-5 w-5" />
      case 'Interior': return <Home className="h-5 w-5" />
      case 'Electrical': return <Zap className="h-5 w-5" />
      case 'Plumbing': return <Droplets className="h-5 w-5" />
      case 'HVAC': return <Wind className="h-5 w-5" />
      case 'Safety': return <Shield className="h-5 w-5" />
      default: return <FileText className="h-5 w-5" />
    }
  }

  const groupedItems = currentReport?.items.reduce((groups, item) => {
    const category = item.category
    if (!groups[category]) {
      groups[category] = []
    }
    groups[category].push(item)
    return groups
  }, {} as Record<string, InspectionItem[]>) || {}

  const getProgress = (report: InspectionReport) => {
    const checkedItems = report.items.filter(item => item.status !== 'not-checked').length
    return (checkedItems / report.items.length) * 100
  }

  if (!currentReport && inspectionReports.length === 0) {
    return (
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold flex items-center">
              <CheckSquare className="mr-2 h-8 w-8" />
              Home Inspection
            </h1>
            <p className="text-muted-foreground">
              Create and manage home inspection checklists
            </p>
          </div>
          <Dialog open={isNewReportOpen} onOpenChange={setIsNewReportOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                New Inspection
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>New Home Inspection</DialogTitle>
                <DialogDescription>
                  Create a new inspection checklist for a property
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div>
                  <Label htmlFor="address">Property Address</Label>
                  <Input
                    id="address"
                    value={newReportData.propertyAddress}
                    onChange={(e) => setNewReportData({ ...newReportData, propertyAddress: e.target.value })}
                    placeholder="123 Main Street"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="inspectorName">Inspector Name</Label>
                    <Input
                      id="inspectorName"
                      value={newReportData.inspectorName}
                      onChange={(e) => setNewReportData({ ...newReportData, inspectorName: e.target.value })}
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <Label htmlFor="inspectorCompany">Company</Label>
                    <Input
                      id="inspectorCompany"
                      value={newReportData.inspectorCompany}
                      onChange={(e) => setNewReportData({ ...newReportData, inspectorCompany: e.target.value })}
                      placeholder="ABC Inspections"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="inspectionDate">Inspection Date</Label>
                  <Input
                    id="inspectionDate"
                    type="date"
                    value={newReportData.inspectionDate.toISOString().split('T')[0]}
                    onChange={(e) => setNewReportData({ ...newReportData, inspectionDate: new Date(e.target.value) })}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button onClick={createNewReport}>Create Inspection</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        {/* Empty State */}
        <Card>
          <CardContent className="text-center py-12">
            <CheckSquare className="mx-auto h-12 w-12 text-muted-foreground" />
            <h3 className="mt-4 text-lg font-semibold">No inspections yet</h3>
            <p className="text-muted-foreground">
              Create your first home inspection checklist to get started
            </p>
            <Button className="mt-4" onClick={() => setIsNewReportOpen(true)}>
              <Plus className="mr-2 h-4 w-4" />
              New Inspection
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold flex items-center">
            <CheckSquare className="mr-2 h-8 w-8" />
            Home Inspection
          </h1>
          <p className="text-muted-foreground">
            Manage your home inspection checklists
          </p>
        </div>
        <div className="flex space-x-2">
          {inspectionReports.length > 0 && (
            <Select
              value={currentReport?.id}
              onValueChange={(value) => setCurrentReport(inspectionReports.find(r => r.id === value) || null)}
            >
              <SelectTrigger className="w-64">
                <SelectValue placeholder="Select inspection" />
              </SelectTrigger>
              <SelectContent>
                {inspectionReports.map(report => (
                  <SelectItem key={report.id} value={report.id}>
                    {report.propertyAddress}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
          <Dialog open={isNewReportOpen} onOpenChange={setIsNewReportOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                New Inspection
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>New Home Inspection</DialogTitle>
                <DialogDescription>
                  Create a new inspection checklist for a property
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div>
                  <Label htmlFor="address">Property Address</Label>
                  <Input
                    id="address"
                    value={newReportData.propertyAddress}
                    onChange={(e) => setNewReportData({ ...newReportData, propertyAddress: e.target.value })}
                    placeholder="123 Main Street"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="inspectorName">Inspector Name</Label>
                    <Input
                      id="inspectorName"
                      value={newReportData.inspectorName}
                      onChange={(e) => setNewReportData({ ...newReportData, inspectorName: e.target.value })}
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <Label htmlFor="inspectorCompany">Company</Label>
                    <Input
                      id="inspectorCompany"
                      value={newReportData.inspectorCompany}
                      onChange={(e) => setNewReportData({ ...newReportData, inspectorCompany: e.target.value })}
                      placeholder="ABC Inspections"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="inspectionDate">Inspection Date</Label>
                  <Input
                    id="inspectionDate"
                    type="date"
                    value={newReportData.inspectionDate.toISOString().split('T')[0]}
                    onChange={(e) => setNewReportData({ ...newReportData, inspectionDate: new Date(e.target.value) })}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button onClick={createNewReport}>Create Inspection</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {currentReport && (
        <>
          {/* Inspection Overview */}
          <Card>
            <CardHeader>
              <CardTitle>{currentReport.propertyAddress}</CardTitle>
              <CardDescription>
                Inspected on {currentReport.inspectionDate.toLocaleDateString()} by {currentReport.inspectorName}
                {currentReport.inspectorCompany && ` (${currentReport.inspectorCompany})`}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">{getProgress(currentReport).toFixed(0)}%</div>
                  <p className="text-sm text-muted-foreground">Complete</p>
                  <Progress value={getProgress(currentReport)} className="mt-2" />
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">{currentReport.totalIssues}</div>
                  <p className="text-sm text-muted-foreground">Total Issues</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-800">{currentReport.criticalIssues}</div>
                  <p className="text-sm text-muted-foreground">Critical Issues</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">
                    ${currentReport.estimatedRepairCosts.toLocaleString()}
                  </div>
                  <p className="text-sm text-muted-foreground">Est. Repairs</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Inspection Checklist */}
          <Card>
            <CardHeader>
              <CardTitle>Inspection Checklist</CardTitle>
              <CardDescription>
                Go through each category and mark the status of each item
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="multiple" className="space-y-4">
                {Object.entries(groupedItems).map(([category, items]) => {
                  const categoryProgress = (items.filter(item => item.status !== 'not-checked').length / items.length) * 100
                  const categoryIssues = items.filter(item => item.status === 'fail' || item.status === 'needs-attention').length
                  
                  return (
                    <AccordionItem key={category} value={category} className="border rounded-lg px-4">
                      <AccordionTrigger className="hover:no-underline">
                        <div className="flex items-center justify-between w-full mr-4">
                          <div className="flex items-center space-x-3">
                            {getCategoryIcon(category)}
                            <span className="font-medium">{category}</span>
                            {categoryIssues > 0 && (
                              <Badge variant="destructive" className="text-xs">
                                {categoryIssues} issues
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="text-sm text-muted-foreground">
                              {categoryProgress.toFixed(0)}% complete
                            </div>
                            <div className="w-24">
                              <Progress value={categoryProgress} className="h-2" />
                            </div>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="space-y-4">
                        {items.map(item => (
                          <div key={item.id} className="border rounded-lg p-4 space-y-3">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-3">
                                {getStatusIcon(item.status)}
                                <span className="font-medium">{item.name}</span>
                                <Badge className={getPriorityColor(item.priority)}>
                                  {item.priority}
                                </Badge>
                              </div>
                              <Select
                                value={item.status}
                                onValueChange={(value) => updateInspectionItem(
                                  currentReport.id, 
                                  item.id, 
                                  { status: value as InspectionItem['status'] }
                                )}
                              >
                                <SelectTrigger className="w-40">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="not-checked">Not Checked</SelectItem>
                                  <SelectItem value="pass">Pass</SelectItem>
                                  <SelectItem value="needs-attention">Needs Attention</SelectItem>
                                  <SelectItem value="fail">Fail</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            
                            {(item.status === 'fail' || item.status === 'needs-attention') && (
                              <div className="grid gap-3">
                                <div>
                                  <Label htmlFor={`notes-${item.id}`} className="text-sm">Notes</Label>
                                  <Textarea
                                    id={`notes-${item.id}`}
                                    value={item.notes}
                                    onChange={(e) => updateInspectionItem(
                                      currentReport.id, 
                                      item.id, 
                                      { notes: e.target.value }
                                    )}
                                    placeholder="Describe the issue..."
                                    className="min-h-[80px]"
                                  />
                                </div>
                                <div>
                                  <Label htmlFor={`cost-${item.id}`} className="text-sm">Estimated Repair Cost</Label>
                                  <Input
                                    id={`cost-${item.id}`}
                                    type="number"
                                    value={item.estimatedCost || ''}
                                    onChange={(e) => updateInspectionItem(
                                      currentReport.id, 
                                      item.id, 
                                      { estimatedCost: parseInt(e.target.value) || 0 }
                                    )}
                                    placeholder="0"
                                  />
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  )
                })}
              </Accordion>
            </CardContent>
          </Card>

          {/* Summary Report */}
          {currentReport.totalIssues > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-red-600">
                  <AlertTriangle className="mr-2 h-5 w-5" />
                  Issues Found
                </CardTitle>
                <CardDescription>
                  Items that need attention or have failed inspection
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {currentReport.items
                    .filter(item => item.status === 'fail' || item.status === 'needs-attention')
                    .map(item => (
                      <div key={item.id} className="border rounded-lg p-4">
                        <div className="flex items-start justify-between">
                          <div className="space-y-1">
                            <div className="flex items-center space-x-2">
                              {getStatusIcon(item.status)}
                              <span className="font-medium">{item.name}</span>
                              <Badge className={getPriorityColor(item.priority)}>
                                {item.priority}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">{item.category}</p>
                            {item.notes && (
                              <p className="text-sm">{item.notes}</p>
                            )}
                            {item.estimatedCost && item.estimatedCost > 0 && (
                              <p className="text-sm font-medium text-green-600">
                                Estimated repair cost: ${item.estimatedCost.toLocaleString()}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          )}
        </>
      )}
    </div>
  )
}