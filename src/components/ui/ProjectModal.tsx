import { useEffect } from 'react';
import { X, Code2 } from 'lucide-react';
import { GithubIcon } from '../common/BrandIcons';
import type { Project } from '../../types/project';

type ProjectModalProps = {
  project: Project;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} details`}
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
    >
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] shadow-2xl">
        <div className="sticky top-0 flex items-center justify-between px-6 py-4 border-b border-[var(--color-border)] bg-[var(--color-bg)]">
          <h2 className="text-xl font-bold text-[var(--color-text)]">
            {project.title}
          </h2>
          <button
            onClick={onClose}
            aria-label="Close"
            className="p-1.5 rounded-lg text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)] hover:text-[var(--color-text)] transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="aspect-video rounded-lg bg-[var(--color-bg-secondary)] flex items-center justify-center border border-[var(--color-border)]">
            {project.image ? (
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <Code2 size={48} className="text-[var(--color-text-secondary)]" />
            )}
          </div>

          <div>
            <h3 className="font-mono text-xs text-[var(--color-accent)] mb-2">
              OVERVIEW
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              {project.description}
            </p>
          </div>

          <div>
            <h3 className="font-mono text-xs text-[var(--color-accent)] mb-2">
              PROBLEM
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div>
            <h3 className="font-mono text-xs text-[var(--color-accent)] mb-2">
              SOLUTION
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              {project.solution}
            </p>
          </div>

          <div>
            <h3 className="font-mono text-xs text-[var(--color-accent)] mb-2">
              KEY FEATURES
            </h3>
            <ul className="space-y-1.5">
              {project.keyFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]"
                >
                  <span className="text-[var(--color-accent)] mt-1">▹</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs text-[var(--color-accent)] mb-2">
              TECHNOLOGY STACK
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2 py-1 rounded-md bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] border border-[var(--color-border)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-mono text-xs text-[var(--color-accent)] mb-2">
              ARCHITECTURE
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              {project.architecture}
            </p>
          </div>

          <div>
            <h3 className="font-mono text-xs text-[var(--color-accent)] mb-2">
              CHALLENGES
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              {project.challenges}
            </p>
          </div>

          <div>
            <h3 className="font-mono text-xs text-[var(--color-accent)] mb-2">
              WHAT I LEARNED
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              {project.whatLearned}
            </p>
          </div>

          <div className="flex items-center gap-4 pt-2 border-t border-[var(--color-border)]">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors pt-4"
            >
              <GithubIcon size={18} />
              View Code
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors pt-4"
              >
                Live Demo →
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}