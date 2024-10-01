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
          className="py-20 flex flex-col gap-10 items-center"
        >
          <img
            src={TauseefShahProfilePhoto}
            className="rounded-full"
            alt="Tauseef Shah"
            width={250}
            height={250}
          />
          <div id="heading" className="flex flex-col gap-1">
            <h1 className="text-6xl font-bold text-center -rotate-3 capitalize">
              Tauseef Shah
            </h1>
            <h2 className="text-3xl font-bold text-center -rotate-3 capitalize bg-white p-1 text-primary flex gap-2 justify-center">
              Professional{" "}
              <span id="job-titles" className="text-red-700"></span>
            </h2>
          </div>
          <div className="flex gap-4 text-sm uppercase">
            <a
              className="flex items-center bg-primary hover:bg-primary-background transition-all p-2 rounded-lg"
              href="mailto:hello@tauseefsshah.com"
              target="_blank"
            >
              Say Hello 👋
            </a>
            <Link
              className="flex-items-center border-primary border-2 hover:bg-primary-background hover:border-primary-background  p-2 rounded-lg"
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
