'use client';

import React, { useEffect, useState } from 'react';
import { GuidanceTemplate, Resource, ReflectionPrompt } from '@/types/template';
import { templateRegistry, searchTemplates } from '@/registry/templates';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { BookOpen, MessageCircle, Target, Hash, Search, User, Star, Folder, Globe } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useAuth } from '@/contexts/auth-context';

interface CommandPaletteProps {
  template: GuidanceTemplate;
  onSectionChange: (sectionIndex: number) => void;
  onInsertPrompt: (prompt: ReflectionPrompt) => void;
  onOpenResource: (resource: Resource) => void;
}

type SidebarTab = 'my-work' | 'explore' | 'favorites' | 'saved';

export function CommandPalette({
  template,
  onSectionChange,
  onInsertPrompt,
  onOpenResource
}: CommandPaletteProps) {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<SidebarTab>('explore');
  const router = useRouter();
  const { isLoggedIn } = useAuth();


  const recentWork = [
    { id: '1', name: 'Wedding Planning', type: 'Draft', updatedAt: '3 days ago' },
    { id: '2', name: 'Home Buying Guide', type: 'In Progress', updatedAt: '1 week ago' },
  ];
  const favorites = [
    { id: '1', name: 'Business Launch Template' },
    { id: '2', name: 'Moving Checklist' },
  ];

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const handleSectionSelect = (sectionIndex: number) => {
    onSectionChange(sectionIndex);
    setOpen(false);
  };

  const handlePromptSelect = (prompt: ReflectionPrompt) => {
    onInsertPrompt(prompt);
    setOpen(false);
  };

  const handleResourceSelect = (resource: Resource) => {
    onOpenResource(resource);
    setOpen(false);
  };

  const handleTemplateSelect = (templateUrl: string) => {
    router.push(templateUrl);
    setOpen(false);
  };

  const allPrompts = template.sections.flatMap(section =>
    section.reflectionPrompts.map(prompt => ({ ...prompt, sectionTitle: section.title }))
  );

  const allResources = template.resources?.map(resource => ({ ...resource, sectionTitle: 'General' })) || [];

  // Parse prefix commands
  const parseQuery = (query: string) => {
    const prefixMatch = query.match(/^@(template|section|prompt|resource)\s+(.*)$/);
    if (prefixMatch) {
      return {
        prefix: prefixMatch[1],
        search: prefixMatch[2]
      };
    }
    return { prefix: null, search: query };
  };

  const { prefix, search } = parseQuery(searchQuery);

  // Filter based on search query and prefix
  const filteredTemplates = (!prefix || prefix === 'template')
    ? (search ? searchTemplates(search) : templateRegistry.slice(0, 8))
    : [];

  const filteredSections = (!prefix || prefix === 'section')
    ? template.sections.filter(section =>
        section.title.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  const filteredPrompts = (!prefix || prefix === 'prompt')
    ? allPrompts.filter(prompt =>
        prompt.prompt.toLowerCase().includes(search.toLowerCase()) ||
        prompt.category.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  const filteredResources = (!prefix || prefix === 'resource')
    ? allResources.filter(resource =>
        resource.title.toLowerCase().includes(search.toLowerCase()) ||
        resource.type.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  const renderSidebar = () => (
      <div className="w-48 border-r border-border bg-muted/30 flex flex-col">
        {/* Sidebar Header */}
        <div className="p-3 border-b border-border">
          <div className="text-sm font-medium text-foreground">Navigate</div>
        </div>

      {/* Sidebar Items */}
      <div className="flex-1 p-2 space-y-1">
        {isLoggedIn && (
          <button
            onClick={() => setActiveTab('my-work')}
            className={cn(
              "w-full flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-colors text-left",
              activeTab === 'my-work'
                ? "bg-primary text-primary-foreground"
                : "hover:bg-muted text-muted-foreground"
            )}
          >
            <User className="w-4 h-4" />
            My Work
          </button>
        )}

        <button
          onClick={() => setActiveTab('explore')}
          className={cn(
            "w-full flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-colors text-left",
            activeTab === 'explore'
              ? "bg-primary text-primary-foreground"
              : "hover:bg-muted text-muted-foreground"
          )}
        >
          <Globe className="w-4 h-4" />
          Explore
        </button>

        {isLoggedIn && (
          <>
            <button
              onClick={() => setActiveTab('favorites')}
              className={cn(
                "w-full flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-colors text-left",
                activeTab === 'favorites'
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted text-muted-foreground"
              )}
            >
              <Star className="w-4 h-4" />
              Favorites
            </button>

            <button
              onClick={() => setActiveTab('saved')}
              className={cn(
                "w-full flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-colors text-left",
                activeTab === 'saved'
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted text-muted-foreground"
              )}
            >
              <Folder className="w-4 h-4" />
              All Saved
            </button>
          </>
        )}
      </div>
    </div>
  );

  const renderMyWorkContent = () => (
    <>
      <CommandGroup heading="Recent Work">
        {recentWork.map((work) => (
          <CommandItem key={work.id} className="flex items-center gap-2">
            <Target className="w-4 h-4" />
            <div className="flex flex-col flex-1">
              <span>{work.name}</span>
              <span className="text-xs text-muted-foreground">
                {work.type} • {work.updatedAt}
              </span>
            </div>
          </CommandItem>
        ))}
      </CommandGroup>

      <CommandGroup heading="Quick Actions">
        <CommandItem className="flex items-center gap-2">
          <Search className="w-4 h-4" />
          <span>Create new template</span>
        </CommandItem>
      </CommandGroup>
    </>
  );

  const renderFavoritesContent = () => (
    <CommandGroup heading="Your Favorites">
      {favorites.map((fav) => (
        <CommandItem key={fav.id} className="flex items-center gap-2">
          <Star className="w-4 h-4" />
          <span>{fav.name}</span>
        </CommandItem>
      ))}
    </CommandGroup>
  );

  const renderExploreContent = () => (
    <>
      {!searchQuery && (
        <CommandGroup heading="Search Prefixes">
          <div className="px-2 py-2 space-y-2">
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center justify-between p-2 bg-muted/30 rounded text-xs">
                <span>Switch templates</span>
                <code className="bg-background px-1.5 py-0.5 rounded font-mono">@template</code>
              </div>
              <div className="flex items-center justify-between p-2 bg-muted/30 rounded text-xs">
                <span>Jump to sections</span>
                <code className="bg-background px-1.5 py-0.5 rounded font-mono">@section</code>
              </div>
              <div className="flex items-center justify-between p-2 bg-muted/30 rounded text-xs">
                <span>Find prompts</span>
                <code className="bg-background px-1.5 py-0.5 rounded font-mono">@prompt</code>
              </div>
              <div className="flex items-center justify-between p-2 bg-muted/30 rounded text-xs">
                <span>Open resources</span>
                <code className="bg-background px-1.5 py-0.5 rounded font-mono">@resource</code>
              </div>
            </div>
          </div>
        </CommandGroup>
      )}

      {filteredTemplates.length > 0 && (
        <CommandGroup heading="Switch Template">
          {filteredTemplates.map((templateEntry) => (
            <CommandItem
              key={templateEntry.id}
              onSelect={() => handleTemplateSelect(templateEntry.url)}
              className="flex items-center gap-2"
            >
              <span className="text-lg">{templateEntry.icon}</span>
              <div className="flex flex-col flex-1">
                <span>{templateEntry.name}</span>
                <span className="text-xs text-muted-foreground truncate">
                  {templateEntry.description}
                </span>
              </div>
            </CommandItem>
          ))}
        </CommandGroup>
      )}

      {filteredSections.length > 0 && (
        <CommandGroup heading="Sections">
          {filteredSections.map((section, index) => {
            const actualIndex = template.sections.findIndex(s => s.id === section.id);
            return (
              <CommandItem
                key={section.id}
                onSelect={() => handleSectionSelect(actualIndex)}
                className="flex items-center gap-2"
              >
                <Hash className="w-4 h-4" />
                <span>{section.title}</span>
              </CommandItem>
            );
          })}
        </CommandGroup>
      )}

      {filteredPrompts.length > 0 && (
        <CommandGroup heading="Prompts">
          {filteredPrompts.slice(0, 8).map((prompt) => (
            <CommandItem
              key={prompt.id}
              onSelect={() => handlePromptSelect(prompt)}
              className="flex flex-col items-start gap-1"
            >
              <div className="flex items-center gap-2 w-full">
                <MessageCircle className="w-4 h-4 flex-shrink-0" />
                <span className="flex-1 truncate">{prompt.prompt}</span>
              </div>
              <span className="text-xs text-muted-foreground ml-6">
                {prompt.category} • from {prompt.sectionTitle}
              </span>
            </CommandItem>
          ))}
        </CommandGroup>
      )}

      {filteredResources.length > 0 && (
        <CommandGroup heading="Resources">
          {filteredResources.slice(0, 8).map((resource) => (
            <CommandItem
              key={resource.id}
              onSelect={() => handleResourceSelect(resource)}
              className="flex flex-col items-start gap-1"
            >
              <div className="flex items-center gap-2 w-full">
                <BookOpen className="w-4 h-4 flex-shrink-0" />
                <span className="flex-1 truncate">{resource.title}</span>
              </div>
              <span className="text-xs text-muted-foreground ml-6">
                {resource.type} • {resource.readTime} • from {resource.sectionTitle}
              </span>
            </CommandItem>
          ))}
        </CommandGroup>
      )}
    </>
  );

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <div className="flex h-[500px]">
        {/* Sidebar */}
        {renderSidebar()}

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          <CommandInput
            placeholder={
              activeTab === 'my-work'
                ? "Search your work..."
                : activeTab === 'favorites'
                ? "Search favorites..."
                : "Search or use @template, @section, @prompt, @resource..."
            }
            value={searchQuery}
            onValueChange={setSearchQuery}
          />
          <CommandList className="flex-1">
            <CommandEmpty>
              <div className="py-6 text-center">
                <div className="text-sm text-muted-foreground mb-4">No results found</div>
                {activeTab === 'explore' && (
                  <div className="text-xs text-muted-foreground space-y-1">
                    <div>Try: <code className="bg-muted px-1 rounded">@template wedding</code></div>
                    <div>Or: <code className="bg-muted px-1 rounded">@prompt budget</code></div>
                  </div>
                )}
              </div>
            </CommandEmpty>

            {activeTab === 'my-work' && renderMyWorkContent()}
            {activeTab === 'favorites' && renderFavoritesContent()}
            {activeTab === 'saved' && renderMyWorkContent()}
            {activeTab === 'explore' && renderExploreContent()}
          </CommandList>
        </div>
      </div>

      {/* Footer with keyboard shortcuts */}
      <div className="border-t bg-muted/20 p-2">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <code className="bg-background px-1.5 py-0.5 rounded font-mono">↑↓</code>
              <span>Navigate</span>
            </div>
            <div className="flex items-center gap-1">
              <code className="bg-background px-1.5 py-0.5 rounded font-mono">Enter</code>
              <span>Select</span>
            </div>
            <div className="flex items-center gap-1">
              <code className="bg-background px-1.5 py-0.5 rounded font-mono">Esc</code>
              <span>Close</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <span>Open with</span>
            <code className="bg-background px-1.5 py-0.5 rounded font-mono">⌘K</code>
          </div>
        </div>
      </div>
    </CommandDialog>
  );
}