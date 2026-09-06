import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || window.matchMedia('(pointer: coarse)').matches) return;

    const onMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!active) setActive(true);
    };

    const onLeave = () => setActive(false);
    const onEnter = () => setActive(true);

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
    };
  }, [active]);

  return (
    <div
      className={`subtle-cursor-dot ${active ? 'active' : ''}`}
      style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
      aria-hidden="true"
    />
  );
}