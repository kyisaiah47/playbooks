"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function GoalSetting() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Goal Setting & Planning</h1>
        <p className="text-muted-foreground">Define clear, achievable fitness goals and create your roadmap to success.</p>
      </div>

      <Tabs defaultValue="smart-goals" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="smart-goals" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">SMART Goals</span>
            <span className="sm:hidden">Goals</span>
          </TabsTrigger>
          <TabsTrigger value="fitness-assessment" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Assessment</span>
            <span className="sm:hidden">Assess</span>
          </TabsTrigger>
          <TabsTrigger value="timeline" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Timeline</span>
            <span className="sm:hidden">Time</span>
          </TabsTrigger>
          <TabsTrigger value="obstacles" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Obstacles</span>
            <span className="sm:hidden">Blocks</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="smart-goals">
          <GuidedNotePage
            title="SMART Fitness Goals"
            description="Create specific, measurable, achievable, relevant, and time-bound fitness goals"
            sections={[
              {
                title: "Primary Fitness Goals",
                prompts: [
                  "What is your main fitness goal for the next 6-12 months?",
                  "How will you measure success toward this goal?",
                  "What specific metrics or milestones will you track?",
                  "Why is this goal important to you personally?",
                  "What does achieving this goal look like in your daily life?"
                ],
                examples: [
                  "Lose 30 pounds, build muscle, run a 5K, improve flexibility, increase energy",
                  "Body weight, body fat %, strength metrics, endurance times, measurements",
                  "Pounds lost per month, lifting PRs, running pace improvements, flexibility tests",
                  "Health concerns, confidence, athletic performance, longevity, appearance",
                  "Fitting into certain clothes, climbing stairs easily, keeping up with kids"
                ]
              },
              {
                title: "Supporting Goals",
                prompts: [
                  "What secondary goals will support your main objective?",
                  "How many days per week do you want to exercise?",
                  "What lifestyle changes need to happen alongside your fitness goals?",
                  "What skills or knowledge do you need to develop?",
                  "How will you balance fitness with other life priorities?"
                ],
                examples: [
                  "Better sleep, improved nutrition, stress management, habit building",
                  "3-5 workout days, 2 rest days, 1 active recovery day per week",
                  "Meal prep, earlier bedtime, stress reduction, time management",
                  "Proper form, nutrition basics, recovery methods, program design",
                  "Morning workouts, family time, work commitments, social activities"
                ]
              },
              {
                title: "Goal Refinement",
                prompts: [
                  "How will you break your big goal into smaller, monthly milestones?",
                  "What would success look like at 30, 60, and 90 days?",
                  "How will you adjust goals if progress is faster or slower than expected?",
                  "What backup plans will you have if obstacles arise?",
                  "How will you celebrate achieving milestones along the way?"
                ],
                examples: [
                  "Lose 2-3 lbs per month, increase weights by 5-10% monthly, run 30 seconds faster",
                  "Establish routine, see initial changes, build momentum and see results",
                  "Reassess monthly, adjust timeline or methods, consult professionals if needed",
                  "Alternative workout locations, modified routines, different approaches",
                  "Non-food rewards, new workout clothes, massage, sharing progress with friends"
                ]
              },
              {
                title: "Accountability Systems",
                prompts: [
                  "Who will you share your goals with for accountability?",
                  "How will you track and document your progress regularly?",
                  "What systems will you put in place to stay consistent?",
                  "How often will you review and adjust your goals?",
                  "What consequences will you create for yourself if you skip workouts?"
                ],
                examples: [
                  "Workout partner, trainer, family member, online community, coach",
                  "Fitness app, journal, photos, measurements, workout log, calendar",
                  "Scheduled workout times, laid out clothes, gym bag ready, meal prep",
                  "Weekly check-ins, monthly assessments, quarterly goal reviews",
                  "Donation to charity, extra household chores, delayed rewards, social commitment"
                ]
              }
            ]}
            tips={[
              "Write down your goals and put them somewhere visible to see daily",
              "Make goals specific and measurable rather than vague like 'get in shape'",
              "Focus on 1-2 main goals at a time rather than trying to change everything",
              "Set realistic timelines - sustainable change takes 3-6 months minimum",
              "Share your goals with others to increase accountability and support"
            ]}
          />
        </TabsContent>

        <TabsContent value="fitness-assessment">
          <GuidedNotePage
            title="Current Fitness Assessment"
            description="Evaluate your starting point to set realistic goals and track progress"
            sections={[
              {
                title: "Physical Measurements",
                prompts: [
                  "What are your current body measurements and weight?",
                  "What is your current body composition if known?",
                  "How do your clothes fit right now?",
                  "What physical measurements matter most for your goals?",
                  "How often will you take these measurements moving forward?"
                ],
                examples: [
                  "Weight, waist, chest, arms, thighs, hips - record all in one session",
                  "Body fat percentage, muscle mass, BMI if available through scale or testing",
                  "Note tight areas, loose clothing, how you feel in different outfits",
                  "Focus on measurements that align with goals - waist for weight loss, arms for muscle",
                  "Weekly weigh-ins, monthly measurements, quarterly body composition checks"
                ]
              },
              {
                title: "Fitness Performance Baseline",
                prompts: [
                  "How many push-ups can you do in a row right now?",
                  "How long can you walk, jog, or run without stopping?",
                  "What's your current flexibility like in major muscle groups?",
                  "How many days last week did you do intentional exercise?",
                  "What physical activities make you feel winded or tired quickly?"
                ],
                examples: [
                  "Modified or full push-ups, plank hold time, bodyweight squats",
                  "10 minutes walking, 30 seconds jogging, 1 mile time, stairs without breathlessness",
                  "Toe touch, overhead reach, hip flexor tightness, shoulder mobility",
                  "0-7 days of structured exercise, daily movement, sports activities",
                  "Climbing stairs, carrying groceries, playing with kids, yard work"
                ]
              },
              {
                title: "Health & Lifestyle Factors",
                prompts: [
                  "What is your current energy level throughout the day?",
                  "How well are you sleeping and how does it affect your energy?",
                  "What are your current stress levels and how do you manage stress?",
                  "Do you have any injuries, pain, or physical limitations?",
                  "What does your current nutrition look like on a typical day?"
                ],
                examples: [
                  "Morning energy, afternoon crash, evening fatigue levels on 1-10 scale",
                  "7-9 hours sleep, sleep quality, wake up refreshed or tired",
                  "Work stress, family stress, financial stress, current coping methods",
                  "Back pain, knee issues, previous injuries, mobility restrictions, doctor clearance needed",
                  "Meal frequency, typical foods, water intake, alcohol consumption, supplements"
                ]
              },
              {
                title: "Past Experience & Preferences",
                prompts: [
                  "What types of physical activities have you enjoyed in the past?",
                  "What fitness approaches have worked or failed for you before?",
                  "What time of day do you have the most energy for exercise?",
                  "Do you prefer working out alone or with others?",
                  "What are your biggest challenges when it comes to staying active?"
                ],
                examples: [
                  "Sports, dancing, hiking, swimming, cycling, weightlifting, yoga, martial arts",
                  "Group classes, home workouts, gym routines, walking programs, diet plans",
                  "Early morning, lunch break, after work, evening, weekend sessions",
                  "Solo workouts, workout partner, group fitness classes, team sports",
                  "Time constraints, motivation, boredom, intimidation, lack of knowledge, injuries"
                ]
              }
            ]}
            tips={[
              "Take photos and measurements before starting - you'll appreciate having them later",
              "Be honest about your current fitness level to set realistic expectations",
              "Consider getting medical clearance if you have health concerns or haven't exercised in years",
              "Record your assessment in detail to track progress over time",
              "Focus on what you can do rather than what you can't - build from your strengths"
            ]}
          />
        </TabsContent>

        <TabsContent value="timeline">
          <GuidedNotePage
            title="Goal Timeline & Milestones"
            description="Create a realistic timeline with checkpoints to reach your fitness goals"
            sections={[
              {
                title: "90-Day Quick Wins",
                prompts: [
                  "What changes do you want to see in your first month?",
                  "What habits will you establish in the first 30 days?",
                  "How will you know you're on the right track by day 30?",
                  "What adjustments might you need to make after month one?",
                  "What will success look like at the 90-day mark?"
                ],
                examples: [
                  "Consistent workout routine, initial weight loss, improved energy, better sleep",
                  "3x/week workouts, daily walks, meal prep Sundays, 7+ hours sleep",
                  "Clothes fitting better, more energy, completing workouts easier, mood improvement",
                  "Increase workout intensity, modify schedule, address nutrition gaps, add variety",
                  "Established habits, visible progress, increased strength/endurance, confidence boost"
                ]
              },
              {
                title: "6-Month Milestones",
                prompts: [
                  "What major progress do you expect to see by month 6?",
                  "How will your fitness routine evolve over 6 months?",
                  "What new challenges will you introduce to keep progressing?",
                  "How will you maintain motivation through potential plateaus?",
                  "What lifestyle changes should be fully integrated by 6 months?"
                ],
                examples: [
                  "Significant weight loss, doubled strength, running longer distances, new clothing size",
                  "Increased frequency/intensity, new exercises, progressive overload, varied activities",
                  "Heavier weights, longer cardio sessions, new sports, fitness challenges",
                  "Progress photos, measurements, new goals, workout variety, social support",
                  "Automatic meal prep, regular sleep schedule, stress management, active lifestyle"
                ]
              },
              {
                title: "Long-term Vision",
                prompts: [
                  "Where do you want to be fitness-wise in one year?",
                  "What will your ideal weekly routine look like in 12 months?",
                  "How will achieving your fitness goals impact other areas of your life?",
                  "What new fitness goals might emerge as you progress?",
                  "How will you maintain your results long-term?"
                ],
                examples: [
                  "Goal weight achieved, strong and confident, completing challenging workouts, pain-free",
                  "5-6 workouts weekly, variety of activities, intuitive eating, active recovery",
                  "Better career performance, improved relationships, increased confidence, health benefits",
                  "Athletic events, advanced training, helping others, new sports, travel adventures",
                  "Sustainable habits, flexible approach, regular reassessment, lifestyle integration"
                ]
              },
              {
                title: "Seasonal Planning",
                prompts: [
                  "How will you adjust your fitness routine for different seasons?",
                  "What seasonal challenges might affect your progress?",
                  "How will you stay motivated during difficult times of year?",
                  "What seasonal activities can you incorporate into your fitness plan?",
                  "How will holidays and special events fit into your timeline?"
                ],
                examples: [
                  "Indoor workouts in winter, outdoor activities in summer, seasonal sports",
                  "Holiday eating, weather changes, busy work periods, family obligations, travel",
                  "Indoor alternatives, seasonal goals, holiday workout plans, support systems",
                  "Swimming in summer, skiing in winter, hiking in fall, outdoor sports",
                  "Maintenance phases during holidays, special event preparation, flexible scheduling"
                ]
              }
            ]}
            tips={[
              "Build in buffer time - fitness progress rarely happens exactly as planned",
              "Set both performance goals (run faster) and habit goals (workout 4x/week)",
              "Plan for setbacks and have strategies to get back on track quickly",
              "Celebrate small wins along the way to maintain motivation",
              "Adjust timelines based on real progress rather than sticking rigidly to original dates"
            ]}
          />
        </TabsContent>

        <TabsContent value="obstacles">
          <GuidedNotePage
            title="Obstacles & Solutions"
            description="Identify potential challenges and create strategies to overcome them"
            sections={[
              {
                title: "Time & Schedule Challenges",
                prompts: [
                  "What are your biggest time constraints for regular exercise?",
                  "How will you handle busy work periods or family obligations?",
                  "What's your backup plan when your usual workout time isn't available?",
                  "How can you make exercise more time-efficient?",
                  "What activities can you do in just 15-20 minutes when time is tight?"
                ],
                examples: [
                  "Long work hours, family commitments, commute time, social obligations, household duties",
                  "Morning workouts, lunch break walks, family-friendly activities, weekend catch-up",
                  "Home workouts, gym at different times, shorter sessions, bodyweight exercises",
                  "Compound exercises, circuit training, high-intensity intervals, active commuting",
                  "Bodyweight circuits, yoga flows, walk/run, stair climbing, desk exercises"
                ]
              },
              {
                title: "Motivation & Mental Barriers",
                prompts: [
                  "What typically causes you to lose motivation with fitness?",
                  "How will you handle days when you don't feel like exercising?",
                  "What negative self-talk or limiting beliefs might sabotage your progress?",
                  "How will you stay motivated when progress feels slow?",
                  "What strategies will you use to get back on track after missing workouts?"
                ],
                examples: [
                  "Slow progress, boredom, comparing to others, perfectionism, past failures",
                  "Commit to just 10 minutes, change clothes anyway, do light movement, focus on how you'll feel after",
                  "'I'm not athletic,' 'I'm too old,' 'I don't have time,' 'I always quit'",
                  "Progress photos, measurements, performance improvements, non-scale victories, support group",
                  "Don't wait for Monday, restart immediately, learn from what happened, adjust approach"
                ]
              },
              {
                title: "Physical & Health Obstacles",
                prompts: [
                  "What injuries or physical limitations might affect your exercise?",
                  "How will you modify workouts if you experience pain or discomfort?",
                  "What will you do if you get sick during your fitness journey?",
                  "How will you handle muscle soreness, especially when starting?",
                  "When should you seek professional help from trainers or medical professionals?"
                ],
                examples: [
                  "Back pain, knee issues, shoulder problems, arthritis, previous injuries, chronic conditions",
                  "Low-impact alternatives, physical therapy exercises, proper warm-up, listen to body",
                  "Focus on recovery, light movement when possible, restart gradually, don't rush back",
                  "Proper warm-up/cool-down, gradual progression, rest days, stretching, hydration",
                  "Persistent pain, form questions, plateau issues, complex health conditions, injury concerns"
                ]
              },
              {
                title: "Environmental & Social Challenges",
                prompts: [
                  "What environmental factors might interfere with your fitness routine?",
                  "How will you handle unsupportive comments from friends or family?",
                  "What will you do if your usual exercise location becomes unavailable?",
                  "How will you maintain your routine while traveling?",
                  "What social situations might challenge your fitness goals?"
                ],
                examples: [
                  "Weather, gym closures, equipment access, travel, work schedule changes, family needs",
                  "Focus on your goals, educate others, find supportive people, set boundaries",
                  "Home workout options, outdoor alternatives, different gym locations, online classes",
                  "Hotel gym research, bodyweight routines, walking/running, portable equipment",
                  "Happy hours, dinner parties, family gatherings, peer pressure, work functions"
                ]
              }
            ]}
            tips={[
              "Plan for obstacles before they happen rather than waiting to react",
              "Have multiple backup plans for common challenges like weather or time constraints",
              "Remember that consistency matters more than perfection - missing one workout isn't failure",
              "Build a support network of people who encourage your fitness goals",
              "Focus on what you can control and adapt when circumstances change"
            ]}
          />
        </TabsContent>

      </Tabs>
    </div>
  )
}