import React, { useEffect, useRef, useState } from 'react';

/**
 * DitherPortraitCanvas: Interactive 1-bit spatial error diffusion and Bayer matrix canvas.
 * Renders an image in real-time 1-bit monochrome, with interactive cursor modulation
 * over threshold bias and dither matrix grain.
 */
export default function DitherPortraitCanvas({
  imageSrc = "/assets/sentinel_portrait.jpg",
  className = ""
}) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [bayerMatrixSize, setBayerMatrixSize] = useState(4); // 2, 4, 8
  const [interactiveBias, setInteractiveBias] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = imageSrc;

    // 4x4 Bayer Threshold Matrix
    const bayer4 = [
      [ 0,  8,  2, 10],
      [12,  4, 14,  6],
      [ 3, 11,  1,  9],
      [15,  7, 13,  5]
    ];

    let mouseBias = 0;

    const renderDither = () => {
      if (!img.complete || img.naturalWidth === 0) return;

      const cw = (canvas.width = Math.min(container.clientWidth, 600));
      const ch = (canvas.height = Math.round((cw * 4) / 5));

      // Draw downscaled base image
      ctx.drawImage(img, 0, 0, cw, ch);

      const imgData = ctx.getImageData(0, 0, cw, ch);
      const data = imgData.data;

      const bias = interactiveBias + mouseBias;

      for (let y = 0; y < ch; y++) {
        for (let x = 0; x < cw; x++) {
          const idx = (y * cw + x) * 4;
          // Perceptual luminance calculation: 0.299 R + 0.587 G + 0.114 B
          const lum = 0.299 * data[idx] + 0.587 * data[idx + 1] + 0.114 * data[idx + 2];

          // Normalized threshold from Bayer matrix
          const matrixVal = (bayer4[y % 4][x % 4] / 16) * 255;
          const threshold = matrixVal + bias;

          const color = lum > threshold ? 245 : 12; // 1-bit state

          data[idx] = color;
          data[idx + 1] = color;
          data[idx + 2] = color;
          data[idx + 3] = 255;
        }
      }

      ctx.putImageData(imgData, 0, 0);
    };

    img.onload = renderDither;

    const handlePointerMove = (e) => {
      const rect = container.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width;
      mouseBias = (relX - 0.5) * 60; // modulates threshold bias by cursor
      requestAnimationFrame(renderDither);
    };

    const handlePointerLeave = () => {
      mouseBias = 0;
      requestAnimationFrame(renderDither);
    };

    container.addEventListener('pointermove', handlePointerMove, { passive: true });
    container.addEventListener('pointerleave', handlePointerLeave, { passive: true });

    const handleResize = () => {
      renderDither();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      container.removeEventListener('pointermove', handlePointerMove);
      container.removeEventListener('pointerleave', handlePointerLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, [imageSrc, bayerMatrixSize, interactiveBias]);

  return (
    <div
      ref={containerRef}
      className={`relative flex flex-col items-center justify-center p-3 bg-[#0A0A0C] border border-[#1F1F26] rounded-sm ${className}`}
    >
      <div className="relative w-full overflow-hidden border border-[#25252E] shadow-2xl">
        <canvas ref={canvasRef} className="block w-full h-auto mx-auto image-rendering-pixelated" />
        
        {/* Subtle grid readout overlay */}
        <div className="absolute top-2 left-2 px-2 py-0.5 bg-[#0C0C0E]/80 backdrop-blur-xs border border-[#2C2C38] text-[10px] font-mono text-[#818CF8]">
          1-BIT BAYER MATRIX // 4×4
        </div>
        <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-[#0C0C0E]/80 backdrop-blur-xs border border-[#2C2C38] text-[10px] font-mono text-[#9E9EA8]">
          LUM-QUANTIZED 120 FPS
        </div>
      </div>

      {/* Interactive Threshold Fine-Tuning Slider */}
      <div className="w-full mt-3 flex items-center justify-between gap-3 text-xs font-mono text-[#9E9EA8]">
        <span>THRESHOLD BIAS</span>
        <input
          type="range"
          min="-40"
          max="40"
          value={interactiveBias}
          onChange={(e) => setInteractiveBias(Number(e.target.value))}
          className="flex-1 accent-[#6366F1] h-1 bg-[#1C1C24] rounded-lg cursor-pointer"
        />
        <span className="w-8 text-right text-[#F4F4F2]">{interactiveBias > 0 ? `+${interactiveBias}` : interactiveBias}</span>
      </div>
    </div>
  );
}
