import React from "react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryGrid from "@/components/CategoryGrid";
import ProductGrid from "@/components/ProductGrid";
import PromoBanner from "@/components/PromoBanner";
import USPs from "@/components/USPs";
import BrandStory from "@/components/BrandStory";
import InstagramGallery from "@/components/InstagramGallery";
import ContactStore from "@/components/ContactStore";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FCFAF6] font-sans selection:bg-[#8A2E44] selection:text-white">
      {/* Promo & Alerts Announcement */}
      <AnnouncementBar />

      {/* Flagship Header */}
      <Header />

      {/* Main Flagship Content */}
      <main className="flex-grow">
        {/* Editorial Hero Area */}
        <Hero />

        {/* Highlight Category Grids */}
        <CategoryGrid />

        {/* Latest Arrivals Catalog */}
        <ProductGrid />

        {/* Middle Promotional Section */}
        <PromoBanner />

        {/* USP Pillars */}
        <USPs />

        {/* Brand Story & Philosophy */}
        <BrandStory />

        {/* Interactive Social Grid */}
        <InstagramGallery />

        {/* Store Location & Hours */}
        <ContactStore />
      </main>

      {/* Flagship Footer */}
      <Footer />
    </div>
  );
}

