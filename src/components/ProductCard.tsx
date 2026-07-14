"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Heart, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

interface ProductCardProps {
  id: string;
  name: string;
  category: string;
  price?: string;
  image: string;
  sizesAvailable: string[];
}

export default function ProductCard({
  name,
  category,
  price,
  image,
  sizesAvailable,
}: ProductCardProps) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);

  const getWhatsAppLink = () => {
    const baseUrl = "https://wa.me/919166040591";
    const text = selectedSize
      ? `Hello Madhur Fashion, I am browsing your website and I am interested in inquiring about the "${name}" in category "${category}" for size ${selectedSize}. Please let me know its price and availability.`
      : `Hello Madhur Fashion, I am browsing your website and I am interested in inquiring about the "${name}" in category "${category}". Could you help me with the available sizes and pricing?`;
    
    return `${baseUrl}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="group relative flex flex-col bg-white border border-[#EBE6DD]/60 p-3 rounded-sm transition-all duration-300 hover:shadow-md">
      
      {/* Product Image Frame */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#F5F2EB] rounded-sm">
        
        {/* Wishlist Button */}
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-3 right-3 z-20 bg-white/80 backdrop-blur-sm p-2 rounded-full border border-[#EBE6DD]/60 text-[#1E1E1E] hover:text-[#8A2E44] transition-colors shadow-sm"
          aria-label="Add to Wishlist"
        >
          <Heart
            className={`h-4 w-4 stroke-[1.5] ${
              isFavorite ? "fill-[#8A2E44] text-[#8A2E44]" : ""
            }`}
          />
        </button>

        {/* Product Image */}
        <Image
          src={image}
          alt={name}
          fill
          unoptimized
          className="object-cover object-top transition-transform duration-700 group-hover:scale-103"
          sizes="(max-w-768px) 100vw, (max-w-1024px) 50vw, 25vw"
        />

        {/* Hover Sizes Overlay (Desktop) */}
        <div className="absolute inset-x-0 bottom-0 z-10 translate-y-full bg-white/95 backdrop-blur-sm p-4 transition-transform duration-300 group-hover:translate-y-0 border-t border-[#EBE6DD]/80 hidden md:block">
          <span className="text-[10px] text-sans font-semibold tracking-wider text-[#5C5852] uppercase block mb-2">
            Select Size
          </span>
          <div className="flex flex-wrap gap-1.5">
            {sizesAvailable.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`text-[10px] font-sans font-bold px-2 py-1 rounded-sm border transition-all ${
                  selectedSize === size
                    ? "bg-[#8A2E44] border-[#8A2E44] text-white"
                    : "border-[#EBE6DD] text-[#1E1E1E] hover:border-[#8A2E44]"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product Metadata */}
      <div className="mt-4 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-sans text-[10px] text-[#C2A478] font-semibold tracking-widest uppercase block mb-1">
            {category}
          </span>
          <h3 className="text-serif text-base font-medium text-[#1E1E1E] tracking-wide mb-1.5 line-clamp-1 group-hover:text-[#8A2E44] transition-colors">
            {name}
          </h3>
          
          {/* Sizes List (Mobile & Tablet visible, Desktop hidden on hover) */}
          <div className="md:hidden mt-2 mb-3">
            <span className="text-[9px] text-[#5C5852] uppercase block mb-1">Available Sizes:</span>
            <div className="flex flex-wrap gap-1">
              {sizesAvailable.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`text-[9px] px-1.5 py-0.5 rounded-sm border ${
                    selectedSize === size
                      ? "bg-[#8A2E44] border-[#8A2E44] text-white"
                      : "border-[#EBE6DD]/60 text-[#1E1E1E]"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between mt-2 mb-3">
            {price ? (
              <span className="text-sans text-sm font-semibold text-[#1E1E1E]">
                {price}
              </span>
            ) : (
              <span className="text-sans text-xs text-[#5C5852] italic">
                Price on Request
              </span>
            )}
            <span className="text-[10px] text-sans text-[#8A2E44] font-medium bg-[#8A2E44]/5 px-2 py-0.5 rounded-sm">
              S to 5XL
            </span>
          </div>
        </div>

        {/* WhatsApp Inquiry Button */}
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 bg-[#1E1E1E] hover:bg-[#8A2E44] text-white text-[10px] tracking-widest uppercase py-3 px-4 rounded-sm transition-all duration-300 font-semibold font-sans mt-auto"
        >
          <MessageSquare className="h-3.5 w-3.5" />
          <span>{selectedSize ? `Inquire Size ${selectedSize}` : "Inquire via WhatsApp"}</span>
        </a>
      </div>
    </div>
  );
}
