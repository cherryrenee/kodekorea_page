import React, { useEffect, useRef } from 'react';

export function BackgroundEffect() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        let animationFrameId: number;

        // Noise Canvas (Off-screen)
        const noiseCanvas = document.createElement('canvas');
        const noiseCtx = noiseCanvas.getContext('2d');
        const resizeNoise = (w: number, h: number) => {
            noiseCanvas.width = 200; // Small repeating texture for performance
            noiseCanvas.height = 200;
            if (noiseCtx) {
                const imageData = noiseCtx.createImageData(200, 200);
                const data = imageData.data;
                for (let i = 0; i < data.length; i += 4) {
                    // High frequency noise
                    const val = Math.random() * 255;
                    data[i] = val;     // R
                    data[i + 1] = val; // G
                    data[i + 2] = val; // B
                    data[i + 3] = 40;  // Alpha (Grain intensity)
                }
                noiseCtx.putImageData(imageData, 0, 0);
            }
        };

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            resizeNoise(width, height);
        };
        window.addEventListener('resize', resize);
        resize();

        let time = 0;

        // Gradient Blobs - Sides Only (Wider & Lighter)
        const blobs = [
            { x: 0.0, y: 0.2, r: 0.7, color: 'rgba(52, 95, 255, 0.25)', speed: 0.002, phase: 0 },   // Deep Blue (Lighter)
            { x: 1.0, y: 0.8, r: 0.8, color: 'rgba(139, 92, 246, 0.3)', speed: 0.003, phase: 2 },  // Purple (Lighter)
        ];

        const animate = () => {
            ctx.fillStyle = '#020202';
            ctx.fillRect(0, 0, width, height);

            time += 0.005;

            // 1. Draw Blurred Gradients
            blobs.forEach(blob => {
                // Organic movement
                const currentX = (blob.x + Math.sin(time * blob.speed + blob.phase) * 0.05) * width; // Reduced movement range
                const currentY = (blob.y + Math.cos(time * blob.speed * 0.8 + blob.phase) * 0.05) * height;

                // Strict side coverage: Use MAX dimension * factor to keep center black but wider
                const currentR = Math.max(width, height) * (blob.r + Math.sin(time * 0.5 + blob.phase) * 0.05);

                const gradient = ctx.createRadialGradient(currentX, currentY, 0, currentX, currentY, currentR);
                gradient.addColorStop(0, blob.color);
                gradient.addColorStop(1, 'rgba(0,0,0,0)');

                ctx.fillStyle = gradient;
                ctx.globalCompositeOperation = 'screen'; // Blend nicely
                ctx.arc(currentX, currentY, currentR, 0, Math.PI * 2);
                ctx.fill();
            });

            // 2. Overlay Noise
            ctx.globalCompositeOperation = 'overlay';
            ctx.fillStyle = ctx.createPattern(noiseCanvas, 'repeat') || 'transparent';
            ctx.fillRect(0, 0, width, height);

            // Reset
            ctx.globalCompositeOperation = 'source-over';

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-full bg-[#020202] z-0 pointer-events-none"
        />
    );
}
