"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function EssayManager() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Essay Manager</CardTitle>
        <CardDescription>Manage your college application essays</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-muted-foreground">Essay management functionality coming soon...</p>
        </div>
      </CardContent>
    </Card>
  )
}