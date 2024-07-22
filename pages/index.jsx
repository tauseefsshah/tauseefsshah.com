import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="content-box">
        <div className="flex flex-col gap-8">
          <div className="flex justify-between uppercase text-xs">
            <p>Full Stack Engineer</p>
            <p className="bg-green-500/20 px-2 py-1 rounded-xl">
              Available For Hire
            </p>
          </div>
          <div className="flex gap-8 justify-between items-center flex-col lg:flex-row">
            <div className="flex flex-col gap-8 flex-1">
              <h2 className="text-2xl">I&apos;m Tauseef Shah</h2>
              <h3>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Consectetur, voluptatem!
              </h3>
              <div className="flex gap-4 text-sm uppercase">
                <Link
                  className="bg-[#363636] hover:bg-black/40 p-2 rounded-lg"
                  href="/"
                >
                  Hire Me
                </Link>
                <Link
                  className="border-[#363636] border-2 hover:bg-black/40 hover:border-black/40 p-2 rounded-lg"
                  href="/"
                >
                  Copy Email
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
    </main>
  );
}
