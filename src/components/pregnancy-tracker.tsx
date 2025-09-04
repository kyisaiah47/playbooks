"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function PregnancyTracker() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Pregnancy Tracker</CardTitle>
        <CardDescription>Track your pregnancy journey</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-muted-foreground">Pregnancy tracking functionality coming soon...</p>
        </div>
      </CardContent>
    </Card>
  )
}