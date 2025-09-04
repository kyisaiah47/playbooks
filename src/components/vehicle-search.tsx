"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Search,
  Filter,
  Star,
  Heart,
  Eye,
  Car,
  MapPin,
  DollarSign,
  Calendar,
  Fuel,
  Plus,
  Edit,
  Trash2,
  ExternalLink
} from "lucide-react"

interface Vehicle {
  id: string
  year: number
  make: string
  model: string
  trim: string
  price: number
  mileage: number
  fuelType: string
  transmission: string
  drivetrain: string
  mpg: string
  dealer: string
  location: string
  phone: string
  images: string[]
  features: string[]
  isSaved: boolean
  rating: number
  notes: string
  dateAdded: string
  status: 'available' | 'sold' | 'pending'
}

export function VehicleSearch() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([
    {
      id: "1",
      year: 2023,
      make: "Honda",
      model: "Accord",
      trim: "EX-L",
      price: 32000,
      mileage: 15000,
      fuelType: "Gasoline",
      transmission: "Automatic",
      drivetrain: "FWD",
      mpg: "32/42 city/highway",
      dealer: "Honda Downtown",
      location: "New York, NY",
      phone: "(555) 123-4567",
      images: ["/placeholder-car.jpg"],
      features: ["Heated Seats", "Sunroof", "Backup Camera", "Bluetooth"],
      isSaved: true,
      rating: 4.5,
      notes: "Great condition, single owner",
      dateAdded: "2024-01-15",
      status: "available"
    },
    {
      id: "2",
      year: 2022,
      make: "Toyota",
      model: "Camry",
      trim: "XSE",
      price: 28500,
      mileage: 22000,
      fuelType: "Gasoline",
      transmission: "Automatic",
      drivetrain: "FWD",
      mpg: "31/41 city/highway",
      dealer: "Toyota City",
      location: "Brooklyn, NY",
      phone: "(555) 234-5678",
      images: ["/placeholder-car.jpg"],
      features: ["Navigation", "Leather Seats", "Wireless Charging"],
      isSaved: false,
      rating: 4.2,
      notes: "",
      dateAdded: "2024-01-14",
      status: "available"
    },
    {
      id: "3",
      year: 2021,
      make: "Mazda",
      model: "CX-5",
      trim: "Grand Touring",
      price: 26000,
      mileage: 35000,
      fuelType: "Gasoline",
      transmission: "Automatic",
      drivetrain: "AWD",
      mpg: "26/31 city/highway",
      dealer: "Mazda of Queens",
      location: "Queens, NY",
      phone: "(555) 345-6789",
      images: ["/placeholder-car.jpg"],
      features: ["AWD", "Premium Audio", "Heated Seats"],
      isSaved: true,
      rating: 4.0,
      notes: "Well maintained, excellent AWD system",
      dateAdded: "2024-01-13",
      status: "available"
    }
  ])

  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("price-asc")
  const [filterOpen, setFilterOpen] = useState(false)
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null)
  const [editingVehicle, setEditingVehicle] = useState<Vehicle | null>(null)

  const [filters, setFilters] = useState({
    priceMin: "",
    priceMax: "",
    yearMin: "",
    yearMax: "",
    mileageMax: "",
    fuelType: "",
    transmission: "",
    drivetrain: ""
  })

  const filteredAndSortedVehicles = vehicles
    .filter((vehicle) => {
      const matchesSearch = 
        vehicle.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vehicle.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vehicle.dealer.toLowerCase().includes(searchTerm.toLowerCase())
      
      const matchesFilters = 
        (!filters.priceMin || vehicle.price >= parseInt(filters.priceMin)) &&
        (!filters.priceMax || vehicle.price <= parseInt(filters.priceMax)) &&
        (!filters.yearMin || vehicle.year >= parseInt(filters.yearMin)) &&
        (!filters.yearMax || vehicle.year <= parseInt(filters.yearMax)) &&
        (!filters.mileageMax || vehicle.mileage <= parseInt(filters.mileageMax)) &&
        (!filters.fuelType || vehicle.fuelType === filters.fuelType) &&
        (!filters.transmission || vehicle.transmission === filters.transmission) &&
        (!filters.drivetrain || vehicle.drivetrain === filters.drivetrain)

      return matchesSearch && matchesFilters
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-asc": return a.price - b.price
        case "price-desc": return b.price - a.price
        case "year-desc": return b.year - a.year
        case "mileage-asc": return a.mileage - b.mileage
        case "rating-desc": return b.rating - a.rating
        default: return 0
      }
    })

  const toggleSaved = (vehicleId: string) => {
    setVehicles(prev => prev.map(vehicle => 
      vehicle.id === vehicleId ? { ...vehicle, isSaved: !vehicle.isSaved } : vehicle
    ))
  }

  const addVehicle = (vehicleData: Partial<Vehicle>) => {
    const newVehicle: Vehicle = {
      id: Date.now().toString(),
      year: vehicleData.year || new Date().getFullYear(),
      make: vehicleData.make || "",
      model: vehicleData.model || "",
      trim: vehicleData.trim || "",
      price: vehicleData.price || 0,
      mileage: vehicleData.mileage || 0,
      fuelType: vehicleData.fuelType || "Gasoline",
      transmission: vehicleData.transmission || "Automatic",
      drivetrain: vehicleData.drivetrain || "FWD",
      mpg: vehicleData.mpg || "",
      dealer: vehicleData.dealer || "",
      location: vehicleData.location || "",
      phone: vehicleData.phone || "",
      images: vehicleData.images || [],
      features: vehicleData.features || [],
      isSaved: false,
      rating: vehicleData.rating || 0,
      notes: vehicleData.notes || "",
      dateAdded: new Date().toISOString().split('T')[0],
      status: vehicleData.status || "available"
    }
    setVehicles(prev => [...prev, newVehicle])
  }

  const updateVehicle = (vehicleId: string, updates: Partial<Vehicle>) => {
    setVehicles(prev => prev.map(vehicle => 
      vehicle.id === vehicleId ? { ...vehicle, ...updates } : vehicle
    ))
    setEditingVehicle(null)
  }

  const deleteVehicle = (vehicleId: string) => {
    setVehicles(prev => prev.filter(vehicle => vehicle.id !== vehicleId))
  }

  const VehicleCard = ({ vehicle }: { vehicle: Vehicle }) => (
    <Card className="group hover:shadow-md transition-shadow">
      <CardContent className="p-0">
        <div className="aspect-video bg-muted rounded-t-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          <div className="absolute top-2 right-2 flex gap-2">
            <Button
              size="sm"
              variant="secondary"
              className="h-8 w-8 p-0"
              onClick={() => toggleSaved(vehicle.id)}
            >
              <Heart className={`h-4 w-4 ${vehicle.isSaved ? 'fill-current text-red-500' : ''}`} />
            </Button>
            <Badge variant={vehicle.status === 'available' ? 'default' : 'secondary'}>
              {vehicle.status}
            </Badge>
          </div>
          <div className="absolute bottom-2 left-2">
            <Badge variant="secondary" className="bg-black/50 text-white border-0">
              {vehicle.year} {vehicle.make} {vehicle.model}
            </Badge>
          </div>
        </div>
        
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-semibold text-lg">{vehicle.year} {vehicle.make} {vehicle.model}</h3>
              <p className="text-sm text-muted-foreground">{vehicle.trim}</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-primary">${vehicle.price.toLocaleString()}</p>
              <div className="flex items-center text-sm text-muted-foreground">
                <Star className="h-3 w-3 fill-current text-yellow-400 mr-1" />
                {vehicle.rating}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground mb-3">
            <div className="flex items-center">
              <Calendar className="h-3 w-3 mr-1" />
              {vehicle.mileage.toLocaleString()} miles
            </div>
            <div className="flex items-center">
              <Fuel className="h-3 w-3 mr-1" />
              {vehicle.fuelType}
            </div>
            <div className="flex items-center">
              <Car className="h-3 w-3 mr-1" />
              {vehicle.transmission}
            </div>
            <div className="flex items-center">
              <MapPin className="h-3 w-3 mr-1" />
              {vehicle.drivetrain}
            </div>
          </div>

          <div className="flex flex-wrap gap-1 mb-3">
            {vehicle.features.slice(0, 3).map((feature, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {feature}
              </Badge>
            ))}
            {vehicle.features.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{vehicle.features.length - 3} more
              </Badge>
            )}
          </div>

          <div className="flex justify-between items-center">
            <div className="text-sm text-muted-foreground">
              <p className="font-medium">{vehicle.dealer}</p>
              <p>{vehicle.location}</p>
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" onClick={() => setSelectedVehicle(vehicle)}>
                <Eye className="h-3 w-3 mr-1" />
                View
              </Button>
              <Button size="sm" variant="outline" onClick={() => setEditingVehicle(vehicle)}>
                <Edit className="h-3 w-3 mr-1" />
                Edit
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold flex items-center mb-2">
          <Search className="mr-2 h-8 w-8" />
          Vehicle Search
        </h1>
        <p className="text-muted-foreground">
          Find and manage your potential vehicle purchases
        </p>
      </div>

      <Tabs defaultValue="search" className="space-y-4">
        <TabsList>
          <TabsTrigger value="search">Search Results</TabsTrigger>
          <TabsTrigger value="saved">Saved Vehicles ({vehicles.filter(v => v.isSaved).length})</TabsTrigger>
        </TabsList>

        <div className="flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by make, model, or dealer..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="price-asc">Price: Low to High</SelectItem>
              <SelectItem value="price-desc">Price: High to Low</SelectItem>
              <SelectItem value="year-desc">Year: Newest First</SelectItem>
              <SelectItem value="mileage-asc">Mileage: Lowest First</SelectItem>
              <SelectItem value="rating-desc">Rating: Highest First</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" onClick={() => setFilterOpen(true)}>
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Vehicle
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Add New Vehicle</DialogTitle>
                <DialogDescription>
                  Add a vehicle you've found to track and manage
                </DialogDescription>
              </DialogHeader>
              <VehicleForm onSubmit={addVehicle} />
            </DialogContent>
          </Dialog>
        </div>

        <TabsContent value="search" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredAndSortedVehicles.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
          {filteredAndSortedVehicles.length === 0 && (
            <div className="text-center py-12">
              <Car className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">No vehicles found</h3>
              <p className="text-muted-foreground">Try adjusting your search criteria or filters</p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="saved" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {vehicles.filter(v => v.isSaved).map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
          {vehicles.filter(v => v.isSaved).length === 0 && (
            <div className="text-center py-12">
              <Heart className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">No saved vehicles</h3>
              <p className="text-muted-foreground">Save vehicles you&apos;re interested in to keep track of them</p>
            </div>
          )}
        </TabsContent>
      </Tabs>

      {/* Filter Dialog */}
      <Dialog open={filterOpen} onOpenChange={setFilterOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Filter Vehicles</DialogTitle>
            <DialogDescription>
              Narrow down your search with these filters
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Min Price</Label>
                <Input
                  type="number"
                  placeholder="15000"
                  value={filters.priceMin}
                  onChange={(e) => setFilters(prev => ({ ...prev, priceMin: e.target.value }))}
                />
              </div>
              <div>
                <Label>Max Price</Label>
                <Input
                  type="number"
                  placeholder="50000"
                  value={filters.priceMax}
                  onChange={(e) => setFilters(prev => ({ ...prev, priceMax: e.target.value }))}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Min Year</Label>
                <Input
                  type="number"
                  placeholder="2018"
                  value={filters.yearMin}
                  onChange={(e) => setFilters(prev => ({ ...prev, yearMin: e.target.value }))}
                />
              </div>
              <div>
                <Label>Max Year</Label>
                <Input
                  type="number"
                  placeholder="2024"
                  value={filters.yearMax}
                  onChange={(e) => setFilters(prev => ({ ...prev, yearMax: e.target.value }))}
                />
              </div>
            </div>
            <div>
              <Label>Max Mileage</Label>
              <Input
                type="number"
                placeholder="50000"
                value={filters.mileageMax}
                onChange={(e) => setFilters(prev => ({ ...prev, mileageMax: e.target.value }))}
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <Label>Fuel Type</Label>
                <Select value={filters.fuelType} onValueChange={(value) => setFilters(prev => ({ ...prev, fuelType: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Any" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Any</SelectItem>
                    <SelectItem value="Gasoline">Gasoline</SelectItem>
                    <SelectItem value="Hybrid">Hybrid</SelectItem>
                    <SelectItem value="Electric">Electric</SelectItem>
                    <SelectItem value="Diesel">Diesel</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Transmission</Label>
                <Select value={filters.transmission} onValueChange={(value) => setFilters(prev => ({ ...prev, transmission: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Any" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Any</SelectItem>
                    <SelectItem value="Automatic">Automatic</SelectItem>
                    <SelectItem value="Manual">Manual</SelectItem>
                    <SelectItem value="CVT">CVT</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Drivetrain</Label>
                <Select value={filters.drivetrain} onValueChange={(value) => setFilters(prev => ({ ...prev, drivetrain: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Any" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Any</SelectItem>
                    <SelectItem value="FWD">FWD</SelectItem>
                    <SelectItem value="RWD">RWD</SelectItem>
                    <SelectItem value="AWD">AWD</SelectItem>
                    <SelectItem value="4WD">4WD</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => {
              setFilters({
                priceMin: "",
                priceMax: "",
                yearMin: "",
                yearMax: "",
                mileageMax: "",
                fuelType: "",
                transmission: "",
                drivetrain: ""
              })
            }}>
              Clear All
            </Button>
            <Button onClick={() => setFilterOpen(false)}>Apply Filters</Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Vehicle Details Dialog */}
      {selectedVehicle && (
        <Dialog open={!!selectedVehicle} onOpenChange={() => setSelectedVehicle(null)}>
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle>{selectedVehicle.year} {selectedVehicle.make} {selectedVehicle.model}</DialogTitle>
              <DialogDescription>{selectedVehicle.trim}</DialogDescription>
            </DialogHeader>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <div className="aspect-video bg-muted rounded-lg mb-4" />
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Price:</span>
                    <span className="text-2xl font-bold text-primary">${selectedVehicle.price.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Mileage:</span>
                    <span>{selectedVehicle.mileage.toLocaleString()} miles</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">MPG:</span>
                    <span>{selectedVehicle.mpg}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Transmission:</span>
                    <span>{selectedVehicle.transmission}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Drivetrain:</span>
                    <span>{selectedVehicle.drivetrain}</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Dealer Information</h4>
                <div className="space-y-1 text-sm mb-4">
                  <p className="font-medium">{selectedVehicle.dealer}</p>
                  <p className="text-muted-foreground">{selectedVehicle.location}</p>
                  <p className="text-muted-foreground">{selectedVehicle.phone}</p>
                </div>
                <h4 className="font-semibold mb-2">Features</h4>
                <div className="flex flex-wrap gap-1 mb-4">
                  {selectedVehicle.features.map((feature, index) => (
                    <Badge key={index} variant="outline">{feature}</Badge>
                  ))}
                </div>
                {selectedVehicle.notes && (
                  <>
                    <h4 className="font-semibold mb-2">Notes</h4>
                    <p className="text-sm text-muted-foreground">{selectedVehicle.notes}</p>
                  </>
                )}
              </div>
            </div>
            <div className="flex justify-between">
              <Button variant="outline" onClick={() => deleteVehicle(selectedVehicle.id)}>
                <Trash2 className="h-4 w-4 mr-2" />
                Delete
              </Button>
              <div className="flex gap-2">
                <Button variant="outline" onClick={() => setEditingVehicle(selectedVehicle)}>
                  <Edit className="h-4 w-4 mr-2" />
                  Edit
                </Button>
                <Button onClick={() => toggleSaved(selectedVehicle.id)}>
                  <Heart className={`h-4 w-4 mr-2 ${selectedVehicle.isSaved ? 'fill-current' : ''}`} />
                  {selectedVehicle.isSaved ? 'Unsave' : 'Save'}
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}

      {/* Edit Vehicle Dialog */}
      {editingVehicle && (
        <Dialog open={!!editingVehicle} onOpenChange={() => setEditingVehicle(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Edit Vehicle</DialogTitle>
              <DialogDescription>Update vehicle information</DialogDescription>
            </DialogHeader>
            <VehicleForm 
              vehicle={editingVehicle} 
              onSubmit={(updates) => updateVehicle(editingVehicle.id, updates)} 
            />
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}

function VehicleForm({ vehicle, onSubmit }: { vehicle?: Vehicle; onSubmit: (data: Partial<Vehicle>) => void }) {
  const [formData, setFormData] = useState({
    year: vehicle?.year || new Date().getFullYear(),
    make: vehicle?.make || "",
    model: vehicle?.model || "",
    trim: vehicle?.trim || "",
    price: vehicle?.price || 0,
    mileage: vehicle?.mileage || 0,
    fuelType: vehicle?.fuelType || "Gasoline",
    transmission: vehicle?.transmission || "Automatic",
    drivetrain: vehicle?.drivetrain || "FWD",
    mpg: vehicle?.mpg || "",
    dealer: vehicle?.dealer || "",
    location: vehicle?.location || "",
    phone: vehicle?.phone || "",
    features: vehicle?.features.join(", ") || "",
    notes: vehicle?.notes || "",
    rating: vehicle?.rating || 0,
    status: vehicle?.status || "available"
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({
      ...formData,
      features: formData.features.split(",").map(f => f.trim()).filter(f => f)
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-3 gap-4">
        <div>
          <Label>Year</Label>
          <Input
            type="number"
            value={formData.year}
            onChange={(e) => setFormData(prev => ({ ...prev, year: parseInt(e.target.value) }))}
            required
          />
        </div>
        <div>
          <Label>Make</Label>
          <Input
            value={formData.make}
            onChange={(e) => setFormData(prev => ({ ...prev, make: e.target.value }))}
            required
          />
        </div>
        <div>
          <Label>Model</Label>
          <Input
            value={formData.model}
            onChange={(e) => setFormData(prev => ({ ...prev, model: e.target.value }))}
            required
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label>Trim</Label>
          <Input
            value={formData.trim}
            onChange={(e) => setFormData(prev => ({ ...prev, trim: e.target.value }))}
          />
        </div>
        <div>
          <Label>Price</Label>
          <Input
            type="number"
            value={formData.price}
            onChange={(e) => setFormData(prev => ({ ...prev, price: parseInt(e.target.value) }))}
            required
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <Label>Mileage</Label>
          <Input
            type="number"
            value={formData.mileage}
            onChange={(e) => setFormData(prev => ({ ...prev, mileage: parseInt(e.target.value) }))}
          />
        </div>
        <div>
          <Label>MPG</Label>
          <Input
            value={formData.mpg}
            onChange={(e) => setFormData(prev => ({ ...prev, mpg: e.target.value }))}
            placeholder="25/35 city/highway"
          />
        </div>
        <div>
          <Label>Rating</Label>
          <Input
            type="number"
            step="0.1"
            min="0"
            max="5"
            value={formData.rating}
            onChange={(e) => setFormData(prev => ({ ...prev, rating: parseFloat(e.target.value) }))}
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <Label>Fuel Type</Label>
          <Select value={formData.fuelType} onValueChange={(value) => setFormData(prev => ({ ...prev, fuelType: value }))}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Gasoline">Gasoline</SelectItem>
              <SelectItem value="Hybrid">Hybrid</SelectItem>
              <SelectItem value="Electric">Electric</SelectItem>
              <SelectItem value="Diesel">Diesel</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>Transmission</Label>
          <Select value={formData.transmission} onValueChange={(value) => setFormData(prev => ({ ...prev, transmission: value }))}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Automatic">Automatic</SelectItem>
              <SelectItem value="Manual">Manual</SelectItem>
              <SelectItem value="CVT">CVT</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>Drivetrain</Label>
          <Select value={formData.drivetrain} onValueChange={(value) => setFormData(prev => ({ ...prev, drivetrain: value }))}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="FWD">FWD</SelectItem>
              <SelectItem value="RWD">RWD</SelectItem>
              <SelectItem value="AWD">AWD</SelectItem>
              <SelectItem value="4WD">4WD</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label>Dealer</Label>
          <Input
            value={formData.dealer}
            onChange={(e) => setFormData(prev => ({ ...prev, dealer: e.target.value }))}
          />
        </div>
        <div>
          <Label>Location</Label>
          <Input
            value={formData.location}
            onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label>Phone</Label>
          <Input
            value={formData.phone}
            onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
          />
        </div>
        <div>
          <Label>Status</Label>
          <Select value={formData.status} onValueChange={(value) => setFormData(prev => ({ ...prev, status: value as Vehicle['status'] }))}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="available">Available</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="sold">Sold</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div>
        <Label>Features (comma-separated)</Label>
        <Input
          value={formData.features}
          onChange={(e) => setFormData(prev => ({ ...prev, features: e.target.value }))}
          placeholder="Heated Seats, Sunroof, Backup Camera"
        />
      </div>
      <div>
        <Label>Notes</Label>
        <Textarea
          value={formData.notes}
          onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
          placeholder="Any additional notes about this vehicle..."
        />
      </div>
      <Button type="submit" className="w-full">
        {vehicle ? 'Update Vehicle' : 'Add Vehicle'}
      </Button>
    </form>
  )
}