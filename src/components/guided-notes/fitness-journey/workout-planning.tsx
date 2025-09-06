"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function WorkoutPlanning() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Workout Planning & Scheduling</h1>
        <p className="text-muted-foreground">Create a sustainable workout routine that fits your goals, schedule, and preferences.</p>
      </div>

      <Tabs defaultValue="routine-design" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="routine-design" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Routine Design</span>
            <span className="sm:hidden">Design</span>
          </TabsTrigger>
          <TabsTrigger value="scheduling" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Scheduling</span>
            <span className="sm:hidden">Schedule</span>
          </TabsTrigger>
          <TabsTrigger value="progression" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Progression</span>
            <span className="sm:hidden">Progress</span>
          </TabsTrigger>
          <TabsTrigger value="variety" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Variety</span>
            <span className="sm:hidden">Variety</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="routine-design">
          <GuidedNotePage
            title="Workout Routine Design"
            description="Build a balanced workout routine that targets all fitness components"
            sections={[
              {
                title: "Exercise Selection",
                prompts: [
                  "What types of exercises align best with your primary fitness goals?",
                  "How will you balance cardio, strength training, and flexibility work?",
                  "What compound movements will form the foundation of your routine?",
                  "Which exercises do you enjoy enough to do consistently?",
                  "What equipment do you have access to regularly?"
                ],
                examples: [
                  "Strength training for muscle building, cardio for weight loss, functional movements for daily life",
                  "3 days strength, 2 days cardio, daily stretching or 2 days full-body, 1 day cardio, 1 day flexibility",
                  "Squats, deadlifts, push-ups, rows, planks, lunges - exercises that work multiple muscles",
                  "Dancing, hiking, swimming, cycling, sports, group fitness classes you actually look forward to",
                  "Home: bodyweight, resistance bands, dumbbells. Gym: full equipment range, machines, free weights"
                ]
              },
              {
                title: "Workout Structure",
                prompts: [
                  "How long should each workout session be for your schedule?",
                  "What will your warm-up and cool-down routines include?",
                  "How will you structure each workout for maximum efficiency?",
                  "What's the ideal workout intensity for your current fitness level?",
                  "How will you track sets, reps, and weights during workouts?"
                ],
                examples: [
                  "30-45 minutes for busy schedules, 45-60 minutes for more time, 20 minutes for quick sessions",
                  "5-10 minute dynamic warm-up, light cardio, movement prep, cool-down with stretching",
                  "Warm-up → compound movements → accessory exercises → cardio → cool-down",
                  "Moderate intensity you can maintain conversation, gradually increase over time",
                  "Workout app, notebook, phone notes, gym buddy tracking, pre-planned routines"
                ]
              },
              {
                title: "Training Split",
                prompts: [
                  "How many days per week can you realistically commit to working out?",
                  "Will you do full-body workouts or split routines by muscle group?",
                  "How will you balance workout days with adequate recovery time?",
                  "What does your ideal weekly workout schedule look like?",
                  "How will you handle missed workouts without derailing your routine?"
                ],
                examples: [
                  "3 days for beginners, 4-5 days for intermediate, 6 days for advanced, with rest days",
                  "Full-body 3x/week for beginners, upper/lower split 4x/week, body part splits for advanced",
                  "At least one full rest day, alternate muscle groups, listen to body fatigue signals",
                  "Monday/Wednesday/Friday workouts, Tuesday/Thursday cardio, weekend active recovery",
                  "Make up missed workouts next day, don't double up, maintain weekly total, flexible scheduling"
                ]
              },
              {
                title: "Program Customization",
                prompts: [
                  "How will you modify exercises for your current fitness level and limitations?",
                  "What backup exercises will you have for equipment unavailability?",
                  "How will you adapt your routine for different locations (home, gym, travel)?",
                  "What seasonal adjustments might you make to your workout routine?",
                  "How will you incorporate activities you enjoy into your structured routine?"
                ],
                examples: [
                  "Modified push-ups, assisted squats, low-impact cardio, shorter durations initially",
                  "Bodyweight versions of gym exercises, resistance bands for weights, stairs for cardio",
                  "Bodyweight routine for home/travel, full equipment routine for gym access",
                  "Outdoor activities in nice weather, indoor alternatives for bad weather, seasonal sports",
                  "Dance classes as cardio, hiking as active recovery, sports as conditioning work"
                ]
              }
            ]}
            tips={[
              "Start with fewer days per week and build consistency before adding more",
              "Focus on learning proper form with lighter weights before increasing intensity",
              "Include both exercises you enjoy and ones that challenge you",
              "Have backup plans for different scenarios (time constraints, equipment, location)",
              "Balance pushing yourself with listening to your body's recovery needs"
            ]}
          />
        </TabsContent>

        <TabsContent value="scheduling">
          <GuidedNotePage
            title="Workout Scheduling & Time Management"
            description="Create a realistic workout schedule that fits into your daily routine"
            sections={[
              {
                title: "Optimal Timing",
                prompts: [
                  "What time of day do you have the most energy for exercise?",
                  "When in your daily schedule can you consistently fit in workouts?",
                  "How will you handle scheduling around work, family, and other commitments?",
                  "What preparation can you do the night before to make workouts easier?",
                  "How long do you need for pre and post-workout routines?"
                ],
                examples: [
                  "Early morning before family wakes, lunch break, after work before dinner, evening after kids' bedtime",
                  "Same time daily builds habit, block calendar time, treat as non-negotiable appointment",
                  "Morning workouts avoid scheduling conflicts, lunch breaks for quick sessions, evening family time consideration",
                  "Lay out clothes, pack gym bag, prepare water bottle, plan workout routine, charge fitness tracker",
                  "10 minutes changing/prep, 5-10 minute warm-up, 30-45 minute workout, 10 minute cool-down, shower time"
                ]
              },
              {
                title: "Weekly Planning",
                prompts: [
                  "Which days of the week work best for longer, more intense workouts?",
                  "How will you schedule rest and recovery days strategically?",
                  "What does your ideal weekly workout calendar look like?",
                  "How will you plan around irregular schedules or changing weekly commitments?",
                  "What contingency plans will you have for disrupted schedules?"
                ],
                examples: [
                  "Monday motivation, Wednesday mid-week energy, Saturday morning leisure time for longer sessions",
                  "Day after intense workouts, busy work days, social commitment days, active recovery options",
                  "Monday: Upper body, Tuesday: Cardio, Wednesday: Lower body, Thursday: Yoga, Friday: Full body, Weekend: Outdoor activity",
                  "Flexible routine with multiple time options, shorter backup workouts, weekend makeup sessions",
                  "Home workouts for weather/transport issues, 20-minute versions of longer workouts, bodyweight alternatives"
                ]
              },
              {
                title: "Habit Formation",
                prompts: [
                  "What environmental cues can you set up to trigger your workout habit?",
                  "How will you link your new workout routine to existing habits?",
                  "What rewards will you give yourself for sticking to your schedule?",
                  "How will you track your consistency and celebrate streak milestones?",
                  "What accountability measures will help you maintain your schedule?"
                ],
                examples: [
                  "Workout clothes laid out, gym bag by door, alarm labeled 'workout time', calendar reminders",
                  "After morning coffee → workout, before lunch → walk, after work → gym, before dinner → exercise",
                  "New music playlist, workout clothes, massage, healthy meal, weekend activity you enjoy",
                  "Calendar marking, app tracking, habit journal, sharing with friends, monthly progress photos",
                  "Workout buddy, trainer appointments, group classes, family member checking in, social media posts"
                ]
              },
              {
                title: "Flexibility & Adaptation",
                prompts: [
                  "How will you maintain your routine during busy periods or travel?",
                  "What minimum viable workout can you do on your worst days?",
                  "How will you adjust your schedule for different seasons or life changes?",
                  "What signs will tell you it's time to modify your workout schedule?",
                  "How will you get back on track after breaks or disruptions?"
                ],
                examples: [
                  "Hotel room bodyweight routine, walking meetings, stairs instead of elevators, portable equipment",
                  "10 minutes of movement, walk around block, bodyweight exercises, stretching, anything over zero",
                  "Daylight savings adjustments, winter indoor alternatives, summer outdoor opportunities, job changes",
                  "Consistently missing workouts, feeling burned out, life stress increasing, schedule no longer working",
                  "Start with one workout, don't wait for perfect timing, lower intensity initially, rebuild gradually"
                ]
              }
            ]}
            tips={[
              "Schedule workouts like important appointments - write them in your calendar",
              "Start with the same time every day to build a strong habit",
              "Prepare everything you need the night before to eliminate morning friction",
              "Have a 'minimum viable workout' for days when time or energy is low",
              "Track your consistency to identify patterns and make improvements"
            ]}
          />
        </TabsContent>

        <TabsContent value="progression">
          <GuidedNotePage
            title="Progressive Training & Advancement"
            description="Systematically advance your workouts to continue seeing results"
            sections={[
              {
                title: "Strength Progression",
                prompts: [
                  "How will you progressively increase the challenge in your strength training?",
                  "What metrics will you track to measure strength improvements?",
                  "How often will you attempt to increase weights or reps?",
                  "What will you do when you hit a plateau in strength gains?",
                  "How will you balance progression with proper form and safety?"
                ],
                examples: [
                  "Add 5-10 lbs every 2 weeks, increase reps by 2-3 each week, add extra sets monthly",
                  "Maximum weight lifted, total reps completed, time under tension, bodyweight exercise progressions",
                  "Weekly increases for beginners, bi-weekly for intermediate, monthly for advanced",
                  "Deload week, change exercises, adjust rep ranges, improve form, increase frequency",
                  "Master current weight for all reps before increasing, video form checks, work with trainer"
                ]
              },
              {
                title: "Cardio Advancement",
                prompts: [
                  "How will you progressively improve your cardiovascular fitness?",
                  "What cardio metrics will you track for progress?",
                  "How will you increase intensity without overexertion?",
                  "What variety will you add to prevent cardio boredom?",
                  "How will you balance steady-state and high-intensity cardio?"
                ],
                examples: [
                  "Increase duration by 5 minutes weekly, faster pace monthly, add incline/resistance",
                  "Distance covered, time to complete set distance, heart rate recovery, perceived exertion",
                  "Talk test - maintain conversation ability, heart rate zones, gradual pace increases",
                  "Different machines, outdoor activities, sports, dance, interval training, group classes",
                  "2-3 steady-state sessions, 1-2 HIIT sessions per week, active recovery days"
                ]
              },
              {
                title: "Skill Development",
                prompts: [
                  "What movement skills do you want to develop or improve?",
                  "How will you practice and progress complex exercises safely?",
                  "What flexibility and mobility goals will you work toward?",
                  "How will you track improvements in movement quality?",
                  "What new fitness skills interest you for long-term development?"
                ],
                examples: [
                  "Perfect push-up form, unassisted pull-ups, deep squat, balance challenges, coordination drills",
                  "Break down into components, use assistance tools, practice daily, get coaching feedback",
                  "Touch toes, overhead reach, hip mobility, shoulder flexibility, deep squat hold",
                  "Range of motion measurements, form videos, balance time, coordination challenges",
                  "Olympic lifts, martial arts, yoga poses, dance moves, sports skills, gymnastics basics"
                ]
              },
              {
                title: "Program Periodization",
                prompts: [
                  "How often will you change your workout routine to prevent plateaus?",
                  "What cycles will you plan for different training focuses?",
                  "How will you balance pushing hard with recovery periods?",
                  "What signs indicate it's time to progress or modify your program?",
                  "How will you plan for deload weeks or recovery phases?"
                ],
                examples: [
                  "Major changes every 4-6 weeks, exercise variations every 2-3 weeks, same structure with progression",
                  "4-week strength focus, 4-week endurance, 2-week recovery, 6-week lean muscle phase",
                  "3 weeks progression + 1 week deload, listen to fatigue levels, schedule rest days",
                  "Easy completion of current program, boredom, consistent plateau, decreased motivation",
                  "Reduce intensity 50%, maintain movement, focus on recovery, prepare for next phase"
                ]
              }
            ]}
            tips={[
              "Progress gradually - small, consistent improvements beat dramatic jumps",
              "Track your workouts to see patterns and ensure you're actually progressing",
              "Plan deload weeks every 4-6 weeks to allow recovery and prevent burnout",
              "Change your routine every 4-8 weeks to prevent adaptation and boredom",
              "Focus on form improvements as much as strength or speed improvements"
            ]}
          />
        </TabsContent>

        <TabsContent value="variety">
          <GuidedNotePage
            title="Workout Variety & Motivation"
            description="Keep your workouts engaging and prevent boredom with strategic variety"
            sections={[
              {
                title: "Exercise Variations",
                prompts: [
                  "How will you add variety to prevent your workouts from becoming boring?",
                  "What alternative exercises can you substitute for your main movements?",
                  "How will you incorporate seasonal activities into your routine?",
                  "What new fitness classes or activities interest you?",
                  "How will you balance routine consistency with exciting variety?"
                ],
                examples: [
                  "Different rep ranges, new exercises monthly, various cardio machines, outdoor vs indoor options",
                  "Goblet squats for back squats, incline push-ups for regular, walking for jogging, bands for weights",
                  "Swimming in summer, skiing in winter, hiking in fall, outdoor running in spring",
                  "Yoga, Pilates, dance, martial arts, rock climbing, cycling, rowing, group fitness classes",
                  "Keep core exercises consistent, vary 20-30% of routine, theme weeks or months"
                ]
              },
              {
                title: "Location & Environment",
                prompts: [
                  "What different locations can you use for workouts?",
                  "How will you adapt your routine for outdoor exercise opportunities?",
                  "What home workout options will you develop for convenience?",
                  "How will you make your workout environment more motivating?",
                  "What travel workout strategies will you plan?"
                ],
                examples: [
                  "Home, gym, park, beach, hiking trails, office building stairs, hotel rooms, friend's house",
                  "Bodyweight circuits in parks, running/walking trails, outdoor yoga, sports courts, swimming",
                  "Living room strength training, kitchen counter exercises, stair workouts, online classes",
                  "Motivating music, good lighting, workout gear organization, inspiring photos or quotes",
                  "Bodyweight routines, resistance bands, hotel gym research, walking tours, local activities"
                ]
              },
              {
                title: "Training Styles",
                prompts: [
                  "What different training styles will you experiment with?",
                  "How will you incorporate both solo and group workout options?",
                  "What mind-body practices appeal to you?",
                  "How will you use technology to add variety to your workouts?",
                  "What competitive or challenge-based activities interest you?"
                ],
                examples: [
                  "Circuit training, HIIT, steady-state cardio, strength training, flexibility work, sports-specific",
                  "Solo gym sessions, group classes, workout buddy, team sports, online communities",
                  "Yoga, tai chi, Pilates, meditation walks, mindful movement, breathing exercises",
                  "Fitness apps, online classes, virtual trainers, workout videos, music playlists, trackers",
                  "Step challenges, races, fitness tests, social media challenges, gym competitions, sports leagues"
                ]
              },
              {
                title: "Motivational Strategies",
                prompts: [
                  "What rewards will you give yourself for trying new workouts?",
                  "How will you document and celebrate variety in your fitness journey?",
                  "What social elements can you add to make workouts more engaging?",
                  "How will you use variety to overcome workout ruts?",
                  "What themes or challenges can you create to maintain excitement?"
                ],
                examples: [
                  "New workout clothes, massage, healthy meal out, equipment upgrade, fun activity",
                  "Progress photos, workout journal, social media posts, before/after measurements, video logs",
                  "Workout classes, fitness groups, family activities, friend challenges, online communities",
                  "Try one new activity monthly, theme weeks, rotate between 3-4 routines, seasonal changes",
                  "30-day challenges, monthly fitness themes, seasonal goals, skill-building phases, adventure goals"
                ]
              }
            ]}
            tips={[
              "Plan variety in advance so you're not scrambling for new ideas when bored",
              "Keep a list of backup workouts for different scenarios and moods",
              "Try one new exercise or activity each month to expand your options",
              "Use variety strategically - change things up when motivation is low",
              "Document new activities you enjoy so you can repeat them later"
            ]}
          />
        </TabsContent>

      </Tabs>
    </div>
  )
}