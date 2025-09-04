"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Heart, Baby, Ruler, Weight } from "lucide-react"
import { useBabyPlanning, getBabyPlanningDisplayData } from "@/contexts/baby-planning-context"

const weeklyData = {
  4: { size: "Poppy seed", length: "0.04 in", weight: "0.002 oz", development: "Basic neural tube formation begins" },
  5: { size: "Sesame seed", length: "0.05 in", weight: "0.003 oz", development: "Heart starts beating, arm and leg buds appear" },
  6: { size: "Lentil", length: "0.08 in", weight: "0.004 oz", development: "Brain development, facial features forming" },
  7: { size: "Blueberry", length: "0.16 in", weight: "0.007 oz", development: "Hands and feet developing, tail disappearing" },
  8: { size: "Kidney bean", length: "0.24 in", weight: "0.01 oz", development: "Fingers and toes forming, eyelids developing" },
  9: { size: "Grape", length: "0.35 in", weight: "0.07 oz", development: "All essential organs present, movement begins" },
  10: { size: "Kumquat", length: "0.51 in", weight: "0.14 oz", development: "Vital organs functioning, hair and nails growing" },
  11: { size: "Fig", length: "0.68 in", weight: "0.25 oz", development: "Baby can hiccup, tooth buds appearing" },
  12: { size: "Lime", length: "0.81 in", weight: "0.49 oz", development: "Reflexes developing, kidneys producing urine" },
  13: { size: "Pea pod", length: "2.91 in", weight: "0.81 oz", development: "Fingerprints forming, vocal cords developing" },
  14: { size: "Lemon", length: "3.42 in", weight: "1.52 oz", development: "Facial expressions, thumb sucking begins" },
  15: { size: "Apple", length: "3.98 in", weight: "2.47 oz", development: "Taste buds forming, baby can sense light" },
  16: { size: "Avocado", length: "4.57 in", weight: "3.53 oz", development: "Hearing developing, coordinated limb movements" },
  17: { size: "Turnip", length: "5.12 in", weight: "4.94 oz", development: "Brown fat forming for temperature regulation" },
  18: { size: "Bell pepper", length: "5.59 in", weight: "6.70 oz", development: "Genitals visible, regular sleep/wake cycles" },
  19: { size: "Tomato", length: "6.02 in", weight: "8.47 oz", development: "Brain designating specialized areas" },
  20: { size: "Banana", length: "6.46 in", weight: "10.58 oz", development: "Swallowing amniotic fluid, producing meconium" },
  21: { size: "Carrot", length: "10.51 in", weight: "12.70 oz", development: "Rapid brain growth, taste buds functional" },
  22: { size: "Papaya", length: "10.94 in", weight: "15.17 oz", development: "Primitive senses developed, eyelids and eyebrows" },
  23: { size: "Large mango", length: "11.38 in", weight: "1.10 lbs", development: "Blood vessels in lungs developing" },
  24: { size: "Ear of corn", length: "11.81 in", weight: "1.32 lbs", development: "Inner ear fully developed, skin less transparent" },
  25: { size: "Rutabaga", length: "13.62 in", weight: "1.46 lbs", development: "Hair color and texture becoming apparent" },
  26: { size: "Scallion", length: "14.02 in", weight: "1.68 lbs", development: "Eyes opening, response to sound" },
  27: { size: "Cauliflower", length: "14.41 in", weight: "1.93 lbs", development: "Lungs developing surfactant" },
  28: { size: "Large eggplant", length: "14.80 in", weight: "2.22 lbs", development: "Rapid brain development, dreaming begins" },
  29: { size: "Butternut squash", length: "15.2 in", weight: "2.54 lbs", development: "Muscles and lungs continuing to mature" },
  30: { size: "Large cabbage", length: "15.71 in", weight: "2.91 lbs", development: "Brain controlling body temperature" },
  31: { size: "Coconut", length: "16.18 in", weight: "3.31 lbs", development: "Fingernails reaching fingertips" },
  32: { size: "Jicama", length: "16.69 in", weight: "3.75 lbs", development: "Bones hardening, practicing breathing" },
  33: { size: "Pineapple", length: "17.20 in", weight: "4.23 lbs", development: "Skull bones not yet fused" },
  34: { size: "Cantaloupe", length: "17.72 in", weight: "4.73 lbs", development: "Central nervous system maturing" },
  35: { size: "Honeydew melon", length: "18.19 in", weight: "5.25 lbs", development: "Kidneys fully developed" },
  36: { size: "Romaine lettuce", length: "18.66 in", weight: "5.78 lbs", development: "Digestive system nearly mature" },
  37: { size: "Swiss chard", length: "19.13 in", weight: "6.30 lbs", development: "Baby practicing breathing movements" },
  38: { size: "Leek", length: "19.61 in", weight: "6.80 lbs", development: "Organs mature, gaining about 0.5 oz daily" },
  39: { size: "Mini watermelon", length: "20.09 in", weight: "7.25 lbs", development: "Brain and lungs still developing" },
  40: { size: "Small pumpkin", length: "20.16 in", weight: "7.63 lbs", development: "Ready for birth, lungs fully mature" }
}

