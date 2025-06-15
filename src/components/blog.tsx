import Link from "next/link";

import fs from "fs";
import matter from "gray-matter";
import path from "path";

interface BlogMeta {
  title: string;
  date: string;
  excerpt: string;
}

interface Blog {
  slug: string;
  meta: BlogMeta;
}

interface BlogProps {
  limit?: number;
}

async function getBlogs(): Promise<Blog[]> {
  const files = fs.readdirSync(path.join(process.cwd(), "src", "data", "blogs"));

  const blogs = files.map((file) => {
    const slug = file.replace(".md", "");
    const meta = matter(fs.readFileSync(path.join(process.cwd(), "src", "data", "blogs", file))).data as BlogMeta;

    return {
      slug,
      meta,
    };
  });

  return blogs.sort((a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime());
}

export default async function Blog({ limit }: BlogProps) {
  const blogs = await getBlogs();

  return (
    <div className="space-y-8">
      {blogs.slice(0, limit).map((blog) => (
        <div key={blog.slug} className="space-y-4">
          <div className="space-y-2">
            <Link href={`/blog/${blog.slug}`}>
              <h2 className="text-2xl font-semibold">{blog.meta.title}</h2>
            </Link>
            <p className="font-semiold text-slate-600">{blog.meta.date}</p>
          </div>
          <p className="text-slate-600 line-clamp-3">{blog.meta.excerpt}</p>
        </div>
      ))}
    </div>
  );
}