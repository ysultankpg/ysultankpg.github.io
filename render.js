/* ============================================================================
   PORTFOLIO RENDER SCRIPT
   ----------------------------------------------------------------------------
   Reads from data.js (EXPERIENCE, CORE_STRENGTHS, SKILL_CATEGORIES,
   AUTOMATION_PROJECTS, IMPACT_NUMBERS) and renders each section dynamically.

   To add a new job, skill, project, or impact number — just edit data.js
   directly (see the comments at the top of that file for examples) and
   refresh the page. Experience entries are always sorted reverse-
   chronologically by startDate before rendering, so you never need to
   worry about placing a new entry in the "right" position in the array.
============================================================================ */

function renderImpact() {
  const el = document.getElementById("impact-strip");
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

  // Reverse-chronological sort: most recent startDate first.
  // A null endDate (current role) is always treated as "most recent" of all,
  // ensuring ongoing roles surface at the top even if another entry has a
  // later startDate typo.
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
    <div class="job-card">
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
    <div class="project-card">
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
    <div class="skill-block">
      <h4>${cat.title}</h4>
      <p>${cat.items.join(", ")}</p>
    </div>`
  ).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderImpact();
  renderCoreStrengths();
  renderExperience();
  renderProjects();
  renderSkills();
});
