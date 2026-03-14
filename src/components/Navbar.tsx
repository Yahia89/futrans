"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { List, X, PhoneCall } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    
    // Physical scroll lock for mobile menu
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Services", href: "/#services" },
    { name: "Referral", href: "/referral" },
    { name: "Career", href: "/career" },
    { name: "About", href: "/#about" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/90 backdrop-blur-md border-b border-border/50 shadow-sm py-3"
            : "bg-transparent py-5",
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group relative z-[110]">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden shadow-sm border border-border/10 group-hover:scale-105 transition-transform bg-white">
              <Image
                src="/logo.png"
                alt="Future Transportation Logo"
                fill
                className="object-contain p-1"
                priority
              />
            </div>
            <span className="font-bold text-xl tracking-tight text-[#1A1C1E] uppercase">
              Future <span className="text-brand-lime">Transportation</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-[#1A1C1E]/80 hover:text-brand-lime transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:6128889966"
              className="flex items-center gap-2 bg-brand-primary text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-brand-primary-pressed transition-all hover:shadow-lg active:scale-95"
            >
              <PhoneCall weight="duotone" size={18} />
              (612)-888-9966
            </a>
          </div>

          {/* Mobile Toggle Button */}
          <button
            className="md:hidden text-[#1A1C1E] p-2 flex items-center justify-center relative z-[110]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X size={36} weight="bold" />
            ) : (
              <List size={36} weight="bold" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay — OUTSIDE the nav to avoid backdrop-blur inheritance */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white z-[100] md:hidden px-6 pt-32 pb-12 flex flex-col"
            style={{ backgroundColor: "#ffffff" }}
          >
            {/* Close Button inside overlay */}
            <button
              className="absolute top-6 right-6 text-[#1A1C1E] p-2"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={36} weight="bold" />
            </button>

            <div className="flex flex-col h-full max-w-lg mx-auto w-full">
              <div className="flex flex-col gap-6 text-center">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.15 }}
                  >
                    <Link
                      href={link.href}
                      className="text-4xl font-black text-[#1A1C1E] transition-colors py-2 block tracking-tight"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto pt-10 border-t border-[#e2e8f0]/30">
                <p className="text-center text-[#64748b] mb-6 font-medium text-lg">
                  Need assistance? Call us directly.
                </p>
                <a
                  href="tel:6128889966"
                  className="flex items-center justify-center gap-4 bg-[#3D5A3D] text-white px-8 py-5 rounded-[24px] text-xl font-black shadow-2xl active:scale-95 transition-transform outline-none"
                >
                  <PhoneCall weight="duotone" size={28} />
                  (612)-888-9966
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
