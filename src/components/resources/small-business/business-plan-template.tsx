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
  FileText,
  Target,
  BarChart3
} from "lucide-react"

export function BusinessPlanTemplate() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Business Plan Template & Guide</h1>
        <p className="text-xl text-muted-foreground">
          Comprehensive framework for creating a winning business plan
        </p>
        <div className="flex justify-center gap-2">
          <Badge>Essential Template</Badge>
          <Badge variant="outline">Investor-Ready</Badge>
        </div>
      </div>

      {/* Quick Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5" />
            Business Plan Overview
          </CardTitle>
          <CardDescription>
            Key sections and typical length expectations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">15-30 Pages</div>
              <p className="text-sm text-muted-foreground">Typical plan length</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">9 Sections</div>
              <p className="text-sm text-muted-foreground">Core components</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">40+ Hours</div>
              <p className="text-sm text-muted-foreground">Research & writing time</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Content Sections */}
      <div className="space-y-6">
        
        {/* Executive Summary */}
        <Card>
          <CardHeader>
            <CardTitle>1. Executive Summary</CardTitle>
            <CardDescription>Your business plan's most critical section</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Write this section last, but place it first. It's often the only section investors read initially, so it must be compelling and comprehensive.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Business Concept Overview</h4>
                  <p className="text-sm text-muted-foreground">
                    Clearly describe what your business does, the problem it solves, and your unique value proposition in 2-3 sentences.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Target Market Summary</h4>
                  <p className="text-sm text-muted-foreground">
                    Define your ideal customers, market size, and why they need your solution now.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Financial Highlights</h4>
                  <p className="text-sm text-muted-foreground">
                    Key financial projections: revenue forecasts, funding requirements, and expected returns.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Competitive Advantage</h4>
                  <p className="text-sm text-muted-foreground">
                    What makes your business different and difficult for competitors to replicate.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Funding Request</h4>
                  <p className="text-sm text-muted-foreground">
                    If seeking investment, clearly state how much you need and how you'll use it.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start gap-2">
                <Info className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-blue-800">Length Guideline</h4>
                  <p className="text-sm text-blue-700">
                    Keep your executive summary to 1-2 pages maximum. It should be compelling enough to make readers want to learn more.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Company Description & Analysis */}
        <Card>
          <CardHeader>
            <CardTitle>2-4. Company & Market Analysis</CardTitle>
            <CardDescription>Building the foundation of your business case</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Company Description */}
              <div className="space-y-3">
                <h4 className="font-semibold flex items-center gap-2">
                  <Building2 className="h-4 w-4" />
                  Company Description
                </h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-3 w-3 text-green-500" />
                    <span>Company history and ownership</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-3 w-3 text-green-500" />
                    <span>Mission and vision statements</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-3 w-3 text-green-500" />
                    <span>Business location and facilities</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-3 w-3 text-green-500" />
                    <span>Legal structure and regulations</span>
                  </div>
                </div>
              </div>

              {/* Market Analysis */}
              <div className="space-y-3">
                <h4 className="font-semibold flex items-center gap-2">
                  <Target className="h-4 w-4" />
                  Market Analysis
                </h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-3 w-3 text-green-500" />
                    <span>Industry overview and trends</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-3 w-3 text-green-500" />
                    <span>Target market demographics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-3 w-3 text-green-500" />
                    <span>Market size and growth potential</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-3 w-3 text-green-500" />
                    <span>Customer needs and buying behavior</span>
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            <div className="space-y-3">
              <h4 className="font-semibold">Competitive Analysis Framework</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border rounded-lg">
                  <thead className="bg-muted">
                    <tr>
                      <th className="text-left p-3 border-b">Competitor</th>
                      <th className="text-left p-3 border-b">Strengths</th>
                      <th className="text-left p-3 border-b">Weaknesses</th>
                      <th className="text-left p-3 border-b">Market Share</th>
                      <th className="text-left p-3 border-b">Pricing</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr>
                      <td className="p-3 border-b font-semibold">Direct Competitor 1</td>
                      <td className="p-3 border-b">List key strengths</td>
                      <td className="p-3 border-b">Identify gaps</td>
                      <td className="p-3 border-b">% or estimate</td>
                      <td className="p-3 border-b">Price points</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-b font-semibold">Direct Competitor 2</td>
                      <td className="p-3 border-b">List key strengths</td>
                      <td className="p-3 border-b">Identify gaps</td>
                      <td className="p-3 border-b">% or estimate</td>
                      <td className="p-3 border-b">Price points</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">Your Business</td>
                      <td className="p-3">Your competitive advantages</td>
                      <td className="p-3">Areas for improvement</td>
                      <td className="p-3">Target share</td>
                      <td className="p-3">Your pricing</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Organization & Marketing */}
        <Card>
          <CardHeader>
            <CardTitle>5-6. Organization & Marketing Strategy</CardTitle>
            <CardDescription>Team structure and go-to-market approach</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Organization */}
              <div className="space-y-3">
                <h4 className="font-semibold">Management & Organization</h4>
                <div className="space-y-2 text-sm">
                  <p className="text-muted-foreground">Include for each key team member:</p>
                  <div className="space-y-1 ml-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-green-500" />
                      <span>Name, title, and responsibilities</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-green-500" />
                      <span>Background and qualifications</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-green-500" />
                      <span>Equity ownership percentage</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-green-500" />
                      <span>Compensation structure</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Marketing Strategy */}
              <div className="space-y-3">
                <h4 className="font-semibold">Marketing & Sales Strategy</h4>
                <div className="space-y-2 text-sm">
                  <p className="text-muted-foreground">Cover these key areas:</p>
                  <div className="space-y-1 ml-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-green-500" />
                      <span>Pricing strategy and rationale</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-green-500" />
                      <span>Distribution channels</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-green-500" />
                      <span>Promotional activities</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-green-500" />
                      <span>Sales process and timeline</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Marketing Mix Framework */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold mb-3">4P Marketing Mix Framework</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h5 className="font-semibold text-blue-800">Product</h5>
                  <p className="text-blue-700">Features, quality, design, branding</p>
                </div>
                <div>
                  <h5 className="font-semibold text-purple-800">Price</h5>
                  <p className="text-purple-700">Pricing strategy, payment terms, discounts</p>
                </div>
                <div>
                  <h5 className="font-semibold text-green-800">Place</h5>
                  <p className="text-green-700">Distribution channels, market coverage</p>
                </div>
                <div>
                  <h5 className="font-semibold text-orange-800">Promotion</h5>
                  <p className="text-orange-700">Advertising, PR, sales promotion, digital marketing</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Financial Projections */}
        <Card>
          <CardHeader>
            <CardTitle>7-9. Financial Projections & Funding</CardTitle>
            <CardDescription>The numbers that make or break your plan</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-start gap-2">
                <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-yellow-800">Financial Projection Requirements</h4>
                  <p className="text-sm text-yellow-700">
                    Include 3-5 years of projections with monthly detail for year 1, quarterly for years 2-3, and annual for years 4-5.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 border rounded-lg">
                <BarChart3 className="h-8 w-8 mx-auto mb-2 text-primary" />
                <h4 className="font-semibold">Income Statement</h4>
                <p className="text-sm text-muted-foreground">Revenue, expenses, profit projections</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <FileText className="h-8 w-8 mx-auto mb-2 text-primary" />
                <h4 className="font-semibold">Cash Flow</h4>
                <p className="text-sm text-muted-foreground">Monthly cash in/out analysis</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <Target className="h-8 w-8 mx-auto mb-2 text-primary" />
                <h4 className="font-semibold">Balance Sheet</h4>
                <p className="text-sm text-muted-foreground">Assets, liabilities, equity</p>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">Key Financial Metrics to Include:</h4>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Break-even analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Customer acquisition cost (CAC)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Customer lifetime value (CLV)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Gross and net profit margins</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Return on investment (ROI)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Working capital requirements</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Debt-to-equity ratios</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Sensitivity analysis scenarios</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">Funding Request Details:</h4>
              <div className="bg-gray-50 border rounded-lg p-4 space-y-2 text-sm">
                <p><strong>Amount needed:</strong> Specific dollar amount with justification</p>
                <p><strong>Use of funds:</strong> Detailed breakdown (equipment 40%, marketing 25%, working capital 35%)</p>
                <p><strong>Type of funding:</strong> Debt, equity, or combination</p>
                <p><strong>Repayment terms:</strong> Timeline and structure for repayment</p>
                <p><strong>Exit strategy:</strong> How investors will see returns</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Pro Tips Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-500" />
              Business Plan Best Practices
            </CardTitle>
            <CardDescription>Expert advice for creating a compelling plan</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-2">Keep It Concise</h4>
                <p className="text-sm text-blue-700">
                  Busy investors and lenders prefer clear, concise plans. Use bullet points, charts, and graphics to communicate efficiently.
                </p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-800 mb-2">Back Claims with Data</h4>
                <p className="text-sm text-green-700">
                  Every assumption should be supported by research, industry data, or customer feedback. Credibility is crucial.
                </p>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h4 className="font-semibold text-purple-800 mb-2">Address Risks Honestly</h4>
                <p className="text-sm text-purple-700">
                  Acknowledge potential challenges and explain how you'll mitigate them. This shows thoughtful planning and realism.
                </p>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <h4 className="font-semibold text-orange-800 mb-2">Tailor to Your Audience</h4>
                <p className="text-sm text-orange-700">
                  Adjust emphasis based on whether you're seeking bank loans, investor funding, or using it for internal planning.
                </p>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h4 className="font-semibold text-red-800 mb-2">Professional Presentation</h4>
                <p className="text-sm text-red-700">
                  Use consistent formatting, professional language, and error-free writing. First impressions matter significantly.
                </p>
              </div>

              <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
                <h4 className="font-semibold text-teal-800 mb-2">Update Regularly</h4>
                <p className="text-sm text-teal-700">
                  Your business plan should be a living document. Review and update it quarterly to reflect new insights and changes.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>

      {/* Additional Resources */}
      <Card>
        <CardHeader>
          <CardTitle>Business Plan Resources</CardTitle>
          <CardDescription>Templates, examples, and expert guidance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">SBA Business Plan Template</h4>
                <p className="text-sm text-muted-foreground">Official Small Business Administration business plan template and guide</p>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">SCORE Business Plan Templates</h4>
                <p className="text-sm text-muted-foreground">Industry-specific business plan templates from experienced mentors</p>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">LivePlan Business Planning Software</h4>
                <p className="text-sm text-muted-foreground">Step-by-step business planning software with financial projections</p>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">Industry Market Research</h4>
                <p className="text-sm text-muted-foreground">IBISWorld, Statista, and other market research for competitive analysis</p>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">Financial Projection Templates</h4>
                <p className="text-sm text-muted-foreground">Excel templates for income statements, cash flow, and balance sheets</p>
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
          <CardTitle className="text-primary">Ready to Create Your Plan?</CardTitle>
          <CardDescription>Use our guided notes to build each section systematically</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Button>
              Start Business Planning Notes
            </Button>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Download Template
            </Button>
          </div>
        </CardContent>
      </Card>

    </div>
  )
}