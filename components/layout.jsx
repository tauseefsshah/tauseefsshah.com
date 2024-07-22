import Link from "next/link";
import { AppWindowMac, Home, Inbox, UserCircle } from "lucide-react";
import {
  SiDiscord,
  SiGithub,
  SiLinkedin,
  SiSignal,
  SiTelegram,
  SiX,
} from "@icons-pack/react-simple-icons";
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
  const pathname = usePathname();

  return (
    <>
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
              {[
                {
                  title: "Home",
                  icon: <Home className="h-5 w-5" />,
                  link: "/",
                  active: "/" === pathname,
                },
                {
                  title: "About",
                  icon: <UserCircle className="h-5 w-5" />,
                  link: "/about",
                  active: "about" === pathname,
                },
                {
                  title: "Projects",
                  icon: <AppWindowMac className="h-5 w-5" />,
                  link: "/projects",
                  active: "projects" === pathname,
                },
              ].map((navigationItem) => (
                <Link key={navigationItem.title} href={navigationItem.link}>
                  <li
                    title={navigationItem.title}
                    className={
                      "p-2 rounded-full hover:bg-primary" +
                      (navigationItem.link === pathname ? " bg-primary" : "")
                    }
                  >
                    {navigationItem.icon}
                  </li>
                </Link>
              ))}
            </ul>
          </nav>
          <div id="cta">
            <div
              className={
                "p-2 rounded-full hover:bg-primary" +
                ("/contact" === pathname ? " bg-primary" : "")
              }
            >
              <Link href="/contact">
                <Inbox className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main>{children}</main>

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
    </>
  );
}
