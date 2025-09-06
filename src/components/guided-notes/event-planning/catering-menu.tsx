"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function CateringMenu() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Catering & Menu Planning</h1>
        <p className="text-muted-foreground">Plan your event menu and catering services.</p>
      </div>

      <Tabs defaultValue="menu-planning" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="menu-planning" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Menu Planning</span>
            <span className="sm:hidden">Menu</span>
          </TabsTrigger>
          <TabsTrigger value="dietary-needs" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Dietary Needs</span>
            <span className="sm:hidden">Dietary</span>
          </TabsTrigger>
          <TabsTrigger value="service-style" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Service Style</span>
            <span className="sm:hidden">Service</span>
          </TabsTrigger>
          <TabsTrigger value="beverage-bar" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Beverage & Bar</span>
            <span className="sm:hidden">Beverage</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="menu-planning">
          <GuidedNotePage
            title="Menu Selection & Food Planning"
            description="Design your event menu and food offerings"
            sections={[
              {
                title: "Menu Style and Theme",
                prompts: [
                  "What style of cuisine fits your event theme and guest preferences?",
                  "How formal or casual should your food presentation be?",
                  "What cultural or regional food preferences should you consider?",
                  "How will your menu complement the overall event atmosphere?",
                  "What seasonal ingredients and availability should influence your menu?"
                ],
                examples: [
                  "Italian family-style, elegant French, casual BBQ, international fusion, local specialties",
                  "White-glove plated service vs. casual buffet vs. food stations vs. family-style",
                  "Mediterranean for diverse crowd, Southern comfort for local event, kosher for religious celebration",
                  "Elegant plated dinner for formal event, food trucks for casual celebration, cocktail apps for networking",
                  "Spring: fresh vegetables, summer: grilled items, fall: hearty dishes, winter: comfort foods"
                ]
              },
              {
                title: "Menu Balance and Variety",
                prompts: [
                  "How will you balance different flavors, textures, and cooking methods?",
                  "What variety of proteins, vegetables, and starches will you include?",
                  "How will you accommodate different appetite sizes and eating preferences?",
                  "What appetizer and dessert options fit your menu theme?",
                  "How will you ensure your menu has visual appeal and presentation quality?"
                ],
                examples: [
                  "Mix grilled, roasted, fresh items; balance spicy/mild, crunchy/soft, hot/cold",
                  "Chicken, beef, fish options plus vegetarian protein; seasonal vegetables; rice/pasta/potato sides",
                  "Light and heavy options, small plates and entrees, finger foods and fork foods",
                  "Appetizers that preview main course flavors, desserts that complement not compete with meal",
                  "Colorful ingredients, attractive plating, garnishes, varied serving vessels and presentations"
                ]
              },
              {
                title: "Budget and Portion Planning",
                prompts: [
                  "What is your per-person food budget and how will you allocate it?",
                  "How will you determine appropriate portion sizes for your guest count?",
                  "What food costs should you expect and how can you control them?",
                  "How will you handle food waste and leftover management?",
                  "What value-added services or upgrades fit within your budget?"
                ],
                examples: [
                  "Budget $30-80 per person depending on formality; allocate 60% entrees, 25% apps, 15% dessert",
                  "Plan 6-8 oz protein, 4-6 oz starch, 3-4 oz vegetables per person; adjust for appetite expectations",
                  "Protein most expensive, seasonal items cost less, labor-intensive items increase cost",
                  "Plan for 5% waste, arrange donation of safe leftovers, have containers for guests to take home",
                  "Upgraded proteins, specialty dietary options, late-night snacks, enhanced presentation"
                ]
              },
              {
                title: "Tasting and Finalization",
                prompts: [
                  "How will you conduct menu tastings with your caterer?",
                  "What adjustments and modifications will you make based on tastings?",
                  "How will you finalize portion sizes and presentation details?",
                  "What backup menu options will you have in case of ingredient issues?",
                  "How will you confirm final menu details and guest count with caterer?"
                ],
                examples: [
                  "Schedule tasting 6-8 weeks before event, bring key decision-makers, try all planned items",
                  "Adjust seasoning, cooking methods, portion sizes, presentation based on feedback",
                  "Confirm exact portions with caterer, review presentation photos, specify serving style",
                  "Have alternative proteins ready, seasonal substitutions planned, supplier backup options",
                  "Written confirmation of menu, portions, service style, final guest count deadline"
                ]
              }
            ]}
            tips={[
              "Schedule a tasting with your caterer to ensure food quality meets your expectations",
              "Balance your menu with different flavors, textures, and dietary options",
              "Consider your venue's kitchen capabilities when planning your menu",
              "Plan for 5-10% more food than your guest count to account for varying appetites",
              "Choose seasonal ingredients when possible for better quality and pricing"
            ]}
          />
        </TabsContent>

        <TabsContent value="dietary-needs">
          <GuidedNotePage
            title="Dietary Restrictions & Special Needs"
            description="Accommodate all guests' dietary requirements and preferences"
            sections={[
              {
                title: "Dietary Restriction Assessment",
                prompts: [
                  "What dietary restrictions and allergies do your guests have?",
                  "How will you collect and track dietary information from guests?",
                  "What religious or cultural dietary requirements need accommodation?",
                  "How will you handle severe allergies and cross-contamination concerns?",
                  "What percentage of guests require special dietary accommodations?"
                ],
                examples: [
                  "Common: vegetarian, vegan, gluten-free, dairy-free, nut allergies, shellfish allergies",
                  "RSVP forms with dietary questions, follow-up calls for clarification, spreadsheet tracking",
                  "Kosher, halal, Hindu vegetarian, Buddhist vegan, cultural food preferences",
                  "Separate kitchen prep, dedicated serving utensils, clear labeling, staff training on allergens",
                  "Typically 10-20% vegetarian, 5% vegan, 8-10% gluten-free, 2-3% severe allergies"
                ]
              },
              {
                title: "Special Menu Planning",
                prompts: [
                  "How will you create appealing options for guests with dietary restrictions?",
                  "What ingredients and cooking methods will you use for special dietary needs?",
                  "How will you ensure special diet options are equally satisfying and delicious?",
                  "What labeling and identification system will you use for special dietary items?",
                  "How will you coordinate special dietary needs with your caterer?"
                ],
                examples: [
                  "Make restrictions feel like choices, not limitations; create attractive separate options",
                  "Plant-based proteins, gluten-free grains, dairy alternatives, allergen-free preparation methods",
                  "Special diet options should be as visually appealing and flavorful as regular menu items",
                  "Color-coded labels, separate serving areas, clear signage, staff training on contents",
                  "Provide detailed list of dietary needs, discuss preparation methods, confirm cross-contamination protocols"
                ]
              },
              {
                title: "Kitchen Safety and Preparation",
                prompts: [
                  "How will your caterer prevent cross-contamination for allergen-sensitive guests?",
                  "What kitchen protocols are needed for safe special dietary preparation?",
                  "How will serving staff be trained on dietary restrictions and allergens?",
                  "What emergency procedures are in place for allergic reactions?",
                  "How will you verify that special dietary meals meet requirements?"
                ],
                examples: [
                  "Separate prep areas, dedicated utensils, allergen-free zones, thorough cleaning protocols",
                  "Ingredient verification, supplier certifications, separate storage, preparation sequencing",
                  "Staff training on common allergens, proper serving procedures, who to contact with questions",
                  "EpiPen awareness, emergency contact numbers, nearest hospital info, staff first aid training",
                  "Ingredient lists verification, preparation observation, final quality check before service"
                ]
              },
              {
                title: "Guest Communication and Service",
                prompts: [
                  "How will you communicate dietary options clearly to all guests?",
                  "What serving procedures will ensure guests with restrictions get appropriate meals?",
                  "How will you handle guests who have dietary needs not previously communicated?",
                  "What feedback system will you use to ensure dietary needs are met satisfactorily?",
                  "How will you make guests with dietary restrictions feel included and valued?"
                ],
                examples: [
                  "Clear menu cards, buffet labeling, server announcements, website information",
                  "Special meal service before general service, designated servers for special diets",
                  "Emergency dietary options available, flexible caterer policies, gracious accommodation",
                  "Check in with special diet guests during meal, post-event feedback collection",
                  "Make special options look appealing, don't single out guests, ensure equal quality and attention"
                ]
              }
            ]}
            tips={[
              "Collect dietary restriction information with RSVPs to plan appropriate accommodations",
              "Work closely with your caterer to ensure they can safely handle all dietary requirements",
              "Label all food clearly and train serving staff on ingredients and allergens",
              "Make special dietary options as appealing and delicious as the regular menu",
              "Have emergency procedures in place for severe allergic reactions"
            ]}
          />
        </TabsContent>

        <TabsContent value="service-style">
          <GuidedNotePage
            title="Food Service Style & Logistics"
            description="Choose and plan your food service style and execution"
            sections={[
              {
                title: "Service Style Selection",
                prompts: [
                  "What style of food service best fits your event type and budget?",
                  "How does your venue layout influence your food service options?",
                  "What are the pros and cons of each service style for your specific event?",
                  "How will your service style impact guest interaction and event flow?",
                  "What staffing requirements come with different service styles?"
                ],
                examples: [
                  "Plated service (formal), buffet (casual), food stations (interactive), family style (intimate)",
                  "Ballroom suits plated service, outdoor space good for stations, small venue needs efficient service",
                  "Plated: elegant but expensive; Buffet: casual and cost-effective; Stations: interactive but need space",
                  "Plated allows seated conversation, buffet encourages mingling, stations create activity",
                  "Plated needs 1 server per 8-10 guests, buffet needs fewer servers, stations need attendants"
                ]
              },
              {
                title: "Service Timeline and Flow",
                prompts: [
                  "How will you coordinate food service timing with other event activities?",
                  "What is the sequence and timing for different courses or food offerings?",
                  "How will you manage guest flow and avoid long lines or delays?",
                  "What announcements or signals will guide guests through the meal service?",
                  "How will you handle late arrivals and guests who miss planned meal times?"
                ],
                examples: [
                  "Cocktails during photos, dinner after welcome speeches, dessert with dancing",
                  "Appetizers 30 minutes, salad course, main course 20 minutes later, dessert after toasts",
                  "Multiple buffet lines, staggered table releases, food station rotation system",
                  "Gentle announcements, music cues, staff guidance, visual signals like dimming lights",
                  "Keep some food available, staff can provide late plates, flexible service for stragglers"
                ]
              },
              {
                title: "Equipment and Setup Requirements",
                prompts: [
                  "What equipment and setup does your chosen service style require?",
                  "How will you arrange the physical layout for optimal food service flow?",
                  "What heating, cooling, and food safety equipment is needed?",
                  "How will you handle plate service, utensils, and napkin distribution?",
                  "What backup equipment should you have available for service issues?"
                ],
                examples: [
                  "Buffet needs chafing dishes and serving utensils, plated needs warming boxes, stations need specialized equipment",
                  "Logical flow patterns, avoid bottlenecks, adequate space around serving areas",
                  "Chafing dishes for hot foods, ice baths for cold items, temperature monitoring",
                  "Plates at beginning of buffet line, utensils at tables or end of line, napkins easily accessible",
                  "Extra chafing fuel, backup serving utensils, additional plates, emergency heating/cooling"
                ]
              },
              {
                title: "Staff Coordination and Service Quality",
                prompts: [
                  "How will you coordinate serving staff for smooth food service?",
                  "What service standards and quality expectations will you establish?",
                  "How will staff handle special requests and dietary accommodations during service?",
                  "What procedures will staff follow for maintaining food safety and quality?",
                  "How will you ensure consistent and professional service throughout the meal?"
                ],
                examples: [
                  "Assign specific roles to each server, designate team lead, establish communication system",
                  "Friendly service, prompt clearing, refill water glasses, maintain food temperatures",
                  "Special dietary meals served first, staff trained on allergens, clear communication protocols",
                  "Temperature checks, regular food replenishment, proper handling procedures, cleanliness standards",
                  "Staff briefing before service, supervisor monitoring, guest feedback collection, problem resolution"
                ]
              }
            ]}
            tips={[
              "Choose a service style that matches your event formality and guest expectations",
              "Plan the physical layout carefully to ensure smooth traffic flow during meal service",
              "Coordinate meal timing with other event activities to maintain good energy and flow",
              "Brief all serving staff thoroughly on the menu, dietary restrictions, and service procedures",
              "Have contingency plans ready for service delays or equipment malfunctions"
            ]}
          />
        </TabsContent>

        <TabsContent value="beverage-bar">
          <GuidedNotePage
            title="Beverage Service & Bar Planning"
            description="Plan your beverage offerings and bar service"
            sections={[
              {
                title: "Beverage Program Planning",
                prompts: [
                  "What types of beverages will you offer and in what quantities?",
                  "How will you balance alcoholic and non-alcoholic beverage options?",
                  "What beverage budget will you set and how will you control costs?",
                  "How will your beverage choices complement your food menu?",
                  "What seasonal or themed beverages fit your event style?"
                ],
                examples: [
                  "Wine, beer, signature cocktails, soft drinks, coffee, tea, water - plan 2-3 drinks per person per hour",
                  "Offer equal quality non-alcoholic options: specialty mocktails, flavored waters, premium sodas",
                  "Alcohol typically 15-20% of total budget, premium options increase cost significantly",
                  "Wine pairings with dinner courses, cocktails that match cuisine style, palate cleansers",
                  "Summer: refreshing cocktails, winter: warm beverages, themed drinks for special celebrations"
                ]
              },
              {
                title: "Bar Service Style and Setup",
                prompts: [
                  "What style of bar service fits your event and budget?",
                  "How many bar stations do you need for your guest count and venue?",
                  "What bar setup and equipment requirements do you have?",
                  "How will you staff your bar service appropriately?",
                  "What hours of operation will you have for bar service?"
                ],
                examples: [
                  "Open bar, cash bar, limited bar, wine and beer only, signature cocktails only",
                  "1 bar per 75-100 guests, consider venue layout and guest flow patterns",
                  "Full bar setup with ice, glassware, mixers, garnishes, POS system if cash bar",
                  "1 bartender per 75 guests for full service, 1 per 100 for beer/wine only",
                  "Welcome cocktails start with event, full bar during reception, last call announced"
                ]
              },
              {
                title: "Alcohol Service Policies and Liability",
                prompts: [
                  "What responsible alcohol service policies will you implement?",
                  "How will you handle intoxicated guests and overconsumption issues?",
                  "What legal liability and insurance considerations do you have?",
                  "How will you verify guest age and prevent underage drinking?",
                  "What transportation options will you provide for guests who drink?"
                ],
                examples: [
                  "Certified bartenders trained in responsible service, food served with alcohol, water available",
                  "Staff trained to refuse service, alternative non-alcoholic drinks offered, designated person to handle issues",
                  "Liquor liability insurance, venue alcohol policies, compliance with local laws and regulations",
                  "Check ID at entrance, wristbands for verified adults, staff monitor underage guests",
                  "Designated driver incentives, rideshare information, taxi service arrangements, guest coordination"
                ]
              },
              {
                title: "Beverage Quality and Presentation",
                prompts: [
                  "What quality standards will you set for all beverage offerings?",
                  "How will you present beverages attractively and professionally?",
                  "What glassware and serving accessories will enhance the beverage experience?",
                  "How will you maintain beverage quality throughout the event?",
                  "What signature drinks or special touches will make your beverage service memorable?"
                ],
                examples: [
                  "Quality wines, craft beers, premium spirits, fresh mixers, proper preparation techniques",
                  "Attractive bar displays, garnish stations, clean glassware, professional bartender presentation",
                  "Appropriate glassware for each beverage type, cocktail napkins, stirrers, attractive garnishes",
                  "Ice management, temperature control, fresh garnishes, regular restocking, quality checks",
                  "Signature cocktails named for event, custom napkins, unique garnishes, specialty glassware"
                ]
              }
            ]}
            tips={[
              "Plan for 2-3 drinks per person per hour and adjust based on your crowd and event duration",
              "Always offer high-quality non-alcoholic options that are as appealing as alcoholic beverages",
              "Ensure responsible alcohol service with trained bartenders and clear policies",
              "Consider signature cocktails or themed beverages to make your bar service special and memorable",
              "Plan transportation options for guests to ensure everyone gets home safely"
            ]}
          />
        </TabsContent>

      </Tabs>
    </div>
  )
}