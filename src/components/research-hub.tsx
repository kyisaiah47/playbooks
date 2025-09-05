"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { Star, Shield, Wrench, TrendingUp, DollarSign, Search, Filter, ExternalLink, Award, AlertTriangle, Heart } from "lucide-react"

interface VehicleReview {
  id: string
  make: string
  model: string
  year: number
  rating: number
  reviewCount: number
  highlights: string[]
  pros: string[]
  cons: string[]
  expertRating: number
  ownerRating: number
}

interface SafetyRating {
  id: string
  make: string
  model: string
  year: number
  overallRating: number
  crashTestRating: number
  rolloverRating: number
  sideImpactRating: number
  frontCrashRating: number
  features: string[]
  awards: string[]
}

interface ReliabilityReport {
  id: string
  make: string
  model: string
  year: number
  reliabilityScore: number
  problemAreas: string[]
  recallCount: number
  maintenanceCost: number
  repairFrequency: string
  predictedReliability: number
}

interface MarketPrice {
  id: string
  make: string
  model: string
  year: number
  mileage: number
  condition: string
  averagePrice: number
  priceRange: { min: number; max: number }
  marketTrend: "up" | "down" | "stable"
  daysOnMarket: number
  regionAdjustment: number
}

interface OwnershipCost {
  id: string
  make: string
  model: string
  year: number
  purchase: number
  insurance: number
  fuel: number
  maintenance: number
  depreciation: number
  total: number
  comparison: "below" | "average" | "above"
}

const mockReviews: VehicleReview[] = [
  {
    id: "1",
    make: "Toyota",
    model: "Camry",
    year: 2024,
    rating: 4.5,
    reviewCount: 127,
    highlights: ["Exceptional reliability", "Fuel efficient", "Spacious interior"],
    pros: ["Low maintenance costs", "Strong resale value", "Comfortable ride"],
    cons: ["Road noise at highway speeds", "Infotainment system lag"],
    expertRating: 4.3,
    ownerRating: 4.7
  },
  {
    id: "2",
    make: "Honda",
    model: "CR-V",
    year: 2024,
    rating: 4.4,
    reviewCount: 203,
    highlights: ["Versatile cargo space", "Honda Sensing standard", "Good fuel economy"],
    pros: ["Reliable performance", "Easy to drive", "Strong safety ratings"],
    cons: ["Engine noise under acceleration", "Rear seat comfort"],
    expertRating: 4.2,
    ownerRating: 4.6
  },
  {
    id: "3",
    make: "Ford",
    model: "F-150",
    year: 2024,
    rating: 4.2,
    reviewCount: 156,
    highlights: ["Best-in-class towing", "Advanced tech features", "Multiple engine options"],
    pros: ["Powerful engines", "Spacious cabin", "Excellent towing capacity"],
    cons: ["Fuel economy with V8", "Complex infotainment"],
    expertRating: 4.0,
    ownerRating: 4.4
  }
]

const mockSafetyRatings: SafetyRating[] = [
  {
    id: "1",
    make: "Toyota",
    model: "Camry",
    year: 2024,
    overallRating: 5,
    crashTestRating: 5,
    rolloverRating: 4,
    sideImpactRating: 5,
    frontCrashRating: 5,
    features: ["Toyota Safety Sense 2.0", "Blind spot monitoring", "Rear cross traffic alert"],
    awards: ["IIHS Top Safety Pick+", "NHTSA 5-Star Overall"]
  },
  {
    id: "2",
    make: "Honda",
    model: "CR-V",
    year: 2024,
    overallRating: 5,
    crashTestRating: 5,
    rolloverRating: 4,
    sideImpactRating: 5,
    frontCrashRating: 5,
    features: ["Honda Sensing", "Collision mitigation", "Road departure mitigation"],
    awards: ["IIHS Top Safety Pick", "NHTSA 5-Star Overall"]
  },
  {
    id: "3",
    make: "Subaru",
    model: "Outback",
    year: 2024,
    overallRating: 5,
    crashTestRating: 5,
    rolloverRating: 4,
    sideImpactRating: 5,
    frontCrashRating: 5,
    features: ["EyeSight Driver Assist", "Reverse automatic braking", "Blind spot detection"],
    awards: ["IIHS Top Safety Pick+", "NHTSA 5-Star Overall"]
  }
]

