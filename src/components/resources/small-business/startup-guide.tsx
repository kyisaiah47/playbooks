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
  TrendingUp,
  Clock,
  DollarSign
} from "lucide-react"

export function StartupGuide() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Small Business Startup Guide</h1>
        <p className="text-xl text-muted-foreground">
          Complete roadmap to launching your successful small business
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
            Key statistics and timeline at a glance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">6-12 Months</div>
              <p className="text-sm text-muted-foreground">Average launch timeline</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">$10K-50K</div>
              <p className="text-sm text-muted-foreground">Typical startup capital</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">70%</div>
              <p className="text-sm text-muted-foreground">5-year success rate with planning</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Content Sections */}
      <div className="space-y-6">
        
        {/* Pre-Launch Planning */}
        <Card>
          <CardHeader>
            <CardTitle>Pre-Launch Planning Phase</CardTitle>
            <CardDescription>Foundation building and market validation</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              The planning phase is critical for long-term success. Take time to validate your business idea, understand your market, and create a solid foundation.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Business Idea Validation</h4>
                  <p className="text-sm text-muted-foreground">
                    Test your concept with potential customers, conduct surveys, and validate demand before investing significant resources.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Market Research & Analysis</h4>
                  <p className="text-sm text-muted-foreground">
                    Study your target market size, demographics, buying behavior, and identify key trends that could impact your business.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Competitive Landscape Assessment</h4>
                  <p className="text-sm text-muted-foreground">
                    Analyze direct and indirect competitors, their pricing, strengths, weaknesses, and identify market gaps.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Business Model Development</h4>
                  <p className="text-sm text-muted-foreground">
                    Define how your business will create, deliver, and capture value. Consider revenue streams, cost structure, and key partnerships.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Financial Planning & Projections</h4>
                  <p className="text-sm text-muted-foreground">
                    Create realistic financial forecasts, determine startup costs, and plan for cash flow management in the first few years.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Legal Structure Selection</h4>
                  <p className="text-sm text-muted-foreground">
                    Choose the right business entity (LLC, Corporation, Partnership) based on your needs, liability concerns, and tax implications.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Legal & Administrative Setup */}
        <Card>
          <CardHeader>
            <CardTitle>Legal & Administrative Setup</CardTitle>
            <CardDescription>Essential paperwork and compliance requirements</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            
            {/* Checklist Format */}
            <div className="space-y-3">
              <h4 className="font-semibold">Essential Legal Checklist:</h4>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Business name registration</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">EIN (Tax ID) from IRS</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">State business license</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Industry-specific permits</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Business bank account setup</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Business insurance policies</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Trademark/copyright protection</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Employment law compliance</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Sales tax registration</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Operating agreements/bylaws</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Privacy policy & terms of service</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Accounting system setup</span>
                </div>
              </div>
            </div>

            {/* Warning/Tip Box */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-start gap-2">
                <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-yellow-800">Important Legal Warning</h4>
                  <p className="text-sm text-yellow-700">
                    Requirements vary significantly by state, industry, and business type. Consult with a business attorney and accountant to ensure full compliance with local laws and regulations.
                  </p>
                </div>
              </div>
            </div>

          </CardContent>
        </Card>

        {/* Launch Timeline Process */}
        <Card>
          <CardHeader>
            <CardTitle>Launch Timeline & Milestones</CardTitle>
            <CardDescription>Step-by-step launch process with realistic timeframes</CardDescription>
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
                      <h4 className="font-semibold">Business Planning & Research</h4>
                      <p className="text-sm text-muted-foreground">
                        Complete market research, develop business plan, validate concept with potential customers, and secure initial funding or investment.
                      </p>
                      <Badge variant="outline" className="mt-2">Timeline: 8-12 weeks</Badge>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold">
                      2
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">Legal Formation & Setup</h4>
                      <p className="text-sm text-muted-foreground">
                        Register business entity, obtain necessary licenses and permits, set up business banking, and establish basic legal protections.
                      </p>
                      <Badge variant="outline" className="mt-2">Timeline: 4-6 weeks</Badge>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold">
                      3
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">Brand Development & Digital Presence</h4>
                      <p className="text-sm text-muted-foreground">
                        Create brand identity, build website, establish social media presence, and develop initial marketing materials.
                      </p>
                      <Badge variant="outline" className="mt-2">Timeline: 6-8 weeks</Badge>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold">
                      4
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">Product/Service Development</h4>
                      <p className="text-sm text-muted-foreground">
                        Finalize products or services, establish supply chains, create operational processes, and conduct quality testing.
                      </p>
                      <Badge variant="outline" className="mt-2">Timeline: 8-16 weeks</Badge>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold">
                      5
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">Pre-Launch Marketing</h4>
                      <p className="text-sm text-muted-foreground">
                        Build anticipation, gather early customers, create launch campaign, and establish partnerships or distribution channels.
                      </p>
                      <Badge variant="outline" className="mt-2">Timeline: 4-6 weeks</Badge>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                      🚀
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">Official Launch</h4>
                      <p className="text-sm text-muted-foreground">
                        Execute launch plan, monitor performance, gather customer feedback, and adjust operations based on real-world data.
                      </p>
                      <Badge variant="outline" className="mt-2">Timeline: Ongoing</Badge>
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
              Expert Tips for Success
            </CardTitle>
            <CardDescription>Professional insights from successful entrepreneurs</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-2">Start Small, Think Big</h4>
                <p className="text-sm text-blue-700">
                  Begin with a minimal viable product (MVP) to test the market quickly and cost-effectively. You can always expand and improve based on customer feedback.
                </p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-800 mb-2">Cash Flow is King</h4>
                <p className="text-sm text-green-700">
                  Monitor cash flow closely and maintain 3-6 months of operating expenses in reserve. Many profitable businesses fail due to poor cash flow management.
                </p>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h4 className="font-semibold text-purple-800 mb-2">Build Relationships Early</h4>
                <p className="text-sm text-purple-700">
                  Network with other entrepreneurs, potential customers, and industry experts. Relationships often become your most valuable business asset.
                </p>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <h4 className="font-semibold text-orange-800 mb-2">Focus on Customer Value</h4>
                <p className="text-sm text-orange-700">
                  Always prioritize solving real customer problems over flashy features. Customers will pay for genuine value that makes their lives easier.
                </p>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h4 className="font-semibold text-red-800 mb-2">Plan for Challenges</h4>
                <p className="text-sm text-red-700">
                  Expect setbacks and plan for them. Successful entrepreneurs adapt quickly to changes and view challenges as learning opportunities.
                </p>
              </div>

              <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
                <h4 className="font-semibold text-teal-800 mb-2">Measure What Matters</h4>
                <p className="text-sm text-teal-700">
                  Track key performance indicators (KPIs) that directly relate to business success: customer acquisition cost, lifetime value, and monthly recurring revenue.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>

      {/* Additional Resources */}
      <Card>
        <CardHeader>
          <CardTitle>Additional Resources</CardTitle>
          <CardDescription>Helpful tools and further reading</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">SCORE.org Business Mentorship</h4>
                <p className="text-sm text-muted-foreground">Free business mentoring and resources from experienced entrepreneurs</p>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">SBA.gov Small Business Resources</h4>
                <p className="text-sm text-muted-foreground">Government resources, funding information, and compliance guidance</p>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">LEAN Canvas Template</h4>
                <p className="text-sm text-muted-foreground">One-page business model template for rapid business planning</p>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">Industry Market Research Tools</h4>
                <p className="text-sm text-muted-foreground">IBISWorld, Statista, and other market research platforms</p>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">Business Insurance Comparison</h4>
                <p className="text-sm text-muted-foreground">Compare business insurance quotes from multiple providers</p>
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
          <CardDescription>Use our guided notes to apply what you've learned</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Button>
              Start Business Model Canvas
            </Button>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Download Startup Checklist
            </Button>
          </div>
        </CardContent>
      </Card>

    </div>
  )
}