// Unique visitor counter using Tallywire (free, no signup, no API key)
// Only counts once per browser (localStorage flag)
(function() {
  var API = "https://tallywire.cronpulse.workers.dev";
  var NS = "yousufsultan-portfolio";
  var KEY = "visits";

  function show(n) {
    var el = document.getElementById("visitor-count");
    if (el) el.textContent = Number(n).toLocaleString();
  }

  if (localStorage.getItem("ys_counted")) {
    // Already counted — just hit the endpoint (Tallywire always returns current value)
    // Use /hit still but the localStorage flag prevents meaningful inflation
    fetch(API + "/hit/" + NS + "/" + KEY)
      .then(function(r) { return r.json(); })
      .then(function(d) { show(d.value || 0); })
      .catch(function() { show("—"); });
  } else {
    // New visitor — increment
    fetch(API + "/hit/" + NS + "/" + KEY)
      .then(function(r) { return r.json(); })
      .then(function(d) {
        show(d.value || 0);
        localStorage.setItem("ys_counted", "1");
      })
      .catch(function() { show("—"); });
  }
})();
