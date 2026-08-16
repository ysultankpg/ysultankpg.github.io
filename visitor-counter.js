// Unique visitor counter using CounterAPI.dev
// Only counts once per browser (localStorage flag)
(function() {
  const NAMESPACE = "yousufsultan-portfolio";
  const KEY = "visitors";
  const API = "https://api.counterapi.dev/v1";

  function displayCount(num) {
    const el = document.getElementById("visitor-count");
    if (el) el.textContent = Number(num).toLocaleString();
  }

  // Check if this browser already counted
  if (localStorage.getItem("ys_counted")) {
    // Already counted — just fetch current value
    fetch(API + "/" + NAMESPACE + "/" + KEY)
      .then(r => r.json())
      .then(data => displayCount(data.count || 0))
      .catch(() => displayCount("—"));
  } else {
    // New visitor — increment the counter
    fetch(API + "/" + NAMESPACE + "/" + KEY + "/up")
      .then(r => r.json())
      .then(data => {
        displayCount(data.count || 0);
        localStorage.setItem("ys_counted", "1");
      })
      .catch(() => displayCount("—"));
  }
})();
