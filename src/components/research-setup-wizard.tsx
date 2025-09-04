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
import { ResearchData } from "@/contexts/research-context"
import { GraduationCap, ArrowLeft, ArrowRight, Check } from "lucide-react"

interface ResearchSetupWizardProps {
  isOpen: boolean
  onClose: () => void
  onComplete: (data: ResearchData) => void
  initialData?: ResearchData
}

const formSchema = z.object({
  projectTitle: z.string().min(1, "Project title is required"),
  researchField: z.string().min(1, "Research field is required"),
  projectType: z.enum(["dissertation", "thesis", "journal-article", "grant-proposal", "conference-paper", "book"]),
  timeline: z.string().min(1, "Timeline is required"),
  teamSize: z.number().min(1, "Team size must be at least 1"),
  institution: z.string().min(1, "Institution is required"),
  supervisor: z.string().optional(),
  budget: z.number().optional(),
  methodology: z.array(z.string()),
  objectives: z.array(z.string()),
  expectedOutcomes: z.array(z.string()),
})

const methodologies = [
  "Qualitative Research",
  "Quantitative Research",
  "Mixed Methods",
  "Experimental Design",
  "Case Study",
  "Survey Research",
  "Ethnography",
  "Content Analysis",
  "Statistical Analysis",
  "Literature Review",
  "Meta-Analysis",
  "Grounded Theory"
]

