/* ============================================================================
   ANIMATIONS JS — scroll reveal, count-up, progress bar, back-to-top, hamburger
============================================================================ */

document.addEventListener("DOMContentLoaded", () => {
  // Remove page-loading class to trigger fade-in
  requestAnimationFrame(() => {
    document.body.classList.remove("page-loading");
  });

  // --- Scroll Reveal ---
  const revealElements = document.querySelectorAll(".reveal, .reveal-stagger");
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  revealElements.forEach((el) => revealObserver.observe(el));

  // --- Count-Up Animation for Impact Numbers ---
  const impactStrip = document.getElementById("impact-strip");
  let countUpDone = false;
  const countObserver = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting && !countUpDone) {
        countUpDone = true;
        animateCountUp();
        countObserver.unobserve(impactStrip);
      }
    },
    { threshold: 0.3 }
  );
  if (impactStrip) countObserver.observe(impactStrip);

  function animateCountUp() {
    const numEls = impactStrip.querySelectorAll(".num");
    numEls.forEach((el) => {
      const text = el.textContent;
      const match = text.match(/^([\d,.]+)(.*)$/);
      if (!match) return;
      const target = parseFloat(match[1].replace(/,/g, ""));
      const suffix = match[2];
      const duration = 1200;
      const startTime = performance.now();

      function tick(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(target * eased);
        el.textContent = current.toLocaleString() + suffix;
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    });
  }

  // --- Reading Progress Bar ---
  const progressBar = document.getElementById("progress-bar");
  function updateProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = progress + "%";
  }
  window.addEventListener("scroll", updateProgress, { passive: true });

  // --- Back to Top Button ---
  const backToTop = document.getElementById("back-to-top");
  function toggleBackToTop() {
    if (window.scrollY > 400) {
      backToTop.classList.add("visible");
    } else {
      backToTop.classList.remove("visible");
    }
  }
  window.addEventListener("scroll", toggleBackToTop, { passive: true });
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // --- Hamburger Menu ---
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("open");
  });
  // Close menu on link click
  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("open");
    });
  });
});
