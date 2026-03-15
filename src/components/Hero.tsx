"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CalendarPlus, Info } from "@phosphor-icons/react";
import AsciiBackground from "./AsciiBackground";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-lime/5 -z-10 rounded-l-[100px] hidden lg:block" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl -z-10" />
      
      {/* ASCII Dithering Shader Background */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <AsciiBackground />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 bg-brand-lime/10 text-brand-lime px-4 py-2 rounded-full text-sm font-bold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-lime opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-lime"></span>
            </span>
            Reliable • Professional • On Time
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
            Future <span className="text-brand-lime">Transportation</span>
            <br />
            Support in Motion.
          </h1>

          <p className="text-xl text-text-muted mb-10 max-w-lg leading-relaxed">
            Dependable medical and waiver-based transportation in the
            Seven-county metro area. We help you stay independent and connected
            to your community.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/referral"
              className="flex items-center justify-center gap-2 bg-brand-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-primary-pressed transition-all hover:shadow-xl hover:scale-105 active:scale-95 group"
            >
              Make a Referral
              <CalendarPlus
                weight="duotone"
                size={24}
                className="group-hover:rotate-12 transition-transform"
              />
            </a>
            <a
              href="#services"
              className="flex items-center justify-center gap-2 bg-white text-foreground border border-border px-8 py-4 rounded-xl font-bold text-lg hover:bg-surface-muted transition-all"
            >
              Learn More
              <Info weight="duotone" size={24} />
            </a>
          </div>

          <div className="mt-12 flex items-center gap-6 border-t border-border pt-8">
            <div className="flex -space-x-3">
              {[
                { bg: "bg-blue-100", text: "text-blue-600", label: "JD" },
                { bg: "bg-indigo-100", text: "text-indigo-600", label: "AS" },
                { bg: "bg-purple-100", text: "text-purple-600", label: "MK" },
                { bg: "bg-brand-lime/20", text: "text-brand-lime", label: "RB" },
              ].map((user, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-white bg-surface-muted flex items-center justify-center overflow-hidden"
                >
                  <div className={`w-full h-full ${user.bg} flex items-center justify-center ${user.text} font-bold text-xs uppercase`}>
                    {user.label}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-text-muted">
              Trusted by <span className="font-bold text-foreground">MANY</span>{" "}
              individuals in the metro area
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative"
        >
          <div className="relative rounded-[40px] overflow-hidden shadow-2xl z-10 border-8 border-white">
            <Image
              src="/hero.png"
              alt="Future Transportation NEMT Service"
              width={800}
              height={800}
              className="object-cover"
              priority
            />
          </div>

          {/* Floating Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute -top-10 -right-10 bg-white p-6 rounded-2xl shadow-xl z-20 hidden sm:block border border-border"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-lime/10 rounded-full flex items-center justify-center text-brand-lime">
                <ArrowRight weight="duotone" size={28} className="-rotate-45" />
              </div>
              <div>
                <p className="text-2xl font-bold">100%</p>
                <p className="text-xs text-text-muted font-medium uppercase tracking-wider">
                  On-Time Arrival
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute -bottom-10 -left-10 bg-brand-primary p-6 rounded-2xl shadow-xl z-20 hidden sm:block text-white"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                <CalendarPlus weight="duotone" size={28} />
              </div>
              <div>
                <p className="text-2xl font-bold">24/7</p>
                <p className="text-xs text-white/70 font-medium uppercase tracking-wider">
                  Support Available
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
