export default function Hero() {
  return (
    <section className="hero section-wrap visible" id="hero-section">
      <div>
        <p className="hero-eyebrow">Portfolio &middot; </p>

        <h1 className="hero-name">
          Nehal
          <br />
          <em>Gadhavi</em>
        </h1>

        <p className="hero-sub">
          Data Analyst &amp; AI enthusiast bridging statistical thinking with
          product strategy. Currently building at SAIT Calgary.
        </p>

        <div className="contact-row">
          <span className="contact-pill">📍 Calgary, AB</span>

          <a className="contact-pill" href="tel:+18259451120">
            📞 +1 (825) 945 1120
          </a>

          <a className="contact-pill" href="mailto:nehal982003@gmail.com">
            ✉️ nehal982003@gmail.com
          </a>

          <a
            className="contact-pill"
            href="https://www.linkedin.com/in/nehal-gadhavi-a03ba12a6/"
            target="_blank"
            rel="noreferrer"
          >
            🔗 LinkedIn
          </a>

          <a
            className="contact-pill"
            href="https://github.com/nehal300289-rgb"
            target="_blank"
            rel="noreferrer"
          >
            🐙 GitHub
          </a>
        </div>
      </div>

      <div className="avatar-wrap">
        <div className="avatar">NG</div>
        <div className="status-badge">
          <span className="status-dot"></span> Open to work
        </div>
      </div>
    </section>
  );
}