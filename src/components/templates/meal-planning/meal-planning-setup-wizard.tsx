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
import { ChevronLeft, ChevronRight, UtensilsCrossed, CheckCircle } from "lucide-react"

const mealPlanningSetupSchema = z.object({
  // Step 1: Basic Information
  name: z.string().optional(),
  email: z.string().optional(),
  primaryGoal: z.string().optional(),
  timeline: z.string().optional(),
  
  // Step 2: Household Details
  householdSize: z.string().optional(),
  dietaryRestrictions: z.string().optional(),
  budgetRange: z.string().optional(),
  
  // Step 3: Meal Preferences
  mealTypes: z.string().optional(),
  cookingSkillLevel: z.string().optional(),
  prepTimePreference: z.string().optional(),
  
  // Step 4: Planning Goals
  planningFrequency: z.string().optional(),
  shoppingPreference: z.string().optional(),
  notes: z.string().optional(),
})

type MealPlanningSetupData = z.infer<typeof mealPlanningSetupSchema>

interface MealPlanningSetupWizardProps {
  open: boolean
  onComplete: (data: MealPlanningSetupData) => void
}

export function MealPlanningSetupWizard({ open, onComplete }: MealPlanningSetupWizardProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 4

  const form = useForm<MealPlanningSetupData>({
    resolver: zodResolver(mealPlanningSetupSchema),
    defaultValues: {
      name: "",
      email: "",
      primaryGoal: "",
      timeline: "",
      householdSize: "",
      dietaryRestrictions: "",
      budgetRange: "",
      mealTypes: "",
      cookingSkillLevel: "",
      prepTimePreference: "",
      planningFrequency: "",
      shoppingPreference: "",
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

  const onSubmit = (data: MealPlanningSetupData) => {
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
                Let&apos;s start with some basic details about your meal planning journey.
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
                    This helps us personalize your meal planning experience.
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
                        <SelectValue placeholder="What&apos;s your main meal planning objective?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="save-time">Save time on meal prep</SelectItem>
                        <SelectItem value="eat-healthier">Eat healthier</SelectItem>
                        <SelectItem value="save-money">Save money on groceries</SelectItem>
                        <SelectItem value="reduce-waste">Reduce food waste</SelectItem>
                        <SelectItem value="family-meals">Better family meals</SelectItem>
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
                        <SelectValue placeholder="When do you want to establish your meal planning routine?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="immediately">Start immediately</SelectItem>
                        <SelectItem value="1-2weeks">Within 1-2 weeks</SelectItem>
                        <SelectItem value="1month">Within 1 month</SelectItem>
                        <SelectItem value="flexible">Flexible timeline</SelectItem>
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
              <h3 className="text-lg font-semibold">Household Details</h3>
              <p className="text-sm text-muted-foreground">
                Tell us about your household to customize your meal plans.
              </p>
            </div>
            
            <FormField
              control={form.control}
              name="householdSize"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Household Size</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="How many people are you planning meals for?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">Just me (1 person)</SelectItem>
                        <SelectItem value="2">2 people</SelectItem>
                        <SelectItem value="3-4">3-4 people</SelectItem>
                        <SelectItem value="5-6">5-6 people</SelectItem>
                        <SelectItem value="7+">7+ people</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormDescription>
                    This helps us suggest appropriate portion sizes and recipes.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="dietaryRestrictions"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Dietary Preferences & Restrictions</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Any dietary restrictions, allergies, or preferences? (e.g., vegetarian, gluten-free, nut allergies)" 
                      {...field} 
                    />
                  </FormControl>
                  <FormDescription>
                    Help us suggest suitable recipes and ingredients.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="budgetRange"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Weekly Grocery Budget</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="What&apos;s your typical weekly grocery budget?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-50">Under $50</SelectItem>
                        <SelectItem value="50-100">$50 - $100</SelectItem>
                        <SelectItem value="100-150">$100 - $150</SelectItem>
                        <SelectItem value="150-200">$150 - $200</SelectItem>
                        <SelectItem value="over-200">Over $200</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
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
              <h3 className="text-lg font-semibold">Meal Preferences</h3>
              <p className="text-sm text-muted-foreground">
                Help us understand your cooking style and preferences.
              </p>
            </div>
            
            <FormField
              control={form.control}
              name="mealTypes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Which meals do you want to plan?</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select the meals you want to plan" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All meals (breakfast, lunch, dinner)</SelectItem>
                        <SelectItem value="dinner-only">Dinner only</SelectItem>
                        <SelectItem value="lunch-dinner">Lunch and dinner</SelectItem>
                        <SelectItem value="breakfast-dinner">Breakfast and dinner</SelectItem>
                        <SelectItem value="weekdays-only">Weekday meals only</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="cookingSkillLevel"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cooking Skill Level</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="How would you describe your cooking skills?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Beginner - I can make basic meals</SelectItem>
                        <SelectItem value="intermediate">Intermediate - I&apos;m comfortable cooking</SelectItem>
                        <SelectItem value="advanced">Advanced - I love trying complex recipes</SelectItem>
                        <SelectItem value="expert">Expert - I&apos;m a skilled home chef</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="prepTimePreference"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Meal Prep Time Preference</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="How much time do you prefer to spend on meal prep?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="15min">15 minutes or less</SelectItem>
                        <SelectItem value="30min">30 minutes or less</SelectItem>
                        <SelectItem value="1hour">Up to 1 hour</SelectItem>
                        <SelectItem value="2hours">Up to 2 hours</SelectItem>
                        <SelectItem value="flexible">Flexible - depends on the meal</SelectItem>
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
              <h3 className="text-lg font-semibold">Planning Goals</h3>
              <p className="text-sm text-muted-foreground">
                Final details to optimize your meal planning experience.
              </p>
            </div>
            
            <FormField
              control={form.control}
              name="planningFrequency"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>How often do you want to plan meals?</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your preferred planning frequency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="weekly">Weekly planning</SelectItem>
                        <SelectItem value="biweekly">Every 2 weeks</SelectItem>
                        <SelectItem value="monthly">Monthly planning</SelectItem>
                        <SelectItem value="as-needed">As needed/flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="shoppingPreference"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Shopping Preference</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="How do you prefer to shop for groceries?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="in-store">In-store shopping only</SelectItem>
                        <SelectItem value="online-delivery">Online delivery</SelectItem>
                        <SelectItem value="online-pickup">Online ordering with pickup</SelectItem>
                        <SelectItem value="mixed">Mix of in-store and online</SelectItem>
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
                      placeholder="Any specific goals, challenges, or preferences you'd like us to know about your meal planning?" 
                      {...field} 
                    />
                  </FormControl>
                  <FormDescription>
                    This will help us provide more personalized suggestions.
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
          <DialogTitle className="flex items-center">
            <UtensilsCrossed className="mr-2 h-5 w-5" />
            Welcome to Meal Planning
          </DialogTitle>
          <DialogDescription>
            Let&apos;s personalize your meal planning experience with a quick setup.
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
                  <CheckCircle className="h-4 w-4 mr-2" />
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