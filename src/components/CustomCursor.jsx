import React, { useEffect, useState } from 'react';

export default function CustomCursor({ text, expanded }) {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only bind on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const onMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
    };
  }, [visible]);

  return (
    <div
      className={`custom-cursor ${visible ? 'visible' : ''} ${expanded ? 'cursor-expand' : ''}`}
      style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
      aria-hidden="true"
    >
      {text}
    </div>
  );
}