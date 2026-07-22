/* ============================================================================
   PORTFOLIO DATA
   ----------------------------------------------------------------------------
   Edit this file to update your portfolio's Skills, Experience, or Automation
   Projects — index.html reads from these arrays and renders them automatically.

   ✅ To add a NEW EXPERIENCE ENTRY: add an object to the EXPERIENCE array below.
      No need to worry about order — entries are automatically sorted by
      startDate, most recent first (reverse-chronological), on every page load.

   ✅ To add a NEW SKILL: add it to the relevant category's `items` array
      inside SKILL_CATEGORIES (or add a whole new category object).

   ✅ To add a NEW CORE STRENGTH PILL (shown in the About section): add an
      object to CORE_STRENGTHS.

   ✅ To add a NEW AUTOMATION PROJECT: add an object to AUTOMATION_PROJECTS.

   Dates: use "YYYY-MM-DD" format for startDate/endDate so sorting works
   correctly. Use endDate: null for a role that is still current/ongoing.
============================================================================ */

// ---------------------------------------------------------------------------
// EXPERIENCE — reverse-chronological order is computed automatically from
// startDate. You do NOT need to manually place new entries in order.
// ---------------------------------------------------------------------------
const EXPERIENCE = [
  {
    title: "Lead Data Analyst — Cognizant (Client: Apple)",
    company: "Apple Maps Analytics · Hyderabad, India",
    startDate: "2022-05-01",
    endDate: null, // null = current / present
    dateLabel: "May 2022 – Present",
    bullets: [
      "Lead analytics strategy for Apple Maps quality, productivity, throughput, and automation programs.",
      "Manage and mentor a team of <b>8 analysts</b>, owning hiring and technical interviews.",
      "Serve on <b>Cognizant's official hiring panel for L1 (and occasional L2) interviews</b>, evaluating candidates beyond my own team.",
      "Architect Snowflake-based analytics platforms processing <b>10M+ records</b>.",
      "Led migration of <b>15+ legacy pipelines</b> to Snowflake, powering 20+ dashboards for 50+ stakeholders.",
      "Automated reporting workflows, saving <b>~15 hours/week</b> and reducing data validation effort by <b>30%</b>.",
    ],
  },
  {
    title: "Senior Software Engineer — IQVIA",
    company: "Healthcare Analytics Programs",
    startDate: "2019-05-01",
    endDate: "2022-05-01",
    dateLabel: "May 2019 – May 2022 (3 yrs 1 mo)",
    bullets: [
      "Led analytics solutions for enterprise reporting initiatives, translating business needs into scalable data solutions.",
      "Owned maintenance and enhancement of <b>12+ BI applications</b> across Tableau, Power BI, and SSRS.",
      "Delivered enhancements to <b>15+ dashboards</b>, increasing adoption and user satisfaction by <b>~30%</b>.",
      "Mentored a team of <b>5 analysts/developers</b>, improving productivity and delivery quality.",
      "Recognized with the IQVIA IMPACT Program Ovation Award (2022).",
    ],
  },
  {
    title: "Application Development Specialist — IQVIA (Full-Time)",
    company: "Healthcare Analytics Programs",
    startDate: "2016-09-01",
    endDate: "2019-04-01",
    dateLabel: "Sep 2016 – Apr 2019 (2 yrs 8 mos)",
    bullets: [
      "Converted from Contract-to-Hire to full-time employee at IQVIA.",
      "Designed and delivered Tableau and SSIS reports for multiple client analytics requirements.",
      "Built and optimized SSIS-based ETL pipelines and stored procedures, <b>reducing processing time by ~30%</b>.",
      "Led BI performance optimization initiatives, <b>improving report generation efficiency by ~20%</b>.",
      "Recognized with the IQVIA Spot Award (2016).",
    ],
  },
  {
    title: "Application Development Specialist — IQVIA (Contract-to-Hire, via Aroha Technologies)",
    company: "Healthcare Analytics Programs",
    startDate: "2016-03-01",
    endDate: "2016-09-01",
    dateLabel: "Mar 2016 – Sep 2016 (7 mos)",
    bullets: [
      "Joined IQVIA as a Contract-to-Hire Application Development Specialist, staffed via Aroha Technologies.",
      "Designed and delivered early Tableau and SSIS reporting solutions for client analytics requirements.",
      "Converted to a <b>full-time employee at IQVIA in September 2016</b> based on performance.",
    ],
  },
  {
    title: "Database Developer — EsyaSoft Technologies Pvt Ltd",
    company: "Greater Bengaluru Area",
    startDate: "2015-05-01",
    endDate: "2016-03-01",
    dateLabel: "May 2015 – Mar 2016 (11 mos)",
    bullets: [
      "Spearheaded the design and development of <b>10 project modules</b>, optimizing database architecture for a <b>30% reduction in query response time</b>.",
      "Crafted PostgreSQL functions and implemented ETL processes using Talend Data Integration, <b>enhancing data processing efficiency by 25%</b>.",
      "Efficiently scheduled ETL processes using UNIX, resulting in a <b>15% reduction in processing time</b>.",
    ],
  },
  {
    title: "MSBI Developer — Aroha Technologies",
    company: "Bangalore",
    startDate: "2013-05-01",
    endDate: "2015-04-01",
    dateLabel: "May 2013 – Apr 2015 (2 yrs)",
    bullets: [
      "Developed a new database architecture, <b>boosting performance by 10%</b>.",
      "Translated client requirements into dynamic reports using SSRS.",
      "Enhanced ETL processes, <b>accelerating execution time by 50%</b>.",
      "Improved data accuracy by <b>70%</b>, facilitating proactive decision-making.",
    ],
  },
];

