"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import * as LucideIcons from "lucide-react";

interface Guide {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: string;
  tags: string[];
  hasContent?: boolean;
  readingsCount?: number;
  questionsCount?: number;
}

interface Category {
  id: string;
  name: string;
  description: string;
  display_order: number;
  count: number;
}

const List3 = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [guidesByCategory, setGuidesByCategory] = useState<Record<string, Guide[]>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch categories
        const categoriesRes = await fetch('/api/guides');
        const categoriesData = await categoriesRes.json();
        const cats = categoriesData.categories || [];
        setCategories(cats);

        // Fetch guides for each category
        const guidesData: Record<string, Guide[]> = {};
        await Promise.all(
          cats.map(async (cat: Category) => {
            const guidesRes = await fetch(`/api/guides?category=${cat.id}`);
            const data = await guidesRes.json();
            guidesData[cat.id] = data.guides || [];
          })
        );
        setGuidesByCategory(guidesData);
      } catch (error) {
        console.error('Error fetching guides:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <section className="py-32">
        <div className="container">
          <div className="text-center">Loading...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-col gap-12">
          {categories.map((category) => {
            const guides = guidesByCategory[category.id] || [];
            if (guides.length === 0) return null;

            return (
              <div key={category.id} className="flex flex-col gap-7">
                <h2 className="text-xl">/ {category.name.toUpperCase()}</h2>
                <div>
                  {guides.map((guide, idx) => {
                    // Get the icon component dynamically
                    const IconComponent = guide.icon && (LucideIcons as any)[guide.icon];
                    const hasContent = guide.hasContent !== false;

                    const guideContent = (
                      <div className={`my-2.5 grid gap-2.5 text-sm sm:grid-cols-3 transition-colors ${
                        hasContent
                          ? 'hover:text-primary cursor-pointer'
                          : 'opacity-40 cursor-not-allowed'
                      }`}>
                        <div className="text-muted-foreground flex items-center gap-2">
                          {IconComponent && <IconComponent className="w-4 h-4" />}
                        </div>
                        <p className="font-medium">{guide.name}</p>
                        <p className="text-muted-foreground">
                          {guide.description}
                        </p>
                      </div>
                    );

                    return (
                      <React.Fragment key={guide.id}>
                        <Separator />
                        {hasContent ? (
                          <Link href={`/guides/${guide.id}`}>
                            {guideContent}
                          </Link>
                        ) : (
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <div>
                                {guideContent}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Coming soon - In the works</p>
                            </TooltipContent>
                          </Tooltip>
                        )}
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { List3 };
