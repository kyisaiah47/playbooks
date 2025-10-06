import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const templateId = searchParams.get('templateId');

    if (!templateId) {
      return NextResponse.json(
        { error: 'Template ID is required' },
        { status: 400 }
      );
    }

    // Load prompts from the 8 category files for this template
    const allPrompts: any[] = [];

    // Use Promise.all to load all 8 files in parallel
    const imports = await Promise.allSettled([
      import(`@/data/prompts/${templateId}-prompts-1`).catch(() => null),
      import(`@/data/prompts/${templateId}-prompts-2`).catch(() => null),
      import(`@/data/prompts/${templateId}-prompts-3`).catch(() => null),
      import(`@/data/prompts/${templateId}-prompts-4`).catch(() => null),
      import(`@/data/prompts/${templateId}-prompts-5`).catch(() => null),
      import(`@/data/prompts/${templateId}-prompts-6`).catch(() => null),
      import(`@/data/prompts/${templateId}-prompts-7`).catch(() => null),
      import(`@/data/prompts/${templateId}-prompts-8`).catch(() => null),
    ]);

    imports.forEach((result, index) => {
      if (result.status === 'fulfilled' && result.value && result.value.prompts) {
        const promptModule = result.value;
        const categoryNumber = index + 1;

        // Use exported categoryName or generate a descriptive one from prompts content
        let categoryName = promptModule.categoryName;
        if (!categoryName && promptModule.prompts && promptModule.prompts.length > 0) {
          // Infer category name from first few prompts
          const samplePrompts = promptModule.prompts.slice(0, 3).map((p: any) => p.prompt).join(' ');

          // Simple keyword matching for common themes
          if (samplePrompts.includes('household') || samplePrompts.includes('chores') || samplePrompts.includes('tasks')) {
            categoryName = 'Household Management';
          } else if (samplePrompts.includes('financial') || samplePrompts.includes('money') || samplePrompts.includes('budget')) {
            categoryName = 'Financial Planning';
          } else if (samplePrompts.includes('health') || samplePrompts.includes('medical') || samplePrompts.includes('doctor')) {
            categoryName = 'Healthcare';
          } else if (samplePrompts.includes('emotional') || samplePrompts.includes('stress') || samplePrompts.includes('feelings')) {
            categoryName = 'Emotional Well-being';
          } else if (samplePrompts.includes('communication') || samplePrompts.includes('conversation') || samplePrompts.includes('relationship')) {
            categoryName = 'Communication';
          } else if (samplePrompts.includes('legal') || samplePrompts.includes('document') || samplePrompts.includes('paperwork')) {
            categoryName = 'Legal & Documentation';
          } else if (samplePrompts.includes('time') || samplePrompts.includes('schedule') || samplePrompts.includes('routine')) {
            categoryName = 'Time Management';
          } else if (samplePrompts.includes('support') || samplePrompts.includes('help') || samplePrompts.includes('resources')) {
            categoryName = 'Support & Resources';
          } else {
            categoryName = `Prompts Group ${categoryNumber}`;
          }
        } else if (!categoryName) {
          categoryName = `Prompts Group ${categoryNumber}`;
        }

        const promptsWithMeta = promptModule.prompts.map((p: any, promptIndex: number) => ({
          ...p,
          id: `${templateId}-cat${categoryNumber}-${promptIndex + 1}`, // Make IDs unique
          templateId,
          categoryNumber,
          categoryName,
        }));
        allPrompts.push(...promptsWithMeta);
      }
    });

    return NextResponse.json({
      prompts: allPrompts,
      total: allPrompts.length
    });
  } catch (error) {
    console.error('[API /prompts] Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch prompts' },
      { status: 500 }
    );
  }
}
