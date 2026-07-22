/* ============================================================================
   THEME TOGGLE (Light / Dark / Auto)
   ----------------------------------------------------------------------------
   Applies data-theme="light" or data-theme="dark" to <html>, or removes it
   entirely for "auto" mode (which then falls back to the OS-level
   prefers-color-scheme media query already baked into styles.css).
   The choice is stored in localStorage so it persists across visits.
   Runs before DOMContentLoaded is even relevant for the CSS variables
   themselves (applied immediately on script execution to avoid a flash of
   the wrong theme), but the toggle UI itself is wired up on DOMContentLoaded.
============================================================================ */

const THEME_STORAGE_KEY = "site_theme_preference"; // "light" | "dark" | "auto"

function getStoredTheme() {
  return localStorage.getItem(THEME_STORAGE_KEY) || "auto";
}

function systemPrefersDark() {
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function applyTheme(pref) {
  const root = document.documentElement;
  if (pref === "dark") {
    root.setAttribute("data-theme", "dark");
  } else if (pref === "light") {
    root.setAttribute("data-theme", "light");
  } else {
    // auto: follow system preference right now (no attribute means
    // styles.css's [data-theme="dark"] block simply won't apply, so we
    // explicitly set based on current system state instead, and keep it
    // live-updating via the media query listener below).
    root.setAttribute("data-theme", systemPrefersDark() ? "dark" : "light");
  }
}

// Apply immediately (before DOM is fully parsed) to avoid a flash of the
// wrong theme on page load.
applyTheme(getStoredTheme());

// Keep "auto" mode live if the user changes their OS theme while the page
// is open, without needing a refresh.
if (window.matchMedia) {
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
    if (getStoredTheme() === "auto") {
      applyTheme("auto");
    }
  });
}

function setTheme(pref) {
  localStorage.setItem(THEME_STORAGE_KEY, pref);
  applyTheme(pref);
  updateToggleUI(pref);
}

function updateToggleUI(pref) {
  document.querySelectorAll(".theme-toggle button").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.theme === pref);
  });
}

function buildThemeToggle() {
  const container = document.getElementById("theme-toggle");
  if (!container) return;

  const current = getStoredTheme();
  container.innerHTML = `
    <button type="button" data-theme="light" title="Light mode" aria-label="Light mode">☀️</button>
    <button type="button" data-theme="dark" title="Dark mode" aria-label="Dark mode">🌙</button>
    <button type="button" data-theme="auto" title="Auto (system)" aria-label="Auto mode">🖥️</button>
  `;

  container.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => setTheme(btn.dataset.theme));
  });

  updateToggleUI(current);
}

document.addEventListener("DOMContentLoaded", buildThemeToggle);
