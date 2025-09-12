'use client';

import { TemplateLanding } from '@/components/landing/TemplateLanding';
import { getLandingPageData } from '@/registry/landing-pages';

export default function PersonalFinanceInvestmentLandingPage() {
  const landingPage = getLandingPageData('personal-finance-investment');
  
  if (!landingPage) {
    return <div>Landing page not found</div>;
  }
  
  return <TemplateLanding {...landingPage} />;
}