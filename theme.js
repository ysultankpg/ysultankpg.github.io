// Theme switcher: light / dark / system
(function() {
  const saved = localStorage.getItem("theme") || "system";
  document.documentElement.setAttribute("data-theme", saved);

  document.addEventListener("DOMContentLoaded", () => {
    const switcher = document.getElementById("theme-switcher");
    if (!switcher) return;

    // Set initial active button
    const btns = switcher.querySelectorAll(".theme-btn");
    btns.forEach(btn => {
      btn.classList.toggle("active", btn.dataset.theme === saved);
      btn.addEventListener("click", () => {
        const theme = btn.dataset.theme;
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
        btns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
      });
    });
  });
})();
