"use client";

import { useState } from "react";

interface ProfileBioProps {
  text: string;
}

/**
 * Profile bio that shows everything up to the first blank line by default, and
 * reveals the rest behind a "More" toggle. Splitting on the blank line lets the
 * author control exactly how much shows before expanding.
 */
export default function ProfileBio({ text }: ProfileBioProps) {
  const [expanded, setExpanded] = useState(false);

  const separatorIndex = text.indexOf("\n\n");
  const hasMore = separatorIndex !== -1;
  const head = hasMore ? text.slice(0, separatorIndex) : text;

  return (
    <div className="mx-auto mt-8 max-w-[750px]">
      <p className="whitespace-pre-line font-[family-name:var(--font-noto)] text-[15px] leading-[1.9] text-ink-sub">
        {expanded ? text : head}
      </p>

      {hasMore && (
        <div className="mt-3 text-center">
          <button
            onClick={() => setExpanded((previous) => !previous)}
            aria-expanded={expanded}
            className="inline-flex items-center gap-1.5 border-b border-ink/30 pb-0.5 font-[family-name:var(--font-saira)] text-sm text-ink transition-colors duration-200 hover:border-orange hover:text-orange"
          >
            {expanded ? "Close" : "More"}
            <span aria-hidden="true">{expanded ? "−" : "+"}</span>
          </button>
        </div>
      )}
    </div>
  );
}
