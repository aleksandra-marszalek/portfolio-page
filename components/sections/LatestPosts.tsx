import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllPosts } from "@/lib/mdx";
import BlogPostCard from "@/components/ui/BlogPostCard";

export default function LatestPosts() {
  const posts = getAllPosts().slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <section id="blog">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Latest Posts</h2>
        <Link
          href="/blog"
          className="flex items-center gap-1 text-xs text-zinc-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
        >
          All posts <ArrowRight size={13} />
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <BlogPostCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
