'use client';

import { useState } from 'react';
import { MessageSquare, Plus, MessageCircle, Bug, Lightbulb, Users } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

type CommunityTab = 'discussions' | 'requests' | 'feedback' | 'bugs' | 'features' | 'experts';

interface CommunitySidebarContentProps {
  selectedTab: CommunityTab;
  onTabClick: (tab: CommunityTab) => void;
}

const COMMUNITY_TABS: { type: CommunityTab; icon: any; label: string; description: string }[] = [
  { type: 'discussions', icon: MessageSquare, label: 'Discussions', description: 'Share experiences' },
  { type: 'requests', icon: Plus, label: 'Guide Requests', description: 'New guide ideas' },
  { type: 'feedback', icon: MessageCircle, label: 'Feedback', description: 'Improve guides' },
  { type: 'bugs', icon: Bug, label: 'Bug Reports', description: 'Technical issues' },
  { type: 'features', icon: Lightbulb, label: 'Features', description: 'Product ideas' },
  { type: 'experts', icon: Users, label: 'Contributors', description: 'Expert contributors' },
];

export function CommunitySidebarContent({ selectedTab, onTabClick }: CommunitySidebarContentProps) {
  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="px-3 py-2 border-b border-border/40">
        <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
          Community
        </h3>
      </div>

      {/* Tabs List */}
      <div className="flex-1 overflow-y-auto px-2 py-2">
        <motion.div
          className="space-y-0.5"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.05 }
            }
          }}
          initial="hidden"
          animate="show"
        >
          {COMMUNITY_TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = selectedTab === tab.type;

            return (
              <motion.button
                key={tab.type}
                onClick={() => onTabClick(tab.type)}
                className={cn(
                  "w-full text-left px-2 py-2 rounded transition-colors flex items-start gap-2",
                  isActive
                    ? 'bg-primary/10 text-primary'
                    : 'hover:bg-muted/50 text-foreground'
                )}
                variants={{
                  hidden: { opacity: 0, x: -10 },
                  show: { opacity: 1, x: 0 }
                }}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                <Icon className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium truncate">{tab.label}</div>
                  <div className="text-xs text-muted-foreground truncate">{tab.description}</div>
                </div>
              </motion.button>
            );
          })}
        </motion.div>
      </div>

      {/* Footer Info */}
      <div className="px-3 py-2 border-t border-border/40">
        <div className="text-xs text-muted-foreground">
          <p className="mb-1 font-medium">Guidelines</p>
          <ul className="space-y-0.5 text-[10px]">
            <li>• Be kind and constructive</li>
            <li>• Share specific experiences</li>
            <li>• No medical/legal advice</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
