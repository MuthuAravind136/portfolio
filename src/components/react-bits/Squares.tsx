"use client";

import { useEffect, useRef, useState } from "react";

interface SquaresProps {
    direction?: "diagonal" | "vertical" | "horizontal" | "forward" | "backward";
    speed?: number;
    borderColor?: string;
    squareSize?: number;
    hoverFillColor?: string;
}

export function Squares({
    direction = "forward",
    speed = 1,
    borderColor = "#333",
    squareSize = 40,
    hoverFillColor = "#222",
}: SquaresProps) {
    const [mounted, setMounted] = useState(false);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const hoveredSquareRef = useRef<{ x: number; y: number } | null>(null);
    const numSquaresX = useRef<number>(0);
    const numSquaresY = useRef<number>(0);
    const gridOffset = useRef({ x: 0, y: 0 });

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resizeCanvas = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
            numSquaresX.current = Math.ceil(canvas.width / squareSize) + 1;
            numSquaresY.current = Math.ceil(canvas.height / squareSize) + 1;
        };

        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();

        const drawGrid = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const startX = Math.floor(gridOffset.current.x % squareSize);
            const startY = Math.floor(gridOffset.current.y % squareSize);

            ctx.strokeStyle = borderColor;
            ctx.lineWidth = 0.5;

            for (let x = startX - squareSize; x < canvas.width; x += squareSize) {
                for (let y = startY - squareSize; y < canvas.height; y += squareSize) {
                    const squareX = Math.floor((x - startX) / squareSize);
                    const squareY = Math.floor((y - startY) / squareSize);

                    if (hoveredSquareRef.current && hoveredSquareRef.current.x === squareX && hoveredSquareRef.current.y === squareY) {
                        ctx.fillStyle = hoverFillColor;
                        ctx.fillRect(x, y, squareSize, squareSize);
                    }

                    ctx.strokeRect(x, y, squareSize, squareSize);
                }
            }

            const speedFactor = speed * 0.5;
            if (direction === "forward") {
                gridOffset.current.x -= speedFactor;
                gridOffset.current.y -= speedFactor;
            } else if (direction === "backward") {
                gridOffset.current.x += speedFactor;
                gridOffset.current.y += speedFactor;
            } else if (direction === "diagonal") {
                gridOffset.current.x -= speedFactor;
                gridOffset.current.y -= speedFactor;
            } else if (direction === "vertical") {
                gridOffset.current.y -= speedFactor;
            } else if (direction === "horizontal") {
                gridOffset.current.x -= speedFactor;
            }

            requestAnimationFrame(drawGrid);
        };

        const animationId = requestAnimationFrame(drawGrid);

        const handleMouseMove = (event: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            const mouseX = event.clientX - rect.left;
            const mouseY = event.clientY - rect.top;

            const startX = Math.floor(gridOffset.current.x % squareSize);
            const startY = Math.floor(gridOffset.current.y % squareSize);

            const x = Math.floor((mouseX - startX) / squareSize);
            const y = Math.floor((mouseY - startY) / squareSize);

            hoveredSquareRef.current = { x, y };
        };

        const handleMouseLeave = () => {
            hoveredSquareRef.current = null;
        };

        canvas.addEventListener("mousemove", handleMouseMove);
        canvas.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            cancelAnimationFrame(animationId);
            canvas.removeEventListener("mousemove", handleMouseMove);
            canvas.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [direction, speed, borderColor, squareSize, hoverFillColor, mounted]);

    return <canvas ref={canvasRef} className="w-full h-full border-none block" />;
}
