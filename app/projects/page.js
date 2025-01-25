import projects from "../../data/projects.json";

import { ArrowUpRight } from "lucide-react";

export default function Work() {
  return (
    <main className="space-y-20 py-20">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project, projectIndex) => (
          <div key={projectIndex} className="content-box">
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-bold uppercase">{project.title}</h3>
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
      </div>
    </main>
  );
}
