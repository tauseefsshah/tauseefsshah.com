"use client";

import Image from "next/image";
import Link from "next/link";

import Navigation from "@/components/navigation";

function Header() {
  return (
    <header className="py-4 box-container">
      <div className="flex items-center justify-between">
        <div
          id="logo"
          className="rounded-full bg-white p-2 font-bold text-black"
        >
          <Link href="/">
            <Image src="/logo.svg" height={25} width={25} alt="Tauseef Shah" />
          </Link>
        </div>
        
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
