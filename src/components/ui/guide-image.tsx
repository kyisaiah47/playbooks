"use client"

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useTemplateImage } from '@/hooks/use-guide-image';
import { formatImageUrl, getImageAttribution, getImageAttributionUrl } from '@/lib/unsplash';

interface GuideImageProps {
  guideName: string;
  width?: number;
  height?: number;
  className?: string;
  alt?: string;
  showAttribution?: boolean;
  quality?: number;
  fallbackSrc?: string;
}

export function GuideImage({
  guideName,
  width = 800,
  height = 600,
  className,
  alt,
  showAttribution = false,
  quality = 95,
  fallbackSrc
}: GuideImageProps) {
  const { image, loading, error } = useTemplateImage(guideName);

  // Show loading state
  if (loading) {
    return (
      <div
        className={cn(
          "bg-muted animate-pulse rounded-lg flex items-center justify-center",
          className
        )}
        style={{ width, height }}
      >
        <div className="text-muted-foreground text-sm">Loading image...</div>
      </div>
    );
  }

  // Show error state or fallback
  if (error || !image) {
    return fallbackSrc ? (
      <Image
        src={fallbackSrc}
        alt={alt || `${guideName.replace(/-/g, ' ')} guide`}
        width={width}
        height={height}
        className={cn("rounded-lg object-cover", className)}
      />
    ) : (
      <div
        className={cn(
          "bg-muted rounded-lg flex items-center justify-center border-2 border-dashed border-muted-foreground/20",
          className
        )}
        style={{ width, height }}
      >
        <div className="text-muted-foreground text-sm text-center px-4">
          {error || 'No image available'}
        </div>
      </div>
    );
  }

  const imageUrl = formatImageUrl(image, width, height, quality);
  const imageAlt = alt || image.alt_description || `${guideName.replace(/-/g, ' ')} guide`;

  return (
    <div className={cn("relative", className)}>
      <Image
        src={imageUrl}
        alt={imageAlt}
        fill
        className="object-cover"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
      />

      {showAttribution && (
        <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
          <a
            href={getImageAttributionUrl(image)}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {getImageAttribution(image)}
          </a>
        </div>
      )}
    </div>
  );
}