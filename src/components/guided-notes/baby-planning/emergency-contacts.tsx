"use client"

import { GuidedNotePage } from "@/components/guided-note-page"

export function EmergencyContacts() {
  return (
    <GuidedNotePage
      title="Emergency Contacts & Info"
      description="Organize critical contact information and emergency procedures for your family&apos;s safety."
      sections={[
        {
          title: "Medical Emergency Contacts",
          prompts: [
            "Who are your primary healthcare providers and their contact information?",
            "What hospitals and urgent care centers are closest to your home?",
            "Who should be contacted in case of a medical emergency?",
            "What important medical information should emergency responders know?",
            "How will you access medical records quickly in an emergency?"
          ],
          examples: [
            "Pediatrician: Dr. Smith 555-123-4567, OB/GYN: Dr. Jones 555-987-6543",
            "Children&apos;s Hospital 10 min away, Urgent Care on Main St",
            "Partner, parents, emergency contact person with house key",
            "Allergies, medications, medical conditions, insurance info",
            "Medical records app, paper copies in diaper bag and car"
          ]
        },
        {
          title: "Childcare Emergency Plan",
          prompts: [
            "Who can care for your baby if you&apos;re unable to?",
            "What information do emergency caregivers need about your baby?",
            "How will emergency caregivers access your home and supplies?",
            "What are your preferences for medical decisions in your absence?",
            "How will you communicate emergency plans to all caregivers?"
          ],
          examples: [
            "Grandparents, sister, trusted neighbor with spare key",
            "Feeding schedule, medical info, pediatrician contact, comfort items",
            "Spare key location, diaper/formula supplies, emergency cash",
            "Written consent for medical treatment, preferred hospital",
            "Printed emergency sheet posted on fridge, copy in diaper bag"
          ]
        },
        {
          title: "Home Emergency Preparedness",
          prompts: [
            "What emergency supplies do you need for baby during power outages?",
            "How will you handle emergencies like fires or natural disasters?",
            "What important documents should be easily accessible?",
            "How will you communication during widespread emergencies?",
            "What evacuation plan includes baby&apos;s needs?"
          ],
          examples: [
            "Battery-powered bottle warmer, extra formula, flashlights, radio",
            "Fire escape plan with baby carrier, emergency meeting spot",
            "Birth certificate, insurance cards, emergency cash in waterproof bag",
            "Out-of-state contact person, emergency radio, cell phone backup",
            "Go bag with baby supplies, car seat always installed, evacuation routes"
          ]
        },
        {
          title: "Daily Emergency Information",
          prompts: [
            "What information should babysitters have about your family?",
            "How will you handle common baby emergencies like choking?",
            "What poison control and emergency numbers should be posted?",
            "How will you prepare others to care for your baby safely?",
            "What emergency supplies belong in your diaper bag and car?"
          ],
          examples: [
            "Emergency contacts, medical info, bedtime routine, comfort techniques",
            "Infant CPR training, choking response, when to call 911",
            "Poison Control: 1-800-222-1222, 911, pediatrician, hospital",
            "CPR class for grandparents, written care instructions, practice runs",
            "First aid kit, extra diapers, formula, phone charger, emergency cash"
          ]
        }
      ]}
      tips={[
        "Keep emergency contact lists updated and post copies in multiple locations",
        "Take infant CPR and first aid classes before baby arrives",
        "Practice emergency scenarios with your partner and family members",
        "Keep emergency supplies stocked and check expiration dates regularly",
        "Make sure all caregivers know where to find emergency information",
        "Consider emergency apps and services that can quickly share your info with first responders"
      ]}
    />
  )
}