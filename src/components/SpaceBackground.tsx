"use client";

import { useEffect, useRef } from "react";

interface Planet {
  id: number;
  radius: number;
  orbitRadius: number;
  speed: number;
  color: string;
  size: number;
}

export default function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  const planets: Planet[] = [
    {
      id: 1,
      radius: 0,
      orbitRadius: 150,
      speed: 0.0004,
      color: "#EA032F",
      size: 12,
    },
    {
      id: 2,
      radius: 0,
      orbitRadius: 220,
      speed: 0.00028,
      color: "#a6a6a6",
      size: 16,
    },
    {
      id: 3,
      radius: 0,
      orbitRadius: 300,
      speed: 0.0002,
      color: "#a6a6a6",
      size: 10,
    },
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let startTime = Date.now();

    const drawOrbits = () => {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      context.strokeStyle = "rgba(255, 255, 255, 0.15)";
      context.lineWidth = 1;

      planets.forEach((planet) => {
        context.beginPath();
        context.arc(centerX, centerY, planet.orbitRadius, 0, Math.PI * 2);
        context.stroke();
      });
    };

    const animate = () => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;

      context.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      drawOrbits();

      planets.forEach((planet) => {
        const angle = elapsedTime * planet.speed;
        const x = centerX + Math.cos(angle) * planet.orbitRadius;
        const y = centerY + Math.sin(angle) * planet.orbitRadius;

        context.shadowColor = planet.color;
        context.shadowBlur = 15;
        context.fillStyle = planet.color;
        context.beginPath();
        context.arc(x, y, planet.size, 0, Math.PI * 2);
        context.fill();

        context.shadowBlur = 0;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-50"
      style={{
        background:
          "radial-gradient(ellipse at center, #1a1a2e 0%, #16213e 50%, #0f0f0f 100%)",
        zIndex: 0,
      }}
    />
  );
}
