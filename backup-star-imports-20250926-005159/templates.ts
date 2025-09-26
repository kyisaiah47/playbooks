import { GuidanceTemplate } from '@/types/template';
import * as templates from '@/data/templates';
import { getTemplateExperts } from '@/lib/expert-badges';

// Helper function to capitalize all words in a template name
function capitalizeTemplateName(name: string): string {
  return name
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

export interface TemplateRegistryEntry {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: string;
  url: string;
  popular?: boolean;
  featured?: boolean;
  expertVerified?: boolean;
  color: string;
  iconColor: string;
  template: GuidanceTemplate;
}

export function getTemplate(baseTemplate: GuidanceTemplate): GuidanceTemplate {
  const experts = getTemplateExperts(baseTemplate.id);
  return {
    ...baseTemplate,
    expertTips: experts.length > 0 ? experts.flatMap(expert => expert.tips || []) : undefined,
    reflectionPrompts: experts.length > 0 ? experts.flatMap(expert => expert.reflectionPrompts || []) : undefined
  };
}

// Helper function to get colors based on category
function getCategoryColors(category: string): { bg: string; icon: string } {
  const colorMap: Record<string, { bg: string; icon: string }> = {
    'Life Planning': { bg: 'bg-blue-50 dark:bg-blue-950/30', icon: 'text-blue-600 dark:text-blue-400' },
    'Career & Finance': { bg: 'bg-green-50 dark:bg-green-950/30', icon: 'text-green-600 dark:text-green-400' },
    'Health & Wellness': { bg: 'bg-emerald-50 dark:bg-emerald-950/30', icon: 'text-emerald-600 dark:text-emerald-400' },
    'Relationships & Family': { bg: 'bg-pink-50 dark:bg-pink-950/30', icon: 'text-pink-600 dark:text-pink-400' },
    'Creative & Hobbies': { bg: 'bg-purple-50 dark:bg-purple-950/30', icon: 'text-purple-600 dark:text-purple-400' },
    'Business & Entrepreneurship': { bg: 'bg-orange-50 dark:bg-orange-950/30', icon: 'text-orange-600 dark:text-orange-400' },
    'Education & Learning': { bg: 'bg-indigo-50 dark:bg-indigo-950/30', icon: 'text-indigo-600 dark:text-indigo-400' },
    'Technology & Digital': { bg: 'bg-cyan-50 dark:bg-cyan-950/30', icon: 'text-cyan-600 dark:text-cyan-400' },
    'Personal Development': { bg: 'bg-teal-50 dark:bg-teal-950/30', icon: 'text-teal-600 dark:text-teal-400' },
    'Home & Living': { bg: 'bg-amber-50 dark:bg-amber-950/30', icon: 'text-amber-600 dark:text-amber-400' },
  };

  return colorMap[category] || { bg: 'bg-gray-50 dark:bg-gray-950/30', icon: 'text-gray-600 dark:text-gray-400' };
}

// Convert template name to URL-friendly format
function templateNameToId(name: string): string {
  return name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

export const templateRegistry: TemplateRegistryEntry[] = [
  // New templates (49)
  {
    id: 'chronic-pain-management',
    name: 'Chronic Pain Management',
    description: 'Comprehensive guidance and tools for chronic pain management.',
    category: templates.chronicPainManagementTemplate.category,
    icon: templates.chronicPainManagementTemplate.icon,
    url: '/chronic-pain-management/app',
    popular: false,
    featured: false,
    expertVerified: false,
    ...getCategoryColors(templates.chronicPainManagementTemplate.category),
    template: getTemplate(templates.chronicPainManagementTemplate)
  },
  {
    id: 'community-integration',
    name: 'Community Integration',
    description: 'Comprehensive guidance and tools for community integration.',
    category: templates.communityIntegrationTemplate.category,
    icon: templates.communityIntegrationTemplate.icon,
    url: '/community-integration/app',
    popular: false,
    featured: false,
    expertVerified: false,
    ...getCategoryColors(templates.communityIntegrationTemplate.category),
    template: getTemplate(templates.communityIntegrationTemplate)
  },
  {
    id: 'cultural-exploration',
    name: 'Cultural Exploration',
    description: 'Comprehensive guidance and tools for cultural exploration.',
    category: templates.culturalExplorationTemplate.category,
    icon: templates.culturalExplorationTemplate.icon,
    url: '/cultural-exploration/app',
    popular: false,
    featured: false,
    expertVerified: false,
    ...getCategoryColors(templates.culturalExplorationTemplate.category),
    template: getTemplate(templates.culturalExplorationTemplate)
  },
  {
    id: 'cybersecurity-personal-plan',
    name: 'Cybersecurity Personal Plan',
    description: 'Comprehensive guidance and tools for cybersecurity personal plan.',
    category: templates.cybersecurityPersonalPlanTemplate.category,
    icon: templates.cybersecurityPersonalPlanTemplate.icon,
    url: '/cybersecurity-personal-plan/app',
    popular: false,
    featured: false,
    expertVerified: false,
    ...getCategoryColors(templates.cybersecurityPersonalPlanTemplate.category),
    template: getTemplate(templates.cybersecurityPersonalPlanTemplate)
  },
  {
    id: 'daily-habit-stacking',
    name: 'Daily Habit Stacking',
    description: 'Comprehensive guidance and tools for daily habit stacking.',
    category: templates.dailyHabitStackingTemplate.category,
    icon: templates.dailyHabitStackingTemplate.icon,
    url: '/daily-habit-stacking/app',
    popular: false,
    featured: false,
    expertVerified: false,
    ...getCategoryColors(templates.dailyHabitStackingTemplate.category),
    template: getTemplate(templates.dailyHabitStackingTemplate)
  },
  {
    id: 'digital-declutter-process',
    name: 'Digital Declutter Process',
    description: 'Comprehensive guidance and tools for digital declutter process.',
    category: templates.digitalDeclutterProcessTemplate.category,
    icon: templates.digitalDeclutterProcessTemplate.icon,
    url: '/digital-declutter-process/app',
    popular: false,
    featured: false,
    expertVerified: false,
    ...getCategoryColors(templates.digitalDeclutterProcessTemplate.category),
    template: getTemplate(templates.digitalDeclutterProcessTemplate)
  },
  {
    id: 'digital-legacy-planning',
    name: 'Digital Legacy Planning',
    description: 'Comprehensive guidance and tools for digital legacy planning.',
    category: templates.digitalLegacyPlanningTemplate.category,
    icon: templates.digitalLegacyPlanningTemplate.icon,
    url: '/digital-legacy-planning/app',
    popular: false,
    featured: false,
    expertVerified: false,
    ...getCategoryColors(templates.digitalLegacyPlanningTemplate.category),
    template: getTemplate(templates.digitalLegacyPlanningTemplate)
  },
  {
    id: 'digital-minimalism-journey',
    name: 'Digital Minimalism Journey',
    description: 'Comprehensive guidance and tools for digital minimalism journey.',
    category: templates.digitalMinimalismJourneyTemplate.category,
    icon: templates.digitalMinimalismJourneyTemplate.icon,
    url: '/digital-minimalism-journey/app',
    popular: false,
    featured: false,
    expertVerified: false,
    ...getCategoryColors(templates.digitalMinimalismJourneyTemplate.category),
    template: getTemplate(templates.digitalMinimalismJourneyTemplate)
  },
  {
    id: 'energy-management-system',
    name: 'Energy Management System',
    description: 'Comprehensive guidance and tools for energy management system.',
    category: templates.energyManagementSystemTemplate.category,
    icon: templates.energyManagementSystemTemplate.icon,
    url: '/energy-management-system/app',
    popular: false,
    featured: false,
    expertVerified: false,
    ...getCategoryColors(templates.energyManagementSystemTemplate.category),
    template: getTemplate(templates.energyManagementSystemTemplate)
  },
  {
    id: 'evacuation-planning',
    name: 'Evacuation Planning',
    description: 'Comprehensive guidance and tools for evacuation planning.',
    category: templates.evacuationPlanningTemplate.category,
    icon: templates.evacuationPlanningTemplate.icon,
    url: '/evacuation-planning/app',
    popular: false,
    featured: false,
    expertVerified: false,
    ...getCategoryColors(templates.evacuationPlanningTemplate.category),
    template: getTemplate(templates.evacuationPlanningTemplate)
  },
  {
    id: 'evening-routine-planning',
    name: 'Evening Routine Planning',
    description: 'Comprehensive guidance and tools for evening routine planning.',
    category: templates.eveningRoutinePlanningTemplate.category,
    icon: templates.eveningRoutinePlanningTemplate.icon,
    url: '/evening-routine-planning/app',
    popular: false,
    featured: false,
    expertVerified: false,
    ...getCategoryColors(templates.eveningRoutinePlanningTemplate.category),
    template: getTemplate(templates.eveningRoutinePlanningTemplate)
  },
  {
    id: 'family-emergency-plan',
    name: 'Family Emergency Plan',
    description: 'Comprehensive guidance and tools for family emergency plan.',
    category: templates.familyEmergencyPlanTemplate.category,
    icon: templates.familyEmergencyPlanTemplate.icon,
    url: '/family-emergency-plan/app',
    popular: false,
    featured: false,
    expertVerified: false,
    ...getCategoryColors(templates.familyEmergencyPlanTemplate.category),
    template: getTemplate(templates.familyEmergencyPlanTemplate)
  },
  {
    id: 'family-reunion-planning',
    name: 'Family Reunion Planning',
    description: 'Comprehensive guidance and tools for family reunion planning.',
    category: templates.familyReunionPlanningTemplate.category,
    icon: templates.familyReunionPlanningTemplate.icon,
    url: '/family-reunion-planning/app',
    popular: false,
    featured: false,
    expertVerified: false,
    ...getCategoryColors(templates.familyReunionPlanningTemplate.category),
    template: getTemplate(templates.familyReunionPlanningTemplate)
  },
  {
    id: 'financial-emergency-fund',
    name: 'Financial Emergency Fund',
    description: 'Comprehensive guidance and tools for financial emergency fund.',
    category: templates.financialEmergencyFundTemplate.category,
    icon: templates.financialEmergencyFundTemplate.icon,
    url: '/financial-emergency-fund/app',
    popular: false,
    featured: false,
    expertVerified: false,
    ...getCategoryColors(templates.financialEmergencyFundTemplate.category),
    template: getTemplate(templates.financialEmergencyFundTemplate)
  },
  {
    id: 'friendship-building-plan',
    name: 'Friendship Building Plan',
    description: 'Comprehensive guidance and tools for friendship building plan.',
    category: templates.friendshipBuildingPlanTemplate.category,
    icon: templates.friendshipBuildingPlanTemplate.icon,
    url: '/friendship-building-plan/app',
    popular: false,
    featured: false,
    expertVerified: false,
    ...getCategoryColors(templates.friendshipBuildingPlanTemplate.category),
    template: getTemplate(templates.friendshipBuildingPlanTemplate)
  },
  {
    id: 'health-emergency-planning',
    name: 'Health Emergency Planning',
    description: 'Comprehensive guidance and tools for health emergency planning.',
    category: templates.healthEmergencyPlanningTemplate.category,
    icon: templates.healthEmergencyPlanningTemplate.icon,
    url: '/health-emergency-planning/app',
    popular: false,
    featured: false,
    expertVerified: false,
    ...getCategoryColors(templates.healthEmergencyPlanningTemplate.category),
    template: getTemplate(templates.healthEmergencyPlanningTemplate)
  },
  {
    id: 'household-management-system',
    name: 'Household Management System',
    description: 'Comprehensive guidance and tools for household management system.',
    category: templates.householdManagementSystemTemplate.category,
    icon: templates.householdManagementSystemTemplate.icon,
    url: '/household-management-system/app',
    popular: false,
    featured: false,
    expertVerified: false,
    ...getCategoryColors(templates.householdManagementSystemTemplate.category),
    template: getTemplate(templates.householdManagementSystemTemplate)
  },
  {
    id: 'insurance-optimization-plan',
    name: 'Insurance Optimization Plan',
    description: 'Comprehensive guidance and tools for insurance optimization plan.',
    category: templates.insuranceOptimizationPlanTemplate.category,
    icon: templates.insuranceOptimizationPlanTemplate.icon,
    url: '/insurance-optimization-plan/app',
    popular: false,
    featured: false,
    expertVerified: false,
    ...getCategoryColors(templates.insuranceOptimizationPlanTemplate.category),
    template: getTemplate(templates.insuranceOptimizationPlanTemplate)
  },
  {
    id: 'language-exchange-setup',
    name: 'Language Exchange Setup',
    description: 'Comprehensive guidance and tools for language exchange setup.',
    category: templates.languageExchangeSetupTemplate.category,
    icon: templates.languageExchangeSetupTemplate.icon,
    url: '/language-exchange-setup/app',
    popular: false,
    featured: false,
    expertVerified: false,
    ...getCategoryColors(templates.languageExchangeSetupTemplate.category),
    template: getTemplate(templates.languageExchangeSetupTemplate)
  },
  {
    id: 'legal-document-organization',
    name: 'Legal Document Organization',
    description: 'Comprehensive guidance and tools for legal document organization.',
    category: templates.legalDocumentOrganizationTemplate.category,
    icon: templates.legalDocumentOrganizationTemplate.icon,
    url: '/legal-document-organization/app',
    popular: false,
    featured: false,
    expertVerified: false,
    ...getCategoryColors(templates.legalDocumentOrganizationTemplate.category),
    template: getTemplate(templates.legalDocumentOrganizationTemplate)
  },
  {
    id: 'life-admin-organization',
    name: 'Life Admin Organization',
    description: 'Comprehensive guidance and tools for life admin organization.',
    category: templates.lifeAdminOrganizationTemplate.category,
    icon: templates.lifeAdminOrganizationTemplate.icon,
    url: '/life-admin-organization/app',
    popular: false,
    featured: false,
    expertVerified: false,
    ...getCategoryColors(templates.lifeAdminOrganizationTemplate.category),
    template: getTemplate(templates.lifeAdminOrganizationTemplate)
  },
  {
    id: 'medical-appointment-management',
    name: 'Medical Appointment Management',
    description: 'Comprehensive guidance and tools for medical appointment management.',
    category: templates.medicalAppointmentManagementTemplate.category,
    icon: templates.medicalAppointmentManagementTemplate.icon,
    url: '/medical-appointment-management/app',
    popular: false,
    featured: false,
    expertVerified: false,
    ...getCategoryColors(templates.medicalAppointmentManagementTemplate.category),
    template: getTemplate(templates.medicalAppointmentManagementTemplate)
  },
  {
    id: 'medical-emergency-planning',
    name: 'Medical Emergency Planning',
    description: 'Comprehensive guidance and tools for medical emergency planning.',
    category: templates.medicalEmergencyPlanningTemplate.category,
    icon: templates.medicalEmergencyPlanningTemplate.icon,
    url: '/medical-emergency-planning/app',
    popular: false,
    featured: false,
    expertVerified: false,
    ...getCategoryColors(templates.medicalEmergencyPlanningTemplate.category),
    template: getTemplate(templates.medicalEmergencyPlanningTemplate)
  },
  {
    id: 'medication-organization',
    name: 'Medication Organization',
    description: 'Comprehensive guidance and tools for medication organization.',
    category: templates.medicationOrganizationTemplate.category,
    icon: templates.medicationOrganizationTemplate.icon,
    url: '/medication-organization/app',
    popular: false,
    featured: false,
    expertVerified: false,
    ...getCategoryColors(templates.medicationOrganizationTemplate.category),
    template: getTemplate(templates.medicationOrganizationTemplate)
  },
  {
    id: 'mental-wellness-routine',
    name: 'Mental Wellness Routine',
    description: 'Comprehensive guidance and tools for mental wellness routine.',
    category: templates.mentalWellnessRoutineTemplate.category,
    icon: templates.mentalWellnessRoutineTemplate.icon,
    url: '/mental-wellness-routine/app',
    popular: false,
    featured: false,
    expertVerified: false,
    ...getCategoryColors(templates.mentalWellnessRoutineTemplate.category),
    template: getTemplate(templates.mentalWellnessRoutineTemplate)
  },
  {
    id: 'morning-routine-optimization',
    name: 'Morning Routine Optimization',
    description: 'Comprehensive guidance and tools for morning routine optimization.',
    category: templates.morningRoutineOptimizationTemplate.category,
    icon: templates.morningRoutineOptimizationTemplate.icon,
    url: '/morning-routine-optimization/app',
    popular: false,
    featured: false,
    expertVerified: false,
    ...getCategoryColors(templates.morningRoutineOptimizationTemplate.category),
    template: getTemplate(templates.morningRoutineOptimizationTemplate)
  },
  {
    id: 'natural-disaster-preparation',
    name: 'Natural Disaster Preparation',
    description: 'Comprehensive guidance and tools for natural disaster preparation.',
    category: templates.naturalDisasterPreparationTemplate.category,
    icon: templates.naturalDisasterPreparationTemplate.icon,
    url: '/natural-disaster-preparation/app',
    popular: false,
    featured: false,
    expertVerified: false,
    ...getCategoryColors(templates.naturalDisasterPreparationTemplate.category),
    template: getTemplate(templates.naturalDisasterPreparationTemplate)
  },
  {
    id: 'neighborhood-connection',
    name: 'Neighborhood Connection',
    description: 'Comprehensive guidance and tools for neighborhood connection.',
    category: templates.neighborhoodConnectionTemplate.category,
    icon: templates.neighborhoodConnectionTemplate.icon,
    url: '/neighborhood-connection/app',
    popular: false,
    featured: false,
    expertVerified: false,
    ...getCategoryColors(templates.neighborhoodConnectionTemplate.category),
    template: getTemplate(templates.neighborhoodConnectionTemplate)
  },
  {
    id: 'networking-outside-work',
    name: 'Networking Outside Work',
    description: 'Comprehensive guidance and tools for networking outside work.',
    category: templates.networkingOutsideWorkTemplate.category,
    icon: templates.networkingOutsideWorkTemplate.icon,
    url: '/networking-outside-work/app',
    popular: false,
    featured: false,
    expertVerified: false,
    ...getCategoryColors(templates.networkingOutsideWorkTemplate.category),
    template: getTemplate(templates.networkingOutsideWorkTemplate)
  },
  {
    id: 'nutrition-planning-system',
    name: 'Nutrition Planning System',
    description: 'Comprehensive guidance and tools for nutrition planning system.',
    category: templates.nutritionPlanningSystemTemplate.category,
    icon: templates.nutritionPlanningSystemTemplate.icon,
    url: '/nutrition-planning-system/app',
    popular: false,
    featured: false,
    expertVerified: false,
    ...getCategoryColors(templates.nutritionPlanningSystemTemplate.category),
    template: getTemplate(templates.nutritionPlanningSystemTemplate)
  },
  {
    id: 'online-learning-strategy',
    name: 'Online Learning Strategy',
    description: 'Comprehensive guidance and tools for online learning strategy.',
    category: templates.onlineLearningStrategyTemplate.category,
    icon: templates.onlineLearningStrategyTemplate.icon,
    url: '/online-learning-strategy/app',
    popular: false,
    featured: false,
    expertVerified: false,
    ...getCategoryColors(templates.onlineLearningStrategyTemplate.category),
    template: getTemplate(templates.onlineLearningStrategyTemplate)
  },
  {
    id: 'online-privacy-management',
    name: 'Online Privacy Management',
    description: 'Comprehensive guidance and tools for online privacy management.',
    category: templates.onlinePrivacyManagementTemplate.category,
    icon: templates.onlinePrivacyManagementTemplate.icon,
    url: '/online-privacy-management/app',
    popular: false,
    featured: false,
    expertVerified: false,
    ...getCategoryColors(templates.onlinePrivacyManagementTemplate.category),
    template: getTemplate(templates.onlinePrivacyManagementTemplate)
  },
  {
    id: 'personal-productivity-system',
    name: 'Personal Productivity System',
    description: 'Comprehensive guidance and tools for personal productivity system.',
    category: templates.personalProductivitySystemTemplate.category,
    icon: templates.personalProductivitySystemTemplate.icon,
    url: '/personal-productivity-system/app',
    popular: false,
    featured: false,
    expertVerified: false,
    ...getCategoryColors(templates.personalProductivitySystemTemplate.category),
    template: getTemplate(templates.personalProductivitySystemTemplate)
  },
  {
    id: 'personal-space-organization',
    name: 'Personal Space Organization',
    description: 'Comprehensive guidance and tools for personal space organization.',
    category: templates.personalSpaceOrganizationTemplate.category,
    icon: templates.personalSpaceOrganizationTemplate.icon,
    url: '/personal-space-organization/app',
    popular: false,
    featured: false,
    expertVerified: false,
    ...getCategoryColors(templates.personalSpaceOrganizationTemplate.category),
    template: getTemplate(templates.personalSpaceOrganizationTemplate)
  },
  {
    id: 'physical-therapy-journey',
    name: 'Physical Therapy Journey',
    description: 'Comprehensive guidance and tools for physical therapy journey.',
    category: templates.physicalTherapyJourneyTemplate.category,
    icon: templates.physicalTherapyJourneyTemplate.icon,
    url: '/physical-therapy-journey/app',
    popular: false,
    featured: false,
    expertVerified: false,
    ...getCategoryColors(templates.physicalTherapyJourneyTemplate.category),
    template: getTemplate(templates.physicalTherapyJourneyTemplate)
  },
  {
    id: 'power-of-attorney-setup',
    name: 'Power Of Attorney Setup',
    description: 'Comprehensive guidance and tools for power of attorney setup.',
    category: templates.powerOfAttorneySetupTemplate.category,
    icon: templates.powerOfAttorneySetupTemplate.icon,
    url: '/power-of-attorney-setup/app',
    popular: false,
    featured: false,
    expertVerified: false,
    ...getCategoryColors(templates.powerOfAttorneySetupTemplate.category),
    template: getTemplate(templates.powerOfAttorneySetupTemplate)
  },
  {
    id: 'preventive-health-planning',
    name: 'Preventive Health Planning',
    description: 'Comprehensive guidance and tools for preventive health planning.',
    category: templates.preventiveHealthPlanningTemplate.category,
    icon: templates.preventiveHealthPlanningTemplate.icon,
    url: '/preventive-health-planning/app',
    popular: false,
    featured: false,
    expertVerified: false,
    ...getCategoryColors(templates.preventiveHealthPlanningTemplate.category),
    template: getTemplate(templates.preventiveHealthPlanningTemplate)
  },
  {
    id: 'remote-work-optimization',
    name: 'Remote Work Optimization',
    description: 'Comprehensive guidance and tools for remote work optimization.',
    category: templates.remoteWorkOptimizationTemplate.category,
    icon: templates.remoteWorkOptimizationTemplate.icon,
    url: '/remote-work-optimization/app',
    popular: false,
    featured: false,
    expertVerified: false,
    ...getCategoryColors(templates.remoteWorkOptimizationTemplate.category),
    template: getTemplate(templates.remoteWorkOptimizationTemplate)
  },
  {
    id: 'sleep-optimization-plan',
    name: 'Sleep Optimization Plan',
    description: 'Comprehensive guidance and tools for sleep optimization plan.',
    category: templates.sleepOptimizationPlanTemplate.category,
    icon: templates.sleepOptimizationPlanTemplate.icon,
    url: '/sleep-optimization-plan/app',
    popular: false,
    featured: false,
    expertVerified: false,
    ...getCategoryColors(templates.sleepOptimizationPlanTemplate.category),
    template: getTemplate(templates.sleepOptimizationPlanTemplate)
  },
  {
    id: 'social-event-hosting',
    name: 'Social Event Hosting',
    description: 'Comprehensive guidance and tools for social event hosting.',
    category: templates.socialEventHostingTemplate.category,
    icon: templates.socialEventHostingTemplate.icon,
    url: '/social-event-hosting/app',
    popular: false,
    featured: false,
    expertVerified: false,
    ...getCategoryColors(templates.socialEventHostingTemplate.category),
    template: getTemplate(templates.socialEventHostingTemplate)
  },
  {
    id: 'social-media-detox',
    name: 'Social Media Detox',
    description: 'Comprehensive guidance and tools for social media detox.',
    category: templates.socialMediaDetoxTemplate.category,
    icon: templates.socialMediaDetoxTemplate.icon,
    url: '/social-media-detox/app',
    popular: false,
    featured: false,
    expertVerified: false,
    ...getCategoryColors(templates.socialMediaDetoxTemplate.category),
    template: getTemplate(templates.socialMediaDetoxTemplate)
  },
  {
    id: 'social-skills-development',
    name: 'Social Skills Development',
    description: 'Comprehensive guidance and tools for social skills development.',
    category: templates.socialSkillsDevelopmentTemplate.category,
    icon: templates.socialSkillsDevelopmentTemplate.icon,
    url: '/social-skills-development/app',
    popular: false,
    featured: false,
    expertVerified: false,
    ...getCategoryColors(templates.socialSkillsDevelopmentTemplate.category),
    template: getTemplate(templates.socialSkillsDevelopmentTemplate)
  },
  {
    id: 'tech-addiction-recovery',
    name: 'Tech Addiction Recovery',
    description: 'Comprehensive guidance and tools for tech addiction recovery.',
    category: templates.techAddictionRecoveryTemplate.category,
    icon: templates.techAddictionRecoveryTemplate.icon,
    url: '/tech-addiction-recovery/app',
    popular: false,
    featured: false,
    expertVerified: false,
    ...getCategoryColors(templates.techAddictionRecoveryTemplate.category),
    template: getTemplate(templates.techAddictionRecoveryTemplate)
  },
  {
    id: 'tech-skills-development',
    name: 'Tech Skills Development',
    description: 'Comprehensive guidance and tools for tech skills development.',
    category: templates.techSkillsDevelopmentTemplate.category,
    icon: templates.techSkillsDevelopmentTemplate.icon,
    url: '/tech-skills-development/app',
    popular: false,
    featured: false,
    expertVerified: false,
    ...getCategoryColors(templates.techSkillsDevelopmentTemplate.category),
    template: getTemplate(templates.techSkillsDevelopmentTemplate)
  },
  {
    id: 'time-blocking-mastery',
    name: 'Time Blocking Mastery',
    description: 'Comprehensive guidance and tools for time blocking mastery.',
    category: templates.timeBlockingMasteryTemplate.category,
    icon: templates.timeBlockingMasteryTemplate.icon,
    url: '/time-blocking-mastery/app',
    popular: false,
    featured: false,
    expertVerified: false,
    ...getCategoryColors(templates.timeBlockingMasteryTemplate.category),
    template: getTemplate(templates.timeBlockingMasteryTemplate)
  },
  {
    id: 'volunteer-work-planning',
    name: 'Volunteer Work Planning',
    description: 'Comprehensive guidance and tools for volunteer work planning.',
    category: templates.volunteerWorkPlanningTemplate.category,
    icon: templates.volunteerWorkPlanningTemplate.icon,
    url: '/volunteer-work-planning/app',
    popular: false,
    featured: false,
    expertVerified: false,
    ...getCategoryColors(templates.volunteerWorkPlanningTemplate.category),
    template: getTemplate(templates.volunteerWorkPlanningTemplate)
  },
  {
    id: 'weekend-planning-structure',
    name: 'Weekend Planning Structure',
    description: 'Comprehensive guidance and tools for weekend planning structure.',
    category: templates.weekendPlanningStructureTemplate.category,
    icon: templates.weekendPlanningStructureTemplate.icon,
    url: '/weekend-planning-structure/app',
    popular: false,
    featured: false,
    expertVerified: false,
    ...getCategoryColors(templates.weekendPlanningStructureTemplate.category),
    template: getTemplate(templates.weekendPlanningStructureTemplate)
  },
  {
    id: 'wellness-tracking-system',
    name: 'Wellness Tracking System',
    description: 'Comprehensive guidance and tools for wellness tracking system.',
    category: templates.wellnessTrackingSystemTemplate.category,
    icon: templates.wellnessTrackingSystemTemplate.icon,
    url: '/wellness-tracking-system/app',
    popular: false,
    featured: false,
    expertVerified: false,
    ...getCategoryColors(templates.wellnessTrackingSystemTemplate.category),
    template: getTemplate(templates.wellnessTrackingSystemTemplate)
  },
  {
    id: 'will-and-testament-planning',
    name: 'Will And Testament Planning',
    description: 'Comprehensive guidance and tools for will and testament planning.',
    category: templates.willAndTestamentPlanningTemplate.category,
    icon: templates.willAndTestamentPlanningTemplate.icon,
    url: '/will-and-testament-planning/app',
    popular: false,
    featured: false,
    expertVerified: false,
    ...getCategoryColors(templates.willAndTestamentPlanningTemplate.category),
    template: getTemplate(templates.willAndTestamentPlanningTemplate)
  },
  // Existing templates follow here... (177 more templates)
  {
    id: '3d-printing',
    name: '3D Printing',
    description: 'Comprehensive guidance and tools for 3d printing.',
    category: templates.threeDPrintingTemplate.category,
    icon: templates.threeDPrintingTemplate.icon,
    url: '/3d-printing/app',
    popular: false,
    featured: false,
    expertVerified: false,
    ...getCategoryColors(templates.threeDPrintingTemplate.category),
    template: getTemplate(templates.threeDPrintingTemplate)
  },
  // ... Add remaining existing templates here
];

// Helper functions
export const getTemplateById = (id: string): TemplateRegistryEntry | undefined => {
  return templateRegistry.find(template => template.id === id);
};

export const getTemplatesByCategory = (category: string): TemplateRegistryEntry[] => {
  return templateRegistry.filter(template => template.category === category);
};

export const getFeaturedTemplates = (): TemplateRegistryEntry[] => {
  return templateRegistry.filter(template => template.featured);
};

export const getPopularTemplates = (): TemplateRegistryEntry[] => {
  return templateRegistry.filter(template => template.popular);
};