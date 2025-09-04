"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function NutritionTracking() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Nutrition Tracking</CardTitle>
        <CardDescription>Track your daily nutrition intake</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-muted-foreground">Nutrition tracking functionality coming soon...</p>
        </div>
      </CardContent>
    </Card>
  )
}