"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  Loader2,
  Heart,
  Home,
  Briefcase,
  DollarSign,
  Users,
  Star
} from "lucide-react"

interface PartnerApplicationModalProps {
  children: React.ReactNode
}

const professionalDomains = [
  { value: "wedding-planning", label: "Wedding Planning", icon: Heart },
  { value: "real-estate", label: "Real Estate", icon: Home },
  { value: "career-coaching", label: "Career Coaching", icon: Briefcase },
  { value: "financial-advisory", label: "Financial Advisory", icon: DollarSign },
  { value: "life-coaching", label: "Life Coaching", icon: Users },
  { value: "wellness", label: "Wellness & Health", icon: Star },
  { value: "other", label: "Other", icon: Users }
]

const experienceLevels = [
  { value: "1-3", label: "1-3 years" },
  { value: "3-5", label: "3-5 years" },
  { value: "5-10", label: "5-10 years" },
  { value: "10+", label: "10+ years" }
]

export function PartnerApplicationModal({ children }: PartnerApplicationModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    phone: "",
    domain: "",
    experience: "",
    credentials: "",
    templatesProposed: "",
    audience: "",
    motivation: "",
    samples: ""
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))

    setIsSubmitted(true)
    setIsSubmitting(false)

    // Reset after success message
    setTimeout(() => {
      setIsSubmitted(false)
      setIsOpen(false)
      setFormData({
        name: "",
        email: "",
        company: "",
        website: "",
        phone: "",
        domain: "",
        experience: "",
        credentials: "",
        templatesProposed: "",
        audience: "",
        motivation: "",
        samples: ""
      })
    }, 3000)
  }

  const isFormValid = formData.name && formData.email && formData.domain && formData.experience && formData.templatesProposed

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Become a Templata Partner</DialogTitle>
          <DialogDescription>
            Tell us about your expertise and the templates you'd like to create. We'll review your application and get back to you within 3-5 business days.
          </DialogDescription>
        </DialogHeader>

        {isSubmitted ? (
          <div className="flex flex-col items-center py-8 text-center space-y-4">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-xl font-semibold">Application Submitted!</h3>
            <p className="text-muted-foreground max-w-md">
              Thank you for your interest in partnering with Templata. We'll review your application and get back to you within 3-5 business days.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg border-b pb-2">Personal Information</h4>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company">Company/Practice Name</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                    placeholder="Doe Wedding Planning"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website">Website</Label>
                  <Input
                    id="website"
                    value={formData.website}
                    onChange={(e) => handleInputChange("website", e.target.value)}
                    placeholder="https://yourwebsite.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>

            {/* Professional Background */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg border-b pb-2">Professional Background</h4>

              <div className="space-y-2">
                <Label htmlFor="domain">Primary Expertise Area *</Label>
                <Select value={formData.domain} onValueChange={(value) => handleInputChange("domain", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your area of expertise" />
                  </SelectTrigger>
                  <SelectContent>
                    {professionalDomains.map((domain) => {
                      const Icon = domain.icon
                      return (
                        <SelectItem key={domain.value} value={domain.value}>
                          <div className="flex items-center gap-2">
                            <Icon className="w-4 h-4" />
                            {domain.label}
                          </div>
                        </SelectItem>
                      )
                    })}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience">Years of Experience *</Label>
                <Select value={formData.experience} onValueChange={(value) => handleInputChange("experience", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    {experienceLevels.map((level) => (
                      <SelectItem key={level.value} value={level.value}>
                        {level.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="credentials">Professional Credentials & Certifications</Label>
                <Input
                  id="credentials"
                  value={formData.credentials}
                  onChange={(e) => handleInputChange("credentials", e.target.value)}
                  placeholder="CFP, CWP, Licensed Real Estate Agent, etc."
                />
              </div>
            </div>

            {/* Template Contribution */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg border-b pb-2">Template Ideas</h4>

              <div className="space-y-2">
                <Label htmlFor="templatesProposed">What templates would you like to create? *</Label>
                <Textarea
                  id="templatesProposed"
                  value={formData.templatesProposed}
                  onChange={(e) => handleInputChange("templatesProposed", e.target.value)}
                  placeholder="Describe 2-3 specific templates you'd like to contribute (e.g., '60-day wedding planning timeline', 'First-time home buyer checklist', 'Career transition roadmap')"
                  rows={4}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="audience">Target Audience</Label>
                <Textarea
                  id="audience"
                  value={formData.audience}
                  onChange={(e) => handleInputChange("audience", e.target.value)}
                  placeholder="Who would benefit most from your templates? (e.g., 'Couples planning their first wedding', 'Mid-career professionals looking to switch industries')"
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="samples">Sample Content or Portfolio</Label>
                <Textarea
                  id="samples"
                  value={formData.samples}
                  onChange={(e) => handleInputChange("samples", e.target.value)}
                  placeholder="Share links to your existing content, blog posts, guides, or describe similar work you've created"
                  rows={3}
                />
              </div>
            </div>

            {/* Motivation */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg border-b pb-2">Partnership Goals</h4>

              <div className="space-y-2">
                <Label htmlFor="motivation">Why do you want to partner with Templata?</Label>
                <Textarea
                  id="motivation"
                  value={formData.motivation}
                  onChange={(e) => handleInputChange("motivation", e.target.value)}
                  placeholder="What draws you to this partnership opportunity? How do you hope it will benefit your practice and our users?"
                  rows={4}
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button
                type="submit"
                disabled={!isFormValid || isSubmitting}
                className="flex-1"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting Application...
                  </>
                ) : (
                  "Submit Application"
                )}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsOpen(false)}
                disabled={isSubmitting}
                className="flex-1 sm:flex-initial"
              >
                Cancel
              </Button>
            </div>

            <p className="text-xs text-muted-foreground text-center pt-2">
              By submitting this application, you agree to our partnership terms and conditions.
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}