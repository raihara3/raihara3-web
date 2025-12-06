"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Code, Palette, Box, Globe, RotateCw } from "lucide-react";
import Image from "next/image";

export default function AboutSection() {
  const [isFlipped, setIsFlipped] = useState(false);

  const skills = [
    "React",
    "TypeScript",
    "Next.js",
    "Three.js",
    "8th Wall",
    "Graphic Design",
    "Creative Direction",
    "Figma",
    "Photoshop",
    "Illustrator",
    "Ruby on Rails",
    "Blender",
    "Unity",
    "WordPress",
    "Nginx",
    "Redis",
  ];

  const highlights = [
    { icon: Code, title: "Frontend", color: "from-cyan-400 to-blue-500" },
    { icon: Globe, title: "WebXR", color: "from-pink-400 to-purple-500" },
    { icon: Box, title: "3D", color: "from-orange-400 to-amber-500" },
    {
      icon: Palette,
      title: "Graphic Design",
      color: "from-emerald-400 to-teal-500",
    },
  ];

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <section id="profile" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-indigo-950/30 to-slate-950" />

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 gradient-cosmic text-gradient">PROFILE</h2>
          <p className="text-slate-400">CREATOR</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto perspective-1000"
        >
          <div
            className="relative cursor-pointer group"
            style={{ perspective: "1000px" }}
            onClick={handleFlip}
          >
            {/* Back card peek - visible behind main card */}
            <motion.div
              className="absolute -right-3 top-3 w-full h-full rounded-3xl bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-600 opacity-60"
              animate={{
                x: isFlipped ? 12 : 0,
                rotate: isFlipped ? -3 : 3,
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
            <motion.div
              className="relative w-full"
              style={{ transformStyle: "preserve-3d" }}
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {/* Front Side */}
              <div
                className="relative"
                style={{ backfaceVisibility: "hidden" }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl blur-sm opacity-50" />
                <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl border border-white/20 overflow-hidden">
                  <div className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 px-6 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center overflow-hidden">
                        <Globe className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-sm font-bold tracking-wider">
                        ASOBI SPACE
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs tracking-widest opacity-80">
                        PILOT LICENSE
                      </span>
                      <RotateCw className="w-4 h-4 text-white/60" />
                    </div>
                  </div>

                  <div className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-shrink-0">
                        <div className="relative w-32 h-40 mx-auto md:mx-0">
                          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-cyan-500/30 rounded-xl" />
                          <div className="relative w-full h-full rounded-xl overflow-hidden border-2 border-white/30">
                            <Image
                              src="/logo.png"
                              alt="Profile"
                              fill
                              className="object-contain"
                            />
                          </div>
                          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-[10px] font-bold tracking-wider">
                            VERIFIED
                          </div>
                        </div>
                      </div>

                      <div className="flex-1 space-y-4">
                        <div>
                          <p className="text-[10px] text-slate-500 tracking-wider mb-1">
                            PILOT NAME
                          </p>
                          <p className="text-2xl font-bold text-white">
                            raihara3
                          </p>
                        </div>

                        <div>
                          <p className="text-[10px] text-slate-500 tracking-wider mb-1">
                            CLASSIFICATION
                          </p>
                          <p className="text-cyan-400">
                            Frontend Engineer / WebXR Engineer
                          </p>
                        </div>

                        <div>
                          <p className="text-[10px] text-slate-500 tracking-wider mb-1">
                            MISSION STATEMENT
                          </p>
                          <p className="text-sm text-slate-300">
                            グラフィックデザイナーからフロントエンドエンジニアへ転向。
                            <br />
                            フロントエンドに限らず興味を持った技術で遊んでいます。
                            <br />
                            遊びつつ、誰かのためになることがしたい。
                          </p>
                        </div>

                        <div>
                          <p className="text-[10px] text-slate-500 tracking-wider mb-2">
                            CERTIFICATIONS
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {highlights.map((item, index) => (
                              <div
                                key={index}
                                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r ${item.color} bg-opacity-20`}
                                style={{
                                  background: `linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))`,
                                }}
                              >
                                <item.icon className="w-3.5 h-3.5 text-white" />
                                <span className="text-xs text-white">
                                  {item.title}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 flex items-center justify-between text-[10px] text-slate-500">
                      <div className="flex items-center gap-4">
                        <span>ID: ASP-2024-001</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-16 h-6 relative opacity-50">
                          <svg viewBox="0 0 100 30" className="w-full h-full">
                            <rect
                              x="0"
                              y="0"
                              width="2"
                              height="30"
                              fill="currentColor"
                            />
                            <rect
                              x="4"
                              y="0"
                              width="1"
                              height="30"
                              fill="currentColor"
                            />
                            <rect
                              x="7"
                              y="0"
                              width="3"
                              height="30"
                              fill="currentColor"
                            />
                            <rect
                              x="12"
                              y="0"
                              width="1"
                              height="30"
                              fill="currentColor"
                            />
                            <rect
                              x="15"
                              y="0"
                              width="2"
                              height="30"
                              fill="currentColor"
                            />
                            <rect
                              x="19"
                              y="0"
                              width="1"
                              height="30"
                              fill="currentColor"
                            />
                            <rect
                              x="22"
                              y="0"
                              width="3"
                              height="30"
                              fill="currentColor"
                            />
                            <rect
                              x="27"
                              y="0"
                              width="1"
                              height="30"
                              fill="currentColor"
                            />
                            <rect
                              x="30"
                              y="0"
                              width="2"
                              height="30"
                              fill="currentColor"
                            />
                            <rect
                              x="34"
                              y="0"
                              width="1"
                              height="30"
                              fill="currentColor"
                            />
                            <rect
                              x="37"
                              y="0"
                              width="3"
                              height="30"
                              fill="currentColor"
                            />
                            <rect
                              x="42"
                              y="0"
                              width="2"
                              height="30"
                              fill="currentColor"
                            />
                            <rect
                              x="46"
                              y="0"
                              width="1"
                              height="30"
                              fill="currentColor"
                            />
                            <rect
                              x="49"
                              y="0"
                              width="2"
                              height="30"
                              fill="currentColor"
                            />
                            <rect
                              x="53"
                              y="0"
                              width="1"
                              height="30"
                              fill="currentColor"
                            />
                            <rect
                              x="56"
                              y="0"
                              width="3"
                              height="30"
                              fill="currentColor"
                            />
                            <rect
                              x="61"
                              y="0"
                              width="1"
                              height="30"
                              fill="currentColor"
                            />
                            <rect
                              x="64"
                              y="0"
                              width="2"
                              height="30"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Back Side */}
              <div
                className="absolute inset-0"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-3xl blur-sm opacity-50" />
                <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl border border-white/20 overflow-hidden h-full">
                  <div className="bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-600 px-6 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center overflow-hidden">
                        <Globe className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-sm font-bold tracking-wider">
                        ASOBI SPACE
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs tracking-widest opacity-80">
                        SKILLS LOG
                      </span>
                      <RotateCw className="w-4 h-4 text-white/60" />
                    </div>
                  </div>

                  <div className="p-6 md:p-8">
                    <div className="mb-6">
                      <p className="text-[10px] text-slate-500 tracking-wider mb-4">
                        ACQUIRED SKILLS & TECHNOLOGIES
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {skills.map((skill, index) => (
                          <span
                            key={index}
                            className="px-3 py-1.5 bg-white/5 text-slate-300 rounded-lg text-xs border border-white/10 hover:bg-white/10 hover:border-white/20 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-white/10">
                      <p className="text-[10px] text-slate-500 tracking-wider mb-3">
                        FUTURE VISION
                      </p>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        一人でも多くの人のためになることをして、最終的に自分自身が宇宙ゴミになりたい。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="flex items-center justify-center gap-2 mt-6"
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <RotateCw className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-400 font-medium tracking-wide">
              Click to flip
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
