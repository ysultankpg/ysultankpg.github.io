---
layout: post
title: "The SQL Mindmap — Everything You Need in One View"
date: 2026-08-16
excerpt: "A visual mindmap covering every major SQL concept — from DDL and DML to Window Functions and Joins. Here's how I use it as a quick-reference mental model."
---

<div class="sql-mindmap-wrapper">
  <svg class="sql-mindmap-svg" viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg">
    <!-- Connection lines -->
    <g class="mm-lines" stroke-width="2.5" fill="none" stroke-linecap="round">
      <path d="M450,300 C380,300 320,140 250,130" stroke="#a78bfa" class="mm-line"/>
      <path d="M450,300 C520,300 600,120 680,110" stroke="#22d3ee" class="mm-line"/>
      <path d="M450,300 C380,320 280,280 180,300" stroke="#34d399" class="mm-line"/>
      <path d="M450,300 C520,320 620,280 720,300" stroke="#fb7185" class="mm-line"/>
      <path d="M450,300 C380,340 320,460 250,480" stroke="#fbbf24" class="mm-line"/>
      <path d="M450,300 C520,340 600,460 680,490" stroke="#e879f9" class="mm-line"/>
      <!-- Sub-branches DDL -->
      <path d="M250,130 C220,110 180,90 150,80" stroke="#a78bfa" stroke-width="1.5" class="mm-line mm-sub"/>
      <path d="M250,130 C220,130 180,130 140,135" stroke="#a78bfa" stroke-width="1.5" class="mm-line mm-sub"/>
      <path d="M250,130 C230,150 200,170 160,180" stroke="#a78bfa" stroke-width="1.5" class="mm-line mm-sub"/>
      <!-- Sub-branches DML -->
      <path d="M680,110 C710,90 740,75 770,65" stroke="#22d3ee" stroke-width="1.5" class="mm-line mm-sub"/>
      <path d="M680,110 C710,110 750,110 790,115" stroke="#22d3ee" stroke-width="1.5" class="mm-line mm-sub"/>
      <path d="M680,110 C710,130 740,150 775,160" stroke="#22d3ee" stroke-width="1.5" class="mm-line mm-sub"/>
      <!-- Sub-branches DCL -->
      <path d="M180,300 C150,280 110,270 70,265" stroke="#34d399" stroke-width="1.5" class="mm-line mm-sub"/>
      <path d="M180,300 C140,300 100,305 60,310" stroke="#34d399" stroke-width="1.5" class="mm-line mm-sub"/>
      <path d="M180,300 C150,320 110,335 70,345" stroke="#34d399" stroke-width="1.5" class="mm-line mm-sub"/>
      <!-- Sub-branches Joins -->
      <path d="M720,300 C750,280 790,270 830,260" stroke="#fb7185" stroke-width="1.5" class="mm-line mm-sub"/>
      <path d="M720,300 C760,300 800,300 840,305" stroke="#fb7185" stroke-width="1.5" class="mm-line mm-sub"/>
      <path d="M720,300 C750,320 790,335 830,345" stroke="#fb7185" stroke-width="1.5" class="mm-line mm-sub"/>
      <!-- Sub-branches Window -->
      <path d="M250,480 C220,470 170,450 130,440" stroke="#fbbf24" stroke-width="1.5" class="mm-line mm-sub"/>
      <path d="M250,480 C210,490 160,490 120,495" stroke="#fbbf24" stroke-width="1.5" class="mm-line mm-sub"/>
      <path d="M250,480 C230,510 200,530 160,545" stroke="#fbbf24" stroke-width="1.5" class="mm-line mm-sub"/>
      <!-- Sub-branches Aggregate -->
      <path d="M680,490 C710,470 750,455 790,445" stroke="#e879f9" stroke-width="1.5" class="mm-line mm-sub"/>
      <path d="M680,490 C720,490 760,495 800,500" stroke="#e879f9" stroke-width="1.5" class="mm-line mm-sub"/>
      <path d="M680,490 C710,510 750,530 790,540" stroke="#e879f9" stroke-width="1.5" class="mm-line mm-sub"/>
    </g>

    <!-- Central node -->
    <g class="mm-center">
      <circle cx="450" cy="300" r="48" fill="url(#grad-center)" class="mm-pulse"/>
      <text x="450" y="308" text-anchor="middle" font-size="22" font-weight="800" fill="#fff" font-family="Outfit, sans-serif">SQL</text>
    </g>

    <!-- Branch nodes -->
    <g class="mm-node mm-ddl"><rect x="210" y="110" width="80" height="36" rx="18" fill="#a78bfa"/><text x="250" y="134" text-anchor="middle" font-size="13" font-weight="700" fill="#fff" font-family="Outfit">DDL</text></g>
    <g class="mm-node mm-dml"><rect x="640" y="92" width="80" height="36" rx="18" fill="#22d3ee"/><text x="680" y="116" text-anchor="middle" font-size="13" font-weight="700" fill="#fff" font-family="Outfit">DML</text></g>
    <g class="mm-node mm-dcl"><rect x="140" y="282" width="80" height="36" rx="18" fill="#34d399"/><text x="180" y="306" text-anchor="middle" font-size="13" font-weight="700" fill="#fff" font-family="Outfit">DCL / TCL</text></g>
    <g class="mm-node mm-joins"><rect x="680" y="282" width="80" height="36" rx="18" fill="#fb7185"/><text x="720" y="306" text-anchor="middle" font-size="13" font-weight="700" fill="#fff" font-family="Outfit">Joins</text></g>
    <g class="mm-node mm-window"><rect x="200" y="462" width="100" height="36" rx="18" fill="#fbbf24"/><text x="250" y="486" text-anchor="middle" font-size="13" font-weight="700" fill="#1a1a2e" font-family="Outfit">Window Fn</text></g>
    <g class="mm-node mm-agg"><rect x="630" y="472" width="100" height="36" rx="18" fill="#e879f9"/><text x="680" y="496" text-anchor="middle" font-size="13" font-weight="700" fill="#fff" font-family="Outfit">Aggregates</text></g>

    <!-- Leaf nodes DDL -->
    <text x="150" y="84" font-size="11" fill="#a78bfa" font-family="Outfit" font-weight="500">CREATE</text>
    <text x="140" y="139" font-size="11" fill="#a78bfa" font-family="Outfit" font-weight="500">ALTER</text>
    <text x="160" y="184" font-size="11" fill="#a78bfa" font-family="Outfit" font-weight="500">DROP / TRUNCATE</text>

    <!-- Leaf nodes DML -->
    <text x="770" y="69" font-size="11" fill="#22d3ee" font-family="Outfit" font-weight="500">SELECT</text>
    <text x="790" y="119" font-size="11" fill="#22d3ee" font-family="Outfit" font-weight="500">INSERT</text>
    <text x="775" y="164" font-size="11" fill="#22d3ee" font-family="Outfit" font-weight="500">UPDATE / DELETE</text>

    <!-- Leaf nodes DCL -->
    <text x="20" y="269" font-size="11" fill="#34d399" font-family="Outfit" font-weight="500">GRANT</text>
    <text x="20" y="314" font-size="11" fill="#34d399" font-family="Outfit" font-weight="500">REVOKE</text>
    <text x="20" y="349" font-size="11" fill="#34d399" font-family="Outfit" font-weight="500">COMMIT / ROLLBACK</text>

    <!-- Leaf nodes Joins -->
    <text x="830" y="264" font-size="11" fill="#fb7185" font-family="Outfit" font-weight="500">INNER</text>
    <text x="840" y="309" font-size="11" fill="#fb7185" font-family="Outfit" font-weight="500">LEFT / RIGHT</text>
    <text x="830" y="349" font-size="11" fill="#fb7185" font-family="Outfit" font-weight="500">FULL OUTER</text>

    <!-- Leaf nodes Window -->
    <text x="70" y="444" font-size="11" fill="#fbbf24" font-family="Outfit" font-weight="500">ROW_NUMBER</text>
    <text x="60" y="499" font-size="11" fill="#fbbf24" font-family="Outfit" font-weight="500">RANK / DENSE_RANK</text>
    <text x="100" y="549" font-size="11" fill="#fbbf24" font-family="Outfit" font-weight="500">LAG / LEAD / NTILE</text>

    <!-- Leaf nodes Aggregate -->
    <text x="790" y="449" font-size="11" fill="#e879f9" font-family="Outfit" font-weight="500">AVG / SUM</text>
    <text x="800" y="504" font-size="11" fill="#e879f9" font-family="Outfit" font-weight="500">COUNT</text>
    <text x="790" y="544" font-size="11" fill="#e879f9" font-family="Outfit" font-weight="500">MIN / MAX</text>

    <!-- Gradient defs -->
    <defs>
      <radialGradient id="grad-center" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#a78bfa"/>
        <stop offset="100%" stop-color="#6C3CE0"/>
      </radialGradient>
    </defs>
  </svg>
