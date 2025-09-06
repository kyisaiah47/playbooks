"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function SpecialOccasions() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Special Occasions & Holiday Planning</h1>
        <p className="text-muted-foreground">Plan memorable meals for holidays, celebrations, and special events while managing complexity and maintaining your regular meal planning routine.</p>
      </div>

      <Tabs defaultValue="holiday-planning" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="holiday-planning" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Holiday Planning</span>
            <span className="sm:hidden">Holidays</span>
          </TabsTrigger>
          <TabsTrigger value="entertaining" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Entertaining</span>
            <span className="sm:hidden">Entertain</span>
          </TabsTrigger>
          <TabsTrigger value="family-celebrations" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Family Celebrations</span>
            <span className="sm:hidden">Family</span>
          </TabsTrigger>
          <TabsTrigger value="integration-balance" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Balance & Integration</span>
            <span className="sm:hidden">Balance</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="holiday-planning">
          <GuidedNotePage
            title="Holiday Meal Planning Strategy"
            description="Create memorable holiday meals while managing preparation complexity and maintaining family traditions"
            sections={[
              {
                title: "Tradition and Menu Planning",
                prompts: [
                  "What holiday food traditions are most important to maintain in your family?",
                  "How do you balance traditional family recipes with trying new holiday dishes?",
                  "What's your approach to planning holiday menus that satisfy different generations?",
                  "How do you handle dietary restrictions while preserving holiday meal traditions?",
                  "What holiday meals are worth elaborate preparation versus keeping simple?"
                ],
                examples: [
                  "Grandmother's stuffing recipe, family pie tradition, ethnic holiday dishes",
                  "Keep 70% traditional favorites, try 30% new recipes, get family input on changes",
                  "Include kid-friendly options, traditional favorites for grandparents, modern twists for adults",
                  "Create modified versions of traditional dishes, provide alternatives without eliminating traditions",
                  "Thanksgiving deserves elaborate preparation, casual holidays can be simpler but special"
                ]
              },
              {
                title: "Timeline and Preparation Strategy",
                prompts: [
                  "How far in advance do you start planning and preparing for major holidays?",
                  "What holiday dishes can be made ahead versus need to be prepared fresh?",
                  "How do you create preparation timelines that prevent last-minute stress?",
                  "What's your strategy for coordinating multiple dishes with different cooking requirements?",
                  "How do you balance holiday meal preparation with maintaining regular family meals?"
                ],
                examples: [
                  "Start planning 2 weeks ahead, shop specialty items 1 week ahead, prep 2-3 days ahead",
                  "Desserts, cranberry sauce, and casseroles ahead; turkey, fresh vegetables day of",
                  "Work backwards from meal time, include buffer time, assign tasks to different days",
                  "Oven scheduling chart, slow cooker utilization, stovetop coordination plan",
                  "Simplify regular meals during holiday week, use convenience foods without guilt"
                ]
              },
              {
                title: "Guest Coordination and Logistics",
                prompts: [
                  "How do you coordinate holiday meals when hosting extended family or guests?",
                  "What's your strategy for managing dietary restrictions and preferences for large groups?",
                  "How do you delegate tasks when family members want to contribute to holiday meals?",
                  "What backup plans do you have for holiday meal challenges or disasters?",
                  "How do you handle different family branches' traditions when combining celebrations?"
                ],
                examples: [
                  "Send menu in advance, ask about dietary needs, provide arrival time guidelines",
                  "Survey guests beforehand, prepare alternatives, label dishes with allergen information",
                  "Assign specific dishes or tasks, provide recipes and guidelines, coordinate timing",
                  "Backup protein in freezer, simple side dish alternatives, takeout restaurant list",
                  "Rotate traditions between families, combine favorites, create new merged traditions"
                ]
              }
            ]}
            tips={[
              "Start holiday planning early to reduce stress and ensure you have needed ingredients",
              "Focus preparation time on dishes that matter most to your family traditions",
              "Create detailed timelines working backwards from when you want to serve the meal",
              "Don't try to do everything yourself - accept help and delegate appropriate tasks",
              "Have backup plans for common holiday cooking challenges"
            ]}
          />
        </TabsContent>

        <TabsContent value="entertaining">
          <GuidedNotePage
            title="Entertaining and Dinner Parties"
            description="Plan successful entertaining experiences that are enjoyable for both hosts and guests"
            sections={[
              {
                title: "Menu Planning for Entertaining",
                prompts: [
                  "How do you choose menus that impress guests while staying within your cooking comfort zone?",
                  "What's your strategy for accommodating dietary restrictions when entertaining?",
                  "How do you balance elaborate presentation with manageable preparation?",
                  "What make-ahead dishes work well for dinner parties and entertaining?",
                  "How do you plan portions when you're not sure about guest appetites and preferences?"
                ],
                examples: [
                  "Choose one challenging dish and make everything else familiar, practice new recipes beforehand",
                  "Ask about restrictions when inviting, plan menu with options for different needs",
                  "Focus on one impressive element, keep other dishes simple but well-executed",
                  "Appetizers, desserts, and sides that can be made day before, slow cooker mains",
                  "Plan 20% extra food, include lighter and heartier options, have backup snacks available"
                ]
              },
              {
                title: "Preparation and Hosting Strategy",
                prompts: [
                  "How do you organize your preparation so you can enjoy time with guests?",
                  "What's your timeline for cleaning, cooking, and setting up before guests arrive?",
                  "How do you handle the balance between perfectly prepared food and being present with guests?",
                  "What serving strategies help you manage multiple courses smoothly?",
                  "How do you prepare your space and table setting to create the right atmosphere?"
                ],
                examples: [
                  "Prep everything possible day before, assign specific tasks to day of party",
                  "Deep clean 2 days ahead, cook make-ahead dishes day before, final prep morning of",
                  "Accept that some things won't be perfect, prioritize guest experience over food perfection",
                  "Buffet style for casual, plated service for formal, family-style for intimate groups",
                  "Set table day before, create playlist, adjust lighting, prepare conversation topics"
                ]
              },
              {
                title: "Budget and Scale Management",
                prompts: [
                  "How do you create impressive entertaining meals within your budget constraints?",
                  "What strategies help you scale recipes appropriately for different group sizes?",
                  "How do you balance cost with creating memorable experiences for guests?",
                  "What ingredients provide the best value for entertaining impact?",
                  "How do you handle entertaining expenses in your regular meal planning budget?"
                ],
                examples: [
                  "Choose less expensive proteins, focus budget on one special element, use seasonal ingredients",
                  "Double check recipe scaling, adjust seasoning carefully, consider cooking vessel capacity",
                  "Invest in ingredients that guests will remember, save on items they won't notice",
                  "Fresh herbs for aroma, good olive oil for drizzling, seasonal fruits for dessert",
                  "Set separate entertaining budget, plan simpler regular meals during entertaining periods"
                ]
              }
            ]}
            tips={[
              "Choose a menu that allows you to spend time with guests rather than in the kitchen",
              "Prepare as much as possible in advance so you can focus on hosting on the day",
              "Don't try new recipes for entertaining - stick with dishes you've made successfully before",
              "Create a timeline that includes buffer time for unexpected delays",
              "Focus on creating a welcoming atmosphere rather than achieving culinary perfection"
            ]}
          />
        </TabsContent>

        <TabsContent value="family-celebrations">
          <GuidedNotePage
            title="Family Celebrations and Milestones"
            description="Create special meals that mark important family moments and build lasting memories"
            sections={[
              {
                title: "Birthday and Personal Celebrations",
                prompts: [
                  "How do you create special birthday meals that reflect each family member's preferences?",
                  "What traditions do you maintain for different types of personal celebrations?",
                  "How do you involve the celebrated person in planning their special meal?",
                  "What's your approach to balancing elaborate celebrations with practical limitations?",
                  "How do you create memorable food experiences for milestone birthdays and achievements?"
                ],
                examples: [
                  "Birthday person chooses dinner menu, family makes their favorite cake, special breakfast tradition",
                  "First day of school special breakfast, good grade celebration dinner, achievement recognition meals",
                  "Let them pick the menu within reason, involve them in preparation, surprise elements",
                  "Focus budget and effort on most meaningful celebrations, simple but special for smaller milestones",
                  "Sweet 16 dinner party, graduation celebration meal, first job celebration"
                ]
              },
              {
                title: "Creating New Traditions",
                prompts: [
                  "What new food traditions do you want to establish for your family?",
                  "How do you incorporate cultural heritage into your family's celebration meals?",
                  "What seasonal or annual food traditions would enhance your family's connection?",
                  "How do you balance creating new traditions with maintaining existing ones?",
                  "What simple food traditions can create lasting memories without major effort?"
                ],
                examples: [
                  "First day of school pancakes, holiday cookie decorating, summer picnic traditions",
                  "Ethnic dishes for cultural holidays, family origin country foods, teach kids heritage recipes",
                  "Apple picking and pie making, summer fruit preserving, winter soup Sunday traditions",
                  "Add one new tradition per year, modify existing traditions as family changes",
                  "Special weekend breakfast, monthly family cook-together night, seasonal treat making"
                ]
              },
              {
                title: "Documentation and Memory Making",
                prompts: [
                  "How do you document and preserve special family meal memories?",
                  "What role do photos and stories play in your family food celebrations?",
                  "How do you pass down family recipes and food traditions to children?",
                  "What's your approach to creating food memories that children will carry into adulthood?",
                  "How do you balance being present during celebrations with capturing memories?"
                ],
                examples: [
                  "Photo albums of holiday meals, recipe cards with family stories, video of cooking together",
                  "Before-meal gratitude sharing, story-telling during cooking, photos of finished dishes",
                  "Cook together regularly, write down family recipes with stories, teach techniques hands-on",
                  "Let kids help with age-appropriate tasks, share family food history, create positive associations",
                  "Designate someone else as photographer sometimes, focus on enjoying the moment"
                ]
              }
            ]}
            tips={[
              "Focus on creating positive emotional associations with food and family time",
              "Include children in age-appropriate ways to help them feel ownership of family traditions",
              "Document family recipes and stories to preserve them for future generations",
              "Start simple with new traditions and build complexity over time",
              "Remember that the most important element is family togetherness, not perfect food"
            ]}
          />
        </TabsContent>

        <TabsContent value="integration-balance">
          <GuidedNotePage
            title="Balancing Special Occasions with Regular Routine"
            description="Maintain your regular meal planning routine while accommodating special occasions and celebrations"
            sections={[
              {
                title: "Schedule Integration",
                prompts: [
                  "How do you adjust your regular meal planning routine during busy celebration periods?",
                  "What's your strategy for maintaining family nutrition during indulgent holiday seasons?",
                  "How do you handle the increased cooking workload of special occasions?",
                  "What simplifications do you make to regular meals during celebration periods?",
                  "How do you prepare your meal planning system for returning to normal after celebrations?"
                ],
                examples: [
                  "Simplify weeknight meals during party planning week, use more convenience foods temporarily",
                  "Maintain vegetable focus, smaller portions of rich foods, balance celebration meals with lighter options",
                  "Meal prep ahead for regular meals, delegate family responsibilities, accept help from others",
                  "One-pot meals, slow cooker dinners, takeout budget increase, paper plates for cleanup reduction",
                  "Gradual return to full meal planning, use up celebration leftovers creatively"
                ]
              },
              {
                title: "Budget and Resource Management",
                prompts: [
                  "How do you budget for special occasion meals without derailing your regular food budget?",
                  "What's your approach to managing increased grocery costs during celebration periods?",
                  "How do you allocate time and energy between special meals and regular family needs?",
                  "What resources do you mobilize for large celebrations that you don't use regularly?",
                  "How do you handle the recovery period after intensive celebration meal preparation?"
                ],
                examples: [
                  "Set separate celebration budget, reduce other food categories temporarily, plan celebrations annually",
                  "Shop sales specifically for celebration ingredients, prioritize spending on most important elements",
                  "Accept that regular meals will be simpler, focus energy on celebration priorities",
                  "Borrow serving dishes, rent tables, ask family to bring specific items",
                  "Plan simple meals for week after celebration, rest and recharge before returning to full routine"
                ]
              },
              {
                title: "Sustainability and Long-term Planning",
                prompts: [
                  "How do you ensure your approach to special occasions is sustainable over time?",
                  "What lessons from celebration meal planning improve your regular meal planning?",
                  "How do you prevent celebration meal stress from negatively impacting family relationships?",
                  "What's your strategy for evolving celebration traditions as your family changes?",
                  "How do you maintain perspective on what truly matters in celebration meal planning?"
                ],
                examples: [
                  "Don't overschedule celebrations, maintain realistic expectations, delegate age-appropriately",
                  "Advanced planning skills, batch preparation techniques, better time management",
                  "Focus on togetherness over perfection, ask for help when needed, maintain humor about mistakes",
                  "Simplify as kids grow up and move away, adapt to dietary changes, create new traditions",
                  "Remember that love and connection matter more than perfect food presentation"
                ]
              }
            ]}
            tips={[
              "Plan celebrations well in advance to reduce stress and ensure you have necessary ingredients",
              "Accept that regular meals will be simpler during intensive celebration periods",
              "Focus on the most meaningful elements of celebrations rather than trying to perfect everything",
              "Build recovery time into your schedule after major celebrations",
              "Remember that the goal is creating positive memories, not achieving culinary perfection"
            ]}
          />
        </TabsContent>

      </Tabs>
    </div>
  )
}