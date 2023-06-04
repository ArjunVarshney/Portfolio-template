"use client";
import { motion } from "framer-motion";
import React from "react";

const quote = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.3,
      staggerChildren: 0.08,
    },
  },
};

const singleWord = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

type aniTextProp = {
  text: string;
  className?: string;
};

const AnimatedText = ({ text, className = "" }: aniTextProp) => {
  return (
    <div
      className={`w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden sm:py-0`}
    >
      <motion.h1
        className={`inline-block w-full text-dark font-bold capitalize text-8xl ${className}`}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {text.split(" ").map((word, index) => {
          return (
            <motion.span
              key={index}
              className="inline-block"
              variants={singleWord}
            >
              {word}&nbsp;
            </motion.span>
          );
        })}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
