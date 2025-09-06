"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function MealPrep() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Meal Prep & Batch Cooking</h1>
        <p className="text-muted-foreground">Develop efficient meal prep strategies to save time and ensure consistent healthy eating.</p>
      </div>

      <Tabs defaultValue="prep-strategy" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="prep-strategy" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Prep Strategy</span>
            <span className="sm:hidden">Strategy</span>
          </TabsTrigger>
          <TabsTrigger value="batch-cooking" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Batch Cooking</span>
            <span className="sm:hidden">Batch</span>
          </TabsTrigger>
          <TabsTrigger value="storage-systems" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Storage Systems</span>
            <span className="sm:hidden">Storage</span>
          </TabsTrigger>
          <TabsTrigger value="execution-timing" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Execution & Timing</span>
            <span className="sm:hidden">Timing</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="prep-strategy">
          <GuidedNotePage
            title="Meal Prep Strategy Development"
            description="Design a meal prep approach that fits your schedule and reduces daily cooking stress"
            sections={[
              {
                title: "Prep Goals and Priorities",
                prompts: [
                  "What meals during your week would benefit most from advance preparation?",
                  "How much time can you realistically dedicate to meal prep each week?",
                  "What's your primary goal - saving time, eating healthier, or reducing stress?",
                  "Which family members' schedules most need meal prep support?",
                  "What level of meal prep feels sustainable for your current lifestyle?"
                ],
                examples: [
                  "Weekday lunches and Tuesday/Thursday dinners when schedule is busiest",
                  "2-3 hours Sunday afternoon, 1 hour Wednesday evening for mid-week refresh",
                  "Reduce daily decision fatigue, ensure healthy options are always available",
                  "Kids need grab-and-go breakfast and lunch, spouse needs portable work meals",
                  "Partial prep (chopped vegetables, cooked grains) rather than complete meals"
                ]
              },
              {
                title: "Prep Level Assessment",
                prompts: [
                  "Do you prefer to prep complete meals or just components and ingredients?",
                  "How do you balance fresh-made taste with convenience of prepared foods?",
                  "What types of foods reheat well and maintain quality after prep?",
                  "How much variety do you need in your prepared meals to avoid boredom?",
                  "What's your tolerance for eating the same meal multiple times per week?"
                ],
                examples: [
                  "Cook proteins and grains in bulk, prep vegetables, assemble meals daily",
                  "Prep 70% of meal in advance, add fresh elements when serving",
                  "Casseroles, soups, grain bowls, stir-fry components, marinated proteins",
                  "3-4 different lunch options prepped, rotate dinner themes throughout week",
                  "Same breakfast fine for a week, need 2-3 lunch varieties, dinner variety important"
                ]
              },
              {
                title: "Family Integration",
                prompts: [
                  "How can family members help with meal prep tasks?",
                  "What age-appropriate prep tasks can children handle?",
                  "How do you accommodate different family members' food preferences in prep?",
                  "What's your strategy for prepping meals that work for various dietary needs?",
                  "How do you handle meal prep when family schedules conflict?"
                ],
                examples: [
                  "Adults handle knives and heat, kids wash produce and pack containers",
                  "Young kids wash vegetables, older kids chop soft items, teens cook simple components",
                  "Prep base ingredients, let individuals customize with preferred additions",
                  "Build flexible component systems - same base with different proteins/seasonings",
                  "Prep basics when you have time, delegate simple assembly to family members"
                ]
              }
            ]}
            tips={[
              "Start small with 1-2 prep items and build your system gradually",
              "Focus on prepping the meals that cause you the most daily stress",
              "Choose prep strategies that match your available time and kitchen space",
              "Include family members in appropriate prep tasks to share the workload",
              "Be realistic about what you'll actually eat after it's been prepped and stored"
            ]}
          />
        </TabsContent>

        <TabsContent value="batch-cooking">
          <GuidedNotePage
            title="Batch Cooking Techniques"
            description="Master efficient batch cooking methods to maximize your prep time investment"
            sections={[
              {
                title: "Batch Cooking Methods",
                prompts: [
                  "Which cooking methods work best for preparing large quantities efficiently?",
                  "How do you coordinate multiple batch cooking tasks during your prep time?",
                  "What kitchen equipment helps you cook larger quantities more effectively?",
                  "How do you adapt regular recipes for batch cooking success?",
                  "What's your strategy for batch cooking different types of ingredients simultaneously?"
                ],
                examples: [
                  "Sheet pan roasting, slow cooker meals, pressure cooker grains and proteins",
                  "Start longest-cooking items first, prep vegetables while proteins cook, multitask safely",
                  "Large sheet pans, 6-quart slow cooker, pressure cooker, large stockpot",
                  "Double or triple recipes, adjust seasonings carefully, consider cooking times",
                  "Oven for roasted vegetables, stovetop for grains, slow cooker for proteins"
                ]
              },
              {
                title: "Component Batch Cooking",
                prompts: [
                  "What basic components can you batch cook to create multiple different meals?",
                  "How do you prep vegetables to stay fresh and versatile throughout the week?",
                  "What grains, proteins, and sauces work well for batch preparation?",
                  "How do you season batch-cooked components for maximum versatility?",
                  "What's your approach to batch cooking ingredients versus complete dishes?"
                ],
                examples: [
                  "Cooked quinoa, roasted chicken, sautéed vegetables, hard-boiled eggs",
                  "Wash and chop vegetables, blanch when needed, store in airtight containers",
                  "Brown rice, chicken breast, ground turkey, marinara sauce, pesto",
                  "Keep seasonings simple during batch cooking, add specific flavors when assembling",
                  "Focus on versatile components that can be mixed and matched throughout the week"
                ]
              },
              {
                title: "Scaling and Efficiency",
                prompts: [
                  "How do you determine the right batch sizes for your family and storage capacity?",
                  "What's your strategy for efficiently using oven space during batch cooking sessions?",
                  "How do you manage cooking times when preparing multiple items simultaneously?",
                  "What prep work can you do during cooking time to maximize efficiency?",
                  "How do you handle cleanup efficiently during extended batch cooking sessions?"
                ],
                examples: [
                  "Cook enough for 3-4 servings per family member per batch item",
                  "Use multiple sheet pans, rotate items based on cooking times, maximize oven racks",
                  "Set multiple timers, start items with longest cook time first, stagger start times",
                  "Chop next vegetables while current ones roast, wash dishes between tasks",
                  "Clean as you go, use dishwasher during cooking, prep cleanup supplies in advance"
                ]
              }
            ]}
            tips={[
              "Invest in quality batch cooking equipment like large sheet pans and containers",
              "Start batch cooking with familiar recipes before trying new techniques",
              "Focus on components that can be used in multiple ways throughout the week",
              "Keep detailed timing notes for your batch cooking sessions to improve efficiency",
              "Don't try to batch cook everything at once - build your system gradually"
            ]}
          />
        </TabsContent>

        <TabsContent value="storage-systems">
          <GuidedNotePage
            title="Storage and Organization Systems"
            description="Create effective storage systems to maintain food quality and make meal assembly efficient"
            sections={[
              {
                title: "Container Strategy",
                prompts: [
                  "What types and sizes of containers work best for your meal prep storage?",
                  "How do you organize containers for easy identification and access?",
                  "What's your system for portion control and family-appropriate serving sizes?",
                  "How do you handle containers for different types of food (liquids, solids, mixed)?",
                  "What container features are most important for your storage needs?"
                ],
                examples: [
                  "Glass containers for reheating, plastic for freezer, various sizes for different portions",
                  "Label with contents and date, stack by meal type, clear containers for visibility",
                  "Individual serving containers, family-size containers, separate kid and adult portions",
                  "Leak-proof for soups, compartmented for mixed meals, breathable for fresh produce",
                  "Microwave-safe, freezer-safe, stackable, easy-to-clean, appropriate sizes"
                ]
              },
              {
                title: "Labeling and Dating",
                prompts: [
                  "What labeling system helps you identify prepped foods quickly and accurately?",
                  "How do you track prep dates and use-by dates for food safety?",
                  "What information do you include on labels beyond just food identification?",
                  "How do you make your labeling system work for all family members?",
                  "What labeling tools and materials work best for your storage containers?"
                ],
                examples: [
                  "Food name, prep date, use-by date, reheating instructions, serving size",
                  "Color-coded system by week, consistent dating format, rotation reminders",
                  "Spiciness level for family members, dietary information, assembly instructions",
                  "Simple icons for non-readers, clear handwriting, consistent placement",
                  "Waterproof labels, permanent markers, label maker, freezer-safe tape"
                ]
              },
              {
                title: "Refrigerator and Freezer Organization",
                prompts: [
                  "How do you organize your refrigerator and freezer space for optimal meal prep storage?",
                  "What's your system for rotating prepped foods to ensure freshness?",
                  "How do you balance meal prep storage with fresh ingredient storage?",
                  "What zones or areas do you designate for different types of prepped foods?",
                  "How do you maximize storage space while maintaining food quality?"
                ],
                examples: [
                  "Dedicated meal prep shelf, freezer bins by meal type, door space for quick access",
                  "First In First Out system, weekly use schedule, visual rotation reminders",
                  "50% prep storage, 50% fresh ingredients, flexible zones based on weekly needs",
                  "Lunch prep area, dinner components section, breakfast items in door, snacks in bins",
                  "Stackable containers, vacuum-sealed freezer portions, proper air circulation"
                ]
              }
            ]}
            tips={[
              "Invest in a variety of container sizes to match your typical portion needs",
              "Always label with both prep date and estimated use-by date",
              "Organize storage areas the same way each week to build efficient habits",
              "Leave some flexible storage space for fresh ingredients and leftovers",
              "Use transparent containers when possible to see contents without opening"
            ]}
          />
        </TabsContent>

        <TabsContent value="execution-timing">
          <GuidedNotePage
            title="Execution and Timing Optimization"
            description="Perfect your meal prep timing and execution for maximum efficiency and consistency"
            sections={[
              {
                title: "Prep Session Planning",
                prompts: [
                  "What's your ideal meal prep schedule and how long does each session take?",
                  "How do you plan your prep sessions to align with grocery shopping and weekly schedule?",
                  "What prep tasks do you do in advance versus during your main prep session?",
                  "How do you break down large prep sessions to avoid burnout?",
                  "What backup plans do you have when your planned prep time gets disrupted?"
                ],
                examples: [
                  "Sunday 2-4pm main session, Wednesday 30-minute refresh, Friday 15-minute breakfast prep",
                  "Grocery shop Saturday, prep Sunday, review weekly schedule Friday for planning",
                  "Friday: plan meals and make grocery list, Saturday: grocery shop, Sunday: full prep",
                  "Take breaks every 45 minutes, prep in 2-hour maximum sessions, spread over weekend",
                  "Monday evening backup session, prep essentials only, simplified menu for disrupted weeks"
                ]
              },
              {
                title: "Workflow Optimization",
                prompts: [
                  "What order of tasks makes your prep sessions most efficient?",
                  "How do you coordinate cooking times to keep multiple things going simultaneously?",
                  "What prep work can be done while other items are cooking?",
                  "How do you set up your kitchen workspace for maximum prep efficiency?",
                  "What tools and equipment do you prepare in advance for smooth prep sessions?"
                ],
                examples: [
                  "Start longest-cooking items, prep vegetables while proteins cook, assemble last",
                  "Oven items first, then stovetop, pressure cooker simultaneous, slow cooker early",
                  "Chop vegetables during roasting time, wash produce during cooking, prep containers",
                  "Clear all counters, set out all tools, prep cutting boards for different foods",
                  "Sharp knives, multiple cutting boards, timers, storage containers, labels ready"
                ]
              },
              {
                title: "Consistency and Adaptation",
                prompts: [
                  "How do you maintain consistency in your meal prep routine over time?",
                  "What adjustments do you make for seasonal changes or schedule variations?",
                  "How do you handle meal prep during busy periods or life changes?",
                  "What strategies help you restart meal prep after taking breaks?",
                  "How do you evaluate and improve your meal prep system over time?"
                ],
                examples: [
                  "Same day/time each week, standard prep list, established routines and systems",
                  "Lighter prep in summer, hearty batch cooking in winter, adapt to school schedules",
                  "Simplified prep during busy seasons, focus on highest-impact prep items only",
                  "Start with just 1-2 prep items, gradually rebuild full system, don't aim for perfection",
                  "Monthly review of what worked, adjust portions and methods, track time investment vs. benefit"
                ]
              }
            ]}
            tips={[
              "Establish a consistent prep schedule and stick to it to build sustainable habits",
              "Always start with the longest-cooking items to maximize your time efficiency",
              "Prep your workspace and gather all tools before you start cooking",
              "Keep detailed notes about timing and methods that work best for you",
              "Be flexible and adjust your system based on what actually works for your family"
            ]}
          />
        </TabsContent>

      </Tabs>
    </div>
  )
}