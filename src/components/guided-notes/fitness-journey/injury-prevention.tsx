"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function InjuryPrevention() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Injury Prevention & Recovery</h1>
        <p className="text-muted-foreground">Protect your body and create sustainable practices for long-term fitness success.</p>
      </div>

      <Tabs defaultValue="prevention-basics" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="prevention-basics" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Prevention Basics</span>
            <span className="sm:hidden">Basics</span>
          </TabsTrigger>
          <TabsTrigger value="warmup-cooldown" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Warm-up & Cool-down</span>
            <span className="sm:hidden">Warm-up</span>
          </TabsTrigger>
          <TabsTrigger value="recovery-rest" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Recovery & Rest</span>
            <span className="sm:hidden">Recovery</span>
          </TabsTrigger>
          <TabsTrigger value="injury-management" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Injury Management</span>
            <span className="sm:hidden">Manage</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="prevention-basics">
          <GuidedNotePage
            title="Injury Prevention Fundamentals"
            description="Learn essential principles to keep your body safe during exercise"
            sections={[
              {
                title: "Proper Form & Technique",
                prompts: [
                  "How will you ensure you're using proper form in all your exercises?",
                  "What resources will you use to learn correct movement patterns?",
                  "How will you check and correct your form regularly?",
                  "What signs indicate you might be using poor form during exercise?",
                  "How will you balance challenging yourself with maintaining good technique?"
                ],
                examples: [
                  "Start with bodyweight, learn movements slowly, practice with light weights, focus on quality",
                  "YouTube tutorials, fitness apps, personal trainer sessions, group classes, instructional books",
                  "Mirror checks, video yourself, ask for feedback, work with trainer periodically",
                  "Joint pain, muscle strain, fatigue leading to form breakdown, inability to complete full range",
                  "Master current weight before adding more, stop set when form deteriorates, ego vs. safety"
                ]
              },
              {
                title: "Progressive Overload Principles",
                prompts: [
                  "How will you gradually increase exercise intensity to avoid overuse injuries?",
                  "What is an appropriate rate of progression for your fitness level?",
                  "How will you monitor your body's response to increased training demands?",
                  "What signals indicate you might be progressing too quickly?",
                  "How will you balance pushing yourself with giving your body time to adapt?"
                ],
                examples: [
                  "Increase weight/reps/time by 5-10% weekly, add one new exercise per week, gradual complexity increase",
                  "Beginners: slower progression, intermediates: moderate increases, listen to body's feedback",
                  "Track energy levels, sleep quality, soreness duration, mood changes, performance trends",
                  "Persistent fatigue, increased injury risk, decreased performance, poor sleep, irritability",
                  "Challenge yourself within limits, schedule deload weeks, prioritize adaptation over speed"
                ]
              },
              {
                title: "Body Awareness & Listening",
                prompts: [
                  "How will you develop better awareness of your body's signals during exercise?",
                  "What's the difference between normal muscle fatigue and potential injury pain?",
                  "How will you respond when you notice unusual discomfort or pain?",
                  "What daily body awareness practices will you establish?",
                  "How will you track patterns in how your body feels and responds?"
                ],
                examples: [
                  "Mindful movement, body scans before/after workouts, rate perceived exertion, pain vs. discomfort awareness",
                  "Muscle fatigue: dull, spreads over area, improves with rest; injury pain: sharp, localized, worsens with movement",
                  "Stop activity, assess pain, rest and ice if needed, seek medical attention for persistent pain",
                  "Morning body check, stretch and mobility work, posture awareness, sleep quality assessment",
                  "Daily energy/pain ratings, workout performance notes, sleep and stress tracking, pattern identification"
                ]
              },
              {
                title: "Risk Factor Management",
                prompts: [
                  "What personal risk factors do you have for exercise-related injuries?",
                  "How will you address previous injuries or chronic conditions in your exercise planning?",
                  "What lifestyle factors might increase your injury risk?",
                  "How will you modify exercises to work around physical limitations?",
                  "What professional guidance do you need for safe exercise with your health conditions?"
                ],
                examples: [
                  "Previous injuries, joint problems, muscle imbalances, age-related factors, fitness level",
                  "Physical therapy exercises, strength imbalances correction, modified movement patterns, doctor clearance",
                  "Poor sleep, high stress, inadequate nutrition, dehydration, overwork, lack of recovery time",
                  "Low-impact alternatives, range of motion adjustments, supportive equipment, alternative exercises",
                  "Medical clearance, physical therapist consultation, certified trainer guidance, specialist recommendations"
                ]
              }
            ]}
            tips={[
              "Always prioritize proper form over lifting heavier weights or going faster",
              "Learn to distinguish between normal exercise discomfort and pain that signals injury",
              "Progress gradually - your connective tissues need time to adapt to increased demands",
              "Don't ignore persistent pain or discomfort - address issues early before they become serious",
              "Get professional guidance when starting new exercises or dealing with existing injuries"
            ]}
          />
        </TabsContent>

        <TabsContent value="warmup-cooldown">
          <GuidedNotePage
            title="Warm-up & Cool-down Routines"
            description="Create effective pre and post-workout routines for injury prevention"
            sections={[
              {
                title: "Dynamic Warm-up Design",
                prompts: [
                  "What dynamic warm-up routine will you perform before each workout?",
                  "How will you tailor your warm-up to different types of workouts?",
                  "What movements will help prepare your body for your main exercises?",
                  "How long should your warm-up be for different workout intensities?",
                  "What signs indicate you're adequately warmed up and ready to exercise?"
                ],
                examples: [
                  "Light cardio, joint rotations, dynamic stretches, movement prep, gradual intensity increase",
                  "Cardio day: more movement prep; strength day: joint mobility and muscle activation",
                  "Leg swings before squats, arm circles before upper body, hip openers before deadlifts",
                  "5-10 minutes light activity, 10-15 minutes for intense workouts, shorter for light exercise",
                  "Light sweat, increased heart rate, joints feel mobile, muscles feel activated and ready"
                ]
              },
              {
                title: "Mobility & Movement Prep",
                prompts: [
                  "What mobility exercises will you include in your warm-up routine?",
                  "How will you address your specific areas of tightness or restriction?",
                  "What movement patterns will you practice before your main workout?",
                  "How will you incorporate balance and stability challenges into your warm-up?",
                  "What tools or equipment will you use for mobility work?"
                ],
                examples: [
                  "Hip circles, shoulder rolls, ankle rotations, spinal twists, leg swings, arm swings",
                  "Hip flexor stretches, thoracic spine mobility, shoulder blade activation, calf stretches",
                  "Bodyweight squats, push-up variations, walking lunges, plank holds, glute bridges",
                  "Single-leg stands, walking lunges, stability ball exercises, balance challenges",
                  "Resistance bands, foam roller, lacrosse ball, yoga blocks, stability ball"
                ]
              },
              {
                title: "Cool-down & Recovery",
                prompts: [
                  "What cool-down routine will you follow after each workout?",
                  "How will you gradually bring your heart rate and breathing back to normal?",
                  "What static stretching routine will you perform post-workout?",
                  "How will you address muscle tension and soreness immediately after exercise?",
                  "What recovery techniques will you incorporate into your cool-down?"
                ],
                examples: [
                  "Gradual activity reduction, walking, gentle stretching, deep breathing, hydration",
                  "5-10 minutes easy walking, deep breathing exercises, gentle movements until heart rate normalizes",
                  "Hold stretches 15-30 seconds, focus on worked muscles, full body coverage, relaxed breathing",
                  "Gentle stretching, foam rolling, ice bath/shower, hydration, proper nutrition timing",
                  "Foam rolling, self-massage, meditation, gratitude practice, workout logging, progress notes"
                ]
              },
              {
                title: "Timing & Consistency",
                prompts: [
                  "How will you ensure you always make time for proper warm-up and cool-down?",
                  "What abbreviated versions will you use when time is limited?",
                  "How will you adjust warm-up intensity for different workout types?",
                  "What environmental factors (weather, location) will affect your routines?",
                  "How will you make warm-up and cool-down as automatic as the workout itself?"
                ],
                examples: [
                  "Build into total workout time, non-negotiable components, set minimum requirements",
                  "5-minute essentials version, key movements only, focus on most important areas",
                  "Light warm-up for easy days, thorough for intense workouts, sport-specific preparations",
                  "Indoor alternatives for weather, space-appropriate modifications, equipment availability",
                  "Same routine sequence, habit stacking, automatic timing, muscle memory development"
                ]
              }
            ]}
            tips={[
              "Never skip your warm-up, even for short or light workouts",
              "Focus on dynamic movements during warm-up, save static stretching for cool-down",
              "Tailor your warm-up to prepare for the specific movements in your workout",
              "Use cool-down time for reflection and gratitude about your workout accomplishment",
              "Make warm-up and cool-down automatic parts of every exercise session"
            ]}
          />
        </TabsContent>

        <TabsContent value="recovery-rest">
          <GuidedNotePage
            title="Recovery & Rest Strategies"
            description="Optimize recovery to prevent injury and maximize fitness gains"
            sections={[
              {
                title: "Sleep & Recovery",
                prompts: [
                  "How will you optimize your sleep to support recovery and injury prevention?",
                  "What sleep schedule will you maintain to support your fitness goals?",
                  "How will you create an environment that promotes quality recovery sleep?",
                  "What signs indicate you're not getting adequate recovery through sleep?",
                  "How will you adjust your workout intensity based on your sleep quality?"
                ],
                examples: [
                  "7-9 hours nightly, consistent bedtime, dark/cool room, no screens before bed",
                  "Same bedtime/wake time daily, earlier bedtime on workout days, weekend consistency",
                  "Blackout curtains, comfortable temperature, white noise, comfortable mattress, relaxing routine",
                  "Persistent fatigue, poor workout performance, frequent illness, mood changes, slow recovery",
                  "Lighter workouts after poor sleep, intensity based on energy levels, rest days when needed"
                ]
              },
              {
                title: "Rest Days & Active Recovery",
                prompts: [
                  "How many rest days per week will you take and how will you schedule them?",
                  "What activities will you do on rest days to promote recovery?",
                  "How will you resist the urge to work out when your body needs rest?",
                  "What signs indicate you need an extra rest day or deload week?",
                  "How will you make rest days feel productive and valuable?"
                ],
                examples: [
                  "1-2 full rest days weekly, day after intense workouts, listen to body fatigue signals",
                  "Gentle walking, light stretching, yoga, massage, leisure activities, stress reduction",
                  "Remember rest improves performance, plan enjoyable activities, trust the process",
                  "Persistent soreness, declining performance, lack of motivation, frequent minor injuries, poor sleep",
                  "Focus on other health habits, meal prep, life activities, hobbies, social time"
                ]
              },
              {
                title: "Stress Management",
                prompts: [
                  "How will you manage stress to support recovery and reduce injury risk?",
                  "What stress reduction techniques will you incorporate into your routine?",
                  "How does stress in other life areas affect your exercise recovery?",
                  "What work-life balance strategies will support your fitness goals?",
                  "How will you recognize when stress is impacting your physical performance?"
                ],
                examples: [
                  "Meditation, deep breathing, time management, boundary setting, relaxation techniques",
                  "Daily meditation, nature time, journaling, social connection, hobbies, adequate breaks",
                  "High work stress delays recovery, relationship stress affects sleep, financial stress impacts immunity",
                  "Protect workout time, set work boundaries, schedule downtime, delegate when possible",
                  "Poor workout performance, frequent illness, irritability, sleep problems, increased injury rates"
                ]
              },
              {
                title: "Nutrition & Hydration for Recovery",
                prompts: [
                  "How will you fuel your recovery with appropriate nutrition?",
                  "What post-workout nutrition timing and choices will optimize recovery?",
                  "How will you maintain adequate hydration to support recovery processes?",
                  "What anti-inflammatory foods will you include to reduce exercise-induced inflammation?",
                  "How will you balance performance nutrition with overall health goals?"
                ],
                examples: [
                  "Protein for muscle repair, carbs for glycogen replenishment, healthy fats for inflammation control",
                  "Protein and carbs within 30 minutes post-workout, balanced meals throughout day",
                  "8-10 glasses daily, more on workout days, monitor urine color, replace electrolytes",
                  "Berries, leafy greens, fatty fish, nuts, turmeric, tart cherry juice, colorful vegetables",
                  "Focus on whole foods, adequate calories for training demands, micronutrient variety"
                ]
              }
            ]}
            tips={[
              "Recovery is when your body actually gets stronger - don't undervalue rest",
              "Listen to your body and take extra rest when you're feeling overly fatigued",
              "Quality sleep is one of the most important factors for injury prevention",
              "Active recovery is often better than complete inactivity on rest days",
              "Manage life stress as it directly impacts your physical recovery ability"
            ]}
          />
        </TabsContent>

        <TabsContent value="injury-management">
          <GuidedNotePage
            title="Injury Management & Rehabilitation"
            description="Handle injuries appropriately and return to exercise safely"
            sections={[
              {
                title: "Early Injury Response",
                prompts: [
                  "How will you recognize the early signs of a potential injury?",
                  "What immediate steps will you take when you suspect an injury?",
                  "When should you seek professional medical attention for exercise-related pain?",
                  "How will you document and track any injuries or pain patterns?",
                  "What first aid supplies and knowledge do you need for common exercise injuries?"
                ],
                examples: [
                  "Sharp pain, swelling, loss of function, pain that doesn't improve with rest, joint instability",
                  "Stop activity immediately, apply ice, elevate if appropriate, rest, assess severity",
                  "Severe pain, inability to bear weight, joint deformity, numbness/tingling, pain lasting days",
                  "Injury log with date, activity, symptoms, treatment, recovery timeline, lessons learned",
                  "Ice packs, elastic bandages, over-the-counter pain relievers, basic first aid knowledge"
                ]
              },
              {
                title: "Working with Healthcare Professionals",
                prompts: [
                  "What healthcare professionals will you consult for exercise-related injuries?",
                  "How will you communicate effectively with medical professionals about your fitness goals?",
                  "What questions will you ask to understand your injury and recovery timeline?",
                  "How will you find qualified professionals who understand athletic injuries?",
                  "What information will you provide to help professionals treat you effectively?"
                ],
                examples: [
                  "Primary care doctor, physical therapist, sports medicine doctor, orthopedic specialist, chiropractor",
                  "Explain fitness goals, activity levels, timeline needs, training schedule, performance expectations",
                  "What caused this? How long to heal? What can I do safely? When can I return to full activity?",
                  "Referrals from other athletes, sports medicine practices, physical therapy clinics, online research",
                  "Detailed activity history, injury mechanism, symptom timeline, previous injuries, current fitness level"
                ]
              },
              {
                title: "Rehabilitation & Recovery",
                prompts: [
                  "How will you follow through with rehabilitation exercises and protocols?",
                  "What modifications will you make to your workout routine during injury recovery?",
                  "How will you maintain fitness while recovering from specific injuries?",
                  "What signs indicate you're ready to return to full activity after injury?",
                  "How will you prevent re-injury when returning to your normal routine?"
                ],
                examples: [
                  "Consistent daily rehab exercises, gradual progression, patience with timeline, professional guidance",
                  "Work around injury, focus on unaffected areas, maintain cardiovascular fitness, modify movements",
                  "Upper body focus during leg injury, walking during lifting restrictions, pool exercises for joint injuries",
                  "Pain-free movement, full range of motion, strength return, professional clearance, confidence in movement",
                  "Gradual return, continued rehab exercises, address root causes, better warm-up, form improvements"
                ]
              },
              {
                title: "Prevention of Future Injuries",
                prompts: [
                  "What lessons will you learn from each injury to prevent similar problems?",
                  "How will you address the root causes that led to your injury?",
                  "What ongoing preventive measures will you implement?",
                  "How will you modify your training to reduce injury risk going forward?",
                  "What regular assessments will you do to catch problems early?"
                ],
                examples: [
                  "Analyze injury cause, identify contributing factors, note early warning signs, adjust training approach",
                  "Muscle imbalances, poor form, overtraining, inadequate recovery, equipment issues, environmental factors",
                  "Strength imbalance correction, flexibility work, form coaching, better equipment, load management",
                  "Better progression, more recovery time, form focus, cross-training, professional guidance",
                  "Monthly body awareness check, regular movement screens, strength assessments, pain tracking"
                ]
              }
            ]}
            tips={[
              "Take injuries seriously early rather than trying to push through pain",
              "Don't rush back to full activity before you're fully healed",
              "Use injury recovery time to work on other aspects of fitness you can safely do",
              "Learn from every injury to prevent similar problems in the future",
              "Build relationships with healthcare professionals before you need them"
            ]}
          />
        </TabsContent>

      </Tabs>
    </div>
  )
}