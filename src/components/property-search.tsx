"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function PropertySearch() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Property Search</CardTitle>
        <CardDescription>Search and track potential properties</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-muted-foreground">Property search functionality coming soon...</p>
        </div>
      </CardContent>
    </Card>
  )
}