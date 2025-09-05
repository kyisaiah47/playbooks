"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { FileText, Upload, Download, Search, Plus, Edit, Trash2, Calendar, Shield, FileCheck, Wrench, AlertTriangle, CheckCircle } from "lucide-react"

interface PurchaseContract {
  id: string
  vehicleInfo: string
  dealership: string
  salePrice: number
  tradeInValue: number
  totalPrice: number
  financingType: string
  signedDate: string
  status: "pending" | "signed" | "completed"
  documents: string[]
  notes: string
}

interface InsuranceDoc {
  id: string
  provider: string
  policyNumber: string
  vehicleInfo: string
  coverage: string
  premium: number
  deductible: number
  effectiveDate: string
  expirationDate: string
  status: "active" | "pending" | "expired"
  documents: string[]
}

interface RegistrationDoc {
  id: string
  vehicleInfo: string
  state: string
  plateNumber: string
  registrationDate: string
  expirationDate: string
  registrationFee: number
  status: "current" | "expiring" | "expired"
  documents: string[]
  renewalReminder: boolean
}

interface ServiceRecord {
  id: string
  vehicleInfo: string
  serviceType: string
  serviceProvider: string
  mileage: number
  serviceDate: string
  cost: number
  nextServiceDue: string
  nextMileageDue: number
  warranty: boolean
  documents: string[]
  notes: string
}

interface WarrantyDoc {
  id: string
  vehicleInfo: string
  warrantyType: string
  provider: string
  coverage: string
  startDate: string
  expirationDate: string
  mileageLimit: number
  transferable: boolean
  status: "active" | "expired" | "claimed"
  documents: string[]
  claims: number
}

const mockContracts: PurchaseContract[] = [
  {
    id: "1",
    vehicleInfo: "2024 Toyota Camry LE",
    dealership: "Downtown Toyota",
    salePrice: 32000,
    tradeInValue: 8500,
    totalPrice: 23500,
    financingType: "Dealer Financing",
    signedDate: "2024-01-15",
    status: "completed",
    documents: ["Purchase Agreement", "Finance Contract", "Title Transfer"],
    notes: "Extended warranty included"
  },
  {
    id: "2",
    vehicleInfo: "2023 Honda CR-V EX",
    dealership: "Premier Honda",
    salePrice: 38000,
    tradeInValue: 0,
    totalPrice: 38000,
    financingType: "Bank Loan",
    signedDate: "2024-02-20",
    status: "signed",
    documents: ["Purchase Agreement", "Loan Documents"],
    notes: "Awaiting vehicle delivery"
  }
]

const mockInsuranceDocs: InsuranceDoc[] = [
  {
    id: "1",
    provider: "State Farm",
    policyNumber: "SF-123456789",
    vehicleInfo: "2024 Toyota Camry LE",
    coverage: "Full Coverage",
    premium: 1200,
    deductible: 500,
    effectiveDate: "2024-01-15",
    expirationDate: "2025-01-15",
    status: "active",
    documents: ["Insurance Policy", "ID Cards", "Proof of Coverage"]
  },
  {
    id: "2",
    provider: "Geico",
    policyNumber: "GC-987654321",
    vehicleInfo: "2023 Honda CR-V EX",
    coverage: "Comprehensive",
    premium: 1350,
    deductible: 250,
    effectiveDate: "2024-02-20",
    expirationDate: "2025-02-20",
    status: "active",
    documents: ["Insurance Policy", "Digital ID Card"]
  }
]

const mockRegistrationDocs: RegistrationDoc[] = [
  {
    id: "1",
    vehicleInfo: "2024 Toyota Camry LE",
    state: "California",
    plateNumber: "8ABC123",
    registrationDate: "2024-01-20",
    expirationDate: "2025-01-20",
    registrationFee: 425,
    status: "current",
    documents: ["Registration Certificate", "License Plates Receipt"],
    renewalReminder: true
  },
  {
    id: "2",
    vehicleInfo: "2023 Honda CR-V EX",
    state: "California",
    plateNumber: "9XYZ456",
    registrationDate: "2024-02-25",
    expirationDate: "2025-02-25",
    registrationFee: 485,
    status: "current",
    documents: ["Registration Certificate", "Smog Certificate"],
    renewalReminder: true
  }
]

