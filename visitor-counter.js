// Unique visitor counter
// Increments ONCE per browser, then shows cached count on all subsequent loads
(function() {
  var el = document.getElementById("visitor-count");
  if (!el) return;

  var COUNTED_KEY = "ys_counted";
  var CACHED_COUNT = "ys_visit_count";

  function show(n) {
    el.textContent = Number(n).toLocaleString();
  }

  // If already counted in this browser, just show the cached number — no API call
  var cached = localStorage.getItem(CACHED_COUNT);
  if (localStorage.getItem(COUNTED_KEY) && cached) {
    show(cached);
    return;
  }

  // First-time visitor — try to increment via API, then cache the result
  fetch("https://tallywire.cronpulse.workers.dev/hit/yousufsultan-portfolio/visits")
    .then(function(r) {
      if (!r.ok) throw new Error("fail");
      return r.json();
    })
    .then(function(d) {
      var count = d.value || d.count || 1;
      show(count);
      localStorage.setItem(COUNTED_KEY, "1");
      localStorage.setItem(CACHED_COUNT, String(count));
    })
    .catch(function() {
      // Fallback: local-only counter
      var local = parseInt(localStorage.getItem(CACHED_COUNT) || "0", 10) + 1;
      show(local);
      localStorage.setItem(COUNTED_KEY, "1");
      localStorage.setItem(CACHED_COUNT, String(local));
    });
})();
