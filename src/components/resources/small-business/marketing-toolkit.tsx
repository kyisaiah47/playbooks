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
  Megaphone,
  Target,
  TrendingUp,
  Users
} from "lucide-react"

export function MarketingToolkit() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Marketing Toolkit for Small Business</h1>
        <p className="text-xl text-muted-foreground">
          Complete guide to marketing strategies, channels, and tactics that work for small businesses
        </p>
        <div className="flex justify-center gap-2">
          <Badge>Marketing Guide</Badge>
          <Badge variant="outline">Actionable Strategies</Badge>
        </div>
      </div>

      {/* Quick Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5" />
            Marketing Budget Guidelines
          </CardTitle>
          <CardDescription>
            Industry benchmarks for marketing investment
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">5-15%</div>
              <p className="text-sm text-muted-foreground">of revenue for marketing</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">60/40</div>
              <p className="text-sm text-muted-foreground">digital vs traditional split</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">3-6 Months</div>
              <p className="text-sm text-muted-foreground">to see marketing ROI</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Content Sections */}
      <div className="space-y-6">
        
        {/* Digital Marketing Foundation */}
        <Card>
          <CardHeader>
            <CardTitle>Digital Marketing Foundation</CardTitle>
            <CardDescription>Essential online presence and digital marketing basics</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Website & SEO */}
              <div className="space-y-3">
                <h4 className="font-semibold flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  Website & SEO Essentials
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Mobile-responsive professional website</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Google My Business profile optimization</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Local SEO keyword optimization</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Customer review management system</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Website analytics and tracking setup</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Contact forms and lead capture</span>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="space-y-3">
                <h4 className="font-semibold flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Social Media Strategy
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Platform selection based on target audience</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Content calendar and posting schedule</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Brand voice and visual identity</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Community engagement and response strategy</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Social media advertising campaigns</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Influencer and partnership opportunities</span>
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            <div className="space-y-3">
              <h4 className="font-semibold">Social Media Platform Guide</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="border rounded-lg p-3">
                  <h5 className="font-semibold text-blue-800">Facebook</h5>
                  <p className="text-muted-foreground mb-2">Best for: Local businesses, B2C, community building</p>
                  <div className="space-y-1 text-xs">
                    <p>• Demographics: 25-54 years old</p>
                    <p>• Content: Behind-scenes, customer stories</p>
                    <p>• Features: Events, Groups, Marketplace</p>
                  </div>
                </div>
                <div className="border rounded-lg p-3">
                  <h5 className="font-semibold text-pink-800">Instagram</h5>
                  <p className="text-muted-foreground mb-2">Best for: Visual brands, lifestyle, younger audience</p>
                  <div className="space-y-1 text-xs">
                    <p>• Demographics: 18-34 years old</p>
                    <p>• Content: High-quality photos, Stories, Reels</p>
                    <p>• Features: Shopping, IGTV, Live streaming</p>
                  </div>
                </div>
                <div className="border rounded-lg p-3">
                  <h5 className="font-semibold text-blue-600">LinkedIn</h5>
                  <p className="text-muted-foreground mb-2">Best for: B2B, professional services, networking</p>
                  <div className="space-y-1 text-xs">
                    <p>• Demographics: College-educated professionals</p>
                    <p>• Content: Industry insights, company updates</p>
                    <p>• Features: Articles, Groups, Direct messaging</p>
                  </div>
                </div>
                <div className="border rounded-lg p-3">
                  <h5 className="font-semibold text-red-800">TikTok/YouTube</h5>
                  <p className="text-muted-foreground mb-2">Best for: Video content, tutorials, Gen Z audience</p>
                  <div className="space-y-1 text-xs">
                    <p>• Demographics: 16-34 years old</p>
                    <p>• Content: Short videos, tutorials, entertainment</p>
                    <p>• Features: Trends, Hashtags, Monetization</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start gap-2">
                <Info className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-blue-800">Social Media Best Practices</h4>
                  <p className="text-sm text-blue-700">
                    Focus on 2-3 platforms initially rather than spreading thin across all channels. Quality engagement beats quantity of posts.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Content Marketing Strategy */}
        <Card>
          <CardHeader>
            <CardTitle>Content Marketing & Email Strategy</CardTitle>
            <CardDescription>Building relationships through valuable content</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Content Marketing */}
              <div className="space-y-3">
                <h4 className="font-semibold">Content Marketing Framework</h4>
                <div className="space-y-3">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h5 className="font-semibold text-blue-800">Educational Content (40%)</h5>
                    <p className="text-sm text-muted-foreground">How-to guides, tutorials, industry insights, tips</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h5 className="font-semibold text-green-800">Behind-the-Scenes (30%)</h5>
                    <p className="text-sm text-muted-foreground">Company culture, processes, team stories</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h5 className="font-semibold text-purple-800">Customer-Focused (20%)</h5>
                    <p className="text-sm text-muted-foreground">Testimonials, case studies, user-generated content</p>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h5 className="font-semibold text-orange-800">Promotional (10%)</h5>
                    <p className="text-sm text-muted-foreground">Product features, sales, special offers</p>
                  </div>
                </div>
              </div>

              {/* Email Marketing */}
              <div className="space-y-3">
                <h4 className="font-semibold">Email Marketing Essentials</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Email list building with lead magnets</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Welcome sequence automation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Regular newsletter with value-add content</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Segmentation based on interests/behavior</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Abandoned cart and re-engagement campaigns</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>A/B testing for subject lines and content</span>
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            <div className="space-y-3">
              <h4 className="font-semibold">Content Ideas by Business Type</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-3">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                    <h5 className="font-semibold text-blue-800">Service-Based Business</h5>
                    <div className="space-y-1 text-blue-700 mt-2">
                      <p>• Client success stories and case studies</p>
                      <p>• Educational content about your industry</p>
                      <p>• FAQ videos addressing common concerns</p>
                      <p>• Before/after transformations</p>
                    </div>
                  </div>
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                    <h5 className="font-semibold text-purple-800">E-commerce/Retail</h5>
                    <div className="space-y-1 text-purple-700 mt-2">
                      <p>• Product demonstrations and tutorials</p>
                      <p>• Customer unboxing experiences</p>
                      <p>• Seasonal styling guides and trends</p>
                      <p>• Behind-scenes product creation</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <h5 className="font-semibold text-green-800">Restaurant/Food</h5>
                    <div className="space-y-1 text-green-700 mt-2">
                      <p>• Recipe tutorials and cooking tips</p>
                      <p>• Staff picks and menu highlights</p>
                      <p>• Farm-to-table sourcing stories</p>
                      <p>• Customer dining experiences</p>
                    </div>
                  </div>
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                    <h5 className="font-semibold text-orange-800">Professional Services</h5>
                    <div className="space-y-1 text-orange-700 mt-2">
                      <p>• Industry insights and market trends</p>
                      <p>• Educational webinars and workshops</p>
                      <p>• Thought leadership articles</p>
                      <p>• Client testimonials and referrals</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Local & Traditional Marketing */}
        <Card>
          <CardHeader>
            <CardTitle>Local & Traditional Marketing</CardTitle>
            <CardDescription>Community-based and offline marketing strategies</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Local Marketing */}
              <div className="space-y-3">
                <h4 className="font-semibold flex items-center gap-2">
                  <Target className="h-4 w-4" />
                  Local Marketing Tactics
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Local business directory listings</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Community event sponsorship</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Chamber of Commerce membership</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Local newspaper and radio advertising</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Partnership with complementary businesses</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Local SEO and Google My Business optimization</span>
                  </div>
                </div>
              </div>

              {/* Traditional Marketing */}
              <div className="space-y-3">
                <h4 className="font-semibold flex items-center gap-2">
                  <Megaphone className="h-4 w-4" />
                  Traditional Marketing Methods
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Referral program for existing customers</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Direct mail campaigns (targeted)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Professional networking events</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Trade show participation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Print advertising in industry publications</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Vehicle wraps and storefront signage</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-3">Local Marketing ROI Champions</h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm text-green-700">
                <div>
                  <h5 className="font-semibold">Referral Programs</h5>
                  <p>5-10x ROI when properly implemented</p>
                </div>
                <div>
                  <h5 className="font-semibold">Google My Business</h5>
                  <p>Free but drives 4x more website visits</p>
                </div>
                <div>
                  <h5 className="font-semibold">Email Marketing</h5>
                  <p>Average $42 return for every $1 spent</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Paid Advertising Strategy */}
        <Card>
          <CardHeader>
            <CardTitle>Paid Advertising Strategy</CardTitle>
            <CardDescription>Cost-effective paid marketing for small businesses</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            
            <div className="space-y-4">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-yellow-800">Paid Advertising Guidelines</h4>
                    <p className="text-sm text-yellow-700">
                      Start with a small budget ($500-1000/month) and proven platforms. Test, measure, and scale what works before expanding to new channels.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold">Google Ads Strategy</h4>
                  <div className="space-y-2 text-sm">
                    <div className="border-l-3 border-blue-500 pl-3">
                      <h5 className="font-semibold">Search Ads (Priority 1)</h5>
                      <p className="text-muted-foreground">Target high-intent keywords, focus on local terms</p>
                      <p className="text-xs text-blue-600">Budget: 60-70% of Google Ads spend</p>
                    </div>
                    <div className="border-l-3 border-green-500 pl-3">
                      <h5 className="font-semibold">Local Service Ads</h5>
                      <p className="text-muted-foreground">Pay-per-lead for service-based businesses</p>
                      <p className="text-xs text-green-600">Budget: 20-30% if eligible</p>
                    </div>
                    <div className="border-l-3 border-purple-500 pl-3">
                      <h5 className="font-semibold">Display/Shopping</h5>
                      <p className="text-muted-foreground">Retargeting and product showcase</p>
                      <p className="text-xs text-purple-600">Budget: 10-20% for retargeting</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold">Facebook/Meta Ads Strategy</h4>
                  <div className="space-y-2 text-sm">
                    <div className="border-l-3 border-pink-500 pl-3">
                      <h5 className="font-semibold">Local Awareness</h5>
                      <p className="text-muted-foreground">Geographic targeting, brand awareness</p>
                      <p className="text-xs text-pink-600">Budget: 30-40% for brand building</p>
                    </div>
                    <div className="border-l-3 border-orange-500 pl-3">
                      <h5 className="font-semibold">Lead Generation</h5>
                      <p className="text-muted-foreground">Facebook lead forms, conversion campaigns</p>
                      <p className="text-xs text-orange-600">Budget: 40-50% for conversions</p>
                    </div>
                    <div className="border-l-3 border-teal-500 pl-3">
                      <h5 className="font-semibold">Retargeting</h5>
                      <p className="text-muted-foreground">Website visitors, email list lookalikes</p>
                      <p className="text-xs text-teal-600">Budget: 10-20% for warm audiences</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold">Advertising Budget Allocation</h4>
                <div className="space-y-3">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="grid md:grid-cols-4 gap-4 text-sm text-center">
                      <div>
                        <div className="text-2xl font-bold text-blue-600">50%</div>
                        <div className="text-muted-foreground">Google Ads</div>
                        <div className="text-xs">Search & Local</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-pink-600">30%</div>
                        <div className="text-muted-foreground">Facebook/Meta</div>
                        <div className="text-xs">Awareness & Leads</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-orange-600">15%</div>
                        <div className="text-muted-foreground">Testing</div>
                        <div className="text-xs">New Platforms</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-green-600">5%</div>
                        <div className="text-muted-foreground">Buffer</div>
                        <div className="text-xs">Emergency/Seasonality</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Marketing Measurement */}
        <Card>
          <CardHeader>
            <CardTitle>Marketing Measurement & Analytics</CardTitle>
            <CardDescription>Key metrics and tools to track marketing performance</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Key Metrics */}
              <div className="space-y-3">
                <h4 className="font-semibold">Essential Marketing Metrics</h4>
                <div className="space-y-3">
                  <div className="border rounded-lg p-3">
                    <h5 className="font-semibold text-blue-800">Customer Acquisition Cost (CAC)</h5>
                    <p className="text-sm text-muted-foreground">Total marketing spend ÷ New customers acquired</p>
                    <p className="text-xs text-blue-600">Target: 3:1 LTV:CAC ratio or better</p>
                  </div>
                  <div className="border rounded-lg p-3">
                    <h5 className="font-semibold text-green-800">Return on Ad Spend (ROAS)</h5>
                    <p className="text-sm text-muted-foreground">Revenue from ads ÷ Ad spend</p>
                    <p className="text-xs text-green-600">Target: 4:1 or higher for profitability</p>
                  </div>
                  <div className="border rounded-lg p-3">
                    <h5 className="font-semibold text-purple-800">Conversion Rate</h5>
                    <p className="text-sm text-muted-foreground">Conversions ÷ Total website visitors</p>
                    <p className="text-xs text-purple-600">Industry average: 2-3%</p>
                  </div>
                </div>
              </div>

              {/* Analytics Tools */}
              <div className="space-y-3">
                <h4 className="font-semibold">Analytics Tools Setup</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Google Analytics 4 with goals setup</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Google Search Console for SEO</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Facebook Pixel for social media tracking</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Email marketing platform analytics</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Call tracking for phone conversions</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>CRM integration for lead tracking</span>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mt-3">
                  <h5 className="font-semibold text-blue-800">Monthly Reporting Schedule</h5>
                  <div className="text-sm text-blue-700 mt-1">
                    <p>• Week 1: Traffic and engagement review</p>
                    <p>• Week 2: Lead generation and conversion analysis</p>
                    <p>• Week 3: Campaign performance and ROI calculation</p>
                    <p>• Week 4: Strategy adjustments and next month planning</p>
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
              Small Business Marketing Best Practices
            </CardTitle>
            <CardDescription>Expert advice for marketing success</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-2">Start with Your Best Customers</h4>
                <p className="text-sm text-blue-700">
                  Analyze your most profitable customers to understand where to find more like them. Create customer personas based on real data, not assumptions.
                </p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-800 mb-2">Focus on Local SEO First</h4>
                <p className="text-sm text-green-700">
                  80% of local searches result in conversions within 24 hours. Optimize your Google My Business profile and get reviews before expanding marketing efforts.
                </p>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h4 className="font-semibold text-purple-800 mb-2">Quality over Quantity in Content</h4>
                <p className="text-sm text-purple-700">
                  One high-quality blog post per week is better than daily posts with little value. Focus on solving real customer problems with your content.
                </p>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <h4 className="font-semibold text-orange-800 mb-2">Test Everything, Assume Nothing</h4>
                <p className="text-sm text-orange-700">
                  What works for other businesses may not work for you. Test different headlines, images, and calls-to-action. Data beats intuition every time.
                </p>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h4 className="font-semibold text-red-800 mb-2">Build Relationships, Not Just Sales</h4>
                <p className="text-sm text-red-700">
                  Long-term customer relationships are worth 10x more than one-time sales. Focus on providing value and building trust before asking for the sale.
                </p>
              </div>

              <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
                <h4 className="font-semibold text-teal-800 mb-2">Consistency Beats Perfection</h4>
                <p className="text-sm text-teal-700">
                  Regular, consistent marketing efforts outperform sporadic, perfect campaigns. Set realistic goals and maintain steady momentum.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>

      {/* Additional Resources */}
      <Card>
        <CardHeader>
          <CardTitle>Marketing Tools & Resources</CardTitle>
          <CardDescription>Essential tools for small business marketing</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">Canva for Small Business</h4>
                <p className="text-sm text-muted-foreground">Easy-to-use design tool for social media, ads, and marketing materials</p>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">Mailchimp Marketing Platform</h4>
                <p className="text-sm text-muted-foreground">Email marketing, automation, and audience management</p>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">Hootsuite Social Media Management</h4>
                <p className="text-sm text-muted-foreground">Schedule posts, monitor mentions, and track social media performance</p>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">Google My Business Optimization Guide</h4>
                <p className="text-sm text-muted-foreground">Complete guide to maximizing your local search presence</p>
              </div>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">Small Business Marketing Calendar</h4>
                <p className="text-sm text-muted-foreground">12-month marketing calendar template with seasonal campaigns</p>
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
          <CardTitle className="text-primary">Ready to Launch Your Marketing?</CardTitle>
          <CardDescription>Use our guided notes to create your marketing strategy</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Button>
              Start Marketing Strategy Notes
            </Button>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Download Marketing Toolkit
            </Button>
          </div>
        </CardContent>
      </Card>

    </div>
  )
}