const mockServiceRecords: ServiceRecord[] = [
  {
    id: "1",
    vehicleInfo: "2024 Toyota Camry LE",
    serviceType: "Oil Change & Inspection",
    serviceProvider: "Downtown Toyota Service",
    mileage: 5000,
    serviceDate: "2024-06-15",
    cost: 89,
    nextServiceDue: "2024-12-15",
    nextMileageDue: 10000,
    warranty: true,
    documents: ["Service Invoice", "Inspection Report"],
    notes: "All systems normal, tire pressure adjusted"
  },
  {
    id: "2",
    vehicleInfo: "2024 Toyota Camry LE",
    serviceType: "Tire Rotation",
    serviceProvider: "Quick Tire Service",
    mileage: 8500,
    serviceDate: "2024-08-20",
    cost: 45,
    nextServiceDue: "2025-02-20",
    nextMileageDue: 15000,
    warranty: false,
    documents: ["Service Receipt"],
    notes: "Front tires showing even wear"
  },
  {
    id: "3",
    vehicleInfo: "2023 Honda CR-V EX",
    serviceType: "30,000 Mile Service",
    serviceProvider: "Premier Honda Service",
    mileage: 30000,
    serviceDate: "2024-07-10",
    cost: 350,
    nextServiceDue: "2025-01-10",
    nextMileageDue: 45000,
    warranty: true,
    documents: ["Service Record", "Parts Receipt", "Warranty Extension"],
    notes: "Transmission service, brake fluid change, cabin filter replacement"
  }
]

const mockWarrantyDocs: WarrantyDoc[] = [
  {
    id: "1",
    vehicleInfo: "2024 Toyota Camry LE",
    warrantyType: "Manufacturer Warranty",
    provider: "Toyota Motor Sales",
    coverage: "Comprehensive 3yr/36k mi, Powertrain 5yr/60k mi",
    startDate: "2024-01-15",
    expirationDate: "2027-01-15",
    mileageLimit: 36000,
    transferable: true,
    status: "active",
    documents: ["Warranty Booklet", "Terms & Conditions"],
    claims: 0
  },
  {
    id: "2",
    vehicleInfo: "2024 Toyota Camry LE",
    warrantyType: "Extended Warranty",
    provider: "Toyota Extended Care",
    coverage: "Platinum Coverage 7yr/100k mi",
    startDate: "2024-01-15",
    expirationDate: "2031-01-15",
    mileageLimit: 100000,
    transferable: true,
    status: "active",
    documents: ["Extended Warranty Contract", "Coverage Details"],
    claims: 0
  },
  {
    id: "3",
    vehicleInfo: "2023 Honda CR-V EX",
    warrantyType: "Manufacturer Warranty",
    provider: "American Honda Motor Co.",
    coverage: "Limited 3yr/36k mi, Powertrain 5yr/60k mi",
    startDate: "2023-02-20",
    expirationDate: "2026-02-20",
    mileageLimit: 36000,
    transferable: true,
    status: "active",
    documents: ["Owner&apos;s Manual", "Warranty Information"],
    claims: 1
  }
]

