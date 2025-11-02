import { useState, useEffect } from 'react';
import { UnsplashImage, getCachedImageForGuide, getGuideHeroImage } from '@/lib/cached-images';

export function useGuideImage(guideName: string) {
  const [image, setImage] = useState<UnsplashImage | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    async function fetchImage() {
      try {
        setLoading(true);
        setError(null);

        // First check for cached image in blog post metadata
        const cachedImage = await getCachedImageForGuide(guideName);

        if (cachedImage && mounted) {
          setImage(cachedImage);
          setLoading(false);
          return;
        }

        // Fallback to Unsplash API if no cached image
        const result = await getGuideHeroImage(guideName);

        if (mounted) {
          setImage(result);
        }
      } catch (err) {
        if (mounted) {
          setError(err instanceof Error ? err.message : 'Failed to fetch image');
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    fetchImage();

    return () => {
      mounted = false;
    };
  }, [guideName]);

  return { image, loading, error };
}