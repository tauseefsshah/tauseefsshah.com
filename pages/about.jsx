import PageTitle from "@/components/page-title";

const technologyStack = [
  {
    title: "Frontend",
    technologies: [
      "AlpineJS",
      "ReactJS",
      "jQuery",
      "Vanilla JS",
      "TailwindCSS",
      "Bootstrap",
      "PostCSS",
      "NPM",
      "Vite",
      "Webpack",
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
    title: "Server",
    technologies: ["AWS", "Digital Ocean", "Ubuntu", "Nginx", "Apache"],
  },
  {
    title: "Integrations",
    technologies: [
      "Stripe",
      "Razorpay",
      "Fathom Analytics",
      "Google Analytics",
      "Google Maps",
      "Google Tag Manager",
      "Mailcoach",
      "Mailchimp",
      "Sendgrid",
    ],
  },
  {
    title: "Designing",
    technologies: ["Corel Draw", "Canva", "Corel PhotoPaint"],
  },
  {
    title: "Data Science",
    technologies: ["Python", "NumPy", "Pandas", "Selenium", "Apache Superset"],
  },
];
export default function About() {
  return (
    <div className="flex flex-col gap-8">
      <PageTitle title="ℹ️ About" />

      <div className="content-box">
        <div className="flex flex-col gap-8">
          <h3 className="text-xl font-bold uppercase underline underline-offset-8">
            Technology Stack
          </h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {technologyStack.map((stack, index) => (
              <div
                key={index}
                className="border-0 border-l-2 border-gray-300 pl-2"
              >
                <h4 className="font-bold uppercase mb-2">{stack.title}</h4>
                <ul className="flex gap-2 text-xs uppercase flex-wrap">
                  {stack.technologies.sort().map((el, index) => (
                    <li className="px-2 py-1 bg-primary rounded-xl" key={index}>
                      {el}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="content-box">
        <div className="flex flex-col gap-8">
          <h3 className="text-xl font-bold uppercase underline underline-offset-8">
            Current Setup
          </h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {technologyStack.map((stack, index) => (
              <div key={index} className="border-0 border-l-2 border-gray-300 pl-2">
                <h4 className="font-bold uppercase mb-2">{stack.title}</h4>
                <ul className="flex gap-2 text-xs uppercase flex-wrap">
                  {stack.technologies.sort().map((el, index) => (
                    <li className="px-2 py-1 bg-primary rounded-xl" key={index}>
                      {el}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
