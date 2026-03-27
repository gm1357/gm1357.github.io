import { motion } from "framer-motion";
import { socials } from "../data/socials";

export default function SocialLinks({ className = "text-xl" }) {
  return (
    <div className="flex gap-5">
      {socials.map((social) => (
        <motion.a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className={`transition-colors hover:text-primary-400 ${className}`}
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 400, damping: 12 }}
        >
          <social.icon />
        </motion.a>
      ))}
    </div>
  );
}
