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

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="bg-brand-primary text-white pt-24 pb-12 overflow-hidden border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-12 mb-16 relative">
          {/* Logo and About */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 group mb-8">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-primary font-bold text-2xl group-hover:scale-110 transition-transform">
                F
              </div>
              <span className="font-bold text-2xl tracking-tighter uppercase">
                Future <span className="text-brand-lime">Transportation</span>
              </span>
            </Link>
            <p className="text-lg text-white/70 max-w-sm leading-relaxed mb-8">
              We strengthen independence and support daily living through
              reliable, professional, and on-time medical transportation.
            </p>
            <div className="flex gap-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer group"
                >
                  <ShareNetwork
                    weight="duotone"
                    size={20}
                    className="group-hover:rotate-12 transition-transform"
                  />
                </div>
              ))}
            </div>
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
                href="#services"
                className="hover:text-white hover:translate-x-2 transition-all"
              >
                Services
              </Link>
              <Link
                href="#about"
                className="hover:text-white hover:translate-x-2 transition-all"
              >
                About Us
              </Link>
              <Link
                href="#how-it-works"
                className="hover:text-white hover:translate-x-2 transition-all"
              >
                How It Works
              </Link>
              <a
                href="tel:6128889966"
                className="hover:text-white hover:translate-x-2 transition-all font-bold text-white"
              >
                (612)-888-9966
              </a>
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
              <div className="flex items-start gap-4 text-white/70 hover:text-white transition-colors">
                <Clock
                  weight="duotone"
                  size={28}
                  className="shrink-0 text-brand-lime"
                />
                <div>
                  <p className="font-bold text-white">7 Days a Week</p>
                  <p>6:00 AM – 8:00 PM</p>
                </div>
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
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:row items-center justify-between gap-6 text-sm text-white/50">
          <p>© {currentYear} Future Transportation. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
