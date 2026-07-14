"use client";

import React from "react";
import { Sparkles, Scissors, HelpCircle, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const usps = [
  {
    icon: Scissors,
    title: "Sizes S to 5XL",
    description:
      "We design for real body dimensions. Every style in our collection is engineered to look elegant and feel incredibly comfortable across all sizes.",
  },
  {
    icon: Sparkles,
    title: "Premium Quality Fabrics",
    description:
      "Specializing in handpicked, pure breathable cottons, linen blends, and rich textures that withstand daily wear while looking premium.",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Direct Ordering",
    description:
      "No complex checkouts. Take a screenshot of any look from our Instagram feed, send it to us on WhatsApp, and we'll handle the rest.",
  },
  {
    icon: HelpCircle,
    title: "Personal Styling Support",
    description:
      "Need advice on coordination, sizing, or occasion wear? Chat directly with our personal boutique stylists for custom assistance.",
  },
];

export default function USPs() {
  return (
    <section className="py-20 bg-[#F5F2EB]/50 border-fine-t border-fine-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs text-sans font-semibold tracking-[0.25em] text-[#C2A478] uppercase mb-3 block">
            The Boutique Experience
          </span>
          <h2 className="text-serif text-3xl sm:text-4xl font-light text-[#1E1E1E] tracking-wide">
            Why Shop with Madhur Fashion
          </h2>
          <div className="h-[1px] w-16 bg-[#8A2E44] mx-auto mt-4" />
        </div>

        {/* USP Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {usps.map((usp, index) => {
            const Icon = usp.icon;
            return (
              <motion.div
                key={usp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col text-left p-6 bg-white border border-[#EBE6DD]/50 rounded-sm hover:shadow-sm transition-shadow duration-300"
              >
                <div className="bg-[#8A2E44]/5 p-3 rounded-full w-fit mb-6 text-[#8A2E44]">
                  <Icon className="h-6 w-6 stroke-[1.2]" />
                </div>
                <h3 className="text-sans text-sm font-semibold tracking-wider text-[#1E1E1E] uppercase mb-3">
                  {usp.title}
                </h3>
                <p className="text-sans text-xs text-[#5C5852] font-light leading-relaxed">
                  {usp.description}
                </p>
              </motion.div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
