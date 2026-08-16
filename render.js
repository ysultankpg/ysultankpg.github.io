/* ============================================================================
   PORTFOLIO RENDER SCRIPT (Enhanced)
   ----------------------------------------------------------------------------
   Reads from data.js and renders each section. Adds reveal classes for scroll
   animations and timeline layout for experience.
============================================================================ */

function renderImpact() {
  const el = document.getElementById("impact-strip");
  el.classList.add("reveal-stagger");
  el.innerHTML = IMPACT_NUMBERS.map(
    (item) => `
    <div class="impact-card">
      <span class="num">${item.num}</span>
      <span class="label">${item.label}</span>
    </div>`
  ).join("");
}

function renderCoreStrengths() {
  const el = document.getElementById("core-strengths-pills");
  el.innerHTML = CORE_STRENGTHS.map(
    (s) => `
    <span class="pill" style="background:${s.bg};color:${s.color};border-color:${s.bg};">${s.name}</span>`
  ).join("");
}

function renderExperience() {
  const el = document.getElementById("experience-list");

  const sorted = [...EXPERIENCE].sort((a, b) => {
    const aOngoing = a.endDate === null;
    const bOngoing = b.endDate === null;
    if (aOngoing && !bOngoing) return -1;
    if (bOngoing && !aOngoing) return 1;
    return new Date(b.startDate) - new Date(a.startDate);
  });

  el.innerHTML = sorted
    .map(
      (job) => `
    <div class="job-card reveal">
      <div class="job-head">
        <span class="job-title">${job.title}</span>
        <span class="job-dates">${job.dateLabel}</span>
      </div>
      <div class="job-co">${job.company || ""}</div>
      <ul>
        ${job.bullets.map((b) => `<li>${b}</li>`).join("\n        ")}
      </ul>
    </div>`
    )
    .join("");
}

function renderProjects() {
  const el = document.getElementById("projects-grid");
  el.innerHTML = AUTOMATION_PROJECTS.map(
    (p) => `
    <div class="project-card reveal">
      <div class="project-icon">${p.icon}</div>
      <h4>${p.title}</h4>
      <p class="desc">${p.description}</p>
      <div class="project-tags">
        ${p.tags.map((t) => `<span class="tag">${t}</span>`).join("\n        ")}
      </div>
      <div class="project-stats">
        ${p.stats.map((s) => `<span>${s}</span>`).join("\n        ")}
      </div>
    </div>`
  ).join("");
}

function renderSkills() {
  const el = document.getElementById("skills-grid");
  el.innerHTML = SKILL_CATEGORIES.map(
    (cat) => `
    <div class="skill-block reveal">
      <h4>${cat.title}</h4>
      <p>${cat.items.join(", ")}</p>
    </div>`
  ).join("");
}

function renderAgents() {
  const el = document.getElementById("agents-grid");
  if (!el || typeof AI_AGENTS === "undefined") return;
  el.innerHTML = AI_AGENTS.map(
    (a) => `
    <div class="agent-card reveal">
      <div class="agent-header">
        <span class="agent-icon">${a.icon}</span>
        <div>
          <h4>${a.title}</h4>
          <span class="agent-status">${a.status}</span>
        </div>
      </div>
      <p class="desc">${a.description}</p>
      <div class="project-tags">
        ${a.tags.map((t) => `<span class="tag">${t}</span>`).join("\n        ")}
      </div>
    </div>`
  ).join("");
}

function renderCerts() {
  const el = document.getElementById("certs-grid");
  if (!el || typeof CERTIFICATIONS === "undefined") return;
  el.innerHTML = CERTIFICATIONS.map(
    (c) => `
    <div class="cert-card reveal">
      <span class="cert-icon">${c.icon}</span>
      <div>
        <h4>${c.name}</h4>
        <p>${c.issuer}</p>
      </div>
    </div>`
  ).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderImpact();
  renderCoreStrengths();
  renderExperience();
  renderAgents();
  renderProjects();
  renderSkills();
  renderCerts();
});
