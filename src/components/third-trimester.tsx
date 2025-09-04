"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle2, Calendar, Heart, Baby, Stethoscope, BookOpen, Lightbulb, AlertTriangle } from "lucide-react"
import { useBabyPlanning, getBabyPlanningDisplayData } from "@/contexts/baby-planning-context"

interface ThirdTrimesterMilestone {
  week: number
  title: string
  description: string
  completed: boolean
}

export function ThirdTrimester() {
  const { babyPlanningData } = useBabyPlanning()
  const displayData = getBabyPlanningDisplayData(babyPlanningData)
  
  const [milestones, setMilestones] = useState<ThirdTrimesterMilestone[]>([
    { week: 28, title: "Third Trimester Begins", description: "Enter the final stretch of pregnancy", completed: displayData.currentWeek >= 28 },
    { week: 30, title: "Rapid Weight Gain", description: "Baby gains about 1/2 pound per week", completed: displayData.currentWeek >= 30 },
    { week: 32, title: "Lung Development", description: "Baby's lungs continue maturing", completed: displayData.currentWeek >= 32 },
    { week: 34, title: "Baby Considered Late Preterm", description: "Good survival rates if born now", completed: displayData.currentWeek >= 34 },
    { week: 36, title: "Early Term", description: "Baby is considered early term", completed: displayData.currentWeek >= 36 },
    { week: 37, title: "Full Term", description: "Baby is now considered full term!", completed: displayData.currentWeek >= 37 },
    { week: 39, title: "Optimal Birth Time", description: "Best time for delivery if no complications", completed: displayData.currentWeek >= 39 }
  ])

  const toggleMilestone = (index: number) => {
    const updated = [...milestones]
    updated[index].completed = !updated[index].completed
    setMilestones(updated)
  }

  const completedMilestones = milestones.filter(m => m.completed).length
  const progressPercentage = (completedMilestones / milestones.length) * 100

  const weeklyDevelopment = {
    28: { size: "Eggplant", development: "Eyes can open and close, baby can blink and has eyelashes" },
    29: { size: "Butternut squash", development: "Rapid brain development, can control body temperature" },
    30: { size: "Large cabbage", development: "Eyes can track light, lanugo hair begins to disappear" },
    31: { size: "Coconut", development: "Major organ development is complete" },
    32: { size: "Jicama", development: "Bones are hardening, fingernails and toenails grow" },
    33: { size: "Pineapple", development: "Immune system develops, skull bones remain soft" },
    34: { size: "Cantaloupe", development: "Lungs continue maturing, brain develops rapidly" },
    35: { size: "Honeydew melon", development: "Kidneys are fully developed, liver can process waste" },
    36: { size: "Papaya", development: "Baby's skin becomes smooth, digestive system nearly mature" },
    37: { size: "Swiss chard", development: "Baby is considered full term, ready for birth" },
    38: { size: "Leek", development: "Lungs are mature, baby continues to gain weight" },
    39: { size: "Mini watermelon", development: "Full term baby, optimal time for natural delivery" },
    40: { size: "Small pumpkin", development: "Due date reached! Baby's organs are fully mature" }
  }

  const currentWeekDev = weeklyDevelopment[Math.min(Math.max(displayData.currentWeek, 28), 40) as keyof typeof weeklyDevelopment]

  const thirdTrimesterSymptoms = [
    "Shortness of breath", "Frequent urination", "Braxton Hicks contractions", "Back pain",
    "Hip pain", "Swelling (hands, feet, ankles)", "Trouble sleeping", "Heartburn",
    "Hemorrhoids", "Stretch marks", "Fatigue returns", "Breast tenderness"
  ]

  const thirdTrimesterTips = [
    { category: "Sleep", tip: "Sleep on your left side with pillows between legs" },
    { category: "Exercise", tip: "Continue gentle exercise like walking and swimming" },
    { category: "Nutrition", tip: "Eat smaller, frequent meals to manage heartburn" },
    { category: "Preparation", tip: "Pack hospital bag and finalize birth plan" },
    { category: "Comfort", tip: "Take warm baths to relieve aches and pains" },
    { category: "Movement", tip: "Do pelvic tilts and gentle stretches for back pain" }
  ]

  const isInThirdTrimester = displayData.currentWeek >= 28
  const isFullTerm = displayData.currentWeek >= 37
  const isOverdue = displayData.currentWeek >= 42

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Third Trimester Journey</h2>
          <p className="text-muted-foreground">Weeks 28-40+: The final stretch</p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="secondary" className="text-lg px-3 py-1">
            Week {displayData.currentWeek}
          </Badge>
          {isInThirdTrimester && (
            <Badge variant="default" className="text-sm">
              3rd Trimester
            </Badge>
          )}
          {isFullTerm && (
            <Badge variant="default" className="text-sm">
              Full Term
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
            <CardTitle className="text-sm font-medium">Weeks to Due Date</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {displayData.currentWeek < 40 ? Math.max(0, 40 - displayData.currentWeek) : displayData.currentWeek - 40}
            </div>
            <p className="text-xs text-muted-foreground">
              {displayData.currentWeek < 40 ? "weeks until due date" : "weeks overdue"}
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

      {isFullTerm && !isOverdue && (
        <Alert>
          <CheckCircle2 className="h-4 w-4" />
          <AlertDescription>
            <strong>Your baby is full term!</strong> Your baby's organs are mature and ready for birth. Labor could start any time now.
          </AlertDescription>
        </Alert>
      )}

      {isOverdue && (
        <Alert>
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            <strong>Post-term pregnancy:</strong> Contact your healthcare provider about induction options and increased monitoring.
          </AlertDescription>
        </Alert>
      )}

      {isInThirdTrimester && !isFullTerm && (
        <Alert>
          <Baby className="h-4 w-4" />
          <AlertDescription>
            <strong>Final preparations:</strong> Use this time to prepare for baby's arrival. Pack your hospital bag and finalize your birth plan.
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
                <div className="text-4xl mb-2">🎃</div>
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
                <h5 className="font-medium mb-2">Key Third Trimester Developments:</h5>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Rapid brain development continues</li>
                  <li>• Lungs mature and prepare for breathing</li>
                  <li>• Baby gains significant weight</li>
                  <li>• Immune system strengthens</li>
                  <li>• Baby settles into birth position</li>
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
          <TabsTrigger value="tips">Comfort Tips</TabsTrigger>
          <TabsTrigger value="appointments">Medical Care</TabsTrigger>
          <TabsTrigger value="preparation">Birth Prep</TabsTrigger>
        </TabsList>

        <TabsContent value="milestones" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Third Trimester Milestones</CardTitle>
              <CardDescription>Important checkpoints during weeks 28-40+</CardDescription>
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
                Common Third Trimester Changes
              </CardTitle>
              <CardDescription>What to expect during weeks 28-40+</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {thirdTrimesterSymptoms.map((symptom, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 border rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                    <span className="text-sm">{symptom}</span>
                  </div>
                ))}
              </div>
              
              <Alert className="mt-4">
                <Stethoscope className="h-4 w-4" />
                <AlertDescription>
                  As your baby grows larger, you may experience more discomfort. Contact your healthcare provider if you have severe symptoms or signs of preterm labor.
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
                Third Trimester Comfort Tips
              </CardTitle>
              <CardDescription>Managing discomfort in the final weeks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {thirdTrimesterTips.map((tip, index) => (
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
                Third Trimester Medical Care
              </CardTitle>
              <CardDescription>Increased monitoring and preparation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Week 28-32: Regular Check-ups</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Appointments every 2-3 weeks</li>
                    <li>• Blood pressure monitoring</li>
                    <li>• Fundal height measurement</li>
                    <li>• Fetal movement assessment</li>
                    <li>• Rhogam shot if Rh-negative</li>
                  </ul>
                </div>

                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Week 35-37: Group B Strep Test</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Vaginal and rectal swab</li>
                    <li>• Determines antibiotic need during labor</li>
                    <li>• Discuss birth plan with provider</li>
                  </ul>
                </div>

                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Week 36+: Weekly Appointments</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Cervical checks (if desired)</li>
                    <li>• Baby's position assessment</li>
                    <li>• Signs of labor discussion</li>
                    <li>• Non-stress tests if needed</li>
                  </ul>
                </div>

                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Week 41+: Post-dates monitoring</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Increased fetal monitoring</li>
                    <li>• Biophysical profiles</li>
                    <li>• Discussion of induction</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="preparation" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Birth Preparation Checklist
              </CardTitle>
              <CardDescription>Getting ready for labor and delivery</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <h4 className="font-semibold">Hospital Bag Essentials</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Insurance cards and ID</li>
                    <li>• Comfortable going-home outfit</li>
                    <li>• Toiletries and phone charger</li>
                    <li>• Baby's going-home outfit</li>
                    <li>• Nursing bras and pads</li>
                    <li>• Birth plan copies</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold">Home Preparation</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Car seat properly installed</li>
                    <li>• Nursery ready and baby-proofed</li>
                    <li>• Freezer meals prepared</li>
                    <li>• Pet care arrangements</li>
                    <li>• Childcare for other children</li>
                    <li>• Emergency contact list ready</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold">Labor Signs to Watch For</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Regular contractions 5 minutes apart</li>
                    <li>• Water breaking (rupture of membranes)</li>
                    <li>• Bloody show or mucus plug loss</li>
                    <li>• Decreased fetal movement</li>
                    <li>• Severe headache or vision changes</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold">Support System</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Birth partner chosen and prepared</li>
                    <li>• Doula hired (if desired)</li>
                    <li>• Family support arranged</li>
                    <li>• Postpartum help planned</li>
                    <li>• Pediatrician selected</li>
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