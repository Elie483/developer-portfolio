import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../../components/common/BrandIcons';
import { profile } from '../../data/profile';

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6 pt-16"
    >
      <div className="max-w-4xl mx-auto w-full">
        <p className="font-mono text-[var(--color-accent)] text-sm mb-4">
          Hi, I'm
        </p>
        <h1 className="text-5xl md:text-6xl font-bold text-[var(--color-text)] mb-4">
          {profile.name}
        </h1>
        <h2 className="text-2xl md:text-3xl font-mono text-[var(--color-text-secondary)] mb-6">
          {profile.title}
        </h2>
        <p className="text-lg text-[var(--color-text-secondary)] max-w-xl mb-8">
          {profile.bio}
        </p>

        <div className="flex flex-wrap gap-4 mb-8">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-[var(--color-accent)] text-white font-medium hover:bg-[var(--color-accent-hover)] transition-colors"
          >
            View My Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg border border-[var(--color-border)] text-[var(--color-text)] font-medium hover:bg-[var(--color-bg-secondary)] transition-colors"
          >
            Contact Me
          </a>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
          >
            <GithubIcon size={22} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
          >
            <LinkedinIcon size={22} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
          >
            <Mail size={22} />
          </a>
        </div>
      </div>
    </section>
  );
}