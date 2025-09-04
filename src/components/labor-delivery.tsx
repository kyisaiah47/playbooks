"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle2, Clock, Heart, Baby, Stethoscope, AlertTriangle, Phone, MapPin } from "lucide-react"
import { useBabyPlanning, getBabyPlanningDisplayData } from "@/contexts/baby-planning-context"

interface LaborStage {
  name: string
  duration: string
  description: string
  signs: string[]
  completed: boolean
}

export function LaborDelivery() {
  const { babyPlanningData } = useBabyPlanning()
  const displayData = getBabyPlanningDisplayData(babyPlanningData)
  
  const [laborStages, setLaborStages] = useState<LaborStage[]>([
    {
      name: "Early Labor",
      duration: "6-12 hours",
      description: "Cervix dilates from 0-3 cm, contractions are mild and irregular",
      signs: ["Mild contractions 5-30 minutes apart", "Possible bloody show", "Water may break", "Excitement and nervousness"],
      completed: false
    },
    {
      name: "Active Labor", 
      duration: "4-8 hours",
      description: "Cervix dilates from 4-7 cm, contractions become stronger and regular",
      signs: ["Strong contractions 3-5 minutes apart", "Contractions last 45-60 seconds", "Need to focus during contractions", "May feel nauseous"],
      completed: false
    },
    {
      name: "Transition",
      duration: "15 minutes-3 hours", 
      description: "Cervix dilates from 8-10 cm, most intense phase",
      signs: ["Very strong contractions 2-3 minutes apart", "Contractions last 60-90 seconds", "Pressure in lower back/pelvis", "May feel overwhelmed"],
      completed: false
    },
    {
      name: "Pushing & Birth",
      duration: "20 minutes-3 hours",
      description: "Cervix fully dilated, baby moves through birth canal",
      signs: ["Urge to push", "Contractions with pushing", "Baby crowns", "Baby is born!"],
      completed: false
    },
    {
      name: "Delivery of Placenta",
      duration: "5-30 minutes", 
      description: "Placenta separates and is delivered",
      signs: ["Mild contractions", "Cord lengthens", "Gush of blood", "Placenta delivered"],
      completed: false
    }
  ])

  const toggleStage = (index: number) => {
    const updated = [...laborStages]
    updated[index].completed = !updated[index].completed
    setLaborStages(updated)
  }

  const completedStages = laborStages.filter(s => s.completed).length
  const progressPercentage = (completedStages / laborStages.length) * 100

  const painManagementOptions = [
    { method: "Natural/Unmedicated", description: "Breathing, movement, massage, water therapy" },
    { method: "Epidural", description: "Spinal anesthesia that blocks pain from waist down" },
    { method: "Nitrous Oxide", description: "Inhaled gas for pain relief during contractions" },
    { method: "IV Pain Medication", description: "Narcotic medications given through IV" },
    { method: "Pudendal Block", description: "Local anesthesia for vaginal delivery" },
    { method: "General Anesthesia", description: "Used only for emergency C-sections" }
  ]

  const whenToGoToHospital = [
    "Contractions 5 minutes apart for 1 hour",
    "Water breaks (especially if fluid is not clear)",
    "Severe abdominal pain between contractions",
    "Bright red bleeding (more than bloody show)",
    "Decreased fetal movement",
    "Severe headache or vision changes"
  ]

  const birthPositions = [
    { position: "Semi-sitting", benefits: "Allows gravity to help, good visibility for provider" },
    { position: "Side-lying", benefits: "Reduces pressure on back, good for high blood pressure" },
    { position: "Squatting", benefits: "Opens pelvis, uses gravity effectively" },
    { position: "Hands and knees", benefits: "Reduces back pain, helps baby rotate" },
    { position: "Standing/Walking", benefits: "Uses gravity, may speed labor" },
    { position: "Birth stool", benefits: "Upright position, supported squatting" }
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Labor & Delivery Guide</h2>
          <p className="text-muted-foreground">Understanding the birth process and your options</p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="secondary" className="text-lg px-3 py-1">
            Week {displayData.currentWeek}
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Labor Progress</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{completedStages}/{laborStages.length}</div>
            <Progress value={progressPercentage} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">
              stages completed
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Duration</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12-20</div>
            <p className="text-xs text-muted-foreground">
              hours for first-time mothers
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Emergency Contact</CardTitle>
            <Phone className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">911</div>
            <p className="text-xs text-muted-foreground">
              if unable to reach hospital
            </p>
          </CardContent>
        </Card>
      </div>

      <Alert>
        <AlertTriangle className="h-4 w-4" />
        <AlertDescription>
          <strong>Remember:</strong> Every labor is different. Trust your instincts and don't hesitate to contact your healthcare provider with any concerns.
        </AlertDescription>
      </Alert>

      <Tabs defaultValue="stages" className="w-full">
        <TabsList>
          <TabsTrigger value="stages">Labor Stages</TabsTrigger>
          <TabsTrigger value="signs">When to Go</TabsTrigger>
          <TabsTrigger value="pain">Pain Management</TabsTrigger>
          <TabsTrigger value="positions">Birth Positions</TabsTrigger>
          <TabsTrigger value="emergency">Emergency</TabsTrigger>
        </TabsList>

        <TabsContent value="stages" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>The Five Stages of Labor</CardTitle>
              <CardDescription>Understanding what to expect during each phase</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {laborStages.map((stage, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <button 
                        onClick={() => toggleStage(index)}
                        className="mt-1"
                      >
                        <CheckCircle2 
                          className={`h-5 w-5 ${
                            stage.completed 
                              ? 'text-primary' 
                              : 'text-muted-foreground'
                          }`} 
                        />
                      </button>
                      
                      <div className="flex-1 space-y-3">
                        <div className="flex items-center space-x-2">
                          <h3 className={`font-semibold text-lg ${stage.completed ? 'line-through text-muted-foreground' : ''}`}>
                            Stage {index + 1}: {stage.name}
                          </h3>
                          <Badge variant="outline">{stage.duration}</Badge>
                        </div>
                        
                        <p className="text-sm text-muted-foreground">
                          {stage.description}
                        </p>
                        
                        <div className="space-y-2">
                          <h4 className="font-medium text-sm">Signs and Symptoms:</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            {stage.signs.map((sign, signIndex) => (
                              <li key={signIndex} className="flex items-start space-x-2">
                                <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                                <span>{sign}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="signs" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                When to Go to the Hospital
              </CardTitle>
              <CardDescription>Key signs that it's time to head to your birth location</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold mb-2">The 5-1-1 Rule (for first-time mothers)</h4>
                  <p className="text-sm text-muted-foreground">
                    Contractions are 5 minutes apart, lasting 1 minute each, for at least 1 hour
                  </p>
                </div>

                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold mb-2">The 3-1-1 Rule (for experienced mothers)</h4>
                  <p className="text-sm text-muted-foreground">
                    Contractions are 3 minutes apart, lasting 1 minute each, for at least 1 hour
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold">Other Important Signs:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {whenToGoToHospital.map((sign, index) => (
                      <div key={index} className="flex items-start space-x-3 p-3 border rounded-lg">
                        <AlertTriangle className="h-4 w-4 text-muted-foreground mt-1 flex-shrink-0" />
                        <span className="text-sm">{sign}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Alert>
                  <Phone className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Always call your healthcare provider</strong> if you're unsure whether it's time to go to the hospital. They can help guide your decision.
                  </AlertDescription>
                </Alert>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pain" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5" />
                Pain Management Options
              </CardTitle>
              <CardDescription>Understanding your choices for labor pain relief</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {painManagementOptions.map((option, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">{option.method}</h4>
                    <p className="text-sm text-muted-foreground">{option.description}</p>
                  </div>
                ))}
                
                <Alert className="mt-4">
                  <Stethoscope className="h-4 w-4" />
                  <AlertDescription>
                    Discuss pain management preferences with your healthcare provider before labor begins. Your birth plan can include your preferences, but remain flexible as situations may change.
                  </AlertDescription>
                </Alert>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="positions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Baby className="h-5 w-5" />
                Labor and Birth Positions
              </CardTitle>
              <CardDescription>Different positions can help with comfort and labor progress</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {birthPositions.map((pos, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">{pos.position}</h4>
                    <p className="text-sm text-muted-foreground">{pos.benefits}</p>
                  </div>
                ))}
              </div>
              
              <Alert className="mt-4">
                <Baby className="h-4 w-4" />
                <AlertDescription>
                  <strong>Movement is encouraged:</strong> Changing positions during labor can help manage pain and may help baby move down the birth canal more effectively.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="emergency" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Emergency Situations
              </CardTitle>
              <CardDescription>When to call 911 or seek immediate help</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Alert>
                  <Phone className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Call 911 immediately if:</strong>
                  </AlertDescription>
                </Alert>

                <div className="space-y-3">
                  <div className="p-4 border border-destructive rounded-lg">
                    <h4 className="font-semibold text-destructive mb-2">Labor Emergency Signs</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Heavy bleeding (soaking a pad in less than an hour)</li>
                      <li>• Cord prolapse (umbilical cord comes out first)</li>
                      <li>• Baby's head is crowning and you can't get to hospital</li>
                      <li>• Severe, constant abdominal pain</li>
                      <li>• Signs of infection (fever, chills, foul-smelling discharge)</li>
                    </ul>
                  </div>

                  <div className="p-4 border border-destructive rounded-lg">
                    <h4 className="font-semibold text-destructive mb-2">Maternal Emergency Signs</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Severe headache with vision changes</li>
                      <li>• Difficulty breathing or chest pain</li>
                      <li>• Seizures or loss of consciousness</li>
                      <li>• Severe high blood pressure symptoms</li>
                      <li>• Signs of stroke (facial drooping, arm weakness, speech difficulty)</li>
                    </ul>
                  </div>

                  <div className="p-4 border border-destructive rounded-lg">
                    <h4 className="font-semibold text-destructive mb-2">Fetal Emergency Signs</h4>
                    <ul className="text-sm space-y-1">
                      <li>• No fetal movement for several hours</li>
                      <li>• Fetal heart rate abnormalities (if monitoring)</li>
                      <li>• Green or brown amniotic fluid (meconium)</li>
                    </ul>
                  </div>
                </div>

                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold mb-2">Emergency Childbirth (if help won't arrive in time)</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Stay calm and call 911 for guidance</li>
                    <li>• Have mother lie on her back with knees bent</li>
                    <li>• Support baby's head as it emerges</li>
                    <li>• Never pull on the baby or umbilical cord</li>
                    <li>• Place baby on mother's chest skin-to-skin</li>
                    <li>• Keep baby warm and clear airway if needed</li>
                  </ul>
                </div>

                <Alert>
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Trust your instincts:</strong> If something feels seriously wrong, don't hesitate to call for emergency help. It's better to be cautious when it comes to the safety of mother and baby.
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