import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getAllPosts, getPostBySlug } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = getPostBySlug(slug);
    return { title: post.title, description: post.summary };
  } catch {
    return {};
  }
}

const mdxOptions = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
  },
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  return (
    <article className="flex flex-col gap-8">
      <Link
        href="/blog"
        className="flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors w-fit"
      >
        <ArrowLeft size={14} /> Back to blog
      </Link>

      <header className="flex flex-col gap-3">
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 leading-tight">{post.title}</h1>
        <div className="flex items-center gap-3 flex-wrap">
          <time className="text-sm text-zinc-500">{formatDate(post.date)}</time>
          {post.tags.length > 0 && (
            <div className="flex gap-2 flex-wrap">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-zinc-800 dark:text-zinc-300 bg-zinc-200 dark:bg-zinc-800 px-2 py-0.5 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        {post.summary && (
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed border-l-2 border-indigo-500 pl-4 text-justify">
            {post.summary}
          </p>
        )}
      </header>

      <hr className="border-zinc-200 dark:border-zinc-800" />

      <div className="prose text-justify">
        <MDXRemote source={post.content} options={mdxOptions} />
      </div>
    </article>
  );
}
