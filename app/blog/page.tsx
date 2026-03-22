import type { Metadata } from "next";
import { getAllPosts } from "@/lib/mdx";
import BlogPostCard from "@/components/ui/BlogPostCard";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts on software, engineering, and things I'm learning.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Blog</h1>
        <p className="text-zinc-600 dark:text-zinc-400 mt-2">
          Thoughts on software, engineering, and things I&apos;m learning.
        </p>
      </div>
      {posts.length === 0 ? (
        <p className="text-zinc-500">No posts yet. Check back soon.</p>
      ) : (
        <div className="flex flex-col gap-4">
          {posts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
