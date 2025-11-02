// Questions registry - fetches from API like guides/readings

// Fetch questions for a specific guide
async function fetchQuestions(guideId: string) {
  try {
    const isServer = typeof window === 'undefined';
    const baseUrl = isServer
      ? (process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000')
      : '';

    const res = await fetch(`${baseUrl}/api/guides/${guideId}/questions`);
    if (!res.ok) return [];

    const data = await res.json();
    return data.questions || [];
  } catch (error) {
    console.error('Error fetching questions:', error);
    return [];
  }
}

// Get questions for a guide (for slash command in editor)
export const getQuestionsByGuide = async (guideId: string) => {
  const questions = await fetchQuestions(guideId);
  return questions.map((q: any) => ({
    id: q.id,
    prompt: q.prompt || q.question,
    category: q.category,
    helpText: q.helpText || '',
  }));
};

// Legacy export for compatibility
export const getPromptsByTemplate = getQuestionsByGuide;
