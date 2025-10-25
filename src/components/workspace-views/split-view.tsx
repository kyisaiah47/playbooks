"use client"

import { useState } from "react"
import { IconChevronRight, IconSearch } from "@tabler/icons-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface Question {
  id: string;
  text: string;
  category: string;
}

interface Category {
  name: string;
  questions: Question[];
}

interface SplitViewProps {
  guideId: string | null;
}

export function SplitView({ guideId }: SplitViewProps) {
  const [selectedPrompt, setSelectedPrompt] = useState<Prompt | null>(null);
  const [responses, setResponses] = useState<Record<string, string>>({});
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set(['Getting Started']));

  // Mock data - replace with real questions
  const categories: Category[] = [
    {
      name: 'Getting Started',
      questions: [
        { id: '1', text: 'What are your main goals for the next year?', category: 'Getting Started' },
        { id: '2', text: 'What challenges do you anticipate?', category: 'Getting Started' },
      ]
    },
    {
      name: 'Planning',
      questions: [
        { id: '3', text: 'What steps will you take to achieve your goals?', category: 'Planning' },
        { id: '4', text: 'What resources do you need?', category: 'Planning' },
      ]
    }
  ];

  const toggleCategory = (categoryName: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryName)) {
      newExpanded.delete(categoryName);
    } else {
      newExpanded.add(categoryName);
    }
    setExpandedCategories(newExpanded);
  };

  return (
    <div className="flex h-full">
      {/* Left Panel - Prompts List */}
      <div className="w-[350px] border-r flex flex-col">
        {/* Search */}
        <div className="p-4 border-b">
          <div className="relative">
            <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Categories & Prompts */}
        <div className="flex-1 overflow-y-auto p-2">
          {categories.map((category) => (
            <div key={category.name} className="mb-2">
              <Button
                variant="ghost"
                className="w-full justify-start font-semibold"
                onClick={() => toggleCategory(category.name)}
              >
                <IconChevronRight
                  className={`h-4 w-4 mr-2 transition-transform ${
                    expandedCategories.has(category.name) ? 'rotate-90' : ''
                  }`}
                />
                {category.name}
                <Badge variant="secondary" className="ml-auto">
                  {category.questions.length}
                </Badge>
              </Button>

              {expandedCategories.has(category.name) && (
                <div className="ml-6 space-y-1 mt-1">
                  {category.questions.map((prompt) => (
                    <Button
                      key={prompt.id}
                      variant={selectedPrompt?.id === prompt.id ? "secondary" : "ghost"}
                      className="w-full justify-start text-left h-auto py-2 px-3"
                      onClick={() => setSelectedPrompt(prompt)}
                    >
                      <span className="line-clamp-2 text-sm">{prompt.text}</span>
                    </Button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Right Panel - Response Editor */}
      <div className="flex-1 flex flex-col">
        {selectedPrompt ? (
          <>
            {/* Selected Prompt Header */}
            <div className="p-4 border-b bg-muted/30">
              <Badge variant="outline" className="mb-2">
                {selectedPrompt.category}
              </Badge>
              <h3 className="font-semibold text-lg">{selectedPrompt.text}</h3>
            </div>

            {/* Editor */}
            <div className="flex-1 p-4">
              <Textarea
                value={responses[selectedPrompt.id] || ''}
                onChange={(e) => setResponses({
                  ...responses,
                  [selectedPrompt.id]: e.target.value
                })}
                placeholder="Write your response here..."
                className="w-full h-full resize-none font-sans"
              />
            </div>

            {/* Footer with word count */}
            <div className="p-4 border-t bg-muted/30">
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>
                  {responses[selectedPrompt.id]?.split(/\s+/).filter(Boolean).length || 0} words
                </span>
                <span>Auto-saved</span>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-muted-foreground">
            <div className="text-center">
              <p className="text-lg font-medium mb-2">No question selected</p>
              <p className="text-sm">Select a question from the left to start writing</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
