'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { useDemo } from '@/contexts/demo-context';
import { DEMO_WORKSPACE_ID } from '@/lib/demo-constants';
import {
  Users,
  TrendingUp,
  Clock,
  User,
  MessageSquare,
  Plus,
  MessageCircle,
  Bug,
  Lightbulb,
} from 'lucide-react';

type TabType = 'discussions' | 'requests' | 'feedback' | 'bugs' | 'features' | 'experts';

export default function CommunityPage() {
  const params = useParams();
  const { demoMode } = useDemo();
  const workspaceId = demoMode ? DEMO_WORKSPACE_ID : (params.workspaceId as string);
  const [activeTab, setActiveTab] = useState<TabType>('discussions');

  // Mock discussions data
  const discussions = [
    {
      id: 1,
      title: "Career Change: Finance → Tech",
      guide: "Career Change Guide",
      author: "Sarah M.",
      comments: 23,
      upvotes: 45,
      lastActivity: "2h ago",
      preview: "Used this guide for my career change last year. The networking section was invaluable, but I'd add more about salary negotiations..."
    },
    {
      id: 2,
      title: "Wedding planning timeline - what I'd change",
      guide: "Wedding Planning",
      author: "Mike K.",
      comments: 18,
      upvotes: 32,
      lastActivity: "5h ago",
      preview: "Just finished planning our wedding. The 12-month timeline is great, but start vendor negotiations even earlier if you're in a major city..."
    },
    {
      id: 3,
      title: "Managing chronic illness with a full-time job",
      guide: "Chronic Illness Management",
      author: "Jamie L.",
      comments: 31,
      upvotes: 67,
      lastActivity: "1d ago",
      preview: "As someone with lupus, the medical decision questions were life-changing. I'd add: track your symptoms in a spreadsheet for doctor visits..."
    },
    {
      id: 4,
      title: "First-time home buying in 2024",
      guide: "Home Buying Guide",
      author: "Alex P.",
      comments: 12,
      upvotes: 28,
      lastActivity: "1d ago",
      preview: "The inspection checklist saved us from a disaster. One thing missing: how to evaluate schools if you don't have kids yet..."
    },
    {
      id: 5,
      title: "Side business while working full-time",
      guide: "Starting a Business",
      author: "Taylor R.",
      comments: 45,
      upvotes: 89,
      lastActivity: "2d ago",
      preview: "Built my consulting practice using this framework. The time management section is gold. Added my own twist: automate everything from day 1..."
    },
  ];

  return (
    <motion.div
      className="h-full w-full flex flex-col overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <motion.div
        className="border-b border-border/40 px-6 py-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <div className="flex items-center gap-3">
          <motion.div
            className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Users className="w-4 h-4 text-primary" />
          </motion.div>
          <div>
            <h1 className="text-xl font-semibold">Community</h1>
            <p className="text-xs text-muted-foreground">Share experiences and help improve guides</p>
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <div className="flex-1 overflow-auto p-6 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="text-center"
        >
          <Users className="w-16 h-16 mx-auto mb-4 text-muted-foreground/20" />
          <h2 className="text-lg font-semibold mb-2">Coming Soon</h2>
          <p className="text-sm text-muted-foreground max-w-md">
            The Community feature is currently under development. Soon you'll be able to share experiences and learn from others.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
