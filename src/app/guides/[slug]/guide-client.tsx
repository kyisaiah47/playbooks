'use client';

import GuideBrowse from './guide-browse';

interface GuideClientProps {
  params: Promise<{ slug: string }>;
}

export default function GuideClient({ params }: GuideClientProps) {
  return <GuideBrowse params={params} />;
}