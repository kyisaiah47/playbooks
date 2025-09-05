"use client"

export function NutritionGuide() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Complete Nutrition Guide</h1>
        <p className="text-muted-foreground">
          Everything you need to know about nutrition for your fitness journey, from basics to advanced strategies.
        </p>
      </div>

      <div className="space-y-6">
        {/* Nutrition Fundamentals */}
        <div className="bg-muted/30 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-primary">Nutrition Fundamentals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Macronutrients</h3>
              <div className="space-y-3">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold">Protein (4 cal/g)</h4>
                  <p className="text-sm text-muted-foreground">Builds and repairs muscle tissue. Aim for 0.8-1.2g per pound of body weight.</p>
                  <p className="text-sm mt-1"><strong>Sources:</strong> Chicken, fish, eggs, beans, Greek yogurt, quinoa</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold">Carbohydrates (4 cal/g)</h4>
                  <p className="text-sm text-muted-foreground">Primary energy source for workouts. Focus on complex carbs.</p>
                  <p className="text-sm mt-1"><strong>Sources:</strong> Oats, rice, potatoes, fruits, vegetables, whole grains</p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-semibold">Fats (9 cal/g)</h4>
                  <p className="text-sm text-muted-foreground">Essential for hormone production and nutrient absorption.</p>
                  <p className="text-sm mt-1"><strong>Sources:</strong> Avocados, nuts, olive oil, fatty fish, seeds</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Micronutrients</h3>
              <div className="space-y-2">
                <div>
                  <h4 className="font-semibold text-sm">Key Vitamins for Fitness</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Vitamin D: Bone health, immune function</li>
                    <li>• B Vitamins: Energy metabolism</li>
                    <li>• Vitamin C: Recovery, immune support</li>
                    <li>• Vitamin E: Antioxidant protection</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Essential Minerals</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Iron: Oxygen transport, energy</li>
                    <li>• Magnesium: Muscle function, recovery</li>
                    <li>• Zinc: Immune function, healing</li>
                    <li>• Calcium: Bone health, muscle contraction</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Meal Timing & Frequency */}
        <div className="bg-muted/30 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-primary">Meal Timing & Frequency</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-3">Pre-Workout</h3>
              <div className="bg-background rounded-lg p-4">
                <p className="text-sm font-semibold mb-2">1-3 hours before</p>
                <p className="text-sm text-muted-foreground mb-3">Balanced meal with carbs and protein</p>
                <p className="text-xs"><strong>Examples:</strong> Oatmeal with berries, banana with peanut butter</p>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-3">During Workout</h3>
              <div className="bg-background rounded-lg p-4">
                <p className="text-sm font-semibold mb-2">If 60+ minutes</p>
                <p className="text-sm text-muted-foreground mb-3">Simple carbs and electrolytes</p>
                <p className="text-xs"><strong>Examples:</strong> Sports drink, banana, dates</p>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-3">Post-Workout</h3>
              <div className="bg-background rounded-lg p-4">
                <p className="text-sm font-semibold mb-2">Within 30-60 minutes</p>
                <p className="text-sm text-muted-foreground mb-3">Protein + carbs for recovery</p>
                <p className="text-xs"><strong>Examples:</strong> Protein shake with fruit, Greek yogurt with granola</p>
              </div>
            </div>
          </div>
        </div>

        {/* Hydration Guidelines */}
        <div className="bg-muted/30 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-primary">Hydration Guidelines</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Daily Water Needs</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between bg-background rounded p-3">
                  <span className="text-sm">General baseline</span>
                  <span className="font-semibold">35ml per kg body weight</span>
                </div>
                <div className="flex items-center justify-between bg-background rounded p-3">
                  <span className="text-sm">+ Exercise (per hour)</span>
                  <span className="font-semibold">500-750ml extra</span>
                </div>
                <div className="flex items-center justify-between bg-background rounded p-3">
                  <span className="text-sm">Hot weather</span>
                  <span className="font-semibold">15-20% increase</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Hydration Tips</h3>
              <ul className="space-y-2 text-sm">
                <li>• Start each day with a large glass of water</li>
                <li>• Drink water before you feel thirsty</li>
                <li>• Monitor urine color - aim for pale yellow</li>
                <li>• Include electrolytes for intense or long workouts</li>
                <li>• Eat water-rich foods (cucumber, watermelon, soup)</li>
                <li>• Set reminders to drink water throughout the day</li>
                <li>• Drink extra water when consuming caffeine or alcohol</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Nutrition for Different Goals */}
        <div className="bg-muted/30 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-primary">Nutrition by Fitness Goal</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-red-50 dark:bg-red-950/20 rounded-lg p-4 border border-red-200 dark:border-red-800">
              <h3 className="text-lg font-semibold mb-3 text-red-700 dark:text-red-300">Weight Loss</h3>
              <ul className="space-y-1 text-sm">
                <li>• Create moderate calorie deficit (300-500 cal)</li>
                <li>• Prioritize protein to preserve muscle</li>
                <li>• Focus on nutrient-dense, filling foods</li>
                <li>• Include fiber-rich vegetables</li>
                <li>• Practice portion control</li>
                <li>• Stay hydrated to support metabolism</li>
              </ul>
            </div>
            <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
              <h3 className="text-lg font-semibold mb-3 text-blue-700 dark:text-blue-300">Muscle Gain</h3>
              <ul className="space-y-1 text-sm">
                <li>• Moderate calorie surplus (200-500 cal)</li>
                <li>• High protein intake (1.2-1.6g per lb)</li>
                <li>• Adequate carbs for training energy</li>
                <li>• Time protein throughout the day</li>
                <li>• Don't fear healthy fats</li>
                <li>• Prioritize post-workout nutrition</li>
              </ul>
            </div>
            <div className="bg-green-50 dark:bg-green-950/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
              <h3 className="text-lg font-semibold mb-3 text-green-700 dark:text-green-300">Performance</h3>
              <ul className="space-y-1 text-sm">
                <li>• Fuel workouts with adequate carbs</li>
                <li>• Time nutrition around training</li>
                <li>• Optimize recovery with protein</li>
                <li>• Include anti-inflammatory foods</li>
                <li>• Maintain consistent energy levels</li>
                <li>• Consider sport-specific needs</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Meal Planning Made Simple */}
        <div className="bg-muted/30 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-primary">Meal Planning Made Simple</h2>
          <div className="space-y-4">
            <div className="bg-background rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-3">The Plate Method</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-3">
                  <h4 className="font-semibold text-green-700 dark:text-green-300">1/2 Plate</h4>
                  <p className="text-sm">Non-starchy vegetables</p>
                  <p className="text-xs text-muted-foreground">Leafy greens, broccoli, peppers, tomatoes</p>
                </div>
                <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-3">
                  <h4 className="font-semibold text-blue-700 dark:text-blue-300">1/4 Plate</h4>
                  <p className="text-sm">Lean protein</p>
                  <p className="text-xs text-muted-foreground">Chicken, fish, beans, tofu, eggs</p>
                </div>
                <div className="bg-yellow-100 dark:bg-yellow-900/30 rounded-lg p-3">
                  <h4 className="font-semibold text-yellow-700 dark:text-yellow-300">1/4 Plate</h4>
                  <p className="text-sm">Complex carbs</p>
                  <p className="text-xs text-muted-foreground">Brown rice, quinoa, sweet potato</p>
                </div>
                <div className="bg-orange-100 dark:bg-orange-900/30 rounded-lg p-3">
                  <h4 className="font-semibold text-orange-700 dark:text-orange-300">Thumb Size</h4>
                  <p className="text-sm">Healthy fats</p>
                  <p className="text-xs text-muted-foreground">Avocado, nuts, olive oil</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Common Nutrition Mistakes */}
        <div className="bg-destructive/10 border-l-4 border-destructive rounded-lg p-6">
          <h3 className="text-xl font-bold mb-3 text-destructive">Common Nutrition Mistakes to Avoid</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="space-y-2 text-sm">
              <li>• Drastically cutting calories too quickly</li>
              <li>• Eliminating entire food groups unnecessarily</li>
              <li>• Ignoring portion sizes even with healthy foods</li>
              <li>• Not eating enough protein for your activity level</li>
              <li>• Relying too heavily on supplements vs. whole foods</li>
            </ul>
            <ul className="space-y-2 text-sm">
              <li>• Skipping meals and then overeating later</li>
              <li>• Not staying consistent on weekends</li>
              <li>• Focusing only on calories, ignoring nutrition quality</li>
              <li>• Not adjusting intake as goals and activity change</li>
              <li>• Having unrealistic expectations about timeframes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}