"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function BrandStory() {
  return (
    <section id="our-story" className="py-24 bg-[#FCFAF6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Detailed Image Card (Left) */}
          <div className="lg:col-span-5 relative aspect-[3/4] w-full max-w-md lg:max-w-none mx-auto overflow-hidden border-fine bg-[#F5F2EB] group order-2 lg:order-1">
            <div className="absolute inset-4 border border-[#C2A478]/25 z-10 pointer-events-none transition-all duration-500 group-hover:inset-5" />
            <Image
              src="/images/brand_story.png"
              alt="Madhur Fashion Handcrafted Fabric Detail"
              fill
              unoptimized
              className="object-cover transition-transform duration-700 group-hover:scale-103"
              sizes="(max-w-768px) 100vw, 40vw"
            />
          </div>

          {/* Warm Content Text (Right) */}
          <div className="lg:col-span-7 text-left order-1 lg:order-2">
            <span className="text-xs text-sans font-semibold tracking-[0.25em] text-[#C2A478] uppercase mb-4 block">
              Our Journey
            </span>
            <h2 className="text-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#1E1E1E] leading-tight tracking-wide mb-8">
              The Madhur Promise: <br />
              <span className="italic font-normal text-[#8A2E44]">Style Without Compromise</span>
            </h2>
            
            <div className="space-y-6 text-sans text-sm sm:text-base text-[#5C5852] font-light leading-relaxed">
              <p>
                Nestled in the vibrant town of Chomu, Jaipur, Madhur Fashion was founded on a simple yet powerful premise: clothing should fit you beautifully, feel comfortable all day, and celebrate the authentic spirit of Indian craftsmanship.
              </p>
              <p>
                For years, we noticed that style-forward designs and size-inclusive tailoring were treated as separate paths in retail. We set out to bridge that gap. We specialize in crafting premium kurtis, contemporary co-ords, and festive clothing that respects the diverse shapes of Indian women, with an uncompromised sizing spectrum from S to 5XL.
              </p>
              <p className="border-l-2 border-[#8A2E44] pl-4 italic text-[#8A2E44] font-serif text-lg leading-relaxed">
                &ldquo;Every piece represents our pledge of breathable fabrics, meticulous stitching, and styles that let you carry yourself with absolute confidence.&rdquo;
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-[#EBE6DD] pt-8">
              <div>
                <span className="block text-serif text-2xl lg:text-3xl font-light text-[#8A2E44]">S-5XL</span>
                <span className="block text-[10px] text-sans font-semibold tracking-wider text-[#C2A478] uppercase mt-1">Inclusive Sizes</span>
              </div>
              <div>
                <span className="block text-serif text-2xl lg:text-3xl font-light text-[#8A2E44]">100%</span>
                <span className="block text-[10px] text-sans font-semibold tracking-wider text-[#C2A478] uppercase mt-1">Pure Cottons</span>
              </div>
              <div>
                <span className="block text-serif text-2xl lg:text-3xl font-light text-[#8A2E44]">Chomu</span>
                <span className="block text-[10px] text-sans font-semibold tracking-wider text-[#C2A478] uppercase mt-1">Flagship Boutique</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
