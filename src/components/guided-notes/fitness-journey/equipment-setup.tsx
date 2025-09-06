"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function EquipmentSetup() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Equipment Setup & Home Gym</h1>
        <p className="text-muted-foreground">Plan your fitness equipment needs and create an effective workout space.</p>
      </div>

      <Tabs defaultValue="needs-assessment" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="needs-assessment" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Needs Assessment</span>
            <span className="sm:hidden">Needs</span>
          </TabsTrigger>
          <TabsTrigger value="space-planning" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Space Planning</span>
            <span className="sm:hidden">Space</span>
          </TabsTrigger>
          <TabsTrigger value="equipment-selection" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Equipment</span>
            <span className="sm:hidden">Gear</span>
          </TabsTrigger>
          <TabsTrigger value="budget-setup" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Budget & Setup</span>
            <span className="sm:hidden">Budget</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="needs-assessment">
          <GuidedNotePage
            title="Equipment Needs Assessment"
            description="Evaluate what equipment you actually need based on your goals and preferences"
            sections={[
              {
                title: "Fitness Goal Requirements",
                prompts: [
                  "What types of equipment are essential for achieving your specific fitness goals?",
                  "How will your equipment needs change as you progress in your fitness journey?",
                  "What exercises form the core of your workout routine and what equipment do they require?",
                  "Which pieces of equipment would provide the most versatility for different workout types?",
                  "What equipment gaps currently prevent you from doing your ideal workouts?"
                ],
                examples: [
                  "Strength training: weights, bench; Cardio: treadmill, bike; Flexibility: yoga mat, blocks",
                  "Start with bodyweight, add dumbbells, progress to barbell, eventually specialty equipment",
                  "Compound movements need free weights, isolation needs specific machines or accessories",
                  "Adjustable dumbbells, resistance bands, suspension trainer cover multiple exercise types",
                  "No weights for strength, no cardio equipment for weather days, no space for stretching"
                ]
              },
              {
                title: "Current Resources & Limitations",
                prompts: [
                  "What fitness equipment do you already own and how effectively are you using it?",
                  "What space limitations do you have for storing and using fitness equipment?",
                  "How much time do you realistically have for equipment setup and cleanup?",
                  "What physical limitations or safety considerations affect your equipment choices?",
                  "How will family members or roommates be impacted by your equipment choices?"
                ],
                examples: [
                  "Dusty treadmill, unused dumbbells, basic yoga mat - assess what you actually use",
                  "Apartment living, shared spaces, storage constraints, ceiling height, floor protection",
                  "Quick 20-minute workouts need minimal setup, longer sessions allow more complex equipment",
                  "Back issues limit floor exercises, joint problems need low-impact options, balance concerns",
                  "Equipment that doubles as furniture, quiet options for apartments, safe for children"
                ]
              },
              {
                title: "Lifestyle Integration",
                prompts: [
                  "How will you integrate equipment use into your daily routine and schedule?",
                  "What equipment will you need for different workout locations (home, office, travel)?",
                  "How important is equipment portability and ease of storage for your lifestyle?",
                  "What seasonal considerations affect your equipment needs?",
                  "How will you maintain and care for your fitness equipment long-term?"
                ],
                examples: [
                  "Morning routines need quick setup, evening workouts allow more complex equipment",
                  "Resistance bands for travel, desk equipment for work, outdoor gear for nice weather",
                  "Apartment living requires foldable/storable options, house allows permanent setup",
                  "Indoor equipment for winter, outdoor gear for summer, weather-independent options",
                  "Regular cleaning, proper storage, replacement planning, warranty considerations"
                ]
              },
              {
                title: "Technology & Connectivity",
                prompts: [
                  "What role will technology play in your fitness equipment choices?",
                  "How important are tracking features, apps, and connectivity in your equipment?",
                  "What entertainment or motivation features matter to you during workouts?",
                  "How will you balance high-tech features with simplicity and reliability?",
                  "What backup plans will you have if technology-dependent equipment fails?"
                ],
                examples: [
                  "Smart watches for tracking, app-connected equipment, online workout integration",
                  "Heart rate monitoring, workout tracking, progress analysis, social features",
                  "Built-in screens, music compatibility, virtual classes, gaming features",
                  "Focus on core functionality first, technology as bonus, manual backup options",
                  "Non-tech alternatives, offline capabilities, simple manual tracking methods"
                ]
              }
            ]}
            tips={[
              "Start with versatile, multi-purpose equipment rather than specialized single-use items",
              "Consider renting or trying equipment before purchasing expensive pieces",
              "Focus on equipment that supports exercises you actually enjoy doing",
              "Think about your space and storage limitations before buying anything large",
              "Invest in quality basics rather than many cheap items that won't last"
            ]}
          />
        </TabsContent>

        <TabsContent value="space-planning">
          <GuidedNotePage
            title="Workout Space Planning"
            description="Design and organize your workout space for safety, efficiency, and motivation"
            sections={[
              {
                title: "Space Assessment & Design",
                prompts: [
                  "What spaces in your home are available for working out?",
                  "How will you optimize your available space for different types of exercises?",
                  "What storage solutions will you implement for equipment organization?",
                  "How will you ensure adequate ventilation and lighting in your workout space?",
                  "What safety considerations do you need to address in your workout area?"
                ],
                examples: [
                  "Living room, bedroom, garage, basement, outdoor patio - assess pros/cons of each",
                  "Clear floor space for cardio, wall space for stretching, ceiling height for overhead movements",
                  "Wall hooks, storage bins, equipment racks, under-bed storage, closet organization",
                  "Fan installation, window opening, LED lighting, mirrors for form checking",
                  "Non-slip flooring, equipment secure storage, clear pathways, first aid accessibility"
                ]
              },
              {
                title: "Multi-Purpose Space Solutions",
                prompts: [
                  "How will you efficiently transform living spaces into workout areas?",
                  "What quick setup and breakdown routines will you establish?",
                  "How will you protect floors and furniture during workouts?",
                  "What visual cues or organization systems will help maintain your space?",
                  "How will you handle noise considerations for apartment or shared living?"
                ],
                examples: [
                  "Push furniture aside, roll out mats, unfold equipment - make it routine and quick",
                  "2-minute setup goal, equipment stored in workout order, pre-planned space arrangement",
                  "Yoga mats, interlocking foam tiles, furniture pads, equipment mats",
                  "Designated equipment corner, visual reminders, organized storage, ready-to-go setup",
                  "Rubber flooring, quieter equipment, considerate timing, headphones for music"
                ]
              },
              {
                title: "Motivation & Environment",
                prompts: [
                  "How will you make your workout space motivating and energizing?",
                  "What visual elements will inspire you to use the space regularly?",
                  "How will you minimize distractions in your workout environment?",
                  "What music or entertainment setup will enhance your workouts?",
                  "How will you make the space feel separate from everyday life activities?"
                ],
                examples: [
                  "Inspiring quotes, progress photos, achievement board, good lighting, plant life",
                  "Mirrors for form and motivation, colorful equipment, achievement displays, vision board",
                  "Put away work materials, silence phones, designated workout zone, minimize clutter",
                  "Bluetooth speakers, TV for classes, music playlists, podcast setup, tablet holder",
                  "Dedicated workout corner, special lighting, ritual of setting up space, workout-only items"
                ]
              },
              {
                title: "Outdoor & Alternative Spaces",
                prompts: [
                  "How will you utilize outdoor spaces for fitness activities?",
                  "What weather contingency plans will you have for outdoor workouts?",
                  "How will you make public spaces work for your fitness routine?",
                  "What portable setup options will you develop for travel or variety?",
                  "How will you adapt your routine for different seasonal environments?"
                ],
                examples: [
                  "Backyard circuits, park workouts, beach exercises, hiking trails, outdoor yoga",
                  "Indoor backup plan, covered areas, weather-appropriate clothing, seasonal equipment",
                  "Parks with equipment, walking/running trails, outdoor fitness classes, sports courts",
                  "Travel workout kit, hotel room routines, bodyweight-only options, resistance bands",
                  "Summer outdoor focus, winter indoor alternatives, spring activity increase, fall preparation"
                ]
              }
            ]}
            tips={[
              "Start with the space you have rather than waiting for the perfect setup",
              "Create a dedicated workout zone even in small spaces to build the habit",
              "Invest in good lighting and ventilation - they make a huge difference",
              "Keep your workout space organized and ready to use at a moment's notice",
              "Make your space inviting and motivating so you want to spend time there"
            ]}
          />
        </TabsContent>

        <TabsContent value="equipment-selection">
          <GuidedNotePage
            title="Equipment Selection & Priorities"
            description="Choose the right equipment for your goals, space, and budget"
            sections={[
              {
                title: "Essential Equipment Categories",
                prompts: [
                  "What basic equipment do you need to start your fitness routine immediately?",
                  "Which equipment will provide the foundation for strength training?",
                  "What cardio equipment options best fit your goals and space?",
                  "What flexibility and recovery tools will support your overall fitness?",
                  "Which specialty equipment would enhance your specific workout preferences?"
                ],
                examples: [
                  "Yoga mat, water bottle, workout clothes, basic weights - start with absolute minimum",
                  "Adjustable dumbbells, resistance bands, pull-up bar, bench - versatile strength options",
                  "Jump rope, stationary bike, treadmill, rowing machine - space and preference dependent",
                  "Foam roller, stretching strap, yoga blocks, massage balls - recovery and mobility",
                  "Kettlebells for functional training, TRX for suspension, bosu ball for balance"
                ]
              },
              {
                title: "Quality vs Budget Considerations",
                prompts: [
                  "Where will you invest in higher quality equipment for safety and durability?",
                  "What equipment can you start with budget versions and upgrade later?",
                  "How will you research and evaluate equipment before purchasing?",
                  "What used or alternative equipment sources will you consider?",
                  "How will you balance immediate needs with long-term investment planning?"
                ],
                examples: [
                  "Quality dumbbells and safety equipment, cheaper accessories like bands and balls",
                  "Basic yoga mat to start, upgrade to premium later; resistance bands before cable machine",
                  "Online reviews, try at gym first, ask for recommendations, watch demonstration videos",
                  "Facebook marketplace, gym equipment stores, end-of-year sales, equipment swaps",
                  "Start with essentials, add one piece monthly, plan major purchases around sales"
                ]
              },
              {
                title: "Space-Efficient Equipment",
                prompts: [
                  "What equipment provides maximum workout variety in minimal space?",
                  "How will you prioritize equipment that serves multiple functions?",
                  "What storage-friendly equipment will you choose for small spaces?",
                  "How will you maximize vertical space utilization for equipment storage?",
                  "What foldable or collapsible equipment options fit your space constraints?"
                ],
                examples: [
                  "Adjustable dumbbells, resistance bands, suspension trainers, medicine balls",
                  "Bench that doubles as storage, dumbbells instead of multiple fixed weights",
                  "Resistance bands, jump ropes, yoga mats, foam rollers - all easily stored",
                  "Wall-mounted pull-up bars, vertical weight racks, ceiling hooks for bands",
                  "Folding bench, collapsible power tower, adjustable equipment over fixed sizes"
                ]
              },
              {
                title: "Progressive Equipment Planning",
                prompts: [
                  "How will you plan equipment purchases to support your advancing fitness level?",
                  "What equipment will you likely need 6-12 months from now?",
                  "How will you avoid buying equipment that you'll quickly outgrow?",
                  "What modular or expandable equipment systems will grow with you?",
                  "How will you repurpose or upgrade equipment as your needs change?"
                ],
                examples: [
                  "Start with lighter weights, plan for heavier; basic equipment first, specialty later",
                  "Power rack for advanced lifting, heavier dumbbells, specialized accessories",
                  "Adjustable equipment over fixed weights, quality items that won't break quickly",
                  "Dumbbell sets that expand, rack systems you can add to, modular home gyms",
                  "Sell beginner equipment, donate to family, repurpose for different exercises"
                ]
              }
            ]}
            tips={[
              "Buy adjustable equipment when possible to save space and allow for progression",
              "Start with versatile basics and add specialty items only after establishing consistent habits",
              "Research thoroughly before major purchases - read reviews and try equipment if possible",
              "Consider the total cost of ownership including storage, maintenance, and replacement",
              "Focus on equipment that supports exercises you actually enjoy doing"
            ]}
          />
        </TabsContent>

        <TabsContent value="budget-setup">
          <GuidedNotePage
            title="Budget Planning & Setup Process"
            description="Create a realistic budget and systematic approach to building your home gym"
            sections={[
              {
                title: "Budget Planning & Prioritization",
                prompts: [
                  "What is your total budget for fitness equipment and over what timeframe?",
                  "How will you prioritize equipment purchases based on immediate needs?",
                  "What monthly equipment budget can you realistically maintain?",
                  "How will you balance equipment costs with other fitness expenses?",
                  "What financing or payment options will you consider for larger purchases?"
                ],
                examples: [
                  "$500 initial setup, $100/month additions, $2000 total first year - realistic amounts",
                  "Start with basics for immediate workouts, add variety equipment later",
                  "$50-200 monthly depending on budget, save for larger items, take advantage of sales",
                  "Equipment vs gym membership, personal trainer, nutrition costs, workout clothes",
                  "Payment plans for major items, save up for quality pieces, seasonal sales timing"
                ]
              },
              {
                title: "Cost-Effective Strategies",
                prompts: [
                  "What alternatives to new equipment will you explore?",
                  "How will you find the best deals and avoid overpaying?",
                  "What DIY or improvised equipment solutions will you consider?",
                  "How will you calculate the true value and cost-per-use of equipment?",
                  "What seasonal timing strategies will help you save money?"
                ],
                examples: [
                  "Used equipment, gym closures sales, Facebook marketplace, equipment swaps with friends",
                  "Price comparison, wait for sales, use apps for deal alerts, buy end-of-season",
                  "Water jugs as weights, towels for sliders, stairs for cardio, bodyweight alternatives",
                  "Cost divided by expected uses over lifetime, compare to gym membership costs",
                  "January sales, Black Friday deals, end of summer outdoor equipment discounts"
                ]
              },
              {
                title: "Setup Timeline & Implementation",
                prompts: [
                  "What is your realistic timeline for acquiring all planned equipment?",
                  "How will you phase your equipment purchases for immediate usability?",
                  "What setup and assembly considerations do you need to plan for?",
                  "How will you test and evaluate each piece of equipment after purchase?",
                  "What return or exchange policies will you research before buying?"
                ],
                examples: [
                  "Basic setup month 1, add equipment monthly, major pieces quarterly, full setup in 6-12 months",
                  "Buy complete workout capability first, then add variety and upgrade quality",
                  "Assembly time, tool requirements, space for assembly, help needed for large items",
                  "Use for 30 days, check build quality, assess actual utility, compare to expectations",
                  "30-day return windows, warranty coverage, exchange policies, restocking fees"
                ]
              },
              {
                title: "Maintenance & Long-term Planning",
                prompts: [
                  "What ongoing maintenance costs and requirements will you budget for?",
                  "How will you plan for equipment replacement and upgrades over time?",
                  "What insurance or protection considerations do you have for valuable equipment?",
                  "How will you handle equipment that breaks or becomes obsolete?",
                  "What resale or donation strategy will you develop for unused equipment?"
                ],
                examples: [
                  "Cleaning supplies, replacement parts, lubricants, periodic professional service",
                  "3-5 year replacement cycle, technology updates, wear and tear, changing needs",
                  "Homeowner's/renter's insurance coverage, extended warranties for expensive items",
                  "Repair vs replace decisions, warranty claims, disposal of broken equipment",
                  "Sell online, donate to schools/charities, give to family/friends starting fitness journeys"
                ]
              }
            ]}
            tips={[
              "Start small and build gradually rather than trying to buy everything at once",
              "Research thoroughly before major purchases to avoid buyer's remorse",
              "Factor in total cost including shipping, assembly, and accessories",
              "Buy quality basics first, then add variety and specialty items",
              "Keep receipts and warranty information organized for future reference"
            ]}
          />
        </TabsContent>

      </Tabs>
    </div>
  )
}