import React from 'react';
import { motion } from 'framer-motion';

/**
 * PageTransition: Smooth, high-fidelity route transition wrapper.
 * Provides intentional entrance animation with zero flash of unstyled content.
 */
export default function PageTransition({ children, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
      className={`w-full ${className}`}
    >
      {children}
    </motion.div>
  );
}
