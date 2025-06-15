"use client";

import { ArrowUpRight } from "lucide-react";

interface SocialMedia {
  platform: string;
  link: string;
}

function Footer() {
  const socialMediaLinks: SocialMedia[] = [
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
  ];

  return (
    <footer className="box-container my-8">
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-wrap justify-center gap-4">
          {socialMediaLinks.map((socialMedia) => (
            <a
              target="_blank"
              href={socialMedia.link}
              key={socialMedia.platform}
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
  );
}

export default Footer;
