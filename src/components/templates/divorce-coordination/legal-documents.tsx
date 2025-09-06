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
  FileText,
  Calendar,
  AlertCircle,
  CheckCircle2,
  Clock,
  Trash2
} from "lucide-react"
import { useDivorceCoordination } from "@/contexts/divorce-coordination-context"

interface LegalDocument {
  id: string
  name: string
  type: 'petition' | 'financial-disclosure' | 'agreement' | 'court-order' | 'filing' | 'other'
  status: 'pending' | 'in-progress' | 'review' | 'completed' | 'filed'
  priority: 'low' | 'medium' | 'high' | 'urgent'
  deadline?: string
  attorney: string
  description: string
  notes?: string
  createdAt: Date
  updatedAt: Date
}

export function LegalDocuments() {
  const { data, updateData } = useDivorceCoordination()
  const [documents, setDocuments] = useState<LegalDocument[]>([])
  const [isAddingDocument, setIsAddingDocument] = useState(false)
  const [editingDocument, setEditingDocument] = useState<LegalDocument | null>(null)

  const [formData, setFormData] = useState({
    name: '',
    type: 'filing' as LegalDocument['type'],
    priority: 'medium' as LegalDocument['priority'],
    deadline: '',
    attorney: '',
    description: '',
    notes: '',
  })

  useEffect(() => {
    const savedDocuments = localStorage.getItem('divorce-coordination-legal-documents')
    if (savedDocuments) {
      const parsed = JSON.parse(savedDocuments)
      setDocuments(parsed.map((doc: any) => ({
        ...doc,
        createdAt: new Date(doc.createdAt),
        updatedAt: new Date(doc.updatedAt),
      })))
    }
  }, [])

  const saveDocuments = (newDocuments: LegalDocument[]) => {
    setDocuments(newDocuments)
    localStorage.setItem('divorce-coordination-legal-documents', JSON.stringify(newDocuments))
  }

  const addDocument = () => {
    const newDocument: LegalDocument = {
      id: Date.now().toString(),
      ...formData,
      status: 'pending',
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    saveDocuments([...documents, newDocument])
    resetForm()
    setIsAddingDocument(false)
  }

  const updateDocument = (id: string, updates: Partial<LegalDocument>) => {
    const updatedDocuments = documents.map(doc => 
      doc.id === id 
        ? { ...doc, ...updates, updatedAt: new Date() }
        : doc
    )
    saveDocuments(updatedDocuments)
  }

  const deleteDocument = (id: string) => {
    const filteredDocuments = documents.filter(doc => doc.id !== id)
    saveDocuments(filteredDocuments)
  }

  const resetForm = () => {
    setFormData({
      name: '',
      type: 'filing',
      priority: 'medium',
      deadline: '',
      attorney: '',
      description: '',
      notes: '',
    })
  }

  const completedCount = documents.filter(doc => doc.status === 'completed').length
  const progressPercentage = documents.length > 0 ? (completedCount / documents.length) * 100 : 0

  const getStatusBadge = (status: LegalDocument['status']) => {
    switch (status) {
      case 'completed':
        return <Badge variant="default">Completed</Badge>
      case 'filed':
        return <Badge variant="default" className="bg-green-600">Filed</Badge>
      case 'review':
        return <Badge variant="secondary">In Review</Badge>
      case 'in-progress':
        return <Badge variant="secondary">In Progress</Badge>
      default:
        return <Badge variant="outline">Pending</Badge>
    }
  }

  const getPriorityBadge = (priority: LegalDocument['priority']) => {
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

  const isDeadlineApproaching = (deadline?: string) => {
    if (!deadline) return false
    const deadlineDate = new Date(deadline)
    const today = new Date()
    const threeDaysFromNow = new Date(today.getTime() + (3 * 24 * 60 * 60 * 1000))
    return deadlineDate <= threeDaysFromNow
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Legal Documents</h1>
          <p className="text-muted-foreground">Track and manage all legal paperwork and filings</p>
        </div>
        <Dialog open={isAddingDocument} onOpenChange={setIsAddingDocument}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Document
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Add Legal Document</DialogTitle>
              <DialogDescription>
                Create a new legal document to track in your divorce process.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Document Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="e.g., Divorce Petition, Financial Affidavit"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="type">Document Type</Label>
                <Select value={formData.type} onValueChange={(value: LegalDocument['type']) => setFormData({...formData, type: value})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="petition">Petition</SelectItem>
                    <SelectItem value="financial-disclosure">Financial Disclosure</SelectItem>
                    <SelectItem value="agreement">Agreement</SelectItem>
                    <SelectItem value="court-order">Court Order</SelectItem>
                    <SelectItem value="filing">Court Filing</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="priority">Priority</Label>
                <Select value={formData.priority} onValueChange={(value: LegalDocument['priority']) => setFormData({...formData, priority: value})}>
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
                <Label htmlFor="attorney">Attorney/Handler</Label>
                <Input
                  id="attorney"
                  value={formData.attorney}
                  onChange={(e) => setFormData({...formData, attorney: e.target.value})}
                  placeholder="Attorney name or self"
                />
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
                  placeholder="Brief description of the document..."
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={addDocument}>
                Add Document
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Progress Overview</CardTitle>
          <CardDescription>
            {completedCount} of {documents.length} documents completed
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Progress value={progressPercentage} className="w-full" />
          <p className="text-sm text-muted-foreground mt-2">
            {progressPercentage.toFixed(1)}% complete
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Documents</CardTitle>
          <CardDescription>All legal documents and their current status</CardDescription>
        </CardHeader>
        <CardContent>
          {documents.length === 0 ? (
            <div className="text-center py-8">
              <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No legal documents yet. Add your first document to get started!</p>
            </div>
          ) : (
            <Table>
              <TableCaption>Your legal documents</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Document</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead>Deadline</TableHead>
                  <TableHead>Attorney</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {documents.map((document) => (
                  <TableRow key={document.id}>
                    <TableCell className="font-medium">
                      <div>
                        <div>{document.name}</div>
                        {document.description && (
                          <div className="text-sm text-muted-foreground">
                            {document.description}
                          </div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">
                        {document.type.replace('-', ' ')}
                      </Badge>
                    </TableCell>
                    <TableCell>{getStatusBadge(document.status)}</TableCell>
                    <TableCell>{getPriorityBadge(document.priority)}</TableCell>
                    <TableCell>
                      {document.deadline ? (
                        <div className="flex items-center gap-1">
                          {isDeadlineApproaching(document.deadline) && (
                            <AlertCircle className="h-4 w-4 text-orange-500" />
                          )}
                          <span className={isDeadlineApproaching(document.deadline) ? "text-orange-600" : ""}>
                            {new Date(document.deadline).toLocaleDateString()}
                          </span>
                        </div>
                      ) : (
                        <span className="text-muted-foreground">—</span>
                      )}
                    </TableCell>
                    <TableCell>{document.attorney}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Select
                          value={document.status}
                          onValueChange={(value: LegalDocument['status']) => 
                            updateDocument(document.id, { status: value })
                          }
                        >
                          <SelectTrigger className="w-32">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pending">Pending</SelectItem>
                            <SelectItem value="in-progress">In Progress</SelectItem>
                            <SelectItem value="review">In Review</SelectItem>
                            <SelectItem value="completed">Completed</SelectItem>
                            <SelectItem value="filed">Filed</SelectItem>
                          </SelectContent>
                        </Select>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => deleteDocument(document.id)}
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