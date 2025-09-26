export interface PromptEntry {
  id: string;
  prompt: string;
  category: string; // The actual category name like "Getting Started & Equipment Setup"
  type: 'research' | 'action' | 'decision' | 'planning';
}

// Import all prompt files
import { actionPrompts as threeDPrintingPrompts } from '../data/prompts/3d-printing-prompts';
import { actionPrompts as academicStrugglesPrompts } from '../data/prompts/academic-struggles-prompts';
import { actionPrompts as addictionFamilySupportPrompts } from '../data/prompts/addiction-family-support-prompts';
import { actionPrompts as addictionRecoveryPrompts } from '../data/prompts/addiction-recovery-prompts';
import { actionPrompts as affiliateMarketingPrompts } from '../data/prompts/affiliate-marketing-prompts';
import { actionPrompts as agingParentCarePrompts } from '../data/prompts/aging-parent-care-prompts';
import { actionPrompts as antiqueCollectingPrompts } from '../data/prompts/antique-collecting-prompts';
import { actionPrompts as apartmentHuntingPrompts } from '../data/prompts/apartment-hunting-prompts';
import { actionPrompts as appDevelopmentPrompts } from '../data/prompts/app-development-prompts';
import { actionPrompts as arduinoProgrammingPrompts } from '../data/prompts/arduino-programming-prompts';
import { actionPrompts as artCollectingPrompts } from '../data/prompts/art-collecting-prompts';
import { actionPrompts as artPortfolioPrompts } from '../data/prompts/art-portfolio-prompts';
import { actionPrompts as astronomyHobbyPrompts } from '../data/prompts/astronomy-hobby-prompts';
import { actionPrompts as babyPlanningPrompts } from '../data/prompts/baby-planning-prompts';
import { actionPrompts as bankruptcyRecoveryPrompts } from '../data/prompts/bankruptcy-recovery-prompts';
import { actionPrompts as birdwatchingPrompts } from '../data/prompts/birdwatching-prompts';
import { actionPrompts as blendedFamilyPrompts } from '../data/prompts/blended-family-prompts';
import { actionPrompts as blendedFamilyCreationPrompts } from '../data/prompts/blended-family-creation-prompts';
import { actionPrompts as boatMaintenancePrompts } from '../data/prompts/boat-maintenance-prompts';
import { actionPrompts as bookClubPrompts } from '../data/prompts/book-club-prompts';
import { actionPrompts as bookCollectingPrompts } from '../data/prompts/book-collecting-prompts';
import { actionPrompts as bookWritingPrompts } from '../data/prompts/book-writing-prompts';
import { actionPrompts as budgetPlanningPrompts } from '../data/prompts/budget-planning-prompts';
import { actionPrompts as businessLaunchPrompts } from '../data/prompts/business-launch-prompts';
import { actionPrompts as businessSuccessionPrompts } from '../data/prompts/business-succession-prompts';
import { actionPrompts as campingTripsPrompts } from '../data/prompts/camping-trips-prompts';
import { actionPrompts as carBuyingPrompts } from '../data/prompts/car-buying-prompts';
import { actionPrompts as carMaintenancePrompts } from '../data/prompts/car-maintenance-prompts';
import { actionPrompts as careerChangePrompts } from '../data/prompts/career-change-prompts';
import { actionPrompts as careerPlateauPrompts } from '../data/prompts/career-plateau-prompts';
import { actionPrompts as caringForAgingParentsPrompts } from '../data/prompts/caring-for-aging-parents-prompts';
import { actionPrompts as chronicIllnessPrompts } from '../data/prompts/chronic-illness-prompts';
import { actionPrompts as climateActionPrompts } from '../data/prompts/climate-action-prompts';
import { actionPrompts as coachingBusinessPrompts } from '../data/prompts/coaching-business-prompts';
import { actionPrompts as collegePlanningPrompts } from '../data/prompts/college-planning-prompts';
import { actionPrompts as collegeSelectionPrompts } from '../data/prompts/college-selection-prompts';
import { actionPrompts as collegeToCareerTransitionPrompts } from '../data/prompts/college-to-career-transition-prompts';
import { actionPrompts as comingOutPrompts } from '../data/prompts/coming-out-prompts';
import { actionPrompts as consultingBusinessPrompts } from '../data/prompts/consulting-business-prompts';
import { actionPrompts as contentCreationPrompts } from '../data/prompts/content-creation-prompts';
import { actionPrompts as contentCreationBusinessPrompts } from '../data/prompts/content-creation-business-prompts';
import { actionPrompts as cookingMasteryPrompts } from '../data/prompts/cooking-mastery-prompts';
import { actionPrompts as creativeFreelancingPrompts } from '../data/prompts/creative-freelancing-prompts';
import { actionPrompts as creativeHobbiesPrompts } from '../data/prompts/creative-hobbies-prompts';
import { actionPrompts as creativeWritingPrompts } from '../data/prompts/creative-writing-prompts';
import { actionPrompts as cryptoPortfolioPrompts } from '../data/prompts/crypto-portfolio-prompts';
import { actionPrompts as danceTrainingPrompts } from '../data/prompts/dance-training-prompts';
import { actionPrompts as deathOfSpousePrompts } from '../data/prompts/death-of-spouse-prompts';
import { actionPrompts as debtPayoffPrompts } from '../data/prompts/debt-payoff-prompts';
import { actionPrompts as digitalDetoxPrompts } from '../data/prompts/digital-detox-prompts';
import { actionPrompts as digitalNomadPlanningPrompts } from '../data/prompts/digital-nomad-planning-prompts';
import { actionPrompts as disabilityAccommodationPrompts } from '../data/prompts/disability-accommodation-prompts';
import { actionPrompts as divorceCoordinationPrompts } from '../data/prompts/divorce-coordination-prompts';
import { actionPrompts as divorceProcessPrompts } from '../data/prompts/divorce-process-prompts';
import { actionPrompts as downsizingDecisionsPrompts } from '../data/prompts/downsizing-decisions-prompts';
import { actionPrompts as dropshippingPrompts } from '../data/prompts/dropshipping-prompts';
import { actionPrompts as eCommerceStorePrompts } from '../data/prompts/e-commerce-store-prompts';
import { actionPrompts as earlyCareerAdvancementPrompts } from '../data/prompts/early-career-advancement-prompts';
import { actionPrompts as educationLearningPrompts } from '../data/prompts/education-learning-prompts';
import { actionPrompts as elderCarePrompts } from '../data/prompts/elder-care-prompts';
import { actionPrompts as emptyNestPrompts } from '../data/prompts/empty-nest-prompts';
import { actionPrompts as emptyNestSyndromePrompts } from '../data/prompts/empty-nest-syndrome-prompts';
import { actionPrompts as endOfLifePlanningPrompts } from '../data/prompts/end-of-life-planning-prompts';
import { actionPrompts as estatePlanningPrompts } from '../data/prompts/estate-planning-prompts';
import { actionPrompts as eventPlanningPrompts } from '../data/prompts/event-planning-prompts';
import { actionPrompts as executiveLeadershipTransitionPrompts } from '../data/prompts/executive-leadership-transition-prompts';
import { actionPrompts as familyCrisisManagementPrompts } from '../data/prompts/family-crisis-management-prompts';
import { actionPrompts as familyEstrangementPrompts } from '../data/prompts/family-estrangement-prompts';
import { actionPrompts as familyTherapyPrompts } from '../data/prompts/family-therapy-prompts';
import { actionPrompts as fashionDesignPrompts } from '../data/prompts/fashion-design-prompts';
import { actionPrompts as financialIndependencePrompts } from '../data/prompts/financial-independence-prompts';
import { actionPrompts as financialIndependenceCollegePrompts } from '../data/prompts/financial-independence-college-prompts';
import { actionPrompts as financialRecoveryPrompts } from '../data/prompts/financial-recovery-prompts';
import { actionPrompts as firstJobTransitionPrompts } from '../data/prompts/first-job-transition-prompts';
import { actionPrompts as firstManagementRolePrompts } from '../data/prompts/first-management-role-prompts';
import { actionPrompts as firstSeriousRelationshipPrompts } from '../data/prompts/first-serious-relationship-prompts';
import { actionPrompts as firstTimeParentPrompts } from '../data/prompts/first-time-parent-prompts';
import { actionPrompts as fitnessJourneyPrompts } from '../data/prompts/fitness-journey-prompts';
import { actionPrompts as fixedIncomeManagementPrompts } from '../data/prompts/fixed-income-management-prompts';
import { actionPrompts as fraternitySororityDecisionsPrompts } from '../data/prompts/fraternity-sorority-decisions-prompts';
import { actionPrompts as freelanceBusinessPrompts } from '../data/prompts/freelance-business-prompts';
import { actionPrompts as gardenPlanningPrompts } from '../data/prompts/garden-planning-prompts';
import { actionPrompts as geographicRelocationPrompts } from '../data/prompts/geographic-relocation-prompts';
import { actionPrompts as graduateSchoolDecisionsPrompts } from '../data/prompts/graduate-school-decisions-prompts';
import { actionPrompts as grandparentRolePrompts } from '../data/prompts/grandparent-role-prompts';
import { actionPrompts as griefLossPrompts } from '../data/prompts/grief-loss-prompts';
import { actionPrompts as habitTrackingPrompts } from '../data/prompts/habit-tracking-prompts';
import { actionPrompts as healthCrisisManagementPrompts } from '../data/prompts/health-crisis-management-prompts';
import { actionPrompts as healthDeclineNavigationPrompts } from '../data/prompts/health-decline-navigation-prompts';
import { actionPrompts as healthWellnessPrompts } from '../data/prompts/health-wellness-prompts';
import { actionPrompts as hobbyPhotographyPrompts } from '../data/prompts/hobby-photography-prompts';
import { actionPrompts as hobbyProjectPrompts } from '../data/prompts/hobby-project-prompts';
import { actionPrompts as homeAutomationPrompts } from '../data/prompts/home-automation-prompts';
import { actionPrompts as homeBuyingPrompts } from '../data/prompts/home-buying-prompts';
import { actionPrompts as homeImprovementPrompts } from '../data/prompts/home-improvement-prompts';
import { actionPrompts as homeRenovationPrompts } from '../data/prompts/home-renovation-prompts';
import { actionPrompts as identityTheftPrompts } from '../data/prompts/identity-theft-prompts';
import { actionPrompts as identityTheftRecoveryPrompts } from '../data/prompts/identity-theft-recovery-prompts';
import { actionPrompts as immigrationJourneyPrompts } from '../data/prompts/immigration-journey-prompts';
import { actionPrompts as insuranceOptimizationPrompts } from '../data/prompts/insurance-optimization-prompts';
import { actionPrompts as interiorDesignPrompts } from '../data/prompts/interior-design-prompts';
import { actionPrompts as internshipCompetitionPrompts } from '../data/prompts/internship-competition-prompts';
import { actionPrompts as investingFinancePrompts } from '../data/prompts/investing-finance-prompts';
import { actionPrompts as investmentPortfolioPrompts } from '../data/prompts/investment-portfolio-prompts';
import { actionPrompts as investmentPropertyPrompts } from '../data/prompts/investment-property-prompts';
import { actionPrompts as jobLossNavigationPrompts } from '../data/prompts/job-loss-navigation-prompts';
import { actionPrompts as jobLossRecoveryPrompts } from '../data/prompts/job-loss-recovery-prompts';
import { actionPrompts as jobSearchPrompts } from '../data/prompts/job-search-prompts';
import { actionPrompts as jobTransitionPrompts } from '../data/prompts/job-transition-prompts';
import { actionPrompts as languageLearningPrompts } from '../data/prompts/language-learning-prompts';
import { actionPrompts as legalIssueManagementPrompts } from '../data/prompts/legal-issue-management-prompts';
import { actionPrompts as lifeTransitionsPrompts } from '../data/prompts/life-transitions-prompts';
import { actionPrompts as longDistanceRelationshipPrompts } from '../data/prompts/long-distance-relationship-prompts';
import { actionPrompts as marathonTrainingPrompts } from '../data/prompts/marathon-training-prompts';
import { actionPrompts as marriageMaintenancePrompts } from '../data/prompts/marriage-maintenance-prompts';
import { actionPrompts as mealPlanningPrompts } from '../data/prompts/meal-planning-prompts';
import { actionPrompts as medicalTreatmentPrompts } from '../data/prompts/medical-treatment-prompts';
import { actionPrompts as meditationJourneyPrompts } from '../data/prompts/meditation-journey-prompts';
import { actionPrompts as mentalHealthPrompts } from '../data/prompts/mental-health-prompts';
import { actionPrompts as mentalHealthCollegePrompts } from '../data/prompts/mental-health-college-prompts';
import { actionPrompts as mentalHealthSupportPrompts } from '../data/prompts/mental-health-support-prompts';
import { actionPrompts as midlifeCrisisPrompts } from '../data/prompts/midlife-crisis-prompts';
import { actionPrompts as midlifeHealthChangesPrompts } from '../data/prompts/midlife-health-changes-prompts';
import { actionPrompts as militaryVeteranTransitionPrompts } from '../data/prompts/military-veteran-transition-prompts';
import { actionPrompts as mindfulnessMeditationPrompts } from '../data/prompts/mindfulness-meditation-prompts';
import { actionPrompts as mobileAppStartupPrompts } from '../data/prompts/mobile-app-startup-prompts';
import { actionPrompts as mortgageManagementPrompts } from '../data/prompts/mortgage-management-prompts';
import { actionPrompts as movingRelocationPrompts } from '../data/prompts/moving-relocation-prompts';
import { actionPrompts as musicLearningPrompts } from '../data/prompts/music-learning-prompts';
import { actionPrompts as musicProductionPrompts } from '../data/prompts/music-production-prompts';
import { actionPrompts as naturalDisasterRecoveryPrompts } from '../data/prompts/natural-disaster-recovery-prompts';
import { actionPrompts as nonprofitManagementPrompts } from '../data/prompts/nonprofit-management-prompts';
import { actionPrompts as nonprofitStartupPrompts } from '../data/prompts/nonprofit-startup-prompts';
import { actionPrompts as onlineBusinessLaunchPrompts } from '../data/prompts/online-business-launch-prompts';
import { actionPrompts as onlineCoursePrompts } from '../data/prompts/online-course-prompts';
import { actionPrompts as parentingGuidancePrompts } from '../data/prompts/parenting-guidance-prompts';
import { actionPrompts as peakEarningOptimizationPrompts } from '../data/prompts/peak-earning-optimization-prompts';
import { actionPrompts as personalBrandingPrompts } from '../data/prompts/personal-branding-prompts';
import { actionPrompts as personalFinancePrompts } from '../data/prompts/personal-finance-prompts';
import { actionPrompts as personalFinanceMasteryPrompts } from '../data/prompts/personal-finance-mastery-prompts';
import { actionPrompts as personalGrowthPrompts } from '../data/prompts/personal-growth-prompts';
import { actionPrompts as personalTrainingPrompts } from '../data/prompts/personal-training-prompts';
import { actionPrompts as petCarePrompts } from '../data/prompts/pet-care-prompts';
import { actionPrompts as photographyBusinessPrompts } from '../data/prompts/photography-business-prompts';
import { actionPrompts as podcastCreationPrompts } from '../data/prompts/podcast-creation-prompts';
import { actionPrompts as professionalNetworkingPrompts } from '../data/prompts/professional-networking-prompts';
import { actionPrompts as publicSpeakingPrompts } from '../data/prompts/public-speaking-prompts';
import { actionPrompts as quarterLifeCrisisPrompts } from '../data/prompts/quarter-life-crisis-prompts';
import { actionPrompts as readingChallengePrompts } from '../data/prompts/reading-challenge-prompts';
import { actionPrompts as realEstateInvestingPrompts } from '../data/prompts/real-estate-investing-prompts';
import { actionPrompts as relationshipBreakupPrompts } from '../data/prompts/relationship-breakup-prompts';
import { actionPrompts as relationshipCoachingPrompts } from '../data/prompts/relationship-coaching-prompts';
import { actionPrompts as relationshipDatingPrompts } from '../data/prompts/relationship-dating-prompts';
import { actionPrompts as relationshipTherapyPrompts } from '../data/prompts/relationship-therapy-prompts';
import { actionPrompts as rentalManagementPrompts } from '../data/prompts/rental-management-prompts';
import { actionPrompts as restaurantOpeningPrompts } from '../data/prompts/restaurant-opening-prompts';
import { actionPrompts as retirementLifestylePrompts } from '../data/prompts/retirement-lifestyle-prompts';
import { actionPrompts as retirementPlanningPrompts } from '../data/prompts/retirement-planning-prompts';
import { actionPrompts as retirementTransitionPrompts } from '../data/prompts/retirement-transition-prompts';
import { actionPrompts as roommateNavigationPrompts } from '../data/prompts/roommate-navigation-prompts';
import { actionPrompts as saasStartupPrompts } from '../data/prompts/saas-startup-prompts';
import { actionPrompts as sandwichGenerationPrompts } from '../data/prompts/sandwich-generation-prompts';
import { actionPrompts as sideHustleDevelopmentPrompts } from '../data/prompts/side-hustle-development-prompts';
import { actionPrompts as skillDevelopmentPrompts } from '../data/prompts/skill-development-prompts';
import { actionPrompts as smallBusinessPrompts } from '../data/prompts/small-business-prompts';
import { actionPrompts as smallBusinessLaunchPrompts } from '../data/prompts/small-business-launch-prompts';
import { actionPrompts as smartGardenPrompts } from '../data/prompts/smart-garden-prompts';
import { actionPrompts as socialEntrepreneurshipPrompts } from '../data/prompts/social-entrepreneurship-prompts';
import { actionPrompts as socialMediaManagementPrompts } from '../data/prompts/social-media-management-prompts';
import { actionPrompts as spiritualAwakeningPrompts } from '../data/prompts/spiritual-awakening-prompts';
import { actionPrompts as spiritualGrowthPrompts } from '../data/prompts/spiritual-growth-prompts';
import { actionPrompts as sportsTeamPrompts } from '../data/prompts/sports-team-prompts';
import { actionPrompts as stockTradingPrompts } from '../data/prompts/stock-trading-prompts';
import { actionPrompts as stressManagementPrompts } from '../data/prompts/stress-management-prompts';
import { actionPrompts as studentLoanStrategyPrompts } from '../data/prompts/student-loan-strategy-prompts';
import { actionPrompts as studyAbroadPlanningPrompts } from '../data/prompts/study-abroad-planning-prompts';
import { actionPrompts as sustainableLivingPrompts } from '../data/prompts/sustainable-living-prompts';
import { actionPrompts as techStartupGuidePrompts } from '../data/prompts/tech-startup-guide-prompts';
import { actionPrompts as technologyDigitalPrompts } from '../data/prompts/technology-digital-prompts';
import { actionPrompts as teenageParentingPrompts } from '../data/prompts/teenage-parenting-prompts';
import { actionPrompts as testTemplatePrompts } from '../data/prompts/test-template-prompts';
import { actionPrompts as transportationPlanningPrompts } from '../data/prompts/transportation-planning-prompts';
import { actionPrompts as travelPlanningPrompts } from '../data/prompts/travel-planning-prompts';
import { actionPrompts as urbanGardeningPrompts } from '../data/prompts/urban-gardening-prompts';
import { actionPrompts as weddingPlanningPrompts } from '../data/prompts/wedding-planning-prompts';
import { actionPrompts as weightLossPrompts } from '../data/prompts/weight-loss-prompts';
import { actionPrompts as wineCollectionPrompts } from '../data/prompts/wine-collection-prompts';
import { actionPrompts as workforceReentryPrompts } from '../data/prompts/workforce-reentry-prompts';
import { actionPrompts as yogaPracticePrompts } from '../data/prompts/yoga-practice-prompts';
import { actionPrompts as youtubeChannelPrompts } from '../data/prompts/youtube-channel-prompts';

