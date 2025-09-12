'use client';

import { TemplateLanding } from '@/components/landing/TemplateLanding';
import { getLandingPageData } from '@/registry/landing-pages';

export default function FreelanceGigEconomyLandingPage() {
  const landingPage = getLandingPageData('freelance-gig-economy');
  
  if (!landingPage) {
    return <div>Landing page not found</div>;
  }
  
  return <TemplateLanding {...landingPage} />;
}