import PageTitle from "@/components/page-title";
import works from "@/data/works";
import { ArrowUpRight } from "lucide-react";

export default function work() {
  return (
    <div className="flex flex-col gap-8">
      <PageTitle title="🧪 Work" />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {works.map((project, projectIndex) => (
          <div key={projectIndex} className="content-box">
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-bold uppercase">{project.title}</h3>
              <ul className="flex gap-2 text-xs uppercase flex-wrap">
                <li className="px-2 py-1 bg-white text-primary rounded-xl font-bold">
                  {"" === project.link ? (
                    project.organisation
                  ) : (
                    <a
                      className="flex gap-1 items-center"
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
                    className="px-2 py-1 bg-primary rounded-xl"
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
    </div>
  );
}
