import type { Metadata } from 'next';
import Script from 'next/script';
import { PageLayout } from '@/components/layout';
import { GlossaryContent } from '@/components/glossary-content';

export const metadata: Metadata = {
  title: 'Planning Glossary - Definitions of Life Planning Terms & Concepts | Templata',
  description: 'Complete planning glossary with definitions. What is life planning? Strategic planning? Goal setting? Learn key planning terms, concepts, methodologies. Free reference for wedding, career, financial & life planning vocabulary.',
  keywords: 'planning glossary, planning terms definitions, life planning definitions, what is life planning, what is strategic planning, what is goal setting, planning concepts explained, strategic planning vocabulary, planning methodologies, planning terminology, life planning glossary, what is career planning, what is financial planning',
};

interface GlossaryTerm {
  term: string;
  definition: string;
  relatedTerms?: string[];
}

const glossaryTerms: Record<string, GlossaryTerm[]> = {
  'Core Planning Concepts': [
    {
      term: 'Life Planning',
      definition: 'A systematic approach to organizing and preparing for major life events, transitions, and decisions. Life planning involves setting goals, identifying resources, anticipating challenges, and creating actionable steps to achieve desired outcomes.',
      relatedTerms: ['Strategic Planning', 'Goal Setting', 'Life Design'],
    },
    {
      term: 'Strategic Planning',
      definition: 'The process of defining a strategy or direction and making decisions on allocating resources to pursue this strategy. In personal contexts, it involves setting long-term goals and determining the best approach to achieve them.',
      relatedTerms: ['Life Planning', 'Goal Setting', 'Action Plan'],
    },
    {
      term: 'Goal Setting',
      definition: 'The process of identifying specific, measurable, achievable, relevant, and time-bound (SMART) objectives you want to accomplish. Effective goal setting provides direction and motivation for life planning efforts.',
      relatedTerms: ['Milestone', 'Objective', 'Target'],
    },
    {
      term: 'Milestone',
      definition: 'A significant event or stage in the development of a plan or project. Milestones help track progress and provide checkpoints to evaluate whether you\'re on track to achieve your goals.',
      relatedTerms: ['Goal Setting', 'Progress Tracking', 'Checkpoint'],
    },
    {
      term: 'Action Plan',
      definition: 'A detailed outline of the specific steps, tasks, and resources needed to achieve a goal. An action plan breaks down large objectives into manageable, concrete actions with timelines and responsibilities.',
      relatedTerms: ['Strategic Planning', 'Implementation', 'Task Management'],
    },
    {
      term: 'Risk Assessment',
      definition: 'The process of identifying potential challenges, obstacles, or negative outcomes that could impact your plans. Risk assessment helps you prepare contingencies and make informed decisions.',
      relatedTerms: ['Contingency Planning', 'Risk Mitigation', 'Scenario Planning'],
    },
  ],
  'Planning Categories': [
    {
      term: 'Career Planning',
      definition: 'The ongoing process of managing your career development, including setting professional goals, identifying skill gaps, exploring career paths, and making strategic decisions about job changes, education, and professional growth.',
      relatedTerms: ['Professional Development', 'Career Transition', 'Job Search'],
    },
    {
      term: 'Financial Planning',
      definition: 'The process of managing your finances to achieve life goals, including budgeting, saving, investing, retirement planning, and managing debt. Financial planning ensures your money aligns with your values and objectives.',
      relatedTerms: ['Budget Management', 'Investment Planning', 'Retirement Planning'],
    },
    {
      term: 'Wedding Planning',
      definition: 'The comprehensive process of organizing all aspects of a wedding ceremony and reception, including venue selection, vendor coordination, guest management, budgeting, and timeline creation.',
      relatedTerms: ['Event Planning', 'Budget Management', 'Vendor Selection'],
    },
    {
      term: 'Home Buying Planning',
      definition: 'The process of preparing to purchase residential property, including financial readiness assessment, mortgage pre-approval, location research, home searching, negotiation, and closing procedures.',
      relatedTerms: ['Financial Planning', 'Real Estate', 'Mortgage Planning'],
    },
    {
      term: 'Business Planning',
      definition: 'The process of defining business objectives and creating detailed strategies to achieve them. Business planning includes market analysis, financial projections, operational planning, and growth strategies.',
      relatedTerms: ['Strategic Planning', 'Business Strategy', 'Entrepreneurship'],
    },
    {
      term: 'Education Planning',
      definition: 'The process of preparing for educational pursuits, including selecting schools or programs, understanding admission requirements, securing financial aid, and planning for academic success.',
      relatedTerms: ['Career Planning', 'Financial Planning', 'Academic Success'],
    },
    {
      term: 'Retirement Planning',
      definition: 'The process of determining retirement income goals and the actions necessary to achieve those goals, including identifying sources of income, estimating expenses, implementing savings programs, and managing assets.',
      relatedTerms: ['Financial Planning', 'Investment Planning', 'Life Planning'],
    },
    {
      term: 'Health & Wellness Planning',
      definition: 'The systematic approach to improving and maintaining physical, mental, and emotional health through goal setting, lifestyle changes, preventive care, and ongoing health management.',
      relatedTerms: ['Life Planning', 'Lifestyle Design', 'Preventive Care'],
    },
  ],
  'Templata Platform Terms': [
    {
      term: 'Planning Guide',
      definition: 'A comprehensive, structured resource on Templata that provides expert guidance for specific life events or decisions. Each guide includes planning questions, expert readings, and organized frameworks to help you think through complex situations.',
      relatedTerms: ['Expert Reading', 'Planning Questions', 'Guide Category'],
    },
    {
      term: 'Planning Questions',
      definition: 'AI-refined, systematically organized questions designed to help you think through specific aspects of a life decision or event. Planning questions guide your thinking and ensure you consider important factors.',
      relatedTerms: ['Planning Guide', 'Question Framework', 'Decision Making'],
    },
    {
      term: 'Expert Reading',
      definition: 'Curated articles, insights, and resources from experts in various fields that provide context, research, and best practices related to specific planning topics. Expert readings complement planning questions with actionable knowledge.',
      relatedTerms: ['Planning Guide', 'Expert Content', 'Resource Library'],
    },
    {
      term: 'Guide Category',
      definition: 'A thematic grouping of related planning guides on Templata. Categories organize guides by life domain (e.g., Career & Work, Finance, Relationships, Health) for easier navigation and discovery.',
      relatedTerms: ['Planning Guide', 'Content Organization', 'Navigation'],
    },
    {
      term: 'Reading Library',
      definition: 'A searchable collection of all expert readings across all planning guides on Templata. The library allows you to discover relevant content by topic, author, or guide.',
      relatedTerms: ['Expert Reading', 'Content Discovery', 'Resource Hub'],
    },
  ],
  'Planning Methodologies': [
    {
      term: 'Design Thinking',
      definition: 'A human-centered approach to problem-solving that emphasizes empathy, ideation, prototyping, and testing. In life planning, design thinking helps you explore possibilities and iterate on solutions.',
      relatedTerms: ['Problem Solving', 'Iterative Planning', 'Creative Thinking'],
    },
    {
      term: 'Scenario Planning',
      definition: 'A strategic planning method that involves creating and analyzing multiple plausible future scenarios. This approach helps you prepare for uncertainty and make flexible plans.',
      relatedTerms: ['Risk Assessment', 'Strategic Planning', 'Future Planning'],
    },
    {
      term: 'Backward Planning',
      definition: 'A planning approach that starts with the end goal and works backward to identify the steps needed to reach it. This method ensures all planning activities align with the desired outcome.',
      relatedTerms: ['Goal Setting', 'Action Plan', 'Milestone Planning'],
    },
    {
      term: 'SMART Goals',
      definition: 'A goal-setting framework where objectives are Specific, Measurable, Achievable, Relevant, and Time-bound. SMART goals create clarity and improve the likelihood of success.',
      relatedTerms: ['Goal Setting', 'Objective Setting', 'Performance Metrics'],
    },
    {
      term: 'Contingency Planning',
      definition: 'The process of preparing alternative plans for potential problems or unexpected events. Contingency planning ensures you\'re prepared for various outcomes and can adapt when circumstances change.',
      relatedTerms: ['Risk Assessment', 'Backup Plan', 'Adaptability'],
    },
  ],
  'Decision Making': [
    {
      term: 'Decision Framework',
      definition: 'A structured approach or set of criteria used to evaluate options and make informed choices. Decision frameworks reduce bias and ensure consistent, rational decision-making.',
      relatedTerms: ['Decision Making', 'Critical Thinking', 'Analysis'],
    },
    {
      term: 'Pros and Cons Analysis',
      definition: 'A simple decision-making tool that involves listing and weighing the advantages and disadvantages of different options. This analysis helps clarify trade-offs and make balanced decisions.',
      relatedTerms: ['Decision Framework', 'Comparative Analysis', 'Evaluation'],
    },
    {
      term: 'Cost-Benefit Analysis',
      definition: 'A systematic approach to evaluating the financial and non-financial costs and benefits of a decision or investment. This analysis helps determine whether an option is worth pursuing.',
      relatedTerms: ['Financial Planning', 'Decision Framework', 'ROI'],
    },
    {
      term: 'Priority Matrix',
      definition: 'A tool for organizing tasks or goals based on their importance and urgency. Priority matrices help you focus on what matters most and allocate time and resources effectively.',
      relatedTerms: ['Time Management', 'Task Prioritization', 'Resource Allocation'],
    },
  ],
};

