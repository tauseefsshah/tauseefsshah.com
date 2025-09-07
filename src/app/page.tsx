import Image from "next/image";
import Link from "next/link";

import Blog from "@/components/blog";

import { ArrowUpRight, LucideIcon, MailIcon, VideoIcon } from "lucide-react";

import CivicDataLab from "@/../public/experience-logos/civicdatalab.jpeg";
import Codefuel from "@/../public/experience-logos/codefuel.jpeg";
import Flynterest from "@/../public/experience-logos/flynterest.jpeg";
import LunarTree from "@/../public/experience-logos/lunartree.jpeg";
import Orchardly from "@/../public/experience-logos/orchardly.jpeg";
import SuperDM from "@/../public/experience-logos/superdm.jpeg";
import TauseefShah from "@/../public/tauseef-shah.jpg";

interface Action {
  link: string;
  title: string;
  icon: LucideIcon;
  type?: "internal" | "external";
}

export default async function Page() {
  const actions: Action[] = [
    {
      title: "Send A Message",
      link: "mailto:hello@tauseefsshah.com",
      icon: MailIcon,
    },
    {
      title: "Book A Meeting",
      link: "https://cal.com/tauseefsshah/book-a-meeting",
      icon: VideoIcon,
      type: "external",
    },
  ];

  return (
    <main className="space-y-20 py-20">
      <section id="masthead" className="space-y-8">
        <div className="flex items-center gap-4">
          <Image
            alt="Tauseef Shah"
            src={TauseefShah.src}
            width={TauseefShah.width}
            height={TauseefShah.height}
            className="rounded-full size-32"
          />
          <div>
            <h1 className="text-4xl font-light">
              Hey, I'm <span className="font-black">Tauseef Shah</span>
            </h1>
            <h2 className="text-lg font-light text-black/40">
              Founding Engineer at LunarTree Inc
            </h2>
          </div>
        </div>
        <p className="text-lg leading-6">
          Hi, I'm Tauseef! A full stack engineer who loves to build and ship
          software. Currently in Bengaluru, I am trying to connect the dots,
          find meaning to life. Apart from software, aviation, finance,
          accounting, business, mathematics, and science interests and
          fascinates me.
        </p>
        <div className="flex gap-8 text-sm uppercase">
          {actions.map((action, actionIndex) => (
            <Link
              key={actionIndex}
              href={action.link}
              className="flex gap-2 items-center font-semibold"
              target={action.type === "external" ? "_blank" : "_self"}
            >
              <action.icon className="size-5" strokeWidth={2.5} />{" "}
              {action.title}
            </Link>
          ))}
        </div>
      </section>

      <section id="projects">
        <h1 className="mb-2 text-base text-black/40 font-bold">Experience</h1>

        <div className="space-y-4">
          {[
            {
              logo: LunarTree,
              organization: "LunarTree",
              title: "Founding Engineer",
              workDuration: "Feb 2025 - Present",
            },
            {
              logo: SuperDM,
              organization: "SuperDM",
              title: "Frontend Engineer",
              workDuration: "Nov 2024 - Jan 2025",
            },
            {
              logo: Flynterest,
              organization: "Flynterest",
              title: "Co-Founder",
              workDuration: "Apr 2024 - Oct 2025",
            },
            {
              logo: CivicDataLab,
              organization: "CivicDataLab",
              title: "Full Stack Engineer",
              workDuration: "Jan 2022 - Apr 2024",
            },
            {
              logo: Orchardly,
              organization: "Orchardly",
              title: "Founding Engineer",
              workDuration: "Jan 2021 - Dec 2021",
            },
            {
              logo: Codefuel,
              organization: "Codefuel",
              title: "Founder",
              workDuration: "Jan 2017 - Dec 2020",
            },
          ].map((_, index) => (
            <div key={index} className="flex gap-4">
              <Image
                src={_.logo}
                alt={_.title}
                width={_.logo.width}
                height={_.logo.height}
                className="size-8 rounded-full"
              />
              <div className="w-full font-bold text-sm text-black/40">
                <h2 className="text-base leading-8 font-light">{_.title}</h2>
                <div className="flex justify-between text-black">
                  <p>{_.organization}</p>
                  <p>[{_.workDuration}]</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <Link href="/experience" className="underline">
            Know more
          </Link>{" "}
          about my experience
        </div>
      </section>

      <section id="blog">
        <h1 className="mb-2 text-base text-black/40 font-bold">Writing</h1>
        <div className="space-y-8">
          <Blog limit={3} showExcerpt={false} />

          <div>
            <Link className="flex gap-1 items-center" href="/blog">
              Read More <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
