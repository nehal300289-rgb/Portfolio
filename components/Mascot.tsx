"use client";

import { CSSProperties, useEffect, useState } from "react";

const milestones = [
  { id: "about", label: "About", message: "This is me! 😊" },
  { id: "skills", label: "Skills", message: "Skills 🧰" },
  { id: "education", label: "Education", message: "Education 📚" },
  { id: "projects", label: "Projects", message: "Projects 🚀" },
  { id: "certifications", label: "Certs", message: "Certifications 🏅" },
  { id: "languages", label: "Languages", message: "Languages 🌎" },
  { id: "connect", label: "Connect", message: "Let's connect! 🤝" },
];

export default function Mascot() {
  const [activeSection, setActiveSection] = useState("about");

  const activeIndex = milestones.findIndex(
    (milestone) => milestone.id === activeSection
  );

  const safeActiveIndex = activeIndex === -1 ? 0 : activeIndex;

  useEffect(() => {
    function updateActiveSection() {
      const scrollPosition = window.scrollY + window.innerHeight * 0.45;

      let currentSection = milestones[0].id;

      milestones.forEach((milestone) => {
        const element = document.getElementById(milestone.id);

        if (!element) return;

        const sectionTop = element.offsetTop;

        if (scrollPosition >= sectionTop) {
          currentSection = milestone.id;
        }
      });

      setActiveSection(currentSection);
    }

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection);
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  function handleDotClick(sectionId: string) {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setActiveSection(sectionId);
    }
  }

  return (
    <aside
      id="mascot"
      style={
        {
          "--active-index": safeActiveIndex,
        } as CSSProperties
      }
    >
      <div className="mascot-road">
        <div className="mascot-track"></div>

        <div className="mascot-runner">
          <div className="mascot-bubble">{milestones[safeActiveIndex].message}</div>

          <svg
  className="mascot-svg arcade-ghost-svg"
  viewBox="0 0 64 74"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  {/* Outer glow ring */}
  <circle
    cx="32"
    cy="31"
    r="27"
    fill="#FAF6F0"
    stroke="#D98B6F"
    strokeWidth="2"
  />

  {/* Ghost body - reference style */}
  <path
    d="
      M14 60
      V34
      C14 20 21.5 12 32 12
      C42.5 12 50 20 50 34
      V60
      C50 62.2 47.4 63.4 45.7 61.9
      L41.8 58.4
      L37.5 62.3
      C36.1 63.6 33.9 63.6 32.5 62.3
      L32 61.8
      L31.5 62.3
      C30.1 63.6 27.9 63.6 26.5 62.3
      L22.2 58.4
      L18.3 61.9
      C16.6 63.4 14 62.2 14 60
      Z
    "
    fill="#C1654A"
  />

  {/* Face patch */}
  <ellipse cx="32" cy="34" rx="17" ry="15" fill="#FAF6F0" />

  {/* Soft top highlight */}
  <path
    d="M18 35C20 23 25.5 18 32 18C38.5 18 44 23 46 35C42 30.5 22 30.5 18 35Z"
    fill="#D98B6F"
    opacity="0.38"
  />

  {/* Left eye */}
  <g className="mascot-eye-bounce-left">
    <ellipse cx="26" cy="34" rx="4.4" ry="5.4" fill="#FAF6F0" />
    <circle cx="27.2" cy="35" r="2.1" fill="#2C1A0E" />
    <circle cx="28" cy="33.8" r="0.7" fill="white" />
  </g>

  {/* Right eye */}
  <g className="mascot-eye-bounce-right">
    <ellipse cx="38" cy="34" rx="4.4" ry="5.4" fill="#FAF6F0" />
    <circle cx="39.2" cy="35" r="2.1" fill="#2C1A0E" />
    <circle cx="40" cy="33.8" r="0.7" fill="white" />
  </g>

  {/* Small smile */}
  <path
    d="M27 45Q32 49 37 45"
    stroke="#7A4F35"
    strokeWidth="1.7"
    strokeLinecap="round"
    fill="none"
  />

  {/* Cheeks */}
  <ellipse cx="22.5" cy="43" rx="2.7" ry="1.7" fill="#D98B6F" opacity="0.35" />
  <ellipse cx="41.5" cy="43" rx="2.7" ry="1.7" fill="#D98B6F" opacity="0.35" />

  {/* NG initials */}
  <text
    x="32"
    y="69"
    textAnchor="middle"
    fontFamily="Playfair Display, serif"
    fontSize="6"
    fill="#C1654A"
    fontStyle="italic"
    fontWeight="700"
  >
    NG
  </text>
</svg>
        </div>

        <div className="mascot-dots">
          {milestones.map((milestone) => (
            <button
              key={milestone.id}
              type="button"
              className={`mascot-dot ${
                activeSection === milestone.id ? "active" : ""
              }`}
              title={milestone.label}
              aria-label={`Go to ${milestone.label}`}
              onClick={() => handleDotClick(milestone.id)}
            >
              {activeSection === milestone.id && (
                <span className="mascot-dot-label">{milestone.label}</span>
              )}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}