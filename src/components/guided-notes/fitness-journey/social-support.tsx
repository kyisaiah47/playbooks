"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function SocialSupport() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Social Support & Accountability</h1>
        <p className="text-muted-foreground">Build a strong support network to maintain motivation and achieve your fitness goals.</p>
      </div>

      <Tabs defaultValue="support-network" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="support-network" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Support Network</span>
            <span className="sm:hidden">Support</span>
          </TabsTrigger>
          <TabsTrigger value="accountability-systems" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Accountability</span>
            <span className="sm:hidden">Account</span>
          </TabsTrigger>
          <TabsTrigger value="community-engagement" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Community</span>
            <span className="sm:hidden">Community</span>
          </TabsTrigger>
          <TabsTrigger value="family-integration" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Family Integration</span>
            <span className="sm:hidden">Family</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="support-network">
          <GuidedNotePage
            title="Building Your Support Network"
            description="Identify and cultivate relationships that support your fitness journey"
            sections={[
              {
                title: "Identifying Supporters",
                prompts: [
                  "Who in your current circle supports and encourages your fitness goals?",
                  "What types of support do you need most (encouragement, accountability, knowledge, company)?",
                  "Who in your life might inadvertently sabotage your fitness efforts?",
                  "What new connections do you need to make to strengthen your support system?",
                  "How will you communicate your fitness goals and needs to potential supporters?"
                ],
                examples: [
                  "Family members, friends, coworkers who exercise, online communities, fitness professionals",
                  "Emotional support for tough days, accountability for consistency, expertise for guidance, companionship for activities",
                  "People who discourage exercise, enablers of unhealthy habits, those who don't respect your time/goals",
                  "Workout partners, fitness professionals, online communities, local fitness groups, accountability buddies",
                  "Be specific about goals, explain why it matters, ask for specific types of support, set boundaries"
                ]
              },
              {
                title: "Professional Support Team",
                prompts: [
                  "What fitness professionals will you work with to support your goals?",
                  "How will you find qualified trainers, nutritionists, or other experts?",
                  "What budget will you allocate for professional fitness support?",
                  "How often will you seek professional guidance versus working independently?",
                  "What questions will you ask when vetting potential fitness professionals?"
                ],
                examples: [
                  "Personal trainer, nutritionist, physical therapist, massage therapist, sports psychologist",
                  "Referrals, certifications check, trial sessions, online reviews, recommendations from others",
                  "Monthly trainer sessions, quarterly nutrition consultation, occasional massage, emergency PT visits",
                  "Weekly sessions initially, monthly check-ins later, independent work with periodic guidance",
                  "Certifications, experience, training philosophy, success stories, availability, communication style"
                ]
              },
              {
                title: "Peer Support & Workout Partners",
                prompts: [
                  "What qualities will you look for in a workout partner or fitness buddy?",
                  "How will you find people with similar fitness goals and availability?",
                  "What agreements will you make with workout partners about expectations?",
                  "How will you handle conflicts or different paces with workout partners?",
                  "What backup plans will you have when partners aren't available?"
                ],
                examples: [
                  "Similar fitness level, reliable, positive attitude, compatible schedule, shared goals",
                  "Local gyms, fitness classes, online communities, workplace groups, neighborhood networks",
                  "Meeting times, backup plans, communication expectations, goal support, spotting/safety",
                  "Compromise on activities, separate for different paces, focus on encouragement not competition",
                  "Solo workout routines, multiple partner options, online communities, virtual accountability"
                ]
              },
              {
                title: "Virtual & Online Communities",
                prompts: [
                  "What online fitness communities align with your goals and values?",
                  "How will you engage with virtual support while maintaining privacy?",
                  "What social media strategies will support rather than sabotage your goals?",
                  "How will you balance online interaction with real-world relationships?",
                  "What boundaries will you set around sharing your fitness journey online?"
                ],
                examples: [
                  "Reddit fitness communities, Facebook groups, fitness apps with social features, Instagram communities",
                  "Use anonymous usernames, share progress not personal info, focus on encouragement and tips",
                  "Follow inspiring accounts, share progress mindfully, avoid comparison, celebrate others' success",
                  "Use online to supplement not replace in-person connections, maintain real-world priorities",
                  "Share achievements not struggles, avoid oversharing, maintain authenticity, protect personal information"
                ]
              }
            ]}
            tips={[
              "Surround yourself with people who support your health goals, not sabotage them",
              "Seek different types of support from different people - not everyone needs to provide everything",
              "Invest in professional guidance when it helps you avoid injury or reach goals faster",
              "Be a good support person for others to build reciprocal relationships",
              "Don't rely on just one person for all your accountability and motivation"
            ]}
          />
        </TabsContent>

        <TabsContent value="accountability-systems">
          <GuidedNotePage
            title="Accountability Systems & Structures"
            description="Create effective systems to keep yourself accountable to your fitness commitments"
            sections={[
              {
                title: "Personal Accountability Methods",
                prompts: [
                  "What self-accountability systems will you create to track your commitments?",
                  "How will you monitor and document your progress consistently?",
                  "What consequences will you create for yourself when you don't follow through?",
                  "How will you reward yourself for meeting accountability goals?",
                  "What daily or weekly check-in routines will you establish?"
                ],
                examples: [
                  "Workout calendar, habit tracker, progress photos, measurement log, fitness app tracking",
                  "Daily workout logging, weekly progress photos, monthly measurements, quarterly goal reviews",
                  "Donation to charity, extra household tasks, delayed rewards, public admission of missed goals",
                  "New workout gear, massage, fun activities, healthy meals out, weekend adventures",
                  "Morning intention setting, evening reflection, weekly goal review, monthly progress assessment"
                ]
              },
              {
                title: "Social Accountability Structures",
                prompts: [
                  "Who will you formally ask to hold you accountable for your fitness goals?",
                  "How often will you check in with your accountability partner or group?",
                  "What specific commitments will you make to others about your fitness routine?",
                  "How will you handle accountability when you've missed workouts or goals?",
                  "What group challenges or competitions will you join for external motivation?"
                ],
                examples: [
                  "Accountability partner, family member, trainer, online group, fitness class friends",
                  "Daily text check-ins, weekly coffee meetings, monthly progress reviews, quarterly goal setting",
                  "Workout frequency, specific activities, measurement goals, race participation, habit consistency",
                  "Honest communication about setbacks, problem-solving together, adjusting goals if needed, getting back on track",
                  "Step challenges, fitness app competitions, local races, gym challenges, online community goals"
                ]
              },
              {
                title: "Financial & Commitment Strategies",
                prompts: [
                  "How will you use financial commitments to increase your accountability?",
                  "What prepaid fitness investments will motivate you to follow through?",
                  "How will you structure rewards and penalties that actually motivate you?",
                  "What public commitments will you make to increase your accountability?",
                  "How will you make your fitness goals more concrete and binding?"
                ],
                examples: [
                  "Gym membership, trainer sessions, fitness classes, race registration fees, accountability apps",
                  "Personal training packages, class packages, race entries, fitness retreats, equipment purchases",
                  "Money to charity for missed workouts, rewards for consistency, public commitments, social consequences",
                  "Social media posts, telling friends and family, signing up for events, joining challenges",
                  "Written goal contracts, specific deadlines, measurable targets, public announcements"
                ]
              },
              {
                title: "Technology & Tracking Tools",
                prompts: [
                  "What apps or devices will you use to track and share your accountability?",
                  "How will you leverage technology for consistent progress monitoring?",
                  "What social features will you use to increase accountability pressure?",
                  "How will you balance technology tracking with intrinsic motivation?",
                  "What backup systems will you have if your tracking technology fails?"
                ],
                examples: [
                  "Fitness apps, wearable devices, social media sharing, online challenges, progress tracking tools",
                  "Automatic workout logging, progress photos, measurement tracking, habit streaks, performance metrics",
                  "Share workouts with friends, join app communities, participate in challenges, celebrate milestones publicly",
                  "Use tech to support not replace internal motivation, focus on trends not daily numbers",
                  "Manual tracking methods, multiple apps, cloud backup, simple pen and paper systems"
                ]
              }
            ]}
            tips={[
              "Make commitments to others, not just yourself - social accountability is powerful",
              "Use financial commitments like gym memberships or trainer sessions to increase follow-through",
              "Share your goals publicly to create positive social pressure",
              "Track your commitments consistently and review them regularly with someone else",
              "Create both positive rewards and mild negative consequences for your accountability system"
            ]}
          />
        </TabsContent>

        <TabsContent value="community-engagement">
          <GuidedNotePage
            title="Community Engagement & Connection"
            description="Find and participate in fitness communities that inspire and support you"
            sections={[
              {
                title: "Local Fitness Communities",
                prompts: [
                  "What local fitness groups, classes, or clubs align with your interests?",
                  "How will you find and connect with active people in your community?",
                  "What volunteer opportunities combine fitness with community service?",
                  "How will you overcome social anxiety or intimidation about joining new groups?",
                  "What local events or challenges will you participate in to meet like-minded people?"
                ],
                examples: [
                  "Running clubs, hiking groups, cycling clubs, fitness classes, sports leagues, yoga studios",
                  "Community centers, local gyms, outdoor stores, social media groups, neighborhood apps",
                  "Charity walks/runs, park cleanups, coaching youth sports, leading senior fitness classes",
                  "Start with beginner-friendly groups, bring a friend, attend regularly to build relationships, focus on shared interest",
                  "5K races, fitness challenges, outdoor adventures, community sports tournaments, charity events"
                ]
              },
              {
                title: "Group Fitness Participation",
                prompts: [
                  "What group fitness classes or activities will you try?",
                  "How will you find instructors and classes that match your fitness level?",
                  "What social benefits are you looking for from group fitness participation?",
                  "How will you commit to regular attendance and build relationships in classes?",
                  "What will you do if you feel intimidated or out of place in group settings?"
                ],
                examples: [
                  "Yoga, Pilates, spin classes, boot camp, dance fitness, martial arts, swimming groups",
                  "Beginner classes, trial passes, instructor consultations, online reviews, friend recommendations",
                  "Motivation, accountability, learning, friendship, fun, variety, expert instruction",
                  "Same time slots, introduce yourself, arrive early, stay after, participate in social events",
                  "Talk to instructor beforehand, modify as needed, focus on your own progress, give it time"
                ]
              },
              {
                title: "Mentorship & Leadership",
                prompts: [
                  "How will you find mentors who can guide your fitness journey?",
                  "What opportunities will you seek to mentor others in their fitness goals?",
                  "How will you contribute to your fitness community beyond just participating?",
                  "What knowledge or skills can you share with others in your fitness community?",
                  "How will you pay forward the support you receive from others?"
                ],
                examples: [
                  "Experienced athletes, successful long-term exercisers, fitness professionals, online mentors",
                  "Help beginners at gym, share experience online, coach youth sports, lead walking groups",
                  "Organize group activities, offer encouragement, share resources, help with events",
                  "Workout tips, nutrition knowledge, motivation strategies, equipment recommendations, local resources",
                  "Encourage newcomers, share what worked for you, volunteer time, donate equipment, offer rides"
                ]
              },
              {
                title: "Creating Your Own Community",
                prompts: [
                  "What fitness community or group would you like to create if it doesn't exist?",
                  "How will you organize and lead fitness activities for others?",
                  "What unique perspective or approach can you bring to fitness community building?",
                  "How will you maintain consistency and engagement in a group you start?",
                  "What resources and support will you need to successfully build a fitness community?"
                ],
                examples: [
                  "Neighborhood walking group, workplace fitness challenge, parent workout group, beginner-friendly club",
                  "Regular meeting times, simple structure, rotating leadership, inclusive atmosphere, clear expectations",
                  "Focus on beginners, family-friendly activities, specific populations, unique activities, accessibility focus",
                  "Regular communication, consistent scheduling, variety in activities, celebrate successes, address conflicts",
                  "Meeting space, basic equipment, promotion methods, committed core group, leadership skills development"
                ]
              }
            ]}
            tips={[
              "Start by participating consistently in existing communities before trying to lead",
              "Look for communities that match your current fitness level and goals",
              "Be patient building relationships - fitness friendships often develop slowly over shared experiences",
              "Contribute to your communities by offering encouragement and support to others",
              "Don't be afraid to try different groups until you find where you fit best"
            ]}
          />
        </TabsContent>

        <TabsContent value="family-integration">
          <GuidedNotePage
            title="Family Integration & Influence"
            description="Involve your family in your fitness journey and create a healthy household culture"
            sections={[
              {
                title: "Family Support & Understanding",
                prompts: [
                  "How will you help your family understand and support your fitness goals?",
                  "What specific support do you need from family members?",
                  "How will you handle family members who don't understand or support your goals?",
                  "What boundaries will you set to protect your fitness time and priorities?",
                  "How will you communicate the benefits of your fitness journey to your family?"
                ],
                examples: [
                  "Explain health benefits, share your why, ask for specific help, involve them in planning",
                  "Time protection, meal planning support, childcare during workouts, encouragement during tough times",
                  "Stay firm on priorities, educate gently, seek compromise, find alternative support if needed",
                  "Sacred workout times, meal planning priorities, equipment space, recovery time needs",
                  "Share energy improvements, mood benefits, strength gains, health improvements, longevity goals"
                ]
              },
              {
                title: "Active Family Activities",
                prompts: [
                  "What physical activities can you do together as a family?",
                  "How will you make family time active rather than sedentary?",
                  "What seasonal outdoor activities will you plan with your family?",
                  "How will you accommodate different fitness levels and ages in family activities?",
                  "What new active traditions will you start with your family?"
                ],
                examples: [
                  "Family walks, bike rides, hiking, swimming, sports, playground time, active games",
                  "Walking meetings, active outings instead of movies, yard work together, active chores",
                  "Summer swimming, winter sledding, fall hiking, spring biking, seasonal sports",
                  "Different distances/intensities, modifications for abilities, focus on fun not performance",
                  "Weekly family hikes, Saturday bike rides, active vacations, sports viewing with movement breaks"
                ]
              },
              {
                title: "Modeling Healthy Behavior",
                prompts: [
                  "How will you model healthy fitness habits for your children or other family members?",
                  "What lessons about health and fitness do you want to teach through your example?",
                  "How will you involve children in age-appropriate fitness activities?",
                  "What family conversations will you have about health, body image, and fitness?",
                  "How will you balance pushing family members to be active with respecting their choices?"
                ],
                examples: [
                  "Consistent exercise routine, positive attitude about fitness, trying new activities, celebrating progress",
                  "Health is important, consistency matters, effort over perfection, fitness can be fun, bodies are capable",
                  "Age-appropriate sports, playground activities, nature exploration, dance parties, obstacle courses",
                  "Focus on health not appearance, celebrate what bodies can do, discuss effort and improvement",
                  "Offer opportunities without pressure, celebrate their interests, respect individual preferences"
                ]
              },
              {
                title: "Household Health Culture",
                prompts: [
                  "How will you create a household culture that supports healthy living?",
                  "What changes will you make to your home environment to encourage activity?",
                  "How will you balance your fitness needs with family schedules and priorities?",
                  "What healthy traditions will you establish that involve the whole family?",
                  "How will you address conflicts between your fitness goals and family demands?"
                ],
                examples: [
                  "Active weekend plans, healthy meal planning, limited screen time, outdoor time priority, family challenges",
                  "Create workout space, active toys/equipment available, walk-friendly neighborhood use, active decorations",
                  "Schedule workouts like family priorities, involve family in planning, find win-win solutions",
                  "Sunday family hikes, active vacation planning, healthy meal preparation together, movement breaks",
                  "Communicate needs clearly, compromise on timing, find family-inclusive solutions, maintain boundaries"
                ]
              }
            ]}
            tips={[
              "Lead by example rather than trying to force family members to change",
              "Find ways to make family time active and fun rather than adding separate obligations",
              "Communicate clearly about your fitness needs and ask for specific support",
              "Focus on health and capability rather than appearance when discussing fitness with family",
              "Be patient - family culture changes slowly but creates lasting impact"
            ]}
          />
        </TabsContent>

      </Tabs>
    </div>
  )
}