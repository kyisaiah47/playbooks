'use client';

import { use, useEffect, useState } from 'react';
import { ReflectionView } from '@/components/template/ReflectionView';
import { GuidanceTemplate } from '@/types/template';
import { getTemplateById } from '@/registry/templates';
import { useRouter } from 'next/navigation';

export default function ReflectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const router = useRouter();
  const { slug } = use(params);
  const [template, setTemplate] = useState<GuidanceTemplate | null>(null);

  useEffect(() => {
    const templateData = getTemplateById(slug);
    if (templateData?.template) {
      setTemplate(templateData.template);
    }
  }, [slug]);

  const handleSwitchMode = (mode: 'template' | 'reflection' | 'master') => {
    if (mode === 'template') {
      router.push(`/${slug}/template`);
    } else if (mode === 'master') {
      // TODO: Navigate to master when available
      console.log('Master workspace coming soon');
    }
    // Stay on reflection if mode === 'reflection'
  };

  if (!template) {
    return <div>Loading...</div>;
  }

  return (
    <ReflectionView
      template={template}
      onSwitchMode={handleSwitchMode}
    />
  );
}