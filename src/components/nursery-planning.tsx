"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function NurseryPlanning() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Nursery Planning</CardTitle>
        <CardDescription>Plan and design your baby's nursery</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-muted-foreground">Nursery planning functionality coming soon...</p>
        </div>
      </CardContent>
    </Card>
  )
}