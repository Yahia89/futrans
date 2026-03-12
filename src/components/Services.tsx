"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Wheelchair Accessible",
    description:
      "Modern fleet with fully equipped accessible vehicles for maximum comfort.",
    image: "/service-wheelchair.png",
    className: "md:col-span-1 md:row-span-2 bg-[#F3E9DD] text-[#4A3728]",
    imageClass: "w-full aspect-square md:aspect-auto h-full max-h-[400px] object-contain",
    contentClass: "flex flex-col h-full",
    titleClass: "text-3xl lg:text-4xl",
  },
  {
    title: "Medical Appointments",
    description:
      "Reliable transport for dialysis, therapy, follow-ups, and specialized medical visits.",
    image: "/service-medical.png",
    className: "md:col-span-2 md:row-span-1 bg-[#FF8B3D] text-white",
    imageClass: "w-full h-full object-contain pointer-events-none p-4",
    contentClass: "grid md:grid-cols-2 gap-8 items-center h-full",
    titleClass: "text-3xl lg:text-5xl",
  },
  {
    title: "Metro Area Coverage",
    description: "Serving the entire seven-county Twin Cities metro area.",
    image: "/service-metro.png",
    className: "md:col-span-1 md:row-span-1 bg-white text-foreground border border-border/50",
    imageClass: "w-24 h-24 mx-auto mb-6 object-contain",
    contentClass: "flex flex-col items-center justify-center text-center h-full p-8",
  },
  {
    title: "Community Programs",
    description: "Stay connected with transport to local community events.",
    image: "/service-community.png",
    className: "md:col-span-1 md:row-span-1 bg-[#DEE2E6] text-[#2C3E50]",
    imageClass: "w-full h-32 object-contain mb-6",
    contentClass: "flex flex-col items-center justify-center text-center h-full p-8",
  },
  {
    title: "Waiver-Based NEMT",
    description:
      "Expert coordination with all major MN waiver programs (CADI, BI, EW, DD).",
    image: "/service-waiver.png",
    className: "md:col-span-2 md:row-span-1 bg-[#1A1C1E] text-white",
    imageClass: "w-full h-full object-contain pointer-events-none p-4",
    contentClass: "grid md:grid-cols-2 gap-8 items-center h-full",
    titleClass: "text-3xl lg:text-5xl",
  },
  {
    title: "Custom Support",
    description: "Personalized alerts and employment support for your goals.",
    image: "/service-employment.png",
    className: "md:col-span-1 md:row-span-1 bg-[#EAE7DC] text-[#4E4E4E]",
    imageClass: "w-24 h-24 mx-auto mb-6 object-contain",
    contentClass: "flex flex-col items-center justify-center text-center h-full p-8",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-brand-primary/5 text-brand-primary px-4 py-2 rounded-full text-sm font-bold mb-6"
          >
            Everything You Need. All in One Place.
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-6xl font-black text-[#1A1C1E] mb-6 leading-[1.1]"
          >
            Support for Your <span className="text-brand-lime">Independence.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-text-muted max-w-2xl mx-auto"
          >
            Our tools and services are designed to keep you connected, organized,
            and in control of your transportation needs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto md:auto-rows-[300px]">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={cn(
                "relative rounded-[40px] overflow-hidden group flex flex-col p-8 md:p-10",
                service.className
              )}
            >
              <div className={cn("relative z-10 w-full h-full", service.contentClass)}>
                {/* Image Section */}
                <div className={cn("order-2 md:order-none", service.imageClass)}>
                  {service.image && (
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={400}
                      height={400}
                      className="w-full h-full object-contain"
                    />
                  )}
                </div>
                
                {/* Text Section */}
                <div className="order-1 md:order-none flex flex-col justify-center h-full">
                  <h3 className={cn("font-bold mb-4 leading-tight", service.titleClass || "text-2xl")}>
                    {service.title}
                  </h3>
                  <p className="text-base opacity-90 leading-relaxed font-medium">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
