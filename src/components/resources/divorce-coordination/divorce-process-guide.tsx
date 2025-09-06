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
  Clock,
  Scale,
  FileText,
  Users
} from "lucide-react"

export function DivorceProcessGuide() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Complete Divorce Process Guide</h1>
        <p className="text-xl text-muted-foreground">
          Navigate the divorce process with confidence and understanding
        </p>
        <div className="flex justify-center gap-2">
          <Badge>Essential Guide</Badge>
          <Badge variant="outline">Updated 2024</Badge>
        </div>
      </div>

      {/* Quick Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5" />
            Quick Overview
          </CardTitle>
          <CardDescription>
            Key information about the divorce process
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">6-12 months</div>
              <p className="text-sm text-muted-foreground">Typical Timeline</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">$15,000+</div>
              <p className="text-sm text-muted-foreground">Average Cost</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">5-7 steps</div>
              <p className="text-sm text-muted-foreground">Main Phases</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Types of Divorce */}
      <Card>
        <CardHeader>
          <CardTitle>Types of Divorce</CardTitle>
          <CardDescription>Understanding your options for proceeding</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Uncontested Divorce</h4>
                <p className="text-sm text-muted-foreground">
                  Both parties agree on all major issues. Fastest and most cost-effective option, typically taking 2-4 months.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Mediated Divorce</h4>
                <p className="text-sm text-muted-foreground">
                  Neutral mediator helps couples reach agreements outside of court. More collaborative and less adversarial.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Collaborative Divorce</h4>
                <p className="text-sm text-muted-foreground">
                  Each party has an attorney, but all commit to resolving issues without going to court.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Contested Divorce</h4>
                <p className="text-sm text-muted-foreground">
                  Disagreement on major issues requires court intervention. Most expensive and time-consuming option.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Process Timeline */}
      <Card>
        <CardHeader>
          <CardTitle>Divorce Process Timeline</CardTitle>
          <CardDescription>Step-by-step breakdown of the typical divorce process</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Timeline Steps */}
            <div className="relative">
              <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-border"></div>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold">
                    1
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Filing the Petition</h4>
                    <p className="text-sm text-muted-foreground">
                      One spouse files a petition for divorce with the court. Must meet residency requirements and grounds for divorce.
                    </p>
                    <Badge variant="outline" className="mt-2">Timeline: Week 1</Badge>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold">
                    2
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Service of Process</h4>
                    <p className="text-sm text-muted-foreground">
                      The other spouse must be officially notified of the divorce proceedings through legal service.
                    </p>
                    <Badge variant="outline" className="mt-2">Timeline: Weeks 2-4</Badge>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold">
                    3
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Response and Discovery</h4>
                    <p className="text-sm text-muted-foreground">
                      Response to petition is filed. Discovery phase begins where both parties gather and exchange information.
                    </p>
                    <Badge variant="outline" className="mt-2">Timeline: Months 2-6</Badge>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold">
                    4
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Negotiation and Settlement</h4>
                    <p className="text-sm text-muted-foreground">
                      Parties work to reach agreements on property division, custody, and support through negotiation or mediation.
                    </p>
                    <Badge variant="outline" className="mt-2">Timeline: Months 3-8</Badge>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold">
                    5
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Trial (if necessary)</h4>
                    <p className="text-sm text-muted-foreground">
                      If agreements cannot be reached, the case goes to trial where a judge makes final decisions.
                    </p>
                    <Badge variant="outline" className="mt-2">Timeline: Months 6-12+</Badge>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold">
                    6
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Final Decree</h4>
                    <p className="text-sm text-muted-foreground">
                      Judge issues the final divorce decree, officially ending the marriage and outlining all terms.
                    </p>
                    <Badge variant="outline" className="mt-2">Timeline: Final month</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Legal Concepts */}
      <Card>
        <CardHeader>
          <CardTitle>Essential Legal Concepts</CardTitle>
          <CardDescription>Important terms and concepts you need to understand</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-semibold">Property Division</h4>
              <div className="space-y-2 text-sm">
                <p><strong>Community Property:</strong> Property acquired during marriage is divided equally (9 states)</p>
                <p><strong>Equitable Distribution:</strong> Property is divided fairly but not necessarily equally (41 states)</p>
                <p><strong>Separate Property:</strong> Property owned before marriage or received as gifts/inheritance</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold">Child Custody Types</h4>
              <div className="space-y-2 text-sm">
                <p><strong>Legal Custody:</strong> Right to make important decisions about the child</p>
                <p><strong>Physical Custody:</strong> Where the child lives on a day-to-day basis</p>
                <p><strong>Joint/Sole:</strong> Custody can be joint (shared) or sole (one parent)</p>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">Support Types</h4>
              <div className="space-y-2 text-sm">
                <p><strong>Child Support:</strong> Financial support for children's needs (food, housing, healthcare)</p>
                <p><strong>Spousal Support:</strong> Financial support for lower-earning spouse (alimony)</p>
                <p><strong>Temporary Support:</strong> Support provided during the divorce process</p>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">Grounds for Divorce</h4>
              <div className="space-y-2 text-sm">
                <p><strong>No-Fault:</strong> Irreconcilable differences or irretrievable breakdown</p>
                <p><strong>Fault-Based:</strong> Adultery, abuse, abandonment, or other specific grounds</p>
                <p><strong>Separation:</strong> Living apart for a specified period (varies by state)</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Warning Box */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <div className="flex items-start gap-2">
          <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
          <div>
            <h4 className="font-semibold text-yellow-800">Important Legal Considerations</h4>
            <p className="text-sm text-yellow-700">
              Divorce laws vary significantly by state. This guide provides general information, but you should consult with a qualified attorney in your jurisdiction for advice specific to your situation. Do not make major legal or financial decisions without professional guidance.
            </p>
          </div>
        </div>
      </div>

      {/* Expert Tips Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5 text-yellow-500" />
            Expert Tips for Navigating Divorce
          </CardTitle>
          <CardDescription>Professional insights and best practices</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">Document Everything</h4>
              <p className="text-sm text-blue-700">
                Keep detailed records of all financial accounts, assets, debts, and communications. Create copies of important documents before filing.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-2">Prioritize Children</h4>
              <p className="text-sm text-green-700">
                Focus on what's best for your children. Maintain stability in their routine and avoid putting them in the middle of conflicts.
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h4 className="font-semibold text-purple-800 mb-2">Manage Emotions</h4>
              <p className="text-sm text-purple-700">
                Seek counseling or therapy to help process emotions. Don't make major decisions when you're highly emotional or stressed.
              </p>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h4 className="font-semibold text-orange-800 mb-2">Plan Financially</h4>
              <p className="text-sm text-orange-700">
                Understand your financial situation completely. Create a post-divorce budget and plan for the costs of the divorce process.
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-semibold text-red-800 mb-2">Choose Your Team</h4>
              <p className="text-sm text-red-700">
                Select experienced professionals including attorneys, mediators, and financial advisors who understand your goals.
              </p>
            </div>

            <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
              <h4 className="font-semibold text-teal-800 mb-2">Consider Alternatives</h4>
              <p className="text-sm text-teal-700">
                Explore mediation or collaborative divorce before resorting to litigation. These approaches can save time, money, and emotional stress.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Additional Resources */}
      <Card>
        <CardHeader>
          <CardTitle>Additional Resources</CardTitle>
          <CardDescription>Helpful links and further reading</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">State Divorce Laws Database</h4>
                <p className="text-sm text-muted-foreground">Find specific laws and requirements for your state</p>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">Child Support Guidelines</h4>
                <p className="text-sm text-muted-foreground">Official guidelines for calculating child support by state</p>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">Divorce Support Groups</h4>
                <p className="text-sm text-muted-foreground">Find local and online support groups for people going through divorce</p>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">Children and Divorce Resources</h4>
                <p className="text-sm text-muted-foreground">Tools and information for helping children through divorce</p>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Items */}
      <Card className="bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle className="text-primary">Ready to Get Started?</CardTitle>
          <CardDescription>Use our guided notes to organize your divorce process</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Button>
              Start Guided Notes
            </Button>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Download Process Checklist
            </Button>
          </div>
        </CardContent>
      </Card>

    </div>
  )
}