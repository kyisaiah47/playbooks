"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle2, Calendar, Heart, Baby, Stethoscope, AlertTriangle, Lightbulb, Moon } from "lucide-react"
import { useBabyPlanning } from "@/contexts/baby-planning-context"

interface RecoveryMilestone {
  week: string
  title: string
  description: string
  physicalChanges: string[]
  emotionalChanges: string[]
  completed: boolean
}

export function PostpartumRecovery() {
  const { babyPlanningData } = useBabyPlanning()
  
  const [recoveryMilestones, setRecoveryMilestones] = useState<RecoveryMilestone[]>([
    {
      week: "Week 1",
      title: "Immediate Recovery",
      description: "First week after birth - rest and initial healing",
      physicalChanges: ["Heavy bleeding (lochia)", "Breast engorgement", "Perineal/incision soreness", "Cramping as uterus shrinks"],
      emotionalChanges: ["Joy and relief", "Overwhelming feelings", "Baby blues possible", "Exhaustion"],
      completed: false
    },
    {
      week: "Week 2-3",
      title: "Early Adjustment",
      description: "Settling into routines and continued healing",
      physicalChanges: ["Bleeding lightens", "Night sweats", "Hair loss may begin", "Breast tenderness"],
      emotionalChanges: ["Mood swings", "Anxiety about baby care", "Feeling overwhelmed", "Bonding develops"],
      completed: false
    },
    {
      week: "Week 4-6",
      title: "First Month Mark",
      description: "Major recovery milestone - 6-week checkup",
      physicalChanges: ["Bleeding may stop", "Energy slowly returns", "Joint looseness improves", "Appetite changes"],
      emotionalChanges: ["More confident in baby care", "Sleep deprivation effects", "Identity adjustment"],
      completed: false
    },
    {
      week: "Month 2-3",
      title: "Extended Recovery",
      description: "Continued healing and routine establishment",
      physicalChanges: ["Hormones begin stabilizing", "Core strength returning", "Weight loss continues", "Hair loss peaks"],
      emotionalChanges: ["Emotional stability improves", "Routine feels more natural", "May feel more like yourself"],
      completed: false
    },
    {
      week: "Month 4-6",
      title: "Long-term Adjustment",
      description: "Body and mind adapt to new normal",
      physicalChanges: ["Significant physical recovery", "Energy levels improve", "Exercise tolerance increases"],
      emotionalChanges: ["Confidence in parenting grows", "Relationship adjustments", "Career/life balance"],
      completed: false
    },
    {
      week: "6-12 Months",
      title: "New Normal",
      description: "Establishing your new life with baby",
      physicalChanges: ["Body reaches new baseline", "Strength and stamina return", "Hormonal changes if breastfeeding"],
      emotionalChanges: ["Parental identity solidifies", "New routines established", "Forward-looking mindset"],
      completed: false
    }
  ])

  const toggleMilestone = (index: number) => {
    const updated = [...recoveryMilestones]
    updated[index].completed = !updated[index].completed
    setRecoveryMilestones(updated)
  }

  const completedMilestones = recoveryMilestones.filter(m => m.completed).length
  const progressPercentage = (completedMilestones / recoveryMilestones.length) * 100

  const physicalRecoveryTips = [
    { category: "Rest", tip: "Sleep when baby sleeps - your body needs time to heal" },
    { category: "Nutrition", tip: "Eat nutrient-dense foods, stay hydrated, especially if breastfeeding" },
    { category: "Movement", tip: "Start with gentle walks, gradually increase activity as approved by doctor" },
    { category: "Hygiene", tip: "Use peri bottle, ice packs, witch hazel pads for comfort" },
    { category: "Support", tip: "Wear supportive bras, use abdominal binders if recommended" },
    { category: "Medical", tip: "Attend all postpartum checkups, take medications as prescribed" }
  ]

  const emotionalWellnessTips = [
    { category: "Support", tip: "Accept help from family and friends - you don't have to do everything" },
    { category: "Communication", tip: "Talk openly with your partner about feelings and needs" },
    { category: "Self-care", tip: "Take time for yourself, even if just 15 minutes a day" },
    { category: "Connection", tip: "Join new parent groups or connect with other mothers" },
    { category: "Professional", tip: "Don't hesitate to seek counseling if feelings become overwhelming" },
    { category: "Expectations", tip: "Be patient with yourself - recovery takes time and every journey is different" }
  ]

  const warningSignsPhysical = [
    "Heavy bleeding (soaking more than one pad per hour)",
    "Large blood clots (bigger than golf ball)",
    "Signs of infection (fever, foul-smelling discharge)",
    "Severe headaches or vision changes",
    "Chest pain or difficulty breathing",
    "Severe abdominal pain"
  ]

  const warningSignsEmotional = [
    "Persistent sadness lasting more than 2 weeks",
    "Anxiety that interferes with daily activities",
    "Thoughts of harming yourself or baby",
    "Unable to care for baby or yourself",
    "Panic attacks or extreme mood swings",
    "Loss of interest in everything"
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Postpartum Recovery</h2>
          <p className="text-muted-foreground">Your journey to healing and adjustment after birth</p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="secondary" className="text-sm">
            Recovery Guide
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Recovery Progress</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{completedMilestones}/{recoveryMilestones.length}</div>
            <Progress value={progressPercentage} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">
              milestones reached
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Full Recovery</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">6-12</div>
            <p className="text-xs text-muted-foreground">
              months for complete healing
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Key Focus</CardTitle>
            <Heart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Rest</div>
            <p className="text-xs text-muted-foreground">
              and self-compassion
            </p>
          </CardContent>
        </Card>
      </div>

      <Alert>
        <Heart className="h-4 w-4" />
        <AlertDescription>
          <strong>Remember:</strong> Recovery is not just physical - emotional and mental healing are equally important. Be patient and kind to yourself during this transition.
        </AlertDescription>
      </Alert>

      <Tabs defaultValue="timeline" className="w-full">
        <TabsList>
          <TabsTrigger value="timeline">Recovery Timeline</TabsTrigger>
          <TabsTrigger value="physical">Physical Care</TabsTrigger>
          <TabsTrigger value="emotional">Emotional Wellness</TabsTrigger>
          <TabsTrigger value="warning">Warning Signs</TabsTrigger>
          <TabsTrigger value="support">Getting Support</TabsTrigger>
        </TabsList>

        <TabsContent value="timeline" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Postpartum Recovery Timeline</CardTitle>
              <CardDescription>What to expect during each phase of recovery</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recoveryMilestones.map((milestone, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-start space-x-3">
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
                      
                      <div className="flex-1 space-y-3">
                        <div className="flex items-center space-x-2">
                          <h3 className={`font-semibold text-lg ${milestone.completed ? 'line-through text-muted-foreground' : ''}`}>
                            {milestone.week}: {milestone.title}
                          </h3>
                        </div>
                        
                        <p className="text-sm text-muted-foreground">
                          {milestone.description}
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <h4 className="font-medium text-sm">Physical Changes:</h4>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              {milestone.physicalChanges.map((change, changeIndex) => (
                                <li key={changeIndex} className="flex items-start space-x-2">
                                  <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                                  <span>{change}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="space-y-2">
                            <h4 className="font-medium text-sm">Emotional Changes:</h4>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              {milestone.emotionalChanges.map((change, changeIndex) => (
                                <li key={changeIndex} className="flex items-start space-x-2">
                                  <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                                  <span>{change}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="physical" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Stethoscope className="h-5 w-5" />
                Physical Recovery Care
              </CardTitle>
              <CardDescription>Taking care of your body as it heals</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {physicalRecoveryTips.map((tip, index) => (
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

              <div className="space-y-4">
                <h4 className="font-semibold">Common Physical Recovery Areas:</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <h5 className="font-medium mb-2">Vaginal Delivery Recovery</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Perineal care and healing</li>
                      <li>• Use ice packs and sitz baths</li>
                      <li>• Avoid heavy lifting (&gt;10 lbs)</li>
                      <li>• Expect 4-6 weeks bleeding</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-muted rounded-lg">
                    <h5 className="font-medium mb-2">C-Section Recovery</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Incision care and monitoring</li>
                      <li>• No lifting more than baby's weight</li>
                      <li>• Support incision when coughing/laughing</li>
                      <li>• Recovery takes 6-8 weeks</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-muted rounded-lg">
                    <h5 className="font-medium mb-2">Breastfeeding Care</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Treat sore/cracked nipples</li>
                      <li>• Manage engorgement with ice/heat</li>
                      <li>• Watch for signs of mastitis</li>
                      <li>• Maintain proper nutrition/hydration</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-muted rounded-lg">
                    <h5 className="font-medium mb-2">Core and Pelvic Floor</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Start gentle core breathing exercises</li>
                      <li>• Pelvic floor exercises (Kegels)</li>
                      <li>• Consider pelvic floor physical therapy</li>
                      <li>• Avoid high-impact exercise initially</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="emotional" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5" />
                Emotional Wellness
              </CardTitle>
              <CardDescription>Caring for your mental and emotional health</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {emotionalWellnessTips.map((tip, index) => (
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

              <div className="space-y-4">
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold mb-2">Understanding Baby Blues vs. Postpartum Depression</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium mb-1 text-sm">Baby Blues (Normal)</h5>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>• Occurs in first 1-2 weeks</li>
                        <li>• Mood swings, crying spells</li>
                        <li>• Anxiety, difficulty concentrating</li>
                        <li>• Resolves on its own</li>
                        <li>• Affects up to 80% of mothers</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium mb-1 text-sm">Postpartum Depression (Serious)</h5>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>• Lasts weeks to months</li>
                        <li>• Severe mood changes</li>
                        <li>• Difficulty bonding with baby</li>
                        <li>• Requires professional treatment</li>
                        <li>• Affects 10-20% of mothers</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <Alert>
                  <Moon className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Sleep when you can:</strong> Sleep deprivation significantly impacts emotional well-being. Accept help with baby care so you can rest.
                  </AlertDescription>
                </Alert>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="warning" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Warning Signs
              </CardTitle>
              <CardDescription>When to contact your healthcare provider immediately</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Alert>
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Call your doctor or 911 immediately if you experience any of these symptoms:</strong>
                  </AlertDescription>
                </Alert>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border border-destructive rounded-lg">
                    <h4 className="font-semibold text-destructive mb-3">Physical Warning Signs</h4>
                    <ul className="space-y-2">
                      {warningSignsPhysical.map((sign, index) => (
                        <li key={index} className="flex items-start space-x-2 text-sm">
                          <AlertTriangle className="h-3 w-3 text-destructive mt-1 flex-shrink-0" />
                          <span>{sign}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 border border-destructive rounded-lg">
                    <h4 className="font-semibold text-destructive mb-3">Emotional Warning Signs</h4>
                    <ul className="space-y-2">
                      {warningSignsEmotional.map((sign, index) => (
                        <li key={index} className="flex items-start space-x-2 text-sm">
                          <AlertTriangle className="h-3 w-3 text-destructive mt-1 flex-shrink-0" />
                          <span>{sign}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold mb-2">Crisis Resources</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• National Suicide Prevention Lifeline: 988</li>
                    <li>• Postpartum Support International: 1-800-944-4773</li>
                    <li>• Crisis Text Line: Text HOME to 741741</li>
                    <li>• Emergency Services: 911</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="support" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5" />
                Getting Support
              </CardTitle>
              <CardDescription>Building your support network for recovery</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Professional Support</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Postpartum checkups with OB/GYN</li>
                      <li>• Lactation consultant for breastfeeding</li>
                      <li>• Pelvic floor physical therapist</li>
                      <li>• Mental health counselor/therapist</li>
                      <li>• Postpartum doula</li>
                    </ul>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Family & Friends</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Accept help with meals and cleaning</li>
                      <li>• Ask for specific help when you need it</li>
                      <li>• Let others hold baby while you rest</li>
                      <li>• Communicate your needs clearly</li>
                      <li>• Set boundaries when needed</li>
                    </ul>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Peer Support</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• New mother support groups</li>
                      <li>• Online communities and forums</li>
                      <li>• Mom friends from prenatal classes</li>
                      <li>• Local parenting groups</li>
                      <li>• Postpartum fitness classes</li>
                    </ul>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Practical Help</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Meal delivery services</li>
                      <li>• House cleaning services</li>
                      <li>• Grocery delivery</li>
                      <li>• Night nurse or babysitter</li>
                      <li>• Errand running services</li>
                    </ul>
                  </div>
                </div>

                <Alert>
                  <Heart className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Remember:</strong> Asking for help is not a sign of weakness - it's a sign of wisdom. Recovery happens faster and more completely with good support.
                  </AlertDescription>
                </Alert>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}