export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  readTime: string;
  category: string;
  featured?: boolean;
  tags: string[];
  slug: string;
  type: 'guide' | 'article' | 'checklist' | 'tool';
  difficulty: 'beginner' | 'intermediate' | 'expert';
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    ogImage?: string;
  };
  relatedTemplates?: string[];
  relatedPosts?: string[];
}

// Import all template-specific blog posts
import { manualBlogPosts as threeDPrintingPosts } from './blogs-3d-printing';
import { manualBlogPosts as academicStrugglesPosts } from './blogs-academic-struggles';
import { manualBlogPosts as addictionFamilySupportPosts } from './blogs-addiction-family-support';
import { manualBlogPosts as addictionRecoveryPosts } from './blogs-addiction-recovery';
import { manualBlogPosts as affiliateMarketingPosts } from './blogs-affiliate-marketing';
import { manualBlogPosts as agingParentCarePosts } from './blogs-aging-parent-care';
import { manualBlogPosts as antiqueCollectingPosts } from './blogs-antique-collecting';
import { manualBlogPosts as apartmentHuntingPosts } from './blogs-apartment-hunting';
import { manualBlogPosts as appDevelopmentPosts } from './blogs-app-development';
import { manualBlogPosts as artCollectingPosts } from './blogs-art-collecting';
import { manualBlogPosts as artPortfolioPosts } from './blogs-art-portfolio';
import { manualBlogPosts as babyPlanningPosts } from './blogs-baby-planning';
import { manualBlogPosts as bankruptcyRecoveryPosts } from './blogs-bankruptcy-recovery';
import { manualBlogPosts as birdwatchingPosts } from './blogs-birdwatching';
import { manualBlogPosts as blendedFamilyPosts } from './blogs-blended-family';
import { manualBlogPosts as blendedFamilyCreationPosts } from './blogs-blended-family-creation';
import { manualBlogPosts as boatMaintenancePosts } from './blogs-boat-maintenance';
import { manualBlogPosts as bookClubPosts } from './blogs-book-club';
import { manualBlogPosts as bookCollectingPosts } from './blogs-book-collecting';
import { manualBlogPosts as bookWritingPosts } from './blogs-book-writing';
import { manualBlogPosts as budgetPlanningPosts } from './blogs-budget-planning';
import { manualBlogPosts as businessLaunchPosts } from './blogs-business-launch';
import { manualBlogPosts as businessSuccessionPosts } from './blogs-business-succession';
import { manualBlogPosts as campingTripsPosts } from './blogs-camping-trips';
import { manualBlogPosts as carBuyingPosts } from './blogs-car-buying';
import { manualBlogPosts as carMaintenancePosts } from './blogs-car-maintenance';
import { manualBlogPosts as careerChangePosts } from './blogs-career-change';
import { manualBlogPosts as careerPlateauPosts } from './blogs-career-plateau';
import { manualBlogPosts as caringForAgingParentsPosts } from './blogs-caring-for-aging-parents';
import { manualBlogPosts as chronicIllnessPosts } from './blogs-chronic-illness';
import { manualBlogPosts as climateActionPosts } from './blogs-climate-action';
import { manualBlogPosts as coachingBusinessPosts } from './blogs-coaching-business';
import { manualBlogPosts as collegePlanningPosts } from './blogs-college-planning';
import { manualBlogPosts as collegeSelectionPosts } from './blogs-college-selection';
import { manualBlogPosts as collegeToCareerTransitionPosts } from './blogs-college-to-career-transition';
import { manualBlogPosts as comingOutPosts } from './blogs-coming-out';
import { manualBlogPosts as consultingBusinessPosts } from './blogs-consulting-business';
import { manualBlogPosts as contentCreationPosts } from './blogs-content-creation';
import { manualBlogPosts as contentCreationBusinessPosts } from './blogs-content-creation-business';
import { manualBlogPosts as cookingMasteryPosts } from './blogs-cooking-mastery';
import { manualBlogPosts as creativeFreelancingPosts } from './blogs-creative-freelancing';
import { manualBlogPosts as creativeHobbiesPosts } from './blogs-creative-hobbies';
import { manualBlogPosts as creativeWritingPosts } from './blogs-creative-writing';
import { manualBlogPosts as cryptoPortfolioPosts } from './blogs-crypto-portfolio';
import { manualBlogPosts as danceTrainingPosts } from './blogs-dance-training';
import { manualBlogPosts as debtPayoffPosts } from './blogs-debt-payoff';
import { manualBlogPosts as digitalDetoxPosts } from './blogs-digital-detox';
import { manualBlogPosts as digitalNomadPlanningPosts } from './blogs-digital-nomad-planning';
import { manualBlogPosts as disabilityAccommodationPosts } from './blogs-disability-accommodation';
import { manualBlogPosts as divorceCoordinationPosts } from './blogs-divorce-coordination';
import { manualBlogPosts as divorceProcessPosts } from './blogs-divorce-process';
import { manualBlogPosts as downsizingDecisionsPosts } from './blogs-downsizing-decisions';
import { manualBlogPosts as dropshippingPosts } from './blogs-dropshipping';
import { manualBlogPosts as eCommerceStorePosts } from './blogs-e-commerce-store';
import { manualBlogPosts as earlyCareerAdvancementPosts } from './blogs-early-career-advancement';
import { manualBlogPosts as educationLearningPosts } from './blogs-education-learning';
import { manualBlogPosts as elderCarePosts } from './blogs-elder-care';
import { manualBlogPosts as emptyNestPosts } from './blogs-empty-nest';
import { manualBlogPosts as emptyNestSyndromePosts } from './blogs-empty-nest-syndrome';
import { manualBlogPosts as endOfLifePlanningPosts } from './blogs-end-of-life-planning';
import { manualBlogPosts as eventPlanningPosts } from './blogs-event-planning';
import { manualBlogPosts as executiveLeadershipTransitionPosts } from './blogs-executive-leadership-transition';
import { manualBlogPosts as familyCrisisManagementPosts } from './blogs-family-crisis-management';
import { manualBlogPosts as familyEstrangementPosts } from './blogs-family-estrangement';
import { manualBlogPosts as familyTherapyPosts } from './blogs-family-therapy';
import { manualBlogPosts as fashionDesignPosts } from './blogs-fashion-design';
import { manualBlogPosts as financialIndependencePosts } from './blogs-financial-independence';
import { manualBlogPosts as financialIndependenceCollegePosts } from './blogs-financial-independence-college';
import { manualBlogPosts as financialRecoveryPosts } from './blogs-financial-recovery';
import { manualBlogPosts as firstJobTransitionPosts } from './blogs-first-job-transition';
import { manualBlogPosts as firstManagementRolePosts } from './blogs-first-management-role';
import { manualBlogPosts as firstSeriousRelationshipPosts } from './blogs-first-serious-relationship';
import { manualBlogPosts as firstTimeParentPosts } from './blogs-first-time-parent';
import { manualBlogPosts as fitnessJourneyPosts } from './blogs-fitness-journey';
import { manualBlogPosts as fixedIncomeManagementPosts } from './blogs-fixed-income-management';
import { manualBlogPosts as fraternitySororityDecisionsPosts } from './blogs-fraternity-sorority-decisions';
import { manualBlogPosts as freelanceBusinessPosts } from './blogs-freelance-business';
import { manualBlogPosts as gardenPlanningPosts } from './blogs-garden-planning';
import { manualBlogPosts as geographicRelocationPosts } from './blogs-geographic-relocation';
import { manualBlogPosts as graduateSchoolDecisionsPosts } from './blogs-graduate-school-decisions';
import { manualBlogPosts as grandparentRolePosts } from './blogs-grandparent-role';
import { manualBlogPosts as griefLossPosts } from './blogs-grief-loss';
import { manualBlogPosts as habitTrackingPosts } from './blogs-habit-tracking';
import { manualBlogPosts as healthCrisisManagementPosts } from './blogs-health-crisis-management';
import { manualBlogPosts as healthDeclineNavigationPosts } from './blogs-health-decline-navigation';
import { manualBlogPosts as healthWellnessPosts } from './blogs-health-wellness';
import { manualBlogPosts as hobbyPhotographyPosts } from './blogs-hobby-photography';
import { manualBlogPosts as hobbyProjectPosts } from './blogs-hobby-project';
import { manualBlogPosts as homeAutomationPosts } from './blogs-home-automation';
import { manualBlogPosts as homeBuyingPosts } from './blogs-home-buying';
import { manualBlogPosts as homeImprovementPosts } from './blogs-home-improvement';
import { manualBlogPosts as homeRenovationPosts } from './blogs-home-renovation';
import { manualBlogPosts as identityTheftRecoveryPosts } from './blogs-identity-theft-recovery';
import { manualBlogPosts as immigrationJourneyPosts } from './blogs-immigration-journey';
import { manualBlogPosts as interiorDesignPosts } from './blogs-interior-design';
import { manualBlogPosts as internshipCompetitionPosts } from './blogs-internship-competition';
import { manualBlogPosts as investingFinancePosts } from './blogs-investing-finance';
import { manualBlogPosts as investmentPortfolioPosts } from './blogs-investment-portfolio';
import { manualBlogPosts as jobLossNavigationPosts } from './blogs-job-loss-navigation';
import { manualBlogPosts as jobLossRecoveryPosts } from './blogs-job-loss-recovery';
import { manualBlogPosts as jobSearchPosts } from './blogs-job-search';
import { manualBlogPosts as jobTransitionPosts } from './blogs-job-transition';
import { manualBlogPosts as languageLearningPosts } from './blogs-language-learning';
import { manualBlogPosts as lifeTransitionsPosts } from './blogs-life-transitions';
import { manualBlogPosts as longDistanceRelationshipPosts } from './blogs-long-distance-relationship';
import { manualBlogPosts as marathonTrainingPosts } from './blogs-marathon-training';
import { manualBlogPosts as marriageMaintenancePosts } from './blogs-marriage-maintenance';
import { manualBlogPosts as mealPlanningPosts } from './blogs-meal-planning';
import { manualBlogPosts as medicalTreatmentPosts } from './blogs-medical-treatment';
import { manualBlogPosts as meditationJourneyPosts } from './blogs-meditation-journey';
import { manualBlogPosts as mentalHealthPosts } from './blogs-mental-health';
import { manualBlogPosts as mentalHealthCollegePosts } from './blogs-mental-health-college';
import { manualBlogPosts as mentalHealthSupportPosts } from './blogs-mental-health-support';
import { manualBlogPosts as midlifeCrisisPosts } from './blogs-midlife-crisis';
import { manualBlogPosts as mindfulnessMeditationPosts } from './blogs-mindfulness-meditation';
import { manualBlogPosts as mobileAppStartupPosts } from './blogs-mobile-app-startup';
import { manualBlogPosts as movingRelocationPosts } from './blogs-moving-relocation';
import { manualBlogPosts as musicLearningPosts } from './blogs-music-learning';
import { manualBlogPosts as musicProductionPosts } from './blogs-music-production';
import { manualBlogPosts as nonprofitManagementPosts } from './blogs-nonprofit-management';
import { manualBlogPosts as nonprofitStartupPosts } from './blogs-nonprofit-startup';
import { manualBlogPosts as onlineBusinessLaunchPosts } from './blogs-online-business-launch';
import { manualBlogPosts as onlineCoursePosts } from './blogs-online-course';
import { manualBlogPosts as parentingGuidancePosts } from './blogs-parenting-guidance';
import { manualBlogPosts as personalBrandingPosts } from './blogs-personal-branding';
import { manualBlogPosts as personalFinancePosts } from './blogs-personal-finance';
import { manualBlogPosts as personalFinanceMasteryPosts } from './blogs-personal-finance-mastery';
import { manualBlogPosts as personalGrowthPosts } from './blogs-personal-growth';
import { manualBlogPosts as personalTrainingPosts } from './blogs-personal-training';
import { manualBlogPosts as petCarePosts } from './blogs-pet-care';
import { manualBlogPosts as photographyBusinessPosts } from './blogs-photography-business';
import { manualBlogPosts as podcastCreationPosts } from './blogs-podcast-creation';
import { manualBlogPosts as publicSpeakingPosts } from './blogs-public-speaking';
import { manualBlogPosts as readingChallengePosts } from './blogs-reading-challenge';
import { manualBlogPosts as realEstateInvestingPosts } from './blogs-real-estate-investing';
import { manualBlogPosts as relationshipCoachingPosts } from './blogs-relationship-coaching';
import { manualBlogPosts as relationshipDatingPosts } from './blogs-relationship-dating';
import { manualBlogPosts as relationshipTherapyPosts } from './blogs-relationship-therapy';
import { manualBlogPosts as restaurantOpeningPosts } from './blogs-restaurant-opening';
import { manualBlogPosts as retirementPlanningPosts } from './blogs-retirement-planning';
import { manualBlogPosts as saasStartupPosts } from './blogs-saas-startup';
import { manualBlogPosts as sideHustleDevelopmentPosts } from './blogs-side-hustle-development';
import { manualBlogPosts as skillDevelopmentPosts } from './blogs-skill-development';
import { manualBlogPosts as smallBusinessLaunchPosts } from './blogs-small-business-launch';
import { manualBlogPosts as smartGardenPosts } from './blogs-smart-garden';
import { manualBlogPosts as socialEntrepreneurshipPosts } from './blogs-social-entrepreneurship';
import { manualBlogPosts as socialMediaManagementPosts } from './blogs-social-media-management';
import { manualBlogPosts as spiritualGrowthPosts } from './blogs-spiritual-growth';
import { manualBlogPosts as sportsTeamPosts } from './blogs-sports-team';
import { manualBlogPosts as stockTradingPosts } from './blogs-stock-trading';
import { manualBlogPosts as stressManagementPosts } from './blogs-stress-management';
import { manualBlogPosts as sustainableLivingPosts } from './blogs-sustainable-living';
import { manualBlogPosts as techStartupGuidePosts } from './blogs-tech-startup-guide';
import { manualBlogPosts as technologyDigitalPosts } from './blogs-technology-digital';
import { manualBlogPosts as teenageParentingPosts } from './blogs-teenage-parenting';
import { manualBlogPosts as travelPlanningPosts } from './blogs-travel-planning';
import { manualBlogPosts as urbanGardeningPosts } from './blogs-urban-gardening';
import { manualBlogPosts as weddingPlanningPosts } from './blogs-wedding-planning';
import { manualBlogPosts as weightLossPosts } from './blogs-weight-loss';
import { manualBlogPosts as yogaPracticePosts } from './blogs-yoga-practice';
import { manualBlogPosts as youtubeChannelPosts } from './blogs-youtube-channel';