export function PurchaseContracts() {
  const [contracts, setContracts] = useState<PurchaseContract[]>(mockContracts)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const filteredContracts = contracts.filter(contract => {
    const matchesSearch = contract.vehicleInfo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         contract.dealership.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || contract.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "text-primary"
      case "signed": return "text-muted-foreground"
      case "pending": return "text-destructive"
      default: return "text-muted-foreground"
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed": return "default"
      case "signed": return "secondary"
      case "pending": return "destructive"
      default: return "secondary"
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold flex items-center">
          <FileText className="mr-2 h-8 w-8" />
          Purchase Contracts
        </h1>
        <p className="text-muted-foreground">Manage vehicle purchase agreements and contracts</p>
      </div>

      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search contracts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-48">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="signed">Signed</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
          </SelectContent>
        </Select>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Contract
        </Button>
      </div>

      <div className="grid gap-6">
        {filteredContracts.map((contract) => (
          <Card key={contract.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">{contract.vehicleInfo}</CardTitle>
                  <CardDescription>{contract.dealership}</CardDescription>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant={getStatusBadge(contract.status)}>
                    {contract.status.charAt(0).toUpperCase() + contract.status.slice(1)}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <div className="text-sm text-muted-foreground">Sale Price</div>
                  <div className="font-semibold">${contract.salePrice.toLocaleString()}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Trade-in Value</div>
                  <div className="font-semibold">${contract.tradeInValue.toLocaleString()}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Total Price</div>
                  <div className="font-semibold text-primary">${contract.totalPrice.toLocaleString()}</div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-muted-foreground">Financing Type</div>
                  <div className="font-medium">{contract.financingType}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Signed Date</div>
                  <div className="font-medium">{new Date(contract.signedDate).toLocaleDateString()}</div>
                </div>
              </div>

              <div>
                <div className="text-sm text-muted-foreground mb-2">Documents</div>
                <div className="flex flex-wrap gap-2">
                  {contract.documents.map((doc, index) => (
                    <Badge key={index} variant="outline">
                      <FileText className="mr-1 h-3 w-3" />
                      {doc}
                    </Badge>
                  ))}
                </div>
              </div>

              {contract.notes && (
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Notes</div>
                  <div className="text-sm bg-muted/50 rounded p-2">{contract.notes}</div>
                </div>
              )}

              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
                <Button variant="outline" size="sm">
                  <Edit className="mr-2 h-4 w-4" />
                  Edit
                </Button>
                <Button variant="outline" size="sm" className="text-destructive">
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export function InsuranceDocuments() {
  const [insuranceDocs, setInsuranceDocs] = useState<InsuranceDoc[]>(mockInsuranceDocs)
  const [searchTerm, setSearchTerm] = useState("")

  const filteredDocs = insuranceDocs.filter(doc =>
    doc.provider.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.vehicleInfo.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "text-primary"
      case "pending": return "text-muted-foreground"
      case "expired": return "text-destructive"
      default: return "text-muted-foreground"
    }
  }

  const getDaysUntilExpiration = (expirationDate: string) => {
    const today = new Date()
    const expiry = new Date(expirationDate)
    const diffTime = expiry.getTime() - today.getTime()
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold flex items-center">
          <Shield className="mr-2 h-8 w-8" />
          Insurance Documents
        </h1>
        <p className="text-muted-foreground">Manage vehicle insurance policies and documents</p>
      </div>

      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search insurance policies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Policy
        </Button>
      </div>

      <div className="grid gap-6">
        {filteredDocs.map((doc) => {
          const daysUntilExpiry = getDaysUntilExpiration(doc.expirationDate)
          return (
            <Card key={doc.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">{doc.provider}</CardTitle>
                    <CardDescription>{doc.vehicleInfo}</CardDescription>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant={doc.status === "active" ? "default" : doc.status === "expired" ? "destructive" : "secondary"}>
                      {doc.status.charAt(0).toUpperCase() + doc.status.slice(1)}
                    </Badge>
                    {daysUntilExpiry < 30 && daysUntilExpiry > 0 && (
                      <Badge variant="destructive">
                        <AlertTriangle className="mr-1 h-3 w-3" />
                        Expires Soon
                      </Badge>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <div className="text-sm text-muted-foreground">Policy Number</div>
                    <div className="font-mono text-sm">{doc.policyNumber}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Coverage Type</div>
                    <div className="font-medium">{doc.coverage}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Annual Premium</div>
                    <div className="font-semibold">${doc.premium.toLocaleString()}</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <div className="text-sm text-muted-foreground">Deductible</div>
                    <div className="font-medium">${doc.deductible.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Effective Date</div>
                    <div className="font-medium">{new Date(doc.effectiveDate).toLocaleDateString()}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Expiration Date</div>
                    <div className={`font-medium ${daysUntilExpiry < 30 ? 'text-destructive' : ''}`}>
                      {new Date(doc.expirationDate).toLocaleDateString()}
                    </div>
                  </div>
                </div>

                {daysUntilExpiry > 0 && daysUntilExpiry < 60 && (
                  <div className="bg-muted/50 rounded-lg p-3">
                    <div className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">
                        {daysUntilExpiry < 30 
                          ? `Policy expires in ${daysUntilExpiry} days - renewal required!`
                          : `Policy expires in ${daysUntilExpiry} days - consider renewal soon`
                        }
                      </span>
                    </div>
                  </div>
                )}

                <div>
                  <div className="text-sm text-muted-foreground mb-2">Documents</div>
                  <div className="flex flex-wrap gap-2">
                    {doc.documents.map((document, index) => (
                      <Badge key={index} variant="outline">
                        <Shield className="mr-1 h-3 w-3" />
                        {document}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                  <Button variant="outline" size="sm">
                    <Edit className="mr-2 h-4 w-4" />
                    Edit
                  </Button>
                  <Button variant="outline" size="sm">
                    <Calendar className="mr-2 h-4 w-4" />
                    Renew
                  </Button>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

export function RegistrationPapers() {
  const [registrationDocs, setRegistrationDocs] = useState<RegistrationDoc[]>(mockRegistrationDocs)
  const [searchTerm, setSearchTerm] = useState("")

  const filteredDocs = registrationDocs.filter(doc =>
    doc.vehicleInfo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.plateNumber.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const getDaysUntilExpiration = (expirationDate: string) => {
    const today = new Date()
    const expiry = new Date(expirationDate)
    const diffTime = expiry.getTime() - today.getTime()
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "current": return "text-primary"
      case "expiring": return "text-destructive"
      case "expired": return "text-destructive"
      default: return "text-muted-foreground"
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold flex items-center">
          <FileCheck className="mr-2 h-8 w-8" />
          Registration Papers
        </h1>
        <p className="text-muted-foreground">Manage vehicle registration documents and renewals</p>
      </div>

      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by vehicle or plate number..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Registration
        </Button>
      </div>

      <div className="grid gap-6">
        {filteredDocs.map((doc) => {
          const daysUntilExpiry = getDaysUntilExpiration(doc.expirationDate)
          return (
            <Card key={doc.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">{doc.vehicleInfo}</CardTitle>
                    <CardDescription>{doc.state} • Plate: {doc.plateNumber}</CardDescription>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant={doc.status === "current" ? "default" : "destructive"}>
                      {doc.status.charAt(0).toUpperCase() + doc.status.slice(1)}
                    </Badge>
                    {daysUntilExpiry < 60 && daysUntilExpiry > 0 && (
                      <Badge variant="destructive">
                        <Calendar className="mr-1 h-3 w-3" />
                        Renewal Due
                      </Badge>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <div className="text-sm text-muted-foreground">Registration Date</div>
                    <div className="font-medium">{new Date(doc.registrationDate).toLocaleDateString()}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Expiration Date</div>
                    <div className={`font-medium ${daysUntilExpiry < 60 ? 'text-destructive' : ''}`}>
                      {new Date(doc.expirationDate).toLocaleDateString()}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Registration Fee</div>
                    <div className="font-semibold">${doc.registrationFee.toLocaleString()}</div>
                  </div>
                </div>

                {daysUntilExpiry > 0 && daysUntilExpiry < 90 && (
                  <div className="bg-muted/50 rounded-lg p-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">
                          Registration expires in {daysUntilExpiry} days
                        </span>
                      </div>
                      {doc.renewalReminder && (
                        <Badge variant="outline">
                          <CheckCircle className="mr-1 h-3 w-3" />
                          Reminder Set
                        </Badge>
                      )}
                    </div>
                  </div>
                )}

                <div>
                  <div className="text-sm text-muted-foreground mb-2">Documents</div>
                  <div className="flex flex-wrap gap-2">
                    {doc.documents.map((document, index) => (
                      <Badge key={index} variant="outline">
                        <FileCheck className="mr-1 h-3 w-3" />
                        {document}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                  <Button variant="outline" size="sm">
                    <Edit className="mr-2 h-4 w-4" />
                    Edit
                  </Button>
                  <Button variant="outline" size="sm">
                    <Calendar className="mr-2 h-4 w-4" />
                    Renew
                  </Button>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

export function ServiceRecords() {
  const [serviceRecords, setServiceRecords] = useState<ServiceRecord[]>(mockServiceRecords)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterBy, setFilterBy] = useState("all")

  const filteredRecords = serviceRecords.filter(record => {
    const matchesSearch = record.vehicleInfo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.serviceType.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterBy === "all" || 
                         (filterBy === "warranty" && record.warranty) ||
                         (filterBy === "recent" && new Date(record.serviceDate) > new Date(Date.now() - 90 * 24 * 60 * 60 * 1000))
    return matchesSearch && matchesFilter
  })

  const getDaysUntilService = (nextServiceDue: string) => {
    const today = new Date()
    const serviceDate = new Date(nextServiceDue)
    const diffTime = serviceDate.getTime() - today.getTime()
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold flex items-center">
          <Wrench className="mr-2 h-8 w-8" />
          Service Records
        </h1>
        <p className="text-muted-foreground">Track vehicle maintenance and service history</p>
      </div>

      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search service records..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={filterBy} onValueChange={setFilterBy}>
          <SelectTrigger className="w-48">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Records</SelectItem>
            <SelectItem value="recent">Recent (90 days)</SelectItem>
            <SelectItem value="warranty">Warranty Service</SelectItem>
          </SelectContent>
        </Select>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Record
        </Button>
      </div>

      <div className="grid gap-6">
        {filteredRecords.map((record) => {
          const daysUntilService = getDaysUntilService(record.nextServiceDue)
          return (
            <Card key={record.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">{record.serviceType}</CardTitle>
                    <CardDescription>{record.vehicleInfo}</CardDescription>
                  </div>
                  <div className="flex items-center space-x-2">
                    {record.warranty && (
                      <Badge variant="outline" className="border-primary text-primary">
                        <Shield className="mr-1 h-3 w-3" />
                        Warranty
                      </Badge>
                    )}
                    {daysUntilService < 30 && daysUntilService > 0 && (
                      <Badge variant="destructive">
                        <Calendar className="mr-1 h-3 w-3" />
                        Service Due
                      </Badge>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-4 gap-4">
                  <div>
                    <div className="text-sm text-muted-foreground">Service Date</div>
                    <div className="font-medium">{new Date(record.serviceDate).toLocaleDateString()}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Mileage</div>
                    <div className="font-medium">{record.mileage.toLocaleString()} mi</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Service Provider</div>
                    <div className="font-medium">{record.serviceProvider}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Cost</div>
                    <div className="font-semibold">${record.cost.toLocaleString()}</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-muted-foreground">Next Service Due</div>
                    <div className={`font-medium ${daysUntilService < 30 ? 'text-destructive' : ''}`}>
                      {new Date(record.nextServiceDue).toLocaleDateString()}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Next Mileage Due</div>
                    <div className="font-medium">{record.nextMileageDue.toLocaleString()} mi</div>
                  </div>
                </div>

                {daysUntilService > 0 && daysUntilService < 60 && (
                  <div className="bg-muted/50 rounded-lg p-3">
                    <div className="flex items-center">
                      <Wrench className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">
                        Next service due in {daysUntilService} days or at {record.nextMileageDue.toLocaleString()} miles
                      </span>
                    </div>
                  </div>
                )}

                <div>
                  <div className="text-sm text-muted-foreground mb-2">Documents</div>
                  <div className="flex flex-wrap gap-2">
                    {record.documents.map((document, index) => (
                      <Badge key={index} variant="outline">
                        <FileText className="mr-1 h-3 w-3" />
                        {document}
                      </Badge>
                    ))}
                  </div>
                </div>

                {record.notes && (
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Service Notes</div>
                    <div className="text-sm bg-muted/50 rounded p-2">{record.notes}</div>
                  </div>
                )}

                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                  <Button variant="outline" size="sm">
                    <Edit className="mr-2 h-4 w-4" />
                    Edit
                  </Button>
                  <Button variant="outline" size="sm">
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule Next
                  </Button>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

export function WarrantyPapers() {
  const [warrantyDocs, setWarrantyDocs] = useState<WarrantyDoc[]>(mockWarrantyDocs)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterBy, setFilterBy] = useState("all")

  const filteredDocs = warrantyDocs.filter(doc => {
    const matchesSearch = doc.vehicleInfo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.warrantyType.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterBy === "all" || doc.status === filterBy
    return matchesSearch && matchesFilter
  })

  const getDaysUntilExpiration = (expirationDate: string) => {
    const today = new Date()
    const expiry = new Date(expirationDate)
    const diffTime = expiry.getTime() - today.getTime()
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "text-primary"
      case "expired": return "text-destructive"
      case "claimed": return "text-muted-foreground"
      default: return "text-muted-foreground"
    }
  }

  const getWarrantyTypeColor = (type: string) => {
    return type.includes("Extended") ? "text-primary" : "text-muted-foreground"
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold flex items-center">
          <FileCheck className="mr-2 h-8 w-8" />
          Warranty Papers
        </h1>
        <p className="text-muted-foreground">Manage vehicle warranties and coverage documents</p>
      </div>

      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search warranties..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={filterBy} onValueChange={setFilterBy}>
          <SelectTrigger className="w-48">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Warranties</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="expired">Expired</SelectItem>
            <SelectItem value="claimed">Claimed</SelectItem>
          </SelectContent>
        </Select>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Warranty
        </Button>
      </div>

      <div className="grid gap-6">
        {filteredDocs.map((doc) => {
          const daysUntilExpiry = getDaysUntilExpiration(doc.expirationDate)
          return (
            <Card key={doc.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl flex items-center">
                      {doc.warrantyType}
                      {doc.warrantyType.includes("Extended") && (
                        <Badge variant="outline" className="ml-2 border-primary text-primary">
                          Extended
                        </Badge>
                      )}
                    </CardTitle>
                    <CardDescription>{doc.vehicleInfo} • {doc.provider}</CardDescription>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant={doc.status === "active" ? "default" : doc.status === "expired" ? "destructive" : "secondary"}>
                      {doc.status.charAt(0).toUpperCase() + doc.status.slice(1)}
                    </Badge>
                    {doc.transferable && (
                      <Badge variant="outline">
                        Transferable
                      </Badge>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-muted-foreground">Coverage</div>
                    <div className="font-medium">{doc.coverage}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Mileage Limit</div>
                    <div className="font-medium">{doc.mileageLimit.toLocaleString()} miles</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <div className="text-sm text-muted-foreground">Start Date</div>
                    <div className="font-medium">{new Date(doc.startDate).toLocaleDateString()}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Expiration Date</div>
                    <div className={`font-medium ${daysUntilExpiry < 365 && daysUntilExpiry > 0 ? 'text-destructive' : ''}`}>
                      {new Date(doc.expirationDate).toLocaleDateString()}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Claims Filed</div>
                    <div className="font-medium">{doc.claims}</div>
                  </div>
                </div>

                {daysUntilExpiry > 0 && daysUntilExpiry < 730 && (
                  <div className="bg-muted/50 rounded-lg p-3">
                    <div className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">
                        {daysUntilExpiry < 365 
                          ? `Warranty expires in ${Math.floor(daysUntilExpiry / 30)} months - consider extension`
                          : `Warranty expires in ${Math.floor(daysUntilExpiry / 365)} years`
                        }
                      </span>
                    </div>
                  </div>
                )}

                <div>
                  <div className="text-sm text-muted-foreground mb-2">Documents</div>
                  <div className="flex flex-wrap gap-2">
                    {doc.documents.map((document, index) => (
                      <Badge key={index} variant="outline">
                        <FileCheck className="mr-1 h-3 w-3" />
                        {document}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                  <Button variant="outline" size="sm">
                    <Edit className="mr-2 h-4 w-4" />
                    Edit
                  </Button>
                  <Button variant="outline" size="sm">
                    <FileCheck className="mr-2 h-4 w-4" />
                    File Claim
                  </Button>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}