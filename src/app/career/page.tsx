"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Heart,
  Users,
  Envelope,
  Phone,
  ArrowRight,
  FileText,
  CircleNotch,
} from "@phosphor-icons/react";

const benefits = [
  {
    title: "Competitive Pay",
    description:
      "Fair wages with opportunities for advancement and regular hours.",
    icon: Briefcase,
  },
  {
    title: "Training & Support",
    description: "Comprehensive training and ongoing support from our team.",
    icon: GraduationCap,
  },
  {
    title: "Meaningful Work",
    description:
      "Help clients maintain independence and access essential services.",
    icon: Heart,
  },
  {
    title: "Supportive Culture",
    description:
      "Join a team that values respect, communication, and collaboration.",
    icon: Users,
  },
];

export default function CareerPage() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[#FAFAF8] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-lime/5 -z-0 rounded-l-[100px]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl lg:text-7xl font-black mb-6 leading-tight">
              Join Our Team And{" "}
              <span className="text-brand-lime">Make a Difference</span>
            </h1>
            <p className="text-xl text-text-muted mb-10 leading-relaxed font-medium">
              Drive with Purpose. Make a Difference Every Day.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits & Info Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 gap-24 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="max-w-3xl mb-16">
                <h2 className="text-4xl lg:text-6xl font-black mb-8">
                  Why Work With Us?
                </h2>
                <p className="text-xl text-text-muted leading-relaxed font-medium">
                  At Future Transportation, you're more than just a
                  driver—you're a vital link in our clients' daily lives. We
                  value compassion, reliability, and professionalism, and we're
                  looking for team members who share our commitment to making
                  transportation accessible and stress-free for everyone.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex flex-col gap-6 group">
                    <div className="w-14 h-14 bg-brand-lime/10 text-brand-lime rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm shadow-brand-lime/5">
                      <benefit.icon weight="duotone" size={32} />
                    </div>
                    <div>
                      <h3 className="font-bold text-2xl mb-3">
                        {benefit.title}
                      </h3>
                      <p className="text-text-muted leading-relaxed font-medium">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-24 grid md:grid-cols-12 gap-12">
                <div className="md:col-span-7">
                  <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                    <FileText
                      weight="duotone"
                      size={32}
                      className="text-brand-lime"
                    />
                    Important Documents
                  </h3>
                  <div className="space-y-6">
                    <p className="text-text-muted text-lg font-medium">
                      Please review these policies before applying:
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <a 
                        href="https://futuretransportion.pages.dev/Driver%20Policy.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 bg-brand-primary text-white border border-transparent px-8 py-4 rounded-2xl text-base font-bold hover:bg-brand-primary-hover transition-all group"
                      >
                        Driver Policy
                        <ArrowRight
                          size={18}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </a>
                      <a 
                        href="https://futuretransportion.pages.dev/Office%20Staff%20Policy.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 bg-[#FAFAF8] border border-border px-8 py-4 rounded-2xl text-base font-bold hover:border-brand-lime transition-all group"
                      >
                        Office Staff Policy
                        <ArrowRight
                          size={18}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-5">
                  <h3 className="text-2xl font-bold mb-8">Other ways to apply:</h3>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 text-xl font-bold text-foreground hover:text-brand-lime transition-colors group cursor-pointer">
                      <div className="w-12 h-12 bg-[#FAFAF8] rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform border border-border">
                        <Envelope
                          weight="duotone"
                          size={24}
                          className="text-brand-lime"
                        />
                      </div>
                      <a href="mailto:info@futrans.us">
                        info@futrans.us
                      </a>
                    </div>
                    <div className="flex items-center gap-4 text-xl font-bold text-foreground hover:text-brand-lime transition-colors group cursor-pointer">
                      <div className="w-12 h-12 bg-[#FAFAF8] rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform border border-border">
                        <Phone
                          weight="duotone"
                          size={24}
                          className="text-brand-lime"
                        />
                      </div>
                      <a href="tel:6128889966">(612)-888-9966</a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-24" id="apply">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-12">
              <h2 className="text-4xl lg:text-6xl font-black mb-6">
                Apply Online Today
              </h2>
              <p className="text-xl text-text-muted leading-relaxed font-medium max-w-2xl">
                Fill out the secure form below to submit your application. We
                prioritize review of online submissions.
              </p>
            </div>

            <div className="relative min-h-[900px] w-full rounded-[40px] overflow-hidden bg-[#FAFAF8] border border-border">
              {isLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 z-10 bg-white/90 backdrop-blur-md">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 1,
                      ease: "linear",
                    }}
                    className="text-brand-lime"
                  >
                    <CircleNotch size={64} weight="bold" />
                  </motion.div>
                  <p className="text-lg font-bold text-foreground tracking-tight">
                    Preparing secure form...
                  </p>
                </div>
              )}

              <iframe
                title="Career Application Form"
                src="https://form.jotform.com/253218022551144"
                width="100%"
                height="1000"
                frameBorder="0"
                allowFullScreen={true}
                loading="lazy"
                onLoad={() => setIsLoading(false)}
                style={{ border: "none", display: "block" }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
