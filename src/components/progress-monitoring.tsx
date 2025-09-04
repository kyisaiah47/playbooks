"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ProgressMonitoring() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Progress Monitoring</CardTitle>
        <CardDescription>Monitor your fitness progress over time</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-muted-foreground">Progress monitoring functionality coming soon...</p>
        </div>
      </CardContent>
    </Card>
  )
}