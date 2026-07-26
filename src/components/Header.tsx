"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "Products", href: "#products" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  // Transparent over the dark hero, then a solid bar once scrolled past it.
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Only touch state when crossing the threshold; the updater form lets React
    // bail out of re-renders when the value is unchanged.
    const handleScroll = () => {
      const isScrolled = window.scrollY > 80;
      setScrolled((previous) => (previous === isScrolled ? previous : isScrolled));
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-line bg-bg/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-4 md:px-8">
        <a href="#top" className="flex items-center gap-2">
          <span
            className={`font-[family-name:var(--font-saira)] font-semibold text-lg transition-colors duration-300 ${
              scrolled ? "text-ink" : "text-white"
            }`}
          >
            raihara3
          </span>
          <span className="h-2 w-2 rounded-full bg-orange" />
        </a>

        <nav className="flex items-center gap-5 md:gap-7">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`font-[family-name:var(--font-saira)] text-sm font-medium transition-colors duration-200 hover:text-orange ${
                scrolled ? "text-ink-sub" : "text-white/80"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
