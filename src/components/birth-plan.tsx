"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { FileText, Download, Printer, Save, Baby, Heart, Users, Stethoscope } from "lucide-react"
import { useBabyPlanning, getBabyPlanningDisplayData } from "@/contexts/baby-planning-context"

interface BirthPlanPreferences {
  laborPreferences: {
    environment: string
    movement: string[]
    positions: string[]
    comfort: string[]
    support: string[]
    monitoring: string
  }
  painManagement: {
    approach: string
    methods: string[]
    epidural: string
    alternatives: string[]
  }
  delivery: {
    assistedDelivery: string
    episiotomy: string
    cuttingCord: string
    placentaDelivery: string
    skinToSkin: string
  }
  postpartum: {
    feeding: string
    rooming: string
    visitors: string
    discharge: string
    newbornProcedures: string[]
  }
  emergency: {
    cesarean: string
    complications: string
    decisions: string
  }
  personalPreferences: {
    photography: string
    music: string
    aromatherapy: string
    specialRequests: string
  }
}

const defaultPreferences: BirthPlanPreferences = {
  laborPreferences: {
    environment: "dim-lighting",
    movement: ["walk-freely", "change-positions"],
    positions: ["upright", "side-lying"],
    comfort: ["birthing-ball", "warm-shower"],
    support: ["partner-present", "doula"],
    monitoring: "intermittent"
  },
  painManagement: {
    approach: "flexible",
    methods: ["breathing", "massage"],
    epidural: "open",
    alternatives: ["water-birth", "nitrous-oxide"]
  },
  delivery: {
    assistedDelivery: "avoid-unless-necessary",
    episiotomy: "avoid-unless-necessary", 
    cuttingCord: "partner",
    placentaDelivery: "natural",
    skinToSkin: "immediately"
  },
  postpartum: {
    feeding: "breastfeeding",
    rooming: "rooming-in",
    visitors: "immediate-family",
    discharge: "standard",
    newbornProcedures: ["vitamin-k", "eye-ointment"]
  },
  emergency: {
    cesarean: "discuss-first",
    complications: "keep-informed",
    decisions: "joint-decisions"
  },
  personalPreferences: {
    photography: "allowed",
    music: "soft-playlist",
    aromatherapy: "lavender",
    specialRequests: ""
  }
}

