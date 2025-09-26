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

// Import individual article modules
import { articles as threeDPrintingArticles } from '../data/articles/articles-3d-printing';
import { articles as academicStrugglesArticles } from '../data/articles/articles-academic-struggles';
import { articles as addictionFamilySupportArticles } from '../data/articles/articles-addiction-family-support';
import { articles as addictionRecoveryArticles } from '../data/articles/articles-addiction-recovery';
import { articles as affiliateMarketingArticles } from '../data/articles/articles-affiliate-marketing';
import { articles as agingParentCareArticles } from '../data/articles/articles-aging-parent-care';
import { articles as antiqueCollectingArticles } from '../data/articles/articles-antique-collecting';
import { articles as apartmentHuntingArticles } from '../data/articles/articles-apartment-hunting';
import { articles as appDevelopmentArticles } from '../data/articles/articles-app-development';
import { articles as artCollectingArticles } from '../data/articles/articles-art-collecting';
import { articles as artPortfolioArticles } from '../data/articles/articles-art-portfolio';
import { articles as babyPlanningArticles } from '../data/articles/articles-baby-planning';
import { articles as bankruptcyRecoveryArticles } from '../data/articles/articles-bankruptcy-recovery';
import { articles as birdwatchingArticles } from '../data/articles/articles-birdwatching';
import { articles as blendedFamilyArticles } from '../data/articles/articles-blended-family';
import { articles as blendedFamilyCreationArticles } from '../data/articles/articles-blended-family-creation';
import { articles as boatMaintenanceArticles } from '../data/articles/articles-boat-maintenance';
import { articles as bookClubArticles } from '../data/articles/articles-book-club';
import { articles as bookCollectingArticles } from '../data/articles/articles-book-collecting';
import { articles as bookWritingArticles } from '../data/articles/articles-book-writing';
import { articles as budgetPlanningArticles } from '../data/articles/articles-budget-planning';
import { articles as businessLaunchArticles } from '../data/articles/articles-business-launch';
import { articles as businessSuccessionArticles } from '../data/articles/articles-business-succession';
import { articles as campingTripsArticles } from '../data/articles/articles-camping-trips';
import { articles as carBuyingArticles } from '../data/articles/articles-car-buying';
import { articles as carMaintenanceArticles } from '../data/articles/articles-car-maintenance';
import { articles as careerChangeArticles } from '../data/articles/articles-career-change';
import { articles as careerPlateauArticles } from '../data/articles/articles-career-plateau';
import { articles as caringForAgingParentsArticles } from '../data/articles/articles-caring-for-aging-parents';
import { articles as chronicIllnessArticles } from '../data/articles/articles-chronic-illness';
import { articles as climateActionArticles } from '../data/articles/articles-climate-action';
import { articles as coachingBusinessArticles } from '../data/articles/articles-coaching-business';
import { articles as collegePlanningArticles } from '../data/articles/articles-college-planning';
import { articles as collegeSelectionArticles } from '../data/articles/articles-college-selection';
import { articles as collegeToCareerTransitionArticles } from '../data/articles/articles-college-to-career-transition';
import { articles as comingOutArticles } from '../data/articles/articles-coming-out';
import { articles as consultingBusinessArticles } from '../data/articles/articles-consulting-business';
import { articles as contentCreationArticles } from '../data/articles/articles-content-creation';
import { articles as contentCreationBusinessArticles } from '../data/articles/articles-content-creation-business';
import { articles as cookingMasteryArticles } from '../data/articles/articles-cooking-mastery';
import { articles as creativeFreelancingArticles } from '../data/articles/articles-creative-freelancing';
import { articles as creativeHobbiesArticles } from '../data/articles/articles-creative-hobbies';
import { articles as creativeWritingArticles } from '../data/articles/articles-creative-writing';
import { articles as cryptoPortfolioArticles } from '../data/articles/articles-crypto-portfolio';
import { articles as danceTrainingArticles } from '../data/articles/articles-dance-training';
import { articles as debtPayoffArticles } from '../data/articles/articles-debt-payoff';
import { articles as digitalDetoxArticles } from '../data/articles/articles-digital-detox';
import { articles as digitalNomadPlanningArticles } from '../data/articles/articles-digital-nomad-planning';
import { articles as disabilityAccommodationArticles } from '../data/articles/articles-disability-accommodation';
import { articles as divorceCoordinationArticles } from '../data/articles/articles-divorce-coordination';
import { articles as divorceProcessArticles } from '../data/articles/articles-divorce-process';
import { articles as downsizingDecisionsArticles } from '../data/articles/articles-downsizing-decisions';
import { articles as dropshippingArticles } from '../data/articles/articles-dropshipping';
import { articles as eCommerceStoreArticles } from '../data/articles/articles-e-commerce-store';
import { articles as earlyCareerAdvancementArticles } from '../data/articles/articles-early-career-advancement';
import { articles as educationLearningArticles } from '../data/articles/articles-education-learning';
import { articles as elderCareArticles } from '../data/articles/articles-elder-care';
import { articles as emptyNestArticles } from '../data/articles/articles-empty-nest';
import { articles as emptyNestSyndromeArticles } from '../data/articles/articles-empty-nest-syndrome';
import { articles as endOfLifePlanningArticles } from '../data/articles/articles-end-of-life-planning';
import { articles as eventPlanningArticles } from '../data/articles/articles-event-planning';
import { articles as executiveLeadershipTransitionArticles } from '../data/articles/articles-executive-leadership-transition';
import { articles as familyCrisisManagementArticles } from '../data/articles/articles-family-crisis-management';
import { articles as familyEstrangementArticles } from '../data/articles/articles-family-estrangement';
import { articles as familyTherapyArticles } from '../data/articles/articles-family-therapy';
import { articles as fashionDesignArticles } from '../data/articles/articles-fashion-design';
import { articles as financialIndependenceArticles } from '../data/articles/articles-financial-independence';
import { articles as financialIndependenceCollegeArticles } from '../data/articles/articles-financial-independence-college';
import { articles as financialRecoveryArticles } from '../data/articles/articles-financial-recovery';
import { articles as firstJobTransitionArticles } from '../data/articles/articles-first-job-transition';
import { articles as firstManagementRoleArticles } from '../data/articles/articles-first-management-role';
import { articles as firstSeriousRelationshipArticles } from '../data/articles/articles-first-serious-relationship';
import { articles as firstTimeParentArticles } from '../data/articles/articles-first-time-parent';
import { articles as fitnessJourneyArticles } from '../data/articles/articles-fitness-journey';
import { articles as fixedIncomeManagementArticles } from '../data/articles/articles-fixed-income-management';
import { articles as fraternitySororityDecisionsArticles } from '../data/articles/articles-fraternity-sorority-decisions';
import { articles as freelanceBusinessArticles } from '../data/articles/articles-freelance-business';
import { articles as gardenPlanningArticles } from '../data/articles/articles-garden-planning';
import { articles as geographicRelocationArticles } from '../data/articles/articles-geographic-relocation';
import { articles as graduateSchoolDecisionsArticles } from '../data/articles/articles-graduate-school-decisions';
import { articles as grandparentRoleArticles } from '../data/articles/articles-grandparent-role';
import { articles as griefLossArticles } from '../data/articles/articles-grief-loss';
import { articles as habitTrackingArticles } from '../data/articles/articles-habit-tracking';
import { articles as healthCrisisManagementArticles } from '../data/articles/articles-health-crisis-management';
import { articles as healthDeclineNavigationArticles } from '../data/articles/articles-health-decline-navigation';
import { articles as healthWellnessArticles } from '../data/articles/articles-health-wellness';
import { articles as hobbyPhotographyArticles } from '../data/articles/articles-hobby-photography';
import { articles as hobbyProjectArticles } from '../data/articles/articles-hobby-project';
import { articles as homeAutomationArticles } from '../data/articles/articles-home-automation';
import { articles as homeBuyingArticles } from '../data/articles/articles-home-buying';
import { articles as homeImprovementArticles } from '../data/articles/articles-home-improvement';
import { articles as homeRenovationArticles } from '../data/articles/articles-home-renovation';
import { articles as identityTheftRecoveryArticles } from '../data/articles/articles-identity-theft-recovery';
import { articles as immigrationJourneyArticles } from '../data/articles/articles-immigration-journey';
import { articles as interiorDesignArticles } from '../data/articles/articles-interior-design';
import { articles as internshipCompetitionArticles } from '../data/articles/articles-internship-competition';
import { articles as investingFinanceArticles } from '../data/articles/articles-investing-finance';
import { articles as investmentPortfolioArticles } from '../data/articles/articles-investment-portfolio';
import { articles as jobLossNavigationArticles } from '../data/articles/articles-job-loss-navigation';
import { articles as jobLossRecoveryArticles } from '../data/articles/articles-job-loss-recovery';
import { articles as jobSearchArticles } from '../data/articles/articles-job-search';
import { articles as jobTransitionArticles } from '../data/articles/articles-job-transition';
import { articles as languageLearningArticles } from '../data/articles/articles-language-learning';
import { articles as lifeTransitionsArticles } from '../data/articles/articles-life-transitions';
import { articles as longDistanceRelationshipArticles } from '../data/articles/articles-long-distance-relationship';
import { articles as marathonTrainingArticles } from '../data/articles/articles-marathon-training';
import { articles as marriageMaintenanceArticles } from '../data/articles/articles-marriage-maintenance';
import { articles as mealPlanningArticles } from '../data/articles/articles-meal-planning';
import { articles as medicalTreatmentArticles } from '../data/articles/articles-medical-treatment';
import { articles as meditationJourneyArticles } from '../data/articles/articles-meditation-journey';
import { articles as mentalHealthArticles } from '../data/articles/articles-mental-health';
import { articles as mentalHealthCollegeArticles } from '../data/articles/articles-mental-health-college';
import { articles as mentalHealthSupportArticles } from '../data/articles/articles-mental-health-support';
import { articles as midlifeCrisisArticles } from '../data/articles/articles-midlife-crisis';
import { articles as mindfulnessMeditationArticles } from '../data/articles/articles-mindfulness-meditation';
import { articles as mobileAppStartupArticles } from '../data/articles/articles-mobile-app-startup';
import { articles as movingRelocationArticles } from '../data/articles/articles-moving-relocation';
import { articles as musicLearningArticles } from '../data/articles/articles-music-learning';
import { articles as musicProductionArticles } from '../data/articles/articles-music-production';
import { articles as nonprofitManagementArticles } from '../data/articles/articles-nonprofit-management';
import { articles as nonprofitStartupArticles } from '../data/articles/articles-nonprofit-startup';
import { articles as onlineBusinessLaunchArticles } from '../data/articles/articles-online-business-launch';
import { articles as onlineCourseArticles } from '../data/articles/articles-online-course';
import { articles as parentingGuidanceArticles } from '../data/articles/articles-parenting-guidance';
import { articles as personalBrandingArticles } from '../data/articles/articles-personal-branding';
import { articles as personalFinanceArticles } from '../data/articles/articles-personal-finance';
import { articles as personalFinanceMasteryArticles } from '../data/articles/articles-personal-finance-mastery';
import { articles as personalGrowthArticles } from '../data/articles/articles-personal-growth';
import { articles as personalTrainingArticles } from '../data/articles/articles-personal-training';
import { articles as petCareArticles } from '../data/articles/articles-pet-care';
import { articles as photographyBusinessArticles } from '../data/articles/articles-photography-business';
import { articles as podcastCreationArticles } from '../data/articles/articles-podcast-creation';
import { articles as publicSpeakingArticles } from '../data/articles/articles-public-speaking';
import { articles as readingChallengeArticles } from '../data/articles/articles-reading-challenge';
import { articles as realEstateInvestingArticles } from '../data/articles/articles-real-estate-investing';
import { articles as relationshipCoachingArticles } from '../data/articles/articles-relationship-coaching';
import { articles as relationshipDatingArticles } from '../data/articles/articles-relationship-dating';
import { articles as relationshipTherapyArticles } from '../data/articles/articles-relationship-therapy';
import { articles as restaurantOpeningArticles } from '../data/articles/articles-restaurant-opening';
import { articles as retirementPlanningArticles } from '../data/articles/articles-retirement-planning';
import { articles as saasStartupArticles } from '../data/articles/articles-saas-startup';
import { articles as sideHustleDevelopmentArticles } from '../data/articles/articles-side-hustle-development';
import { articles as skillDevelopmentArticles } from '../data/articles/articles-skill-development';
import { articles as smallBusinessLaunchArticles } from '../data/articles/articles-small-business-launch';
import { articles as smartGardenArticles } from '../data/articles/articles-smart-garden';
import { articles as socialEntrepreneurshipArticles } from '../data/articles/articles-social-entrepreneurship';
import { articles as socialMediaManagementArticles } from '../data/articles/articles-social-media-management';
import { articles as spiritualGrowthArticles } from '../data/articles/articles-spiritual-growth';
import { articles as sportsTeamArticles } from '../data/articles/articles-sports-team';
import { articles as stockTradingArticles } from '../data/articles/articles-stock-trading';
import { articles as stressManagementArticles } from '../data/articles/articles-stress-management';
import { articles as sustainableLivingArticles } from '../data/articles/articles-sustainable-living';
import { articles as techStartupGuideArticles } from '../data/articles/articles-tech-startup-guide';
import { articles as technologyDigitalArticles } from '../data/articles/articles-technology-digital';
import { articles as teenageParentingArticles } from '../data/articles/articles-teenage-parenting';
import { articles as travelPlanningArticles } from '../data/articles/articles-travel-planning';
import { articles as urbanGardeningArticles } from '../data/articles/articles-urban-gardening';
import { articles as weddingPlanningArticles } from '../data/articles/articles-wedding-planning';
import { articles as weightLossArticles } from '../data/articles/articles-weight-loss';
import { articles as yogaPracticeArticles } from '../data/articles/articles-yoga-practice';
import { articles as youtubeChannelArticles } from '../data/articles/articles-youtube-channel';

