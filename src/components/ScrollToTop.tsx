"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "@phosphor-icons/react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Calculate scroll progress percentage
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="fixed bottom-8 right-8 z-[100]"
        >
          <button
            onClick={scrollToTop}
            className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#1A1C1E] text-white shadow-2xl transition-transform active:scale-90"
            aria-label="Scroll to top"
          >
            {/* Progress Circle SVG */}
            <svg className="absolute h-full w-full -rotate-90 transform" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="46"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeOpacity="0.1"
              />
              <motion.circle
                cx="50"
                cy="50"
                r="46"
                fill="none"
                stroke="#65A30D" // brand-lime
                strokeWidth="4"
                strokeDasharray="289.027" // 2 * PI * r
                animate={{ strokeDashoffset: 289.027 - (289.027 * scrollProgress) / 100 }}
                transition={{ type: "spring", stiffness: 50, damping: 20 }}
                strokeLinecap="round"
              />
            </svg>

            <ArrowUp
              weight="bold"
              size={24}
              className="relative z-10 transition-transform group-hover:-translate-y-1"
            />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
