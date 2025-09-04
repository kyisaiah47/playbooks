"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle2, Calendar, Heart, Baby, Stethoscope, BookOpen, Lightbulb, Activity } from "lucide-react"
import { useBabyPlanning, getBabyPlanningDisplayData } from "@/contexts/baby-planning-context"

interface SecondTrimesterMilestone {
  week: number
  title: string
  description: string
  completed: boolean
}

export function SecondTrimester() {
  const { babyPlanningData } = useBabyPlanning()
  const displayData = getBabyPlanningDisplayData(babyPlanningData)
  
  const [milestones, setMilestones] = useState<SecondTrimesterMilestone[]>([
    { week: 13, title: "Second Trimester Begins", description: "Enter the 'golden period' of pregnancy", completed: displayData.currentWeek >= 13 },
    { week: 16, title: "Gender Reveal Possible", description: "Baby's sex can often be determined via ultrasound", completed: displayData.currentWeek >= 16 },
    { week: 18, title: "Anatomy Scan", description: "Detailed ultrasound to check baby's development", completed: displayData.currentWeek >= 18 },
    { week: 20, title: "Halfway Point", description: "You're halfway through your pregnancy!", completed: displayData.currentWeek >= 20 },
    { week: 22, title: "Possible First Movements", description: "You may start feeling baby's first kicks", completed: displayData.currentWeek >= 22 },
    { week: 24, title: "Viability Milestone", description: "Baby reaches viability outside the womb", completed: displayData.currentWeek >= 24 },
    { week: 26, title: "Third Trimester Prep", description: "Begin preparing for the final stretch", completed: displayData.currentWeek >= 26 }
  ])

  const toggleMilestone = (index: number) => {
    const updated = [...milestones]
    updated[index].completed = !updated[index].completed
    setMilestones(updated)
  }

  const completedMilestones = milestones.filter(m => m.completed).length
  const progressPercentage = (completedMilestones / milestones.length) * 100

  const weeklyDevelopment = {
    13: { size: "Peach", development: "Fingerprints are forming, vocal cords develop" },
    14: { size: "Lemon", development: "Baby can make facial expressions, kidneys produce urine" },
    15: { size: "Apple", development: "Bone and muscle development, hair patterns emerge" },
    16: { size: "Avocado", development: "Baby can hear your voice, limbs are more proportional" },
    17: { size: "Pear", development: "Fat begins to develop, baby practices breathing" },
    18: { size: "Bell pepper", development: "Baby can yawn and hiccup, ears are in final position" },
    19: { size: "Tomato", development: "Sensory development accelerates, protective coating forms" },
    20: { size: "Banana", development: "Halfway point! Baby's movement becomes more coordinated" },
    21: { size: "Carrot", development: "Digestive system practices, sleep cycles develop" },
    22: { size: "Spaghetti squash", development: "Lips and eyebrows are more distinct, taste buds develop" },
    23: { size: "Large mango", development: "Hearing develops, baby responds to sounds" },
    24: { size: "Ear of corn", development: "Viability milestone, lungs develop surfactant" },
    25: { size: "Cauliflower", development: "Hair color and texture are determined" },
    26: { size: "Lettuce head", development: "Eyes begin to open, immune system develops" }
  }

  const currentWeekDev = weeklyDevelopment[Math.min(Math.max(displayData.currentWeek, 13), 26) as keyof typeof weeklyDevelopment]

  const secondTrimesterSymptoms = [
    "Increased energy", "Growing belly", "Back pain", "Leg cramps",
    "Heartburn", "Constipation", "Nasal congestion", "Skin changes",
    "Round ligament pain", "Increased appetite", "Breast growth", "Stretch marks"
  ]

  const secondTrimesterTips = [
    { category: "Exercise", tip: "Swimming and prenatal yoga are excellent options" },
    { category: "Nutrition", tip: "Focus on iron-rich foods and calcium" },
    { category: "Sleep", tip: "Start sleeping on your side with a pregnancy pillow" },
    { category: "Skin Care", tip: "Use moisturizer to help prevent stretch marks" },
    { category: "Dental", tip: "Schedule dental cleaning - pregnancy gingivitis is common" },
    { category: "Travel", tip: "This is the safest time to travel during pregnancy" }
  ]

  const isInSecondTrimester = displayData.currentWeek >= 13 && displayData.currentWeek <= 27

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Second Trimester Journey</h2>
          <p className="text-muted-foreground">Weeks 13-27: The golden period of pregnancy</p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="secondary" className="text-lg px-3 py-1">
            Week {displayData.currentWeek}
          </Badge>
          {isInSecondTrimester && (
            <Badge variant="default" className="text-sm">
              2nd Trimester
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
              {isInSecondTrimester ? Math.max(0, 28 - displayData.currentWeek) : displayData.currentWeek < 13 ? "Not started" : "Complete"}
            </div>
            <p className="text-xs text-muted-foreground">
              {displayData.currentWeek < 13 ? "weeks until 2nd trimester" : isInSecondTrimester ? "weeks until 3rd trimester" : "Second trimester complete!"}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Baby Size</CardTitle>
            <Baby className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{currentWeekDev?.size || "Growing"}</div>
            <p className="text-xs text-muted-foreground">
              size comparison
            </p>
          </CardContent>
        </Card>
      </div>

      {displayData.currentWeek >= 28 && (
        <Alert>
          <CheckCircle2 className="h-4 w-4" />
          <AlertDescription>
            <strong>Second trimester complete!</strong> You're entering the third trimester. Baby is growing rapidly and you may feel more tired again.
          </AlertDescription>
        </Alert>
      )}

      {displayData.currentWeek >= 13 && displayData.currentWeek <= 27 && (
        <Alert>
          <Activity className="h-4 w-4" />
          <AlertDescription>
            <strong>Welcome to the golden period!</strong> Many women feel their best during the second trimester with increased energy and fewer symptoms.
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
                <div className="text-4xl mb-2">🍎</div>
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
                <h5 className="font-medium mb-2">Key Second Trimester Developments:</h5>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Facial features become more defined</li>
                  <li>• Baby's sex can be determined</li>
                  <li>• Hearing develops - baby can hear your voice</li>
                  <li>• Movement becomes more coordinated</li>
                  <li>• Viability outside the womb is reached</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="milestones" className="w-full">
        <TabsList>
          <TabsTrigger value="milestones">Milestones</TabsTrigger>
          <TabsTrigger value="symptoms">Common Changes</TabsTrigger>
          <TabsTrigger value="tips">Health Tips</TabsTrigger>
          <TabsTrigger value="appointments">Medical Care</TabsTrigger>
        </TabsList>

        <TabsContent value="milestones" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Second Trimester Milestones</CardTitle>
              <CardDescription>Important checkpoints during weeks 13-27</CardDescription>
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
                      <p className="text-sm text-muted-foreground">
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
                Common Second Trimester Changes
              </CardTitle>
              <CardDescription>What to expect during weeks 13-27</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {secondTrimesterSymptoms.map((symptom, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 border rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                    <span className="text-sm">{symptom}</span>
                  </div>
                ))}
              </div>
              
              <Alert className="mt-4">
                <Stethoscope className="h-4 w-4" />
                <AlertDescription>
                  The second trimester is often called the "golden period" because many uncomfortable first trimester symptoms improve while third trimester discomforts haven't yet begun.
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
                Second Trimester Health Tips
              </CardTitle>
              <CardDescription>Making the most of your golden period</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {secondTrimesterTips.map((tip, index) => (
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
                Second Trimester Medical Care
              </CardTitle>
              <CardDescription>Key appointments and screenings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Week 15-17: Triple/Quad Screen</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Blood test for chromosomal abnormalities</li>
                    <li>• Screen for neural tube defects</li>
                    <li>• Optional genetic counseling</li>
                  </ul>
                </div>

                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Week 18-22: Anatomy Scan</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Detailed ultrasound of baby's organs</li>
                    <li>• Check growth and development</li>
                    <li>• Gender determination (if desired)</li>
                    <li>• Placenta and amniotic fluid assessment</li>
                  </ul>
                </div>

                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Week 24-26: Glucose Screening</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Screen for gestational diabetes</li>
                    <li>• One-hour glucose tolerance test</li>
                    <li>• Follow-up testing if needed</li>
                  </ul>
                </div>

                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Regular Check-ups (Every 4 weeks)</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Weight and blood pressure monitoring</li>
                    <li>• Fundal height measurement</li>
                    <li>• Fetal heart rate check</li>
                    <li>• Discussion of symptoms and concerns</li>
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