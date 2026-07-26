"use client";

import { useEffect, useRef, useState } from "react";

interface ProfileBioProps {
  text: string;
}

/**
 * Profile bio that collapses to two lines and reveals the rest behind a "More"
 * toggle. The toggle only appears when the text actually overflows, so a short
 * bio stays clean while a longer one can be expanded.
 */
export default function ProfileBio({ text }: ProfileBioProps) {
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const [expanded, setExpanded] = useState(false);
  const [canExpand, setCanExpand] = useState(false);

  useEffect(() => {
    const measure = () => {
      const element = paragraphRef.current;
      if (!element || expanded) return;
      setCanExpand(element.scrollHeight > element.clientHeight + 1);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [expanded, text]);

  return (
    <div className="mx-auto mt-8 max-w-[520px]">
      <p
        ref={paragraphRef}
        className={`whitespace-pre-line font-[family-name:var(--font-noto)] text-[15px] leading-[1.9] text-ink-sub ${
          expanded ? "" : "line-clamp-2"
        }`}
      >
        {text}
      </p>

      {(canExpand || expanded) && (
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
