"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function MovingPlanner() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Moving Planner</CardTitle>
        <CardDescription>Plan and organize your move</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-muted-foreground">Moving planner functionality coming soon...</p>
        </div>
      </CardContent>
    </Card>
  )
}