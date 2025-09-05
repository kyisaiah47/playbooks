"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Scale, Star, DollarSign, Fuel, Calendar, Car, Plus, X, Check, Minus } from "lucide-react"

interface ComparisonVehicle {
  id: string
  year: number
  make: string
  model: string
  trim: string
  price: number
  mileage: number
  mpg: string
  rating: number
  pros: string[]
  cons: string[]
  features: string[]
  specs: {
    engine: string
    transmission: string
    drivetrain: string
    fuelType: string
    seatingCapacity: number
    cargoSpace: string
  }
  dealership: string
  location: string
}

export function VehicleComparison() {
  const [selectedVehicles, setSelectedVehicles] = useState<ComparisonVehicle[]>([
    {
      id: "1",
      year: 2023,
      make: "Honda",
      model: "Accord",
      trim: "EX-L",
      price: 32000,
      mileage: 15000,
      mpg: "32/42 city/highway",
      rating: 4.5,
      pros: ["Excellent reliability", "Spacious interior", "Good fuel economy", "Advanced safety features"],
      cons: ["Road noise at highway speeds", "CVT transmission feel"],
      features: ["Heated Seats", "Sunroof", "Backup Camera", "Apple CarPlay", "Honda Sensing"],
      specs: {
        engine: "1.5L Turbo 4-cyl",
        transmission: "CVT",
        drivetrain: "FWD",
        fuelType: "Gasoline",
        seatingCapacity: 5,
        cargoSpace: "16.7 cu ft"
      },
      dealership: "Honda Downtown",
      location: "New York, NY"
    },
    {
      id: "2",
      year: 2022,
      make: "Toyota",
      model: "Camry",
      trim: "XSE",
      price: 28500,
      mileage: 22000,
      mpg: "31/41 city/highway",
      rating: 4.2,
      pros: ["Toyota reliability", "Sporty handling", "Strong resale value", "Comfortable ride"],
      cons: ["Interior materials quality", "Infotainment complexity"],
      features: ["Navigation", "Leather Seats", "Wireless Charging", "Toyota Safety Sense"],
      specs: {
        engine: "2.5L 4-cyl",
        transmission: "8-speed automatic",
        drivetrain: "FWD",
        fuelType: "Gasoline",
        seatingCapacity: 5,
        cargoSpace: "15.1 cu ft"
      },
      dealership: "Toyota City",
      location: "Brooklyn, NY"
    },
    {
      id: "3",
      year: 2021,
      make: "Mazda",
      model: "CX-5",
      trim: "Grand Touring",
      price: 26000,
      mileage: 35000,
      mpg: "26/31 city/highway",
      rating: 4.0,
      pros: ["Excellent handling", "Premium interior", "All-wheel drive", "Fun to drive"],
      cons: ["Less cargo space", "Road noise", "Smaller rear seat"],
      features: ["AWD", "Premium Audio", "Heated Seats", "Power Liftgate"],
      specs: {
        engine: "2.5L 4-cyl",
        transmission: "6-speed automatic",
        drivetrain: "AWD",
        fuelType: "Gasoline",
        seatingCapacity: 5,
        cargoSpace: "30.9 cu ft"
      },
      dealership: "Mazda of Queens",
      location: "Queens, NY"
    }
  ])

  const [availableVehicles] = useState<ComparisonVehicle[]>([
    {
      id: "4",
      year: 2023,
      make: "Nissan",
      model: "Altima",
      trim: "SV",
      price: 26500,
      mileage: 8000,
      mpg: "32/46 city/highway",
      rating: 3.8,
      pros: ["Excellent fuel economy", "Comfortable seats", "Good value"],
      cons: ["CVT reliability concerns", "Interior quality"],
      features: ["ProPILOT Assist", "Remote Start", "8-inch touchscreen"],
      specs: {
        engine: "2.5L 4-cyl",
        transmission: "CVT",
        drivetrain: "FWD",
        fuelType: "Gasoline",
        seatingCapacity: 5,
        cargoSpace: "15.4 cu ft"
      },
      dealership: "Nissan Metro",
      location: "Manhattan, NY"
    }
  ])

  const addVehicleToComparison = (vehicle: ComparisonVehicle) => {
    if (selectedVehicles.length < 4) {
      setSelectedVehicles(prev => [...prev, vehicle])
    }
  }

  const removeVehicleFromComparison = (vehicleId: string) => {
    setSelectedVehicles(prev => prev.filter(v => v.id !== vehicleId))
  }

  const getBestValue = (field: keyof ComparisonVehicle, isLowerBetter = false) => {
    if (selectedVehicles.length === 0) return null
    
    const values = selectedVehicles.map(v => {
      const value = v[field]
      return typeof value === 'number' ? value : 0
    })
    
    const bestValue = isLowerBetter ? Math.min(...values) : Math.max(...values)
    return bestValue
  }

  const isBestValue = (vehicle: ComparisonVehicle, field: keyof ComparisonVehicle, isLowerBetter = false) => {
    const bestValue = getBestValue(field, isLowerBetter)
    return bestValue === vehicle[field]
  }

  const ComparisonRow = ({ 
    label, 
    getValue, 
    isLowerBetter = false,
    formatter = (val: unknown) => val?.toString() || 'N/A'
  }: {
    label: string
    getValue: (vehicle: ComparisonVehicle) => unknown
    isLowerBetter?: boolean
    formatter?: (val: unknown) => string
  }) => {
    const values = selectedVehicles.map(getValue)
    const numericValues = values.filter(v => typeof v === 'number')
    
    let bestValue = null
    if (numericValues.length > 0) {
      bestValue = isLowerBetter 
        ? Math.min(...numericValues as number[]) 
        : Math.max(...numericValues as number[])
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 py-3 border-b">
        <div className="font-medium">{label}</div>
        {selectedVehicles.map((vehicle, index) => {
          const value = getValue(vehicle)
          const isBest = bestValue !== null && value === bestValue
          return (
            <div key={vehicle.id} className={`${isBest ? 'text-primary font-semibold' : ''}`}>
              {formatter(value)}
              {isBest && <Check className="inline ml-1 h-3 w-3" />}
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold flex items-center mb-2">
          <Scale className="mr-2 h-8 w-8" />
          Vehicle Comparison
        </h1>
        <p className="text-muted-foreground">
          Compare vehicles side by side to make the best decision
        </p>
      </div>

      {selectedVehicles.length === 0 ? (
        <Card>
          <CardContent className="text-center py-12">
            <Scale className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">No vehicles selected</h3>
            <p className="text-muted-foreground mb-4">Add vehicles below to start comparing</p>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              Comparison ({selectedVehicles.length}/4)
              <Badge variant="secondary">
                Best values highlighted in green
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* Vehicle Headers */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div></div>
              {selectedVehicles.map((vehicle) => (
                <Card key={vehicle.id} className="relative">
                  <Button
                    variant="outline"
                    size="sm"
                    className="absolute -top-2 -right-2 h-6 w-6 p-0 rounded-full"
                    onClick={() => removeVehicleFromComparison(vehicle.id)}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                  <CardContent className="p-4 text-center">
                    <div className="aspect-video bg-muted rounded mb-2" />
                    <h3 className="font-semibold text-sm">
                      {vehicle.year} {vehicle.make} {vehicle.model}
                    </h3>
                    <p className="text-xs text-muted-foreground">{vehicle.trim}</p>
                    <div className="flex items-center justify-center mt-1">
                      <Star className="h-3 w-3 fill-current text-primary mr-1" />
                      <span className="text-xs">{vehicle.rating}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Comparison Table */}
            <div className="space-y-0">
              <ComparisonRow
                label="Price"
                getValue={(v) => v.price}
                isLowerBetter={true}
                formatter={(val) => `$${val.toLocaleString()}`}
              />
              <ComparisonRow
                label="Mileage"
                getValue={(v) => v.mileage}
                isLowerBetter={true}
                formatter={(val) => `${val.toLocaleString()} miles`}
              />
              <ComparisonRow
                label="MPG"
                getValue={(v) => v.mpg}
                formatter={(val) => val}
              />
              <ComparisonRow
                label="Rating"
                getValue={(v) => v.rating}
                formatter={(val) => `${val}/5`}
              />
              <ComparisonRow
                label="Engine"
                getValue={(v) => v.specs.engine}
              />
              <ComparisonRow
                label="Transmission"
                getValue={(v) => v.specs.transmission}
              />
              <ComparisonRow
                label="Drivetrain"
                getValue={(v) => v.specs.drivetrain}
              />
              <ComparisonRow
                label="Seating"
                getValue={(v) => v.specs.seatingCapacity}
                formatter={(val) => `${val} seats`}
              />
              <ComparisonRow
                label="Cargo Space"
                getValue={(v) => v.specs.cargoSpace}
              />
              <ComparisonRow
                label="Dealership"
                getValue={(v) => v.dealership}
              />
            </div>

            {/* Pros and Cons */}
            <div className="mt-8 space-y-4">
              <h3 className="text-lg font-semibold">Pros & Cons</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div></div>
                {selectedVehicles.map((vehicle) => (
                  <div key={vehicle.id} className="space-y-3">
                    <div>
                      <h4 className="font-medium text-primary text-sm mb-1">Pros</h4>
                      <ul className="text-xs space-y-1">
                        {vehicle.pros.map((pro, index) => (
                          <li key={index} className="flex items-start">
                            <Plus className="h-3 w-3 text-primary mr-1 mt-0.5 flex-shrink-0" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-destructive text-sm mb-1">Cons</h4>
                      <ul className="text-xs space-y-1">
                        {vehicle.cons.map((con, index) => (
                          <li key={index} className="flex items-start">
                            <Minus className="h-3 w-3 text-destructive mr-1 mt-0.5 flex-shrink-0" />
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mt-8 space-y-4">
              <h3 className="text-lg font-semibold">Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div></div>
                {selectedVehicles.map((vehicle) => (
                  <div key={vehicle.id} className="space-y-1">
                    {vehicle.features.map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs mr-1 mb-1">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Available Vehicles to Add */}
      {(availableVehicles.length > 0 || selectedVehicles.length < 4) && (
        <Card>
          <CardHeader>
            <CardTitle>Add Vehicles to Compare</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {availableVehicles
                .filter(v => !selectedVehicles.find(sv => sv.id === v.id))
                .map((vehicle) => (
                <Card key={vehicle.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="aspect-video bg-muted rounded mb-2" />
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold">
                          {vehicle.year} {vehicle.make} {vehicle.model}
                        </h3>
                        <p className="text-sm text-muted-foreground">{vehicle.trim}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-primary">${vehicle.price.toLocaleString()}</p>
                        <div className="flex items-center">
                          <Star className="h-3 w-3 fill-current text-primary mr-1" />
                          {vehicle.rating}
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-sm text-muted-foreground mb-3">
                      <div className="flex justify-between">
                        <span>{vehicle.mileage.toLocaleString()} miles</span>
                        <span>{vehicle.mpg}</span>
                      </div>
                    </div>

                    <Button 
                      size="sm" 
                      className="w-full"
                      onClick={() => addVehicleToComparison(vehicle)}
                      disabled={selectedVehicles.length >= 4}
                    >
                      <Plus className="h-3 w-3 mr-1" />
                      Add to Compare
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {selectedVehicles.length >= 4 && (
              <p className="text-center text-muted-foreground mt-4">
                Maximum of 4 vehicles can be compared at once
              </p>
            )}
          </CardContent>
        </Card>
      )}

      {/* Summary */}
      {selectedVehicles.length > 1 && (
        <Card>
          <CardHeader>
            <CardTitle>Quick Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="text-center p-4 bg-primary/10 rounded-lg">
                <h3 className="font-semibold text-primary mb-1">Best Value</h3>
                {(() => {
                  const bestValue = selectedVehicles.reduce((best, current) => 
                    current.price < best.price ? current : best
                  )
                  return (
                    <p className="text-sm">
                      {bestValue.year} {bestValue.make} {bestValue.model}
                      <br />
                      <span className="font-bold">${bestValue.price.toLocaleString()}</span>
                    </p>
                  )
                })()}
              </div>
              
              <div className="text-center p-4 bg-primary/10 rounded-lg">
                <h3 className="font-semibold text-primary mb-1">Highest Rated</h3>
                {(() => {
                  const bestRated = selectedVehicles.reduce((best, current) => 
                    current.rating > best.rating ? current : best
                  )
                  return (
                    <p className="text-sm">
                      {bestRated.year} {bestRated.make} {bestRated.model}
                      <br />
                      <span className="font-bold">{bestRated.rating}/5 stars</span>
                    </p>
                  )
                })()}
              </div>
              
              <div className="text-center p-4 bg-muted rounded-lg">
                <h3 className="font-semibold text-foreground mb-1">Lowest Mileage</h3>
                {(() => {
                  const lowestMileage = selectedVehicles.reduce((best, current) => 
                    current.mileage < best.mileage ? current : best
                  )
                  return (
                    <p className="text-sm">
                      {lowestMileage.year} {lowestMileage.make} {lowestMileage.model}
                      <br />
                      <span className="font-bold">{lowestMileage.mileage.toLocaleString()} miles</span>
                    </p>
                  )
                })()}
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}