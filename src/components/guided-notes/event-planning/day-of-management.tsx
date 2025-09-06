"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function DayOfManagement() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Day-of Event Management</h1>
        <p className="text-muted-foreground">Execute and manage your event on the day it happens.</p>
      </div>

      <Tabs defaultValue="pre-event-execution" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="pre-event-execution" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Pre-Event Setup</span>
            <span className="sm:hidden">Setup</span>
          </TabsTrigger>
          <TabsTrigger value="event-execution" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Event Execution</span>
            <span className="sm:hidden">Execution</span>
          </TabsTrigger>
          <TabsTrigger value="problem-management" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Problem Management</span>
            <span className="sm:hidden">Problems</span>
          </TabsTrigger>
          <TabsTrigger value="post-event" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Post-Event</span>
            <span className="sm:hidden">Post</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="pre-event-execution">
          <GuidedNotePage
            title="Day-of Setup & Final Preparations"
            description="Execute your setup plan and final preparations on event day"
            sections={[
              {
                title: "Early Morning Coordination",
                prompts: [
                  "What time will you begin event day setup and who will coordinate each area?",
                  "How will you manage vendor arrivals and coordinate their setup activities?",
                  "What final confirmations and communications need to happen in the morning?",
                  "How will you handle any last-minute changes or adjustments?",
                  "What personal preparation time do you need to build into your schedule?"
                ],
                examples: [
                  "Start setup 4-6 hours before guest arrival, assign setup managers for different areas",
                  "Stagger vendor arrivals every 30-45 minutes, provide arrival timeline to each vendor",
                  "Confirm final guest count with caterer, weather backup decisions, vendor arrival confirmations",
                  "Flexible timeline for minor adjustments, designated decision-maker for changes, backup plans ready",
                  "Personal preparation time 2-3 hours before event, delegate setup supervision during personal prep"
                ]
              },
              {
                title: "Venue Setup and Coordination",
                prompts: [
                  "How will you oversee and coordinate all venue setup activities?",
                  "What quality control process will you use to ensure everything meets your standards?",
                  "How will you manage vendor coordination and resolve conflicts during setup?",
                  "What final venue walkthrough will you conduct before guests arrive?",
                  "How will you transition from setup mode to event mode?"
                ],
                examples: [
                  "Setup supervisor for each area, regular check-ins, centralized coordination station",
                  "Sample setup photos for reference, designated quality checker, final approval process",
                  "Vendor liaison to resolve conflicts, clear setup priorities, backup solutions ready",
                  "Complete walkthrough 1 hour before guests, check all details against timeline and vision",
                  "Setup crew departure, event staff arrival, final preparations complete, doors open on time"
                ]
              },
              {
                title: "Final Details and Last-Minute Tasks",
                prompts: [
                  "What final details and finishing touches need to be completed?",
                  "How will you handle any missing elements or last-minute additions?",
                  "What final testing of equipment and systems will you conduct?",
                  "How will you ensure all staff and volunteers are prepared for their roles?",
                  "What emergency supplies and backup plans will you have readily available?"
                ],
                examples: [
                  "Final floral touches, candle lighting, music testing, signage placement, restroom checks",
                  "Emergency supply kit, backup vendor contacts, flexible solutions for missing items",
                  "Sound system check, lighting test, microphone test, AV equipment verification",
                  "Staff briefing with timeline and responsibilities, emergency procedures review, contact information",
                  "Emergency kit with supplies, backup equipment, vendor emergency contacts, problem-solving resources"
                ]
              },
              {
                title: "Communication and Coordination Systems",
                prompts: [
                  "What communication system will you use to coordinate with your team during the event?",
                  "How will you handle guest questions and information requests?",
                  "What information sharing system will you maintain throughout the event?",
                  "How will you coordinate with venue staff and security during the event?",
                  "What emergency communication procedures will you have in place?"
                ],
                examples: [
                  "Walkie-talkies for key coordinators, group text for updates, designated communication hub",
                  "Guest relations person, information station, clear signage, staff trained to answer questions",
                  "Real-time updates to key family members, social media coordination, guest information sharing",
                  "Venue coordinator liaison, security contact person, facility management coordination",
                  "Emergency contact lists, local emergency services numbers, medical emergency procedures"
                ]
              }
            ]}
            tips={[
              "Start your setup process early to allow plenty of time for unexpected delays and issues",
              "Assign specific people to oversee different aspects of setup so you can focus on overall coordination",
              "Do a complete walkthrough of your venue 1-2 hours before guests arrive to catch any issues",
              "Have emergency supplies and backup solutions readily available for quick problem-solving",
              "Build buffer time into your setup schedule to accommodate delays and last-minute adjustments"
            ]}
          />
        </TabsContent>

        <TabsContent value="event-execution">
          <GuidedNotePage
            title="Event Execution & Flow Management"
            description="Manage and execute your event timeline and activities"
            sections={[
              {
                title: "Guest Arrival and Welcome",
                prompts: [
                  "How will you manage guest arrival and create a positive first impression?",
                  "What greeting and welcome process will you implement for arriving guests?",
                  "How will you handle early arrivals, late arrivals, and guest flow management?",
                  "What guest services and assistance will you provide during arrival?",
                  "How will you transition from arrival phase to the main event programming?"
                ],
                examples: [
                  "Welcome station staffed with greeters, clear signage, coat check if needed, guest book signing",
                  "Warm personal greetings, name tag distribution, directions to key areas, welcome refreshments",
                  "Early arrival lounge area, graceful late arrival integration, traffic flow management",
                  "Guest relations person, assistance for elderly/disabled guests, lost and found station",
                  "Gentle transition announcements, music volume adjustments, staff coordination for smooth flow"
                ]
              },
              {
                title: "Timeline Management and Flow",
                prompts: [
                  "How will you keep your event on schedule and manage timing throughout the day?",
                  "What flexibility will you maintain while ensuring key moments happen as planned?",
                  "How will you coordinate transitions between different event activities?",
                  "What signals and communication will guide timing for vendors and staff?",
                  "How will you handle timing adjustments without disrupting guest experience?"
                ],
                examples: [
                  "Designated timekeeper, regular schedule check-ins, flexible buffer time built into timeline",
                  "Core elements non-negotiable, minor activities adjustable, guest experience priority over rigid timing",
                  "Smooth music transitions, lighting changes, announcements, staff coordination between activities",
                  "Walkie-talkie communication, visual cues for staff, vendor coordination signals, timeline cards",
                  "Discrete schedule adjustments, staff briefings on changes, maintain positive energy despite changes"
                ]
              },
              {
                title: "Guest Experience Management",
                prompts: [
                  "How will you ensure all guests feel welcomed, included, and well-cared for?",
                  "What ongoing guest services will you provide throughout the event?",
                  "How will you handle special needs, requests, or issues that arise during the event?",
                  "What monitoring and feedback systems will help you adjust guest services?",
                  "How will you create memorable moments and positive experiences for guests?"
                ],
                examples: [
                  "Attentive staff, regular check-ins with guests, proactive problem-solving, inclusive activities",
                  "Refreshment service, restroom maintenance, coat check, lost and found, directional assistance",
                  "Guest services coordinator, flexible problem-solving, discrete handling of issues, backup resources",
                  "Staff observations, guest feedback collection, family member check-ins, real-time adjustments",
                  "Special announcements, surprise elements, photo opportunities, personal touches, celebration highlights"
                ]
              },
              {
                title: "Vendor and Staff Coordination During Event",
                prompts: [
                  "How will you coordinate with all vendors and staff throughout the event?",
                  "What ongoing supervision and quality control will you maintain during the event?",
                  "How will you handle vendor issues or performance problems during the event?",
                  "What communication and coordination is needed for smooth service transitions?",
                  "How will you ensure consistent service quality throughout the entire event?"
                ],
                examples: [
                  "Regular vendor check-ins, designated vendor liaisons, clear communication channels",
                  "Service quality monitoring, guest feedback attention, problem identification and resolution",
                  "Discrete problem resolution, backup vendor activation if needed, maintain guest experience priority",
                  "Coordinate service timing, smooth transitions between courses/activities, staff communication",
                  "Service standard reminders, staff supervision, quality control checks, guest satisfaction monitoring"
                ]
              }
            ]}
            tips={[
              "Designate someone other than the host to manage timeline and coordinate with vendors during the event",
              "Build flexibility into your timeline to accommodate natural event flow and guest energy",
              "Monitor guest experience throughout the event and make real-time adjustments as needed",
              "Keep communication discrete and professional when coordinating with vendors during the event",
              "Focus on creating positive experiences and memories rather than perfect adherence to plans"
            ]}
          />
        </TabsContent>

        <TabsContent value="problem-management">
          <GuidedNotePage
            title="Problem Resolution & Crisis Management"
            description="Handle unexpected issues and problems during your event"
            sections={[
              {
                title: "Common Problem Identification and Response",
                prompts: [
                  "What common problems should you be prepared to handle during your event?",
                  "How will you quickly identify and assess problems as they arise?",
                  "What decision-making process will you use for problem resolution during the event?",
                  "How will you prioritize problems and allocate resources for solutions?",
                  "What communication protocol will you follow when problems occur?"
                ],
                examples: [
                  "Weather issues, vendor no-shows, equipment failures, guest conflicts, food service delays, medical emergencies",
                  "Staff problem reporting, guest feedback monitoring, vendor performance observation, proactive issue spotting",
                  "Rapid assessment, solution brainstorming, quick decision by designated authority, implementation coordination",
                  "Guest safety first, core event elements second, minor details last; allocate best problem-solvers to biggest issues",
                  "Internal team notification first, stakeholder updates as needed, guest communication last and carefully managed"
                ]
              },
              {
                title: "Vendor and Service Recovery",
                prompts: [
                  "How will you handle vendor performance issues or service failures during the event?",
                  "What backup plans will you activate for critical vendor problems?",
                  "How will you communicate with guests when service issues affect their experience?",
                  "What recovery strategies will you use to restore event quality after problems?",
                  "How will you prevent vendor problems from cascading into larger event issues?"
                ],
                examples: [
                  "Address issues privately with vendors, document problems for follow-up, activate backup solutions quickly",
                  "Backup vendor activation, alternative service delivery, simplified service options, emergency supply use",
                  "Honest but reassuring communication, focus on solutions not problems, maintain positive event atmosphere",
                  "Compensatory services, upgraded alternatives, personal attention to affected guests, extra special touches",
                  "Isolate problems quickly, communicate with other vendors about impacts, adjust timeline to accommodate solutions"
                ]
              },
              {
                title: "Guest Relations and Conflict Resolution",
                prompts: [
                  "How will you handle guest complaints or dissatisfaction during the event?",
                  "What process will you use to resolve conflicts between guests?",
                  "How will you manage guests who may be intoxicated or disruptive?",
                  "What authority and resources will guest relations staff have to resolve issues?",
                  "How will you maintain overall event atmosphere while addressing individual problems?"
                ],
                examples: [
                  "Listen actively, acknowledge concerns, offer solutions, follow up to ensure satisfaction, document for follow-up",
                  "Discrete mediation, separate conflicting parties, involve mutual friends, venue security if needed",
                  "Trained staff intervention, cut off alcohol service, arrange transportation, family/friend support",
                  "Authority to comp services, offer upgrades, provide special accommodations, escalate to event host if needed",
                  "Handle issues discretely, prevent problems from affecting other guests, maintain positive energy"
                ]
              },
              {
                title: "Emergency Procedures and Safety Management",
                prompts: [
                  "What emergency procedures will you follow for medical, weather, or safety emergencies?",
                  "How will you coordinate with emergency services if needed during your event?",
                  "What evacuation or emergency communication procedures do you have in place?",
                  "How will you ensure guest safety while managing emergency situations?",
                  "What documentation and follow-up procedures will you use for emergency incidents?"
                ],
                examples: [
                  "Call 911 for medical emergencies, venue security for safety issues, weather monitoring for outdoor events",
                  "Know venue emergency procedures, provide clear location information, designate liaison for emergency responders",
                  "PA system announcements, staff-guided evacuation, designated meeting points, guest accountability systems",
                  "Guest safety priority over event continuation, clear instructions, calm leadership, assistance for vulnerable guests",
                  "Incident reports, insurance notifications, follow-up with affected guests, review procedures for future events"
                ]
              }
            ]}
            tips={[
              "Stay calm and positive when problems arise - your attitude will influence your team and guests",
              "Have backup plans ready for the most critical aspects of your event before problems occur",
              "Designate specific people to handle problems so hosts can continue to enjoy the event",
              "Focus on solutions rather than blame when working with vendors and staff during problems",
              "Document problems and resolutions for follow-up action and learning for future events"
            ]}
          />
        </TabsContent>

        <TabsContent value="post-event">
          <GuidedNotePage
            title="Post-Event Wrap-up & Follow-up"
            description="Complete your event with proper wrap-up and follow-up activities"
            sections={[
              {
                title: "Event Conclusion and Guest Departure",
                prompts: [
                  "How will you manage the conclusion of your event and guest departures?",
                  "What farewell process will you create for departing guests?",
                  "How will you coordinate transportation and logistics for guest departures?",
                  "What take-away items or final touches will you provide for guests?",
                  "How will you ensure all guests have a positive final impression?"
                ],
                examples: [
                  "Gradual wind-down, final announcements, music volume adjustment, lights up gradually",
                  "Personal farewells from hosts, thank you station, farewell gifts or favors, final photos",
                  "Coat check efficiency, valet coordination, ride-share assistance, elderly guest transportation help",
                  "Favors, leftover cake, photo strips, thank you cards, small mementos related to event",
                  "Warm personal goodbyes, gratitude expression, positive energy maintenance, assistance as needed"
                ]
              },
              {
                title: "Breakdown and Cleanup Coordination",
                prompts: [
                  "What breakdown and cleanup process will you coordinate after the event?",
                  "How will you manage vendor equipment removal and final vendor coordination?",
                  "What personal items and decorations need to be collected and preserved?",
                  "How will you ensure the venue is properly cleaned and returned to original condition?",
                  "What timeline will you follow for complete event breakdown and cleanup?"
                ],
                examples: [
                  "Breakdown crew assignments, systematic area-by-area cleanup, vendor coordination for equipment removal",
                  "Vendor pickup scheduling, equipment inventory check, final vendor payments and paperwork",
                  "Personal decoration collection, meaningful item preservation, gift collection and organization",
                  "Venue walkthrough with coordinator, damage assessment, cleaning verification, final inspection",
                  "Start breakdown after last guests leave, complete within venue time limits, coordinate all departures"
                ]
              },
              {
                title: "Financial Reconciliation and Final Payments",
                prompts: [
                  "How will you handle final vendor payments and financial reconciliation?",
                  "What documentation will you collect for final billing and payment processing?",
                  "How will you handle any disputes or discrepancies in final vendor charges?",
                  "What expense tracking and record-keeping will you complete post-event?",
                  "How will you process tips, gratuities, and additional compensation for exceptional service?"
                ],
                examples: [
                  "Final invoices collection, payment processing within agreed terms, tip distribution to deserving staff",
                  "Receipts, final invoices, service confirmations, damage assessments, tip documentation",
                  "Reference original contracts, document disputes in writing, seek mediation if needed, maintain relationships",
                  "Expense categorization, budget vs. actual analysis, receipt organization, tax documentation",
                  "Cash tips for exceptional service, additional compensation for above-and-beyond performance, thank you notes"
                ]
              },
              {
                title: "Thank You and Follow-up Communications",
                prompts: [
                  "What thank you and follow-up communications will you send to guests?",
                  "How will you thank vendors and staff for their contributions to your event success?",
                  "What photo and memory sharing will you coordinate after the event?",
                  "How will you collect and respond to post-event feedback from guests and vendors?",
                  "What relationship maintenance will you do with key vendors and venue contacts?"
                ],
                examples: [
                  "Thank you notes to guests, photo sharing, memory collection, feedback requests",
                  "Vendor thank you notes, online reviews for excellent service, referrals to other clients, tip distribution",
                  "Photo collection from guests, professional photo sharing, social media coordination, memory book creation",
                  "Guest feedback surveys, vendor performance evaluation, venue relationship feedback, improvement identification",
                  "Vendor relationship maintenance, venue coordinator thanks, future event partnerships, referral relationships"
                ]
              }
            ]}
            tips={[
              "Plan your breakdown and cleanup process as carefully as you planned your setup",
              "Express genuine gratitude to vendors, staff, and volunteers who made your event successful",
              "Collect and share photos promptly while the event is still fresh in everyone's memory",
              "Complete final payments and paperwork promptly to maintain good vendor relationships",
              "Take time to reflect on your event success and document lessons learned for future planning"
            ]}
          />
        </TabsContent>

      </Tabs>
    </div>
  )
}