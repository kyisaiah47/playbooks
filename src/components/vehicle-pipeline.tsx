"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { 
  Save, 
  Phone, 
  Calendar, 
  User, 
  MessageSquare, 
  PartyPopper,
  Star,
  MapPin,
  Car,
  Plus,
  Edit,
  Trash2,
  Eye,
  Clock,
  DollarSign,
  Filter,
  Calculator,
  FileText,
  Shield
} from "lucide-react"

interface Vehicle {
  id: string
  year: number
  make: string
  model: string
  trim: string
  price: number
  mileage: number
  dealer: string
  location: string
  dateAdded: string
  status: 'saved' | 'contacted' | 'scheduled' | 'considering' | 'negotiating' | 'purchased'
  notes: string
  rating: number
  lastContact?: string
  scheduledDate?: string
  offerPrice?: number
  finalPrice?: number
}

const mockVehicles: Vehicle[] = [
  {
    id: "1",
    year: 2023,
    make: "Honda",
    model: "Accord",
    trim: "EX-L",
    price: 32000,
    mileage: 15000,
    dealer: "Honda Downtown",
    location: "New York, NY",
    dateAdded: "2024-01-15",
    status: "negotiating",
    notes: "Great condition, single owner",
    rating: 4.5,
    lastContact: "2024-01-20",
    offerPrice: 30000
  },
  {
    id: "2",
    year: 2022,
    make: "Toyota",
    model: "Camry",
    trim: "XSE",
    price: 28500,
    mileage: 22000,
    dealer: "Toyota City",
    location: "Brooklyn, NY",
    dateAdded: "2024-01-14",
    status: "considering",
    notes: "Test drive scheduled for next week",
    rating: 4.2,
    scheduledDate: "2024-01-25"
  },
  {
    id: "3",
    year: 2021,
    make: "Mazda",
    model: "CX-5",
    trim: "Grand Touring",
    price: 26000,
    mileage: 35000,
    dealer: "Mazda Queens",
    location: "Queens, NY",
    dateAdded: "2024-01-10",
    status: "purchased",
    notes: "Excellent AWD system, purchased!",
    rating: 4.0,
    finalPrice: 25200
  }
]

// Saved Vehicles Component
export function SavedVehicles() {
  const [vehicles, setVehicles] = useState<Vehicle[]>(mockVehicles.filter(v => v.status === 'saved'))
  const [sortBy, setSortBy] = useState("dateAdded")

  const sortedVehicles = [...vehicles].sort((a, b) => {
    switch (sortBy) {
      case "price-asc": return a.price - b.price
      case "price-desc": return b.price - a.price
      case "year-desc": return b.year - a.year
      case "mileage-asc": return a.mileage - b.mileage
      default: return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
    }
  })

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold flex items-center mb-2">
            <Save className="mr-2 h-8 w-8" />
            Saved Vehicles
          </h1>
          <p className="text-muted-foreground">
            Vehicles you&apos;ve saved for consideration
          </p>
        </div>
        <div className="flex gap-2">
          <select
            className="border border-input bg-background px-3 py-2 text-sm rounded-md"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="dateAdded">Date Added</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="year-desc">Year: Newest First</option>
            <option value="mileage-asc">Mileage: Lowest First</option>
          </select>
        </div>
      </div>

      {sortedVehicles.length === 0 ? (
        <Card>
          <CardContent className="text-center py-12">
            <Save className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">No saved vehicles</h3>
            <p className="text-muted-foreground">Start saving vehicles you&apos;re interested in to track them here</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {sortedVehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      )}
    </div>
  )
}

