"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  color: string;
  alpha: number;
};

const COLORS = ["#C1654A", "#D98B6F", "#A67C5B", "#E2D4BC"];

export default function BackgroundCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
   const canvasFromRef = canvasRef.current;

if (!canvasFromRef) return;

const canvas: HTMLCanvasElement = canvasFromRef;

    const context = canvas.getContext("2d");

    if (!context) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let animationFrameId = 0;

    function resize(targetCanvas: HTMLCanvasElement) {
      width = window.innerWidth;
      height = window.innerHeight;

      targetCanvas.width = width;
      targetCanvas.height = height;
    }

    function makeParticle(): Particle {
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 2.5 + 0.5,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        alpha: Math.random() * 0.5 + 0.1,
      };
    }

    resize(canvas);

    const particles: Particle[] = Array.from({ length: 80 }, makeParticle);

    function draw(canvasContext: CanvasRenderingContext2D) {
      canvasContext.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const particleA = particles[i];

        for (let j = i + 1; j < particles.length; j++) {
          const particleB = particles[j];

          const dx = particleA.x - particleB.x;
          const dy = particleA.y - particleB.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            canvasContext.beginPath();
            canvasContext.strokeStyle = `rgba(193, 101, 74, ${
              0.07 * (1 - distance / 120)
            })`;
            canvasContext.lineWidth = 0.5;
            canvasContext.moveTo(particleA.x, particleA.y);
            canvasContext.lineTo(particleB.x, particleB.y);
            canvasContext.stroke();
          }
        }
      }

      particles.forEach((particle) => {
        canvasContext.beginPath();
        canvasContext.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2);

        canvasContext.fillStyle = particle.color;
        canvasContext.globalAlpha = particle.alpha;
        canvasContext.fill();
        canvasContext.globalAlpha = 1;

        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > width) {
          particle.vx *= -1;
        }

        if (particle.y < 0 || particle.y > height) {
          particle.vy *= -1;
        }
      });

      animationFrameId = requestAnimationFrame(() => draw(canvasContext));
    }

    function handleResize() {
      resize(canvas);
    }

    window.addEventListener("resize", handleResize);
    draw(context);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas id="bg-canvas" ref={canvasRef}></canvas>;
}