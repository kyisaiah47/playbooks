import type { Metadata } from 'next';
import { TemplateLanding } from '@/components/landing/TemplateLanding';
import { getLandingPageData } from '@/registry/landing-pages';

export const metadata: Metadata = {
  title: 'Baby Planning Template | Complete Pregnancy & Newborn Guide | Save 40+ Hours | Templata',
  description: 'Complete baby planning template with pregnancy tracker, nursery checklist, baby registry, and newborn care guide. Used by 6,000+ expecting parents. Stress-free pregnancy planning.',
  keywords: 'baby planning template, pregnancy planner, baby checklist, nursery planning, baby registry template, newborn care guide, pregnancy tracker, baby shower planning',
  openGraph: {
    title: 'Baby Planning Template - Complete Pregnancy & Newborn Planning Guide',
    description: 'Everything you need for a smooth pregnancy and baby arrival. Complete planning templates and guides used by 6,000+ expecting parents.',
    type: 'website',
    images: ['/baby-planning-preview.jpg'],
  },
  alternates: {
    canonical: 'https://templata.com/baby-planning',
  },
}

export default function BabyPlanningPage() {
  const landingData = getLandingPageData('baby-planning');
  
  if (!landingData) {
    return <div>Landing page data not found</div>;
  }
  
  return <TemplateLanding {...landingData} />;
}