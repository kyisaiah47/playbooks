"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function GroceryPlanning() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Grocery Planning & Shopping Strategy</h1>
        <p className="text-muted-foreground">Create efficient grocery shopping systems that support your meal planning and reduce food waste.</p>
      </div>

      <Tabs defaultValue="shopping-strategy" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="shopping-strategy" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Shopping Strategy</span>
            <span className="sm:hidden">Strategy</span>
          </TabsTrigger>
          <TabsTrigger value="list-creation" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">List Creation</span>
            <span className="sm:hidden">Lists</span>
          </TabsTrigger>
          <TabsTrigger value="budget-management" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Budget Management</span>
            <span className="sm:hidden">Budget</span>
          </TabsTrigger>
          <TabsTrigger value="storage-inventory" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Storage & Inventory</span>
            <span className="sm:hidden">Storage</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="shopping-strategy">
          <GuidedNotePage
            title="Shopping Strategy & Frequency"
            description="Develop an efficient grocery shopping approach that fits your schedule and reduces stress"
            sections={[
              {
                title: "Shopping Frequency and Timing",
                prompts: [
                  "How often do you prefer to grocery shop - weekly, bi-weekly, or multiple times per week?",
                  "What days and times work best for your grocery shopping schedule?",
                  "How do you balance fresh produce needs with bulk shopping efficiency?",
                  "Which family members participate in grocery shopping and how?",
                  "How do you handle emergency trips for forgotten items?"
                ],
                examples: [
                  "Major shop Sunday for the week, quick produce pickup Wednesday",
                  "Saturday morning before crowds, Sunday afternoon for sales, avoid weekday evenings",
                  "Buy produce twice weekly, pantry items monthly, frozen foods weekly",
                  "Adult handles major shop, kids help with list making, spouse picks up specific requests",
                  "Keep backup ingredients at home, send spouse for 2-3 items max, online delivery for larger needs"
                ]
              },
              {
                title: "Store Selection and Efficiency",
                prompts: [
                  "Which stores do you shop at regularly and why do you choose them?",
                  "How do you optimize your shopping route between different stores?",
                  "What's your strategy for taking advantage of sales and seasonal pricing?",
                  "How do you balance convenience versus cost savings in store selection?",
                  "What online shopping or delivery options work for your situation?"
                ],
                examples: [
                  "Main grocery store for staples, farmers market for produce, warehouse store monthly",
                  "Hit Costco first for bulk items, then grocery store, farmer's market last for delicate items",
                  "Check weekly ads, stock up on sale proteins, buy seasonal produce when cheapest",
                  "Pay extra for closer store during busy weeks, drive further for major monthly shop",
                  "Grocery pickup for bulk items, delivery when sick, in-person for produce selection"
                ]
              },
              {
                title: "Shopping Preparation",
                prompts: [
                  "What's your routine for preparing for a grocery shopping trip?",
                  "How do you check what you already have before making your shopping list?",
                  "What tools or apps help make your shopping more efficient?",
                  "How do you prepare for shopping with children or other family members?",
                  "What backup plans do you have when stores are out of key ingredients?"
                ],
                examples: [
                  "Check meal plan, inventory pantry and fridge, review store ads, make organized list",
                  "Quick pantry/fridge check, photo inventory of spice rack, check freezer contents",
                  "Store app for coupons, list organized by store layout, calculator for budget tracking",
                  "Snacks for kids, involve them in list-making, assign them specific items to find",
                  "Flexible recipes that allow substitutions, backup protein options, frozen alternatives"
                ]
              }
            ]}
            tips={[
              "Shop the same stores regularly to learn layouts and reduce decision fatigue",
              "Always check what you have at home before creating your shopping list",
              "Choose shopping times when you're alert and stores are less crowded",
              "Have a backup plan for when key ingredients aren't available",
              "Consider how shopping frequency affects food waste and freshness"
            ]}
          />
        </TabsContent>

        <TabsContent value="list-creation">
          <GuidedNotePage
            title="Effective Shopping List Creation"
            description="Master the art of creating comprehensive, organized shopping lists that save time and prevent forgotten items"
            sections={[
              {
                title: "List Organization Systems",
                prompts: [
                  "How do you organize your shopping list for maximum efficiency in the store?",
                  "What categories or sections help you navigate your usual grocery store layout?",
                  "How do you prioritize items on your list by necessity versus nice-to-have?",
                  "What system do you use for tracking recurring items versus one-time purchases?",
                  "How do you handle multiple stores or departments on a single list?"
                ],
                examples: [
                  "Organize by store sections: produce, dairy, meat, pantry, frozen",
                  "Fresh produce first, dairy/meat middle, shelf-stable items last to prevent spoilage",
                  "Essential items marked with star, wish list items at bottom, must-haves highlighted",
                  "Master list of weekly staples plus space for recipe-specific additions",
                  "Separate lists for each store, or single list with store names next to items"
                ]
              },
              {
                title: "Digital vs. Physical Lists",
                prompts: [
                  "Do you prefer digital shopping apps or handwritten paper lists?",
                  "How do you share shopping lists with other family members?",
                  "What's your backup system if your primary list method fails?",
                  "How do you handle list updates when you're already out shopping?",
                  "What features are most important in a shopping list system?"
                ],
                examples: [
                  "Phone app for convenience and sharing, paper backup for phone battery issues",
                  "Shared Google doc, family app like AnyList, text message additions",
                  "Photos of handwritten lists, email yourself the list, memorize top 5 priorities",
                  "Real-time shared lists, text updates to family shopper, voice memos",
                  "Easy categorization, sharing capability, check-off function, quantity tracking"
                ]
              },
              {
                title: "List Building From Meal Plans",
                prompts: [
                  "How do you efficiently extract shopping needs from your weekly meal plan?",
                  "What's your process for checking what recipe ingredients you already have?",
                  "How do you handle ingredients that appear in multiple recipes during the week?",
                  "What quantities do you buy when recipes serve different numbers than your family?",
                  "How do you account for breakfast, lunch, and snack needs beyond dinner planning?"
                ],
                examples: [
                  "Go through each planned meal, write down needed ingredients, consolidate quantities",
                  "Check pantry/fridge for each ingredient, note what's running low, verify expiration dates",
                  "Combine quantities needed (3 onions total across different recipes), buy in bulk when efficient",
                  "Scale recipes up or down, buy smallest useful package size, plan for leftovers",
                  "Add lunch proteins, breakfast staples, school snacks, work coffee to recipe-based list"
                ]
              }
            ]}
            tips={[
              "Organize your list to match your store's layout to minimize backtracking",
              "Include quantities and specific brands when it matters for your recipes",
              "Build a master list template of items you buy regularly to speed up list creation",
              "Check your meal plan against your list one final time before leaving home",
              "Keep running grocery lists throughout the week as you notice items running low"
            ]}
          />
        </TabsContent>

        <TabsContent value="budget-management">
          <GuidedNotePage
            title="Grocery Budget Management"
            description="Control food costs while maintaining nutrition and variety in your meal planning"
            sections={[
              {
                title: "Budget Planning and Tracking",
                prompts: [
                  "What's your realistic weekly or monthly grocery budget?",
                  "How do you track your spending while shopping to stay within budget?",
                  "What percentage of your budget goes to fresh produce versus pantry staples?",
                  "How do you handle budget fluctuations due to sales or unexpected needs?",
                  "What's your strategy for special occasions or holiday cooking within budget?"
                ],
                examples: [
                  "$150/week for family of 4, $400/month including cleaning supplies",
                  "Running total on phone calculator, estimate as you shop, check receipt total",
                  "40% fresh foods, 30% proteins, 20% pantry staples, 10% household items",
                  "Build in 10% buffer, shift money from other categories when needed, adjust following week",
                  "Save $20/week for 2 months before holidays, reduce other categories during special events"
                ]
              },
              {
                title: "Cost-Saving Strategies",
                prompts: [
                  "What strategies do you use to reduce grocery costs without sacrificing nutrition?",
                  "How do you take advantage of sales, coupons, and seasonal pricing?",
                  "What's your approach to buying generic versus name brand products?",
                  "How do you balance bulk buying savings with storage space and food waste?",
                  "What expensive ingredients do you buy less frequently or substitute?"
                ],
                examples: [
                  "Buy proteins on sale and freeze, choose seasonal produce, cook from scratch more",
                  "Plan meals around sale items, use store apps for digital coupons, stock up on staples",
                  "Generic for basics like flour and canned goods, name brand for items where taste matters",
                  "Buy bulk for non-perishables and frequently used items, avoid bulk for items you rarely use",
                  "Use expensive cheeses sparingly, substitute mushrooms for some meat, buy cheaper cuts"
                ]
              },
              {
                title: "Value-Based Shopping",
                prompts: [
                  "How do you determine the best value when comparing different product options?",
                  "What trade-offs are you willing to make between cost, convenience, and quality?",
                  "How do you evaluate whether organic or premium products are worth the extra cost?",
                  "What's your approach to balancing cost per serving with family preferences?",
                  "How do you budget for occasional splurges or special ingredients?"
                ],
                examples: [
                  "Compare cost per unit, factor in waste/yield, consider time saved vs. money saved",
                  "Pay more for pre-cut vegetables when time is short, buy whole chickens when time allows",
                  "Organic for dirty dozen produce, conventional for thick-skinned fruits, premium for key ingredients",
                  "Budget for family favorites even if more expensive, find cheaper alternatives for less-loved items",
                  "Set aside small amount monthly for special ingredients, plan splurges around sales"
                ]
              }
            ]}
            tips={[
              "Track your spending for a month to understand your realistic budget needs",
              "Plan meals around what's on sale rather than shopping for predetermined meals",
              "Generic brands are often 20-30% cheaper with minimal quality difference",
              "Stock up on non-perishables when they're at their lowest sale prices",
              "Focus cost-cutting efforts on items you buy most frequently"
            ]}
          />
        </TabsContent>

        <TabsContent value="storage-inventory">
          <GuidedNotePage
            title="Food Storage & Inventory Management"
            description="Organize your food storage and inventory systems to reduce waste and support efficient meal planning"
            sections={[
              {
                title: "Storage Organization",
                prompts: [
                  "How do you organize your pantry, refrigerator, and freezer for easy access?",
                  "What storage containers and systems help keep food fresh longer?",
                  "How do you arrange items to see what you have and avoid buying duplicates?",
                  "What's your system for rotating older items to be used first?",
                  "How do you store bulk purchases to maintain quality and freshness?"
                ],
                examples: [
                  "Group like items together, eye-level for frequently used, clear bins for small items",
                  "Airtight containers for opened items, vacuum seal bags for freezer, ethylene gas absorbers",
                  "Front-facing labels, inventory list on refrigerator, clear storage containers",
                  "First In First Out system, date labels on everything, older items at front",
                  "Divide bulk items into smaller containers, freeze portions of bulk meat, proper grain storage"
                ]
              },
              {
                title: "Inventory Tracking",
                prompts: [
                  "How do you keep track of what food you have on hand?",
                  "What's your system for knowing when staples are running low?",
                  "How do you manage expiration dates and use items before they spoil?",
                  "What method helps you remember to use ingredients you bought for specific recipes?",
                  "How do you handle seasonal or bulk buying in your inventory system?"
                ],
                examples: [
                  "Written inventory list, phone photos of pantry/freezer, mental note of key items",
                  "Minimum quantity alerts, regular pantry checks, shopping list running on refrigerator",
                  "Date labels on everything, weekly expiration check, meal planning around items nearing expiration",
                  "Recipe ingredient bags, prominent placement of special ingredients, notes in meal planning app",
                  "Seasonal inventory section, bulk item tracking sheet, freezer inventory with dates"
                ]
              },
              {
                title: "Waste Reduction Strategies",
                prompts: [
                  "What strategies do you use to minimize food waste in your household?",
                  "How do you repurpose leftovers and use up ingredients before they spoil?",
                  "What's your approach to buying appropriate quantities for your family size?",
                  "How do you handle produce that's past its prime but still edible?",
                  "What preservation methods do you use to extend food life?"
                ],
                examples: [
                  "Plan leftover nights, freeze extra portions, use produce before meat/dairy",
                  "Transform leftovers into new dishes, use vegetable scraps for broth, fruit smoothies",
                  "Buy only what you'll use in a week, share bulk purchases, choose smaller packages",
                  "Soft vegetables for soup, overripe fruit for baking, wilted greens for smoothies",
                  "Freezing, dehydrating, pickling, blanching vegetables before freezing"
                ]
              }
            ]}
            tips={[
              "Label everything with dates to track freshness and rotate stock properly",
              "Keep frequently used items at eye level and easily accessible",
              "Review expiration dates weekly and plan meals around items that need to be used soon",
              "Invest in good storage containers to extend food life and prevent waste",
              "Take inventory before shopping to avoid buying duplicates and ensure variety"
            ]}
          />
        </TabsContent>

      </Tabs>
    </div>
  )
}