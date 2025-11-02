'use client';

import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import * as LucideIcons from 'lucide-react';

interface TimelineBarProps {
  guide: {
    id: string;
    name: string;
    icon: string;
    category: string;
    progress: number;
    startDate: Date;
    estimatedEndDate: Date;
  };
  startOffset: number;
  width: number;
  totalDays: number;
  onGuideClick: (guideId: string) => void;
}

export function TimelineBar({
  guide,
  startOffset,
  width,
  totalDays,
  onGuideClick,
}: TimelineBarProps) {
  const getCategoryColor = (category: string) => {
    const colors: Record<string, { bg: string; border: string; progress: string }> = {
      'Career & Work': { bg: 'bg-purple-500/20', border: 'border-purple-500/40', progress: 'bg-purple-500' },
      'Personal Development': { bg: 'bg-blue-500/20', border: 'border-blue-500/40', progress: 'bg-blue-500' },
      'Relationships': { bg: 'bg-pink-500/20', border: 'border-pink-500/40', progress: 'bg-pink-500' },
      'Health & Wellness': { bg: 'bg-green-500/20', border: 'border-green-500/40', progress: 'bg-green-500' },
      'Life Transitions': { bg: 'bg-amber-500/20', border: 'border-amber-500/40', progress: 'bg-amber-500' },
      'Financial': { bg: 'bg-emerald-500/20', border: 'border-emerald-500/40', progress: 'bg-emerald-500' },
    };
    return colors[category] || { bg: 'bg-primary/20', border: 'border-primary/40', progress: 'bg-primary' };
  };

  const colors = getCategoryColor(guide.category);
  const daysRemaining = Math.ceil(
    (guide.estimatedEndDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
  );

  // Convert kebab-case to PascalCase (e.g., "graduation-cap" -> "GraduationCap")
  const toPascalCase = (str: string) => {
    return str
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('');
  };

  // Get the Lucide icon component
  const iconName = guide.icon ? toPascalCase(guide.icon) : null;
  const IconComponent = iconName && (LucideIcons as any)[iconName];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative h-20 mb-4"
    >
      {/* Guide Label */}
      <div className="absolute left-0 top-0 flex items-center gap-2 w-48 pr-4">
        {IconComponent ? (
          <IconComponent className="w-5 h-5 flex-shrink-0" />
        ) : null}
        <div className="flex-1 min-w-0">
          <div className="text-sm font-medium truncate">{guide.name}</div>
          <div className="text-xs text-muted-foreground truncate">
            {guide.category}
          </div>
        </div>
      </div>

      {/* Timeline Bar Container */}
      <div
        className="absolute left-52 top-0 h-full"
        style={{ width: `calc(100% - 13rem)` }}
      >
        {/* Bar */}
        <motion.button
          onClick={() => onGuideClick(guide.id)}
          className={`
            relative h-12 rounded-lg border-2 overflow-hidden
            ${colors.bg} ${colors.border}
            hover:brightness-110 transition-all cursor-pointer
            focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
          `}
          style={{
            marginLeft: `${startOffset}%`,
            width: `${width}%`,
          }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Progress Fill */}
          <div
            className={`absolute inset-0 ${colors.progress} opacity-30 transition-all duration-500`}
            style={{ width: `${guide.progress}%` }}
          />

          {/* Content */}
          <div className="relative h-full flex items-center justify-between px-3">
            <div className="flex items-center gap-2 min-w-0 flex-1">
              {IconComponent && (
                <IconComponent className="w-4 h-4 flex-shrink-0" />
              )}
              <span className="text-xs font-medium truncate">
                {guide.name}
              </span>
            </div>

            {/* Progress Badge */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold whitespace-nowrap">
                {guide.progress}%
              </span>
              <ChevronRight className="w-3 h-3 opacity-50" />
            </div>
          </div>

          {/* Progress Indicator Line */}
          <div
            className={`absolute bottom-0 left-0 h-1 ${colors.progress} transition-all duration-500`}
            style={{ width: `${guide.progress}%` }}
          />
        </motion.button>

        {/* Days Remaining */}
        <div className="mt-1 text-[10px] text-muted-foreground flex items-center gap-2 px-2">
          {daysRemaining > 0 ? (
            <>
              <span>{daysRemaining} days remaining</span>
              <span className="text-muted-foreground/50">•</span>
              <span>
                {guide.startDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} -{' '}
                {guide.estimatedEndDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
              </span>
            </>
          ) : (
            <span className="text-amber-500">Overdue by {Math.abs(daysRemaining)} days</span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