export default function GlossaryPage() {
  const allTermsFlat = Object.entries(glossaryTerms).flatMap(([category, terms]) =>
    terms.map(term => ({ ...term, category }))
  );

  // DefinedTermSet schema for glossary
  const definedTermSetSchema = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    name: 'Planning Glossary',
    description: 'Comprehensive glossary of planning terms, life planning concepts, and strategic planning definitions',
    hasDefinedTerm: allTermsFlat.slice(0, 50).map((term) => ({
      '@type': 'DefinedTerm',
      name: term.term,
      description: term.definition,
      inDefinedTermSet: 'https://templata.org/glossary',
    })),
  };

  // WebPage schema
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Planning Glossary | Key Terms & Definitions',
    description: 'Comprehensive glossary of planning terms, life planning concepts, and strategic planning definitions. Learn the language of effective planning.',
    url: 'https://templata.org/glossary',
  };

  // FAQPage schema for "What is..." questions
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allTermsFlat.slice(0, 30).map((term) => ({
      '@type': 'Question',
      name: `What is ${term.term}?`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: term.definition,
      },
    })),
  };

  return (
    <>
      <Script
        id="glossary-definedtermset-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSetSchema) }}
      />
      <Script
        id="glossary-webpage-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <Script
        id="glossary-faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <PageLayout>
        <GlossaryContent glossaryTerms={glossaryTerms} totalTerms={allTermsFlat.length} />

      {/* Hidden SEO content - all terms for search engines */}
      <div className="sr-only" aria-hidden="true">
        <h2>Complete Planning Terminology Reference</h2>
        <p>
          Comprehensive planning glossary with {allTermsFlat.length} essential terms for life planning, strategic planning, and decision making.
        </p>

        <h3>All Planning Terms and Definitions</h3>
        <dl>
          {allTermsFlat.map((item) => (
            <div key={item.term}>
              <dt>
                <strong>What is {item.term}?</strong>
              </dt>
              <dd>
                {item.definition}
                {item.relatedTerms && item.relatedTerms.length > 0 && (
                  <p>
                    Related planning terms: {item.relatedTerms.join(', ')}
                  </p>
                )}
                <p>Category: {item.category}</p>
              </dd>
            </div>
          ))}
        </dl>

        <h3>Planning Glossary by Category</h3>
        {Object.entries(glossaryTerms).map(([category, terms]) => (
          <div key={category}>
            <h4>{category} - Planning Terms and Definitions</h4>
            <ul>
              {terms.map((term) => (
                <li key={term.term}>
                  <strong>{term.term} definition:</strong> {term.definition}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <h3>Common Planning Questions</h3>
        <ul>
          <li>What is life planning and why is it important?</li>
          <li>What is strategic planning in personal development?</li>
          <li>What is career planning and how do I start?</li>
          <li>What is financial planning for beginners?</li>
          <li>What is a planning guide and how do I use it?</li>
          <li>What are planning questions and why are they important?</li>
          <li>What is goal setting and how does it work?</li>
          <li>What is a milestone in planning?</li>
          <li>What is risk assessment in life planning?</li>
          <li>What is contingency planning?</li>
        </ul>
      </div>
      </PageLayout>
    </>
  );
}
