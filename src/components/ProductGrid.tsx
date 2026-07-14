"use client";

import React, { useState } from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    id: "prod-1",
    name: "Classic Indigo Printed Set",
    category: "Kurtis",
    price: "₹1,699",
    image: "/images/prod_indigo.png",
    sizesAvailable: ["S", "M", "L", "XL", "XXL", "3XL", "4XL", "5XL"],
  },
  {
    id: "prod-2",
    name: "Terracotta Linen Co-ord Set",
    category: "Co-ord Sets",
    price: "₹2,199",
    image: "/images/prod_terracotta.png",
    sizesAvailable: ["S", "M", "L", "XL", "XXL", "3XL", "4XL", "5XL"],
  },
  {
    id: "prod-3",
    name: "Festive Wine Anarkali Suit",
    category: "Festive Wear",
    price: "₹2,899",
    image: "/images/prod_wine.png",
    sizesAvailable: ["S", "M", "L", "XL", "XXL", "3XL", "4XL", "5XL"],
  },
  {
    id: "prod-4",
    name: "Pastel Green Embroidered Tunic",
    category: "Kurtis",
    price: "₹1,299",
    image: "/images/prod_green.png",
    sizesAvailable: ["S", "M", "L", "XL", "XXL", "3XL", "4XL", "5XL"],
  },
];

export default function ProductGrid() {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Kurtis", "Co-ord Sets", "Festive Wear"];

  const filteredProducts =
    activeTab === "All"
      ? products
      : products.filter((p) => p.category === activeTab);

  return (
    <section id="new-arrivals" className="py-24 bg-[#FCFAF6] border-fine-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="text-left">
            <span className="text-xs text-sans font-semibold tracking-[0.25em] text-[#C2A478] uppercase mb-3 block">
              Curated Just For You
            </span>
            <h2 className="text-serif text-3xl sm:text-4xl font-light text-[#1E1E1E] tracking-wide">
              New Looks, Just In
            </h2>
            <div className="h-[1.5px] w-12 bg-[#8A2E44] mt-4" />
          </div>

          {/* Filtering Tabs */}
          <div className="flex flex-wrap gap-2 border-b border-[#EBE6DD]/60 pb-1 md:pb-0">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-sans text-xs tracking-widest uppercase font-medium py-2.5 px-4 transition-all relative ${
                  activeTab === tab
                    ? "text-[#8A2E44]"
                    : "text-[#5C5852] hover:text-[#1E1E1E]"
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#8A2E44]" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              category={product.category}
              price={product.price}
              image={product.image}
              sizesAvailable={product.sizesAvailable}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-sans text-xs text-[#5C5852] font-light mb-4">
            Looking for something specific or customized sizing?
          </p>
          <a
            href="https://wa.me/919166040591?text=Hello%20Madhur%20Fashion%2C%20I'm%20looking%20for%20a%20custom%20printed%20cotton%20outfit."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[#8A2E44] text-[#8A2E44] hover:bg-[#8A2E44] hover:text-white transition-all duration-300 text-xs tracking-widest uppercase font-semibold py-4.5 px-8 rounded-sm"
          >
            Custom Size Consultation
          </a>
        </div>
        
      </div>
    </section>
  );
}
