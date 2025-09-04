"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function CoursePlanning() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Course Planning</CardTitle>
        <CardDescription>Plan your academic courses</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-muted-foreground">Course planning functionality coming soon...</p>
        </div>
      </CardContent>
    </Card>
  )
}