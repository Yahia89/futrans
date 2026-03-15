"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* ── Transition: Dark CTA → Footer ── */}
      <section className="relative bg-[#1a2e1a] overflow-hidden">
        {/* Organic aurora / glow effect */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Central glow */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] rounded-full blur-[120px] opacity-60"
            style={{
              background:
                "radial-gradient(ellipse, #65a30d 0%, #3d5a3d 40%, transparent 70%)",
            }}
          />
          {/* Left warm accent */}
          <div
            className="absolute -bottom-20 left-[10%] w-[500px] h-[300px] rounded-full blur-[100px] opacity-30"
            style={{
              background:
                "radial-gradient(ellipse, #a3d977 0%, transparent 70%)",
            }}
          />
          {/* Right warm accent */}
          <div
            className="absolute -bottom-20 right-[10%] w-[500px] h-[300px] rounded-full blur-[100px] opacity-30"
            style={{
              background:
                "radial-gradient(ellipse, #7cb342 0%, transparent 70%)",
            }}
          />
        </div>

        {/* CTA Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-32 pb-40 md:pt-40 md:pb-52">
          <h2 className="text-white text-3xl md:text-5xl lg:text-[56px] font-bold leading-[1.15] tracking-tight max-w-2xl">
            Your ride to better health starts here.
          </h2>
          <div className="mt-10">
            <Link
              href="/referral"
              className="inline-flex items-center gap-4 bg-[#e8f0dc] text-[#1a2e1a] px-8 py-4 rounded-full text-[15px] font-semibold hover:bg-white transition-colors duration-300 group"
            >
              Make a Referral
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Wavy organic separator */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0]">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto block"
            preserveAspectRatio="none"
          >
            <path
              d="M0 120 L0 80 Q180 20 360 60 Q540 100 720 50 Q900 0 1080 40 Q1260 80 1440 30 L1440 120Z"
              fill="#edf2e4"
            />
            <path
              d="M0 120 L0 90 Q200 50 400 75 Q600 100 800 60 Q1000 20 1200 55 Q1350 75 1440 50 L1440 120Z"
              fill="#edf2e4"
              opacity="0.5"
            />
          </svg>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer
        id="contact"
        className="relative overflow-hidden"
        style={{ backgroundColor: "#edf2e4" }}
      >
        {/* Content */}
        <div className="relative z-10 max-w-[1280px] mx-auto px-8 md:px-12 pt-20 pb-16">
          {/* Top Row: Logo + Link Columns */}
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-0">
            {/* Logo / Brand */}
            <div className="lg:w-[340px] shrink-0">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="relative w-10 h-10 rounded-xl overflow-hidden">
                  <Image
                    src="/logo.png"
                    alt="Future Transportation"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="font-bold text-lg text-[#1a2e1a] tracking-tight">
                  Future Transportation
                </span>
              </Link>
            </div>

            {/* Link Columns */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 flex-1">
              {/* Navigation */}
              <div>
                <h4 className="text-[13px] text-[#1a2e1a]/50 font-medium mb-6">
                  Navigation
                </h4>
                <ul className="space-y-4">
                  <li>
                    <Link
                      href="/referral"
                      className="text-[15px] text-[#1a2e1a] hover:text-[#65a30d] transition-colors"
                    >
                      Make a Referral
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#services"
                      className="text-[15px] text-[#1a2e1a] hover:text-[#65a30d] transition-colors"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#faq"
                      className="text-[15px] text-[#1a2e1a] hover:text-[#65a30d] transition-colors"
                    >
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/career"
                      className="text-[15px] text-[#1a2e1a] hover:text-[#65a30d] transition-colors"
                    >
                      Careers
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Service Areas */}
              <div>
                <h4 className="text-[13px] text-[#1a2e1a]/50 font-medium mb-6">
                  Service Areas
                </h4>
                <ul className="space-y-4">
                  <li>
                    <Link
                      href="/locations/hennepin-county"
                      className="text-[15px] text-[#1a2e1a] hover:text-[#65a30d] transition-colors"
                    >
                      Hennepin County
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/locations/ramsey-county"
                      className="text-[15px] text-[#1a2e1a] hover:text-[#65a30d] transition-colors"
                    >
                      Ramsey County
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/locations/dakota-county"
                      className="text-[15px] text-[#1a2e1a] hover:text-[#65a30d] transition-colors"
                    >
                      Dakota County
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/locations/anoka-county"
                      className="text-[15px] text-[#1a2e1a] hover:text-[#65a30d] transition-colors"
                    >
                      Anoka County
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/locations/washington-county"
                      className="text-[15px] text-[#1a2e1a] hover:text-[#65a30d] transition-colors"
                    >
                      Washington County
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h4 className="text-[13px] text-[#1a2e1a]/50 font-medium mb-6">
                  Legal
                </h4>
                <ul className="space-y-4">
                  <li>
                    <Link
                      href="/privacy-policy"
                      className="text-[15px] text-[#1a2e1a] hover:text-[#65a30d] transition-colors"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/sms-terms"
                      className="text-[15px] text-[#1a2e1a] hover:text-[#65a30d] transition-colors"
                    >
                      Terms of Use
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/company-policy"
                      className="text-[15px] text-[#1a2e1a] hover:text-[#65a30d] transition-colors"
                    >
                      Company Policy
                    </Link>
                  </li>
                  <li>
                    <a
                      href="https://futuretransportion.pages.dev/Driver%20Policy.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[15px] text-[#1a2e1a] hover:text-[#65a30d] transition-colors"
                    >
                      Driver Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://futuretransportion.pages.dev/Office%20Staff%20Policy.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[15px] text-[#1a2e1a] hover:text-[#65a30d] transition-colors"
                    >
                      Office Staff Policy
                    </a>
                  </li>
                </ul>
              </div>

              {/* Connect */}
              <div>
                <h4 className="text-[13px] text-[#1a2e1a]/50 font-medium mb-6">
                  Connect
                </h4>
                <ul className="space-y-4">
                  <li>
                    <a
                      href="tel:6128889966"
                      className="text-[15px] text-[#1a2e1a] hover:text-[#65a30d] transition-colors"
                    >
                      (612)-888-9966
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:info@futrans.us"
                      className="text-[15px] text-[#1a2e1a] hover:text-[#65a30d] transition-colors"
                    >
                      info@futrans.us
                    </a>
                  </li>
                  <li>
                    <span className="text-[15px] text-[#1a2e1a]/70 leading-relaxed block">
                      151 Silver Lake RD NW
                      <br />
                      Unit #5, St Paul, MN 55112
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: Copyright + Giant Watermark */}
        <div className="relative z-10 max-w-[1280px] mx-auto px-8 md:px-12 pb-8">
          <div className="pt-12">
            <p className="text-[13px] text-[#1a2e1a]/40 font-medium">
              © {currentYear} Future Transportation, Inc. All rights reserved.
            </p>
          </div>
        </div>

        {/* Giant Brand Watermark */}
        <div className="relative z-0 max-w-[1280px] mx-auto px-4 md:px-8 overflow-hidden select-none pointer-events-none">
          <div
            className="text-[#1a2e1a] leading-[0.85] font-black uppercase tracking-[-0.04em]"
            style={{
              fontSize: "clamp(80px, 12vw, 180px)",
              opacity: 0.06,
              marginBottom: "-0.15em",
            }}
          >
            <span className="block">Future</span>
            <span className="block">Transportation</span>
          </div>
        </div>
      </footer>
    </>
  );
}
