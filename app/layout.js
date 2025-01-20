import "./globals.css";

import Link from "next/link";
import Image from "next/image";
import { Outfit } from "next/font/google";

import { ArrowUpRight } from "lucide-react";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Tauseef Shah",
  description: "Personal Website of Tauseef Shah",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.className} antialiased`}>
      <body>
        <header className="py-4">
          <div className="flex items-center justify-between">
            <div
              id="logo"
              className="rounded-full bg-white p-2 font-bold text-black"
            >
              <Link href="/">
                <Image src="/logo.svg" height={25} width={25} alt="Tauseef Shah" />
              </Link>
            </div>
            <nav id="navigation">
              <ul className="flex gap-8">
                {[
                  {
                    title: "About",
                    link: "/about",
                    active: false,
                  },
                  // {
                  //   title: "Blog",
                  //   link: "/blog",
                  //   active: false,
                  // },
                  {
                    title: "Projects",
                    link: "/projects",
                    active: false,
                  },
                ].map((navigationItem) => (
                  <li
                    key={navigationItem.title}
                    className={
                      navigationItem.active
                        ? "text-primary underline underline-offset-8 decoration-2"
                        : "text-primary-background"
                    }
                  >
                    <Link
                      href={navigationItem.link}
                      title={navigationItem.title}
                      aria-label={navigationItem.title}
                      className=""
                    >
                      {navigationItem.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="content-box my-8">
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-wrap justify-center gap-4">
              {[
                {
                  platform: "x",
                  link: "https://x.com/tauseefsshah",
                },
                {
                  platform: "linkedin",
                  link: "https://linkedin.com/in/tauseefsshah",
                },
                {
                  platform: "github",
                  link: "https://github.com/tauseefsshah",
                },
                {
                  platform: "discord",
                  link: "https://discordapp.com/users/742727242823499847",
                },
                {
                  platform: "telegram",
                  link: "https://t.me/tauseefsshah",
                },
              ].map((socialMedia) => (
                <a
                  key={socialMedia.platform}
                  href={socialMedia.link}
                  target="_blank"
                  title={socialMedia.platform}
                  className="flex gap-1 items-center"
                >
                  {socialMedia.platform} <ArrowUpRight className="size-4" />
                </a>
              ))}
            </div>
            <div className="text-sm uppercase">
              &copy; {new Date().getFullYear()}. Tauseef Shah
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
