import * as LucideIcons from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export function getIconComponent(iconName: string | null | undefined): LucideIcon {
  if (!iconName) {
    return LucideIcons.FileText;
  }

  // Get the icon component from lucide-react
  const IconComponent = (LucideIcons as any)[iconName];

  // Return the icon if it exists, otherwise return FileText as fallback
  return IconComponent || LucideIcons.FileText;
}
