import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className="p-2 rounded-lg border border-[var(--color-border)] hover:bg-[var(--color-bg-secondary)] transition-colors cursor-pointer"
    >
      {theme === 'dark' ? (
        <Sun size={20} className="text-[var(--color-text)]" />
      ) : (
        <Moon size={20} className="text-[var(--color-text)]" />
      )}
    </button>
  );
}