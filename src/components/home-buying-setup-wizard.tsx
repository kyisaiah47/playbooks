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
import { HomeBuyingData } from "@/contexts/home-buying-context"
import { Home, ArrowLeft, ArrowRight, Check, MapPin, DollarSign, Calendar, Users, Calculator, Briefcase } from "lucide-react"

interface HomeBuyingSetupWizardProps {
  isOpen: boolean
  onClose: () => void
  onComplete: (data: HomeBuyingData) => void
  initialData?: HomeBuyingData
}

const formSchema = z.object({
  targetLocation: z.string().min(1, "Target location is required"),
  maxBudget: z.number().min(50000, "Budget must be at least $50,000"),
  minBudget: z.number().min(25000, "Budget must be at least $25,000"),
  currency: z.string(),
  propertyType: z.enum(["single-family", "townhouse", "condo", "multi-family", "any"]),
  bedrooms: z.number().min(1, "At least 1 bedroom required"),
  bathrooms: z.number().min(1, "At least 1 bathroom required"),
  minSquareFeet: z.number().min(300, "Minimum square feet must be at least 300"),
  maxSquareFeet: z.number().min(500, "Maximum square feet must be at least 500"),
  mustHaveFeatures: z.array(z.string()),
  niceToHaveFeatures: z.array(z.string()),
  dealBreakers: z.array(z.string()),
  neighborhoodPreferences: z.array(z.string()),
  commutePreferences: z.array(z.string()),
  schoolDistrict: z.string(),
  walkabilityScore: z.number().min(0).max(100),
  preApprovalAmount: z.number().min(0),
  downPaymentAmount: z.number().min(1000, "Down payment must be at least $1,000"),
  downPaymentPercentage: z.number().min(3).max(50),
  monthlyIncomeAfterTax: z.number().min(2000, "Monthly income must be at least $2,000"),
  monthlyDebtPayments: z.number().min(0),
  estimatedMonthlyHOA: z.number().min(0),
  estimatedPropertyTaxes: z.number().min(0),
  homeInsuranceBudget: z.number().min(0),
  closingCostsBudget: z.number().min(0),
  mortgageType: z.enum(["conventional", "fha", "va", "usda", "jumbo", "other"]),
  loanTerm: z.enum(["15", "20", "30"]),
  interestRate: z.number().min(1).max(20),
  lenderPreferences: z.array(z.string()),
  targetMoveInDate: z.date(),
  searchTimeline: z.enum(["1-month", "3-months", "6-months", "12-months", "flexible"]),
  firstTimeBuyer: z.boolean(),
  currentLivingSituation: z.enum(["renting", "living-with-family", "own-home", "other"]),
  reasonForMoving: z.string().min(10, "Please provide a reason for moving"),
  realEstateAgent: z.object({
    name: z.string(),
    phone: z.string(),
    email: z.string(),
    company: z.string(),
  }),
  mortgageLender: z.object({
    name: z.string(),
    phone: z.string(),
    email: z.string(),
    company: z.string(),
  }),
  homeInspector: z.object({
    name: z.string(),
    phone: z.string(),
    email: z.string(),
    company: z.string(),
  }),
  attorneyTitle: z.object({
    name: z.string(),
    phone: z.string(),
    email: z.string(),
    company: z.string(),
  }),
})

const propertyFeatures = [
  "Garage",
  "Swimming Pool",
  "Fireplace",
  "Updated Kitchen",
  "Hardwood Floors",
  "Central Air",
  "Basement",
  "Large Yard",
  "Walk-in Closet",
  "Home Office",
  "Open Floor Plan",
  "New Roof",
  "Energy Efficient",
  "Security System",
  "Outdoor Deck/Patio"
]

