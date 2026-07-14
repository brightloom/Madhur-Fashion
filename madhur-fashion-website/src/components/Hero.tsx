"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-4 pb-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Editorial Content Column */}
          <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1 text-left">
            
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xs text-sans font-semibold tracking-[0.25em] text-[#C2A478] uppercase mb-4 block"
            >
              The New Season Collection
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#1E1E1E] leading-[1.1] mb-6 tracking-wide"
            >
              Styles Made to <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#8A2E44]">Be Noticed</span>, <br />
              Sized for Every Body
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-sans text-sm sm:text-base text-[#5C5852] font-light leading-relaxed max-w-lg mb-10"
            >
              Experience the effortless charm of breathable cottons, modern co-ord sets, and handpicked ethnic wear designed for your everyday statement. Tailored for pure comfort in sizes from S to 5XL.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#new-arrivals"
                className="inline-block text-center bg-[#8A2E44] hover:bg-[#722737] text-white text-xs tracking-widest uppercase font-semibold py-4 px-8 rounded-sm transition-all duration-300 shadow-sm hover:shadow-md"
              >
                Shop New Arrivals
              </a>
              <a
                href="#categories"
                className="inline-block text-center border border-[#1E1E1E] hover:border-[#8A2E44] hover:text-[#8A2E44] text-[#1E1E1E] text-xs tracking-widest uppercase font-semibold py-4 px-8 rounded-sm transition-all duration-300"
              >
                Explore Categories
              </a>
            </motion.div>
          </div>

          {/* Editorial Photography Column */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative aspect-[3/4] w-full max-w-md lg:max-w-none mx-auto overflow-hidden border-fine bg-[#F5F2EB] group"
            >
              {/* Decorative Frame */}
              <div className="absolute inset-4 border border-[#C2A478]/30 z-10 pointer-events-none transition-all duration-500 group-hover:inset-6" />
              
              <Image
                src="/images/hero_model.png"
                alt="Madhur Fashion Premium Printed Cotton Kurti Set"
                fill
                priority
                unoptimized
                className="object-cover object-top transition-transform duration-700 group-hover:scale-103"
                sizes="(max-w-768px) 100vw, 50vw"
              />
              
              <div className="absolute bottom-6 left-6 z-25 bg-[#FCFAF6]/90 backdrop-blur-sm border border-[#EBE6DD] py-2.5 px-4 rounded-sm shadow-sm hidden sm:block">
                <span className="text-[10px] text-sans font-semibold tracking-widest text-[#C2A478] uppercase block">Featured Outfit</span>
                <span className="text-serif text-sm font-medium text-[#1E1E1E]">Block Print Tunic • Sizes S-5XL</span>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
