"use client";

import { motion } from "framer-motion";

const buttonVariants = {
  initial: {
    opacity: 0,
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
  tap: {
    scale: 0.95,
  },
};

interface AnimatedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function AnimatedButton({
  children,
  className = "",
  delay = 0,
  ...props
}: AnimatedButtonProps) {
  return (
    <motion.button
      initial="initial"
      animate="animate"
      whileHover="hover"
      whileTap="tap"
      variants={buttonVariants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.button>
  );
}
