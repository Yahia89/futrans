"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Ambulance,
  Wheelchair,
  UsersThree,
  MapPin,
  Briefcase,
  FirstAidKit,
} from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Medical Appointments",
    description:
      "Reliable transport for dialysis, therapy, follow-ups, and specialized medical visits.",
    icon: Ambulance,
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    title: "Wheelchair Accessible",
    description:
      "Our modern fleet includes fully equipped wheelchair-accessible vehicles for maximum comfort.",
    icon: Wheelchair,
    color: "bg-brand-lime/10 text-brand-lime",
  },
  {
    title: "Community & Day Programs",
    description:
      "Stay connected with transport to community activities, day programs, and social events.",
    icon: UsersThree,
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    title: "Employment Support",
    description:
      "Consistent and punctual rides to help you maintain your career and employment goals.",
    icon: Briefcase,
    color: "bg-indigo-500/10 text-indigo-600",
  },
  {
    title: "Seven-County Metro Area",
    description:
      "We serve the entire Twin Cities metro area, ensuring you get where you need to go.",
    icon: MapPin,
    color: "bg-emerald-500/10 text-emerald-600",
  },
  {
    title: "Waiver-Based NEMT",
    description:
      "Expert coordination with all major MN waiver programs (CADI, BI, EW, DD).",
    icon: FirstAidKit,
    color: "bg-rose-500/10 text-rose-600",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-surface-muted">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
              Built for <span className="text-brand-lime">Your Needs.</span>
            </h2>
            <p className="text-xl text-text-muted mb-8 leading-relaxed max-w-xl">
              We provide more than just a ride. We offer specialized, caring
              transportation tailored to the unique needs of every individual we
              serve. From standard medical visits to complex community-based
              waiver programs.
            </p>
            <div className="flex gap-4">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-brand-primary">
                  100%
                </span>
                <span className="text-sm text-text-muted uppercase tracking-wider">
                  Compassionate
                </span>
              </div>
              <div className="w-px h-12 bg-border mx-4" />
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-brand-lime">24/7</span>
                <span className="text-sm text-text-muted uppercase tracking-wider">
                  Reliable
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-[40px] overflow-hidden shadow-2xl border-4 border-white"
          >
            <Image
              src="/services.jpg"
              alt="Future Transportation at Health Center"
              width={800}
              height={500}
              className="object-cover"
            />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-[32px] border border-border hover:shadow-xl transition-all hover:-translate-y-2 group"
            >
              <div
                className={cn(
                  "w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110",
                  service.color,
                )}
              >
                <service.icon weight="duotone" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-text-muted leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
