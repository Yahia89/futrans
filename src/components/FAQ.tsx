"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CaretDown, Question } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Do you provide wheelchair-accessible transportation?",
    answer: "Yes. We offer both standard and wheelchair-accessible vehicles depending on the client's needs.",
  },
  {
    question: "What areas do you serve?",
    answer: "We provide transportation throughout the seven-county metro area. Contact us with your client's address to confirm coverage.",
  },
  {
    question: "What types of trips can you do?",
    answer: "We handle medical appointments, day programs, employment, community activities, and other approved waiver-related destinations.",
  },
  {
    question: "How do I request services?",
    answer: "Case managers or clients can submit a referral through our intake form or by contacting our team directly.",
  },
  {
    question: "Do you work with all waiver programs?",
    answer: "Yes, we accept clients on all major Minnesota waiver programs.",
  },
  {
    question: "How far in advance do trips need to be scheduled?",
    answer: "We recommend sending schedules at least 24–48 hours in advance, but we do our best to support urgent or last-minute needs when possible.",
  },
];

function AccordionItem({ question, answer, isOpen, onClick, index }: { 
  question: string; 
  answer: string; 
  isOpen: boolean; 
  onClick: () => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={cn(
        "border-b border-border transition-all duration-300",
        isOpen ? "bg-white shadow-xl shadow-brand-primary/5 rounded-2xl border-transparent" : "bg-transparent"
      )}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className={cn(
          "text-lg font-bold transition-colors",
          isOpen ? "text-brand-primary" : "text-foreground"
        )}>
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={cn(
            "w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors",
            isOpen ? "bg-brand-primary text-white" : "bg-surface-muted text-text-muted"
          )}
        >
          <CaretDown size={20} weight="bold" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0 text-text-muted text-lg leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-[#FAFAF8] relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-lime/5 rounded-full blur-3xl -z-0" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-brand-primary/5 text-brand-primary px-4 py-2 rounded-full text-sm font-bold mb-6"
          >
            <Question weight="duotone" size={20} />
            Common Questions
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-black mb-6"
          >
            Frequently Asked <span className="text-brand-lime">Questions</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-text-muted"
          >
            Everything you need to know about our NEMT and waiver transportation services.
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              index={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 p-1 pl-4 pr-1 bg-white border border-border rounded-full text-sm font-medium">
            Still have questions? 
            <a 
              href="#contact" 
              className="bg-brand-primary text-white px-4 py-1.5 rounded-full hover:bg-brand-primary-pressed transition-colors"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
