import fs from "fs";
import path from "path";

import matter from "gray-matter";
import { marked } from "marked";

interface IPageParams {
  params: Promise<{ slug: string }>;
}
interface IBlogMeta {
  title: string;
  date: string;
}

export function generateStaticParams() {
  const files = fs.readdirSync(path.join("src", "data", "blogs"));

  const slugs = files.map((file) => {
    return file.replace(".md", "");
  });

  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default async function Page({ params }: IPageParams) {
  const { slug } = await params;

  const fileContent = fs.readFileSync(
    path.join("src", "data", "blogs", slug + ".md")
  );
  const { data, content } = matter(fileContent);
  const meta = data as IBlogMeta;

  const _content = marked(content);

  return (
    <main
      id="blog-content"
      className="space-y-8 py-20 max-w-[--breakpoint-sm] mx-auto"
    >
      <div>
        <h1 className="text-7xl font-black">{meta.title}</h1>
        <p className="text-xl font-semibold">{meta.date}</p>
      </div>
      <article
        className="space-y-8 text-xl text-gray-500"
        dangerouslySetInnerHTML={{
          __html: _content,
        }}
      />
    </main>
  );
}
