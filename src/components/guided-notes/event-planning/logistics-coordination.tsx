"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function LogisticsCoordination() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Event Logistics & Coordination</h1>
        <p className="text-muted-foreground">Manage the operational logistics of your event.</p>
      </div>

      <Tabs defaultValue="transportation-parking" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="transportation-parking" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Transportation</span>
            <span className="sm:hidden">Transport</span>
          </TabsTrigger>
          <TabsTrigger value="accommodations" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Accommodations</span>
            <span className="sm:hidden">Hotels</span>
          </TabsTrigger>
          <TabsTrigger value="supplies-equipment" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Supplies & Equipment</span>
            <span className="sm:hidden">Supplies</span>
          </TabsTrigger>
          <TabsTrigger value="permits-insurance" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Permits & Insurance</span>
            <span className="sm:hidden">Legal</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="transportation-parking">
          <GuidedNotePage
            title="Transportation & Parking Logistics"
            description="Plan transportation and parking for your event"
            sections={[
              {
                title: "Guest Transportation Planning",
                prompts: [
                  "What transportation options do your guests need to get to and from your event?",
                  "How will you help out-of-town guests navigate to your venue?",
                  "What special transportation arrangements are needed for elderly or disabled guests?",
                  "How will you coordinate group transportation for wedding parties or VIP guests?",
                  "What backup transportation plans do you have for weather or other issues?"
                ],
                examples: [
                  "Hotel shuttles, rideshare coordination, public transit information, chartered transportation",
                  "Detailed directions, GPS coordinates, landmark references, contact person for assistance",
                  "Wheelchair accessible vehicles, door-to-door service, assistance with mobility aids",
                  "Chartered buses, car service for VIPs, coordinated departure times, pickup locations",
                  "Indoor waiting areas, alternative routes for road closures, emergency transportation contacts"
                ]
              },
              {
                title: "Parking Management and Coordination",
                prompts: [
                  "What parking capacity and options are available at your venue?",
                  "How will you manage parking flow and prevent congestion during arrival/departure?",
                  "What special parking arrangements do you need for vendors and VIP guests?",
                  "How will you handle parking fees, validation, or special arrangements?",
                  "What parking alternatives do you have if primary parking fills up?"
                ],
                examples: [
                  "On-site parking for 100 cars, street parking available, nearby parking garages, valet service options",
                  "Traffic control personnel, clear signage, designated entry/exit routes, timed arrival coordination",
                  "Reserved vendor loading areas, VIP parking close to entrance, handicapped accessible spaces",
                  "Free parking, validated parking tickets, special event rates, parking attendant coordination",
                  "Overflow parking with shuttle service, nearby public parking, off-site parking arrangements"
                ]
              },
              {
                title: "Arrival and Departure Logistics",
                prompts: [
                  "How will you manage guest arrival timing and flow?",
                  "What arrival experience do you want to create for your guests?",
                  "How will you coordinate departure timing to avoid congestion?",
                  "What assistance will guests need during arrival and departure?",
                  "How will you handle early arrivals and late departures?"
                ],
                examples: [
                  "Stagger arrival times over 30-minute window, manage flow with greeting team, clear entry process",
                  "Welcome station, coat check, clear signage, staff to greet and direct guests",
                  "Gradual departure announcements, multiple exit routes, valet coordination for efficient departure",
                  "Parking assistance, coat check retrieval, ride coordination, elderly guest assistance",
                  "Welcome area for early guests, flexible departure assistance, late guest accommodation"
                ]
              },
              {
                title: "Vendor and Staff Transportation",
                prompts: [
                  "What transportation and parking arrangements do your vendors need?",
                  "How will you coordinate vendor arrival, setup, and departure schedules?",
                  "What loading and unloading logistics need to be managed?",
                  "How will you handle vendor equipment transportation and storage?",
                  "What staff transportation and coordination is needed for your event team?"
                ],
                examples: [
                  "Reserved vendor parking areas, loading dock access, equipment transport coordination",
                  "Staggered vendor arrivals, coordinate with venue access, setup timeline management",
                  "Loading dock reservations, equipment carts, elevator access, protected walkways for equipment",
                  "Secure equipment storage, transportation insurance, equipment protection during transport",
                  "Staff carpooling coordination, early arrival transportation, late departure arrangements"
                ]
              }
            ]}
            tips={[
              "Visit your venue at the same time of day as your event to assess parking and traffic patterns",
              "Provide clear directions and parking information to all guests well before the event",
              "Plan for 10-15% more parking than your expected guest count to allow for plus-ones and staff",
              "Consider hiring traffic management personnel for large events or venues with complex parking",
              "Have alternative transportation arrangements ready for guests who may need assistance"
            ]}
          />
        </TabsContent>

        <TabsContent value="accommodations">
          <GuidedNotePage
            title="Guest Accommodations & Hospitality"
            description="Coordinate lodging and hospitality for out-of-town guests"
            sections={[
              {
                title: "Hotel and Lodging Coordination",
                prompts: [
                  "What hotel accommodation recommendations will you provide for out-of-town guests?",
                  "How will you coordinate group rates and room blocks with hotels?",
                  "What range of accommodation options will you offer for different budgets?",
                  "How will you communicate accommodation information to guests?",
                  "What special arrangements are needed for VIP guests or wedding parties?"
                ],
                examples: [
                  "Block rooms at 2-3 hotels in different price ranges, 10-15 rooms per hotel for flexibility",
                  "Group rates 10-15% off regular rates, held without deposit for 30-45 days, cutoff dates established",
                  "Budget: $80-120/night, mid-range: $120-180/night, luxury: $200+/night options available",
                  "Hotel information on wedding website, included with invitations, follow-up calls for VIPs",
                  "Suite accommodations for parents, room upgrades for wedding party, extended stays for family"
                ]
              },
              {
                title: "Guest Experience and Services",
                prompts: [
                  "What welcome amenities or information will you provide for out-of-town guests?",
                  "How will you help guests navigate your local area and find activities?",
                  "What group activities or events will you plan for visiting guests?",
                  "How will you coordinate transportation between hotels and venue?",
                  "What special services are available for families traveling with children?"
                ],
                examples: [
                  "Welcome bags with local info, snacks, event timeline, maps, emergency contacts",
                  "Restaurant recommendations, tourist attractions, shopping areas, local customs information",
                  "Welcome dinner, group brunch, local tours, pre-event gathering, post-event activities",
                  "Hotel shuttle services, group transportation arrangements, ride-share coordination",
                  "Babysitting referrals, family-friendly activities, children's amenities, kid-friendly restaurants"
                ]
              },
              {
                title: "Communication and Guest Relations",
                prompts: [
                  "How will you maintain communication with out-of-town guests before and during their visit?",
                  "What point person will handle guest questions and assistance needs?",
                  "How will you handle last-minute accommodation changes or issues?",
                  "What information sharing system will you use for group logistics?",
                  "How will you coordinate with hotels for special requests or group services?"
                ],
                examples: [
                  "WhatsApp group for updates, email lists for formal communication, phone contact for urgency",
                  "Designated family member or friend as guest relations coordinator with local knowledge",
                  "Hotel relationships for room changes, backup accommodations identified, flexible policies",
                  "Group messaging apps, shared Google docs, event website with updates, information packets",
                  "Hotel contact person assigned, group coordinator for special services, direct communication lines"
                ]
              },
              {
                title: "Budget and Payment Coordination",
                prompts: [
                  "How will you handle payment for guest accommodations and who pays for what?",
                  "What group payment arrangements can you make with hotels or services?",
                  "How will you manage costs for group activities and guest services?",
                  "What financial assistance or subsidies will you provide for guests?",
                  "How will you track accommodation expenses and group bookings?"
                ],
                examples: [
                  "Guests pay own rooms, hosts pay for welcome amenities, shared costs for group activities",
                  "Master billing for group activities, room charges individual, incidental coverage policies",
                  "Host covers welcome events, guests pay for additional activities, transparent cost communication",
                  "Subsidized rooms for immediate family, travel assistance for key guests, flexible payment plans",
                  "Spreadsheet tracking room blocks, master bills for group charges, expense categorization"
                ]
              }
            ]}
            tips={[
              "Block hotel rooms 6-9 months in advance for popular destinations and peak seasons",
              "Offer accommodation options at different price points to accommodate various guest budgets",
              "Create welcome packets with local information and event details for out-of-town guests",
              "Designate a point person to handle guest accommodation questions and coordinate services",
              "Negotiate group rates and amenities with hotels to provide better value for your guests"
            ]}
          />
        </TabsContent>

        <TabsContent value="supplies-equipment">
          <GuidedNotePage
            title="Event Supplies & Equipment Management"
            description="Coordinate all supplies and equipment needed for your event"
            sections={[
              {
                title: "Essential Supplies Inventory",
                prompts: [
                  "What essential supplies do you need for your event setup and operations?",
                  "How will you track and organize all supplies and equipment?",
                  "What emergency supplies should you have available during the event?",
                  "How will you coordinate supply delivery and storage before the event?",
                  "What supplies do you need for different weather conditions?"
                ],
                examples: [
                  "Tables, chairs, linens, decorations, serving supplies, cleanup materials, emergency kit",
                  "Master inventory list, categorized by function, designated storage areas, check-off system",
                  "First aid kit, stain remover, safety pins, extra linens, cleanup supplies, phone chargers",
                  "Coordinate delivery timing with venue access, secure storage areas, inventory upon delivery",
                  "Umbrellas for rain, fans for heat, heaters for cold, tent weights for wind, weatherproof covers"
                ]
              },
              {
                title: "Technical Equipment and Setup",
                prompts: [
                  "What technical equipment do you need for sound, lighting, and presentations?",
                  "How will you ensure all equipment is compatible and properly connected?",
                  "What backup equipment should you have available for technical failures?",
                  "How will you coordinate technical setup with venue power and infrastructure?",
                  "What expertise do you need for equipment operation during the event?"
                ],
                examples: [
                  "Sound system, microphones, projectors, screens, lighting equipment, extension cords, power strips",
                  "Test all connections before event, compatible cable types, proper power requirements",
                  "Backup microphones, extra cables, alternative sound sources, emergency lighting, battery backups",
                  "Electrical load calculations, circuit availability, generator needs, venue technical requirements",
                  "Designated technical coordinator, vendor support, basic troubleshooting skills, emergency contacts"
                ]
              },
              {
                title: "Service and Operational Equipment",
                prompts: [
                  "What equipment do you need for food service and guest services?",
                  "How will you handle equipment for entertainment and guest activities?",
                  "What cleaning and maintenance equipment is needed throughout the event?",
                  "How will you coordinate equipment sharing between different event functions?",
                  "What specialized equipment is needed for your specific event type?"
                ],
                examples: [
                  "Serving trays, chafing dishes, beverage dispensers, ice buckets, trash receptacles, coat racks",
                  "Dance floor, photo booth props, games equipment, activity supplies, prize storage",
                  "Vacuum cleaners, mops, cleaning supplies, paper towels, garbage bags, recycling containers",
                  "Schedule equipment use, clean between uses, designate responsible parties, track movements",
                  "Wedding: guest book stand, gift table; Corporate: registration table, name tags; Birthday: game prizes"
                ]
              },
              {
                title: "Logistics and Transportation of Supplies",
                prompts: [
                  "How will you transport all supplies and equipment to your venue?",
                  "What loading and setup logistics need to be coordinated?",
                  "How will you handle equipment breakdown and removal after the event?",
                  "What insurance and security considerations do you have for valuable equipment?",
                  "How will you coordinate supply management with your event team and volunteers?"
                ],
                examples: [
                  "Rental truck for large items, multiple car loads, vendor deliveries, volunteer transport coordination",
                  "Loading dock access, equipment carts, multiple trips coordination, setup crew assignments",
                  "Breakdown timeline, return rental equipment, clean owned items, coordinate pickup services",
                  "Equipment insurance coverage, secure storage during event, valuable item tracking, loss prevention",
                  "Supply management assignments, check-out/check-in system, volunteer briefings, accountability measures"
                ]
              }
            ]}
            tips={[
              "Create a comprehensive supplies checklist and check items off as you acquire and deliver them",
              "Plan for 10-15% more supplies than you think you need to account for unexpected needs",
              "Organize supplies by function and timing to make setup and breakdown more efficient",
              "Have a designated person responsible for equipment and supplies management during the event",
              "Keep receipts and documentation for all rented or borrowed equipment for proper returns"
            ]}
          />
        </TabsContent>

        <TabsContent value="permits-insurance">
          <GuidedNotePage
            title="Legal Requirements, Permits & Insurance"
            description="Handle legal, permit, and insurance requirements for your event"
            sections={[
              {
                title: "Event Permits and Legal Requirements",
                prompts: [
                  "What permits and licenses do you need for your specific event and location?",
                  "How will you research and apply for required permits in advance?",
                  "What legal restrictions or regulations affect your event planning?",
                  "How will you ensure compliance with local noise, safety, and occupancy regulations?",
                  "What documentation do you need to maintain for legal compliance?"
                ],
                examples: [
                  "Special event permits, liquor licenses, noise permits, temporary structure permits, vendor licenses",
                  "Contact local government offices, venue coordinator assistance, online permit applications, allow 30-60 days",
                  "Noise ordinances, occupancy limits, fire safety codes, alcohol service laws, vendor regulations",
                  "Sound level monitoring, occupancy counting, fire safety compliance, proper exits and signage",
                  "Permit copies, insurance certificates, vendor licenses, safety inspection reports, compliance checklists"
                ]
              },
              {
                title: "Insurance Coverage and Liability",
                prompts: [
                  "What insurance coverage do you need for your event and potential liabilities?",
                  "How will you verify that all vendors have appropriate insurance coverage?",
                  "What liability concerns are specific to your event type and activities?",
                  "How will you handle insurance requirements for venue, vendors, and guests?",
                  "What documentation and certificates do you need for insurance compliance?"
                ],
                examples: [
                  "General liability insurance, liquor liability, property damage coverage, vendor insurance requirements",
                  "Request certificates of insurance from all vendors, verify coverage amounts, confirm policy dates",
                  "Alcohol service liability, food safety, entertainment risks, property damage, guest injury potential",
                  "Venue insurance requirements, vendor coverage mandates, host liability protection, guest waivers if needed",
                  "Insurance certificates, policy documentation, vendor compliance verification, liability waivers"
                ]
              },
              {
                title: "Health and Safety Compliance",
                prompts: [
                  "What health and safety regulations apply to your event?",
                  "How will you ensure food safety and proper handling throughout your event?",
                  "What emergency procedures and safety measures need to be in place?",
                  "How will you handle accessibility requirements and ADA compliance?",
                  "What safety training or briefing do your staff and vendors need?"
                ],
                examples: [
                  "Food handling permits, fire safety requirements, emergency exit compliance, crowd control measures",
                  "Licensed caterers, proper food temperatures, hand washing stations, allergen management",
                  "Emergency evacuation plans, first aid stations, emergency contact procedures, incident reporting",
                  "Wheelchair accessibility, accessible parking, restroom compliance, assistance for disabled guests",
                  "Safety procedure briefings, emergency contact lists, evacuation procedures, incident response training"
                ]
              },
              {
                title: "Contract Management and Legal Protection",
                prompts: [
                  "How will you ensure all vendor contracts protect your interests and comply with regulations?",
                  "What cancellation and force majeure provisions do you need in your contracts?",
                  "How will you handle contract disputes or vendor performance issues?",
                  "What payment terms and conditions provide appropriate protection?",
                  "What legal review process will you use for important contracts and agreements?"
                ],
                examples: [
                  "Clear service specifications, liability clauses, performance standards, termination conditions",
                  "Weather cancellation terms, emergency force majeure clauses, refund policies, rescheduling options",
                  "Contract dispute resolution procedures, mediation clauses, legal remedy options, vendor replacement rights",
                  "Payment schedules that protect deposits, performance-based payments, withholding rights for poor performance",
                  "Legal review for expensive contracts, standard contract templates, professional advice for complex terms"
                ]
              }
            ]}
            tips={[
              "Research permit requirements early in your planning process as some permits can take weeks to obtain",
              "Verify that all vendors have appropriate insurance coverage and provide certificates of insurance",
              "Keep all permits, licenses, and insurance documentation easily accessible during your event",
              "Work with venue coordinators who can help guide you through local regulatory requirements",
              "Consider hiring a professional event planner for complex events with significant legal and insurance needs"
            ]}
          />
        </TabsContent>

      </Tabs>
    </div>
  )
}