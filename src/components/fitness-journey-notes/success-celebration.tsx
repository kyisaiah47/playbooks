"use client"

import { GuidedNotePage } from "@/components/guided-note-page"

export function SuccessCelebrationGuide() {
  return (
    <GuidedNotePage
      title="Success Celebration & Milestone Recognition"
      description="Acknowledge your achievements and build momentum through meaningful celebration of progress."
      sections={[
        {
          title: "Milestone Definition",
          prompts: [
            "What specific achievements deserve celebration along your fitness journey?",
            "How will you break your big goals into smaller, celebratable milestones?",
            "What non-scale victories are just as important as physical changes?",
            "How often will you pause to acknowledge your progress?",
          ],
          examples: [
            "Every 5-pound loss, 10-pound strength increase, or clothing size change",
            "Completing your first month of consistent workouts",
            "Choosing a healthy meal when you really wanted junk food",
            "Having more energy to play with kids or climb stairs without getting winded",
          ]
        },
        {
          title: "Celebration Methods",
          prompts: [
            "What non-food rewards truly motivate and excite you?",
            "How will you celebrate small wins vs. major milestones?",
            "What experiences or purchases align with your fitness goals?",
            "How can you make celebrations meaningful rather than just material?",
          ],
          examples: [
            "New workout clothes or athletic shoes after consistent training",
            "Massage or spa day for recovery and self-care",
            "Fitness-related experiences: rock climbing, hiking trip, dance class",
            "Share achievements with supportive friends or social media community",
          ]
        },
        {
          title: "Progress Documentation",
          prompts: [
            "How will you document your journey to look back on during tough times?",
            "What format works best for you (photos, journal, video, measurements)?",
            "What progress markers will you capture regularly?",
            "How will you create a visual story of your transformation?",
          ],
          examples: [
            "Monthly progress photos in same outfit, lighting, and poses",
            "Fitness journal with workout achievements and personal reflections",
            "Before/during/after photos side-by-side to see changes",
            "Video diary sharing thoughts and feelings throughout the journey",
          ]
        },
        {
          title: "Sharing & Community",
          prompts: [
            "Who in your life would be excited to celebrate your achievements with you?",
            "How comfortable are you sharing your progress publicly vs. privately?",
            "What role do you want others to play in acknowledging your success?",
            "How can you inspire others while celebrating your own wins?",
          ],
          examples: [
            "Share weekly wins with workout buddy or accountability partner",
            "Post monthly progress updates in supportive online fitness communities",
            "Celebrate major milestones with family dinner or friend gathering",
            "Mentor someone just starting their fitness journey",
          ]
        },
        {
          title: "Maintaining Perspective",
          prompts: [
            "How will you celebrate the process and effort, not just the outcomes?",
            "What will you do when progress is slower than expected?",
            "How will you handle setbacks while still honoring your overall progress?",
            "What does success look like beyond your original goals?",
          ],
          examples: [
            "Celebrate showing up and trying, even on days when workouts feel hard",
            "Acknowledge consistency over perfection - 80% adherence is still amazing",
            "Focus on habits built and mental strength gained through challenges",
            "Recognize that becoming healthier and stronger is an ongoing lifestyle, not a destination",
          ]
        }
      ]}
      tips={[
        "Celebrate the small wins - they add up to create big transformations",
        "Plan your rewards in advance so you have something to look forward to",
        "Take progress photos even when you don't feel like you've changed - you might be surprised",
        "Share your wins with people who understand and support your journey",
        "Remember that every workout completed is an achievement worth acknowledging",
        "Use celebrations as motivation fuel for continued progress",
        "Don't wait until you reach your 'final' goal to start celebrating",
        "Create meaningful celebrations that reinforce your new healthy identity",
      ]}
    />
  )
}