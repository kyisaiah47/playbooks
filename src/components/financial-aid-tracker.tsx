"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function FinancialAidTracker() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Financial Aid Tracker</CardTitle>
        <CardDescription>Track your financial aid applications</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-muted-foreground">Financial aid tracking functionality coming soon...</p>
        </div>
      </CardContent>
    </Card>
  )
}