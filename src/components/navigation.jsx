"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(pathname.split("/")[1]);
  }, [pathname]);

  return (
    <nav id="navigation">
      <ul className="flex gap-8">
        {[
          {
            title: "About",
            link: "/about",
            active: currentPath === "about",
          },
          {
            title: "Blog",
            link: "/blog",
            active: currentPath === "blog",
          },
          {
            title: "Projects",
            link: "/projects",
            active: currentPath === "projects",
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
