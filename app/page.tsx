// @ts-nocheck
'use client';

import { useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";

export default function PortfolioPage() {
  useEffect(() => {
    const script = document.createElement('script');
    script.textContent = "/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n   WARM PARTICLE BACKGROUND\n\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */\n(function() {\n  const canvas = document.getElementById('bg-canvas');\n  const ctx = canvas.getContext('2d');\n  let W, H, particles = [];\n  const COLORS = ['#C1654A','#D98B6F','#A67C5B','#E2D4BC'];\n\n  function resize() { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; }\n\n  function makeParticle() {\n    return {\n      x: Math.random() * W, y: Math.random() * H,\n      r: Math.random() * 2.5 + 0.5,\n      vx: (Math.random() - 0.5) * 0.3,\n      vy: (Math.random() - 0.5) * 0.3,\n      color: COLORS[Math.floor(Math.random() * COLORS.length)],\n      alpha: Math.random() * 0.5 + 0.1\n    };\n  }\n\n  function init() { resize(); particles = Array.from({ length: 80 }, makeParticle); }\n\n  function draw() {\n    ctx.clearRect(0, 0, W, H);\n    for (let i = 0; i < particles.length; i++) {\n      for (let j = i + 1; j < particles.length; j++) {\n        const dx = particles[i].x - particles[j].x;\n        const dy = particles[i].y - particles[j].y;\n        const dist = Math.sqrt(dx*dx + dy*dy);\n        if (dist < 120) {\n          ctx.beginPath();\n          ctx.strokeStyle = `rgba(193,101,74,${0.07 * (1 - dist/120)})`;\n          ctx.lineWidth = 0.5;\n          ctx.moveTo(particles[i].x, particles[i].y);\n          ctx.lineTo(particles[j].x, particles[j].y);\n          ctx.stroke();\n        }\n      }\n    }\n    particles.forEach(p => {\n      ctx.beginPath();\n      ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);\n      ctx.fillStyle = p.color + Math.round(p.alpha*255).toString(16).padStart(2,'0');\n      ctx.fill();\n      p.x += p.vx; p.y += p.vy;\n      if (p.x < 0 || p.x > W) p.vx *= -1;\n      if (p.y < 0 || p.y > H) p.vy *= -1;\n    });\n    requestAnimationFrame(draw);\n  }\n\n  window.addEventListener('resize', resize);\n  init(); draw();\n})();\n\n/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n   SECTION SCROLL REVEAL\n\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */\nconst revealObserver = new IntersectionObserver((entries) => {\n  entries.forEach(e => {\n    if (e.isIntersecting) {\n      e.target.classList.add('visible');\n    }\n  });\n}, { threshold: 0.12 });\n\ndocument.querySelectorAll('.section-wrap').forEach(el => revealObserver.observe(el));\n\n/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n   NG MASCOT SYSTEM\n\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */\nconst mascotSvg    = document.getElementById('mascot-svg');\nconst mascotBubble = document.getElementById('mascot-bubble');\nconst mascotDots   = document.querySelectorAll('.mascot-dot');\nconst mouth        = document.getElementById('mascot-mouth');\n\n// Section messages for the mascot\nconst sectionMeta = {\n  'hero-section':   { msg: 'Welcome! \ud83d\udc4b',           anim: 'wave'   },\n  'about':          { msg: 'This is me! \ud83d\ude0a',         anim: 'float'  },\n  'skills':         { msg: 'My toolbox \ud83e\uddf0',          anim: 'bounce' },\n  'education':      { msg: 'Study time! \ud83d\udcda',         anim: 'float'  },\n  'projects':       { msg: 'Check these out! \ud83d\ude80',    anim: 'tada'   },\n  'activity':       { msg: 'Live on GitHub! \ud83d\udcbb',     anim: 'bounce' },\n  'certifications': { msg: 'Certified! \ud83c\udfc5',          anim: 'tada'   },\n  'languages':      { msg: 'I speak 3 langs! \ud83c\udf0f',   anim: 'float'  },\n  'connect':        { msg: \"Let's connect! \ud83e\udd1d\",      anim: 'wave'   },\n};\n\nconst dotSectionMap = ['about','skills','education','projects','activity','certifications','connect'];\n\nlet currentSection = 'hero-section';\nlet bubbleTimer = null;\n\nfunction showBubble(msg) {\n  mascotBubble.textContent = msg;\n  mascotBubble.classList.add('show');\n  clearTimeout(bubbleTimer);\n  bubbleTimer = setTimeout(() => mascotBubble.classList.remove('show'), 2800);\n}\n\nfunction playMascotAnim(anim) {\n  // Remove any existing inline animation\n  mascotSvg.style.animation = 'none';\n  mascotSvg.offsetHeight; // reflow\n  const anims = {\n    wave:   'wave 0.8s ease-in-out 2',\n    float:  'float 2s ease-in-out infinite',\n    bounce: 'bounce 0.6s ease 2',\n    tada:   'tada 0.8s ease 1',\n  };\n  mascotSvg.style.animation = anims[anim] || 'float 2s ease-in-out infinite';\n}\n\nfunction setMascotSection(id) {\n  if (id === currentSection) return;\n  currentSection = id;\n\n  const meta = sectionMeta[id];\n  if (meta) {\n    showBubble(meta.msg);\n    playMascotAnim(meta.anim);\n  }\n\n  // Update dots\n  const dotIdx = dotSectionMap.indexOf(id);\n  mascotDots.forEach((d, i) => d.classList.toggle('active', i === dotIdx));\n}\n\n// Dot click navigation\nmascotDots.forEach((dot, i) => {\n  dot.style.cursor = 'pointer';\n  dot.style.pointerEvents = 'all';\n  dot.addEventListener('click', () => {\n    const target = document.getElementById(dotSectionMap[i]);\n    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });\n  });\n});\n\n// Track which section is in view\nconst sectionIds = ['hero-section','about','skills','education','projects','activity','certifications','languages','connect'];\n\nconst sectionObserver = new IntersectionObserver((entries) => {\n  entries.forEach(e => {\n    if (e.isIntersecting) setMascotSection(e.target.id);\n  });\n}, { threshold: 0.35, rootMargin: '-10% 0px -10% 0px' });\n\nsectionIds.forEach(id => {\n  const el = document.getElementById(id);\n  if (el) sectionObserver.observe(el);\n});\n\n// Initial wave on load\nsetTimeout(() => {\n  playMascotAnim('wave');\n  showBubble('Welcome! \ud83d\udc4b');\n}, 800);\n\n// Idle float when nothing happening\nsetInterval(() => {\n  if (mascotSvg.style.animation === 'none' || !mascotSvg.style.animation) {\n    mascotSvg.style.animation = 'float 3s ease-in-out infinite';\n  }\n}, 5000);\n\n/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n   GITHUB LIVE ACTIVITY\n\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */\n(function() {\n  const USERNAME = 'nehal300289-rgb';\n  const feed = document.getElementById('gh-feed');\n  const eventLabel = {\n    PushEvent:        { icon: '\u2b06\ufe0f', label: 'Pushed to' },\n    CreateEvent:      { icon: '\u2728', label: 'Created' },\n    WatchEvent:       { icon: '\u2b50', label: 'Starred' },\n    ForkEvent:        { icon: '\ud83c\udf74', label: 'Forked' },\n    PullRequestEvent: { icon: '\ud83d\udd00', label: 'Pull request in' },\n    IssuesEvent:      { icon: '\ud83d\udc1b', label: 'Issue in' },\n    IssueCommentEvent:{ icon: '\ud83d\udcac', label: 'Commented in' },\n    DeleteEvent:      { icon: '\ud83d\uddd1\ufe0f', label: 'Deleted from' },\n    ReleaseEvent:     { icon: '\ud83d\ude80', label: 'Released in' },\n  };\n\n  function timeAgo(d) {\n    const diff = (Date.now() - new Date(d)) / 1000;\n    if (diff < 60) return 'just now';\n    if (diff < 3600) return Math.floor(diff/60) + 'm ago';\n    if (diff < 86400) return Math.floor(diff/3600) + 'h ago';\n    return Math.floor(diff/86400) + 'd ago';\n  }\n\n  fetch(`https://api.github.com/users/${USERNAME}/events/public?per_page=8`)\n    .then(r => r.json())\n    .then(events => {\n      if (!events || !events.length || events.message) {\n        feed.innerHTML = `<div class=\"gh-empty\">No public activity yet \u2014 push your first commit and it'll appear here automatically! \ud83d\ude80</div>`;\n        return;\n      }\n      feed.innerHTML = '';\n      events.slice(0,7).forEach(ev => {\n        const meta = eventLabel[ev.type] || { icon: '\u26a1', label: 'Activity in' };\n        const repo = ev.repo.name.split('/')[1];\n        let detail = '';\n        if (ev.type === 'PushEvent' && ev.payload.commits?.length) {\n          detail = `<br><span style=\"color:var(--text-tertiary);font-size:12px;\">\u21b3 ${ev.payload.commits[ev.payload.commits.length-1].message.split('\\n')[0]}</span>`;\n        }\n        const div = document.createElement('div');\n        div.className = 'gh-event';\n        div.innerHTML = `<div class=\"gh-icon\">${meta.icon}</div><div><div><strong>${meta.label}</strong> <strong>${repo}</strong>${detail}</div><div class=\"gh-time\">${timeAgo(ev.created_at)}</div></div>`;\n        feed.appendChild(div);\n      });\n    })\n    .catch(() => {\n      feed.innerHTML = `<div class=\"gh-empty\">Couldn't load GitHub activity right now \u2014 make sure your profile is public.</div>`;\n    });\n})();";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
<canvas id="bg-canvas"></canvas>

{/* ── MASCOT ── */}
<div id="mascot">
  <div className="mascot-bubble" id="mascot-bubble">Hi there! 👋</div>
  <div className="mascot-body">
    <svg className="mascot-svg" id="mascot-svg" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Body circle */}
      <circle cx="27" cy="27" r="25" fill="#F8EDE7" stroke="#D98B6F" strokeWidth="1.5"/>
      {/* Face */}
      <circle cx="27" cy="26" r="16" fill="#FAF6F0"/>
      {/* Eyes group */}
      <g id="eyes">
        <ellipse id="eye-left"  cx="21" cy="23" rx="2.5" ry="3" fill="#2C1A0E" style={{ animation: "blink 4s infinite 1s" }}/>
        <ellipse id="eye-right" cx="33" cy="23" rx="2.5" ry="3" fill="#2C1A0E" style={{ animation: "blink 4s infinite 1.1s" }}/>
        {/* Eye shine */}
        <circle cx="22.2" cy="21.8" r="0.9" fill="white"/>
        <circle cx="34.2" cy="21.8" r="0.9" fill="white"/>
      </g>
      {/* Smile */}
      <path id="mascot-mouth" d="M21 30 Q27 35 33 30" stroke="#C1654A" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
      {/* Cheeks */}
      <ellipse cx="18" cy="28" rx="3.5" ry="2" fill="#D98B6F" opacity="0.35"/>
      <ellipse cx="36" cy="28" rx="3.5" ry="2" fill="#D98B6F" opacity="0.35"/>
      {/* NG monogram inside */}
      <text x="27" y="46" textAnchor="middle" fontFamily="Playfair Display, serif" fontSize="7" fill="#C1654A" fontStyle="italic" fontWeight="700">NG</text>
      {/* Tiny arms */}
      <g id="arm-left">
        <path d="M5 30 Q8 27 11 30" stroke="#D98B6F" strokeWidth="2" strokeLinecap="round" fill="none"/>
      </g>
      <g id="arm-right" style={{ transformOrigin: "43px 29px" }}>
        <path d="M43 29 Q47 24 50 27" stroke="#D98B6F" strokeWidth="2" strokeLinecap="round" fill="none"/>
      </g>
    </svg>
  </div>
  <div className="mascot-dots" id="mascot-dots">
    <div className="mascot-dot active" data-target="about" title="About"></div>
    <div className="mascot-dot" data-target="skills" title="Skills"></div>
    <div className="mascot-dot" data-target="education" title="Education"></div>
    <div className="mascot-dot" data-target="projects" title="Projects"></div>
    <div className="mascot-dot" data-target="activity" title="Activity"></div>
    <div className="mascot-dot" data-target="certifications" title="Certs"></div>
    <div className="mascot-dot" data-target="connect" title="Connect"></div>
  </div>
</div>

<Navbar />
 
<main>
    <Hero />
    <About />

  <section className="section section-wrap" id="skills">
    <p className="section-label">Skills</p>
    <div className="skills-grid">
      <div className="skill-card">
        <p className="skill-card-title">Programming & Tools</p>
        <div className="skill-tags">
          <span className="tag">Python</span><span className="tag">Pandas</span><span className="tag">NumPy</span>
          <span className="tag">scikit-learn</span><span className="tag">R</span><span className="tag">SQL</span>
          <span className="tag">Excel</span><span className="tag">Tableau</span><span className="tag">Jupyter</span>
        </div>
      </div>
      <div className="skill-card">
        <p className="skill-card-title">AI & Machine Learning</p>
        <div className="skill-tags">
          <span className="tag">Supervised Learning</span><span className="tag">Unsupervised Learning</span>
          <span className="tag">Feature Engineering</span><span className="tag">SHAP (XAI)</span>
          <span className="tag">Predictive Modeling</span><span className="tag">Prompt Engineering</span>
        </div>
      </div>
      <div className="skill-card">
        <p className="skill-card-title">Statistics</p>
        <div className="skill-tags">
          <span className="tag">Hypothesis Testing</span><span className="tag">T-test / ANOVA</span>
          <span className="tag">Chi-square</span><span className="tag">Regression Analysis</span>
          <span className="tag">EDA</span><span className="tag">Survey Research</span>
        </div>
      </div>
      <div className="skill-card">
        <p className="skill-card-title">Product & Strategy</p>
        <div className="skill-tags">
          <span className="tag">Product Roadmaps</span><span className="tag">Agile / Scrum</span>
          <span className="tag">TAM/SAM/SOM</span><span className="tag">User Research</span>
          <span className="tag">Go-to-Market</span><span className="tag">Market Sizing</span>
        </div>
      </div>
    </div>
  </section>

  <section className="section section-wrap" id="education">
    <p className="section-label">Education</p>
    <div className="timeline-item">
      <div className="timeline-date">Jan 2026 –<br/>Aug 2026</div>
      <div>
        <p className="timeline-title">PG Certificate — Integrated Artificial Intelligence</p>
        <p className="timeline-sub">Southern Alberta Institute of Technology (SAIT) · Calgary, AB</p>
        <p className="timeline-body">Applied ML, predictive analytics, AI ethics, cloud deployment, and human-centric AI systems.</p>
      </div>
    </div>
    <div className="timeline-item">
      <div className="timeline-date">Jan 2025 –<br/>Aug 2025</div>
      <div>
        <p className="timeline-title">PG Certificate — Product Management</p>
        <p className="timeline-sub">Southern Alberta Institute of Technology (SAIT) · Calgary, AB</p>
        <p className="timeline-body">Capstone: Full product strategy for an esports SaaS platform (CoachGG) — market research, roadmap, clickable prototype, and go-to-market plan.</p>
      </div>
    </div>
    <div className="timeline-item">
      <div className="timeline-date">Graduated<br/>Apr 2024</div>
      <div>
        <p className="timeline-title">Bachelor of Commerce — Major in Statistics</p>
        <p className="timeline-sub">H.L. College of Commerce · Ahmedabad, India · First Distinction</p>
        <p className="timeline-body">CGPA: 8.2 / 10</p>
      </div>
    </div>
  </section>

  <section className="section section-wrap" id="projects">
    <p className="section-label">Projects</p>
    <div className="projects-grid">
      <div className="project-card">
        <p className="project-title">NetSieveX.io — IoT Network Intrusion Detection</p>
        <p className="project-body">Full end-to-end ML pipeline on RT-IoT2022 dataset (123K rows, 85 features). Achieved 99.37% accuracy with Random Forest. Integrated SHAP explainability for security analysts.</p>
        <div className="project-tools">
          <span className="tool-chip">Python</span><span className="tool-chip">scikit-learn</span>
          <span className="tool-chip">Flask</span><span className="tool-chip">React</span>
          <span className="tool-chip">Azure</span><span className="tool-chip">SHAP</span>
        </div>
      </div>
      <div className="project-card">
        <p className="project-title">CoachGG — Esports SaaS Product Strategy</p>
        <p className="project-body">Led primary & secondary research to identify pain points in Canadian amateur esports. Defined roadmap (MVP→MMP→MLP), pricing strategy, and go-to-market plan with measurable KPIs.</p>
        <div className="project-tools">
          <span className="tool-chip">Market Sizing</span><span className="tool-chip">JTBD</span>
          <span className="tool-chip">5 Whys</span><span className="tool-chip">Prototyping</span><span className="tool-chip">GTM</span>
        </div>
      </div>
      <div className="project-card" style={{ gridColumn: "1 / -1" }}>
        <p className="project-title">Statistical Prediction of Carbon Emissions at Traffic Signals</p>
        <p className="project-body">Surveyed 850+ drivers at high-traffic intersections. Applied T-tests, Chi-square, ANOVA, and regression analysis. Found 57% of drivers turn off engines at signals; two-wheelers account for 83% of traffic. Delivered data-driven policy recommendations for urban planners.</p>
        <div className="project-tools">
          <span className="tool-chip">R</span><span className="tool-chip">Excel</span>
          <span className="tool-chip">Tableau</span><span className="tool-chip">Survey Research</span><span className="tool-chip">Regression</span>
        </div>
      </div>
    </div>
  </section>

  <section className="section section-wrap" id="certifications">
    <p className="section-label">Certifications</p>
    <div className="cert-list">
      <div className="cert-item"><span className="cert-icon">🎓</span><div><strong>Prompt Engineering & Programming with OpenAI</strong> — Columbia+ (Jul 2025)<br/>Credential ID: 156945679</div></div>
      <div className="cert-item"><span className="cert-icon">📣</span><div><strong>Product Marketing Fundamentals International</strong> — SAIT (Jul 2025)<br/>Messaging strategy, audience targeting, and go-to-market fundamentals.</div></div>
      <div className="cert-item"><span className="cert-icon">📊</span><div><strong>Introduction to Career Skills in Data Analytics</strong> — LinkedIn Learning (Mar 2025)</div></div>
      <div className="cert-item"><span className="cert-icon">💻</span><div><strong>Programming Foundations: Fundamentals</strong> — LinkedIn Learning (Jan 2026)</div></div>
      <div className="cert-item"><span className="cert-icon">📈</span><div><strong>Statistical Analysis through Software</strong> — R.J. Tibrewal Commerce College (2024)</div></div>
    </div>
  </section>

  <section className="section section-wrap" id="languages">
    <p className="section-label">Languages</p>
    <div className="lang-row">
      <div className="lang-badge"><span className="lang-dot"></span> English — Advanced</div>
      <div className="lang-badge"><span className="lang-dot med"></span> Gujarati — Fluent</div>
      <div className="lang-badge"><span className="lang-dot med"></span> Hindi — Fluent</div>
    </div>
  </section>

  <section className="section section-wrap" id="connect">
    <p className="section-label">Get in Touch</p>
    <div className="connect-grid">
      <a className="connect-card" href="https://www.linkedin.com/in/nehal-gadhavi-a03ba12a6/" target="_blank">
        <div className="connect-icon">💼</div>LinkedIn
      </a>
      <a className="connect-card" href="mailto:nehal982003@gmail.com">
        <div className="connect-icon">✉️</div>Email
      </a>
      <a className="connect-card" href="https://github.com/nehal300289-rgb" target="_blank">
        <div className="connect-icon">🐙</div>GitHub
      </a>
    </div>
  </section>

</main>

<footer>
  <span className="footer-logo">Nehal Gadhavi</span>
  <span>Calgary, AB · nehal982003@gmail.com </span>
</footer>
    </>
  );
}
