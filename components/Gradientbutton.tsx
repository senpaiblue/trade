// GradientButton.tsx
"use client";
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface GradientButtonProps {
  text: string;
  onClick?: () => void;
}

const GradientButton: React.FC<GradientButtonProps> = ({ text, onClick }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      // Calculate position relative to the button
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <motion.button
      ref={buttonRef}
      className="relative w-full py-4 px-6 rounded-full text-white font-medium text-lg overflow-hidden bg-black mt-6"
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileTap={{ scale: 0.98 }}
    >
      {/* Gradient overlay that follows cursor */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: isHovered
            ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, #D4D1D1 0%, #D4D1D1 15%, #000000 70%)`
            : 'none',
          opacity: isHovered ? 1 : 0,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      />

      {/* Static gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-black-600 to-black-600 opacity-80" />

      {/* Button text */}
      <span className="relative z-10">{text}</span>
    </motion.button>
  );
};

export default GradientButton;