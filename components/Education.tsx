import { educationItems } from "@/data/portfolio";

export default function Education() {
  return (
    <section className="section section-wrap visible" id="education">
      <p className="section-label">Education</p>

      {educationItems.map((item) => (
        <div className="timeline-item" key={item.title}>
          <div className="timeline-date">{item.date}</div>

          <div>
            <p className="timeline-title">{item.title}</p>
            <p className="timeline-sub">{item.institution}</p>
            <p className="timeline-body">{item.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}