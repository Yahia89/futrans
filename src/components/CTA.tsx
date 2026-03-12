"use client";

import React from "react";
import { motion } from "framer-motion";
import { CalendarPlus, UserPlus, ArrowRight } from "@phosphor-icons/react";

export default function CTA() {
  return (
    <section id="referral" className="py-24 bg-[#FAFAF8] relative overflow-hidden">
      {/* Subtle Background Decorations */}
      <div className="absolute top-0 right-0 w-[40%] h-full bg-brand-primary/5 -z-0 rounded-l-[160px] hidden lg:block" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-lime/5 rounded-full blur-3xl -z-0" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-stretch relative z-10">
        {/* Referral Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#1A3C34] text-white p-10 md:p-14 rounded-[48px] shadow-sm flex flex-col items-start relative overflow-hidden group border border-white/10"
        >
          {/* Subtle decoration */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-white/[0.03] rounded-bl-full pointer-events-none transition-transform duration-700 group-hover:scale-110" />
          
          <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-10 transition-transform duration-500 group-hover:bg-white/15">
            <CalendarPlus weight="duotone" size={36} className="text-brand-lime" />
          </div>
          
          <h3 className="text-4xl lg:text-5xl font-black mb-6 leading-tight max-w-[12ch]">
            Make a <span className="text-brand-lime">Referral</span>
          </h3>
          
          <p className="text-white/70 mb-12 text-lg leading-relaxed max-w-md font-medium">
            Send us your client information to start the coordination process
            and secure reliable transportation today.
          </p>
          
          <motion.a
            href="mailto:futrans25@gmail.com?subject=Referral Request"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-3 bg-white text-[#1A3C34] px-10 py-5 rounded-2xl font-bold text-lg transition-colors hover:bg-brand-lime hover:text-white mt-auto w-full md:w-auto"
          >
            Start Referral <ArrowRight weight="bold" size={20} />
          </motion.a>
        </motion.div>

        {/* Career/Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-[#65A30D] text-white p-10 md:p-14 rounded-[48px] shadow-sm flex flex-col items-start relative overflow-hidden group border border-white/10"
        >
          {/* Subtle decoration */}
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/[0.05] rounded-tl-full pointer-events-none transition-transform duration-700 group-hover:scale-110" />
          
          <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-10 transition-transform duration-500 group-hover:bg-white/15">
            <UserPlus weight="duotone" size={36} />
          </div>
          
          <h3 className="text-4xl lg:text-5xl font-black mb-6 leading-tight max-w-[12ch]">
            Join Our <span className="text-[#1A3C34]">Team</span>
          </h3>
          
          <p className="text-white/85 mb-12 text-lg leading-relaxed max-w-md font-medium">
            Drive with purpose. Help individuals in your community stay
            connected and independent. Make a difference every day.
          </p>
          
          <motion.a
            href="mailto:futrans25@gmail.com?subject=Job Application"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-3 bg-[#1A3C34] text-white px-10 py-5 rounded-2xl font-bold text-lg transition-colors hover:bg-white hover:text-[#1A3C34] mt-auto w-full md:w-auto"
          >
            Apply Now <ArrowRight weight="bold" size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
