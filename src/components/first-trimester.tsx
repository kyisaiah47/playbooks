"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle2, Calendar, Heart, Baby, Stethoscope, BookOpen, Lightbulb } from "lucide-react"
import { useBabyPlanning, getBabyPlanningDisplayData } from "@/contexts/baby-planning-context"

interface FirstTrimesterMilestone {
  week: number
  title: string
  description: string
  completed: boolean
}

export function FirstTrimester() {
  const { babyPlanningData } = useBabyPlanning()
  const displayData = getBabyPlanningDisplayData(babyPlanningData)
  
  const [milestones, setMilestones] = useState<FirstTrimesterMilestone[]>([
    { week: 4, title: "Pregnancy Confirmed", description: "Take pregnancy test and confirm with healthcare provider", completed: true },
    { week: 6, title: "Schedule First Appointment", description: "Book initial prenatal visit", completed: true },
    { week: 8, title: "First Prenatal Visit", description: "Initial checkup, blood work, and dating ultrasound", completed: displayData.currentWeek >= 8 },
    { week: 10, title: "Genetic Screening Discussion", description: "Discuss genetic testing options with provider", completed: displayData.currentWeek >= 10 },
    { week: 12, title: "First Trimester Complete", description: "Milestone: Risk of miscarriage significantly decreases", completed: displayData.currentWeek >= 12 }
  ])

  const toggleMilestone = (index: number) => {
    const updated = [...milestones]
    updated[index].completed = !updated[index].completed
    setMilestones(updated)
  }

  const completedMilestones = milestones.filter(m => m.completed).length
  const progressPercentage = (completedMilestones / milestones.length) * 100

  const weeklyDevelopment = {
    4: { size: "Poppy seed", development: "Neural tube begins to form, which will become the brain and spinal cord" },
    5: { size: "Sesame seed", development: "Heart begins to beat and pump blood" },
    6: { size: "Lentil", development: "Brain development accelerates, arm and leg buds appear" },
    7: { size: "Blueberry", development: "Hands and feet are developing, tail begins to disappear" },
    8: { size: "Kidney bean", development: "Webbed fingers and toes are forming, eyelids begin to form" },
    9: { size: "Grape", development: "All essential organs are present, movement begins" },
    10: { size: "Kumquat", development: "Vital organs begin to function, hair and nails start growing" },
    11: { size: "Fig", development: "Baby can now hiccup, bones are beginning to harden" },
    12: { size: "Lime", development: "Reflexes are developing, kidneys begin producing urine" }
  }

  const currentWeekDev = weeklyDevelopment[Math.min(Math.max(displayData.currentWeek, 4), 12) as keyof typeof weeklyDevelopment]

  const firstTrimesterSymptoms = [
    "Morning sickness and nausea", "Breast tenderness", "Fatigue", "Frequent urination",
    "Food aversions", "Mood swings", "Bloating", "Light spotting", "Cramping", "Heightened sense of smell"
  ]

  const firstTrimesterTips = [
    { category: "Nutrition", tip: "Take prenatal vitamins with folic acid daily" },
    { category: "Hydration", tip: "Drink 8-10 glasses of water daily" },
    { category: "Rest", tip: "Get 7-9 hours of sleep and take naps when needed" },
    { category: "Exercise", tip: "Gentle exercise like walking or prenatal yoga" },
    { category: "Avoid", tip: "Avoid alcohol, smoking, raw fish, and high-mercury fish" },
    { category: "Appointments", tip: "Schedule regular prenatal checkups" }
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">First Trimester Journey</h2>
          <p className="text-muted-foreground">Weeks 1-12: Foundation and early development</p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="secondary" className="text-lg px-3 py-1">
            Week {displayData.currentWeek}
          </Badge>
          {displayData.currentWeek <= 12 && (
            <Badge variant="default" className="text-sm">
              1st Trimester
            </Badge>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Progress</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{completedMilestones}/{milestones.length}</div>
            <Progress value={progressPercentage} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">
              milestones completed
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Weeks Remaining</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {displayData.currentWeek <= 12 ? Math.max(0, 13 - displayData.currentWeek) : 0}
            </div>
            <p className="text-xs text-muted-foreground">
              {displayData.currentWeek > 12 ? "First trimester complete!" : "weeks until 2nd trimester"}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Baby Size</CardTitle>
            <Baby className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{currentWeekDev?.size}</div>
            <p className="text-xs text-muted-foreground">
              size comparison
            </p>
          </CardContent>
        </Card>
      </div>

      {displayData.currentWeek > 12 && (
        <Alert>
          <CheckCircle2 className="h-4 w-4" />
          <AlertDescription>
            <strong>Congratulations!</strong> You've completed your first trimester. The risk of miscarriage has significantly decreased, and you may start to feel more energetic.
          </AlertDescription>
        </Alert>
      )}

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Baby className="h-5 w-5" />
            Your Baby This Week
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-4xl mb-2">🌱</div>
                <h3 className="text-xl font-semibold">Size of a {currentWeekDev?.size}</h3>
                <p className="text-muted-foreground">Week {displayData.currentWeek}</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold">Development Highlights</h4>
              <p className="text-sm text-muted-foreground">
                {currentWeekDev?.development}
              </p>
              <div className="p-3 bg-muted rounded-lg">
                <h5 className="font-medium mb-2">Key Developments:</h5>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Neural tube development</li>
                  <li>• Heart formation and first beats</li>
                  <li>• Limb bud formation</li>
                  <li>• Organ development begins</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="milestones" className="w-full">
        <TabsList>
          <TabsTrigger value="milestones">Milestones</TabsTrigger>
          <TabsTrigger value="symptoms">Common Symptoms</TabsTrigger>
          <TabsTrigger value="tips">Health Tips</TabsTrigger>
          <TabsTrigger value="appointments">Medical Care</TabsTrigger>
        </TabsList>

        <TabsContent value="milestones" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>First Trimester Milestones</CardTitle>
              <CardDescription>Important checkpoints during weeks 1-12</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 border rounded-lg">
                    <button 
                      onClick={() => toggleMilestone(index)}
                      className="mt-1"
                    >
                      <CheckCircle2 
                        className={`h-5 w-5 ${
                          milestone.completed 
                            ? 'text-primary' 
                            : 'text-muted-foreground'
                        }`} 
                      />
                    </button>
                    
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center space-x-2">
                        <h4 className={`font-medium ${milestone.completed ? 'line-through text-muted-foreground' : ''}`}>
                          {milestone.title}
                        </h4>
                        <Badge variant="outline">Week {milestone.week}</Badge>
                        {displayData.currentWeek >= milestone.week && (
                          <Badge variant="secondary" className="text-xs">
                            Current/Past
                          </Badge>
                        )}
                      </div>
                      <p className={`text-sm ${milestone.completed ? 'text-muted-foreground' : 'text-muted-foreground'}`}>
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="symptoms" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5" />
                Common First Trimester Symptoms
              </CardTitle>
              <CardDescription>What to expect during weeks 1-12</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {firstTrimesterSymptoms.map((symptom, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 border rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                    <span className="text-sm">{symptom}</span>
                  </div>
                ))}
              </div>
              
              <Alert className="mt-4">
                <Stethoscope className="h-4 w-4" />
                <AlertDescription>
                  Remember: Every pregnancy is different. Contact your healthcare provider if you have concerns about any symptoms.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tips" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5" />
                First Trimester Health Tips
              </CardTitle>
              <CardDescription>Essential guidance for a healthy first trimester</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {firstTrimesterTips.map((tip, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {tip.category}
                      </Badge>
                    </div>
                    <p className="text-sm">{tip.tip}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="appointments" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Stethoscope className="h-5 w-5" />
                First Trimester Medical Care
              </CardTitle>
              <CardDescription>Important appointments and screenings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Week 6-8: First Prenatal Visit</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Medical history review</li>
                    <li>• Physical examination</li>
                    <li>• Blood and urine tests</li>
                    <li>• Dating ultrasound</li>
                    <li>• Discussion of prenatal care plan</li>
                  </ul>
                </div>

                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Week 10-13: Genetic Screening</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Nuchal translucency ultrasound</li>
                    <li>• First trimester blood screening</li>
                    <li>• Discussion of genetic testing options</li>
                    <li>• CVS (if indicated)</li>
                  </ul>
                </div>

                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Week 12: End of First Trimester</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Risk assessment review</li>
                    <li>• Weight and blood pressure check</li>
                    <li>• Fetal heart rate monitoring</li>
                    <li>• Second trimester planning</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}