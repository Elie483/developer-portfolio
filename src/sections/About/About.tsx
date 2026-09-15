import { profile } from '../../data/profile';

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="font-mono text-[var(--color-accent)] text-sm mb-2">
          01. About
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-10">
          Get to know me
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-5">
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              {profile.aboutBio}
            </p>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              <span className="text-[var(--color-text)] font-medium">
                My approach:{' '}
              </span>
              {profile.approach}
            </p>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              <span className="text-[var(--color-text)] font-medium">
                Currently learning:{' '}
              </span>
              {profile.currentlyLearning}
            </p>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              <span className="text-[var(--color-text)] font-medium">
                Looking for:{' '}
              </span>
              {profile.lookingFor}
            </p>
          </div>

          <div>
            <h3 className="font-mono text-sm text-[var(--color-text)] mb-4">
              What I'm into
            </h3>
            <ul className="space-y-3">
              {profile.interests.map((interest, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]"
                >
                  <span className="text-[var(--color-accent)] mt-1">▹</span>
                  {interest}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}