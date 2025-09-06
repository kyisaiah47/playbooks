"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function KitchenSetup() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Kitchen Setup & Organization</h1>
        <p className="text-muted-foreground">Optimize your kitchen organization and tools to support efficient meal planning and cooking.</p>
      </div>

      <Tabs defaultValue="organization" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="organization" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Organization</span>
            <span className="sm:hidden">Organize</span>
          </TabsTrigger>
          <TabsTrigger value="essential-tools" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Essential Tools</span>
            <span className="sm:hidden">Tools</span>
          </TabsTrigger>
          <TabsTrigger value="workflow" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Workflow</span>
            <span className="sm:hidden">Workflow</span>
          </TabsTrigger>
          <TabsTrigger value="maintenance" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Maintenance</span>
            <span className="sm:hidden">Maintain</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="organization">
          <GuidedNotePage
            title="Kitchen Organization Strategy"
            description="Create an organized kitchen layout that supports efficient meal preparation and reduces cooking stress"
            sections={[
              {
                title: "Zone-Based Organization",
                prompts: [
                  "How do you organize your kitchen into functional zones for different cooking tasks?",
                  "Where do you place items based on how frequently you use them?",
                  "What's your system for organizing cabinets and drawers by function?",
                  "How do you create designated spaces for meal prep and food storage?",
                  "What kitchen areas need to stay clear for daily food preparation?"
                ],
                examples: [
                  "Prep zone near sink, cooking zone around stove, baking zone with mixer access",
                  "Daily items at eye level, weekly items above/below, seasonal items in harder-to-reach places",
                  "Cooking tools near stove, baking supplies together, cleaning supplies under sink",
                  "Dedicated meal prep area with cutting boards and containers, pantry organization system",
                  "Keep counters near stove and sink clear, designate one area for ongoing projects"
                ]
              },
              {
                title: "Storage Solutions",
                prompts: [
                  "What storage solutions help you maximize your kitchen space efficiently?",
                  "How do you organize pantry items for easy visibility and access?",
                  "What systems work best for storing pots, pans, and cooking utensils?",
                  "How do you create storage solutions for small appliances and gadgets?",
                  "What's your approach to organizing spices and seasonings for easy cooking access?"
                ],
                examples: [
                  "Pull-out drawers, lazy Susans, vertical dividers, over-door organizers",
                  "Clear containers with labels, group like items, eye-level for frequently used",
                  "Drawer organizers for utensils, pot racks, pan dividers, hooks for frequent tools",
                  "Appliance garage for daily items, high shelves for occasional use, easy access for weekly appliances",
                  "Spice rack alphabetized, frequently used spices in drawer near stove, labels facing forward"
                ]
              },
              {
                title: "Counter Space Management",
                prompts: [
                  "How do you maximize and maintain clear counter space for food preparation?",
                  "What items deserve permanent counter space versus stored away?",
                  "How do you create temporary workspace for meal prep and batch cooking?",
                  "What's your strategy for managing counter clutter during busy cooking periods?",
                  "How do you balance appliance accessibility with clear workspace needs?"
                ],
                examples: [
                  "Keep counters 80% clear, use wall storage, under-cabinet hooks, rolling cart for extra space",
                  "Coffee maker and knife block permanent, mixer and food processor stored but accessible",
                  "Cutting board over sink, fold-down counter extensions, kitchen island or cart",
                  "Designate one area for dirty dishes, clean as you go, prepare staging areas",
                  "Store bulky appliances, bring out when needed, designate appliance zones"
                ]
              }
            ]}
            tips={[
              "Group similar items together and store them near where you'll use them",
              "Keep frequently used items within easy reach and at appropriate heights",
              "Use clear storage containers and labels to see what you have quickly",
              "Maintain clear counter space for food preparation by storing items vertically",
              "Regularly declutter and reorganize based on how your cooking habits evolve"
            ]}
          />
        </TabsContent>

        <TabsContent value="essential-tools">
          <GuidedNotePage
            title="Essential Kitchen Tools Assessment"
            description="Identify and prioritize the kitchen tools that will most support your meal planning and cooking goals"
            sections={[
              {
                title: "Core Cooking Equipment",
                prompts: [
                  "What are the most essential knives and cutting tools for your cooking style?",
                  "Which pots, pans, and cookware do you use most frequently?",
                  "What cooking appliances are most valuable for your meal preparation needs?",
                  "How do you prioritize quality versus quantity when choosing cooking equipment?",
                  "What tools are missing from your kitchen that would significantly improve your efficiency?"
                ],
                examples: [
                  "8-inch chef's knife, paring knife, serrated bread knife, cutting boards for different foods",
                  "Large skillet, medium saucepan, stockpot, sheet pans, Dutch oven",
                  "Food processor for chopping, stand mixer for baking, slow cooker for batch cooking",
                  "Invest in high-quality versions of frequently used items, basic versions for occasional use",
                  "Kitchen scale for baking, instant-read thermometer, good can opener, sharp vegetable peeler"
                ]
              },
              {
                title: "Meal Prep Specific Tools",
                prompts: [
                  "What tools specifically support your meal prep and batch cooking goals?",
                  "How do you choose storage containers that work best for your meal planning needs?",
                  "What equipment helps you prepare larger quantities efficiently?",
                  "Which tools make healthy cooking more convenient and appealing?",
                  "What gadgets have proven most valuable versus least useful in your kitchen?"
                ],
                examples: [
                  "Large sheet pans, multiple cutting boards, extra measuring tools, timers",
                  "Various sizes of glass containers, freezer-safe bags, leak-proof lunch containers",
                  "Large mixing bowls, 6-quart slow cooker, pressure cooker, food processor",
                  "Vegetable spiralizer, steamer basket, salad spinner, citrus juicer",
                  "Most valuable: good knife, sheet pans, measuring tools; least useful: single-purpose gadgets"
                ]
              },
              {
                title: "Budget and Upgrade Planning",
                prompts: [
                  "How do you budget for kitchen tool purchases and upgrades over time?",
                  "What's your strategy for determining when to replace versus repair kitchen equipment?",
                  "Which tools are worth investing in higher quality versions?",
                  "How do you evaluate new kitchen tools before purchasing?",
                  "What kitchen tools would you recommend prioritizing for someone starting meal planning?"
                ],
                examples: [
                  "Set aside monthly amount for kitchen upgrades, research before purchasing, buy quality incrementally",
                  "Replace when repair cost exceeds 50% of replacement cost, when performance significantly degrades",
                  "Quality knives, durable cookware, reliable appliances you use daily",
                  "Read reviews, borrow from friends to test, consider storage space and multi-functionality",
                  "Good knife, cutting board, basic cookware set, measuring tools, storage containers"
                ]
              }
            ]}
            tips={[
              "Invest in quality versions of tools you use daily rather than buying many mediocre tools",
              "Choose multi-functional tools over single-purpose gadgets when space is limited",
              "Maintain your tools well to extend their life and performance",
              "Start with basics and add specialized tools as your cooking skills and interests develop",
              "Consider storage requirements and counter space when evaluating new tools"
            ]}
          />
        </TabsContent>

        <TabsContent value="workflow">
          <GuidedNotePage
            title="Kitchen Workflow Optimization"
            description="Design efficient kitchen workflows that support your meal planning and daily cooking routines"
            sections={[
              {
                title: "Daily Cooking Workflow",
                prompts: [
                  "What's your typical workflow for preparing weeknight meals efficiently?",
                  "How do you set up your workspace before starting to cook?",
                  "What's your strategy for managing multiple components of a meal simultaneously?",
                  "How do you minimize cleanup during and after cooking?",
                  "What workflow adaptations do you make when cooking with family members?"
                ],
                examples: [
                  "Read recipe completely, gather ingredients, prep vegetables, start longest-cooking items first",
                  "Clear counters, get out all tools, set up cutting station, preheat appliances",
                  "Start proteins first, add vegetables based on cooking time, prepare quick sides last",
                  "Clean as you go, use one bowl for scraps, load dishwasher during cooking time",
                  "Assign specific tasks, create kid-friendly prep stations, coordinate timing with helpers"
                ]
              },
              {
                title: "Meal Prep Workflow",
                prompts: [
                  "How do you organize your kitchen space for efficient meal prep sessions?",
                  "What's your workflow for batch cooking multiple items simultaneously?",
                  "How do you coordinate prep tasks to maximize your available time?",
                  "What systems help you stay organized during longer cooking sessions?",
                  "How do you manage the transition from cooking to storage and cleanup?"
                ],
                examples: [
                  "Clear all counters, set up multiple cutting stations, organize containers in advance",
                  "Start oven items first, use stovetop while oven cooks, prep vegetables during cooking time",
                  "Create timeline with all tasks, set multiple timers, prep ingredients in order of use",
                  "Use lists to track progress, label containers as you go, keep workspace organized",
                  "Cool food properly before storing, pack containers systematically, clean equipment immediately"
                ]
              },
              {
                title: "Efficiency Improvements",
                prompts: [
                  "What workflow changes have made the biggest impact on your cooking efficiency?",
                  "How do you identify and eliminate bottlenecks in your cooking process?",
                  "What prep work do you do in advance to speed up daily cooking?",
                  "How do you balance thorough preparation with spontaneity in cooking?",
                  "What workflow adjustments do you make during busy periods versus relaxed cooking times?"
                ],
                examples: [
                  "Prep all ingredients before cooking, use timers consistently, clean as you go",
                  "Track which steps take longest, invest in tools for frequent tasks, improve knife skills",
                  "Pre-chop vegetables, pre-measure spices, keep frequently used tools easily accessible",
                  "Have go-to quick meals for spontaneous cooking, maintain flexibility in planned meals",
                  "Busy: focus on simple techniques, use convenience ingredients; relaxed: try complex techniques"
                ]
              }
            ]}
            tips={[
              "Always read recipes completely and gather all ingredients before you start cooking",
              "Develop consistent workflows for your most common cooking tasks",
              "Set up your workspace with all necessary tools before beginning any cooking session",
              "Use timers and lists during complex cooking sessions to stay organized",
              "Clean as you go to prevent overwhelming cleanup at the end"
            ]}
          />
        </TabsContent>

        <TabsContent value="maintenance">
          <GuidedNotePage
            title="Kitchen Maintenance & Care"
            description="Maintain your kitchen tools and organization systems for long-term efficiency and enjoyment"
            sections={[
              {
                title: "Tool Maintenance",
                prompts: [
                  "What's your routine for maintaining and caring for your kitchen knives and tools?",
                  "How do you keep your cooking appliances clean and functioning properly?",
                  "What maintenance tasks help extend the life of your cookware and kitchen equipment?",
                  "How do you handle repairs versus replacements for kitchen tools?",
                  "What seasonal maintenance tasks keep your kitchen running efficiently?"
                ],
                examples: [
                  "Hand wash knives immediately, regular honing, professional sharpening twice yearly",
                  "Clean appliances after each use, monthly deep clean, check seals and filters regularly",
                  "Season cast iron, avoid dishwasher for certain items, replace worn cutting boards",
                  "Simple repairs like handle replacement, replace when safety or function is compromised",
                  "Deep clean refrigerator quarterly, organize pantry monthly, update spice inventory"
                ]
              },
              {
                title: "Organization Maintenance",
                prompts: [
                  "How do you maintain your kitchen organization systems over time?",
                  "What's your routine for preventing clutter from accumulating in your kitchen?",
                  "How do you adapt your organization as your cooking habits change?",
                  "What maintenance keeps your pantry and food storage systems effective?",
                  "How do you involve family members in maintaining kitchen organization?"
                ],
                examples: [
                  "Weekly reset of all zones, monthly evaluation of what's working, seasonal reorganization",
                  "Daily 10-minute tidy, weekly purge of unnecessary items, regular decluttering sessions",
                  "Quarterly assessment of what you use most, adjust storage based on new habits",
                  "Monthly pantry inventory, quarterly expiration date check, regular container washing",
                  "Assign each family member specific areas, create simple systems everyone can follow"
                ]
              },
              {
                title: "System Evolution",
                prompts: [
                  "How do you evaluate whether your kitchen systems are working effectively?",
                  "What changes do you make when your cooking style or family needs evolve?",
                  "How do you decide when to invest in new tools or organization solutions?",
                  "What feedback do you gather from family members about kitchen functionality?",
                  "How do you balance maintaining systems with trying new approaches?"
                ],
                examples: [
                  "Track time spent cooking and cleaning, notice frustration points, measure family satisfaction",
                  "Reassess when kids' ages change, when cooking goals shift, when space needs change",
                  "When current tools create inefficiency, when family size changes, when safety is compromised",
                  "Regular family meetings about kitchen function, observe how others use the space",
                  "Test small changes before major overhauls, maintain core systems while experimenting"
                ]
              }
            ]}
            tips={[
              "Create regular maintenance routines to keep tools and systems functioning well",
              "Address small issues before they become major problems or safety concerns",
              "Involve all family members in maintaining shared kitchen spaces and systems",
              "Regularly evaluate whether your systems still match your current cooking habits",
              "Balance maintaining effective systems with being open to improvements and changes"
            ]}
          />
        </TabsContent>

      </Tabs>
    </div>
  )
}