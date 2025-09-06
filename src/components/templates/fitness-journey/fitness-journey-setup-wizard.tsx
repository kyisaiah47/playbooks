"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { useFitnessJourney } from "@/contexts/fitness-journey-context"

const fitnessJourneySetupSchema = z.object({
  // Step 1: Basic Information
  name: z.string().optional(),
  email: z.string().optional(),
  primaryGoal: z.string().optional(),
  timeline: z.string().optional(),
  
  // Step 2: Health Status  
  currentFitnessLevel: z.string().optional(),
  healthConditions: z.string().optional(),
  previousInjuries: z.string().optional(),
  targetDate: z.date().optional(),
  
  // Step 3: Preferences
  preferredWorkoutTypes: z.string().optional(),
  scheduleAvailability: z.string().optional(),
  equipmentAccess: z.string().optional(),
  
  // Step 4: Support System
  trainerInterest: z.string().optional(),
  accountabilityNeeds: z.string().optional(),
  trackingPreferences: z.string().optional(),
  notes: z.string().optional(),
})

type FitnessJourneySetupData = z.infer<typeof fitnessJourneySetupSchema>

interface FitnessJourneySetupWizardProps {
  open: boolean
  onComplete: (data: FitnessJourneySetupData) => void
}

export function FitnessJourneySetupWizard({ open, onComplete }: FitnessJourneySetupWizardProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 4

  const form = useForm<FitnessJourneySetupData>({
    resolver: zodResolver(fitnessJourneySetupSchema),
    defaultValues: {
      name: "",
      email: "",
      primaryGoal: "",
      timeline: "",
      currentFitnessLevel: "",
      healthConditions: "",
      previousInjuries: "",
      targetDate: undefined,
      preferredWorkoutTypes: "",
      scheduleAvailability: "",
      equipmentAccess: "",
      trainerInterest: "",
      accountabilityNeeds: "",
      trackingPreferences: "",
      notes: "",
    },
  })

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const onSubmit = (data: FitnessJourneySetupData) => {
    onComplete(data)
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="text-center">
              <h3 className="text-lg font-semibold">Basic Information</h3>
              <p className="text-sm text-muted-foreground">
                Let's start with some basic details about your fitness journey.
              </p>
            </div>
            
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your name" {...field} />
                  </FormControl>
                  <FormDescription>
                    This helps us personalize your experience.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="primaryGoal"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Primary Goal</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="What's your main fitness objective?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="weight-loss">Weight Loss</SelectItem>
                        <SelectItem value="muscle-gain">Muscle Gain</SelectItem>
                        <SelectItem value="endurance">Build Endurance</SelectItem>
                        <SelectItem value="strength">Increase Strength</SelectItem>
                        <SelectItem value="general-health">General Health & Wellness</SelectItem>
                        <SelectItem value="athletic-performance">Athletic Performance</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="timeline"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Timeline</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="When do you want to achieve your goal?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-3months">1-3 months</SelectItem>
                        <SelectItem value="3-6months">3-6 months</SelectItem>
                        <SelectItem value="6-12months">6-12 months</SelectItem>
                        <SelectItem value="12months+">12+ months</SelectItem>
                        <SelectItem value="ongoing">Ongoing lifestyle change</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        )

      case 2:
        return (
          <div className="space-y-4">
            <div className="text-center">
              <h3 className="text-lg font-semibold">Health Status</h3>
              <p className="text-sm text-muted-foreground">
                Help us understand your current health and fitness level.
              </p>
            </div>
            
            <FormField
              control={form.control}
              name="currentFitnessLevel"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Current Fitness Level</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="How would you describe your fitness level?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Beginner (Little to no exercise)</SelectItem>
                        <SelectItem value="intermediate">Intermediate (Some regular exercise)</SelectItem>
                        <SelectItem value="advanced">Advanced (Regular intense exercise)</SelectItem>
                        <SelectItem value="athlete">Athlete/Competitive level</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormDescription>
                    This helps us recommend appropriate workout intensity.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="healthConditions"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Health Conditions</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Any health conditions, medications, or physical limitations we should know about?" 
                      {...field} 
                    />
                  </FormControl>
                  <FormDescription>
                    This information helps us provide safe recommendations.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="previousInjuries"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Previous Injuries</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Any past injuries that might affect your workout routine?" 
                      {...field} 
                    />
                  </FormControl>
                  <FormDescription>
                    We'll help you work around any limitations.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="targetDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Target Achievement Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormDescription>
                    When do you want to reach your primary goal?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        )

      case 3:
        return (
          <div className="space-y-4">
            <div className="text-center">
              <h3 className="text-lg font-semibold">Workout Preferences</h3>
              <p className="text-sm text-muted-foreground">
                Tell us about your workout preferences and availability.
              </p>
            </div>
            
            <FormField
              control={form.control}
              name="preferredWorkoutTypes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preferred Workout Types</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="What type of workouts do you enjoy?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cardio">Cardio (Running, cycling, swimming)</SelectItem>
                        <SelectItem value="strength">Strength Training</SelectItem>
                        <SelectItem value="hiit">HIIT (High Intensity Interval Training)</SelectItem>
                        <SelectItem value="yoga">Yoga/Pilates</SelectItem>
                        <SelectItem value="sports">Sports Activities</SelectItem>
                        <SelectItem value="mixed">Mix of everything</SelectItem>
                        <SelectItem value="unsure">Not sure yet</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="scheduleAvailability"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Schedule Availability</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="How often can you work out?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-2days">1-2 days per week</SelectItem>
                        <SelectItem value="3-4days">3-4 days per week</SelectItem>
                        <SelectItem value="5-6days">5-6 days per week</SelectItem>
                        <SelectItem value="daily">Daily</SelectItem>
                        <SelectItem value="flexible">Flexible schedule</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="equipmentAccess"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Equipment Access</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="What equipment do you have access to?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="home-basic">Home (basic equipment)</SelectItem>
                        <SelectItem value="home-full">Home gym (full setup)</SelectItem>
                        <SelectItem value="commercial-gym">Commercial gym membership</SelectItem>
                        <SelectItem value="outdoor">Outdoor/bodyweight only</SelectItem>
                        <SelectItem value="mixed">Mix of options</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        )

      case 4:
        return (
          <div className="space-y-4">
            <div className="text-center">
              <h3 className="text-lg font-semibold">Support & Tracking</h3>
              <p className="text-sm text-muted-foreground">
                How can we best support you on your fitness journey?
              </p>
            </div>
            
            <FormField
              control={form.control}
              name="trainerInterest"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Personal Trainer Interest</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="Are you interested in working with a trainer?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="very-interested">Very interested</SelectItem>
                        <SelectItem value="maybe">Maybe in the future</SelectItem>
                        <SelectItem value="prefer-solo">Prefer to work out alone</SelectItem>
                        <SelectItem value="have-trainer">Already have a trainer</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="accountabilityNeeds"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Accountability Preferences</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="How do you stay motivated?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="workout-buddy">Workout buddy/partner</SelectItem>
                        <SelectItem value="group-classes">Group classes/community</SelectItem>
                        <SelectItem value="app-reminders">App notifications/reminders</SelectItem>
                        <SelectItem value="progress-tracking">Progress tracking & charts</SelectItem>
                        <SelectItem value="self-motivated">Self-motivated</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="trackingPreferences"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Progress Tracking</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="How do you prefer to track progress?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="photos">Progress photos</SelectItem>
                        <SelectItem value="measurements">Body measurements</SelectItem>
                        <SelectItem value="weight-scale">Weight scale</SelectItem>
                        <SelectItem value="performance">Performance metrics</SelectItem>
                        <SelectItem value="how-feel">How I feel/energy levels</SelectItem>
                        <SelectItem value="combination">Combination of methods</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Additional Notes</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Any specific goals, concerns, or context you'd like to share about your fitness journey?" 
                      {...field} 
                    />
                  </FormControl>
                  <FormDescription>
                    This will help us provide more relevant guidance.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        )

      default:
        return null
    }
  }

  return (
    <Dialog open={open}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Welcome to Your Fitness Journey</DialogTitle>
          <DialogDescription>
            Let's personalize your experience with a quick setup.
          </DialogDescription>
        </DialogHeader>

        <div className="mb-4">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>Step {currentStep} of {totalSteps}</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {renderStep()}

            <div className="flex justify-between pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
              >
                <ChevronLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>

              {currentStep === totalSteps ? (
                <Button type="submit">
                  Complete Setup
                </Button>
              ) : (
                <Button type="button" onClick={nextStep}>
                  Next
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              )}
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}