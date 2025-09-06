"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function SeasonalPlanning() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Seasonal Meal Planning</h1>
        <p className="text-muted-foreground">Adapt your meal planning to seasonal ingredients, weather patterns, and changing family rhythms throughout the year.</p>
      </div>

      <Tabs defaultValue="seasonal-ingredients" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="seasonal-ingredients" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Seasonal Ingredients</span>
            <span className="sm:hidden">Ingredients</span>
          </TabsTrigger>
          <TabsTrigger value="weather-adaptation" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Weather Adaptation</span>
            <span className="sm:hidden">Weather</span>
          </TabsTrigger>
          <TabsTrigger value="seasonal-routines" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Seasonal Routines</span>
            <span className="sm:hidden">Routines</span>
          </TabsTrigger>
          <TabsTrigger value="preservation-planning" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Preservation</span>
            <span className="sm:hidden">Preserve</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="seasonal-ingredients">
          <GuidedNotePage
            title="Seasonal Ingredient Planning"
            description="Maximize flavor, nutrition, and cost savings by planning meals around seasonal ingredient availability"
            sections={[
              {
                title: "Spring Ingredient Focus",
                prompts: [
                  "What spring ingredients do you want to prioritize in your meal planning?",
                  "How do you incorporate early spring vegetables into your family's favorite meals?",
                  "What seasonal transitions help you move from heavy winter foods to lighter spring options?",
                  "How do you take advantage of spring produce pricing and availability?",
                  "What spring cooking methods and preparations work best for your family?"
                ],
                examples: [
                  "Asparagus, peas, artichokes, spring onions, early leafy greens, strawberries",
                  "Add asparagus to pasta dishes, peas in risotto, fresh greens in salads and smoothies",
                  "Gradually reduce heavy stews, introduce more raw vegetables, lighter proteins",
                  "Buy asparagus in bulk when cheap, preserve or freeze, stock up on frozen spring vegetables",
                  "Quick sautéing to preserve crispness, fresh preparations, light soups and salads"
                ]
              },
              {
                title: "Summer Abundance Planning",
                prompts: [
                  "How do you handle the abundance of summer produce in your meal planning?",
                  "What summer ingredients do you prioritize for preservation or bulk preparation?",
                  "How do you keep meals light and refreshing during hot weather while maintaining nutrition?",
                  "What grilling and outdoor cooking plans work with your summer schedule?",
                  "How do you balance fresh eating with preparing for fall and winter?"
                ],
                examples: [
                  "Tomatoes, zucchini, corn, berries, stone fruits, herbs - plan multiple uses for each",
                  "Can tomato sauce, freeze corn, dehydrate herbs, make berry preserves",
                  "Cold soups, salads with protein, grilled vegetables, fresh fruit-based meals",
                  "Weekend grilling sessions, outdoor prep areas, batch grilling for week",
                  "Eat fresh daily, preserve 20% for winter, freeze summer soups and sauces"
                ]
              },
              {
                title: "Fall and Winter Preparation",
                prompts: [
                  "How do you transition your meal planning for cooler weather and heartier appetites?",
                  "What fall ingredients become the foundation of your comfort food planning?",
                  "How do you incorporate preserved summer foods into fall and winter meals?",
                  "What winter meal planning strategies help combat seasonal mood and energy changes?",
                  "How do you balance warming comfort foods with maintaining nutrition variety?"
                ],
                examples: [
                  "Gradually introduce stews, roasts, warming spices, longer cooking methods",
                  "Squash, root vegetables, apples, cranberries, nuts, warming spices like cinnamon",
                  "Add frozen summer vegetables to winter stews, use preserved tomatoes in comfort foods",
                  "Bright colors from winter citrus, vitamin D consideration, mood-boosting comfort favorites",
                  "Include winter greens, citrus fruits, balance heavy foods with lighter sides"
                ]
              }
            ]}
            tips={[
              "Follow local seasonal guides to know when ingredients are at peak quality and lowest cost",
              "Plan meals around what's abundant and affordable each season",
              "Use seasonal ingredients as inspiration for trying new recipes and cooking methods",
              "Buy extra when seasonal favorites are at their cheapest and preserve for later",
              "Let seasonal availability guide your meal themes rather than fighting against nature's timing"
            ]}
          />
        </TabsContent>

        <TabsContent value="weather-adaptation">
          <GuidedNotePage
            title="Weather-Responsive Meal Planning"
            description="Adapt your cooking methods, meal timing, and food choices to work with weather patterns and temperature changes"
            sections={[
              {
                title: "Hot Weather Strategies",
                prompts: [
                  "What cooking methods help you avoid heating up the kitchen during hot weather?",
                  "How do you maintain appealing, nutritious meals when appetites decrease in heat?",
                  "What make-ahead strategies work well for hot weather meal planning?",
                  "How do you keep food safe and fresh during hot weather meal prep and storage?",
                  "What hydrating and cooling foods do you emphasize during summer heat?"
                ],
                examples: [
                  "Grilling outdoors, no-cook meals, slow cooker for minimal kitchen heat, salads and cold soups",
                  "Smaller portions, cold protein options, fresh fruit, light but satisfying combinations",
                  "Cook early morning or evening, prepare cold dishes day before, batch cook during cooler days",
                  "Shorter storage times, insulated containers, frequent refrigerator checks, ice packs for transport",
                  "Water-rich vegetables, fresh fruits, frozen treats, herbal iced teas, cold soups"
                ]
              },
              {
                title: "Cold Weather Comfort",
                prompts: [
                  "How do you adjust meal planning to provide comfort and warmth during cold weather?",
                  "What cooking methods and ingredients help combat winter energy dips?",
                  "How do you balance indulgent comfort foods with maintaining health goals during colder months?",
                  "What meal timing adjustments work better during shorter winter days?",
                  "How do you use warming spices and techniques to make meals more appealing in cold weather?"
                ],
                examples: [
                  "Slow-cooked stews, roasted root vegetables, warm breakfast options, hot beverages with meals",
                  "Complex carbohydrates for sustained energy, warming spices, vitamin D-rich foods, bright colors",
                  "Include comfort foods in moderation, add vegetables to rich dishes, maintain portion awareness",
                  "Earlier dinners due to darkness, hearty breakfasts for energy, warm afternoon snacks",
                  "Cinnamon, ginger, nutmeg, cardamom - add to both sweet and savory dishes"
                ]
              },
              {
                title: "Variable Weather Flexibility",
                prompts: [
                  "How do you plan meals that work for unpredictable weather changes?",
                  "What backup plans do you have when weather disrupts your planned cooking methods?",
                  "How do you handle power outages or weather emergencies with your meal planning?",
                  "What shelf-stable and emergency meal options work for your family during weather disruptions?",
                  "How do you adjust grocery shopping and meal prep for severe weather predictions?"
                ],
                examples: [
                  "Flexible recipes that work indoor or outdoor, multiple cooking method options for same ingredients",
                  "Indoor grilling alternatives, cold backup options when power fails, non-perishable alternatives",
                  "Manual can opener, camping stove backup, shelf-stable proteins, dried fruits and nuts",
                  "Canned soups, peanut butter and bread, dried fruits, nuts, crackers, shelf-stable milk",
                  "Shop early before storms, prep extra meals ahead, stock up on non-perishables"
                ]
              }
            ]}
            tips={[
              "Plan cooking methods based on weather forecasts, not just meal preferences",
              "Keep backup meal options that don't depend on specific cooking methods or fresh ingredients",
              "Adjust meal timing and heartiness based on temperature and daylight patterns",
              "Use weather as an opportunity to try new cooking techniques appropriate to the season",
              "Stock emergency meal supplies for weather-related disruptions to normal meal planning"
            ]}
          />
        </TabsContent>

        <TabsContent value="seasonal-routines">
          <GuidedNotePage
            title="Seasonal Routine Adaptations"
            description="Adjust your meal planning routines and family eating patterns to work with seasonal schedule and lifestyle changes"
            sections={[
              {
                title: "School Year vs. Summer Routines",
                prompts: [
                  "How do your meal planning and preparation routines change during the school year?",
                  "What breakfast and lunch strategies work best during busy school mornings?",
                  "How do you adapt meal timing and preparation for summer's more flexible schedule?",
                  "What family meal traditions work differently during school periods versus summer breaks?",
                  "How do you handle the transition periods at the beginning and end of the school year?"
                ],
                examples: [
                  "More structured meal prep during school, early breakfast prep, portable lunch focus",
                  "Overnight oats, breakfast burritos to freeze, bento box lunches, thermos soups",
                  "Later breakfast, flexible lunch timing, more family cooking projects, outdoor eating",
                  "School year: quick weeknight dinners; summer: elaborate weekend cooking, family picnics",
                  "Gradual schedule adjustment, back-to-school meal prep practice, summer routine wind-down"
                ]
              },
              {
                title: "Holiday and Celebration Integration",
                prompts: [
                  "How do you integrate holiday meal planning with your regular meal routines?",
                  "What seasonal celebrations require special meal planning considerations?",
                  "How do you balance traditional holiday foods with your family's regular nutrition goals?",
                  "What meal prep strategies help you manage busy holiday periods?",
                  "How do you create special occasion meals while maintaining budget and health priorities?"
                ],
                examples: [
                  "November/December: simpler everyday meals, more elaborate weekend celebrations",
                  "Halloween candy management, Thanksgiving feast planning, winter holiday baking traditions",
                  "Maintain vegetable focus, smaller portions of rich foods, balance indulgence with regular meals",
                  "Make-ahead appetizers, freezer desserts, slow cooker mains during busy entertaining",
                  "Set special occasion budget, focus spending on meaningful celebrations, simple elegant options"
                ]
              },
              {
                title: "Activity Season Adjustments",
                prompts: [
                  "How do sports seasons and extracurricular activities affect your meal planning?",
                  "What portable and energizing meal options work for active family schedules?",
                  "How do you adjust meal timing around practice schedules and game days?",
                  "What nutrition considerations do you make for family members in training or competition?",
                  "How do you handle team events and sports-related social meals?"
                ],
                examples: [
                  "Soccer season: portable dinners, early meal timing, protein-focused post-practice snacks",
                  "Energy bars, trail mix, sandwiches that travel well, thermoses for warm foods",
                  "Earlier dinners before practice, post-practice light meals, game day nutrition timing",
                  "Higher protein needs, complex carbohydrates before events, recovery foods after",
                  "Coordinate with other families, potluck contributions, budget for team meals"
                ]
              }
            ]}
            tips={[
              "Create different meal planning templates for different seasons and activity levels",
              "Build flexibility into seasonal routines to handle schedule variations",
              "Involve family members in adjusting routines as seasonal needs change",
              "Use seasonal transitions as opportunities to evaluate and improve your systems",
              "Balance maintaining helpful routines with adapting to seasonal opportunities and constraints"
            ]}
          />
        </TabsContent>

        <TabsContent value="preservation-planning">
          <GuidedNotePage
            title="Food Preservation and Storage Planning"
            description="Plan seasonal preservation activities to extend the benefits of peak season ingredients throughout the year"
            sections={[
              {
                title: "Preservation Method Selection",
                prompts: [
                  "What food preservation methods work best for your available time, space, and equipment?",
                  "How do you decide which seasonal ingredients are worth preserving versus buying year-round?",
                  "What preservation projects can you realistically commit to during busy harvest seasons?",
                  "How do you balance the time investment of preservation with the benefits of preserved foods?",
                  "What preservation methods produce foods your family will actually eat and enjoy?"
                ],
                examples: [
                  "Freezing for busy families, canning for shelf-stable storage, dehydrating for small spaces",
                  "Preserve expensive or unavailable off-season items, skip common available ingredients",
                  "Choose 2-3 major preservation projects per season, focus on family favorites",
                  "Weekend preservation sessions, involve family members, batch processing for efficiency",
                  "Frozen fruit for smoothies, canned tomatoes for sauces, dehydrated herbs for cooking"
                ]
              },
              {
                title: "Seasonal Preservation Planning",
                prompts: [
                  "What preservation timeline works with each season's peak ingredient availability?",
                  "How do you coordinate preservation activities with your regular meal planning and preparation?",
                  "What storage systems support your seasonal preservation goals?",
                  "How do you involve family members in age-appropriate preservation activities?",
                  "What preservation equipment and supplies do you need to prepare in advance?"
                ],
                examples: [
                  "Spring: preserve asparagus and peas; Summer: tomatoes and berries; Fall: apples and squash",
                  "Schedule preservation on meal prep days, simplify regular meals during preservation weeks",
                  "Freezer organization system, canning jar storage, labeling system with dates",
                  "Kids help wash produce, teenagers learn canning basics, adults handle hot processing",
                  "Canning supplies in spring, freezer containers before harvest, preservation tools maintenance"
                ]
              },
              {
                title: "Using Preserved Foods",
                prompts: [
                  "How do you incorporate preserved foods back into your regular meal planning?",
                  "What systems help you rotate through preserved foods before they lose quality?",
                  "How do you maintain variety when using preserved ingredients in winter meal planning?",
                  "What recipes and cooking methods work best with preserved versus fresh ingredients?",
                  "How do you evaluate whether your preservation efforts are worth continuing?"
                ],
                examples: [
                  "Monthly preserved food inventory, specific recipes for preserved ingredients, winter meal themes",
                  "First in, first out rotation, visible storage, regular inventory checks",
                  "Use preserved tomatoes in different ethnic cuisines, vary spices and preparations",
                  "Frozen vegetables in stir-fries, canned fruits in baking, dehydrated herbs year-round",
                  "Track cost savings, family usage rates, time investment versus benefit analysis"
                ]
              }
            ]}
            tips={[
              "Start small with preservation and build skills and systems gradually",
              "Focus on preserving ingredients that are expensive or unavailable out of season",
              "Label everything with contents and date to ensure proper rotation",
              "Choose preservation methods that match your available time and storage space",
              "Plan specific uses for preserved foods to ensure they get consumed rather than wasted"
            ]}
          />
        </TabsContent>

      </Tabs>
    </div>
  )
}