// Contacted Dealers Component
export function ContactedDealers() {
  const [vehicles] = useState<Vehicle[]>(mockVehicles.filter(v => v.status === 'contacted'))
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold flex items-center mb-2">
          <Phone className="mr-2 h-8 w-8" />
          Contacted Dealers
        </h1>
        <p className="text-muted-foreground">
          Vehicles where you&apos;ve made initial contact with dealers
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {vehicles.map((vehicle) => (
          <Card key={vehicle.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">
                    {vehicle.year} {vehicle.make} {vehicle.model}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">{vehicle.trim}</p>
                </div>
                <Badge variant="secondary">Contacted</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="font-medium text-primary">${vehicle.price.toLocaleString()}</span>
                <span className="text-sm text-muted-foreground">{vehicle.mileage.toLocaleString()} miles</span>
              </div>
              
              <div className="text-sm">
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="mr-1 h-3 w-3" />
                  {vehicle.dealer} • {vehicle.location}
                </div>
              </div>

              {vehicle.lastContact && (
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="mr-1 h-3 w-3" />
                  Last contact: {vehicle.lastContact}
                </div>
              )}

              <div className="flex gap-2 pt-2">
                <Button size="sm" variant="outline">
                  <Phone className="mr-1 h-3 w-3" />
                  Call Again
                </Button>
                <Button size="sm" variant="outline">
                  <Calendar className="mr-1 h-3 w-3" />
                  Schedule Visit
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

// Test Drive Scheduled Component
export function TestDriveScheduled() {
  const [vehicles] = useState<Vehicle[]>(mockVehicles.filter(v => v.status === 'scheduled'))
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold flex items-center mb-2">
          <Calendar className="mr-2 h-8 w-8" />
          Test Drive Scheduled
        </h1>
        <p className="text-muted-foreground">
          Vehicles with upcoming or completed test drives
        </p>
      </div>

      <div className="space-y-4">
        {vehicles.map((vehicle) => (
          <Card key={vehicle.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">
                    {vehicle.year} {vehicle.make} {vehicle.model} {vehicle.trim}
                  </h3>
                  <p className="text-primary font-semibold">${vehicle.price.toLocaleString()}</p>
                  <p className="text-sm text-muted-foreground">
                    {vehicle.dealer} • {vehicle.location}
                  </p>
                </div>
                <Badge>Scheduled</Badge>
              </div>

              {vehicle.scheduledDate && (
                <div className="bg-primary/10 rounded-lg p-4 mb-4">
                  <div className="flex items-center">
                    <Calendar className="mr-2 h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold">Test Drive Scheduled</p>
                      <p className="text-sm text-muted-foreground">{vehicle.scheduledDate} at 2:00 PM</p>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex gap-2">
                <Button size="sm">
                  <Eye className="mr-1 h-3 w-3" />
                  View Details
                </Button>
                <Button size="sm" variant="outline">
                  <Edit className="mr-1 h-3 w-3" />
                  Reschedule
                </Button>
                <Button size="sm" variant="outline">
                  <Phone className="mr-1 h-3 w-3" />
                  Call Dealer
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

// Under Consideration Component
export function UnderConsideration() {
  const [vehicles] = useState<Vehicle[]>(mockVehicles.filter(v => v.status === 'considering'))
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold flex items-center mb-2">
          <User className="mr-2 h-8 w-8" />
          Under Consideration
        </h1>
        <p className="text-muted-foreground">
          Vehicles you&apos;re actively considering for purchase
        </p>
      </div>

      <div className="space-y-4">
        {vehicles.map((vehicle) => (
          <Card key={vehicle.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {vehicle.year} {vehicle.make} {vehicle.model}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">{vehicle.trim}</p>
                  <div className="flex items-center mb-2">
                    <Star className="h-4 w-4 text-primary mr-1" />
                    <span className="font-semibold">{vehicle.rating}/5</span>
                  </div>
                  <p className="text-primary font-bold text-xl">${vehicle.price.toLocaleString()}</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Details</h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>Mileage: {vehicle.mileage.toLocaleString()} miles</p>
                    <p>Dealer: {vehicle.dealer}</p>
                    <p>Location: {vehicle.location}</p>
                    <p>Added: {vehicle.dateAdded}</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Actions</h4>
                  <div className="space-y-2">
                    <Button size="sm" className="w-full">
                      <MessageSquare className="mr-1 h-3 w-3" />
                      Start Negotiation
                    </Button>
                    <Button size="sm" variant="outline" className="w-full">
                      <Calendar className="mr-1 h-3 w-3" />
                      Schedule Another Visit
                    </Button>
                    <Button size="sm" variant="outline" className="w-full">
                      <Star className="mr-1 h-3 w-3" />
                      Update Rating
                    </Button>
                  </div>
                </div>
              </div>

              {vehicle.notes && (
                <div className="mt-4 pt-4 border-t">
                  <h4 className="font-semibold mb-1">Notes</h4>
                  <p className="text-sm text-muted-foreground">{vehicle.notes}</p>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

// Negotiating Component
export function Negotiating() {
  const [vehicles] = useState<Vehicle[]>(mockVehicles.filter(v => v.status === 'negotiating'))
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold flex items-center mb-2">
          <MessageSquare className="mr-2 h-8 w-8" />
          Negotiating
        </h1>
        <p className="text-muted-foreground">
          Vehicles where price negotiations are in progress
        </p>
      </div>

      <div className="space-y-4">
        {vehicles.map((vehicle) => (
          <Card key={vehicle.id} className="border-primary/20 hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {vehicle.year} {vehicle.make} {vehicle.model} {vehicle.trim}
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Asking Price:</span>
                      <span className="font-semibold text-lg">${vehicle.price.toLocaleString()}</span>
                    </div>
                    {vehicle.offerPrice && (
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Your Offer:</span>
                        <span className="font-semibold text-lg text-primary">${vehicle.offerPrice.toLocaleString()}</span>
                      </div>
                    )}
                    <div className="flex justify-between items-center pt-2 border-t">
                      <span className="font-medium">Potential Savings:</span>
                      <span className="font-bold text-primary">
                        ${(vehicle.price - (vehicle.offerPrice || vehicle.price)).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Negotiation Tools</h4>
                  <div className="space-y-2">
                    <Button size="sm" className="w-full">
                      <DollarSign className="mr-1 h-3 w-3" />
                      Make Counter Offer
                    </Button>
                    <Button size="sm" variant="outline" className="w-full">
                      <Phone className="mr-1 h-3 w-3" />
                      Call Sales Person
                    </Button>
                    <Button size="sm" variant="outline" className="w-full">
                      <Calculator className="mr-1 h-3 w-3" />
                      Payment Calculator
                    </Button>
                    <Button size="sm" variant="outline" className="w-full">
                      <FileText className="mr-1 h-3 w-3" />
                      Request Final Offer
                    </Button>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t">
                <h4 className="font-semibold mb-2">Negotiation Timeline</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Initial contact:</span>
                    <span className="text-muted-foreground">{vehicle.dateAdded}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>First offer made:</span>
                    <span className="text-muted-foreground">{vehicle.lastContact}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Status:</span>
                    <Badge variant="outline">Awaiting response</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

// Purchased Component
export function Purchased() {
  const [vehicles] = useState<Vehicle[]>(mockVehicles.filter(v => v.status === 'purchased'))
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold flex items-center mb-2">
          <PartyPopper className="mr-2 h-8 w-8" />
          Purchased Vehicles
        </h1>
        <p className="text-muted-foreground">
          Congratulations! Vehicles you&apos;ve successfully purchased
        </p>
      </div>

      <div className="space-y-4">
        {vehicles.map((vehicle) => (
          <Card key={vehicle.id} className="border-primary/20 bg-primary/5 hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center mb-2">
                    <PartyPopper className="h-5 w-5 text-primary mr-2" />
                    <h3 className="text-xl font-semibold">
                      {vehicle.year} {vehicle.make} {vehicle.model} {vehicle.trim}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Purchased from {vehicle.dealer}
                  </p>
                </div>
                <Badge className="bg-primary">Purchased</Badge>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Purchase Details</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Original Price:</span>
                      <span>${vehicle.price.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Final Price:</span>
                      <span className="font-bold text-primary">
                        ${vehicle.finalPrice?.toLocaleString() || vehicle.price.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Savings:</span>
                      <span className="font-semibold text-primary">
                        ${((vehicle.finalPrice ? vehicle.price - vehicle.finalPrice : 0)).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Vehicle Info</h4>
                  <div className="space-y-1 text-sm">
                    <p><span className="text-muted-foreground">Mileage:</span> {vehicle.mileage.toLocaleString()} miles</p>
                    <p><span className="text-muted-foreground">Rating:</span> {vehicle.rating}/5 stars</p>
                    <p><span className="text-muted-foreground">Location:</span> {vehicle.location}</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Next Steps</h4>
                  <div className="space-y-2">
                    <Button size="sm" variant="outline" className="w-full">
                      <FileText className="mr-1 h-3 w-3" />
                      View Documents
                    </Button>
                    <Button size="sm" variant="outline" className="w-full">
                      <Calendar className="mr-1 h-3 w-3" />
                      Schedule Pickup
                    </Button>
                    <Button size="sm" variant="outline" className="w-full">
                      <Shield className="mr-1 h-3 w-3" />
                      Arrange Insurance
                    </Button>
                  </div>
                </div>
              </div>

              {vehicle.notes && (
                <div className="mt-4 pt-4 border-t">
                  <h4 className="font-semibold mb-1">Notes</h4>
                  <p className="text-sm text-muted-foreground">{vehicle.notes}</p>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {vehicles.length === 0 && (
        <Card>
          <CardContent className="text-center py-12">
            <PartyPopper className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">No purchases yet</h3>
            <p className="text-muted-foreground">Your purchased vehicles will appear here</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

// Shared Vehicle Card Component
function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-0">
        <div className="aspect-video bg-muted rounded-t-lg relative">
          <div className="absolute top-2 right-2">
            <Badge variant="secondary">{vehicle.status}</Badge>
          </div>
        </div>
        
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-semibold">{vehicle.year} {vehicle.make} {vehicle.model}</h3>
              <p className="text-sm text-muted-foreground">{vehicle.trim}</p>
            </div>
            <div className="text-right">
              <p className="text-xl font-bold text-primary">${vehicle.price.toLocaleString()}</p>
              <div className="flex items-center text-sm">
                <Star className="h-3 w-3 mr-1" />
                {vehicle.rating}
              </div>
            </div>
          </div>

          <div className="text-sm text-muted-foreground mb-3">
            <p>{vehicle.mileage.toLocaleString()} miles</p>
            <p>{vehicle.dealer} • {vehicle.location}</p>
          </div>

          <div className="flex gap-2">
            <Button size="sm" variant="outline">
              <Eye className="mr-1 h-3 w-3" />
              View
            </Button>
            <Button size="sm" variant="outline">
              <Edit className="mr-1 h-3 w-3" />
              Edit
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}