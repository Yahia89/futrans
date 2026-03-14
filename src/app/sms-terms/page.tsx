"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { 
  ChatCenteredText, 
  Clock, 
  CurrencyDollar, 
  Prohibit, 
  Lifebuoy, 
  ShieldCheck, 
  FileText,
  CheckCircle,
  Envelope,
  Phone,
  MapPin,
  ArrowRight
} from "@phosphor-icons/react";
import Link from "next/link";

const smsSections = [
  {
    id: "types",
    title: "1. Types of Messages You May Receive",
    icon: ChatCenteredText,
    items: [
      "Ride confirmations",
      "Pickup and drop-off updates",
      "Schedule changes",
      "Service alerts",
      "Appointment reminders",
      "Account or billing notifications",
      "Customer support messages"
    ]
  },
  {
    id: "frequency",
    title: "2. Messaging Frequency",
    icon: Clock,
    content: "Messaging frequency may vary depending on your ride schedule, service needs, or account activity."
  },
  {
    id: "rates",
    title: "3. Message & Data Rates",
    icon: CurrencyDollar,
    content: "Message and data rates may apply depending on your mobile carrier plan."
  },
  {
    id: "opt-out",
    title: "4. Opt-Out Instructions",
    icon: Prohibit,
    content: "You may opt out of SMS messages at any time by replying: STOP",
    note: "After opting out, you will no longer receive text messages from Future Transportation LLC unless you opt in again."
  },
  {
    id: "help",
    title: "5. Help & Support",
    icon: Lifebuoy,
    content: "For assistance, reply: HELP",
    contactItems: [
      { icon: Envelope, label: "Email", value: "futrans25@gmail.com", href: "mailto:futrans25@gmail.com" },
      { icon: Phone, label: "Phone", value: "612-888-9966", href: "tel:6128889966" },
      { icon: MapPin, label: "Address", value: "151 Silver Lake Rd NW, Unit #5, St Paul, MN 55112" }
    ]
  },
  {
    id: "privacy",
    title: "6. Privacy Policy",
    icon: ShieldCheck,
    content: "Your privacy is important to us. To learn how we collect, use, and protect your information, please visit our Privacy Policy.",
    link: { label: "View Privacy Policy", href: "/privacy-policy" },
    note: "SMS consent is not shared with third parties."
  },
  {
    id: "terms",
    title: "7. Terms of Service",
    icon: FileText,
    content: "For full Terms of Service and Operational Policies, please visit our Company Policy page.",
    link: { label: "View Company Policy", href: "/company-policy" }
  }
];

export default function SMSTermsPage() {
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
            className="max-w-4xl"
          >
            <h1 className="text-4xl lg:text-7xl font-black mb-6 leading-tight">
              SMS <span className="text-brand-lime">Terms</span>
            </h1>
            <p className="text-xl text-text-muted mb-4 leading-relaxed font-medium">
              Terms & Conditions for text messaging communications.
            </p>
            <p className="text-sm text-text-muted/60 font-bold uppercase tracking-widest">
              Last Updated: December 22, 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mb-16">
            <p className="text-xl text-text-muted leading-relaxed font-medium">
              These SMS Terms & Conditions explain how Future Transportation LLC (“we,” “our,” or “us”) uses text messaging to communicate with clients and staff. By providing your mobile number and opting in to SMS communication, you agree to the terms below.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-20">
            {smsSections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group pb-16 border-b border-border/50 last:border-0"
              >
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-16 h-16 bg-brand-lime/10 text-brand-lime rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <section.icon weight="duotone" size={32} />
                  </div>
                  
                  <div className="flex-1">
                    <h2 className="text-2xl font-black mb-6">{section.title}</h2>
                    
                    {section.content && (
                      <p className="text-lg text-text-muted leading-relaxed font-medium max-w-4xl mb-6">
                        {section.content}
                      </p>
                    )}

                    {section.items && (
                      <ul className="grid sm:grid-cols-2 gap-4 max-w-4xl">
                        {section.items.map((item, i) => (
                          <li key={i} className="flex gap-3 text-lg text-text-muted font-medium items-center">
                            <CheckCircle weight="bold" size={20} className="text-brand-lime" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.contactItems && (
                      <div className="grid sm:grid-cols-3 gap-6 mt-8">
                        {section.contactItems.map((contact, i) => (
                          <div key={i} className="p-6 bg-[#FAFAF8] rounded-2xl border border-border group/contact hover:border-brand-lime transition-all">
                            <contact.icon weight="duotone" size={24} className="text-brand-lime mb-3" />
                            <p className="text-sm font-bold text-text-muted mb-1 uppercase tracking-tight">{contact.label}</p>
                            {contact.href ? (
                              <a href={contact.href} className="text-base font-bold break-all hover:text-brand-lime">
                                {contact.value}
                              </a>
                            ) : (
                              <p className="text-base font-bold">{contact.value}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {section.link && (
                      <Link 
                        href={section.link.href}
                        className="inline-flex items-center gap-2 text-brand-primary font-black text-lg hover:text-brand-lime transition-colors group/link"
                      >
                        {section.link.label}
                        <ArrowRight weight="bold" className="group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    )}

                    {section.note && (
                      <p className="mt-6 p-4 bg-brand-lime/5 border-l-4 border-brand-lime text-text-muted font-medium rounded-r-xl">
                        {section.note}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

