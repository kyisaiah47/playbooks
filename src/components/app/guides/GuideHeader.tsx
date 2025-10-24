'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import {
  Smile,
  Image as ImageIcon,
  BookOpen,
  Heart,
  Star,
  Coffee,
  Home,
  User,
  Calendar,
  Clock,
  Mail,
  Phone,
  MapPin,
  Camera,
  Music,
  Video,
  Gift,
  Bell,
  Bookmark,
  Flag,
  Target,
  Zap,
  Award,
  TrendingUp,
  Activity,
  Briefcase,
  ShoppingCart,
  CreditCard,
  DollarSign,
  Database,
  Settings,
  Wrench,
  Code,
  Terminal,
  FileText,
  File,
  Folder,
  Check,
  X,
  Plus,
  Minus,
  Edit,
  Trash2,
  Search,
  Filter,
  Download,
  Upload,
  Share2,
  Link,
  Lock,
  Unlock,
  Eye,
  EyeOff,
  Sun,
  Moon,
  Cloud,
  Umbrella,
  Wind,
  Droplet,
  Flame,
  Sparkles,
  MessageCircle,
  Send,
  Inbox,
  Archive,
  Tag,
  Layers,
  Layout,
  Grid,
  List,
  AlignLeft,
  Type,
  Bold,
  Italic,
  Underline,
  Palette,
  Image,
  Film,
  Headphones,
  Mic,
  Volume2,
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Repeat,
  Shuffle,
  Maximize,
  Minimize,
  RefreshCw,
  RotateCw,
  Move,
  Copy,
  Clipboard,
  Save,
  Printer,
  ExternalLink,
  Navigation,
  Compass,
  Map as MapIcon,
  Plane,
  Car,
  Bike,
  Bus,
  Train,
  Rocket,
  Ship,
  Truck,
  Package,
  ShoppingBag,
  Store,
  Building,
  Factory,
  Users,
  UserPlus,
  UserMinus,
  UserCheck,
  UserX,
  Shield,
  ShieldCheck,
  Key,
  Wifi,
  WifiOff,
  Battery,
  BatteryCharging,
  Power,
  Bluetooth,
  Radio,
  Tv,
  Monitor,
  Tablet,
  Smartphone,
  Watch,
  Laptop,
  HardDrive,
  Server,
  Cpu,
  Globe,
  Anchor,
  Feather,
  PenTool,
  Scissors,
  Paperclip,
  AtSign,
  Hash,
  Percent,
  BarChart,
  PieChart,
  TrendingDown,
  LineChart,
  Smile as SmileIcon,
  Frown,
  Meh,
  ThumbsUp,
  ThumbsDown,
  MessageSquare,
  HelpCircle,
  Info,
  AlertCircle,
  AlertTriangle,
  XCircle,
  CheckCircle,
  Lightbulb,
  Construction,
  Hammer,
  Ruler,
  Scissors as ScissorsIcon,
  Book,
  GraduationCap,
  School,
  Medal,
  Trophy,
  Crown,
  Diamond,
  Gem,
  Pizza,
  UtensilsCrossed,
  Apple,
  ChefHat,
  Soup,
  IceCream,
  Cake,
  Cookie,
  Beer,
  Wine,
  Milk,
  TreePine,
  Leaf,
  Flower2,
  Sprout,
  Bug,
  Bird,
  Cat,
  Dog,
  Fish,
  Rabbit,
  Squirrel,
  Footprints,
  Gamepad2,
  Dices,
  Puzzle,
  Theater,
  Ticket,
  PartyPopper,
  Laugh,
  Heart as HeartIcon,
  Handshake,
  Glasses,
  Shirt,
  ShirtIcon,
  BadgeIcon,
  BadgeCheck,
  Palmtree,
  Mountain,
  Waves,
  Snowflake,
  Sunrise,
  Sunset,
  CloudRain,
  CloudSnow,
  CloudLightning,
  Tornado,
  Rainbow,
} from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import * as LucideIcons from 'lucide-react';

interface GuideHeaderProps {
  guideName: string;
  guideIcon?: string | null;
  coverImage?: string | null;
  progress?: number;
  templateName?: string | null; // The template this is based on
  onNameChange?: (name: string) => void;
  onIconChange?: (icon: string) => void;
  onCoverChange?: (coverUrl: string) => void;
}

