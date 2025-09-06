"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function ProgressTracking() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Progress Tracking & Measurements</h1>
        <p className="text-muted-foreground">Monitor your fitness journey with effective tracking methods and meaningful metrics.</p>
      </div>

      <Tabs defaultValue="measurement-methods" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="measurement-methods" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Measurements</span>
            <span className="sm:hidden">Measure</span>
          </TabsTrigger>
          <TabsTrigger value="tracking-systems" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Tracking</span>
            <span className="sm:hidden">Track</span>
          </TabsTrigger>
          <TabsTrigger value="analysis" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Analysis</span>
            <span className="sm:hidden">Analyze</span>
          </TabsTrigger>
          <TabsTrigger value="motivation" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Motivation</span>
            <span className="sm:hidden">Motivate</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="measurement-methods">
          <GuidedNotePage
            title="Measurement Methods & Metrics"
            description="Choose the right combination of metrics to track your fitness progress effectively"
            sections={[
              {
                title: "Body Composition Tracking",
                prompts: [
                  "What body composition metrics are most relevant to your fitness goals?",
                  "How often will you weigh yourself and what factors will you consider?",
                  "What body measurements will you take regularly?",
                  "How will you track changes in body fat percentage or muscle mass?",
                  "What tools and equipment do you need for accurate body composition tracking?"
                ],
                examples: [
                  "Weight, body fat %, muscle mass, BMI - focus on 2-3 that matter most for your goals",
                  "Weekly same day/time, daily for data trends, consider hormonal fluctuations, hydration effects",
                  "Waist, chest, arms, thighs, hips, neck - measure at consistent locations and times",
                  "DEXA scan, bioelectrical impedance scale, progress photos, how clothes fit, strength gains",
                  "Quality scale, measuring tape, body fat caliper, progress photo setup, consistent lighting"
                ]
              },
              {
                title: "Performance Metrics",
                prompts: [
                  "What fitness performance benchmarks will you track regularly?",
                  "How will you measure improvements in cardiovascular fitness?",
                  "What strength training metrics matter most for your goals?",
                  "How will you track flexibility and mobility improvements?",
                  "What functional fitness measures align with your daily life needs?"
                ],
                examples: [
                  "Push-up max, plank hold time, mile run time, max weights lifted, balance challenges",
                  "Resting heart rate, recovery heart rate, distance covered, pace improvements, VO2 max estimates",
                  "1-rep max, total volume lifted, progressive overload tracking, bodyweight exercise progressions",
                  "Range of motion measurements, yoga poses achieved, pain reduction, movement quality",
                  "Stair climbing without breathlessness, carrying groceries, playing with kids, daily energy levels"
                ]
              },
              {
                title: "Subjective Wellness Indicators",
                prompts: [
                  "How will you track your energy levels and overall well-being?",
                  "What sleep quality metrics will you monitor?",
                  "How will you assess your mood and mental health improvements?",
                  "What daily life improvements will you note as progress indicators?",
                  "How will you track your confidence and body image changes?"
                ],
                examples: [
                  "Daily energy rating 1-10, afternoon energy dips, workout energy, weekend activity levels",
                  "Hours slept, sleep quality rating, time to fall asleep, wake-up feeling, sleep tracker data",
                  "Stress levels, anxiety reduction, confidence improvements, mood stability, happiness ratings",
                  "Keeping up with kids, climbing stairs easily, better posture, less back pain, increased endurance",
                  "Comfortable in photos, trying new clothes, gym confidence, willingness to try new activities"
                ]
              },
              {
                title: "Visual Progress Documentation",
                prompts: [
                  "How will you use progress photos effectively to track changes?",
                  "What visual documentation will motivate you during challenging times?",
                  "How will you track changes in how clothes fit?",
                  "What before and after comparisons will be most meaningful to you?",
                  "How will you document your fitness journey for future motivation?"
                ],
                examples: [
                  "Same lighting, poses, clothing, time of day - front, side, back views monthly",
                  "Workout videos, exercise form improvements, activity photos, achievement moments",
                  "Specific clothing items as benchmarks, belt notches, ring fit, overall comfort",
                  "Side-by-side photos, measurement charts, performance comparisons, lifestyle activity photos",
                  "Fitness journal with photos, video diary, social media progress posts, achievement timeline"
                ]
              }
            ]}
            tips={[
              "Choose 3-5 key metrics to focus on rather than trying to track everything",
              "Take baseline measurements and photos before starting your fitness journey",
              "Track trends over time rather than fixating on daily fluctuations",
              "Include both objective measurements and subjective feelings in your tracking",
              "Celebrate non-scale victories as much as weight or measurement changes"
            ]}
          />
        </TabsContent>

        <TabsContent value="tracking-systems">
          <GuidedNotePage
            title="Tracking Systems & Tools"
            description="Set up efficient systems to consistently monitor and record your progress"
            sections={[
              {
                title: "Digital Tracking Tools",
                prompts: [
                  "What fitness apps or devices will you use for automated tracking?",
                  "How will you integrate wearable technology into your progress monitoring?",
                  "What features are most important to you in a fitness tracking app?",
                  "How will you sync data across different platforms and devices?",
                  "What backup methods will you have if technology fails?"
                ],
                examples: [
                  "MyFitnessPal, Fitbit app, Apple Health, Garmin Connect, Strava - pick 1-2 primary apps",
                  "Step counting, heart rate monitoring, sleep tracking, workout detection, recovery metrics",
                  "Easy data entry, progress visualization, goal setting, social features, export capabilities",
                  "Apple Health as central hub, automatic syncing between apps, regular data exports",
                  "Manual tracking sheets, photo backups, written notes, cloud storage for important data"
                ]
              },
              {
                title: "Manual Tracking Methods",
                prompts: [
                  "What information will you track manually in a fitness journal?",
                  "How will you organize your tracking sheets or templates?",
                  "What daily, weekly, and monthly tracking routines will you establish?",
                  "How will you make manual tracking convenient and sustainable?",
                  "What visual elements will you include in your manual tracking?"
                ],
                examples: [
                  "Workout details, measurements, mood, energy, sleep quality, photos, personal observations",
                  "Monthly measurement sheets, weekly workout logs, daily wellness check-ins, goal progress pages",
                  "Morning weight/measurements, post-workout notes, weekly photo/measurement sessions",
                  "Keep supplies handy, use templates, mobile-friendly formats, quick entry methods",
                  "Progress charts, before/after photos, measurement graphs, achievement stickers, color coding"
                ]
              },
              {
                title: "Data Organization & Storage",
                prompts: [
                  "How will you organize and store your fitness data for easy access?",
                  "What system will you use to review and analyze your progress regularly?",
                  "How will you back up important fitness data and measurements?",
                  "What privacy considerations do you have for your fitness information?",
                  "How will you share appropriate progress data with supporters or professionals?"
                ],
                examples: [
                  "Cloud storage folders by date/type, spreadsheet organization, app data exports, physical binders",
                  "Weekly data review, monthly progress reports, quarterly goal assessments, annual summaries",
                  "Multiple cloud services, external drive backups, printed key measurements, photo storage",
                  "Private apps vs social sharing, data sharing with trainers, medical privacy considerations",
                  "Progress photos for accountability partner, measurement data for trainer, general updates for family"
                ]
              },
              {
                title: "Consistency & Habit Building",
                prompts: [
                  "What daily tracking habits will you establish for consistent data collection?",
                  "How will you remember to track measurements and progress photos regularly?",
                  "What will you do when you miss tracking for a few days?",
                  "How will you maintain tracking motivation during plateaus or setbacks?",
                  "What minimum viable tracking will you maintain during busy periods?"
                ],
                examples: [
                  "Morning weight, post-workout notes, evening wellness check-in, weekend measurement sessions",
                  "Phone reminders, calendar appointments, habit stacking with existing routines, tracking buddy",
                  "Don't try to recreate missing data, restart immediately, focus on future consistency",
                  "Remember tracking helps identify what's working, focus on non-scale victories, seek support",
                  "Weekly weight only, basic workout notes, monthly photos - keep bare minimum going"
                ]
              }
            ]}
            tips={[
              "Start with simple tracking and add complexity gradually as habits form",
              "Choose tools that integrate well together to avoid data silos",
              "Set up regular reminders for measurements and photos until they become automatic",
              "Keep tracking as simple as possible while still providing useful information",
              "Review your tracking system monthly and adjust what isn't working"
            ]}
          />
        </TabsContent>

        <TabsContent value="analysis">
          <GuidedNotePage
            title="Progress Analysis & Interpretation"
            description="Learn to interpret your data and make informed adjustments to your fitness plan"
            sections={[
              {
                title: "Data Interpretation Skills",
                prompts: [
                  "How will you identify meaningful trends versus random fluctuations in your data?",
                  "What time frames will you use to evaluate different types of progress?",
                  "How will you account for external factors that might affect your measurements?",
                  "What progress patterns might indicate you need to adjust your approach?",
                  "How will you separate correlation from causation in your fitness data?"
                ],
                examples: [
                  "Look at weekly averages, 4-week trends, ignore daily fluctuations, compare similar time periods",
                  "Daily for energy/mood, weekly for weight trends, monthly for measurements, quarterly for major goals",
                  "Menstrual cycle, stress levels, sleep quality, hydration, food intake, medication changes",
                  "Consistent plateaus, declining energy, loss of motivation, recurring injuries, social withdrawal",
                  "Weight loss coinciding with diet changes vs. seasonal factors, strength gains vs. measurement technique"
                ]
              },
              {
                title: "Progress Milestones & Benchmarks",
                prompts: [
                  "What progress milestones will you set for different time periods?",
                  "How will you celebrate achievements while maintaining forward momentum?",
                  "What will you do when progress is slower than expected?",
                  "How will you adjust goals based on actual progress versus initial projections?",
                  "What non-scale victories will you recognize and celebrate?"
                ],
                examples: [
                  "30-day habit establishment, 90-day visible changes, 6-month major milestones, 1-year transformation",
                  "Non-food rewards, share with support network, document achievements, set new challenges",
                  "Reassess methods, check for hidden progress, adjust timelines, consider professional help",
                  "Extend timelines if needed, break larger goals into smaller steps, maintain realistic expectations",
                  "Increased energy, better sleep, improved mood, clothes fitting better, strength gains, endurance improvements"
                ]
              },
              {
                title: "Problem-Solving & Troubleshooting",
                prompts: [
                  "What will you do when your tracking data shows unexpected results?",
                  "How will you identify and address plateaus in your progress?",
                  "What patterns might indicate you need to change your exercise or nutrition approach?",
                  "How will you differentiate between temporary setbacks and fundamental issues?",
                  "What resources will you consult when you can't interpret your progress data?"
                ],
                examples: [
                  "Double-check tracking accuracy, consider external factors, look for longer-term trends",
                  "Change exercise routine, adjust nutrition, increase/decrease intensity, add variety, rest more",
                  "Consistent fatigue, recurring injuries, loss of motivation, social impacts, stalled measurements",
                  "Short-term stress vs. chronic issues, temporary busy periods vs. sustainable routine problems",
                  "Fitness professionals, online communities, reputable fitness websites, medical professionals"
                ]
              },
              {
                title: "Regular Progress Reviews",
                prompts: [
                  "How often will you conduct formal progress reviews?",
                  "What questions will you ask yourself during these review sessions?",
                  "How will you document insights and lessons learned from your progress analysis?",
                  "What adjustments will you make based on your regular progress reviews?",
                  "How will you maintain objectivity when analyzing your own progress?"
                ],
                examples: [
                  "Weekly quick check-ins, monthly detailed reviews, quarterly goal assessments, annual planning sessions",
                  "What's working well? What's challenging? What needs adjustment? What support do I need?",
                  "Progress journal entries, lesson learned lists, successful strategy notes, challenge solutions",
                  "Workout routine changes, nutrition modifications, goal adjustments, timeline updates, support needs",
                  "Use data over feelings, consult objective measures, get outside perspectives, focus on trends not daily changes"
                ]
              }
            ]}
            tips={[
              "Focus on trends over time rather than daily fluctuations in your data",
              "Look for progress in multiple areas, not just weight or appearance changes",
              "Be patient - meaningful fitness progress often takes 6-12 weeks to become apparent",
              "Consider all factors that might influence your measurements, not just diet and exercise",
              "Adjust your approach based on data, but give changes time to show results before switching again"
            ]}
          />
        </TabsContent>

        <TabsContent value="motivation">
          <GuidedNotePage
            title="Motivation Through Progress Tracking"
            description="Use your progress data to maintain motivation and celebrate your fitness journey"
            sections={[
              {
                title: "Celebrating Progress",
                prompts: [
                  "How will you celebrate different types and sizes of achievements?",
                  "What non-food rewards will you give yourself for reaching milestones?",
                  "How will you share your progress with supportive friends and family?",
                  "What creative ways will you document and display your achievements?",
                  "How will you maintain celebration momentum for long-term goals?"
                ],
                examples: [
                  "Small daily victories, weekly achievements, monthly milestones, major quarterly celebrations",
                  "New workout clothes, massage, movie night, equipment upgrade, fun activity, time for hobbies",
                  "Progress photos, measurement improvements, performance gains, energy/mood improvements",
                  "Progress wall, achievement journal, before/after comparisons, video diaries, social media posts",
                  "Set multiple milestone celebrations, focus on habit consistency, appreciate small daily wins"
                ]
              },
              {
                title: "Overcoming Plateaus",
                prompts: [
                  "How will you use your tracking data to maintain motivation during plateaus?",
                  "What non-scale victories will you look for when weight or measurements stall?",
                  "How will you reframe temporary setbacks as part of the normal progress journey?",
                  "What support will you seek when progress feels discouraging?",
                  "How will you adjust your tracking focus during challenging periods?"
                ],
                examples: [
                  "Look at longer trends, review all metrics not just weight, remember past successes",
                  "Strength gains, endurance improvements, better sleep, mood stability, energy increases, pain reduction",
                  "Plateaus are normal, body adapting, building sustainable habits, long-term perspective",
                  "Accountability partner, online community, fitness professional, family support, professional counseling",
                  "Focus on consistency metrics, habit tracking, well-being measures, performance gains"
                ]
              },
              {
                title: "Long-term Motivation Strategies",
                prompts: [
                  "How will you use your progress history to maintain motivation over months and years?",
                  "What systems will you create to revisit past achievements when current progress feels slow?",
                  "How will you set new challenges based on your documented progress?",
                  "What legacy will you create with your fitness journey documentation?",
                  "How will you use your progress to inspire and help others?"
                ],
                examples: [
                  "Progress timeline, anniversary celebrations, year-over-year comparisons, transformation documentation",
                  "Progress photo collections, achievement lists, journal entries, video diary reviews",
                  "New fitness goals based on current abilities, skill challenges, event participation, helping others",
                  "Family health legacy, inspiring children/grandchildren, documenting transformation story",
                  "Share story publicly, mentor others, contribute to support communities, volunteer for health causes"
                ]
              },
              {
                title: "Motivation During Setbacks",
                prompts: [
                  "How will you use your tracking data to bounce back from temporary setbacks?",
                  "What evidence will you look for that your fitness foundation is still strong?",
                  "How will you maintain perspective during challenging life periods?",
                  "What minimum progress tracking will you maintain during difficult times?",
                  "How will you rebuild momentum after breaks in your routine?"
                ],
                examples: [
                  "Review past comebacks, remember muscle memory, focus on health gains beyond appearance",
                  "Maintained strength after breaks, quick return of energy, retained healthy habits, knowledge gained",
                  "Fitness is lifelong journey, temporary breaks are normal, focus on overall trajectory",
                  "Weekly weight, basic energy ratings, monthly photos, simplified tracking systems",
                  "Start with small wins, review past successes, gradual increase in tracking complexity"
                ]
              }
            ]}
            tips={[
              "Create visual representations of your progress to see improvements clearly",
              "Focus on the positive changes you can document, no matter how small",
              "Use your progress data to prove to yourself that your efforts are working",
              "Share your achievements with people who will celebrate with you",
              "Remember that progress isn't always linear - track trends, not daily changes"
            ]}
          />
        </TabsContent>

      </Tabs>
    </div>
  )
}