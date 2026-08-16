// Unique visitor counter using CountAPI
// Only counts once per browser (localStorage flag)
(function() {
  const NAMESPACE = "yousufsultan-portfolio";
  const KEY = "visitors";
  const API = "https://api.countapi.xyz";

  function displayCount(num) {
    const el = document.getElementById("visitor-count");
    if (el) el.textContent = num.toLocaleString();
  }

  // Check if this browser already counted
  if (localStorage.getItem("ys_counted")) {
    // Already counted — just fetch current value
    fetch(API + "/get/" + NAMESPACE + "/" + KEY)
      .then(r => r.json())
      .then(data => displayCount(data.value || 0))
      .catch(() => displayCount("—"));
  } else {
    // New visitor — hit the counter
    fetch(API + "/hit/" + NAMESPACE + "/" + KEY)
      .then(r => r.json())
      .then(data => {
        displayCount(data.value || 0);
        localStorage.setItem("ys_counted", "1");
      })
      .catch(() => displayCount("—"));
  }
})();
