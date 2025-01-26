import Link from "next/link";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function Blog() {
  const files = fs.readdirSync(path.join("data", "blogs"));

  const blogs = files.map((file) => {
    const slug = file.replace(".md", "");

    const meta = matter(fs.readFileSync(path.join("data", "blogs", file))).data;

    return {
      slug,
      meta,
    };
  });

  blogs.sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date));

  return (
    <main className="space-y-20 py-20 max-w-screen-sm mx-auto">
      <div className="space-y-8">
        {blogs.map((blog) => (
          <div key={blog.slug} className="space-y-4">
            <div className="space-y-2">
              <Link href={`/blog/${blog.slug}`}>
                <h2 className="text-2xl font-semibold">{blog.meta.title}</h2>
              </Link>
              <p className="font-semiold text-slate-600">{blog.meta.date}</p>
            </div>
            <p className="text-slate-600 line-clamp-2">{blog.meta.excerpt}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
