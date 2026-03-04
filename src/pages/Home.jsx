import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaStackOverflow,
  FaEnvelope,
} from "react-icons/fa";

const socials = [
  { href: "https://github.com/gm1357", icon: FaGithub, label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/gabriel-machado-br/",
    icon: FaLinkedin,
    label: "LinkedIn",
  },
  {
    href: "https://stackoverflow.com/users/9012424/gmachado",
    icon: FaStackOverflow,
    label: "Stack Overflow",
  },
  { href: "mailto:g_machado1@hotmail.com", icon: FaEnvelope, label: "Email" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-6 text-center animate-fade-in">
        <h1 className="mb-4 text-5xl font-bold tracking-tight sm:text-6xl">
          <span className="bg-gradient-to-r from-accent-from to-accent-to bg-clip-text text-transparent">
            Gabriel Machado
          </span>
        </h1>
        <p className="mb-8 max-w-lg text-lg opacity-80">
          Software Engineer &middot; 10+ years building for the web
        </p>

        <div className="mb-10 flex gap-5">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="text-2xl transition-colors hover:text-primary-400"
            >
              <social.icon />
            </a>
          ))}
        </div>

        <Link
          to="/resume"
          className="rounded-full bg-gradient-to-r from-accent-from to-accent-to px-6 py-2.5 font-medium text-white transition-opacity hover:opacity-90"
        >
          View my resume
        </Link>
      </section>

      {/* About */}
      <section className="mx-auto max-w-5xl px-6 py-20 animate-fade-in">
        <h2 className="mb-8 text-3xl font-bold">About</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4 text-base leading-relaxed opacity-90">
            <p>
              I&apos;m a Brazilian software engineer with 10+ years of
              experience in web development and a bachelor&apos;s degree in
              computer science from UNESP — Universidade Estadual Paulista.
            </p>
            <p>
              I&apos;m passionate about writing clean &amp; maintainable code,
              continuously improving my skills, and learning new technologies. I
              enjoy building products that make a difference and collaborating
              with talented teams.
            </p>
          </div>
          <div className="hidden items-center justify-center md:flex">
            <div className="h-48 w-48 rounded-full bg-gradient-to-br from-accent-from/20 to-accent-to/20">
              <img
                className="rounded-full"
                src="https://github.com/gm1357.png"
                alt="Gabriel Machado"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
