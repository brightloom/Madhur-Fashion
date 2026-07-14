"use client";

import React, { useState } from "react";
import { Send, ArrowUp } from "lucide-react";

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

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#1E1E1E] text-white border-t border-white/10 pt-16 pb-8 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Footer Top */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-white/10 text-left">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <span className="text-serif text-2xl font-light tracking-[0.1em] text-white">
                MADHUR
              </span>
              <span className="text-sans text-[9px] block tracking-[0.4em] uppercase text-[#C2A478] -mt-1 font-semibold ml-0.5">
                FASHIONS
              </span>
              <p className="text-sans text-xs text-white/60 font-light leading-relaxed mt-6 max-w-sm">
                Curating premium cotton outfits, modern co-ord sets, elegant straight & short kurtis, and festive clothing designed to fit and flatter every silhouette. Specialized sizing from S to 5XL.
              </p>
            </div>
            
            <div className="flex items-center space-x-4 mt-8">
              <a
                href="https://www.instagram.com/madhur_fashions/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 hover:bg-[#8A2E44] p-3 rounded-full border border-white/10 transition-colors duration-300 text-white"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Categories Links */}
          <div className="lg:col-span-2">
            <h3 className="text-sans text-xs font-semibold tracking-widest uppercase text-[#C2A478] mb-6">
              Shop Ranges
            </h3>
            <ul className="space-y-3.5 text-sans text-xs text-white/70 font-light">
              <li>
                <a href="#categories" className="hover:text-white transition-colors">Kurtis Collection</a>
              </li>
              <li>
                <a href="#categories" className="hover:text-white transition-colors">Co-ord Sets</a>
              </li>
              <li>
                <a href="#categories" className="hover:text-white transition-colors">Festive Wear</a>
              </li>
              <li>
                <a href="#categories" className="hover:text-white transition-colors">Western Wear</a>
              </li>
              <li>
                <a href="#categories" className="hover:text-white transition-colors">Plus Sizes S-5XL</a>
              </li>
            </ul>
          </div>

          {/* Customer Support */}
          <div className="lg:col-span-3">
            <h3 className="text-sans text-xs font-semibold tracking-widest uppercase text-[#C2A478] mb-6">
              Customer Care
            </h3>
            <ul className="space-y-3.5 text-sans text-xs text-white/70 font-light">
              <li>
                <a href="https://wa.me/919166040591?text=Hello%20Madhur%20Fashion%2C%20I%20would%20like%20to%20know%20your%20shipping%20and%20return%20policies." target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Shipping & Returns</a>
              </li>
              <li>
                <a href="https://wa.me/919166040591?text=Hello%20Madhur%20Fashion%2C%20I%20need%20assistance%20with%20sizing." target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Size Assistance</a>
              </li>
              <li>
                <a href="https://wa.me/919166040591" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp Helpdesk</a>
              </li>
              <li>
                <a href="#visit-us" className="hover:text-white transition-colors">Store Directions</a>
              </li>
            </ul>
          </div>

          {/* Newsletter / Updates Signup */}
          <div className="lg:col-span-3">
            <h3 className="text-sans text-xs font-semibold tracking-widest uppercase text-[#C2A478] mb-6">
              Boutique Updates
            </h3>
            <p className="text-sans text-xs text-white/60 font-light leading-relaxed mb-6">
              Subscribe to receive updates on our latest printed cotton arrivals and special boutique previews.
            </p>
            
            {submitted ? (
              <p className="text-sans text-xs text-[#C2A478] font-medium bg-white/5 border border-white/10 p-3.5 rounded-sm">
                Thank you! You are now subscribed.
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex border border-white/20 rounded-sm overflow-hidden bg-white/5 focus-within:border-white/40 transition-colors">
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent py-3 px-4 text-sans text-xs text-white placeholder-white/40 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-[#8A2E44] hover:bg-[#722737] text-white p-3 transition-colors"
                  aria-label="Subscribe"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-sans text-[11px] text-white/40 font-light text-center md:text-left">
            <span>&copy; {new Date().getFullYear()} Madhur Fashion. All rights reserved.</span>
            <span className="mx-2">|</span>
            <span>Boutique at Shop No. 3, Soni Complex, Chomu, Jaipur.</span>
          </div>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-sans text-[10px] tracking-widest uppercase font-semibold text-[#C2A478] hover:text-white transition-colors duration-300 focus:outline-none"
            aria-label="Scroll to Top"
          >
            <span>Back to Top</span>
            <ArrowUp className="h-3.5 w-3.5 border border-[#C2A478] p-0.5 rounded-full" />
          </button>
        </div>
        
      </div>
    </footer>
  );
}
