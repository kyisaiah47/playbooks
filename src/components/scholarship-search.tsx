"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ScholarshipSearch() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Scholarship Search</CardTitle>
        <CardDescription>Find and track scholarship opportunities</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-muted-foreground">Scholarship search functionality coming soon...</p>
        </div>
      </CardContent>
    </Card>
  )
}