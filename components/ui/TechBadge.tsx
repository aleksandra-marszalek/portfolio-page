export default function TechBadge({ label }: { label: string }) {
  return (
    <span className="inline-block rounded-md bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 text-xs font-medium text-zinc-700 dark:text-zinc-300">
      {label}
    </span>
  );
}
