export interface GeneratedItem {
  type: 'task' | 'question' | 'resource';
  content: string;
  phase: string;
  position: number;
  resource_type?: 'venue' | 'book' | 'person' | 'video' | 'tool' | 'website';
  url?: string;
}

export interface GeneratedPlaybook {
  title: string;
  description: string;
  items: GeneratedItem[];
}

export function buildPlaybookPrompt(userContext: string): string {
  return `You are a world-class life planning expert. A user has described what they are planning. Your job is to generate a structured, personalized Playbook to help them execute it successfully.

User's context:
"${userContext}"

Generate a Playbook as a JSON object with this exact shape:

{
  "title": "Short, specific title for this playbook",
  "description": "2-3 sentence overview tailored to their specific situation",
  "items": [
    {
      "type": "task" | "question" | "resource",
      "content": "The task instruction, question text, or resource name",
      "phase": "Phase name (e.g. 'Before You Start', '6 Months Out', 'Final Month')",
      "position": 1,
      "resource_type": "venue | book | person | video | tool | website",  // only for resources
      "url": "https://..."  // only for resources, include if well-known and reliable
    }
  ]
}

Rules:
- Generate 8-15 tasks, 8-15 questions, and 5-10 resources. Total items: 25-40.
- Order items by phase so they tell a logical story from start to finish.
- Use 3-5 phases with clear, specific names relevant to their situation (not generic like "Phase 1").
- Tasks should be concrete and actionable — not vague. Bad: "research venues". Good: "Visit at least 3 venues and compare: capacity, catering policy, and deposit terms."
- Questions should provoke real thinking and unlock the AI feedback experience. Each answer should lead somewhere useful.
- Resources should be genuinely relevant to their specific context (city, budget, type of event). Include local resources if location is mentioned.
- If you include a URL, only use well-known reliable sources (e.g. theknot.com, yelp.com, amazon.com, youtube.com). Do not hallucinate URLs.
- Tailor everything to their specific details — budget, location, timeline, preferences mentioned.
- Do not use filler or generic advice. Every item should earn its place.

Respond with only valid JSON. No markdown, no explanation.`;
}

export function buildForkPrompt(userContext: string, originalContext: string): string {
  return `You are a world-class life planning expert. A user is forking an existing playbook and wants it re-tailored to their specific situation.

Original playbook context:
"${originalContext}"

This user's situation:
"${userContext}"

Generate a new Playbook as a JSON object with this exact shape:

{
  "title": "Short, specific title for this playbook",
  "description": "2-3 sentence overview tailored to their specific situation",
  "items": [
    {
      "type": "task" | "question" | "resource",
      "content": "The task instruction, question text, or resource name",
      "phase": "Phase name",
      "position": 1,
      "resource_type": "venue | book | person | video | tool | website",
      "url": "https://..."
    }
  ]
}

Rules:
- Use the original playbook as a structural reference but fully re-tailor every item to the new user's context.
- Generate 8-15 tasks, 8-15 questions, and 5-10 resources.
- Everything must reflect the new user's specific details — their budget, location, timeline, preferences.
- Do not copy items verbatim from the original. Make it genuinely theirs.

Respond with only valid JSON. No markdown, no explanation.`;
}
