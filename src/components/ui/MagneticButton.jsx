import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * MagneticButton: Tasteful physics-based magnetic cursor attraction.
 * Springs back naturally on mouse leave. Falls back gracefully on touch/reduced motion.
 */
export default function MagneticButton({
  children,
  className = "",
  onClick,
  strength = 0.35,
  as = "button",
  ...props
}) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;

    setPosition({
      x: distanceX * strength,
      y: distanceY * strength
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const Component = motion[as] || motion.button;

  return (
    <Component
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 220, damping: 16, mass: 0.2 }}
      onClick={onClick}
      className={`inline-flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6366F1] ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
