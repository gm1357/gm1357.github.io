import { FaGithub, FaLinkedin, FaStackOverflow, FaEnvelope } from "react-icons/fa";

const socials = [
  { href: "https://github.com/gm1357", icon: FaGithub, label: "GitHub" },
  { href: "https://www.linkedin.com/in/gabriel-machado-br/", icon: FaLinkedin, label: "LinkedIn" },
  { href: "https://stackoverflow.com/users/9012424/gmachado", icon: FaStackOverflow, label: "Stack Overflow" },
  { href: "mailto:g_machado1@hotmail.com", icon: FaEnvelope, label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 light:border-black/10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6">
        <div className="flex gap-5">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="text-xl transition-colors hover:text-primary-400"
            >
              <social.icon />
            </a>
          ))}
        </div>
        <p className="text-sm opacity-60">
          &copy; {new Date().getFullYear()} Gabriel Machado
        </p>
      </div>
    </footer>
  );
}
