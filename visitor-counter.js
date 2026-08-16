// Unique visitor counter — tries multiple free APIs with localStorage fallback
(function() {
  var el = document.getElementById("visitor-count");
  if (!el) return;

  var STORAGE_KEY = "ys_counted";
  var COUNT_KEY = "ys_visit_count";

  function show(n) {
    el.textContent = Number(n).toLocaleString();
  }

  // Fallback: localStorage-only counter (per-device, not global, but always works)
  function localFallback() {
    var count = parseInt(localStorage.getItem(COUNT_KEY) || "0", 10);
    if (!localStorage.getItem(STORAGE_KEY)) {
      count++;
      localStorage.setItem(COUNT_KEY, count);
      localStorage.setItem(STORAGE_KEY, "1");
    }
    show(count || 1);
  }

  // Try Tallywire first
  function tryTallywire() {
    return fetch("https://tallywire.cronpulse.workers.dev/hit/yousufsultan-portfolio/visits")
      .then(function(r) {
        if (!r.ok) throw new Error("not ok");
        return r.json();
      })
      .then(function(d) {
        if (d && d.value) {
          show(d.value);
          localStorage.setItem(STORAGE_KEY, "1");
          localStorage.setItem(COUNT_KEY, d.value);
          return true;
        }
        throw new Error("no value");
      });
  }

  // Try CounterAPI.com as backup
  function tryCounterAPI() {
    return fetch("https://counterapi.com/api/yousufsultan-portfolio/visits/up")
      .then(function(r) {
        if (!r.ok) throw new Error("not ok");
        return r.json();
      })
      .then(function(d) {
        if (d && (d.count || d.value)) {
          var v = d.count || d.value;
          show(v);
          localStorage.setItem(STORAGE_KEY, "1");
          localStorage.setItem(COUNT_KEY, v);
          return true;
        }
        throw new Error("no value");
      });
  }

  // Chain: try Tallywire → CounterAPI → localStorage fallback
  tryTallywire().catch(function() {
    return tryCounterAPI();
  }).catch(function() {
    localFallback();
  });
})();
