"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function WeeklySchedule() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Weekly Meal Schedule Planning</h1>
        <p className="text-muted-foreground">Create a structured weekly meal schedule that works with your lifestyle and commitments.</p>
      </div>

      <Tabs defaultValue="schedule-mapping" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="schedule-mapping" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Schedule Mapping</span>
            <span className="sm:hidden">Schedule</span>
          </TabsTrigger>
          <TabsTrigger value="meal-timing" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Meal Timing</span>
            <span className="sm:hidden">Timing</span>
          </TabsTrigger>
          <TabsTrigger value="weekly-themes" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Weekly Themes</span>
            <span className="sm:hidden">Themes</span>
          </TabsTrigger>
          <TabsTrigger value="flexibility-plans" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Flexibility Plans</span>
            <span className="sm:hidden">Flexible</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="schedule-mapping">
          <GuidedNotePage
            title="Weekly Schedule Assessment"
            description="Map out your weekly commitments to identify optimal meal planning and cooking windows"
            sections={[
              {
                title: "Daily Commitment Analysis",
                prompts: [
                  "What does your typical Monday through Friday schedule look like?",
                  "Which days are your busiest with work, school, or other commitments?",
                  "What time do you typically get home each day of the week?",
                  "Which evenings are regularly occupied with activities or events?",
                  "How does your weekend schedule differ from your weekday routine?"
                ],
                examples: [
                  "Work 9-6 Monday-Friday, gym Tuesday/Thursday 7pm, kids' soccer Wednesday 6pm",
                  "Mondays and Thursdays packed with meetings, Tuesdays lighter workload",
                  "Home by 6:30pm most days, 8pm on gym days, 7:30pm after kids' activities",
                  "Tuesday night book club, Thursday gym, Saturday morning farmers market",
                  "Weekends more relaxed, sleep in Saturday, Sunday family activities and meal prep"
                ]
              },
              {
                title: "Energy and Motivation Patterns",
                prompts: [
                  "Which days do you feel most energetic for cooking?",
                  "When during the week do you feel most motivated to try new recipes?",
                  "What days are you typically too tired for anything but simple meals?",
                  "How does your energy change throughout the week?",
                  "Which part of your week would benefit from having meals already prepared?"
                ],
                examples: [
                  "Sundays great for meal prep, Wednesdays good for trying new things",
                  "Weekend mornings when relaxed, Sunday afternoons for batch cooking",
                  "Monday after long weekend, Thursday mid-week exhaustion, Friday after work",
                  "Start week strong, mid-week dip Wednesday-Thursday, weekend recovery",
                  "Monday-Wednesday benefit from prep, Thursday-Friday need grab-and-go options"
                ]
              },
              {
                title: "Family Schedule Coordination",
                prompts: [
                  "How do family members' schedules impact meal timing during the week?",
                  "Which days does everyone eat together versus separately?",
                  "What activities or commitments affect family mealtime?",
                  "How do different age groups' schedules create mealtime challenges?",
                  "Which days require portable or flexible meal options?"
                ],
                examples: [
                  "Kids' sports practices 3 days per week, spouse travels Tuesdays",
                  "Sunday dinners together, weekday dinners vary by activities",
                  "Soccer practice through dinner, dance class pickup during cooking time",
                  "Teenagers eat earlier, adults eat later, toddlers need earlier bedtime",
                  "Pack lunches for field trips, dinner containers for late practices"
                ]
              }
            ]}
            tips={[
              "Look for patterns in your busiest and most relaxed days",
              "Identify which days would benefit most from prepared meals",
              "Consider energy levels, not just time availability, when planning cooking days",
              "Map family activities that impact meal timing throughout the week",
              "Build flexibility into your schedule for unexpected changes"
            ]}
          />
        </TabsContent>

        <TabsContent value="meal-timing">
          <GuidedNotePage
            title="Meal Timing Strategy"
            description="Optimize meal timing throughout your week for health, convenience, and family coordination"
            sections={[
              {
                title: "Breakfast Planning",
                prompts: [
                  "What time do you typically eat breakfast on weekdays versus weekends?",
                  "How much time do you have for breakfast preparation on busy mornings?",
                  "Do family members eat breakfast at different times or together?",
                  "What breakfast options work best for your morning energy needs?",
                  "How can you prepare breakfast components ahead of time?"
                ],
                examples: [
                  "Weekdays 7am quick breakfast, weekends 9am leisurely brunch-style",
                  "15 minutes max on weekdays, 45 minutes available weekend mornings",
                  "Adults grab-and-go, kids eat at table, family breakfast only on weekends",
                  "Protein-rich options for sustained energy, avoid sugar crashes before work",
                  "Overnight oats, breakfast burritos to freeze, pre-cut fruit, hard-boiled eggs"
                ]
              },
              {
                title: "Lunch Coordination",
                prompts: [
                  "Where do you typically eat lunch during the workweek?",
                  "What lunch timing works best for your afternoon energy and productivity?",
                  "How do you handle lunch for family members with different schedules?",
                  "What lunch options keep you satisfied until dinner?",
                  "How much lunch prep can you realistically do each week?"
                ],
                examples: [
                  "Pack lunch 4 days, buy lunch once per week, work from home Fridays",
                  "12pm lunch prevents 3pm energy crash, later lunch if dinner is early",
                  "Pack school lunches night before, spouse buys lunch, prep weekend lunches",
                  "Protein + complex carbs + vegetables, avoid heavy meals that cause afternoon sluggishness",
                  "Sunday meal prep 3 lunch containers, Wednesday prep 2 more, daily fresh additions"
                ]
              },
              {
                title: "Dinner Strategy",
                prompts: [
                  "What's your ideal dinner timing for each day of the week?",
                  "How do after-school and work activities impact your dinner schedule?",
                  "Which days work best for cooking fresh versus reheating prepared meals?",
                  "How do you balance family dinners with individual schedule needs?",
                  "What backup dinner plans do you need for unexpected schedule changes?"
                ],
                examples: [
                  "6pm ideal, 7pm on activity days, 5:30pm when kids have early bedtime",
                  "Soccer practice means 8pm dinner or pre-practice snack with later light meal",
                  "Cook fresh Monday/Wednesday/Friday, reheat Sunday prep Tuesday/Thursday",
                  "Family dinner 4 days per week, individual meals 3 days due to activities",
                  "Slow cooker backup, freezer meals, quick pasta options, takeout allowance"
                ]
              },
              {
                title: "Snack Integration",
                prompts: [
                  "When do you and your family typically get hungry for snacks?",
                  "What snacks support your energy levels versus cause crashes?",
                  "How do you prevent snacking from interfering with meal appetite?",
                  "What grab-and-go snack options work for your lifestyle?",
                  "How can you prep healthy snacks to avoid processed convenience options?"
                ],
                examples: [
                  "Mid-morning work snack, kids' after-school snack, evening snack if late dinner",
                  "Protein + healthy fat combinations, avoid sugary mid-afternoon snacks",
                  "Snacks 2+ hours before meals, smaller portions if dinner will be late",
                  "Individual baggies of nuts, cut vegetables with hummus, fruit and cheese",
                  "Sunday prep veggie sticks, portion trail mix, make energy balls, wash fruit"
                ]
              }
            ]}
            tips={[
              "Align meal timing with natural energy rhythms when possible",
              "Prep breakfast and lunch components ahead for busy mornings",
              "Plan dinner timing around family's most predictable schedule conflicts",
              "Use strategic snacking to maintain energy without spoiling meals",
              "Build buffer time into meal timing for unexpected delays"
            ]}
          />
        </TabsContent>

        <TabsContent value="weekly-themes">
          <GuidedNotePage
            title="Weekly Meal Themes & Rotation"
            description="Create themed meal patterns and rotation systems to simplify weekly planning"
            sections={[
              {
                title: "Day-of-Week Themes",
                prompts: [
                  "What meal themes could you assign to different days of the week?",
                  "Which days would benefit from specific cuisine types or cooking methods?",
                  "How could themes help reduce decision fatigue during busy weeks?",
                  "What themes would work well with your family's preferences and schedule?",
                  "How can themes provide structure while still allowing variety?"
                ],
                examples: [
                  "Meatless Monday, Taco Tuesday, One-Pot Wednesday, Takeout Thursday, Pizza Friday",
                  "Sunday slow-cooker, Monday leftovers, Tuesday stir-fry, Wednesday pasta",
                  "Knowing Wednesday is always soup day eliminates daily 'what's for dinner' decisions",
                  "Asian Monday, Mediterranean Wednesday, Comfort Food Friday matches family favorites",
                  "Pasta Tuesday allows for different sauces, proteins, and vegetables each week"
                ]
              },
              {
                title: "Seasonal Theme Rotation",
                prompts: [
                  "How could you rotate meal themes seasonally to match produce availability?",
                  "What themes would work better in different seasons based on weather?",
                  "How can you incorporate seasonal ingredients into your weekly themes?",
                  "What comfort food themes work for different times of year?",
                  "How do holiday seasons impact your weekly meal theme planning?"
                ],
                examples: [
                  "Summer: Grilling Monday, Salad Tuesday; Winter: Soup Monday, Roast Tuesday",
                  "Cold weather calls for hearty stews, warm weather for fresh and light meals",
                  "Spring asparagus week, summer tomato week, fall squash week, winter citrus week",
                  "Warm soups in winter, cold gazpacho in summer, comfort foods during stress",
                  "December includes more baking themes, January focuses on fresh/healthy themes"
                ]
              },
              {
                title: "Protein and Preparation Themes",
                prompts: [
                  "How could you organize weekly themes around different protein sources?",
                  "What cooking method themes would work with your kitchen setup and skills?",
                  "How can you balance quick prep days with longer cooking project days?",
                  "What themes help you use up ingredients efficiently throughout the week?",
                  "How do protein themes help with grocery shopping and meal prep?"
                ],
                examples: [
                  "Chicken Monday, Fish Tuesday, Vegetarian Wednesday, Beef Thursday, Eggs Friday",
                  "Sheet Pan Sunday, Slow Cooker Monday, Stir-Fry Tuesday, Soup Wednesday",
                  "Quick Monday and Wednesday, elaborate cooking projects Saturday and Sunday",
                  "Leftover remix Thursday uses Monday's protein in new way",
                  "Buy chicken in bulk Sunday, use for 3 different meals throughout week"
                ]
              }
            ]}
            tips={[
              "Start with 2-3 themes that match your current habits and preferences",
              "Make themes flexible guidelines rather than rigid rules",
              "Choose themes that work with your grocery shopping and meal prep schedule",
              "Seasonal theme adjustments keep meals interesting throughout the year",
              "Family input on theme preferences increases buy-in and enjoyment"
            ]}
          />
        </TabsContent>

        <TabsContent value="flexibility-plans">
          <GuidedNotePage
            title="Flexibility and Backup Plans"
            description="Build adaptability into your weekly meal schedule for unexpected changes and busy periods"
            sections={[
              {
                title: "Emergency Meal Solutions",
                prompts: [
                  "What quick meals can you prepare in 15 minutes or less?",
                  "What ingredients do you always keep on hand for emergency meals?",
                  "Which freezer meals work best for your family when plans change suddenly?",
                  "How do you handle dinner when you're running late or feeling overwhelmed?",
                  "What are your acceptable takeout or convenience food backup options?"
                ],
                examples: [
                  "Scrambled eggs and toast, pasta with jar sauce, quesadillas, stir-fried rice",
                  "Pasta, canned beans, frozen vegetables, eggs, rice, canned tomatoes",
                  "Homemade breakfast burritos, soup portions, cooked ground meat, casseroles",
                  "Call family member to start slow cooker, order grocery pickup, use meal kit",
                  "Local pizza place, healthy frozen dinners, rotisserie chicken from store"
                ]
              },
              {
                title: "Schedule Disruption Management",
                prompts: [
                  "How do you adjust your meal plan when someone gets sick?",
                  "What's your strategy when work schedules change unexpectedly?",
                  "How do you handle meals during travel or unusual events?",
                  "What meal solutions work when your usual prep time gets disrupted?",
                  "How do you get back on track after a disrupted week?"
                ],
                examples: [
                  "Simple broths and soups when sick, easy reheating options for caregiver",
                  "Shift slow cooker meals to busy days, move elaborate cooking to free days",
                  "Pack travel snacks, research restaurant options, prep portable meals",
                  "Use Sunday backup if regular prep day gets canceled, delegate to family members",
                  "Don't try to catch up on everything, focus on 2-3 key meals and rebuild gradually"
                ]
              },
              {
                title: "Seasonal and Life Changes",
                prompts: [
                  "How do you adapt your meal schedule during busy seasons (holidays, school start)?",
                  "What adjustments do you make during summer when routines change?",
                  "How do you handle meal planning during major life changes or stress?",
                  "What's your strategy for maintaining meal planning during vacation periods?",
                  "How do you simplify your meal routine during overwhelming times?"
                ],
                examples: [
                  "December: more freezer meals, accept help from family, simplify sides",
                  "Summer: more grilling, fresh fruit meals, flexible timing for activities",
                  "New job/baby/move: focus on 5-6 reliable meals, accept convenience options",
                  "Pre-vacation prep extra freezer meals, post-vacation simple restart meals",
                  "Reduce to 3 meal types, use same grocery list, eliminate elaborate cooking"
                ]
              }
            ]}
            tips={[
              "Always have ingredients for 2-3 emergency meals on hand",
              "Build flexibility into your weekly themes rather than rigid daily assignments",
              "Communicate backup plans with family members so they can help when needed",
              "Accept that some weeks won't go according to plan - that's normal",
              "Keep a running list of successful flexibility strategies that work for your family"
            ]}
          />
        </TabsContent>

      </Tabs>
    </div>
  )
}