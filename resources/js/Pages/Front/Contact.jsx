import { Link } from "@inertiajs/react";
import Layout from "@/Layouts/Layout";
import PageTitle from "@/Components/Front/PageTitle";

export default function () {
  return (
    <Layout>
      <div className="flex flex-col gap-8">
        <PageTitle title="👋 Contact" />
        <section id="contact">
          <div className="content-box flex flex-col gap-8">
            {[
              {
                name: "X",
                link: "https://x.com/tauseefsshah",
              },
              {
                name: "Email",
                link: "mailo:hello@tauseefsshah.com",
              },
              {
                name: "Discord",
                link: "https://discordapp.com/users/742727242823499847",
              },
              {
                name: "LinkedIn",
                link: "https://linkedin.com/in/tauseefsshah",
              },
              {
                name: "Telegram",
                link: "https://t.me/tauseefsshah",
              },
            ].map((app, index) => (
              <Link
                key={index}
                href={app.link}
                className="text-6xl uppercase font-bold"
                target="_blank"
              >
                {app.name}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}
