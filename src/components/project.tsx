'use client';

import { ArrowUpRight } from "lucide-react";

interface ProjectProps {
  project: {
    title: string;
    link: string;
    organisation: string;
    stack: string[];
    description: string;
  };
}

export default function Project({ project }: ProjectProps) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-md font-semibold uppercase">{project.title}</h3>
      <ul className="flex flex-wrap gap-2 text-xs uppercase">
        <li className="rounded-xl bg-white px-2 py-1 font-bold text-primary">
          {"" === project.link ? (
            project.organisation
          ) : (
            <a
              className="flex items-center gap-1"
              href={project.link}
              target="_blank"
            >
              {project.organisation}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
        </li>
        {project.stack.map((stack, stackIndex) => (
          <li key={stackIndex} className="rounded-xl bg-slate-100 px-2 py-1">
            {stack}
          </li>
        ))}
      </ul>
      <p className="text-sm">{project.description}</p>
    </div>
  );
} 