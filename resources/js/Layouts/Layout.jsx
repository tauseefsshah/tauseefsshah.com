import logo from "../../svg/logo.svg";
import { Link } from "@inertiajs/react";
import SeoMetaTags from "@/Components/Front/SeoMetaTags";
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
      <header className="py-4">
        <div className="flex items-center justify-between">
          <div
            id="logo"
            className="rounded-full bg-white p-2 font-bold text-black"
          >
            <Link href="/">
              <img src={logo} height={25} width={25} alt="Tauseef Shah Logo" />
            </Link>
          </div>
          <nav id="navigation">
            <ul className="flex gap-8">
              {[
                {
                  title: "About",
                  link: route("front.about"),
                  active: "front.about" === currentRoute,
                },
                {
                  title: "Projects",
                  link: route("front.work"),
                  active: "front.work" === currentRoute,
                },
                {
                  title: "Contact",
                  link: route("front.contact"),
                  active: "front.contact" === currentRoute,
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
