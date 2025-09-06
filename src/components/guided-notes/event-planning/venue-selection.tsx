"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function VenueSelection() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Venue Selection & Booking</h1>
        <p className="text-muted-foreground">Find and secure the perfect venue for your event.</p>
      </div>

      <Tabs defaultValue="venue-research" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="venue-research" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Venue Research</span>
            <span className="sm:hidden">Research</span>
          </TabsTrigger>
          <TabsTrigger value="venue-visits" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Venue Visits</span>
            <span className="sm:hidden">Visits</span>
          </TabsTrigger>
          <TabsTrigger value="contract-terms" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Contract Terms</span>
            <span className="sm:hidden">Contract</span>
          </TabsTrigger>
          <TabsTrigger value="backup-plans" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Backup Plans</span>
            <span className="sm:hidden">Backup</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="venue-research">
          <GuidedNotePage
            title="Venue Research & Initial Screening"
            description="Research and evaluate potential venues for your event"
            sections={[
              {
                title: "Event Requirements Definition",
                prompts: [
                  "What type of event are you planning and what atmosphere do you want to create?",
                  "How many guests will you be hosting and what space do you need?",
                  "What date and time frame do you need the venue for?",
                  "What's your venue budget including any additional fees?",
                  "What special requirements do you have (AV equipment, catering kitchen, etc.)?"
                ],
                examples: [
                  "Corporate conference (professional), birthday party (fun/casual), wedding reception (elegant)",
                  "50 guests need 1,200 sq ft, 150 guests need 2,400 sq ft for cocktail style",
                  "Saturday evening 6PM-11PM, includes 2 hours setup and 1 hour breakdown time",
                  "Set aside 30-40% of total budget for venue, factor in taxes, service fees, gratuity",
                  "Built-in sound system, commercial kitchen access, parking for 100+ cars, wheelchair accessible"
                ]
              },
              {
                title: "Venue Type Research",
                prompts: [
                  "What types of venues align with your event vision and budget?",
                  "Which venue types offer the amenities you need?",
                  "What are the pros and cons of each venue type you're considering?",
                  "How do different venue types impact your overall event logistics?",
                  "What seasonal or timing considerations affect venue availability and pricing?"
                ],
                examples: [
                  "Hotel ballrooms (full service), country clubs (elegant), event halls (affordable), outdoor spaces (natural)",
                  "Hotels have catering/AV built-in, halls may require external vendors, outdoor needs weather backup",
                  "Hotels: convenient but expensive; Halls: flexible but need more coordination; Outdoor: beautiful but weather-dependent",
                  "Downtown venues: parking challenges but accessible; Suburban: easier parking but travel time",
                  "Wedding season (May-October) costs more, weekends cost 30-50% more than weekdays"
                ]
              },
              {
                title: "Initial Venue Screening",
                prompts: [
                  "What venues in your area match your initial criteria?",
                  "How do you want to prioritize your top venue options?",
                  "What questions will you ask during initial venue inquiries?",
                  "How will you track venue information and compare options?",
                  "What red flags should you watch for when researching venues?"
                ],
                examples: [
                  "Search online directories, ask local event planners, check social media reviews",
                  "Rank by budget fit, availability, location convenience, and style match",
                  "Ask about availability, pricing structure, what's included, cancellation policy, vendor restrictions",
                  "Create spreadsheet with venue name, capacity, cost, availability, pros/cons, contact info",
                  "Hidden fees, inflexible policies, poor reviews about cleanliness/service, limited availability"
                ]
              },
              {
                title: "Location & Accessibility Planning",
                prompts: [
                  "How important is venue location for your specific guest list?",
                  "What transportation and parking considerations do you need to address?",
                  "What accessibility features does your venue need to accommodate all guests?",
                  "How will venue location impact your vendor choices and logistics?",
                  "What backup transportation options might you need to arrange?"
                ],
                examples: [
                  "Central location for local guests, airport proximity for out-of-town attendees",
                  "On-site parking for 100+ cars, valet service, nearby public transit, rideshare pickup areas",
                  "Wheelchair ramps, accessible bathrooms, elevators, reserved parking spaces, hearing loop systems",
                  "Local vendors may cost less, remote venues may limit vendor options or increase travel fees",
                  "Charter bus for group transport, rideshare codes for guests, hotel shuttle coordination"
                ]
              }
            ]}
            tips={[
              "Create a venue comparison spreadsheet to track all important details and costs",
              "Visit venues during the same time of day and season as your planned event",
              "Always ask about hidden fees, service charges, and what's included in the base price",
              "Book venues 6-12 months in advance for popular dates and locations",
              "Take photos and notes during venue visits to help with decision-making later"
            ]}
          />
        </TabsContent>

        <TabsContent value="venue-visits">
          <GuidedNotePage
            title="Venue Visits & Evaluations"
            description="Tour venues and evaluate them in person"
            sections={[
              {
                title: "Pre-Visit Preparation",
                prompts: [
                  "What questions will you prepare before visiting each venue?",
                  "Who should accompany you on venue visits and why?",
                  "What should you bring to venue visits for accurate evaluation?",
                  "How will you schedule venue visits efficiently?",
                  "What specific areas of each venue do you need to see?"
                ],
                examples: [
                  "Availability, pricing details, setup/breakdown time, vendor restrictions, payment schedule",
                  "Event co-planner, parent/partner for second opinion, photographer to assess lighting",
                  "Measuring tape, camera, notebook, guest list, preliminary timeline, budget sheet",
                  "Visit 2-3 venues per day maximum, allow 1-2 hours per venue, group by location",
                  "Main event space, kitchen/catering area, bathrooms, parking, bridal suite, storage areas"
                ]
              },
              {
                title: "During the Venue Tour",
                prompts: [
                  "What key features will you evaluate during each venue tour?",
                  "How will you assess the venue's condition and maintenance quality?",
                  "What questions should you ask the venue coordinator during your visit?",
                  "How will you test the venue's acoustics and lighting during your tour?",
                  "What photos and measurements should you take during the visit?"
                ],
                examples: [
                  "Space layout, natural lighting, acoustics, cleanliness, decor flexibility, storage space",
                  "Check for stains, damage, outdated fixtures, cleanliness of bathrooms, working equipment",
                  "Setup limitations, preferred vendors, overtime fees, cleaning requirements, security policies",
                  "Speak at normal volume across the room, check if music from adjoining areas is audible",
                  "Wide shots of space, detail shots of problem areas, measurements of key spaces"
                ]
              },
              {
                title: "Venue Logistics Assessment",
                prompts: [
                  "How will you evaluate the venue's setup and breakdown logistics?",
                  "What kitchen and catering facilities does the venue provide?",
                  "How adequate are the venue's restroom facilities for your guest count?",
                  "What are the venue's policies around decorations and setup?",
                  "How will you assess parking and guest flow at the venue?"
                ],
                examples: [
                  "Loading dock access, time restrictions, table/chair storage, vendor access routes",
                  "Commercial kitchen size, equipment available, food prep space, refrigeration capacity",
                  "1 restroom per 50 guests minimum, cleanliness, accessibility, supply restocking policy",
                  "Hanging restrictions, candle policies, cleanup requirements, decoration storage",
                  "Walk the guest arrival route, count parking spaces, check accessibility paths"
                ]
              },
              {
                title: "Vendor & Service Integration",
                prompts: [
                  "What are the venue's policies regarding outside vendors?",
                  "What services does the venue provide in-house vs. requiring external vendors?",
                  "How will the venue coordinate with your caterer and other service providers?",
                  "What are the venue's preferred vendor recommendations and why?",
                  "How flexible is the venue with timing and setup requirements?"
                ],
                examples: [
                  "Approved vendor list requirements, insurance requirements, delivery restrictions",
                  "Some venues include tables/chairs/linens, others require full rental coordination",
                  "Venue liaison during event, kitchen access policies, loading/setup coordination",
                  "Ask why they recommend certain vendors - quality, reliability, or financial kickbacks?",
                  "Setup start times, breakdown deadlines, overtime fees, noise restrictions"
                ]
              }
            ]}
            tips={[
              "Visit venues during the same day of the week and time as your planned event",
              "Bring a trusted friend or family member for a second opinion and fresh perspective",
              "Take photos and notes at each venue to help with later comparison and decision-making",
              "Ask to see the venue set up for a similar event if possible",
              "Don't make decisions on the spot - take time to compare all options afterward"
            ]}
          />
        </TabsContent>

        <TabsContent value="contract-terms">
          <GuidedNotePage
            title="Contract Review & Booking Terms"
            description="Understand and negotiate venue contracts and terms"
            sections={[
              {
                title: "Contract Terms Review",
                prompts: [
                  "What are the key terms you need to understand in the venue contract?",
                  "What payment schedule and cancellation policies does the venue require?",
                  "What insurance and liability requirements does the venue have?",
                  "What are the venue's policies for damage, cleanup, and security deposits?",
                  "How does the contract address potential issues like weather or emergencies?"
                ],
                examples: [
                  "Rental period, included services, guest capacity limits, noise restrictions, overtime fees",
                  "Typical: deposit due at signing, 50% due 30 days before, final payment day of event",
                  "General liability insurance required, certificate of insurance, vendor insurance requirements",
                  "Security deposit $500-2000, damage assessment process, cleaning fee structure",
                  "Force majeure clauses, weather backup plans, emergency evacuation procedures"
                ]
              },
              {
                title: "Pricing and Fee Structure",
                prompts: [
                  "What is included in the base venue rental fee?",
                  "What additional fees and charges should you budget for?",
                  "How do taxes, service charges, and gratuities factor into total cost?",
                  "What are the overtime and additional service fees?",
                  "How can you negotiate better pricing or terms with the venue?"
                ],
                examples: [
                  "Basic space rental, tables/chairs, some lighting, parking access",
                  "Setup/breakdown fees, cleaning fees, security deposits, equipment rental, coat check",
                  "Sales tax 8-10%, service charges 18-22%, mandatory gratuity for staff",
                  "Overtime typically $200-500/hour, additional staffing $25-50/hour per person",
                  "Off-season dates, weekday events, package deals, multiple event bookings"
                ]
              },
              {
                title: "Vendor and Service Restrictions",
                prompts: [
                  "What restrictions does the venue place on outside vendors?",
                  "Which vendors must you use from the venue's preferred list?",
                  "What are the venue's policies for vendor setup and breakdown?",
                  "How do vendor insurance requirements impact your planning?",
                  "What flexibility do you have in vendor timing and coordination?"
                ],
                examples: [
                  "Approved vendor lists, insurance requirements, background check requirements",
                  "Exclusive catering contracts, bar service requirements, AV equipment rental",
                  "Loading dock schedules, vendor parking areas, setup time limits, breakdown deadlines",
                  "Each vendor needs $1M liability insurance, certificate of insurance to venue",
                  "Some venues allow vendor setup day before, others restrict to day-of only"
                ]
              },
              {
                title: "Event Day Policies and Restrictions",
                prompts: [
                  "What are the venue's noise and music policies?",
                  "What decorating and setup restrictions should you know about?",
                  "How does the venue handle security and guest management?",
                  "What are the alcohol service and beverage policies?",
                  "How will the venue staff coordinate with your event timeline?"
                ],
                examples: [
                  "Music must end by 10 PM, sound level limits, no live bands in certain spaces",
                  "No nails in walls, candle restrictions, confetti/glitter bans, decoration removal requirements",
                  "Security guard requirements, guest list management, ID checking procedures",
                  "Licensed bar service only, no outside alcohol, corkage fees, last call policies",
                  "Venue coordinator assigned, staff briefing procedures, timeline confirmation process"
                ]
              }
            ]}
            tips={[
              "Read the entire contract carefully and ask questions about anything unclear",
              "Negotiate payment terms if needed - many venues offer flexibility for good clients",
              "Get all verbal agreements added to the written contract before signing",
              "Take photos of the contract terms to reference during planning",
              "Consider hiring a lawyer to review complex or expensive venue contracts"
            ]}
          />
        </TabsContent>

        <TabsContent value="backup-plans">
          <GuidedNotePage
            title="Backup Plans & Contingencies"
            description="Plan for weather, emergencies, and last-minute changes"
            sections={[
              {
                title: "Weather Contingency Planning",
                prompts: [
                  "What weather backup options does your venue provide?",
                  "How will you communicate weather-related changes to guests?",
                  "What equipment rentals might you need for weather protection?",
                  "How far in advance do you need to make weather-related decisions?",
                  "What are your criteria for activating backup weather plans?"
                ],
                examples: [
                  "Indoor ceremony space, covered outdoor areas, tent rental options, heated/cooled spaces",
                  "Wedding website updates, email lists, day-of phone tree, social media announcements",
                  "Tent rentals, heater/fan rentals, umbrella stations, pathway coverings",
                  "Tent setup needs 24-48 hours notice, indoor space may need different decor",
                  "Rain forecast over 30%, temperature below 55°F or above 85°F, wind over 15 mph"
                ]
              },
              {
                title: "Vendor Backup Plans",
                prompts: [
                  "What backup vendors have you identified for critical services?",
                  "How will you handle vendor cancellations or no-shows?",
                  "What contingency plans do your vendors have for emergencies?",
                  "How will you maintain vendor contact lists and backup information?",
                  "What vendor issues require immediate backup activation?"
                ],
                examples: [
                  "Backup caterer, florist, DJ, photographer - keep contact info readily available",
                  "Day-of coordinator with vendor contact list, venue staff who can step in",
                  "Ask each vendor about their emergency procedures and backup staff",
                  "Create emergency contact sheet with primary and backup vendors, venue coordinator",
                  "Vendor illness, equipment failure, transportation issues, family emergencies"
                ]
              },
              {
                title: "Guest Count Fluctuations",
                prompts: [
                  "How will you handle last-minute guest additions or cancellations?",
                  "What flexibility does your venue contract allow for guest count changes?",
                  "How will catering and seating adjustments be managed?",
                  "What buffer should you build into your planning for guest count uncertainty?",
                  "How will you communicate final headcount to vendors?"
                ],
                examples: [
                  "Have seating chart flexibility, extra chair rental on standby, catering buffer built in",
                  "Some venues allow 10% guest count change within 30 days, others more restrictive",
                  "Caterer needs final count 3-7 days before, extra meals cost $25-75 each",
                  "Plan for 5-10% guest count variation, keep 2-3 extra table seats available",
                  "Confirm final numbers with venue, caterer, rental companies 48-72 hours before event"
                ]
              },
              {
                title: "Emergency Preparedness",
                prompts: [
                  "What emergency procedures does your venue have in place?",
                  "How will you handle medical emergencies or guest incidents?",
                  "What security measures are appropriate for your event?",
                  "How will you prepare for power outages or technical failures?",
                  "What communication plan do you have for emergency situations?"
                ],
                examples: [
                  "Fire evacuation plans, severe weather procedures, emergency lighting, first aid stations",
                  "Venue staff trained in first aid, local hospital contact info, guest emergency contact list",
                  "Professional security for large events, venue staff monitoring, controlled entry",
                  "Generator backup for critical systems, battery-powered emergency lighting, backup AV equipment",
                  "Designated point person for announcements, emergency contact lists, local emergency services numbers"
                ]
              }
            ]}
            tips={[
              "Always have backup vendors identified and their contact information readily available",
              "Build flexibility into your timeline to accommodate unexpected delays or changes",
              "Create an emergency contact sheet with all vendors, venue staff, and key family members",
              "Discuss emergency procedures with your venue coordinator before the event",
              "Assign a trusted person to handle emergencies so you can focus on enjoying your event"
            ]}
          />
        </TabsContent>

      </Tabs>
    </div>
  )
}