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
import { DollarSign, Building, FileText, Calendar as CalendarIcon, Clock, CheckCircle2, AlertCircle, Plus, Edit, Trash2, TrendingUp } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

interface LoanApplication {
  id: number
  lenderName: string
  loanType: 'conventional' | 'fha' | 'va' | 'usda' | 'jumbo'
  amount: number
  interestRate: number
  term: number
  status: 'pre-approved' | 'application-submitted' | 'under-review' | 'approved' | 'denied'
  applicationDate: Date
  expectedCloseDate?: Date
  monthlyPayment: number
  downPayment: number
  closingCosts: number
  notes: string
  contactInfo: string
}

interface Document {
  id: number
  name: string
  type: 'income' | 'assets' | 'debts' | 'identity' | 'property' | 'other'
  status: 'needed' | 'uploaded' | 'verified' | 'expired'
  uploadDate?: Date
  expiryDate?: Date
  description: string
}

export function Financing() {
  const [loans, setLoans] = useState<LoanApplication[]>([
    {
      id: 1,
      lenderName: "First National Bank",
      loanType: 'conventional',
      amount: 400000,
      interestRate: 6.25,
      term: 30,
      status: 'pre-approved',
      applicationDate: new Date('2024-03-15'),
      monthlyPayment: 2465,
      downPayment: 80000,
      closingCosts: 12000,
      notes: "Good rates, responsive loan officer",
      contactInfo: "John Smith - john.smith@fnb.com - (555) 123-4567"
    },
    {
      id: 2,
      lenderName: "Community Credit Union",
      loanType: 'fha',
      amount: 380000,
      interestRate: 6.75,
      term: 30,
      status: 'application-submitted',
      applicationDate: new Date('2024-04-01'),
      monthlyPayment: 2467,
      downPayment: 19000,
      closingCosts: 8500,
      notes: "Lower down payment option, slower processing",
      contactInfo: "Sarah Johnson - sarah@ccu.org - (555) 987-6543"
    }
  ])

  const [documents, setDocuments] = useState<Document[]>([
    {
      id: 1,
      name: "Pay Stubs (Last 2 months)",
      type: 'income',
      status: 'verified',
      uploadDate: new Date('2024-03-10'),
      description: "Most recent pay stubs from employer"
    },
    {
      id: 2,
      name: "Tax Returns (Last 2 years)",
      type: 'income',
      status: 'uploaded',
      uploadDate: new Date('2024-03-12'),
      description: "2022 and 2023 tax returns with W-2s"
    },
    {
      id: 3,
      name: "Bank Statements (3 months)",
      type: 'assets',
      status: 'needed',
      description: "Checking and savings account statements"
    },
    {
      id: 4,
      name: "Credit Report",
      type: 'debts',
      status: 'expired',
      uploadDate: new Date('2024-02-01'),
      expiryDate: new Date('2024-05-01'),
      description: "Current credit report from all three bureaus"
    },
    {
      id: 5,
      name: "Driver's License",
      type: 'identity',
      status: 'verified',
      uploadDate: new Date('2024-03-08'),
      description: "Government-issued photo ID"
    }
  ])

  const [isAddLoanOpen, setIsAddLoanOpen] = useState(false)
  const [isAddDocumentOpen, setIsAddDocumentOpen] = useState(false)
  const [newLoan, setNewLoan] = useState<Partial<LoanApplication>>({})
  const [newDocument, setNewDocument] = useState<Partial<Document>>({})

  const calculateMonthlyPayment = (amount: number, rate: number, term: number) => {
    const monthlyRate = rate / 100 / 12
    const numPayments = term * 12
    return Math.round((amount * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1))
  }

  const handleAddLoan = () => {
    if (!newLoan.lenderName || !newLoan.amount || !newLoan.interestRate) return

    const monthlyPayment = calculateMonthlyPayment(
      newLoan.amount,
      newLoan.interestRate,
      newLoan.term || 30
    )

    const loan: LoanApplication = {
      id: Math.max(...loans.map(l => l.id)) + 1,
      lenderName: newLoan.lenderName,
      loanType: (newLoan.loanType as any) || 'conventional',
      amount: newLoan.amount,
      interestRate: newLoan.interestRate,
      term: newLoan.term || 30,
      status: 'application-submitted',
      applicationDate: new Date(),
      monthlyPayment,
      downPayment: newLoan.downPayment || 0,
      closingCosts: newLoan.closingCosts || 0,
      notes: newLoan.notes || "",
      contactInfo: newLoan.contactInfo || ""
    }

    setLoans([...loans, loan])
    setNewLoan({})
    setIsAddLoanOpen(false)
  }

  const handleUpdateDocumentStatus = (docId: number, status: Document['status']) => {
    setDocuments(documents.map(doc => 
      doc.id === docId ? { ...doc, status, uploadDate: status === 'uploaded' ? new Date() : doc.uploadDate } : doc
    ))
  }

  const approvedLoans = loans.filter(l => l.status === 'approved' || l.status === 'pre-approved')
  const pendingLoans = loans.filter(l => ['application-submitted', 'under-review'].includes(l.status))
  const docsNeeded = documents.filter(d => d.status === 'needed').length
  const docsUploaded = documents.filter(d => d.status === 'uploaded' || d.status === 'verified').length
  const docsProgress = (docsUploaded / documents.length) * 100

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Financing</h1>
          <p className="text-muted-foreground">Manage your loan applications and pre-approvals</p>
        </div>
        <Button onClick={() => setIsAddLoanOpen(true)} className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Add Loan Application
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pre-Approvals</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{approvedLoans.length}</div>
            <p className="text-xs text-muted-foreground">
              {pendingLoans.length} pending applications
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Best Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {loans.length > 0 ? `${Math.min(...loans.map(l => l.interestRate))}%` : 'N/A'}
            </div>
            <p className="text-xs text-muted-foreground">
              Interest rate
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Max Approved</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${approvedLoans.length > 0 ? Math.max(...approvedLoans.map(l => l.amount)).toLocaleString() : '0'}
            </div>
            <p className="text-xs text-muted-foreground">
              Loan amount
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Documents</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{docsUploaded}/{documents.length}</div>
            <p className="text-xs text-muted-foreground">
              {docsNeeded} still needed
            </p>
            <Progress value={docsProgress} className="mt-2" />
          </CardContent>
        </Card>
      </div>

      {/* Loan Applications */}
      <Card>
        <CardHeader>
          <CardTitle>Loan Applications</CardTitle>
          <CardDescription>Your mortgage applications and pre-approvals</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {loans.map((loan) => (
              <Card key={loan.id} className="p-4">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold text-lg">{loan.lenderName}</h3>
                    <p className="text-sm text-muted-foreground">
                      {loan.loanType.toUpperCase()} • Applied {format(loan.applicationDate, 'MMM dd, yyyy')}
                    </p>
                  </div>
                  <Badge variant={
                    loan.status === 'approved' || loan.status === 'pre-approved' ? 'secondary' :
                    loan.status === 'denied' ? 'destructive' :
                    'default'
                  }>
                    {loan.status.replace('-', ' ')}
                  </Badge>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div>
                    <div className="text-2xl font-bold text-primary">${loan.amount.toLocaleString()}</div>
                    <div className="text-xs text-muted-foreground">Loan Amount</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{loan.interestRate}%</div>
                    <div className="text-xs text-muted-foreground">Interest Rate</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">${loan.monthlyPayment.toLocaleString()}</div>
                    <div className="text-xs text-muted-foreground">Monthly Payment</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">${loan.downPayment.toLocaleString()}</div>
                    <div className="text-xs text-muted-foreground">Down Payment</div>
                  </div>
                </div>

                <div className="space-y-2">
                  {loan.notes && (
                    <p className="text-sm">{loan.notes}</p>
                  )}
                  {loan.contactInfo && (
                    <p className="text-xs text-muted-foreground">{loan.contactInfo}</p>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Document Checklist */}
      <Card>
        <CardHeader>
          <CardTitle>Document Checklist</CardTitle>
          <CardDescription>Required documents for your loan applications</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {documents.map((doc) => (
              <div key={doc.id} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${
                      doc.status === 'verified' ? 'bg-emerald-500' :
                      doc.status === 'uploaded' ? 'bg-primary' :
                      doc.status === 'expired' ? 'bg-destructive' :
                      'bg-gray-400'
                    }`}></div>
                    <span className="font-medium">{doc.name}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{doc.description}</p>
                  {doc.uploadDate && (
                    <p className="text-xs text-muted-foreground">
                      Uploaded: {format(doc.uploadDate, 'MMM dd, yyyy')}
                    </p>
                  )}
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant={
                    doc.status === 'verified' ? 'secondary' :
                    doc.status === 'uploaded' ? 'default' :
                    doc.status === 'expired' ? 'destructive' :
                    'outline'
                  }>
                    {doc.status}
                  </Badge>
                  {doc.status === 'needed' && (
                    <Button 
                      size="sm" 
                      onClick={() => handleUpdateDocumentStatus(doc.id, 'uploaded')}
                    >
                      Upload
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Add Loan Dialog */}
      <Dialog open={isAddLoanOpen} onOpenChange={setIsAddLoanOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Add Loan Application</DialogTitle>
            <DialogDescription>Add a new mortgage application to track</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Lender Name</label>
                <Input
                  placeholder="Bank name"
                  value={newLoan.lenderName || ""}
                  onChange={(e) => setNewLoan({...newLoan, lenderName: e.target.value})}
                />
              </div>
              <div>
                <label className="text-sm font-medium">Loan Type</label>
                <Select onValueChange={(value) => setNewLoan({...newLoan, loanType: value as any})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select loan type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="conventional">Conventional</SelectItem>
                    <SelectItem value="fha">FHA</SelectItem>
                    <SelectItem value="va">VA</SelectItem>
                    <SelectItem value="usda">USDA</SelectItem>
                    <SelectItem value="jumbo">Jumbo</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="text-sm font-medium">Loan Amount</label>
                <Input
                  type="number"
                  placeholder="400000"
                  value={newLoan.amount || ""}
                  onChange={(e) => setNewLoan({...newLoan, amount: Number(e.target.value)})}
                />
              </div>
              <div>
                <label className="text-sm font-medium">Interest Rate (%)</label>
                <Input
                  type="number"
                  step="0.01"
                  placeholder="6.25"
                  value={newLoan.interestRate || ""}
                  onChange={(e) => setNewLoan({...newLoan, interestRate: Number(e.target.value)})}
                />
              </div>
              <div>
                <label className="text-sm font-medium">Term (years)</label>
                <Select onValueChange={(value) => setNewLoan({...newLoan, term: Number(value)})}>
                  <SelectTrigger>
                    <SelectValue placeholder="30" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="15">15 years</SelectItem>
                    <SelectItem value="20">20 years</SelectItem>
                    <SelectItem value="30">30 years</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Down Payment</label>
                <Input
                  type="number"
                  placeholder="80000"
                  value={newLoan.downPayment || ""}
                  onChange={(e) => setNewLoan({...newLoan, downPayment: Number(e.target.value)})}
                />
              </div>
              <div>
                <label className="text-sm font-medium">Estimated Closing Costs</label>
                <Input
                  type="number"
                  placeholder="12000"
                  value={newLoan.closingCosts || ""}
                  onChange={(e) => setNewLoan({...newLoan, closingCosts: Number(e.target.value)})}
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium">Contact Information</label>
              <Input
                placeholder="Loan officer name, email, phone"
                value={newLoan.contactInfo || ""}
                onChange={(e) => setNewLoan({...newLoan, contactInfo: e.target.value})}
              />
            </div>
            <div>
              <label className="text-sm font-medium">Notes</label>
              <Textarea
                placeholder="Notes about this lender or application..."
                value={newLoan.notes || ""}
                onChange={(e) => setNewLoan({...newLoan, notes: e.target.value})}
              />
            </div>
            {newLoan.amount && newLoan.interestRate && (
              <div className="p-4 bg-muted rounded-lg">
                <div className="text-sm font-medium text-muted-foreground">Estimated Monthly Payment</div>
                <div className="text-2xl font-bold text-primary">
                  ${calculateMonthlyPayment(newLoan.amount, newLoan.interestRate, newLoan.term || 30).toLocaleString()}
                </div>
              </div>
            )}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddLoanOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddLoan}>
              Add Application
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}