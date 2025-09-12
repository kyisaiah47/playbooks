'use client';

import { TemplateLanding } from '@/components/landing/TemplateLanding';
import { getLandingPageData } from '@/registry/landing-pages';

export default function FitnessAthleticTrainingLandingPage() {
  const landingPage = getLandingPageData('fitness-athletic-training');
  
  if (!landingPage) {
    return <div>Landing page not found</div>;
  }
  
  return <TemplateLanding {...landingPage} />;
}