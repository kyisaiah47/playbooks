import Image from 'next/image';
import { cn } from '@/lib/utils';

export function TemplataIcon({ className, size = 14 }: { className?: string; size?: number }) {
  return (
    <Image
      src="/logo.png"
      alt=""
      width={size}
      height={size}
      className={cn(className)}
    />
  );
}