// ---------------------------------------------------------------------------
// CORE STRENGTHS — shown as colored pills in the About section.
// ---------------------------------------------------------------------------
const CORE_STRENGTHS = [
  { name: "Snowflake", bg: "#29B5E8", color: "#ffffff" },
  { name: "SQL", bg: "#00758F", color: "#ffffff" },
  { name: "Python", bg: "#3776AB", color: "#ffffff" },
  { name: "Tableau", bg: "#E97627", color: "#ffffff" },
  { name: "Power BI", bg: "#F2C811", color: "#1d1d1f" },
  { name: "Team Leadership", bg: "#8E44AD", color: "#ffffff" },
  { name: "Process Automation", bg: "#E74C3C", color: "#ffffff" },
  { name: "Stakeholder Management", bg: "#16A085", color: "#ffffff" },
];

// ---------------------------------------------------------------------------
// SKILL CATEGORIES — Technical toolkit section.
// ---------------------------------------------------------------------------
const SKILL_CATEGORIES = [
  {
    title: "Analytics & Visualization",
    items: ["Tableau", "Power BI", "SSRS", "SSAS", "Dashboard Building", "Business Intelligence"],
  },
  {
    title: "Data Platforms",
    items: ["Snowflake", "SQL Server", "Microsoft SQL Server", "Hive", "PostgreSQL"],
  },
  {
    title: "Programming & Querying",
    items: ["SQL", "T-SQL", "DAX", "Python", "Spark (Scala)"],
  },
  {
    title: "Data Engineering",
    items: ["ETL Development", "SSIS", "Talend Open Studio", "Data Modeling", "Data Warehousing", "Data Cleaning", "Data Management"],
  },
  {
    title: "Automation & Integration",
    items: ["Python scripting", "Slack/Email APIs", "Kerberos/SPNego", "Radar API", "Harbor/launchd scheduling", "Claude Code"],
  },
  {
    title: "Tools",
    items: ["SQL Server Management Studio", "DBMS"],
  },
  {
    title: "Leadership & Delivery",
    items: ["Team Management", "Team Leadership", "Hiring", "Stakeholder Management", "Project Planning", "Analytics Leadership"],
  },
  {
    title: "Core Competencies",
    items: ["Analytical Skills", "Problem Solving", "Attention to Detail", "Communication", "Written Communication", "Customer Satisfaction"],
  },
];

// ---------------------------------------------------------------------------
// AUTOMATION PROJECTS
// ---------------------------------------------------------------------------
const AUTOMATION_PROJECTS = [
  {
    icon: "⚙️",
    title: "NJL Pipeline Monitor & Escalation System",
    description:
      "A production Python system that monitors 29 data pipelines across 5 program areas, " +
      "automatically detecting failures and escalating them — creating and prioritizing " +
      "P1 Radar tickets, emailing stakeholders, and posting Slack alerts with the " +
      "correct owner auto-@mentioned. Built with GenAI-assisted engineering (Claude Code) " +
      "to accelerate development while retaining full design ownership and code review.",
    tags: ["Python", "Slack API", "Radar API", "Kerberos Auth", "Harbor Scheduling", "Claude Code"],
    stats: ["<b>29</b> pipelines monitored", "<b>5x</b>/day automated runs"],
  },
  {
    icon: "🎫",
    title: "Radar Ticket Hygiene Bot",
    description:
      "An automation bot that scans open Radar tickets for missing required fields " +
      "(Category, Tentpole, Needed Date, Efforts) and auto-routes targeted email and " +
      "Slack notifications to the correct owner — removing a manual audit step entirely " +
      "from the team's workflow. Also built with GenAI-assisted engineering (Claude Code) " +
      "to speed up iteration on the Python codebase.",
    tags: ["Python", "Radar API", "SMTP Email", "Slack Webhooks", "Claude Code"],
    stats: ["Auto field-validation", "Zero manual triage"],
  },
];

// ---------------------------------------------------------------------------
// IMPACT NUMBERS — shown in the "Numbers that tell the story" strip.
// ---------------------------------------------------------------------------
const IMPACT_NUMBERS = [
  { num: "13+", label: "Years Experience" },
  { num: "8", label: "Analysts Managed & Mentored" },
  { num: "10M+", label: "Records Processed" },
  { num: "20+", label: "Dashboards Owned" },
  { num: "29", label: "Pipelines Auto-Monitored" },
];
