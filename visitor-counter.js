/* ============================================================================
   UNIQUE VISITOR COUNTER
   ----------------------------------------------------------------------------
   Uses CountAPI (https://countapi.xyz, free, no signup) which separates
   "hit" (increment) from "get" (read-only) requests. We only call "hit"
   once per browser (tracked via localStorage), so refreshing the page never
   inflates the count again. Every subsequent visit just reads the current
   value with "get" — safe to call any number of times.

   Honest limitation: this dedupes per BROWSER, not per human. Clearing
   localStorage, using a different browser, incognito mode, or visiting from
   another device will count as a new "unique" visitor. There's no way to
   get a perfectly accurate unique-human count without a real backend/cookie
   + IP tracking service — this is the standard tradeoff for a free,
   no-signup, client-side-only counter.
============================================================================ */

(function () {
  const NAMESPACE = "ysultankpg-portfolio";
  const KEY = "unique-visitors";
  const VISITED_FLAG = "site_visitor_counted";

  const el = document.getElementById("visitor-count");
  if (!el) return;

  const hasVisitedBefore = localStorage.getItem(VISITED_FLAG) === "true";
  const endpoint = hasVisitedBefore
    ? `https://api.countapi.xyz/get/${NAMESPACE}/${KEY}`
    : `https://api.countapi.xyz/hit/${NAMESPACE}/${KEY}`;

  fetch(endpoint)
    .then((res) => res.json())
    .then((data) => {
      if (typeof data.value === "number") {
        el.textContent = data.value.toLocaleString();
      }
      if (!hasVisitedBefore) {
        localStorage.setItem(VISITED_FLAG, "true");
      }
    })
    .catch(() => {
      // Fail silently — the footer just won't show a number if the
      // service is unreachable, rather than showing an error to visitors.
      el.textContent = "—";
    });
})();