// New template imports - temporarily commented out to test compilation
// import { actionPrompts as chronicPainManagementPrompts } from '../data/prompts/chronic-pain-management-prompts';
import { actionPrompts as communityIntegrationPrompts } from '../data/prompts/community-integration-prompts';
import { actionPrompts as culturalExplorationPrompts } from '../data/prompts/cultural-exploration-prompts';
import { actionPrompts as cybersecurityPersonalPlanPrompts } from '../data/prompts/cybersecurity-personal-plan-prompts';
import { actionPrompts as dailyHabitStackingPrompts } from '../data/prompts/daily-habit-stacking-prompts';
import { actionPrompts as digitalDeclutterProcessPrompts } from '../data/prompts/digital-declutter-process-prompts';
import { actionPrompts as digitalLegacyPlanningPrompts } from '../data/prompts/digital-legacy-planning-prompts';
import { actionPrompts as digitalMinimalismJourneyPrompts } from '../data/prompts/digital-minimalism-journey-prompts';
import { actionPrompts as energyManagementSystemPrompts } from '../data/prompts/energy-management-system-prompts';
import { actionPrompts as evacuationPlanningPrompts } from '../data/prompts/evacuation-planning-prompts';
import { actionPrompts as eveningRoutinePlanningPrompts } from '../data/prompts/evening-routine-planning-prompts';
import { actionPrompts as familyEmergencyPlanPrompts } from '../data/prompts/family-emergency-plan-prompts';
import { actionPrompts as familyReunionPlanningPrompts } from '../data/prompts/family-reunion-planning-prompts';
import { actionPrompts as financialEmergencyFundPrompts } from '../data/prompts/financial-emergency-fund-prompts';
import { actionPrompts as friendshipBuildingPlanPrompts } from '../data/prompts/friendship-building-plan-prompts';
import { actionPrompts as healthEmergencyPlanningPrompts } from '../data/prompts/health-emergency-planning-prompts';
import { actionPrompts as householdManagementSystemPrompts } from '../data/prompts/household-management-system-prompts';
import { actionPrompts as insuranceOptimizationPlanPrompts } from '../data/prompts/insurance-optimization-plan-prompts';
import { actionPrompts as languageExchangeSetupPrompts } from '../data/prompts/language-exchange-setup-prompts';
import { actionPrompts as legalDocumentOrganizationPrompts } from '../data/prompts/legal-document-organization-prompts';
import { actionPrompts as lifeAdminOrganizationPrompts } from '../data/prompts/life-admin-organization-prompts';
import { actionPrompts as medicalAppointmentManagementPrompts } from '../data/prompts/medical-appointment-management-prompts';
import { actionPrompts as medicalEmergencyPlanningPrompts } from '../data/prompts/medical-emergency-planning-prompts';
import { actionPrompts as medicationOrganizationPrompts } from '../data/prompts/medication-organization-prompts';
import { actionPrompts as mentalWellnessRoutinePrompts } from '../data/prompts/mental-wellness-routine-prompts';
import { actionPrompts as morningRoutineOptimizationPrompts } from '../data/prompts/morning-routine-optimization-prompts';
import { actionPrompts as naturalDisasterPreparationPrompts } from '../data/prompts/natural-disaster-preparation-prompts';
import { actionPrompts as neighborhoodConnectionPrompts } from '../data/prompts/neighborhood-connection-prompts';
import { actionPrompts as networkingOutsideWorkPrompts } from '../data/prompts/networking-outside-work-prompts';
import { actionPrompts as nutritionPlanningSystemPrompts } from '../data/prompts/nutrition-planning-system-prompts';
import { actionPrompts as onlineLearningStrategyPrompts } from '../data/prompts/online-learning-strategy-prompts';
import { actionPrompts as onlinePrivacyManagementPrompts } from '../data/prompts/online-privacy-management-prompts';
import { actionPrompts as personalProductivitySystemPrompts } from '../data/prompts/personal-productivity-system-prompts';
import { actionPrompts as personalSpaceOrganizationPrompts } from '../data/prompts/personal-space-organization-prompts';
import { actionPrompts as physicalTherapyJourneyPrompts } from '../data/prompts/physical-therapy-journey-prompts';
import { actionPrompts as powerOfAttorneySetupPrompts } from '../data/prompts/power-of-attorney-setup-prompts';
import { actionPrompts as preventiveHealthPlanningPrompts } from '../data/prompts/preventive-health-planning-prompts';
import { actionPrompts as remoteWorkOptimizationPrompts } from '../data/prompts/remote-work-optimization-prompts';
import { actionPrompts as sleepOptimizationPlanPrompts } from '../data/prompts/sleep-optimization-plan-prompts';
import { actionPrompts as socialEventHostingPrompts } from '../data/prompts/social-event-hosting-prompts';
import { actionPrompts as socialMediaDetoxPrompts } from '../data/prompts/social-media-detox-prompts';
import { actionPrompts as socialSkillsDevelopmentPrompts } from '../data/prompts/social-skills-development-prompts';
import { actionPrompts as techAddictionRecoveryPrompts } from '../data/prompts/tech-addiction-recovery-prompts';
import { actionPrompts as techSkillsDevelopmentPrompts } from '../data/prompts/tech-skills-development-prompts';
import { actionPrompts as timeBlockingMasteryPrompts } from '../data/prompts/time-blocking-mastery-prompts';
import { actionPrompts as volunteerWorkPlanningPrompts } from '../data/prompts/volunteer-work-planning-prompts';
import { actionPrompts as weekendPlanningStructurePrompts } from '../data/prompts/weekend-planning-structure-prompts';
import { actionPrompts as wellnessTrackingSystemPrompts } from '../data/prompts/wellness-tracking-system-prompts';
import { actionPrompts as willAndTestamentPlanningPrompts } from '../data/prompts/will-and-testament-planning-prompts';

