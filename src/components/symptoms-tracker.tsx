"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Plus, TrendingUp, AlertTriangle, CheckCircle2, Clock } from "lucide-react"
import { useBabyPlanning, getBabyPlanningDisplayData } from "@/contexts/baby-planning-context"

interface SymptomEntry {
  id: string
  date: string
  time: string
  symptom: string
  severity: 1 | 2 | 3 | 4 | 5
  notes?: string
  triggers?: string
  relief?: string
}

const commonSymptoms = [
  "Morning sickness", "Nausea", "Vomiting", "Fatigue", "Breast tenderness",
  "Food aversions", "Headaches", "Dizziness", "Heartburn", "Constipation",
  "Back pain", "Leg cramps", "Swelling", "Shortness of breath", "Insomnia",
  "Frequent urination", "Mood swings", "Braxton Hicks", "Round ligament pain"
]

const severityColors = {
  1: "bg-emerald-100 text-emerald-800",
  2: "bg-yellow-100 text-yellow-800", 
  3: "bg-orange-100 text-orange-800",
  4: "bg-red-100 text-red-800",
  5: "bg-red-200 text-red-900"
}

export function SymptomsTracker() {
  const { babyPlanningData } = useBabyPlanning()
  const displayData = getBabyPlanningDisplayData(babyPlanningData)
  const [symptoms, setSymptoms] = useState<SymptomEntry[]>([
    {
      id: "1",
      date: "2024-01-15",
      time: "08:30",
      symptom: "Morning sickness",
      severity: 3,
      notes: "Felt nauseous after breakfast",
      triggers: "Eggs and toast",
      relief: "Ginger tea helped"
    },
    {
      id: "2", 
      date: "2024-01-15",
      time: "14:20",
      symptom: "Fatigue",
      severity: 4,
      notes: "Very tired after lunch",
      relief: "30 minute nap"
    }
  ])
  
  const [isAddingSymptom, setIsAddingSymptom] = useState(false)
  const [newSymptom, setNewSymptom] = useState({
    symptom: "",
    severity: 3 as 1 | 2 | 3 | 4 | 5,
    notes: "",
    triggers: "",
    relief: ""
  })

  const handleAddSymptom = () => {
    if (!newSymptom.symptom.trim()) return

    const now = new Date()
    const entry: SymptomEntry = {
      id: Date.now().toString(),
      date: now.toISOString().split('T')[0],
      time: now.toTimeString().slice(0, 5),
      symptom: newSymptom.symptom,
      severity: newSymptom.severity,
      notes: newSymptom.notes || undefined,
      triggers: newSymptom.triggers || undefined,
      relief: newSymptom.relief || undefined
    }

    setSymptoms([entry, ...symptoms])
    setNewSymptom({ symptom: "", severity: 3, notes: "", triggers: "", relief: "" })
    setIsAddingSymptom(false)
  }

  const getSeverityLabel = (severity: number) => {
    const labels = { 1: "Very Mild", 2: "Mild", 3: "Moderate", 4: "Severe", 5: "Very Severe" }
    return labels[severity as keyof typeof labels]
  }

  const getTodaySymptoms = () => {
    const today = new Date().toISOString().split('T')[0]
    return symptoms.filter(s => s.date === today)
  }

  const getSymptomFrequency = () => {
    const frequency: Record<string, number> = {}
    symptoms.forEach(s => {
      frequency[s.symptom] = (frequency[s.symptom] || 0) + 1
    })
    return Object.entries(frequency)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 5)
  }

  const getAverageSeverity = () => {
    if (symptoms.length === 0) return 0
    const total = symptoms.reduce((sum, s) => sum + s.severity, 0)
    return Math.round((total / symptoms.length) * 10) / 10
  }

  const todaySymptoms = getTodaySymptoms()
  const topSymptoms = getSymptomFrequency()
  const avgSeverity = getAverageSeverity()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Symptoms Tracker</h2>
          <p className="text-muted-foreground">Monitor and track pregnancy symptoms</p>
        </div>
        <Button onClick={() => setIsAddingSymptom(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Log Symptom
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Today's Symptoms</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{todaySymptoms.length}</div>
            <p className="text-xs text-muted-foreground">
              {todaySymptoms.length === 1 ? "symptom logged" : "symptoms logged"}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Severity</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{avgSeverity}/5</div>
            <p className="text-xs text-muted-foreground">
              {avgSeverity <= 2 ? "Mild symptoms" : avgSeverity <= 3.5 ? "Moderate symptoms" : "Severe symptoms"}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Logged</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{symptoms.length}</div>
            <p className="text-xs text-muted-foreground">
              symptoms tracked
            </p>
          </CardContent>
        </Card>
      </div>

      {isAddingSymptom && (
        <Card>
          <CardHeader>
            <CardTitle>Log New Symptom</CardTitle>
            <CardDescription>Record a symptom you're experiencing</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="symptom">Symptom</Label>
                <Input
                  id="symptom"
                  value={newSymptom.symptom}
                  onChange={(e) => setNewSymptom({...newSymptom, symptom: e.target.value})}
                  placeholder="e.g., Morning sickness"
                />
                <div className="flex flex-wrap gap-1 mt-2">
                  {commonSymptoms.slice(0, 6).map(symptom => (
                    <Button
                      key={symptom}
                      variant="outline"
                      size="sm"
                      onClick={() => setNewSymptom({...newSymptom, symptom})}
                    >
                      {symptom}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="severity">Severity (1-5)</Label>
                <div className="space-y-2">
                  <div className="flex space-x-2">
                    {[1, 2, 3, 4, 5].map((level) => (
                      <Button
                        key={level}
                        variant={newSymptom.severity === level ? "default" : "outline"}
                        size="sm"
                        onClick={() => setNewSymptom({...newSymptom, severity: level as 1|2|3|4|5})}
                      >
                        {level}
                      </Button>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {getSeverityLabel(newSymptom.severity)}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="triggers">Triggers (optional)</Label>
                <Input
                  id="triggers"
                  value={newSymptom.triggers}
                  onChange={(e) => setNewSymptom({...newSymptom, triggers: e.target.value})}
                  placeholder="What might have caused it?"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="relief">Relief (optional)</Label>
                <Input
                  id="relief"
                  value={newSymptom.relief}
                  onChange={(e) => setNewSymptom({...newSymptom, relief: e.target.value})}
                  placeholder="What helped?"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Notes (optional)</Label>
                <Input
                  id="notes"
                  value={newSymptom.notes}
                  onChange={(e) => setNewSymptom({...newSymptom, notes: e.target.value})}
                  placeholder="Additional details"
                />
              </div>
            </div>

            <div className="flex space-x-2">
              <Button onClick={handleAddSymptom}>Add Symptom</Button>
              <Button variant="outline" onClick={() => setIsAddingSymptom(false)}>
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <Tabs defaultValue="recent" className="w-full">
        <TabsList>
          <TabsTrigger value="recent">Recent Symptoms</TabsTrigger>
          <TabsTrigger value="patterns">Patterns</TabsTrigger>
        </TabsList>

        <TabsContent value="recent" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Symptoms</CardTitle>
              <CardDescription>Your latest symptom entries</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {symptoms.length === 0 ? (
                  <p className="text-muted-foreground text-center py-8">
                    No symptoms logged yet. Click "Log Symptom" to get started.
                  </p>
                ) : (
                  symptoms.slice(0, 10).map((symptom) => (
                    <div key={symptom.id} className="flex items-start space-x-4 p-4 border rounded-lg">
                      <div className="flex flex-col items-center space-y-1">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{symptom.time}</span>
                      </div>
                      
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold">{symptom.symptom}</h4>
                          <div className="flex items-center space-x-2">
                            <Badge className={severityColors[symptom.severity]}>
                              {getSeverityLabel(symptom.severity)}
                            </Badge>
                            <span className="text-sm text-muted-foreground">{symptom.date}</span>
                          </div>
                        </div>
                        
                        {symptom.notes && (
                          <p className="text-sm text-muted-foreground">{symptom.notes}</p>
                        )}
                        
                        <div className="flex space-x-4 text-sm">
                          {symptom.triggers && (
                            <span><strong>Triggers:</strong> {symptom.triggers}</span>
                          )}
                          {symptom.relief && (
                            <span><strong>Relief:</strong> {symptom.relief}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="patterns" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Most Common Symptoms</CardTitle>
                <CardDescription>Your frequently experienced symptoms</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {topSymptoms.map(([symptom, count], index) => (
                    <div key={symptom} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-xs font-medium">
                          {index + 1}
                        </div>
                        <span className="font-medium">{symptom}</span>
                      </div>
                      <Badge variant="secondary">{count} times</Badge>
                    </div>
                  ))}
                  {topSymptoms.length === 0 && (
                    <p className="text-muted-foreground text-center py-4">
                      Log more symptoms to see patterns
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Severity Trends</CardTitle>
                <CardDescription>Track how symptom severity changes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Average Severity</span>
                    <span className="font-semibold">{avgSeverity}/5</span>
                  </div>
                  <Progress value={(avgSeverity / 5) * 100} />
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-center p-2 bg-muted rounded">
                      <div className="font-semibold">{symptoms.filter(s => s.severity <= 2).length}</div>
                      <div className="text-muted-foreground">Mild</div>
                    </div>
                    <div className="text-center p-2 bg-muted rounded">
                      <div className="font-semibold">{symptoms.filter(s => s.severity >= 4).length}</div>
                      <div className="text-muted-foreground">Severe</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}