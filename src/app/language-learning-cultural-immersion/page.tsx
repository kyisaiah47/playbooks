'use client';

import { TemplateLanding } from '@/components/landing/TemplateLanding';
import { getLandingPageData } from '@/registry/landing-pages';

export default function LanguageLearningCulturalImmersionLandingPage() {
  const landingPage = getLandingPageData('language-learning-cultural-immersion');
  
  if (!landingPage) {
    return <div>Landing page not found</div>;
  }
  
  return <TemplateLanding {...landingPage} />;
}