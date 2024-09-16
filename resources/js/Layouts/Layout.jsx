import logo from "../../svg/logo.svg";
import { Link } from "@inertiajs/react";
import SeoMetaTags from "@/Components/Front/SeoMetaTags";
import { AppWindowMac, Home, Inbox, UserCircle } from "lucide-react";
import {
  SiX,
  SiGithub,
  SiDiscord,
  SiTelegram,
  SiLinkedin,
} from "@icons-pack/react-simple-icons";

export default function Layout({ children, ...props }) {
  const currentRoute = route().current();

  return (
    <>
      <SeoMetaTags
        keywords={props.keywords ?? false}
        title={props.title ?? false}
        description={props.description ?? false}
        url={props.url ?? false}
        featured-image={props.featuredImage ?? false}
      />
      <header className="content-box my-8">
        <div className="flex justify-between items-center">
          <div
            id="logo"
            className="bg-white text-black rounded-full p-2 font-bold"
          >
            <img src={logo} height={25} width={25} alt="Tauseef Shah Logo" />
          </div>
          <nav id="logo">
            <ul className="flex gap-4">
              {[
                {
                  title: "Home",
                  icon: <Home className="h-5 w-5" />,
                  link: route("front.home"),
                  active: "front.home" === currentRoute,
                },
                {
                  title: "About",
                  icon: <UserCircle className="h-5 w-5" />,
                  link: route("front.about"),
                  active: "front.about" === currentRoute,
                },
                {
                  title: "Projects",
                  icon: <AppWindowMac className="h-5 w-5" />,
                  link: route("front.work"),
                  active: "front.work" === currentRoute,
                },
              ].map((navigationItem) => (
                <li
                  key={navigationItem.title}
                  className={
                    "p-2 rounded-full hover:bg-primary" +
                    (navigationItem.active ? " bg-primary" : "")
                  }
                >
                  <Link
                    href={navigationItem.link}
                    title={navigationItem.title}
                    aria-label={navigationItem.title}
                  >
                    {navigationItem.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div id="cta">
            <div
              className={
                "p-2 rounded-full hover:bg-primary" +
                ("front.contact" === currentRoute ? " bg-primary" : "")
              }
            >
              <Link
                href={route("front.contact")}
                title="Contact"
                aria-label="Contact"
              >
                <Inbox className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="content-box my-8">
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
