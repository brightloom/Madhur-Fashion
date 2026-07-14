import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Madhur Fashion | Premium Women's Clothing in Sizes S to 5XL",
  description: "Shop premium cotton outfits, elegant co-ord sets, straight & short kurtis, festive wear, and western wear at Madhur Fashion. Flagship boutique in Chomu, Jaipur, specializing in inclusive sizes from S to 5XL. Effortless WhatsApp ordering and personal styling assistance.",
  keywords: ["Madhur Fashion", "Kurtis in Chomu", "Co-ord sets Jaipur", "Plus size Indian wear S-5XL", "Cotton clothing Chomu", "Women clothing boutique", "Shop No.3 Soni Complex Chomu"],
  openGraph: {
    title: "Madhur Fashion | Premium Women's Clothing in Sizes S to 5XL",
    description: "Shop premium cotton outfits, elegant co-ord sets, straight & short kurtis, festive wear, and western wear at Madhur Fashion. S-5XL inclusive sizes.",
    type: "website",
    locale: "en_IN",
    siteName: "Madhur Fashion",
  },
};

import FloatingSocials from "@/components/FloatingSocials";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FCFAF6] text-[#1E1E1E] selection:bg-[#8A2E44] selection:text-white">
        {children}
        <FloatingSocials />
      </body>
    </html>
  );
}
