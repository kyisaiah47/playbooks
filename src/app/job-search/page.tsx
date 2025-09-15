import type { Metadata } from 'next';
import { TemplateLanding } from '@/components/landing/TemplateLanding';
import { getLandingPageData } from '@/registry/landing-pages';

export const metadata: Metadata = {
  title: 'Job Search Template | Complete Career Change Guide | Land Your Dream Job | Templata',
  description: 'Complete job search template with resume builder, interview prep, networking tracker, and application organizer. Used by 8,000+ job seekers. Land your dream job faster.',
  keywords: 'job search template, resume template, interview preparation, job application tracker, career change guide, job hunting checklist, networking template, job search strategy',
  openGraph: {
    title: 'Job Search Template - Complete Career Change & Job Hunting Guide',
    description: 'Everything you need for a successful job search. Resume templates, interview prep, and application tracking used by 8,000+ job seekers.',
    type: 'website',
    images: ['/job-search-preview.jpg'],
  },
  alternates: {
    canonical: 'https://templata.com/job-search',
  },
}

export default function JobSearchPage() {
  const landingData = getLandingPageData('job-search');
  
  if (!landingData) {
    return <div>Landing page data not found</div>;
  }
  
  return <TemplateLanding {...landingData} />;
}