"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function NutritionPlanning() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Nutrition Planning & Meal Prep</h1>
        <p className="text-muted-foreground">Create a sustainable nutrition plan that supports your fitness goals and lifestyle.</p>
      </div>

      <Tabs defaultValue="nutrition-goals" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="nutrition-goals" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Nutrition Goals</span>
            <span className="sm:hidden">Goals</span>
          </TabsTrigger>
          <TabsTrigger value="meal-planning" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Meal Planning</span>
            <span className="sm:hidden">Planning</span>
          </TabsTrigger>
          <TabsTrigger value="meal-prep" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Meal Prep</span>
            <span className="sm:hidden">Prep</span>
          </TabsTrigger>
          <TabsTrigger value="tracking" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Tracking</span>
            <span className="sm:hidden">Track</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="nutrition-goals">
          <GuidedNotePage
            title="Nutrition Goals & Strategy"
            description="Define your nutritional needs and create a sustainable eating strategy"
            sections={[
              {
                title: "Caloric & Macro Goals",
                prompts: [
                  "What are your daily caloric needs based on your goals and activity level?",
                  "How will you balance proteins, carbohydrates, and fats in your diet?",
                  "What specific nutritional requirements do you have for your fitness goals?",
                  "How will you adjust your nutrition for workout days vs. rest days?",
                  "What role will supplements play in meeting your nutritional needs?"
                ],
                examples: [
                  "2200 calories for maintenance, 1700 for weight loss, 2500 for muscle gain, adjust based on results",
                  "40% carbs, 30% protein, 30% fat for general fitness, higher protein for muscle building",
                  "1g protein per lb bodyweight for muscle, complex carbs for energy, healthy fats for hormones",
                  "More carbs on workout days, maintain protein, possibly eat more overall on training days",
                  "Protein powder for convenience, multivitamin for insurance, creatine for strength, minimal approach"
                ]
              },
              {
                title: "Food Preferences & Restrictions",
                prompts: [
                  "What foods do you genuinely enjoy that can support your goals?",
                  "Do you have any food allergies, intolerances, or dietary restrictions?",
                  "What cultural or family food traditions are important to maintain?",
                  "How will you handle social eating situations while staying on track?",
                  "What foods have triggered overeating or unhealthy patterns in the past?"
                ],
                examples: [
                  "Build meals around liked proteins, vegetables, grains - don't force foods you hate",
                  "Gluten-free, dairy-free, vegetarian, vegan, nut allergies, specific medical restrictions",
                  "Holiday meals, family recipes, cultural celebrations - work these into your plan",
                  "Plan ahead for restaurants, bring healthy options to gatherings, focus on portions",
                  "Processed snacks, trigger foods, emotional eating patterns, all-or-nothing thinking"
                ]
              },
              {
                title: "Eating Patterns & Timing",
                prompts: [
                  "What eating schedule works best with your daily routine and energy needs?",
                  "How will you time your meals around your workouts for optimal performance?",
                  "What approach will you take to snacking and between-meal eating?",
                  "How will you handle eating when your schedule gets disrupted?",
                  "What hydration goals will you set to support your nutrition plan?"
                ],
                examples: [
                  "3 meals + 2 snacks, intermittent fasting, 5-6 small meals, whatever fits your schedule consistently",
                  "Carbs 1-2 hours before workouts, protein within 30 minutes after, light if early morning",
                  "Planned healthy snacks vs. intuitive eating, protein-rich options, pre-portioned amounts",
                  "Backup meal options, healthy convenience foods, flexible timing, maintain overall balance",
                  "8-10 glasses water daily, more on workout days, track intake, flavor with fruit/herbs"
                ]
              },
              {
                title: "Behavior Change Strategy",
                prompts: [
                  "What small nutritional changes will you implement first?",
                  "How will you build sustainable habits rather than relying on willpower?",
                  "What environmental changes can you make to support healthier eating?",
                  "How will you handle cravings and moments of temptation?",
                  "What non-food rewards will you use for sticking to your nutrition plan?"
                ],
                examples: [
                  "Add vegetables to meals, drink more water, reduce liquid calories, improve breakfast",
                  "Meal prep, grocery planning, consistent meal times, automatic healthy choices",
                  "Stock healthy foods, remove tempting items, prepare grab-and-go options, organize kitchen",
                  "Wait 10 minutes, drink water first, find healthy alternatives, address underlying emotions",
                  "New cookbook, kitchen equipment, massage, clothes, activities - not food-based rewards"
                ]
              }
            ]}
            tips={[
              "Focus on adding nutritious foods rather than just restricting 'bad' ones",
              "Make gradual changes that you can maintain long-term rather than dramatic overhauls",
              "Plan your nutrition around foods you actually enjoy eating",
              "Consider your lifestyle and schedule when setting nutrition goals",
              "Remember that consistency matters more than perfection"
            ]}
          />
        </TabsContent>

        <TabsContent value="meal-planning">
          <GuidedNotePage
            title="Weekly Meal Planning"
            description="Create efficient meal plans that support your goals and fit your lifestyle"
            sections={[
              {
                title: "Menu Planning System",
                prompts: [
                  "How will you plan your meals for the upcoming week?",
                  "What factors will you consider when choosing meals (time, budget, preferences)?",
                  "How will you ensure variety while maintaining nutritional goals?",
                  "What backup meal options will you have for busy or unexpected days?",
                  "How will you plan for eating out and social meals during the week?"
                ],
                examples: [
                  "Sunday planning session, apps/templates, rotation of favorite meals, seasonal planning",
                  "Prep time available, ingredient costs, family preferences, nutritional targets, cooking skills",
                  "Different proteins daily, colorful vegetables, various cooking methods, international flavors",
                  "Slow cooker meals, sheet pan dinners, healthy takeout options, freezer meals, simple swaps",
                  "Research restaurant menus, plan lighter meals around social eating, save room in daily calories"
                ]
              },
              {
                title: "Grocery Planning & Shopping",
                prompts: [
                  "What grocery shopping strategy will you use to stay organized and on-budget?",
                  "How will you organize your shopping list to make efficient store trips?",
                  "What staple foods will you always keep stocked in your kitchen?",
                  "How will you balance fresh ingredients with shelf-stable backup options?",
                  "What techniques will you use to avoid impulse purchases of unhealthy foods?"
                ],
                examples: [
                  "Weekly big trip + mid-week fresh items, detailed list organized by store layout, same day/time weekly",
                  "Categorize by produce, proteins, pantry items, frozen - match your store's layout",
                  "Eggs, chicken, rice, oats, frozen vegetables, canned beans, olive oil, spices, nuts",
                  "Fresh produce for immediate use, frozen vegetables for backup, canned proteins for emergencies",
                  "Shop with list only, avoid shopping hungry, stick to perimeter first, have meal plan ready"
                ]
              },
              {
                title: "Recipe Selection & Management",
                prompts: [
                  "What types of recipes will you focus on for easy weekday cooking?",
                  "How will you organize and store your favorite healthy recipes?",
                  "What new recipes will you try each week to prevent boredom?",
                  "How will you modify family favorites to better align with your goals?",
                  "What cooking skills do you want to develop to expand your meal options?"
                ],
                examples: [
                  "30-minute meals, one-pot dinners, sheet pan recipes, slow cooker meals, batch cooking recipes",
                  "Recipe app, binder, bookmarked websites, photo collection, family recipe modifications",
                  "One new recipe weekly, seasonal ingredients, different cuisines, cooking method variations",
                  "Reduce oil/butter, add vegetables, substitute whole grains, control portions, lighter cooking methods",
                  "Knife skills, roasting techniques, healthy sauces, meal prep strategies, new cooking methods"
                ]
              },
              {
                title: "Family & Household Considerations",
                prompts: [
                  "How will you balance your nutrition goals with family meal preferences?",
                  "What strategies will you use if family members have different dietary needs?",
                  "How will you involve others in meal planning and preparation?",
                  "What will you do when your planned meals don't appeal to the family?",
                  "How will you handle meal planning during busy family periods?"
                ],
                examples: [
                  "Base meals everyone likes, add extra vegetables to your portions, make small modifications",
                  "Cook base ingredients separately, offer variety of sides, accommodate restrictions without multiple meals",
                  "Family meal planning meetings, assign prep tasks, teach cooking skills, rotate meal choices",
                  "Have backup kid-friendly options, serve components separately, always include one food everyone likes",
                  "Double batch and freeze, simpler meals during busy times, emergency meal list, takeout backup plan"
                ]
              }
            ]}
            tips={[
              "Start with a few favorite meals and gradually expand your repertoire",
              "Plan one new recipe per week to avoid overwhelming yourself",
              "Keep your meal plans simple - complexity leads to abandonment",
              "Build meals around sales and seasonal produce to save money",
              "Involve family members in planning to increase buy-in and reduce resistance"
            ]}
          />
        </TabsContent>

        <TabsContent value="meal-prep">
          <GuidedNotePage
            title="Meal Prep & Food Preparation"
            description="Implement efficient meal prep strategies to save time and stay on track"
            sections={[
              {
                title: "Meal Prep Planning",
                prompts: [
                  "What meals and components will you prep ahead of time each week?",
                  "How much time can you realistically dedicate to meal prep weekly?",
                  "What prep-ahead strategies will work best for your schedule and preferences?",
                  "How will you organize your prep sessions for maximum efficiency?",
                  "What storage containers and equipment do you need for successful meal prep?"
                ],
                examples: [
                  "Prep proteins and grains, wash and chop vegetables, make snack portions, prepare freezer meals",
                  "2-3 hours Sunday afternoon, 1 hour twice weekly, 30 minutes daily, whatever fits consistently",
                  "Full meal prep, component prep, batch cooking, freezer meals, grab-and-go snacks",
                  "Prep list organized by cooking method, multitask while waiting, involve family members",
                  "Glass containers for microwave safety, various sizes, freezer bags, labels, quality knife set"
                ]
              },
              {
                title: "Batch Cooking Strategies",
                prompts: [
                  "What foods batch cook and store well for your favorite meals?",
                  "How will you prepare proteins in bulk for multiple meal applications?",
                  "What grains and starches will you cook in large quantities?",
                  "How will you prep vegetables to maintain freshness and nutrition?",
                  "What sauces and seasonings can you make ahead to add variety?"
                ],
                examples: [
                  "Soups, stews, casseroles, chili, pasta sauces - freeze in portions for quick meals",
                  "Baked chicken breasts, ground turkey, hard-boiled eggs - use in salads, wraps, bowls",
                  "Brown rice, quinoa, sweet potatoes, pasta - cook once, use all week in different dishes",
                  "Wash and chop sturdy vegetables, blanch and freeze others, roast for immediate use",
                  "Pesto, tahini dressing, marinara, curry paste - small batches of flavor enhancers"
                ]
              },
              {
                title: "Storage & Food Safety",
                prompts: [
                  "How will you properly store prepped foods to maintain quality and safety?",
                  "What labeling system will you use to track freshness and contents?",
                  "How long will you keep different types of prepped foods?",
                  "What food safety practices will you follow during prep and storage?",
                  "How will you organize your refrigerator and freezer for efficient meal prep storage?"
                ],
                examples: [
                  "Airtight containers, proper refrigerator temperatures, separate raw and cooked foods",
                  "Date labels, contents description, color coding, rotation system for older items first",
                  "3-4 days for most prepped foods, 6 months frozen, 1 week for hard-boiled eggs",
                  "Wash hands frequently, clean surfaces, proper cooking temperatures, avoid cross-contamination",
                  "Designate prep containers section, freezer meal area, grab-and-go snack drawer"
                ]
              },
              {
                title: "Quick Assembly Strategies",
                prompts: [
                  "How will you create mix-and-match meal components for variety?",
                  "What grab-and-go options will you prep for busy mornings?",
                  "How will you prepare healthy snacks in advance?",
                  "What emergency meals can you keep on hand for unexpected busy days?",
                  "How will you prep ingredients for quick weeknight cooking?"
                ],
                examples: [
                  "Prepped proteins, grains, roasted vegetables - combine differently each day for variety",
                  "Overnight oats, hard-boiled eggs, pre-made smoothie packs, muffins, breakfast burritos",
                  "Cut vegetables with hummus, portioned nuts, homemade energy balls, fruit and nut butter",
                  "Freezer meals, canned soup with added vegetables, rotisserie chicken backup plans",
                  "Chopped onions, minced garlic, pre-marinated proteins, sauce components ready to go"
                ]
              }
            ]}
            tips={[
              "Start small with prepping just one or two components until you build the habit",
              "Invest in quality storage containers that will last and keep food fresh",
              "Prep ingredients rather than complete meals for more flexibility during the week",
              "Double recipes when cooking dinner to create automatic leftovers",
              "Keep a list of what you prepped and when to track freshness and plan usage"
            ]}
          />
        </TabsContent>

        <TabsContent value="tracking">
          <GuidedNotePage
            title="Nutrition Tracking & Monitoring"
            description="Monitor your nutrition intake and adjust your plan based on results"
            sections={[
              {
                title: "Food Logging Methods",
                prompts: [
                  "What method will you use to track your daily food intake?",
                  "How detailed will your food logging be (calories, macros, or general tracking)?",
                  "What times of day will you log your meals and snacks?",
                  "How long do you plan to maintain detailed food tracking?",
                  "What will you do with the information you gather from tracking?"
                ],
                examples: [
                  "Phone apps like MyFitnessPal, handwritten journal, photo log, simple check-off system",
                  "Detailed calorie/macro counting, portion awareness, basic food groups, mindful eating notes",
                  "Log as you eat, evening recap, morning planning + evening review, whatever feels sustainable",
                  "30-90 days to establish patterns, periodic check-ins, permanent habit, goal-specific periods",
                  "Identify eating patterns, adjust portions, spot nutrient gaps, celebrate successes, troubleshoot challenges"
                ]
              },
              {
                title: "Progress Monitoring",
                prompts: [
                  "What metrics beyond the scale will you use to measure nutrition success?",
                  "How often will you assess whether your nutrition plan is working?",
                  "What signs will indicate that you need to adjust your approach?",
                  "How will you track how different foods make you feel?",
                  "What non-scale victories will you celebrate related to nutrition?"
                ],
                examples: [
                  "Energy levels, sleep quality, workout performance, mood, digestion, measurements, photos",
                  "Weekly weigh-ins, monthly measurements, quarterly assessments, daily energy/mood check",
                  "Stalled progress, low energy, constant hunger, social isolation, obsessive thoughts about food",
                  "Food and mood journal, energy ratings, digestive symptoms, sleep quality, workout performance",
                  "Stable energy all day, better sleep, improved gym performance, clothes fitting better, clearer skin"
                ]
              },
              {
                title: "Troubleshooting & Adjustments",
                prompts: [
                  "What will you do if you're not seeing the results you expected?",
                  "How will you handle days when you go off track with your nutrition plan?",
                  "What patterns in your eating might indicate needed changes?",
                  "How will you adjust your plan for different life phases or circumstances?",
                  "When should you consider getting professional nutrition guidance?"
                ],
                examples: [
                  "Review calorie accuracy, adjust macros, check portion sizes, consider medical factors, be patient",
                  "Return to plan next meal, don't restrict extra, learn from triggers, maintain perspective",
                  "Evening overeating, skipping meals, emotional eating, weekend patterns, social eating challenges",
                  "Busy periods need simpler plans, travel requires portable options, stress affects appetite",
                  "Medical conditions, eating disorders, plateau after consistent effort, complex dietary needs"
                ]
              },
              {
                title: "Mindful Eating Practices",
                prompts: [
                  "How will you develop greater awareness of hunger and fullness cues?",
                  "What strategies will you use to eat more mindfully and reduce distracted eating?",
                  "How will you identify and address emotional eating patterns?",
                  "What techniques will you use to slow down your eating pace?",
                  "How will you cultivate a healthier relationship with food overall?"
                ],
                examples: [
                  "Hunger scale 1-10, pause mid-meal to assess, eat until satisfied not stuffed, note physical cues",
                  "No phones/TV while eating, smaller plates, chew thoroughly, put fork down between bites",
                  "Identify triggers, find non-food coping strategies, address underlying emotions, seek support if needed",
                  "Set timer for 20-minute meals, chew each bite 20 times, conversation during meals, smaller bites",
                  "Practice gratitude for food, avoid labeling foods 'good' or 'bad', focus on nourishment, enjoy treats mindfully"
                ]
              }
            ]}
            tips={[
              "Use tracking as a learning tool, not a punishment system",
              "Focus on consistency over perfection - 80% adherence beats 100% for 2 weeks",
              "Take progress photos and measurements since weight can fluctuate daily",
              "Pay attention to how foods make you feel, not just their calorie content",
              "Adjust your tracking method if it becomes stressful or obsessive"
            ]}
          />
        </TabsContent>

      </Tabs>
    </div>
  )
}