"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function GuestManagement() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Guest Management & Experience</h1>
        <p className="text-muted-foreground">Plan and manage your guest list and guest experience.</p>
      </div>

      <Tabs defaultValue="guest-list" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="guest-list" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Guest List</span>
            <span className="sm:hidden">List</span>
          </TabsTrigger>
          <TabsTrigger value="invitations" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Invitations</span>
            <span className="sm:hidden">Invites</span>
          </TabsTrigger>
          <TabsTrigger value="rsvp-tracking" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">RSVP Tracking</span>
            <span className="sm:hidden">RSVP</span>
          </TabsTrigger>
          <TabsTrigger value="guest-experience" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Guest Experience</span>
            <span className="sm:hidden">Experience</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="guest-list">
          <GuidedNotePage
            title="Guest List Planning & Organization"
            description="Create and organize your comprehensive guest list"
            sections={[
              {
                title: "Guest List Development",
                prompts: [
                  "Who are the must-have guests for your event?",
                  "What is your target guest count and how does it fit your budget/venue?",
                  "How will you handle plus-ones and children at your event?",
                  "What categories will you use to organize your guest list?",
                  "How will you handle difficult decisions about who to invite?"
                ],
                examples: [
                  "Immediate family, closest friends, key colleagues, important mentors or community members",
                  "100 guests at $75/person = $7,500 catering budget, venue must accommodate this size",
                  "Married couples get plus-ones, live-in partners invited, children welcome vs adults-only decision",
                  "Family, friends, work colleagues, bride's side/groom's side, local vs out-of-town",
                  "Set clear criteria beforehand, be consistent with rules, consider relationship reciprocity"
                ]
              },
              {
                title: "Guest Information Management",
                prompts: [
                  "What information will you collect and track for each guest?",
                  "How will you organize guest contact information and addresses?",
                  "What dietary restrictions and special needs should you track?",
                  "How will you handle guest information updates and changes?",
                  "What system will you use to manage all guest data?"
                ],
                examples: [
                  "Full name, address, phone, email, plus-one info, relationship to hosts, dietary restrictions",
                  "Spreadsheet with all contact details, verify addresses before sending invitations",
                  "Vegetarian, vegan, gluten-free, nut allergies, kosher, halal, mobility accommodations",
                  "Regular address updates, contact changes, plus-one additions/changes, dietary updates",
                  "Google Sheets, wedding planning apps, CRM systems, or specialized guest list software"
                ]
              },
              {
                title: "Guest List Categories and Prioritization",
                prompts: [
                  "How will you categorize guests by importance or relationship?",
                  "What A-list vs B-list strategy will you use if space is limited?",
                  "How will you handle family politics and guest list expectations?",
                  "What criteria will determine invitation priority if you need to cut the list?",
                  "How will you manage different social groups and potential conflicts?"
                ],
                examples: [
                  "A-list: immediate family, wedding party, closest friends; B-list: extended family, acquaintances",
                  "Invite A-list first, send B-list invitations as A-list declines (6-8 weeks before event)",
                  "Set ground rules with families about guest limits, be diplomatic but firm about final decisions",
                  "Prioritize by relationship closeness, recent contact, reciprocal invitations, geographic proximity",
                  "Strategic seating to separate conflicting parties, warn friendly guests about potential issues"
                ]
              },
              {
                title: "Geographic and Logistical Considerations",
                prompts: [
                  "How many out-of-town guests will you have and what support do they need?",
                  "What accommodation recommendations will you provide for visiting guests?",
                  "How will you help out-of-town guests with local information?",
                  "What transportation considerations do you have for different guest groups?",
                  "How will you coordinate with guests who have mobility or accessibility needs?"
                ],
                examples: [
                  "30% out-of-town guests need hotel blocks, airport pickup info, local activity recommendations",
                  "Block rooms at 2-3 hotels in different price ranges, provide booking deadlines and codes",
                  "Create welcome packet with local maps, restaurant recommendations, tourist attractions, weather tips",
                  "Elderly guests may need rides, coordinate carpooling for local guests, provide Uber codes",
                  "Wheelchair accessibility, hearing accommodations, mobility assistance, accessible parking spaces"
                ]
              }
            ]}
            tips={[
              "Start your guest list early and expect it to evolve throughout the planning process",
              "Keep detailed records of guest information including dietary restrictions and special needs",
              "Set guest list limits early and stick to them to stay within budget and venue capacity",
              "Consider creating guest categories to help prioritize invitations if space is limited",
              "Regularly update guest information and confirm details before sending invitations"
            ]}
          />
        </TabsContent>

        <TabsContent value="invitations">
          <GuidedNotePage
            title="Invitations & Communication Strategy"
            description="Create and send effective invitations to your guests"
            sections={[
              {
                title: "Invitation Design and Content",
                prompts: [
                  "What style and tone do you want for your event invitations?",
                  "What essential information must be included on your invitations?",
                  "How will you handle different invitation formats (digital vs paper)?",
                  "What special considerations do you have for your specific event type?",
                  "How will you ensure invitations match your event's overall theme and style?"
                ],
                examples: [
                  "Formal elegant, casual fun, modern minimalist, vintage classic, themed to match event style",
                  "Date, time, venue address, RSVP deadline, dress code, parking info, website/contact info",
                  "Paper for formal events, digital for casual, hybrid approach with save-the-dates vs invitations",
                  "Corporate events need agenda info, birthday parties need gift preferences, weddings need ceremony vs reception details",
                  "Colors, fonts, imagery should align with event decor, venue style, and overall vision"
                ]
              },
              {
                title: "Invitation Timeline and Distribution",
                prompts: [
                  "What timeline will you follow for sending invitations?",
                  "How will you handle save-the-dates vs formal invitations?",
                  "What addressing and mailing process will you use?",
                  "How will you track invitation delivery and responses?",
                  "What follow-up process will you use for non-responders?"
                ],
                examples: [
                  "Save-the-dates 3-6 months early, formal invitations 6-8 weeks before event",
                  "Save-the-dates for destination/holiday events, formal invites with all details closer to date",
                  "Hand-address for formal touch, use calligraphy, print labels, or hire addressing service",
                  "Spreadsheet tracking sent date, delivery confirmation, RSVP received date, response details",
                  "Polite follow-up calls/texts 1-2 weeks before RSVP deadline, personal outreach for VIPs"
                ]
              },
              {
                title: "Digital Communication Strategy",
                prompts: [
                  "How will you use digital tools to supplement paper invitations?",
                  "What event website or online presence will you create?",
                  "How will you handle social media and event promotion?",
                  "What digital RSVP and guest management tools will you use?",
                  "How will you communicate updates and changes to guests digitally?"
                ],
                examples: [
                  "Event website with details, digital RSVP system, email updates, social media event pages",
                  "Wedding websites, birthday party pages, corporate event portals with agenda and logistics",
                  "Private Facebook events, Instagram stories, LinkedIn for professional events, control photo sharing",
                  "Online RSVP forms, guest management apps, digital seating charts, meal choice collection",
                  "Email lists for updates, text messages for urgent changes, website updates, app notifications"
                ]
              },
              {
                title: "Special Invitation Considerations",
                prompts: [
                  "How will you handle VIP guests and special invitations?",
                  "What accommodations will you make for guests with accessibility needs?",
                  "How will you communicate dietary options and restrictions requests?",
                  "What cultural or religious considerations affect your invitation approach?",
                  "How will you handle plus-ones and family invitation complexities?"
                ],
                examples: [
                  "Personal phone calls for VIPs, hand-delivered invitations, special attention to key relationships",
                  "Large print invitations, accessible venue information, contact person for assistance",
                  "Menu options listed, dietary restriction request forms, contact info for special needs",
                  "Appropriate languages, cultural customs, religious dietary laws, holiday scheduling considerations",
                  "Clear plus-one policies, family addressing etiquette, children welcome vs adults-only communication"
                ]
              }
            ]}
            tips={[
              "Send invitations early enough to give guests time to plan but not so early they forget",
              "Include all essential information on the invitation to reduce follow-up questions",
              "Create a consistent visual style that matches your event theme and venue",
              "Track invitation responses systematically to follow up with non-responders",
              "Consider both digital and paper elements to reach all guests effectively"
            ]}
          />
        </TabsContent>

        <TabsContent value="rsvp-tracking">
          <GuidedNotePage
            title="RSVP Management & Response Tracking"
            description="Efficiently track and manage guest responses"
            sections={[
              {
                title: "RSVP System Setup",
                prompts: [
                  "What RSVP method will work best for your guest demographics?",
                  "What information will you collect with each RSVP response?",
                  "How will you handle different response methods (online, phone, mail)?",
                  "What RSVP deadline will you set and how will you enforce it?",
                  "What backup contact methods will you use for non-responders?"
                ],
                examples: [
                  "Online forms for tech-savvy guests, phone calls for older relatives, mail-in cards for formal events",
                  "Guest names, attendance yes/no, meal choices, dietary restrictions, song requests, special needs",
                  "Centralized tracking system that accepts responses from multiple channels",
                  "Set deadline 2-3 weeks before event, follow up 1 week after deadline with non-responders",
                  "Phone numbers, email addresses, social media contact, mutual friends who can help reach them"
                ]
              },
              {
                title: "Response Tracking and Management",
                prompts: [
                  "What system will you use to track all RSVP responses?",
                  "How will you handle last-minute changes and updates?",
                  "What process will you use for following up on missing responses?",
                  "How will you communicate RSVP information to vendors?",
                  "What contingency planning will you do for guest count uncertainty?"
                ],
                examples: [
                  "Spreadsheet with guest names, response status, number attending, meal choices, special notes",
                  "Update tracking system immediately, communicate changes to caterer/venue, adjust seating as needed",
                  "Friendly phone calls/texts, enlist mutual friends, set firm deadlines with consequences",
                  "Provide final headcount to caterer 1 week before, update venue with final numbers 3 days before",
                  "Plan for 5-10% no-shows, have extra meals available, flexible seating arrangements"
                ]
              },
              {
                title: "Guest Count Finalization",
                prompts: [
                  "How will you determine your final guest count for vendor coordination?",
                  "What buffer should you build in for last-minute changes?",
                  "How will you handle guests who don't RSVP but show up anyway?",
                  "What seating and meal planning adjustments will you make based on responses?",
                  "How will you communicate final numbers to all relevant vendors?"
                ],
                examples: [
                  "Final count based on confirmed RSVPs plus estimated show rate for non-responders",
                  "Add 2-3 extra meals, keep some flexible seating options, have backup plan for overages",
                  "Graciously accommodate if possible, have contact person handle diplomatically",
                  "Adjust table arrangements, confirm meal counts with caterer, update seating chart",
                  "Email final counts to caterer, venue, rental company with deadline confirmations"
                ]
              },
              {
                title: "Special Response Management",
                prompts: [
                  "How will you handle dietary restrictions and special meal requests?",
                  "What process will you use for managing plus-one changes and additions?",
                  "How will you accommodate last-minute accessibility needs?",
                  "What will you do about guests who want to bring unexpected additional people?",
                  "How will you handle conflicting or confusing RSVP responses?"
                ],
                examples: [
                  "Collect detailed dietary info, confirm with caterer, label special meals, have emergency backup",
                  "Track plus-one names, communicate changes to caterer for meal count, update seating charts",
                  "Work with venue for accessibility, arrange transportation if needed, modify seating/tables",
                  "Set clear policies about additional guests, communicate limitations diplomatically but firmly",
                  "Follow up for clarification, confirm details in writing, maintain detailed notes"
                ]
              }
            ]}
            tips={[
              "Set up your RSVP tracking system before sending invitations to capture responses immediately",
              "Follow up consistently with non-responders rather than waiting until the last minute",
              "Build buffer into your final guest count to accommodate last-minute changes",
              "Communicate final numbers to vendors with confidence deadlines to avoid confusion",
              "Keep detailed records of special requests and dietary needs to ensure nothing is forgotten"
            ]}
          />
        </TabsContent>

        <TabsContent value="guest-experience">
          <GuidedNotePage
            title="Guest Experience & Hospitality Planning"
            description="Create an exceptional experience for all your guests"
            sections={[
              {
                title: "Arrival and Welcome Experience",
                prompts: [
                  "How will you welcome guests when they arrive at your event?",
                  "What arrival logistics do you need to plan for smooth guest flow?",
                  "How will you handle guest check-in and name tags if needed?",
                  "What first impressions do you want to create for arriving guests?",
                  "How will you assist guests who arrive early or have trouble finding the venue?"
                ],
                examples: [
                  "Greeting station with host/hostess, welcome drinks, guest book signing, directional signage",
                  "Valet parking, coat check, clear entrance signage, guest flow management, restroom locations",
                  "Pre-printed name tags, check-in table with guest list, welcome packets, table assignment cards",
                  "Beautiful entrance decor, pleasant music, friendly staff, clean and organized space",
                  "Early arrival lounge area, venue staff trained to give directions, backup contact person"
                ]
              },
              {
                title: "Comfort and Accessibility Planning",
                prompts: [
                  "What comfort amenities will you provide for guest enjoyment?",
                  "How will you accommodate guests with different accessibility needs?",
                  "What temperature, seating, and physical comfort considerations are important?",
                  "How will you handle guests who may need special assistance during the event?",
                  "What bathroom and hygiene facilities planning is needed?"
                ],
                examples: [
                  "Comfortable seating areas, water stations, charging stations for phones, coat storage",
                  "Wheelchair accessible routes, reserved accessible parking, hearing loops, large print materials",
                  "Climate control planning, variety of seating options, good lighting, noise level management",
                  "Designated helper for elderly/disabled guests, medical emergency procedures, mobility assistance",
                  "Adequate restroom facilities, cleanliness maintenance, baby changing stations, hygiene supplies"
                ]
              },
              {
                title: "Entertainment and Engagement",
                prompts: [
                  "How will you keep guests engaged and entertained throughout the event?",
                  "What interactive elements or activities will enhance the guest experience?",
                  "How will you handle different age groups and entertainment preferences?",
                  "What networking or social interaction opportunities will you create?",
                  "How will you manage the event flow to maintain guest interest?"
                ],
                examples: [
                  "Live music, DJ, games, photo booth, dance floor, special performances or speakers",
                  "Guest book alternatives, trivia about honoree, networking activities, interactive stations",
                  "Kid-friendly activities, adult conversation areas, multi-generational games, varied music",
                  "Name tags with conversation starters, structured mingling time, introductions, icebreakers",
                  "Smooth transitions between activities, timeline that builds energy, surprise elements"
                ]
              },
              {
                title: "Departure and Follow-up Experience",
                prompts: [
                  "How will you handle guest departure and thank them for attending?",
                  "What take-away items or favors will you provide for guests?",
                  "How will you manage coat check, lost items, and end-of-event logistics?",
                  "What transportation assistance will guests need when leaving?",
                  "How will you follow up with guests after the event?"
                ],
                examples: [
                  "Thank you station at exit, personal goodbyes from hosts, departure gifts or favors",
                  "Customized favors, photo strips, leftover cake, small mementos related to event theme",
                  "Organized coat retrieval, lost and found station, staff to help with logistics",
                  "Uber/Lyft coordination, designated driver arrangements, late-night transportation options",
                  "Thank you notes/emails, photo sharing, social media tags, feedback requests"
                ]
              }
            ]}
            tips={[
              "Think through the entire guest journey from arrival to departure when planning the experience",
              "Plan for different guest needs including accessibility, comfort, and entertainment preferences",
              "Create memorable moments and personal touches that guests will remember long after the event",
              "Have staff or volunteers assigned to help with guest services and handle any issues that arise",
              "Follow up with guests after the event to thank them and maintain relationships"
            ]}
          />
        </TabsContent>

      </Tabs>
    </div>
  )
}