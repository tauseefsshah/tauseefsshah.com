"use client";

import * as React from "react";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Navigation from "@/components/navigation";

import TauseefShah from "@/../public/tauseef-shah.jpg";

function Header() {
  const pathname = usePathname();
  const showLogo = React.useMemo(() => pathname !== "/", [pathname]);

  return (
    <header className="py-4 box-container">
      <div className="flex items-center justify-between h-8">
        <div
          id="logo"
          className="rounded-full bg-white p-2 font-bold text-black"
        >
          {showLogo && (
            <Link href="/">
              <Image
                alt="Tauseef Shah"
                src={TauseefShah.src}
                width={TauseefShah.width}
                height={TauseefShah.height}
                className="rounded-full size-8"
              />
            </Link>
          )}
        </div>

        <Navigation />
      </div>
    </header>
  );
}

export default Header;
