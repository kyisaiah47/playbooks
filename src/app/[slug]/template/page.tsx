'use client';

import { use } from 'react';
import { TemplateView } from '@/components/template/TemplateView';
import { getTemplateById } from '@/registry/templates';
import { useRouter } from 'next/navigation';

export default function TemplatePage({ params }: { params: Promise<{ slug: string }> }) {
  const router = useRouter();
  const { slug } = use(params);
  const template = getTemplateById(slug);

  if (!template?.template) {
    return <div>Template not found</div>;
  }

  const handleSwitchMode = (mode: 'template' | 'reflection' | 'master') => {
    if (mode === 'reflection') {
      router.push(`/${slug}/reflection`);
    } else if (mode === 'master') {
      router.push('/life-os');
    }
    // Stay on template if mode === 'template'
  };

  return <TemplateView template={template.template} onSwitchMode={handleSwitchMode} />;
}