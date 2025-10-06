export const categoryName = "Medical Bill Analysis and Error Documentation";

export const prompts = [
  {
    id: 'prompt-1',
    prompt: 'Document all line items on your medical bill that seem unclear, incorrect, or unusually expensive for future reference.',
    category: 'planning'
  },
  {
    id: 'prompt-2',
    prompt: 'Research typical costs for your specific medical procedures or treatments in your geographic area to establish baseline pricing.',
    category: 'research'
  },
  {
    id: 'prompt-3',
    prompt: 'Note any discrepancies between what your healthcare provider told you the cost would be versus the actual bill received.',
    category: 'planning'
  },
  {
    id: 'prompt-4',
    prompt: 'Reflect on your understanding of the medical services you received and whether the billed items accurately represent your experience.',
    category: 'reflection'
  },
  {
    id: 'prompt-5',
    prompt: 'Research your healthcare provider\'s billing practices and any historical patterns of billing errors or disputes.',
    category: 'research'
  },
  {
    id: 'prompt-6',
    prompt: 'Document the timeline of your medical treatment and compare it to the dates listed on your medical bills.',
    category: 'decision'
  },
  {
    id: 'prompt-7',
    prompt: 'Note any duplicate charges, services you didn\'t receive, or procedures that were canceled but still appear on your bill.',
    category: 'planning'
  },
  {
    id: 'prompt-8',
    prompt: 'Research medical billing codes (CPT codes) associated with your treatments to understand what you\'re being charged for.',
    category: 'research'
  },
  {
    id: 'prompt-9',
    prompt: 'Reflect on any conversations you had with medical staff about costs, payment plans, or insurance coverage before treatment.',
    category: 'reflection'
  },
  {
    id: 'prompt-10',
    prompt: 'Document any previous billing disputes you\'ve had with this provider and their outcomes for pattern recognition.',
    category: 'planning'
  }
];
