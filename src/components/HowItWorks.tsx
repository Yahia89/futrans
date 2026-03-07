"use client";

import React from "react";
import { motion } from "framer-motion";
import { FilePlus, UserGear, Clock, ArrowRight } from "@phosphor-icons/react";

const steps = [
  {
    title: "Submit a Referral",
    description:
      "Complete our simple online referral form with your client information to get started.",
    icon: FilePlus,
    color: "bg-brand-lime text-white",
  },
  {
    title: "Add Care Provider",
    description:
      "Work with your care coordinator to add Future Transportation to your approved provider list.",
    icon: UserGear,
    color: "bg-brand-primary text-white",
  },
  {
    title: "Schedule Your Ride",
    description:
      "Contact us 24–48 hours ahead to set up your schedule. We also handle urgent needs when possible.",
    icon: Clock,
    color: "bg-foreground text-white",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-24 bg-surface-muted relative overflow-hidden"
    >
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-24 bg-white -skew-y-3 origin-top-left -translate-y-12" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold mb-6"
          >
            Getting Started is <span className="text-brand-lime">Simple.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-text-muted"
          >
            Three easy steps to reliable, professional transportation.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-[60px] left-[15%] right-[15%] h-1 bg-border/50 border-t-2 border-dashed border-border -z-10" />

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center group"
            >
              <div className="relative inline-block mb-8">
                <div
                  className={`w-24 h-24 rounded-full ${step.color} flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform relative z-10`}
                >
                  <step.icon weight="duotone" size={48} />
                </div>
                <div className="absolute -top-4 -right-4 w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center font-bold text-lg text-brand-lime border border-border">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-text-muted leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-20 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-brand-lime font-bold text-lg group hover:gap-4 transition-all"
          >
            Have more questions? Contact our team{" "}
            <ArrowRight size={24} weight="bold" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
