"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function PersonalTrainerCoordination() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Personal Trainer Coordination</CardTitle>
        <CardDescription>Coordinate with your personal trainer</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-muted-foreground">Personal trainer coordination functionality coming soon...</p>
        </div>
      </CardContent>
    </Card>
  )
}