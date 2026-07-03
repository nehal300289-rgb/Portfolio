import { languageItems } from "@/data/portfolio";

export default function Languages() {
  return (
    <section className="section section-wrap visible" id="languages">
      <p className="section-label">Languages</p>

      <div className="lang-row">
        {languageItems.map((language) => (
          <div className="lang-badge" key={language.name}>
            <span className={`lang-dot ${language.dotClass ?? ""}`}></span>
            {language.name} — {language.level}
          </div>
        ))}
      </div>
    </section>
  );
}