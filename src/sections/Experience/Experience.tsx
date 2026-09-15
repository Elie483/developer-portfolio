import { experiences } from '../../data/experience';

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-[var(--color-bg-secondary)]">
      <div className="max-w-3xl mx-auto">
        <p className="font-mono text-[var(--color-accent)] text-sm mb-2">
          04. Experience
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-10">
          Where I've worked
        </h2>

        <div className="relative border-l border-[var(--color-border)] pl-8 space-y-12">
          {experiences.map((exp) => (
            <div key={`${exp.position}-${exp.organization}`} className="relative">
              <span className="absolute -left-[calc(2rem+5px)] top-1.5 w-2.5 h-2.5 rounded-full bg-[var(--color-accent)]" />

              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-2">
                <h3 className="text-lg font-bold text-[var(--color-text)]">
                  {exp.position}{' '}
                  <span className="text-[var(--color-accent)] font-normal">
                    @ {exp.organization}
                  </span>
                </h3>
                <span className="font-mono text-xs text-[var(--color-text-secondary)] whitespace-nowrap">
                  {exp.startDate} — {exp.endDate}
                </span>
              </div>

              <p className="text-xs text-[var(--color-text-secondary)] mb-3">
                {exp.location}
              </p>

              <p className="text-sm text-[var(--color-text-secondary)] mb-3 leading-relaxed">
                {exp.description}
              </p>

              <ul className="space-y-1.5 mb-3">
                {exp.achievements.map((achievement) => (
                  <li
                    key={achievement}
                    className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]"
                  >
                    <span className="text-[var(--color-accent)] mt-1">▹</span>
                    {achievement}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 rounded-md bg-[var(--color-bg)] text-[var(--color-text-secondary)] border border-[var(--color-border)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}