const mockReliabilityReports: ReliabilityReport[] = [
  {
    id: "1",
    make: "Toyota",
    model: "Camry",
    year: 2024,
    reliabilityScore: 92,
    problemAreas: ["Infotainment system", "Paint quality"],
    recallCount: 2,
    maintenanceCost: 450,
    repairFrequency: "Very Low",
    predictedReliability: 90
  },
  {
    id: "2",
    make: "Honda",
    model: "CR-V",
    year: 2024,
    reliabilityScore: 88,
    problemAreas: ["CVT transmission", "Air conditioning"],
    recallCount: 3,
    maintenanceCost: 520,
    repairFrequency: "Low",
    predictedReliability: 85
  },
  {
    id: "3",
    make: "Ford",
    model: "F-150",
    year: 2024,
    reliabilityScore: 75,
    problemAreas: ["Electrical system", "Engine issues", "Transmission"],
    recallCount: 8,
    maintenanceCost: 750,
    repairFrequency: "Average",
    predictedReliability: 72
  }
]

const mockMarketPrices: MarketPrice[] = [
  {
    id: "1",
    make: "Toyota",
    model: "Camry",
    year: 2024,
    mileage: 15000,
    condition: "Excellent",
    averagePrice: 28500,
    priceRange: { min: 26500, max: 31000 },
    marketTrend: "stable",
    daysOnMarket: 18,
    regionAdjustment: 2.3
  },
  {
    id: "2",
    make: "Honda",
    model: "CR-V",
    year: 2023,
    mileage: 22000,
    condition: "Good",
    averagePrice: 32000,
    priceRange: { min: 29500, max: 35500 },
    marketTrend: "up",
    daysOnMarket: 12,
    regionAdjustment: 1.8
  },
  {
    id: "3",
    make: "Ford",
    model: "F-150",
    year: 2022,
    mileage: 35000,
    condition: "Good",
    averagePrice: 45000,
    priceRange: { min: 42000, max: 48500 },
    marketTrend: "down",
    daysOnMarket: 28,
    regionAdjustment: -1.2
  }
]

const mockOwnershipCosts: OwnershipCost[] = [
  {
    id: "1",
    make: "Toyota",
    model: "Camry",
    year: 2024,
    purchase: 32000,
    insurance: 1200,
    fuel: 1500,
    maintenance: 800,
    depreciation: 4800,
    total: 40300,
    comparison: "below"
  },
  {
    id: "2",
    make: "Honda",
    model: "CR-V",
    year: 2024,
    purchase: 38000,
    insurance: 1350,
    fuel: 1650,
    maintenance: 900,
    depreciation: 5200,
    total: 47100,
    comparison: "average"
  },
  {
    id: "3",
    make: "BMW",
    model: "X3",
    year: 2024,
    purchase: 55000,
    insurance: 2100,
    fuel: 2200,
    maintenance: 1800,
    depreciation: 8500,
    total: 69600,
    comparison: "above"
  }
]

