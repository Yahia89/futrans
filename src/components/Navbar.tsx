"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { List, X, PhoneCall } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b border-white/20 shadow-sm py-3"
          : "bg-transparent py-5",
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:scale-105 transition-transform">
            F
          </div>
          <span className="font-bold text-xl tracking-tight text-foreground uppercase">
            Future <span className="text-brand-lime">Transportation</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-brand-lime transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="tel:6128889966"
            className="flex items-center gap-2 bg-brand-primary text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-primary-pressed transition-all hover:shadow-lg active:scale-95"
          >
            <PhoneCall weight="duotone" size={18} />
            (612)-888-9966
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X size={28} weight="duotone" />
          ) : (
            <List size={28} weight="duotone" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 top-[72px] bg-white z-40 md:hidden transition-transform duration-300 ease-in-out px-6 py-8",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex flex-col gap-6 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-2xl font-semibold text-foreground hover:text-brand-lime"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="tel:6128889966"
            className="flex items-center justify-center gap-2 bg-brand-primary text-white px-6 py-4 rounded-xl text-lg font-bold mt-4"
          >
            <PhoneCall weight="duotone" size={24} />
            Call Now
          </a>
        </div>
      </div>
    </nav>
  );
}
