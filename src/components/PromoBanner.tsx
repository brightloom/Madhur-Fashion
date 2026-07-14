"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function PromoBanner() {
  return (
    <section className="py-12 bg-[#FCFAF6] border-fine-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden bg-[#F5F2EB] border-fine grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[450px]">
          
          {/* Decorative Frame */}
          <div className="absolute inset-4 border border-[#C2A478]/20 z-10 pointer-events-none hidden lg:block" />

          {/* Copy Area (Left) */}
          <div className="lg:col-span-7 flex flex-col justify-center p-8 sm:p-12 lg:p-16 z-20 text-left order-2 lg:order-1">
            <span className="text-xs text-sans font-semibold tracking-[0.25em] text-[#C2A478] uppercase mb-4 block">
              The Cotton Collective
            </span>
            <h2 className="text-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#1E1E1E] leading-tight tracking-wide mb-6">
              Comfort in Every Detail. <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#8A2E44]">Elegance</span> in Every Thread.
            </h2>
            <p className="text-sans text-sm text-[#5C5852] font-light leading-relaxed max-w-md mb-8">
              From busy mornings to warm social evenings, our pure cotton outfits offer a refined balance of breathability and elegant styling. Thoughtfully tailored for sizes from S to 5XL.
            </p>
            <div>
              <a
                href="#categories"
                className="inline-block bg-[#1E1E1E] hover:bg-[#8A2E44] text-white text-xs tracking-widest uppercase font-semibold py-4 px-8 rounded-sm transition-all duration-300"
              >
                Browse Cotton Essentials
              </a>
            </div>
          </div>

          {/* Media Area (Right) */}
          <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-none order-1 lg:order-2 overflow-hidden">
            <Image
              src="/images/promo_model.png"
              alt="Madhur Fashion Co-ord Set Collection"
              fill
              unoptimized
              className="object-cover object-top transition-transform duration-700 hover:scale-103"
              sizes="(max-w-768px) 100vw, 40vw"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
}
