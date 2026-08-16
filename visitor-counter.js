// Visitor counter — localStorage only, no external API
// Shows "1" for first visit, caches forever, never changes on same browser
(function() {
  var el = document.getElementById("visitor-count");
  if (!el) return;

  var KEY = "ys_visit_count";
  var count = localStorage.getItem(KEY);

  if (!count) {
    // First time this browser visits — set count to 1
    count = "1";
    localStorage.setItem(KEY, count);
  }

  el.textContent = count;
})();
