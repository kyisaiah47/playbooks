"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { FileText, Calendar as CalendarIcon, CheckCircle2, Clock, AlertCircle, Download, Upload, Plus, Eye, Shield, Home } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

interface LegalDocument {
  id: number
  name: string
  type: 'contract' | 'disclosure' | 'inspection' | 'financial' | 'insurance' | 'title' | 'closing' | 'other'
  status: 'needed' | 'received' | 'reviewed' | 'signed' | 'completed'
  dueDate?: Date
  uploadDate?: Date
  propertyAddress?: string
  description: string
  priority: 'low' | 'medium' | 'high' | 'critical'
  notes: string
  fileUrl?: string
  partyResponsible: 'buyer' | 'seller' | 'agent' | 'lender' | 'attorney' | 'title-company'
}

interface Contract {
  id: number
  propertyAddress: string
  contractType: 'purchase-agreement' | 'lease' | 'addendum' | 'amendment' | 'disclosure'
  parties: {
    buyer: string
    seller: string
    buyerAgent?: string
    sellerAgent?: string
  }
  keyTerms: {
    purchasePrice: number
    downPayment: number
    closingDate: Date
    contingencies: string[]
    inspectionPeriod: number
    financingDeadline: Date
  }
  status: 'draft' | 'submitted' | 'negotiating' | 'accepted' | 'executed' | 'cancelled'
  milestones: Milestone[]
  documents: number[] // references to LegalDocument IDs
}

interface Milestone {
  id: number
  name: string
  date: Date
  completed: boolean
  description: string
}

