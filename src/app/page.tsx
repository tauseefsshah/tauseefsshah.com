import allProjects from "@/data/projects.json";

import Link from "next/link";
import Image from "next/image";

import { ArrowUpRight } from "lucide-react";
import Project from "@/components/project";
import Blog from "@/components/blog";

interface Action {
  title: string;
  link: string;
}

export default async function Page() {
  const projects = allProjects.slice(0, 4);

  const actions: Action[] = [
    {
      title: "Know More",
      link: "/about",
    },
    {
      title: "Say Hello",
      link: "mailto:hello@tauseefsshah.com",
    },
  ];

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
          {actions.map((action, actionIndex) => (
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

      <section id="blog">
        <h1 className="mb-8 text-4xl font-bold">Blog</h1>
        <div className="space-y-8">
          <Blog limit={3} />

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