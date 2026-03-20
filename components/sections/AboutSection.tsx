export default function AboutSection() {
  return (
    <section id="about" className="flex flex-col gap-6">
      <div className="flex items-center gap-6">
        <div className="w-20 h-20 rounded-full bg-indigo-600 flex items-center justify-center text-2xl font-bold text-white shrink-0">
          AM
        </div>
        <div>
          <h1 className="text-2xl font-bold text-zinc-100">Aleksandra Marszalek</h1>
          <p className="text-zinc-400 text-sm mt-1">Technical Lead · Senior Backend Engineer · Lifelong Learner</p>
        </div>
      </div>
      <div className="space-y-3 text-zinc-400 leading-relaxed">
        <p>
          Hey, I&apos;m Ola! <br/>I&apos;m a Technical Lead and Senior Backend Engineer who loves building things that
          actually matter - solutions that are both well-crafted and genuinely useful to the people using them.
          I get a lot of energy from working through hard problems and collaborating closely with the business. 
          I genuinely care about diversity, equity, and building workplaces where everyone can do their best work.
        </p>
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
    </section>
  );
}
