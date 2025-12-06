"use client";

import { motion } from "motion/react";
import { Sparkles, Rocket } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative py-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/50 to-transparent" />
      <div className="relative z-10 container mx-auto px-6">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 text-slate-400">
            <span>&copy; 2024 raihara3. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
