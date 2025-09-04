"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Heart, ArrowLeft, ArrowRight, Check, MapPin, Users, DollarSign } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

interface WeddingData {
  // Basic Info
  partner1FirstName: string
  partner1LastName: string
  partner2FirstName: string
  partner2LastName: string
  weddingDate: Date | undefined
  weddingTime: string
  weddingStyle: string
  guestCount: number
  totalBudget: number
  
  // Venues
  ceremonyVenue: string
  ceremonyAddress: string
  receptionVenue: string
  receptionAddress: string
  
  // Additional Details
  themeColors: string[]
  specialRequirements: string
  culturalTraditions: string
}

const initialData: WeddingData = {
  partner1FirstName: "",
  partner1LastName: "",
  partner2FirstName: "",
  partner2LastName: "",
  weddingDate: undefined,
  weddingTime: "",
  weddingStyle: "",
  guestCount: 0,
  totalBudget: 0,
  ceremonyVenue: "",
  ceremonyAddress: "",
  receptionVenue: "",
  receptionAddress: "",
  themeColors: [],
  specialRequirements: "",
  culturalTraditions: ""
}

const weddingStyles = [
  "Traditional",
  "Modern", 
  "Rustic",
  "Elegant",
  "Casual",
  "Destination",
  "Elopement",
  "Garden",
  "Beach",
  "Vintage"
]

const steps = [
  {
    id: 1,
    title: "Basic Information",
    description: "Tell us about yourselves and your wedding",
    icon: Heart
  },
  {
    id: 2, 
    title: "Venue Details",
    description: "Where will your celebration take place?",
    icon: MapPin
  },
  {
    id: 3,
    title: "Guest & Budget",
    description: "Guest count and budget planning", 
    icon: Users
  },
  {
    id: 4,
    title: "Final Details",
    description: "Colors, traditions, and special requirements",
    icon: Check
  }
]

interface WeddingSetupWizardProps {
  isOpen: boolean
  onClose: () => void
  onComplete: (data: WeddingData) => void
}