// Original blog posts (keep these)
const originalBlogPosts: BlogPost[] = [
  {
    id: "electric-vehicle-transition-guide-traditional-buyers",
    slug: "electric-vehicle-transition-guide-traditional-buyers",
    title: "Making the Electric Vehicle Transition: A Practical Guide for Traditional Car Buyers",
    excerpt: "Electric vehicles represent more than just a technology shift – they're fundamentally changing how people think about car ownership, maintenance, and daily driving routines. For traditional car buyers considering the switch, understanding the real-world implications goes far beyond range anxiety and charging logistics.",
    content: `Electric vehicles have reached a tipping point where they're no longer experimental technology for early adopters. Major automakers are committing hundreds of billions to electrification, governments are implementing purchase incentives and gas car phase-out timelines, and charging infrastructure is expanding rapidly across the country. Yet for traditional car buyers, the transition still feels like stepping into unknown territory.

The shift to electric isn't just about swapping gas tanks for batteries. It fundamentally changes the relationship between driver and vehicle, affecting everything from daily routines to long-term financial planning. Understanding these changes before making the switch helps traditional buyers evaluate whether electric vehicles align with their actual needs rather than just their environmental aspirations.

This guide cuts through marketing hype and internet debates to focus on practical considerations that matter for real-world car ownership. Whether electric vehicles make sense for your situation depends on specific factors unique to your driving patterns, home situation, and financial priorities.`,
    author: "Templata",
    publishedAt: "2024-01-15",
    readTime: "12 min",
    category: "Personal Life",
    tags: ["car-buying", "electric-vehicles", "guide"],
    type: "guide",
    difficulty: "intermediate"
  }
];

