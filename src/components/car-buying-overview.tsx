"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { useCarBuying, getCarBuyingDisplayData } from "@/contexts/car-buying-context"
import {
  Car,
  Search,
  Building,
  Calendar,
  DollarSign,
  Target,
  Clock,
  CheckCircle,
  AlertCircle,
  ArrowUpRight,
  Plus,
  MapPin,
  Fuel,
  Scale
} from "lucide-react"

export function CarBuyingOverview() {
  const { carBuyingData } = useCarBuying()
  const displayData = getCarBuyingDisplayData(carBuyingData)
  
  // Mock data for demonstration - in a real app, this would come from the context
  const [stats] = useState({
    savedVehicles: 5,
    testDrivesScheduled: 2,
    dealershipsContacted: 3,
    financingOptions: 1,
    vehiclesCompared: 4,
    avgPrice: 28500
  })

  const [recentActivities] = useState([
    { id: 1, type: "saved", vehicle: "2022 Honda Accord", dealer: "Honda Downtown", date: "2 hours ago", status: "saved" },
    { id: 2, type: "test-drive", vehicle: "2023 Toyota Camry", dealer: "Toyota City", date: "Yesterday", status: "scheduled" },
    { id: 3, type: "financing", lender: "First National Bank", rate: "4.2%", date: "3 days ago", status: "pre-approved" },
    { id: 4, type: "contact", dealer: "Ford Dealership", inquiry: "2021 Ford Fusion", date: "1 week ago", status: "responded" }
  ])

  const budgetUtilization = (stats.avgPrice / carBuyingData.budgetMax) * 100

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "saved": return <Search className="h-4 w-4" />
      case "test-drive": return <Calendar className="h-4 w-4" />
      case "financing": return <DollarSign className="h-4 w-4" />
      case "contact": return <Building className="h-4 w-4" />
      default: return <Car className="h-4 w-4" />
    }
  }

  const getActivityColor = (status: string) => {
    switch (status) {
      case "saved": return "bg-primary/10 text-primary"
      case "scheduled": return "bg-primary/10 text-primary"
      case "pre-approved": return "bg-primary/10 text-primary"
      case "responded": return "bg-muted text-muted-foreground"
      default: return "bg-muted text-muted-foreground"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold flex items-center">
          <Car className="mr-2 h-8 w-8" />
          Car Buying Dashboard
        </h1>
        <p className="text-muted-foreground">
          Track your progress towards finding the perfect {displayData.vehicleType} within your {displayData.budgetRange} budget
        </p>
      </div>

      {/* Quick Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Saved Vehicles</CardTitle>
            <Search className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.savedVehicles}</div>
            <p className="text-xs text-muted-foreground">
              Ready for comparison
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Test Drives</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.testDrivesScheduled}</div>
            <p className="text-xs text-muted-foreground">
              Scheduled this week
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Budget Usage</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{budgetUtilization.toFixed(0)}%</div>
            <p className="text-xs text-muted-foreground">
              Avg price: ${stats.avgPrice.toLocaleString()}
            </p>
            <Progress value={budgetUtilization} className="mt-2" />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Time Remaining</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{displayData.daysUntilTarget}</div>
            <p className="text-xs text-muted-foreground">
              Days until target date
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Current Preferences & Progress */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Target className="mr-2 h-5 w-5" />
              Your Preferences
            </CardTitle>
            <CardDescription>Current search criteria and preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-medium text-muted-foreground">Vehicle Type</span>
                <p className="font-semibold">{displayData.vehicleType}</p>
              </div>
              <div>
                <span className="font-medium text-muted-foreground">Fuel Type</span>
                <p className="font-semibold">{displayData.fuelTypeDisplay}</p>
              </div>
              <div>
                <span className="font-medium text-muted-foreground">Budget Range</span>
                <p className="font-semibold">{displayData.budgetRange}</p>
              </div>
              <div>
                <span className="font-medium text-muted-foreground">Max Monthly</span>
                <p className="font-semibold">{displayData.maxMonthlyPayment}/month</p>
              </div>
              <div>
                <span className="font-medium text-muted-foreground">Year Range</span>
                <p className="font-semibold">{displayData.yearRange}</p>
              </div>
              <div>
                <span className="font-medium text-muted-foreground">Location</span>
                <p className="font-semibold">{displayData.location}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              <Badge variant="secondary">{displayData.newVsUsedDisplay}</Badge>
              <Badge variant="outline">Urgency: {displayData.urgencyDisplay}</Badge>
              {carBuyingData.preferredBrands.slice(0, 2).map((brand, index) => (
                <Badge key={index} variant="outline">{brand}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Scale className="mr-2 h-5 w-5" />
              Search Progress
            </CardTitle>
            <CardDescription>Track your car buying journey</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Preferences Set</span>
                </div>
                <Badge variant="secondary">Complete</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Vehicle Research</span>
                </div>
                <Badge variant="secondary">In Progress</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <AlertCircle className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Test Drives</span>
                </div>
                <Badge variant="outline">Pending</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <AlertCircle className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Financing Secured</span>
                </div>
                <Badge variant="outline">Not Started</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <AlertCircle className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Purchase Decision</span>
                </div>
                <Badge variant="outline">Not Started</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest car buying activities</CardDescription>
          </div>
          <Button variant="outline" size="sm">
            <Plus className="mr-2 h-4 w-4" />
            Add Activity
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-full ${getActivityColor(activity.status)}`}>
                    {getActivityIcon(activity.type)}
                  </div>
                  <div>
                    <p className="font-medium text-sm">
                      {activity.type === "saved" && `Saved ${activity.vehicle}`}
                      {activity.type === "test-drive" && `Test drive scheduled for ${activity.vehicle}`}
                      {activity.type === "financing" && `Pre-approved by ${activity.lender} at ${activity.rate}`}
                      {activity.type === "contact" && `Contacted ${activity.dealer} about ${activity.inquiry}`}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {activity.type === "saved" && `at ${activity.dealer}`}
                      {activity.type === "test-drive" && `at ${activity.dealer}`}
                      {activity.type === "financing" && "APR"}
                      {activity.type === "contact" && "Inquiry sent"}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">{activity.date}</p>
                  <Badge variant={activity.status === "pre-approved" ? "default" : "outline"} className="text-xs">
                    {activity.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common tasks to help with your car search</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            <Button variant="outline" className="justify-start" onClick={() => window.location.hash = "vehicle-search"}>
              <Search className="mr-2 h-4 w-4" />
              Search Vehicles
            </Button>
            <Button variant="outline" className="justify-start" onClick={() => window.location.hash = "comparison"}>
              <Scale className="mr-2 h-4 w-4" />
              Compare Saved
            </Button>
            <Button variant="outline" className="justify-start" onClick={() => window.location.hash = "financing"}>
              <DollarSign className="mr-2 h-4 w-4" />
              Get Pre-approved
            </Button>
            <Button variant="outline" className="justify-start" onClick={() => window.location.hash = "test-drives"}>
              <Calendar className="mr-2 h-4 w-4" />
              Schedule Test Drive
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}