import { educationEntries } from '../../data/education';

export function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="font-mono text-[var(--color-accent)] text-sm mb-2">
          05. Education
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-10">
          Academic background
        </h2>

        <div className="space-y-8">
          {educationEntries.map((edu) => (
            <div
              key={edu.degree}
              className="p-6 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-secondary)]"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1">
                <h3 className="text-lg font-bold text-[var(--color-text)]">
                  {edu.degree}
                </h3>
                <span className="font-mono text-xs text-[var(--color-text-secondary)] whitespace-nowrap">
                  {edu.startYear} — {edu.endYear}
                </span>
              </div>

              <p className="text-sm text-[var(--color-accent)] mb-1">
                {edu.institution}
              </p>
              <p className="text-xs text-[var(--color-text-secondary)] mb-4">
                {edu.location}
              </p>

              <div className="mb-4">
                <h4 className="font-mono text-xs text-[var(--color-text)] mb-2">
                  Relevant Coursework
                </h4>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course) => (
                    <span
                      key={course}
                      className="text-xs px-2 py-1 rounded-md bg-[var(--color-bg)] text-[var(--color-text-secondary)] border border-[var(--color-border)]"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              {edu.achievements.length > 0 && (
                <div>
                  <h4 className="font-mono text-xs text-[var(--color-text)] mb-2">
                    Certifications
                  </h4>
                  <ul className="space-y-1.5">
                    {edu.achievements.map((achievement) => (
                      <li
                        key={achievement}
                        className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]"
                      >
                        <span className="text-[var(--color-accent)] mt-1">▹</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}