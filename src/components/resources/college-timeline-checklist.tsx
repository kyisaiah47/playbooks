"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Circle, Clock } from "lucide-react"

export function CollegeTimelineChecklist() {
  const timelineItems = [
    {
      phase: "Junior Year",
      items: [
        { task: "Take PSAT/NMSQT", completed: true },
        { task: "Research colleges and create initial list", completed: true },
        { task: "Take SAT or ACT", completed: false },
        { task: "Visit college campuses", completed: false }
      ]
    },
    {
      phase: "Senior Year Fall",
      items: [
        { task: "Finalize college list", completed: false },
        { task: "Request recommendation letters", completed: false },
        { task: "Complete application essays", completed: false },
        { task: "Submit early applications", completed: false }
      ]
    },
    {
      phase: "Senior Year Spring",
      items: [
        { task: "Submit regular decision applications", completed: false },
        { task: "Complete FAFSA", completed: false },
        { task: "Apply for scholarships", completed: false },
        { task: "Make final college decision", completed: false }
      ]
    }
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>College Planning Timeline</CardTitle>
        <CardDescription>
          Track your progress through the college application process
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {timelineItems.map((phase, phaseIndex) => (
          <div key={phaseIndex} className="space-y-3">
            <div className="flex items-center space-x-2">
              <Badge variant="secondary">{phase.phase}</Badge>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="space-y-2 pl-4">
              {phase.items.map((item, itemIndex) => (
                <div key={itemIndex} className="flex items-center space-x-2">
                  {item.completed ? (
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  ) : (
                    <Circle className="h-4 w-4 text-muted-foreground" />
                  )}
                  <span className={`text-sm ${item.completed ? 'line-through text-muted-foreground' : ''}`}>
                    {item.task}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}