"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { CalendarIcon, CheckCircle2, Clock, DollarSign, Heart, MapPin, Users, Star, AlertCircle } from "lucide-react"
import { useWedding, getWeddingDisplayData } from "@/contexts/wedding-context"

export function WeddingOverview() {
  const { weddingData } = useWedding()
  const displayData = getWeddingDisplayData(weddingData)
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Days Until Wedding</CardTitle>
          <CalendarIcon className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{displayData.daysUntil > 0 ? displayData.daysUntil : 'Today!'}</div>
          <p className="text-xs text-muted-foreground">
            {displayData.weddingDate.toLocaleDateString()} at {displayData.weddingTime}
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Budget Progress</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$28,500</div>
          <p className="text-xs text-muted-foreground">
            of ${displayData.totalBudget.toLocaleString()} total budget
          </p>
          <Progress value={63.3} className="mt-2" />
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Guest RSVPs</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">127</div>
          <p className="text-xs text-muted-foreground">
            of {displayData.guestCount} invited guests
          </p>
          <Progress value={70.5} className="mt-2" />
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Tasks Complete</CardTitle>
          <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">34</div>
          <p className="text-xs text-muted-foreground">
            of 52 total tasks
          </p>
          <Progress value={65.4} className="mt-2" />
        </CardContent>
      </Card>

      <Card className="md:col-span-2 lg:col-span-2">
        <CardHeader>
          <CardTitle>Wedding Details</CardTitle>
          <CardDescription>Key information about your special day</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium">{displayData.ceremonyVenue}</p>
              <p className="text-xs text-muted-foreground">Ceremony Venue</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium">{displayData.receptionVenue}</p>
              <p className="text-xs text-muted-foreground">Reception Venue</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Heart className="h-4 w-4 text-rose-500" />
            <div>
              <p className="text-sm font-medium">{displayData.weddingStyle}</p>
              <p className="text-xs text-muted-foreground">Wedding Style</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="md:col-span-2 lg:col-span-2">
        <CardHeader>
          <CardTitle>Vendor Status</CardTitle>
          <CardDescription>Current status of your wedding vendors</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-sm">Photography</span>
            </div>
            <Badge variant="secondary" className="text-xs">Booked</Badge>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-sm">Catering</span>
            </div>
            <Badge variant="secondary" className="text-xs">Confirmed</Badge>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span className="text-sm">Florist</span>
            </div>
            <Badge variant="outline" className="text-xs">In Progress</Badge>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-destructive rounded-full"></div>
              <span className="text-sm">Band</span>
            </div>
            <Badge variant="destructive" className="text-xs">Pending</Badge>
          </div>
        </CardContent>
      </Card>

      <Card className="md:col-span-2 lg:col-span-4">
        <CardHeader>
          <CardTitle>Upcoming Deadlines</CardTitle>
          <CardDescription>Important tasks and milestones approaching</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-destructive/10 rounded-lg border border-destructive/20">
              <div className="flex items-center space-x-3">
                <AlertCircle className="h-5 w-5 text-destructive" />
                <div>
                  <p className="text-sm font-medium text-destructive">Final headcount due</p>
                  <p className="text-xs text-destructive/80">Due in 3 days</p>
                </div>
              </div>
              <Badge variant="destructive" className="text-xs">Urgent</Badge>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-accent/30 rounded-lg border border-accent/50">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-accent-foreground" />
                <div>
                  <p className="text-sm font-medium text-accent-foreground">Menu tasting with caterer</p>
                  <p className="text-xs text-muted-foreground">Due in 1 week</p>
                </div>
              </div>
              <Badge variant="outline" className="text-xs">This Week</Badge>
            </div>

            <div className="flex items-center justify-between p-3 bg-primary/10 rounded-lg border border-primary/20">
              <div className="flex items-center space-x-3">
                <Star className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-medium text-primary">Final dress fitting</p>
                  <p className="text-xs text-muted-foreground">Due in 2 weeks</p>
                </div>
              </div>
              <Badge variant="secondary" className="text-xs">Scheduled</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}