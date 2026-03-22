"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="w-4" />;

  const isDark = theme === "dark";

  return (
    <div className="relative group/tooltip">
      <button
        onClick={() => setTheme(isDark ? "light" : "dark")}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        className="flex items-center text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
      >
        {isDark ? <Moon size={16} /> : <Sun size={16} />}
      </button>
      <span className="pointer-events-none absolute right-0 top-full mt-2 whitespace-nowrap rounded-md bg-zinc-800 px-2 py-1 text-xs text-zinc-100 opacity-0 transition-opacity group-hover/tooltip:opacity-100 dark:bg-zinc-700">
        {isDark ? "Switch to light mode" : "Switch to dark mode"}
      </span>
    </div>
  );
}