// Curated list of popular Lucide icons
const ICON_OPTIONS = [
  { name: 'BookOpen', component: BookOpen },
  { name: 'Heart', component: Heart },
  { name: 'Star', component: Star },
  { name: 'Coffee', component: Coffee },
  { name: 'Home', component: Home },
  { name: 'User', component: User },
  { name: 'Calendar', component: Calendar },
  { name: 'Clock', component: Clock },
  { name: 'Mail', component: Mail },
  { name: 'Phone', component: Phone },
  { name: 'MapPin', component: MapPin },
  { name: 'Camera', component: Camera },
  { name: 'Music', component: Music },
  { name: 'Video', component: Video },
  { name: 'Gift', component: Gift },
  { name: 'Bell', component: Bell },
  { name: 'Bookmark', component: Bookmark },
  { name: 'Flag', component: Flag },
  { name: 'Target', component: Target },
  { name: 'Zap', component: Zap },
  { name: 'Award', component: Award },
  { name: 'TrendingUp', component: TrendingUp },
  { name: 'Activity', component: Activity },
  { name: 'Briefcase', component: Briefcase },
  { name: 'ShoppingCart', component: ShoppingCart },
  { name: 'CreditCard', component: CreditCard },
  { name: 'DollarSign', component: DollarSign },
  { name: 'Database', component: Database },
  { name: 'Settings', component: Settings },
  { name: 'Wrench', component: Wrench },
  { name: 'Code', component: Code },
  { name: 'Terminal', component: Terminal },
  { name: 'FileText', component: FileText },
  { name: 'File', component: File },
  { name: 'Folder', component: Folder },
  { name: 'Sparkles', component: Sparkles },
  { name: 'MessageCircle', component: MessageCircle },
  { name: 'Send', component: Send },
  { name: 'Lightbulb', component: Lightbulb },
  { name: 'Rocket', component: Rocket },
  { name: 'Globe', component: Globe },
  { name: 'Compass', component: Compass },
  { name: 'Mountain', component: Mountain },
  { name: 'Waves', component: Waves },
  { name: 'Sun', component: Sun },
  { name: 'Moon', component: Moon },
  { name: 'Cloud', component: Cloud },
  { name: 'Umbrella', component: Umbrella },
  { name: 'Book', component: Book },
  { name: 'GraduationCap', component: GraduationCap },
  { name: 'Trophy', component: Trophy },
  { name: 'Crown', component: Crown },
  { name: 'Diamond', component: Diamond },
  { name: 'Gem', component: Gem },
  { name: 'Pizza', component: Pizza },
  { name: 'Apple', component: Apple },
  { name: 'Leaf', component: Leaf },
  { name: 'TreePine', component: TreePine },
  { name: 'Flower2', component: Flower2 },
  { name: 'Palmtree', component: Palmtree },
  { name: 'Gamepad2', component: Gamepad2 },
  { name: 'PartyPopper', component: PartyPopper },
  { name: 'Plane', component: Plane },
  { name: 'Car', component: Car },
  { name: 'Bike', component: Bike },
  { name: 'Ship', component: Ship },
];

