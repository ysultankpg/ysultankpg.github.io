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
  { name: "Claude Code", bg: "#D97757", color: "#ffffff" },
  { name: "AI-Assisted Analytics", bg: "#6366F1", color: "#ffffff" },
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
    items: ["Python scripting", "Slack/Email APIs", "Kerberos/SPNego", "Radar API", "Harbor/launchd scheduling", "Claude Code", "MCP (Model Context Protocol)", "Snowflake MCP", "Tableau MCP", "AI-Assisted Analytics", "Prompt Engineering"],
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
      "using the Model Context Protocol (MCP) — including Snowflake MCP and Tableau MCP servers " +
      "to query pipeline/dashboard state directly — and deliberate prompt engineering to accelerate " +
      "development while retaining full design ownership and code review.",
    tags: ["Python", "Slack API", "Radar API", "Kerberos Auth", "Harbor Scheduling", "Claude Code", "MCP", "Snowflake MCP", "Tableau MCP", "Prompt Engineering"],
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
      "and AI-assisted analytics via MCP-connected tooling to speed up iteration on the Python codebase.",
    tags: ["Python", "Radar API", "SMTP Email", "Slack Webhooks", "Claude Code", "MCP", "AI-Assisted Analytics"],
    stats: ["Auto field-validation", "Zero manual triage"],
  },
  {
    icon: "🌳",
    title: "SQL Table Lineage Explorer",
    description:
      "A tool that traces full upstream and downstream table lineage directly from SQL source " +
      "code — solving a gap where scheduled SQL scripts (as opposed to views) don't show up in " +
      "a warehouse's built-in dependency metadata. Parses every SQL file in a repository into a " +
      "single dependency graph, then runs a breadth-first search in both directions to show exactly " +
      "what feeds a table and everything that gets built from it, rendered as a searchable, " +
      "collapsible tree. Includes a live, role-free Snowflake lookup layer — built with Claude Code " +
      "via MCP — to resolve the real schema a table lives in, catching cases where a script's own " +
      "comments or configuration disagree with where the table actually landed.",
    tags: ["Python", "SQL Parsing", "Snowflake", "Claude Code", "MCP", "Snowflake MCP", "Dependency Graphs"],
    stats: ["Full-depth lineage", "Repo-wide graph traversal"],
  },
  {
    icon: "📖",
    title: "Self-Updating Data Dictionary Generator",
    description:
      "A fully browser-based tool that turns any SQL folder in a source repository into a " +
      "browsable, self-updating data dictionary — no installation required for the core flow. " +
      "Parses table/view definitions to extract columns, source tables, and clustering keys, " +
      "then optionally enriches every column with its live Snowflake data type via a small, " +
      "secured backend service, so the dictionary never goes stale even as the underlying " +
      "pipeline evolves. Falls back gracefully to SQL-based type inference when the live lookup " +
      "isn't configured, and was designed with a security-first model — credentials never touch " +
      "the browser, and every query is strictly read-only.",
    tags: ["JavaScript", "SQL Parsing", "Snowflake", "FastAPI", "Claude Code", "MCP", "Security-First Design"],
    stats: ["Zero-install core flow", "Live schema enrichment"],
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

// ---------------------------------------------------------------------------
// AI AGENTS — autonomous assistants designed and deployed via GenAI tooling.
// ---------------------------------------------------------------------------
const AI_AGENTS = [
  {
    icon: "🤖",
    title: "Radar Daily Triage",
    description:
      "An autonomous daily agent that scans all open Radar tickets across my assigned components, " +
      "categorizes them by urgency (Overdue, Due Soon, P1/P2 fires, Stale 60+ days), and emails " +
      "a clean HTML summary with 3-6 prioritized action items every weekday morning at 9 AM.",
    tags: ["Enterprise Assistant", "Radar API", "Email Automation", "Scheduled Agent"],
    status: "Live - runs daily on weekdays",
  },
  {
    icon: "👥",
    title: "Team Radar Triage",
    description:
      "A team-wide triage agent that pulls all open tickets from multiple bug-tracking components, " +
      "groups them by assignee, and delivers a structured prioritized report via email — " +
      "giving the entire team visibility into the backlog without manual audit.",
    tags: ["Enterprise Assistant", "Bug Tracking API", "Multi-Component", "Team Visibility", "Email"],
    status: "Live - scheduled runs",
  },
  {
    icon: "📋",
    title: "My Day - Radar Triage",
    description:
      "A personal daily assistant that reviews both assigned and originated Radars, " +
      "synthesizes them into a single prioritized action list, and emails a formatted " +
      "summary on every run — designed as a personal 'start-of-day' briefing to eliminate " +
      "manual ticket scanning.",
    tags: ["Enterprise Assistant", "Radar API", "Personal Workflow", "Daily Briefing"],
    status: "Live - daily runs",
  },
  {
    icon: "📊",
    title: "Stakeholder Weekly Recap",
    description:
      "A weekly agent that compiles key updates, metrics movements, and action items across " +
      "all active workstreams into a single digest — then delivers a formatted recap to " +
      "stakeholders via Slack and email, keeping 50+ partners aligned without manual status meetings.",
    tags: ["Enterprise Assistant", "Slack API", "Email Automation", "Weekly Digest", "Stakeholder Comms"],
    status: "Live - weekly runs",
  },
];

// ---------------------------------------------------------------------------
// CERTIFICATIONS & TRAINING
// ---------------------------------------------------------------------------
const CERTIFICATIONS = [
  { name: "Snowflake – The Complete Masterclass", issuer: "Udemy", icon: "❄️" },
  { name: "Apache Spark with Scala", issuer: "Udemy", icon: "⚡" },
  { name: "MTA: Database Fundamentals", issuer: "Microsoft", icon: "🏅" },
  { name: "Tableau Training & Certifications", issuer: "Tableau", icon: "📊" },
];
