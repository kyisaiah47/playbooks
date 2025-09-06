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
  Users,
  Shield,
  Award,
  Search,
  MessageSquare,
  FileCheck
} from "lucide-react"

export function VendorGuide() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Vendor Selection & Management Guide</h1>
        <p className="text-xl text-muted-foreground">
          Expert strategies for finding, evaluating, and working with event vendors
        </p>
        <div className="flex justify-center gap-2">
          <Badge>Vendor Relations</Badge>
          <Badge variant="outline">Expert Tips</Badge>
        </div>
      </div>

      {/* Quick Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5" />
            Vendor Selection Process
          </CardTitle>
          <CardDescription>
            5-step approach to finding the perfect vendors
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-5 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">1</div>
              <p className="text-sm text-muted-foreground">Research & Shortlist</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">2</div>
              <p className="text-sm text-muted-foreground">Initial Contact</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">3</div>
              <p className="text-sm text-muted-foreground">Compare Proposals</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">4</div>
              <p className="text-sm text-muted-foreground">Final Selection</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">5</div>
              <p className="text-sm text-muted-foreground">Contract & Manage</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Finding Vendors */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            Finding Quality Vendors
          </CardTitle>
          <CardDescription>Where and how to discover reliable event professionals</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            The best vendors are often found through trusted networks and thorough research. Here are the most effective discovery methods.
          </p>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Personal Referrals</h4>
                <p className="text-sm text-muted-foreground">
                  Ask friends, family, and colleagues for vendor recommendations. Personal experiences provide valuable insights into service quality and reliability.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Venue Recommendations</h4>
                <p className="text-sm text-muted-foreground">
                  Venues work with vendors regularly and know who delivers quality service. They can recommend vendors familiar with their space and requirements.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Professional Associations</h4>
                <p className="text-sm text-muted-foreground">
                  Check directories from organizations like ILEA (International Live Events Association) or local event planning associations for certified professionals.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Online Platforms & Reviews</h4>
                <p className="text-sm text-muted-foreground">
                  Use specialized platforms like The Knot, WeddingWire, or Thumbtack, but always verify reviews and ask for recent references.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Social Media & Portfolios</h4>
                <p className="text-sm text-muted-foreground">
                  Review vendors' Instagram, Facebook, and websites for recent work examples, client testimonials, and professional presentation.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Local Bridal/Event Shows</h4>
                <p className="text-sm text-muted-foreground">
                  Meet vendors in person, see their work firsthand, and often receive show-exclusive discounts or packages.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Vendor Categories & Priorities */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Essential Vendor Categories
          </CardTitle>
          <CardDescription>Priority ranking and booking timeline for different vendors</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Tier 1 - Book First */}
            <div className="border rounded-lg p-4 border-green-200 bg-green-50">
              <div className="flex justify-between items-center mb-3">
                <h4 className="font-semibold text-green-800">Tier 1: Book First (6+ months ahead)</h4>
                <Badge className="bg-green-600">Critical Path</Badge>
              </div>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium mb-2 text-green-800">Venue & Catering:</p>
                  <ul className="space-y-1 text-green-700">
                    <li>• Ceremony and reception venues</li>
                    <li>• Catering services or venue catering</li>
                    <li>• Bartending and beverage service</li>
                    <li>• Event coordinator/day-of planner</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium mb-2 text-green-800">Documentation:</p>
                  <ul className="space-y-1 text-green-700">
                    <li>• Wedding photographer</li>
                    <li>• Videographer (if desired)</li>
                    <li>• Live streaming services</li>
                    <li>• Photo booth or entertainment</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Tier 2 - Book Second */}
            <div className="border rounded-lg p-4 border-blue-200 bg-blue-50">
              <div className="flex justify-between items-center mb-3">
                <h4 className="font-semibold text-blue-800">Tier 2: Book Second (3-6 months ahead)</h4>
                <Badge variant="outline" className="border-blue-600 text-blue-600">High Priority</Badge>
              </div>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium mb-2 text-blue-800">Audio & Entertainment:</p>
                  <ul className="space-y-1 text-blue-700">
                    <li>• DJ or live band</li>
                    <li>• Sound system and microphones</li>
                    <li>• Lighting design</li>
                    <li>• Special entertainment acts</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium mb-2 text-blue-800">Design & Decor:</p>
                  <ul className="space-y-1 text-blue-700">
                    <li>• Florist and floral design</li>
                    <li>• Rental company (linens, furniture)</li>
                    <li>• Lighting designer</li>
                    <li>• Specialty decor vendors</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Tier 3 - Book Third */}
            <div className="border rounded-lg p-4 border-orange-200 bg-orange-50">
              <div className="flex justify-between items-center mb-3">
                <h4 className="font-semibold text-orange-800">Tier 3: Book Third (1-3 months ahead)</h4>
                <Badge variant="outline" className="border-orange-600 text-orange-600">Supporting Services</Badge>
              </div>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium mb-2 text-orange-800">Transportation & Logistics:</p>
                  <ul className="space-y-1 text-orange-700">
                    <li>• Transportation (limo, shuttles)</li>
                    <li>• Valet parking services</li>
                    <li>• Security services</li>
                    <li>• Cleanup crew</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium mb-2 text-orange-800">Personal Services:</p>
                  <ul className="space-y-1 text-orange-700">
                    <li>• Hair and makeup artists</li>
                    <li>• Officiant or celebrant</li>
                    <li>• Childcare services</li>
                    <li>• Guest favors vendor</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Vendor Evaluation Criteria */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5" />
            Vendor Evaluation Criteria
          </CardTitle>
          <CardDescription>Key factors for making the best selection decisions</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <h4 className="font-semibold">Essential Evaluation Checklist:</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div>
                  <h5 className="font-medium text-primary mb-2">Experience & Expertise</h5>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-green-500" />
                      <span>Years in business and event specialization</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-green-500" />
                      <span>Portfolio of similar events and budgets</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-green-500" />
                      <span>Professional certifications and training</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-green-500" />
                      <span>Awards or industry recognition</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h5 className="font-medium text-primary mb-2">References & Reviews</h5>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-green-500" />
                      <span>Recent client references (within 6 months)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-green-500" />
                      <span>Consistent positive online reviews</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-green-500" />
                      <span>Vendor references from other professionals</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-green-500" />
                      <span>Response to any negative feedback</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <h5 className="font-medium text-primary mb-2">Business Reliability</h5>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-green-500" />
                      <span>Proper licensing and business registration</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-green-500" />
                      <span>Comprehensive liability insurance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-green-500" />
                      <span>Clear contract terms and policies</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-green-500" />
                      <span>Professional communication style</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h5 className="font-medium text-primary mb-2">Service & Value</h5>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-green-500" />
                      <span>Competitive and transparent pricing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-green-500" />
                      <span>Service level matching your needs</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-green-500" />
                      <span>Backup plans and contingency measures</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-green-500" />
                      <span>Flexibility with changes and requests</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Questions to Ask Vendors */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5" />
            Essential Questions for Vendor Interviews
          </CardTitle>
          <CardDescription>Critical questions organized by vendor category</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <h5 className="font-semibold mb-3">For All Vendors:</h5>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• How many events like mine do you do per year?</li>
                  <li>• Can you provide 3 recent client references?</li>
                  <li>• What's included in your base price?</li>
                  <li>• What are typical additional costs?</li>
                  <li>• Do you have backup equipment/staff?</li>
                  <li>• What's your cancellation policy?</li>
                  <li>• When do you need final headcount/details?</li>
                </ul>
              </div>

              <div className="border rounded-lg p-4">
                <h5 className="font-semibold mb-3">Caterers:</h5>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Can we schedule a tasting?</li>
                  <li>• How do you handle dietary restrictions?</li>
                  <li>• What's the service style (plated, buffet, family)?</li>
                  <li>• Is bar service included or separate?</li>
                  <li>• What rentals do you provide vs. what we need?</li>
                  <li>• How many staff will be present?</li>
                  <li>• What's your cleanup policy?</li>
                </ul>
              </div>

              <div className="border rounded-lg p-4">
                <h5 className="font-semibold mb-3">Photographers:</h5>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Can we see full galleries from recent events?</li>
                  <li>• How many edited photos are included?</li>
                  <li>• What's the delivery timeline?</li>
                  <li>• Do you offer engagement sessions?</li>
                  <li>• How do you backup photos during the event?</li>
                  <li>• Can we purchase additional hours?</li>
                  <li>• What's your weather contingency plan?</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <h5 className="font-semibold mb-3">Venues:</h5>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• What's included in the rental fee?</li>
                  <li>• Are there preferred vendor requirements?</li>
                  <li>• What are the setup/breakdown times?</li>
                  <li>• Is there backup power/bad weather plans?</li>
                  <li>• What rentals do we need to source separately?</li>
                  <li>• Are there noise or time restrictions?</li>
                  <li>• What's the parking situation for guests?</li>
                </ul>
              </div>

              <div className="border rounded-lg p-4">
                <h5 className="font-semibold mb-3">DJs/Entertainment:</h5>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Can we preview your music style/playlist?</li>
                  <li>• Do you take requests during the event?</li>
                  <li>• What equipment do you provide?</li>
                  <li>• How do you handle microphone/announcement needs?</li>
                  <li>• Do you provide lighting services?</li>
                  <li>• What's your backup plan for equipment failure?</li>
                  <li>• Can you coordinate with other vendors?</li>
                </ul>
              </div>

              <div className="border rounded-lg p-4">
                <h5 className="font-semibold mb-3">Florists:</h5>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Can you work within our color scheme?</li>
                  <li>• What flowers are in season for our date?</li>
                  <li>• Do you provide vases and containers?</li>
                  <li>• When will arrangements be delivered/setup?</li>
                  <li>• Can we keep arrangements after the event?</li>
                  <li>• What's your policy for flower substitutions?</li>
                  <li>• Do you offer setup and breakdown services?</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contract Management */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileCheck className="h-5 w-5" />
            Contract Management & Protection
          </CardTitle>
          <CardDescription>Essential contract terms and red flags to watch for</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-2">Must-Have Contract Elements</h4>
              <div className="grid md:grid-cols-2 gap-3 text-sm text-green-700">
                <ul className="space-y-1">
                  <li>• Detailed service description and deliverables</li>
                  <li>• Total cost breakdown and payment schedule</li>
                  <li>• Event date, time, and location details</li>
                  <li>• Setup and breakdown responsibilities</li>
                </ul>
                <ul className="space-y-1">
                  <li>• Cancellation and refund policies</li>
                  <li>• Force majeure (weather/emergency) clauses</li>
                  <li>• Liability insurance requirements</li>
                  <li>• Change order and modification procedures</li>
                </ul>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-semibold text-red-800 mb-2">Contract Red Flags</h4>
              <div className="grid md:grid-cols-2 gap-3 text-sm text-red-700">
                <ul className="space-y-1">
                  <li>• Requires full payment upfront</li>
                  <li>• No cancellation or refund options</li>
                  <li>• Vague service descriptions</li>
                  <li>• No liability insurance proof</li>
                </ul>
                <ul className="space-y-1">
                  <li>• Unreasonably high change fees</li>
                  <li>• No backup/contingency plans mentioned</li>
                  <li>• Pressure to sign immediately</li>
                  <li>• Verbal agreements without documentation</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">Payment Best Practices</h4>
              <ul className="space-y-1 text-sm text-blue-700">
                <li>• Never pay more than 50% upfront, typical is 25-30%</li>
                <li>• Stagger payments tied to service milestones</li>
                <li>• Withhold final payment until after event completion</li>
                <li>• Use credit cards for payment protection when possible</li>
                <li>• Keep all receipts and payment documentation organized</li>
              </ul>
            </div>
          </div>

          {/* Warning Box */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-start gap-2">
              <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
              <div>
                <h4 className="font-semibold text-yellow-800">Legal Protection Tip</h4>
                <p className="text-sm text-yellow-700">
                  Have all contracts reviewed by a lawyer before signing if the total value exceeds $5,000 or if you're unsure about any terms. The small legal fee can save thousands in potential disputes.
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
            Expert Vendor Management Tips
          </CardTitle>
          <CardDescription>Professional insights from successful event planners</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">Communication Strategy</h4>
              <p className="text-sm text-blue-700">
                Create a shared document with all vendor contacts, arrival times, and requirements. Send updates to everyone simultaneously to ensure consistency and prevent miscommunication.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-2">Vendor Relationships</h4>
              <p className="text-sm text-green-700">
                Treat vendors as partners, not just service providers. Happy vendors go above and beyond, often providing extra touches or solving problems proactively.
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h4 className="font-semibold text-purple-800 mb-2">Backup Plans</h4>
              <p className="text-sm text-purple-700">
                Always have secondary vendor contacts for critical services. If your primary vendor has an emergency, you'll have immediate alternatives rather than scrambling last-minute.
              </p>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h4 className="font-semibold text-orange-800 mb-2">Final Meetings</h4>
              <p className="text-sm text-orange-700">
                Schedule individual vendor meetings 1-2 weeks before your event to review timelines, confirm details, and address any last-minute questions or concerns.
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-semibold text-red-800 mb-2">Day-of Coordination</h4>
              <p className="text-sm text-red-700">
                Designate one person (ideally not you) as the vendor point of contact on event day. This person should have all vendor contracts and contact information readily available.
              </p>
            </div>

            <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
              <h4 className="font-semibold text-teal-800 mb-2">Post-Event Follow-up</h4>
              <p className="text-sm text-teal-700">
                Leave reviews for vendors within a week of your event. Great vendors depend on positive reviews, and your feedback helps future couples make informed decisions.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Additional Resources */}
      <Card>
        <CardHeader>
          <CardTitle>Vendor Management Resources</CardTitle>
          <CardDescription>Tools and templates for vendor success</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">Vendor Comparison Spreadsheet</h4>
                <p className="text-sm text-muted-foreground">Side-by-side comparison template for evaluating multiple vendors</p>
              </div>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">Contract Review Checklist</h4>
                <p className="text-sm text-muted-foreground">Essential terms and red flags to check before signing</p>
              </div>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">Vendor Communication Template</h4>
                <p className="text-sm text-muted-foreground">Email templates for initial contact and follow-up communications</p>
              </div>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">Local Vendor Directory</h4>
                <p className="text-sm text-muted-foreground">Curated list of trusted vendors by region and specialty</p>
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
          <CardTitle className="text-primary">Ready to Find Your Vendors?</CardTitle>
          <CardDescription>Use our guided notes to organize your vendor research and selection process</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Button>
              Start Vendor Planning
            </Button>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Download Vendor Toolkit
            </Button>
          </div>
        </CardContent>
      </Card>

    </div>
  )
}