/**
 * Section heading used across Skills / Products / Contact: a large English
 * title, a small Japanese subtitle, and a short orange accent rule. The orange
 * is intentionally limited to the thin rule to keep the accent color scarce.
 */

interface SectionHeaderProps {
  /** English display title, e.g. "PRODUCTS". */
  title: string;
  /** Japanese subtitle, e.g. "作っているもの". */
  subtitle: string;
}

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <h2 className="font-[family-name:var(--font-saira)] font-semibold text-[clamp(40px,5vw,72px)] leading-[0.95] tracking-[-0.02em] text-ink">
        {title}
      </h2>
      <p className="font-[family-name:var(--font-noto)] font-medium text-sm tracking-[0.08em] text-ink-sub">
        {subtitle}
      </p>
      <span className="mt-1 block h-[2px] w-8 bg-orange" />
    </div>
  );
}
