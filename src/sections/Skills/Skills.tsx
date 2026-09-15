import { skillCategories } from '../../data/skills';

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-[var(--color-bg-secondary)]">
      <div className="max-w-4xl mx-auto">
        <p className="font-mono text-[var(--color-accent)] text-sm mb-2">
          02. Skills
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-10">
          Technologies I work with
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)]"
            >
              <h3 className="font-mono text-sm text-[var(--color-accent)] mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-3 py-1 rounded-md bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] border border-[var(--color-border)]"
                  >
                    {skill}
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