import { useState } from 'react';
import { projects } from '../../data/projects';
import { ProjectCard } from '../../components/ui/ProjectCard';
import { ProjectModal } from '../../components/ui/ProjectModal';
import type { Project } from '../../types/project';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-[var(--color-accent)] text-sm mb-2">
          03. Projects
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-10">
          Things I've built
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              onOpen={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}