"use client";

import React from "react";
import { MapPin, Phone, Clock, MessageSquare, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactStore() {
  const address = "Shop No. 3, Soni Complex, Near Agarwal Dharamshala, Chomu, Jaipur, Rajasthan — 303702";
  const mapQuery = encodeURIComponent("Shop No. 3, Soni Complex, near Agarwal Dharamshala, Chomu, Jaipur");
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;
  
  const waInquiryUrl = "https://wa.me/919166040591?text=Hello%20Madhur%20Fashion%2C%20I'm%20visiting%20your%20website%20and%20would%20like%20to%20know%20more%20about%20your%20store%20hours%20and%20product%20availability.";

  return (
    <section id="visit-us" className="py-24 bg-[#FCFAF6] border-fine-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Contact Copy Card (Left) */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 sm:p-10 bg-white border border-[#EBE6DD]/60 rounded-sm text-left">
            <div>
              <span className="text-xs text-sans font-semibold tracking-[0.25em] text-[#C2A478] uppercase mb-4 block">
                Boutique Flagship
              </span>
              <h2 className="text-serif text-3xl sm:text-4xl font-light text-[#1E1E1E] tracking-wide mb-8">
                Visit Our Store
              </h2>
              
              <div className="space-y-6">
                
                {/* Address */}
                <div className="flex gap-4 items-start">
                  <div className="bg-[#8A2E44]/5 p-2.5 rounded-full text-[#8A2E44] shrink-0 mt-0.5">
                    <MapPin className="h-5 w-5 stroke-[1.5]" />
                  </div>
                  <div>
                    <h3 className="text-sans text-xs font-semibold tracking-wider text-[#1E1E1E] uppercase mb-1">
                      Store Address
                    </h3>
                    <p className="text-sans text-sm text-[#5C5852] font-light leading-relaxed">
                      {address}
                    </p>
                  </div>
                </div>

                {/* WhatsApp Callout */}
                <div className="flex gap-4 items-start">
                  <div className="bg-[#8A2E44]/5 p-2.5 rounded-full text-[#8A2E44] shrink-0 mt-0.5">
                    <Phone className="h-5 w-5 stroke-[1.5]" />
                  </div>
                  <div>
                    <h3 className="text-sans text-xs font-semibold tracking-wider text-[#1E1E1E] uppercase mb-1">
                      WhatsApp Support
                    </h3>
                    <p className="text-sans text-sm text-[#5C5852] font-light">
                      +91 91660 40591 <span className="text-[#C2A478] font-medium ml-1.5">(Owner: @royalniks2226)</span>
                    </p>
                  </div>
                </div>

                {/* Timings */}
                <div className="flex gap-4 items-start">
                  <div className="bg-[#8A2E44]/5 p-2.5 rounded-full text-[#8A2E44] shrink-0 mt-0.5">
                    <Clock className="h-5 w-5 stroke-[1.5]" />
                  </div>
                  <div>
                    <h3 className="text-sans text-xs font-semibold tracking-wider text-[#1E1E1E] uppercase mb-1">
                      Opening Hours
                    </h3>
                    <p className="text-sans text-sm text-[#5C5852] font-light">
                      Open Daily: 10:30 AM to 8:30 PM
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10 border-t border-[#EBE6DD]/60 pt-8">
              <a
                href={waInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#8A2E44] hover:bg-[#722737] text-white text-xs tracking-widest uppercase font-semibold py-4 px-6 rounded-sm transition-all duration-300"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-[#1E1E1E] hover:border-[#8A2E44] hover:text-[#8A2E44] text-[#1E1E1E] text-xs tracking-widest uppercase font-semibold py-4 px-6 rounded-sm transition-all duration-300"
              >
                <span>Get Directions</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Map / Boutique Visual Card (Right) */}
          <div className="lg:col-span-7 relative min-h-[350px] lg:min-h-none overflow-hidden border border-[#EBE6DD]/60 bg-[#F5F2EB] rounded-sm group flex flex-col">
            {/* Elegant Map Overlay or Mock Map Container */}
            <div className="absolute inset-0 bg-[#EBE6DD]/20 z-10 pointer-events-none" />
            
            {/* Standard Leaflet/Google Embed alternative or clean aesthetic placeholder for boutique */}
            <div className="w-full h-full min-h-[400px] bg-[#EAE5DB] relative flex items-center justify-center p-8">
              <div className="absolute inset-4 border border-[#C2A478]/25 pointer-events-none z-10" />
              
              <div className="text-center max-w-sm z-20">
                <span className="text-serif text-3xl font-light text-[#1E1E1E] block mb-2">Madhur Boutique</span>
                <div className="h-[1px] w-12 bg-[#8A2E44] mx-auto mb-4" />
                <p className="text-sans text-xs text-[#5C5852] font-light leading-relaxed mb-6">
                  Visit us in Chomu to try on sizes from S to 5XL, feel our pure cotton fabrics, and experience personalized styling.
                </p>
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#1E1E1E] hover:bg-[#8A2E44] text-white text-[10px] tracking-widest uppercase py-3 px-6 rounded-sm transition-colors duration-300 font-semibold"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
