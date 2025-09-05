"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Home, MapPin, DollarSign, Calendar as CalendarIcon, Star, Heart, ExternalLink, Plus, Edit, Trash2, Eye } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

interface Property {
  id: number
  address: string
  city: string
  price: number
  bedrooms: number
  bathrooms: number
  sqft: number
  status: 'available' | 'pending' | 'sold'
  saved: boolean
  rating: number
  notes: string
  viewingDate?: Date
  listingUrl: string
  imageUrl: string
}

interface Viewing {
  id: number
  propertyId: number
  date: Date
  time: string
  agent: string
  status: 'scheduled' | 'completed' | 'cancelled'
  notes: string
}

export function PropertySearch() {
  const [properties, setProperties] = useState<Property[]>([
    {
      id: 1,
      address: "123 Oak Street",
      city: "Springfield",
      price: 475000,
      bedrooms: 3,
      bathrooms: 2,
      sqft: 1850,
      status: 'available',
      saved: true,
      rating: 4,
      notes: "Great location, needs some updates in kitchen",
      listingUrl: "#",
      imageUrl: "/api/placeholder/300/200"
    },
    {
      id: 2,
      address: "456 Maple Avenue",
      city: "Springfield",
      price: 520000,
      bedrooms: 4,
      bathrooms: 3,
      sqft: 2200,
      status: 'pending',
      saved: true,
      rating: 5,
      notes: "Perfect layout, submitted offer",
      viewingDate: new Date("2024-05-15"),
      listingUrl: "#",
      imageUrl: "/api/placeholder/300/200"
    },
    {
      id: 3,
      address: "789 Pine Road",
      city: "Springfield",
      price: 399000,
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1400,
      status: 'available',
      saved: false,
      rating: 3,
      notes: "Small but nice, good starter home",
      listingUrl: "#",
      imageUrl: "/api/placeholder/300/200"
    }
  ])

  const [viewings, setViewings] = useState<Viewing[]>([
    {
      id: 1,
      propertyId: 1,
      date: new Date("2024-05-10"),
      time: "2:00 PM",
      agent: "Sarah Johnson",
      status: 'scheduled',
      notes: "First showing, bring measuring tape"
    },
    {
      id: 2,
      propertyId: 2,
      date: new Date("2024-05-15"),
      time: "10:00 AM",
      agent: "Mike Chen",
      status: 'completed',
      notes: "Second viewing completed, very impressed"
    }
  ])

  const [isAddPropertyOpen, setIsAddPropertyOpen] = useState(false)
  const [isScheduleViewingOpen, setIsScheduleViewingOpen] = useState(false)
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null)
  const [newProperty, setNewProperty] = useState<Partial<Property>>({})
  const [newViewing, setNewViewing] = useState<Partial<Viewing>>({})

  const handleSaveProperty = (propertyId: number) => {
    setProperties(properties.map(p => 
      p.id === propertyId ? { ...p, saved: !p.saved } : p
    ))
  }

  const handleRateProperty = (propertyId: number, rating: number) => {
    setProperties(properties.map(p => 
      p.id === propertyId ? { ...p, rating } : p
    ))
  }

  const handleAddProperty = () => {
    const property: Property = {
      id: Math.max(...properties.map(p => p.id)) + 1,
      address: newProperty.address || "",
      city: newProperty.city || "",
      price: newProperty.price || 0,
      bedrooms: newProperty.bedrooms || 0,
      bathrooms: newProperty.bathrooms || 0,
      sqft: newProperty.sqft || 0,
      status: 'available',
      saved: false,
      rating: 0,
      notes: newProperty.notes || "",
      listingUrl: newProperty.listingUrl || "#",
      imageUrl: "/api/placeholder/300/200"
    }
    setProperties([...properties, property])
    setNewProperty({})
    setIsAddPropertyOpen(false)
  }

  const handleScheduleViewing = () => {
    if (!selectedProperty || !newViewing.date || !newViewing.time) return
    
    const viewing: Viewing = {
      id: Math.max(...viewings.map(v => v.id), 0) + 1,
      propertyId: selectedProperty.id,
      date: newViewing.date,
      time: newViewing.time,
      agent: newViewing.agent || "",
      status: 'scheduled',
      notes: newViewing.notes || ""
    }
    setViewings([...viewings, viewing])
    setNewViewing({})
    setIsScheduleViewingOpen(false)
    setSelectedProperty(null)
  }

  const savedProperties = properties.filter(p => p.saved)
  const upcomingViewings = viewings.filter(v => v.status === 'scheduled' && v.date >= new Date())

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Property Search</h1>
          <p className="text-muted-foreground">Manage your saved properties and viewing schedule</p>
        </div>
        <Button onClick={() => setIsAddPropertyOpen(true)} className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Add Property
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Properties</CardTitle>
            <Home className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{properties.length}</div>
            <p className="text-xs text-muted-foreground">
              {savedProperties.length} saved
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Price</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${Math.round(properties.reduce((acc, p) => acc + p.price, 0) / properties.length).toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">
              Range: ${Math.min(...properties.map(p => p.price)).toLocaleString()} - ${Math.max(...properties.map(p => p.price)).toLocaleString()}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Viewings</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{viewings.length}</div>
            <p className="text-xs text-muted-foreground">
              {upcomingViewings.length} upcoming
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Top Rated</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {properties.filter(p => p.rating >= 4).length}
            </div>
            <p className="text-xs text-muted-foreground">
              4+ stars
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Saved Properties */}
      <Card>
        <CardHeader>
          <CardTitle>Saved Properties</CardTitle>
          <CardDescription>Your shortlisted properties</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {savedProperties.map((property) => (
              <Card key={property.id} className="relative">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{property.address}</CardTitle>
                      <CardDescription>{property.city}</CardDescription>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleSaveProperty(property.id)}
                      className="text-destructive hover:text-destructive/80"
                    >
                      <Heart className="h-4 w-4 fill-current" />
                    </Button>
                  </div>
                  <div className="flex items-center space-x-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onClick={() => handleRateProperty(property.id, star)}
                        className={`text-lg ${star <= property.rating ? 'text-orange-500' : 'text-gray-300'}`}
                      >
                        ★
                      </button>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-2xl font-bold text-primary">
                    ${property.price.toLocaleString()}
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div>{property.bedrooms} bed</div>
                    <div>{property.bathrooms} bath</div>
                    <div>{property.sqft.toLocaleString()} sqft</div>
                  </div>
                  <Badge variant={property.status === 'available' ? 'secondary' : property.status === 'pending' ? 'default' : 'destructive'}>
                    {property.status}
                  </Badge>
                  {property.notes && (
                    <p className="text-xs text-muted-foreground">{property.notes}</p>
                  )}
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      onClick={() => {
                        setSelectedProperty(property)
                        setIsScheduleViewingOpen(true)
                      }}
                      className="flex-1"
                    >
                      Schedule Viewing
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a href={property.listingUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Upcoming Viewings */}
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Viewings</CardTitle>
          <CardDescription>Your scheduled property viewings</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {upcomingViewings.map((viewing) => {
              const property = properties.find(p => p.id === viewing.propertyId)
              if (!property) return null
              
              return (
                <div key={viewing.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <div className="font-medium">{property.address}</div>
                    <div className="text-sm text-muted-foreground">
                      {format(viewing.date, "PPP")} at {viewing.time} • Agent: {viewing.agent}
                    </div>
                    {viewing.notes && (
                      <p className="text-sm text-muted-foreground mt-1">{viewing.notes}</p>
                    )}
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline">
                      <CalendarIcon className="w-3 h-3 mr-1" />
                      {viewing.status}
                    </Badge>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Add Property Dialog */}
      <Dialog open={isAddPropertyOpen} onOpenChange={setIsAddPropertyOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Property</DialogTitle>
            <DialogDescription>Add a property you&apos;re interested in to track</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Address</label>
                <Input
                  placeholder="123 Main Street"
                  value={newProperty.address || ""}
                  onChange={(e) => setNewProperty({...newProperty, address: e.target.value})}
                />
              </div>
              <div>
                <label className="text-sm font-medium">City</label>
                <Input
                  placeholder="City"
                  value={newProperty.city || ""}
                  onChange={(e) => setNewProperty({...newProperty, city: e.target.value})}
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="text-sm font-medium">Price</label>
                <Input
                  type="number"
                  placeholder="500000"
                  value={newProperty.price || ""}
                  onChange={(e) => setNewProperty({...newProperty, price: Number(e.target.value)})}
                />
              </div>
              <div>
                <label className="text-sm font-medium">Bedrooms</label>
                <Input
                  type="number"
                  placeholder="3"
                  value={newProperty.bedrooms || ""}
                  onChange={(e) => setNewProperty({...newProperty, bedrooms: Number(e.target.value)})}
                />
              </div>
              <div>
                <label className="text-sm font-medium">Bathrooms</label>
                <Input
                  type="number"
                  placeholder="2"
                  value={newProperty.bathrooms || ""}
                  onChange={(e) => setNewProperty({...newProperty, bathrooms: Number(e.target.value)})}
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium">Square Feet</label>
              <Input
                type="number"
                placeholder="1800"
                value={newProperty.sqft || ""}
                onChange={(e) => setNewProperty({...newProperty, sqft: Number(e.target.value)})}
              />
            </div>
            <div>
              <label className="text-sm font-medium">Notes</label>
              <Textarea
                placeholder="Your notes about this property..."
                value={newProperty.notes || ""}
                onChange={(e) => setNewProperty({...newProperty, notes: e.target.value})}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddPropertyOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddProperty}>
              Add Property
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Schedule Viewing Dialog */}
      <Dialog open={isScheduleViewingOpen} onOpenChange={setIsScheduleViewingOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Schedule Viewing</DialogTitle>
            <DialogDescription>
              Schedule a viewing for {selectedProperty?.address}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">Date</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !newViewing.date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {newViewing.date ? format(newViewing.date, "PPP") : "Pick a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={newViewing.date}
                    onSelect={(date) => setNewViewing({...newViewing, date})}
                    disabled={(date) => date < new Date()}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div>
              <label className="text-sm font-medium">Time</label>
              <Select onValueChange={(value) => setNewViewing({...newViewing, time: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="9:00 AM">9:00 AM</SelectItem>
                  <SelectItem value="10:00 AM">10:00 AM</SelectItem>
                  <SelectItem value="11:00 AM">11:00 AM</SelectItem>
                  <SelectItem value="1:00 PM">1:00 PM</SelectItem>
                  <SelectItem value="2:00 PM">2:00 PM</SelectItem>
                  <SelectItem value="3:00 PM">3:00 PM</SelectItem>
                  <SelectItem value="4:00 PM">4:00 PM</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium">Agent</label>
              <Input
                placeholder="Agent name"
                value={newViewing.agent || ""}
                onChange={(e) => setNewViewing({...newViewing, agent: e.target.value})}
              />
            </div>
            <div>
              <label className="text-sm font-medium">Notes</label>
              <Textarea
                placeholder="Any special requests or notes..."
                value={newViewing.notes || ""}
                onChange={(e) => setNewViewing({...newViewing, notes: e.target.value})}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsScheduleViewingOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleScheduleViewing}>
              Schedule Viewing
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}