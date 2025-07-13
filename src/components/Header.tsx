"use client";

import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const yOffset = -80;
      const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      const startPosition = window.pageYOffset;
      const distance = y - startPosition;
      const duration = 500;
      let start: number | null = null;

      const animation = (currentTime: number) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const progress = Math.min(timeElapsed / duration, 1);
        
        const easing = (t: number) => t < 0.5 
          ? 4 * t * t * t 
          : 1 - Math.pow(-2 * t + 2, 3) / 2;
        
        window.scrollTo(0, startPosition + distance * easing(progress));
        
        if (progress < 1) {
          requestAnimationFrame(animation);
        }
      };
      
      requestAnimationFrame(animation);
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-80 backdrop-blur-sm py-4 px-6">
      <nav className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image 
            src="/logo.png" 
            alt="raihara3 logo" 
            width={32} 
            height={32} 
            className="w-8 h-8"
          />
          <h1 className="text-2xl font-bold text-white">raihara3</h1>
        </div>
        
        <button
          className="md:hidden text-white"
          onClick={handleMenuToggle}
          aria-label="Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <ul className={`md:flex md:space-x-8 ${isMenuOpen ? 'block' : 'hidden'} absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 bg-opacity-95 md:bg-transparent p-4 md:p-0`}>
          <li>
            <a
              href="#projects"
              onClick={(e) => handleLinkClick(e, 'projects')}
              className="block py-2 md:py-0 text-gray-300 hover:text-white transition-colors"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={(e) => handleLinkClick(e, 'about')}
              className="block py-2 md:py-0 text-gray-300 hover:text-white transition-colors"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, 'contact')}
              className="block py-2 md:py-0 text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}