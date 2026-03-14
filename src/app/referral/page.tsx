"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { 
  Users, 
  Lightning, 
  ShieldCheck, 
  Clock,
  CircleNotch,
  ArrowRight,
  HandPointing
} from "@phosphor-icons/react";

const referralBenefits = [
  {
    title: "Fast Intake Processing",
    description: "We review and process most referrals within 24 hours to ensure seamless continuity of care.",
    icon: Lightning,
  },
  {
    title: "Waiver Program Experts",
    description: "Deep expertise in Minnesota's HCBS waiver programs, including EW, CADI, and TBI.",
    icon: ShieldCheck,
  },
  {
    title: "Dedicated Case Manager Support",
    description: "We work closely with case managers and social workers to coordinate reliable patient transport.",
    icon: Users,
  },
  {
    title: "7-Day Operations",
    description: "Our team operates every day from 6:00 AM to 8:00 PM to assist with urgent needs.",
    icon: Clock,
  },
];

export default function ReferralPage() {
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
              Submit a <span className="text-brand-lime">Client Referral</span>
            </h1>
            <p className="text-xl text-text-muted mb-10 leading-relaxed font-medium">
              We make the transition easy for case managers, healthcare providers, and families. Professional NEMT support across the Twin Cities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Content */}
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
                  Streamlined Solutions
                </h2>
                <p className="text-xl text-text-muted leading-relaxed font-medium">
                  Future Transportation provides compassionate, timely, and safe transportation for clients enrolled in waiver-related programs. We handle the logistics so you can focus on care.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
                {referralBenefits.map((benefit, index) => (
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

              {/* Call to Action Small */}
              <div className="mt-24 p-10 bg-brand-primary text-white rounded-[40px] flex flex-col md:flex-row items-center justify-between gap-8 border border-white/5 shadow-2xl">
                <div className="max-w-xl">
                  <h3 className="text-3xl font-bold mb-4">Need help with the form?</h3>
                  <p className="text-white/70 text-lg">
                    Contact our intake coordinator directly for manual referrals or to confirm county coverage.
                  </p>
                </div>
                <a 
                  href="tel:6128889966"
                  className="bg-white text-brand-primary px-8 py-4 rounded-2xl font-black text-lg hover:bg-brand-lime transition-all flex items-center gap-3 shrink-0"
                >
                  Call (612)-888-9966
                  <ArrowRight weight="bold" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24" id="referral-form">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-12">
              <h2 className="text-4xl lg:text-6xl font-black mb-6">
                Referral Form
              </h2>
              <p className="text-xl text-text-muted leading-relaxed font-medium max-w-2xl">
                Please provide detailed information about the client and the referrer to facilitate the referral process. All data is handled securely.
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
                title="Referral Form" 
                src="https://form.jotform.com/253155445484057" 
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