export function HomeBuyingSetupWizard({ isOpen, onClose, onComplete, initialData }: HomeBuyingSetupWizardProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [mustHaveFeatures, setMustHaveFeatures] = useState<string[]>(initialData?.mustHaveFeatures || [])
  const [niceToHaveFeatures, setNiceToHaveFeatures] = useState<string[]>(initialData?.niceToHaveFeatures || [])
  const [dealBreakers, setDealBreakers] = useState<string[]>(initialData?.dealBreakers || [])
  const [neighborhoodPreferences, setNeighborhoodPreferences] = useState<string[]>(initialData?.neighborhoodPreferences || [])
  const [commutePreferences, setCommutePreferences] = useState<string[]>(initialData?.commutePreferences || [])
  const [lenderPreferences, setLenderPreferences] = useState<string[]>(initialData?.lenderPreferences || [])
  const totalSteps = 8

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      targetLocation: initialData?.targetLocation || "",
      maxBudget: initialData?.maxBudget || 500000,
      minBudget: initialData?.minBudget || 200000,
      currency: initialData?.currency || "USD",
      propertyType: initialData?.propertyType || "any",
      bedrooms: initialData?.bedrooms || 3,
      bathrooms: initialData?.bathrooms || 2,
      minSquareFeet: initialData?.minSquareFeet || 1200,
      maxSquareFeet: initialData?.maxSquareFeet || 3000,
      mustHaveFeatures: initialData?.mustHaveFeatures || [],
      niceToHaveFeatures: initialData?.niceToHaveFeatures || [],
      dealBreakers: initialData?.dealBreakers || [],
      neighborhoodPreferences: initialData?.neighborhoodPreferences || [],
      commutePreferences: initialData?.commutePreferences || [],
      schoolDistrict: initialData?.schoolDistrict || "",
      walkabilityScore: initialData?.walkabilityScore || 50,
      preApprovalAmount: initialData?.preApprovalAmount || 0,
      downPaymentAmount: initialData?.downPaymentAmount || 50000,
      downPaymentPercentage: initialData?.downPaymentPercentage || 10,
      monthlyIncomeAfterTax: initialData?.monthlyIncomeAfterTax || 8000,
      monthlyDebtPayments: initialData?.monthlyDebtPayments || 1000,
      estimatedMonthlyHOA: initialData?.estimatedMonthlyHOA || 0,
      estimatedPropertyTaxes: initialData?.estimatedPropertyTaxes || 800,
      homeInsuranceBudget: initialData?.homeInsuranceBudget || 150,
      closingCostsBudget: initialData?.closingCostsBudget || 15000,
      mortgageType: initialData?.mortgageType || "conventional",
      loanTerm: initialData?.loanTerm ? String(initialData.loanTerm) as "15" | "20" | "30" : "30",
      interestRate: initialData?.interestRate || 6.5,
      lenderPreferences: initialData?.lenderPreferences || [],
      targetMoveInDate: initialData?.targetMoveInDate || new Date(Date.now() + 6 * 30 * 24 * 60 * 60 * 1000),
      searchTimeline: initialData?.searchTimeline || "6-months",
      firstTimeBuyer: initialData?.firstTimeBuyer || true,
      currentLivingSituation: initialData?.currentLivingSituation || "renting",
      reasonForMoving: initialData?.reasonForMoving || "",
      realEstateAgent: initialData?.realEstateAgent || { name: "", phone: "", email: "", company: "" },
      mortgageLender: initialData?.mortgageLender || { name: "", phone: "", email: "", company: "" },
      homeInspector: initialData?.homeInspector || { name: "", phone: "", email: "", company: "" },
      attorneyTitle: initialData?.attorneyTitle || { name: "", phone: "", email: "", company: "" },
    },
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const data: HomeBuyingData = {
      ...values,
      loanTerm: parseInt(values.loanTerm) as 15 | 20 | 30,
      mustHaveFeatures,
      niceToHaveFeatures,
      dealBreakers,
      neighborhoodPreferences,
      commutePreferences,
      lenderPreferences,
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

  const addToList = (item: string, list: string[], setList: (list: string[]) => void) => {
    if (item.trim() && !list.includes(item.trim())) {
      setList([...list, item.trim()])
    }
  }

  const removeFromList = (item: string, list: string[], setList: (list: string[]) => void) => {
    setList(list.filter(i => i !== item))
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Basic Home Search</h3>
              <p className="text-sm text-muted-foreground">
                Tell us what kind of home you're looking for
              </p>
            </div>

            <FormField
              control={form.control}
              name="targetLocation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Target Location</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., San Francisco, CA or 94102" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="minBudget"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Minimum Budget</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="200000"
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
                name="maxBudget"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Maximum Budget</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="500000"
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
              name="propertyType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Property Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select property type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="single-family">Single Family Home</SelectItem>
                      <SelectItem value="townhouse">Townhouse</SelectItem>
                      <SelectItem value="condo">Condo/Apartment</SelectItem>
                      <SelectItem value="multi-family">Multi-Family</SelectItem>
                      <SelectItem value="any">Any Type</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="bedrooms"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bedrooms</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        min="1"
                        max="10"
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
                name="bathrooms"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bathrooms</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        min="1"
                        max="10"
                        step="0.5"
                        {...field}
                        onChange={(e) => field.onChange(parseFloat(e.target.value))}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Property Features & Preferences</h3>
              <p className="text-sm text-muted-foreground">
                What features are most important to you?
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="minSquareFeet"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Min Square Feet</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="1200"
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
                name="maxSquareFeet"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Max Square Feet</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="3000"
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
              <FormLabel>Must-Have Features</FormLabel>
              <FormDescription className="mb-3">
                Features that are absolutely required
              </FormDescription>
              <div className="grid grid-cols-2 gap-2">
                {propertyFeatures.map((feature) => (
                  <div key={feature} className="flex items-center space-x-2">
                    <Checkbox
                      id={`must-${feature}`}
                      checked={mustHaveFeatures.includes(feature)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setMustHaveFeatures([...mustHaveFeatures, feature])
                        } else {
                          setMustHaveFeatures(mustHaveFeatures.filter(f => f !== feature))
                        }
                      }}
                    />
                    <label htmlFor={`must-${feature}`} className="text-sm font-medium">
                      {feature}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <FormLabel>Nice-to-Have Features</FormLabel>
              <FormDescription className="mb-3">
                Features that would be great but not required
              </FormDescription>
              <div className="grid grid-cols-2 gap-2">
                {propertyFeatures.map((feature) => (
                  <div key={feature} className="flex items-center space-x-2">
                    <Checkbox
                      id={`nice-${feature}`}
                      checked={niceToHaveFeatures.includes(feature)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setNiceToHaveFeatures([...niceToHaveFeatures, feature])
                        } else {
                          setNiceToHaveFeatures(niceToHaveFeatures.filter(f => f !== feature))
                        }
                      }}
                    />
                    <label htmlFor={`nice-${feature}`} className="text-sm font-medium">
                      {feature}
                    </label>
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
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Financial Information</h3>
              <p className="text-sm text-muted-foreground">
                Help us understand your financial situation
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="downPaymentAmount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Down Payment Amount</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="50000"
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
                name="downPaymentPercentage"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Down Payment %</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        min="3"
                        max="50"
                        placeholder="10"
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
              name="monthlyIncomeAfterTax"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Monthly Income (After Tax)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="8000"
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
              name="monthlyDebtPayments"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Monthly Debt Payments</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="1000"
                      {...field}
                      onChange={(e) => field.onChange(parseInt(e.target.value))}
                    />
                  </FormControl>
                  <FormDescription>
                    Include credit cards, car loans, student loans, etc.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="preApprovalAmount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pre-Approval Amount (Optional)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="450000"
                      {...field}
                      onChange={(e) => field.onChange(parseInt(e.target.value))}
                    />
                  </FormControl>
                  <FormDescription>
                    If you've already been pre-approved by a lender
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
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Mortgage Details</h3>
              <p className="text-sm text-muted-foreground">
                Configure your mortgage preferences
              </p>
            </div>

            <FormField
              control={form.control}
              name="mortgageType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mortgage Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select mortgage type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="conventional">Conventional</SelectItem>
                      <SelectItem value="fha">FHA</SelectItem>
                      <SelectItem value="va">VA Loan</SelectItem>
                      <SelectItem value="usda">USDA</SelectItem>
                      <SelectItem value="jumbo">Jumbo Loan</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="loanTerm"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Loan Term (Years)</FormLabel>
                    <Select onValueChange={(value) => field.onChange(parseInt(value))} defaultValue={field.value?.toString()}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select term" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="15">15 Years</SelectItem>
                        <SelectItem value="20">20 Years</SelectItem>
                        <SelectItem value="30">30 Years</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="interestRate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Expected Interest Rate (%)</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        step="0.01"
                        min="1"
                        max="20"
                        placeholder="6.5"
                        {...field}
                        onChange={(e) => field.onChange(parseFloat(e.target.value))}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="estimatedPropertyTaxes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Est. Monthly Property Taxes</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="800"
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
                name="homeInsuranceBudget"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Est. Monthly Home Insurance</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="150"
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
              name="estimatedMonthlyHOA"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Estimated Monthly HOA Fees</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="0"
                      {...field}
                      onChange={(e) => field.onChange(parseInt(e.target.value))}
                    />
                  </FormControl>
                  <FormDescription>
                    Leave as 0 if not applicable
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        )

      case 5:
        return (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Timeline & Goals</h3>
              <p className="text-sm text-muted-foreground">
                When do you want to move and why?
              </p>
            </div>

            <FormField
              control={form.control}
              name="targetMoveInDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Target Move-in Date</FormLabel>
                  <FormControl>
                    <Input
                      type="date"
                      {...field}
                      value={field.value ? field.value.toISOString().split('T')[0] : ''}
                      onChange={(e) => field.onChange(new Date(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="searchTimeline"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Search Timeline</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="How long do you want to search?" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="1-month">1 month (urgent)</SelectItem>
                      <SelectItem value="3-months">3 months (typical)</SelectItem>
                      <SelectItem value="6-months">6 months (comfortable)</SelectItem>
                      <SelectItem value="12-months">12 months (long-term)</SelectItem>
                      <SelectItem value="flexible">Flexible (no rush)</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="firstTimeBuyer"
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
                      First-time home buyer
                    </FormLabel>
                    <FormDescription>
                      Check this if this is your first home purchase
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="currentLivingSituation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Current Living Situation</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your current situation" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="renting">Renting</SelectItem>
                      <SelectItem value="living-with-family">Living with Family</SelectItem>
                      <SelectItem value="own-home">Own Current Home</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="reasonForMoving"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Reason for Moving</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us about why you're looking to buy a home..."
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        )

      case 6:
        return (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold">Neighborhood & Lifestyle</h3>
              <p className="text-sm text-muted-foreground">
                What kind of community do you want to live in?
              </p>
            </div>

            <FormField
              control={form.control}
              name="schoolDistrict"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preferred School District (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Palo Alto Unified" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="walkabilityScore"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Desired Walkability (1-100)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min="0"
                      max="100"
                      placeholder="50"
                      {...field}
                      onChange={(e) => field.onChange(parseInt(e.target.value))}
                    />
                  </FormControl>
                  <FormDescription>
                    How important is it to walk to amenities? (0 = not important, 100 = very important)
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div>
              <FormLabel>Neighborhood Preferences</FormLabel>
              <FormDescription className="mb-3">
                Add preferred neighborhood characteristics
              </FormDescription>
              <div className="flex flex-wrap gap-2 mb-2">
                {neighborhoodPreferences.map((pref, index) => (
                  <div key={index} className="flex items-center bg-secondary text-secondary-foreground px-2 py-1 rounded text-sm">
                    {pref}
                    <button
                      type="button"
                      onClick={() => removeFromList(pref, neighborhoodPreferences, setNeighborhoodPreferences)}
                      className="ml-2 text-muted-foreground hover:text-foreground"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <Input
                  placeholder="e.g., Family-friendly, Urban, Quiet"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault()
                      addToList(e.currentTarget.value, neighborhoodPreferences, setNeighborhoodPreferences)
                      e.currentTarget.value = ''
                    }
                  }}
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={(e) => {
                    const input = e.currentTarget.previousElementSibling as HTMLInputElement
                    addToList(input.value, neighborhoodPreferences, setNeighborhoodPreferences)
                    input.value = ''
                  }}
                >
                  Add
                </Button>
              </div>
            </div>

            <div>
              <FormLabel>Commute Preferences</FormLabel>
              <FormDescription className="mb-3">
                Add locations you need to commute to
              </FormDescription>
              <div className="flex flex-wrap gap-2 mb-2">
                {commutePreferences.map((pref, index) => (
                  <div key={index} className="flex items-center bg-secondary text-secondary-foreground px-2 py-1 rounded text-sm">
                    {pref}
                    <button
                      type="button"
                      onClick={() => removeFromList(pref, commutePreferences, setCommutePreferences)}
                      className="ml-2 text-muted-foreground hover:text-foreground"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <Input
                  placeholder="e.g., Downtown SF, Google Campus"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault()
                      addToList(e.currentTarget.value, commutePreferences, setCommutePreferences)
                      e.currentTarget.value = ''
                    }
                  }}
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={(e) => {
                    const input = e.currentTarget.previousElementSibling as HTMLInputElement
                    addToList(input.value, commutePreferences, setCommutePreferences)
                    input.value = ''
                  }}
                >
                  Add
                </Button>
              </div>
            </div>
          </div>
        )

      case 7:
        return (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Professional Team</h3>
              <p className="text-sm text-muted-foreground">
                Add your real estate professionals (optional)
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-3">Real Estate Agent</h4>
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="realEstateAgent.name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Agent Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="realEstateAgent.phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input placeholder="(555) 123-4567" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="realEstateAgent.email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="agent@realty.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="realEstateAgent.company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company</FormLabel>
                        <FormControl>
                          <Input placeholder="Realty Company" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">Mortgage Lender</h4>
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="mortgageLender.name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Loan Officer Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="mortgageLender.phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input placeholder="(555) 123-4567" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="mortgageLender.email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="lender@bank.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="mortgageLender.company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company</FormLabel>
                        <FormControl>
                          <Input placeholder="Bank Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>
          </div>
        )

      case 8:
        return (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Additional Professionals</h3>
              <p className="text-sm text-muted-foreground">
                Home inspector and attorney/title company (optional)
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-3">Home Inspector</h4>
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="homeInspector.name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Inspector Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="homeInspector.phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input placeholder="(555) 123-4567" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="homeInspector.email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="inspector@company.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="homeInspector.company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company</FormLabel>
                        <FormControl>
                          <Input placeholder="Inspection Company" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">Attorney/Title Company</h4>
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="attorneyTitle.name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Attorney/Title Rep Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="attorneyTitle.phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input placeholder="(555) 123-4567" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="attorneyTitle.email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="attorney@firm.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="attorneyTitle.company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company</FormLabel>
                        <FormControl>
                          <Input placeholder="Law Firm/Title Company" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>
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
          <DialogTitle>Home Buying Setup</DialogTitle>
          <DialogDescription>
            Let's set up your personalized home buying workspace
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