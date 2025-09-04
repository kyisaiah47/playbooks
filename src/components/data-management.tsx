"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
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
import { Label } from "@/components/ui/label"
import { 
  Database, Plus, Upload, Download, FileSpreadsheet, 
  FileText, Image, Video, Music, Archive, Search,
  Calendar, Shield, Users, MoreHorizontal, Edit, Trash2,
  CheckCircle, AlertCircle, Clock
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface Dataset {
  id: string
  name: string
  description: string
  type: 'quantitative' | 'qualitative' | 'mixed'
  format: 'csv' | 'xlsx' | 'json' | 'txt' | 'audio' | 'video' | 'image' | 'other'
  size: string
  recordCount?: number
  status: 'collecting' | 'processing' | 'analyzed' | 'archived'
  createdDate: Date
  lastModified: Date
  location: string
  backupStatus: 'backed-up' | 'pending' | 'failed'
  accessLevel: 'public' | 'restricted' | 'confidential'
  tags: string[]
  version: string
}

interface DataCollectionPlan {
  id: string
  method: string
  timeline: string
  responsible: string
  status: 'planned' | 'in-progress' | 'completed'
  description: string
}

export function DataManagement() {
  const [datasets, setDatasets] = useState<Dataset[]>([
    {
      id: '1',
      name: 'Survey Responses Q1 2024',
      description: 'Initial survey data from research participants',
      type: 'quantitative',
      format: 'csv',
      size: '2.3 MB',
      recordCount: 450,
      status: 'analyzed',
      createdDate: new Date('2024-01-15'),
      lastModified: new Date('2024-01-20'),
      location: '/data/surveys/q1_2024.csv',
      backupStatus: 'backed-up',
      accessLevel: 'confidential',
      tags: ['survey', 'participants', 'baseline'],
      version: '1.2'
    },
    {
      id: '2',
      name: 'Interview Transcripts',
      description: 'Qualitative interview data from key stakeholders',
      type: 'qualitative',
      format: 'txt',
      size: '15.7 MB',
      recordCount: 25,
      status: 'processing',
      createdDate: new Date('2024-01-10'),
      lastModified: new Date('2024-01-25'),
      location: '/data/interviews/',
      backupStatus: 'pending',
      accessLevel: 'restricted',
      tags: ['interviews', 'qualitative', 'stakeholders'],
      version: '1.0'
    }
  ])

  const [collectionPlans, setCollectionPlans] = useState<DataCollectionPlan[]>([
    {
      id: '1',
      method: 'Online Survey Distribution',
      timeline: 'Jan 15 - Feb 15, 2024',
      responsible: 'Research Team',
      status: 'completed',
      description: 'Distribute survey to target population via email and social media'
    },
    {
      id: '2',
      method: 'Semi-structured Interviews',
      timeline: 'Feb 1 - Mar 1, 2024',
      responsible: 'Primary Investigator',
      status: 'in-progress',
      description: 'Conduct 20-25 interviews with key stakeholders'
    },
    {
      id: '3',
      method: 'Focus Group Sessions',
      timeline: 'Mar 15 - Apr 15, 2024',
      responsible: 'Research Assistant',
      status: 'planned',
      description: 'Organize 3-4 focus group sessions with different participant groups'
    }
  ])

  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState<string>("all")
  const [filterType, setFilterType] = useState<string>("all")
  const [isAddDatasetDialogOpen, setIsAddDatasetDialogOpen] = useState(false)
  const [newDataset, setNewDataset] = useState<Partial<Dataset>>({
    name: '',
    description: '',
    type: 'quantitative',
    format: 'csv',
    status: 'collecting',
    accessLevel: 'restricted',
    tags: [],
    version: '1.0'
  })

  const filteredDatasets = datasets.filter(dataset => {
    const matchesSearch = dataset.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dataset.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus === "all" || dataset.status === filterStatus
    const matchesType = filterType === "all" || dataset.type === filterType
    return matchesSearch && matchesStatus && matchesType
  })

  const addDataset = () => {
    if (newDataset.name && newDataset.description) {
      const dataset: Dataset = {
        id: Date.now().toString(),
        name: newDataset.name,
        description: newDataset.description,
        type: newDataset.type || 'quantitative',
        format: newDataset.format || 'csv',
        size: '0 KB',
        status: newDataset.status || 'collecting',
        createdDate: new Date(),
        lastModified: new Date(),
        location: `/data/${newDataset.name.toLowerCase().replace(/\s+/g, '_')}`,
        backupStatus: 'pending',
        accessLevel: newDataset.accessLevel || 'restricted',
        tags: typeof newDataset.tags === 'string' ? [newDataset.tags] : (newDataset.tags || []),
        version: newDataset.version || '1.0'
      }
      setDatasets([...datasets, dataset])
      setNewDataset({
        name: '',
        description: '',
        type: 'quantitative',
        format: 'csv',
        status: 'collecting',
        accessLevel: 'restricted',
        tags: [],
        version: '1.0'
      })
      setIsAddDatasetDialogOpen(false)
    }
  }

  const getStatusColor = (status: Dataset['status']) => {
    switch (status) {
      case 'collecting': return 'secondary'
      case 'processing': return 'default'
      case 'analyzed': return 'outline'
      case 'archived': return 'outline'
      default: return 'secondary'
    }
  }

  const getAccessLevelColor = (level: Dataset['accessLevel']) => {
    switch (level) {
      case 'public': return 'outline'
      case 'restricted': return 'secondary'
      case 'confidential': return 'destructive'
      default: return 'secondary'
    }
  }

  const getPlanStatusColor = (status: DataCollectionPlan['status']) => {
    switch (status) {
      case 'planned': return 'secondary'
      case 'in-progress': return 'default'
      case 'completed': return 'outline'
      default: return 'secondary'
    }
  }

  const getFormatIcon = (format: Dataset['format']) => {
    switch (format) {
      case 'csv':
      case 'xlsx': return FileSpreadsheet
      case 'txt':
      case 'json': return FileText
      case 'audio': return Music
      case 'video': return Video
      case 'image': return Image
      default: return Archive
    }
  }

  const stats = {
    total: datasets.length,
    collecting: datasets.filter(d => d.status === 'collecting').length,
    processing: datasets.filter(d => d.status === 'processing').length,
    analyzed: datasets.filter(d => d.status === 'analyzed').length,
    totalSize: datasets.reduce((acc, d) => acc + parseFloat(d.size.replace(/[^\d.]/g, '')), 0)
  }

  const progressPercentage = stats.total > 0 ? ((stats.analyzed / stats.total) * 100) : 0

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center">
            <Database className="mr-2 h-8 w-8" />
            Data Management
          </h1>
          <p className="text-muted-foreground mt-1">
            Organize, track, and manage your research datasets
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Upload className="mr-2 h-4 w-4" />
            Upload Data
          </Button>
          <Dialog open={isAddDatasetDialogOpen} onOpenChange={setIsAddDatasetDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Dataset
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[525px]">
              <DialogHeader>
                <DialogTitle>Add New Dataset</DialogTitle>
                <DialogDescription>
                  Register a new dataset in your data management system.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="dataset-name">Dataset Name</Label>
                  <Input
                    id="dataset-name"
                    value={newDataset.name}
                    onChange={(e) => setNewDataset({...newDataset, name: e.target.value})}
                    placeholder="Enter dataset name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dataset-description">Description</Label>
                  <Textarea
                    id="dataset-description"
                    value={newDataset.description}
                    onChange={(e) => setNewDataset({...newDataset, description: e.target.value})}
                    placeholder="Describe this dataset"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="dataset-type">Data Type</Label>
                    <Select value={newDataset.type} onValueChange={(value: Dataset['type']) => setNewDataset({...newDataset, type: value})}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="quantitative">Quantitative</SelectItem>
                        <SelectItem value="qualitative">Qualitative</SelectItem>
                        <SelectItem value="mixed">Mixed Methods</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dataset-format">Format</Label>
                    <Select value={newDataset.format} onValueChange={(value: Dataset['format']) => setNewDataset({...newDataset, format: value})}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="csv">CSV</SelectItem>
                        <SelectItem value="xlsx">Excel</SelectItem>
                        <SelectItem value="json">JSON</SelectItem>
                        <SelectItem value="txt">Text</SelectItem>
                        <SelectItem value="audio">Audio</SelectItem>
                        <SelectItem value="video">Video</SelectItem>
                        <SelectItem value="image">Image</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="access-level">Access Level</Label>
                  <Select value={newDataset.accessLevel} onValueChange={(value: Dataset['accessLevel']) => setNewDataset({...newDataset, accessLevel: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="public">Public</SelectItem>
                      <SelectItem value="restricted">Restricted</SelectItem>
                      <SelectItem value="confidential">Confidential</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsAddDatasetDialogOpen(false)}>Cancel</Button>
                <Button onClick={addDataset}>Add Dataset</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Data Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Data Collection Progress</CardTitle>
          <CardDescription>Overview of your research data status</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Analysis Progress</span>
              <span>{Math.round(progressPercentage)}% Complete</span>
            </div>
            <Progress value={progressPercentage} className="h-3" />
          </div>
          <div className="grid grid-cols-5 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold">{stats.total}</div>
              <div className="text-xs text-muted-foreground">Total Datasets</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-muted-foreground">{stats.collecting}</div>
              <div className="text-xs text-muted-foreground">Collecting</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">{stats.processing}</div>
              <div className="text-xs text-muted-foreground">Processing</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">{stats.analyzed}</div>
              <div className="text-xs text-muted-foreground">Analyzed</div>
            </div>
            <div>
              <div className="text-2xl font-bold">{stats.totalSize.toFixed(1)} MB</div>
              <div className="text-xs text-muted-foreground">Total Size</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Data Collection Plan */}
      <Card>
        <CardHeader>
          <CardTitle>Data Collection Plan</CardTitle>
          <CardDescription>Track your data collection methods and timeline</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {collectionPlans.map((plan) => (
            <div key={plan.id} className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-semibold">{plan.method}</h4>
                  <Badge variant={getPlanStatusColor(plan.status)}>{plan.status}</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-1">{plan.description}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center">
                    <Calendar className="mr-1 h-3 w-3" />
                    {plan.timeline}
                  </span>
                  <span className="flex items-center">
                    <Users className="mr-1 h-3 w-3" />
                    {plan.responsible}
                  </span>
                </div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Edit className="mr-2 h-4 w-4" />
                    Edit
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-destructive">
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Search and Filter */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search datasets..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-[130px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="collecting">Collecting</SelectItem>
                  <SelectItem value="processing">Processing</SelectItem>
                  <SelectItem value="analyzed">Analyzed</SelectItem>
                  <SelectItem value="archived">Archived</SelectItem>
                </SelectContent>
              </Select>
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="w-[130px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="quantitative">Quantitative</SelectItem>
                  <SelectItem value="qualitative">Qualitative</SelectItem>
                  <SelectItem value="mixed">Mixed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Datasets List */}
      <div className="grid gap-4">
        {filteredDatasets.map((dataset) => {
          const FormatIcon = getFormatIcon(dataset.format)
          return (
            <Card key={dataset.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <FormatIcon className="h-5 w-5 text-muted-foreground" />
                      <CardTitle className="text-lg">{dataset.name}</CardTitle>
                      <Badge variant={getStatusColor(dataset.status)}>
                        {dataset.status}
                      </Badge>
                      <Badge variant={getAccessLevelColor(dataset.accessLevel)}>
                        <Shield className="mr-1 h-3 w-3" />
                        {dataset.accessLevel}
                      </Badge>
                    </div>
                    <CardDescription>{dataset.description}</CardDescription>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit Details
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Type:</span>
                    <div className="font-medium">{dataset.type}</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Size:</span>
                    <div className="font-medium">{dataset.size}</div>
                  </div>
                  {dataset.recordCount && (
                    <div>
                      <span className="text-muted-foreground">Records:</span>
                      <div className="font-medium">{dataset.recordCount.toLocaleString()}</div>
                    </div>
                  )}
                  <div>
                    <span className="text-muted-foreground">Version:</span>
                    <div className="font-medium">{dataset.version}</div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {dataset.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <div className="flex items-center">
                      {dataset.backupStatus === 'backed-up' ? (
                        <CheckCircle className="mr-1 h-3 w-3 text-primary" />
                      ) : dataset.backupStatus === 'pending' ? (
                        <Clock className="mr-1 h-3 w-3 text-muted-foreground" />
                      ) : (
                        <AlertCircle className="mr-1 h-3 w-3 text-destructive" />
                      )}
                      Backup: {dataset.backupStatus}
                    </div>
                    <span>•</span>
                    <span>Modified: {dataset.lastModified.toLocaleDateString()}</span>
                  </div>
                </div>

                <div className="text-xs text-muted-foreground bg-muted/50 p-2 rounded">
                  <strong>Location:</strong> {dataset.location}
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {filteredDatasets.length === 0 && (
        <Card>
          <CardContent className="text-center py-8">
            <Database className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">No datasets found</h3>
            <p className="text-muted-foreground mb-4">
              {searchTerm || filterStatus !== 'all' || filterType !== 'all'
                ? 'Try adjusting your search criteria or filters.'
                : 'Start managing your research data by adding your first dataset.'}
            </p>
            <Button onClick={() => setIsAddDatasetDialogOpen(true)}>
              <Plus className="mr-2 h-4 w-4" />
              Add Dataset
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}