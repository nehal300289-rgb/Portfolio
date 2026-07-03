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
    const canvasElement = canvasRef.current;

    if (!canvasElement) return;

    const canvasContext = canvasElement.getContext("2d");

    if (!canvasContext) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let animationFrameId: number;

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;

      canvasElement.width = width;
      canvasElement.height = height;
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

    resize();

    const particles: Particle[] = Array.from({ length: 80 }, makeParticle);

    function draw() {
      canvasContext.clearRect(0, 0, width, height); 

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            canvasContext.beginPath();
            canvasContext.strokeStyle = `rgba(193, 101, 74, ${
              0.07 * (1 - distance / 120)
            })`;
            canvasContext.lineWidth = 0.5;
            canvasContext.moveTo(particles[i].x, particles[i].y);
            canvasContext.lineTo(particles[j].x, particles[j].y);
            canvasContext.stroke();
          }
        }
      }

      particles.forEach((particle) => {
        canvasContext.beginPath();
        canvasContext.arc(
          particle.x,
          particle.y,
          particle.r,
          0,
          Math.PI * 2
        );

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

      animationFrameId = requestAnimationFrame(draw);
    }

    window.addEventListener("resize", resize);
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas id="bg-canvas" ref={canvasRef}></canvas>;
}