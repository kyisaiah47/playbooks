"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function RecommendationTracker() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recommendation Tracker</CardTitle>
        <CardDescription>Track college recommendation letters</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-muted-foreground">Recommendation tracking functionality coming soon...</p>
        </div>
      </CardContent>
    </Card>
  )
}