import type { Metadata } from 'next';
import { TemplateLanding } from '@/components/landing/TemplateLanding';
import { getLandingPageData } from '@/registry/landing-pages';

export const metadata: Metadata = {
  title: 'Home Buying Template | Complete First-Time Buyer Guide | Save 80+ Hours | Templata',
  description: 'Complete home buying template with mortgage calculator, house hunting checklist, inspection guide, and closing process tracker. Used by 7,000+ homebuyers. Simplify your home purchase.',
  keywords: 'home buying template, house hunting checklist, mortgage calculator, home inspection guide, real estate template, first time home buyer, home buying process, property search',
  openGraph: {
    title: 'Home Buying Template - Complete First-Time Buyer Guide & Checklist',
    description: 'Everything you need to buy your first home successfully. Complete templates and guides used by 7,000+ homebuyers.',
    type: 'website',
    images: ['/home-buying-preview.jpg'],
  },
  alternates: {
    canonical: 'https://templata.com/home-buying',
  },
}

export default function HomeBuyingPage() {
  const landingData = getLandingPageData('home-buying');
  
  if (!landingData) {
    return <div>Landing page data not found</div>;
  }
  
  return <TemplateLanding {...landingData} />;
}