'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
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
  const workspaceId = params.workspaceId as string;
  const [activeTab, setActiveTab] = useState<TabType>('discussions');

  // Mock discussions data
  const discussions = [
    {
      id: 1,
      title: "Career Transition: Finance → Tech",
      guide: "Career Change Guide",
      author: "Sarah M.",
      comments: 23,
      upvotes: 45,
      lastActivity: "2h ago",
      preview: "Used this guide for my transition last year. The networking section was invaluable, but I'd add more about salary negotiations..."
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
      preview: "As someone with lupus, the medical decision prompts were life-changing. I'd add: track your symptoms in a spreadsheet for doctor visits..."
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
      <div className="flex-1 overflow-auto p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          {/* Tab Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
            <button
              onClick={() => setActiveTab('discussions')}
              className={`text-left border rounded-lg p-3 transition-colors ${
                activeTab === 'discussions'
                  ? 'border-primary bg-primary/5'
                  : 'border-border hover:border-primary/50'
              }`}
            >
              <MessageSquare className={`h-4 w-4 mb-1 ${
                activeTab === 'discussions' ? 'text-primary' : 'text-muted-foreground'
              }`} />
              <div className="text-sm font-medium">Discussions</div>
              <div className="text-xs text-muted-foreground">Share experiences</div>
            </button>

            <button
              onClick={() => setActiveTab('requests')}
              className={`text-left border rounded-lg p-3 transition-colors ${
                activeTab === 'requests'
                  ? 'border-primary bg-primary/5'
                  : 'border-border hover:border-primary/50'
              }`}
            >
              <Plus className={`h-4 w-4 mb-1 ${
                activeTab === 'requests' ? 'text-primary' : 'text-muted-foreground'
              }`} />
              <div className="text-sm font-medium">Request Guide</div>
              <div className="text-xs text-muted-foreground">New guide ideas</div>
            </button>

            <button
              onClick={() => setActiveTab('feedback')}
              className={`text-left border rounded-lg p-3 transition-colors ${
                activeTab === 'feedback'
                  ? 'border-primary bg-primary/5'
                  : 'border-border hover:border-primary/50'
              }`}
            >
              <MessageCircle className={`h-4 w-4 mb-1 ${
                activeTab === 'feedback' ? 'text-primary' : 'text-muted-foreground'
              }`} />
              <div className="text-sm font-medium">Feedback</div>
              <div className="text-xs text-muted-foreground">Improve guides</div>
            </button>

            <button
              onClick={() => setActiveTab('bugs')}
              className={`text-left border rounded-lg p-3 transition-colors ${
                activeTab === 'bugs'
                  ? 'border-primary bg-primary/5'
                  : 'border-border hover:border-primary/50'
              }`}
            >
              <Bug className={`h-4 w-4 mb-1 ${
                activeTab === 'bugs' ? 'text-primary' : 'text-muted-foreground'
              }`} />
              <div className="text-sm font-medium">Report Bug</div>
              <div className="text-xs text-muted-foreground">Technical issues</div>
            </button>

            <button
              onClick={() => setActiveTab('features')}
              className={`text-left border rounded-lg p-3 transition-colors ${
                activeTab === 'features'
                  ? 'border-primary bg-primary/5'
                  : 'border-border hover:border-primary/50'
              }`}
            >
              <Lightbulb className={`h-4 w-4 mb-1 ${
                activeTab === 'features' ? 'text-primary' : 'text-muted-foreground'
              }`} />
              <div className="text-sm font-medium">Features</div>
              <div className="text-xs text-muted-foreground">Product ideas</div>
            </button>

            <button
              onClick={() => setActiveTab('experts')}
              className={`text-left border rounded-lg p-3 transition-colors ${
                activeTab === 'experts'
                  ? 'border-primary bg-primary/5'
                  : 'border-border hover:border-primary/50'
              }`}
            >
              <Users className={`h-4 w-4 mb-1 ${
                activeTab === 'experts' ? 'text-primary' : 'text-muted-foreground'
              }`} />
              <div className="text-sm font-medium">Experts</div>
              <div className="text-xs text-muted-foreground">Contributors</div>
            </button>
          </div>

          {/* Content based on active tab */}
          {activeTab === 'discussions' && (
            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Recent Discussions</h2>
              <div className="space-y-2">
                {discussions.map((discussion) => (
                  <div
                    key={discussion.id}
                    className="border-b border-border py-3 hover:bg-muted/30 -mx-4 px-4 transition-colors cursor-pointer"
                  >
                    <div className="flex items-start gap-3">
                      {/* Upvote column */}
                      <div className="flex flex-col items-center gap-0.5 min-w-[40px] pt-1">
                        <button className="p-0.5 hover:bg-muted rounded">
                          <TrendingUp className="h-4 w-4 text-muted-foreground" />
                        </button>
                        <span className="text-xs font-medium text-muted-foreground">{discussion.upvotes}</span>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-semibold mb-1 hover:text-primary transition-colors">
                          {discussion.title}
                        </h3>
                        <p className="text-xs text-muted-foreground mb-2 line-clamp-1">
                          {discussion.preview}
                        </p>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <User className="h-3 w-3" />
                            {discussion.author}
                          </span>
                          <span className="flex items-center gap-1">
                            <MessageSquare className="h-3 w-3" />
                            {discussion.comments}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {discussion.lastActivity}
                          </span>
                          <span className="text-primary font-medium">
                            {discussion.guide}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab !== 'discussions' && (
            <div className="border border-border rounded-lg p-8 text-center">
              <div className="text-muted-foreground">
                <p className="text-sm mb-2">Coming soon</p>
                <p className="text-xs">This feature is currently under development</p>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}
