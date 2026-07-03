import { skillCategories } from "@/data/portfolio";

export default function Skills() {
  return (
    <section className="section section-wrap visible" id="skills">
      <p className="section-label">Skills</p>

      <div className="skills-grid">
        {skillCategories.map((category) => (
          <div className="skill-card" key={category.title}>
            <p className="skill-card-title">{category.title}</p>

            <div className="skill-tags">
              {category.skills.map((skill) => (
                <span className="tag" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}