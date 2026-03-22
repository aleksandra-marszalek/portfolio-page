"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function AboutSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="flex flex-col gap-6">
      <div className="flex items-center gap-6">
        <div className="w-20 h-20 rounded-full bg-indigo-600 flex items-center justify-center text-2xl font-bold text-white shrink-0">
          AM
        </div>
        <div>
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Aleksandra Marszalek</h1>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-1">Technical Lead · Senior Backend Engineer · Lifelong Learner</p>
        </div>
      </div>

      <div className="space-y-3 text-zinc-600 dark:text-zinc-400 leading-relaxed text-justify">
        {/* First paragraph - always visible */}
        <p>
          Hey, I&apos;m Ola! <br/>I&apos;m a Technical Lead and Senior Backend Engineer who loves building things that
          actually matter - solutions that are both well-crafted and genuinely useful to the people using them.
          I get a lot of energy from working through hard problems and collaborating closely with the business.
          I genuinely care about diversity, equity, and building workplaces where everyone can do their best work.
        </p>

        {/* Expandable content with smooth transition */}
        <div
          className={`space-y-3 transition-[max-height,opacity] duration-300 ease-in-out overflow-hidden ${
            isExpanded
              ? 'max-h-96 opacity-100'
              : 'max-h-0 opacity-0 md:max-h-96 md:opacity-100'
          }`}
        >
          <p>
           My core expertise is in Java, though I&apos;m increasingly drawn to AI tooling and its potential to
            transform how we build software. I love picking up new things - this portfolio is a good example of that,
            built with TypeScript, React, and Next.js, with a healthy assist from Claude Code.
          </p>
          <p>
            Outside of work, I&apos;m an accomplished ultimate frisbee player who has represented both Great Britain
            and Poland on the international stage. I&apos;m an avid reader, a film enthusiast, and a curious traveler.
            I also mentor people breaking into the tech industry for the first time - it&apos;s one of the most
            rewarding things I do.
          </p>
        </div>

        {/* Read More button - only visible on mobile */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="md:hidden flex items-center gap-1 text-sm text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors mt-2"
        >
          {isExpanded ? (
            <>
              Show less <ChevronUp size={16} />
            </>
          ) : (
            <>
              Read more <ChevronDown size={16} />
            </>
          )}
        </button>
      </div>
    </section>
  );
}
