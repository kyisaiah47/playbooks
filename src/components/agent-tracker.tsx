"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function AgentTracker() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Real Estate Agent Tracker</CardTitle>
        <CardDescription>Manage your real estate agents and contacts</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-muted-foreground">Agent tracking functionality coming soon...</p>
        </div>
      </CardContent>
    </Card>
  )
}