"use client";

import React from "react";
import { motion } from "framer-motion";
import { CalendarPlus, UserPlus, ArrowRight } from "@phosphor-icons/react";

export default function CTA() {
  return (
    <section id="referral" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-primary/5 -z-10 rounded-l-[200px] hidden lg:block" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-lime/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Referral Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-brand-primary text-white p-12 rounded-[48px] shadow-2xl relative overflow-hidden flex flex-col items-center text-center group"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-[100px] -z-0 transition-all group-hover:scale-110" />
          <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center mb-8 relative z-10 transition-transform group-hover:rotate-12">
            <CalendarPlus weight="duotone" size={48} />
          </div>
          <h3 className="text-3xl font-bold mb-6 relative z-10">
            Make a Referral
          </h3>
          <p className="text-white/70 mb-10 text-lg leading-relaxed relative z-10">
            Send us your client information to start the coordination process
            and secure reliable transportation today.
          </p>
          <a
            href="mailto:futrans25@gmail.com?subject=Referral Request"
            className="flex items-center justify-center gap-2 bg-white text-brand-primary px-10 py-5 rounded-2xl font-bold text-xl hover:bg-brand-lime hover:text-white transition-all hover:scale-105 active:scale-95 shadow-xl w-full"
          >
            Start Referral <ArrowRight weight="bold" size={24} />
          </a>
        </motion.div>

        {/* Career/Contact Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-brand-lime text-white p-12 rounded-[48px] shadow-2xl relative overflow-hidden flex flex-col items-center text-center group"
        >
          <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-br-[100px] -z-0 transition-all group-hover:scale-110" />
          <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center mb-8 relative z-10 transition-transform group-hover:-rotate-12">
            <UserPlus weight="duotone" size={48} />
          </div>
          <h3 className="text-3xl font-bold mb-6 relative z-10">
            Join Our Team
          </h3>
          <p className="text-white/70 mb-10 text-lg leading-relaxed relative z-10">
            Drive with purpose. Help individuals in your community stay
            connected and independent. Make a difference every day.
          </p>
          <a
            href="mailto:futrans25@gmail.com?subject=Job Application"
            className="flex items-center justify-center gap-2 bg-white text-brand-lime px-10 py-5 rounded-2xl font-bold text-xl hover:bg-brand-primary hover:text-white transition-all hover:scale-105 active:scale-95 shadow-xl w-full"
          >
            Apply Now <ArrowRight weight="bold" size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