export function GuideHeader({
  guideName,
  guideIcon,
  coverImage,
  progress = 0,
  templateName,
  onNameChange,
  onIconChange,
  onCoverChange,
}: GuideHeaderProps) {
  const [iconPickerOpen, setIconPickerOpen] = useState(false);
  const [isEditingName, setIsEditingName] = useState(false);
  const [editedName, setEditedName] = useState(guideName);
  const inputRef = useRef<HTMLInputElement>(null);
  const [iconSearch, setIconSearch] = useState('');

  useEffect(() => {
    if (isEditingName && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditingName]);

  const handleNameSave = () => {
    if (editedName.trim() && onNameChange) {
      onNameChange(editedName.trim());
    } else {
      setEditedName(guideName);
    }
    setIsEditingName(false);
  };

  const handleNameKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleNameSave();
    } else if (e.key === 'Escape') {
      setEditedName(guideName);
      setIsEditingName(false);
    }
  };

  // Get the icon component if it's a Lucide icon name
  const IconComponent = guideIcon && ICON_OPTIONS.find(i => i.name === guideIcon)?.component;

  // Filter icons based on search
  const filteredIcons = iconSearch.trim()
    ? ICON_OPTIONS.filter(icon =>
        icon.name.toLowerCase().includes(iconSearch.toLowerCase())
      )
    : ICON_OPTIONS;

  return (
    <div className="bg-background border-b">
      {/* Cover Image - Smaller */}
      <div className="h-20 bg-gradient-to-r from-blue-500/10 to-purple-500/10 relative">
        {coverImage && (
          <img
            src={coverImage}
            alt="Guide cover"
            className="w-full h-full object-cover"
          />
        )}
        {onCoverChange && (
          <Button
            variant="secondary"
            size="sm"
            className="absolute bottom-2 right-2 text-xs h-6 px-2"
          >
            <ImageIcon className="h-3 w-3 mr-1" />
            Change Cover
          </Button>
        )}
      </div>

      {/* Content area with icon and title */}
      <div className="max-w-4xl mx-auto px-8 py-3">
        <div className="flex items-start gap-3">
          {/* Icon - smaller */}
          <div className="-mt-6">
            <Popover open={iconPickerOpen} onOpenChange={setIconPickerOpen}>
              <PopoverTrigger asChild>
                <button
                  className={`bg-background border-2 border-border rounded-lg p-2 hover:bg-muted/50 transition-colors ${
                    onIconChange ? 'cursor-pointer' : 'cursor-default'
                  }`}
                  disabled={!onIconChange}
                >
                  {IconComponent ? (
                    <IconComponent className="h-6 w-6 text-foreground" />
                  ) : (
                    <span className="text-2xl">{guideIcon || '📚'}</span>
                  )}
                </button>
              </PopoverTrigger>
              {onIconChange && (
                <PopoverContent className="w-80">
                  <div className="space-y-3">
                    <Input
                      type="text"
                      placeholder="Search icons..."
                      value={iconSearch}
                      onChange={(e) => setIconSearch(e.target.value)}
                      className="h-8 text-sm"
                    />
                    <div className="grid grid-cols-8 gap-2 max-h-64 overflow-y-auto">
                      {filteredIcons.map((icon) => {
                        const Icon = icon.component;
                        return (
                          <button
                            key={icon.name}
                            onClick={() => {
                              onIconChange(icon.name);
                              setIconPickerOpen(false);
                              setIconSearch('');
                            }}
                            className="flex items-center justify-center hover:bg-muted rounded p-2 transition-colors"
                            title={icon.name}
                          >
                            <Icon className="h-5 w-5" />
                          </button>
                        );
                      })}
                    </div>
                    {filteredIcons.length === 0 && (
                      <p className="text-xs text-muted-foreground text-center py-4">
                        No icons found
                      </p>
                    )}
                  </div>
                </PopoverContent>
              )}
            </Popover>
          </div>

          {/* Title and subtitle */}
          <div className="flex-1 min-w-0 pt-0.5">
            {isEditingName ? (
              <Input
                ref={inputRef}
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
                onBlur={handleNameSave}
                onKeyDown={handleNameKeyDown}
                className="text-lg font-medium h-auto py-1 mb-1"
              />
            ) : (
              <h1
                className={`text-lg font-medium text-foreground leading-tight mb-1 ${
                  onNameChange ? 'cursor-text hover:bg-muted/30 px-1 -mx-1 rounded transition-colors' : ''
                }`}
                onClick={() => onNameChange && setIsEditingName(true)}
                title={onNameChange ? 'Click to edit title' : undefined}
              >
                {guideName}
              </h1>
            )}

            {templateName && (
              <p className="text-xs text-muted-foreground">
                Based on {templateName}
              </p>
            )}

            {/* Progress Bar - subtle and clean */}
            {progress > 0 && (
              <div className="flex items-center gap-2 mt-2">
                <Progress value={progress} className="flex-1 max-w-xs h-1" />
                <span className="text-xs text-muted-foreground whitespace-nowrap">
                  {progress}%
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
