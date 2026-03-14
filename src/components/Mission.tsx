"use client";


import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Heart, Sparkle } from "@phosphor-icons/react";

export default function Mission() {
  const highlights = [
    {
      title: "Safe & Timely",
      icon: ShieldCheck,
      desc: "Trained drivers and regularly maintained vehicles.",
    },
    {
      title: "Caring Approach",
      icon: Heart,
      desc: "We treat every passenger with respect and dignity.",
    },
    {
      title: "Strengthening Independence",
      icon: Sparkle,
      desc: "Every trip is a step toward community connection.",
    },
  ];

  return (
    <section id="about" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-lime/10 rounded-full blur-3xl -z-10" />
            <div className="rounded-[48px] overflow-hidden shadow-2xl skew-y-1">
              <Image
                src="/mission.png"
                alt="Personalized care planning"
                width={800}
                height={800}
                className="object-cover"
              />
            </div>
            {/* Stats Overlay */}
            <div className="absolute -bottom-10 -right-10 bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-white/50 max-w-[200px] z-20">
              <p className="text-4xl font-bold text-brand-lime mb-1">7+</p>
              <p className="text-sm font-semibold text-foreground leading-tight">
                Counties Served in Minnesota
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              Our Mission is{" "}
              <span className="text-brand-lime">Your Independence.</span>
            </h2>
            <p className="text-xl text-text-muted mb-8 leading-relaxed">
              We work closely with case managers, families, and support staff to
              create personalized transportation plans. Our goal is simple: to
              make every trip predictable, stress-free, and supportive of your
              daily living.
            </p>

            <div className="space-y-6">
              {highlights.map((item, i) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 p-4 rounded-2xl hover:bg-surface-muted transition-colors border border-transparent hover:border-border"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-primary/5 text-brand-primary flex items-center justify-center shrink-0">
                    <item.icon weight="duotone" size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <p className="text-text-muted">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
