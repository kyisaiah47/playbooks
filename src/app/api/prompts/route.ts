import { NextResponse } from 'next/server';
import { promptLoaders } from '@/data/prompts';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const templateId = searchParams.get('templateId');

    if (!templateId) {
      return NextResponse.json(
        { error: 'templateId is required' },
        { status: 400 }
      );
    }

    // Get all prompt modules that match this template
    const promptsForTemplate: Array<{
      id: string;
      prompt: string;
      categoryName: string;
      category?: string;
    }> = [];

    // Try to load prompt files (templates can have 1-8 prompt files)
    for (let i = 1; i <= 8; i++) {
      const loaderKey = `${templateId}-prompts-${i}`;
      const loader = promptLoaders[loaderKey];

      if (loader) {
        try {
          const promptModule = await loader();

          if (promptModule?.prompts && promptModule?.categoryName) {
            promptModule.prompts.forEach((p: any) => {
              promptsForTemplate.push({
                id: p.id,
                prompt: p.prompt,
                categoryName: promptModule.categoryName,
                category: p.category
              });
            });
          }
        } catch (err) {
          console.error(`Error loading ${loaderKey}:`, err);
        }
      }
    }

    return NextResponse.json({
      prompts: promptsForTemplate,
      count: promptsForTemplate.length
    });
  } catch (error) {
    console.error('Error fetching prompts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch prompts', prompts: [] },
      { status: 500 }
    );
  }
}
