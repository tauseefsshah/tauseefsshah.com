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
    <main className="space-y-8 py-20 max-w-screen-sm mx-auto">
      <div>
        <h2 className="text-2xl font-semibold">{meta.title}</h2>
        <p className="font-semiold text-slate-600">{meta.date}</p>
      </div>
      <article
        className="text-slate-600"
        dangerouslySetInnerHTML={{
          __html: _content,
        }}
      />
    </main>
  );
}
