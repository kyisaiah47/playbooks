'use client';

import { useCallback, useMemo } from 'react';
import ReactFlow, {
  Node,
  Edge,
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  MarkerType,
  Panel,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { motion } from 'framer-motion';
import { Network } from 'lucide-react';
import * as LucideIcons from 'lucide-react';

interface UserGuide {
  id: string;
  guides: {
    id: string;
    name: string;
    description: string;
    icon: string;
  };
  progress: number;
  created_at: string;
  archived: boolean;
}

interface GuideGraphProps {
  userGuides: UserGuide[];
  onGuideClick: (guideId: string) => void;
}

// Custom node component
function GuideNode({ data }: { data: any }) {
  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'Career & Work': '#a855f7',
      'Personal Development': '#3b82f6',
      'Relationships': '#ec4899',
      'Health & Wellness': '#22c55e',
      'Life Transitions': '#f59e0b',
      'Financial': '#10b981',
    };
    return colors[category] || '#6366f1';
  };

  const color = getCategoryColor(data.category);
  const progressRing = 2 * Math.PI * 38; // circumference for r=38
  const progressOffset = progressRing - (data.progress / 100) * progressRing;

  // Convert kebab-case to PascalCase for Lucide icons
  const toPascalCase = (str: string) => {
    return str
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('');
  };

  const iconName = data.icon ? toPascalCase(data.icon) : null;
  const IconComponent = iconName && (LucideIcons as any)[iconName];

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      className="relative"
    >
      {/* Progress Ring */}
      <svg className="absolute -top-2 -left-2 w-24 h-24" style={{ transform: 'rotate(-90deg)' }}>
        <circle
          cx="48"
          cy="48"
          r="38"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-border/20"
        />
        <circle
          cx="48"
          cy="48"
          r="38"
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeDasharray={progressRing}
          strokeDashoffset={progressOffset}
          strokeLinecap="round"
          className="transition-all duration-500"
        />
      </svg>

      {/* Node Content */}
      <div
        className="w-20 h-20 rounded-full flex flex-col items-center justify-center bg-background border-2 shadow-lg cursor-pointer relative z-10"
        style={{ borderColor: color }}
      >
        {IconComponent ? (
          <IconComponent className="w-8 h-8 mb-1" style={{ color }} />
        ) : (
          <Network className="w-8 h-8 mb-1" style={{ color }} />
        )}
        <span className="text-[10px] font-semibold" style={{ color }}>
          {data.progress}%
        </span>
      </div>

      {/* Label */}
      <div
        className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-medium text-center whitespace-nowrap px-2 py-1 rounded"
        style={{
          backgroundColor: `${color}20`,
          color: color,
          maxWidth: '120px',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {data.label}
      </div>
    </motion.div>
  );
}

const nodeTypes = {
  guideNode: GuideNode,
};

