import Link from "next/link";
import { formatDate } from "@/lib/utils";
import { BlogPostMeta } from "@/types";

export default function BlogPostCard({ post }: { post: BlogPostMeta }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="block rounded-xl border border-zinc-200 bg-white p-6 hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700 transition-colors group"
    >
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between gap-4">
          <h3 className="font-semibold text-zinc-900 group-hover:text-indigo-600 dark:text-zinc-100 dark:group-hover:text-indigo-400 transition-colors line-clamp-2 min-w-0">
            {post.title}
          </h3>
          <time className="text-xs text-zinc-500 shrink-0">{formatDate(post.date)}</time>
        </div>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed text-justify">{post.summary}</p>
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-1">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-zinc-500 bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
