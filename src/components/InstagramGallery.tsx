"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function InstagramIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const igPosts = [
  { id: "ig-1", image: "/images/ig_1.png" },
  { id: "ig-2", image: "/images/ig_2.png" },
  { id: "ig-3", image: "/images/ig_3.png" },
  { id: "ig-4", image: "/images/ig_4.png" },
  { id: "ig-5", image: "/images/ig_5.png" },
  { id: "ig-6", image: "/images/ig_6.png" },
];

export default function InstagramGallery() {
  return (
    <section className="py-20 bg-[#F5F2EB]/30 border-fine-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs text-sans font-semibold tracking-[0.25em] text-[#C2A478] uppercase mb-3 block">
            Follow Our Feed
          </span>
          <h2 className="text-serif text-3xl sm:text-4xl font-light text-[#1E1E1E] tracking-wide">
            Instagram Favorites
          </h2>
          <div className="h-[1px] w-16 bg-[#8A2E44] mx-auto mt-4" />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {igPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href="https://www.instagram.com/madhur_fashions/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="relative aspect-square w-full overflow-hidden border border-[#EBE6DD]/60 bg-[#F5F2EB] group cursor-pointer"
            >
              <Image
                src={post.image}
                alt="Instagram Outfit"
                fill
                unoptimized
                className="object-cover object-top transition-transform duration-500 group-hover:scale-103"
                sizes="(max-w-768px) 50vw, (max-w-1024px) 33vw, 16vw"
              />
              
              {/* Hover Dark Overlay */}
              <div className="absolute inset-0 bg-[#8A2E44]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                <InstagramIcon className="h-6 w-6 text-white" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Social Follow CTA */}
        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com/madhur_fashions/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#8A2E44] hover:bg-[#722737] text-white text-xs tracking-widest uppercase font-semibold py-4 px-8 rounded-sm transition-all duration-300 shadow-sm"
          >
            <InstagramIcon className="h-4 w-4" />
            <span>Follow @madhur_fashions</span>
          </a>
        </div>
        
      </div>
    </section>
  );
}