</div>

<style>
.sql-mindmap-wrapper {
  margin: 32px 0;
  padding: 24px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 20px;
  overflow: hidden;
}
.sql-mindmap-svg {
  width: 100%;
  height: auto;
  display: block;
}

/* Line draw animation */
.mm-line {
  stroke-dasharray: 300;
  stroke-dashoffset: 300;
  animation: drawLine 1.5s ease-out forwards;
}
.mm-sub {
  stroke-dasharray: 200;
  stroke-dashoffset: 200;
  animation: drawSub 1s ease-out 0.8s forwards;
}
@keyframes drawLine {
  to { stroke-dashoffset: 0; }
}
@keyframes drawSub {
  to { stroke-dashoffset: 0; }
}

/* Node pop-in */
.mm-node, .mm-center {
  opacity: 0;
  transform-origin: center;
  animation: popIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}
.mm-center { animation-delay: 0.3s; }
.mm-ddl { animation-delay: 0.6s; }
.mm-dml { animation-delay: 0.7s; }
.mm-dcl { animation-delay: 0.8s; }
.mm-joins { animation-delay: 0.9s; }
.mm-window { animation-delay: 1.0s; }
.mm-agg { animation-delay: 1.1s; }
@keyframes popIn {
  0% { opacity: 0; transform: scale(0.3); }
  100% { opacity: 1; transform: scale(1); }
}

