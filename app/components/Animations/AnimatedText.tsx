"use client";

import { motion } from "framer-motion";

const textVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

interface AnimatedTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function AnimatedText({
  children,
  className = "",
  delay = 0,
}: AnimatedTextProps) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={textVariants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
