"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function GoalsManagement() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Goals Management</CardTitle>
        <CardDescription>Set and track your fitness goals</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-muted-foreground">Goals management functionality coming soon...</p>
        </div>
      </CardContent>
    </Card>
  )
}