"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function LifestyleIntegration() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Lifestyle Integration & Daily Habits</h1>
        <p className="text-muted-foreground">Seamlessly integrate fitness into your daily life for long-term success.</p>
      </div>

      <Tabs defaultValue="daily-integration" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="daily-integration" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Daily Integration</span>
            <span className="sm:hidden">Daily</span>
          </TabsTrigger>
          <TabsTrigger value="work-life-balance" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Work-Life Balance</span>
            <span className="sm:hidden">Work-Life</span>
          </TabsTrigger>
          <TabsTrigger value="travel-flexibility" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Travel & Flexibility</span>
            <span className="sm:hidden">Travel</span>
          </TabsTrigger>
          <TabsTrigger value="sustainable-habits" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Sustainable Habits</span>
            <span className="sm:hidden">Habits</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="daily-integration">
          <GuidedNotePage
            title="Daily Fitness Integration"
            description="Build fitness into your daily routine so it becomes as natural as brushing your teeth"
            sections={[
              {
                title: "Morning Movement Routines",
                prompts: [
                  "What movement or exercise will you incorporate into your morning routine?",
                  "How will you use your morning routine to set a positive tone for the day?",
                  "What time will you wake up to accommodate morning fitness activities?",
                  "How will you prepare the night before to make morning exercise effortless?",
                  "What backup morning routines will you have for different schedules or energy levels?"
                ],
                examples: [
                  "5-minute stretch, bodyweight exercises, walk/jog, yoga flow, strength training, meditation walk",
                  "Start with accomplishment, boost energy and mood, clear mind, build discipline and momentum",
                  "30 minutes earlier for workout, 15 minutes for stretching, same time daily for consistency",
                  "Lay out clothes, prepare water bottle, clear workout space, set everything up night before",
                  "Quick stretch for busy days, indoor routine for bad weather, bodyweight for travel, rest for illness"
                ]
              },
              {
                title: "Workday Movement Integration",
                prompts: [
                  "How will you incorporate movement throughout your workday?",
                  "What strategies will you use to combat prolonged sitting or standing?",
                  "How will you use breaks and transitions to add physical activity?",
                  "What workplace ergonomics and setup will support your health?",
                  "How will you make movement social and engaging during work hours?"
                ],
                examples: [
                  "Hourly movement breaks, walking meetings, stairs instead of elevators, desk exercises, lunch workouts",
                  "Standing desk breaks, stretch routines, posture checks, walking phone calls, frequent position changes",
                  "Walk between meetings, stretch before lunch, stairs after breaks, movement every hour",
                  "Proper chair height, monitor positioning, keyboard/mouse setup, lighting, movement reminders",
                  "Walking meetings with colleagues, group stretching, office fitness challenges, active social breaks"
                ]
              },
              {
                title: "Evening & Weekend Activities",
                prompts: [
                  "How will you stay active during evenings and weekends?",
                  "What family activities will incorporate physical movement?",
                  "How will you use leisure time for both relaxation and activity?",
                  "What seasonal evening and weekend activities will you plan?",
                  "How will you balance social time with staying active?"
                ],
                examples: [
                  "Evening walks, weekend hikes, recreational sports, active hobbies, family bike rides",
                  "Playground time, sports, walking trips, active chores, outdoor games, dance parties",
                  "Active relaxation like gentle yoga, nature walks, recreational sports, stress-relief movement",
                  "Summer evening walks, winter indoor activities, spring outdoor sports, fall hiking",
                  "Active social plans, walking while talking, group fitness activities, sports with friends"
                ]
              },
              {
                title: "Incidental Movement Maximization",
                prompts: [
                  "How will you increase incidental movement and daily activity levels?",
                  "What transportation choices will add more physical activity to your day?",
                  "How will you make household tasks more physically engaging?",
                  "What opportunities exist in your environment for more movement?",
                  "How will you track and celebrate increased daily movement?"
                ],
                examples: [
                  "Take stairs, park farther, walk errands, use commercial breaks for movement, pace while talking",
                  "Walk or bike for nearby trips, get off transit early, take stairs, choose active routes",
                  "Vigorous cleaning, gardening, playing with pets, active cooking, enthusiastic household tasks",
                  "Walking paths near home/work, stairs in buildings, parks for lunch breaks, active commute options",
                  "Step counter, movement reminders, daily activity goals, weekly activity summaries, celebration of increases"
                ]
              }
            ]}
            tips={[
              "Look for small opportunities throughout the day to add movement",
              "Make movement convenient by removing barriers and adding helpful cues",
              "Start with tiny habits and build them into larger routines over time",
              "Use environmental cues and reminders to prompt more movement",
              "Focus on consistency rather than intensity for daily movement integration"
            ]}
          />
        </TabsContent>

        <TabsContent value="work-life-balance">
          <GuidedNotePage
            title="Work-Life Balance & Fitness"
            description="Create boundaries and systems that protect your fitness time and priorities"
            sections={[
              {
                title: "Time Management & Boundaries",
                prompts: [
                  "How will you protect your workout time from work and other obligations?",
                  "What boundaries will you set with work hours to maintain fitness consistency?",
                  "How will you communicate your fitness priorities to colleagues and supervisors?",
                  "What time management strategies will help you fit fitness into busy schedules?",
                  "How will you handle guilt about taking time for fitness when other demands exist?"
                ],
                examples: [
                  "Schedule workouts like meetings, block calendar time, communicate boundaries clearly, stick to commitments",
                  "Leave office on time, no weekend work emails during workout time, lunch break protection",
                  "Share health goals professionally, explain productivity benefits, ask for support, demonstrate results",
                  "Time blocking, priority matrix, saying no to non-essentials, batching activities, efficient routines",
                  "Remember long-term health importance, recognize productivity benefits, self-care enables service to others"
                ]
              },
              {
                title: "Energy Management",
                prompts: [
                  "How will you manage your energy levels to maintain both work performance and fitness?",
                  "What strategies will you use when work stress affects your motivation to exercise?",
                  "How will you use fitness to improve your work performance and stress management?",
                  "What signs indicate you need to adjust your work-fitness balance?",
                  "How will you prevent fitness from becoming another source of stress?"
                ],
                examples: [
                  "Match workout intensity to energy levels, use exercise for energy boosts, prioritize sleep",
                  "Light exercise for stress relief, outdoor walks, gentle movement, focus on mood benefits",
                  "Exercise for mental clarity, stress reduction, improved sleep, better focus, increased resilience",
                  "Chronic fatigue, declining work performance, loss of exercise motivation, relationship strain, health issues",
                  "Flexible approach, progress not perfection mindset, adjust expectations, focus on consistency over intensity"
                ]
              },
              {
                title: "Professional Development Through Fitness",
                prompts: [
                  "How can your fitness activities support your professional goals and networking?",
                  "What leadership skills will you develop through your fitness journey?",
                  "How will you use fitness activities for business relationship building?",
                  "What professional opportunities might arise from your fitness interests and expertise?",
                  "How will you balance fitness passion with professional responsibilities?"
                ],
                examples: [
                  "Walking meetings, team building activities, wellness leadership, health and productivity demonstrations",
                  "Discipline, goal setting, resilience, time management, persistence, team cooperation, leadership by example",
                  "Golf, tennis, running groups, fitness classes with colleagues, active networking events",
                  "Wellness consulting, corporate training, health coaching, fitness writing, speaking opportunities",
                  "Keep fitness as foundation not distraction, integrate when appropriate, maintain professional focus"
                ]
              },
              {
                title: "Family Integration & Support",
                prompts: [
                  "How will you balance family obligations with personal fitness needs?",
                  "What family support systems will you create to maintain your fitness routine?",
                  "How will you involve your family in your fitness activities when appropriate?",
                  "What childcare or household management strategies will protect your workout time?",
                  "How will you model healthy work-life-fitness balance for your family?"
                ],
                examples: [
                  "Early morning workouts, family-friendly activities, shared household responsibilities, partner support",
                  "Partner coverage during workouts, childcare swaps, family members as workout partners, understanding agreements",
                  "Family hikes, bike rides, sports activities, playground workouts, active family time",
                  "Partner handles kids during workout, childcare at gym, nap time exercises, family helps with prep",
                  "Demonstrate priorities, show benefits of self-care, maintain family time, communicate needs clearly"
                ]
              }
            ]}
            tips={[
              "Treat your workout time as non-negotiable appointments with yourself",
              "Use fitness as a tool for better work performance rather than seeing it as competing priority",
              "Communicate your fitness goals and their benefits to get support from work and family",
              "Find ways to make fitness support rather than compete with other life priorities",
              "Remember that taking care of yourself enables you to better serve others"
            ]}
          />
        </TabsContent>

        <TabsContent value="travel-flexibility">
          <GuidedNotePage
            title="Travel & Schedule Flexibility"
            description="Maintain fitness consistency despite travel, irregular schedules, and changing circumstances"
            sections={[
              {
                title: "Travel Workout Strategies",
                prompts: [
                  "What portable workout routines will you use when traveling?",
                  "How will you research and utilize fitness facilities when traveling?",
                  "What equipment will you pack for maintaining workouts on the road?",
                  "How will you adapt your nutrition and hydration when traveling?",
                  "What strategies will help you maintain sleep and recovery while traveling?"
                ],
                examples: [
                  "Bodyweight circuits, hotel room routines, running/walking, online workout videos, resistance band exercises",
                  "Hotel gym research, day passes to local gyms, running routes, outdoor exercise areas, pool access",
                  "Resistance bands, jump rope, yoga mat, running shoes, workout apps downloaded offline",
                  "Pack healthy snacks, research restaurant options, stay hydrated, maintain meal timing when possible",
                  "Consistent sleep schedule, comfortable travel setup, limit alcohol, manage time zones gradually"
                ]
              },
              {
                title: "Irregular Schedule Management",
                prompts: [
                  "How will you maintain fitness consistency when your schedule is unpredictable?",
                  "What shift work or irregular hour strategies will you use for consistent exercise?",
                  "How will you adapt workout timing for different daily schedules?",
                  "What minimum viable workout will you commit to during chaotic periods?",
                  "How will you quickly get back on track after schedule disruptions?"
                ],
                examples: [
                  "Multiple workout time options, flexible routines, minimum daily movement commitment, backup plans",
                  "Post-shift workouts, pre-shift movement, split schedules, nap time considerations, energy management",
                  "Morning person does AM workouts, night owl does PM, match energy levels to workout intensity",
                  "10 minutes daily movement, basic bodyweight exercises, walk around block, stretching routine",
                  "Don't wait for perfect timing, restart immediately, maintain weekly goals, focus on next workout"
                ]
              },
              {
                title: "Seasonal & Weather Adaptations",
                prompts: [
                  "How will you maintain outdoor activities during different weather conditions?",
                  "What indoor alternatives will you have for weather-dependent activities?",
                  "How will you adjust your routine for different seasons and daylight changes?",
                  "What gear and clothing will you need for year-round outdoor activities?",
                  "How will you use seasonal changes as motivation for variety and new goals?"
                ],
                examples: [
                  "Layer clothing, waterproof gear, appropriate footwear, indoor backup plans, weather monitoring",
                  "Mall walking, home workouts, gym sessions, online classes, stair climbing, indoor sports",
                  "Earlier winter workouts, later summer activities, seasonal sports, artificial lighting use",
                  "Weather-appropriate clothing, reflective gear, traction aids, sun protection, visibility equipment",
                  "Summer hiking goals, winter strength focus, spring race training, fall preparation periods"
                ]
              },
              {
                title: "Technology & Remote Resources",
                prompts: [
                  "What technology will you use to maintain fitness consistency anywhere?",
                  "How will you access workout guidance when away from familiar routines?",
                  "What offline resources will you have available for areas with poor connectivity?",
                  "How will you track progress when away from usual equipment and environments?",
                  "What virtual accountability systems will help maintain consistency during travel?"
                ],
                examples: [
                  "Fitness apps, online workout videos, virtual trainers, progress tracking apps, social fitness communities",
                  "Downloaded workout videos, app-based routines, virtual personal training, online fitness classes",
                  "Downloaded content, written workout plans, bodyweight routine cards, basic equipment backup",
                  "Photo progress, subjective energy ratings, bodyweight performance, time-based metrics, app logging",
                  "Online workout buddies, social media check-ins, virtual challenges, remote accountability partners"
                ]
              }
            ]}
            tips={[
              "Plan your travel workouts in advance rather than hoping to figure it out on the road",
              "Pack minimal, versatile equipment that can provide a full-body workout",
              "Have both equipment-based and bodyweight-only workout options ready",
              "Use travel as an opportunity to try new activities and environments",
              "Focus on maintaining the habit rather than perfect workout execution when traveling"
            ]}
          />
        </TabsContent>

        <TabsContent value="sustainable-habits">
          <GuidedNotePage
            title="Sustainable Habit Formation"
            description="Build lasting fitness habits that will serve you for decades to come"
            sections={[
              {
                title: "Habit Loop Optimization",
                prompts: [
                  "What environmental cues will consistently trigger your fitness habits?",
                  "How will you create automatic routines that require minimal willpower?",
                  "What immediate rewards will reinforce your fitness behavior completion?",
                  "How will you stack fitness habits onto existing strong routines?",
                  "What will you do when your usual cues or routines are disrupted?"
                ],
                examples: [
                  "Workout clothes visible, gym bag ready, scheduled calendar alerts, specific time/location triggers",
                  "Same time daily, same sequence of activities, minimal decisions needed, prepared environment",
                  "Check calendar, feel accomplished, energized feeling, favorite music, small celebration",
                  "After morning coffee → workout, before shower → exercise, after dinner → walk",
                  "Backup cues ready, alternative routines prepared, flexibility while maintaining core habit"
                ]
              },
              {
                title: "Identity-Based Change",
                prompts: [
                  "How will you shift your identity to see yourself as a fit, active person?",
                  "What beliefs about yourself need to change to support long-term fitness success?",
                  "How will you act like the person you want to become starting today?",
                  "What language will you use when talking about yourself and your capabilities?",
                  "How will you reinforce your new identity through daily actions and choices?"
                ],
                examples: [
                  "'I am someone who exercises regularly,' 'I prioritize my health,' 'I am strong and capable'",
                  "Replace 'I'm not athletic' with 'I'm building fitness,' 'I don't have time' with 'I make time for priorities'",
                  "Make choices active person would make, speak like fit person, dress like someone who exercises",
                  "Use empowering language, focus on capability, celebrate effort, avoid limiting self-talk",
                  "Exercise even when unmotivated, choose active options, invest in fitness, talk about fitness positively"
                ]
              },
              {
                title: "Long-term Maintenance Strategies",
                prompts: [
                  "How will you maintain fitness habits through major life changes and challenges?",
                  "What systems will help you restart quickly after breaks or setbacks?",
                  "How will you prevent fitness plateau and boredom from derailing long-term consistency?",
                  "What support systems will sustain you through decades of fitness commitment?",
                  "How will you adapt your approach while maintaining core habits as you age?"
                ],
                examples: [
                  "Flexible routines, core non-negotiables, backup plans, gradual transitions, support networks",
                  "Don't wait for perfection, start with minimum viable routine, focus on next workout, progress gradually",
                  "Regular routine changes, new challenges, skill development, social elements, variety in activities",
                  "Workout partners, family support, professional guidance, online communities, accountability systems",
                  "Modify exercises for joint health, adjust intensity appropriately, focus on functional fitness, listen to body"
                ]
              },
              {
                title: "Integration with Life Values",
                prompts: [
                  "How does fitness align with your deepest values and life priorities?",
                  "What role will fitness play in helping you become the person you want to be?",
                  "How will your fitness journey support your ability to serve others and contribute?",
                  "What legacy do you want to create through your commitment to health and fitness?",
                  "How will staying fit enable you to pursue other important goals and dreams?"
                ],
                examples: [
                  "Family health, personal discipline, setting example, self-care, longevity, capability, confidence",
                  "Disciplined, resilient, energetic, confident person who takes care of responsibilities including self",
                  "Energy for family, stamina for work, health for service, strength for helping others, longevity for impact",
                  "Healthy aging example, family culture of health, proving sustainable change is possible, inspiring others",
                  "Travel adventures, active grandparenting, career longevity, volunteer work, pursuing passions with energy"
                ]
              }
            ]}
            tips={[
              "Focus on systems and identity change rather than just goal achievement",
              "Build habits that can adapt to changing life circumstances while maintaining core consistency",
              "Connect your fitness habits to your deeper values and life purpose for lasting motivation",
              "Create multiple backup plans and restart strategies for when life disrupts your routine",
              "Remember that lasting change happens through small, consistent actions over long periods"
            ]}
          />
        </TabsContent>

      </Tabs>
    </div>
  )
}