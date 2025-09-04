"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function BudgetPlanning() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Budget Planning</CardTitle>
        <CardDescription>Plan and track your budget</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-muted-foreground">Budget planning functionality coming soon...</p>
        </div>
      </CardContent>
    </Card>
  )
}