export function BirthPlan() {
  const { babyPlanningData } = useBabyPlanning()
  const displayData = getBabyPlanningDisplayData(babyPlanningData)
  
  const [preferences, setPreferences] = useState<BirthPlanPreferences>(defaultPreferences)
  const [customRequests, setCustomRequests] = useState("")

  const updatePreference = (section: keyof BirthPlanPreferences, key: string, value: any) => {
    setPreferences(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: value
      }
    }))
  }

  const toggleArrayPreference = (section: keyof BirthPlanPreferences, key: string, value: string) => {
    const currentArray = preferences[section][key as keyof typeof preferences[typeof section]] as string[]
    const updated = currentArray.includes(value) 
      ? currentArray.filter(item => item !== value)
      : [...currentArray, value]
    
    updatePreference(section, key, updated)
  }

  const exportBirthPlan = () => {
    const planText = generateBirthPlanText()
    const blob = new Blob([planText], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'birth-plan.txt'
    a.click()
    URL.revokeObjectURL(url)
  }

  const generateBirthPlanText = () => {
    return `BIRTH PLAN FOR ${displayData.babyName}

Parents: ${displayData.parentOneName} & ${displayData.parentTwoName}
Due Date: ${babyPlanningData.dueDate}
Healthcare Provider: ${babyPlanningData.doctorName}
Hospital: ${babyPlanningData.hospitalName}

LABOR PREFERENCES:
- Environment: ${formatPreference(preferences.laborPreferences.environment)}
- Movement: ${preferences.laborPreferences.movement.map(formatPreference).join(', ')}
- Positions: ${preferences.laborPreferences.positions.map(formatPreference).join(', ')}
- Comfort measures: ${preferences.laborPreferences.comfort.map(formatPreference).join(', ')}
- Support team: ${preferences.laborPreferences.support.map(formatPreference).join(', ')}
- Monitoring: ${formatPreference(preferences.laborPreferences.monitoring)}

PAIN MANAGEMENT:
- Approach: ${formatPreference(preferences.painManagement.approach)}
- Methods: ${preferences.painManagement.methods.map(formatPreference).join(', ')}
- Epidural: ${formatPreference(preferences.painManagement.epidural)}
- Alternatives: ${preferences.painManagement.alternatives.map(formatPreference).join(', ')}

DELIVERY:
- Assisted delivery: ${formatPreference(preferences.delivery.assistedDelivery)}
- Episiotomy: ${formatPreference(preferences.delivery.episiotomy)}
- Cord cutting: ${formatPreference(preferences.delivery.cuttingCord)}
- Placenta delivery: ${formatPreference(preferences.delivery.placentaDelivery)}
- Skin-to-skin: ${formatPreference(preferences.delivery.skinToSkin)}

POSTPARTUM:
- Feeding plan: ${formatPreference(preferences.postpartum.feeding)}
- Rooming arrangement: ${formatPreference(preferences.postpartum.rooming)}
- Visitors: ${formatPreference(preferences.postpartum.visitors)}
- Discharge timing: ${formatPreference(preferences.postpartum.discharge)}
- Newborn procedures: ${preferences.postpartum.newbornProcedures.map(formatPreference).join(', ')}

EMERGENCY SITUATIONS:
- C-section: ${formatPreference(preferences.emergency.cesarean)}
- Complications: ${formatPreference(preferences.emergency.complications)}
- Decision making: ${formatPreference(preferences.emergency.decisions)}

PERSONAL PREFERENCES:
- Photography: ${formatPreference(preferences.personalPreferences.photography)}
- Music: ${formatPreference(preferences.personalPreferences.music)}
- Aromatherapy: ${formatPreference(preferences.personalPreferences.aromatherapy)}
- Special requests: ${preferences.personalPreferences.specialRequests || customRequests}

Generated with Templata Baby Planning Template`
  }

  const formatPreference = (value: string) => {
    return value.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
  }

  const getCompletionPercentage = () => {
    let totalPreferences = 0
    let completedPreferences = 0

    Object.values(preferences).forEach(section => {
      Object.entries(section).forEach(([key, value]) => {
        totalPreferences++
        if (Array.isArray(value)) {
          if (value.length > 0) completedPreferences++
        } else if (value && typeof value === 'string' && value.trim()) {
          completedPreferences++
        }
      })
    })

    return Math.round((completedPreferences / totalPreferences) * 100)
  }

  const completionPercentage = getCompletionPercentage()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Birth Plan Template</h2>
          <p className="text-muted-foreground">Create a personalized plan for your labor and delivery</p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="secondary" className="text-lg px-3 py-1">
            {completionPercentage}% Complete
          </Badge>
          <Button onClick={exportBirthPlan} variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <Alert>
        <FileText className="h-4 w-4" />
        <AlertDescription>
          Remember: A birth plan is a guide, not a contract. Stay flexible as circumstances may change during labor. Discuss these preferences with your healthcare provider beforehand.
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle>Birth Plan Overview</CardTitle>
          <CardDescription>
            For {displayData.babyName} • Due {babyPlanningData.dueDate} • {displayData.parentOneName} & {displayData.parentTwoName}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <div className="font-medium">Healthcare Provider</div>
              <div className="text-muted-foreground">{babyPlanningData.doctorName || "Not specified"}</div>
            </div>
            <div>
              <div className="font-medium">Hospital</div>
              <div className="text-muted-foreground">{babyPlanningData.hospitalName || "Not specified"}</div>
            </div>
            <div>
              <div className="font-medium">Birth Plan Type</div>
              <div className="text-muted-foreground">{formatPreference(babyPlanningData.birthPlanType)}</div>
            </div>
            <div>
              <div className="font-medium">Support Team</div>
              <div className="text-muted-foreground">
                {babyPlanningData.doula && babyPlanningData.midwife ? "Doula & Midwife" :
                 babyPlanningData.doula ? "Doula" :
                 babyPlanningData.midwife ? "Midwife" : "Standard care"}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="labor" className="w-full">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="labor">Labor</TabsTrigger>
          <TabsTrigger value="pain">Pain Mgmt</TabsTrigger>
          <TabsTrigger value="delivery">Delivery</TabsTrigger>
          <TabsTrigger value="postpartum">Postpartum</TabsTrigger>
          <TabsTrigger value="emergency">Emergency</TabsTrigger>
          <TabsTrigger value="personal">Personal</TabsTrigger>
        </TabsList>

        <TabsContent value="labor" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5" />
                Labor Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label className="text-base font-semibold">Labor Environment</Label>
                <Select 
                  value={preferences.laborPreferences.environment}
                  onValueChange={(value) => updatePreference('laborPreferences', 'environment', value)}
                >
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select lighting preference" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dim-lighting">Dim, quiet lighting</SelectItem>
                    <SelectItem value="natural-lighting">Natural lighting</SelectItem>
                    <SelectItem value="bright-lighting">Bright lighting</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-base font-semibold">Movement During Labor</Label>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {[
                    { value: "walk-freely", label: "Walk freely" },
                    { value: "change-positions", label: "Change positions often" },
                    { value: "bed-rest", label: "Prefer bed rest" },
                    { value: "birthing-ball", label: "Use birthing ball" }
                  ].map(option => (
                    <div key={option.value} className="flex items-center space-x-2">
                      <Checkbox
                        checked={preferences.laborPreferences.movement.includes(option.value)}
                        onCheckedChange={() => toggleArrayPreference('laborPreferences', 'movement', option.value)}
                      />
                      <Label className="text-sm">{option.label}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Label className="text-base font-semibold">Labor Positions</Label>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {[
                    { value: "upright", label: "Upright positions" },
                    { value: "side-lying", label: "Side-lying" },
                    { value: "hands-knees", label: "Hands and knees" },
                    { value: "squatting", label: "Squatting" }
                  ].map(option => (
                    <div key={option.value} className="flex items-center space-x-2">
                      <Checkbox
                        checked={preferences.laborPreferences.positions.includes(option.value)}
                        onCheckedChange={() => toggleArrayPreference('laborPreferences', 'positions', option.value)}
                      />
                      <Label className="text-sm">{option.label}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Label className="text-base font-semibold">Monitoring Preference</Label>
                <Select 
                  value={preferences.laborPreferences.monitoring}
                  onValueChange={(value) => updatePreference('laborPreferences', 'monitoring', value)}
                >
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select monitoring preference" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="intermittent">Intermittent monitoring</SelectItem>
                    <SelectItem value="continuous">Continuous monitoring</SelectItem>
                    <SelectItem value="wireless">Wireless monitoring</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pain" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Stethoscope className="h-5 w-5" />
                Pain Management
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label className="text-base font-semibold">Overall Approach</Label>
                <RadioGroup 
                  value={preferences.painManagement.approach}
                  onValueChange={(value: string) => updatePreference('painManagement', 'approach', value)}
                  className="mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="natural" id="natural-approach" />
                    <Label htmlFor="natural-approach">Natural, no medication</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="flexible" id="flexible-approach" />
                    <Label htmlFor="flexible-approach">Flexible, open to options</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="medicated" id="medicated-approach" />
                    <Label htmlFor="medicated-approach">Plan to use medication</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label className="text-base font-semibold">Epidural Preference</Label>
                <RadioGroup 
                  value={preferences.painManagement.epidural}
                  onValueChange={(value) => updatePreference('painManagement', 'epidural', value)}
                  className="mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes-early" id="epidural-early" />
                    <Label htmlFor="epidural-early">Yes, as early as possible</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="open" id="epidural-open" />
                    <Label htmlFor="epidural-open">Open to it if needed</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="last-resort" id="epidural-last" />
                    <Label htmlFor="epidural-last">Only as last resort</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="epidural-no" />
                    <Label htmlFor="epidural-no">No epidural</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label className="text-base font-semibold">Natural Pain Relief Methods</Label>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {[
                    { value: "breathing", label: "Breathing techniques" },
                    { value: "massage", label: "Massage" },
                    { value: "warm-shower", label: "Warm shower/bath" },
                    { value: "music", label: "Music therapy" },
                    { value: "aromatherapy", label: "Aromatherapy" },
                    { value: "meditation", label: "Meditation" }
                  ].map(option => (
                    <div key={option.value} className="flex items-center space-x-2">
                      <Checkbox
                        checked={preferences.painManagement.methods.includes(option.value)}
                        onCheckedChange={() => toggleArrayPreference('painManagement', 'methods', option.value)}
                      />
                      <Label className="text-sm">{option.label}</Label>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="delivery" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Baby className="h-5 w-5" />
                Delivery Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label className="text-base font-semibold">Assisted Delivery (Forceps/Vacuum)</Label>
                <RadioGroup 
                  value={preferences.delivery.assistedDelivery}
                  onValueChange={(value) => updatePreference('delivery', 'assistedDelivery', value)}
                  className="mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="avoid-unless-necessary" id="assisted-avoid" />
                    <Label htmlFor="assisted-avoid">Avoid unless medically necessary</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="discuss-first" id="assisted-discuss" />
                    <Label htmlFor="assisted-discuss">Discuss with me first</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="trust-provider" id="assisted-trust" />
                    <Label htmlFor="assisted-trust">Trust provider's judgment</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label className="text-base font-semibold">Cord Cutting</Label>
                <RadioGroup 
                  value={preferences.delivery.cuttingCord}
                  onValueChange={(value) => updatePreference('delivery', 'cuttingCord', value)}
                  className="mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="partner" id="cord-partner" />
                    <Label htmlFor="cord-partner">Partner cuts cord</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="mother" id="cord-mother" />
                    <Label htmlFor="cord-mother">I want to cut cord</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="provider" id="cord-provider" />
                    <Label htmlFor="cord-provider">Provider cuts cord</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="delayed" id="cord-delayed" />
                    <Label htmlFor="cord-delayed">Delayed cord clamping</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label className="text-base font-semibold">Immediate Skin-to-Skin Contact</Label>
                <RadioGroup 
                  value={preferences.delivery.skinToSkin}
                  onValueChange={(value) => updatePreference('delivery', 'skinToSkin', value)}
                  className="mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="immediately" id="skin-immediately" />
                    <Label htmlFor="skin-immediately">Immediately after birth</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="after-procedures" id="skin-after" />
                    <Label htmlFor="skin-after">After initial procedures</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="when-ready" id="skin-ready" />
                    <Label htmlFor="skin-ready">When I feel ready</Label>
                  </div>
                </RadioGroup>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="postpartum" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Postpartum Care
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label className="text-base font-semibold">Feeding Plan</Label>
                <RadioGroup 
                  value={preferences.postpartum.feeding}
                  onValueChange={(value) => updatePreference('postpartum', 'feeding', value)}
                  className="mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="breastfeeding" id="feed-breast" />
                    <Label htmlFor="feed-breast">Breastfeeding only</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="combination" id="feed-combo" />
                    <Label htmlFor="feed-combo">Combination feeding</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="formula" id="feed-formula" />
                    <Label htmlFor="feed-formula">Formula feeding</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="undecided" id="feed-undecided" />
                    <Label htmlFor="feed-undecided">Still deciding</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label className="text-base font-semibold">Newborn Procedures</Label>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {[
                    { value: "vitamin-k", label: "Vitamin K shot" },
                    { value: "eye-ointment", label: "Eye ointment" },
                    { value: "hepatitis-b", label: "Hepatitis B vaccine" },
                    { value: "hearing-test", label: "Hearing test" }
                  ].map(option => (
                    <div key={option.value} className="flex items-center space-x-2">
                      <Checkbox
                        checked={preferences.postpartum.newbornProcedures.includes(option.value)}
                        onCheckedChange={() => toggleArrayPreference('postpartum', 'newbornProcedures', option.value)}
                      />
                      <Label className="text-sm">{option.label}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Label className="text-base font-semibold">Visitor Policy</Label>
                <RadioGroup 
                  value={preferences.postpartum.visitors}
                  onValueChange={(value) => updatePreference('postpartum', 'visitors', value)}
                  className="mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="immediate-family" id="visitors-family" />
                    <Label htmlFor="visitors-family">Immediate family only</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="close-friends" id="visitors-friends" />
                    <Label htmlFor="visitors-friends">Close family and friends</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no-visitors" id="visitors-none" />
                    <Label htmlFor="visitors-none">No visitors initially</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="limited-hours" id="visitors-limited" />
                    <Label htmlFor="visitors-limited">Limited visiting hours</Label>
                  </div>
                </RadioGroup>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="emergency" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Emergency Situations</CardTitle>
              <CardDescription>
                Preferences for unexpected situations (remember: these are guidelines, medical safety comes first)
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label className="text-base font-semibold">If C-Section Becomes Necessary</Label>
                <RadioGroup 
                  value={preferences.emergency.cesarean}
                  onValueChange={(value) => updatePreference('emergency', 'cesarean', value)}
                  className="mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="discuss-first" id="cs-discuss" />
                    <Label htmlFor="cs-discuss">Discuss reasons with me first if possible</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="partner-present" id="cs-partner" />
                    <Label htmlFor="cs-partner">Partner stays with me if possible</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="skin-to-skin" id="cs-skin" />
                    <Label htmlFor="cs-skin">Skin-to-skin contact in OR if safe</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="trust-team" id="cs-trust" />
                    <Label htmlFor="cs-trust">Trust medical team's judgment</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label className="text-base font-semibold">Communication During Complications</Label>
                <RadioGroup 
                  value={preferences.emergency.complications}
                  onValueChange={(value) => updatePreference('emergency', 'complications', value)}
                  className="mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="keep-informed" id="comp-informed" />
                    <Label htmlFor="comp-informed">Keep me informed of all decisions</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="partner-informed" id="comp-partner" />
                    <Label htmlFor="comp-partner">Keep partner informed if I can't be</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="focus-safety" id="comp-safety" />
                    <Label htmlFor="comp-safety">Focus on safety, explain later</Label>
                  </div>
                </RadioGroup>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="personal" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Personal Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="special-requests" className="text-base font-semibold">Special Requests or Additional Notes</Label>
                <Textarea
                  id="special-requests"
                  value={preferences.personalPreferences.specialRequests}
                  onChange={(e) => updatePreference('personalPreferences', 'specialRequests', e.target.value)}
                  placeholder="Any additional preferences, cultural considerations, or special requests..."
                  className="mt-2"
                  rows={4}
                />
              </div>

              <div>
                <Label className="text-base font-semibold">Photography/Video</Label>
                <RadioGroup 
                  value={preferences.personalPreferences.photography}
                  onValueChange={(value) => updatePreference('personalPreferences', 'photography', value)}
                  className="mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="allowed" id="photo-allowed" />
                    <Label htmlFor="photo-allowed">Photography allowed</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no-labor" id="photo-no-labor" />
                    <Label htmlFor="photo-no-labor">No photos during labor</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="after-birth" id="photo-after" />
                    <Label htmlFor="photo-after">Only after birth</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no-photos" id="photo-none" />
                    <Label htmlFor="photo-none">No photos at all</Label>
                  </div>
                </RadioGroup>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex justify-between items-center">
        <div className="text-sm text-muted-foreground">
          Birth plan is {completionPercentage}% complete
        </div>
        <div className="space-x-2">
          <Button variant="outline" onClick={() => window.print()}>
            <Printer className="mr-2 h-4 w-4" />
            Print
          </Button>
          <Button onClick={exportBirthPlan}>
            <Save className="mr-2 h-4 w-4" />
            Save & Export
          </Button>
        </div>
      </div>
    </div>
  )
}