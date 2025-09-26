export interface Article {
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
  heroImage?: {
    url: string;
    alt: string;
    photographer: string;
    photographerUrl: string;
    unsplashId: string;
    cached: boolean;
  };
  relatedTemplates?: string[];
  relatedPosts?: string[];
}

// Import all template-specific blog posts
import { articles as threeDPrintingPosts } from '../data/articles/articles-3d-printing';
import { articles as academicStrugglesPosts } from '../data/articles/articles-academic-struggles';
import { articles as addictionFamilySupportPosts } from '../data/articles/articles-addiction-family-support';
import { articles as addictionRecoveryPosts } from '../data/articles/articles-addiction-recovery';
import { articles as affiliateMarketingPosts } from '../data/articles/articles-affiliate-marketing';
import { articles as agingParentCarePosts } from '../data/articles/articles-aging-parent-care';
import { articles as antiqueCollectingPosts } from '../data/articles/articles-antique-collecting';
import { articles as apartmentHuntingPosts } from '../data/articles/articles-apartment-hunting';
import { articles as appDevelopmentPosts } from '../data/articles/articles-app-development';
import { articles as artCollectingPosts } from '../data/articles/articles-art-collecting';
import { articles as artPortfolioPosts } from '../data/articles/articles-art-portfolio';
import { articles as babyPlanningPosts } from '../data/articles/articles-baby-planning';
import { articles as bankruptcyRecoveryPosts } from '../data/articles/articles-bankruptcy-recovery';
import { articles as birdwatchingPosts } from '../data/articles/articles-birdwatching';
import { articles as blendedFamilyPosts } from '../data/articles/articles-blended-family';
import { articles as blendedFamilyCreationPosts } from '../data/articles/articles-blended-family-creation';
import { articles as boatMaintenancePosts } from '../data/articles/articles-boat-maintenance';
import { articles as bookClubPosts } from '../data/articles/articles-book-club';
import { articles as bookCollectingPosts } from '../data/articles/articles-book-collecting';
import { articles as bookWritingPosts } from '../data/articles/articles-book-writing';
import { articles as budgetPlanningPosts } from '../data/articles/articles-budget-planning';
import { articles as businessLaunchPosts } from '../data/articles/articles-business-launch';
import { articles as businessSuccessionPosts } from '../data/articles/articles-business-succession';
import { articles as campingTripsPosts } from '../data/articles/articles-camping-trips';
import { articles as carBuyingPosts } from '../data/articles/articles-car-buying';
import { articles as carMaintenancePosts } from '../data/articles/articles-car-maintenance';
import { articles as careerChangePosts } from '../data/articles/articles-career-change';
import { articles as careerPlateauPosts } from '../data/articles/articles-career-plateau';
import { articles as caringForAgingParentsPosts } from '../data/articles/articles-caring-for-aging-parents';
import { articles as chronicIllnessPosts } from '../data/articles/articles-chronic-illness';
import { articles as climateActionPosts } from '../data/articles/articles-climate-action';
import { articles as coachingBusinessPosts } from '../data/articles/articles-coaching-business';
import { articles as collegePlanningPosts } from '../data/articles/articles-college-planning';
import { articles as collegeSelectionPosts } from '../data/articles/articles-college-selection';
import { articles as collegeToCareerTransitionPosts } from '../data/articles/articles-college-to-career-transition';
import { articles as comingOutPosts } from '../data/articles/articles-coming-out';
import { articles as consultingBusinessPosts } from '../data/articles/articles-consulting-business';
import { articles as contentCreationPosts } from '../data/articles/articles-content-creation';
import { articles as contentCreationBusinessPosts } from '../data/articles/articles-content-creation-business';
import { articles as cookingMasteryPosts } from '../data/articles/articles-cooking-mastery';
import { articles as creativeFreelancingPosts } from '../data/articles/articles-creative-freelancing';
import { articles as creativeHobbiesPosts } from '../data/articles/articles-creative-hobbies';
import { articles as creativeWritingPosts } from '../data/articles/articles-creative-writing';
import { articles as cryptoPortfolioPosts } from '../data/articles/articles-crypto-portfolio';
import { articles as danceTrainingPosts } from '../data/articles/articles-dance-training';
import { articles as debtPayoffPosts } from '../data/articles/articles-debt-payoff';
import { articles as digitalDetoxPosts } from '../data/articles/articles-digital-detox';
import { articles as digitalNomadPlanningPosts } from '../data/articles/articles-digital-nomad-planning';
import { articles as disabilityAccommodationPosts } from '../data/articles/articles-disability-accommodation';
import { articles as divorceCoordinationPosts } from '../data/articles/articles-divorce-coordination';
import { articles as divorceProcessPosts } from '../data/articles/articles-divorce-process';
import { articles as downsizingDecisionsPosts } from '../data/articles/articles-downsizing-decisions';
import { articles as dropshippingPosts } from '../data/articles/articles-dropshipping';
import { articles as eCommerceStorePosts } from '../data/articles/articles-e-commerce-store';
import { articles as earlyCareerAdvancementPosts } from '../data/articles/articles-early-career-advancement';
import { articles as educationLearningPosts } from '../data/articles/articles-education-learning';
import { articles as elderCarePosts } from '../data/articles/articles-elder-care';
import { articles as emptyNestPosts } from '../data/articles/articles-empty-nest';
import { articles as emptyNestSyndromePosts } from '../data/articles/articles-empty-nest-syndrome';
import { articles as endOfLifePlanningPosts } from '../data/articles/articles-end-of-life-planning';
import { articles as eventPlanningPosts } from '../data/articles/articles-event-planning';
import { articles as executiveLeadershipTransitionPosts } from '../data/articles/articles-executive-leadership-transition';
import { articles as familyCrisisManagementPosts } from '../data/articles/articles-family-crisis-management';
import { articles as familyEstrangementPosts } from '../data/articles/articles-family-estrangement';
import { articles as familyTherapyPosts } from '../data/articles/articles-family-therapy';
import { articles as fashionDesignPosts } from '../data/articles/articles-fashion-design';
import { articles as financialIndependencePosts } from '../data/articles/articles-financial-independence';
import { articles as financialIndependenceCollegePosts } from '../data/articles/articles-financial-independence-college';
import { articles as financialRecoveryPosts } from '../data/articles/articles-financial-recovery';
import { articles as firstJobTransitionPosts } from '../data/articles/articles-first-job-transition';
import { articles as firstManagementRolePosts } from '../data/articles/articles-first-management-role';
import { articles as firstSeriousRelationshipPosts } from '../data/articles/articles-first-serious-relationship';
import { articles as firstTimeParentPosts } from '../data/articles/articles-first-time-parent';
import { articles as fitnessJourneyPosts } from '../data/articles/articles-fitness-journey';
import { articles as fixedIncomeManagementPosts } from '../data/articles/articles-fixed-income-management';
import { articles as fraternitySororityDecisionsPosts } from '../data/articles/articles-fraternity-sorority-decisions';
import { articles as freelanceBusinessPosts } from '../data/articles/articles-freelance-business';
import { articles as gardenPlanningPosts } from '../data/articles/articles-garden-planning';
import { articles as geographicRelocationPosts } from '../data/articles/articles-geographic-relocation';
import { articles as graduateSchoolDecisionsPosts } from '../data/articles/articles-graduate-school-decisions';
import { articles as grandparentRolePosts } from '../data/articles/articles-grandparent-role';
import { articles as griefLossPosts } from '../data/articles/articles-grief-loss';
import { articles as habitTrackingPosts } from '../data/articles/articles-habit-tracking';
import { articles as healthCrisisManagementPosts } from '../data/articles/articles-health-crisis-management';
import { articles as healthDeclineNavigationPosts } from '../data/articles/articles-health-decline-navigation';
import { articles as healthWellnessPosts } from '../data/articles/articles-health-wellness';
import { articles as hobbyPhotographyPosts } from '../data/articles/articles-hobby-photography';
import { articles as hobbyProjectPosts } from '../data/articles/articles-hobby-project';
import { articles as homeAutomationPosts } from '../data/articles/articles-home-automation';
import { articles as homeBuyingPosts } from '../data/articles/articles-home-buying';
import { articles as homeImprovementPosts } from '../data/articles/articles-home-improvement';
import { articles as homeRenovationPosts } from '../data/articles/articles-home-renovation';
import { articles as identityTheftRecoveryPosts } from '../data/articles/articles-identity-theft-recovery';
import { articles as immigrationJourneyPosts } from '../data/articles/articles-immigration-journey';
import { articles as interiorDesignPosts } from '../data/articles/articles-interior-design';
import { articles as internshipCompetitionPosts } from '../data/articles/articles-internship-competition';
import { articles as investingFinancePosts } from '../data/articles/articles-investing-finance';
import { articles as investmentPortfolioPosts } from '../data/articles/articles-investment-portfolio';
import { articles as jobLossNavigationPosts } from '../data/articles/articles-job-loss-navigation';
import { articles as jobLossRecoveryPosts } from '../data/articles/articles-job-loss-recovery';
import { articles as jobSearchPosts } from '../data/articles/articles-job-search';
import { articles as jobTransitionPosts } from '../data/articles/articles-job-transition';
import { articles as languageLearningPosts } from '../data/articles/articles-language-learning';
import { articles as lifeTransitionsPosts } from '../data/articles/articles-life-transitions';
import { articles as longDistanceRelationshipPosts } from '../data/articles/articles-long-distance-relationship';
import { articles as marathonTrainingPosts } from '../data/articles/articles-marathon-training';
import { articles as marriageMaintenancePosts } from '../data/articles/articles-marriage-maintenance';
import { articles as mealPlanningPosts } from '../data/articles/articles-meal-planning';
import { articles as medicalTreatmentPosts } from '../data/articles/articles-medical-treatment';
import { articles as meditationJourneyPosts } from '../data/articles/articles-meditation-journey';
import { articles as mentalHealthPosts } from '../data/articles/articles-mental-health';
import { articles as mentalHealthCollegePosts } from '../data/articles/articles-mental-health-college';
import { articles as mentalHealthSupportPosts } from '../data/articles/articles-mental-health-support';
import { articles as midlifeCrisisPosts } from '../data/articles/articles-midlife-crisis';
import { articles as mindfulnessMeditationPosts } from '../data/articles/articles-mindfulness-meditation';
import { articles as mobileAppStartupPosts } from '../data/articles/articles-mobile-app-startup';
import { articles as movingRelocationPosts } from '../data/articles/articles-moving-relocation';
import { articles as musicLearningPosts } from '../data/articles/articles-music-learning';
import { articles as musicProductionPosts } from '../data/articles/articles-music-production';
import { articles as nonprofitManagementPosts } from '../data/articles/articles-nonprofit-management';
import { articles as nonprofitStartupPosts } from '../data/articles/articles-nonprofit-startup';
import { articles as onlineBusinessLaunchPosts } from '../data/articles/articles-online-business-launch';
import { articles as onlineCoursePosts } from '../data/articles/articles-online-course';
import { articles as parentingGuidancePosts } from '../data/articles/articles-parenting-guidance';
import { articles as personalBrandingPosts } from '../data/articles/articles-personal-branding';
import { articles as personalFinancePosts } from '../data/articles/articles-personal-finance';
import { articles as personalFinanceMasteryPosts } from '../data/articles/articles-personal-finance-mastery';
import { articles as personalGrowthPosts } from '../data/articles/articles-personal-growth';
import { articles as personalTrainingPosts } from '../data/articles/articles-personal-training';
import { articles as petCarePosts } from '../data/articles/articles-pet-care';
import { articles as photographyBusinessPosts } from '../data/articles/articles-photography-business';
import { articles as podcastCreationPosts } from '../data/articles/articles-podcast-creation';
import { articles as publicSpeakingPosts } from '../data/articles/articles-public-speaking';
import { articles as readingChallengePosts } from '../data/articles/articles-reading-challenge';
import { articles as realEstateInvestingPosts } from '../data/articles/articles-real-estate-investing';
import { articles as relationshipCoachingPosts } from '../data/articles/articles-relationship-coaching';
import { articles as relationshipDatingPosts } from '../data/articles/articles-relationship-dating';
import { articles as relationshipTherapyPosts } from '../data/articles/articles-relationship-therapy';
import { articles as restaurantOpeningPosts } from '../data/articles/articles-restaurant-opening';
import { articles as retirementPlanningPosts } from '../data/articles/articles-retirement-planning';
import { articles as saasStartupPosts } from '../data/articles/articles-saas-startup';
import { articles as sideHustleDevelopmentPosts } from '../data/articles/articles-side-hustle-development';
import { articles as skillDevelopmentPosts } from '../data/articles/articles-skill-development';
import { articles as smallBusinessLaunchPosts } from '../data/articles/articles-small-business-launch';
import { articles as smartGardenPosts } from '../data/articles/articles-smart-garden';
import { articles as socialEntrepreneurshipPosts } from '../data/articles/articles-social-entrepreneurship';
import { articles as socialMediaManagementPosts } from '../data/articles/articles-social-media-management';
import { articles as spiritualGrowthPosts } from '../data/articles/articles-spiritual-growth';
import { articles as sportsTeamPosts } from '../data/articles/articles-sports-team';
import { articles as stockTradingPosts } from '../data/articles/articles-stock-trading';
import { articles as stressManagementPosts } from '../data/articles/articles-stress-management';
import { articles as sustainableLivingPosts } from '../data/articles/articles-sustainable-living';
import { articles as techStartupGuidePosts } from '../data/articles/articles-tech-startup-guide';
import { articles as technologyDigitalPosts } from '../data/articles/articles-technology-digital';
import { articles as teenageParentingPosts } from '../data/articles/articles-teenage-parenting';
import { articles as travelPlanningPosts } from '../data/articles/articles-travel-planning';
import { articles as urbanGardeningPosts } from '../data/articles/articles-urban-gardening';
import { articles as weddingPlanningPosts } from '../data/articles/articles-wedding-planning';
import { articles as weightLossPosts } from '../data/articles/articles-weight-loss';
import { articles as yogaPracticePosts } from '../data/articles/articles-yoga-practice';
import { articles as youtubeChannelPosts } from '../data/articles/articles-youtube-channel';