export function VehicleReviews() {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("rating")

  const filteredReviews = mockReviews.filter(review =>
    `${review.make} ${review.model}`.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold flex items-center">
          <Star className="mr-2 h-8 w-8" />
          Vehicle Reviews
        </h1>
        <p className="text-muted-foreground">Professional and owner reviews for vehicles</p>
      </div>

      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by make and model..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-48">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="rating">Sort by Rating</SelectItem>
            <SelectItem value="reviews">Sort by Review Count</SelectItem>
            <SelectItem value="year">Sort by Year</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-6">
        {filteredReviews.map((review) => (
          <Card key={review.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">
                    {review.year} {review.make} {review.model}
                  </CardTitle>
                  <CardDescription>
                    {review.reviewCount} reviews • Overall rating {review.rating}/5.0
                  </CardDescription>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-primary fill-current" />
                    <span className="ml-1 font-semibold">{review.rating}</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Expert Rating: {review.expertRating}/5.0</h4>
                  <h4 className="font-semibold mb-2">Owner Rating: {review.ownerRating}/5.0</h4>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Highlights</h4>
                  <div className="flex flex-wrap gap-2">
                    {review.highlights.map((highlight, index) => (
                      <Badge key={index} variant="secondary">{highlight}</Badge>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2 text-primary">Pros</h4>
                  <ul className="text-sm space-y-1">
                    {review.pros.map((pro, index) => (
                      <li key={index}>• {pro}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-destructive">Cons</h4>
                  <ul className="text-sm space-y-1">
                    {review.cons.map((con, index) => (
                      <li key={index}>• {con}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Read Full Review
                </Button>
                <Button variant="outline" size="sm">
                  <Heart className="mr-2 h-4 w-4" />
                  Save Review
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export function SafetyRatings() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredRatings = mockSafetyRatings.filter(rating =>
    `${rating.make} ${rating.model}`.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const getRatingColor = (rating: number) => {
    if (rating >= 5) return "text-primary"
    if (rating >= 4) return "text-primary"
    if (rating >= 3) return "text-muted-foreground"
    return "text-destructive"
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold flex items-center">
          <Shield className="mr-2 h-8 w-8" />
          Safety Ratings
        </h1>
        <p className="text-muted-foreground">NHTSA and IIHS safety ratings and awards</p>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search by make and model..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      <div className="grid gap-6">
        {filteredRatings.map((rating) => (
          <Card key={rating.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">
                    {rating.year} {rating.make} {rating.model}
                  </CardTitle>
                  <CardDescription>Safety ratings and awards</CardDescription>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-6 w-6 text-primary" />
                  <span className={`text-xl font-bold ${getRatingColor(rating.overallRating)}`}>
                    {rating.overallRating}/5
                  </span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Test Ratings</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Overall Rating</span>
                      <span className={`font-semibold ${getRatingColor(rating.overallRating)}`}>
                        {rating.overallRating}/5
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Crash Test</span>
                      <span className={`font-semibold ${getRatingColor(rating.crashTestRating)}`}>
                        {rating.crashTestRating}/5
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Front Crash</span>
                      <span className={`font-semibold ${getRatingColor(rating.frontCrashRating)}`}>
                        {rating.frontCrashRating}/5
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Side Impact</span>
                      <span className={`font-semibold ${getRatingColor(rating.sideImpactRating)}`}>
                        {rating.sideImpactRating}/5
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Rollover</span>
                      <span className={`font-semibold ${getRatingColor(rating.rolloverRating)}`}>
                        {rating.rolloverRating}/5
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Safety Features</h4>
                  <div className="space-y-2">
                    {rating.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <Shield className="h-4 w-4 text-primary mr-2" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {rating.awards.length > 0 && (
                <div>
                  <h4 className="font-semibold mb-2">Awards</h4>
                  <div className="flex flex-wrap gap-2">
                    {rating.awards.map((award, index) => (
                      <Badge key={index} variant="outline" className="border-primary text-primary">
                        <Award className="mr-1 h-3 w-3" />
                        {award}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              <Button variant="outline" size="sm">
                <ExternalLink className="mr-2 h-4 w-4" />
                View Detailed Report
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export function ReliabilityReports() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredReports = mockReliabilityReports.filter(report =>
    `${report.make} ${report.model}`.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const getReliabilityColor = (score: number) => {
    if (score >= 85) return "text-primary"
    if (score >= 70) return "text-muted-foreground"
    return "text-destructive"
  }

  const getFrequencyColor = (frequency: string) => {
    if (frequency === "Very Low") return "text-primary"
    if (frequency === "Low" || frequency === "Average") return "text-muted-foreground"
    return "text-destructive"
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold flex items-center">
          <Wrench className="mr-2 h-8 w-8" />
          Reliability Reports
        </h1>
        <p className="text-muted-foreground">Long-term reliability and maintenance data</p>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search by make and model..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      <div className="grid gap-6">
        {filteredReports.map((report) => (
          <Card key={report.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">
                    {report.year} {report.make} {report.model}
                  </CardTitle>
                  <CardDescription>Reliability and maintenance analysis</CardDescription>
                </div>
                <div className="text-center">
                  <div className={`text-2xl font-bold ${getReliabilityColor(report.reliabilityScore)}`}>
                    {report.reliabilityScore}
                  </div>
                  <div className="text-sm text-muted-foreground">Reliability Score</div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Current Reliability</span>
                      <span className={`font-semibold ${getReliabilityColor(report.reliabilityScore)}`}>
                        {report.reliabilityScore}/100
                      </span>
                    </div>
                    <Progress value={report.reliabilityScore} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Predicted Reliability</span>
                      <span className={`font-semibold ${getReliabilityColor(report.predictedReliability)}`}>
                        {report.predictedReliability}/100
                      </span>
                    </div>
                    <Progress value={report.predictedReliability} className="h-2" />
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Repair Frequency</span>
                    <span className={`font-semibold ${getFrequencyColor(report.repairFrequency)}`}>
                      {report.repairFrequency}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Annual Maintenance</span>
                    <span className="font-semibold">${report.maintenanceCost}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Recalls</span>
                    <span className={`font-semibold ${report.recallCount > 5 ? 'text-destructive' : 'text-muted-foreground'}`}>
                      {report.recallCount}
                    </span>
                  </div>
                </div>
              </div>

              {report.problemAreas.length > 0 && (
                <div>
                  <h4 className="font-semibold mb-2 flex items-center">
                    <AlertTriangle className="mr-1 h-4 w-4 text-destructive" />
                    Common Problem Areas
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {report.problemAreas.map((area, index) => (
                      <Badge key={index} variant="destructive" className="bg-destructive/10 text-destructive border-destructive/30">
                        {area}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Full Report
                </Button>
                <Button variant="outline" size="sm">
                  <Wrench className="mr-2 h-4 w-4" />
                  Maintenance Schedule
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export function MarketPrices() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterBy, setFilterBy] = useState("all")

  const filteredPrices = mockMarketPrices.filter(price => {
    const matchesSearch = `${price.make} ${price.model}`.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterBy === "all" || price.marketTrend === filterBy
    return matchesSearch && matchesFilter
  })

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up": return <TrendingUp className="h-4 w-4 text-primary" />
      case "down": return <TrendingUp className="h-4 w-4 text-destructive rotate-180" />
      default: return <TrendingUp className="h-4 w-4 text-muted-foreground rotate-90" />
    }
  }

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case "up": return "text-primary"
      case "down": return "text-destructive"
      default: return "text-muted-foreground"
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold flex items-center">
          <TrendingUp className="mr-2 h-8 w-8" />
          Market Prices
        </h1>
        <p className="text-muted-foreground">Current market values and pricing trends</p>
      </div>

      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by make and model..."
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
            <SelectItem value="all">All Trends</SelectItem>
            <SelectItem value="up">Trending Up</SelectItem>
            <SelectItem value="stable">Stable</SelectItem>
            <SelectItem value="down">Trending Down</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-6">
        {filteredPrices.map((price) => (
          <Card key={price.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">
                    {price.year} {price.make} {price.model}
                  </CardTitle>
                  <CardDescription>
                    {price.mileage.toLocaleString()} miles • {price.condition} condition
                  </CardDescription>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">
                    ${price.averagePrice.toLocaleString()}
                  </div>
                  <div className="text-sm text-muted-foreground">Average Price</div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold">Price Range</h4>
                  <div className="text-sm">
                    <div>Low: ${price.priceRange.min.toLocaleString()}</div>
                    <div>High: ${price.priceRange.max.toLocaleString()}</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold">Market Trend</h4>
                  <div className="flex items-center space-x-2">
                    {getTrendIcon(price.marketTrend)}
                    <span className={`capitalize font-medium ${getTrendColor(price.marketTrend)}`}>
                      {price.marketTrend}
                    </span>
                  </div>
                  {price.regionAdjustment !== 0 && (
                    <div className="text-sm text-muted-foreground">
                      Regional: {price.regionAdjustment > 0 ? '+' : ''}{price.regionAdjustment}%
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold">Market Activity</h4>
                  <div className="text-sm">
                    <div>Days on market: {price.daysOnMarket}</div>
                    <div className={price.daysOnMarket < 20 ? 'text-primary' : price.daysOnMarket > 30 ? 'text-destructive' : 'text-muted-foreground'}>
                      {price.daysOnMarket < 20 ? 'Fast moving' : price.daysOnMarket > 30 ? 'Slow moving' : 'Average pace'}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-muted/50 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Price Analysis</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium">Market Position:</span>
                    <p className="text-muted-foreground">
                      {price.averagePrice < (price.priceRange.min + price.priceRange.max) / 2 
                        ? "Below average market value" 
                        : "Above average market value"}
                    </p>
                  </div>
                  <div>
                    <span className="font-medium">Recommendation:</span>
                    <p className="text-muted-foreground">
                      {price.marketTrend === "up" 
                        ? "Consider buying soon as prices are rising"
                        : price.marketTrend === "down"
                        ? "Wait for further price drops"
                        : "Good time to buy at stable prices"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Listings
                </Button>
                <Button variant="outline" size="sm">
                  <TrendingUp className="mr-2 h-4 w-4" />
                  Price History
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export function OwnershipCosts() {
  const [searchTerm, setSearchTerm] = useState("")
  const [timeFrame, setTimeFrame] = useState("annual")

  const filteredCosts = mockOwnershipCosts.filter(cost =>
    `${cost.make} ${cost.model}`.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const getComparisonColor = (comparison: string) => {
    switch (comparison) {
      case "below": return "text-primary"
      case "above": return "text-destructive"
      default: return "text-muted-foreground"
    }
  }

  const getComparisonText = (comparison: string) => {
    switch (comparison) {
      case "below": return "Below Average"
      case "above": return "Above Average"
      default: return "Average"
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold flex items-center">
          <DollarSign className="mr-2 h-8 w-8" />
          Ownership Costs
        </h1>
        <p className="text-muted-foreground">Total cost of ownership analysis</p>
      </div>

      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by make and model..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={timeFrame} onValueChange={setTimeFrame}>
          <SelectTrigger className="w-48">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="annual">Annual Costs</SelectItem>
            <SelectItem value="5year">5-Year Costs</SelectItem>
            <SelectItem value="10year">10-Year Costs</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-6">
        {filteredCosts.map((cost) => (
          <Card key={cost.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">
                    {cost.year} {cost.make} {cost.model}
                  </CardTitle>
                  <CardDescription>Annual ownership costs breakdown</CardDescription>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">
                    ${cost.total.toLocaleString()}
                  </div>
                  <div className={`text-sm font-medium ${getComparisonColor(cost.comparison)}`}>
                    {getComparisonText(cost.comparison)}
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <Tabs defaultValue="breakdown" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="breakdown">Cost Breakdown</TabsTrigger>
                  <TabsTrigger value="comparison">Category Analysis</TabsTrigger>
                </TabsList>
                
                <TabsContent value="breakdown" className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Depreciation</span>
                        <span className="font-semibold">${cost.depreciation.toLocaleString()}</span>
                      </div>
                      <Progress value={(cost.depreciation / cost.total) * 100} className="h-2" />
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Fuel</span>
                        <span className="font-semibold">${cost.fuel.toLocaleString()}</span>
                      </div>
                      <Progress value={(cost.fuel / cost.total) * 100} className="h-2" />
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Insurance</span>
                        <span className="font-semibold">${cost.insurance.toLocaleString()}</span>
                      </div>
                      <Progress value={(cost.insurance / cost.total) * 100} className="h-2" />
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Maintenance</span>
                        <span className="font-semibold">${cost.maintenance.toLocaleString()}</span>
                      </div>
                      <Progress value={(cost.maintenance / cost.total) * 100} className="h-2" />
                      
                      <div className="bg-muted/50 rounded-lg p-3 mt-4">
                        <h4 className="font-semibold text-sm mb-2">Cost Summary</h4>
                        <div className="space-y-1 text-xs">
                          <div>Largest expense: Depreciation ({Math.round((cost.depreciation / cost.total) * 100)}%)</div>
                          <div>Monthly average: ${Math.round(cost.total / 12).toLocaleString()}</div>
                          <div>Cost per mile: ${((cost.total - cost.depreciation) / 12000).toFixed(2)}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="comparison" className="space-y-4">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center p-4 rounded-lg bg-muted/50">
                      <div className="text-2xl font-bold text-primary">
                        ${Math.round(cost.total / 12).toLocaleString()}
                      </div>
                      <div className="text-sm text-muted-foreground">Monthly Cost</div>
                    </div>
                    
                    <div className="text-center p-4 rounded-lg bg-muted/50">
                      <div className="text-2xl font-bold text-muted-foreground">
                        {Math.round((cost.depreciation / cost.total) * 100)}%
                      </div>
                      <div className="text-sm text-muted-foreground">Depreciation</div>
                    </div>
                    
                    <div className="text-center p-4 rounded-lg bg-muted/50">
                      <div className={`text-2xl font-bold ${getComparisonColor(cost.comparison)}`}>
                        {getComparisonText(cost.comparison)}
                      </div>
                      <div className="text-sm text-muted-foreground">vs. Segment</div>
                    </div>
                  </div>

                  <div className="bg-muted/50 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Cost Insights</h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium">Fuel Efficiency:</span>
                        <p className="text-muted-foreground">
                          {cost.fuel < 1800 ? "Excellent fuel economy" : cost.fuel > 2500 ? "High fuel costs" : "Average fuel costs"}
                        </p>
                      </div>
                      <div>
                        <span className="font-medium">Maintenance:</span>
                        <p className="text-muted-foreground">
                          {cost.maintenance < 1000 ? "Low maintenance vehicle" : cost.maintenance > 1500 ? "High maintenance costs" : "Average maintenance"}
                        </p>
                      </div>
                      <div>
                        <span className="font-medium">Insurance:</span>
                        <p className="text-muted-foreground">
                          {cost.insurance < 1500 ? "Low insurance costs" : cost.insurance > 2000 ? "High insurance premium" : "Average insurance"}
                        </p>
                      </div>
                      <div>
                        <span className="font-medium">Value Retention:</span>
                        <p className="text-muted-foreground">
                          {cost.depreciation < 5000 ? "Strong value retention" : cost.depreciation > 7000 ? "High depreciation" : "Average depreciation"}
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Detailed Analysis
                </Button>
                <Button variant="outline" size="sm">
                  <DollarSign className="mr-2 h-4 w-4" />
                  Cost Calculator
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}