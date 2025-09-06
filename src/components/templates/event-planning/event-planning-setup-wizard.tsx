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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { format } from "date-fns"
import { CalendarIcon, ChevronLeft, ChevronRight, PartyPopper, MapPin, Users, Check } from "lucide-react"
import { cn } from "@/lib/utils"

// Define form schema with ALL fields optional
const eventPlanningSetupSchema = z.object({
  // Step 1: Basic Information
  eventName: z.string().optional(),
  organizerName: z.string().optional(),
  eventType: z.string().optional(),
  eventDate: z.date().optional(),
  
  // Step 2: Venue & Location
  eventVenue: z.string().optional(),
  eventAddress: z.string().optional(),
  venueType: z.string().optional(),
  capacity: z.number().optional(),
  
  // Step 3: Attendees & Budget
  attendeeCount: z.number().optional(),
  totalBudget: z.number().optional(),
  budgetPriority: z.string().optional(),
  
  // Step 4: Event Details
  eventStyle: z.string().optional(),
  cateringNeeds: z.string().optional(),
  specialRequirements: z.string().optional(),
  notes: z.string().optional(),
})

type EventPlanningSetupData = z.infer<typeof eventPlanningSetupSchema>

const eventTypes = [
  "Wedding",
  "Corporate Event", 
  "Birthday Party",
  "Anniversary",
  "Conference",
  "Workshop",
  "Networking Event",
  "Holiday Party",
  "Fundraiser",
  "Product Launch",
  "Other"
]

const venueTypes = [
  "Hotel/Resort",
  "Banquet Hall",
  "Restaurant",
  "Outdoor Venue",
  "Conference Center",
  "Community Center",
  "Private Home",
  "Church/Religious Venue",
  "Museum/Gallery",
  "Other"
]

const eventStyles = [
  "Formal",
  "Semi-Formal",
  "Casual",
  "Business Professional",
  "Creative/Themed",
  "Traditional",
  "Modern",
  "Elegant",
  "Fun & Festive",
  "Intimate"
]

const budgetPriorities = [
  "Venue",
  "Catering & Food",
  "Entertainment",
  "Decorations",
  "Photography/Video",
  "Equal Distribution"
]

const steps = [
  {
    id: 1,
    title: "Event Basics",
    description: "Tell us about your event",
    icon: PartyPopper,
  },
  {
    id: 2,
    title: "Venue & Location",
    description: "Where will your event take place?",
    icon: MapPin,
  },
  {
    id: 3,
    title: "Attendees & Budget",
    description: "Guest count and budget planning",
    icon: Users,
  },
  {
    id: 4,
    title: "Event Details",
    description: "Style, catering, and special requirements",
    icon: Check,
  },
]

interface EventPlanningSetupWizardProps {
  open: boolean
  onComplete: (data: EventPlanningSetupData) => void
}

