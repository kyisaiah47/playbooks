"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function FamilyCoordination() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Family Meal Coordination</h1>
        <p className="text-muted-foreground">Navigate family dynamics, preferences, and schedules to create meal plans that work for everyone.</p>
      </div>

      <Tabs defaultValue="preferences-management" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="preferences-management" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Preferences</span>
            <span className="sm:hidden">Prefer</span>
          </TabsTrigger>
          <TabsTrigger value="schedule-coordination" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Schedule Coordination</span>
            <span className="sm:hidden">Schedule</span>
          </TabsTrigger>
          <TabsTrigger value="involvement-responsibilities" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Family Involvement</span>
            <span className="sm:hidden">Involve</span>
          </TabsTrigger>
          <TabsTrigger value="special-situations" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Special Situations</span>
            <span className="sm:hidden">Special</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="preferences-management">
          <GuidedNotePage
            title="Managing Family Food Preferences"
            description="Balance diverse family food preferences while maintaining variety and nutrition in your meal planning"
            sections={[
              {
                title: "Understanding Individual Preferences",
                prompts: [
                  "What are each family member's favorite foods and strongest dislikes?",
                  "How do different family members' dietary restrictions or health needs impact meal planning?",
                  "What foods does everyone in the family enjoy that can serve as meal planning foundations?",
                  "How do you handle picky eating behaviors at different ages?",
                  "What cultural or family food traditions are important to maintain?"
                ],
                examples: [
                  "Dad loves spicy food, Mom avoids dairy, 8-year-old dislikes mushrooms, teenager loves pasta",
                  "One family member diabetic, another training for sports needs more calories",
                  "Everyone enjoys grilled chicken, rice dishes, fresh fruit, homemade pizza",
                  "Toddler needs familiar foods, teenager willing to try new things, adults want variety",
                  "Sunday family dinners, holiday cookie baking, ethnic cuisine from grandparents"
                ]
              },
              {
                title: "Compromise Strategies",
                prompts: [
                  "How do you create meals that satisfy different preferences without cooking multiple dishes?",
                  "What's your approach to introducing new foods while respecting individual dislikes?",
                  "How do you handle meals when one family member's dietary needs conflict with others' preferences?",
                  "What strategies work for accommodating both adventurous and conservative eaters?",
                  "How do you maintain family meal unity while allowing for individual modifications?"
                ],
                examples: [
                  "Base meal with customizable toppings, serve disliked ingredients on the side",
                  "Try new foods alongside familiar favorites, multiple exposures without pressure",
                  "Modify recipes to accommodate restrictions, provide alternatives for restricted person",
                  "Offer mild and spicy versions, familiar base with exotic additions available",
                  "Core family meal with individual modifications, teach family members to customize their portions"
                ]
              },
              {
                title: "Evolving Preferences",
                prompts: [
                  "How do you track and adapt to changing family food preferences over time?",
                  "What strategies help expand family members' food preferences gradually?",
                  "How do you handle resistance when trying to improve family nutrition?",
                  "What role does peer influence and external experiences play in changing family food preferences?",
                  "How do you balance accommodating current preferences with encouraging growth?"
                ],
                examples: [
                  "Monthly family preference check-ins, note which new foods were accepted",
                  "Pair new foods with loved ones, involve family in cooking, try different preparations",
                  "Focus on additions rather than restrictions, gradual changes, emphasize how good food makes them feel",
                  "School lunch exposure, friends' families, travel experiences broaden preferences",
                  "Respect current preferences while gently encouraging small expansions"
                ]
              }
            ]}
            tips={[
              "Start meal planning with foods everyone enjoys, then branch out gradually",
              "Create flexible meal structures that allow for individual customization",
              "Document what works and doesn't work to avoid repeating unsuccessful meals",
              "Focus on addition rather than restriction when trying to improve family nutrition",
              "Include all family members in meal planning discussions appropriate to their age"
            ]}
          />
        </TabsContent>

        <TabsContent value="schedule-coordination">
          <GuidedNotePage
            title="Coordinating Family Schedules"
            description="Manage complex family schedules to create realistic meal timing and shared eating opportunities"
            sections={[
              {
                title: "Schedule Mapping",
                prompts: [
                  "How do different family members' work, school, and activity schedules impact meal timing?",
                  "Which meals can the family regularly eat together versus separately?",
                  "What activities or commitments most frequently disrupt family meal plans?",
                  "How do weekend schedules differ from weekday routines for meal planning?",
                  "What seasonal schedule changes affect your family meal coordination?"
                ],
                examples: [
                  "Kids' sports 3 evenings, spouse travels twice monthly, shift work affects dinner timing",
                  "Breakfast together weekends only, lunch rarely together, dinner together 4 nights/week",
                  "Soccer practice, music lessons, work overtime, social commitments",
                  "Weekends: later breakfast, more elaborate cooking, family activity coordination",
                  "School year: strict schedules, summer: flexible timing, sports seasons: evening conflicts"
                ]
              },
              {
                title: "Flexible Meal Systems",
                prompts: [
                  "What meal strategies work when family members eat at different times?",
                  "How do you maintain meal quality and nutrition when schedules don't align?",
                  "What's your approach to keeping meals warm or easily reheatable?",
                  "How do you handle meal preparation when the primary cook's schedule changes?",
                  "What grab-and-go meal solutions work for family members with unpredictable schedules?"
                ],
                examples: [
                  "Slow cooker meals, component-based meals, individual containers prepared ahead",
                  "Focus on foods that taste good reheated, prepare fresh components daily",
                  "Warm plates, thermal containers, foods that improve with sitting",
                  "Meal prep on free days, family members take turns, simple backup meals",
                  "Hearty salads, wraps, grain bowls, portable soups in thermoses"
                ]
              },
              {
                title: "Communication Systems",
                prompts: [
                  "How do you communicate meal plans and timing changes to all family members?",
                  "What system helps you track who will be home for which meals each day?",
                  "How do you handle last-minute schedule changes that affect meal plans?",
                  "What's your process for involving family members in weekly meal planning discussions?",
                  "How do you coordinate family input on meals while managing the planning workload?"
                ],
                examples: [
                  "Family calendar app, kitchen whiteboard, weekly planning meetings",
                  "Shared calendar with meal assignments, daily check-ins, text confirmations",
                  "Flexible backup meals, delegate meal responsibility, adjust portions",
                  "Sunday family meeting, rotating input from family members, suggestion systems",
                  "Each family member picks one meal per week, compile suggestions into manageable plan"
                ]
              }
            ]}
            tips={[
              "Build flexibility into your meal plans to accommodate schedule changes",
              "Communicate meal plans clearly so family members can plan accordingly",
              "Focus on meals that work well for staggered eating times",
              "Create systems that allow meals to happen even when the primary cook is unavailable",
              "Regular family schedule reviews help anticipate and plan for conflicts"
            ]}
          />
        </TabsContent>

        <TabsContent value="involvement-responsibilities">
          <GuidedNotePage
            title="Family Involvement and Responsibilities"
            description="Engage all family members appropriately in meal planning, preparation, and cleanup responsibilities"
            sections={[
              {
                title: "Age-Appropriate Involvement",
                prompts: [
                  "What cooking and meal preparation tasks can different family members handle based on their age and ability?",
                  "How do you teach cooking skills while still maintaining efficiency in meal preparation?",
                  "What meal planning input is appropriate from different family members?",
                  "How do you balance supervision needs with encouraging independence in the kitchen?",
                  "What kitchen safety rules and skills do family members need to learn?"
                ],
                examples: [
                  "Preschoolers: washing produce, stirring; School-age: measuring, simple chopping; Teens: complete meal preparation",
                  "Weekend cooking projects for teaching, weeknight simple tasks, patient instruction during less busy times",
                  "Young kids choose between options, older kids suggest meals, adults handle logistics",
                  "Start with safe tasks, gradually increase complexity, always supervise heat and knives appropriately",
                  "Knife safety, stove safety, food safety, cleaning protocols, emergency procedures"
                ]
              },
              {
                title: "Responsibility Distribution",
                prompts: [
                  "How do you fairly distribute meal-related responsibilities among family members?",
                  "What daily and weekly meal tasks can different family members own completely?",
                  "How do you handle resistance to meal-related responsibilities?",
                  "What's your approach to teaching meal planning and grocery shopping skills?",
                  "How do you balance shared responsibilities with maintaining meal quality and timing?"
                ],
                examples: [
                  "Rotate cooking nights, assign specific prep tasks, everyone responsible for their lunch",
                  "Teenager makes breakfast twice weekly, spouse handles weekend dinners, kids pack their snacks",
                  "Natural consequences for not completing tasks, positive reinforcement for consistency",
                  "Include kids in grocery trips, teach meal planning logic, involve in budget discussions",
                  "Clear expectations and deadlines, backup plans when someone doesn't complete their task"
                ]
              },
              {
                title: "Family Meal Culture",
                prompts: [
                  "What traditions and routines create positive family meal experiences?",
                  "How do you make family meals enjoyable while handling the logistics efficiently?",
                  "What role does food play in your family's connection and communication?",
                  "How do you handle conflicts or complaints about meals constructively?",
                  "What family values around food do you want to instill in your children?"
                ],
                examples: [
                  "Weekly family cooking project, special birthday meals, holiday baking traditions",
                  "Pleasant music, interesting conversation topics, appreciation for the cook",
                  "Share daily highlights during dinner, try new foods together, cooking as bonding time",
                  "Focus on solutions rather than complaints, involve complainers in meal preparation",
                  "Gratitude for food, trying new things, helping family, cooking as life skill"
                ]
              }
            ]}
            tips={[
              "Start with small, age-appropriate responsibilities and gradually increase expectations",
              "Make family involvement in meals enjoyable rather than just another chore",
              "Teach cooking and meal planning as important life skills, not just help with current needs",
              "Create positive associations with family meals through traditions and pleasant experiences",
              "Balance efficiency with the slower pace required when teaching and involving others"
            ]}
          />
        </TabsContent>

        <TabsContent value="special-situations">
          <GuidedNotePage
            title="Special Situations and Challenges"
            description="Handle unique family circumstances, dietary needs, and challenging situations with meal planning flexibility"
            sections={[
              {
                title: "Dietary Restrictions and Health Needs",
                prompts: [
                  "How do you accommodate multiple different dietary restrictions within one family?",
                  "What strategies work for managing food allergies while maintaining family meal unity?",
                  "How do you handle temporary dietary restrictions due to illness or medical procedures?",
                  "What's your approach when family members have conflicting nutritional needs?",
                  "How do you educate family members about dietary restrictions and safety?"
                ],
                examples: [
                  "One diabetic, one gluten-free, one trying to gain weight - create flexible base meals",
                  "Nut-free household for safety, separate prep areas, careful label reading",
                  "Bland foods during illness, liquid diets after surgery, gradual reintroduction",
                  "Growing teenager needs calories, parent needs weight loss - portion control and additions",
                  "Teach kids to read labels, recognize symptoms, understand why restrictions matter"
                ]
              },
              {
                title: "Life Changes and Transitions",
                prompts: [
                  "How do you adapt meal planning during major life changes like job loss, divorce, or illness?",
                  "What meal strategies work during particularly busy or stressful periods?",
                  "How do you maintain family nutrition and meal routines during transitions?",
                  "What simplified meal approaches work when regular systems break down?",
                  "How do you rebuild meal planning systems after disruptive periods?"
                ],
                examples: [
                  "Focus on simple, comforting meals, accept help from others, use convenience foods temporarily",
                  "Fall back on 5-7 reliable easy meals, increase takeout budget temporarily, meal delivery services",
                  "Prioritize one good meal per day, ensure basic nutrition, maintain some family meal traditions",
                  "One-pot meals, slow cooker reliance, pre-made components, paper plates to reduce cleanup",
                  "Gradually reintroduce complexity, start with successful simple systems, rebuild confidence slowly"
                ]
              },
              {
                title: "Extended Family and Social Considerations",
                prompts: [
                  "How do you coordinate meal planning when extended family or guests are frequently involved?",
                  "What's your approach to maintaining your meal plan while accommodating social obligations?",
                  "How do you handle peer pressure on children's food choices while maintaining family values?",
                  "What strategies work for family meals during holidays and special celebrations?",
                  "How do you balance hospitality with your meal planning and budget constraints?"
                ],
                examples: [
                  "Keep extra portions in freezer, have expandable meal options, communicate dietary needs in advance",
                  "Build flexibility into weekly plan, shift meals around social events, prep ahead when possible",
                  "Teach kids about making good choices, provide appealing healthy options, focus on overall patterns",
                  "Plan simpler everyday meals during holiday weeks, prep components ahead, accept imperfection",
                  "Set realistic expectations for guest meals, potluck strategies, simple but generous options"
                ]
              }
            ]}
            tips={[
              "During challenging times, focus on maintaining basic nutrition and family connection rather than perfection",
              "Build flexibility into your systems so they can adapt to unexpected circumstances",
              "Communicate openly with family about challenges and involve them in finding solutions",
              "Accept help from others during difficult periods and reciprocate when you're able",
              "Remember that temporary adjustments to your meal planning are normal and necessary"
            ]}
          />
        </TabsContent>

      </Tabs>
    </div>
  )
}