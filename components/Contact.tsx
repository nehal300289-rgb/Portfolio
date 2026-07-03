import { contactItems } from "@/data/portfolio";

export default function Contact() {
  return (
    <section className="section section-wrap visible" id="connect">
      <p className="section-label">Get in Touch</p>

      <div className="connect-grid">
        {contactItems.map((contact) => (
          <a
            className="connect-card"
            href={contact.href}
            target={contact.href.startsWith("mailto:") ? undefined : "_blank"}
            rel={contact.href.startsWith("mailto:") ? undefined : "noreferrer"}
            key={contact.label}
          >
            <div className="connect-icon">{contact.icon}</div>
            {contact.label}
          </a>
        ))}
      </div>
    </section>
  );
}