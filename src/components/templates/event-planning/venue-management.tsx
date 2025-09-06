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
  MapPin,
  Phone,
  Mail,
  Calendar,
  DollarSign,
  Users,
  Star
} from "lucide-react"
import { useEventPlanning } from "@/contexts/event-planning-context"

// Define venue-specific data interface
interface Venue {
  id: string
  name: string
  address: string
  contactPerson: string
  phone: string
  email: string
  capacity: number
  price: number
  venueType: 'indoor' | 'outdoor' | 'hybrid'
  status: 'researching' | 'contacted' | 'visited' | 'booked' | 'rejected'
  rating: number
  amenities: string[]
  availableDate: Date
  notes: string
  createdAt: Date
  updatedAt: Date
}

export function VenueManagement() {
  const { eventPlanningData } = useEventPlanning()
  const [venues, setVenues] = useState<Venue[]>([])
  const [isAddingVenue, setIsAddingVenue] = useState(false)
  const [editingVenue, setEditingVenue] = useState<Venue | null>(null)

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    contactPerson: '',
    phone: '',
    email: '',
    capacity: 0,
    price: 0,
    venueType: 'indoor' as const,
    rating: 0,
    amenities: [] as string[],
    availableDate: new Date(),
    notes: '',
  })

  // Load venues from localStorage
  useEffect(() => {
    const savedVenues = localStorage.getItem('event-planning-venues')
    if (savedVenues) {
      const parsed = JSON.parse(savedVenues)
      setVenues(parsed.map((venue: any) => ({
        ...venue,
        availableDate: new Date(venue.availableDate),
        createdAt: new Date(venue.createdAt),
        updatedAt: new Date(venue.updatedAt),
      })))
    }
  }, [])

  // Save venues to localStorage
  const saveVenues = (newVenues: Venue[]) => {
    setVenues(newVenues)
    localStorage.setItem('event-planning-venues', JSON.stringify(newVenues))
  }

  // CRUD Operations
  const addVenue = () => {
    const newVenue: Venue = {
      id: Date.now().toString(),
      ...formData,
      status: 'researching',
      amenities: formData.amenities,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    saveVenues([...venues, newVenue])
    resetForm()
    setIsAddingVenue(false)
  }

  const updateVenue = (id: string, updates: Partial<Venue>) => {
    const updatedVenues = venues.map(venue => 
      venue.id === id 
        ? { ...venue, ...updates, updatedAt: new Date() }
        : venue
    )
    saveVenues(updatedVenues)
  }

  const deleteVenue = (id: string) => {
    const filteredVenues = venues.filter(venue => venue.id !== id)
    saveVenues(filteredVenues)
  }

  const resetForm = () => {
    setFormData({
      name: '',
      address: '',
      contactPerson: '',
      phone: '',
      email: '',
      capacity: 0,
      price: 0,
      venueType: 'indoor',
      rating: 0,
      amenities: [],
      availableDate: new Date(),
      notes: '',
    })
    setEditingVenue(null)
  }

  const openEditDialog = (venue: Venue) => {
    setFormData({
      name: venue.name,
      address: venue.address,
      contactPerson: venue.contactPerson,
      phone: venue.phone,
      email: venue.email,
      capacity: venue.capacity,
      price: venue.price,
      venueType: venue.venueType,
      rating: venue.rating,
      amenities: venue.amenities,
      availableDate: venue.availableDate,
      notes: venue.notes,
    })
    setEditingVenue(venue)
    setIsAddingVenue(true)
  }

  const handleSave = () => {
    if (editingVenue) {
      updateVenue(editingVenue.id, formData)
    } else {
      addVenue()
    }
    resetForm()
    setIsAddingVenue(false)
  }

  // Calculate progress/metrics
  const bookedCount = venues.filter(venue => venue.status === 'booked').length
  const visitedCount = venues.filter(venue => venue.status === 'visited').length
  const progressPercentage = venues.length > 0 ? (bookedCount / venues.length) * 100 : 0

  const getStatusColor = (status: Venue['status']) => {
    switch (status) {
      case 'booked': return 'default'
      case 'visited': return 'secondary'
      case 'contacted': return 'outline'
      case 'rejected': return 'destructive'
      default: return 'outline'
    }
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Venue Management</h1>
          <p className="text-muted-foreground">Find and book the perfect venue for your event</p>
        </div>
        <Dialog open={isAddingVenue} onOpenChange={(open) => {
          setIsAddingVenue(open)
          if (!open) resetForm()
        }}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Venue
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingVenue ? 'Edit Venue' : 'Add New Venue'}</DialogTitle>
              <DialogDescription>
                {editingVenue ? 'Update venue information' : 'Add a new venue to track in your search.'}
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Venue Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Enter venue name"
                  />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="venueType">Venue Type</Label>
                  <Select value={formData.venueType} onValueChange={(value) => 
                    setFormData({...formData, venueType: value as 'indoor' | 'outdoor' | 'hybrid'})
                  }>
                    <SelectTrigger>
                      <SelectValue placeholder="Select venue type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="indoor">Indoor</SelectItem>
                      <SelectItem value="outdoor">Outdoor</SelectItem>
                      <SelectItem value="hybrid">Indoor/Outdoor</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  placeholder="Enter venue address"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="contactPerson">Contact Person</Label>
                  <Input
                    id="contactPerson"
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({...formData, contactPerson: e.target.value})}
                    placeholder="Contact name"
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
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="Contact email"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="capacity">Capacity</Label>
                  <Input
                    id="capacity"
                    type="number"
                    value={formData.capacity}
                    onChange={(e) => setFormData({...formData, capacity: parseInt(e.target.value) || 0})}
                    placeholder="Maximum guests"
                  />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="price">Price ($)</Label>
                  <Input
                    id="price"
                    type="number"
                    value={formData.price}
                    onChange={(e) => setFormData({...formData, price: parseInt(e.target.value) || 0})}
                    placeholder="Venue cost"
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="availableDate">Available Date</Label>
                <Input
                  id="availableDate"
                  type="date"
                  value={formData.availableDate.toISOString().split('T')[0]}
                  onChange={(e) => setFormData({...formData, availableDate: new Date(e.target.value)})}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="notes">Notes</Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  placeholder="Additional notes about the venue..."
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={handleSave}>
                {editingVenue ? 'Update Venue' : 'Add Venue'}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Progress Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Venue Search Progress</CardTitle>
          <CardDescription>
            {bookedCount} of {venues.length} venues booked • {visitedCount} visited
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Progress value={progressPercentage} className="w-full" />
          <p className="text-sm text-muted-foreground mt-2">
            {progressPercentage.toFixed(1)}% of venues secured
          </p>
        </CardContent>
      </Card>

      {/* Venues List */}
      <Card>
        <CardHeader>
          <CardTitle>Venue List</CardTitle>
          <CardDescription>Manage and track your venue options</CardDescription>
        </CardHeader>
        <CardContent>
          {venues.length === 0 ? (
            <div className="text-center py-8">
              <MapPin className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">No venues added yet. Add your first venue to get started!</p>
            </div>
          ) : (
            <Table>
              <TableCaption>Your venue options list</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Venue</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Capacity</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {venues.map((venue) => (
                  <TableRow key={venue.id}>
                    <TableCell>
                      <div className="font-medium">{venue.name}</div>
                      <div className="text-sm text-muted-foreground">{venue.address}</div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">
                        {venue.venueType}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        {venue.capacity}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <DollarSign className="h-3 w-3" />
                        {venue.price.toLocaleString()}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={getStatusColor(venue.status)}>
                        {venue.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">
                        <div>{venue.contactPerson}</div>
                        <div className="text-muted-foreground">{venue.phone}</div>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            const nextStatus: { [key in Venue['status']]: Venue['status'] } = {
                              'researching': 'contacted',
                              'contacted': 'visited',
                              'visited': 'booked',
                              'booked': 'booked',
                              'rejected': 'researching'
                            }
                            updateVenue(venue.id, { status: nextStatus[venue.status] })
                          }}
                        >
                          {venue.status === 'booked' ? 'Booked' : 'Next Step'}
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => openEditDialog(venue)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => deleteVenue(venue.id)}
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