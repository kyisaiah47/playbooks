"use client"

import React from 'react';
import { TemplateImage } from '@/components/ui/template-image';

const testTemplates = [
  'wedding-planning',
  'baby-planning',
  'home-buying',
  'fitness-journey',
  'cooking-mastery',
  'travel-planning',
  'business-launch',
  'garden-planning'
];

export default function TestImagesPage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Template Images Test</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testTemplates.map((template) => (
          <div key={template} className="space-y-2">
            <h3 className="font-semibold text-lg capitalize">
              {template.replace(/-/g, ' ')}
            </h3>
            <TemplateImage
              templateName={template}
              width={400}
              height={300}
              className="w-full"
              showAttribution={true}
            />
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 bg-muted rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Setup Instructions</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li>Go to <a href="https://unsplash.com/developers" target="_blank" className="underline">https://unsplash.com/developers</a></li>
          <li>Create a free account and register a new application</li>
          <li>Copy your Access Key</li>
          <li>Add it to your .env file: <code className="bg-background px-2 py-1 rounded">NEXT_PUBLIC_UNSPLASH_ACCESS_KEY="your_key_here"</code></li>
          <li>Restart your dev server</li>
        </ol>
      </div>
    </div>
  );
}