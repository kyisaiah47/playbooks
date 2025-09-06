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
  DollarSign,
  PieChart,
  TrendingUp,
  Calculator
} from "lucide-react"

export function BudgetGuide() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Event Budget Planning Guide</h1>
        <p className="text-xl text-muted-foreground">
          Master the art of event budgeting with proven allocation strategies and cost-saving tips
        </p>
        <div className="flex justify-center gap-2">
          <Badge>Financial Planning</Badge>
          <Badge variant="outline">Expert Advice</Badge>
        </div>
      </div>

      {/* Quick Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <PieChart className="h-5 w-5" />
            Budget Allocation Breakdown
          </CardTitle>
          <CardDescription>
            Industry-standard percentages for different event categories
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">40-50%</div>
              <p className="text-sm text-muted-foreground">Venue & Catering</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">15-20%</div>
              <p className="text-sm text-muted-foreground">Entertainment & Audio</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">10-15%</div>
              <p className="text-sm text-muted-foreground">Photography & Decor</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Budget Foundation */}
      <Card>
        <CardHeader>
          <CardTitle>Setting Your Budget Foundation</CardTitle>
          <CardDescription>Essential first steps for budget planning</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Successful event budgeting starts with realistic expectations and clear priorities. Here's how to establish your financial framework.
          </p>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Determine Total Available Budget</h4>
                <p className="text-sm text-muted-foreground">
                  Include all funding sources: personal funds, sponsorships, ticket sales, and contributions. Be realistic about what you can actually spend.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Research Market Rates</h4>
                <p className="text-sm text-muted-foreground">
                  Get quotes from 3-5 vendors in each category. This gives you realistic pricing expectations and negotiation power.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Identify Non-Negotiable Priorities</h4>
                <p className="text-sm text-muted-foreground">
                  List the 3-5 most important elements for your event. These get the largest budget allocation, everything else is flexible.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Build in Contingency Fund</h4>
                <p className="text-sm text-muted-foreground">
                  Always reserve 10-15% of your total budget for unexpected expenses. This prevents last-minute financial stress.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Consider Hidden Costs</h4>
                <p className="text-sm text-muted-foreground">
                  Factor in gratuities, taxes, service fees, permits, insurance, and overtime charges. These can add 15-25% to vendor costs.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Plan Payment Schedule</h4>
                <p className="text-sm text-muted-foreground">
                  Most vendors require deposits (25-50%) at booking, with balances due 1-2 weeks before the event. Plan your cash flow accordingly.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Detailed Budget Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="h-5 w-5" />
            Detailed Budget Categories
          </CardTitle>
          <CardDescription>Comprehensive breakdown by expense type</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Venue & Catering */}
            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-center mb-3">
                <h4 className="font-semibold">Venue & Catering (40-50%)</h4>
                <Badge>Highest Priority</Badge>
              </div>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium mb-2">Venue Costs:</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Rental fee (ceremony & reception)</li>
                    <li>• Setup/breakdown fees</li>
                    <li>• Security deposits</li>
                    <li>• Parking fees</li>
                    <li>• Permit costs</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium mb-2">Catering Costs:</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Per-person meal costs</li>
                    <li>• Bar service & beverages</li>
                    <li>• Service charges (18-22%)</li>
                    <li>• Gratuities for staff</li>
                    <li>• Special dietary accommodations</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Entertainment & Music */}
            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-center mb-3">
                <h4 className="font-semibold">Entertainment & Audio (15-20%)</h4>
                <Badge variant="outline">High Impact</Badge>
              </div>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium mb-2">Entertainment:</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• DJ or band fees</li>
                    <li>• Special performers</li>
                    <li>• Sound system rental</li>
                    <li>• Microphone setup</li>
                    <li>• Lighting equipment</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium mb-2">Additional Costs:</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Overtime charges</li>
                    <li>• Travel/setup fees</li>
                    <li>• Power/electrical needs</li>
                    <li>• Backup equipment</li>
                    <li>• Staging or platforms</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Photography & Videography */}
            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-center mb-3">
                <h4 className="font-semibold">Photography & Videography (10-15%)</h4>
                <Badge variant="outline">Memory Makers</Badge>
              </div>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium mb-2">Photography:</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Photographer's day rate</li>
                    <li>• Engagement/pre-event session</li>
                    <li>• Digital gallery & prints</li>
                    <li>• Album creation</li>
                    <li>• Travel expenses</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium mb-2">Videography:</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Videographer fees</li>
                    <li>• Editing and post-production</li>
                    <li>• Multiple camera angles</li>
                    <li>• Drone footage (if permitted)</li>
                    <li>• Final video deliverables</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Decor & Flowers */}
            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-center mb-3">
                <h4 className="font-semibold">Decor & Flowers (8-12%)</h4>
                <Badge variant="outline">Atmosphere</Badge>
              </div>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium mb-2">Florals:</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Centerpieces</li>
                    <li>• Ceremony arrangements</li>
                    <li>• Bouquets & boutonnieres</li>
                    <li>• Delivery & setup</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium mb-2">Decor Items:</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Linens & chair covers</li>
                    <li>• Candles & lighting</li>
                    <li>• Signage & displays</li>
                    <li>• Rental furniture</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Cost-Saving Strategies */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Smart Cost-Saving Strategies
          </CardTitle>
          <CardDescription>Proven ways to reduce expenses without sacrificing quality</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-2">Timing Strategies</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Choose off-peak dates (Friday, Sunday, winter months) for 20-40% savings</li>
                <li>• Book venues for afternoon events rather than prime evening slots</li>
                <li>• Consider brunch or lunch receptions instead of dinner</li>
                <li>• Avoid holiday weekends when vendors charge premiums</li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">Venue Selection</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Choose all-inclusive venues that provide tables, chairs, and basic decor</li>
                <li>• Consider non-traditional venues (parks, museums, private homes)</li>
                <li>• Look for venues with in-house catering to avoid external fees</li>
                <li>• Book venues that allow outside vendors for better pricing control</li>
              </ul>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h4 className="font-semibold text-purple-800 mb-2">Catering Savings</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• Opt for buffet service instead of plated meals (20-30% savings)</li>
                <li>• Limit bar options to wine, beer, and signature cocktails only</li>
                <li>• Choose seasonal menu items for fresher, less expensive options</li>
                <li>• Consider family-style service for intimate events</li>
              </ul>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h4 className="font-semibold text-orange-800 mb-2">DIY Opportunities</h4>
              <ul className="text-sm text-orange-700 space-y-1">
                <li>• Create your own centerpieces using seasonal flowers</li>
                <li>• Design and print invitations and signage yourself</li>
                <li>• Make favors or skip them entirely (guests rarely miss them)</li>
                <li>• Recruit talented friends for photography or music (with backup plans)</li>
              </ul>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-semibold text-red-800 mb-2">Negotiation Tips</h4>
              <ul className="text-sm text-red-700 space-y-1">
                <li>• Bundle services with the same vendor for package discounts</li>
                <li>• Ask about payment plan options to spread costs over time</li>
                <li>• Negotiate removal of unnecessary services from standard packages</li>
                <li>• Book multiple events with the same vendor for loyalty discounts</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Budget Tracking */}
      <Card>
        <CardHeader>
          <CardTitle>Budget Tracking & Management</CardTitle>
          <CardDescription>Stay on track throughout the planning process</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <h4 className="font-semibold">Essential Tracking Tools:</h4>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span className="text-sm">Detailed spreadsheet with all categories</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span className="text-sm">Running total of committed vs. spent amounts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span className="text-sm">Payment schedule tracker</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span className="text-sm">Vendor contact and contract information</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span className="text-sm">Separate contingency fund tracking</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span className="text-sm">Receipt and invoice filing system</span>
              </div>
            </div>
          </div>

          {/* Warning Box */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-start gap-2">
              <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
              <div>
                <h4 className="font-semibold text-yellow-800">Budget Alert System</h4>
                <p className="text-sm text-yellow-700">
                  Set up weekly budget reviews. If you're over 80% of your budget with more than 20% of planning remaining, it's time to reassess priorities and look for savings opportunities.
                </p>
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
            Expert Financial Tips
          </CardTitle>
          <CardDescription>Professional advice from experienced event planners</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">The 50/30/20 Rule</h4>
              <p className="text-sm text-blue-700">
                Allocate 50% to essentials (venue, food), 30% to important elements (music, photos), and 20% to nice-to-haves (decor, favors). This prevents overspending on details.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-2">Payment Timing</h4>
              <p className="text-sm text-green-700">
                Use credit cards for vendor payments to earn rewards and provide purchase protection. Pay them off immediately to avoid interest charges.
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h4 className="font-semibold text-purple-800 mb-2">Vendor Relationships</h4>
              <p className="text-sm text-purple-700">
                Build good relationships with vendors. Happy vendors often go above and beyond, provide referral discounts, and offer helpful cost-saving suggestions.
              </p>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h4 className="font-semibold text-orange-800 mb-2">Insurance Investment</h4>
              <p className="text-sm text-orange-700">
                Event insurance typically costs 1-3% of your budget but can save thousands if vendors fail to show or weather forces cancellation.
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-semibold text-red-800 mb-2">Final Month Strategy</h4>
              <p className="text-sm text-red-700">
                Stop making major purchases 4 weeks before your event. Focus remaining budget on final details and day-of contingencies only.
              </p>
            </div>

            <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
              <h4 className="font-semibold text-teal-800 mb-2">Post-Event Planning</h4>
              <p className="text-sm text-teal-700">
                Keep 5% of your budget available after the event for final vendor payments, additional gratuities, and any unexpected cleanup costs.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Additional Resources */}
      <Card>
        <CardHeader>
          <CardTitle>Budget Planning Resources</CardTitle>
          <CardDescription>Tools and templates for financial success</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">Budget Calculator Spreadsheet</h4>
                <p className="text-sm text-muted-foreground">Comprehensive Excel template with formulas and category breakdowns</p>
              </div>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">Vendor Comparison Tool</h4>
                <p className="text-sm text-muted-foreground">Side-by-side comparison templates for evaluating quotes</p>
              </div>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">Cost-Per-Guest Calculator</h4>
                <p className="text-sm text-muted-foreground">Interactive tool to determine per-person budget allocations</p>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Calculate
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">Local Vendor Database</h4>
                <p className="text-sm text-muted-foreground">Curated directory with pricing ranges and reviews</p>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Browse
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Ready to Start */}
      <Card className="bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle className="text-primary">Ready to Plan Your Budget?</CardTitle>
          <CardDescription>Use our guided notes to track your specific event expenses</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Button>
              Start Budget Planning
            </Button>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Download Budget Template
            </Button>
          </div>
        </CardContent>
      </Card>

    </div>
  )
}