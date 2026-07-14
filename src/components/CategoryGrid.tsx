"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  {
    name: "Kurtis",
    tagline: "Effortless daily elegance in premium prints.",
    image: "/images/cat_kurti.png",
    link: "#",
    colSpan: "lg:col-span-4",
  },
  {
    name: "Co-ord Sets",
    tagline: "Contemporary matching sets for smart styling.",
    image: "/images/cat_coord.png",
    link: "#",
    colSpan: "lg:col-span-8",
  },
  {
    name: "Festive Wear",
    tagline: "Rich embroidery made for celebration.",
    image: "/images/cat_festive.png",
    link: "#",
    colSpan: "lg:col-span-8",
  },
  {
    name: "Western Wear",
    tagline: "Modern silhouettes and light casual chic.",
    image: "/images/cat_western.png",
    link: "#",
    colSpan: "lg:col-span-4",
  },
  {
    name: "Cotton Essentials",
    tagline: "Breathable tunics and lounge sets.",
    image: "/images/cat_cotton.png",
    link: "#",
    colSpan: "lg:col-span-6",
  },
  {
    name: "Plus Size S-5XL",
    tagline: "Tailored fashion from S to 5XL without compromise.",
    image: "/images/cat_plus.png",
    link: "#",
    colSpan: "lg:col-span-6",
  },
];

export default function CategoryGrid() {
  return (
    <section id="categories" className="py-20 border-fine-t bg-[#F5F2EB]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs text-sans font-semibold tracking-[0.25em] text-[#C2A478] uppercase mb-3 block">
            Discover Our Ranges
          </span>
          <h2 className="text-serif text-3xl sm:text-4xl font-light text-[#1E1E1E] tracking-wide">
            Shop by Category
          </h2>
          <div className="h-[1px] w-16 bg-[#8A2E44] mx-auto mt-4" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`${cat.colSpan} relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[350px] overflow-hidden border-fine bg-[#F5F2EB] group cursor-pointer`}
            >
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                unoptimized
                className="object-cover object-top transition-transform duration-700 group-hover:scale-103"
                sizes="(max-w-768px) 100vw, (max-w-1024px) 50vw, 33vw"
              />
              
              {/* Subtle overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent transition-opacity duration-300 opacity-90 group-hover:opacity-95" />
              
              {/* Inner frame */}
              <div className="absolute inset-4 border border-white/20 pointer-events-none transition-all duration-500 group-hover:inset-5" />

              {/* Text details */}
              <div className="absolute bottom-6 left-6 right-6 text-white flex flex-col justify-end">
                <span className="text-serif text-2xl font-light tracking-wide mb-1 group-hover:text-[#C2A478] transition-colors duration-300">
                  {cat.name}
                </span>
                <p className="text-sans text-[11px] text-white/80 font-light tracking-wide max-w-sm mb-4 line-clamp-1">
                  {cat.tagline}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-sans font-medium tracking-widest uppercase text-[#C2A478]">
                  <span>Explore</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
