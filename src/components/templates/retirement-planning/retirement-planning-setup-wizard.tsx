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
import { CalendarIcon, ChevronLeft, ChevronRight, Target, DollarSign, TrendingUp, Shield } from "lucide-react"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const retirementPlanningSetupSchema = z.object({
  // Step 1: Basic Information
  fullName: z.string().optional(),
  currentAge: z.number().optional(),
  targetRetirementAge: z.number().optional(),
  spouseName: z.string().optional(),
  
  // Step 2: Financial Situation
  currentAnnualIncome: z.number().optional(),
  desiredRetirementIncome: z.number().optional(),
  currentSavings: z.number().optional(),
  monthlyContributions: z.number().optional(),
  
  // Step 3: Benefits and Risk
  employerMatch: z.number().optional(),
  socialSecurityEstimate: z.number().optional(),
  riskTolerance: z.string().optional(),
  
  // Step 4: Goals and Planning
  retirementGoals: z.string().optional(),
  healthcarePlanning: z.string().optional(),
  estatePlanning: z.string().optional(),
  additionalNotes: z.string().optional(),
})

type RetirementPlanningSetupData = z.infer<typeof retirementPlanningSetupSchema>

interface RetirementPlanningSetupWizardProps {
  open: boolean
  onComplete: (data: RetirementPlanningSetupData) => void
}

const steps = [
  {
    id: 1,
    title: "Basic Information",
    description: "Tell us about yourself and your retirement timeline",
    icon: Target,
  },
  {
    id: 2,
    title: "Financial Situation",
    description: "Your current income and savings information",
    icon: DollarSign,
  },
  {
    id: 3,
    title: "Benefits & Risk",
    description: "Employer benefits and risk tolerance",
    icon: TrendingUp,
  },
  {
    id: 4,
    title: "Goals & Planning",
    description: "Your retirement goals and planning preferences",
    icon: Shield,
  },
]

