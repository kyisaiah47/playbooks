'use client';

import TemplateBrowse from './template-browse';

interface TemplateClientProps {
  params: Promise<{ slug: string }>;
}

export default function TemplateClient({ params }: TemplateClientProps) {
  return <TemplateBrowse params={params} />;
}