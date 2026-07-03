import { projectItems } from "@/data/portfolio";

export default function Projects() {
  return (
    <section className="section section-wrap visible" id="projects">
      <p className="section-label">Projects</p>

      <div className="projects-grid">
        {projectItems.map((project) => (
          <div
            className="project-card"
            key={project.title}
            style={project.fullWidth ? { gridColumn: "1 / -1" } : undefined}
          >
            <p className="project-title">{project.title}</p>

            <p className="project-body">{project.description}</p>

            <div className="project-tools">
              {project.tools.map((tool) => (
                <span className="tool-chip" key={tool}>
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}