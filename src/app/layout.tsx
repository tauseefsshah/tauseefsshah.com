import * as React from "react";

import "./globals.css";

import { Outfit } from "next/font/google";

import Footer from "@/components/footer";
import Header from "@/components/header";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Tauseef Shah",
  description: "Personal Website of Tauseef Shah",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {

  return (
    <html lang="en" className={`${outfit.className} antialiased`}>
      <body suppressHydrationWarning>
        <Header />

        <main className="box-container">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
