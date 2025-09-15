'use client';

import { TemplateLanding } from '@/components/landing/TemplateLanding';
import { getLandingPageData } from '@/registry/landing-pages';

export default function AcademicResearchLandingPage() {
  const landingPage = getLandingPageData('academic-research');
  
  if (!landingPage) {
    return <div>Landing page not found</div>;
  }
  
  return <TemplateLanding {...landingPage} />;
}