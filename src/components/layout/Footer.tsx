import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/BrandIcons';
import { profile } from '../../data/profile';
import { navLinks } from '../../data/navigation';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-mono text-sm font-bold text-[var(--color-text)]">
            {profile.name}
          </p>
          <p className="text-xs text-[var(--color-text-secondary)] mt-1">
            © {year} {profile.name}. All rights reserved.
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href="#home"
            aria-label="Back to top"
            className="p-2 rounded-lg border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-colors"
          >
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}