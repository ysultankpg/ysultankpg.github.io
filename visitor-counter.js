// Global unique visitor counter
// - Increments server-side counter ONCE per browser (Edge=1, Chrome=2, Safari=3, Phone=4...)
// - Caches the count in localStorage so refreshes/navigation don't re-count
// - Uses Tallywire (free, no signup): tallywire.cronpulse.workers.dev
(function() {
  var el = document.getElementById("visitor-count");
  if (!el) return;

  var COUNTED = "ys_counted";
  var CACHE = "ys_visit_count";
  var API = "https://tallywire.cronpulse.workers.dev/hit/yousufsultan-portfolio/unique-visitors";

  // Already counted in this browser — show cached number, no API call
  if (localStorage.getItem(COUNTED)) {
    el.textContent = localStorage.getItem(CACHE) || "1";
    return;
  }

  // New browser — hit the server to increment global count
  fetch(API)
    .then(function(r) { return r.json(); })
    .then(function(d) {
      var count = d.value || d.count || 1;
      el.textContent = count;
      localStorage.setItem(COUNTED, "1");
      localStorage.setItem(CACHE, String(count));
    })
    .catch(function() {
      // API unreachable — show fallback
      el.textContent = "1";
      localStorage.setItem(COUNTED, "1");
      localStorage.setItem(CACHE, "1");
    });
})();
