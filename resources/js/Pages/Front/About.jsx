import Layout from "@/Layouts/Layout";
import PageTitle from "@/Components/Front/PageTitle";

export default function () {
  const technologyStack = [
    {
      title: "Frontend",
      technologies: [
        "AlpineJS",
        "ReactJS",
        "JQuery",
        "Vanilla JS",
        "TailwindCSS",
        "Bootstrap",
        "PostCSS",
        "NPM",
        "Vite",
        "Webpack",
        "Shadcn UI",
        "Zod",
      ],
    },
    {
      title: "Backend",
      technologies: [
        "Laravel",
        "PHP",
        "MySQL",
        "Postgres",
        "Redis",
        "Wordpress",
        "NodeJS",
        "AdonisJS",
      ],
    },
    {
      title: "Data Science",
      technologies: [
        "Python",
        "NumPy",
        "Pandas",
        "Selenium",
        "Apache Superset",
      ],
    },
    {
      title: "Integrations",
      technologies: [
        "Stripe",
        "Razorpay",
        "Fathom Analytics",
        "Google Analytics",
        "Google Maps",
        "Mailcoach",
        "Mailchimp",
        "Sendgrid",
      ],
    },
    {
      title: "Server",
      technologies: ["AWS", "Digital Ocean", "Ubuntu", "Nginx", "Apache"],
    },
    {
      title: "Designing",
      technologies: ["Corel Draw", "Canva", "Corel PhotoPaint"],
    },
  ];

  const currentSetup = [
    {
      title: "Hardware",
      technologies: [
        "Macbook Air M2",
        "OnePlus 9R",
        "MSI Pro MP241x 24in Monitor",
        "Logitech MK215 Wireless Keyboard And Mouse",
        "Honeywell 7-in-1 Type C Dock Station",
        "Sennheiser SCWH14 Headset",
      ],
    },
    {
      title: "Software and Tools",
      technologies: [
        "VS Code",
        "Tmux",
        "Laravel Herd",
        "Table Plus",
        "DBngin",
        "iTerm2",
        "Clouflare Warp VPN",
        "Google Keep",
        "Google Todo",
        "Corel Draw Suite",
        "Notion",
        "Vyapar",
        "Google Chrome",
        "Safari",
        "Ploi",
        "Cloudflare",
        "Namecheap",
        "Google Workplace",
        "Digital Ocean",
        "Github",
        "ChapGPT",
      ],
    },
  ];

  return (
    <Layout>
      <div className="flex flex-col gap-8">
        <PageTitle title="ℹ️ About" />

        <section id="technology-stack" className="content-box">
          <div className="flex flex-col gap-8">
            <h3 className="text-xl font-bold uppercase underline underline-offset-8">
              Technology Stack
            </h3>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {technologyStack.map((stack, index) => (
                <div
                  key={index}
                  className="border-0 border-l-2 border-gray-300 pl-2"
                >
                  <h4 className="font-bold uppercase mb-2">{stack.title}</h4>
                  <ul className="flex gap-2 text-xs uppercase flex-wrap">
                    {stack.technologies.sort().map((el, index) => (
                      <li
                        className="px-2 py-1 bg-primary rounded-xl"
                        key={index}
                      >
                        {el}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="current-setup" className="content-box">
          <div className="flex flex-col gap-8">
            <h3 className="text-xl font-bold uppercase underline underline-offset-8">
              Current Setup
            </h3>
            <div className="grid grid-cols-1 gap-8">
              {currentSetup.map((stack, index) => (
                <div
                  key={index}
                  className="border-0 border-l-2 border-gray-300 pl-2"
                >
                  <h4 className="font-bold uppercase mb-2">{stack.title}</h4>
                  <ul className="flex gap-2 text-xs uppercase flex-wrap">
                    {stack.technologies.sort().map((el, index) => (
                      <li
                        className="px-2 py-1 bg-primary rounded-xl"
                        key={index}
                      >
                        {el}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
