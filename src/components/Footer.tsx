export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-8 md:px-8">
        <span className="font-[family-name:var(--font-saira)] text-sm font-medium text-ink">
          raihara3
        </span>
        <span className="font-[family-name:var(--font-saira)] text-xs text-ink-sub">
          &copy; {new Date().getFullYear()} raihara3. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
