import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaStar, FaCodeBranch, FaGithub } from "react-icons/fa";
import { useTranslation, useLocalizedData, usePageMeta } from "../i18n";
import ProjectModal from "../components/ProjectModal";

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const LANG_COLORS = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Java: "#b07219",
  Python: "#3572A5",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Shell: "#89e051",
  Kotlin: "#A97BFF",
  Go: "#00ADD8",
  Rust: "#dea584",
};

function SkeletonCard() {
  return (
    <div className="animate-pulse rounded-lg border border-white/10 p-5">
      <div className="mb-3 h-5 w-2/3 rounded bg-white/10" />
      <div className="mb-2 h-4 w-full rounded bg-white/5" />
      <div className="h-4 w-1/2 rounded bg-white/5" />
    </div>
  );
}

export default function Portfolio() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const { t } = useTranslation();
  const { projects } = useLocalizedData();
  usePageMeta("meta_portfolio_title", "meta_portfolio_description");

  const fetchRepos = () => {
    setLoading(true);
    setError(null);
    fetch("https://api.github.com/users/gm1357/repos?per_page=100&sort=updated")
      .then((res) => {
        if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        const sorted = data
          .filter((r) => !r.fork)
          .sort(
            (a, b) =>
              b.stargazers_count - a.stargazers_count ||
              new Date(b.updated_at) - new Date(a.updated_at),
          );
        setRepos(sorted);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    let ignore = false;
    fetch("https://api.github.com/users/gm1357/repos?per_page=100&sort=updated")
      .then((res) => {
        if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (ignore) return;
        const sorted = data
          .filter((r) => !r.fork)
          .sort(
            (a, b) =>
              b.stargazers_count - a.stargazers_count ||
              new Date(b.updated_at) - new Date(a.updated_at),
          );
        setRepos(sorted);
      })
      .catch((err) => {
        if (!ignore) setError(err.message);
      })
      .finally(() => {
        if (!ignore) setLoading(false);
      });
    return () => {
      ignore = true;
    };
  }, []);

  const languages = [
    "All",
    ...new Set(repos.map((r) => r.language).filter(Boolean)),
  ];
  const filtered =
    filter === "All" ? repos : repos.filter((r) => r.language === filter);

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="mb-8 text-4xl font-bold">{t("portfolio_title")}</h1>
      <p className="mb-8 opacity-80">
        {t("portfolio_subtitle")}
      </p>

      {/* Featured Projects */}
      {projects.length > 0 && (
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold">{t("portfolio_featured")}</h2>
          <motion.div
            className="grid gap-4 sm:grid-cols-2"
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                className="group rounded-lg border border-white/10 p-5 transition-shadow hover:shadow-lg hover:shadow-primary-500/5 flex flex-col justify-between"
              >
                {project.coverImage && (
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="mb-3 w-full rounded-md object-cover h-48"
                  />
                )}
                <div className="flex flex-col justify-between items-start">
                  <h3 className="mb-1 font-semibold group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mb-3 text-sm opacity-70 line-clamp-2">
                    {project.shortDescription}
                  </p>
                  <div className="flex justify-between w-full">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="rounded-full border border-primary-400 px-3 py-1 text-sm text-primary-400 transition-colors hover:bg-primary-400/15 cursor-pointer"
                    >
                      {t("portfolio_know_more")}
                    </button>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={t("portfolio_github_repo_aria")}
                        title={t("portfolio_github_repo_aria")}
                        className="rounded-full px-3 py-1 text-sm text-primary-400 transition-colors hover:bg-primary-400/15 cursor-pointer w-10 h-10 flex items-center justify-center"
                      >
                        <FaGithub />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      )}

      {/* GitHub Repositories */}
      {projects.length > 0 && (
        <h2 className="mb-6 text-2xl font-semibold">{t("portfolio_github_repos")}</h2>
      )}

      {/* Error state */}
      {error && (
        <div className="mb-8 rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-center">
          <p className="mb-2">{t("portfolio_error")}{error}</p>
          <button
            onClick={fetchRepos}
            className="rounded-full bg-primary-500 px-4 py-1.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            {t("portfolio_retry")}
          </button>
        </div>
      )}

      {/* Loading */}
      {loading && (
        <div className="grid gap-4 sm:grid-cols-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      )}

      {/* Loaded */}
      {!loading && !error && (
        <>
          {/* Filter chips */}
          <div className="mb-8 flex flex-wrap gap-2">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => setFilter(lang)}
                className={`rounded-full border px-3 py-1 text-sm transition-colors ${
                  filter === lang
                    ? "border-primary-400 bg-primary-400/15 text-primary-400"
                    : "border-white/15 hover:border-primary-400"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <p className="py-12 text-center opacity-60">
              {t("portfolio_empty", { filter })}
            </p>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2">
              {filtered.map((repo) => (
                <motion.a
                  key={repo.id}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-lg border border-white/10 p-5 transition-shadow hover:shadow-lg hover:shadow-primary-500/5"
                >
                  <h3 className="mb-1 font-semibold group-hover:text-primary-400 transition-colors">
                    {repo.name}
                  </h3>
                  {repo.description && (
                    <p className="mb-3 text-sm opacity-70 line-clamp-2">
                      {repo.description}
                    </p>
                  )}
                  <div className="flex items-center gap-4 text-xs opacity-60">
                    {repo.language && (
                      <span className="flex items-center gap-1">
                        <span
                          className="inline-block h-2.5 w-2.5 rounded-full"
                          style={{
                            backgroundColor:
                              LANG_COLORS[repo.language] || "#ccc",
                          }}
                        />
                        {repo.language}
                      </span>
                    )}
                    {repo.stargazers_count > 0 && (
                      <span className="flex items-center gap-1">
                        <FaStar /> {repo.stargazers_count}
                      </span>
                    )}
                    {repo.forks_count > 0 && (
                      <span className="flex items-center gap-1">
                        <FaCodeBranch /> {repo.forks_count}
                      </span>
                    )}
                  </div>
                </motion.a>
              ))}
            </div>
          )}
        </>
      )}

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
