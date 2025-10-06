export const categoryName = "Defect Analysis & Root Cause Investigation";

export const prompts = [
  {
    id: 'prompt-1',
    prompt: 'Document the specific steps that led to discovering each defect, including the testing conditions and environment details.',
    category: 'planning'
  },
  {
    id: 'prompt-2',
    prompt: 'Research common root causes for similar defects in your application domain or technology stack.',
    category: 'research'
  },
  {
    id: 'prompt-3',
    prompt: 'Reflect on which testing techniques were most effective at uncovering critical defects in recent releases.',
    category: 'reflection'
  },
  {
    id: 'prompt-4',
    prompt: 'Note patterns in defect occurrence across different modules, features, or development teams.',
    category: 'action'
  },
  {
    id: 'prompt-5',
    prompt: 'Research industry best practices for defect classification and severity assessment frameworks.',
    category: 'research'
  },
  {
    id: 'prompt-6',
    prompt: 'Reflect on how communication gaps between teams may have contributed to defects reaching production.',
    category: 'reflection'
  },
  {
    id: 'prompt-7',
    prompt: 'Document the business impact and user experience implications of each major defect discovered.',
    category: 'planning'
  },
  {
    id: 'prompt-8',
    prompt: 'Research automated tools and techniques that could help prevent similar defects in future development cycles.',
    category: 'research'
  },
  {
    id: 'prompt-9',
    prompt: 'Reflect on your own testing approach and identify areas where deeper investigation might have caught issues earlier.',
    category: 'reflection'
  },
  {
    id: 'prompt-10',
    prompt: 'Note correlations between code complexity metrics, development timeline pressures, and defect density in different project areas.',
    category: 'action'
  }
];
