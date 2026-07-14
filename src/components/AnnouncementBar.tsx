"use client";

import React from "react";

export default function AnnouncementBar() {
  const marqueeText = "SIZES S TO 5XL • CURATED STYLES TAILORED TO FIT AND FLATTER EVERY SILHOUETTE • SHOP ON WHATSAPP: SEND SCREENSHOTS OF YOUR FAVORITE LOOKS TO +91 91660 40591 • VISIT OUR BOUTIQUE: SHOP NO. 3, SONI COMPLEX, CHOMU, JAIPUR • FREE SHIPPING ACROSS INDIA ON ORDERS ABOVE ₹1,499 • ";

  return (
    <div className="w-full bg-[#1E1E1E] text-white py-2 overflow-hidden border-fine-b select-none">
      <div className="relative w-full flex items-center">
        <div className="animate-marquee whitespace-nowrap flex text-[10px] sm:text-[11px] font-sans font-medium tracking-[0.2em] uppercase">
          <span>{marqueeText}</span>
          <span>{marqueeText}</span>
        </div>
      </div>
    </div>
  );
}
