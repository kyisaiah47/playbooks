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
import { BabyPlanningData } from "@/contexts/baby-planning-context"
import { Baby, ArrowLeft, ArrowRight, Check, Heart, Home, DollarSign, Stethoscope, Users, Calendar } from "lucide-react"

interface BabyPlanningSetupWizardProps {
  isOpen: boolean
  onClose: () => void
  onComplete: (data: BabyPlanningData) => void
  initialData?: BabyPlanningData
}

const formSchema = z.object({
  babyName: z.string().optional(),
  babyGender: z.enum(["boy", "girl", "surprise", "unknown"]),
  dueDate: z.string().min(1, "Due date is required"),
  currentWeek: z.number().min(1).max(42),
  isFirstBaby: z.boolean(),
  parentOneName: z.string().min(1, "Parent name is required"),
  parentTwoName: z.string().optional(),
  relationshipStatus: z.enum(["married", "partnered", "single"]),
  pregnancyType: z.enum(["natural", "ivf", "adoption", "surrogacy"]),
  multiplePregnancy: z.boolean(),
  numberOfBabies: z.number().min(1).max(8),
  highRiskPregnancy: z.boolean(),
  doctorName: z.string().optional(),
  hospitalName: z.string().optional(),
  birthPlanType: z.enum(["natural", "medicated", "cesarean", "undecided"]),
  doula: z.boolean(),
  midwife: z.boolean(),
  budgetTotal: z.number().min(0),
  currency: z.string(),
  nurseryTheme: z.string().optional(),
  nurseryStyle: z.enum(["modern", "traditional", "minimalist", "themed", "eclectic"]),
  homePreparation: z.array(z.string()),
  babyProofingNeeded: z.boolean(),
  familySupport: z.array(z.string()),
  friendsSupport: z.array(z.string()),
  professionalSupport: z.array(z.string()),
  parentingClasses: z.boolean(),
  parentOneMaternityLeave: z.number().min(0),
  parentTwoPaternityLeave: z.number().min(0),
  returnToWorkPlan: z.enum(["full-time", "part-time", "work-from-home", "career-break"]),
  childcareArrangements: z.enum(["daycare", "nanny", "family", "sahp", "undecided"]),
  feedingPlan: z.enum(["breastfeeding", "bottle", "combination", "undecided"]),
  sleepPhilosophy: z.enum(["co-sleeping", "crib", "bassinet", "flexible"]),
  parentingStyle: z.enum(["attachment", "structured", "gentle", "balanced", "exploring"]),
  babyShowerPlanned: z.boolean(),
  babyShowerDate: z.string().optional(),
  nurseryCompletionGoal: z.string().optional(),
  hospitalBagPackingDate: z.string().optional(),
  announcementDate: z.string().optional(),
  genderRevealDate: z.string().optional(),
  firstKickDate: z.string().optional(),
  babymoonPlanned: z.boolean(),
  babymoonDate: z.string().optional(),
  budgetCategories: z.object({
    nursery: z.number().min(0),
    clothing: z.number().min(0),
    gear: z.number().min(0),
    healthcare: z.number().min(0),
    childcare: z.number().min(0),
    education: z.number().min(0)
  })
})

const homePreparationOptions = [
  "Baby-proofing outlets",
  "Installing baby gates",
  "Securing cabinets",
  "Setting up nursery",
  "Installing car seat",
  "Stocking diapers",
  "Preparing freezer meals",
  "Creating birth plan",
  "Packing hospital bag",
  "Installing smoke detectors"
]

const supportOptions = [
  "Grandparents",
  "Siblings", 
  "Best friends",
  "Neighbors",
  "Doula",
  "Lactation consultant",
  "Pediatrician",
  "Postpartum doula",
  "Nanny/Babysitter",
  "Parenting group"
]

