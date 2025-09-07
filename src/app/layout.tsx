import * as React from "react";

import "./globals.css";

import { Bricolage_Grotesque } from "next/font/google";

import Footer from "@/components/footer";
import Header from "@/components/header";

const bricolageGrotesque = Bricolage_Grotesque({
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
    <html lang="en" className={`${bricolageGrotesque.className} antialiased`}>
      <body suppressHydrationWarning>
        <Header />

        <main className="box-container">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
