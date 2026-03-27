import { HiDownload } from "react-icons/hi";
import { workExperience, education, skills } from "../data/resume";

function TimelineItem({ title, subtitle, period, bullets }) {
  return (
    <div className="relative pl-8 pb-10 last:pb-0">
      {/* Line */}
      <div className="absolute top-2 left-[7px] -bottom-2 w-px bg-white/20 last:hidden" />
      {/* Dot */}
      <div className="absolute top-2 left-0 h-3.5 w-3.5 rounded-full border-2 border-primary-400 bg-surface-dark" />

      <h3 className="font-semibold leading-snug">{title}</h3>
      <p className="text-sm opacity-70">
        {subtitle} &middot; {period}
      </p>
      {bullets && (
        <ul className="mt-2 list-disc space-y-1 pl-4 text-sm opacity-85">
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function Resume() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 animate-fade-in">
      <div className="mb-12 flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-4xl font-bold">Resume</h1>
        <div className="flex gap-2">
          <a
            href="/docs/cv_en.pdf"
            download
            className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1 text-sm transition-colors hover:border-primary-400 hover:text-primary-400"
          >
            <HiDownload /> English
          </a>
          <a
            href="/docs/cv_ptbr.pdf"
            download
            className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1 text-sm transition-colors hover:border-primary-400 hover:text-primary-400"
          >
            <HiDownload /> Português
          </a>
        </div>
      </div>

      {/* Work Experience */}
      <section className="mb-14">
        <h2 className="mb-6 text-2xl font-bold">Work Experience</h2>
        {workExperience.map((job, i) => (
          <TimelineItem
            key={i}
            title={job.title}
            subtitle={job.company}
            period={job.period}
            bullets={job.bullets}
          />
        ))}
      </section>

      {/* Education */}
      <section className="mb-14">
        <h2 className="mb-6 text-2xl font-bold">Education</h2>
        {education.map((edu, i) => (
          <TimelineItem
            key={i}
            title={edu.degree}
            subtitle={edu.institution}
            period={edu.period}
          />
        ))}
      </section>

      {/* Skills */}
      <section>
        <h2 className="mb-6 text-2xl font-bold">Skills</h2>
        <div className="space-y-6">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="mb-3 text-lg font-semibold">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/15 px-3 py-1 text-sm transition-colors hover:border-primary-400 hover:text-primary-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
