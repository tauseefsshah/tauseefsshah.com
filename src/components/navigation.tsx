"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDownIcon } from "lucide-react";

interface INavigationSubItem {
  link: string;
  title: string;
}

interface INavigationItem {
  title: string;
  active: boolean;
  link: string | null;
  items?: INavigationSubItem[];
}

export default function Navigation() {
  const pathname = usePathname().split("/")[1];

  const navigationItems: INavigationItem[] = [
    {
      title: "About",
      link: "/about",
      active: pathname === "about",
    },
    {
      title: "Projects",
      link: "/projects",
      active: pathname === "projects",
    },
    {
      title: "Collections",
      link: null,
      active: ["collections", "blog"].includes(pathname),
      items: [
        {
          title: "Blog",
          link: "/blog",
        },
        {
          title: "Books",
          link: "/collections/books",
        },
        {
          title: "Quotes",
          link: "/collections/quotes",
        },
        {
          title: "YouTube",
          link: "/collections/youtube",
        },
        {
          title: "Proverbs",
          link: "/collections/proverbs",
        },
      ],
    },
  ];

  return (
    <nav id="navigation">
      <ul className="flex space-x-6">
        {navigationItems.map((navigationItem) => {
          if (navigationItem.items) {
            return (
              <DropdownMenu key={navigationItem.title}>
                <DropdownMenuTrigger asChild>
                  <li
                    key={navigationItem.title}
                    className={
                      navigationItem.active
                        ? "text-primary underline underline-offset-8 decoration-2"
                        : "text-primary-background"
                    }
                  >
                    <Link href={navigationItem.link ?? "#"}>
                      {navigationItem.title}
                    </Link>
                  </li>
                </DropdownMenuTrigger>

                <DropdownMenuContent
                  align="end"
                  className="min-w-20 mt-1 py-2 shadow-none"
                >
                  {navigationItem.items.map((item) => (
                    <DropdownMenuItem key={item.title} asChild>
                      <Link className="!no-underline" href={item.link}>
                        {item.title}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            );
          }

          return (
            <li
              key={navigationItem.title}
              className={
                navigationItem.active
                  ? "text-primary underline underline-offset-8 decoration-2"
                  : "text-primary-background"
              }
            >
              <Link
                title={navigationItem.title}
                aria-label={navigationItem.title}
                href={navigationItem.link ?? "#"}
              >
                {navigationItem.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
