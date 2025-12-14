"use client";

import { useRef, useMemo } from "react";
import { motion, useInView } from "motion/react";
import { Star } from "lucide-react";

const STAR_COUNT = 12;

function generateStarPositions(count: number) {
  const positions: Array<{ top: string; left: string; duration: number; delay: number }> = [];
  for (let i = 0; i < count; i++) {
    const seed = i * 137.508;
    positions.push({
      top: `${(seed * 7) % 100}%`,
      left: `${(seed * 13) % 100}%`,
      duration: 2 + (i % 3),
      delay: (i * 0.3) % 2,
    });
  }
  return positions;
}

export default function Hero() {
  const sectionReference = useRef<HTMLElement>(null);
  const isInView = useInView(sectionReference, { amount: 0.1 });
  const starPositions = useMemo(() => generateStarPositions(STAR_COUNT), []);

  return (
    <section
      ref={sectionReference}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950 via-purple-950 to-slate-950" />
      <div className="absolute inset-0 star-pattern opacity-60" />

      <motion.div
        className="absolute top-10 -right-32 w-96 h-96 rounded-full opacity-70"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, #f59e0b, #ef4444, #7c2d12)",
          boxShadow:
            "0 0 100px rgba(245, 158, 11, 0.5), inset -30px -30px 60px rgba(0,0,0,0.3)",
          willChange: isInView ? "transform" : "auto",
        }}
        animate={isInView ? { rotate: 360, y: [0, 30, 0] } : {}}
        transition={{
          rotate: { duration: 60, repeat: Infinity, ease: "linear" },
          y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <div className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-black/20" />
        <div className="absolute top-1/2 right-1/3 w-12 h-12 rounded-full bg-black/15" />
        <div className="absolute bottom-1/3 left-1/2 w-20 h-20 rounded-full bg-black/10" />
      </motion.div>

      <motion.div
        className="absolute -bottom-20 -left-40 w-80 h-80 rounded-full opacity-60"
        style={{
          background:
            "radial-gradient(circle at 40% 40%, #06b6d4, #3b82f6, #1e3a8a)",
          boxShadow:
            "0 0 80px rgba(6, 182, 212, 0.4), inset -20px -20px 40px rgba(0,0,0,0.3)",
          willChange: isInView ? "transform" : "auto",
        }}
        animate={isInView ? { rotate: -360, x: [0, 20, 0] } : {}}
        transition={{
          rotate: { duration: 50, repeat: Infinity, ease: "linear" },
          x: { duration: 7, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-8 rounded-full border-4 border-cyan-300/30 rotate-12" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-10 rounded-full border-4 border-cyan-400/20 rotate-12" />
      </motion.div>

      <motion.div
        className="absolute top-1/4 left-1/4 w-24 h-24 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 35% 35%, #a855f7, #7e22ce, #4c1d95)",
          boxShadow: "0 0 40px rgba(168, 85, 247, 0.6)",
          willChange: isInView ? "transform" : "auto",
        }}
        animate={isInView ? { y: [0, -30, 0], x: [0, 20, 0], rotate: 360 } : {}}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/3 right-1/4 w-32 h-32 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, #fbbf24, #f59e0b, #b45309)",
          boxShadow: "0 0 50px rgba(251, 191, 36, 0.5)",
          willChange: isInView ? "transform" : "auto",
        }}
        animate={isInView ? { y: [0, 40, 0], x: [0, -25, 0], rotate: -360 } : {}}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {isInView &&
        [...Array(3)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{
              top: `${-5 + index * 10}%`,
              right: `${-5 + index * 15}%`,
              willChange: "transform, opacity",
            }}
            animate={{
              x: ["0vw", "-120vw"],
              y: ["0vh", "120vh"],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 1.5,
              delay: index * 3,
              repeat: Infinity,
              repeatDelay: 6,
              ease: "easeOut",
            }}
          >
            <div className="flex items-center rotate-[135deg]">
              <div className="w-32 h-0.5 bg-gradient-to-l from-white to-transparent -mr-1" />
              <div
                className="w-2 h-2 bg-white rounded-full"
                style={{ boxShadow: "0 0 10px 4px rgba(255, 255, 255, 0.8)" }}
              />
            </div>
          </motion.div>
        ))}

      {starPositions.map((star, index) => (
        <div
          key={`star-${index}`}
          className="absolute w-2 h-2"
          style={{
            top: star.top,
            left: star.left,
          }}
        >
          <div
            className={isInView ? "star-twinkle" : ""}
            style={{
              ["--twinkle-duration" as string]: `${star.duration}s`,
              ["--twinkle-delay" as string]: `${star.delay}s`,
            }}
          >
            <Star
              className="w-full h-full text-yellow-200 fill-yellow-200"
              style={{ filter: "drop-shadow(0 0 4px rgba(254, 240, 138, 0.8))" }}
            />
          </div>
        </div>
      ))}

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 w-full"
        >
          <svg
            viewBox="0 0 700 320"
            className="w-full h-auto"
            style={{ filter: "drop-shadow(0 0 30px rgba(168, 85, 247, 0.5))" }}
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient
                id="heroGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#a855f7" />
                <stop offset="33%" stopColor="#06b6d4" />
                <stop offset="66%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#f59e0b" />
              </linearGradient>
            </defs>
            <text
              x="50%"
              y="130"
              textAnchor="middle"
              style={{
                fill: "none",
                stroke: "url(#heroGradient)",
                strokeWidth: 2,
                fontSize: "150px",
                fontWeight: 700,
                letterSpacing: "0.05em",
              }}
            >
              ASOBI
            </text>
            <text
              x="50%"
              y="280"
              textAnchor="middle"
              style={{
                fill: "none",
                stroke: "url(#heroGradient)",
                strokeWidth: 2,
                fontSize: "150px",
                fontWeight: 700,
                letterSpacing: "0.05em",
              }}
            >
              SPACE
            </text>
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
