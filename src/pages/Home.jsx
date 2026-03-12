import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const socials = [
  { href: "https://github.com/gm1357", icon: FaGithub, label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/gabriel-machado-br/",
    icon: FaLinkedin,
    label: "LinkedIn",
  },
  { href: "mailto:g_machado1@hotmail.com", icon: FaEnvelope, label: "Email" },
];

const cardStyle = "rounded-2xl border border-white/10 bg-surface-darker p-8";

export default function Home() {
  const [flipped, setFlipped] = useState(false);
  const frontRef = useRef(null);
  const backRef = useRef(null);

  useEffect(() => {
    if (flipped) {
      backRef.current?.focus();
    } else {
      frontRef.current?.focus();
    }
  }, [flipped]);

  return (
    <section className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-6">
      <div className="perspective-1000 w-full max-w-2xl">
        <div
          className={`preserve-3d relative h-[28rem] sm:h-[26rem] motion-safe:transition-transform motion-safe:duration-700 ${flipped ? "rotate-y-180" : ""}`}
        >
          {/* FRONT */}
          <div
            ref={frontRef}
            tabIndex={-1}
            aria-hidden={flipped}
            inert={flipped ? "" : undefined}
            className={`backface-hidden absolute inset-0 flex flex-col items-center justify-center text-center outline-none ${cardStyle}`}
          >
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
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

            <div className="flex gap-4">
              <Link
                to="/resume"
                className="rounded-full bg-gradient-to-r from-accent-from to-accent-to px-6 py-2.5 font-medium text-white transition-opacity hover:opacity-90"
              >
                View my resume
              </Link>
              <button
                onClick={() => setFlipped(true)}
                aria-label="Flip card to show about section"
                className="rounded-full border border-white/20 light:border-black/20 px-6 py-2.5 font-medium transition-colors hover:bg-white/10 light:hover:bg-black/10"
              >
                About me &rarr;
              </button>
            </div>
          </div>

          {/* BACK */}
          <div
            ref={backRef}
            tabIndex={-1}
            aria-hidden={!flipped}
            inert={!flipped ? "" : undefined}
            className={`backface-hidden rotate-y-180 absolute inset-0 flex flex-col items-center justify-center text-center outline-none ${cardStyle}`}
          >
            <div className="mb-4 h-20 w-20 rounded-full bg-gradient-to-br from-accent-from/20 to-accent-to/20">
              <img
                className="h-20 w-20 rounded-full"
                src="https://github.com/gm1357.png"
                alt="Gabriel Machado"
              />
            </div>
            <div className="space-y-4 text-base leading-relaxed opacity-90">
              <p>
                I&apos;m a Brazilian software engineer with 10+ years of
                experience in web development and a bachelor&apos;s degree in
                computer science from UNESP — Universidade Estadual Paulista.
              </p>
              <p>
                I&apos;m passionate about writing clean &amp; maintainable code,
                continuously improving my skills, and learning new technologies.
                I enjoy building products that make a difference and
                collaborating with talented teams.
              </p>
            </div>
            <button
              onClick={() => setFlipped(false)}
              aria-label="Flip card back to hero section"
              className="mt-6 rounded-full border border-white/20 light:border-black/20 px-6 py-2.5 font-medium transition-colors hover:bg-white/10 light:hover:bg-black/10"
            >
              &larr; Flip back
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
