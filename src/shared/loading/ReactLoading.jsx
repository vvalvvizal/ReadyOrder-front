import React from "react";
import { motion } from "framer-motion";

const loadingContainer = {
  width: "2rem",
  height: "2rem",
  display: "flex",
  justifyContent: "space-around",
};

const loadingCircle = {
  display: "block",
  width: "0.5rem",
  height: "0.5rem",
  backgroundColor: "grey",
  borderRadius: "0.25rem",
};

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const loadingCircleVariants = {
  start: {
    y: "0%",
    transition: {
      yoyo: Infinity, // 반복 설정
      duration: 0.4,
      ease: "easeInOut",
    },
  },
  end: {
    y: "100%",
  },
};

export const ThreeDotsWave = () => {
  return (
    <motion.div
      style={loadingContainer}
      variants={loadingContainerVariants}
      initial="start"
      animate="end"
    >
      <motion.span style={loadingCircle} variants={loadingCircleVariants} />
      <motion.span style={loadingCircle} variants={loadingCircleVariants} />
      <motion.span style={loadingCircle} variants={loadingCircleVariants} />
    </motion.div>
  );
};
