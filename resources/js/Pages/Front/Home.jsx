import Typed from "typed.js";
import { useEffect } from "react";
import Layout from "@/Layouts/Layout";
import { Link, Head } from "@inertiajs/react";
import TauseefShahProfilePhoto from "../../../img/tauseef-shah.jpg";

export default function () {
  useEffect(function () {
    new Typed("#job-titles", {
      strings: ["Developer", "Engineer", "Designer"],
      loop: true,
      backSpeed: 25,
      typeSpeed: 150,
      backDelay: 2000,
      showCursor: false,
    });
  }, []);

  return (
    <>
      <Head title="Home" />
      <Layout title="Home - Tauseef Shah">
        <section
          id="masthead"
          className="flex flex-col items-center gap-10 py-20"
        >
          <img
            src={TauseefShahProfilePhoto}
            className="rounded-full"
            alt="Tauseef Shah"
            width={250}
            height={250}
          />
          <div id="heading" className="flex flex-col gap-1">
            <h1 className="-rotate-3 text-center text-6xl font-bold capitalize">
              Tauseef Shah
            </h1>
            <h2 className="flex -rotate-3 justify-center gap-2 bg-white p-1 text-center text-3xl font-bold capitalize text-primary">
              Professional{" "}
              <span id="job-titles" className="text-red-700"></span>
            </h2>
          </div>
          <div className="flex gap-4 text-sm uppercase">
            <a
              className="flex items-center rounded-lg bg-primary p-2 transition-all hover:bg-primary-background"
              href="mailto:hello@tauseefsshah.com"
              target="_blank"
            >
              Say Hello 👋
            </a>
            <Link
              className="flex-items-center rounded-lg border-2 border-primary p-2 hover:border-primary-background hover:bg-primary-background"
              href="/work"
            >
              My Work 🧪
            </Link>
          </div>
        </section>
      </Layout>
    </>
  );
}