export function BabyPlanningSetupWizard({ isOpen, onClose, onComplete, initialData }: BabyPlanningSetupWizardProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [homePreparation, setHomePreparation] = useState<string[]>(initialData?.homePreparation || [])
  const [familySupport, setFamilySupport] = useState<string[]>(initialData?.familySupport || [])
  const [friendsSupport, setFriendsSupport] = useState<string[]>(initialData?.friendsSupport || [])
  const [professionalSupport, setProfessionalSupport] = useState<string[]>(initialData?.professionalSupport || [])
  const totalSteps = 8

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      babyName: initialData?.babyName || "",
      babyGender: initialData?.babyGender || "unknown",
      dueDate: initialData?.dueDate || "",
      currentWeek: initialData?.currentWeek || 12,
      isFirstBaby: initialData?.isFirstBaby ?? true,
      parentOneName: initialData?.parentOneName || "",
      parentTwoName: initialData?.parentTwoName || "",
      relationshipStatus: initialData?.relationshipStatus || "partnered",
      pregnancyType: initialData?.pregnancyType || "natural",
      multiplePregnancy: initialData?.multiplePregnancy ?? false,
      numberOfBabies: initialData?.numberOfBabies || 1,
      highRiskPregnancy: initialData?.highRiskPregnancy ?? false,
      doctorName: initialData?.doctorName || "",
      hospitalName: initialData?.hospitalName || "",
      birthPlanType: initialData?.birthPlanType || "undecided",
      doula: initialData?.doula ?? false,
      midwife: initialData?.midwife ?? false,
      budgetTotal: initialData?.budgetTotal || 15000,
      currency: initialData?.currency || "USD",
      nurseryTheme: initialData?.nurseryTheme || "",
      nurseryStyle: initialData?.nurseryStyle || "modern",
      homePreparation: initialData?.homePreparation || [],
      babyProofingNeeded: initialData?.babyProofingNeeded ?? true,
      familySupport: initialData?.familySupport || [],
      friendsSupport: initialData?.friendsSupport || [],
      professionalSupport: initialData?.professionalSupport || [],
      parentingClasses: initialData?.parentingClasses ?? false,
      parentOneMaternityLeave: initialData?.parentOneMaternityLeave || 12,
      parentTwoPaternityLeave: initialData?.parentTwoPaternityLeave || 2,
      returnToWorkPlan: initialData?.returnToWorkPlan || "full-time",
      childcareArrangements: initialData?.childcareArrangements || "undecided",
      feedingPlan: initialData?.feedingPlan || "undecided",
      sleepPhilosophy: initialData?.sleepPhilosophy || "flexible",
      parentingStyle: initialData?.parentingStyle || "exploring",
      babyShowerPlanned: initialData?.babyShowerPlanned ?? false,
      babyShowerDate: initialData?.babyShowerDate || "",
      nurseryCompletionGoal: initialData?.nurseryCompletionGoal || "",
      hospitalBagPackingDate: initialData?.hospitalBagPackingDate || "",
      announcementDate: initialData?.announcementDate || "",
      genderRevealDate: initialData?.genderRevealDate || "",
      firstKickDate: initialData?.firstKickDate || "",
      babymoonPlanned: initialData?.babymoonPlanned ?? false,
      babymoonDate: initialData?.babymoonDate || "",
      budgetCategories: initialData?.budgetCategories || {
        nursery: 3000,
        clothing: 1500,
        gear: 4000,
        healthcare: 2000,
        childcare: 3000,
        education: 1500
      }
    },
  })

  React.useEffect(() => {
    if (isOpen && initialData) {
      setHomePreparation(initialData.homePreparation || [])
      setFamilySupport(initialData.familySupport || [])
      setFriendsSupport(initialData.friendsSupport || [])
      setProfessionalSupport(initialData.professionalSupport || [])
      setCurrentStep(1)
      form.reset(initialData)
    }
  }, [isOpen, initialData, form])

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const data: BabyPlanningData = {
      ...values,
      babyName: values.babyName || "",
      doctorName: values.doctorName || "",
      hospitalName: values.hospitalName || "",
      nurseryTheme: values.nurseryTheme || "",
      babyShowerDate: values.babyShowerDate || "",
      nurseryCompletionGoal: values.nurseryCompletionGoal || "",
      hospitalBagPackingDate: values.hospitalBagPackingDate || "",
      announcementDate: values.announcementDate || "",
      genderRevealDate: values.genderRevealDate || "",
      firstKickDate: values.firstKickDate || "",
      babymoonDate: values.babymoonDate || "",
      parentTwoName: values.parentTwoName || "",
      homePreparation,
      familySupport,
      friendsSupport,
      professionalSupport,
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

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Baby className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Baby & Family Information</h3>
              <p className="text-sm text-muted-foreground">
                Tell us about your baby and family
              </p>
            </div>

            <FormField
              control={form.control}
              name="babyName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Baby Name (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Emma, Noah, or leave blank" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="babyGender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Baby Gender</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select baby gender" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="boy">Boy</SelectItem>
                      <SelectItem value="girl">Girl</SelectItem>
                      <SelectItem value="surprise">Surprise (keeping it secret)</SelectItem>
                      <SelectItem value="unknown">Unknown/Too early</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="dueDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Due Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="currentWeek"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Current Week of Pregnancy</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min="1"
                      max="42"
                      placeholder="12"
                      {...field}
                      onChange={(e) => field.onChange(parseInt(e.target.value))}
                    />
                  </FormControl>
                  <FormDescription>
                    How many weeks pregnant are you?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="isFirstBaby"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      This is my first baby
                    </FormLabel>
                  </div>
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
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Parents & Relationship</h3>
              <p className="text-sm text-muted-foreground">
                Information about the parents and family structure
              </p>
            </div>

            <FormField
              control={form.control}
              name="parentOneName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Parent One Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="parentTwoName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Parent Two Name (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="Partner's name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="relationshipStatus"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Relationship Status</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select relationship status" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="married">Married</SelectItem>
                      <SelectItem value="partnered">In a relationship/Partnered</SelectItem>
                      <SelectItem value="single">Single parent</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="pregnancyType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pregnancy Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select pregnancy type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="natural">Natural conception</SelectItem>
                      <SelectItem value="ivf">IVF/Fertility treatment</SelectItem>
                      <SelectItem value="adoption">Adoption</SelectItem>
                      <SelectItem value="surrogacy">Surrogacy</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex items-start space-x-4">
              <FormField
                control={form.control}
                name="multiplePregnancy"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Multiple pregnancy (twins, etc.)</FormLabel>
                    </div>
                  </FormItem>
                )}
              />

              {form.watch("multiplePregnancy") && (
                <FormField
                  control={form.control}
                  name="numberOfBabies"
                  render={({ field }) => (
                    <FormItem className="w-24">
                      <FormLabel>Number</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          min="2"
                          max="8"
                          {...field}
                          onChange={(e) => field.onChange(parseInt(e.target.value))}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              )}
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Stethoscope className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Healthcare & Birth Plan</h3>
              <p className="text-sm text-muted-foreground">
                Medical care and birth preferences
              </p>
            </div>

            <FormField
              control={form.control}
              name="doctorName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Doctor/OB-GYN Name (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="Dr. Smith" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="hospitalName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Hospital/Birth Center (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="City General Hospital" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="birthPlanType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Birth Plan Preference</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select birth plan type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="natural">Natural birth</SelectItem>
                      <SelectItem value="medicated">Medicated birth</SelectItem>
                      <SelectItem value="cesarean">Planned C-section</SelectItem>
                      <SelectItem value="undecided">Still deciding</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="doula"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Planning to use a doula</FormLabel>
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="midwife"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Working with a midwife</FormLabel>
                    </div>
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="highRiskPregnancy"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      High-risk pregnancy (requires special monitoring)
                    </FormLabel>
                  </div>
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
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Budget Planning</h3>
              <p className="text-sm text-muted-foreground">
                Plan your baby-related expenses
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="budgetTotal"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Total Budget</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="15000"
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
                name="currency"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Currency</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Currency" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="USD">USD</SelectItem>
                        <SelectItem value="EUR">EUR</SelectItem>
                        <SelectItem value="GBP">GBP</SelectItem>
                        <SelectItem value="CAD">CAD</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="space-y-3">
              <FormLabel>Budget Categories</FormLabel>
              <div className="grid grid-cols-2 gap-3">
                <FormField
                  control={form.control}
                  name="budgetCategories.nursery"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm">Nursery Setup</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          {...field}
                          onChange={(e) => field.onChange(parseInt(e.target.value))}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="budgetCategories.clothing"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm">Baby Clothes</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          {...field}
                          onChange={(e) => field.onChange(parseInt(e.target.value))}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="budgetCategories.gear"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm">Baby Gear</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          {...field}
                          onChange={(e) => field.onChange(parseInt(e.target.value))}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="budgetCategories.healthcare"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm">Healthcare</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          {...field}
                          onChange={(e) => field.onChange(parseInt(e.target.value))}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="budgetCategories.childcare"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm">Childcare</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          {...field}
                          onChange={(e) => field.onChange(parseInt(e.target.value))}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="budgetCategories.education"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm">Education Fund</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          {...field}
                          onChange={(e) => field.onChange(parseInt(e.target.value))}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>
        )

      case 5:
        return (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Nursery & Home Preparation</h3>
              <p className="text-sm text-muted-foreground">
                Plan your nursery and home setup
              </p>
            </div>

            <FormField
              control={form.control}
              name="nurseryTheme"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nursery Theme (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Woodland Animals, Space, Floral" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="nurseryStyle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nursery Style</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select nursery style" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="modern">Modern</SelectItem>
                      <SelectItem value="traditional">Traditional</SelectItem>
                      <SelectItem value="minimalist">Minimalist</SelectItem>
                      <SelectItem value="themed">Themed</SelectItem>
                      <SelectItem value="eclectic">Eclectic</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div>
              <FormLabel>Home Preparation Tasks</FormLabel>
              <FormDescription className="mb-3">
                Select tasks you need to complete before baby arrives
              </FormDescription>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {homePreparationOptions.map((task) => (
                  <div key={task} className="flex items-center space-x-2">
                    <Checkbox
                      id={task}
                      checked={homePreparation.includes(task)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setHomePreparation([...homePreparation, task])
                        } else {
                          setHomePreparation(homePreparation.filter(t => t !== task))
                        }
                      }}
                    />
                    <label htmlFor={task} className="text-sm font-normal">
                      {task}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <FormField
              control={form.control}
              name="babyProofingNeeded"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      Baby-proofing will be needed (not first-time parents or other children in home)
                    </FormLabel>
                  </div>
                </FormItem>
              )}
            />
          </div>
        )

      case 6:
        return (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Support System</h3>
              <p className="text-sm text-muted-foreground">
                Identify your support network and resources
              </p>
            </div>

            <div>
              <FormLabel>Family Support</FormLabel>
              <FormDescription className="mb-3">
                Family members who will help with the baby
              </FormDescription>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {supportOptions.slice(0, 5).map((person) => (
                  <div key={person} className="flex items-center space-x-2">
                    <Checkbox
                      id={`family-${person}`}
                      checked={familySupport.includes(person)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setFamilySupport([...familySupport, person])
                        } else {
                          setFamilySupport(familySupport.filter(p => p !== person))
                        }
                      }}
                    />
                    <label htmlFor={`family-${person}`} className="text-sm font-normal">
                      {person}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <FormLabel>Friends Support</FormLabel>
              <FormDescription className="mb-3">
                Friends who will help with the baby
              </FormDescription>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {supportOptions.slice(2, 7).map((person) => (
                  <div key={person} className="flex items-center space-x-2">
                    <Checkbox
                      id={`friends-${person}`}
                      checked={friendsSupport.includes(person)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setFriendsSupport([...friendsSupport, person])
                        } else {
                          setFriendsSupport(friendsSupport.filter(p => p !== person))
                        }
                      }}
                    />
                    <label htmlFor={`friends-${person}`} className="text-sm font-normal">
                      {person}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <FormLabel>Professional Support</FormLabel>
              <FormDescription className="mb-3">
                Professional services and care providers
              </FormDescription>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {supportOptions.slice(4).map((person) => (
                  <div key={person} className="flex items-center space-x-2">
                    <Checkbox
                      id={`professional-${person}`}
                      checked={professionalSupport.includes(person)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setProfessionalSupport([...professionalSupport, person])
                        } else {
                          setProfessionalSupport(professionalSupport.filter(p => p !== person))
                        }
                      }}
                    />
                    <label htmlFor={`professional-${person}`} className="text-sm font-normal">
                      {person}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <FormField
              control={form.control}
              name="parentingClasses"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      Planning to attend parenting/birthing classes
                    </FormLabel>
                  </div>
                </FormItem>
              )}
            />
          </div>
        )

      case 7:
        return (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold">Work & Childcare Planning</h3>
              <p className="text-sm text-muted-foreground">
                Plan for parental leave and childcare arrangements
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="parentOneMaternityLeave"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Maternity Leave (weeks)</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        min="0"
                        max="52"
                        placeholder="12"
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
                name="parentTwoPaternityLeave"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Paternity Leave (weeks)</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        min="0"
                        max="52"
                        placeholder="2"
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
              name="returnToWorkPlan"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Return to Work Plan</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select work plan" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="full-time">Return full-time</SelectItem>
                      <SelectItem value="part-time">Return part-time</SelectItem>
                      <SelectItem value="work-from-home">Work from home</SelectItem>
                      <SelectItem value="career-break">Take extended career break</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="childcareArrangements"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Childcare Arrangements</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select childcare plan" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="daycare">Daycare center</SelectItem>
                      <SelectItem value="nanny">Nanny/babysitter</SelectItem>
                      <SelectItem value="family">Family member care</SelectItem>
                      <SelectItem value="sahp">Stay-at-home parent</SelectItem>
                      <SelectItem value="undecided">Still deciding</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="feedingPlan"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Feeding Plan</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Feeding plan" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="breastfeeding">Breastfeeding</SelectItem>
                        <SelectItem value="bottle">Bottle feeding</SelectItem>
                        <SelectItem value="combination">Combination</SelectItem>
                        <SelectItem value="undecided">Still deciding</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="sleepPhilosophy"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Sleep Philosophy</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Sleep approach" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="co-sleeping">Co-sleeping</SelectItem>
                        <SelectItem value="crib">Crib in nursery</SelectItem>
                        <SelectItem value="bassinet">Bassinet in bedroom</SelectItem>
                        <SelectItem value="flexible">Flexible approach</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        )

      case 8:
        return (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Timeline & Milestones</h3>
              <p className="text-sm text-muted-foreground">
                Important dates and milestones to track
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="babyShowerPlanned"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        Planning a baby shower
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />

              {form.watch("babyShowerPlanned") && (
                <FormField
                  control={form.control}
                  name="babyShowerDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Baby Shower Date</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              )}
            </div>

            <FormField
              control={form.control}
              name="nurseryCompletionGoal"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nursery Completion Goal (Optional)</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormDescription>
                    When do you want the nursery to be ready?
                  </FormDescription>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="hospitalBagPackingDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Hospital Bag Packing Goal (Optional)</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormDescription>
                    When do you want to have your hospital bag ready?
                  </FormDescription>
                </FormItem>
              )}
            />

            <div className="space-y-3">
              <FormLabel>Important Dates (Optional)</FormLabel>
              
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="announcementDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm">Pregnancy Announcement</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="genderRevealDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm">Gender Reveal</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="firstKickDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm">First Kick Felt</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <div className="flex items-center space-x-2">
                  <FormField
                    control={form.control}
                    name="babymoonPlanned"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-sm">
                            Babymoon planned
                          </FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {form.watch("babymoonPlanned") && (
                <FormField
                  control={form.control}
                  name="babymoonDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Babymoon Date</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              )}
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
          <DialogTitle>Baby Planning Setup</DialogTitle>
          <DialogDescription>
            Let's set up your personalized baby planning workspace
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