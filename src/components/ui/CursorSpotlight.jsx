import React, { useEffect, useState } from 'react';

/**
 * CursorSpotlight: Ambient radial light cone following pointer on desktop.
 * Enhances depth without visual noise or layout shift. Disabled on touch or reduced motion.
 */
export default function CursorSpotlight() {
  const [coords, setCoords] = useState({ x: -1000, y: -1000 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Only activate on devices with fine pointer (mouse/trackpad)
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!isFinePointer || prefersReducedMotion) return;

    setMounted(true);

    const handlePointerMove = (e) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-30 transition-opacity duration-300 select-none"
      style={{
        background: `radial-gradient(650px circle at ${coords.x}px ${coords.y}px, rgba(99, 102, 241, 0.05), transparent 75%)`
      }}
      aria-hidden="true"
    />
  );
}
