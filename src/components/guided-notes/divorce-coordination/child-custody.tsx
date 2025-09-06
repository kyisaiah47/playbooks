"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function ChildCustody() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Child Custody & Parenting Plans</h1>
        <p className="text-muted-foreground">Develop custody arrangements that prioritize your children&apos;s best interests.</p>
      </div>

      <Tabs defaultValue="custody-types" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="custody-types" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Custody Types</span>
            <span className="sm:hidden">Types</span>
          </TabsTrigger>
          <TabsTrigger value="parenting-plan" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Parenting Plan</span>
            <span className="sm:hidden">Plan</span>
          </TabsTrigger>
          <TabsTrigger value="schedules" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Schedules</span>
            <span className="sm:hidden">Schedule</span>
          </TabsTrigger>
          <TabsTrigger value="best-interests" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Best Interests</span>
            <span className="sm:hidden">Interests</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="custody-types">
          <GuidedNotePage
            title="Understanding Custody Types and Arrangements"
            description="Learn about different custody options and what works best for your family"
            sections={[
              {
                title: "Legal vs Physical Custody",
                prompts: [
                  "What's the difference between legal custody and physical custody?",
                  "Do you want joint legal custody or sole legal custody?",
                  "What physical custody arrangement would work best for your children?",
                  "How do legal and physical custody decisions affect each other?",
                  "What factors make joint custody more or less appropriate?"
                ],
                examples: [
                  "Legal custody = decision-making authority, physical custody = where children live",
                  "Joint legal custody allows both parents to make major decisions about children",
                  "Joint physical, primary physical with visitation, or sole physical custody options",
                  "Legal custody disputes often involve education, medical, and religious decisions",
                  "Cooperation level, geographic distance, work schedules, children's preferences"
                ]
              },
              {
                title: "Custody Arrangement Options",
                prompts: [
                  "What are the main types of custody arrangements to consider?",
                  "How would a 50/50 custody split work for your family situation?",
                  "What would a primary custody arrangement with visitation look like?",
                  "Are there any special circumstances that affect custody options?",
                  "How flexible should your custody arrangement be?"
                ],
                examples: [
                  "50/50 joint custody, 60/40 split, primary custody with standard visitation, supervised visitation",
                  "Week on/week off, 2-2-3 schedule, alternating weekends plus midweek visits",
                  "Every other weekend, one weeknight, alternating holidays, extended summer time",
                  "Military deployment, shift work, special needs children, domestic violence history",
                  "Built-in modification process vs fixed schedule, age-appropriate adjustments over time"
                ]
              },
              {
                title: "Decision-Making Authority",
                prompts: [
                  "What major decisions about your children need to be addressed?",
                  "How will you and your co-parent make decisions together?",
                  "What happens when you disagree about important decisions?",
                  "Are there any decisions one parent should have sole authority over?",
                  "How will emergency decisions be handled?"
                ],
                examples: [
                  "Education, medical care, religious upbringing, extracurricular activities, mental health treatment",
                  "Consultation requirement, mutual agreement, designated decision-maker for different areas",
                  "Mediation, counseling, court intervention as dispute resolution options",
                  "Day-to-day decisions by custodial parent, emergency medical decisions by either parent",
                  "Both parents can make emergency decisions, inform other parent ASAP"
                ]
              },
              {
                title: "Geographic and Relocation Issues",
                prompts: [
                  "Where will each parent live and how does geography affect custody?",
                  "What happens if one parent wants to relocate?",
                  "How far apart can parents live while maintaining joint custody?",
                  "What school district considerations affect custody arrangements?",
                  "How will transportation between homes be handled?"
                ],
                examples: [
                  "Same school district vs different districts, reasonable driving distance for exchanges",
                  "Court approval usually required for moves beyond certain distance with children",
                  "Generally need to be within reasonable driving distance for frequent exchanges",
                  "Children's stability, school quality, established relationships with schools",
                  "Meeting halfway, alternating pickup/dropoff responsibility, public places for exchanges"
                ]
              }
            ]}
            tips={[
              "Focus on what's best for your children, not what's most convenient for parents",
              "Joint custody works best when parents can communicate and cooperate effectively",
              "Consider your children's ages, schedules, and preferences when designing arrangements",
              "Build flexibility into your plan for changing circumstances as children grow",
              "Document your current parenting patterns to help determine appropriate arrangements"
            ]}
          />
        </TabsContent>

        <TabsContent value="parenting-plan">
          <GuidedNotePage
            title="Creating a Comprehensive Parenting Plan"
            description="Develop a detailed plan that covers all aspects of co-parenting"
            sections={[
              {
                title: "Daily Care and Routines",
                prompts: [
                  "How will daily routines be maintained across both households?",
                  "What rules and discipline approaches will be consistent between homes?",
                  "How will you handle bedtimes, homework, and chores at each house?",
                  "What items will children keep at each home vs travel with?",
                  "How will you coordinate children's activities and commitments?"
                ],
                examples: [
                  "Similar bedtimes, meal times, screen time rules to provide stability",
                  "Agree on basic discipline principles while allowing some flexibility",
                  "Age-appropriate expectations that work with each household's routine",
                  "Duplicate basic items, special items travel, school supplies at both homes",
                  "Shared calendar system, communication about activities, transportation coordination"
                ]
              },
              {
                title: "Communication and Information Sharing",
                prompts: [
                  "How will you communicate with your co-parent about the children?",
                  "What information needs to be shared regularly between parents?",
                  "How will you handle communication directly with the children?",
                  "What boundaries should exist around communication methods and timing?",
                  "How will you share information with teachers, doctors, and other caregivers?"
                ],
                examples: [
                  "Email, text, parenting apps, phone calls - establish preferred methods",
                  "School events, medical appointments, behavior issues, schedule changes",
                  "Phone/video calls on designated days, unrestricted vs scheduled contact",
                  "Emergency contact anytime, routine matters during business hours, respectful tone required",
                  "Both parents on school/medical contacts, jointly attend important meetings when possible"
                ]
              },
              {
                title: "Special Occasions and Holidays",
                prompts: [
                  "How will you divide holidays and special occasions?",
                  "What are the most important celebrations for your family?",
                  "How will birthdays and other personal milestones be handled?",
                  "What about extended family gatherings and traditions?",
                  "How will you handle vacation planning and scheduling?"
                ],
                examples: [
                  "Alternate major holidays yearly, split holiday periods, or celebrate twice",
                  "Christmas, Thanksgiving, religious holidays, cultural celebrations, school breaks",
                  "Both parents at birthday parties when appropriate, or separate celebrations",
                  "Grandparent visits, family reunions, cultural or religious events",
                  "Advance notice requirements, coordination with regular schedule, make-up time"
                ]
              },
              {
                title: "Modification and Flexibility",
                prompts: [
                  "How will you handle schedule changes and modifications?",
                  "What process will you use to modify the parenting plan as children grow?",
                  "How will you handle conflicts or disagreements about the plan?",
                  "What emergency or temporary changes might be needed?",
                  "When should you consider involving professionals in parenting decisions?"
                ],
                examples: [
                  "Advance notice requirements, make-up time provisions, written confirmation",
                  "Regular review schedule, mediation for changes, court modification process",
                  "Direct negotiation first, then mediation, court as last resort",
                  "Illness, work travel, family emergencies, temporary schedule adjustments",
                  "Family counselor, parenting coordinator, mediator for ongoing conflicts"
                ]
              }
            ]}
            tips={[
              "Be as specific as possible to avoid future disputes about interpretations",
              "Include provisions for how to handle changes and unexpected situations",
              "Consider your children's developmental needs and how they'll change over time",
              "Address practical logistics like transportation, communication, and emergencies",
              "Review and update your parenting plan regularly as circumstances change"
            ]}
          />
        </TabsContent>

        <TabsContent value="schedules">
          <GuidedNotePage
            title="Custody Schedules and Time-Sharing"
            description="Design practical schedules that work for your family's needs"
            sections={[
              {
                title: "Regular Weekly Schedule",
                prompts: [
                  "What weekly schedule would work best for your children's ages?",
                  "How do work schedules affect your custody time options?",
                  "What role do school and activity schedules play in timing?",
                  "How often should custody exchanges happen?",
                  "Where and when should custody exchanges take place?"
                ],
                examples: [
                  "Younger children need more frequent contact, teens can handle longer periods",
                  "Traditional work vs shift work vs travel requirements affect availability",
                  "School pickup/dropoff, sports practices, music lessons, other activities",
                  "Daily exchanges too disruptive, weekly exchanges manageable for most families",
                  "Neutral public places, schools, or homes depending on relationship dynamics"
                ]
              },
              {
                title: "Extended Time Periods",
                prompts: [
                  "How will you handle summer vacation custody?",
                  "What about school breaks and extended weekends?",
                  "How will you divide winter and spring breaks?",
                  "What extended time will each parent have annually?",
                  "How far in advance must extended time be scheduled?"
                ],
                examples: [
                  "Alternate summers, split summer, or each parent gets 2-4 week blocks",
                  "Thanksgiving week, President's Day weekend, Easter break, teacher work days",
                  "Alternate years, split breaks in half, or give each parent one break annually",
                  "2-3 weeks uninterrupted time per parent minimum for bonding and travel",
                  "Summer plans by March, other breaks by 60-90 days in advance"
                ]
              },
              {
                title: "Age-Appropriate Considerations",
                prompts: [
                  "How should custody schedules change as children get older?",
                  "What special considerations exist for infants and toddlers?",
                  "How do school-age children's needs affect scheduling?",
                  "What custody considerations are important for teenagers?",
                  "How will you handle transitions when children have different needs?"
                ],
                examples: [
                  "More frequent contact for young children, longer periods as they mature",
                  "Shorter periods away from primary caregiver, consistent routines, feeding schedules",
                  "Stable school week schedule, weekend and holiday flexibility, activity coordination",
                  "Consider teenager's preferences, job schedules, social activities, driving independence",
                  "Different schedules for different ages, or modify based on most restrictive child's needs"
                ]
              },
              {
                title: "Practical Logistics",
                prompts: [
                  "How will transportation to and from custody exchanges work?",
                  "What items will children pack and bring between homes?",
                  "How will you handle forgotten items or emergency needs?",
                  "What backup plans exist for illness or emergencies?",
                  "How will you coordinate with childcare and after-school care?"
                ],
                examples: [
                  "Alternating pickup responsibility, meeting halfway, designated driver/family member",
                  "School backpack, clothes for next day, special comfort items, medications",
                  "Text/email for forgotten homework, emergency runs for essential items",
                  "Sick child stays with current parent until well, flexible makeup time",
                  "Both parents authorized for pickup, clear communication with caregivers"
                ]
              }
            ]}
            tips={[
              "Start with a basic schedule and build in flexibility for adjustments",
              "Consider creating different schedules for different times of year",
              "Make sure schedules are realistic for your family's actual commitments",
              "Plan for special circumstances like illness, emergencies, or travel",
              "Review schedules regularly and modify as children's needs change"
            ]}
          />
        </TabsContent>

        <TabsContent value="best-interests">
          <GuidedNotePage
            title="Children's Best Interests and Well-being"
            description="Focus on what truly serves your children's needs throughout the process"
            sections={[
              {
                title: "Children's Emotional Needs",
                prompts: [
                  "How will you support your children's emotional well-being during divorce?",
                  "What signs of stress or difficulty should you watch for?",
                  "How will you help children maintain relationships with both parents?",
                  "What professional help might benefit your children?",
                  "How will you avoid putting children in the middle of adult conflicts?"
                ],
                examples: [
                  "Age-appropriate explanations, reassurance it's not their fault, consistent routines",
                  "Changes in behavior, sleep, appetite, school performance, social withdrawal",
                  "Encourage positive relationship with other parent, avoid negative comments",
                  "Child therapist, school counselor, support groups for children of divorce",
                  "Don't ask children to carry messages, make them choose sides, or share adult problems"
                ]
              },
              {
                title: "Stability and Consistency",
                prompts: [
                  "How will you maintain stability in your children's lives?",
                  "What aspects of their routine should remain unchanged?",
                  "How will you handle changes in housing or schools?",
                  "What extended family and friend relationships need protection?",
                  "How will you coordinate rules and expectations between households?"
                ],
                examples: [
                  "Keep children in same schools, maintain friendships, continue activities they enjoy",
                  "Bedtimes, meal times, homework routines, discipline approaches",
                  "Minimize moves during divorce, maintain school district if possible",
                  "Grandparents, aunts/uncles, family friends who provide support and continuity",
                  "Basic safety rules, homework expectations, respectful behavior standards"
                ]
              },
              {
                title: "Developmental Considerations",
                prompts: [
                  "How do your children's ages affect their understanding and needs?",
                  "What developmental milestones might be affected by the divorce?",
                  "How will you support your children's individual personalities and needs?",
                  "What educational and extracurricular opportunities should continue?",
                  "How will you handle different children's varying reactions to divorce?"
                ],
                examples: [
                  "Preschoolers need concrete explanations, teens understand complex emotions",
                  "Starting school, puberty, driving, college prep during transition period",
                  "Introverted vs extroverted, academic vs athletic, artistic interests, social needs",
                  "Sports teams, music lessons, academic support, college planning",
                  "Some children adapt quickly, others need more time and support"
                ]
              },
              {
                title: "Long-term Planning",
                prompts: [
                  "How will your custody arrangement serve children's future needs?",
                  "What provisions should exist for changing circumstances?",
                  "How will you handle major decisions about children's futures?",
                  "What college and career planning coordination is needed?",
                  "How will you maintain positive co-parenting as children become adults?"
                ],
                examples: [
                  "Flexible scheduling as children become more independent, driving privileges",
                  "Geographic moves, remarriage, job changes, children's changing preferences",
                  "College choice, career counseling, gap year decisions, study abroad",
                  "College financing plans, application support, visiting schools together",
                  "Graduations, weddings, grandchildren - lifelong family connections"
                ]
              }
            ]}
            tips={[
              "Always put your children's needs ahead of your own convenience or desires",
              "Remember that children's needs change as they grow and develop",
              "Maintain open communication with children while being age-appropriate",
              "Consider professional help for children who are struggling with the transition",
              "Model respectful co-parenting behavior to help children adjust successfully"
            ]}
          />
        </TabsContent>

      </Tabs>
    </div>
  )
}