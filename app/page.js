import allProjects from "../data/projects.json";

import Link from "next/link";
import Image from "next/image";

import { ArrowUpRight } from "lucide-react";
import Project from "@/components/project";

export default function Home() {
  const projects = allProjects.slice(0, 4);

  return (
    <main className="space-y-40 py-20">
      <section id="masthead" className="space-y-8">
        <Image
          src="/tauseef-shah.jpg"
          className="rounded-full"
          alt="Tauseef Shah"
          width={200}
          height={200}
        />
        <p className="text-2xl text-primary">
          Full Stack Engineer | Build, Ship, Repeat
        </p>
        <p className="text-lg">
          I am a full stack engineer who loves to build and ship software.
          Currently in Bengaluru, I am trying to connect the dots, find meaning
          to life and build something remarkable. Apart from software, aviation,
          finance, accounting, business, mathematics, and science interests and
          fascinates me.
        </p>
        <div className="flex gap-4 text-sm uppercase">
          {[
            {
              title: "Know More",
              link: "/about",
            },
            {
              title: "Say Hello",
              link: "mailto:hello@tauseefsshah.com",
            },
          ].map((action, actionIndex) => (
            <Link
              className="flex gap-1 items-center"
              href={action.link}
              key={actionIndex}
            >
              {action.title} <ArrowUpRight className="size-4" />
            </Link>
          ))}
        </div>
      </section>

      {/* <section id="blog-posts">
        <h1 className="mb-8 text-4xl font-bold">Blog Posts</h1>
        <div className="space-y-8">
          {[
            {
              title:
                "B2B Flight Inventory Management And Distribution Platform",
              stack: [
                "Laravel",
                "MySQL",
                "React",
                "TailwindCSS",
                "InertiaJS",
                "AlpineJS",
                "DigitalOcean",
              ],
              description:
                "Web based flight inventory management application called Flynterest Manager which is used by travel agents to manage their pre purchased flight inventory. The same inventory is aggreagated and distributed through Flynterest Marketplace.",
            },
            {
              title: "Superset Complaints Dashboard For Ahmedabad Smart City",
              stack: ["Python", "Postgres", "Apache Superset", "Pandas", "AWS"],
              description:
                "Apache superset based dashboard to show complaints data for grievances registered in the Ahmedabad Smart City. The dashboard is used by the Ahmedabad Municipal Corportation to generate actionable insights.",
            },
            {
              title: "Wedding Cards Portfolio",
              stack: ["React", "NextJS", "TailwindCSS", "Vercel"],
              description:
                "Wedding potfolio website for a digital printing and wedding studio. The website uses google sheets as a db to retrive the porfolio wedding cards.",
            },
          ].map((project, projectIndex) => (
            <div key={projectIndex} className="content-box">
              <div className="flex flex-col gap-4">
                <h3 className="text-md font-semibold uppercase">
                  {project.title}
                </h3>
                <ul className="flex flex-wrap gap-2 text-xs uppercase">
                  {project.stack.map((stack, stackIndex) => (
                    <li
                      key={stackIndex}
                      className="rounded-xl bg-slate-100 px-2 py-1"
                    >
                      {stack}
                    </li>
                  ))}
                </ul>
                <p className="text-sm">{project.description}</p>
              </div>
            </div>
          ))}
          <div>
            <Link className="flex gap-1 items-center" href="/about">
              Read More <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </section> */}

      <section id="projects">
        <h1 className="mb-8 text-4xl font-bold">Projects</h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, projectIndex) => (
            <Project key={projectIndex} project={project} />
          ))}
          <div>
            <Link className="flex gap-1 items-center" href="/projects">
              Know More <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
