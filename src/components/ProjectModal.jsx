import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function ProjectModal({ project, onClose }) {
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

  if (!project) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-xl border border-white/10 bg-surface-darker p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-2xl leading-none opacity-60 transition-opacity hover:opacity-100"
          aria-label="Close"
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
            Visit Project
          </a>
        )}
      </div>
    </div>,
    document.body
  );
}
