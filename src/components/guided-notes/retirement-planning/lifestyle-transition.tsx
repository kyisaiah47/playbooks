"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function LifestyleTransition() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Retirement Lifestyle Transition</h1>
        <p className="text-muted-foreground">Plan for the personal and lifestyle changes that come with retirement.</p>
      </div>

      <Tabs defaultValue="retirement-adjustment" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="retirement-adjustment" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Retirement Adjustment</span>
            <span className="sm:hidden">Adjustment</span>
          </TabsTrigger>
          <TabsTrigger value="housing-decisions" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Housing Decisions</span>
            <span className="sm:hidden">Housing</span>
          </TabsTrigger>
          <TabsTrigger value="health-wellness" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Health & Wellness</span>
            <span className="sm:hidden">Health</span>
          </TabsTrigger>
          <TabsTrigger value="relationships-legacy" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Relationships & Legacy</span>
            <span className="sm:hidden">Legacy</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="retirement-adjustment">
          <GuidedNotePage
            title="Retirement Lifestyle Adjustment"
            description="Navigate the personal and emotional transition to retirement"
            sections={[
              {
                title: "Identity & Purpose in Retirement",
                prompts: [
                  "How do you define yourself beyond your career identity?",
                  "What will give your life meaning and purpose in retirement?",
                  "How will you structure your days without work schedules?",
                  "What new roles or responsibilities do you want to take on?",
                  "How will you maintain intellectual stimulation and challenge?"
                ],
                examples: [
                  "Parent, grandparent, community member, volunteer, learner, creator",
                  "Volunteering, mentoring, creative pursuits, family involvement, lifelong learning",
                  "Morning routines, scheduled activities, project deadlines, social commitments",
                  "Board service, coaching, teaching, consulting, caregiving, activism",
                  "Reading, courses, puzzles, learning new skills, staying current with interests"
                ]
              },
              {
                title: "Social Connection & Relationships",
                prompts: [
                  "How will you maintain and build social connections in retirement?",
                  "What activities will help you meet new people with similar interests?",
                  "How will your relationships with former colleagues evolve?",
                  "What role will you play in your family and community?",
                  "How will you handle the social isolation that some retirees experience?"
                ],
                examples: [
                  "Join clubs, volunteer organizations, religious groups, hobby communities",
                  "Classes, volunteering, sports leagues, travel groups, interest-based clubs",
                  "Stay in touch selectively, attend reunions, maintain some professional connections",
                  "Active grandparent, community volunteer, family historian, mentor",
                  "Proactively schedule social activities, join groups, maintain regular commitments"
                ]
              },
              {
                title: "Time Management & Structure",
                prompts: [
                  "How will you create structure and routine in retirement?",
                  "What balance do you want between scheduled and unscheduled time?",
                  "How will you stay productive and avoid boredom?",
                  "What projects or goals will provide direction in retirement?",
                  "How will you handle the loss of work-driven deadlines and urgency?"
                ],
                examples: [
                  "Morning routines, weekly commitments, seasonal activities, annual goals",
                  "Some structured commitments balanced with flexibility for spontaneous activities",
                  "Volunteer work, hobbies, learning projects, home improvements, travel",
                  "Writing memoirs, organizing photos, learning languages, fitness goals",
                  "Create self-imposed deadlines, join groups with commitments, set personal goals"
                ]
              },
              {
                title: "Phased Retirement Transition",
                prompts: [
                  "Should you transition gradually into full retirement?",
                  "What part-time work or consulting opportunities interest you?",
                  "How can you test retirement lifestyle while still working?",
                  "What bridge activities can help you adjust to retirement?",
                  "How will you know when you're ready for full retirement?"
                ],
                examples: [
                  "Reduce hours, work seasonally, consultant role, different type of work",
                  "Leverage current expertise, teaching, project-based work, seasonal employment",
                  "Take extended vacations, practice retirement hobbies, volunteer regularly",
                  "Volunteering, part-time work, extended travel, caring for grandchildren",
                  "Feel fulfilled without work identity, excited about retirement activities"
                ]
              }
            ]}
            tips={[
              "Start developing retirement interests and activities while still working",
              "Consider a gradual transition rather than abrupt retirement",
              "Build social connections outside of work before you retire",
              "Create structure and routine to replace the framework that work provided",
              "Be patient with the adjustment process - it often takes 1-2 years to fully adapt"
            ]}
          />
        </TabsContent>

        <TabsContent value="housing-decisions">
          <GuidedNotePage
            title="Retirement Housing Decisions"
            description="Evaluate housing options and decisions for your retirement years"
            sections={[
              {
                title: "Age-in-Place vs. Relocate Decision",
                prompts: [
                  "Do you want to stay in your current home throughout retirement?",
                  "What modifications would make your current home more retirement-friendly?",
                  "What are the pros and cons of relocating in retirement?",
                  "How important is proximity to family members?",
                  "What climate and geographic preferences do you have for retirement?"
                ],
                examples: [
                  "Stay for familiarity and community ties vs. move for better lifestyle/costs",
                  "Accessibility features, main floor bedroom, grab bars, ramps, better lighting",
                  "Lower costs vs. losing community connections, better weather vs. distance from family",
                  "Near children/grandchildren for support and involvement vs. independence",
                  "Warmer climate, four seasons, lower cost areas, cultural amenities"
                ]
              },
              {
                title: "Downsizing Considerations",
                prompts: [
                  "Should you downsize your home in retirement?",
                  "What are the financial benefits and costs of downsizing?",
                  "How will you decide what possessions to keep, donate, or sell?",
                  "What type and size of home would suit your retirement lifestyle?",
                  "When is the optimal time to downsize - before or after retirement?"
                ],
                examples: [
                  "Smaller home for less maintenance, or keep current home for space/familiarity",
                  "Lower mortgage, taxes, utilities vs. moving costs, capital gains, emotional costs",
                  "Keep meaningful items, give family heirlooms to children, sell/donate excess",
                  "Condo, smaller single-family, active adult community, continuing care community",
                  "Before retirement while still earning vs. after when settled into retirement routine"
                ]
              },
              {
                title: "Housing Costs & Affordability",
                prompts: [
                  "How will housing costs fit into your retirement budget?",
                  "Should you pay off your mortgage before retirement?",
                  "What ongoing housing expenses should you plan for?",
                  "How can you reduce housing costs in retirement?",
                  "Should you consider alternative housing arrangements?"
                ],
                examples: [
                  "Aim for housing costs under 30% of retirement income including all expenses",
                  "Mortgage-free retirement provides security vs. investment opportunity cost",
                  "Property taxes, insurance, maintenance, utilities, HOA fees, repairs",
                  "Downsize, relocate to lower-cost area, rent instead of own, house sharing",
                  "House sharing, accessory dwelling unit, moving closer to family"
                ]
              },
              {
                title: "Future Care & Accessibility Planning",
                prompts: [
                  "How will your housing needs change as you age?",
                  "What accessibility features should you consider now or in the future?",
                  "Should you consider continuing care retirement communities?",
                  "How will you handle home maintenance as you age?",
                  "What proximity to healthcare services do you need?"
                ],
                examples: [
                  "Single-floor living, fewer stairs, closer to services, easier maintenance",
                  "Wider doorways, accessible bathrooms, ramps, good lighting, lever handles",
                  "CCRC provides housing progression from independent to assisted to skilled care",
                  "Hire services, move to low-maintenance housing, rely on family/community help",
                  "Near hospitals, specialists, pharmacies, public transportation"
                ]
              }
            ]}
            tips={[
              "Consider both current retirement needs and future aging needs when making housing decisions",
              "Factor in all housing costs, not just mortgage, when evaluating affordability",
              "Test potential retirement locations by spending extended time there first",
              "Make accessibility improvements gradually while you can still enjoy the benefits",
              "Don't make hasty housing decisions in early retirement - wait until you've adjusted"
            ]}
          />
        </TabsContent>

        <TabsContent value="health-wellness">
          <GuidedNotePage
            title="Health & Wellness in Retirement"
            description="Maintain and improve your physical and mental health throughout retirement"
            sections={[
              {
                title: "Physical Health & Fitness",
                prompts: [
                  "What fitness goals do you have for retirement?",
                  "How will you maintain or improve your physical activity level?",
                  "What health screenings and preventive care should you prioritize?",
                  "How will you adapt your exercise routine as you age?",
                  "What role will nutrition play in your retirement health strategy?"
                ],
                examples: [
                  "Stay active, maintain independence, prevent chronic conditions, enjoy activities",
                  "Regular exercise routine, walking, swimming, strength training, flexibility work",
                  "Annual physicals, cancer screenings, eye exams, dental care, vaccinations",
                  "Low-impact activities, balance training, strength training, adapt for limitations",
                  "Healthy diet, weight management, limit processed foods, stay hydrated"
                ]
              },
              {
                title: "Mental Health & Cognitive Wellness",
                prompts: [
                  "How will you maintain good mental health in retirement?",
                  "What activities will keep you mentally stimulated and engaged?",
                  "How will you handle retirement-related depression or anxiety?",
                  "What stress management techniques will you use?",
                  "How will you maintain a sense of purpose and meaning?"
                ],
                examples: [
                  "Stay socially connected, maintain routines, seek help when needed",
                  "Reading, puzzles, learning new skills, creative activities, volunteering",
                  "Professional counseling, support groups, medication if needed, lifestyle changes",
                  "Exercise, meditation, hobbies, time in nature, adequate sleep",
                  "Volunteering, mentoring, creative pursuits, family involvement, spiritual practices"
                ]
              },
              {
                title: "Healthcare Management",
                prompts: [
                  "How will you coordinate your healthcare in retirement?",
                  "What relationship do you want with your healthcare providers?",
                  "How will you stay informed about your health conditions and treatments?",
                  "What role will technology play in your healthcare management?",
                  "How will you prepare for potential health emergencies?"
                ],
                examples: [
                  "Primary care physician as quarterback, specialists as needed, regular communication",
                  "Partners in care, informed decision-making, second opinions for major issues",
                  "Keep health records, research conditions, ask questions, understand medications",
                  "Health apps, telemedicine, medication reminders, fitness tracking",
                  "Emergency contacts, medical information cards, advance directives, hospital preferences"
                ]
              },
              {
                title: "Aging Gracefully Strategies",
                prompts: [
                  "How do you want to approach the aging process?",
                  "What modifications will help you maintain independence?",
                  "How will you stay connected to younger generations?",
                  "What attitudes and mindsets will serve you well in aging?",
                  "How will you handle the loss of friends and family members?"
                ],
                examples: [
                  "Accept changes while staying as active as possible, focus on what you can control",
                  "Home modifications, technology aids, transportation alternatives, support services",
                  "Mentoring, teaching, intergenerational activities, learning from younger people",
                  "Gratitude, resilience, adaptability, humor, continued learning and growth",
                  "Grief counseling, support groups, memorial activities, creating new connections"
                ]
              }
            ]}
            tips={[
              "Invest in your health now - it's your most important retirement asset",
              "Stay physically active throughout retirement to maintain independence longer",
              "Maintain social connections and mental stimulation to support cognitive health",
              "Develop good relationships with healthcare providers before you need them",
              "Focus on healthy habits and preventive care rather than just treating problems"
            ]}
          />
        </TabsContent>

        <TabsContent value="relationships-legacy">
          <GuidedNotePage
            title="Relationships & Legacy Building"
            description="Nurture relationships and create a meaningful legacy in retirement"
            sections={[
              {
                title: "Family Relationships in Retirement",
                prompts: [
                  "How do you want your relationships with adult children to evolve?",
                  "What role do you want to play as a grandparent?",
                  "How will you balance independence with family involvement?",
                  "What boundaries are important in your family relationships?",
                  "How will you handle potential caregiving responsibilities for aging parents or spouse?"
                ],
                examples: [
                  "Advisor when asked, supportive but not intrusive, maintain adult-to-adult relationships",
                  "Active involvement, occasional babysitting, teaching skills, creating memories",
                  "Stay connected but maintain your own interests and identity",
                  "Financial boundaries, advice-giving limits, respect for independence",
                  "Plan for care needs, share responsibilities with siblings, consider professional help"
                ]
              },
              {
                title: "Creating Personal Legacy",
                prompts: [
                  "What legacy do you want to leave for your family and community?",
                  "How will you preserve and share your life stories and family history?",
                  "What values and life lessons do you want to pass down?",
                  "Should you write memoirs or create family documentation?",
                  "What charitable or community legacy do you want to create?"
                ],
                examples: [
                  "Values, stories, traditions, financial security, community contributions",
                  "Photo albums, story recordings, family trees, recipe collections, letters to grandchildren",
                  "Work ethic, kindness, perseverance, education importance, family loyalty",
                  "Autobiography, family cookbook, photo books, video recordings, interview projects",
                  "Scholarship funds, community gardens, mentoring programs, volunteer leadership"
                ]
              },
              {
                title: "Community Engagement & Giving Back",
                prompts: [
                  "How do you want to give back to your community in retirement?",
                  "What volunteer work aligns with your values and interests?",
                  "Should you serve on boards or in leadership positions?",
                  "How will you use your professional skills for community benefit?",
                  "What mentoring or teaching opportunities interest you?"
                ],
                examples: [
                  "Volunteering, teaching, mentoring, community boards, charitable giving",
                  "Education support, environmental causes, social services, healthcare, arts",
                  "Nonprofit boards, community organizations, professional associations",
                  "Business mentoring, financial literacy teaching, skill sharing",
                  "Young professionals, students, entrepreneurs, community members"
                ]
              },
              {
                title: "Spiritual & Personal Growth",
                prompts: [
                  "How will you continue growing personally in retirement?",
                  "What role will spirituality or philosophy play in your retirement?",
                  "What creative or artistic pursuits do you want to explore?",
                  "How will you find meaning and transcendence in your later years?",
                  "What wisdom do you hope to gain through the retirement experience?"
                ],
                examples: [
                  "Continued learning, new experiences, deepened relationships, self-reflection",
                  "Religious involvement, meditation practice, philosophical study, nature connection",
                  "Painting, music, writing, crafts, photography, gardening, cooking",
                  "Service to others, connection to nature, spiritual practices, family bonds",
                  "Perspective on what matters, acceptance of life changes, gratitude for experiences"
                ]
              }
            ]}
            tips={[
              "Invest time in relationships now - they become increasingly important in retirement",
              "Start documenting family stories and history while older relatives are still alive",
              "Find ways to share your knowledge and experience with younger generations",
              "Consider how you want to be remembered and work toward that legacy",
              "Balance giving back to others with taking care of your own needs and happiness"
            ]}
          />
        </TabsContent>

      </Tabs>
    </div>
  )
}