import fs from "fs";
import path from "path";
import { marked } from "marked";
import matter from "gray-matter";

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("data", "blogs"));

  const slugs = files.map((file) => {
    return file.replace(".md", "");
  });

  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default async function Page({ params }) {
  const { slug } = await params;

  const { data: meta, content } = matter(
    fs.readFileSync(path.join("data", "blogs", slug + ".md"))
  );

  const _content = marked(content);

  return (
    <main id="blog-content" className="space-y-8 py-20 max-w-(--breakpoint-sm) mx-auto">
      <div>
        <h1 className="text-7xl font-black">{meta.title}</h1>
        <p className="text-xl font-semiold">{meta.date}</p>
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
