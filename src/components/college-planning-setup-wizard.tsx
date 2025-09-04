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
import { CollegePlanningData } from "@/contexts/college-planning-context"
import { GraduationCap, ArrowLeft, ArrowRight, Check, User, BookOpen, MapPin, DollarSign, Trophy, Target, FileText, Calendar } from "lucide-react"

interface CollegePlanningSetupWizardProps {
  isOpen: boolean
  onClose: () => void
  onComplete: (data: CollegePlanningData) => void
  initialData?: CollegePlanningData
}

const formSchema = z.object({
  studentName: z.string().min(1, "Student name is required"),
  graduationYear: z.number().min(2024, "Graduation year must be 2024 or later"),
  currentGPA: z.number().min(0).max(4.0, "GPA must be between 0 and 4.0"),
  targetGPA: z.number().min(0).max(4.0, "Target GPA must be between 0 and 4.0"),
  intendedMajor: z.string().min(1, "Intended major is required"),
  alternativeMajors: z.array(z.string()),
  academicInterests: z.array(z.string()),
  careerGoals: z.string().min(10, "Career goals should be at least 10 characters"),
  preferredSchoolTypes: z.array(z.enum(["public", "private", "liberal-arts", "research", "community", "technical"])),
  preferredSchoolSizes: z.array(z.enum(["small", "medium", "large"])),
  preferredLocations: z.array(z.string()),
  maxDistanceFromHome: z.number().min(0, "Distance must be positive"),
  familyIncomeRange: z.enum(["under-30k", "30k-50k", "50k-75k", "75k-100k", "100k-150k", "over-150k"]),
  expectedFamilyContribution: z.number().min(0, "Contribution must be positive"),
  savings529Amount: z.number().min(0, "Savings amount must be positive"),
  needFinancialAid: z.boolean(),
  meritScholarshipGoals: z.boolean(),
  standardizedTests: z.object({
    sat: z.object({
      totalScore: z.number().min(0).max(1600),
      math: z.number().min(0).max(800),
      readingWriting: z.number().min(0).max(800),
      taken: z.boolean()
    }),
    act: z.object({
      compositeScore: z.number().min(0).max(36),
      taken: z.boolean()
    }),
    ap: z.object({
      coursesTaken: z.array(z.string()),
      coursesPlanned: z.array(z.string())
    })
  }),
  sports: z.array(z.string()),
  clubs: z.array(z.string()),
  volunteering: z.array(z.string()),
  workExperience: z.array(z.string()),
  leadership: z.array(z.string()),
  awards: z.array(z.string()),
  maxApplications: z.number().min(1, "Must plan at least 1 application").max(30, "Maximum 30 applications recommended"),
  reachSchools: z.number().min(0),
  matchSchools: z.number().min(0),
  safetySchools: z.number().min(0),
  applicationDeadlines: z.object({
    earlyDecision: z.boolean(),
    earlyAction: z.boolean(),
    regularDecision: z.boolean()
  }),
  campusVisitPlan: z.enum(["virtual-only", "in-person-only", "hybrid", "none"]),
  hasCollegeCounselor: z.boolean(),
  parentInvolvement: z.enum(["high", "medium", "low"]),
  peerSupport: z.boolean(),
  personalStatement: z.string().min(20, "Personal statement should be at least 20 characters"),
  essayTopics: z.array(z.string()),
  firstGeneration: z.boolean(),
  underrepresentedMinority: z.boolean(),
  internationalStudent: z.boolean(),
  legacyStatus: z.array(z.string()),
  specialTalents: z.array(z.string())
})

const schoolTypeOptions = [
  { value: "public", label: "Public Universities" },
  { value: "private", label: "Private Universities" },
  { value: "liberal-arts", label: "Liberal Arts Colleges" },
  { value: "research", label: "Research Universities" },
  { value: "community", label: "Community Colleges" },
  { value: "technical", label: "Technical/Trade Schools" }
]

const schoolSizeOptions = [
  { value: "small", label: "Small (under 5,000 students)" },
  { value: "medium", label: "Medium (5,000-15,000 students)" },
  { value: "large", label: "Large (over 15,000 students)" }
]

