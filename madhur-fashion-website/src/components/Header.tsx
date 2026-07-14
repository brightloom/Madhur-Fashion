"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Search, Heart, ShoppingBag, PhoneCall } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "New Arrivals", href: "#new-arrivals" },
    { name: "Kurtis", href: "#categories" },
    { name: "Co-ord Sets", href: "#categories" },
    { name: "Festive Wear", href: "#categories" },
    { name: "Plus Size (S-5XL)", href: "#categories" },
    { name: "Our Story", href: "#our-story" },
    { name: "Visit Us", href: "#visit-us" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FCFAF6]/95 backdrop-blur-md shadow-sm border-fine-b py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Mobile Menu Icon */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#1E1E1E] hover:text-[#8A2E44] transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Logo */}
          <div className="flex-1 lg:flex-none text-center lg:text-left">
            <a href="#" className="inline-block">
              <span className="text-serif text-2xl sm:text-3xl font-light tracking-[0.1em] text-[#1E1E1E] hover:text-[#8A2E44] transition-colors">
                MADHUR
              </span>
              <span className="text-sans text-[10px] block tracking-[0.4em] uppercase text-[#C2A478] -mt-1 font-semibold ml-0.5">
                FASHIONS
              </span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sans text-xs tracking-wider uppercase text-[#1E1E1E] hover:text-[#8A2E44] font-medium transition-colors relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#8A2E44] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Icon Utilities */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            <button className="text-[#1E1E1E] hover:text-[#8A2E44] transition-colors" aria-label="Search">
              <Search className="h-5 w-5 stroke-[1.5]" />
            </button>
            <button className="hidden sm:block text-[#1E1E1E] hover:text-[#8A2E44] transition-colors" aria-label="Wishlist">
              <Heart className="h-5 w-5 stroke-[1.5]" />
            </button>
            <a 
              href="https://wa.me/919166040591?text=Hello%20Madhur%20Fashion%2C%20I%20am%20browsing%20your%20website%20and%20would%20like%20to%20inquire%20about%20your%20styles."
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1E1E1E] hover:text-[#8A2E44] transition-colors" 
              aria-label="Contact us"
            >
              <PhoneCall className="h-5 w-5 stroke-[1.5]" />
            </a>
            <a 
              href="https://wa.me/919166040591" 
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-[#1E1E1E] hover:text-[#8A2E44] transition-colors" 
              aria-label="Inquiry bag"
            >
              <ShoppingBag className="h-5 w-5 stroke-[1.5]" />
              <span className="absolute -top-1 -right-2 bg-[#8A2E44] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                0
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed top-0 left-0 bottom-0 z-50 w-80 max-w-[85vw] bg-[#FCFAF6] shadow-xl transform transition-transform duration-300 lg:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-fine-b">
            <div>
              <span className="text-serif text-xl font-light tracking-[0.1em] text-[#1E1E1E]">
                MADHUR
              </span>
              <span className="text-sans text-[9px] block tracking-[0.3em] uppercase text-[#C2A478] -mt-1 font-semibold ml-0.5">
                FASHIONS
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#1E1E1E] hover:text-[#8A2E44] transition-colors"
              aria-label="Close Menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-6 px-6">
            <nav className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sans text-sm tracking-wider uppercase text-[#1E1E1E] hover:text-[#8A2E44] font-medium transition-colors border-b border-[#EBE6DD]/60 pb-3"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          <div className="p-6 border-fine-t bg-[#F5F2EB]">
            <p className="text-xs text-sans text-[#5C5852] mb-3">Sizes S to 5XL Available</p>
            <a
              href="https://wa.me/919166040591?text=Hello%20Madhur%20Fashion%2C%20I%20would%20like%20to%20chat%20with%20a%20personal%20stylist."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#8A2E44] hover:bg-[#722737] text-white text-xs tracking-widest uppercase py-3 px-4 rounded-sm transition-colors font-medium font-sans"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
