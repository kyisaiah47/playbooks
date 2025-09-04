"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function CampusVisitPlanner() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Campus Visit Planner</CardTitle>
        <CardDescription>Plan and organize campus visits</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-muted-foreground">Campus visit planning functionality coming soon...</p>
        </div>
      </CardContent>
    </Card>
  )
}