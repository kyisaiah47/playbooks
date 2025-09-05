"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { CalendarIcon, CheckCircle2, Clock, DollarSign, Baby, MapPin, Users, Star, AlertCircle, Heart, Stethoscope } from "lucide-react"
import { useBabyPlanning, getBabyPlanningDisplayData } from "@/contexts/baby-planning-context"

export function BabyPlanningOverview() {
  const { babyPlanningData } = useBabyPlanning()
  const displayData = getBabyPlanningDisplayData(babyPlanningData)
  
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Weeks Until Due Date</CardTitle>
          <CalendarIcon className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{displayData.weeksUntilDue > 0 ? displayData.weeksUntilDue : 'Baby is here!'}</div>
          <p className="text-xs text-muted-foreground">
            Due {displayData.dueDate.toLocaleDateString()}
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Budget Progress</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$8,500</div>
          <p className="text-xs text-muted-foreground">
            of ${displayData.totalBudget?.toLocaleString() || '0'} total budget
          </p>
          <Progress value={56.7} className="mt-2" />
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Registry Progress</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">42</div>
          <p className="text-xs text-muted-foreground">
            of 75 registry items acquired
          </p>
          <Progress value={56} className="mt-2" />
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Tasks Complete</CardTitle>
          <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">18</div>
          <p className="text-xs text-muted-foreground">
            of 35 preparation tasks
          </p>
          <Progress value={51.4} className="mt-2" />
        </CardContent>
      </Card>

      <Card className="md:col-span-2 lg:col-span-2">
        <CardHeader>
          <CardTitle>Baby Details</CardTitle>
          <CardDescription>Key information about your little one</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-2">
            <Baby className="h-4 w-4 text-primary" />
            <div>
              <p className="text-sm font-medium">{displayData.babyName}</p>
              <p className="text-xs text-muted-foreground">Baby&apos;s Name</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Heart className="h-4 w-4 text-primary" />
            <div>
              <p className="text-sm font-medium">{displayData.babyGender || "Surprise"}</p>
              <p className="text-xs text-muted-foreground">Gender</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Stethoscope className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium">{displayData.hospital}</p>
              <p className="text-xs text-muted-foreground">Hospital</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium">{displayData.doctor}</p>
              <p className="text-xs text-muted-foreground">Doctor</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="md:col-span-2 lg:col-span-2">
        <CardHeader>
          <CardTitle>Preparation Progress</CardTitle>
          <CardDescription>Current status of your baby preparations</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-sm">Nursery Setup</span>
            </div>
            <Badge variant="secondary" className="text-xs">75% Complete</Badge>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-sm">Baby Registry</span>
            </div>
            <Badge variant="secondary" className="text-xs">Completed</Badge>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span className="text-sm">Hospital Bag</span>
            </div>
            <Badge variant="outline" className="text-xs">In Progress</Badge>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-destructive rounded-full"></div>
              <span className="text-sm">Childproofing</span>
            </div>
            <Badge variant="destructive" className="text-xs">Not Started</Badge>
          </div>
        </CardContent>
      </Card>

      <Card className="md:col-span-2 lg:col-span-4">
        <CardHeader>
          <CardTitle>Upcoming Milestones & Tasks</CardTitle>
          <CardDescription>Important preparation milestones approaching</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-destructive/10 rounded-lg border border-destructive/20">
              <div className="flex items-center space-x-3">
                <AlertCircle className="h-5 w-5 text-destructive" />
                <div>
                  <p className="text-sm font-medium text-destructive">Hospital bag packing</p>
                  <p className="text-xs text-destructive/80">Due in 2 weeks</p>
                </div>
              </div>
              <Badge variant="destructive" className="text-xs">Urgent</Badge>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-accent/30 rounded-lg border border-accent/50">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-accent-foreground" />
                <div>
                  <p className="text-sm font-medium text-accent-foreground">Baby shower planning</p>
                  <p className="text-xs text-muted-foreground">Due in 3 weeks</p>
                </div>
              </div>
              <Badge variant="outline" className="text-xs">This Month</Badge>
            </div>

            <div className="flex items-center justify-between p-3 bg-primary/10 rounded-lg border border-primary/20">
              <div className="flex items-center space-x-3">
                <Star className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-medium text-primary">Nursery furniture delivery</p>
                  <p className="text-xs text-muted-foreground">Due in 4 weeks</p>
                </div>
              </div>
              <Badge variant="secondary" className="text-xs">Scheduled</Badge>
            </div>

            <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg border border-muted">
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Parenting class enrollment</p>
                  <p className="text-xs text-muted-foreground">Due in 6 weeks</p>
                </div>
              </div>
              <Badge variant="outline" className="text-xs">Future</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}