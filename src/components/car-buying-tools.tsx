"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Diamond, 
  Shield, 
  Calculator, 
  Search, 
  AlertTriangle, 
  Fuel, 
  RefreshCw, 
  FileText, 
  Car,
  CheckCircle,
  ExternalLink,
  TrendingUp,
  DollarSign
} from "lucide-react"

// Vehicle Valuation Tool
export function VehicleValuation() {
  const [vehicle, setVehicle] = useState({
    year: new Date().getFullYear(),
    make: "",
    model: "",
    trim: "",
    mileage: 0,
    condition: "good"
  })
  const [valuation, setValuation] = useState<any>(null)

  const calculateValue = () => {
    // Mock valuation calculation
    const baseValue = 25000
    const yearDeduction = (new Date().getFullYear() - vehicle.year) * 2000
    const mileageDeduction = (vehicle.mileage / 1000) * 50
    const conditionMultiplier = vehicle.condition === "excellent" ? 1.1 : vehicle.condition === "fair" ? 0.9 : 1.0
    
    const estimatedValue = Math.max(1000, (baseValue - yearDeduction - mileageDeduction) * conditionMultiplier)
    
    setValuation({
      trade_in: Math.round(estimatedValue * 0.8),
      private_party: Math.round(estimatedValue),
      dealer_retail: Math.round(estimatedValue * 1.2)
    })
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold flex items-center mb-2">
          <Diamond className="mr-2 h-8 w-8" />
          Vehicle Valuation
        </h1>
        <p className="text-muted-foreground">
          Get accurate market valuations for any vehicle
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Vehicle Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Year</Label>
                <Input
                  type="number"
                  value={vehicle.year}
                  onChange={(e) => setVehicle(prev => ({ ...prev, year: parseInt(e.target.value) }))}
                />
              </div>
              <div>
                <Label>Mileage</Label>
                <Input
                  type="number"
                  value={vehicle.mileage}
                  onChange={(e) => setVehicle(prev => ({ ...prev, mileage: parseInt(e.target.value) }))}
                />
              </div>
            </div>
            <div>
              <Label>Make</Label>
              <Input
                value={vehicle.make}
                onChange={(e) => setVehicle(prev => ({ ...prev, make: e.target.value }))}
                placeholder="Toyota, Honda, etc."
              />
            </div>
            <div>
              <Label>Model</Label>
              <Input
                value={vehicle.model}
                onChange={(e) => setVehicle(prev => ({ ...prev, model: e.target.value }))}
                placeholder="Camry, Accord, etc."
              />
            </div>
            <div>
              <Label>Trim</Label>
              <Input
                value={vehicle.trim}
                onChange={(e) => setVehicle(prev => ({ ...prev, trim: e.target.value }))}
                placeholder="EX, Limited, etc."
              />
            </div>
            <div>
              <Label>Condition</Label>
              <select
                className="w-full border border-input bg-background px-3 py-2 text-sm ring-offset-background rounded-md"
                value={vehicle.condition}
                onChange={(e) => setVehicle(prev => ({ ...prev, condition: e.target.value }))}
              >
                <option value="excellent">Excellent</option>
                <option value="good">Good</option>
                <option value="fair">Fair</option>
                <option value="poor">Poor</option>
              </select>
            </div>
            <Button onClick={calculateValue} className="w-full">
              <Calculator className="mr-2 h-4 w-4" />
              Calculate Value
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Estimated Values</CardTitle>
          </CardHeader>
          <CardContent>
            {valuation ? (
              <div className="space-y-4">
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <p className="text-sm text-muted-foreground">Private Party</p>
                  <p className="text-2xl font-bold text-primary">${valuation.private_party.toLocaleString()}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">Trade-in</p>
                    <p className="text-xl font-bold">${valuation.trade_in.toLocaleString()}</p>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">Dealer Retail</p>
                    <p className="text-xl font-bold">${valuation.dealer_retail.toLocaleString()}</p>
                  </div>
                </div>
                <div className="text-xs text-muted-foreground">
                  * Values are estimates based on market data and vehicle condition
                </div>
              </div>
            ) : (
              <div className="text-center text-muted-foreground py-8">
                Enter vehicle details and click Calculate Value to see estimated values
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

// Insurance Quotes Tool
export function InsuranceQuotes() {
  const [quotes] = useState([
    { company: "State Farm", monthly: 125, coverage: "Full Coverage", rating: 4.2 },
    { company: "Geico", monthly: 98, coverage: "Full Coverage", rating: 4.1 },
    { company: "Progressive", monthly: 112, coverage: "Full Coverage", rating: 3.9 },
    { company: "Allstate", monthly: 135, coverage: "Full Coverage", rating: 4.0 }
  ])

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold flex items-center mb-2">
          <Shield className="mr-2 h-8 w-8" />
          Insurance Quotes
        </h1>
        <p className="text-muted-foreground">
          Compare insurance quotes from top providers
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {quotes.map((quote, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle>{quote.company}</CardTitle>
                <Badge variant="outline">{quote.coverage}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-4">
                <p className="text-2xl font-bold text-primary">${quote.monthly}/mo</p>
                <p className="text-sm text-muted-foreground">Estimated monthly premium</p>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm">Customer Rating:</span>
                <span className="font-semibold">{quote.rating}/5.0</span>
              </div>
              <Button variant="outline" className="w-full">
                <ExternalLink className="mr-2 h-4 w-4" />
                Get Quote
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

// Loan Calculator
export function LoanCalculator() {
  const [loan, setLoan] = useState({
    amount: 25000,
    rate: 4.5,
    term: 60
  })

  const monthlyPayment = loan.amount > 0 && loan.rate > 0 && loan.term > 0
    ? (loan.amount * (loan.rate / 100 / 12)) / (1 - Math.pow(1 + loan.rate / 100 / 12, -loan.term))
    : 0

  const totalCost = monthlyPayment * loan.term
  const totalInterest = totalCost - loan.amount

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold flex items-center mb-2">
          <Calculator className="mr-2 h-8 w-8" />
          Loan Calculator
        </h1>
        <p className="text-muted-foreground">
          Calculate monthly payments and total loan costs
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Loan Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Loan Amount ($)</Label>
              <Input
                type="number"
                value={loan.amount}
                onChange={(e) => setLoan(prev => ({ ...prev, amount: parseInt(e.target.value) || 0 }))}
              />
            </div>
            <div>
              <Label>Interest Rate (%)</Label>
              <Input
                type="number"
                step="0.1"
                value={loan.rate}
                onChange={(e) => setLoan(prev => ({ ...prev, rate: parseFloat(e.target.value) || 0 }))}
              />
            </div>
            <div>
              <Label>Loan Term (months)</Label>
              <select
                className="w-full border border-input bg-background px-3 py-2 text-sm ring-offset-background rounded-md"
                value={loan.term}
                onChange={(e) => setLoan(prev => ({ ...prev, term: parseInt(e.target.value) }))}
              >
                <option value={24}>24 months</option>
                <option value={36}>36 months</option>
                <option value={48}>48 months</option>
                <option value={60}>60 months</option>
                <option value={72}>72 months</option>
                <option value={84}>84 months</option>
              </select>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Payment Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center p-4 bg-primary/10 rounded-lg">
              <p className="text-sm text-muted-foreground">Monthly Payment</p>
              <p className="text-2xl font-bold text-primary">${monthlyPayment.toFixed(2)}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">Total Cost</p>
                <p className="text-lg font-bold">${totalCost.toFixed(2)}</p>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">Total Interest</p>
                <p className="text-lg font-bold">${totalInterest.toFixed(2)}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

// VIN Decoder
export function VinDecoder() {
  const [vin, setVin] = useState("")
  const [decoded, setDecoded] = useState<any>(null)

  const decodeVin = () => {
    // Mock VIN decoding
    if (vin.length === 17) {
      setDecoded({
        year: "2020",
        make: "Toyota",
        model: "Camry",
        trim: "XLE",
        engine: "2.5L 4-cyl",
        transmission: "8-speed Automatic",
        drivetrain: "FWD",
        body_style: "Sedan",
        country: "United States",
        manufacturer: "Toyota Motor Manufacturing"
      })
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold flex items-center mb-2">
          <Search className="mr-2 h-8 w-8" />
          VIN Decoder
        </h1>
        <p className="text-muted-foreground">
          Decode Vehicle Identification Numbers to get detailed vehicle information
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Enter VIN</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label>VIN (17 characters)</Label>
            <Input
              value={vin}
              onChange={(e) => setVin(e.target.value.toUpperCase())}
              placeholder="1HGBH41JXMN109186"
              maxLength={17}
            />
          </div>
          <Button onClick={decodeVin} disabled={vin.length !== 17} className="w-full">
            <Search className="mr-2 h-4 w-4" />
            Decode VIN
          </Button>
        </CardContent>
      </Card>

      {decoded && (
        <Card>
          <CardHeader>
            <CardTitle>Vehicle Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="font-semibold mb-2">Basic Information</h4>
                <div className="space-y-2 text-sm">
                  <div><strong>Year:</strong> {decoded.year}</div>
                  <div><strong>Make:</strong> {decoded.make}</div>
                  <div><strong>Model:</strong> {decoded.model}</div>
                  <div><strong>Trim:</strong> {decoded.trim}</div>
                  <div><strong>Body Style:</strong> {decoded.body_style}</div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Technical Specifications</h4>
                <div className="space-y-2 text-sm">
                  <div><strong>Engine:</strong> {decoded.engine}</div>
                  <div><strong>Transmission:</strong> {decoded.transmission}</div>
                  <div><strong>Drivetrain:</strong> {decoded.drivetrain}</div>
                  <div><strong>Country:</strong> {decoded.country}</div>
                  <div><strong>Manufacturer:</strong> {decoded.manufacturer}</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

// Recall Check
export function RecallCheck() {
  const [vin, setVin] = useState("")
  const [recalls, setRecalls] = useState<any[]>([])
  const [checked, setChecked] = useState(false)

  const checkRecalls = () => {
    // Mock recall data
    setRecalls([
      {
        id: "NHTSA20V123",
        date: "2020-03-15",
        title: "Airbag Inflator Issue",
        description: "The passenger airbag inflator may rupture during deployment, creating a risk of injury.",
        remedy: "Dealers will replace the airbag inflator free of charge.",
        status: "Remedy Available"
      },
      {
        id: "NHTSA20V456",
        date: "2020-08-22",
        title: "Fuel Pump Recall",
        description: "The fuel pump may fail, causing the engine to stall and increasing crash risk.",
        remedy: "Dealers will replace the fuel pump assembly free of charge.",
        status: "Remedy Available"
      }
    ])
    setChecked(true)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold flex items-center mb-2">
          <AlertTriangle className="mr-2 h-8 w-8" />
          Recall Check
        </h1>
        <p className="text-muted-foreground">
          Check for safety recalls and service bulletins
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Check Vehicle Recalls</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label>VIN (17 characters)</Label>
            <Input
              value={vin}
              onChange={(e) => setVin(e.target.value.toUpperCase())}
              placeholder="1HGBH41JXMN109186"
              maxLength={17}
            />
          </div>
          <Button onClick={checkRecalls} disabled={vin.length !== 17} className="w-full">
            <AlertTriangle className="mr-2 h-4 w-4" />
            Check Recalls
          </Button>
        </CardContent>
      </Card>

      {checked && (
        <div className="space-y-4">
          {recalls.length > 0 ? (
            <>
              <div className="flex items-center space-x-2 text-primary">
                <AlertTriangle className="h-5 w-5" />
                <h3 className="text-lg font-semibold">{recalls.length} Recall(s) Found</h3>
              </div>
              {recalls.map((recall, index) => (
                <Card key={index} className="border-primary/20">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{recall.title}</CardTitle>
                      <Badge variant="outline">{recall.status}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">ID: {recall.id} • Date: {recall.date}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold">Problem:</h4>
                        <p className="text-sm">{recall.description}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold">Remedy:</h4>
                        <p className="text-sm">{recall.remedy}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </>
          ) : (
            <div className="flex items-center space-x-2 text-muted-foreground">
              <CheckCircle className="h-5 w-5" />
              <span>No recalls found for this vehicle</span>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

// MPG Calculator
export function MpgCalculator() {
  const [trip, setTrip] = useState({
    miles: 0,
    gallons: 0,
    cost: 0
  })

  const mpg = trip.miles > 0 && trip.gallons > 0 ? trip.miles / trip.gallons : 0
  const costPerMile = trip.miles > 0 && trip.cost > 0 ? trip.cost / trip.miles : 0

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold flex items-center mb-2">
          <Fuel className="mr-2 h-8 w-8" />
          MPG Calculator
        </h1>
        <p className="text-muted-foreground">
          Calculate fuel efficiency and travel costs
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Trip Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Miles Driven</Label>
              <Input
                type="number"
                value={trip.miles}
                onChange={(e) => setTrip(prev => ({ ...prev, miles: parseFloat(e.target.value) || 0 }))}
              />
            </div>
            <div>
              <Label>Gallons Used</Label>
              <Input
                type="number"
                step="0.1"
                value={trip.gallons}
                onChange={(e) => setTrip(prev => ({ ...prev, gallons: parseFloat(e.target.value) || 0 }))}
              />
            </div>
            <div>
              <Label>Total Fuel Cost ($)</Label>
              <Input
                type="number"
                step="0.01"
                value={trip.cost}
                onChange={(e) => setTrip(prev => ({ ...prev, cost: parseFloat(e.target.value) || 0 }))}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Calculations</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center p-4 bg-primary/10 rounded-lg">
              <p className="text-sm text-muted-foreground">Miles Per Gallon</p>
              <p className="text-2xl font-bold text-primary">{mpg.toFixed(1)} MPG</p>
            </div>
            <div className="text-center p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground">Cost Per Mile</p>
              <p className="text-lg font-bold">${costPerMile.toFixed(3)}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

// Trade-in Value
export function TradeInValue() {
  const [vehicle, setVehicle] = useState({
    year: new Date().getFullYear(),
    make: "",
    model: "",
    mileage: 0,
    condition: "good",
    accidents: false,
    service_records: true
  })
  const [estimate, setEstimate] = useState<number | null>(null)

  const calculateTradeIn = () => {
    const baseValue = 20000
    const yearDeduction = (new Date().getFullYear() - vehicle.year) * 1800
    const mileageDeduction = (vehicle.mileage / 1000) * 40
    const conditionMultiplier = vehicle.condition === "excellent" ? 1.0 : vehicle.condition === "fair" ? 0.8 : 0.9
    const accidentDeduction = vehicle.accidents ? 2000 : 0
    const serviceBonus = vehicle.service_records ? 500 : 0
    
    const tradeInValue = Math.max(1000, (baseValue - yearDeduction - mileageDeduction - accidentDeduction + serviceBonus) * conditionMultiplier * 0.8)
    setEstimate(Math.round(tradeInValue))
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold flex items-center mb-2">
          <RefreshCw className="mr-2 h-8 w-8" />
          Trade-in Value
        </h1>
        <p className="text-muted-foreground">
          Estimate your vehicle&apos;s trade-in value
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Vehicle Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Year</Label>
                <Input
                  type="number"
                  value={vehicle.year}
                  onChange={(e) => setVehicle(prev => ({ ...prev, year: parseInt(e.target.value) }))}
                />
              </div>
              <div>
                <Label>Mileage</Label>
                <Input
                  type="number"
                  value={vehicle.mileage}
                  onChange={(e) => setVehicle(prev => ({ ...prev, mileage: parseInt(e.target.value) }))}
                />
              </div>
            </div>
            <div>
              <Label>Make</Label>
              <Input
                value={vehicle.make}
                onChange={(e) => setVehicle(prev => ({ ...prev, make: e.target.value }))}
              />
            </div>
            <div>
              <Label>Model</Label>
              <Input
                value={vehicle.model}
                onChange={(e) => setVehicle(prev => ({ ...prev, model: e.target.value }))}
              />
            </div>
            <div>
              <Label>Condition</Label>
              <select
                className="w-full border border-input bg-background px-3 py-2 text-sm ring-offset-background rounded-md"
                value={vehicle.condition}
                onChange={(e) => setVehicle(prev => ({ ...prev, condition: e.target.value }))}
              >
                <option value="excellent">Excellent</option>
                <option value="good">Good</option>
                <option value="fair">Fair</option>
                <option value="poor">Poor</option>
              </select>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="accidents"
                  checked={vehicle.accidents}
                  onChange={(e) => setVehicle(prev => ({ ...prev, accidents: e.target.checked }))}
                />
                <Label htmlFor="accidents">Has been in accidents</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="service_records"
                  checked={vehicle.service_records}
                  onChange={(e) => setVehicle(prev => ({ ...prev, service_records: e.target.checked }))}
                />
                <Label htmlFor="service_records">Complete service records</Label>
              </div>
            </div>
            <Button onClick={calculateTradeIn} className="w-full">
              <Calculator className="mr-2 h-4 w-4" />
              Calculate Trade-in Value
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Estimated Trade-in Value</CardTitle>
          </CardHeader>
          <CardContent>
            {estimate ? (
              <div className="space-y-4">
                <div className="text-center p-6 bg-primary/10 rounded-lg">
                  <p className="text-2xl font-bold text-primary">${estimate.toLocaleString()}</p>
                  <p className="text-sm text-muted-foreground">Estimated trade-in value</p>
                </div>
                <div className="text-xs text-muted-foreground">
                  <p>* This is an estimate. Actual trade-in values may vary based on:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Current market demand</li>
                    <li>Vehicle condition assessment</li>
                    <li>Dealer inventory needs</li>
                    <li>Location and seasonal factors</li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="text-center text-muted-foreground py-8">
                Enter vehicle details to get trade-in estimate
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

// Warranty Info
export function WarrantyInfo() {
  const [warranties] = useState([
    {
      type: "Bumper-to-Bumper",
      coverage: "3 years / 36,000 miles",
      description: "Covers most components except normal wear items"
    },
    {
      type: "Powertrain",
      coverage: "5 years / 60,000 miles",
      description: "Covers engine, transmission, and drivetrain components"
    },
    {
      type: "Corrosion",
      coverage: "5 years / unlimited miles",
      description: "Covers rust-through of body panels"
    },
    {
      type: "Roadside Assistance",
      coverage: "3 years / 36,000 miles",
      description: "24/7 roadside assistance including towing"
    }
  ])

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold flex items-center mb-2">
          <FileText className="mr-2 h-8 w-8" />
          Warranty Information
        </h1>
        <p className="text-muted-foreground">
          Understanding vehicle warranties and coverage
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {warranties.map((warranty, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{warranty.type} Warranty</CardTitle>
              <p className="text-primary font-semibold">{warranty.coverage}</p>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{warranty.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Extended Warranty Options</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="text-center p-4 border rounded-lg">
                <h4 className="font-semibold mb-2">Basic Extended</h4>
                <p className="text-2xl font-bold text-primary mb-2">$1,200</p>
                <p className="text-sm text-muted-foreground">2 years / 24,000 miles additional coverage</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <h4 className="font-semibold mb-2">Premium Extended</h4>
                <p className="text-2xl font-bold text-primary mb-2">$2,400</p>
                <p className="text-sm text-muted-foreground">4 years / 48,000 miles additional coverage</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <h4 className="font-semibold mb-2">Ultimate Extended</h4>
                <p className="text-2xl font-bold text-primary mb-2">$3,600</p>
                <p className="text-sm text-muted-foreground">6 years / 72,000 miles additional coverage</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Registration Guide
export function RegistrationGuide() {
  const [step, setStep] = useState(1)
  const steps = [
    {
      title: "Gather Required Documents",
      items: [
        "Vehicle title or manufacturer's certificate of origin",
        "Bill of sale or purchase agreement",
        "Proof of insurance",
        "Valid driver's license",
        "Completed registration application"
      ]
    },
    {
      title: "Complete Inspection (if required)",
      items: [
        "Schedule safety inspection at authorized station",
        "Bring vehicle, insurance, and identification",
        "Obtain inspection certificate",
        "Pay inspection fee (typically $25-50)"
      ]
    },
    {
      title: "Visit DMV or Registration Office",
      items: [
        "Bring all required documents",
        "Complete registration application",
        "Pay registration fees and taxes",
        "Receive license plates and registration"
      ]
    },
    {
      title: "Finalize Registration",
      items: [
        "Install license plates on vehicle",
        "Keep registration documents in vehicle",
        "Update insurance with new vehicle information",
        "Schedule emissions test if required"
      ]
    }
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold flex items-center mb-2">
          <FileText className="mr-2 h-8 w-8" />
          Vehicle Registration Guide
        </h1>
        <p className="text-muted-foreground">
          Step-by-step guide to registering your vehicle
        </p>
      </div>

      <div className="flex space-x-2 mb-6">
        {steps.map((_, index) => (
          <Button
            key={index}
            variant={step === index + 1 ? "default" : "outline"}
            size="sm"
            onClick={() => setStep(index + 1)}
          >
            Step {index + 1}
          </Button>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Step {step}: {steps[step - 1].title}</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {steps[step - 1].items.map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-between mt-6">
            <Button 
              variant="outline" 
              onClick={() => setStep(Math.max(1, step - 1))}
              disabled={step === 1}
            >
              Previous
            </Button>
            <Button 
              onClick={() => setStep(Math.min(steps.length, step + 1))}
              disabled={step === steps.length}
            >
              Next
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Typical Costs</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h4 className="font-semibold mb-2">Registration Fees</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Base registration fee:</span>
                  <span>$25-75</span>
                </div>
                <div className="flex justify-between">
                  <span>Title fee:</span>
                  <span>$15-35</span>
                </div>
                <div className="flex justify-between">
                  <span>License plate fee:</span>
                  <span>$5-25</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Additional Costs</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Sales tax:</span>
                  <span>4-10% of value</span>
                </div>
                <div className="flex justify-between">
                  <span>Inspection fee:</span>
                  <span>$25-50</span>
                </div>
                <div className="flex justify-between">
                  <span>Documentation fee:</span>
                  <span>$75-300</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Inspection Checklist
export function InspectionChecklist() {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set())
  
  const categories = [
    {
      name: "Exterior",
      items: [
        "Body panels for dents, scratches, rust",
        "Paint condition and color matching",
        "Headlights and taillights function",
        "Turn signals and hazard lights",
        "Windshield for cracks or chips",
        "Mirrors are intact and adjustable",
        "Bumpers are secure"
      ]
    },
    {
      name: "Interior",
      items: [
        "Seats are in good condition",
        "Seatbelts function properly",
        "Dashboard warning lights",
        "Air conditioning and heating",
        "Radio and electrical systems",
        "Windows roll up/down smoothly",
        "Door handles and locks work"
      ]
    },
    {
      name: "Engine & Mechanical",
      items: [
        "Engine starts easily and idles smoothly",
        "No unusual noises or vibrations",
        "Check fluid levels (oil, coolant, brake)",
        "Battery terminals are clean",
        "Belts and hoses for wear",
        "Air filter condition",
        "Exhaust system integrity"
      ]
    },
    {
      name: "Tires & Suspension",
      items: [
        "Tire tread depth adequate",
        "Even tire wear patterns",
        "Tire pressure correct",
        "Spare tire condition",
        "Brakes respond properly",
        "Steering is responsive",
        "Suspension feels smooth"
      ]
    }
  ]

  const toggleItem = (item: string) => {
    const newChecked = new Set(checkedItems)
    if (newChecked.has(item)) {
      newChecked.delete(item)
    } else {
      newChecked.add(item)
    }
    setCheckedItems(newChecked)
  }

  const totalItems = categories.reduce((sum, cat) => sum + cat.items.length, 0)
  const completedItems = checkedItems.size
  const completionPercent = (completedItems / totalItems) * 100

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold flex items-center mb-2">
          <CheckCircle className="mr-2 h-8 w-8" />
          Vehicle Inspection Checklist
        </h1>
        <p className="text-muted-foreground">
          Comprehensive checklist for inspecting a vehicle before purchase
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Inspection Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center mb-2">
            <span>Completed: {completedItems} of {totalItems}</span>
            <span>{completionPercent.toFixed(0)}%</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${completionPercent}%` }}
            />
          </div>
        </CardContent>
      </Card>

      <div className="space-y-6">
        {categories.map((category, categoryIndex) => (
          <Card key={categoryIndex}>
            <CardHeader>
              <CardTitle>{category.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id={`${categoryIndex}-${itemIndex}`}
                      checked={checkedItems.has(item)}
                      onChange={() => toggleItem(item)}
                      className="rounded"
                    />
                    <label 
                      htmlFor={`${categoryIndex}-${itemIndex}`}
                      className={`flex-1 cursor-pointer ${checkedItems.has(item) ? 'line-through text-muted-foreground' : ''}`}
                    >
                      {item}
                    </label>
                    {checkedItems.has(item) && (
                      <CheckCircle className="h-4 w-4 text-primary" />
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {completionPercent === 100 && (
        <Card className="border-primary/20 bg-primary/5">
          <CardContent className="pt-6">
            <div className="text-center">
              <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-primary mb-2">Inspection Complete!</h3>
              <p className="text-muted-foreground">You&apos;ve completed all inspection items. Review any concerns before making your decision.</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}