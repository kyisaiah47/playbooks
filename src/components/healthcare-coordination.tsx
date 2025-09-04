"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function HealthcareCoordination() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Healthcare Coordination</CardTitle>
        <CardDescription>Coordinate healthcare appointments and providers</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-muted-foreground">Healthcare coordination functionality coming soon...</p>
        </div>
      </CardContent>
    </Card>
  )
}