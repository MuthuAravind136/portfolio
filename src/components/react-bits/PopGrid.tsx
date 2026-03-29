"use client";

import React, { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

export const PopGrid: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { theme } = useTheme();
    const mouse = useRef({ x: -1000, y: -1000 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        const spacing = 35;
        const rows = Math.ceil(height / spacing) + 1;
        const cols = Math.ceil(width / spacing) + 1;

        let animationId: number;

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            const color = theme === 'dark' ? '112, 0, 255' : '99, 102, 241';
            const baseAlpha = theme === 'dark' ? 0.15 : 0.1;

            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    const x = i * spacing;
                    const y = j * spacing;

                    const dist = Math.sqrt(Math.pow(x - mouse.current.x, 2) + Math.pow(y - mouse.current.y, 2));
                    const maxDist = 150;

                    let size = 1.5;
                    let alpha = baseAlpha;

                    if (dist < maxDist) {
                        const factor = 1 - dist / maxDist;
                        size = 1.5 + factor * 6; // Snap-pop scaling
                        alpha = baseAlpha + factor * 0.8; // Snappy brightening
                    }

                    ctx.fillStyle = `rgba(${color}, ${alpha})`;
                    ctx.beginPath();
                    ctx.arc(x, y, size, 0, Math.PI * 2);
                    ctx.fill();
                }
            }

            animationId = requestAnimationFrame(animate);
        };

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);
        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationId);
        };
    }, [theme]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
        />
    );
};
