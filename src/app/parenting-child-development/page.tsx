export const dynamic = 'force-dynamic';
import type { Metadata } from 'next';
import { TemplateLanding } from '@/components/landing/TemplateLanding';
import { getLandingPageData } from '@/registry/landing-pages';

export const metadata: Metadata = {
  title: 'Parenting & Child Development Template | Evidence-Based Parenting Guide | Save 30+ Hours | Templata',
  description: 'Complete parenting and child development template with age-appropriate guidance, communication strategies, and evidence-based approaches. Used by 5,000+ parents worldwide.',
  keywords: 'parenting template, child development guide, parenting strategies, child psychology, developmental milestones, parenting skills, family communication, positive parenting',
  openGraph: {
    title: 'Parenting & Child Development Template - Evidence-Based Guidance for Modern Parents',
    description: 'Nurture healthy child development from infancy through adolescence with expert guidance and practical tools used by 5,000+ parents.',
    type: 'website',
    images: ['/parenting-child-development-preview.jpg'],
  },
  alternates: {
    canonical: 'https://templata.com/parenting-child-development',
  },
}

export default function ParentingChildDevelopmentPage() {
  const landingData = getLandingPageData('parenting-child-development');
  
  if (!landingData) {
    return <div>Landing page data not found</div>;
  }
  
  return <TemplateLanding {...landingData} />;
}