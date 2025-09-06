"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function BudgetPlanning() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Food Budget Planning & Management</h1>
        <p className="text-muted-foreground">Create and maintain a sustainable food budget that supports your meal planning goals while managing costs effectively.</p>
      </div>

      <Tabs defaultValue="budget-setting" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="budget-setting" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Budget Setting</span>
            <span className="sm:hidden">Setting</span>
          </TabsTrigger>
          <TabsTrigger value="cost-strategies" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Cost Strategies</span>
            <span className="sm:hidden">Strategies</span>
          </TabsTrigger>
          <TabsTrigger value="tracking-analysis" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Tracking & Analysis</span>
            <span className="sm:hidden">Tracking</span>
          </TabsTrigger>
          <TabsTrigger value="optimization" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Optimization</span>
            <span className="sm:hidden">Optimize</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="budget-setting">
          <GuidedNotePage
            title="Food Budget Foundation"
            description="Establish a realistic food budget based on your family's needs, income, and priorities"
            sections={[
              {
                title: "Current Spending Assessment",
                prompts: [
                  "How much do you currently spend on groceries and food each month?",
                  "What percentage of your income goes to food expenses?",
                  "How do you split spending between groceries, dining out, and takeout?",
                  "What food-related expenses do you include in your budget planning?",
                  "How does your food spending vary by season or special occasions?"
                ],
                examples: [
                  "$800/month groceries for family of 4, $200 dining out, $100 work lunches",
                  "15% of after-tax income on all food expenses, 10% on groceries specifically",
                  "70% groceries, 20% restaurants, 10% takeout and delivery",
                  "Groceries, restaurants, work lunches, coffee shops, special occasion meals",
                  "20% higher in December for holidays, summer increase for fresh produce and entertaining"
                ]
              },
              {
                title: "Budget Goal Setting",
                prompts: [
                  "What's your ideal monthly food budget based on your financial priorities?",
                  "How do you balance cost savings with nutrition and convenience goals?",
                  "What food expenses are worth spending more on versus where you'll cut costs?",
                  "How do you accommodate family preferences within budget constraints?",
                  "What's your strategy for handling budget fluctuations and unexpected expenses?"
                ],
                examples: [
                  "Target $650/month total food spending, reduce dining out to increase grocery budget",
                  "Prioritize organic produce and quality proteins, save on packaged convenience foods",
                  "Spend more on fresh ingredients, less on beverages and snacks, quality over quantity",
                  "Include favorite family foods in budget, find cheaper alternatives for less-loved items",
                  "10% buffer for unexpected needs, adjust other categories temporarily for special events"
                ]
              },
              {
                title: "Budget Category Allocation",
                prompts: [
                  "How do you break down your food budget into specific categories?",
                  "What percentage of your budget goes to proteins, produce, pantry staples?",
                  "How do you budget for special dietary needs or restrictions?",
                  "What allowance do you set for impulse purchases and food experimentation?",
                  "How do you handle seasonal budget adjustments for holidays and celebrations?"
                ],
                examples: [
                  "40% proteins and dairy, 30% produce, 20% pantry staples, 10% other",
                  "Split evenly between proteins, produce, and pantry, adjust based on sales",
                  "Extra budget for gluten-free items, organic produce, special diet requirements",
                  "5-10% for trying new items, seasonal treats, spontaneous cooking experiments",
                  "December budget 25% higher, summer entertaining budget increase, birthday month flexibility"
                ]
              }
            ]}
            tips={[
              "Track your current spending for at least a month before setting budget goals",
              "Include all food-related expenses in your budget planning, not just groceries",
              "Set realistic budget goals that account for your family's preferences and needs",
              "Build in flexibility for seasonal variations and special occasions",
              "Consider cost per serving rather than total food cost when making decisions"
            ]}
          />
        </TabsContent>

        <TabsContent value="cost-strategies">
          <GuidedNotePage
            title="Cost-Saving Strategies"
            description="Implement effective strategies to reduce food costs while maintaining nutrition and enjoyment"
            sections={[
              {
                title: "Smart Shopping Techniques",
                prompts: [
                  "What strategies do you use to get the best prices on groceries?",
                  "How do you take advantage of sales, coupons, and loyalty programs?",
                  "What's your approach to buying generic versus name-brand products?",
                  "How do you decide when bulk buying saves money versus creates waste?",
                  "What seasonal shopping strategies help reduce your food costs?"
                ],
                examples: [
                  "Compare unit prices, shop sales for stock-up items, use store loyalty programs",
                  "Plan meals around sale items, digital coupons, stack manufacturer and store coupons",
                  "Generic for basics like flour and canned goods, brand names for items where quality matters",
                  "Buy bulk for non-perishables and frequently used items, avoid for foods you use rarely",
                  "Buy produce in season, preserve when abundant, stock up on sale items for off-season"
                ]
              },
              {
                title: "Menu Planning for Budget",
                prompts: [
                  "How do you plan meals to maximize your budget while maintaining variety?",
                  "What strategies help you use expensive ingredients efficiently across multiple meals?",
                  "How do you balance protein costs with nutritional needs?",
                  "What role do leftovers and repurposing play in your budget strategy?",
                  "How do you incorporate affordable, filling ingredients into appealing meals?"
                ],
                examples: [
                  "Plan around sale proteins, use expensive ingredients in multiple ways, stretch with vegetables",
                  "Buy whole chicken for multiple meals, use cheese in small amounts across several dishes",
                  "Mix expensive proteins with beans/eggs, buy cheaper cuts and slow cook",
                  "Plan leftover nights, transform leftovers into new dishes, use scraps for soup stock",
                  "Base meals on affordable grains and legumes, add small amounts of expensive ingredients for flavor"
                ]
              },
              {
                title: "Waste Reduction and Efficiency",
                prompts: [
                  "What strategies do you use to minimize food waste and maximize ingredient use?",
                  "How do you ensure you use up perishable items before they spoil?",
                  "What's your approach to meal planning when you have random ingredients to use up?",
                  "How do you handle produce that's past its prime but still edible?",
                  "What preservation methods help you extend food life and reduce costs?"
                ],
                examples: [
                  "First In First Out rotation, use older produce first, plan meals around expiration dates",
                  "Check fridge daily for items to use up, keep visible reminder list of perishables",
                  "Create 'clean out the fridge' meals, flexible recipes that use various ingredients",
                  "Soft vegetables for soup, overripe fruit for smoothies, wilted greens for cooking",
                  "Freeze extra portions, preserve seasonal produce, make stock from vegetable scraps"
                ]
              }
            ]}
            tips={[
              "Plan your meals around what's on sale rather than shopping for predetermined menus",
              "Stock up on non-perishables when they're at their lowest sale prices",
              "Use expensive ingredients strategically to add flavor rather than as the main component",
              "Focus cost-cutting on the items you buy most frequently for biggest impact",
              "Prevent food waste by using up what you have before buying more"
            ]}
          />
        </TabsContent>

        <TabsContent value="tracking-analysis">
          <GuidedNotePage
            title="Budget Tracking and Analysis"
            description="Monitor your food spending and analyze patterns to make informed budget adjustments"
            sections={[
              {
                title: "Tracking Systems",
                prompts: [
                  "What method do you use to track your food spending throughout the month?",
                  "How do you categorize different types of food expenses for analysis?",
                  "What tools or apps help you monitor spending in real-time?",
                  "How often do you review your spending against your budget goals?",
                  "What information do you track beyond just the total amount spent?"
                ],
                examples: [
                  "Spreadsheet with categories, receipt scanning app, bank account monitoring",
                  "Groceries, dining out, work lunches, coffee/beverages, special occasions",
                  "Mint for automatic categorization, store apps for receipt tracking, manual spreadsheet",
                  "Weekly spending check, monthly budget review, quarterly trend analysis",
                  "Cost per meal, price per serving, seasonal variations, store comparison data"
                ]
              },
              {
                title: "Spending Pattern Analysis",
                prompts: [
                  "What patterns do you notice in your food spending throughout the month or year?",
                  "Which categories consistently go over or under budget and why?",
                  "How do external factors like stress, weather, or social events affect your spending?",
                  "What seasonal trends impact your food budget predictably?",
                  "How does meal planning effectiveness correlate with your budget success?"
                ],
                examples: [
                  "Higher spending first week of month, weekend splurges, end-of-month budget stretching",
                  "Produce often under budget in winter, dining out over budget during busy weeks",
                  "Stress eating increases convenience food purchases, entertaining bumps weekend spending",
                  "December holiday spike, summer produce abundance, back-to-school lunch prep costs",
                  "Weeks with detailed meal plans stay on budget, spontaneous weeks exceed budget"
                ]
              },
              {
                title: "Performance Evaluation",
                prompts: [
                  "How do you measure success in your food budgeting beyond just staying under budget?",
                  "What metrics help you understand the value you're getting from your food spending?",
                  "How do you evaluate trade-offs between cost savings and other priorities?",
                  "What feedback do you get from family members about budget-related meal changes?",
                  "How do you determine when budget adjustments are needed versus better spending discipline?"
                ],
                examples: [
                  "Family satisfaction with meals, nutrition goals met, food waste minimized, stress levels",
                  "Cost per serving, meals cooked at home, variety maintained, health improvements",
                  "Time saved versus money spent, convenience versus cost, health impact of cheaper options",
                  "Family complaints about meal quality, requests for specific items, enjoyment levels",
                  "Consistent budget overruns suggest unrealistic goals, occasional overruns suggest discipline issues"
                ]
              }
            ]}
            tips={[
              "Track spending in real-time rather than trying to reconstruct it later",
              "Look for patterns in your spending to identify areas for improvement",
              "Include family feedback in your budget evaluation, not just financial metrics",
              "Compare your cost per serving to restaurant prices to appreciate home cooking value",
              "Regular budget reviews help you adjust goals and strategies based on actual results"
            ]}
          />
        </TabsContent>

        <TabsContent value="optimization">
          <GuidedNotePage
            title="Budget Optimization Strategies"
            description="Continuously improve your food budget effectiveness and adapt to changing circumstances"
            sections={[
              {
                title: "Efficiency Improvements",
                prompts: [
                  "What budget optimization strategies have had the biggest impact on your food costs?",
                  "How do you identify and eliminate inefficient spending patterns?",
                  "What investments in tools or skills have reduced your long-term food costs?",
                  "How do you balance time investment with money savings in food preparation?",
                  "What budget optimization strategies work best for your family's specific situation?"
                ],
                examples: [
                  "Meal planning reduced impulse purchases by 40%, bulk buying staples saves $50/month",
                  "Track cost per serving, eliminate low-value convenience foods, reduce food waste",
                  "Food processor for faster vegetable prep, good knives for breaking down whole chickens",
                  "Batch cooking saves money but requires weekend time, quick meals cost more but save weeknight stress",
                  "Family of teenagers needs filling foods, empty nesters can focus on quality over quantity"
                ]
              },
              {
                title: "Seasonal and Lifecycle Adjustments",
                prompts: [
                  "How do you adjust your budget strategy for different seasons and lifecycle changes?",
                  "What budget modifications do you make for holidays, vacations, and special events?",
                  "How does your food budget strategy evolve as family circumstances change?",
                  "What long-term trends affect your food budget planning?",
                  "How do you prepare your food budget for predictable and unpredictable changes?"
                ],
                examples: [
                  "Summer: more fresh produce, grilling; Winter: heartier meals, preserved foods",
                  "December: 25% budget increase, vacation: meal planning around travel, birthdays: special meal budget",
                  "Growing teenagers increase protein needs, aging parents may need softer foods",
                  "Inflation affects all categories, income changes, dietary restrictions develop with age",
                  "Emergency fund for unexpected dietary needs, flexibility built into monthly budget"
                ]
              },
              {
                title: "Advanced Optimization Techniques",
                prompts: [
                  "What advanced strategies help you get maximum value from your food budget?",
                  "How do you optimize the balance between all your food-related priorities?",
                  "What creative approaches have you discovered for reducing costs while improving meals?",
                  "How do you share cost-saving strategies with family and friends?",
                  "What future investments or changes could further optimize your food budget?"
                ],
                examples: [
                  "Group buying with neighbors, growing herbs for expensive seasonings, preserving seasonal abundance",
                  "Prioritize nutrition over convenience during tight months, splurge on experiences over daily meals",
                  "Cooking classes improved efficiency, garden provides expensive herbs, homemade versions of pricey items",
                  "Recipe swaps with friends, bulk buying groups, sharing garden produce",
                  "Better kitchen equipment for efficiency, learning preservation techniques, potential garden expansion"
                ]
              }
            ]}
            tips={[
              "Focus optimization efforts on the areas where you spend the most money",
              "Small improvements in frequently purchased items have big cumulative impact",
              "Balance cost savings with other priorities like time, health, and family satisfaction",
              "Learn new skills gradually to avoid overwhelming yourself while reducing costs",
              "Share strategies with others - you'll learn new techniques and help others save money too"
            ]}
          />
        </TabsContent>

      </Tabs>
    </div>
  )
}