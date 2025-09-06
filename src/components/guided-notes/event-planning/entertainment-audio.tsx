"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function EntertainmentAudio() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Entertainment & Audio Visual</h1>
        <p className="text-muted-foreground">Plan your event entertainment and AV needs.</p>
      </div>

      <Tabs defaultValue="entertainment-planning" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="entertainment-planning" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Entertainment</span>
            <span className="sm:hidden">Entertainment</span>
          </TabsTrigger>
          <TabsTrigger value="audio-systems" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Audio Systems</span>
            <span className="sm:hidden">Audio</span>
          </TabsTrigger>
          <TabsTrigger value="visual-lighting" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Visual & Lighting</span>
            <span className="sm:hidden">Visual</span>
          </TabsTrigger>
          <TabsTrigger value="technical-coordination" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Technical Setup</span>
            <span className="sm:hidden">Tech</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="entertainment-planning">
          <GuidedNotePage
            title="Entertainment Selection & Planning"
            description="Choose and coordinate entertainment for your event"
            sections={[
              {
                title: "Entertainment Style and Selection",
                prompts: [
                  "What type of entertainment fits your event style and guest demographics?",
                  "How will entertainment complement your event timeline and activities?",
                  "What is your entertainment budget and how will you allocate it?",
                  "What entertainment options work best with your venue space and acoustics?",
                  "How will you balance background entertainment with interactive elements?"
                ],
                examples: [
                  "DJ for dancing, live band for atmosphere, acoustic performer for dinner, photo booth for interaction",
                  "Background music during cocktails/dinner, energetic music for dancing, special performances at key moments",
                  "DJ $800-2500, live band $2000-8000, specialty acts $500-3000, allocate 10-15% of total budget",
                  "Loud venues need powerful sound systems, intimate spaces suit acoustic performances",
                  "Subtle background music 70% of time, interactive entertainment 20%, performance entertainment 10%"
                ]
              },
              {
                title: "Music Programming and Playlist Development",
                prompts: [
                  "What music style and genres fit your event and guest preferences?",
                  "How will you create appropriate playlists for different parts of your event?",
                  "What special songs or musical moments do you want to feature?",
                  "How will you handle music requests and guest preferences during the event?",
                  "What music volume and energy levels are appropriate for different event phases?"
                ],
                examples: [
                  "Classical for ceremony, jazz for cocktails, pop/rock for dancing, acoustic for dinner",
                  "Arrival music: welcoming, dinner music: conversational volume, dancing music: high energy",
                  "First dance song, special dedications, cultural music, generational favorites",
                  "DJ takes requests, pre-approved request list, song request cards, interactive music choices",
                  "Dinner: 60-70 decibels (conversation friendly), dancing: 80-85 decibels (energizing but safe)"
                ]
              },
              {
                title: "Interactive Entertainment and Activities",
                prompts: [
                  "What interactive entertainment will engage your guests?",
                  "How will you encourage guest participation in entertainment activities?",
                  "What entertainment options work for different age groups at your event?",
                  "How will you coordinate entertainment timing with other event activities?",
                  "What backup entertainment plans do you have if your first choice doesn't work?"
                ],
                examples: [
                  "Photo booth with props, dance floor games, karaoke, trivia about guest of honor, group activities",
                  "Host enthusiasm, clear instructions, prizes for participation, peer pressure in fun way",
                  "Kids: simple games, adults: sophisticated activities, seniors: nostalgic music and comfortable seating",
                  "Entertainment during natural breaks in dining, coordinate with speech/toast timing",
                  "Playlist backup for live performers, alternative activities for weather issues, flexible timing"
                ]
              },
              {
                title: "Entertainment Logistics and Coordination",
                prompts: [
                  "What setup requirements do your entertainment choices have?",
                  "How will you coordinate entertainment with venue restrictions and neighbors?",
                  "What contracts and agreements do you need with entertainment providers?",
                  "How will you handle entertainment equipment and technical requirements?",
                  "What insurance and liability considerations come with your entertainment choices?"
                ],
                examples: [
                  "Stage space, electrical requirements, load-in access, setup time, storage needs",
                  "Noise ordinances, time restrictions, sound level limits, parking for entertainment equipment",
                  "Performance contract, cancellation policies, overtime rates, equipment responsibilities, repertoire requirements",
                  "Sound system, microphones, lighting, power requirements, backup equipment, technical support",
                  "Performer liability insurance, equipment coverage, venue policy compliance, safety protocols"
                ]
              }
            ]}
            tips={[
              "Choose entertainment that matches your event's energy level and guest demographics",
              "Plan music volume levels that allow conversation during dining and encourage dancing later",
              "Have backup entertainment options ready in case of cancellations or technical issues",
              "Coordinate entertainment setup and sound check times well before guests arrive",
              "Consider interactive elements that will get guests engaged and create memorable moments"
            ]}
          />
        </TabsContent>

        <TabsContent value="audio-systems">
          <GuidedNotePage
            title="Audio Systems & Sound Management"
            description="Plan your event's audio and sound system needs"
            sections={[
              {
                title: "Sound System Requirements Assessment",
                prompts: [
                  "What audio equipment do you need for your specific event and venue?",
                  "How will you determine appropriate sound levels for different areas and activities?",
                  "What microphone and amplification needs do you have for speeches or presentations?",
                  "How will your venue's acoustics affect your sound system choices?",
                  "What backup audio equipment should you have available?"
                ],
                examples: [
                  "DJ setup with speakers, wireless microphones for speeches, ceremony sound system, background music speakers",
                  "Different zones: quiet cocktail areas, moderate dinner areas, energetic dance floors",
                  "Wireless lapel mics for speakers, handheld mics for toasts, podium mic for presentations",
                  "Large rooms need powerful systems, intimate spaces risk sound bouncing, outdoor needs weather protection",
                  "Backup microphones, extra speakers, emergency sound source, battery-powered backups"
                ]
              },
              {
                title: "Audio Quality and Management",
                prompts: [
                  "What sound quality standards will you maintain throughout your event?",
                  "How will you manage sound levels to avoid noise complaints or hearing damage?",
                  "What sound mixing and adjustment capabilities do you need during the event?",
                  "How will you handle feedback, distortion, or other audio technical issues?",
                  "What acoustic treatments or adjustments might improve sound quality?"
                ],
                examples: [
                  "Clear speech intelligibility, music without distortion, appropriate bass levels, consistent volume",
                  "Use decibel meter, follow local noise ordinances, adjust for guest comfort, protect hearing",
                  "Sound engineer or trained operator, mixing board for multi-zone control, real-time adjustments",
                  "Proper microphone placement, equipment checks, trained technician on-site, backup systems ready",
                  "Fabric draping to reduce echo, speaker placement to minimize feedback, sound baffles if needed"
                ]
              },
              {
                title: "Microphone and Speech Audio",
                prompts: [
                  "What microphone setup will you use for speeches, toasts, and announcements?",
                  "How will you ensure clear audio for all guests during speaking portions?",
                  "What process will you use for testing microphones before the event?",
                  "How will you coordinate microphone handoffs during multiple speakers?",
                  "What backup plans do you have if microphone systems fail?"
                ],
                examples: [
                  "Wireless lapel mics for main speakers, handheld mics for toasts, podium mic for formal presentations",
                  "Strategic speaker placement, appropriate volume levels, clear sight lines, acoustic considerations",
                  "Sound check 1-2 hours before guests arrive, test all microphones, adjust levels, check batteries",
                  "Designated person manages microphone handoffs, speakers briefed on proper use, backup mics ready",
                  "Wired microphone backup, voice projection without mics, alternate speaker locations"
                ]
              },
              {
                title: "Music and Entertainment Audio",
                prompts: [
                  "How will you integrate music playback with your sound system?",
                  "What audio sources and connectivity options do you need?",
                  "How will you manage audio transitions between different entertainment segments?",
                  "What volume control and zoning capabilities are important for your event flow?",
                  "How will you handle requests for audio adjustments during the event?"
                ],
                examples: [
                  "DJ mixer integration, playlist streaming, live instrument amplification, multiple audio inputs",
                  "Bluetooth connectivity, auxiliary inputs, USB ports, streaming service access, backup audio sources",
                  "Smooth crossfades between songs, volume adjustments for speeches, seamless entertainment changes",
                  "Separate controls for dining vs dancing areas, zone-specific volume, activity-based audio levels",
                  "Designated audio manager, guest feedback system, real-time adjustment capabilities, volume guidelines"
                ]
              }
            ]}
            tips={[
              "Test all audio equipment thoroughly before guests arrive, including microphones and music systems",
              "Plan different audio zones with appropriate volume levels for dining, dancing, and conversation areas",
              "Have backup microphones and audio sources ready in case of technical failures",
              "Consider hiring a professional sound technician for complex setups or important events",
              "Respect noise ordinances and be considerate of neighboring properties when setting volume levels"
            ]}
          />
        </TabsContent>

        <TabsContent value="visual-lighting">
          <GuidedNotePage
            title="Visual Effects & Lighting Design"
            description="Plan lighting and visual elements for your event"
            sections={[
              {
                title: "Lighting Design and Ambiance",
                prompts: [
                  "What lighting atmosphere do you want to create for different parts of your event?",
                  "How will you use lighting to enhance your event's theme and decor?",
                  "What type of lighting equipment and setup do you need?",
                  "How will lighting levels change throughout your event timeline?",
                  "What natural light considerations affect your lighting plan?"
                ],
                examples: [
                  "Warm romantic lighting for dinner, bright cheerful lighting for cocktails, dynamic lighting for dancing",
                  "Color-themed lighting, spotlights on key areas, dramatic lighting for special moments",
                  "String lights, uplighting, spotlights, dance floor lighting, candles for ambiance",
                  "Bright for arrival/cocktails, dimmed for dinner, party lighting for dancing, exit lighting",
                  "Daytime events need less artificial lighting, evening events require full lighting design"
                ]
              },
              {
                title: "Specialty Lighting and Effects",
                prompts: [
                  "What special lighting effects will enhance key moments of your event?",
                  "How will you highlight important areas like the dance floor, head table, or stage?",
                  "What color schemes and lighting themes fit your overall event design?",
                  "How will you use lighting to guide guest flow and highlight important areas?",
                  "What safety and emergency lighting considerations do you need to address?"
                ],
                examples: [
                  "First dance spotlight, entrance uplighting, cake table highlighting, toast moment lighting",
                  "Pin spotlights on speakers, wash lighting for dance floor, accent lighting for focal points",
                  "Wedding whites and golds, corporate brand colors, birthday party bright colors, elegant jewel tones",
                  "Entrance lighting draws guests in, pathway lighting guides flow, exit lighting ensures safety",
                  "Emergency lighting systems, well-lit pathways, bathroom lighting, exit lighting requirements"
                ]
              },
              {
                title: "Visual Displays and Presentations",
                prompts: [
                  "What visual displays or screens do you need for presentations or entertainment?",
                  "How will you ensure good visibility for all guests during visual presentations?",
                  "What projection or display equipment fits your venue and content needs?",
                  "How will you integrate visual displays with your overall event design?",
                  "What backup plans do you have for visual display technical failures?"
                ],
                examples: [
                  "Photo slideshow screens, presentation projectors, video displays, live event streaming",
                  "Multiple screens for large venues, appropriate screen sizes, good sight lines from all seats",
                  "LCD projectors, LED screens, TV displays, laptop connectivity, wireless presentation options",
                  "Screens blend with decor, appropriate mounting, cord management, lighting coordination",
                  "Backup projectors, alternative display methods, printed backup materials, technical support"
                ]
              },
              {
                title: "Photography and Video Lighting",
                prompts: [
                  "How will your lighting design support photography and videography?",
                  "What lighting adjustments are needed for different photo opportunities?",
                  "How will you balance ambient lighting with photography lighting needs?",
                  "What coordination is needed between lighting and photography teams?",
                  "How will lighting affect the quality of candid photos throughout the event?"
                ],
                examples: [
                  "Avoid harsh shadows on faces, provide adequate light levels for photos, minimize color temperature conflicts",
                  "Brighter lighting for group photos, romantic lighting for couple photos, dance floor lighting for action shots",
                  "Consistent color temperature, avoid fluorescent lighting, supplement natural light as needed",
                  "Lighting adjustments for photo sessions, photographer input on lighting design, coordination timing",
                  "Even lighting reduces harsh shadows, good ambient light improves all photos, avoid backlighting guests"
                ]
              }
            ]}
            tips={[
              "Plan lighting that can be adjusted throughout the event to match different activities and moods",
              "Use warm lighting tones to create a welcoming and flattering atmosphere for guests",
              "Consider how lighting will affect photography and videography quality throughout your event",
              "Test all lighting effects and transitions before guests arrive to ensure smooth operation",
              "Have backup lighting options ready in case of equipment failure or unexpected venue conditions"
            ]}
          />
        </TabsContent>

        <TabsContent value="technical-coordination">
          <GuidedNotePage
            title="Technical Setup & Coordination"
            description="Coordinate all technical aspects of your event"
            sections={[
              {
                title: "Technical Requirements Planning",
                prompts: [
                  "What are all the technical requirements for your event setup?",
                  "How will you coordinate power, internet, and utility needs?",
                  "What technical timeline do you need for setup and testing?",
                  "Who will manage technical coordination and troubleshooting?",
                  "What venue technical restrictions or requirements affect your plans?"
                ],
                examples: [
                  "Sound system, lighting, projection, Wi-Fi, charging stations, live streaming setup",
                  "Electrical load calculations, internet bandwidth needs, backup power sources, utility access",
                  "Setup 3-4 hours early, sound check 2 hours before, final tech rehearsal 1 hour before guests",
                  "Designated technical coordinator, vendor liaisons, venue tech support contact",
                  "Power limitations, noise restrictions, equipment restrictions, setup time limits, security requirements"
                ]
              },
              {
                title: "Equipment Setup and Testing",
                prompts: [
                  "What testing procedures will you follow for all technical equipment?",
                  "How will you coordinate equipment setup between different vendors?",
                  "What quality control checks will you perform before the event begins?",
                  "How will you handle equipment conflicts or interference issues?",
                  "What documentation will you maintain for technical setup?"
                ],
                examples: [
                  "Complete system tests for audio, lighting, video; backup equipment testing; safety checks",
                  "Coordinate setup timing to avoid conflicts, shared power needs, cable management, space allocation",
                  "Sound levels, lighting effects, visual displays, connectivity tests, emergency procedures",
                  "Frequency coordination for wireless mics, power distribution, cable routing, interference troubleshooting",
                  "Equipment inventory, setup diagrams, contact lists, troubleshooting guides, backup procedures"
                ]
              },
              {
                title: "Technical Support During Event",
                prompts: [
                  "Who will provide technical support and monitoring during your event?",
                  "What procedures will you follow for handling technical issues during the event?",
                  "How will you communicate technical needs and changes during the event?",
                  "What backup systems and procedures will you have ready?",
                  "How will you handle emergency technical situations?"
                ],
                examples: [
                  "On-site technical coordinator, vendor support personnel, venue tech staff, emergency contacts",
                  "Quick problem identification, backup system activation, minimal guest disruption, professional problem-solving",
                  "Wireless communication with tech team, discrete hand signals, designated tech coordinator",
                  "Backup equipment ready, alternative solutions prepared, emergency contact lists, vendor support",
                  "Immediate safety assessment, guest safety priority, backup systems activation, professional help if needed"
                ]
              },
              {
                title: "Integration and Coordination",
                prompts: [
                  "How will you ensure all technical elements work together seamlessly?",
                  "What coordination is needed between entertainment, AV, and other technical vendors?",
                  "How will you manage technical transitions during different event phases?",
                  "What timing coordination is critical for technical success?",
                  "How will you evaluate technical performance and learn from the experience?"
                ],
                examples: [
                  "Integrated testing of all systems, compatibility checks, unified control systems, coordinated timing",
                  "DJ coordination with lighting, presentation equipment with sound system, streaming with all elements",
                  "Smooth audio transitions, lighting changes with activities, equipment adjustments for different phases",
                  "Setup completion before guests arrive, sound check timing, lighting transitions, equipment shutdown",
                  "Post-event technical review, vendor performance assessment, documentation for future events, lessons learned"
                ]
              }
            ]}
            tips={[
              "Plan your technical setup timeline to allow plenty of time for testing and troubleshooting",
              "Designate one person to coordinate all technical vendors and handle issues during the event",
              "Always have backup equipment and alternative solutions ready for critical technical elements",
              "Test all technical systems thoroughly before guests arrive, including backup systems",
              "Keep technical coordination as invisible as possible to guests while maintaining professional standards"
            ]}
          />
        </TabsContent>

      </Tabs>
    </div>
  )
}