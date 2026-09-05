import React, { useEffect, useState } from 'react';

export default function CustomCursor({ text, expanded }) {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [visible]);

  return (
    <div
      className={`custom-cursor ${visible ? 'visible' : ''} ${expanded ? 'cursor-expand' : ''}`}
      style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
    >
      {text}
    </div>
  );
}