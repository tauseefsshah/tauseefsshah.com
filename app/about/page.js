export default function About() {
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
      title: "Backend & CMS",
      technologies: [
        "Laravel",
        "PHP",
        "MySQL",
        "Postgres",
        "Redis",
        "Wordpress",
        "Wix",
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
        "Iphone 15",
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
      ],
    },
  ];

  return (
    <main className="space-y-20 py-20">
      <section id="technology-stack">
        <div className="space-y-8">
          <h3 className="text-xl font-bold uppercase underline underline-offset-8">
            Technology Stack
          </h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {technologyStack.map((stack, index) => (
              <div
                key={index}
                className="border-0 border-l-2 border-gray-300 pl-2"
              >
                <h4 className="mb-2 font-bold uppercase">{stack.title}</h4>
                <ul className="flex flex-wrap gap-2 text-xs uppercase">
                  {stack.technologies.sort().map((el, index) => (
                    <li
                      className="rounded-xl bg-slate-100 px-2 py-1"
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

      <section id="current-setup">
        <div className="space-y-8">
          <h3 className="text-xl font-bold uppercase underline underline-offset-8">
            Current Setup
          </h3>
          <div className="grid grid-cols-1 gap-8">
            {currentSetup.map((stack, index) => (
              <div
                key={index}
                className="border-0 border-l-2 border-gray-300 pl-2"
              >
                <h4 className="mb-2 font-bold uppercase">{stack.title}</h4>
                <ul className="flex flex-wrap gap-2 text-xs uppercase">
                  {stack.technologies.sort().map((el, index) => (
                    <li
                      className="rounded-xl bg-slate-100 px-2 py-1"
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
    </main>
  );
}