const trimesterInfo = {
  1: {
    name: "First Trimester",
    weeks: "1-12 weeks",
    description: "Foundation development - organs form, morning sickness common",
    milestones: ["Neural tube closes", "Heart starts beating", "Major organs form", "Arms and legs develop"]
  },
  2: {
    name: "Second Trimester", 
    weeks: "13-27 weeks",
    description: "Growth and movement - energy returns, baby movements felt",
    milestones: ["Gender can be determined", "Baby movements felt", "Anatomy scan", "Rapid brain growth"]
  },
  3: {
    name: "Third Trimester",
    weeks: "28-40+ weeks", 
    description: "Final preparation - weight gain, organ maturation, positioning for birth",
    milestones: ["Lungs mature", "Weight gain accelerates", "Brain development", "Baby positions for birth"]
  }
}

export function WeeklyDevelopment() {
  const { babyPlanningData } = useBabyPlanning()
  const displayData = getBabyPlanningDisplayData(babyPlanningData)
  const [selectedWeek, setSelectedWeek] = useState(displayData.currentWeek)

  const currentTrimester = selectedWeek <= 12 ? 1 : selectedWeek <= 27 ? 2 : 3
  const weekData = weeklyData[selectedWeek as keyof typeof weeklyData]
  const progressPercentage = (selectedWeek / 40) * 100

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Weekly Development</h2>
          <p className="text-muted-foreground">Track your baby's growth week by week</p>
        </div>
        <Badge variant="secondary" className="text-lg px-3 py-1">
          Week {selectedWeek}
        </Badge>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Pregnancy Progress
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between text-sm">
              <span>{displayData.trimester} Trimester</span>
              <span>Week {selectedWeek} of 40</span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Conception</span>
              <span>Due Date</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs value={currentTrimester.toString()} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="1">1st Trimester</TabsTrigger>
          <TabsTrigger value="2">2nd Trimester</TabsTrigger>
          <TabsTrigger value="3">3rd Trimester</TabsTrigger>
        </TabsList>
        
        {Object.entries(trimesterInfo).map(([tri, info]) => (
          <TabsContent key={tri} value={tri}>
            <Card>
              <CardHeader>
                <CardTitle>{info.name}</CardTitle>
                <CardDescription>{info.weeks} • {info.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <h4 className="font-semibold">Key Milestones</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {info.milestones.map((milestone, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                        {milestone}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Baby className="h-5 w-5" />
              Current Week Development
            </CardTitle>
          </CardHeader>
          <CardContent>
            {weekData ? (
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-4xl mb-2">🍃</div>
                  <h3 className="text-xl font-semibold">Size of a {weekData.size}</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-muted rounded-lg">
                    <Ruler className="h-4 w-4 mx-auto mb-2" />
                    <div className="text-sm text-muted-foreground">Length</div>
                    <div className="font-semibold">{weekData.length}</div>
                  </div>
                  <div className="text-center p-3 bg-muted rounded-lg">
                    <Weight className="h-4 w-4 mx-auto mb-2" />
                    <div className="text-sm text-muted-foreground">Weight</div>
                    <div className="font-semibold">{weekData.weight}</div>
                  </div>
                </div>
                
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold mb-2">Development Highlight</h4>
                  <p className="text-sm">{weekData.development}</p>
                </div>
              </div>
            ) : (
              <p className="text-muted-foreground text-center py-8">
                Select a week to see development details
              </p>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Week Navigator</CardTitle>
            <CardDescription>Jump to any week to explore development</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-8 gap-2">
              {Array.from({ length: 40 }, (_, i) => i + 1).map((week) => (
                <Button
                  key={week}
                  variant={week === selectedWeek ? "default" : "outline"}
                  size="sm"
                  className="h-8 w-8 p-0"
                  onClick={() => setSelectedWeek(week)}
                >
                  {week}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}