/* Center pulse */
.mm-pulse {
  animation: pulse 3s ease-in-out infinite 2s;
}
@keyframes pulse {
  0%, 100% { filter: drop-shadow(0 0 0 rgba(167,139,250,0)); }
  50% { filter: drop-shadow(0 0 16px rgba(167,139,250,0.5)); }
}

/* Leaf text fade-in */
.sql-mindmap-svg text:not(.mm-center text):not(.mm-node text) {
  opacity: 0;
  animation: fadeIn 0.6s ease-out 1.4s forwards;
}
@keyframes fadeIn {
  to { opacity: 1; }
}
</style>

SQL is the one skill that hasn't gone out of style in 30 years — and probably won't for another 30. Whether you're writing a quick `SELECT` or building a multi-CTE pipeline that feeds a Tableau dashboard, having a mental model of how all the pieces connect is more useful than memorizing syntax.

This mindmap breaks SQL into its core branches:

- **DDL** — the structural layer (CREATE, ALTER, DROP, TRUNCATE)
- **DML** — the data layer (SELECT, INSERT, UPDATE, DELETE)
- **DCL / TCL** — access control (GRANT, REVOKE) and transaction safety (COMMIT, ROLLBACK, SAVEPOINT)
- **Joins** — INNER, LEFT, RIGHT, FULL OUTER — the backbone of relational thinking
- **Window Functions** — ROW_NUMBER, RANK, DENSE_RANK, LAG, LEAD, NTILE — where analytical SQL really shines
- **Aggregate Functions** — AVG, SUM, COUNT, MIN, MAX — the basics that never stop being useful

I keep this pinned because even after 13 years, I still glance at it when I'm deep in a complex query and need to remember which branch a concept lives on. It's not about memorization — it's about having a map so you always know where to look.

If you're early in your SQL journey, save this. If you're senior, share it with your team.