export function RetirementPlanningSetupWizard({ open, onComplete }: RetirementPlanningSetupWizardProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 4

  const form = useForm<RetirementPlanningSetupData>({
    resolver: zodResolver(retirementPlanningSetupSchema),
    defaultValues: {
      fullName: "",
      currentAge: undefined,
      targetRetirementAge: undefined,
      spouseName: "",
      currentAnnualIncome: undefined,
      desiredRetirementIncome: undefined,
      currentSavings: undefined,
      monthlyContributions: undefined,
      employerMatch: undefined,
      socialSecurityEstimate: undefined,
      riskTolerance: "",
      retirementGoals: "",
      healthcarePlanning: "",
      estatePlanning: "",
      additionalNotes: "",
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

  const onSubmit = (data: RetirementPlanningSetupData) => {
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
                Let&apos;s start with some basic details about your retirement planning journey.
              </p>
            </div>
            
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your full name" {...field} />
                  </FormControl>
                  <FormDescription>
                    This helps us personalize your retirement plan.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="currentAge"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Current Age</FormLabel>
                    <FormControl>
                      <Input 
                        type="number" 
                        placeholder="e.g., 35" 
                        {...field}
                        onChange={(e) => field.onChange(parseInt(e.target.value) || undefined)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="targetRetirementAge"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Target Retirement Age</FormLabel>
                    <FormControl>
                      <Input 
                        type="number" 
                        placeholder="e.g., 65" 
                        {...field}
                        onChange={(e) => field.onChange(parseInt(e.target.value) || undefined)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="spouseName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Spouse/Partner Name (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter spouse or partner name" {...field} />
                  </FormControl>
                  <FormDescription>
                    Include if you&apos;re planning retirement together.
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
              <h3 className="text-lg font-semibold">Financial Situation</h3>
              <p className="text-sm text-muted-foreground">
                Tell us about your current income and savings to help calculate your retirement needs.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="currentAnnualIncome"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Current Annual Income ($)</FormLabel>
                    <FormControl>
                      <Input 
                        type="number" 
                        placeholder="e.g., 75000" 
                        {...field}
                        onChange={(e) => field.onChange(parseInt(e.target.value) || undefined)}
                      />
                    </FormControl>
                    <FormDescription>
                      Your gross annual income before taxes.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="desiredRetirementIncome"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Desired Annual Retirement Income ($)</FormLabel>
                    <FormControl>
                      <Input 
                        type="number" 
                        placeholder="e.g., 60000" 
                        {...field}
                        onChange={(e) => field.onChange(parseInt(e.target.value) || undefined)}
                      />
                    </FormControl>
                    <FormDescription>
                      How much you&apos;d like to have annually in retirement.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="currentSavings"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Current Retirement Savings ($)</FormLabel>
                    <FormControl>
                      <Input 
                        type="number" 
                        placeholder="e.g., 125000" 
                        {...field}
                        onChange={(e) => field.onChange(parseInt(e.target.value) || undefined)}
                      />
                    </FormControl>
                    <FormDescription>
                      Total in 401(k), IRA, and other retirement accounts.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="monthlyContributions"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Monthly Retirement Contributions ($)</FormLabel>
                    <FormControl>
                      <Input 
                        type="number" 
                        placeholder="e.g., 1250" 
                        {...field}
                        onChange={(e) => field.onChange(parseInt(e.target.value) || undefined)}
                      />
                    </FormControl>
                    <FormDescription>
                      How much you contribute monthly to retirement accounts.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-4">
            <div className="text-center">
              <h3 className="text-lg font-semibold">Benefits & Risk Tolerance</h3>
              <p className="text-sm text-muted-foreground">
                Information about employer benefits and your investment risk preferences.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="employerMatch"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Employer Match (% of Salary)</FormLabel>
                    <FormControl>
                      <Input 
                        type="number" 
                        placeholder="e.g., 4" 
                        {...field}
                        onChange={(e) => field.onChange(parseInt(e.target.value) || undefined)}
                      />
                    </FormControl>
                    <FormDescription>
                      What percentage does your employer match?
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="socialSecurityEstimate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Social Security Estimate ($)</FormLabel>
                    <FormControl>
                      <Input 
                        type="number" 
                        placeholder="e.g., 2000" 
                        {...field}
                        onChange={(e) => field.onChange(parseInt(e.target.value) || undefined)}
                      />
                    </FormControl>
                    <FormDescription>
                      Monthly Social Security benefit estimate.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="riskTolerance"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Risk Tolerance</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="How comfortable are you with investment risk?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="conservative">Conservative - Prefer stability over growth</SelectItem>
                        <SelectItem value="moderate">Moderate - Balance of growth and stability</SelectItem>
                        <SelectItem value="aggressive">Aggressive - Prioritize growth potential</SelectItem>
                        <SelectItem value="very-aggressive">Very Aggressive - Maximum growth focus</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormDescription>
                    This helps us suggest appropriate investment strategies.
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
              <h3 className="text-lg font-semibold">Goals & Planning Preferences</h3>
              <p className="text-sm text-muted-foreground">
                Tell us about your retirement goals and planning considerations.
              </p>
            </div>
            
            <FormField
              control={form.control}
              name="retirementGoals"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Primary Retirement Goals</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="e.g., Travel, hobbies, family time, volunteering..." 
                      {...field} 
                    />
                  </FormControl>
                  <FormDescription>
                    What are your main goals and priorities for retirement?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="healthcarePlanning"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Healthcare Planning Concerns</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="What&apos;s your healthcare planning priority?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="basic">Basic coverage - Standard Medicare plans</SelectItem>
                        <SelectItem value="comprehensive">Comprehensive - Supplement and long-term care</SelectItem>
                        <SelectItem value="premium">Premium - Full coverage with private options</SelectItem>
                        <SelectItem value="unsure">Unsure - Need guidance on options</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormDescription>
                    Healthcare is often a major retirement expense.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="estatePlanning"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Estate Planning Priority</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="How important is estate planning to you?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="minimal">Minimal - Basic will and beneficiaries</SelectItem>
                        <SelectItem value="standard">Standard - Trust and tax planning</SelectItem>
                        <SelectItem value="comprehensive">Comprehensive - Full estate strategy</SelectItem>
                        <SelectItem value="not-priority">Not a priority right now</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormDescription>
                    Planning how to pass wealth to heirs or causes.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="additionalNotes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Additional Notes</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Any specific concerns, goals, or context you&apos;d like to share?" 
                      {...field} 
                    />
                  </FormControl>
                  <FormDescription>
                    This will help us provide more tailored guidance.
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

  const progress = (currentStep / totalSteps) * 100

  return (
    <Dialog open={open}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center text-2xl">
            <Target className="mr-2 h-6 w-6 text-primary" />
            Retirement Planning Setup
          </DialogTitle>
          <DialogDescription>
            Let&apos;s personalize your retirement planning experience with a quick setup.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span>Step {currentStep} of {totalSteps}</span>
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
              <div className="mb-4">
                <h3 className="text-xl font-semibold">
                  {steps[currentStep - 1]?.title}
                </h3>
                <p className="text-muted-foreground">
                  {steps[currentStep - 1]?.description}
                </p>
              </div>
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