// Template to prompts mapping
export const templatePrompts = {
  '3d-printing': threeDPrintingPrompts,
  'academic-struggles': academicStrugglesPrompts,
  'addiction-family-support': addictionFamilySupportPrompts,
  'addiction-recovery': addictionRecoveryPrompts,
  'affiliate-marketing': affiliateMarketingPrompts,
  'aging-parent-care': agingParentCarePrompts,
  'antique-collecting': antiqueCollectingPrompts,
  'apartment-hunting': apartmentHuntingPrompts,
  'app-development': appDevelopmentPrompts,
  'arduino-programming': arduinoProgrammingPrompts,
  'art-collecting': artCollectingPrompts,
  'art-portfolio': artPortfolioPrompts,
  'astronomy-hobby': astronomyHobbyPrompts,
  'baby-planning': babyPlanningPrompts,
  'bankruptcy-recovery': bankruptcyRecoveryPrompts,
  'birdwatching': birdwatchingPrompts,
  'blended-family': blendedFamilyPrompts,
  'blended-family-creation': blendedFamilyCreationPrompts,
  'boat-maintenance': boatMaintenancePrompts,
  'book-club': bookClubPrompts,
  'book-collecting': bookCollectingPrompts,
  'book-writing': bookWritingPrompts,
  'budget-planning': budgetPlanningPrompts,
  'business-launch': businessLaunchPrompts,
  'business-succession': businessSuccessionPrompts,
  'camping-trips': campingTripsPrompts,
  'car-buying': carBuyingPrompts,
  'car-maintenance': carMaintenancePrompts,
  'career-change': careerChangePrompts,
  'career-plateau': careerPlateauPrompts,
  'caring-for-aging-parents': caringForAgingParentsPrompts,
  'chronic-illness': chronicIllnessPrompts,
  'climate-action': climateActionPrompts,
  'coaching-business': coachingBusinessPrompts,
  'college-planning': collegePlanningPrompts,
  'college-selection': collegeSelectionPrompts,
  'college-to-career-transition': collegeToCareerTransitionPrompts,
  'coming-out': comingOutPrompts,
  'consulting-business': consultingBusinessPrompts,
  'content-creation': contentCreationPrompts,
  'content-creation-business': contentCreationBusinessPrompts,
  'cooking-mastery': cookingMasteryPrompts,
  'creative-freelancing': creativeFreelancingPrompts,
  'creative-hobbies': creativeHobbiesPrompts,
  'creative-writing': creativeWritingPrompts,
  'crypto-portfolio': cryptoPortfolioPrompts,
  'dance-training': danceTrainingPrompts,
  'death-of-spouse': deathOfSpousePrompts,
  'debt-payoff': debtPayoffPrompts,
  'digital-detox': digitalDetoxPrompts,
  'digital-nomad-planning': digitalNomadPlanningPrompts,
  'disability-accommodation': disabilityAccommodationPrompts,
  'divorce-coordination': divorceCoordinationPrompts,
  'divorce-process': divorceProcessPrompts,
  'downsizing-decisions': downsizingDecisionsPrompts,
  'dropshipping': dropshippingPrompts,
  'e-commerce-store': eCommerceStorePrompts,
  'early-career-advancement': earlyCareerAdvancementPrompts,
  'education-learning': educationLearningPrompts,
  'elder-care': elderCarePrompts,
  'empty-nest': emptyNestPrompts,
  'empty-nest-syndrome': emptyNestSyndromePrompts,
  'end-of-life-planning': endOfLifePlanningPrompts,
  'estate-planning': estatePlanningPrompts,
  'event-planning': eventPlanningPrompts,
  'executive-leadership-transition': executiveLeadershipTransitionPrompts,
  'family-crisis-management': familyCrisisManagementPrompts,
  'family-estrangement': familyEstrangementPrompts,
  'family-therapy': familyTherapyPrompts,
  'fashion-design': fashionDesignPrompts,
  'financial-independence': financialIndependencePrompts,
  'financial-independence-college': financialIndependenceCollegePrompts,
  'financial-recovery': financialRecoveryPrompts,
  'first-job-transition': firstJobTransitionPrompts,
  'first-management-role': firstManagementRolePrompts,
  'first-serious-relationship': firstSeriousRelationshipPrompts,
  'first-time-parent': firstTimeParentPrompts,
  'fitness-journey': fitnessJourneyPrompts,
  'fixed-income-management': fixedIncomeManagementPrompts,
  'fraternity-sorority-decisions': fraternitySororityDecisionsPrompts,
  'freelance-business': freelanceBusinessPrompts,
  'garden-planning': gardenPlanningPrompts,
  'geographic-relocation': geographicRelocationPrompts,
  'graduate-school-decisions': graduateSchoolDecisionsPrompts,
  'grandparent-role': grandparentRolePrompts,
  'grief-loss': griefLossPrompts,
  'habit-tracking': habitTrackingPrompts,
  'health-crisis-management': healthCrisisManagementPrompts,
  'health-decline-navigation': healthDeclineNavigationPrompts,
  'health-wellness': healthWellnessPrompts,
  'hobby-photography': hobbyPhotographyPrompts,
  'hobby-project': hobbyProjectPrompts,
  'home-automation': homeAutomationPrompts,
  'home-buying': homeBuyingPrompts,
  'home-improvement': homeImprovementPrompts,
  'home-renovation': homeRenovationPrompts,
  'identity-theft': identityTheftPrompts,
  'identity-theft-recovery': identityTheftRecoveryPrompts,
  'immigration-journey': immigrationJourneyPrompts,
  'insurance-optimization': insuranceOptimizationPrompts,
  'interior-design': interiorDesignPrompts,
  'internship-competition': internshipCompetitionPrompts,
  'investing-finance': investingFinancePrompts,
  'investment-portfolio': investmentPortfolioPrompts,
  'investment-property': investmentPropertyPrompts,
  'job-loss-navigation': jobLossNavigationPrompts,
  'job-loss-recovery': jobLossRecoveryPrompts,
  'job-search': jobSearchPrompts,
  'job-transition': jobTransitionPrompts,
  'language-learning': languageLearningPrompts,
  'legal-issue-management': legalIssueManagementPrompts,
  'life-transitions': lifeTransitionsPrompts,
  'long-distance-relationship': longDistanceRelationshipPrompts,
  'marathon-training': marathonTrainingPrompts,
  'marriage-maintenance': marriageMaintenancePrompts,
  'meal-planning': mealPlanningPrompts,
  'medical-treatment': medicalTreatmentPrompts,
  'meditation-journey': meditationJourneyPrompts,
  'mental-health': mentalHealthPrompts,
  'mental-health-college': mentalHealthCollegePrompts,
  'mental-health-support': mentalHealthSupportPrompts,
  'midlife-crisis': midlifeCrisisPrompts,
  'midlife-health-changes': midlifeHealthChangesPrompts,
  'military-veteran-transition': militaryVeteranTransitionPrompts,
  'mindfulness-meditation': mindfulnessMeditationPrompts,
  'mobile-app-startup': mobileAppStartupPrompts,
  'mortgage-management': mortgageManagementPrompts,
  'moving-relocation': movingRelocationPrompts,
  'music-learning': musicLearningPrompts,
  'music-production': musicProductionPrompts,
  'natural-disaster-recovery': naturalDisasterRecoveryPrompts,
  'nonprofit-management': nonprofitManagementPrompts,
  'nonprofit-startup': nonprofitStartupPrompts,
  'online-business-launch': onlineBusinessLaunchPrompts,
  'online-course': onlineCoursePrompts,
  'parenting-guidance': parentingGuidancePrompts,
  'peak-earning-optimization': peakEarningOptimizationPrompts,
  'personal-branding': personalBrandingPrompts,
  'personal-finance': personalFinancePrompts,
  'personal-finance-mastery': personalFinanceMasteryPrompts,
  'personal-growth': personalGrowthPrompts,
  'personal-training': personalTrainingPrompts,
  'pet-care': petCarePrompts,
  'photography-business': photographyBusinessPrompts,
  'podcast-creation': podcastCreationPrompts,
  'professional-networking': professionalNetworkingPrompts,
  'public-speaking': publicSpeakingPrompts,
  'quarter-life-crisis': quarterLifeCrisisPrompts,
  'reading-challenge': readingChallengePrompts,
  'real-estate-investing': realEstateInvestingPrompts,
  'relationship-breakup': relationshipBreakupPrompts,
  'relationship-coaching': relationshipCoachingPrompts,
  'relationship-dating': relationshipDatingPrompts,
  'relationship-therapy': relationshipTherapyPrompts,
  'rental-management': rentalManagementPrompts,
  'restaurant-opening': restaurantOpeningPrompts,
  'retirement-lifestyle': retirementLifestylePrompts,
  'retirement-planning': retirementPlanningPrompts,
  'retirement-transition': retirementTransitionPrompts,
  'roommate-navigation': roommateNavigationPrompts,
  'saas-startup': saasStartupPrompts,
  'sandwich-generation': sandwichGenerationPrompts,
  'side-hustle-development': sideHustleDevelopmentPrompts,
  'skill-development': skillDevelopmentPrompts,
  'small-business': smallBusinessPrompts,
  'small-business-launch': smallBusinessLaunchPrompts,
  'smart-garden': smartGardenPrompts,
  'social-entrepreneurship': socialEntrepreneurshipPrompts,
  'social-media-management': socialMediaManagementPrompts,
  'spiritual-awakening': spiritualAwakeningPrompts,
  'spiritual-growth': spiritualGrowthPrompts,
  'sports-team': sportsTeamPrompts,
  'stock-trading': stockTradingPrompts,
  'stress-management': stressManagementPrompts,
  'student-loan-strategy': studentLoanStrategyPrompts,
  'study-abroad-planning': studyAbroadPlanningPrompts,
  'sustainable-living': sustainableLivingPrompts,
  'tech-startup-guide': techStartupGuidePrompts,
  'technology-digital': technologyDigitalPrompts,
  'teenage-parenting': teenageParentingPrompts,
  'test-template': testTemplatePrompts,
  'transportation-planning': transportationPlanningPrompts,
  'travel-planning': travelPlanningPrompts,
  'urban-gardening': urbanGardeningPrompts,
  'wedding-planning': weddingPlanningPrompts,
  'weight-loss': weightLossPrompts,
  'wine-collection': wineCollectionPrompts,
  'workforce-reentry': workforceReentryPrompts,
  'yoga-practice': yogaPracticePrompts,
  'youtube-channel': youtubeChannelPrompts,

  // New template mappings
  'chronic-pain-management': chronicPainManagementPrompts,
  'community-integration': communityIntegrationPrompts,
  'cultural-exploration': culturalExplorationPrompts,
  'cybersecurity-personal-plan': cybersecurityPersonalPlanPrompts,
  'daily-habit-stacking': dailyHabitStackingPrompts,
  'digital-declutter-process': digitalDeclutterProcessPrompts,
  'digital-legacy-planning': digitalLegacyPlanningPrompts,
  'digital-minimalism-journey': digitalMinimalismJourneyPrompts,
  'energy-management-system': energyManagementSystemPrompts,
  'evacuation-planning': evacuationPlanningPrompts,
  'evening-routine-planning': eveningRoutinePlanningPrompts,
  'family-emergency-plan': familyEmergencyPlanPrompts,
  'family-reunion-planning': familyReunionPlanningPrompts,
  'financial-emergency-fund': financialEmergencyFundPrompts,
  'friendship-building-plan': friendshipBuildingPlanPrompts,
  'health-emergency-planning': healthEmergencyPlanningPrompts,
  'household-management-system': householdManagementSystemPrompts,
  'insurance-optimization-plan': insuranceOptimizationPlanPrompts,
  'language-exchange-setup': languageExchangeSetupPrompts,
  'legal-document-organization': legalDocumentOrganizationPrompts,
  'life-admin-organization': lifeAdminOrganizationPrompts,
  'medical-appointment-management': medicalAppointmentManagementPrompts,
  'medical-emergency-planning': medicalEmergencyPlanningPrompts,
  'medication-organization': medicationOrganizationPrompts,
  'mental-wellness-routine': mentalWellnessRoutinePrompts,
  'morning-routine-optimization': morningRoutineOptimizationPrompts,
  'natural-disaster-preparation': naturalDisasterPreparationPrompts,
  'neighborhood-connection': neighborhoodConnectionPrompts,
  'networking-outside-work': networkingOutsideWorkPrompts,
  'nutrition-planning-system': nutritionPlanningSystemPrompts,
  'online-learning-strategy': onlineLearningStrategyPrompts,
  'online-privacy-management': onlinePrivacyManagementPrompts,
  'personal-productivity-system': personalProductivitySystemPrompts,
  'personal-space-organization': personalSpaceOrganizationPrompts,
  'physical-therapy-journey': physicalTherapyJourneyPrompts,
  'power-of-attorney-setup': powerOfAttorneySetupPrompts,
  'preventive-health-planning': preventiveHealthPlanningPrompts,
  'remote-work-optimization': remoteWorkOptimizationPrompts,
  'sleep-optimization-plan': sleepOptimizationPlanPrompts,
  'social-event-hosting': socialEventHostingPrompts,
  'social-media-detox': socialMediaDetoxPrompts,
  'social-skills-development': socialSkillsDevelopmentPrompts,
  'tech-addiction-recovery': techAddictionRecoveryPrompts,
  'tech-skills-development': techSkillsDevelopmentPrompts,
  'time-blocking-mastery': timeBlockingMasteryPrompts,
  'volunteer-work-planning': volunteerWorkPlanningPrompts,
  'weekend-planning-structure': weekendPlanningStructurePrompts,
  'wellness-tracking-system': wellnessTrackingSystemPrompts,
  'will-and-testament-planning': willAndTestamentPlanningPrompts,
} as const;

// Helper function to get prompts by template slug
export function getPromptsByTemplate(templateSlug: string): PromptEntry[] {
  return templatePrompts[templateSlug as keyof typeof templatePrompts] || [];
}

// All prompts flattened
export const allPrompts: PromptEntry[] = Object.values(templatePrompts).flat();

// Get prompts by category
export function getPromptsByCategory(category: PromptEntry['category']): PromptEntry[] {
  return allPrompts.filter(prompt => prompt.category === category);
}