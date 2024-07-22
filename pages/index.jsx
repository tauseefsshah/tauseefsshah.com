import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section id="masthead" className="content-box flex flex-col gap-8">
      <div className="flex flex-col gap-8">
        <div className="flex justify-between items-center uppercase text-xs">
          <p>Full Stack Engineer</p>
          <p className="bg-green-500/20 px-2 py-1 rounded-xl">
            Available For Hire
          </p>
        </div>
        <div className="flex gap-8 justify-between items-center flex-col lg:flex-row">
          <div className="flex flex-col gap-8 flex-1">
            <h2 className="text-2xl">Hi! I&apos;m Tauseef Shah</h2>
            <h3 className="text-justify">
              I&apos;m a full stack engineer who loves building awesome
              beautiful web applications. I love building these web application
              with Laravel, TailwindCSS and React.
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
              width={500}
              height={500}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
