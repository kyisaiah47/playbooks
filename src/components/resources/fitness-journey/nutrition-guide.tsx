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
  Apple,
  Scale,
  Clock
} from "lucide-react"

export function NutritionGuide() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Nutrition Facts & Guidelines</h1>
        <p className="text-xl text-muted-foreground">
          Fuel your fitness journey with proper nutrition knowledge
        </p>
        <div className="flex justify-center gap-2">
          <Badge>Science-Based</Badge>
          <Badge variant="outline">Comprehensive Guide</Badge>
        </div>
      </div>

      {/* Quick Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5" />
            Macro Basics
          </CardTitle>
          <CardDescription>
            Essential macronutrient breakdown
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">4 cal/g</div>
              <p className="text-sm text-muted-foreground">Protein & Carbs</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">9 cal/g</div>
              <p className="text-sm text-muted-foreground">Fats</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">0.8-1g/lb</div>
              <p className="text-sm text-muted-foreground">Protein per body weight</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Macronutrients Section */}
      <Card>
        <CardHeader>
          <CardTitle>Understanding Macronutrients</CardTitle>
          <CardDescription>The building blocks of your diet</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Each macronutrient serves a specific purpose in supporting your fitness goals and overall health.
          </p>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Apple className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Protein (4 calories per gram)</h4>
                <p className="text-sm text-muted-foreground">
                  Builds and repairs muscle tissue. Aim for 0.8-1.2g per pound of body weight. Sources: lean meats, fish, eggs, dairy, legumes.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Scale className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Carbohydrates (4 calories per gram)</h4>
                <p className="text-sm text-muted-foreground">
                  Primary energy source for workouts. 45-65% of total calories. Focus on complex carbs: oats, rice, quinoa, fruits, vegetables.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Fats (9 calories per gram)</h4>
                <p className="text-sm text-muted-foreground">
                  Essential for hormone production and nutrient absorption. 20-35% of total calories. Sources: nuts, oils, avocado, fatty fish.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Hydration</h4>
                <p className="text-sm text-muted-foreground">
                  Aim for 0.5-1 oz per pound of body weight daily. Increase during exercise and hot weather.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Meal Timing and Frequency */}
      <Card>
        <CardHeader>
          <CardTitle>Meal Timing & Frequency</CardTitle>
          <CardDescription>Optimize your eating schedule for performance</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          
          {/* Meal Timing Guidelines */}
          <div className="space-y-3">
            <h4 className="font-semibold">Pre and Post-Workout Nutrition:</h4>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span className="text-sm">Pre-workout: Carbs 1-3 hours before</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span className="text-sm">Post-workout: Protein + carbs within 2 hours</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span className="text-sm">Hydrate before, during, and after exercise</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span className="text-sm">Avoid heavy meals 2-3 hours before workouts</span>
              </div>
            </div>
          </div>

          {/* Warning Box */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-start gap-2">
              <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
              <div>
                <h4 className="font-semibold text-yellow-800">Individual Variation</h4>
                <p className="text-sm text-yellow-700">
                  Meal timing preferences vary by person. Some perform well fasted, others need pre-workout fuel. Experiment to find what works for you.
                </p>
              </div>
            </div>
          </div>

        </CardContent>
      </Card>

      {/* Nutrition for Different Goals */}
      <Card>
        <CardHeader>
          <CardTitle>Nutrition by Fitness Goal</CardTitle>
          <CardDescription>Adjust your approach based on your objectives</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Goal-specific nutrition */}
            <div className="relative">
              <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-border"></div>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold">
                    💪
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Muscle Building</h4>
                    <p className="text-sm text-muted-foreground">
                      Calorie surplus (300-500 above maintenance), high protein (1-1.2g/lb), adequate carbs for energy.
                    </p>
                    <Badge variant="outline" className="mt-2">Surplus: +300-500 cal</Badge>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold">
                    🔥
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Fat Loss</h4>
                    <p className="text-sm text-muted-foreground">
                      Calorie deficit (300-500 below maintenance), high protein to preserve muscle, moderate carbs and fats.
                    </p>
                    <Badge variant="outline" className="mt-2">Deficit: -300-500 cal</Badge>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold">
                    ⚖️
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Body Recomposition</h4>
                    <p className="text-sm text-muted-foreground">
                      Eat at maintenance calories, very high protein (1.2-1.4g/lb), strength training focus.
                    </p>
                    <Badge variant="outline" className="mt-2">Maintenance calories</Badge>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold">
                    🏃
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Endurance Performance</h4>
                    <p className="text-sm text-muted-foreground">
                      Higher carbohydrate intake (5-7g/kg body weight), moderate protein, strategic carb timing around training.
                    </p>
                    <Badge variant="outline" className="mt-2">High carb focus</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Supplements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5 text-yellow-500" />
            Evidence-Based Supplements
          </CardTitle>
          <CardDescription>Supplements with proven benefits</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">Protein Powder</h4>
              <p className="text-sm text-blue-700">
                Convenient way to meet protein targets. Whey digests quickly, casein slowly. 20-40g per serving.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-2">Creatine Monohydrate</h4>
              <p className="text-sm text-green-700">
                Improves strength and power output. 3-5g daily, timing doesn't matter. Safe for long-term use.
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h4 className="font-semibold text-purple-800 mb-2">Vitamin D3</h4>
              <p className="text-sm text-purple-700">
                Essential for bone health and immune function. Most people are deficient. 1000-4000 IU daily.
              </p>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h4 className="font-semibold text-orange-800 mb-2">Omega-3 Fatty Acids</h4>
              <p className="text-sm text-orange-700">
                Reduces inflammation, supports heart health. 1-3g EPA/DHA daily from fish oil or algae.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Meal Planning Tips */}
      <Card>
        <CardHeader>
          <CardTitle>Practical Meal Planning</CardTitle>
          <CardDescription>Make nutrition sustainable and convenient</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Meal Prep Basics */}
            <div className="space-y-3">
              <h4 className="font-semibold">Meal Prep Strategies:</h4>
              <ul className="space-y-2 text-sm">
                <li>• <strong>Batch cooking:</strong> Cook grains, proteins in bulk</li>
                <li>• <strong>Mason jar salads:</strong> Pre-portioned, stays fresh</li>
                <li>• <strong>Freezer meals:</strong> Prepare complete meals to freeze</li>
                <li>• <strong>Snack prep:</strong> Portion nuts, fruits, yogurt</li>
                <li>• <strong>Shopping lists:</strong> Plan meals, shop efficiently</li>
              </ul>
            </div>

            {/* Quick Meal Ideas */}
            <div className="space-y-3">
              <h4 className="font-semibold">Quick & Healthy Meals:</h4>
              <div className="bg-background rounded p-4 border space-y-2 text-sm">
                <div>• <strong>Breakfast:</strong> Greek yogurt + berries + granola</div>
                <div>• <strong>Lunch:</strong> Quinoa bowl + chicken + vegetables</div>
                <div>• <strong>Dinner:</strong> Salmon + sweet potato + broccoli</div>
                <div>• <strong>Snack:</strong> Apple + almond butter</div>
                <div>• <strong>Post-workout:</strong> Protein shake + banana</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Additional Resources */}
      <Card>
        <CardHeader>
          <CardTitle>Additional Resources</CardTitle>
          <CardDescription>Tools and references for nutrition success</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">TDEE Calculator</h4>
                <p className="text-sm text-muted-foreground">Calculate your daily caloric needs based on activity level</p>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Calculate
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">Macro Tracking Apps</h4>
                <p className="text-sm text-muted-foreground">MyFitnessPal, Cronometer, or similar for food logging</p>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Compare
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">Meal Plan Templates</h4>
                <p className="text-sm text-muted-foreground">Customizable meal plans for different goals and dietary preferences</p>
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
          <CardTitle className="text-primary">Ready to Optimize Your Nutrition?</CardTitle>
          <CardDescription>Use our guided notes to create your nutrition plan</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Button>
              Plan Your Nutrition
            </Button>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Nutrition Checklist
            </Button>
          </div>
        </CardContent>
      </Card>

    </div>
  )
}