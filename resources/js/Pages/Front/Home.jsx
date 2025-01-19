import Layout from "@/Layouts/Layout";
import { Link, Head } from "@inertiajs/react";
import TauseefShahProfilePhoto from "../../../img/tauseef-shah.jpg";
import { ArrowUpRight } from "lucide-react";

export default function () {
  return (
    <>
      <Head title="Home" />
      <Layout title="Home - Tauseef Shah">
        <section id="masthead" className="flex flex-col gap-8 py-20">
          <img
            src={TauseefShahProfilePhoto}
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
            Currently in Bengaluru, I am trying to connect the dots, find
            meaning to life and build something remarkable. Apart from software,
            aviation, accounting, business, mathematics, and science interests
            and fascinates me.
          </p>
          <p className="text-lg">
            I am a full stack engineer who loves to build and ship software.
            Currently in Bengaluru, I am trying to connect the dots, find
            meaning to life and build something remarkable. Apart from software,
            aviation, mathematics, accounting and science interests and
            fascinates me.
          </p>
          <div className="flex gap-4 text-sm uppercase">
            <Link
              className="flex-items-center rounded-lg border-2 border-primary p-2 hover:bg-slate-100 hover:no-underline"
              href="/work"
            >
              Know More ℹ️
            </Link>
            <Link
              className="flex-items-center rounded-lg border-2 border-primary p-2 hover:bg-slate-100 hover:no-underline"
              href="/work"
            >
              My Work 🧪
            </Link>
            <Link
              className="flex-items-center rounded-lg border-2 border-primary p-2 hover:bg-slate-100 hover:no-underline"
              href="mailto:hello@tauseefsshah.com"
              target="_blank"
            >
              Say Hello 👋
            </Link>
          </div>
        </section>

        <section id="blog-posts" className="py-20">
          <h1 className="mb-8 text-4xl font-bold">Blog Posts</h1>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
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
                stack: [
                  "Python",
                  "Postgres",
                  "Apache Superset",
                  "Pandas",
                  "AWS",
                ],
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
              <Link
                className="flex-items-center mt-8 rounded-lg border-2 border-primary bg-primary p-2 text-white hover:bg-primary-muted hover:no-underline"
                href="/about"
              >
                Read More
              </Link>
            </div>
          </div>
        </section>

        <section id="works" className="py-20">
          <h1 className="mb-8 text-4xl font-bold">Works</h1>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title:
                  "B2B Flight Inventory Management And Distribution Platform",
                link: "https://flynterest.com/?utm_source=tauseefsshah.com",
                organisation: "Flynterest",
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
                link: "https://supersetv2.civicdatalab.in/superset/dashboard/weekly-complaints/?utm_source=tauseefsshah.com",
                organisation: "CivicDataLab",
                stack: [
                  "Python",
                  "Postgres",
                  "Apache Superset",
                  "Pandas",
                  "AWS",
                ],
                description:
                  "Apache superset based dashboard to show complaints data for grievances registered in the Ahmedabad Smart City. The dashboard is used by the Ahmedabad Municipal Corportation to generate actionable insights.",
              },
              {
                title: "Wedding Cards Portfolio",
                link: "https://weddings.imprintskashmir.in/?utm_source=tauseefsshah.com",
                organisation: "Imprints",
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
            <div>
              <Link
                className="flex-items-center mt-8 rounded-lg border-2 border-primary bg-primary p-2 text-white hover:bg-primary-muted hover:no-underline"
                href="/about"
              >
                Know More
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