// Combine all articles
export const articles: Article[] = [
  ...threeDPrintingArticles,
  ...academicStrugglesArticles,
  ...addictionFamilySupportArticles,
  ...addictionRecoveryArticles,
  ...affiliateMarketingArticles,
  ...agingParentCareArticles,
  ...antiqueCollectingArticles,
  ...apartmentHuntingArticles,
  ...appDevelopmentArticles,
  ...artCollectingArticles,
  ...artPortfolioArticles,
  ...babyPlanningArticles,
  ...bankruptcyRecoveryArticles,
  ...birdwatchingArticles,
  ...blendedFamilyArticles,
  ...blendedFamilyCreationArticles,
  ...boatMaintenanceArticles,
  ...bookClubArticles,
  ...bookCollectingArticles,
  ...bookWritingArticles,
  ...budgetPlanningArticles,
  ...businessLaunchArticles,
  ...businessSuccessionArticles,
  ...campingTripsArticles,
  ...carBuyingArticles,
  ...carMaintenanceArticles,
  ...careerChangeArticles,
  ...careerPlateauArticles,
  ...caringForAgingParentsArticles,
  ...chronicIllnessArticles,
  ...climateActionArticles,
  ...coachingBusinessArticles,
  ...collegePlanningArticles,
  ...collegeSelectionArticles,
  ...collegeToCareerTransitionArticles,
  ...comingOutArticles,
  ...consultingBusinessArticles,
  ...contentCreationArticles,
  ...contentCreationBusinessArticles,
  ...cookingMasteryArticles,
  ...creativeFreelancingArticles,
  ...creativeHobbiesArticles,
  ...creativeWritingArticles,
  ...cryptoPortfolioArticles,
  ...danceTrainingArticles,
  ...debtPayoffArticles,
  ...digitalDetoxArticles,
  ...digitalNomadPlanningArticles,
  ...disabilityAccommodationArticles,
  ...divorceCoordinationArticles,
  ...divorceProcessArticles,
  ...downsizingDecisionsArticles,
  ...dropshippingArticles,
  ...eCommerceStoreArticles,
  ...earlyCareerAdvancementArticles,
  ...educationLearningArticles,
  ...elderCareArticles,
  ...emptyNestArticles,
  ...emptyNestSyndromeArticles,
  ...endOfLifePlanningArticles,
  ...eventPlanningArticles,
  ...executiveLeadershipTransitionArticles,
  ...familyCrisisManagementArticles,
  ...familyEstrangementArticles,
  ...familyTherapyArticles,
  ...fashionDesignArticles,
  ...financialIndependenceArticles,
  ...financialIndependenceCollegeArticles,
  ...financialRecoveryArticles,
  ...firstJobTransitionArticles,
  ...firstManagementRoleArticles,
  ...firstSeriousRelationshipArticles,
  ...firstTimeParentArticles,
  ...fitnessJourneyArticles,
  ...fixedIncomeManagementArticles,
  ...fraternitySororityDecisionsArticles,
  ...freelanceBusinessArticles,
  ...gardenPlanningArticles,
  ...geographicRelocationArticles,
  ...graduateSchoolDecisionsArticles,
  ...grandparentRoleArticles,
  ...griefLossArticles,
  ...habitTrackingArticles,
  ...healthCrisisManagementArticles,
  ...healthDeclineNavigationArticles,
  ...healthWellnessArticles,
  ...hobbyPhotographyArticles,
  ...hobbyProjectArticles,
  ...homeAutomationArticles,
  ...homeBuyingArticles,
  ...homeImprovementArticles,
  ...homeRenovationArticles,
  ...identityTheftRecoveryArticles,
  ...immigrationJourneyArticles,
  ...interiorDesignArticles,
  ...internshipCompetitionArticles,
  ...investingFinanceArticles,
  ...investmentPortfolioArticles,
  ...jobLossNavigationArticles,
  ...jobLossRecoveryArticles,
  ...jobSearchArticles,
  ...jobTransitionArticles,
  ...languageLearningArticles,
  ...lifeTransitionsArticles,
  ...longDistanceRelationshipArticles,
  ...marathonTrainingArticles,
  ...marriageMaintenanceArticles,
  ...mealPlanningArticles,
  ...medicalTreatmentArticles,
  ...meditationJourneyArticles,
  ...mentalHealthArticles,
  ...mentalHealthCollegeArticles,
  ...mentalHealthSupportArticles,
  ...midlifeCrisisArticles,
  ...mindfulnessMeditationArticles,
  ...mobileAppStartupArticles,
  ...movingRelocationArticles,
  ...musicLearningArticles,
  ...musicProductionArticles,
  ...nonprofitManagementArticles,
  ...nonprofitStartupArticles,
  ...onlineBusinessLaunchArticles,
  ...onlineCourseArticles,
  ...parentingGuidanceArticles,
  ...personalBrandingArticles,
  ...personalFinanceArticles,
  ...personalFinanceMasteryArticles,
  ...personalGrowthArticles,
  ...personalTrainingArticles,
  ...petCareArticles,
  ...photographyBusinessArticles,
  ...podcastCreationArticles,
  ...publicSpeakingArticles,
  ...readingChallengeArticles,
  ...realEstateInvestingArticles,
  ...relationshipCoachingArticles,
  ...relationshipDatingArticles,
  ...relationshipTherapyArticles,
  ...restaurantOpeningArticles,
  ...retirementPlanningArticles,
  ...saasStartupArticles,
  ...sideHustleDevelopmentArticles,
  ...skillDevelopmentArticles,
  ...smallBusinessLaunchArticles,
  ...smartGardenArticles,
  ...socialEntrepreneurshipArticles,
  ...socialMediaManagementArticles,
  ...spiritualGrowthArticles,
  ...sportsTeamArticles,
  ...stockTradingArticles,
  ...stressManagementArticles,
  ...sustainableLivingArticles,
  ...techStartupGuideArticles,
  ...technologyDigitalArticles,
  ...teenageParentingArticles,
  ...travelPlanningArticles,
  ...urbanGardeningArticles,
  ...weddingPlanningArticles,
  ...weightLossArticles,
  ...yogaPracticeArticles,
  ...youtubeChannelArticles,
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