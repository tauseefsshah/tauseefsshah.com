import Link from "next/link";
import Image from "next/image";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <>
      <NextSeo title="Home - Tauseef Shah" />

      <section id="masthead" className="content-box flex flex-col gap-8">
        <div className="flex flex-col gap-8">
          <div className="flex gap-8 justify-between items-center flex-col lg:flex-row">
            <div className="flex flex-col gap-8 flex-1">
              <h2 className="text-4xl">Hi! I&apos;m Tauseef Shah</h2>
              <h3 className="text-xl text-white/50">
                Full-stack engineer who loves building things, from simple tools
                to complex web applications.
              </h3>
              <div className="flex gap-4 text-sm uppercase">
                <Link
                  className="flex items-center bg-primary hover:bg-primary-background transition-all p-2 rounded-lg"
                  href="/"
                >
                  CTA CTA 1
                </Link>
                <Link
                  className="flex-items-center border-primary border-2 hover:bg-primary-background hover:border-primary-background  p-2 rounded-lg"
                  href="/"
                >
                  CTA CTA 2
                </Link>
              </div>
            </div>
            <div className="flex-1">
              <Image
                src="/tauseef-shah.jpg"
                className="h-auto w-full max-w-60 rounded-full lg:ml-auto"
                alt="Tauseef Shah"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
