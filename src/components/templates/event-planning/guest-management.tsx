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
import { Checkbox } from "@/components/ui/checkbox"
import { 
  Plus,
  Edit,
  Trash2,
  Users,
  Phone,
  Mail,
  Calendar,
  UserCheck,
  UserX,
  Search,
  Filter
} from "lucide-react"
import { useEventPlanning } from "@/contexts/event-planning-context"

// Define guest-specific data interface
interface Guest {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  status: 'invited' | 'confirmed' | 'declined' | 'pending' | 'no-response'
  category: 'family' | 'friends' | 'colleagues' | 'plus-one' | 'vendors' | 'other'
  dietaryRestrictions: string
  plusOne: boolean
  plusOneName?: string
  tableAssignment?: string
  invitationSent: boolean
  invitationSentDate?: Date
  responseDate?: Date
  notes: string
  createdAt: Date
  updatedAt: Date
}

export function GuestManagement() {
  const { eventPlanningData } = useEventPlanning()
  const [guests, setGuests] = useState<Guest[]>([])
  const [isAddingGuest, setIsAddingGuest] = useState(false)
  const [editingGuest, setEditingGuest] = useState<Guest | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('all')
  const [categoryFilter, setCategoryFilter] = useState<string>('all')

  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    category: 'friends' as const,
    dietaryRestrictions: '',
    plusOne: false,
    plusOneName: '',
    tableAssignment: '',
    notes: '',
  })

  // Load guests from localStorage
  useEffect(() => {
    const savedGuests = localStorage.getItem('event-planning-guests')
    if (savedGuests) {
      const parsed = JSON.parse(savedGuests)
      setGuests(parsed.map((guest: any) => ({
        ...guest,
        invitationSentDate: guest.invitationSentDate ? new Date(guest.invitationSentDate) : undefined,
        responseDate: guest.responseDate ? new Date(guest.responseDate) : undefined,
        createdAt: new Date(guest.createdAt),
        updatedAt: new Date(guest.updatedAt),
      })))
    }
  }, [])

  // Save guests to localStorage
  const saveGuests = (newGuests: Guest[]) => {
    setGuests(newGuests)
    localStorage.setItem('event-planning-guests', JSON.stringify(newGuests))
  }

  // Filter guests based on search and filters
  const filteredGuests = guests.filter(guest => {
    const matchesSearch = searchTerm === '' || 
      `${guest.firstName} ${guest.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
      guest.email.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesStatus = statusFilter === 'all' || guest.status === statusFilter
    const matchesCategory = categoryFilter === 'all' || guest.category === categoryFilter
    
    return matchesSearch && matchesStatus && matchesCategory
  })

  // CRUD Operations
  const addGuest = () => {
    const newGuest: Guest = {
      id: Date.now().toString(),
      ...formData,
      status: 'invited',
      invitationSent: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    saveGuests([...guests, newGuest])
    resetForm()
    setIsAddingGuest(false)
  }

  const updateGuest = (id: string, updates: Partial<Guest>) => {
    const updatedGuests = guests.map(guest => 
      guest.id === id 
        ? { ...guest, ...updates, updatedAt: new Date() }
        : guest
    )
    saveGuests(updatedGuests)
  }

  const deleteGuest = (id: string) => {
    const filteredGuests = guests.filter(guest => guest.id !== id)
    saveGuests(filteredGuests)
  }

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      category: 'friends',
      dietaryRestrictions: '',
      plusOne: false,
      plusOneName: '',
      tableAssignment: '',
      notes: '',
    })
    setEditingGuest(null)
  }

  const openEditDialog = (guest: Guest) => {
    setFormData({
      firstName: guest.firstName,
      lastName: guest.lastName,
      email: guest.email,
      phone: guest.phone,
      address: guest.address,
      category: guest.category,
      dietaryRestrictions: guest.dietaryRestrictions,
      plusOne: guest.plusOne,
      plusOneName: guest.plusOneName || '',
      tableAssignment: guest.tableAssignment || '',
      notes: guest.notes,
    })
    setEditingGuest(guest)
    setIsAddingGuest(true)
  }

  const handleSave = () => {
    if (editingGuest) {
      updateGuest(editingGuest.id, formData)
    } else {
      addGuest()
    }
    resetForm()
    setIsAddingGuest(false)
  }

  // Calculate progress/metrics
  const confirmedCount = guests.filter(guest => guest.status === 'confirmed').length
  const declinedCount = guests.filter(guest => guest.status === 'declined').length
  const pendingCount = guests.filter(guest => guest.status === 'pending' || guest.status === 'no-response').length
  const invitationsSentCount = guests.filter(guest => guest.invitationSent).length
  
  const totalGuestCount = guests.reduce((sum, guest) => sum + (guest.plusOne ? 2 : 1), 0)
  const confirmedGuestCount = guests.filter(guest => guest.status === 'confirmed').reduce((sum, guest) => sum + (guest.plusOne ? 2 : 1), 0)
  
  const responseRate = guests.length > 0 ? ((confirmedCount + declinedCount) / guests.length) * 100 : 0

  const getStatusColor = (status: Guest['status']) => {
    switch (status) {
      case 'confirmed': return 'default'
      case 'declined': return 'destructive'
      case 'pending': return 'secondary'
      case 'no-response': return 'outline'
      default: return 'outline'
    }
  }

  const getCategoryColor = (category: Guest['category']) => {
    switch (category) {
      case 'family': return 'default'
      case 'friends': return 'secondary'
      case 'colleagues': return 'outline'
      case 'plus-one': return 'secondary'
      default: return 'outline'
    }
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Guest Management</h1>
          <p className="text-muted-foreground">Manage your guest list and track RSVPs</p>
        </div>
        <Dialog open={isAddingGuest} onOpenChange={(open) => {
          setIsAddingGuest(open)
          if (!open) resetForm()
        }}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Guest
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingGuest ? 'Edit Guest' : 'Add New Guest'}</DialogTitle>
              <DialogDescription>
                {editingGuest ? 'Update guest information' : 'Add a new guest to your event.'}
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    placeholder="First name"
                  />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    placeholder="Last name"
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
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="Phone number"
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  placeholder="Mailing address"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="category">Category</Label>
                  <Select value={formData.category} onValueChange={(value) => 
                    setFormData({...formData, category: value as Guest['category']})
                  }>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="family">Family</SelectItem>
                      <SelectItem value="friends">Friends</SelectItem>
                      <SelectItem value="colleagues">Colleagues</SelectItem>
                      <SelectItem value="plus-one">Plus One</SelectItem>
                      <SelectItem value="vendors">Vendors</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="tableAssignment">Table Assignment</Label>
                  <Input
                    id="tableAssignment"
                    value={formData.tableAssignment}
                    onChange={(e) => setFormData({...formData, tableAssignment: e.target.value})}
                    placeholder="Table number/name"
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="dietaryRestrictions">Dietary Restrictions</Label>
                <Input
                  id="dietaryRestrictions"
                  value={formData.dietaryRestrictions}
                  onChange={(e) => setFormData({...formData, dietaryRestrictions: e.target.value})}
                  placeholder="Any dietary restrictions"
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="plusOne"
                  checked={formData.plusOne}
                  onCheckedChange={(checked) => setFormData({...formData, plusOne: checked === true})}
                />
                <Label htmlFor="plusOne">Plus One Invited</Label>
              </div>

              {formData.plusOne && (
                <div className="grid gap-2">
                  <Label htmlFor="plusOneName">Plus One Name</Label>
                  <Input
                    id="plusOneName"
                    value={formData.plusOneName}
                    onChange={(e) => setFormData({...formData, plusOneName: e.target.value})}
                    placeholder="Plus one's name (if known)"
                  />
                </div>
              )}

              <div className="grid gap-2">
                <Label htmlFor="notes">Notes</Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  placeholder="Additional notes about this guest..."
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={handleSave}>
                {editingGuest ? 'Update Guest' : 'Add Guest'}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Progress Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Guests</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalGuestCount}</div>
            <p className="text-xs text-muted-foreground">{guests.length} invitations</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Confirmed</CardTitle>
            <UserCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{confirmedCount}</div>
            <p className="text-xs text-muted-foreground">{confirmedGuestCount} actual guests</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Response Rate</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{responseRate.toFixed(1)}%</div>
            <Progress value={responseRate} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending</CardTitle>
            <UserX className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pendingCount}</div>
            <p className="text-xs text-muted-foreground">awaiting response</p>
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
                placeholder="Search guests..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8"
              />
            </div>
            
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="invited">Invited</SelectItem>
                <SelectItem value="confirmed">Confirmed</SelectItem>
                <SelectItem value="declined">Declined</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="no-response">No Response</SelectItem>
              </SelectContent>
            </Select>

            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="family">Family</SelectItem>
                <SelectItem value="friends">Friends</SelectItem>
                <SelectItem value="colleagues">Colleagues</SelectItem>
                <SelectItem value="plus-one">Plus One</SelectItem>
                <SelectItem value="vendors">Vendors</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Guests List */}
      <Card>
        <CardHeader>
          <CardTitle>Guest List ({filteredGuests.length} guests)</CardTitle>
          <CardDescription>Manage your guest list and track responses</CardDescription>
        </CardHeader>
        <CardContent>
          {filteredGuests.length === 0 ? (
            <div className="text-center py-8">
              <Users className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">
                {guests.length === 0 ? 'No guests added yet. Add your first guest to get started!' : 'No guests match your current filters.'}
              </p>
            </div>
          ) : (
            <Table>
              <TableCaption>Your event guest list</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Plus One</TableHead>
                  <TableHead>Table</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredGuests.map((guest) => (
                  <TableRow key={guest.id}>
                    <TableCell>
                      <div className="font-medium">{guest.firstName} {guest.lastName}</div>
                      {guest.dietaryRestrictions && (
                        <div className="text-xs text-muted-foreground">Dietary: {guest.dietaryRestrictions}</div>
                      )}
                    </TableCell>
                    <TableCell>
                      <Badge variant={getCategoryColor(guest.category)}>
                        {guest.category}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">
                        <div className="flex items-center gap-1">
                          <Mail className="h-3 w-3" />
                          {guest.email}
                        </div>
                        {guest.phone && (
                          <div className="flex items-center gap-1">
                            <Phone className="h-3 w-3" />
                            {guest.phone}
                          </div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={getStatusColor(guest.status)}>
                        {guest.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {guest.plusOne ? (
                        <div>
                          <Badge variant="outline">+1</Badge>
                          {guest.plusOneName && (
                            <div className="text-xs text-muted-foreground">{guest.plusOneName}</div>
                          )}
                        </div>
                      ) : (
                        <span className="text-muted-foreground">-</span>
                      )}
                    </TableCell>
                    <TableCell>
                      {guest.tableAssignment || <span className="text-muted-foreground">-</span>}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Select
                          value={guest.status}
                          onValueChange={(value) => updateGuest(guest.id, { 
                            status: value as Guest['status'],
                            responseDate: new Date()
                          })}
                        >
                          <SelectTrigger className="w-24 h-8">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="invited">Invited</SelectItem>
                            <SelectItem value="confirmed">Confirmed</SelectItem>
                            <SelectItem value="declined">Declined</SelectItem>
                            <SelectItem value="pending">Pending</SelectItem>
                            <SelectItem value="no-response">No Response</SelectItem>
                          </SelectContent>
                        </Select>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => openEditDialog(guest)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => deleteGuest(guest.id)}
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