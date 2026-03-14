"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { 
  Info, 
  CreditCard, 
  Calendar, 
  UserMinus, 
  ShieldCheck, 
  IdentificationBadge, 
  MapPin, 
  ChatCenteredText, 
  Warning, 
  Bell,
  CheckCircle,
  XCircle
} from "@phosphor-icons/react";

const policies = [
  {
    id: "purpose",
    title: "1. Purpose",
    icon: Info,
    content: "Future Transportation LLC is committed to providing safe, reliable, and professional transportation services for seniors, individuals with disabilities, and community members across the Twin Cities metro and all 87 Minnesota counties. These policies ensure consistent service quality, safety, and accountability for all clients, agencies, and partners."
  },
  {
    id: "payment",
    title: "2. Payment Policy",
    icon: CreditCard,
    subsections: [
      {
        subtitle: "2.1 Timely Payment Requirement",
        items: [
          "All invoices must be paid within 7 business days of receipt.",
          "Services for the affected client will be paused immediately if not paid.",
          "No new rides will be scheduled until balance is cleared.",
          "Future Transportation LLC reserves the right to discontinue partnership with agencies that repeatedly delay payments."
        ]
      },
      {
        subtitle: "2.2 Non-Payment or Repeated Issues",
        items: [
          "Decline future referrals",
          "Terminate the service relationship",
          "Require pre-payment for any future rides"
        ]
      }
    ]
  },
  {
    id: "scheduling",
    title: "3. Scheduling Policy",
    icon: Calendar,
    items: [
      "3.1 Ride Requests: All rides must be scheduled at least 24 hours in advance unless otherwise approved.",
      "3.2 Same-Day Requests: Same-day rides are not guaranteed and depend on availability.",
      "3.3 Pickup Window: Drivers may arrive 10 minutes before or after the scheduled pickup time."
    ]
  },
  {
    id: "cancellation",
    title: "4. Cancellation & No-Show Policy",
    icon: UserMinus,
    items: [
      "4.1 Cancellations: Must be made at least 2 hours before the scheduled pickup time.",
      "4.2 No-Shows: A client is considered a no-show if: The driver arrives and the client is not present OR The driver waits 10 minutes with no response.",
      "Note: No-shows may be billed at the full trip rate."
    ]
  },
  {
    id: "safety",
    title: "5. Safety Policy",
    icon: ShieldCheck,
    items: [
      "5.1 Seatbelts: All clients must wear seatbelts unless medically exempt.",
      "5.2 Wheelchair Securement: All mobility devices must be properly secured before transport.",
      "5.3 Behavior & Conduct: Drivers and clients must maintain respectful, professional behavior at all times. Aggressive or unsafe behavior may result in service termination."
    ]
  },
  {
    id: "driver",
    title: "6. Driver Conduct & Requirements",
    icon: IdentificationBadge,
    items: [
      "Maintain a valid driver’s license, insurance, and vehicle registration.",
      "Pass background checks as required.",
      "Follow all company procedures and report incidents immediately.",
      "Maintain clean, safe, and reliable vehicles."
    ]
  },
  {
    id: "service-area",
    title: "7. Service Area",
    icon: MapPin,
    items: [
      "The Twin Cities metro & All 87 Minnesota counties",
      "Medicaid waiver clients & NEMT clients",
      "Employment support programs",
      "County agencies and case managers"
    ]
  },
  {
    id: "communication",
    title: "8. Communication Policy",
    icon: ChatCenteredText,
    items: [
      "8.1 SMS Notifications: Clients may receive text messages for confirmations, arrival alerts, and updates.",
      "8.2 Opt-out: Reply STOP to opt out of SMS notifications.",
      "8.3 Professionalism: All communication must remain respectful and professional."
    ]
  },
  {
    id: "refusal",
    title: "9. Service Refusal",
    icon: Warning,
    items: [
      "Payment issues remain unresolved.",
      "A client poses a safety risk or engages in abusive behavior.",
      "An agency repeatedly violates scheduling or payment policies."
    ]
  },
  {
    id: "updates",
    title: "10. Policy Updates",
    icon: Bell,
    content: "Future Transportation LLC may update these policies at any time. Agencies and clients will be notified of major changes."
  }
];

export default function CompanyPolicyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[#FAFAF8] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-primary/5 -z-0 rounded-l-[100px]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl lg:text-7xl font-black mb-6 leading-tight">
              Company <span className="text-brand-lime">Policy</span>
            </h1>
            <p className="text-xl text-text-muted mb-10 leading-relaxed font-medium">
              Future Transportation LLC standard operating procedures, payment terms, and safety guidelines.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-1 gap-16">
            {policies.map((policy, index) => (
              <motion.div
                key={policy.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group border-b border-border/50 pb-16 last:border-0"
              >
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-16 h-16 bg-brand-lime/10 text-brand-lime rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <policy.icon weight="duotone" size={32} />
                  </div>
                  
                  <div className="flex-1">
                    <h2 className="text-3xl font-black mb-6">{policy.title}</h2>
                    
                    {policy.content && (
                      <p className="text-lg text-text-muted leading-relaxed font-medium max-w-4xl">
                        {policy.content}
                      </p>
                    )}

                    {policy.items && (
                      <ul className="space-y-4 max-w-4xl">
                        {policy.items.map((item, i) => (
                          <li key={i} className="flex gap-3 text-lg text-text-muted leading-relaxed font-medium">
                            <CheckCircle weight="bold" size={24} className="text-brand-lime shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}

                    {policy.subsections && (
                      <div className="space-y-10 mt-6">
                        {policy.subsections.map((sub, i) => (
                          <div key={i}>
                            <h3 className="text-xl font-bold mb-4 text-brand-primary">{sub.subtitle}</h3>
                            <ul className="space-y-4">
                              {sub.items.map((item, j) => (
                                <li key={j} className="flex gap-3 text-lg text-text-muted leading-relaxed font-medium">
                                  {sub.subtitle.includes("Issues") ? (
                                    <XCircle weight="bold" size={24} className="text-red-500 shrink-0 mt-0.5" />
                                  ) : (
                                    <CheckCircle weight="bold" size={24} className="text-brand-lime shrink-0 mt-0.5" />
                                  )}
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
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

