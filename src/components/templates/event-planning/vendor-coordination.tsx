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
  Edit,
  Trash2,
  Building,
  Phone,
  Mail,
  Calendar,
  DollarSign,
  Star,
  Clock,
  CheckCircle2,
  AlertCircle,
  Search
} from "lucide-react"
import { useEventPlanning } from "@/contexts/event-planning-context"

// Define vendor-specific data interface
interface Vendor {
  id: string
  name: string
  category: 'catering' | 'photography' | 'music' | 'flowers' | 'decoration' | 'transport' | 'lighting' | 'security' | 'other'
  contactPerson: string
  email: string
  phone: string
  website: string
  address: string
  status: 'researching' | 'contacted' | 'quoted' | 'booked' | 'contracted' | 'paid' | 'rejected'
  quotedPrice: number
  finalPrice: number
  rating: number
  serviceDate: Date
  contractSigned: boolean
  depositPaid: boolean
  depositAmount: number
  balanceDue: number
  paymentDue: Date
  notes: string
  createdAt: Date
  updatedAt: Date
}

export function VendorCoordination() {
  const { eventPlanningData } = useEventPlanning()
  const [vendors, setVendors] = useState<Vendor[]>([])
  const [isAddingVendor, setIsAddingVendor] = useState(false)
  const [editingVendor, setEditingVendor] = useState<Vendor | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [categoryFilter, setCategoryFilter] = useState<string>('all')
  const [statusFilter, setStatusFilter] = useState<string>('all')

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    category: 'catering' as const,
    contactPerson: '',
    email: '',
    phone: '',
    website: '',
    address: '',
    quotedPrice: 0,
    finalPrice: 0,
    rating: 0,
    serviceDate: new Date(),
    contractSigned: false,
    depositPaid: false,
    depositAmount: 0,
    balanceDue: 0,
    paymentDue: new Date(),
    notes: '',
  })

  // Load vendors from localStorage
  useEffect(() => {
    const savedVendors = localStorage.getItem('event-planning-vendors')
    if (savedVendors) {
      const parsed = JSON.parse(savedVendors)
      setVendors(parsed.map((vendor: any) => ({
        ...vendor,
        serviceDate: new Date(vendor.serviceDate),
        paymentDue: new Date(vendor.paymentDue),
        createdAt: new Date(vendor.createdAt),
        updatedAt: new Date(vendor.updatedAt),
      })))
    }
  }, [])

  // Save vendors to localStorage
  const saveVendors = (newVendors: Vendor[]) => {
    setVendors(newVendors)
    localStorage.setItem('event-planning-vendors', JSON.stringify(newVendors))
  }

  // Filter vendors based on search and filters
  const filteredVendors = vendors.filter(vendor => {
    const matchesSearch = searchTerm === '' || 
      vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vendor.contactPerson.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vendor.email.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesCategory = categoryFilter === 'all' || vendor.category === categoryFilter
    const matchesStatus = statusFilter === 'all' || vendor.status === statusFilter
    
    return matchesSearch && matchesCategory && matchesStatus
  })

  // CRUD Operations
  const addVendor = () => {
    const newVendor: Vendor = {
      id: Date.now().toString(),
      ...formData,
      status: 'researching',
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    saveVendors([...vendors, newVendor])
    resetForm()
    setIsAddingVendor(false)
  }

  const updateVendor = (id: string, updates: Partial<Vendor>) => {
    const updatedVendors = vendors.map(vendor => 
      vendor.id === id 
        ? { ...vendor, ...updates, updatedAt: new Date() }
        : vendor
    )
    saveVendors(updatedVendors)
  }

  const deleteVendor = (id: string) => {
    const filteredVendors = vendors.filter(vendor => vendor.id !== id)
    saveVendors(filteredVendors)
  }

  const resetForm = () => {
    setFormData({
      name: '',
      category: 'catering',
      contactPerson: '',
      email: '',
      phone: '',
      website: '',
      address: '',
      quotedPrice: 0,
      finalPrice: 0,
      rating: 0,
      serviceDate: new Date(),
      contractSigned: false,
      depositPaid: false,
      depositAmount: 0,
      balanceDue: 0,
      paymentDue: new Date(),
      notes: '',
    })
    setEditingVendor(null)
  }

  const openEditDialog = (vendor: Vendor) => {
    setFormData({
      name: vendor.name,
      category: vendor.category,
      contactPerson: vendor.contactPerson,
      email: vendor.email,
      phone: vendor.phone,
      website: vendor.website,
      address: vendor.address,
      quotedPrice: vendor.quotedPrice,
      finalPrice: vendor.finalPrice,
      rating: vendor.rating,
      serviceDate: vendor.serviceDate,
      contractSigned: vendor.contractSigned,
      depositPaid: vendor.depositPaid,
      depositAmount: vendor.depositAmount,
      balanceDue: vendor.balanceDue,
      paymentDue: vendor.paymentDue,
      notes: vendor.notes,
    })
    setEditingVendor(vendor)
    setIsAddingVendor(true)
  }

  const handleSave = () => {
    if (editingVendor) {
      updateVendor(editingVendor.id, formData)
    } else {
      addVendor()
    }
    resetForm()
    setIsAddingVendor(false)
  }

  // Calculate progress/metrics
  const bookedCount = vendors.filter(vendor => vendor.status === 'booked' || vendor.status === 'contracted').length
  const quotedCount = vendors.filter(vendor => vendor.status === 'quoted').length
  const contractedCount = vendors.filter(vendor => vendor.status === 'contracted').length
  const totalSpend = vendors.reduce((sum, vendor) => sum + vendor.finalPrice, 0)
  const paidAmount = vendors.filter(vendor => vendor.depositPaid).reduce((sum, vendor) => sum + vendor.depositAmount, 0)
  
  const progressPercentage = vendors.length > 0 ? (bookedCount / vendors.length) * 100 : 0

  const getStatusColor = (status: Vendor['status']) => {
    switch (status) {
      case 'booked': return 'default'
      case 'contracted': return 'default'
      case 'paid': return 'secondary'
      case 'quoted': return 'outline'
      case 'contacted': return 'outline'
      case 'rejected': return 'destructive'
      default: return 'outline'
    }
  }

  const getCategoryColor = (category: Vendor['category']) => {
    switch (category) {
      case 'catering': return 'default'
      case 'photography': return 'secondary'
      case 'music': return 'outline'
      case 'flowers': return 'secondary'
      case 'decoration': return 'outline'
      default: return 'outline'
    }
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Vendor Coordination</h1>
          <p className="text-muted-foreground">Manage vendors and service providers for your event</p>
        </div>
        <Dialog open={isAddingVendor} onOpenChange={(open) => {
          setIsAddingVendor(open)
          if (!open) resetForm()
        }}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Vendor
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingVendor ? 'Edit Vendor' : 'Add New Vendor'}</DialogTitle>
              <DialogDescription>
                {editingVendor ? 'Update vendor information' : 'Add a new vendor to track for your event.'}
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Vendor Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Vendor/company name"
                  />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="category">Category</Label>
                  <Select value={formData.category} onValueChange={(value) => 
                    setFormData({...formData, category: value as Vendor['category']})
                  }>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="catering">Catering</SelectItem>
                      <SelectItem value="photography">Photography</SelectItem>
                      <SelectItem value="music">Music/DJ</SelectItem>
                      <SelectItem value="flowers">Flowers</SelectItem>
                      <SelectItem value="decoration">Decoration</SelectItem>
                      <SelectItem value="transport">Transport</SelectItem>
                      <SelectItem value="lighting">Lighting</SelectItem>
                      <SelectItem value="security">Security</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="contactPerson">Contact Person</Label>
                  <Input
                    id="contactPerson"
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({...formData, contactPerson: e.target.value})}
                    placeholder="Primary contact"
                  />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="Phone number"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="Email address"
                  />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="website">Website</Label>
                  <Input
                    id="website"
                    value={formData.website}
                    onChange={(e) => setFormData({...formData, website: e.target.value})}
                    placeholder="Website URL"
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  placeholder="Business address"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="quotedPrice">Quoted Price ($)</Label>
                  <Input
                    id="quotedPrice"
                    type="number"
                    value={formData.quotedPrice}
                    onChange={(e) => setFormData({...formData, quotedPrice: parseInt(e.target.value) || 0})}
                    placeholder="Initial quote"
                  />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="finalPrice">Final Price ($)</Label>
                  <Input
                    id="finalPrice"
                    type="number"
                    value={formData.finalPrice}
                    onChange={(e) => setFormData({...formData, finalPrice: parseInt(e.target.value) || 0})}
                    placeholder="Agreed price"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="serviceDate">Service Date</Label>
                  <Input
                    id="serviceDate"
                    type="date"
                    value={formData.serviceDate.toISOString().split('T')[0]}
                    onChange={(e) => setFormData({...formData, serviceDate: new Date(e.target.value)})}
                  />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="paymentDue">Payment Due Date</Label>
                  <Input
                    id="paymentDue"
                    type="date"
                    value={formData.paymentDue.toISOString().split('T')[0]}
                    onChange={(e) => setFormData({...formData, paymentDue: new Date(e.target.value)})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="depositAmount">Deposit Amount ($)</Label>
                  <Input
                    id="depositAmount"
                    type="number"
                    value={formData.depositAmount}
                    onChange={(e) => setFormData({...formData, depositAmount: parseInt(e.target.value) || 0})}
                    placeholder="Deposit required"
                  />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="balanceDue">Balance Due ($)</Label>
                  <Input
                    id="balanceDue"
                    type="number"
                    value={formData.balanceDue}
                    onChange={(e) => setFormData({...formData, balanceDue: parseInt(e.target.value) || 0})}
                    placeholder="Remaining balance"
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="notes">Notes</Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  placeholder="Additional notes about this vendor..."
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={handleSave}>
                {editingVendor ? 'Update Vendor' : 'Add Vendor'}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Progress Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Vendors Booked</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{bookedCount}</div>
            <p className="text-xs text-muted-foreground">out of {vendors.length} total</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Quotes Received</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{quotedCount}</div>
            <p className="text-xs text-muted-foreground">pending decision</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Spend</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalSpend.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">${paidAmount.toLocaleString()} paid</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Progress</CardTitle>
            <Building className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{progressPercentage.toFixed(1)}%</div>
            <Progress value={progressPercentage} className="mt-2" />
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Search & Filters</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search vendors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8"
              />
            </div>
            
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="catering">Catering</SelectItem>
                <SelectItem value="photography">Photography</SelectItem>
                <SelectItem value="music">Music/DJ</SelectItem>
                <SelectItem value="flowers">Flowers</SelectItem>
                <SelectItem value="decoration">Decoration</SelectItem>
                <SelectItem value="transport">Transport</SelectItem>
                <SelectItem value="lighting">Lighting</SelectItem>
                <SelectItem value="security">Security</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>

            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="researching">Researching</SelectItem>
                <SelectItem value="contacted">Contacted</SelectItem>
                <SelectItem value="quoted">Quoted</SelectItem>
                <SelectItem value="booked">Booked</SelectItem>
                <SelectItem value="contracted">Contracted</SelectItem>
                <SelectItem value="paid">Paid</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Vendors List */}
      <Card>
        <CardHeader>
          <CardTitle>Vendor List ({filteredVendors.length} vendors)</CardTitle>
          <CardDescription>Manage your vendor relationships and contracts</CardDescription>
        </CardHeader>
        <CardContent>
          {filteredVendors.length === 0 ? (
            <div className="text-center py-8">
              <Building className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">
                {vendors.length === 0 ? 'No vendors added yet. Add your first vendor to get started!' : 'No vendors match your current filters.'}
              </p>
            </div>
          ) : (
            <Table>
              <TableCaption>Your event vendors list</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Vendor</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Service Date</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredVendors.map((vendor) => (
                  <TableRow key={vendor.id}>
                    <TableCell>
                      <div className="font-medium">{vendor.name}</div>
                      <div className="text-sm text-muted-foreground">{vendor.contactPerson}</div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={getCategoryColor(vendor.category)}>
                        {vendor.category}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">
                        <div className="flex items-center gap-1">
                          <Mail className="h-3 w-3" />
                          {vendor.email}
                        </div>
                        <div className="flex items-center gap-1">
                          <Phone className="h-3 w-3" />
                          {vendor.phone}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={getStatusColor(vendor.status)}>
                        {vendor.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">
                        <div className="font-medium">${vendor.finalPrice.toLocaleString()}</div>
                        {vendor.quotedPrice !== vendor.finalPrice && (
                          <div className="text-muted-foreground">
                            Quote: ${vendor.quotedPrice.toLocaleString()}
                          </div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {vendor.serviceDate.toLocaleDateString()}
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Select
                          value={vendor.status}
                          onValueChange={(value) => updateVendor(vendor.id, { 
                            status: value as Vendor['status']
                          })}
                        >
                          <SelectTrigger className="w-28 h-8">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="researching">Researching</SelectItem>
                            <SelectItem value="contacted">Contacted</SelectItem>
                            <SelectItem value="quoted">Quoted</SelectItem>
                            <SelectItem value="booked">Booked</SelectItem>
                            <SelectItem value="contracted">Contracted</SelectItem>
                            <SelectItem value="paid">Paid</SelectItem>
                            <SelectItem value="rejected">Rejected</SelectItem>
                          </SelectContent>
                        </Select>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => openEditDialog(vendor)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => deleteVendor(vendor.id)}
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