export function EventPlanningSetupWizard({ open, onComplete }: EventPlanningSetupWizardProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 4

  const form = useForm<EventPlanningSetupData>({
    resolver: zodResolver(eventPlanningSetupSchema),
    defaultValues: {
      eventName: "",
      organizerName: "",
      eventType: "",
      eventDate: undefined,
      eventVenue: "",
      eventAddress: "",
      venueType: "",
      capacity: undefined,
      attendeeCount: undefined,
      totalBudget: undefined,
      budgetPriority: "",
      eventStyle: "",
      cateringNeeds: "",
      specialRequirements: "",
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

  const onSubmit = (data: EventPlanningSetupData) => {
    onComplete(data)
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="text-center">
              <h3 className="text-lg font-semibold">Event Basics</h3>
              <p className="text-sm text-muted-foreground">
                Let's start with some basic details about your event.
              </p>
            </div>
            
            <FormField
              control={form.control}
              name="eventName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Event Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Annual Company Gala" {...field} />
                  </FormControl>
                  <FormDescription>
                    What would you like to call your event?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="organizerName"
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
              name="eventType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Event Type</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="What type of event are you planning?" />
                      </SelectTrigger>
                      <SelectContent>
                        {eventTypes.map((type) => (
                          <SelectItem key={type} value={type.toLowerCase().replace(' ', '-')}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="eventDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Event Date</FormLabel>
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
                    When are you planning to hold your event?
                  </FormDescription>
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
              <h3 className="text-lg font-semibold">Venue & Location</h3>
              <p className="text-sm text-muted-foreground">
                Tell us about where your event will take place.
              </p>
            </div>
            
            <FormField
              control={form.control}
              name="eventVenue"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Venue Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Grand Conference Center" {...field} />
                  </FormControl>
                  <FormDescription>
                    What's the name of your venue?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="eventAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Venue Address</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Full address including city, state, zip" 
                      rows={3}
                      {...field} 
                    />
                  </FormControl>
                  <FormDescription>
                    This helps with logistics and guest directions.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="venueType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Venue Type</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="What type of venue is this?" />
                      </SelectTrigger>
                      <SelectContent>
                        {venueTypes.map((type) => (
                          <SelectItem key={type} value={type.toLowerCase().replace(/[^a-z0-9]/g, '-')}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="capacity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Venue Capacity</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="e.g., 300"
                      {...field}
                      onChange={(e) => field.onChange(parseInt(e.target.value) || undefined)}
                    />
                  </FormControl>
                  <FormDescription>
                    What's the maximum capacity of your venue?
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
              <h3 className="text-lg font-semibold">Attendees & Budget</h3>
              <p className="text-sm text-muted-foreground">
                Help us understand your guest count and budget planning.
              </p>
            </div>
            
            <FormField
              control={form.control}
              name="attendeeCount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Expected Attendee Count</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="e.g., 150"
                      {...field}
                      onChange={(e) => field.onChange(parseInt(e.target.value) || undefined)}
                    />
                  </FormControl>
                  <FormDescription>
                    How many people do you expect to attend?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="totalBudget"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Total Budget ($)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="e.g., 15000"
                      {...field}
                      onChange={(e) => field.onChange(parseInt(e.target.value) || undefined)}
                    />
                  </FormControl>
                  <FormDescription>
                    What's your total budget for this event?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="budgetPriority"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Budget Priority</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="What's most important to spend on?" />
                      </SelectTrigger>
                      <SelectContent>
                        {budgetPriorities.map((priority) => (
                          <SelectItem key={priority} value={priority.toLowerCase().replace(/[^a-z0-9]/g, '-')}>
                            {priority}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormDescription>
                    Where would you like to focus your spending?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {(form.watch("attendeeCount") ?? 0) > 0 && (form.watch("totalBudget") ?? 0) > 0 && (
              <Card className="bg-muted/30">
                <CardContent className="pt-6">
                  <div className="text-center space-y-2">
                    <p className="text-sm text-muted-foreground">
                      Estimated cost per attendee:
                    </p>
                    <p className="text-2xl font-bold text-primary">
                      ${Math.round((form.watch("totalBudget") ?? 0) / (form.watch("attendeeCount") ?? 1))}
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        )

      case 4:
        return (
          <div className="space-y-4">
            <div className="text-center">
              <h3 className="text-lg font-semibold">Event Details</h3>
              <p className="text-sm text-muted-foreground">
                Final details about style, catering, and special requirements.
              </p>
            </div>
            
            <FormField
              control={form.control}
              name="eventStyle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Event Style</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="What style fits your event?" />
                      </SelectTrigger>
                      <SelectContent>
                        {eventStyles.map((style) => (
                          <SelectItem key={style} value={style.toLowerCase().replace(/[^a-z0-9]/g, '-')}>
                            {style}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="cateringNeeds"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Catering Needs</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Describe your catering preferences, meal types, dietary restrictions..." 
                      rows={3}
                      {...field} 
                    />
                  </FormControl>
                  <FormDescription>
                    Tell us about your food and beverage requirements.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="specialRequirements"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Special Requirements</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Accessibility needs, technical requirements, special accommodations..." 
                      rows={3}
                      {...field} 
                    />
                  </FormControl>
                  <FormDescription>
                    Any special considerations we should know about?
                  </FormDescription>
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
                      placeholder="Any other details, concerns, or goals you'd like to share?" 
                      rows={3}
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

            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Check className="mr-2 h-5 w-5 text-primary" />
                  Ready to Begin!
                </CardTitle>
                <CardDescription>
                  You're all set to start planning your perfect event.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        )

      default:
        return null
    }
  }

  const progress = (currentStep / totalSteps) * 100

  return (
    <Dialog open={open}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Welcome to Event Planning</DialogTitle>
          <DialogDescription>
            Let's personalize your experience with a quick setup.
          </DialogDescription>
        </DialogHeader>

        <div className="mb-4">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>Step {currentStep} of {totalSteps}</span>
            <span>{Math.round(progress)}% complete</span>
          </div>
          <Progress value={progress} />
        </div>

        <div className="grid grid-cols-4 gap-2 mb-4">
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
                <Icon
                  className={cn(
                    "h-5 w-5 mx-auto mb-2",
                    isActive && "text-primary",
                    isCompleted && "text-primary",
                    !isActive && !isCompleted && "text-muted-foreground"
                  )}
                />
                <p className="text-xs font-medium">{step.title}</p>
              </div>
            )
          })}
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="min-h-96">
              {renderStep()}
            </div>

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