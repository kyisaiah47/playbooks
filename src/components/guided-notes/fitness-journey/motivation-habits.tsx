"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function MotivationHabits() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Motivation & Habit Building</h1>
        <p className="text-muted-foreground">Build sustainable motivation and create lasting fitness habits.</p>
      </div>

      <Tabs defaultValue="habit-formation" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="habit-formation" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Habit Formation</span>
            <span className="sm:hidden">Habits</span>
          </TabsTrigger>
          <TabsTrigger value="motivation-strategies" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Motivation</span>
            <span className="sm:hidden">Motivate</span>
          </TabsTrigger>
          <TabsTrigger value="overcoming-barriers" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Overcoming Barriers</span>
            <span className="sm:hidden">Barriers</span>
          </TabsTrigger>
          <TabsTrigger value="long-term-success" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Long-term Success</span>
            <span className="sm:hidden">Success</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="habit-formation">
          <GuidedNotePage
            title="Building Strong Fitness Habits"
            description="Create automatic fitness behaviors that stick long-term"
            sections={[
              {
                title: "Habit Loop Design",
                prompts: [
                  "What environmental cues will trigger your exercise habit?",
                  "What specific routine will you follow each time you work out?",
                  "What immediate rewards will you give yourself after completing workouts?",
                  "How will you make your fitness routine as automatic as brushing your teeth?",
                  "What existing habits can you stack your new fitness routine onto?"
                ],
                examples: [
                  "Workout clothes laid out, alarm at same time, gym bag by door, calendar reminder",
                  "Change clothes → warm-up → main workout → cool-down → log completion, same sequence always",
                  "Check off calendar, listen to favorite song, healthy snack, mark progress, feel of accomplishment",
                  "Same time daily, same preparation routine, minimize decision-making, create muscle memory",
                  "After morning coffee → workout, before shower → exercise, after dinner → walk"
                ]
              },
              {
                title: "Starting Small & Building",
                prompts: [
                  "What is the smallest version of your fitness habit that you could do daily?",
                  "How will you gradually increase the complexity and duration of your routine?",
                  "What prevents you from scaling your habit too quickly?",
                  "How will you maintain consistency even when motivation is low?",
                  "What minimum viable workout will you commit to on your worst days?"
                ],
                examples: [
                  "5 minutes daily movement, put on workout clothes, do one exercise, walk around block",
                  "Week 1: 5 minutes, Week 2: 10 minutes, gradually add time and exercises monthly",
                  "Focus on consistency over intensity, celebrate small wins, avoid perfectionism",
                  "Lower the bar to almost nothing, focus on showing up, maintain the routine timing",
                  "10 jumping jacks, 2-minute walk, stretch for 5 minutes, anything above zero"
                ]
              },
              {
                title: "Environmental Design",
                prompts: [
                  "How will you design your environment to make exercise easier and more obvious?",
                  "What obstacles in your environment currently make it harder to work out?",
                  "How will you make unhealthy alternatives less convenient and appealing?",
                  "What visual reminders will you place to prompt your fitness habits?",
                  "How will you prepare your space the night before to reduce friction?"
                ],
                examples: [
                  "Keep workout equipment visible, have water bottle ready, clear workout space prepared",
                  "Remove equipment storage barriers, eliminate setup time, have backup plans ready",
                  "Make couch less comfortable during workout time, remove TV remote, limit snack accessibility",
                  "Calendar alerts, progress photos displayed, workout clothes visible, motivational quotes",
                  "Lay out clothes, prep water bottle, clear workout space, charge devices"
                ]
              },
              {
                title: "Habit Tracking & Reinforcement",
                prompts: [
                  "How will you track your fitness habits to maintain awareness and momentum?",
                  "What celebration rituals will reinforce your habit completion?",
                  "How will you handle missed days without losing momentum?",
                  "What accountability systems will help maintain your habits?",
                  "How will you evolve your habits as they become more established?"
                ],
                examples: [
                  "Daily check-off calendar, habit tracker app, photo documentation, simple journal",
                  "Victory dance, check mark with flourish, tell someone, immediate small reward",
                  "Get back on track immediately next day, don't wait for Monday, maintain weekly total",
                  "Workout buddy, family check-ins, social media posts, trainer appointments, group classes",
                  "Increase complexity gradually, add variety, set new challenges while maintaining core habit"
                ]
              }
            ]}
            tips={[
              "Focus on consistency over intensity - showing up matters more than perfect workouts",
              "Start ridiculously small to build confidence and momentum before increasing difficulty",
              "Make your environment work for you by removing obstacles and adding helpful cues",
              "Never miss twice in a row - get back on track immediately after any slip",
              "Celebrate habit completion immediately to reinforce the positive behavior loop"
            ]}
          />
        </TabsContent>

        <TabsContent value="motivation-strategies">
          <GuidedNotePage
            title="Sustaining Motivation Long-term"
            description="Develop multiple sources of motivation that carry you through challenges"
            sections={[
              {
                title: "Intrinsic Motivation Sources",
                prompts: [
                  "What personal values and beliefs drive your commitment to fitness?",
                  "How does exercise make you feel mentally and emotionally?",
                  "What aspects of fitness and movement do you genuinely enjoy?",
                  "How does being fit align with your vision of who you want to be?",
                  "What deeper purpose does your fitness journey serve in your life?"
                ],
                examples: [
                  "Setting example for children, self-care, discipline, personal growth, overcoming challenges",
                  "Stress relief, confidence boost, energy increase, mood improvement, sense of accomplishment",
                  "Dancing, hiking, sports, strength feeling, flexibility, outdoor activities, group classes",
                  "Strong, capable, energetic, confident person who takes care of themselves",
                  "Living longer for family, breaking family health patterns, being role model, personal empowerment"
                ]
              },
              {
                title: "External Motivation Systems",
                prompts: [
                  "Who in your life supports and encourages your fitness goals?",
                  "What external rewards or incentives will motivate your consistency?",
                  "How will you use social accountability to maintain motivation?",
                  "What competitions, challenges, or events will give you targets to train for?",
                  "How will you track and celebrate progress to maintain motivation?"
                ],
                examples: [
                  "Family members, workout partners, trainers, online communities, friends with similar goals",
                  "New clothes, equipment upgrades, massage, activities, experiences rather than food rewards",
                  "Social media posts, workout buddy check-ins, family member tracking, group challenges",
                  "5K races, fitness challenges, sports leagues, strength competitions, adventure goals",
                  "Progress photos, measurement tracking, performance improvements, achievement milestones"
                ]
              },
              {
                title: "Mindset & Psychology",
                prompts: [
                  "How will you maintain a growth mindset when facing fitness challenges?",
                  "What mental strategies will you use during difficult or unmotivated moments?",
                  "How will you reframe setbacks as learning opportunities rather than failures?",
                  "What self-talk patterns will you develop to encourage persistence?",
                  "How will you balance pushing yourself with self-compassion?"
                ],
                examples: [
                  "Focus on improvement over perfection, celebrate effort, learn from challenges, stay curious",
                  "Remember your why, visualize success, focus on how you'll feel after, use positive self-talk",
                  "What did I learn? How can I adjust? What worked well? This is temporary, I can restart",
                  "'I am someone who exercises,' 'I get stronger every day,' 'I can do hard things'",
                  "Push when feeling strong, rest when needed, speak kindly to yourself, progress not perfection"
                ]
              },
              {
                title: "Variety & Renewal",
                prompts: [
                  "How will you keep your fitness routine fresh and engaging over time?",
                  "What new challenges or goals will you set as you achieve current ones?",
                  "How will you prevent boredom from sabotaging your consistency?",
                  "What seasonal changes will you make to maintain interest?",
                  "How will you continue learning and growing in your fitness journey?"
                ],
                examples: [
                  "Try new classes, change workout music, vary locations, new equipment, different time of day",
                  "Strength goals, endurance targets, skill development, sport participation, helping others",
                  "Monthly new exercise, weekly routine variation, different workout styles, social elements",
                  "Summer outdoor activities, winter indoor focus, spring race training, fall hiking",
                  "Read fitness books, follow experts, take classes, work with trainers, join communities"
                ]
              }
            ]}
            tips={[
              "Connect with your deeper reasons for wanting fitness, not just surface-level goals",
              "Build multiple sources of motivation so you're not dependent on just one",
              "Focus on how exercise makes you feel rather than just how you look",
              "Create a support system of people who encourage your fitness journey",
              "Regularly revisit and refresh your goals to maintain excitement and purpose"
            ]}
          />
        </TabsContent>

        <TabsContent value="overcoming-barriers">
          <GuidedNotePage
            title="Overcoming Common Barriers"
            description="Identify and strategically address obstacles to consistent exercise"
            sections={[
              {
                title: "Time & Schedule Barriers",
                prompts: [
                  "What specific time challenges prevent you from exercising consistently?",
                  "How will you prioritize fitness when your schedule gets overwhelming?",
                  "What time management strategies will you implement to protect workout time?",
                  "How will you handle competing priorities that seem more urgent than exercise?",
                  "What minimum time commitment can you maintain even during your busiest periods?"
                ],
                examples: [
                  "Long work hours, family obligations, commute time, social commitments, household responsibilities",
                  "Schedule workouts like important meetings, wake up earlier, exercise during lunch breaks",
                  "Time blocking, saying no to non-essential commitments, batch similar activities, delegate tasks",
                  "Remember long-term health importance, protect workout time boundaries, communicate priorities to family",
                  "10-15 minute home workouts, walking meetings, stairs instead of elevators, weekend longer sessions"
                ]
              },
              {
                title: "Energy & Fatigue Issues",
                prompts: [
                  "When do you typically feel most and least energetic during the day?",
                  "How will you address chronic fatigue or low energy that interferes with exercise?",
                  "What lifestyle factors might be draining your energy for workouts?",
                  "How will you modify workouts when your energy levels are low?",
                  "What strategies will you use to build energy rather than drain it through exercise?"
                ],
                examples: [
                  "Morning energy peak, afternoon crash, evening second wind - time workouts accordingly",
                  "Improve sleep quality, manage stress, check nutrition, address medical issues, start very light",
                  "Poor sleep, high stress, inadequate nutrition, dehydration, over-scheduling, lack of recovery",
                  "Gentle yoga, short walks, stretching, lower intensity, focus on movement over intensity",
                  "Start with energizing activities, proper warm-up, post-workout nutrition, adequate rest"
                ]
              },
              {
                title: "Mental & Emotional Obstacles",
                prompts: [
                  "What negative thoughts or emotions typically sabotage your workout motivation?",
                  "How will you handle gym intimidation or social anxiety about exercising?",
                  "What perfectionist tendencies might interfere with consistent exercise?",
                  "How will you address body image issues that make exercise uncomfortable?",
                  "What mental strategies will help you push through resistance and excuses?"
                ],
                examples: [
                  "All-or-nothing thinking, comparison to others, fear of judgment, past failures, lack of confidence",
                  "Start at home, find beginner-friendly spaces, remember everyone started somewhere, focus on yourself",
                  "Progress over perfection, good enough is fine, consistency beats intensity, celebrate small wins",
                  "Focus on function over appearance, wear comfortable clothes, celebrate what body can do",
                  "Remember your why, use positive self-talk, focus on post-workout feelings, start before you feel ready"
                ]
              },
              {
                title: "Practical & Logistical Challenges",
                prompts: [
                  "What practical obstacles currently make it harder to exercise regularly?",
                  "How will you overcome transportation or location challenges?",
                  "What weather or seasonal factors interfere with your exercise routine?",
                  "How will you handle equipment, space, or resource limitations?",
                  "What family or social pressures work against your fitness goals?"
                ],
                examples: [
                  "Lack of childcare, no gym nearby, equipment costs, weather dependence, work schedule conflicts",
                  "Home workouts, online classes, walking/running routes, bodyweight exercises, community centers",
                  "Indoor alternatives, weather-appropriate gear, seasonal activity adjustment, flexible backup plans",
                  "Bodyweight exercises, minimal equipment routines, creative space use, budget-friendly options",
                  "Communicate goals clearly, involve family in activities, set boundaries, find supportive community"
                ]
              }
            ]}
            tips={[
              "Identify your specific barriers and create concrete solutions for each one",
              "Have backup plans ready for common obstacles before they occur",
              "Start with addressing the biggest barrier first, then work on others",
              "Focus on solutions and workarounds rather than dwelling on obstacles",
              "Remember that everyone faces barriers - persistence and creativity are key"
            ]}
          />
        </TabsContent>

        <TabsContent value="long-term-success">
          <GuidedNotePage
            title="Long-term Success Strategies"
            description="Build systems for maintaining fitness habits and motivation over years"
            sections={[
              {
                title: "Lifestyle Integration",
                prompts: [
                  "How will you make fitness a permanent part of your identity and lifestyle?",
                  "What systems will you create to maintain habits through life changes?",
                  "How will you adapt your fitness approach as you age and your needs change?",
                  "What role will fitness play in your family life and relationships?",
                  "How will you balance fitness with other important life priorities long-term?"
                ],
                examples: [
                  "See yourself as an active person, make movement non-negotiable, integrate into daily activities",
                  "Flexible routines, multiple backup plans, adaptable goals, core non-negotiables vs. flexible elements",
                  "Modify exercises for joint health, focus on functional fitness, adjust intensity appropriately",
                  "Family activities, modeling healthy behavior, involving spouse/children, active social plans",
                  "Efficient workouts, priority-based scheduling, seasonal adjustments, life phase adaptations"
                ]
              },
              {
                title: "Continuous Learning & Growth",
                prompts: [
                  "How will you continue learning about fitness and health throughout your journey?",
                  "What new skills or challenges will you pursue to maintain interest?",
                  "How will you seek feedback and guidance to improve your approach over time?",
                  "What fitness communities or resources will support your ongoing development?",
                  "How will you share your knowledge and help others on their fitness journeys?"
                ],
                examples: [
                  "Read books, follow experts, attend workshops, try new programs, listen to podcasts",
                  "New sports, advanced exercises, different training styles, outdoor adventures, competitions",
                  "Work with trainers periodically, join groups, get health assessments, track detailed progress",
                  "Online communities, local clubs, workout groups, professional networks, accountability partners",
                  "Mentor beginners, share experiences, lead by example, volunteer for health causes, inspire family"
                ]
              },
              {
                title: "Resilience & Comeback Strategies",
                prompts: [
                  "How will you handle inevitable breaks or setbacks in your fitness routine?",
                  "What strategies will help you restart after injuries, illness, or life disruptions?",
                  "How will you maintain a long-term perspective during challenging periods?",
                  "What support systems will help you through difficult times?",
                  "How will you use past comebacks to build confidence for future challenges?"
                ],
                examples: [
                  "Expect breaks as normal, focus on getting back quickly, don't wait for perfect timing",
                  "Start slower than before break, rebuild gradually, get medical clearance if needed, be patient",
                  "Focus on years not weeks, remember past successes, view challenges as temporary",
                  "Family, friends, professionals, online communities, accountability partners, coaches",
                  "Document comeback stories, remember resilience, trust in ability to restart, use past proof"
                ]
              },
              {
                title: "Legacy & Impact",
                prompts: [
                  "How will your fitness journey impact the next generation in your family?",
                  "What example do you want to set through your commitment to health and fitness?",
                  "How will you use your fitness journey to contribute to your community?",
                  "What health legacy do you want to leave for your loved ones?",
                  "How will you inspire others through your long-term fitness success?"
                ],
                examples: [
                  "Active family culture, teaching kids about health, breaking generational patterns",
                  "Consistency, self-care, discipline, resilience, making health a priority despite challenges",
                  "Volunteer for health causes, lead community groups, share knowledge, mentor others",
                  "Healthy aging, vitality in later years, reduced disease risk, active grandparent role",
                  "Share transformation story, help others start journeys, prove long-term success is possible"
                ]
              }
            ]}
            tips={[
              "Think in decades, not months - build habits that will serve you for life",
              "Create systems that can adapt to changing life circumstances",
              "Focus on building intrinsic motivation that doesn't depend on external factors",
              "Develop a growth mindset that sees challenges as opportunities to get stronger",
              "Remember that your fitness journey can inspire and help others in their lives"
            ]}
          />
        </TabsContent>

      </Tabs>
    </div>
  )
}