export function CollegePlanningSetupWizard({ isOpen, onClose, onComplete, initialData }: CollegePlanningSetupWizardProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [alternativeMajors, setAlternativeMajors] = useState<string[]>(initialData?.alternativeMajors || [])
  const [academicInterests, setAcademicInterests] = useState<string[]>(initialData?.academicInterests || [])
  const [preferredLocations, setPreferredLocations] = useState<string[]>(initialData?.preferredLocations || [])
  const [sports, setSports] = useState<string[]>(initialData?.sports || [])
  const [clubs, setClubs] = useState<string[]>(initialData?.clubs || [])
  const [volunteering, setVolunteering] = useState<string[]>(initialData?.volunteering || [])
  const [workExperience, setWorkExperience] = useState<string[]>(initialData?.workExperience || [])
  const [leadership, setLeadership] = useState<string[]>(initialData?.leadership || [])
  const [awards, setAwards] = useState<string[]>(initialData?.awards || [])
  const [apCoursesTaken, setApCoursesTaken] = useState<string[]>(initialData?.standardizedTests.ap.coursesTaken || [])
  const [apCoursesPlanned, setApCoursesPlanned] = useState<string[]>(initialData?.standardizedTests.ap.coursesPlanned || [])
  const [essayTopics, setEssayTopics] = useState<string[]>(initialData?.essayTopics || [])
  const [legacyStatus, setLegacyStatus] = useState<string[]>(initialData?.legacyStatus || [])
  const [specialTalents, setSpecialTalents] = useState<string[]>(initialData?.specialTalents || [])
  const totalSteps = 8

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      studentName: initialData?.studentName || "",
      graduationYear: initialData?.graduationYear || new Date().getFullYear() + 1,
      currentGPA: initialData?.currentGPA || 3.5,
      targetGPA: initialData?.targetGPA || 3.8,
      intendedMajor: initialData?.intendedMajor || "",
      alternativeMajors: initialData?.alternativeMajors || [],
      academicInterests: initialData?.academicInterests || [],
      careerGoals: initialData?.careerGoals || "",
      preferredSchoolTypes: initialData?.preferredSchoolTypes || [],
      preferredSchoolSizes: initialData?.preferredSchoolSizes || [],
      preferredLocations: initialData?.preferredLocations || [],
      maxDistanceFromHome: initialData?.maxDistanceFromHome || 500,
      familyIncomeRange: initialData?.familyIncomeRange || "50k-75k",
      expectedFamilyContribution: initialData?.expectedFamilyContribution || 10000,
      savings529Amount: initialData?.savings529Amount || 0,
      needFinancialAid: initialData?.needFinancialAid ?? true,
      meritScholarshipGoals: initialData?.meritScholarshipGoals ?? true,
      standardizedTests: initialData?.standardizedTests || {
        sat: { totalScore: 0, math: 0, readingWriting: 0, taken: false },
        act: { compositeScore: 0, taken: false },
        ap: { coursesTaken: [], coursesPlanned: [] }
      },
      sports: initialData?.sports || [],
      clubs: initialData?.clubs || [],
      volunteering: initialData?.volunteering || [],
      workExperience: initialData?.workExperience || [],
      leadership: initialData?.leadership || [],
      awards: initialData?.awards || [],
      maxApplications: initialData?.maxApplications || 12,
      reachSchools: initialData?.reachSchools || 4,
      matchSchools: initialData?.matchSchools || 6,
      safetySchools: initialData?.safetySchools || 2,
      applicationDeadlines: initialData?.applicationDeadlines || {
        earlyDecision: false,
        earlyAction: true,
        regularDecision: true
      },
      campusVisitPlan: initialData?.campusVisitPlan || "hybrid",
      hasCollegeCounselor: initialData?.hasCollegeCounselor ?? false,
      parentInvolvement: initialData?.parentInvolvement || "medium",
      peerSupport: initialData?.peerSupport ?? true,
      personalStatement: initialData?.personalStatement || "",
      essayTopics: initialData?.essayTopics || [],
      firstGeneration: initialData?.firstGeneration ?? false,
      underrepresentedMinority: initialData?.underrepresentedMinority ?? false,
      internationalStudent: initialData?.internationalStudent ?? false,
      legacyStatus: initialData?.legacyStatus || [],
      specialTalents: initialData?.specialTalents || []
    },
  })

  React.useEffect(() => {
    if (isOpen && initialData) {
      setAlternativeMajors(initialData.alternativeMajors || [])
      setAcademicInterests(initialData.academicInterests || [])
      setPreferredLocations(initialData.preferredLocations || [])
      setSports(initialData.sports || [])
      setClubs(initialData.clubs || [])
      setVolunteering(initialData.volunteering || [])
      setWorkExperience(initialData.workExperience || [])
      setLeadership(initialData.leadership || [])
      setAwards(initialData.awards || [])
      setApCoursesTaken(initialData.standardizedTests.ap.coursesTaken || [])
      setApCoursesPlanned(initialData.standardizedTests.ap.coursesPlanned || [])
      setEssayTopics(initialData.essayTopics || [])
      setLegacyStatus(initialData.legacyStatus || [])
      setSpecialTalents(initialData.specialTalents || [])
      setCurrentStep(1)
      form.reset(initialData)
    }
  }, [isOpen, initialData, form])

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const data: CollegePlanningData = {
      ...values,
      alternativeMajors,
      academicInterests,
      preferredLocations,
      sports,
      clubs,
      volunteering,
      workExperience,
      leadership,
      awards,
      standardizedTests: {
        ...values.standardizedTests,
        ap: {
          coursesTaken: apCoursesTaken,
          coursesPlanned: apCoursesPlanned
        }
      },
      essayTopics,
      legacyStatus,
      specialTalents
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

  const addToArray = (item: string, array: string[], setArray: (arr: string[]) => void) => {
    if (item.trim() && !array.includes(item.trim())) {
      setArray([...array, item.trim()])
    }
  }

  const removeFromArray = (item: string, array: string[], setArray: (arr: string[]) => void) => {
    setArray(array.filter(i => i !== item))
  }

  const renderArrayInput = (
    label: string,
    description: string,
    placeholder: string,
    array: string[],
    setArray: (arr: string[]) => void
  ) => (
    <div>
      <FormLabel>{label}</FormLabel>
      <FormDescription className="mb-3">{description}</FormDescription>
      <div className="flex flex-wrap gap-2 mb-2">
        {array.map((item, index) => (
          <div key={index} className="flex items-center bg-secondary text-secondary-foreground px-2 py-1 rounded text-sm">
            {item}
            <button
              type="button"
              onClick={() => removeFromArray(item, array, setArray)}
              className="ml-2 text-muted-foreground hover:text-foreground"
            >
              ×
            </button>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <Input
          placeholder={placeholder}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault()
              addToArray(e.currentTarget.value, array, setArray)
              e.currentTarget.value = ''
            }
          }}
        />
        <Button
          type="button"
          variant="outline"
          onClick={(e) => {
            const input = e.currentTarget.previousElementSibling as HTMLInputElement
            addToArray(input.value, array, setArray)
            input.value = ''
          }}
        >
          Add
        </Button>
      </div>
    </div>
  )

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Student Information</h3>
              <p className="text-sm text-muted-foreground">
                Basic details about the student and academic goals
              </p>
            </div>

            <FormField
              control={form.control}
              name="studentName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Student Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter student's full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="graduationYear"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Expected Graduation Year</FormLabel>
                  <FormControl>
                    <Input 
                      type="number"
                      min={2024}
                      max={2030}
                      placeholder="2025"
                      {...field}
                      onChange={(e) => field.onChange(parseInt(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="currentGPA"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Current GPA</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        step="0.1"
                        min="0"
                        max="4.0"
                        placeholder="3.5"
                        {...field}
                        onChange={(e) => field.onChange(parseFloat(e.target.value))}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="targetGPA"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Target GPA</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        step="0.1"
                        min="0"
                        max="4.0"
                        placeholder="3.8"
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
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Academic Interests</h3>
              <p className="text-sm text-muted-foreground">
                Define your academic interests and career goals
              </p>
            </div>

            <FormField
              control={form.control}
              name="intendedMajor"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Intended Major</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Computer Science, Biology, English" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {renderArrayInput(
              "Alternative Majors (Optional)",
              "Other majors you're considering",
              "Add an alternative major",
              alternativeMajors,
              setAlternativeMajors
            )}

            {renderArrayInput(
              "Academic Interests",
              "Subjects and topics you're passionate about",
              "Add an academic interest",
              academicInterests,
              setAcademicInterests
            )}

            <FormField
              control={form.control}
              name="careerGoals"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Career Goals</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe your career aspirations and what you hope to achieve..."
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

      case 3:
        return (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">School Preferences</h3>
              <p className="text-sm text-muted-foreground">
                What type of colleges are you interested in?
              </p>
            </div>

            <FormField
              control={form.control}
              name="preferredSchoolTypes"
              render={() => (
                <FormItem>
                  <FormLabel>Preferred School Types (Select all that apply)</FormLabel>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {schoolTypeOptions.map((type) => (
                      <FormField
                        key={type.value}
                        control={form.control}
                        name="preferredSchoolTypes"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={type.value}
                              className="flex flex-row items-start space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(type.value as any)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, type.value])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== type.value
                                          )
                                        )
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="text-sm font-normal">
                                {type.label}
                              </FormLabel>
                            </FormItem>
                          )
                        }}
                      />
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="preferredSchoolSizes"
              render={() => (
                <FormItem>
                  <FormLabel>Preferred School Sizes (Select all that apply)</FormLabel>
                  <div className="space-y-2 mt-2">
                    {schoolSizeOptions.map((size) => (
                      <FormField
                        key={size.value}
                        control={form.control}
                        name="preferredSchoolSizes"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={size.value}
                              className="flex flex-row items-start space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(size.value as any)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, size.value])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== size.value
                                          )
                                        )
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="text-sm font-normal">
                                {size.label}
                              </FormLabel>
                            </FormItem>
                          )
                        }}
                      />
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            {renderArrayInput(
              "Preferred Locations",
              "Cities, states, or regions where you'd like to attend college",
              "Add a location",
              preferredLocations,
              setPreferredLocations
            )}

            <FormField
              control={form.control}
              name="maxDistanceFromHome"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Maximum Distance From Home (miles)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min="0"
                      placeholder="500"
                      {...field}
                      onChange={(e) => field.onChange(parseInt(e.target.value))}
                    />
                  </FormControl>
                  <FormDescription>
                    How far are you willing to go from home? (0 for no limit)
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
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Financial Information</h3>
              <p className="text-sm text-muted-foreground">
                Help us understand your financial situation for college planning
              </p>
            </div>

            <FormField
              control={form.control}
              name="familyIncomeRange"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Family Income Range</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select income range" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="under-30k">Under $30,000</SelectItem>
                      <SelectItem value="30k-50k">$30,000 - $50,000</SelectItem>
                      <SelectItem value="50k-75k">$50,000 - $75,000</SelectItem>
                      <SelectItem value="75k-100k">$75,000 - $100,000</SelectItem>
                      <SelectItem value="100k-150k">$100,000 - $150,000</SelectItem>
                      <SelectItem value="over-150k">Over $150,000</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="expectedFamilyContribution"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Expected Family Contribution (per year)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min="0"
                      placeholder="10000"
                      {...field}
                      onChange={(e) => field.onChange(parseInt(e.target.value))}
                    />
                  </FormControl>
                  <FormDescription>
                    How much can your family contribute annually toward college costs?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="savings529Amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>529 College Savings (Optional)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min="0"
                      placeholder="0"
                      {...field}
                      onChange={(e) => field.onChange(parseInt(e.target.value))}
                    />
                  </FormControl>
                  <FormDescription>
                    Total amount currently in 529 college savings plans
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="space-y-3">
              <FormField
                control={form.control}
                name="needFinancialAid"
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
                        I will need financial aid to attend college
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="meritScholarshipGoals"
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
                        I want to pursue merit-based scholarships
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />
            </div>
          </div>
        )

      case 5:
        return (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Academic Profile</h3>
              <p className="text-sm text-muted-foreground">
                Standardized test scores and academic achievements
              </p>
            </div>

            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <h4 className="font-medium mb-3">SAT Scores</h4>
                <FormField
                  control={form.control}
                  name="standardizedTests.sat.taken"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 mb-3">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel>I have taken the SAT</FormLabel>
                    </FormItem>
                  )}
                />
                
                {form.watch("standardizedTests.sat.taken") && (
                  <div className="grid grid-cols-3 gap-3">
                    <FormField
                      control={form.control}
                      name="standardizedTests.sat.totalScore"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Total Score</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              min="400"
                              max="1600"
                              placeholder="1200"
                              {...field}
                              onChange={(e) => field.onChange(parseInt(e.target.value))}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="standardizedTests.sat.math"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Math</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              min="200"
                              max="800"
                              placeholder="600"
                              {...field}
                              onChange={(e) => field.onChange(parseInt(e.target.value))}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="standardizedTests.sat.readingWriting"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Reading & Writing</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              min="200"
                              max="800"
                              placeholder="600"
                              {...field}
                              onChange={(e) => field.onChange(parseInt(e.target.value))}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                )}
              </div>

              <div className="border rounded-lg p-4">
                <h4 className="font-medium mb-3">ACT Scores</h4>
                <FormField
                  control={form.control}
                  name="standardizedTests.act.taken"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 mb-3">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel>I have taken the ACT</FormLabel>
                    </FormItem>
                  )}
                />
                
                {form.watch("standardizedTests.act.taken") && (
                  <FormField
                    control={form.control}
                    name="standardizedTests.act.compositeScore"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Composite Score</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            min="1"
                            max="36"
                            placeholder="24"
                            {...field}
                            onChange={(e) => field.onChange(parseInt(e.target.value))}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                )}
              </div>

              <div className="space-y-4">
                {renderArrayInput(
                  "AP Courses Taken",
                  "Advanced Placement courses you've completed",
                  "Add AP course",
                  apCoursesTaken,
                  setApCoursesTaken
                )}

                {renderArrayInput(
                  "AP Courses Planned",
                  "Advanced Placement courses you plan to take",
                  "Add planned AP course",
                  apCoursesPlanned,
                  setApCoursesPlanned
                )}
              </div>
            </div>
          </div>
        )

      case 6:
        return (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Extracurricular Activities</h3>
              <p className="text-sm text-muted-foreground">
                Showcase your activities, achievements, and experiences
              </p>
            </div>

            <div className="space-y-6">
              {renderArrayInput(
                "Sports & Athletics",
                "Sports teams, individual sports, or athletic activities",
                "Add a sport or athletic activity",
                sports,
                setSports
              )}

              {renderArrayInput(
                "Clubs & Organizations",
                "School clubs, student organizations, or community groups",
                "Add a club or organization",
                clubs,
                setClubs
              )}

              {renderArrayInput(
                "Volunteer Work",
                "Community service, volunteer organizations, or charitable work",
                "Add volunteer experience",
                volunteering,
                setVolunteering
              )}

              {renderArrayInput(
                "Work Experience",
                "Part-time jobs, internships, or work experience",
                "Add work experience",
                workExperience,
                setWorkExperience
              )}

              {renderArrayInput(
                "Leadership Roles",
                "Leadership positions in any organization or activity",
                "Add leadership role",
                leadership,
                setLeadership
              )}

              {renderArrayInput(
                "Awards & Honors",
                "Academic awards, competition wins, or special recognition",
                "Add award or honor",
                awards,
                setAwards
              )}
            </div>
          </div>
        )

      case 7:
        return (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Application Strategy</h3>
              <p className="text-sm text-muted-foreground">
                Plan your college application approach and timeline
              </p>
            </div>

            <FormField
              control={form.control}
              name="maxApplications"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Maximum Number of Applications</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min="1"
                      max="30"
                      placeholder="12"
                      {...field}
                      onChange={(e) => field.onChange(parseInt(e.target.value))}
                    />
                  </FormControl>
                  <FormDescription>
                    How many colleges do you plan to apply to?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name="reachSchools"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Reach Schools</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        min="0"
                        placeholder="4"
                        {...field}
                        onChange={(e) => field.onChange(parseInt(e.target.value))}
                      />
                    </FormControl>
                    <FormDescription className="text-xs">
                      Competitive schools
                    </FormDescription>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="matchSchools"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Match Schools</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        min="0"
                        placeholder="6"
                        {...field}
                        onChange={(e) => field.onChange(parseInt(e.target.value))}
                      />
                    </FormControl>
                    <FormDescription className="text-xs">
                      Good fit schools
                    </FormDescription>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="safetySchools"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Safety Schools</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        min="0"
                        placeholder="2"
                        {...field}
                        onChange={(e) => field.onChange(parseInt(e.target.value))}
                      />
                    </FormControl>
                    <FormDescription className="text-xs">
                      Likely admission
                    </FormDescription>
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="applicationDeadlines"
              render={() => (
                <FormItem>
                  <FormLabel>Application Types (Select all that apply)</FormLabel>
                  <div className="space-y-2 mt-2">
                    <FormField
                      control={form.control}
                      name="applicationDeadlines.earlyDecision"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <FormLabel className="text-sm font-normal">
                            Early Decision (binding commitment)
                          </FormLabel>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="applicationDeadlines.earlyAction"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <FormLabel className="text-sm font-normal">
                            Early Action (non-binding)
                          </FormLabel>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="applicationDeadlines.regularDecision"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <FormLabel className="text-sm font-normal">
                            Regular Decision
                          </FormLabel>
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="campusVisitPlan"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Campus Visit Plan</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="How do you plan to visit colleges?" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="virtual-only">Virtual visits only</SelectItem>
                      <SelectItem value="in-person-only">In-person visits only</SelectItem>
                      <SelectItem value="hybrid">Mix of virtual and in-person</SelectItem>
                      <SelectItem value="none">No planned visits</SelectItem>
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
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Personal Information & Support</h3>
              <p className="text-sm text-muted-foreground">
                Final details about your background and support system
              </p>
            </div>

            <FormField
              control={form.control}
              name="personalStatement"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Personal Statement / Bio</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Write a brief personal statement about yourself, your goals, and what makes you unique..."
                      className="min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    This will help guide your college essays and applications
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {renderArrayInput(
              "Essay Topics (Optional)",
              "Potential essay topics or themes you'd like to explore",
              "Add essay topic",
              essayTopics,
              setEssayTopics
            )}

            <div className="space-y-3">
              <FormField
                control={form.control}
                name="firstGeneration"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel>
                      I am a first-generation college student
                    </FormLabel>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="underrepresentedMinority"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel>
                      I identify as an underrepresented minority
                    </FormLabel>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="internationalStudent"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel>
                      I am an international student
                    </FormLabel>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="hasCollegeCounselor"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel>
                      I have access to a college counselor
                    </FormLabel>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="peerSupport"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel>
                      I have peer support for the college process
                    </FormLabel>
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="parentInvolvement"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Parent/Guardian Involvement Level</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="How involved are your parents/guardians?" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="high">High - Very involved in the process</SelectItem>
                      <SelectItem value="medium">Medium - Some guidance and support</SelectItem>
                      <SelectItem value="low">Low - Mostly independent</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {renderArrayInput(
              "Legacy Status (Optional)",
              "Schools where family members attended",
              "Add school with family connection",
              legacyStatus,
              setLegacyStatus
            )}

            {renderArrayInput(
              "Special Talents (Optional)",
              "Unique talents, skills, or abilities that set you apart",
              "Add special talent",
              specialTalents,
              setSpecialTalents
            )}
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
          <DialogTitle>College Planning Setup</DialogTitle>
          <DialogDescription>
            Let's create your personalized college planning workspace
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