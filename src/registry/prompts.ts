export interface PromptEntry {
  id: string;
  prompt: string;
  category: string; // The actual category name like "Getting Started & Equipment Setup"
  type: 'research' | 'action' | 'decision' | 'planning';
}

// Import all prompt files
import { actionPrompts as threeDPrintingPrompts } from '../../3d-printing-prompts';
import { actionPrompts as academicStrugglesPrompts } from '../../academic-struggles-prompts';
import { actionPrompts as addictionFamilySupportPrompts } from '../../addiction-family-support-prompts';
import { actionPrompts as addictionRecoveryPrompts } from '../../addiction-recovery-prompts';
import { actionPrompts as affiliateMarketingPrompts } from '../../affiliate-marketing-prompts';
import { actionPrompts as agingParentCarePrompts } from '../../aging-parent-care-prompts';
import { actionPrompts as antiqueCollectingPrompts } from '../../antique-collecting-prompts';
import { actionPrompts as apartmentHuntingPrompts } from '../../apartment-hunting-prompts';
import { actionPrompts as appDevelopmentPrompts } from '../../app-development-prompts';
import { actionPrompts as arduinoProgrammingPrompts } from '../../arduino-programming-prompts';
import { actionPrompts as artCollectingPrompts } from '../../art-collecting-prompts';
import { actionPrompts as artPortfolioPrompts } from '../../art-portfolio-prompts';
import { actionPrompts as astronomyHobbyPrompts } from '../../astronomy-hobby-prompts';
import { actionPrompts as babyPlanningPrompts } from '../../baby-planning-prompts';
import { actionPrompts as bankruptcyRecoveryPrompts } from '../../bankruptcy-recovery-prompts';
import { actionPrompts as birdwatchingPrompts } from '../../birdwatching-prompts';
import { actionPrompts as blendedFamilyPrompts } from '../../blended-family-prompts';
import { actionPrompts as blendedFamilyCreationPrompts } from '../../blended-family-creation-prompts';
import { actionPrompts as boatMaintenancePrompts } from '../../boat-maintenance-prompts';
import { actionPrompts as bookClubPrompts } from '../../book-club-prompts';
import { actionPrompts as bookCollectingPrompts } from '../../book-collecting-prompts';
import { actionPrompts as bookWritingPrompts } from '../../book-writing-prompts';
import { actionPrompts as budgetPlanningPrompts } from '../../budget-planning-prompts';
import { actionPrompts as businessLaunchPrompts } from '../../business-launch-prompts';
import { actionPrompts as businessSuccessionPrompts } from '../../business-succession-prompts';
import { actionPrompts as campingTripsPrompts } from '../../camping-trips-prompts';
import { actionPrompts as carBuyingPrompts } from '../../car-buying-prompts';
import { actionPrompts as carMaintenancePrompts } from '../../car-maintenance-prompts';
import { actionPrompts as careerChangePrompts } from '../../career-change-prompts';
import { actionPrompts as careerPlateauPrompts } from '../../career-plateau-prompts';
import { actionPrompts as caringForAgingParentsPrompts } from '../../caring-for-aging-parents-prompts';
import { actionPrompts as chronicIllnessPrompts } from '../../chronic-illness-prompts';
import { actionPrompts as climateActionPrompts } from '../../climate-action-prompts';
import { actionPrompts as coachingBusinessPrompts } from '../../coaching-business-prompts';
import { actionPrompts as collegePlanningPrompts } from '../../college-planning-prompts';
import { actionPrompts as collegeSelectionPrompts } from '../../college-selection-prompts';
import { actionPrompts as collegeToCareerTransitionPrompts } from '../../college-to-career-transition-prompts';
import { actionPrompts as comingOutPrompts } from '../../coming-out-prompts';
import { actionPrompts as consultingBusinessPrompts } from '../../consulting-business-prompts';
import { actionPrompts as contentCreationPrompts } from '../../content-creation-prompts';
import { actionPrompts as contentCreationBusinessPrompts } from '../../content-creation-business-prompts';
import { actionPrompts as cookingMasteryPrompts } from '../../cooking-mastery-prompts';
import { actionPrompts as creativeFreelancingPrompts } from '../../creative-freelancing-prompts';
import { actionPrompts as creativeHobbiesPrompts } from '../../creative-hobbies-prompts';
import { actionPrompts as creativeWritingPrompts } from '../../creative-writing-prompts';
import { actionPrompts as cryptoPortfolioPrompts } from '../../crypto-portfolio-prompts';
import { actionPrompts as danceTrainingPrompts } from '../../dance-training-prompts';
import { actionPrompts as deathOfSpousePrompts } from '../../death-of-spouse-prompts';
import { actionPrompts as debtPayoffPrompts } from '../../debt-payoff-prompts';
import { actionPrompts as digitalDetoxPrompts } from '../../digital-detox-prompts';
import { actionPrompts as digitalNomadPlanningPrompts } from '../../digital-nomad-planning-prompts';
import { actionPrompts as disabilityAccommodationPrompts } from '../../disability-accommodation-prompts';
import { actionPrompts as divorceCoordinationPrompts } from '../../divorce-coordination-prompts';
import { actionPrompts as divorceProcessPrompts } from '../../divorce-process-prompts';
import { actionPrompts as downsizingDecisionsPrompts } from '../../downsizing-decisions-prompts';
import { actionPrompts as dropshippingPrompts } from '../../dropshipping-prompts';
import { actionPrompts as eCommerceStorePrompts } from '../../e-commerce-store-prompts';
import { actionPrompts as earlyCareerAdvancementPrompts } from '../../early-career-advancement-prompts';
import { actionPrompts as educationLearningPrompts } from '../../education-learning-prompts';
import { actionPrompts as elderCarePrompts } from '../../elder-care-prompts';
import { actionPrompts as emptyNestPrompts } from '../../empty-nest-prompts';
import { actionPrompts as emptyNestSyndromePrompts } from '../../empty-nest-syndrome-prompts';
import { actionPrompts as endOfLifePlanningPrompts } from '../../end-of-life-planning-prompts';
import { actionPrompts as estatePlanningPrompts } from '../../estate-planning-prompts';
import { actionPrompts as eventPlanningPrompts } from '../../event-planning-prompts';
import { actionPrompts as executiveLeadershipTransitionPrompts } from '../../executive-leadership-transition-prompts';
import { actionPrompts as familyCrisisManagementPrompts } from '../../family-crisis-management-prompts';
import { actionPrompts as familyEstrangementPrompts } from '../../family-estrangement-prompts';
import { actionPrompts as familyTherapyPrompts } from '../../family-therapy-prompts';
import { actionPrompts as fashionDesignPrompts } from '../../fashion-design-prompts';
import { actionPrompts as financialIndependencePrompts } from '../../financial-independence-prompts';
import { actionPrompts as financialIndependenceCollegePrompts } from '../../financial-independence-college-prompts';
import { actionPrompts as financialRecoveryPrompts } from '../../financial-recovery-prompts';
import { actionPrompts as firstJobTransitionPrompts } from '../../first-job-transition-prompts';
import { actionPrompts as firstManagementRolePrompts } from '../../first-management-role-prompts';
import { actionPrompts as firstSeriousRelationshipPrompts } from '../../first-serious-relationship-prompts';
import { actionPrompts as firstTimeParentPrompts } from '../../first-time-parent-prompts';
import { actionPrompts as fitnessJourneyPrompts } from '../../fitness-journey-prompts';
import { actionPrompts as fixedIncomeManagementPrompts } from '../../fixed-income-management-prompts';
import { actionPrompts as fraternitySororityDecisionsPrompts } from '../../fraternity-sorority-decisions-prompts';
import { actionPrompts as freelanceBusinessPrompts } from '../../freelance-business-prompts';
import { actionPrompts as gardenPlanningPrompts } from '../../garden-planning-prompts';
import { actionPrompts as geographicRelocationPrompts } from '../../geographic-relocation-prompts';
import { actionPrompts as graduateSchoolDecisionsPrompts } from '../../graduate-school-decisions-prompts';
import { actionPrompts as grandparentRolePrompts } from '../../grandparent-role-prompts';
import { actionPrompts as griefLossPrompts } from '../../grief-loss-prompts';
import { actionPrompts as habitTrackingPrompts } from '../../habit-tracking-prompts';
import { actionPrompts as healthCrisisManagementPrompts } from '../../health-crisis-management-prompts';
import { actionPrompts as healthDeclineNavigationPrompts } from '../../health-decline-navigation-prompts';
import { actionPrompts as healthWellnessPrompts } from '../../health-wellness-prompts';
import { actionPrompts as hobbyPhotographyPrompts } from '../../hobby-photography-prompts';
import { actionPrompts as hobbyProjectPrompts } from '../../hobby-project-prompts';
import { actionPrompts as homeAutomationPrompts } from '../../home-automation-prompts';
import { actionPrompts as homeBuyingPrompts } from '../../home-buying-prompts';
import { actionPrompts as homeImprovementPrompts } from '../../home-improvement-prompts';
import { actionPrompts as homeRenovationPrompts } from '../../home-renovation-prompts';
import { actionPrompts as identityTheftPrompts } from '../../identity-theft-prompts';
import { actionPrompts as identityTheftRecoveryPrompts } from '../../identity-theft-recovery-prompts';
import { actionPrompts as immigrationJourneyPrompts } from '../../immigration-journey-prompts';
import { actionPrompts as insuranceOptimizationPrompts } from '../../insurance-optimization-prompts';
import { actionPrompts as interiorDesignPrompts } from '../../interior-design-prompts';
import { actionPrompts as internshipCompetitionPrompts } from '../../internship-competition-prompts';
import { actionPrompts as investingFinancePrompts } from '../../investing-finance-prompts';
import { actionPrompts as investmentPortfolioPrompts } from '../../investment-portfolio-prompts';
import { actionPrompts as investmentPropertyPrompts } from '../../investment-property-prompts';
import { actionPrompts as jobLossNavigationPrompts } from '../../job-loss-navigation-prompts';
import { actionPrompts as jobLossRecoveryPrompts } from '../../job-loss-recovery-prompts';
import { actionPrompts as jobSearchPrompts } from '../../job-search-prompts';
import { actionPrompts as jobTransitionPrompts } from '../../job-transition-prompts';
import { actionPrompts as languageLearningPrompts } from '../../language-learning-prompts';
import { actionPrompts as legalIssueManagementPrompts } from '../../legal-issue-management-prompts';
import { actionPrompts as lifeTransitionsPrompts } from '../../life-transitions-prompts';
import { actionPrompts as longDistanceRelationshipPrompts } from '../../long-distance-relationship-prompts';
import { actionPrompts as marathonTrainingPrompts } from '../../marathon-training-prompts';
import { actionPrompts as marriageMaintenancePrompts } from '../../marriage-maintenance-prompts';
import { actionPrompts as mealPlanningPrompts } from '../../meal-planning-prompts';
import { actionPrompts as medicalTreatmentPrompts } from '../../medical-treatment-prompts';
import { actionPrompts as meditationJourneyPrompts } from '../../meditation-journey-prompts';
import { actionPrompts as mentalHealthPrompts } from '../../mental-health-prompts';
import { actionPrompts as mentalHealthCollegePrompts } from '../../mental-health-college-prompts';
import { actionPrompts as mentalHealthSupportPrompts } from '../../mental-health-support-prompts';
import { actionPrompts as midlifeCrisisPrompts } from '../../midlife-crisis-prompts';
import { actionPrompts as midlifeHealthChangesPrompts } from '../../midlife-health-changes-prompts';
import { actionPrompts as militaryVeteranTransitionPrompts } from '../../military-veteran-transition-prompts';
import { actionPrompts as mindfulnessMeditationPrompts } from '../../mindfulness-meditation-prompts';
import { actionPrompts as mobileAppStartupPrompts } from '../../mobile-app-startup-prompts';
import { actionPrompts as mortgageManagementPrompts } from '../../mortgage-management-prompts';
import { actionPrompts as movingRelocationPrompts } from '../../moving-relocation-prompts';
import { actionPrompts as musicLearningPrompts } from '../../music-learning-prompts';
import { actionPrompts as musicProductionPrompts } from '../../music-production-prompts';
import { actionPrompts as naturalDisasterRecoveryPrompts } from '../../natural-disaster-recovery-prompts';
import { actionPrompts as nonprofitManagementPrompts } from '../../nonprofit-management-prompts';
import { actionPrompts as nonprofitStartupPrompts } from '../../nonprofit-startup-prompts';
import { actionPrompts as onlineBusinessLaunchPrompts } from '../../online-business-launch-prompts';
import { actionPrompts as onlineCoursePrompts } from '../../online-course-prompts';
import { actionPrompts as parentingGuidancePrompts } from '../../parenting-guidance-prompts';
import { actionPrompts as peakEarningOptimizationPrompts } from '../../peak-earning-optimization-prompts';
import { actionPrompts as personalBrandingPrompts } from '../../personal-branding-prompts';
import { actionPrompts as personalFinancePrompts } from '../../personal-finance-prompts';
import { actionPrompts as personalFinanceMasteryPrompts } from '../../personal-finance-mastery-prompts';
import { actionPrompts as personalGrowthPrompts } from '../../personal-growth-prompts';
import { actionPrompts as personalTrainingPrompts } from '../../personal-training-prompts';
import { actionPrompts as petCarePrompts } from '../../pet-care-prompts';
import { actionPrompts as photographyBusinessPrompts } from '../../photography-business-prompts';
import { actionPrompts as podcastCreationPrompts } from '../../podcast-creation-prompts';
import { actionPrompts as professionalNetworkingPrompts } from '../../professional-networking-prompts';
import { actionPrompts as publicSpeakingPrompts } from '../../public-speaking-prompts';
import { actionPrompts as quarterLifeCrisisPrompts } from '../../quarter-life-crisis-prompts';
import { actionPrompts as readingChallengePrompts } from '../../reading-challenge-prompts';
import { actionPrompts as realEstateInvestingPrompts } from '../../real-estate-investing-prompts';
import { actionPrompts as relationshipBreakupPrompts } from '../../relationship-breakup-prompts';
import { actionPrompts as relationshipCoachingPrompts } from '../../relationship-coaching-prompts';
import { actionPrompts as relationshipDatingPrompts } from '../../relationship-dating-prompts';
import { actionPrompts as relationshipTherapyPrompts } from '../../relationship-therapy-prompts';
import { actionPrompts as rentalManagementPrompts } from '../../rental-management-prompts';
import { actionPrompts as restaurantOpeningPrompts } from '../../restaurant-opening-prompts';
import { actionPrompts as retirementLifestylePrompts } from '../../retirement-lifestyle-prompts';
import { actionPrompts as retirementPlanningPrompts } from '../../retirement-planning-prompts';
import { actionPrompts as retirementTransitionPrompts } from '../../retirement-transition-prompts';
import { actionPrompts as roommateNavigationPrompts } from '../../roommate-navigation-prompts';
import { actionPrompts as saasStartupPrompts } from '../../saas-startup-prompts';
import { actionPrompts as sandwichGenerationPrompts } from '../../sandwich-generation-prompts';
import { actionPrompts as sideHustleDevelopmentPrompts } from '../../side-hustle-development-prompts';
import { actionPrompts as skillDevelopmentPrompts } from '../../skill-development-prompts';
import { actionPrompts as smallBusinessPrompts } from '../../small-business-prompts';
import { actionPrompts as smallBusinessLaunchPrompts } from '../../small-business-launch-prompts';
import { actionPrompts as smartGardenPrompts } from '../../smart-garden-prompts';
import { actionPrompts as socialEntrepreneurshipPrompts } from '../../social-entrepreneurship-prompts';
import { actionPrompts as socialMediaManagementPrompts } from '../../social-media-management-prompts';
import { actionPrompts as spiritualAwakeningPrompts } from '../../spiritual-awakening-prompts';
import { actionPrompts as spiritualGrowthPrompts } from '../../spiritual-growth-prompts';
import { actionPrompts as sportsTeamPrompts } from '../../sports-team-prompts';
import { actionPrompts as stockTradingPrompts } from '../../stock-trading-prompts';
import { actionPrompts as stressManagementPrompts } from '../../stress-management-prompts';
import { actionPrompts as studentLoanStrategyPrompts } from '../../student-loan-strategy-prompts';
import { actionPrompts as studyAbroadPlanningPrompts } from '../../study-abroad-planning-prompts';
import { actionPrompts as sustainableLivingPrompts } from '../../sustainable-living-prompts';
import { actionPrompts as techStartupGuidePrompts } from '../../tech-startup-guide-prompts';
import { actionPrompts as technologyDigitalPrompts } from '../../technology-digital-prompts';
import { actionPrompts as teenageParentingPrompts } from '../../teenage-parenting-prompts';
import { actionPrompts as testTemplatePrompts } from '../../test-template-prompts';
import { actionPrompts as transportationPlanningPrompts } from '../../transportation-planning-prompts';
import { actionPrompts as travelPlanningPrompts } from '../../travel-planning-prompts';
import { actionPrompts as urbanGardeningPrompts } from '../../urban-gardening-prompts';
import { actionPrompts as weddingPlanningPrompts } from '../../wedding-planning-prompts';
import { actionPrompts as weightLossPrompts } from '../../weight-loss-prompts';
import { actionPrompts as wineCollectionPrompts } from '../../wine-collection-prompts';
import { actionPrompts as workforceReentryPrompts } from '../../workforce-reentry-prompts';
import { actionPrompts as yogaPracticePrompts } from '../../yoga-practice-prompts';
import { actionPrompts as youtubeChannelPrompts } from '../../youtube-channel-prompts';

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