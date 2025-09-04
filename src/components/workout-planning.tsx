"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function WorkoutPlanning() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Workout Planning</CardTitle>
        <CardDescription>Plan your workout routines</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-muted-foreground">Workout planning functionality coming soon...</p>
        </div>
      </CardContent>
    </Card>
  )
}