export function ResearchSetupWizard({ isOpen, onClose, onComplete, initialData }: ResearchSetupWizardProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [objectives, setObjectives] = useState<string[]>(initialData?.objectives || [])
  const [expectedOutcomes, setExpectedOutcomes] = useState<string[]>(initialData?.expectedOutcomes || [])
  const totalSteps = 4

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      projectTitle: initialData?.projectTitle || "",
      researchField: initialData?.researchField || "",
      projectType: initialData?.projectType || "journal-article",
      timeline: initialData?.timeline || "12 months",
      teamSize: initialData?.teamSize || 1,
      institution: initialData?.institution || "",
      supervisor: initialData?.supervisor || "",
      budget: initialData?.budget || 0,
      methodology: initialData?.methodology || [],
      objectives: initialData?.objectives || [],
      expectedOutcomes: initialData?.expectedOutcomes || [],
    },
  })

  // Reset form and state when dialog opens with new data
  React.useEffect(() => {
    if (isOpen && initialData) {
      setObjectives(initialData.objectives || [])
      setExpectedOutcomes(initialData.expectedOutcomes || [])
      setCurrentStep(1)
      form.reset({
        projectTitle: initialData.projectTitle || "",
        researchField: initialData.researchField || "",
        projectType: initialData.projectType || "journal-article",
        timeline: initialData.timeline || "12 months",
        teamSize: initialData.teamSize || 1,
        institution: initialData.institution || "",
        supervisor: initialData.supervisor || "",
        budget: initialData.budget || 0,
        methodology: initialData.methodology || [],
        objectives: initialData.objectives || [],
        expectedOutcomes: initialData.expectedOutcomes || [],
      })
    }
  }, [isOpen, initialData, form])

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const data: ResearchData = {
      ...values,
      objectives,
      expectedOutcomes,
      budget: values.budget || 0,
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

  const addObjective = () => {
    setObjectives([...objectives, ""])
  }

  const updateObjective = (index: number, value: string) => {
    const updated = [...objectives]
    updated[index] = value
    setObjectives(updated)
  }

  const removeObjective = (index: number) => {
    setObjectives(objectives.filter((_, i) => i !== index))
  }

  const addOutcome = () => {
    setExpectedOutcomes([...expectedOutcomes, ""])
  }

  const updateOutcome = (index: number, value: string) => {
    const updated = [...expectedOutcomes]
    updated[index] = value
    setExpectedOutcomes(updated)
  }

  const removeOutcome = (index: number) => {
    setExpectedOutcomes(expectedOutcomes.filter((_, i) => i !== index))
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Basic Information</h3>
              <p className="text-sm text-muted-foreground">
                Let&apos;s start with the fundamentals of your research project
              </p>
            </div>

            <FormField
              control={form.control}
              name="projectTitle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your research project title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="researchField"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Research Field</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Computer Science, Psychology, Biology" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="projectType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="dissertation">Dissertation</SelectItem>
                      <SelectItem value="thesis">Thesis</SelectItem>
                      <SelectItem value="journal-article">Journal Article</SelectItem>
                      <SelectItem value="grant-proposal">Grant Proposal</SelectItem>
                      <SelectItem value="conference-paper">Conference Paper</SelectItem>
                      <SelectItem value="book">Book</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="institution"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Institution</FormLabel>
                  <FormControl>
                    <Input placeholder="Your university or research institution" {...field} />
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
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold">Project Details</h3>
              <p className="text-sm text-muted-foreground">
                Tell us more about your research timeline and team
              </p>
            </div>

            <FormField
              control={form.control}
              name="timeline"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Timeline</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="3 months">3 months</SelectItem>
                      <SelectItem value="6 months">6 months</SelectItem>
                      <SelectItem value="12 months">12 months</SelectItem>
                      <SelectItem value="18 months">18 months</SelectItem>
                      <SelectItem value="24 months">24 months</SelectItem>
                      <SelectItem value="36 months">36 months</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="teamSize"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Team Size</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min="1"
                      placeholder="Number of team members"
                      {...field}
                      onChange={(e) => field.onChange(parseInt(e.target.value))}
                    />
                  </FormControl>
                  <FormDescription>
                    Include yourself and any collaborators
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="supervisor"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Supervisor/Advisor (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="Name of your research supervisor" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="budget"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Budget (Optional)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min="0"
                      placeholder="Research budget in USD"
                      {...field}
                      onChange={(e) => field.onChange(parseInt(e.target.value))}
                    />
                  </FormControl>
                  <FormDescription>
                    Estimated budget for the entire project
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
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold">Methodology</h3>
              <p className="text-sm text-muted-foreground">
                Select the research methods you plan to use
              </p>
            </div>

            <FormField
              control={form.control}
              name="methodology"
              render={() => (
                <FormItem>
                  <FormLabel>Research Methods</FormLabel>
                  <div className="grid grid-cols-2 gap-2">
                    {methodologies.map((method) => (
                      <FormField
                        key={method}
                        control={form.control}
                        name="methodology"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={method}
                              className="flex flex-row items-start space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(method)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, method])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== method
                                          )
                                        )
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="text-sm font-normal">
                                {method}
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
          </div>
        )

      case 4:
        return (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold">Objectives & Outcomes</h3>
              <p className="text-sm text-muted-foreground">
                Define your research objectives and expected outcomes
              </p>
            </div>

            <div>
              <FormLabel>Research Objectives</FormLabel>
              <FormDescription className="mb-3">
                What are the main goals of your research?
              </FormDescription>
              {objectives.map((objective, index) => (
                <div key={index} className="flex gap-2 mb-2">
                  <Input
                    placeholder={`Objective ${index + 1}`}
                    value={objective}
                    onChange={(e) => updateObjective(index, e.target.value)}
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => removeObjective(index)}
                  >
                    Remove
                  </Button>
                </div>
              ))}
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={addObjective}
                className="w-full"
              >
                Add Objective
              </Button>
            </div>

            <div>
              <FormLabel>Expected Outcomes</FormLabel>
              <FormDescription className="mb-3">
                What do you expect to achieve or discover?
              </FormDescription>
              {expectedOutcomes.map((outcome, index) => (
                <div key={index} className="flex gap-2 mb-2">
                  <Input
                    placeholder={`Expected outcome ${index + 1}`}
                    value={outcome}
                    onChange={(e) => updateOutcome(index, e.target.value)}
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => removeOutcome(index)}
                  >
                    Remove
                  </Button>
                </div>
              ))}
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={addOutcome}
                className="w-full"
              >
                Add Expected Outcome
              </Button>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Research Project Setup</DialogTitle>
          <DialogDescription>
            Let&apos;s set up your academic research project workspace
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