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
  ExternalLink
} from "lucide-react"

export function NutritionBasics() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Nutrition Basics</h1>
        <p className="text-xl text-muted-foreground">
          Essential nutritional knowledge for balanced meal planning
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
            Key nutritional information at a glance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">3:1:1</div>
              <p className="text-sm text-muted-foreground">Carbs:Protein:Fat ratio</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">5-9</div>
              <p className="text-sm text-muted-foreground">Daily fruit & veggie servings</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">64oz</div>
              <p className="text-sm text-muted-foreground">Daily water intake</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Content Sections */}
      <div className="space-y-6">
        
        {/* Section 1 - Macronutrients */}
        <Card>
          <CardHeader>
            <CardTitle>Understanding Macronutrients</CardTitle>
            <CardDescription>The building blocks of balanced nutrition</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Macronutrients are the three main nutrient categories your body needs in large amounts for energy and proper function.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Carbohydrates (45-65% of calories)</h4>
                  <p className="text-sm text-muted-foreground">
                    Primary energy source. Choose whole grains, fruits, and vegetables over refined sugars.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Protein (10-35% of calories)</h4>
                  <p className="text-sm text-muted-foreground">
                    Essential for muscle repair and growth. Include lean meats, fish, legumes, and dairy.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Fats (20-35% of calories)</h4>
                  <p className="text-sm text-muted-foreground">
                    Vital for hormone production and nutrient absorption. Focus on healthy fats like olive oil, nuts, and avocados.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Fiber (25-35g daily)</h4>
                  <p className="text-sm text-muted-foreground">
                    Supports digestive health and helps you feel full. Found in fruits, vegetables, and whole grains.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Hydration (8-10 glasses daily)</h4>
                  <p className="text-sm text-muted-foreground">
                    Essential for all bodily functions. Water needs vary based on activity level and climate.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 2 - Micronutrients */}
        <Card>
          <CardHeader>
            <CardTitle>Essential Micronutrients</CardTitle>
            <CardDescription>Vitamins and minerals your body needs</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            
            {/* Checklist Format */}
            <div className="space-y-3">
              <h4 className="font-semibold">Essential Vitamins & Minerals:</h4>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Vitamin D (sunlight, fortified foods)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Vitamin B12 (meat, dairy, supplements)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Iron (red meat, spinach, beans)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Calcium (dairy, leafy greens)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Omega-3 fatty acids (fish, walnuts)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Potassium (bananas, potatoes)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Magnesium (nuts, seeds, whole grains)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Zinc (meat, shellfish, legumes)</span>
                </div>
              </div>
            </div>

            {/* Warning/Tip Box */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-start gap-2">
                <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-yellow-800">Supplement Wisely</h4>
                  <p className="text-sm text-yellow-700">
                    Most nutrients are best obtained from whole foods. Consult a healthcare provider before starting supplements, especially if you have medical conditions.
                  </p>
                </div>
              </div>
            </div>

          </CardContent>
        </Card>

        {/* Section 3 - Building Balanced Plates */}
        <Card>
          <CardHeader>
            <CardTitle>Building Balanced Meals</CardTitle>
            <CardDescription>Simple framework for every meal</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Timeline Steps */}
              <div className="relative">
                <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-border"></div>
                
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold">
                      ½
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">Fill Half Your Plate with Vegetables</h4>
                      <p className="text-sm text-muted-foreground">
                        Mix colorful non-starchy vegetables like leafy greens, broccoli, bell peppers, and tomatoes.
                      </p>
                      <Badge variant="outline" className="mt-2">Priority: High fiber & nutrients</Badge>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold">
                      ¼
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">Add Quality Protein</h4>
                      <p className="text-sm text-muted-foreground">
                        Include lean meats, fish, eggs, legumes, or plant-based proteins.
                      </p>
                      <Badge variant="outline" className="mt-2">Goal: 20-30g per meal</Badge>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold">
                      ¼
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">Choose Complex Carbohydrates</h4>
                      <p className="text-sm text-muted-foreground">
                        Opt for whole grains, quinoa, brown rice, or sweet potatoes over refined options.
                      </p>
                      <Badge variant="outline" className="mt-2">Focus: Sustained energy</Badge>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold">
                      +
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">Add Healthy Fats</h4>
                      <p className="text-sm text-muted-foreground">
                        Include olive oil, avocado, nuts, or seeds for flavor and satiety.
                      </p>
                      <Badge variant="outline" className="mt-2">Amount: 1-2 tablespoons</Badge>
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
              Expert Nutrition Tips
            </CardTitle>
            <CardDescription>Professional insights for optimal nutrition</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-2">Timing Matters</h4>
                <p className="text-sm text-blue-700">
                  Eat protein within 30 minutes after exercise and include carbs with evening meals to support sleep.
                </p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-800 mb-2">Color Your Plate</h4>
                <p className="text-sm text-green-700">
                  Different colored fruits and vegetables provide different antioxidants. Aim for 5+ colors daily.
                </p>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h4 className="font-semibold text-purple-800 mb-2">Listen to Your Body</h4>
                <p className="text-sm text-purple-700">
                  Hunger and fullness cues are your best guides. Eat slowly and stop when satisfied, not stuffed.
                </p>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <h4 className="font-semibold text-orange-800 mb-2">Prep for Success</h4>
                <p className="text-sm text-orange-700">
                  Keep healthy snacks visible and accessible. When nutritious options are convenient, you'll choose them more often.
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
          <CardDescription>Helpful links and further reading</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">USDA MyPlate Guidelines</h4>
                <p className="text-sm text-muted-foreground">Official dietary guidelines and portion recommendations</p>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">Nutrition Label Reading Guide</h4>
                <p className="text-sm text-muted-foreground">Learn to decode food labels and make informed choices</p>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">Seasonal Produce Guide</h4>
                <p className="text-sm text-muted-foreground">Find the freshest, most affordable fruits and vegetables by season</p>
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
              Start Meal Planning
            </Button>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Download Nutrition Checklist
            </Button>
          </div>
        </CardContent>
      </Card>

    </div>
  )
}