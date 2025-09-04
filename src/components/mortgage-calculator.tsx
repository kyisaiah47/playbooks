"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function MortgageCalculator() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Mortgage Calculator</CardTitle>
        <CardDescription>Calculate your mortgage payments</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-muted-foreground">Mortgage calculator functionality coming soon...</p>
        </div>
      </CardContent>
    </Card>
  )
}