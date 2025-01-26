"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname().split("/")[1];

  return (
    <nav id="navigation">
      <ul className="flex gap-8">
        {[
          {
            title: "About",
            link: "/about",
            active: pathname === "about",
          },
          {
            title: "Blog",
            link: "/blog",
            active: pathname === "blog",
          },
          {
            title: "Projects",
            link: "/projects",
            active: pathname === "projects",
          },
        ].map((navigationItem) => (
          <li
            key={navigationItem.title}
            className={
              navigationItem.active
                ? "text-primary underline underline-offset-8 decoration-2"
                : "text-primary-background"
            }
          >
            <Link
              href={navigationItem.link}
              title={navigationItem.title}
              aria-label={navigationItem.title}
              className=""
            >
              {navigationItem.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
