import { certificationItems } from "@/data/portfolio";

export default function Certifications() {
  return (
    <section className="section section-wrap visible" id="certifications">
      <p className="section-label">Certifications</p>

      <div className="cert-list">
        {certificationItems.map((certification) => (
          <div className="cert-item" key={certification.title}>
            <span className="cert-icon">{certification.icon}</span>

            <div>
              <strong>{certification.title}</strong> — {certification.provider}
              {certification.details && (
                <>
                  <br />
                  {certification.details}
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}