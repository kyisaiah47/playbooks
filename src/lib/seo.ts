import type { PlaybookItem } from '@/types/playbook';

export const TEMPLATA_FAQ = [
  {
    question: "What is Playbook?",
    answer: "Playbook is an AI playbook generator. You describe a goal or life event and it creates a step-by-step playbook with tasks, reflection questions, and resources to help you execute."
  },
  {
    question: "How does Playbook work?",
    answer: "Type in what you're trying to accomplish — planning a wedding, moving to a new city, starting a business, anything. Playbook generates a structured playbook with phases, tasks to check off, questions to think through, and relevant resources."
  },
  {
    question: "Is Playbook free to use?",
    answer: "Free users can generate 1 playbook per month. Pro users get up to 10 playbooks per month plus full access to the community feed."
  },
  {
    question: "What can I use Playbook for?",
    answer: "Anything goal-driven — travel planning, career moves, starting a business, personal finance, health goals, moving to a new city, planning events. If it has steps, Playbook can build the playbook."
  },
  {
    question: "Do I need an account?",
    answer: "You can browse community playbooks without an account. To generate your own playbook you need a free account — just an email address, no password required."
  },
  {
    question: "What is the community feed?",
    answer: "The community is a public library of playbooks created by Playbook users. You can browse them for inspiration or fork any playbook into your own account to customize it."
  }
];

export function faqPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": TEMPLATA_FAQ.map((f) => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer,
      },
    })),
  };
}

export function howToSchema(
  title: string,
  description: string | null,
  items: PlaybookItem[],
  url: string
) {
  const steps = items
    .filter((i) => i.type === 'task')
    .map((i, idx) => ({
      "@type": "HowToStep",
      "position": idx + 1,
      "name": i.content,
      "text": i.content,
    }));

  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": title,
    ...(description ? { "description": description } : {}),
    "url": url,
    ...(steps.length > 0 ? { "step": steps } : {}),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": item.name,
      "item": item.url,
    })),
  };
}
