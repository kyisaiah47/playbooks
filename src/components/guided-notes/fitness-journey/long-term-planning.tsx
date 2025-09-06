"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function LongTermPlanning() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Long-term Planning & Sustainability</h1>
        <p className="text-muted-foreground">Create a sustainable fitness approach that will serve you for decades to come.</p>
      </div>

      <Tabs defaultValue="lifetime-approach" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="lifetime-approach" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Lifetime Approach</span>
            <span className="sm:hidden">Lifetime</span>
          </TabsTrigger>
          <TabsTrigger value="aging-adaptation" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Aging & Adaptation</span>
            <span className="sm:hidden">Aging</span>
          </TabsTrigger>
          <TabsTrigger value="goal-evolution" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Goal Evolution</span>
            <span className="sm:hidden">Evolution</span>
          </TabsTrigger>
          <TabsTrigger value="legacy-impact" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Legacy & Impact</span>
            <span className="sm:hidden">Legacy</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="lifetime-approach">
          <GuidedNotePage
            title="Lifetime Fitness Approach"
            description="Build a fitness philosophy and approach that will serve you throughout your life"
            sections={[
              {
                title: "Sustainable Mindset & Philosophy",
                prompts: [
                  "What fitness philosophy will guide your decisions for the next 20-30 years?",
                  "How will you balance pushing yourself with preserving your body long-term?",
                  "What does 'fitness success' look like to you over a lifetime?",
                  "How will you maintain perspective during short-term setbacks or plateaus?",
                  "What core principles will remain constant as your approach evolves?"
                ],
                examples: [
                  "Consistency over intensity, progress over perfection, health over appearance, enjoyment over suffering",
                  "Listen to body signals, prioritize injury prevention, focus on functional fitness, allow adequate recovery",
                  "Maintaining independence, staying active with family, managing health conditions, feeling strong and capable",
                  "Focus on decades not months, expect ups and downs, celebrate small wins, trust the process",
                  "Move daily, prioritize sleep, eat for health, manage stress, maintain social connections"
                ]
              },
              {
                title: "Adaptable Systems & Routines",
                prompts: [
                  "What core fitness habits will you maintain regardless of life circumstances?",
                  "How will you create flexible routines that adapt to changing schedules and priorities?",
                  "What minimum viable fitness routine will you maintain during challenging periods?",
                  "How will you scale your fitness up and down based on available time and energy?",
                  "What backup plans will you have for different life scenarios?"
                ],
                examples: [
                  "Daily movement, regular strength work, adequate sleep, stress management, healthy eating patterns",
                  "Multiple workout options, time-flexible routines, location-independent exercises, seasonal adjustments",
                  "10-minute daily walks, basic bodyweight exercises, stretching, priority on sleep and stress management",
                  "Intense phases when time allows, maintenance phases during busy times, recovery phases when needed",
                  "Home workouts for weather, bodyweight for travel, short routines for busy times, injury modifications"
                ]
              },
              {
                title: "Continuous Learning & Growth",
                prompts: [
                  "How will you continue learning about fitness and health throughout your life?",
                  "What new skills or activities do you want to try in different life phases?",
                  "How will you stay current with fitness research and best practices?",
                  "What certifications or education might you pursue related to fitness?",
                  "How will you balance trying new things with maintaining proven approaches?"
                ],
                examples: [
                  "Read research, follow experts, attend workshops, try new classes, work with professionals periodically",
                  "Learn new sports, master difficult exercises, try different training styles, explore outdoor activities",
                  "Reputable fitness websites, scientific journals, professional development, evidence-based sources",
                  "Personal training certification, nutrition education, first aid, specialized training knowledge",
                  "80% proven methods, 20% experimentation, gradual introduction of new concepts, maintain core foundation"
                ]
              },
              {
                title: "Health Integration & Medical Coordination",
                prompts: [
                  "How will you integrate your fitness approach with healthcare and medical needs?",
                  "What health screenings and assessments will you pursue regularly?",
                  "How will you modify your fitness approach for emerging health conditions?",
                  "What communication will you maintain with healthcare providers about your fitness?",
                  "How will you use fitness as preventive medicine throughout your life?"
                ],
                examples: [
                  "Regular check-ups, coordinate with doctors, modify for health conditions, use exercise as medicine",
                  "Annual physicals, cardiovascular screenings, bone density tests, functional movement assessments",
                  "Diabetes-friendly routines, heart-healthy exercise, joint-protective modifications, medication timing",
                  "Share fitness goals, discuss exercise prescriptions, report concerning symptoms, coordinate treatments",
                  "Blood pressure control, diabetes prevention, bone health maintenance, mental health support, fall prevention"
                ]
              }
            ]}
            tips={[
              "Think in terms of decades, not months - build habits that will serve you for life",
              "Prioritize injury prevention over impressive performances",
              "Create systems that can adapt to changing life circumstances",
              "Focus on consistency and sustainability over intensity and perfection",
              "Invest in learning and professional guidance to avoid costly mistakes"
            ]}
          />
        </TabsContent>

        <TabsContent value="aging-adaptation">
          <GuidedNotePage
            title="Aging & Adaptation Strategies"
            description="Plan how your fitness approach will evolve as you age and face physical changes"
            sections={[
              {
                title: "Age-Related Exercise Modifications",
                prompts: [
                  "How will you modify your exercise routine as you age to maintain safety and effectiveness?",
                  "What age-related physical changes will you prepare for and address proactively?",
                  "How will you balance maintaining intensity with protecting joints and connective tissues?",
                  "What new types of exercise might become more important as you age?",
                  "How will you monitor and respond to declining recovery capacity over time?"
                ],
                examples: [
                  "Lower impact cardio, more flexibility work, balance training, functional movements, joint-friendly options",
                  "Decreased bone density, muscle loss, joint stiffness, balance issues, slower recovery times",
                  "Focus on form over weight, use machines vs free weights, shorter high-intensity intervals, more warm-up time",
                  "Yoga, tai chi, swimming, balance work, functional training, resistance bands, gentle stretching",
                  "Longer rest between workouts, more sleep needed, gentler progression, listen to body signals more carefully"
                ]
              },
              {
                title: "Functional Fitness & Independence",
                prompts: [
                  "What functional movements will you prioritize to maintain independence as you age?",
                  "How will you train for activities of daily living throughout your lifetime?",
                  "What strength and mobility benchmarks will you work to maintain?",
                  "How will you address balance and fall prevention as you get older?",
                  "What home safety and accessibility modifications might you need to consider?"
                ],
                examples: [
                  "Getting up from chairs, climbing stairs, carrying groceries, reaching overhead, getting off floor",
                  "Squatting, lifting, walking distances, balance challenges, coordination tasks, flexibility maintenance",
                  "Leg strength for stairs, grip strength for jars, core strength for posture, flexibility for dressing",
                  "Single-leg stands, walking heel-to-toe, tai chi, dance, uneven surface training, reaction time practice",
                  "Grab bars, good lighting, clear pathways, sturdy railings, non-slip surfaces, accessible storage"
                ]
              },
              {
                title: "Chronic Condition Management",
                prompts: [
                  "How will you use exercise to manage chronic conditions that may develop with age?",
                  "What modifications will you make for common age-related health issues?",
                  "How will you coordinate exercise with medical treatments and medications?",
                  "What warning signs will prompt you to modify or stop certain exercises?",
                  "How will you maintain motivation when dealing with health challenges?"
                ],
                examples: [
                  "Diabetes management, heart disease prevention, arthritis symptom relief, osteoporosis prevention",
                  "Low-impact for joint problems, heart rate monitoring, blood sugar management, medication timing",
                  "Work with healthcare team, adjust for medication effects, time exercise appropriately, monitor symptoms",
                  "Chest pain, excessive fatigue, joint pain, dizziness, shortness of breath, unusual symptoms",
                  "Focus on what you can do, celebrate small wins, adapt goals, find support communities, professional help"
                ]
              },
              {
                title: "Mental & Cognitive Health",
                prompts: [
                  "How will you use exercise to support brain health and cognitive function as you age?",
                  "What types of physical activity are most beneficial for mental health in older adults?",
                  "How will you maintain social connections through fitness activities as you age?",
                  "What role will exercise play in managing age-related mood and anxiety issues?",
                  "How will you stay mentally engaged and challenged through your fitness routine?"
                ],
                examples: [
                  "Aerobic exercise for brain health, coordination challenges, learning new skills, social activities",
                  "Walking, swimming, yoga, dance, tai chi, group classes, outdoor activities, strength training",
                  "Senior fitness classes, walking groups, recreational sports, community activities, volunteer coaching",
                  "Regular exercise routine, outdoor time, social activities, stress management, professional support when needed",
                  "Learn new sports, vary routines, set new challenges, teach others, participate in competitions"
                ]
              }
            ]}
            tips={[
              "Start preparing for aging now by building strong bones, muscles, and balance",
              "Focus on functional movements that will help you maintain independence",
              "Adapt your routine gradually rather than waiting for problems to develop",
              "Work with healthcare providers to use exercise as preventive medicine",
              "Maintain social connections through fitness to support mental health as you age"
            ]}
          />
        </TabsContent>

        <TabsContent value="goal-evolution">
          <GuidedNotePage
            title="Goal Evolution & Life Phases"
            description="Plan how your fitness goals will evolve through different life stages and circumstances"
            sections={[
              {
                title: "Life Stage Fitness Priorities",
                prompts: [
                  "How will your fitness priorities change through different decades of life?",
                  "What fitness goals are most important for your current life stage?",
                  "How will major life events (marriage, children, career changes) affect your fitness approach?",
                  "What fitness capabilities do you want to maintain or develop in each life phase?",
                  "How will you balance competing priorities while maintaining fitness consistency?"
                ],
                examples: [
                  "20s: building base, 30s: managing stress/family, 40s: preventing decline, 50s+: maintaining function",
                  "Young adult: performance goals; parent: energy and stress relief; older: independence and health",
                  "Newborn: home workouts; job change: schedule flexibility; retirement: more time but different goals",
                  "Strength and endurance in youth, balance and flexibility in middle age, functional capacity in later years",
                  "Family time, career demands, health needs, financial constraints, seasonal variations, energy management"
                ]
              },
              {
                title: "Seasonal & Cyclical Planning",
                prompts: [
                  "How will you plan fitness goals and activities around annual cycles and seasons?",
                  "What seasonal activities will you incorporate to maintain year-round engagement?",
                  "How will you handle seasonal motivation changes and energy fluctuations?",
                  "What holiday and vacation strategies will you use to maintain consistency?",
                  "How will you use seasons to create variety and prevent fitness boredom?"
                ],
                examples: [
                  "Summer outdoor focus, winter indoor strength, spring activity increase, fall preparation and goal-setting",
                  "Swimming, hiking, skiing, cycling - match activities to weather and daylight availability",
                  "Light therapy in winter, goal setting in January, outdoor motivation in spring, maintenance during holidays",
                  "Bodyweight routines for travel, maintenance goals during holidays, active vacation planning",
                  "Seasonal sports, weather-appropriate activities, holiday challenges, New Year renewals, summer adventures"
                ]
              },
              {
                title: "Career & Life Transition Fitness",
                prompts: [
                  "How will you maintain fitness during major career transitions or changes?",
                  "What fitness strategies will you use during high-stress periods?",
                  "How will you adapt your routine for different work schedules and demands?",
                  "What role will fitness play in managing life transitions and uncertainty?",
                  "How will you use fitness to build resilience for major life changes?"
                ],
                examples: [
                  "Job changes, retirement, returning to work, career pivots, education periods, family changes",
                  "Stress relief exercise, sleep prioritization, time management, energy conservation, support seeking",
                  "Shift work routines, travel jobs, desk jobs, physical jobs, irregular schedules, work-from-home setups",
                  "Stress management, confidence building, routine maintenance, energy regulation, coping mechanism",
                  "Physical strength for challenges, mental toughness from training, stress management skills, support networks"
                ]
              },
              {
                title: "Legacy Goal Setting",
                prompts: [
                  "What fitness legacy do you want to create for your family and community?",
                  "How will your long-term fitness success inspire and help others?",
                  "What knowledge and experience will you pass on about sustainable fitness?",
                  "How will you document and share your fitness journey for future inspiration?",
                  "What would you want people to say about your approach to health and fitness?"
                ],
                examples: [
                  "Active aging example, healthy family culture, community fitness leadership, mentoring others",
                  "Proof that long-term success is possible, overcoming obstacles, sustainable approach modeling",
                  "What worked, what didn't, lessons learned, practical strategies, mindset insights, mistake avoidance",
                  "Progress photos, journal entries, video diaries, blog posts, social media inspiration, speaking opportunities",
                  "'They never gave up,' 'they made health a priority,' 'they showed us it was possible,' 'they aged gracefully'"
                ]
              }
            ]}
            tips={[
              "Expect your fitness goals and priorities to evolve - plan for flexibility",
              "Use seasonal and life changes as opportunities for variety and renewed motivation",
              "Focus on building systems that can adapt to changing circumstances",
              "Consider the legacy you want to create through your long-term fitness commitment",
              "Document your journey to inspire others and remind yourself of your progress"
            ]}
          />
        </TabsContent>

        <TabsContent value="legacy-impact">
          <GuidedNotePage
            title="Legacy & Impact Creation"
            description="Consider how your fitness journey can positively impact others and create lasting change"
            sections={[
              {
                title: "Family Health Legacy",
                prompts: [
                  "What healthy habits and attitudes will you model for the next generation?",
                  "How will your fitness journey influence your children's relationship with health and exercise?",
                  "What family traditions and activities will promote lifelong health and fitness?",
                  "How will you break negative family patterns related to health and fitness?",
                  "What health knowledge and skills will you pass down to your family members?"
                ],
                examples: [
                  "Consistent exercise routine, positive body image, healthy eating, stress management, work-life balance",
                  "Exercise is normal and enjoyable, bodies are capable and strong, health is a priority, effort matters more than perfection",
                  "Family hikes, active vacations, home-cooked meals, outdoor play, sports participation, evening walks",
                  "Sedentary lifestyle, poor eating habits, negative body talk, all-or-nothing thinking, health neglect",
                  "Injury prevention, proper form, nutrition basics, stress management, sleep hygiene, self-care importance"
                ]
              },
              {
                title: "Community Influence & Leadership",
                prompts: [
                  "How will you use your fitness success to inspire and help others in your community?",
                  "What volunteer opportunities will allow you to promote health and fitness?",
                  "How will you share your knowledge and experience with others who are starting their journey?",
                  "What leadership roles might you take in community health and fitness initiatives?",
                  "How will you advocate for health and fitness resources in your community?"
                ],
                examples: [
                  "Mentor newcomers, share transformation story, lead by example, offer encouragement and support",
                  "Youth sports coaching, senior fitness programs, charity walks/runs, community garden, health fairs",
                  "Answer questions online, write about experiences, speak at events, informal mentoring, buddy system",
                  "Fitness group leader, wellness committee member, health fair organizer, policy advocate",
                  "Support for safe walking paths, community fitness facilities, school health programs, workplace wellness"
                ]
              },
              {
                title: "Professional & Career Impact",
                prompts: [
                  "How might your fitness journey influence your career or lead to new professional opportunities?",
                  "What fitness-related skills or knowledge could you develop professionally?",
                  "How will your health and fitness support your professional longevity and performance?",
                  "What workplace wellness initiatives could you support or lead?",
                  "How will you balance fitness expertise with your primary career responsibilities?"
                ],
                examples: [
                  "Fitness coaching, nutrition counseling, wellness consulting, corporate training, health writing",
                  "Personal training certification, nutrition education, group fitness instruction, health coaching",
                  "Higher energy, better focus, stress management, leadership skills, resilience, longevity",
                  "Walking meetings, office challenges, healthy lunch programs, ergonomic improvements, stress reduction",
                  "Part-time coaching, volunteer work, informal mentoring, gradual transition, complementary skills"
                ]
              },
              {
                title: "Broader Social Impact",
                prompts: [
                  "How will your fitness transformation contribute to broader social change around health?",
                  "What stereotypes or barriers might your success help others overcome?",
                  "How will you use your platform or influence to promote inclusive fitness communities?",
                  "What social media or public presence will you maintain to inspire others?",
                  "How will you contribute to research or advocacy for health and fitness causes?"
                ],
                examples: [
                  "Prove fitness is possible at any age, with any background, despite obstacles, with busy schedules",
                  "Age barriers, body size assumptions, economic limitations, time constraints, family responsibilities",
                  "Welcome beginners, celebrate all body types, accommodate different abilities, create safe spaces",
                  "Share progress authentically, offer practical tips, celebrate others' success, avoid comparison culture",
                  "Participate in studies, donate to health causes, advocate for policy changes, support research funding"
                ]
              }
            ]}
            tips={[
              "Think about the ripple effects your fitness journey can have on others",
              "Document your journey authentically to inspire others facing similar challenges",
              "Look for opportunities to give back and help others succeed in their fitness goals",
              "Consider how your success can contribute to broader social change around health",
              "Remember that your example and encouragement can profoundly impact others' lives"
            ]}
          />
        </TabsContent>

      </Tabs>
    </div>
  )
}