export function WeddingSetupWizard({ isOpen, onClose, onComplete }: WeddingSetupWizardProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<WeddingData>(initialData)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const updateFormData = (field: keyof WeddingData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }))
    }
  }

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {}
    
    switch (step) {
      case 1:
        if (!formData.partner1FirstName) newErrors.partner1FirstName = "Required"
        if (!formData.partner1LastName) newErrors.partner1LastName = "Required"
        if (!formData.partner2FirstName) newErrors.partner2FirstName = "Required"
        if (!formData.partner2LastName) newErrors.partner2LastName = "Required"
        if (!formData.weddingDate) newErrors.weddingDate = "Required"
        if (!formData.weddingTime) newErrors.weddingTime = "Required"
        if (!formData.weddingStyle) newErrors.weddingStyle = "Required"
        break
      case 2:
        if (!formData.ceremonyVenue) newErrors.ceremonyVenue = "Required"
        if (!formData.ceremonyAddress) newErrors.ceremonyAddress = "Required"
        if (!formData.receptionVenue) newErrors.receptionVenue = "Required"
        if (!formData.receptionAddress) newErrors.receptionAddress = "Required"
        break
      case 3:
        if (!formData.guestCount || formData.guestCount < 1) newErrors.guestCount = "Must be at least 1"
        if (!formData.totalBudget || formData.totalBudget < 1) newErrors.totalBudget = "Must be at least $1"
        break
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep < steps.length) {
        setCurrentStep(currentStep + 1)
      } else {
        onComplete(formData)
      }
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid w-full items-center gap-3">
                <Label htmlFor="partner1-first">First Partner - First Name</Label>
                <Input
                  id="partner1-first"
                  value={formData.partner1FirstName}
                  onChange={(e) => updateFormData("partner1FirstName", e.target.value)}
                  className={errors.partner1FirstName ? "border-destructive" : ""}
                />
                {errors.partner1FirstName && (
                  <p className="text-sm text-destructive">{errors.partner1FirstName}</p>
                )}
              </div>
              <div className="grid w-full items-center gap-3">
                <Label htmlFor="partner1-last">First Partner - Last Name</Label>
                <Input
                  id="partner1-last"
                  value={formData.partner1LastName}
                  onChange={(e) => updateFormData("partner1LastName", e.target.value)}
                  className={errors.partner1LastName ? "border-destructive" : ""}
                />
                {errors.partner1LastName && (
                  <p className="text-sm text-destructive">{errors.partner1LastName}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="grid w-full items-center gap-3">
                <Label htmlFor="partner2-first">Second Partner - First Name</Label>
                <Input
                  id="partner2-first"
                  value={formData.partner2FirstName}
                  onChange={(e) => updateFormData("partner2FirstName", e.target.value)}
                  className={errors.partner2FirstName ? "border-destructive" : ""}
                />
                {errors.partner2FirstName && (
                  <p className="text-sm text-destructive">{errors.partner2FirstName}</p>
                )}
              </div>
              <div className="grid w-full items-center gap-3">
                <Label htmlFor="partner2-last">Second Partner - Last Name</Label>
                <Input
                  id="partner2-last"
                  value={formData.partner2LastName}
                  onChange={(e) => updateFormData("partner2LastName", e.target.value)}
                  className={errors.partner2LastName ? "border-destructive" : ""}
                />
                {errors.partner2LastName && (
                  <p className="text-sm text-destructive">{errors.partner2LastName}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="grid w-full items-center gap-3">
                <Label>Wedding Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "justify-start text-left font-normal",
                        !formData.weddingDate && "text-muted-foreground",
                        errors.weddingDate && "border-destructive"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {formData.weddingDate ? format(formData.weddingDate, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={formData.weddingDate}
                      onSelect={(date) => updateFormData("weddingDate", date)}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                {errors.weddingDate && (
                  <p className="text-sm text-destructive">{errors.weddingDate}</p>
                )}
              </div>
              <div className="grid w-full items-center gap-3">
                <Label htmlFor="wedding-time">Wedding Time</Label>
                <Input
                  id="wedding-time"
                  type="time"
                  value={formData.weddingTime}
                  onChange={(e) => updateFormData("weddingTime", e.target.value)}
                  className={errors.weddingTime ? "border-destructive" : ""}
                />
                {errors.weddingTime && (
                  <p className="text-sm text-destructive">{errors.weddingTime}</p>
                )}
              </div>
            </div>

            <div className="grid w-full items-center gap-3">
              <Label>Wedding Style</Label>
              <Select value={formData.weddingStyle} onValueChange={(value) => updateFormData("weddingStyle", value)}>
                <SelectTrigger className={errors.weddingStyle ? "border-destructive" : ""}>
                  <SelectValue placeholder="Select your wedding style" />
                </SelectTrigger>
                <SelectContent>
                  {weddingStyles.map((style) => (
                    <SelectItem key={style} value={style.toLowerCase()}>
                      {style}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.weddingStyle && (
                <p className="text-sm text-destructive">{errors.weddingStyle}</p>
              )}
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Ceremony Venue</CardTitle>
                <CardDescription>Where will your ceremony take place?</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid w-full items-center gap-3">
                  <Label htmlFor="ceremony-venue">Venue Name</Label>
                  <Input
                    id="ceremony-venue"
                    value={formData.ceremonyVenue}
                    onChange={(e) => updateFormData("ceremonyVenue", e.target.value)}
                    placeholder="e.g., St. Mary's Cathedral"
                    className={errors.ceremonyVenue ? "border-destructive" : ""}
                  />
                  {errors.ceremonyVenue && (
                    <p className="text-sm text-destructive">{errors.ceremonyVenue}</p>
                  )}
                </div>
                <div className="grid w-full items-center gap-3">
                  <Label htmlFor="ceremony-address">Address</Label>
                  <Textarea
                    id="ceremony-address"
                    value={formData.ceremonyAddress}
                    onChange={(e) => updateFormData("ceremonyAddress", e.target.value)}
                    placeholder="Full address including city, state, zip"
                    className={errors.ceremonyAddress ? "border-destructive" : ""}
                    rows={3}
                  />
                  {errors.ceremonyAddress && (
                    <p className="text-sm text-destructive">{errors.ceremonyAddress}</p>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Reception Venue</CardTitle>
                <CardDescription>Where will your reception be held?</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid w-full items-center gap-3">
                  <Label htmlFor="reception-venue">Venue Name</Label>
                  <Input
                    id="reception-venue"
                    value={formData.receptionVenue}
                    onChange={(e) => updateFormData("receptionVenue", e.target.value)}
                    placeholder="e.g., Grand Ballroom Hotel"
                    className={errors.receptionVenue ? "border-destructive" : ""}
                  />
                  {errors.receptionVenue && (
                    <p className="text-sm text-destructive">{errors.receptionVenue}</p>
                  )}
                </div>
                <div className="grid w-full items-center gap-3">
                  <Label htmlFor="reception-address">Address</Label>
                  <Textarea
                    id="reception-address"
                    value={formData.receptionAddress}
                    onChange={(e) => updateFormData("receptionAddress", e.target.value)}
                    placeholder="Full address including city, state, zip"
                    className={errors.receptionAddress ? "border-destructive" : ""}
                    rows={3}
                  />
                  {errors.receptionAddress && (
                    <p className="text-sm text-destructive">{errors.receptionAddress}</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Users className="mr-2 h-5 w-5" />
                    Guest Count
                  </CardTitle>
                  <CardDescription>How many guests are you expecting?</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid w-full items-center gap-3">
                    <Label htmlFor="guest-count">Number of Guests</Label>
                    <Input
                      id="guest-count"
                      type="number"
                      value={formData.guestCount || ""}
                      onChange={(e) => updateFormData("guestCount", parseInt(e.target.value) || 0)}
                      placeholder="e.g., 150"
                      className={errors.guestCount ? "border-destructive" : ""}
                      min="1"
                    />
                    {errors.guestCount && (
                      <p className="text-sm text-destructive">{errors.guestCount}</p>
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <DollarSign className="mr-2 h-5 w-5" />
                    Total Budget
                  </CardTitle>
                  <CardDescription>What's your overall wedding budget?</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid w-full items-center gap-3">
                    <Label htmlFor="total-budget">Budget Amount ($)</Label>
                    <Input
                      id="total-budget"
                      type="number"
                      value={formData.totalBudget || ""}
                      onChange={(e) => updateFormData("totalBudget", parseInt(e.target.value) || 0)}
                      placeholder="e.g., 25000"
                      className={errors.totalBudget ? "border-destructive" : ""}
                      min="1"
                    />
                    {errors.totalBudget && (
                      <p className="text-sm text-destructive">{errors.totalBudget}</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-muted/30">
              <CardContent className="pt-6">
                <div className="text-center space-y-2">
                  <p className="text-sm text-muted-foreground">Estimated cost per guest:</p>
                  <p className="text-2xl font-bold text-primary">
                    ${formData.guestCount > 0 ? Math.round(formData.totalBudget / formData.guestCount) : 0}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <div className="grid w-full items-center gap-3">
              <Label htmlFor="cultural-traditions">Cultural Traditions</Label>
              <Textarea
                id="cultural-traditions"
                value={formData.culturalTraditions}
                onChange={(e) => updateFormData("culturalTraditions", e.target.value)}
                placeholder="Any specific cultural or religious traditions to include?"
                rows={3}
              />
            </div>

            <div className="grid w-full items-center gap-3">
              <Label htmlFor="special-requirements">Special Requirements</Label>
              <Textarea
                id="special-requirements"
                value={formData.specialRequirements}
                onChange={(e) => updateFormData("specialRequirements", e.target.value)}
                placeholder="Accessibility needs, dietary restrictions, or other special considerations..."
                rows={4}
              />
            </div>

            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Check className="mr-2 h-5 w-5 text-primary" />
                  Ready to Begin!
                </CardTitle>
                <CardDescription>
                  You're all set to start planning your perfect wedding day.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        )

      default:
        return null
    }
  }

  const progress = (currentStep / steps.length) * 100

  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center text-2xl">
            <Heart className="mr-2 h-6 w-6 text-rose-500" />
            Wedding Setup Wizard
          </DialogTitle>
          <DialogDescription>
            Let's gather some basic information to personalize your wedding planning experience
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>Step {currentStep} of {steps.length}</span>
              <span>{Math.round(progress)}% complete</span>
            </div>
            <Progress value={progress} />
          </div>

          <div className="grid grid-cols-4 gap-2">
            {steps.map((step) => {
              const Icon = step.icon
              const isActive = currentStep === step.id
              const isCompleted = currentStep > step.id
              
              return (
                <div
                  key={step.id}
                  className={cn(
                    "p-3 rounded-lg border text-center transition-colors",
                    isActive && "border-primary bg-primary/5",
                    isCompleted && "border-primary bg-primary/10",
                    !isActive && !isCompleted && "border-border bg-muted/30"
                  )}
                >
                  <Icon className={cn(
                    "h-5 w-5 mx-auto mb-2",
                    isActive && "text-primary",
                    isCompleted && "text-primary",
                    !isActive && !isCompleted && "text-muted-foreground"
                  )} />
                  <p className="text-xs font-medium">{step.title}</p>
                </div>
              )
            })}
          </div>

          <Separator />

          <div className="min-h-96">
            <div className="mb-4">
              <h3 className="text-xl font-semibold">{steps[currentStep - 1]?.title}</h3>
              <p className="text-muted-foreground">{steps[currentStep - 1]?.description}</p>
            </div>
            {renderStep()}
          </div>
        </div>

        <DialogFooter className="flex justify-between">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 1}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Previous
          </Button>
          <Button onClick={handleNext}>
            {currentStep === steps.length ? (
              <>
                <Check className="mr-2 h-4 w-4" />
                Complete Setup
              </>
            ) : (
              <>
                Next
                <ArrowRight className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}