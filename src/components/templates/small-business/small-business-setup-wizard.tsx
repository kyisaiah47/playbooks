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
import { CalendarIcon, ChevronLeft, ChevronRight, Building, Target, Settings, FileText } from "lucide-react"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

const smallBusinessSetupSchema = z.object({
  // Step 1: Basic Information
  businessName: z.string().optional(),
  ownerName: z.string().optional(),
  industry: z.string().optional(),
  businessType: z.string().optional(),
  
  // Step 2: Launch & Market Details
  launchDate: z.date().optional(),
  targetMarket: z.string().optional(),
  totalBudget: z.number().optional(),
  
  // Step 3: Location & Legal
  businessAddress: z.string().optional(),
  businessCity: z.string().optional(),
  businessState: z.string().optional(),
  legalStructure: z.string().optional(),
  
  // Step 4: Business Details
  missionStatement: z.string().optional(),
  specialRequirements: z.string().optional(),
})

type SmallBusinessSetupData = z.infer<typeof smallBusinessSetupSchema>

const steps = [
  {
    id: 1,
    title: "Basic Info",
    description: "Tell us about your business",
    icon: Building,
  },
  {
    id: 2,
    title: "Launch Details",
    description: "Timeline and target market",
    icon: Target,
  },
  {
    id: 3,
    title: "Location & Legal",
    description: "Where and how you'll operate",
    icon: Settings,
  },
  {
    id: 4,
    title: "Business Vision",
    description: "Mission and special requirements",
    icon: FileText,
  },
]

const industries = [
  "Technology",
  "Healthcare",
  "Retail",
  "Food & Beverage",
  "Professional Services",
  "Education",
  "Real Estate",
  "Manufacturing",
  "Construction",
  "Transportation",
  "Entertainment",
  "Other"
]

const businessTypes = [
  "Product-based",
  "Service-based",
  "E-commerce",
  "Consulting",
  "Freelancing",
  "Brick & Mortar",
  "Franchise",
  "Other"
]

const legalStructures = [
  "Sole Proprietorship",
  "Partnership",
  "LLC",
  "Corporation",
  "S-Corp",
  "Non-profit",
  "Not sure yet"
]

const usStates = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado",
  "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho",
  "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana",
  "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota",
  "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada",
  "New Hampshire", "New Jersey", "New Mexico", "New York",
  "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon",
  "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington",
  "West Virginia", "Wisconsin", "Wyoming"
]

interface SmallBusinessSetupWizardProps {
  open: boolean
  onComplete: (data: SmallBusinessSetupData) => void
}

