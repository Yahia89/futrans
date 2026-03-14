"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { 
  Database, 
  Gear, 
  UsersThree, 
  ChatCenteredText, 
  LockKey, 
  UserCircleGear, 
  Envelope,
  Phone,
  MapPin,
  CheckCircle,
  Prohibit
} from "@phosphor-icons/react";

const privacySections = [
  {
    id: "collection",
    title: "1. Information We Collect",
    icon: Database,
    items: [
      "Name & Contact Details",
      "Phone Number & Communication Preferences",
      "Pickup and Drop-off Locations",
      "Scheduling & Billing Information",
      "Information provided through forms & SMS",
      "Customer Support interaction data"
    ]
  },
  {
    id: "usage",
    title: "2. How We Use Your Information",
    icon: Gear,
    items: [
      "Provide safe transportation services",
      "Confirm and update ride schedules",
      "Send SMS notifications about pickups/delays",
      "Communicate with clients and staff",
      "Process payments and billing",
      "Improve customer experience & safety",
      "Maintain compliance and legal records"
    ]
  },
  {
    id: "sharing",
    title: "3. Who We Share Information With",
    icon: UsersThree,
    content: "We do not sell or share your personal information with third parties for marketing purposes.",
    subsections: [
      {
        subtitle: "We share only with:",
        items: [
          "Secure service providers (e.g., payment processors)",
          "Government agencies (when legally required)",
          "Staff members essential for ride performance"
        ]
      }
    ],
    note: "SMS consent is not shared with third parties."
  },
  {
    id: "sms",
    title: "4. SMS Communication Policy",
    icon: ChatCenteredText,
    content: "By providing your phone number, you agree to receive SMS regarding confirmations, schedule changes, and alerts.",
    note: "You may opt out at any time by replying STOP. Your SMS consent is used solely for Future Transportation LLC communication and is not shared with affiliates.",
    actionIcon: Prohibit
  },
  {
    id: "protection",
    title: "5. Data Protection",
    icon: LockKey,
    content: "We take reasonable administrative, technical, and physical measures to protect your personal information from unauthorized access, misuse, or disclosure."
  },
  {
    id: "rights",
    title: "6. Your Rights",
    icon: UserCircleGear,
    items: [
      "Update or correct your personal information",
      "Access the personal data we hold about you",
      "Opt out of any SMS communication",
      "Request deletion (subject to legal/operational requirements)"
    ]
  },
  {
    id: "contact",
    title: "7. Contact Us",
    icon: Envelope,
    content: "If you have questions about this Privacy Policy or how your information is handled, please reach out to our team:",
    contactItems: [
      { icon: Envelope, label: "Email", value: "info@futrans.us", href: "mailto:info@futrans.us" },
      { icon: Phone, label: "Phone", value: "612-888-9966", href: "tel:6128889966" },
      { icon: MapPin, label: "Address", value: "151 Silver Lake Rd NW, Unit #5, St Paul, MN 55112" }
    ]
  }
];

export default function PrivacyPolicyPage() {
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
              Privacy <span className="text-brand-lime">Policy</span>
            </h1>
            <p className="text-xl text-text-muted mb-4 leading-relaxed font-medium">
              We are committed to protecting your data and your privacy.
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
              This Privacy Policy explains what personal information we collect, how we use it, and how we protect your data. By using our services, website, or SMS communication, you agree to the terms of this policy.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-20">
            {privacySections.map((section, index) => (
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

                    {section.subsections && (
                      <div className="space-y-6 mt-4">
                        {section.subsections.map((sub, i) => (
                          <div key={i}>
                            <h3 className="text-base font-bold text-brand-primary mb-3">{sub.subtitle}</h3>
                            <ul className="space-y-3">
                              {sub.items.map((item, j) => (
                                <li key={j} className="flex gap-3 text-text-muted font-medium">
                                  <CheckCircle weight="bold" size={18} className="text-brand-lime mt-1" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
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