// Combine all template-specific blog posts
export const articles: Article[] = [
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
export const articleRegistry = articles;

// Helper functions
export const getArticleById = (id: string): Article | undefined => {
  return articleRegistry.find(post => post.id === id);
};

export const getArticleBySlug = (slug: string): Article | undefined => {
  return articleRegistry.find(post => post.slug === slug);
};

export const getArticlesByCategory = (category: string): Article[] => {
  return articleRegistry.filter(post => post.category === category);
};

export const getAllBlogCategories = (): string[] => {
  const categories = articleRegistry.map(post => post.category);
  return [...new Set(categories)].sort();
};

export const getArticlesByTemplate = (templateId: string): Article[] => {
  return articleRegistry.filter(post =>
    post.relatedTemplates && post.relatedTemplates.includes(templateId)
  );
};

export const getRelatedArticles = (postId: string, limit: number = 3): Article[] => {
  const currentPost = getArticleById(postId);
  if (!currentPost) return [];

  // Find related posts by category and tags
  const relatedPosts = articleRegistry.filter(post =>
    post.id !== postId && (
      post.category === currentPost.category ||
      (post.tags && currentPost.tags && post.tags.some(tag => currentPost.tags.includes(tag))) ||
      (currentPost.relatedPosts && currentPost.relatedPosts.includes(post.id))
    )
  );

  // Sort by relevance and return limited results
  return relatedPosts.slice(0, limit);
};