import Layout from "@/Layouts/Layout";
import { ArrowUpRight } from "lucide-react";
import PageTitle from "@/Components/Front/PageTitle";
import { Head } from "@inertiajs/react";

export default function () {
  const works = [
    {
      title: "B2B Flight Inventory Management And Distribution Platform",
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
      stack: ["Python", "Postgres", "Apache Superset", "Pandas", "AWS"],
      description:
        "Apache superset based dashboard to show complaints data for grievances registered in the Ahmedabad Smart City. The dashboard is used by the Ahmedabad Municipal Corportation to generate actionable insights.",
    },
    {
      title: "NFT For All Number",
      link: "https://1toinfinity.org/?utm_source=tauseefsshah.com",
      organisation: "Side Project",
      stack: ["NextJS", "React", "TailwindCSS", "DigitalOcean"],
      description:
        "Solana network based weekly generated NFT's for all the numbers.",
    },
    {
      title:
        "Government Schemes Open Sourced Data At District and Constituency Levels In India",
      link: "https://openbudgetsindia.org/?utm_source=tauseefsshah.com",
      organisation: "CiviDataLab",
      stack: ["Python", "Selenium", "Pandas", "CKAN", "React", "AWS"],
      description:
        "Data scraping and ETL for district and constituency level data for different schemes operated by state and central governments in India for multiple fiscal years.",
    },
    {
      title: "Open Sourced Data For Urban Cities In India",
      link: "https://opencity.in/?utm_source=tauseefsshah.com",
      organisation: "CivicDataLab",
      stack: ["Wordpress", "MySQL", "Bootstrap", "AWS"],
      description:
        "Code cleanup, UI fixes and PHP & wordpress upgrades for the legacy wordpress website for OpenCity India where open sourced datasets from multiple Indian urban cities are hosted.",
    },
    {
      title: "Wedding Cards Portfolio",
      link: "https://weddings.imprintskashmir.in/?utm_source=tauseefsshah.com",
      organisation: "Imprints",
      stack: ["React", "NextJS", "TailwindCSS", "Vercel"],
      description:
        "Wedding potfolio website for a digital printing and wedding studio. The website uses google sheets as a db to retrive the porfolio wedding cards.",
    },
    {
      title: "Digital Printing Online Store",
      link: "https://shop.sheengraphics.com/?utm_source=tauseefsshah.com",
      organisation: "Sheen Graphics",
      stack: ["Wordpress", "WooCommerce", "MySQL", "DigitalOcean"],
      description:
        "Wordpress based ecommerce store for a digital printing and solutions brand. Uses WooCommerce for inventory management and sale.",
    },
    {
      title: "Orchard Management Solutions",
      link: "https://orchardly.co/?utm_source=tauseefsshah.com",
      organisation: "Orchardly",
      stack: ["Laravel", "MySQL", "Livewire", "TailwindCSS"],
      description:
        "Developed backend API's for mobile app use. The functionality included authentication, weather data ETL and analysis, orchard management modules and accounting module.",
    },
    {
      title: "Event Management Platform",
      link: "",
      organisation: "Cybercrew - DPS Srinagar",
      stack: ["Codeignitor", "MySQL", "Bootstrap", "AWS"],
      description:
        "Maintained and upgraded a legacy customised event managment web application used for J&K's largest tech workshop for students.",
    },
  ];

  return (
    <>
      <Head title="Work" />
      <Layout>
        <div className="flex flex-col gap-8">
          <PageTitle title="🧪 Work" />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {works.map((project, projectIndex) => (
              <div key={projectIndex} className="content-box">
                <div className="flex flex-col gap-4">
                  <h3 className="text-lg font-bold uppercase">
                    {project.title}
                  </h3>
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
      </Layout>
    </>
  );
}
