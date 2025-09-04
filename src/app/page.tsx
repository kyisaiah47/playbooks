"use client"

import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarIcon, Clock, DollarSign, Heart, Users, CheckSquare } from "lucide-react"
import { WeddingOverview } from "@/components/wedding-overview"
import { VendorManagement } from "@/components/vendor-management"
import { GuestManagement } from "@/components/guest-management"
import { BudgetTracking } from "@/components/budget-tracking"
import { TaskManagement } from "@/components/task-management"
import { ThemeToggle, ThemeToggleSwitch } from "@/components/theme-toggle"

export default function WeddingDashboard() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Heart className="h-8 w-8 text-rose-500" />
              <div>
                <h1 className="text-2xl font-bold">Wedding Planning Hub</h1>
                <p className="text-sm text-muted-foreground">Sarah & Michael Thompson</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="text-sm">
                <CalendarIcon className="mr-1 h-3 w-3" />
                June 15, 2024
              </Badge>
              <Badge variant="outline" className="text-sm">
                <Clock className="mr-1 h-3 w-3" />
                142 days left
              </Badge>
              <div className="flex items-center space-x-2">
                <ThemeToggleSwitch />
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview" className="flex items-center space-x-2">
              <Heart className="h-4 w-4" />
              <span>Overview</span>
            </TabsTrigger>
            <TabsTrigger value="vendors" className="flex items-center space-x-2">
              <Users className="h-4 w-4" />
              <span>Vendors</span>
            </TabsTrigger>
            <TabsTrigger value="guests" className="flex items-center space-x-2">
              <Users className="h-4 w-4" />
              <span>Guests</span>
            </TabsTrigger>
            <TabsTrigger value="budget" className="flex items-center space-x-2">
              <DollarSign className="h-4 w-4" />
              <span>Budget</span>
            </TabsTrigger>
            <TabsTrigger value="tasks" className="flex items-center space-x-2">
              <CheckSquare className="h-4 w-4" />
              <span>Tasks</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <WeddingOverview />
          </TabsContent>

          <TabsContent value="vendors" className="space-y-4">
            <VendorManagement />
          </TabsContent>

          <TabsContent value="guests" className="space-y-4">
            <GuestManagement />
          </TabsContent>

          <TabsContent value="budget" className="space-y-4">
            <BudgetTracking />
          </TabsContent>

          <TabsContent value="tasks" className="space-y-4">
            <TaskManagement />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
