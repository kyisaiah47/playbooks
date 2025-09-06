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
  RefrigeratorIcon
} from "lucide-react"

export function MealPrepGuide() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Meal Prep Mastery</h1>
        <p className="text-xl text-muted-foreground">
          Complete guide to efficient meal preparation and batch cooking
        </p>
        <div className="flex justify-center gap-2">
          <Badge>Time Saver</Badge>
          <Badge variant="outline">Step-by-Step</Badge>
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
            Key meal prep statistics and benefits
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">75%</div>
              <p className="text-sm text-muted-foreground">Less weekly cooking time</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">$50+</div>
              <p className="text-sm text-muted-foreground">Monthly food savings</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">3-5</div>
              <p className="text-sm text-muted-foreground">Days of prepped meals</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Content Sections */}
      <div className="space-y-6">
        
        {/* Section 1 - Meal Prep Basics */}
        <Card>
          <CardHeader>
            <CardTitle>Meal Prep Fundamentals</CardTitle>
            <CardDescription>Essential knowledge for successful meal preparation</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Meal prep involves preparing ingredients or complete meals in advance to save time, money, and support healthy eating throughout the week.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Batch Cooking</h4>
                  <p className="text-sm text-muted-foreground">
                    Cook large quantities of staples like grains, proteins, and roasted vegetables all at once.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Component Prep</h4>
                  <p className="text-sm text-muted-foreground">
                    Prepare individual ingredients that can be mixed and matched throughout the week.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Full Meal Prep</h4>
                  <p className="text-sm text-muted-foreground">
                    Complete meals portioned and ready to reheat - perfect for busy schedules.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Freezer-Friendly Options</h4>
                  <p className="text-sm text-muted-foreground">
                    Soups, stews, casseroles, and marinated proteins that freeze well for longer storage.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 2 - Essential Equipment */}
        <Card>
          <CardHeader>
            <CardTitle>Essential Meal Prep Equipment</CardTitle>
            <CardDescription>Must-have tools for efficient preparation</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            
            {/* Checklist Format */}
            <div className="space-y-3">
              <h4 className="font-semibold">Storage Containers:</h4>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Glass containers (various sizes)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">BPA-free plastic containers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Freezer-safe containers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Mason jars for salads/smoothies</span>
                </div>
              </div>
            </div>

            <Separator />

            <div className="space-y-3">
              <h4 className="font-semibold">Cooking Equipment:</h4>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Large sheet pans for roasting</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Slow cooker or Instant Pot</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Large mixing bowls</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Quality knife set</span>
                </div>
              </div>
            </div>

            {/* Warning/Tip Box */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start gap-2">
                <RefrigeratorIcon className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-blue-800">Storage Safety</h4>
                  <p className="text-sm text-blue-700">
                    Always cool food completely before storing. Refrigerate within 2 hours and use prepared meals within 3-4 days.
                  </p>
                </div>
              </div>
            </div>

          </CardContent>
        </Card>

        {/* Section 3 - Weekly Meal Prep Schedule */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Weekly Meal Prep Timeline
            </CardTitle>
            <CardDescription>Efficient schedule for maximum results</CardDescription>
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
                      <h4 className="font-semibold">Planning Day (30 minutes)</h4>
                      <p className="text-sm text-muted-foreground">
                        Review your week, choose recipes, make grocery list, and check what you already have.
                      </p>
                      <Badge variant="outline" className="mt-2">Sunday or Wednesday</Badge>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold">
                      2
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">Grocery Shopping (45 minutes)</h4>
                      <p className="text-sm text-muted-foreground">
                        Shop efficiently with your organized list. Buy extras of versatile ingredients.
                      </p>
                      <Badge variant="outline" className="mt-2">Same day as planning</Badge>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold">
                      3
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">Prep Session (2-3 hours)</h4>
                      <p className="text-sm text-muted-foreground">
                        Wash, chop, cook grains/proteins, roast vegetables, and assemble meals.
                      </p>
                      <Badge variant="outline" className="mt-2">Day after shopping</Badge>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold">
                      4
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">Mid-Week Check-In (15 minutes)</h4>
                      <p className="text-sm text-muted-foreground">
                        Assess what's running low, prep fresh items if needed, adjust weekend plans.
                      </p>
                      <Badge variant="outline" className="mt-2">Wednesday evening</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 4 - Prep Strategies */}
        <Card>
          <CardHeader>
            <CardTitle>Smart Prep Strategies</CardTitle>
            <CardDescription>Maximize efficiency and minimize waste</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            
            <div className="space-y-3">
              <h4 className="font-semibold">Batch Cooking Order:</h4>
              <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground ml-4">
                <li>Start longest-cooking items first (grains, roasts, soups)</li>
                <li>While those cook, prep vegetables and other ingredients</li>
                <li>Cook proteins that require active attention</li>
                <li>Finish with quick-cooking items and assembly</li>
                <li>Cool everything completely before storing</li>
              </ol>
            </div>

            <Separator />

            <div className="space-y-3">
              <h4 className="font-semibold">Storage Tips:</h4>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                  <span className="text-sm">Store dressings/sauces separately</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                  <span className="text-sm">Keep crispy items away from moisture</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                  <span className="text-sm">Label containers with contents and date</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                  <span className="text-sm">Use FIFO (First In, First Out) method</span>
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
              Expert Meal Prep Tips
            </CardTitle>
            <CardDescription>Professional strategies for meal prep success</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-800 mb-2">Start Small</h4>
                <p className="text-sm text-green-700">
                  Begin with prepping just 2-3 days of meals. As you build the habit, gradually increase to a full week.
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-2">Multi-Use Ingredients</h4>
                <p className="text-sm text-blue-700">
                  Choose versatile ingredients that work in multiple dishes - chicken, quinoa, and roasted vegetables are perfect examples.
                </p>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h4 className="font-semibold text-purple-800 mb-2">Theme Your Days</h4>
                <p className="text-sm text-purple-700">
                  Assign themes like "Meatless Monday" or "Taco Tuesday" to simplify decision-making and shopping.
                </p>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <h4 className="font-semibold text-orange-800 mb-2">Emergency Backup</h4>
                <p className="text-sm text-orange-700">
                  Always keep a few frozen meals or shelf-stable options ready for when life gets unexpectedly busy.
                </p>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h4 className="font-semibold text-red-800 mb-2">Texture Variety</h4>
                <p className="text-sm text-red-700">
                  Include different textures in your meals - crunchy nuts, creamy sauces, tender proteins - to avoid boredom.
                </p>
              </div>

              <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
                <h4 className="font-semibold text-teal-800 mb-2">Freeze Strategically</h4>
                <p className="text-sm text-teal-700">
                  Soups, stews, and marinated proteins freeze beautifully. Prepare double batches for future weeks.
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
          <CardDescription>Tools and guides for meal prep success</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">Meal Prep Container Guide</h4>
                <p className="text-sm text-muted-foreground">Best containers for different foods and storage needs</p>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">Food Safety Guidelines</h4>
                <p className="text-sm text-muted-foreground">Proper storage temperatures and timeframes for meal prep</p>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">Freezer-Friendly Recipe Database</h4>
                <p className="text-sm text-muted-foreground">Recipes specifically designed for freezing and reheating</p>
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
          <CardTitle className="text-primary">Ready to Start Meal Prepping?</CardTitle>
          <CardDescription>Put these strategies into practice with structured planning</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Button>
              Start Meal Planning
            </Button>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Download Prep Checklist
            </Button>
          </div>
        </CardContent>
      </Card>

    </div>
  )
}