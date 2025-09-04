"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
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
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  FileText,
  Plus,
  Search,
  Filter,
  Calendar,
  Building,
  MapPin,
  DollarSign,
  ExternalLink,
  Edit,
  Trash2
} from "lucide-react"

interface JobApplication {
  id: string
  company: string
  position: string
  location: string
  salary: string
  status: 'applied' | 'phone-screen' | 'interview' | 'offer' | 'rejected' | 'withdrawn'
  applicationDate: string
  source: string
  jobUrl?: string
  notes: string
  lastUpdated: string
}

const statusColors = {
  applied: "bg-blue-100 text-blue-800 border-blue-200",
  "phone-screen": "bg-yellow-100 text-yellow-800 border-yellow-200",
  interview: "bg-purple-100 text-purple-800 border-purple-200",
  offer: "bg-green-100 text-green-800 border-green-200",
  rejected: "bg-red-100 text-red-800 border-red-200",
  withdrawn: "bg-gray-100 text-gray-800 border-gray-200"
}

const statusLabels = {
  applied: "Applied",
  "phone-screen": "Phone Screen",
  interview: "Interview",
  offer: "Offer",
  rejected: "Rejected",
  withdrawn: "Withdrawn"
}

export function ApplicationTracker() {
  const [applications, setApplications] = useState<JobApplication[]>([
    {
      id: "1",
      company: "TechCorp",
      position: "Senior Frontend Developer",
      location: "San Francisco, CA",
      salary: "$120,000 - $160,000",
      status: "interview",
      applicationDate: "2024-08-15",
      source: "LinkedIn",
      jobUrl: "https://linkedin.com/jobs/123456",
      notes: "Good culture fit, technical interview scheduled for next week",
      lastUpdated: "2024-08-20"
    },
    {
      id: "2",
      company: "StartupX",
      position: "Full Stack Engineer",
      location: "Remote",
      salary: "$100,000 - $130,000",
      status: "phone-screen",
      applicationDate: "2024-08-18",
      source: "Company Website",
      notes: "Exciting product, waiting for recruiter call",
      lastUpdated: "2024-08-19"
    },
    {
      id: "3",
      company: "BigTech Inc",
      position: "Software Engineer II",
      location: "Seattle, WA",
      salary: "$140,000 - $180,000",
      status: "applied",
      applicationDate: "2024-08-22",
      source: "Referral",
      notes: "Applied through internal referral from John",
      lastUpdated: "2024-08-22"
    }
  ])

  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [showAddDialog, setShowAddDialog] = useState(false)
  const [editingApplication, setEditingApplication] = useState<JobApplication | null>(null)
  
  const [formData, setFormData] = useState({
    company: "",
    position: "",
    location: "",
    salary: "",
    status: "applied" as JobApplication['status'],
    applicationDate: new Date().toISOString().split('T')[0],
    source: "",
    jobUrl: "",
    notes: ""
  })

  const filteredApplications = applications.filter(app => {
    const matchesSearch = 
      app.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.location.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesStatus = statusFilter === "all" || app.status === statusFilter
    
    return matchesSearch && matchesStatus
  })

  const handleSubmit = () => {
    if (!formData.company || !formData.position) return

    const newApplication: JobApplication = {
      id: Date.now().toString(),
      ...formData,
      lastUpdated: new Date().toISOString().split('T')[0]
    }

    if (editingApplication) {
      setApplications(prev => prev.map(app => 
        app.id === editingApplication.id ? { ...newApplication, id: editingApplication.id } : app
      ))
    } else {
      setApplications(prev => [...prev, newApplication])
    }

    resetForm()
    setShowAddDialog(false)
    setEditingApplication(null)
  }

  const resetForm = () => {
    setFormData({
      company: "",
      position: "",
      location: "",
      salary: "",
      status: "applied",
      applicationDate: new Date().toISOString().split('T')[0],
      source: "",
      jobUrl: "",
      notes: ""
    })
  }

  const handleEdit = (app: JobApplication) => {
    setFormData({
      company: app.company,
      position: app.position,
      location: app.location,
      salary: app.salary,
      status: app.status,
      applicationDate: app.applicationDate,
      source: app.source,
      jobUrl: app.jobUrl || "",
      notes: app.notes
    })
    setEditingApplication(app)
    setShowAddDialog(true)
  }

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this application?")) {
      setApplications(prev => prev.filter(app => app.id !== id))
    }
  }

  const getStatusStats = () => {
    const stats = applications.reduce((acc, app) => {
      acc[app.status] = (acc[app.status] || 0) + 1
      return acc
    }, {} as Record<string, number>)
    
    return stats
  }

  const statusStats = getStatusStats()

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold flex items-center">
            <FileText className="mr-2 h-8 w-8" />
            Application Tracker
          </h1>
          <p className="text-muted-foreground">
            Track and manage all your job applications in one place
          </p>
        </div>
        
        <Dialog open={showAddDialog} onOpenChange={setShowAddDialog}>
          <DialogTrigger asChild>
            <Button onClick={() => setEditingApplication(null)}>
              <Plus className="mr-2 h-4 w-4" />
              Add Application
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {editingApplication ? "Edit Application" : "Add New Application"}
              </DialogTitle>
              <DialogDescription>
                {editingApplication 
                  ? "Update the details of this job application"
                  : "Record details about your new job application"
                }
              </DialogDescription>
            </DialogHeader>
            
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company">Company*</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                    placeholder="e.g. TechCorp"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="position">Position*</Label>
                  <Input
                    id="position"
                    value={formData.position}
                    onChange={(e) => setFormData(prev => ({ ...prev, position: e.target.value }))}
                    placeholder="e.g. Senior Developer"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                    placeholder="e.g. San Francisco, CA or Remote"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="salary">Salary Range</Label>
                  <Input
                    id="salary"
                    value={formData.salary}
                    onChange={(e) => setFormData(prev => ({ ...prev, salary: e.target.value }))}
                    placeholder="e.g. $100,000 - $130,000"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="status">Status</Label>
                  <Select value={formData.status} onValueChange={(value) => setFormData(prev => ({ ...prev, status: value as JobApplication['status'] }))}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="applied">Applied</SelectItem>
                      <SelectItem value="phone-screen">Phone Screen</SelectItem>
                      <SelectItem value="interview">Interview</SelectItem>
                      <SelectItem value="offer">Offer</SelectItem>
                      <SelectItem value="rejected">Rejected</SelectItem>
                      <SelectItem value="withdrawn">Withdrawn</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="applicationDate">Application Date</Label>
                  <Input
                    id="applicationDate"
                    type="date"
                    value={formData.applicationDate}
                    onChange={(e) => setFormData(prev => ({ ...prev, applicationDate: e.target.value }))}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="source">Source</Label>
                  <Input
                    id="source"
                    value={formData.source}
                    onChange={(e) => setFormData(prev => ({ ...prev, source: e.target.value }))}
                    placeholder="e.g. LinkedIn, Company Website, Referral"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="jobUrl">Job URL</Label>
                  <Input
                    id="jobUrl"
                    type="url"
                    value={formData.jobUrl}
                    onChange={(e) => setFormData(prev => ({ ...prev, jobUrl: e.target.value }))}
                    placeholder="https://..."
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="notes">Notes</Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                  placeholder="Additional notes about this application..."
                  className="min-h-[80px]"
                />
              </div>
            </div>
            
            <div className="flex gap-3">
              <Button onClick={handleSubmit} disabled={!formData.company || !formData.position}>
                {editingApplication ? "Update Application" : "Add Application"}
              </Button>
              <Button variant="outline" onClick={() => {
                setShowAddDialog(false)
                setEditingApplication(null)
                resetForm()
              }}>
                Cancel
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Status Overview */}
      <div className="grid gap-4 md:grid-cols-6">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Total</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{applications.length}</div>
          </CardContent>
        </Card>
        
        {Object.entries(statusLabels).map(([status, label]) => (
          <Card key={status}>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium">{label}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{statusStats[status] || 0}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Search and Filter */}
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search companies, positions, or locations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-48">
            <Filter className="mr-2 h-4 w-4" />
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            {Object.entries(statusLabels).map(([status, label]) => (
              <SelectItem key={status} value={status}>{label}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Applications Table */}
      <Card>
        <CardHeader>
          <CardTitle>Applications ({filteredApplications.length})</CardTitle>
          <CardDescription>
            Your job application history and current status
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Company / Position</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Salary</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Applied</TableHead>
                <TableHead>Source</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredApplications.map((app) => (
                <TableRow key={app.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium flex items-center">
                        <Building className="mr-2 h-4 w-4 text-muted-foreground" />
                        {app.company}
                        {app.jobUrl && (
                          <a
                            href={app.jobUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-2 text-muted-foreground hover:text-foreground"
                          >
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        )}
                      </div>
                      <div className="text-sm text-muted-foreground">{app.position}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <MapPin className="mr-1 h-3 w-3 text-muted-foreground" />
                      {app.location}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <DollarSign className="mr-1 h-3 w-3 text-muted-foreground" />
                      {app.salary}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={statusColors[app.status]}>
                      {statusLabels[app.status]}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Calendar className="mr-1 h-3 w-3 text-muted-foreground" />
                      {new Date(app.applicationDate).toLocaleDateString()}
                    </div>
                  </TableCell>
                  <TableCell>{app.source}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleEdit(app)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(app.id)}
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {filteredApplications.length === 0 && (
            <div className="text-center py-8">
              <FileText className="mx-auto h-12 w-12 text-muted-foreground" />
              <h3 className="mt-4 text-lg font-semibold">No applications found</h3>
              <p className="text-muted-foreground">
                {searchTerm || statusFilter !== "all"
                  ? "Try adjusting your search or filter criteria"
                  : "Start tracking your job applications by adding your first entry"
                }
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}