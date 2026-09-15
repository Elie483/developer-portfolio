import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from '../common/ThemeToggle';
import { profile } from '../../data/profile';
import { navLinks } from '../../data/navigation';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg)]/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#home"
          className="font-mono text-lg font-bold text-[var(--color-text)]"
        >
          {profile.name}
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
        </div>

        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className="p-2 text-[var(--color-text)]"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden border-t border-[var(--color-border)] bg-[var(--color-bg)] px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