// Combine original posts with all template-specific blog posts
export const manualBlogPosts: BlogPost[] = [
  ...originalBlogPosts,
  ...threeDPrintingPosts,
  ...academicStrugglesPosts,
  ...addictionFamilySupportPosts,
  ...addictionRecoveryPosts,
  ...affiliateMarketingPosts,
  ...agingParentCarePosts,
  ...antiqueCollectingPosts,
  ...apartmentHuntingPosts,
  ...appDevelopmentPosts,
  ...artCollectingPosts,
  ...artPortfolioPosts,
  ...babyPlanningPosts,
  ...bankruptcyRecoveryPosts,
  ...birdwatchingPosts,
  ...blendedFamilyPosts,
  ...blendedFamilyCreationPosts,
  ...boatMaintenancePosts,
  ...bookClubPosts,
  ...bookCollectingPosts,
  ...bookWritingPosts,
  ...budgetPlanningPosts,
  ...businessLaunchPosts,
  ...businessSuccessionPosts,
  ...campingTripsPosts,
  ...carBuyingPosts,
  ...carMaintenancePosts,
  ...careerChangePosts,
  ...careerPlateauPosts,
  ...caringForAgingParentsPosts,
  ...chronicIllnessPosts,
  ...climateActionPosts,
  ...coachingBusinessPosts,
  ...collegePlanningPosts,
  ...collegeSelectionPosts,
  ...collegeToCareerTransitionPosts,
  ...comingOutPosts,
  ...consultingBusinessPosts,
  ...contentCreationPosts,
  ...contentCreationBusinessPosts,
  ...cookingMasteryPosts,
  ...creativeFreelancingPosts,
  ...creativeHobbiesPosts,
  ...creativeWritingPosts,
  ...cryptoPortfolioPosts,
  ...danceTrainingPosts,
  ...debtPayoffPosts,
  ...digitalDetoxPosts,
  ...digitalNomadPlanningPosts,
  ...disabilityAccommodationPosts,
  ...divorceCoordinationPosts,
  ...divorceProcessPosts,
  ...downsizingDecisionsPosts,
  ...dropshippingPosts,
  ...eCommerceStorePosts,
  ...earlyCareerAdvancementPosts,
  ...educationLearningPosts,
  ...elderCarePosts,
  ...emptyNestPosts,
  ...emptyNestSyndromePosts,
  ...endOfLifePlanningPosts,
  ...eventPlanningPosts,
  ...executiveLeadershipTransitionPosts,
  ...familyCrisisManagementPosts,
  ...familyEstrangementPosts,
  ...familyTherapyPosts,
  ...fashionDesignPosts,
  ...financialIndependencePosts,
  ...financialIndependenceCollegePosts,
  ...financialRecoveryPosts,
  ...firstJobTransitionPosts,
  ...firstManagementRolePosts,
  ...firstSeriousRelationshipPosts,
  ...firstTimeParentPosts,
  ...fitnessJourneyPosts,
  ...fixedIncomeManagementPosts,
  ...fraternitySororityDecisionsPosts,
  ...freelanceBusinessPosts,
  ...gardenPlanningPosts,
  ...geographicRelocationPosts,
  ...graduateSchoolDecisionsPosts,
  ...grandparentRolePosts,
  ...griefLossPosts,
  ...habitTrackingPosts,
  ...healthCrisisManagementPosts,
  ...healthDeclineNavigationPosts,
  ...healthWellnessPosts,
  ...hobbyPhotographyPosts,
  ...hobbyProjectPosts,
  ...homeAutomationPosts,
  ...homeBuyingPosts,
  ...homeImprovementPosts,
  ...homeRenovationPosts,
  ...identityTheftRecoveryPosts,
  ...immigrationJourneyPosts,
  ...interiorDesignPosts,
  ...internshipCompetitionPosts,
  ...investingFinancePosts,
  ...investmentPortfolioPosts,
  ...jobLossNavigationPosts,
  ...jobLossRecoveryPosts,
  ...jobSearchPosts,
  ...jobTransitionPosts,
  ...languageLearningPosts,
  ...lifeTransitionsPosts,
  ...longDistanceRelationshipPosts,
  ...marathonTrainingPosts,
  ...marriageMaintenancePosts,
  ...mealPlanningPosts,
  ...medicalTreatmentPosts,
  ...meditationJourneyPosts,
  ...mentalHealthPosts,
  ...mentalHealthCollegePosts,
  ...mentalHealthSupportPosts,
  ...midlifeCrisisPosts,
  ...mindfulnessMeditationPosts,
  ...mobileAppStartupPosts,
  ...movingRelocationPosts,
  ...musicLearningPosts,
  ...musicProductionPosts,
  ...nonprofitManagementPosts,
  ...nonprofitStartupPosts,
  ...onlineBusinessLaunchPosts,
  ...onlineCoursePosts,
  ...parentingGuidancePosts,
  ...personalBrandingPosts,
  ...personalFinancePosts,
  ...personalFinanceMasteryPosts,
  ...personalGrowthPosts,
  ...personalTrainingPosts,
  ...petCarePosts,
  ...photographyBusinessPosts,
  ...podcastCreationPosts,
  ...publicSpeakingPosts,
  ...readingChallengePosts,
  ...realEstateInvestingPosts,
  ...relationshipCoachingPosts,
  ...relationshipDatingPosts,
  ...relationshipTherapyPosts,
  ...restaurantOpeningPosts,
  ...retirementPlanningPosts,
  ...saasStartupPosts,
  ...sideHustleDevelopmentPosts,
  ...skillDevelopmentPosts,
  ...smallBusinessLaunchPosts,
  ...smartGardenPosts,
  ...socialEntrepreneurshipPosts,
  ...socialMediaManagementPosts,
  ...spiritualGrowthPosts,
  ...sportsTeamPosts,
  ...stockTradingPosts,
  ...stressManagementPosts,
  ...sustainableLivingPosts,
  ...techStartupGuidePosts,
  ...technologyDigitalPosts,
  ...teenageParentingPosts,
  ...travelPlanningPosts,
  ...urbanGardeningPosts,
  ...weddingPlanningPosts,
  ...weightLossPosts,
  ...yogaPracticePosts,
  ...youtubeChannelPosts,
];

