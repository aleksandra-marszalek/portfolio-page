export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 mt-24">
      <div className="mx-auto max-w-3xl px-6 py-8 text-center text-sm text-zinc-500">
        <p>
          Built with{" "}
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors underline underline-offset-2"
          >
            Next.js
          </a>{" "}
          &amp; Tailwind CSS · {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
