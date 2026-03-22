import { Github, Linkedin, Mail, FileDown } from "lucide-react";

const links = [
  {
    label: "GitHub",
    href: "https://github.com/aleksandra-marszalek",
    icon: Github,
    description: "See my projects",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aleksandramarszalek/",
    icon: Linkedin,
    description: "Connect with me professionally",
  },
  {
    label: "Download CV",
    href: "/Aleksandra_Marszalek_CV.pdf",
    icon: FileDown,
    description: "View my full resume (PDF)",
    download: true,
  },
  {
    label: "Email",
    href: "mailto:aaleksandra.mmarszalek@gmail.com",
    icon: Mail,
    description: "Get in touch directly",
  }
];

export default function LinksSection() {
  return (
    <section id="links">
      <h2 className="text-lg font-semibold text-zinc-100 mb-4">Connect</h2>
      <div className="flex flex-col gap-3">
        {links.map(({ label, href, icon: Icon, description, download }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("mailto") || download ? undefined : "_blank"}
            rel={href.startsWith("mailto") || download ? undefined : "noopener noreferrer"}
            download={download ? "Aleksandra_Marszalek_CV.pdf" : undefined}
            className="flex items-center gap-4 rounded-xl border border-zinc-800 bg-zinc-900 px-5 py-4 hover:border-zinc-700 hover:bg-zinc-800/50 transition-all group"
          >
            <Icon
              size={20}
              className="text-zinc-500 group-hover:text-indigo-400 transition-colors shrink-0"
            />
            <div>
              <p className="text-sm font-medium text-zinc-200 group-hover:text-zinc-100">{label}</p>
              <p className="text-xs text-zinc-500">{description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
