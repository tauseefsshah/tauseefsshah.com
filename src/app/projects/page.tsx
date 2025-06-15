import Project from "@/components/project";
import projects from "../../data/projects.json";

interface Project {
  title: string;
  link: string;
  organisation: string;
  stack: string[];
  description: string;
}

export default function Page() {
  return (
    <main className="space-y-20 py-20">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project: Project, projectIndex: number) => (
          <Project key={projectIndex} project={project} />
        ))}
      </div>
    </main>
  );
} 