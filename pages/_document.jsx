import {
  SiDiscord,
  SiGithub,
  SiLinkedin,
  SiSignal,
  SiTelegram,
  SiX,
} from "@icons-pack/react-simple-icons";
import { AppWindowMac, Home, Inbox, UserCircle } from "lucide-react";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="body-container bg-primary-background text-white">
        <header className="content-box">
          <div className="flex justify-between items-center">
            <div
              id="logo"
              className="bg-white text-black rounded-full p-2 font-bold"
            >
              TS
            </div>
            <nav id="logo">
              <ul className="flex gap-4">
                <li className="p-2 rounded-full hover:bg-primary">
                  <Home className="h-5 w-5" />
                </li>
                <li className="p-2 rounded-full hover:bg-primary">
                  <UserCircle className="h-5 w-5" />
                </li>
                <li className="p-2 rounded-full hover:bg-primary">
                  <AppWindowMac className="h-5 w-5" />
                </li>
              </ul>
            </nav>
            <div id="cta">
              <div className="p-2 rounded-full hover:bg-primary">
                <Inbox className="h-5 w-5" />
              </div>
            </div>
          </div>
        </header>
        <Main />
        <footer className="content-box">
          <div className="flex flex-col gap-4 items-center">
            <div className="flex gap-4">
              {[
                {
                  platform: "x",
                  link: "https://x.com/tauseefsshah",
                  icon: <SiX className="h-5 w-5" />,
                },
                {
                  platform: "linkedin",
                  link: "https://linkedin.com/in/tauseefsshah",
                  icon: <SiLinkedin className="h-5 w-5" />,
                },
                {
                  platform: "github",
                  link: "https://github.com/tauseefsshah",
                  icon: <SiGithub className="h-5 w-5" />,
                },
                {
                  platform: "discord",
                  link: "https://discordapp.com/users/742727242823499847",
                  icon: <SiDiscord className="h-5 w-5" />,
                },
                {
                  platform: "signal",
                  link: "https://signal.me/#u/tauseefsshah.01",
                  icon: <SiSignal className="h-5 w-5" />,
                },
                {
                  platform: "telegram",
                  link: "https://t.me/tauseefsshah",
                  icon: <SiTelegram className="h-5 w-5" />,
                },
              ].map((socialMedia) => (
                <a
                  key={socialMedia.platform}
                  href={socialMedia.link}
                  target="_blank"
                  title={socialMedia.platform}
                >
                  {socialMedia.icon}
                </a>
              ))}
            </div>
            <div className="text-sm uppercase">
              &copy; {new Date().getFullYear()}. Tauseef Shah
            </div>
          </div>
        </footer>
        <NextScript />
      </body>
    </Html>
  );
}