// Export blog registry
export const blogRegistry = manualBlogPosts;

// Helper functions
export const getBlogPostById = (id: string): BlogPost | undefined => {
  return blogRegistry.find(post => post.id === id);
};

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogRegistry.find(post => post.slug === slug);
};

export const getBlogPostsByCategory = (category: string): BlogPost[] => {
  return blogRegistry.filter(post => post.category === category);
};

export const getAllBlogCategories = (): string[] => {
  const categories = blogRegistry.map(post => post.category);
  return [...new Set(categories)].sort();
};

export const getBlogPostsByTemplate = (templateId: string): BlogPost[] => {
  return blogRegistry.filter(post =>
    post.relatedTemplates && post.relatedTemplates.includes(templateId)
  );
};

export const getRelatedBlogPosts = (postId: string, limit: number = 3): BlogPost[] => {
  const currentPost = getBlogPostById(postId);
  if (!currentPost) return [];

  // Find related posts by category and tags
  const relatedPosts = blogRegistry.filter(post =>
    post.id !== postId && (
      post.category === currentPost.category ||
      post.tags.some(tag => currentPost.tags.includes(tag)) ||
      (currentPost.relatedPosts && currentPost.relatedPosts.includes(post.id))
    )
  );

  // Sort by relevance and return limited results
  return relatedPosts.slice(0, limit);
};