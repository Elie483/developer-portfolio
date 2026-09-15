import { Code2 } from 'lucide-react';
import { GithubIcon } from '../common/BrandIcons';
import type { Project } from '../../types/project';

type ProjectCardProps = {
  project: Project;
  onOpen: () => void;
};

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <div
      onClick={onOpen}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') onOpen();
      }}
      className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-secondary)] overflow-hidden flex flex-col hover:border-[var(--color-accent)] transition-colors cursor-pointer"
    >
      <div className="aspect-video bg-[var(--color-bg)] flex items-center justify-center border-b border-[var(--color-border)]">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            className="w-full h-full object-cover"
          />
        ) : (
          <Code2 size={40} className="text-[var(--color-text-secondary)]" />
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-[var(--color-text)] mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-[var(--color-text-secondary)] mb-4 leading-relaxed">
          {project.description}
        </p>

        <ul className="space-y-1 mb-4">
          {project.keyFeatures.slice(0, 3).map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2 text-xs text-[var(--color-text-secondary)]"
            >
              <span className="text-[var(--color-accent)] mt-0.5">▹</span>
              {feature}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 rounded-md bg-[var(--color-bg)] text-[var(--color-text-secondary)] border border-[var(--color-border)]"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 mt-auto pt-2">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-2 text-sm text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors"
          >
            <GithubIcon size={18} />
            Code
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-sm text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors"
            >
              Live Demo →
            </a>
          )}
          <span className="text-xs text-[var(--color-text-secondary)] ml-auto">
            Click for details →
          </span>
        </div>
      </div>
    </div>
  );
}