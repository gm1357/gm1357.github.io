import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const links = [
  { to: "/", label: "Home" },
  { to: "/resume", label: "Resume" },
  { to: "/portfolio", label: "Portfolio" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-surface-darker backdrop-blur-sm dark:border-white/10 light:border-black/10 light:bg-surface-light/80">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        <Link to="/" className="text-lg font-semibold tracking-tight">
          Gabriel Machado
        </Link>

        {/* Desktop links */}
        <ul className="hidden gap-6 md:flex">
          {links.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={`transition-colors hover:text-primary-400 ${
                  pathname === to
                    ? "text-primary-400 font-medium"
                    : "text-inherit"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="flex flex-col gap-2 px-6 pb-4 md:hidden">
          {links.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                onClick={() => setOpen(false)}
                className={`block py-1 transition-colors hover:text-primary-400 ${
                  pathname === to
                    ? "text-primary-400 font-medium"
                    : "text-inherit"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
