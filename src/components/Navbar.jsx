import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const links = [
  { to: "/", label: "Home" },
  { to: "/resume", label: "Resume" },
  { to: "/portfolio", label: "Portfolio" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 300, damping: 30 });

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-surface-darker backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        <Link to="/" className="text-lg font-semibold tracking-tight">
          Gabriel Machado
        </Link>

        {/* Desktop links */}
        <ul className="hidden gap-6 md:flex">
          {links.map(({ to, label }) => (
            <li key={to} className="relative">
              <Link
                to={to}
                className={`relative z-10 rounded-full px-3 py-1 transition-colors ${
                  pathname === to
                    ? "text-white font-medium"
                    : "text-inherit hover:text-primary-400"
                }`}
              >
                {pathname === to && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-full bg-white/10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
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
                className={`block rounded-lg px-3 py-1 transition-colors hover:text-primary-400 ${
                  pathname === to
                    ? "text-white font-medium bg-white/10"
                    : "text-inherit"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <motion.div
        className="h-0.5 origin-left bg-gradient-to-r from-accent-from to-accent-to"
        style={{ scaleX }}
      />
    </nav>
  );
}
