import { ArrowUpRight } from "lucide-react";
import type { Project } from "../data/portfolio";

type ProjectCardProps = {
  project: Project;
};

/** Apresenta um case usando os dados centralizados do portfólio. */
export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project">
      <a aria-label={`Entre em contato para saber mais sobre ${project.name}`} className="project-image-link" href="#contato">
        <img alt={project.imageAlt} className="project-image" loading="lazy" src={project.image} />
        <span aria-hidden="true" className="project-image-action">
          <ArrowUpRight size={22} />
        </span>
      </a>
      <div className="project-details">
        <span className="project-number">{project.number}</span>
        <div>
          <p className="project-category">{project.category}</p>
          <h3>{project.name}</h3>
          <p className="project-description">{project.description}</p>
        </div>
        <a aria-label={`Contato sobre ${project.name}`} className="project-link" href="#contato">
          <ArrowUpRight size={18} />
        </a>
      </div>
    </article>
  );
}