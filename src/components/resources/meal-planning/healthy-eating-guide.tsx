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
  Heart,
  Target
} from "lucide-react"

export function HealthyEatingGuide() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Healthy Eating Guide</h1>
        <p className="text-xl text-muted-foreground">
          Science-backed strategies for long-term health and wellness
        </p>
        <div className="flex justify-center gap-2">
          <Badge>Evidence-Based</Badge>
          <Badge variant="outline">Sustainable Habits</Badge>
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
            Key principles of healthy eating
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">80/20</div>
              <p className="text-sm text-muted-foreground">Rule for balanced eating</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">30+</div>
              <p className="text-sm text-muted-foreground">Different plant foods weekly</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">5-6</div>
              <p className="text-sm text-muted-foreground">Small meals per day</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Content Sections */}
      <div className="space-y-6">
        
        {/* Section 1 - Principles of Healthy Eating */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5" />
              Core Principles of Healthy Eating
            </CardTitle>
            <CardDescription>Foundation habits for lasting health</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Healthy eating isn't about strict limitations or depriving yourself. It's about feeling great, having more energy, and improving your health.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Eat Whole, Minimally Processed Foods</h4>
                  <p className="text-sm text-muted-foreground">
                    Choose foods close to their natural state. Fresh fruits, vegetables, whole grains, and lean proteins should form the majority of your diet.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Practice Portion Control</h4>
                  <p className="text-sm text-muted-foreground">
                    Use your hands as a guide: palm-sized proteins, cupped handful of carbs, thumb-sized fats, and unlimited non-starchy vegetables.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Stay Consistently Hydrated</h4>
                  <p className="text-sm text-muted-foreground">
                    Drink water throughout the day. Start meals with a glass of water and choose water over sugary drinks.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Eat Mindfully and Slowly</h4>
                  <p className="text-sm text-muted-foreground">
                    Take time to enjoy your food. Eating slowly helps with digestion and allows you to recognize fullness cues.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Plan and Prepare Ahead</h4>
                  <p className="text-sm text-muted-foreground">
                    Success in healthy eating comes from preparation. Plan meals, prep ingredients, and have healthy snacks ready.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 2 - Building Healthy Habits */}
        <Card>
          <CardHeader>
            <CardTitle>Building Sustainable Eating Habits</CardTitle>
            <CardDescription>Gradual changes that stick for life</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            
            {/* Checklist Format */}
            <div className="space-y-3">
              <h4 className="font-semibold">Week 1-2: Foundation Habits</h4>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Drink water with every meal</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Add one vegetable to each meal</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Eat without distractions</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Track hunger before eating</span>
                </div>
              </div>
            </div>

            <Separator />

            <div className="space-y-3">
              <h4 className="font-semibold">Week 3-4: Expanding Choices</h4>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Try one new whole food weekly</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Replace one processed snack</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Prep healthy snacks in advance</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Cook at home 4+ nights weekly</span>
                </div>
              </div>
            </div>

            <Separator />

            <div className="space-y-3">
              <h4 className="font-semibold">Month 2+: Advanced Habits</h4>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Meal prep 2-3 days ahead</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Experiment with herbs and spices</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Include fermented foods</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Practice intuitive eating</span>
                </div>
              </div>
            </div>

            {/* Warning/Tip Box */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start gap-2">
                <Target className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-blue-800">Start Small, Be Consistent</h4>
                  <p className="text-sm text-blue-700">
                    Focus on one habit at a time for 2-3 weeks before adding another. Consistency beats perfection every time.
                  </p>
                </div>
              </div>
            </div>

          </CardContent>
        </Card>

        {/* Section 3 - Superfoods and Nutrient Dense Choices */}
        <Card>
          <CardHeader>
            <CardTitle>Nutrient-Dense Food Choices</CardTitle>
            <CardDescription>Foods that pack the most nutritional punch</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Leafy Greens (Spinach, Kale, Arugula)</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Rich in vitamins K, A, C, folate, and iron. Add to smoothies, salads, soups, or sauté as a side.
                  </p>
                  <div className="flex gap-2">
                    <Badge variant="secondary" className="text-xs">High Iron</Badge>
                    <Badge variant="secondary" className="text-xs">Antioxidants</Badge>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Berries (Blueberries, Strawberries, Blackberries)</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Packed with antioxidants, fiber, and vitamin C. Great fresh, frozen, or in smoothies and oatmeal.
                  </p>
                  <div className="flex gap-2">
                    <Badge variant="secondary" className="text-xs">Antioxidants</Badge>
                    <Badge variant="secondary" className="text-xs">Low Sugar</Badge>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Fatty Fish (Salmon, Sardines, Mackerel)</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Excellent source of omega-3 fatty acids, protein, and vitamin D. Aim for 2-3 servings per week.
                  </p>
                  <div className="flex gap-2">
                    <Badge variant="secondary" className="text-xs">Omega-3</Badge>
                    <Badge variant="secondary" className="text-xs">Heart Healthy</Badge>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Nuts and Seeds (Almonds, Walnuts, Chia, Flax)</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Provide healthy fats, protein, fiber, and various minerals. Perfect for snacks or adding to meals.
                  </p>
                  <div className="flex gap-2">
                    <Badge variant="secondary" className="text-xs">Healthy Fats</Badge>
                    <Badge variant="secondary" className="text-xs">Protein</Badge>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Colorful Vegetables (Bell Peppers, Carrots, Sweet Potatoes)</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Different colors provide different nutrients. Aim for a rainbow on your plate throughout the week.
                  </p>
                  <div className="flex gap-2">
                    <Badge variant="secondary" className="text-xs">Variety</Badge>
                    <Badge variant="secondary" className="text-xs">Vitamins</Badge>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Whole Grains (Quinoa, Brown Rice, Oats)</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Provide sustained energy, fiber, and B vitamins. Choose whole grains over refined for better nutrition.
                  </p>
                  <div className="flex gap-2">
                    <Badge variant="secondary" className="text-xs">Fiber</Badge>
                    <Badge variant="secondary" className="text-xs">Sustained Energy</Badge>
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
              Expert Healthy Eating Tips
            </CardTitle>
            <CardDescription>Evidence-based strategies from nutrition professionals</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-800 mb-2">Follow the 80/20 Rule</h4>
                <p className="text-sm text-green-700">
                  Eat nutritiously 80% of the time, and allow flexibility for 20%. This prevents feelings of deprivation and supports long-term success.
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-2">Time Your Carbs</h4>
                <p className="text-sm text-blue-700">
                  Eat more carbs earlier in the day when you need energy, and focus on proteins and vegetables for dinner.
                </p>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h4 className="font-semibold text-purple-800 mb-2">Eat the Rainbow</h4>
                <p className="text-sm text-purple-700">
                  Different colored foods provide different phytonutrients. Aim for at least 3 different colors at each meal.
                </p>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <h4 className="font-semibold text-orange-800 mb-2">Listen to Your Body</h4>
                <p className="text-sm text-orange-700">
                  Pay attention to how foods make you feel. Energy levels, digestion, and mood can all be clues about what works for your body.
                </p>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h4 className="font-semibold text-red-800 mb-2">Don't Drink Your Calories</h4>
                <p className="text-sm text-red-700">
                  Liquid calories from sodas, juices, and fancy coffee drinks add up quickly without providing satiety.
                </p>
              </div>

              <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
                <h4 className="font-semibold text-teal-800 mb-2">Sleep Affects Hunger</h4>
                <p className="text-sm text-teal-700">
                  Poor sleep disrupts hormones that control hunger and fullness. Prioritize 7-9 hours of quality sleep nightly.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 4 - Common Challenges */}
        <Card>
          <CardHeader>
            <CardTitle>Overcoming Common Challenges</CardTitle>
            <CardDescription>Solutions for typical healthy eating obstacles</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            
            <div className="space-y-3">
              <div className="border-l-4 border-yellow-400 pl-4">
                <h4 className="font-semibold">Challenge: "I don't have time to cook"</h4>
                <p className="text-sm text-muted-foreground">
                  Solution: Start with 15-minute meals, batch cook on weekends, and keep healthy convenience foods like pre-cut vegetables and rotisserie chicken on hand.
                </p>
              </div>
              
              <div className="border-l-4 border-blue-400 pl-4">
                <h4 className="font-semibold">Challenge: "Healthy food is too expensive"</h4>
                <p className="text-sm text-muted-foreground">
                  Solution: Buy seasonal produce, shop sales, choose frozen vegetables, and cook at home more often. Focus on affordable staples like beans, rice, and eggs.
                </p>
              </div>

              <div className="border-l-4 border-green-400 pl-4">
                <h4 className="font-semibold">Challenge: "I crave junk food constantly"</h4>
                <p className="text-sm text-muted-foreground">
                  Solution: Don't keep tempting foods at home, eat regular meals to avoid extreme hunger, and find healthier alternatives for your favorite flavors.
                </p>
              </div>

              <div className="border-l-4 border-purple-400 pl-4">
                <h4 className="font-semibold">Challenge: "My family won't eat healthy foods"</h4>
                <p className="text-sm text-muted-foreground">
                  Solution: Make gradual changes, involve family in meal planning and cooking, and focus on adding nutritious foods rather than restricting favorites.
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
          <CardDescription>Evidence-based nutrition information and tools</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">Harvard Healthy Eating Plate</h4>
                <p className="text-sm text-muted-foreground">Visual guide to creating balanced meals from Harvard School of Public Health</p>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">Nutrition Facts Label Guide</h4>
                <p className="text-sm text-muted-foreground">Learn to read and understand nutrition labels effectively</p>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">Mindful Eating Resources</h4>
                <p className="text-sm text-muted-foreground">Tools and techniques for developing a healthier relationship with food</p>
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
          <CardTitle className="text-primary">Ready to Transform Your Eating Habits?</CardTitle>
          <CardDescription>Start building sustainable, healthy eating patterns today</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Button>
              Start Healthy Meal Planning
            </Button>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Download Habit Tracker
            </Button>
          </div>
        </CardContent>
      </Card>

    </div>
  )
}