export function SmallBusinessSetupWizard({ open, onComplete }: SmallBusinessSetupWizardProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [allFormData, setAllFormData] = useState<Partial<SmallBusinessSetupData>>({})
  const totalSteps = 4

  const form = useForm<SmallBusinessSetupData>({
    resolver: zodResolver(smallBusinessSetupSchema),
    defaultValues: {
      businessName: "",
      ownerName: "",
      industry: "",
      businessType: "",
      launchDate: undefined,
      targetMarket: "",
      totalBudget: 0,
      businessAddress: "",
      businessCity: "",
      businessState: "",
      legalStructure: "",
      missionStatement: "",
      specialRequirements: "",
    },
  })

  const nextStep = async () => {
    const isValid = await form.trigger()
    if (isValid) {
      const currentData = form.getValues()
      const updatedData = { ...allFormData, ...currentData }
      setAllFormData(updatedData)

      if (currentStep < totalSteps) {
        setCurrentStep(currentStep + 1)
        form.reset(updatedData)
      } else {
        onComplete(updatedData)
      }
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      const currentData = form.getValues()
      setAllFormData({ ...allFormData, ...currentData })
      setCurrentStep(currentStep - 1)
      form.reset({ ...allFormData, ...currentData })
    }
  }

  const onSubmit = (data: SmallBusinessSetupData) => {
    nextStep()
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="text-center">
              <h3 className="text-lg font-semibold">Business Basics</h3>
              <p className="text-sm text-muted-foreground">
                Let&apos;s start with the core details about your business venture.
              </p>
            </div>
            
            <FormField
              control={form.control}
              name="businessName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Business Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Tech Solutions LLC" {...field} />
                  </FormControl>
                  <FormDescription>
                    What will you call your business?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="ownerName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Owner Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Alex Johnson" {...field} />
                  </FormControl>
                  <FormDescription>
                    Your name as the business owner.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="industry"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Industry</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="What industry is your business in?" />
                      </SelectTrigger>
                      <SelectContent>
                        {industries.map((industry) => (
                          <SelectItem key={industry} value={industry.toLowerCase()}>
                            {industry}
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
              name="businessType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Business Type</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="What type of business model?" />
                      </SelectTrigger>
                      <SelectContent>
                        {businessTypes.map((type) => (
                          <SelectItem key={type} value={type.toLowerCase()}>
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
          </div>
        )

      case 2:
        return (
          <div className="space-y-4">
            <div className="text-center">
              <h3 className="text-lg font-semibold">Launch & Market Details</h3>
              <p className="text-sm text-muted-foreground">
                When do you plan to launch and who are your customers?
              </p>
            </div>
            
            <FormField
              control={form.control}
              name="launchDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Target Launch Date</FormLabel>
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
                            <span>Pick your launch date</span>
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
                    When do you plan to officially launch your business?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="targetMarket"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Target Market</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="e.g., Small to medium businesses in tech industry, ages 25-45" 
                      {...field} 
                    />
                  </FormControl>
                  <FormDescription>
                    Who are your ideal customers?
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
                  <FormLabel>Startup Budget</FormLabel>
                  <FormControl>
                    <Input 
                      type="number" 
                      placeholder="e.g., 25000" 
                      {...field}
                      onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                    />
                  </FormControl>
                  <FormDescription>
                    How much capital do you have to start with? ($)
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
              <h3 className="text-lg font-semibold">Location & Legal Setup</h3>
              <p className="text-sm text-muted-foreground">
                Where will you operate and how will you structure your business?
              </p>
            </div>
            
            <FormField
              control={form.control}
              name="businessAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Business Address</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., 123 Main Street" {...field} />
                  </FormControl>
                  <FormDescription>
                    Street address where your business will be located.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="businessCity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>City</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., San Francisco" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="businessState"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>State</FormLabel>
                    <FormControl>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select state" />
                        </SelectTrigger>
                        <SelectContent>
                          {usStates.map((state) => (
                            <SelectItem key={state} value={state.toLowerCase()}>
                              {state}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="legalStructure"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Legal Structure</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="How will you structure your business?" />
                      </SelectTrigger>
                      <SelectContent>
                        {legalStructures.map((structure) => (
                          <SelectItem key={structure} value={structure.toLowerCase()}>
                            {structure}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormDescription>
                    This affects taxes and liability. You can change this later.
                  </FormDescription>
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
              <h3 className="text-lg font-semibold">Business Vision</h3>
              <p className="text-sm text-muted-foreground">
                Tell us about your mission and any special considerations.
              </p>
            </div>
            
            <FormField
              control={form.control}
              name="missionStatement"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mission Statement</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="e.g., To help small businesses succeed through innovative technology solutions..." 
                      {...field} 
                    />
                  </FormControl>
                  <FormDescription>
                    What&apos;s the purpose and vision of your business?
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
                      placeholder="e.g., Need special licensing, equipment, certifications..." 
                      {...field} 
                    />
                  </FormControl>
                  <FormDescription>
                    Any special licenses, permits, or requirements for your business?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Building className="mr-2 h-5 w-5 text-primary" />
                  Ready to Launch!
                </CardTitle>
                <CardDescription>
                  You&apos;re all set to start planning your business launch journey.
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
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center text-2xl">
            <Building className="mr-2 h-6 w-6 text-primary" />
            Small Business Launch Setup
          </DialogTitle>
          <DialogDescription>
            Let&apos;s personalize your business launch experience with a quick setup.
          </DialogDescription>
        </DialogHeader>

        <div className="mb-4">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>Step {currentStep} of {totalSteps}</span>
            <span>{Math.round(progress)}% complete</span>
          </div>
          <Progress value={progress} />
        </div>

        <div className="grid grid-cols-4 gap-2 mb-6">
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