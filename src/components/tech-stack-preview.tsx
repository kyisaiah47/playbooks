import React from "react";

import { LinkPreview } from "@/components/aceternity/link-preview";

const TechStackPreview = () => {
  return (
    <section className="overflow-hidden py-32">
      <div className="container w-full max-w-6xl">
        <h1 className="text-muted-foreground/40 mt-10 text-center text-3xl font-semibold tracking-tight md:text-4xl">
          Comprehensive coverage for life's biggest moments. Whether you're planning a{" "}
          <LinkPreview url="#" className="px-1">
            wedding
          </LinkPreview>
          , buying a{" "}
          <LinkPreview url="#" className="px-1">
            home
          </LinkPreview>
          , or changing{" "}
          <LinkPreview url="#" className="px-1">
            careers
          </LinkPreview>
          <br />
          <br />
          Every guide includes comprehensive{" "}
          <LinkPreview url="#" className="px-1">
            questions
          </LinkPreview>
          , expert{" "}
          <LinkPreview url="#" className="px-1">
            readings
          </LinkPreview>
          , and integrated{" "}
          <LinkPreview url="#" className="px-1">
            planning
          </LinkPreview>
          {" "}— giving you 90%+ coverage from day one.
        </h1>
      </div>
    </section>
  );
};

export { TechStackPreview };
