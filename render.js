document.addEventListener("DOMContentLoaded", () => {
  // Hamburger
  const ham = document.getElementById("hamburger");
  const menu = document.getElementById("nav-menu");
  if (ham && menu) ham.addEventListener("click", () => menu.classList.toggle("open"));

  // Experience timeline
  const tl = document.getElementById("timeline");
  tl.innerHTML = EXPERIENCE.map(j => `
    <div class="tl-item">
      <div class="tl-head">
        <span class="tl-title">${j.title}</span>
        <span class="tl-dates">${j.dates}</span>
      </div>
      <div class="tl-company">${j.company}</div>
      <ul>${j.bullets.map(b => `<li>${b}</li>`).join("")}</ul>
    </div>
  `).join("");

  // Agents
  const ag = document.getElementById("agents-grid");
  ag.innerHTML = AI_AGENTS.map(a => `
    <div class="agent-card">
      <div class="card-header">
        <span class="card-icon">${a.icon}</span>
        <h4>${a.title}</h4>
      </div>
      <div class="status">${a.status}</div>
      <p>${a.description}</p>
      <div class="tags">${a.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
    </div>
  `).join("");

  // Projects — now as 2x2 grid cards
  const pl = document.getElementById("project-list");
  pl.innerHTML = PROJECTS.map(p => `
    <div class="proj-card">
      <span class="proj-icon">${p.icon}</span>
      <h4>${p.title}</h4>
      <p>${p.description}</p>
      <div class="tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
    </div>
  `).join("");

  // Skills + Certs
  const sk = document.getElementById("skills-grid");
  const skillsHTML = SKILLS.map(s => `
    <div class="skill-card">
      <h4>${s.title}</h4>
      <p>${s.items}</p>
    </div>
  `).join("");
  const certsHTML = `<div class="cert-row">${CERTS.map(c => `
    <div class="cert-badge">
      <span class="cert-icon">${c.icon}</span>
      <div class="cert-info">
        <h5>${c.name}</h5>
        <p>${c.issuer}</p>
      </div>
    </div>
  `).join("")}</div>`;
  sk.innerHTML = skillsHTML + certsHTML;

  // Scroll reveal with stagger
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => {
          e.target.style.opacity = "1";
          e.target.style.transform = "translateY(0)";
        }, i * 60);
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.06 });

  document.querySelectorAll(".agent-card, .proj-card, .skill-card, .cert-badge, .tl-item, .bento-card, .about-grid, .contact-card").forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(28px)";
    el.style.transition = "opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)";
    observer.observe(el);
  });
});
