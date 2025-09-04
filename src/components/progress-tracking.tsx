"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ProgressTracking() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Progress Tracking</CardTitle>
        <CardDescription>Track your fitness progress</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-muted-foreground">Progress tracking functionality coming soon...</p>
        </div>
      </CardContent>
    </Card>
  )
}