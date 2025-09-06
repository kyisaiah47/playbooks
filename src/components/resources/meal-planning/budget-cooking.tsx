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
  ShoppingCart
} from "lucide-react"

export function BudgetCooking() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Budget-Friendly Cooking</h1>
        <p className="text-xl text-muted-foreground">
          Delicious, nutritious meals without breaking the bank
        </p>
        <div className="flex justify-center gap-2">
          <Badge>Money Saver</Badge>
          <Badge variant="outline">Family Friendly</Badge>
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
            Budget cooking benefits and savings potential
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">$2-4</div>
              <p className="text-sm text-muted-foreground">Cost per home-cooked meal</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">60%</div>
              <p className="text-sm text-muted-foreground">Savings vs. eating out</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">$200+</div>
              <p className="text-sm text-muted-foreground">Monthly family savings</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Content Sections */}
      <div className="space-y-6">
        
        {/* Section 1 - Budget Staples */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShoppingCart className="h-5 w-5" />
              Budget-Friendly Pantry Staples
            </CardTitle>
            <CardDescription>Essential ingredients that maximize your food budget</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              These versatile, affordable ingredients form the foundation of countless budget-friendly meals.
            </p>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Proteins ($1-3 per serving)</h4>
                <div className="grid md:grid-cols-2 gap-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Dried beans and lentils</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Eggs (versatile and cheap)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Chicken thighs (cheaper than breasts)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Canned fish (tuna, salmon)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Ground turkey or beef on sale</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Tofu and tempeh</span>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold mb-2">Grains & Starches ($0.50-1 per serving)</h4>
                <div className="grid md:grid-cols-2 gap-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Brown rice (buy in bulk)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Pasta (whole grain when possible)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Oats (steel-cut and rolled)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Potatoes and sweet potatoes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Quinoa (when on sale)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Bread (freeze extras)</span>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold mb-2">Vegetables & Fruits ($0.50-2 per serving)</h4>
                <div className="grid md:grid-cols-2 gap-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Seasonal fresh produce</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Frozen vegetables (no sauce)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Canned tomatoes and paste</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Onions, garlic, carrots, celery</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Bananas (inexpensive fruit)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Cabbage (long-lasting, versatile)</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 2 - Smart Shopping Strategies */}
        <Card>
          <CardHeader>
            <CardTitle>Smart Shopping Strategies</CardTitle>
            <CardDescription>Maximize your grocery budget with proven tactics</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Shop Sales and Plan Around Them</h4>
                  <p className="text-sm text-muted-foreground">
                    Check weekly ads before meal planning. Build your menu around discounted proteins and produce.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Buy Generic/Store Brands</h4>
                  <p className="text-sm text-muted-foreground">
                    Often 20-30% cheaper with comparable quality. Try them for basics like pasta, rice, and canned goods.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Purchase in Bulk When Sensible</h4>
                  <p className="text-sm text-muted-foreground">
                    Buy larger quantities of non-perishables you use regularly, but only if you have storage space.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Shop Seasonally</h4>
                  <p className="text-sm text-muted-foreground">
                    Seasonal produce is fresher, tastier, and significantly cheaper. Learn what's in season when.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Use Every Part</h4>
                  <p className="text-sm text-muted-foreground">
                    Save vegetable scraps for stock, use chicken bones for broth, and repurpose leftovers creatively.
                  </p>
                </div>
              </div>
            </div>

            {/* Warning/Tip Box */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-start gap-2">
                <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-yellow-800">Avoid These Budget Traps</h4>
                  <p className="text-sm text-yellow-700">
                    Don't shop when hungry, avoid impulse purchases, and beware of "deals" on items you don't need.
                  </p>
                </div>
              </div>
            </div>

          </CardContent>
        </Card>

        {/* Section 3 - Budget Meal Ideas */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5" />
              $5 and Under Meal Ideas
            </CardTitle>
            <CardDescription>Satisfying meals for the whole family</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold">Bean and Rice Bowl</h4>
                    <Badge variant="outline">$3.50 for 4 servings</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Brown rice, black beans, sautéed onions, and frozen corn with simple seasonings.
                  </p>
                  <div className="flex gap-2">
                    <Badge variant="secondary" className="text-xs">High Protein</Badge>
                    <Badge variant="secondary" className="text-xs">Meal Prep Friendly</Badge>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold">Pasta with Marinara and Vegetables</h4>
                    <Badge variant="outline">$4.00 for 4 servings</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Whole wheat pasta, jarred marinara, frozen mixed vegetables, and parmesan cheese.
                  </p>
                  <div className="flex gap-2">
                    <Badge variant="secondary" className="text-xs">Quick Cook</Badge>
                    <Badge variant="secondary" className="text-xs">Kid Friendly</Badge>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold">Egg Fried Rice</h4>
                    <Badge variant="outline">$3.00 for 4 servings</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Leftover rice, scrambled eggs, frozen peas and carrots, soy sauce, and garlic.
                  </p>
                  <div className="flex gap-2">
                    <Badge variant="secondary" className="text-xs">Uses Leftovers</Badge>
                    <Badge variant="secondary" className="text-xs">One Pan</Badge>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold">Lentil Soup</h4>
                    <Badge variant="outline">$4.50 for 6 servings</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Red lentils, carrots, onions, celery, canned tomatoes, and vegetable broth.
                  </p>
                  <div className="flex gap-2">
                    <Badge variant="secondary" className="text-xs">Freezer Friendly</Badge>
                    <Badge variant="secondary" className="text-xs">High Fiber</Badge>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold">Potato and Egg Skillet</h4>
                    <Badge variant="outline">$3.75 for 4 servings</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Diced potatoes, onions, scrambled eggs, and cheese with herbs and spices.
                  </p>
                  <div className="flex gap-2">
                    <Badge variant="secondary" className="text-xs">Breakfast for Dinner</Badge>
                    <Badge variant="secondary" className="text-xs">Filling</Badge>
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
              Expert Budget Cooking Tips
            </CardTitle>
            <CardDescription>Professional strategies for maximum savings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-800 mb-2">Cook Once, Eat Twice</h4>
                <p className="text-sm text-green-700">
                  Make double batches and transform leftovers into new meals. Today's roast chicken becomes tomorrow's soup.
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-2">Master the Art of Seasoning</h4>
                <p className="text-sm text-blue-700">
                  Basic ingredients become exciting with the right spices. Invest in versatile seasonings like garlic powder, paprika, and Italian herbs.
                </p>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h4 className="font-semibold text-purple-800 mb-2">Grow Your Own Herbs</h4>
                <p className="text-sm text-purple-700">
                  Fresh herbs are expensive but easy to grow. Start with basil, parsley, and cilantro on a windowsill.
                </p>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <h4 className="font-semibold text-orange-800 mb-2">Track Your Food Costs</h4>
                <p className="text-sm text-orange-700">
                  Keep receipts for a month to understand spending patterns. You might be surprised where your money goes.
                </p>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h4 className="font-semibold text-red-800 mb-2">Learn to Love Leftovers</h4>
                <p className="text-sm text-red-700">
                  Transform rather than repeat. Add different sauces, wrap in tortillas, or turn into fried rice.
                </p>
              </div>

              <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
                <h4 className="font-semibold text-teal-800 mb-2">Stock Up Smart</h4>
                <p className="text-sm text-teal-700">
                  When non-perishables go on deep discount, buy enough to last until the next sale cycle (usually 6-12 weeks).
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
          <CardDescription>Tools for budget cooking success</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">Seasonal Produce Calendar</h4>
                <p className="text-sm text-muted-foreground">Find the cheapest, freshest produce month by month</p>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">Store Brand Comparison Tool</h4>
                <p className="text-sm text-muted-foreground">Compare generic vs. name brand prices and quality</p>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">Budget Recipe Database</h4>
                <p className="text-sm text-muted-foreground">Hundreds of tested recipes under $5 per serving</p>
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
          <CardTitle className="text-primary">Ready to Cook on a Budget?</CardTitle>
          <CardDescription>Start planning meals that save money without sacrificing nutrition</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Button>
              Start Budget Meal Planning
            </Button>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Download Shopping List Template
            </Button>
          </div>
        </CardContent>
      </Card>

    </div>
  )
}