export function GuideGraph({ userGuides, onGuideClick }: GuideGraphProps) {
  // Calculate nodes and edges
  const { nodes: initialNodes, edges: initialEdges } = useMemo(() => {
    if (!userGuides || userGuides.length === 0) {
      return { nodes: [], edges: [] };
    }

    // Create nodes
    const nodes: Node[] = userGuides.map((ug, index) => {
      const angle = (index * 2 * Math.PI) / userGuides.length;
      const radius = Math.min(300, 150 + userGuides.length * 20);
      const x = 400 + radius * Math.cos(angle);
      const y = 400 + radius * Math.sin(angle);

      const category = determineCategory(ug.guides.name, ug.guides.description);

      return {
        id: ug.id,
        type: 'guideNode',
        position: { x, y },
        data: {
          label: ug.guides.name,
          icon: ug.guides.icon || '📚',
          progress: ug.progress,
          category,
          guideId: ug.guides.id,
        },
      };
    });

    // Calculate edges based on relationships
    const edges: Edge[] = [];

    // Create connections between guides
    for (let i = 0; i < userGuides.length; i++) {
      for (let j = i + 1; j < userGuides.length; j++) {
        const guide1 = userGuides[i];
        const guide2 = userGuides[j];

        const category1 = determineCategory(guide1.guides.name, guide1.guides.description);
        const category2 = determineCategory(guide2.guides.name, guide2.guides.description);

        // Connect guides in the same category
        if (category1 === category2) {
          const color = getCategoryColorForEdge(category1);
          edges.push({
            id: `${guide1.id}-${guide2.id}`,
            source: guide1.id,
            target: guide2.id,
            type: 'smoothstep',
            animated: true,
            style: {
              stroke: color,
              strokeWidth: 2,
              opacity: 0.4,
            },
            markerEnd: {
              type: MarkerType.Arrow,
              color: color,
              width: 20,
              height: 20,
            },
          });
        }

        // Connect guides with similar keywords
        const keywords1 = extractKeywords(guide1.guides.name + ' ' + guide1.guides.description);
        const keywords2 = extractKeywords(guide2.guides.name + ' ' + guide2.guides.description);
        const commonKeywords = keywords1.filter((k) => keywords2.includes(k));

        if (commonKeywords.length > 0) {
          edges.push({
            id: `${guide1.id}-${guide2.id}-keywords`,
            source: guide1.id,
            target: guide2.id,
            type: 'smoothstep',
            animated: false,
            style: {
              stroke: '#6366f1',
              strokeWidth: 1,
              strokeDasharray: '5,5',
              opacity: 0.3,
            },
          });
        }
      }
    }

    return { nodes, edges };
  }, [userGuides]);

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onNodeClick = useCallback(
    (_event: React.MouseEvent, node: Node) => {
      onGuideClick(node.data.guideId);
    },
    [onGuideClick]
  );

  if (!userGuides || userGuides.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-96 text-muted-foreground">
        <Network className="w-16 h-16 mb-4 opacity-20" />
        <p className="text-lg font-medium">No active guides to display</p>
        <p className="text-sm">Start a guide to see it in your knowledge graph</p>
      </div>
    );
  }

  return (
    <div className="w-full h-[500px] rounded-lg border border-border/40 bg-background overflow-hidden">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={onNodeClick}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.2 }}
        minZoom={0.5}
        maxZoom={2}
      >
        <Background color="#6366f1" gap={16} size={1} />
        <Controls
          className="bg-background border border-border/40 rounded-lg"
          showInteractive={false}
        />
        <MiniMap
          className="bg-background border border-border/40 rounded-lg"
          nodeColor={(node) => {
            const color = getCategoryColorForEdge(node.data.category);
            return color;
          }}
          maskColor="rgba(0, 0, 0, 0.1)"
        />

        <Panel position="top-left" className="bg-background/95 backdrop-blur-sm border border-border/40 rounded-lg p-3 m-4">
          <div className="space-y-2">
            <div className="text-sm font-semibold">Knowledge Graph</div>
            <div className="text-xs text-muted-foreground space-y-1">
              <div className="flex items-center gap-2">
                <div className="w-2 h-0.5 bg-[#6366f1]" />
                <span>Solid lines: Same category</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-0.5 border-t border-dashed border-[#6366f1]" />
                <span>Dashed lines: Shared keywords</span>
              </div>
            </div>
          </div>
        </Panel>
      </ReactFlow>
    </div>
  );
}

// Helper functions
function determineCategory(name: string, description: string): string {
  const text = (name + ' ' + description).toLowerCase();

  if (text.includes('career') || text.includes('work') || text.includes('job') || text.includes('interview')) {
    return 'Career & Work';
  }
  if (text.includes('relationship') || text.includes('wedding') || text.includes('marriage') || text.includes('family')) {
    return 'Relationships';
  }
  if (text.includes('health') || text.includes('fitness') || text.includes('wellness') || text.includes('exercise')) {
    return 'Health & Wellness';
  }
  if (text.includes('move') || text.includes('transition') || text.includes('change') || text.includes('home')) {
    return 'Life Transitions';
  }
  if (text.includes('money') || text.includes('financial') || text.includes('budget') || text.includes('invest')) {
    return 'Financial';
  }

  return 'Personal Development';
}

function getCategoryColorForEdge(category: string): string {
  const colors: Record<string, string> = {
    'Career & Work': '#a855f7',
    'Personal Development': '#3b82f6',
    'Relationships': '#ec4899',
    'Health & Wellness': '#22c55e',
    'Life Transitions': '#f59e0b',
    'Financial': '#10b981',
  };
  return colors[category] || '#6366f1';
}

function extractKeywords(text: string): string[] {
  const commonWords = new Set([
    'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for',
    'of', 'with', 'by', 'from', 'up', 'about', 'into', 'through', 'during',
    'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had',
    'do', 'does', 'did', 'will', 'would', 'should', 'could', 'may', 'might',
    'your', 'you', 'my', 'i', 'me', 'we', 'us', 'they', 'them', 'their',
  ]);

  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, '')
    .split(/\s+/)
    .filter((word) => word.length > 3 && !commonWords.has(word))
    .slice(0, 10);
}
