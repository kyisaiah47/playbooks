"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { 
  CheckCircle2,
  AlertTriangle,
  Info,
  Star,
  Download,
  ExternalLink,
  Gavel,
  Shield,
  FileText,
  Clock
} from "lucide-react"

export function LegalChecklist() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Legal Requirements Checklist</h1>
        <p className="text-xl text-muted-foreground">
          Essential legal steps for starting and operating your small business
        </p>
        <div className="flex justify-center gap-2">
          <Badge>Compliance Guide</Badge>
          <Badge variant="outline">State & Federal</Badge>
        </div>
      </div>

      {/* Quick Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5" />
            Legal Compliance Overview
          </CardTitle>
          <CardDescription>
            Time and cost estimates for legal requirements
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">4-8 Weeks</div>
              <p className="text-sm text-muted-foreground">Setup timeline</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">$500-2500</div>
              <p className="text-sm text-muted-foreground">Typical legal costs</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">15+ Items</div>
              <p className="text-sm text-muted-foreground">Required documents</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Content Sections */}
      <div className="space-y-6">
        
        {/* Business Formation */}
        <Card>
          <CardHeader>
            <CardTitle>Business Formation & Registration</CardTitle>
            <CardDescription>Choose and register your business structure</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-3">Business Structure Comparison</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-blue-200">
                      <th className="text-left p-2">Structure</th>
                      <th className="text-left p-2">Liability</th>
                      <th className="text-left p-2">Taxation</th>
                      <th className="text-left p-2">Best For</th>
                    </tr>
                  </thead>
                  <tbody className="text-blue-700">
                    <tr className="border-b border-blue-100">
                      <td className="p-2 font-semibold">Sole Proprietorship</td>
                      <td className="p-2">Personal liability</td>
                      <td className="p-2">Personal tax return</td>
                      <td className="p-2">Single-owner, low-risk</td>
                    </tr>
                    <tr className="border-b border-blue-100">
                      <td className="p-2 font-semibold">LLC</td>
                      <td className="p-2">Limited liability</td>
                      <td className="p-2">Pass-through</td>
                      <td className="p-2">Most small businesses</td>
                    </tr>
                    <tr className="border-b border-blue-100">
                      <td className="p-2 font-semibold">S Corporation</td>
                      <td className="p-2">Limited liability</td>
                      <td className="p-2">Pass-through</td>
                      <td className="p-2">Growing businesses</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-semibold">C Corporation</td>
                      <td className="p-2">Limited liability</td>
                      <td className="p-2">Double taxation</td>
                      <td className="p-2">Large, investor-backed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold">Formation Requirements Checklist:</h4>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Choose and reserve business name</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">File articles of incorporation/organization</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Create operating agreement/bylaws</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Obtain registered agent service</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Apply for business licenses</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Register for state taxes</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Get federal EIN (Tax ID)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Open business bank accounts</span>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-start gap-2">
                <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-yellow-800">State-Specific Requirements</h4>
                  <p className="text-sm text-yellow-700">
                    Each state has different filing requirements, fees, and timelines. Check with your Secretary of State's office for specific requirements.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Licenses & Permits */}
        <Card>
          <CardHeader>
            <CardTitle>Licenses & Permits</CardTitle>
            <CardDescription>Required authorizations for business operations</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Federal Level */}
              <div className="space-y-3">
                <h4 className="font-semibold flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  Federal Requirements
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>EIN (Employer Identification Number) from IRS</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Industry-specific federal licenses (FDA, FCC, etc.)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Federal contractor registration (SAM.gov)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Import/export licenses (if applicable)</span>
                  </div>
                </div>
              </div>

              {/* State Level */}
              <div className="space-y-3">
                <h4 className="font-semibold flex items-center gap-2">
                  <Gavel className="h-4 w-4" />
                  State & Local Requirements
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>General business license</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Professional/occupational licenses</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Sales tax permit/reseller certificate</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Zoning permits for business location</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Signage permits</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Fire department permits</span>
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            <div className="space-y-3">
              <h4 className="font-semibold">Industry-Specific Licenses</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <h5 className="font-semibold text-blue-800">Food & Beverage</h5>
                  <div className="space-y-1 text-muted-foreground ml-2">
                    <p>• Food handler permits</p>
                    <p>• Liquor licenses</p>
                    <p>• Health department permits</p>
                    <p>• Food establishment licenses</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <h5 className="font-semibold text-green-800">Professional Services</h5>
                  <div className="space-y-1 text-muted-foreground ml-2">
                    <p>• Professional certifications</p>
                    <p>• State licensing boards</p>
                    <p>• Continuing education requirements</p>
                    <p>• Malpractice insurance</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <h5 className="font-semibold text-purple-800">Retail</h5>
                  <div className="space-y-1 text-muted-foreground ml-2">
                    <p>• Reseller permits</p>
                    <p>• Sales tax licenses</p>
                    <p>• Vendor permits</p>
                    <p>• Consumer protection compliance</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <h5 className="font-semibold text-orange-800">Construction</h5>
                  <div className="space-y-1 text-muted-foreground ml-2">
                    <p>• Contractor licenses</p>
                    <p>• Building permits</p>
                    <p>• Workers' compensation</p>
                    <p>• Environmental permits</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Employment & Tax Compliance */}
        <Card>
          <CardHeader>
            <CardTitle>Employment & Tax Compliance</CardTitle>
            <CardDescription>Requirements when hiring employees and managing taxes</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Employment */}
              <div className="space-y-3">
                <h4 className="font-semibold">Employment Law Compliance</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>I-9 employment eligibility verification</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Workers' compensation insurance</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Unemployment insurance registration</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>OSHA workplace safety compliance</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Equal opportunity employer policies</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Employee handbook and policies</span>
                  </div>
                </div>
              </div>

              {/* Tax Compliance */}
              <div className="space-y-3">
                <h4 className="font-semibold">Tax Registration & Compliance</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Federal tax ID (EIN) registration</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>State income tax registration</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Sales tax permit and filing</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Payroll tax setup (if employees)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Quarterly tax filing schedule</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Business expense tracking system</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-start gap-2">
                <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-red-800">Employment Law Warning</h4>
                  <p className="text-sm text-red-700">
                    Employment laws vary by state and apply once you hire your first employee. Misclassifying workers as contractors can result in significant penalties.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Insurance & Protection */}
        <Card>
          <CardHeader>
            <CardTitle>Insurance & Legal Protection</CardTitle>
            <CardDescription>Essential coverage and risk management</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Required Insurance */}
              <div className="space-y-3">
                <h4 className="font-semibold flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  Required Insurance
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Workers' compensation (if employees)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Disability insurance (some states)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Commercial auto (if business vehicles)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Professional liability (some industries)</span>
                  </div>
                </div>
              </div>

              {/* Recommended Insurance */}
              <div className="space-y-3">
                <h4 className="font-semibold flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Recommended Coverage
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-3 w-3 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>General liability insurance</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-3 w-3 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>Property insurance for equipment</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-3 w-3 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>Cyber liability insurance</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-3 w-3 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>Business interruption insurance</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-3 w-3 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>Key person life insurance</span>
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            <div className="space-y-3">
              <h4 className="font-semibold">Legal Documents & Contracts</h4>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Operating agreement/partnership agreement</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Terms of service and privacy policy</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Customer contracts and agreements</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Vendor and supplier contracts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Employment agreements and NDAs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Intellectual property protection</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Commercial lease agreements</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Buy-sell agreements (partnerships)</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Compliance Timeline */}
        <Card>
          <CardHeader>
            <CardTitle>Legal Compliance Timeline</CardTitle>
            <CardDescription>When to complete each requirement</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="relative">
                <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-border"></div>
                
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                      1
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">Before Starting Business</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Business structure, name reservation, registered agent
                      </p>
                      <Badge variant="destructive">Critical</Badge>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                      2
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">First 30 Days</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        EIN, business licenses, bank accounts, basic insurance
                      </p>
                      <Badge variant="secondary">High Priority</Badge>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                      3
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">First 90 Days</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Industry permits, zoning approvals, professional licenses
                      </p>
                      <Badge variant="outline">Medium Priority</Badge>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                      4
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">Before Hiring Employees</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Workers' comp, payroll setup, employment policies
                      </p>
                      <Badge variant="outline">As Needed</Badge>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                      ∞
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">Ongoing Maintenance</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        License renewals, compliance updates, annual filings
                      </p>
                      <Badge variant="outline">Continuous</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Pro Tips Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-500" />
              Legal Compliance Best Practices
            </CardTitle>
            <CardDescription>Expert advice for staying compliant</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-2">Get Professional Help</h4>
                <p className="text-sm text-blue-700">
                  Invest in qualified legal and accounting professionals early. The cost of prevention is much lower than the cost of fixing violations.
                </p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-800 mb-2">Keep Detailed Records</h4>
                <p className="text-sm text-green-700">
                  Maintain organized records of all licenses, permits, filings, and renewals. Digital copies with backup are essential.
                </p>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h4 className="font-semibold text-purple-800 mb-2">Set Renewal Reminders</h4>
                <p className="text-sm text-purple-700">
                  Create calendar reminders for license renewals, tax filings, and other recurring compliance requirements. Late fees add up quickly.
                </p>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <h4 className="font-semibold text-orange-800 mb-2">Stay Updated on Changes</h4>
                <p className="text-sm text-orange-700">
                  Subscribe to industry publications and government updates. Laws and regulations change frequently and ignorance isn't a defense.
                </p>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h4 className="font-semibold text-red-800 mb-2">Don't Cut Corners</h4>
                <p className="text-sm text-red-700">
                  Skipping required licenses or permits can result in fines, business closure, and personal liability. Compliance is not optional.
                </p>
              </div>

              <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
                <h4 className="font-semibold text-teal-800 mb-2">Plan for Growth</h4>
                <p className="text-sm text-teal-700">
                  Consider future compliance needs when making business decisions. Adding employees or expanding locations triggers new requirements.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>

      {/* Additional Resources */}
      <Card>
        <CardHeader>
          <CardTitle>Legal Compliance Resources</CardTitle>
          <CardDescription>Government agencies and professional services</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">SBA Legal Requirements Guide</h4>
                <p className="text-sm text-muted-foreground">Official Small Business Administration compliance checklist</p>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">Business.gov Licensing Guide</h4>
                <p className="text-sm text-muted-foreground">Federal government business licensing and permit database</p>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">State Secretary of State Offices</h4>
                <p className="text-sm text-muted-foreground">State-specific business registration and compliance information</p>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">OSHA Small Business Resources</h4>
                <p className="text-sm text-muted-foreground">Workplace safety requirements and consultation services</p>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">Legal Compliance Checklist Template</h4>
                <p className="text-sm text-muted-foreground">Downloadable checklist customized for your business type</p>
              </div>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Items */}
      <Card className="bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle className="text-primary">Ready for Legal Compliance?</CardTitle>
          <CardDescription>Use our guided notes to track your legal requirements</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Button>
              Start Legal Structure Notes
            </Button>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Download Compliance Checklist
            </Button>
          </div>
        </CardContent>
      </Card>

    </div>
  )
}