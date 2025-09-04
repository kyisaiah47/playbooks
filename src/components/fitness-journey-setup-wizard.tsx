"use client"

import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
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
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { FitnessJourneyData } from "@/contexts/fitness-journey-context"
import { Dumbbell, ArrowLeft, ArrowRight, Check, Target, Activity, Heart, User, Utensils, Calendar, TrendingUp } from "lucide-react"

interface FitnessJourneySetupWizardProps {
  isOpen: boolean
  onClose: () => void
  onComplete: (data: FitnessJourneyData) => void
  initialData?: FitnessJourneyData
}

const formSchema = z.object({
  fitnessGoals: z.array(z.string()),
  fitnessLevel: z.enum(["beginner", "intermediate", "advanced", "athlete"]),
  age: z.number().min(13, "Must be at least 13 years old").max(100, "Age must be realistic"),
  height: z.number().min(100, "Height must be realistic").max(250, "Height must be realistic"),
  weight: z.number().min(30, "Weight must be realistic").max(300, "Weight must be realistic"),
  gender: z.enum(["male", "female", "other", "prefer-not-to-say"]),
  primaryGoal: z.enum(["weight-loss", "muscle-gain", "strength", "endurance", "general-health", "athletic-performance"]),
  targetWeight: z.number().optional(),
  activityLevel: z.enum(["sedentary", "lightly-active", "moderately-active", "very-active", "extremely-active"]),
  workoutPreference: z.array(z.string()),
  workoutDaysPerWeek: z.number().min(1, "At least 1 day per week").max(7, "Cannot exceed 7 days per week"),
  preferredWorkoutDuration: z.number().min(15, "Minimum 15 minutes").max(180, "Maximum 3 hours"),
  availableTimeSlots: z.array(z.string()),
  restDays: z.array(z.string()),
  dietaryRestrictions: z.array(z.string()),
  nutritionGoals: z.array(z.string()),
  dailyCalorieTarget: z.number().optional(),
  dailyWaterTarget: z.number().min(500, "Minimum 500ml").max(5000, "Maximum 5L"),
  supplementsUsed: z.array(z.string()),
  medicalConditions: z.array(z.string()),
  injuries: z.array(z.string()),
  allergies: z.array(z.string()),
  medications: z.array(z.string()),
  pregnancyStatus: z.enum(["not-pregnant", "pregnant", "postpartum"]).optional(),
  gymMembership: z.boolean(),
  homeGymEquipment: z.array(z.string()),
  previousExperience: z.array(z.string()),
  currentProgram: z.string().optional(),
  trackingMethods: z.array(z.string()),
  measurementUnits: z.enum(["metric", "imperial"]),
  progressPhotoFrequency: z.enum(["weekly", "bi-weekly", "monthly", "never"]),
  personalTrainer: z.boolean(),
  nutritionist: z.boolean(),
  medicalSupervision: z.boolean(),
  buddySystem: z.boolean(),
  fitnessTimeline: z.enum(["3-months", "6-months", "1-year", "2-years", "ongoing"]),
  motivationFactors: z.array(z.string()),
  rewardSystem: z.array(z.string()),
  fitnessAppConnections: z.array(z.string()),
  socialMediaTracking: z.string().optional(),
  motivationalStatement: z.string().min(10, "Statement should be at least 10 characters"),
})

const workoutPreferences = [
  "Cardio/Running", "Weight Training", "Yoga", "Pilates", "Swimming", "Cycling", 
  "CrossFit", "Martial Arts", "Rock Climbing", "Dance", "Sports", "Hiking"
]

const timeSlots = [
  "Early Morning (5-7 AM)", "Morning (7-9 AM)", "Mid-Morning (9-11 AM)",
  "Lunch Time (11 AM-1 PM)", "Afternoon (1-4 PM)", "Evening (4-7 PM)", "Night (7-10 PM)"
]

const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

const nutritionGoalOptions = [
  "Weight Loss", "Weight Gain", "Muscle Building", "Improved Energy", 
  "Better Digestion", "Reduced Inflammation", "Heart Health", "Blood Sugar Control"
]

const motivationOptions = [
  "Health Improvement", "Weight Management", "Stress Relief", "Increased Energy",
  "Better Sleep", "Confidence Boost", "Athletic Performance", "Social Activity"
]

