import { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "../i18n";

export default function ProjectModal({ project, onClose }) {
  const { t } = useTranslation();

  useEffect(() => {
    if (!project) return;

    document.body.style.overflow = "hidden";
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [project, onClose]);

  return createPortal(
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-xl border border-white/10 bg-surface-darker/85 backdrop-blur-md p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 32, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 32, scale: 0.8 }}
            transition={{ duration: 0.25, ease: "easeIn" }}
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-2xl leading-none opacity-60 transition-opacity hover:opacity-100"
              aria-label={t("modal_close_aria")}
            >
              &times;
            </button>

            {project.coverImage && (
              <img
                src={project.coverImage}
                alt={project.title}
                className="mb-5 w-full rounded-lg object-cover"
              />
            )}

            <h2 className="mb-3 text-2xl font-bold">{project.title}</h2>
            <p className="mb-5 whitespace-pre-line opacity-80">
              {project.longDescription}
            </p>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-primary-500 px-5 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                {t("portfolio_visit_project")}
              </a>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
