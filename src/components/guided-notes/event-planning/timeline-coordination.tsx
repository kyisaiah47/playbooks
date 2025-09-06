"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function TimelineCoordination() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Event Timeline & Coordination</h1>
        <p className="text-muted-foreground">Create and manage your detailed event timeline.</p>
      </div>

      <Tabs defaultValue="pre-event" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="pre-event" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Pre-Event Setup</span>
            <span className="sm:hidden">Pre-Event</span>
          </TabsTrigger>
          <TabsTrigger value="event-flow" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Event Flow</span>
            <span className="sm:hidden">Flow</span>
          </TabsTrigger>
          <TabsTrigger value="coordination" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Team Coordination</span>
            <span className="sm:hidden">Team</span>
          </TabsTrigger>
          <TabsTrigger value="contingency" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Contingency Plans</span>
            <span className="sm:hidden">Backup</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="pre-event">
          <GuidedNotePage
            title="Pre-Event Setup & Timeline"
            description="Plan the setup phase before your event begins"
            sections={[
              {
                title: "Setup Timeline Development",
                prompts: [
                  "What time do you need venue access to begin setup?",
                  "What is the sequence of setup activities and who handles each?",
                  "How much time does each vendor need for their setup process?",
                  "What dependencies exist between different setup activities?",
                  "What buffer time will you build in for delays and unexpected issues?"
                ],
                examples: [
                  "Venue access 4 hours before event start, earlier access may cost extra",
                  "Venue prep first, then decor, then catering setup, finally AV and entertainment",
                  "Caterer: 3-4 hours, florist: 2-3 hours, DJ: 1-2 hours, photographer: 30 minutes",
                  "Tables/linens before centerpieces, electricity before sound equipment, catering after decor",
                  "30-minute buffers between major setup phases, contingency time for vendor delays"
                ]
              },
              {
                title: "Vendor Setup Coordination",
                prompts: [
                  "How will you coordinate vendor arrival times and setup sequences?",
                  "What loading and unloading logistics need to be managed?",
                  "How will you handle vendor parking and equipment storage during setup?",
                  "What venue access and key management is needed for vendors?",
                  "Who will supervise vendor setup and ensure quality standards?"
                ],
                examples: [
                  "Staggered vendor arrivals every 30-60 minutes, coordinate with venue manager",
                  "Reserve loading dock times, provide equipment carts, coordinate elevator access",
                  "Designated vendor parking areas, secure storage for equipment, staging areas",
                  "Venue coordinator provides access, backup key holder, vendor check-in process",
                  "Event coordinator on-site, venue manager oversight, designated quality checker"
                ]
              },
              {
                title: "Decoration and Styling Setup",
                prompts: [
                  "What is your decoration setup timeline and sequence?",
                  "How will you coordinate between different decorating teams or vendors?",
                  "What tools and equipment are needed for decoration installation?",
                  "How will you ensure decorations meet safety and venue requirements?",
                  "What backup decoration plans do you have if something goes wrong?"
                ],
                examples: [
                  "Large installations first, then table settings, finally finishing touches and lighting",
                  "Florist coordinates with rental company for linens, lighting team waits for decor completion",
                  "Ladders, extension cords, tape, zip ties, cleanup supplies, emergency repair kit",
                  "Check venue restrictions on hanging items, candles, confetti; ensure fire safety compliance",
                  "Simplified backup decor options, extra supplies on hand, vendor emergency contacts"
                ]
              },
              {
                title: "Final Preparations and Inspections",
                prompts: [
                  "What final walkthrough and inspection process will you conduct?",
                  "How will you handle last-minute setup adjustments and fixes?",
                  "What cleanliness and presentation standards need to be met before guests arrive?",
                  "How will you transition from setup mode to event mode?",
                  "What setup crew coordination is needed as the event begins?"
                ],
                examples: [
                  "Complete venue walkthrough 1 hour before guests arrive, check all details against plan",
                  "Have repair kit ready, assign someone to handle quick fixes, test all equipment",
                  "Clean restrooms, empty trash, spot-clean surfaces, ensure proper lighting",
                  "Setup crew changes clothes/leaves, event staff takes over, secure vendor equipment",
                  "Setup crew chief briefs event staff, hand over emergency contacts and procedures"
                ]
              }
            ]}
            tips={[
              "Start setup earlier than you think you need - everything takes longer than expected",
              "Create a detailed setup timeline and share it with all vendors and team members",
              "Assign someone to oversee setup who can make decisions and solve problems",
              "Do a final walkthrough before guests arrive to catch any issues or missing details",
              "Have cleanup supplies and a repair kit available for quick fixes during setup"
            ]}
          />
        </TabsContent>

        <TabsContent value="event-flow">
          <GuidedNotePage
            title="Event Flow & Programming Timeline"
            description="Plan the flow and timing of your event programming"
            sections={[
              {
                title: "Event Opening and Welcome",
                prompts: [
                  "How will your event begin and what sets the tone for the experience?",
                  "What arrival window will you plan for and how will you manage early/late arrivals?",
                  "How will you transition guests from arrival to the main event activities?",
                  "What welcome activities or reception will you include?",
                  "How will you signal to guests when different phases of the event begin?"
                ],
                examples: [
                  "Cocktail reception, welcome speech, background music, greeting line with hosts",
                  "30-minute arrival window, late arrivals accommodated quietly, early arrivals have welcome area",
                  "Gentle announcements, music changes, lighting transitions, staff guidance",
                  "Welcome drinks, light appetizers, networking time, photo opportunities",
                  "Announcements, music transitions, lighting changes, staff coordination, visual cues"
                ]
              },
              {
                title: "Main Event Programming",
                prompts: [
                  "What is the main programming sequence for your event?",
                  "How will you pace activities to maintain guest engagement?",
                  "What transitions do you need to plan between different activities?",
                  "How long should each segment last to keep guests interested?",
                  "What flexibility will you build in to adjust timing during the event?"
                ],
                examples: [
                  "Ceremony, cocktails, dinner service, toasts/speeches, entertainment, dancing",
                  "Alternate high-energy and calm activities, build to climactic moments, end on high note",
                  "Smooth music transitions, announcements, lighting changes, staff coordination",
                  "Ceremony: 30 minutes, cocktails: 60 minutes, dinner: 90 minutes, dancing: 2+ hours",
                  "Buffer time between segments, ability to shorten/extend activities, backup entertainment"
                ]
              },
              {
                title: "Food Service Timeline",
                prompts: [
                  "How will you coordinate food service with other event activities?",
                  "What style of food service fits your event timing and guest flow?",
                  "How will you manage different courses and timing of meal service?",
                  "What accommodation will you make for guests with special dietary needs?",
                  "How will you coordinate bar service throughout the event?"
                ],
                examples: [
                  "Cocktails during photos, dinner after welcome activities, late-night snacks for dancing",
                  "Buffet allows flexible timing, plated service requires fixed schedule, stations offer variety",
                  "Appetizers during cocktails, salad/soup, main course, dessert with 20-minute gaps",
                  "Special meals served first, dietary restrictions clearly labeled, staff trained on allergens",
                  "Welcome cocktails, wine service with dinner, open bar after dinner, last call announced"
                ]
              },
              {
                title: "Event Conclusion and Departure",
                prompts: [
                  "How will you plan the conclusion and wind-down of your event?",
                  "What departure logistics do you need to coordinate?",
                  "How will you handle end-of-event announcements and farewells?",
                  "What cleanup begins while the event is still ongoing?",
                  "How will you ensure a positive final impression for departing guests?"
                ],
                examples: [
                  "Last dance, final toast, group photos, sparkler send-off, farewell line",
                  "Coat check efficiency, valet coordination, transportation assistance, lost items",
                  "Last call announcements, thank you speech, final song, lights up gradually",
                  "Kitchen cleanup during dancing, non-visible areas, prepare for full breakdown",
                  "Personal farewells from hosts, take-away favors, thank you for attending"
                ]
              }
            ]}
            tips={[
              "Build your timeline backwards from your end time to ensure everything fits",
              "Plan transitions between activities to keep guests engaged and avoid dead time",
              "Allow flexibility in your timeline to accommodate natural flow and guest energy",
              "Coordinate food service timing carefully with other activities and entertainment",
              "Have someone designated to watch the clock and keep the event moving on schedule"
            ]}
          />
        </TabsContent>

        <TabsContent value="coordination">
          <GuidedNotePage
            title="Team & Staff Coordination"
            description="Coordinate your event team and staff for smooth execution"
            sections={[
              {
                title: "Event Team Organization",
                prompts: [
                  "Who will be on your event coordination team and what are their roles?",
                  "How will you communicate and coordinate with your team during the event?",
                  "What authority and decision-making power will each team member have?",
                  "How will you brief your team on the event timeline and their responsibilities?",
                  "What backup coverage do you have if key team members are unavailable?"
                ],
                examples: [
                  "Event coordinator (overall), vendor liaison, guest relations, setup crew chief, cleanup supervisor",
                  "Walkie-talkies, group text messages, regular check-in times, central command post",
                  "Coordinator makes final decisions, each person owns their area, escalation procedures",
                  "Pre-event team meeting, written timeline for each person, emergency contact lists",
                  "Cross-train team members, have backup person for each role, vendor contacts as backup"
                ]
              },
              {
                title: "Vendor Team Coordination",
                prompts: [
                  "How will you coordinate timing and logistics among all vendors?",
                  "What communication system will vendors use to stay coordinated?",
                  "Who will serve as the main liaison between vendors during the event?",
                  "How will you handle vendor issues or conflicts that arise during the event?",
                  "What vendor coordination meetings will you hold before the event?"
                ],
                examples: [
                  "Shared timeline, designated liaisons, regular check-ins, problem escalation procedures",
                  "Group text chain, walkie-talkie channel, vendor WhatsApp group, central coordination person",
                  "Event coordinator or designated vendor manager handles all vendor communication",
                  "Neutral mediation, focus on solutions, escalate to supervisors, maintain professionalism",
                  "Final walkthrough meeting, day-before coordination call, setup morning briefing"
                ]
              },
              {
                title: "Guest Services Coordination",
                prompts: [
                  "Who will handle guest services and hospitality during your event?",
                  "How will you coordinate guest relations and handle guest questions/issues?",
                  "What guest assistance services will you provide throughout the event?",
                  "How will you handle special guest needs and VIP treatment?",
                  "What systems will you use to track guest feedback and satisfaction?"
                ],
                examples: [
                  "Dedicated host/hostess, guest relations coordinator, venue staff support",
                  "Designated guest services person, clear escalation procedures, venue staff backup",
                  "Coat check, lost and found, directions assistance, accessibility help, emergency response",
                  "VIP seating, special introductions, personalized attention, dedicated service staff",
                  "Guest feedback forms, informal conversations, social media monitoring, post-event surveys"
                ]
              },
              {
                title: "Emergency Response Coordination",
                prompts: [
                  "What emergency response procedures will your team follow?",
                  "How will you coordinate with venue security and emergency services?",
                  "What medical emergency procedures and first aid coverage do you have?",
                  "How will you handle weather emergencies or other disruptions?",
                  "What communication plan do you have for emergency situations?"
                ],
                examples: [
                  "Emergency contact lists, evacuation procedures, medical emergency protocols, incident reporting",
                  "Know venue emergency procedures, have local emergency service numbers, coordinate with venue security",
                  "First aid trained staff member, know location of AED, have emergency contact info for guests",
                  "Indoor backup plans, evacuation procedures, guest safety protocols, vendor coordination",
                  "Emergency contact tree, announcement procedures, social media/website updates, family notifications"
                ]
              }
            ]}
            tips={[
              "Designate clear roles and responsibilities for each team member to avoid confusion",
              "Hold a team coordination meeting before the event to review timeline and procedures",
              "Establish clear communication protocols and backup systems for your coordination team",
              "Cross-train team members so multiple people can handle critical functions",
              "Create emergency procedures and ensure all team members know how to respond"
            ]}
          />
        </TabsContent>

        <TabsContent value="contingency">
          <GuidedNotePage
            title="Contingency Planning & Risk Management"
            description="Plan for unexpected situations and develop backup plans"
            sections={[
              {
                title: "Weather and Environmental Contingencies",
                prompts: [
                  "What weather-related backup plans do you need for your event?",
                  "How will you monitor weather forecasts and make decisions about changes?",
                  "What equipment or venue modifications are needed for weather protection?",
                  "How will you communicate weather-related changes to guests and vendors?",
                  "What are your decision deadlines for activating weather contingency plans?"
                ],
                examples: [
                  "Indoor ceremony space, tent rental options, heater/fan rentals, covered walkways",
                  "Check forecasts 1 week, 3 days, and morning of event; have weather app alerts set",
                  "Tent rentals need 24-48 hour setup, umbrellas for guests, pathway covering, generator backup",
                  "Email blast, website updates, text messages, day-of announcements, signage updates",
                  "Tent decision 48 hours before, indoor backup 24 hours before, guest communication 12 hours before"
                ]
              },
              {
                title: "Vendor and Service Backup Plans",
                prompts: [
                  "What backup vendors have you identified for critical services?",
                  "How will you handle vendor no-shows or last-minute cancellations?",
                  "What equipment backup plans do you have for critical items?",
                  "How will you manage vendor quality issues that arise during the event?",
                  "What financial contingencies do you have for vendor-related problems?"
                ],
                examples: [
                  "Backup caterer, photographer, DJ, florist with contact info and availability confirmed",
                  "Have backup vendor contracts ready, know replacement vendor procedures, maintain emergency fund",
                  "Backup sound system, extra microphones, generator rental, emergency lighting, backup camera",
                  "Vendor replacement procedures, quality control checkpoints, supervisor escalation, guest communication",
                  "Emergency fund 10-15% of budget, credit card backup, vendor insurance claims, family emergency loans"
                ]
              },
              {
                title: "Guest and Capacity Management Contingencies",
                prompts: [
                  "How will you handle significant changes in guest attendance?",
                  "What plans do you have for managing overcrowding or capacity issues?",
                  "How will you accommodate unexpected special needs or accessibility requirements?",
                  "What backup plans do you have for guest transportation or parking issues?",
                  "How will you handle guest behavior issues or conflicts during the event?"
                ],
                examples: [
                  "Flexible seating arrangements, extra chairs/tables on standby, overflow space identified",
                  "Venue capacity limits, guest list management, entrance control, overflow viewing areas",
                  "Contact venue for accessibility modifications, arrange transportation assistance, modify seating",
                  "Alternative parking locations, shuttle services, rideshare coordination, valet backup",
                  "Designated person to handle conflicts, security contact info, guest removal procedures, de-escalation training"
                ]
              },
              {
                title: "Technical and Equipment Contingencies",
                prompts: [
                  "What backup plans do you have for power outages or technical failures?",
                  "How will you handle sound system or AV equipment malfunctions?",
                  "What lighting backup plans do you need for your event?",
                  "How will you manage technology failures that affect guest services?",
                  "What communication backup plans do you have if primary systems fail?"
                ],
                examples: [
                  "Generator rental, battery-powered emergency lighting, manual backup systems, venue emergency power",
                  "Backup microphones, secondary sound system, acoustic alternatives, recorded music backup",
                  "Emergency lighting, flashlights for staff, battery-powered lighting, venue emergency systems",
                  "Paper backup for digital check-in, manual payment processing, printed guest lists, cash registers",
                  "Cell phones for coordination, runner system, written backup plans, venue staff communication"
                ]
              }
            ]}
            tips={[
              "Identify the most critical aspects of your event and create specific backup plans for each",
              "Keep emergency contact lists for backup vendors and services easily accessible",
              "Build contingency costs into your budget for emergency vendor replacements or equipment",
              "Practice your contingency procedures with your team before the event",
              "Stay calm and positive when implementing backup plans - guests often don't notice the difference"
            ]}
          />
        </TabsContent>

      </Tabs>
    </div>
  )
}