export function FitnessJourneySetupWizard({ isOpen, onClose, onComplete, initialData }: FitnessJourneySetupWizardProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [fitnessGoals, setFitnessGoals] = useState<string[]>(initialData?.fitnessGoals || [])
  const [workoutPrefs, setWorkoutPrefs] = useState<string[]>(initialData?.workoutPreference || [])
  const [availableSlots, setAvailableSlots] = useState<string[]>(initialData?.availableTimeSlots || [])
  const [restDays, setRestDays] = useState<string[]>(initialData?.restDays || [])
  const [nutritionGoals, setNutritionGoals] = useState<string[]>(initialData?.nutritionGoals || [])
  const [motivations, setMotivations] = useState<string[]>(initialData?.motivationFactors || [])
  const totalSteps = 8

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fitnessGoals: initialData?.fitnessGoals || [],
      fitnessLevel: initialData?.fitnessLevel || "beginner",
      age: initialData?.age || 30,
      height: initialData?.height || 170,
      weight: initialData?.weight || 70,
      gender: initialData?.gender || "prefer-not-to-say",
      primaryGoal: initialData?.primaryGoal || "general-health",
      targetWeight: initialData?.targetWeight,
      activityLevel: initialData?.activityLevel || "moderately-active",
      workoutPreference: initialData?.workoutPreference || [],
      workoutDaysPerWeek: initialData?.workoutDaysPerWeek || 3,
      preferredWorkoutDuration: initialData?.preferredWorkoutDuration || 60,
      availableTimeSlots: initialData?.availableTimeSlots || [],
      restDays: initialData?.restDays || [],
      dietaryRestrictions: initialData?.dietaryRestrictions || [],
      nutritionGoals: initialData?.nutritionGoals || [],
      dailyCalorieTarget: initialData?.dailyCalorieTarget,
      dailyWaterTarget: initialData?.dailyWaterTarget || 2000,
      supplementsUsed: initialData?.supplementsUsed || [],
      medicalConditions: initialData?.medicalConditions || [],
      injuries: initialData?.injuries || [],
      allergies: initialData?.allergies || [],
      medications: initialData?.medications || [],
      pregnancyStatus: initialData?.pregnancyStatus || "not-pregnant",
      gymMembership: initialData?.gymMembership || false,
      homeGymEquipment: initialData?.homeGymEquipment || [],
      previousExperience: initialData?.previousExperience || [],
      currentProgram: initialData?.currentProgram || "",
      trackingMethods: initialData?.trackingMethods || [],
      measurementUnits: initialData?.measurementUnits || "metric",
      progressPhotoFrequency: initialData?.progressPhotoFrequency || "monthly",
      personalTrainer: initialData?.personalTrainer || false,
      nutritionist: initialData?.nutritionist || false,
      medicalSupervision: initialData?.medicalSupervision || false,
      buddySystem: initialData?.buddySystem || false,
      fitnessTimeline: initialData?.fitnessTimeline || "6-months",
      motivationFactors: initialData?.motivationFactors || [],
      rewardSystem: initialData?.rewardSystem || [],
      fitnessAppConnections: initialData?.fitnessAppConnections || [],
      socialMediaTracking: initialData?.socialMediaTracking || "",
      motivationalStatement: initialData?.motivationalStatement || "",
    },
  })

  React.useEffect(() => {
    if (isOpen && initialData) {
      setFitnessGoals(initialData.fitnessGoals || [])
      setWorkoutPrefs(initialData.workoutPreference || [])
      setAvailableSlots(initialData.availableTimeSlots || [])
      setRestDays(initialData.restDays || [])
      setNutritionGoals(initialData.nutritionGoals || [])
      setMotivations(initialData.motivationFactors || [])
      setCurrentStep(1)
      form.reset({
        fitnessGoals: initialData.fitnessGoals || [],
        fitnessLevel: initialData.fitnessLevel || "beginner",
        age: initialData.age || 30,
        height: initialData.height || 170,
        weight: initialData.weight || 70,
        gender: initialData.gender || "prefer-not-to-say",
        primaryGoal: initialData.primaryGoal || "general-health",
        targetWeight: initialData.targetWeight,
        activityLevel: initialData.activityLevel || "moderately-active",
        workoutPreference: initialData.workoutPreference || [],
        workoutDaysPerWeek: initialData.workoutDaysPerWeek || 3,
        preferredWorkoutDuration: initialData.preferredWorkoutDuration || 60,
        availableTimeSlots: initialData.availableTimeSlots || [],
        restDays: initialData.restDays || [],
        dietaryRestrictions: initialData.dietaryRestrictions || [],
        nutritionGoals: initialData.nutritionGoals || [],
        dailyCalorieTarget: initialData.dailyCalorieTarget,
        dailyWaterTarget: initialData.dailyWaterTarget || 2000,
        supplementsUsed: initialData.supplementsUsed || [],
        medicalConditions: initialData.medicalConditions || [],
        injuries: initialData.injuries || [],
        allergies: initialData.allergies || [],
        medications: initialData.medications || [],
        pregnancyStatus: initialData.pregnancyStatus || "not-pregnant",
        gymMembership: initialData.gymMembership || false,
        homeGymEquipment: initialData.homeGymEquipment || [],
        previousExperience: initialData.previousExperience || [],
        currentProgram: initialData.currentProgram || "",
        trackingMethods: initialData.trackingMethods || [],
        measurementUnits: initialData.measurementUnits || "metric",
        progressPhotoFrequency: initialData.progressPhotoFrequency || "monthly",
        personalTrainer: initialData.personalTrainer || false,
        nutritionist: initialData.nutritionist || false,
        medicalSupervision: initialData.medicalSupervision || false,
        buddySystem: initialData.buddySystem || false,
        fitnessTimeline: initialData.fitnessTimeline || "6-months",
        motivationFactors: initialData.motivationFactors || [],
        rewardSystem: initialData.rewardSystem || [],
        fitnessAppConnections: initialData.fitnessAppConnections || [],
        socialMediaTracking: initialData.socialMediaTracking || "",
        motivationalStatement: initialData.motivationalStatement || "",
      })
    }
  }, [isOpen, initialData, form])

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const data: FitnessJourneyData = {
      ...values,
      fitnessGoals,
      workoutPreference: workoutPrefs,
      availableTimeSlots: availableSlots,
      restDays,
      nutritionGoals,
      motivationFactors: motivations,
    }
    onComplete(data)
  }

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

  const addToArray = (arr: string[], setArr: (arr: string[]) => void, item: string) => {
    if (item.trim() && !arr.includes(item.trim())) {
      setArr([...arr, item.trim()])
    }
  }

  const removeFromArray = (arr: string[], setArr: (arr: string[]) => void, item: string) => {
    setArr(arr.filter(i => i !== item))
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Personal Information</h3>
              <p className="text-sm text-muted-foreground">
                Tell us about yourself to create a personalized fitness plan
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="age"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Age</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="30"
                        {...field}
                        onChange={(e) => field.onChange(parseInt(e.target.value))}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Gender</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                        <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="measurementUnits"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Measurement Units</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select units" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="metric">Metric (kg, cm)</SelectItem>
                      <SelectItem value="imperial">Imperial (lbs, ft/in)</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="height"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Height (cm)</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="170"
                        {...field}
                        onChange={(e) => field.onChange(parseInt(e.target.value))}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="weight"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Weight (kg)</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="70"
                        {...field}
                        onChange={(e) => field.onChange(parseInt(e.target.value))}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="fitnessLevel"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Current Fitness Level</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your fitness level" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="beginner">Beginner (Just starting out)</SelectItem>
                      <SelectItem value="intermediate">Intermediate (Some experience)</SelectItem>
                      <SelectItem value="advanced">Advanced (Regular training)</SelectItem>
                      <SelectItem value="athlete">Athlete (Competitive level)</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        )

      case 2:
        return (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Fitness Goals</h3>
              <p className="text-sm text-muted-foreground">
                What do you want to achieve with your fitness journey?
              </p>
            </div>

            <FormField
              control={form.control}
              name="primaryGoal"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Primary Goal</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your primary goal" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="weight-loss">Weight Loss</SelectItem>
                      <SelectItem value="muscle-gain">Muscle Gain</SelectItem>
                      <SelectItem value="strength">Strength Building</SelectItem>
                      <SelectItem value="endurance">Endurance Training</SelectItem>
                      <SelectItem value="general-health">General Health</SelectItem>
                      <SelectItem value="athletic-performance">Athletic Performance</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="targetWeight"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Target Weight (Optional)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="65"
                      value={field.value || ""}
                      onChange={(e) => field.onChange(e.target.value ? parseInt(e.target.value) : undefined)}
                    />
                  </FormControl>
                  <FormDescription>
                    Leave blank if weight loss/gain isn't your primary goal
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="fitnessTimeline"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Fitness Timeline</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="How long is your fitness journey?" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="3-months">3 months (Short-term)</SelectItem>
                      <SelectItem value="6-months">6 months (Medium-term)</SelectItem>
                      <SelectItem value="1-year">1 year (Long-term)</SelectItem>
                      <SelectItem value="2-years">2 years (Transformation)</SelectItem>
                      <SelectItem value="ongoing">Ongoing (Lifestyle)</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div>
              <FormLabel>Motivation Factors (Select all that apply)</FormLabel>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {motivationOptions.map((motivation) => (
                  <div key={motivation} className="flex items-center space-x-2">
                    <Checkbox
                      checked={motivations.includes(motivation)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setMotivations([...motivations, motivation])
                        } else {
                          setMotivations(motivations.filter(m => m !== motivation))
                        }
                      }}
                    />
                    <FormLabel className="text-sm font-normal">
                      {motivation}
                    </FormLabel>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Activity className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Workout Preferences</h3>
              <p className="text-sm text-muted-foreground">
                What types of workouts do you enjoy?
              </p>
            </div>

            <div>
              <FormLabel>Workout Types (Select all that interest you)</FormLabel>
              <div className="grid grid-cols-2 gap-2 mt-2 max-h-48 overflow-y-auto">
                {workoutPreferences.map((workout) => (
                  <div key={workout} className="flex items-center space-x-2">
                    <Checkbox
                      checked={workoutPrefs.includes(workout)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setWorkoutPrefs([...workoutPrefs, workout])
                        } else {
                          setWorkoutPrefs(workoutPrefs.filter(w => w !== workout))
                        }
                      }}
                    />
                    <FormLabel className="text-sm font-normal">
                      {workout}
                    </FormLabel>
                  </div>
                ))}
              </div>
            </div>

            <FormField
              control={form.control}
              name="activityLevel"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Current Activity Level</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your activity level" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="sedentary">Sedentary (Little/no exercise)</SelectItem>
                      <SelectItem value="lightly-active">Lightly Active (Light exercise 1-3 days/week)</SelectItem>
                      <SelectItem value="moderately-active">Moderately Active (Moderate exercise 3-5 days/week)</SelectItem>
                      <SelectItem value="very-active">Very Active (Hard exercise 6-7 days/week)</SelectItem>
                      <SelectItem value="extremely-active">Extremely Active (Very hard exercise, physical job)</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="gymMembership"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        Gym Membership
                      </FormLabel>
                      <FormDescription>
                        I have access to a gym
                      </FormDescription>
                    </div>
                  </FormItem>
                )}
              />
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Workout Schedule</h3>
              <p className="text-sm text-muted-foreground">
                When can you work out?
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="workoutDaysPerWeek"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Workouts Per Week</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        min="1"
                        max="7"
                        placeholder="3"
                        {...field}
                        onChange={(e) => field.onChange(parseInt(e.target.value))}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="preferredWorkoutDuration"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Workout Duration (minutes)</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        min="15"
                        max="180"
                        placeholder="60"
                        {...field}
                        onChange={(e) => field.onChange(parseInt(e.target.value))}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div>
              <FormLabel>Preferred Time Slots</FormLabel>
              <div className="grid grid-cols-1 gap-2 mt-2">
                {timeSlots.map((slot) => (
                  <div key={slot} className="flex items-center space-x-2">
                    <Checkbox
                      checked={availableSlots.includes(slot)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setAvailableSlots([...availableSlots, slot])
                        } else {
                          setAvailableSlots(availableSlots.filter(s => s !== slot))
                        }
                      }}
                    />
                    <FormLabel className="text-sm font-normal">
                      {slot}
                    </FormLabel>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <FormLabel>Preferred Rest Days</FormLabel>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {weekDays.map((day) => (
                  <div key={day} className="flex items-center space-x-2">
                    <Checkbox
                      checked={restDays.includes(day)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setRestDays([...restDays, day])
                        } else {
                          setRestDays(restDays.filter(d => d !== day))
                        }
                      }}
                    />
                    <FormLabel className="text-sm font-normal">
                      {day}
                    </FormLabel>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      case 5:
        return (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Utensils className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Nutrition Preferences</h3>
              <p className="text-sm text-muted-foreground">
                Tell us about your dietary needs and goals
              </p>
            </div>

            <div>
              <FormLabel>Nutrition Goals</FormLabel>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {nutritionGoalOptions.map((goal) => (
                  <div key={goal} className="flex items-center space-x-2">
                    <Checkbox
                      checked={nutritionGoals.includes(goal)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setNutritionGoals([...nutritionGoals, goal])
                        } else {
                          setNutritionGoals(nutritionGoals.filter(g => g !== goal))
                        }
                      }}
                    />
                    <FormLabel className="text-sm font-normal">
                      {goal}
                    </FormLabel>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="dailyCalorieTarget"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Daily Calorie Target (Optional)</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="2000"
                        value={field.value || ""}
                        onChange={(e) => field.onChange(e.target.value ? parseInt(e.target.value) : undefined)}
                      />
                    </FormControl>
                    <FormDescription>
                      Leave blank if unsure
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="dailyWaterTarget"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Daily Water Target (ml)</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="2000"
                        {...field}
                        onChange={(e) => field.onChange(parseInt(e.target.value))}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        )

      case 6:
        return (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Health & Medical</h3>
              <p className="text-sm text-muted-foreground">
                Help us understand any health considerations (Optional)
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="personalTrainer"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        Personal Trainer
                      </FormLabel>
                      <FormDescription>
                        I work with a trainer
                      </FormDescription>
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="nutritionist"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        Nutritionist
                      </FormLabel>
                      <FormDescription>
                        I work with a nutritionist
                      </FormDescription>
                    </div>
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="medicalSupervision"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        Medical Supervision
                      </FormLabel>
                      <FormDescription>
                        Doctor recommended fitness plan
                      </FormDescription>
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="buddySystem"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        Workout Buddy
                      </FormLabel>
                      <FormDescription>
                        I work out with a partner
                      </FormDescription>
                    </div>
                  </FormItem>
                )}
              />
            </div>

            {form.watch('gender') === 'female' && (
              <FormField
                control={form.control}
                name="pregnancyStatus"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pregnancy Status</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="not-pregnant">Not Pregnant</SelectItem>
                        <SelectItem value="pregnant">Pregnant</SelectItem>
                        <SelectItem value="postpartum">Postpartum</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
          </div>
        )

      case 7:
        return (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Progress Tracking</h3>
              <p className="text-sm text-muted-foreground">
                How do you want to track your progress?
              </p>
            </div>

            <FormField
              control={form.control}
              name="progressPhotoFrequency"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Progress Photo Frequency</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="How often will you take progress photos?" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="weekly">Weekly</SelectItem>
                      <SelectItem value="bi-weekly">Bi-weekly</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                      <SelectItem value="never">Never</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        )

      case 8:
        return (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold">Motivational Statement</h3>
              <p className="text-sm text-muted-foreground">
                Write a personal statement about your fitness goals and motivation
              </p>
            </div>

            <FormField
              control={form.control}
              name="motivationalStatement"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Fitness Journey Statement</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="I am committed to improving my health and fitness because..."
                      className="min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    This will help keep you motivated and focused on your goals
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
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[525px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Fitness Journey Setup</DialogTitle>
          <DialogDescription>
            Let's create your personalized fitness journey workspace
          </DialogDescription>
        </DialogHeader>

        <div className="mb-4">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>Step {currentStep} of {totalSteps}</span>
            <span>{Math.round((currentStep / totalSteps) * 100)}% complete</span>
          </div>
          <Progress value={(currentStep / totalSteps) * 100} className="h-2" />
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {renderStep()}

            <div className="flex justify-between pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>

              {currentStep === totalSteps ? (
                <Button type="submit" className="ml-auto">
                  <Check className="mr-2 h-4 w-4" />
                  Complete Setup
                </Button>
              ) : (
                <Button
                  type="button"
                  onClick={nextStep}
                  className="ml-auto"
                >
                  Next
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              )}
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}