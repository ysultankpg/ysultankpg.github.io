/* ============================================================================
   NAV ACTIVE-STATE HANDLER
   ----------------------------------------------------------------------------
   Highlights the current nav item (adds .active class) based on either:
     1. The current page URL (for standalone pages like /blog/ and /works/)
     2. The section currently scrolled into view (for the homepage's
        in-page anchors: #about, #experience, #projects, #skills, #contact)
   Shared by index.html and every Jekyll-rendered page (via _layouts/default.html).
============================================================================ */

(function () {
  const navLinks = Array.from(document.querySelectorAll("nav.topnav ul li a"));

  function clearActive() {
    navLinks.forEach((link) => link.classList.remove("active"));
  }

  function setActiveByPath() {
    const path = window.location.pathname;
    let matched = false;
    navLinks.forEach((link) => {
      const href = link.getAttribute("href") || "";
      // Match standalone pages like /blog/ or /works/ against the current path.
      if (href.startsWith("/") && !href.includes("#") && path.startsWith(href) && href !== "/") {
        link.classList.add("active");
        matched = true;
      }
    });
    return matched;
  }

  function setActiveBySection() {
    const sectionLinks = navLinks.filter((link) => {
      const href = link.getAttribute("href") || "";
      return href.startsWith("#") && href !== "#top";
    });
    if (sectionLinks.length === 0) return;

    const sections = sectionLinks
      .map((link) => {
        const id = link.getAttribute("href").slice(1);
        const el = document.getElementById(id);
        return el ? { link, el } : null;
      })
      .filter(Boolean);

    if (sections.length === 0) return;

    function updateOnScroll() {
      const scrollPos = window.scrollY + window.innerHeight * 0.3;
      let current = sections[0];
      sections.forEach((s) => {
        if (s.el.offsetTop <= scrollPos) current = s;
      });
      clearActive();
      current.link.classList.add("active");
    }

    window.addEventListener("scroll", updateOnScroll, { passive: true });
    updateOnScroll();
  }

  document.addEventListener("DOMContentLoaded", () => {
    const matchedStandalonePage = setActiveByPath();
    if (!matchedStandalonePage) {
      setActiveBySection();
    }
  });
})();
