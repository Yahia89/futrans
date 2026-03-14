"use client";

import React from "react";
import {
  Phone,
  Envelope,
  MapPin,
  Clock,
  ShareNetwork,
  SealCheck,
} from "@phosphor-icons/react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="bg-brand-primary text-white pt-24 pb-12 overflow-hidden border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16 relative">
          {/* Logo and About */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 group mb-8">
              <div className="relative w-14 h-14 rounded-2xl overflow-hidden shadow-md border border-white/10 group-hover:scale-110 transition-transform bg-white">
                <Image
                  src="/logo.png"
                  alt="Future Transportation Logo"
                  fill
                  className="object-contain p-1.5"
                />
              </div>
              <span className="font-bold text-2xl tracking-tighter uppercase">
                Future <span className="text-brand-lime">Transportation</span>
              </span>
            </Link>
            <p className="text-lg text-white/70 max-w-sm leading-relaxed mb-8">
              We strengthen independence and support daily living through
              reliable, professional, and on-time medical transportation.
            </p>
          </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold flex items-center gap-2">
                <SealCheck
                  weight="duotone"
                  size={28}
                  className="text-brand-lime"
                />
                Quick Links
              </h4>
              <div className="flex flex-col gap-4 text-white/70">
                <Link
                  href="/referral"
                  className="hover:text-white hover:translate-x-2 transition-all font-bold text-brand-lime"
                >
                  Referral
                </Link>
                <Link
                  href="/career"
                  className="hover:text-white hover:translate-x-2 transition-all"
                >
                  Career
                </Link>
                <Link
                  href="/#services"
                  className="hover:text-white hover:translate-x-2 transition-all"
                >
                  Services
                </Link>
                <Link
                  href="/#faq"
                  className="hover:text-white hover:translate-x-2 transition-all"
                >
                  FAQ
                </Link>
              </div>
            </div>

            {/* Areas Served */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-brand-lime">Areas Served</h4>
              <div className="flex flex-col gap-4 text-white/70">
                <Link href="/locations/hennepin-county" className="hover:text-white hover:translate-x-1 transition-all">Hennepin County</Link>
                <Link href="/locations/ramsey-county" className="hover:text-white hover:translate-x-1 transition-all">Ramsey County</Link>
                <Link href="/locations/dakota-county" className="hover:text-white hover:translate-x-1 transition-all">Dakota County</Link>
                <Link href="/locations/anoka-county" className="hover:text-white hover:translate-x-1 transition-all">Anoka County</Link>
                <Link href="/locations/washington-county" className="hover:text-white hover:translate-x-1 transition-all">Washington County</Link>
              </div>
            </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-brand-lime">Contact Us</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4 text-white/70 hover:text-white transition-colors">
                <MapPin
                  weight="duotone"
                  size={28}
                  className="shrink-0 text-brand-lime"
                />
                <p>
                  151 Silver Lake RD NW <br /> Unit #5, St Paul, MN 55112
                </p>
              </div>
              <div className="flex items-start gap-4 text-white/70 hover:text-white transition-colors group">
                <Envelope
                  weight="duotone"
                  size={28}
                  className="shrink-0 text-brand-lime transition-transform group-hover:scale-110"
                />
                <a href="mailto:futrans25@gmail.com" className="break-all">
                  futrans25@gmail.com
                </a>
              </div>
              <a
                href="tel:6128889966"
                className="flex items-center gap-3 bg-white/10 p-4 rounded-2xl hover:bg-white/20 transition-all font-bold"
              >
                <Phone weight="duotone" size={24} className="text-brand-lime" />
                (612)-888-9966
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:row items-center justify-between gap-6 text-sm text-white/50">
          <p>© {currentYear} Future Transportation. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-8">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/sms-terms" className="hover:text-white transition-colors">
              SMS Terms
            </Link>
            <Link href="/company-policy" className="hover:text-white transition-colors">
              Company Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
