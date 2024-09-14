import Layout from "@/Layouts/Layout";
import { Link, Head } from "@inertiajs/react";
import TauseefShahProfilePhoto from "../../../img/tauseef-shah.jpg";

export default function () {
  return (
    <>
      <Head title="Home" />
      <Layout>
        <section id="masthead" className="content-box flex flex-col gap-8">
          <div className="flex flex-col gap-8">
            <div className="flex gap-8 justify-between items-center flex-col lg:flex-row">
              <div className="flex flex-col gap-8 flex-1">
                <h2 className="text-4xl">Hi! I&apos;m Tauseef Shah</h2>
                <h3 className="text-xl text-white/50">
                  Full-stack engineer who loves building things, from simple
                  tools to complex web applications.
                </h3>
                <div className="flex gap-4 text-sm uppercase">
                  <Link
                    className="flex items-center bg-primary hover:bg-primary-background transition-all p-2 rounded-lg"
                    href="mailto:hello@tauseefsshah.com"
                    target="_blank"
                  >
                    Say Hello 👋
                  </Link>
                  <Link
                    className="flex-items-center border-primary border-2 hover:bg-primary-background hover:border-primary-background  p-2 rounded-lg"
                    href="/work"
                  >
                    My Work 🧪
                  </Link>
                </div>
              </div>
              <div className="flex-1">
                <img
                  src={TauseefShahProfilePhoto}
                  className="rounded-full lg:ml-auto"
                  alt="Tauseef Shah"
                  width={250}
                  height={250}
                  priority
                />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
