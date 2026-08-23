const EXPERIENCE = [
  { title: "Lead Data Analyst — Cognizant (Client: Apple)", company: "Apple Maps Analytics, Hyderabad", dates: "May 2022 – Present", bullets: ["Lead analytics strategy for Maps quality, productivity, throughput, and automation programs.", "Manage and mentor a team of 8 analysts, owning hiring and technical interviews.", "Architect Snowflake-based analytics platforms processing 10M+ records.", "Automated reporting workflows, saving ~15 hours/week and reducing data validation effort by 30%."] },
  { title: "Senior Software Engineer — IQVIA", company: "Healthcare Analytics", dates: "May 2019 – May 2022", bullets: ["Led analytics solutions for enterprise reporting, translating business needs into scalable data solutions.", "Owned maintenance and enhancement of 12+ BI applications across Tableau, Power BI, and SSRS.", "Mentored a team of 5 analysts/developers. Recognized with IQVIA IMPACT Ovation Award (2022)."] },
  { title: "Application Development Specialist — IQVIA", company: "Healthcare Analytics", dates: "Mar 2016 – Apr 2019", bullets: ["Designed and delivered Tableau and SSIS reports for multiple client analytics requirements.", "Built and optimized ETL pipelines, reducing processing time by ~30%.", "Recognized with IQVIA Spot Award (2016). Converted from contract to full-time based on performance."] },
  { title: "Database Developer — EsyaSoft Technologies", company: "Bengaluru", dates: "May 2015 – Mar 2016", bullets: ["Spearheaded design of 10 project modules, optimizing database architecture for 30% faster queries.", "Crafted PostgreSQL functions and implemented ETL using Talend Data Integration."] },
  { title: "MSBI Developer — Aroha Technologies", company: "Bangalore", dates: "May 2013 – Apr 2015", bullets: ["Developed new database architecture, boosting performance by 10%.", "Enhanced ETL processes, accelerating execution time by 50%."] },
];

const AI_AGENTS = [
  { icon: "🤖", title: "Radar Daily Triage", status: "Live - daily on weekdays", description: "Scans all open tickets across assigned components, categorizes by urgency (Overdue, Due Soon, P1/P2, Stale 60+ days), and emails a clean HTML summary with 3-6 prioritized action items every weekday at 9 AM.", tags: ["Scheduled Agent", "Email Automation", "Bug Tracking API"] },
  { icon: "👥", title: "Team Radar Triage", status: "Live - scheduled runs", description: "Pulls all open tickets from multiple bug-tracking components, groups by assignee, and delivers a structured prioritized report via email — giving the entire team backlog visibility without manual audit.", tags: ["Multi-Component", "Team Visibility", "Email"] },
  { icon: "📋", title: "My Day - Radar Triage", status: "Live - daily runs", description: "Reviews both assigned and originated tickets, synthesizes into a single prioritized action list, and emails a formatted start-of-day briefing to eliminate manual ticket scanning.", tags: ["Personal Workflow", "Daily Briefing"] },
  { icon: "📊", title: "Stakeholder Weekly Recap", status: "Live - weekly runs", description: "Compiles key updates, metrics movements, and action items across all active workstreams into a single digest — delivered to 50+ stakeholders via Slack and email.", tags: ["Slack API", "Weekly Digest", "Stakeholder Comms"] },
];

const PROJECTS = [
  { icon: "⚙️", title: "NJL Pipeline Monitor and Escalation System", description: "Production Python system monitoring 29 data pipelines across 5 program areas, automatically detecting failures and escalating via Radar tickets, email, and Slack with correct owner auto-mentioned.", tags: ["Python", "Slack API", "Radar API", "Kerberos Auth", "MCP"] },
  { icon: "🎫", title: "Radar Ticket Hygiene Bot", description: "Automation bot that scans open tickets for missing required fields and auto-routes targeted notifications to the correct owner — removing manual audit entirely.", tags: ["Python", "SMTP Email", "Slack Webhooks"] },
  { icon: "🌳", title: "SQL Table Lineage Explorer", description: "Traces full upstream and downstream table lineage from SQL source code. Parses every SQL file into a dependency graph, runs BFS in both directions, rendered as a searchable collapsible tree.", tags: ["Python", "SQL Parsing", "Snowflake", "Dependency Graphs"] },
  { icon: "📖", title: "Self-Updating Data Dictionary Generator", description: "Browser-based tool that turns any SQL folder into a browsable, self-updating data dictionary with optional live Snowflake enrichment. Security-first — credentials never touch the browser.", tags: ["JavaScript", "SQL Parsing", "FastAPI", "Security-First"] },
  { icon: "🧬", title: "GitAnatomy — GitHub Repository Analyzer", description: "A live, zero-dependency web app that dissects any GitHub repository — structure visualization, health scoring (11 indicators), and auto-generated data dictionary from SQL/Prisma/TypeORM. Supports github.com and GitHub Enterprise. Deployed via GitHub Actions to GitHub Pages.", tags: ["JavaScript", "GitHub API v3", "SQL Parsing", "GitHub Pages", "CI/CD", "Claude Code"], link: "https://ysultankpg.github.io/gitanatomy/" },
];

const SKILLS = [
  { title: "Analytics", items: "Tableau, Power BI, SSRS, SSAS, Dashboard Building, Business Intelligence" },
  { title: "Data Platforms", items: "Snowflake, SQL Server, Hive, PostgreSQL" },
  { title: "Programming", items: "SQL, T-SQL, DAX, Python, Spark (Scala)" },
  { title: "Data Engineering", items: "ETL Development, SSIS, Talend, Data Modeling, Data Warehousing" },
  { title: "Automation", items: "Python scripting, Slack/Email APIs, Kerberos/SPNego, Claude Code, MCP, Prompt Engineering" },
  { title: "Leadership", items: "Team Management, Hiring, Stakeholder Management, Project Planning, Analytics Strategy" },
];

const CERTS = [
  { icon: "❄️", name: "Snowflake – The Complete Masterclass", issuer: "Udemy" },
  { icon: "⚡", name: "Apache Spark with Scala", issuer: "Udemy" },
  { icon: "🏅", name: "MTA: Database Fundamentals", issuer: "Microsoft" },
  { icon: "📊", name: "Tableau Training and Certifications", issuer: "Tableau" },
];
