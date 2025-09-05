"use client"

import { GuidedNotePage } from "@/components/guided-note-page"

export function MotivationToolsGuide() {
  return (
    <GuidedNotePage
      title="Motivation Tools & Mental Strategies"
      description="Build mental resilience and maintain motivation throughout your fitness journey."
      sections={[
        {
          title: "Motivation Sources & Reminders",
          prompts: [
            "What originally motivated you to start this fitness journey?",
            "What visual reminders will keep your goals front of mind?",
            "Who in your life supports your fitness journey?",
            "What quotes, mantras, or affirmations resonate with you?",
          ],
          examples: [
            "Progress photos on bathroom mirror to see how far I've come",
            "Goal outfit hanging in closet as daily motivation",
            "Inspirational fitness quotes saved on phone wallpaper",
            "Weekly check-ins with workout buddy or accountability partner",
          ]
        },
        {
          title: "Overcoming Mental Barriers",
          prompts: [
            "What negative thoughts or excuses derail your fitness efforts?",
            "How do you typically respond to setbacks or plateaus?",
            "What past experiences make you doubt your ability to succeed?",
            "How will you reframe limiting beliefs into empowering ones?",
          ],
          examples: [
            "Replace 'I don't have time' with 'fitness is a priority worth making time for'",
            "Change 'I'm not good at this' to 'I'm learning and improving every day'",
            "Shift from 'I have to work out' to 'I get to take care of my body'",
            "Transform 'It's too hard' into 'I'm building mental toughness'",
          ]
        },
        {
          title: "Energy & Mood Management",
          prompts: [
            "What patterns do you notice in your energy levels throughout the day/week?",
            "How does your mood affect your motivation to exercise?",
            "What activities or thoughts boost your energy for workouts?",
            "How will you work out when you don't feel like it?",
          ],
          examples: [
            "Schedule workouts for times when energy is naturally highest",
            "Use upbeat music or motivational videos to boost mood before exercising",
            "Remember that you always feel better after a workout, even when you don't want to start",
            "Have a backup 10-minute workout for low-energy days",
          ]
        },
        {
          title: "Social Support & Accountability",
          prompts: [
            "Who can you share your fitness goals with for accountability?",
            "What fitness communities (online or offline) could support you?",
            "How will you handle unsupportive comments or sabotage from others?",
            "What role do you want others to play in your journey?",
          ],
          examples: [
            "Find a workout buddy with similar goals and schedules",
            "Join online fitness communities or local workout groups",
            "Share weekly progress updates with supportive friends or family",
            "Work with a personal trainer or fitness coach for professional guidance",
          ]
        },
        {
          title: "Long-term Perspective & Identity",
          prompts: [
            "How do you want to identify yourself (as an athlete, healthy person, etc.)?",
            "What kind of person do you want to become through this journey?",
            "How will fitness continue to be part of your life after reaching your goal?",
            "What legacy or example do you want to set for others?",
          ],
          examples: [
            "I am someone who prioritizes health and takes care of my body",
            "I am becoming stronger, more disciplined, and more confident",
            "Fitness is a lifelong journey, not a temporary fix",
            "I want to model healthy habits for my family and inspire others",
          ]
        }
      ]}
      tips={[
        "Motivation gets you started, but discipline and systems keep you going",
        "Focus on how exercise makes you feel rather than just how you look",
        "Keep a collection of motivational content for days when you need a boost",
        "Remember your 'why' - connect daily actions to your deeper purpose",
        "Celebrate the mental victories alongside the physical ones",
        "Surround yourself with positive influences and limit negative ones",
        "Visualize your future self and how achieving your goals will feel",
        "Use past successes as evidence that you can overcome current challenges",
      ]}
    />
  )
}