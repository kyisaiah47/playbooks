"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function MealPreferences() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Meal Preferences & Dietary Needs</h1>
        <p className="text-muted-foreground">Identify your dietary requirements, preferences, and restrictions to create a personalized meal planning foundation.</p>
      </div>

      <Tabs defaultValue="dietary-basics" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="dietary-basics" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Dietary Basics</span>
            <span className="sm:hidden">Basics</span>
          </TabsTrigger>
          <TabsTrigger value="restrictions" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Restrictions</span>
            <span className="sm:hidden">Restrict</span>
          </TabsTrigger>
          <TabsTrigger value="preferences" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Preferences</span>
            <span className="sm:hidden">Prefer</span>
          </TabsTrigger>
          <TabsTrigger value="nutrition-goals" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Nutrition Goals</span>
            <span className="sm:hidden">Goals</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="dietary-basics">
          <GuidedNotePage
            title="Dietary Basics Assessment"
            description="Understand your fundamental dietary approach and eating patterns"
            sections={[
              {
                title: "Current Eating Patterns",
                prompts: [
                  "What does your typical daily eating schedule look like?",
                  "How many meals and snacks do you prefer per day?",
                  "What are your current go-to meals for breakfast, lunch, and dinner?",
                  "Which cuisines or food styles do you enjoy most?",
                  "What's your relationship with cooking - beginner, intermediate, or advanced?"
                ],
                examples: [
                  "Early breakfast (7am), lunch (12pm), dinner (6pm), one afternoon snack",
                  "Three meals plus 1-2 snacks, or intermittent fasting with specific eating windows",
                  "Oatmeal and fruit, salad with protein, pasta or stir-fry with vegetables",
                  "Mediterranean, Asian, Mexican, comfort food, healthy fusion",
                  "Comfortable with basic techniques, willing to try new recipes 2-3 times per week"
                ]
              },
              {
                title: "Lifestyle Factors",
                prompts: [
                  "How much time do you typically have for meal preparation on weekdays?",
                  "What's your schedule like on weekends for cooking and meal prep?",
                  "Do you eat most meals at home or frequently dine out?",
                  "How important is convenience versus cooking from scratch?",
                  "What kitchen appliances and tools do you use most often?"
                ],
                examples: [
                  "30 minutes max on weekdays, prefer quick assembly or reheating",
                  "2-3 hours available Sunday for batch cooking and prep",
                  "90% meals at home, occasional weekend dining out or takeout",
                  "Balance of 70% convenient meals with 30% from-scratch cooking projects",
                  "Instant Pot, sheet pans, slow cooker, rice cooker, food processor"
                ]
              },
              {
                title: "Family Considerations",
                prompts: [
                  "Who are you cooking for and what are their preferences?",
                  "Are there picky eaters or strong dislikes to accommodate?",
                  "How do work/school schedules impact your meal timing?",
                  "Do family members have different dietary needs or goals?",
                  "How do you handle meals when schedules don't align?"
                ],
                examples: [
                  "Cooking for spouse and two kids (ages 8 and 12), need kid-friendly options",
                  "One family member dislikes mushrooms and seafood, another avoids spicy foods",
                  "Kids need dinner by 6pm, adults often eat later after activities",
                  "One person vegetarian, another trying to lose weight, growing teen needs more calories",
                  "Prep individual containers, slow cooker meals, or flexible timing with components"
                ]
              }
            ]}
            tips={[
              "Start with your current habits and preferences rather than dramatic changes",
              "Consider your busiest days when planning your meal approach",
              "Family preferences don't have to limit variety - build on common favorites",
              "Your cooking skill level should guide recipe complexity, not limit exploration",
              "Honest assessment of time and energy helps create sustainable plans"
            ]}
          />
        </TabsContent>

        <TabsContent value="restrictions">
          <GuidedNotePage
            title="Dietary Restrictions & Allergies"
            description="Document all dietary restrictions, allergies, and medical considerations"
            sections={[
              {
                title: "Medical Restrictions",
                prompts: [
                  "Do you or family members have any food allergies that require complete avoidance?",
                  "Are there medical conditions that impact your dietary choices?",
                  "What medications affect your food interactions or appetite?",
                  "Do you need to limit sodium, sugar, or other specific nutrients?",
                  "Are there foods that cause digestive issues or discomfort?"
                ],
                examples: [
                  "Severe nut allergy requiring nut-free kitchen, shellfish allergy with EpiPen",
                  "Diabetes requiring carb monitoring, celiac disease requiring gluten-free",
                  "Blood thinners limiting vitamin K foods, steroids increasing appetite",
                  "Kidney disease limiting protein and potassium, heart conditions limiting sodium to 2000mg",
                  "Lactose intolerance, IBS triggers like high-fiber beans, GERD limiting spicy/acidic foods"
                ]
              },
              {
                title: "Religious & Cultural Restrictions",
                prompts: [
                  "Are there religious dietary laws you follow (kosher, halal, etc.)?",
                  "What cultural food practices are important to maintain?",
                  "Are there specific food combinations or preparation methods to avoid?",
                  "How strictly do you follow these guidelines?",
                  "Do restrictions apply to all family members equally?"
                ],
                examples: [
                  "Kosher kitchen with separate meat and dairy, halal meat requirements",
                  "Hindu vegetarianism, Buddhist avoiding garlic/onion, cultural fasting periods",
                  "No mixing of meat and dairy, avoiding certain cooking methods or utensils",
                  "Strict observance at home, more flexible when dining out or traveling",
                  "Parents strict, teenage children more flexible, need to respect both approaches"
                ]
              },
              {
                title: "Voluntary Restrictions",
                prompts: [
                  "Do you follow a specific diet like vegetarian, vegan, keto, or paleo?",
                  "What foods do you choose to avoid for ethical or environmental reasons?",
                  "Are you eliminating certain food groups temporarily or permanently?",
                  "How flexible are you with your chosen restrictions?",
                  "What prompted you to adopt these dietary choices?"
                ],
                examples: [
                  "Vegetarian for 5 years, vegan trying for environmental impact, keto for weight loss",
                  "Avoiding factory-farmed meat, choosing organic when possible, limiting processed foods",
                  "30-day sugar elimination, gluten-free trial, intermittent fasting approach",
                  "Strict at home, 80/20 rule allowing occasional flexibility for social situations",
                  "Health concerns, animal welfare, environmental sustainability, weight management goals"
                ]
              }
            ]}
            tips={[
              "Keep detailed records of severe allergies and share with anyone who cooks for you",
              "Learn to read ingredient labels carefully and identify hidden allergens",
              "Have backup plans for dining out and social situations",
              "Consider consulting with nutritionist if multiple restrictions affect variety",
              "Don't let restrictions become overwhelming - focus on what you can eat"
            ]}
          />
        </TabsContent>

        <TabsContent value="preferences">
          <GuidedNotePage
            title="Food Preferences & Favorites"
            description="Identify your favorite foods, flavors, and cooking styles to build enjoyable meal plans"
            sections={[
              {
                title: "Favorite Foods & Flavors",
                prompts: [
                  "What are your top 10 favorite foods or dishes?",
                  "Which flavors and seasonings do you gravitate toward most?",
                  "What comfort foods do you crave when stressed or tired?",
                  "Which proteins, grains, and vegetables do you enjoy most?",
                  "What new foods or cuisines are you excited to try?"
                ],
                examples: [
                  "Pasta dishes, roasted vegetables, salmon, stir-fries, soups, fresh salads",
                  "Garlic, ginger, herbs like basil and cilantro, moderate spice, citrus brightness",
                  "Mac and cheese, chicken soup, chocolate, warm baked goods, hearty stews",
                  "Chicken and fish, quinoa and brown rice, broccoli and sweet potatoes",
                  "Thai curries, Mediterranean bowls, Korean BBQ, Indian spices, Middle Eastern flavors"
                ]
              },
              {
                title: "Cooking Preferences",
                prompts: [
                  "Do you prefer simple, quick meals or complex cooking projects?",
                  "What cooking methods do you enjoy most (roasting, grilling, one-pot, etc.)?",
                  "How important is visual presentation versus taste and convenience?",
                  "Do you prefer following recipes exactly or improvising with ingredients?",
                  "What's your tolerance for cleanup and dirty dishes?"
                ],
                examples: [
                  "Mix of 70% simple weekday meals with 30% weekend cooking projects",
                  "Sheet pan roasting, slow cooker meals, stir-frying, grilling in good weather",
                  "Taste and nutrition first, but enjoy making food look appealing for family",
                  "Follow new recipes closely, then adapt based on preferences and available ingredients",
                  "Prefer one-pot meals during busy weeks, don't mind cleanup for special occasions"
                ]
              },
              {
                title: "Seasonal & Occasion Preferences",
                prompts: [
                  "How do your food preferences change with the seasons?",
                  "What are your go-to meals for different weather conditions?",
                  "Which holidays or occasions inspire special cooking?",
                  "Do you prefer eating seasonally or enjoy the same foods year-round?",
                  "How important are family traditions and nostalgic foods?"
                ],
                examples: [
                  "Light salads and grilled foods in summer, hearty soups and stews in winter",
                  "Cold days call for slow-cooked meals, hot weather means minimal cooking",
                  "Thanksgiving turkey, Christmas cookies, birthday cakes, summer BBQs",
                  "Love seasonal produce like asparagus in spring, tomatoes in summer, squash in fall",
                  "Must-make family recipes for holidays, comfort foods from childhood"
                ]
              }
            ]}
            tips={[
              "Build your meal plans around foods you genuinely enjoy eating",
              "Use favorite ingredients as the foundation and experiment with new preparations",
              "Keep a running list of successful meals to repeat and build upon",
              "Don't force yourself to eat foods you dislike just because they're healthy",
              "Balance familiar comfort foods with gradual exploration of new options"
            ]}
          />
        </TabsContent>

        <TabsContent value="nutrition-goals">
          <GuidedNotePage
            title="Nutrition Goals & Health Objectives"
            description="Define your nutrition priorities and health goals to guide meal planning decisions"
            sections={[
              {
                title: "Primary Health Goals",
                prompts: [
                  "What are your main health or fitness goals related to nutrition?",
                  "Are you trying to lose, gain, or maintain your current weight?",
                  "Do you have specific fitness goals that impact your nutritional needs?",
                  "What health markers are you trying to improve (energy, sleep, digestion)?",
                  "How do you want to feel different through better nutrition?"
                ],
                examples: [
                  "Lose 20 pounds gradually, increase muscle mass, improve heart health markers",
                  "Maintain current weight while improving body composition and energy levels",
                  "Training for marathon needing more carbs, strength building requiring more protein",
                  "Better afternoon energy, improved sleep quality, less digestive bloating",
                  "More sustained energy, fewer mood swings, feeling lighter and more confident"
                ]
              },
              {
                title: "Nutritional Priorities",
                prompts: [
                  "Which nutrients or food groups do you want to increase in your diet?",
                  "What are you trying to reduce or limit nutritionally?",
                  "How important is organic, local, or sustainably-sourced food?",
                  "Do you track calories, macros, or other nutritional metrics?",
                  "What role do supplements play in your nutrition plan?"
                ],
                examples: [
                  "More vegetables, fiber, omega-3s, plant proteins, whole grains",
                  "Less processed sugar, refined carbs, saturated fat, excess sodium",
                  "Prioritize organic produce, local meat when budget allows, minimal packaging",
                  "Track calories loosely, focus on protein goals, monitor fiber intake",
                  "Daily multivitamin, vitamin D, protein powder post-workout, probiotics"
                ]
              },
              {
                title: "Lifestyle Integration",
                prompts: [
                  "How do your nutrition goals fit with your lifestyle and schedule?",
                  "What realistic timeline do you have for achieving your goals?",
                  "How will you measure progress and success?",
                  "What obstacles might interfere with your nutrition goals?",
                  "How will you maintain motivation and accountability?"
                ],
                examples: [
                  "Meal prep Sundays support weekday goals, pack healthy work lunches",
                  "Aim for 1-2 pounds per month weight loss, establish habits over 3 months",
                  "Weekly weigh-ins, energy levels, clothing fit, monthly progress photos",
                  "Work travel, social dinners, family events, stress eating, time constraints",
                  "Find accountability partner, track in food diary, celebrate small wins"
                ]
              }
            ]}
            tips={[
              "Set specific, measurable goals rather than vague intentions",
              "Focus on adding healthy foods before restricting favorite foods",
              "Your goals should be sustainable for your current life situation",
              "Progress may be slow - focus on building habits over quick results",
              "Adjust goals as needed based on what works for your body and lifestyle"
            ]}
          />
        </TabsContent>

      </Tabs>
    </div>
  )
}