export function Legal() {
  const [documents, setDocuments] = useState<LegalDocument[]>([
    {
      id: 1,
      name: "Purchase Agreement",
      type: 'contract',
      status: 'signed',
      dueDate: new Date('2024-05-01'),
      uploadDate: new Date('2024-04-28'),
      propertyAddress: "456 Maple Avenue, Springfield",
      description: "Main purchase contract for the property",
      priority: 'critical',
      notes: "Signed by all parties, waiting for seller's attorney review",
      partyResponsible: 'buyer'
    },
    {
      id: 2,
      name: "Property Disclosure Statement",
      type: 'disclosure',
      status: 'received',
      uploadDate: new Date('2024-04-25'),
      propertyAddress: "456 Maple Avenue, Springfield",
      description: "Seller's disclosure of known property issues",
      priority: 'high',
      notes: "Review with agent - minor plumbing issues disclosed",
      partyResponsible: 'seller'
    },
    {
      id: 3,
      name: "Home Inspection Report",
      type: 'inspection',
      status: 'completed',
      uploadDate: new Date('2024-05-10'),
      propertyAddress: "456 Maple Avenue, Springfield",
      description: "Professional home inspection findings",
      priority: 'high',
      notes: "Report received, minor issues found",
      fileUrl: "#",
      partyResponsible: 'buyer'
    },
    {
      id: 4,
      name: "Loan Commitment Letter",
      type: 'financial',
      status: 'received',
      dueDate: new Date('2024-05-20'),
      uploadDate: new Date('2024-05-15'),
      description: "Lender's formal loan approval",
      priority: 'critical',
      notes: "Received from First National Bank",
      partyResponsible: 'lender'
    },
    {
      id: 5,
      name: "Title Insurance Policy",
      type: 'title',
      status: 'needed',
      dueDate: new Date('2024-06-10'),
      propertyAddress: "456 Maple Avenue, Springfield",
      description: "Title insurance policy for property",
      priority: 'high',
      notes: "Pending title search completion",
      partyResponsible: 'title-company'
    },
    {
      id: 6,
      name: "Closing Disclosure (CD)",
      type: 'closing',
      status: 'needed',
      dueDate: new Date('2024-06-12'),
      description: "Final loan terms and closing costs",
      priority: 'critical',
      notes: "Must receive 3 days before closing",
      partyResponsible: 'lender'
    }
  ])

  const [contracts, setContracts] = useState<Contract[]>([
    {
      id: 1,
      propertyAddress: "456 Maple Avenue, Springfield",
      contractType: 'purchase-agreement',
      parties: {
        buyer: "John & Jane Smith",
        seller: "Robert Johnson",
        buyerAgent: "Sarah Wilson - ABC Realty",
        sellerAgent: "Mike Davis - XYZ Properties"
      },
      keyTerms: {
        purchasePrice: 520000,
        downPayment: 104000,
        closingDate: new Date('2024-06-15'),
        contingencies: ["Inspection", "Financing", "Appraisal"],
        inspectionPeriod: 10,
        financingDeadline: new Date('2024-05-25')
      },
      status: 'accepted',
      milestones: [
        {
          id: 1,
          name: "Contract Signed",
          date: new Date('2024-04-30'),
          completed: true,
          description: "Purchase agreement executed by all parties"
        },
        {
          id: 2,
          name: "Inspection Period Ends",
          date: new Date('2024-05-15'),
          completed: true,
          description: "Home inspection completed, no major issues"
        },
        {
          id: 3,
          name: "Financing Deadline",
          date: new Date('2024-05-25'),
          completed: true,
          description: "Loan approval received"
        },
        {
          id: 4,
          name: "Appraisal Complete",
          date: new Date('2024-05-30'),
          completed: false,
          description: "Property appraisal scheduled"
        },
        {
          id: 5,
          name: "Final Walkthrough",
          date: new Date('2024-06-14'),
          completed: false,
          description: "Final inspection before closing"
        },
        {
          id: 6,
          name: "Closing Date",
          date: new Date('2024-06-15'),
          completed: false,
          description: "Property closing and ownership transfer"
        }
      ],
      documents: [1, 2, 3, 4, 5, 6]
    }
  ])

  const [isAddDocumentOpen, setIsAddDocumentOpen] = useState(false)
  const [selectedContract, setSelectedContract] = useState<Contract | null>(null)
  const [newDocument, setNewDocument] = useState<Partial<LegalDocument>>({})

  const handleUpdateDocumentStatus = (docId: number, status: LegalDocument['status']) => {
    setDocuments(documents.map(doc => 
      doc.id === docId ? { 
        ...doc, 
        status, 
        uploadDate: ['received', 'signed', 'completed'].includes(status) ? new Date() : doc.uploadDate 
      } : doc
    ))
  }

  const handleAddDocument = () => {
    if (!newDocument.name || !newDocument.type) return

    const document: LegalDocument = {
      id: Math.max(...documents.map(d => d.id), 0) + 1,
      name: newDocument.name,
      type: newDocument.type as any,
      status: 'needed',
      dueDate: newDocument.dueDate,
      propertyAddress: newDocument.propertyAddress,
      description: newDocument.description || "",
      priority: (newDocument.priority as any) || 'medium',
      notes: newDocument.notes || "",
      partyResponsible: (newDocument.partyResponsible as any) || 'buyer'
    }

    setDocuments([...documents, document])
    setNewDocument({})
    setIsAddDocumentOpen(false)
  }

  const completedDocuments = documents.filter(d => d.status === 'completed' || d.status === 'signed')
  const pendingDocuments = documents.filter(d => d.status === 'needed')
  const criticalDocuments = documents.filter(d => d.priority === 'critical' && d.status !== 'completed' && d.status !== 'signed')
  const docsProgress = (completedDocuments.length / documents.length) * 100

  const activeContract = contracts[0] // For demo, assuming one active contract
  const completedMilestones = activeContract?.milestones.filter(m => m.completed).length || 0
  const totalMilestones = activeContract?.milestones.length || 0
  const contractProgress = totalMilestones > 0 ? (completedMilestones / totalMilestones) * 100 : 0

  const documentTypes = [
    { value: 'contract', label: 'Contract', icon: FileText },
    { value: 'disclosure', label: 'Disclosure', icon: Eye },
    { value: 'inspection', label: 'Inspection Report', icon: CheckCircle2 },
    { value: 'financial', label: 'Financial Document', icon: FileText },
    { value: 'insurance', label: 'Insurance', icon: Shield },
    { value: 'title', label: 'Title Document', icon: Home },
    { value: 'closing', label: 'Closing Document', icon: FileText },
    { value: 'other', label: 'Other', icon: FileText }
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Legal & Paperwork</h1>
          <p className="text-muted-foreground">Track contracts, documents, and closing progress</p>
        </div>
        <Button onClick={() => setIsAddDocumentOpen(true)} className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Add Document
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Documents Progress</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{Math.round(docsProgress)}%</div>
            <p className="text-xs text-muted-foreground">
              {completedDocuments.length} of {documents.length} complete
            </p>
            <Progress value={docsProgress} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Contract Progress</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{Math.round(contractProgress)}%</div>
            <p className="text-xs text-muted-foreground">
              {completedMilestones} of {totalMilestones} milestones
            </p>
            <Progress value={contractProgress} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Items</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pendingDocuments.length}</div>
            <p className="text-xs text-muted-foreground">
              Documents needed
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Critical Items</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{criticalDocuments.length}</div>
            <p className="text-xs text-muted-foreground">
              High priority
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Active Contract */}
      {activeContract && (
        <Card>
          <CardHeader>
            <CardTitle>Purchase Contract</CardTitle>
            <CardDescription>{activeContract.propertyAddress}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-3">
                <div>
                  <div className="text-sm font-medium text-muted-foreground">Purchase Price</div>
                  <div className="text-2xl font-bold text-primary">
                    ${activeContract.keyTerms.purchasePrice.toLocaleString()}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm font-medium text-muted-foreground">Down Payment</div>
                    <div className="font-bold">${activeContract.keyTerms.downPayment.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-muted-foreground">Closing Date</div>
                    <div className="font-bold">{format(activeContract.keyTerms.closingDate, 'MMM dd, yyyy')}</div>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="text-sm font-medium text-muted-foreground mb-2">Parties</div>
                  <div className="space-y-1 text-sm">
                    <div><strong>Buyer:</strong> {activeContract.parties.buyer}</div>
                    <div><strong>Seller:</strong> {activeContract.parties.seller}</div>
                    {activeContract.parties.buyerAgent && (
                      <div><strong>Buyer Agent:</strong> {activeContract.parties.buyerAgent}</div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <div className="text-sm font-medium text-muted-foreground mb-3">Contract Milestones</div>
              <div className="space-y-3">
                {activeContract.milestones.map((milestone) => (
                  <div key={milestone.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full ${milestone.completed ? 'bg-emerald-500' : 'bg-gray-400'}`}></div>
                      <div>
                        <div className={`font-medium ${milestone.completed ? 'line-through text-muted-foreground' : ''}`}>
                          {milestone.name}
                        </div>
                        <div className="text-sm text-muted-foreground">{milestone.description}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">
                        {format(milestone.date, 'MMM dd')}
                      </div>
                      {milestone.completed ? (
                        <Badge variant="secondary" className="text-xs">Complete</Badge>
                      ) : (
                        <Badge variant="outline" className="text-xs">Pending</Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="text-sm font-medium text-muted-foreground mb-2">Contingencies</div>
              <div className="flex flex-wrap gap-2">
                {activeContract.keyTerms.contingencies.map((contingency, index) => (
                  <Badge key={index} variant="outline">{contingency}</Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Document Checklist */}
      <Card>
        <CardHeader>
          <CardTitle>Document Checklist</CardTitle>
          <CardDescription>Track all required documents for your home purchase</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {documents
              .sort((a, b) => {
                // Sort by priority first, then by due date
                const priorityOrder = { critical: 0, high: 1, medium: 2, low: 3 }
                const aPriority = priorityOrder[a.priority]
                const bPriority = priorityOrder[b.priority]
                if (aPriority !== bPriority) return aPriority - bPriority
                if (a.dueDate && b.dueDate) return a.dueDate.getTime() - b.dueDate.getTime()
                return 0
              })
              .map((document) => (
              <div key={document.id} className={`p-4 border rounded-lg ${
                document.priority === 'critical' && document.status !== 'completed' && document.status !== 'signed'
                  ? 'border-destructive/20 bg-destructive/5' : 'border-gray-200'
              }`}>
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="font-medium">{document.name}</h3>
                      <Badge variant="outline" className="text-xs capitalize">
                        {documentTypes.find(t => t.value === document.type)?.label}
                      </Badge>
                      <Badge variant={
                        document.priority === 'critical' ? 'destructive' :
                        document.priority === 'high' ? 'default' :
                        'secondary'
                      } className="text-xs">
                        {document.priority}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{document.description}</p>
                    {document.propertyAddress && (
                      <p className="text-xs text-muted-foreground">{document.propertyAddress}</p>
                    )}
                    <p className="text-xs text-muted-foreground">
                      Responsible: {document.partyResponsible.replace('-', ' ')}
                    </p>
                    {document.dueDate && (
                      <p className="text-xs text-muted-foreground">
                        Due: {format(document.dueDate, 'MMM dd, yyyy')}
                      </p>
                    )}
                    {document.notes && (
                      <p className="text-sm mt-2">{document.notes}</p>
                    )}
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant={
                      document.status === 'completed' || document.status === 'signed' ? 'secondary' :
                      document.status === 'received' || document.status === 'reviewed' ? 'default' :
                      'outline'
                    }>
                      {document.status}
                    </Badge>
                    {document.fileUrl && (
                      <Button size="sm" variant="outline" asChild>
                        <a href={document.fileUrl} target="_blank" rel="noopener noreferrer">
                          <Download className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    {document.status === 'needed' && (
                      <Button 
                        size="sm" 
                        onClick={() => handleUpdateDocumentStatus(document.id, 'received')}
                      >
                        Mark Received
                      </Button>
                    )}
                    {document.status === 'received' && (
                      <Button 
                        size="sm" 
                        onClick={() => handleUpdateDocumentStatus(document.id, 'reviewed')}
                      >
                        Mark Reviewed
                      </Button>
                    )}
                    {document.status === 'reviewed' && (
                      <Button 
                        size="sm" 
                        onClick={() => handleUpdateDocumentStatus(document.id, 'signed')}
                      >
                        Mark Signed
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Add Document Dialog */}
      <Dialog open={isAddDocumentOpen} onOpenChange={setIsAddDocumentOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Add Document</DialogTitle>
            <DialogDescription>Add a document to track for your home purchase</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">Document Name</label>
              <Input
                placeholder="e.g., Appraisal Report"
                value={newDocument.name || ""}
                onChange={(e) => setNewDocument({...newDocument, name: e.target.value})}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Document Type</label>
                <Select onValueChange={(value) => setNewDocument({...newDocument, type: value as any})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    {documentTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium">Priority</label>
                <Select onValueChange={(value) => setNewDocument({...newDocument, priority: value as any})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Medium" />
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
            <div>
              <label className="text-sm font-medium">Property Address</label>
              <Input
                placeholder="Property this document relates to"
                value={newDocument.propertyAddress || ""}
                onChange={(e) => setNewDocument({...newDocument, propertyAddress: e.target.value})}
              />
            </div>
            <div>
              <label className="text-sm font-medium">Due Date</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !newDocument.dueDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {newDocument.dueDate ? format(newDocument.dueDate, "PPP") : "Select due date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={newDocument.dueDate}
                    onSelect={(date) => setNewDocument({...newDocument, dueDate: date})}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div>
              <label className="text-sm font-medium">Responsible Party</label>
              <Select onValueChange={(value) => setNewDocument({...newDocument, partyResponsible: value as any})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select responsible party" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="buyer">Buyer</SelectItem>
                  <SelectItem value="seller">Seller</SelectItem>
                  <SelectItem value="agent">Real Estate Agent</SelectItem>
                  <SelectItem value="lender">Lender</SelectItem>
                  <SelectItem value="attorney">Attorney</SelectItem>
                  <SelectItem value="title-company">Title Company</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium">Description</label>
              <Textarea
                placeholder="Brief description of this document"
                value={newDocument.description || ""}
                onChange={(e) => setNewDocument({...newDocument, description: e.target.value})}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddDocumentOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddDocument}>
              Add Document
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}