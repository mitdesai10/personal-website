// ─── DISCIPLINES ─────────────────────────────────────────────────────────────
export const disciplines = [
  {
    id: 'product',
    label: 'Product Management',
    color: 'cyan',
    icon: '◈',
    summary:
      'Roadmaps, discovery, cross-functional alignment, and shipping products that solve real user problems.',
    skills: ['Product Strategy', 'User Research', 'Roadmapping', 'OKRs', 'Stakeholder Alignment', 'GTM Strategy', 'JIRA'],
  },
  {
    id: 'data',
    label: 'Data & Analytics',
    color: 'cyan',
    icon: '◉',
    summary:
      'Pipeline design, dashboarding, and the kind of exploratory analysis that changes what you thought you knew.',
    skills: ['SQL', 'Python', 'Power BI', 'Tableau', 'GA4', 'ETL Pipelines', 'Microsoft Azure', 'Hadoop'],
  },
  {
    id: 'marketing',
    label: 'Performance Marketing',
    color: 'amber',
    icon: '◎',
    summary:
      'Paid acquisition, attribution modelling, and growth loops — measured in actual revenue, not vanity metrics.',
    skills: ['Google Ads', 'Meta Ads', 'Bing Ads', 'SEO/SEM', 'Google Search Console', 'Semrush', 'HubSpot'],
  },
  {
    id: 'web',
    label: 'Web Development',
    color: 'amber',
    icon: '◇',
    summary:
      'From quick landing pages to full-stack apps — enough engineering depth to ship without waiting for a sprint.',
    skills: ['React', 'JavaScript', 'CSS', 'WordPress', 'GTM', 'GA4', 'Vercel', 'Microsoft Clarity'],
  },
]

// ─── EXPERIENCE TIMELINE ─────────────────────────────────────────────────────
export const experiences = [
  {
    title: 'Technical Strategist, Digital',
    company: 'Ciberspring International',
    location: 'Somerville, NJ',
    date: 'Mar 2025 – Present',
    initials: 'CI',
    iconBg: '#0F2A2A',
    iconColor: '#5EEAD4',
    points: [
      'Designed and deployed Power BI dashboards for revenue, project performance, and staffing utilization, delivering real-time insights to senior leadership.',
      'Architected advanced analytics instrumentation using GA4, Google Tag Manager, and Microsoft Clarity — custom event tracking, scroll depth, and CTA analytics across client properties.',
      'Built Power Automate workflows automating form submissions, Outlook notifications, and SharePoint updates to improve cross-team collaboration speed.',
      'Built a dynamic staffing calculator with complex margin, rate, and cost-allocation logic to automate pricing and resourcing decisions.',
    ],
  },
  {
    title: 'Digital Marketing Account Manager',
    company: 'Kitchen365 | SaaS',
    location: 'Atlanta, GA',
    date: 'Jun 2020 – Jul 2023',
    initials: 'K3',
    iconBg: '#1A1400',
    iconColor: '#F5A623',
    points: [
      'Optimized marketing spend across Google Ads, Bing, and Meta to achieve a 20× ROI, driving $2M+ in monthly revenue growth.',
      'Led SEO and SEM campaigns for Baxter Cabinets, driving a 30% YoY increase in online sales and a 28% boost in organic search traffic.',
      'Designed and launched demo.kitchen365.com — a digital product demo platform that improved client engagement by 50%.',
      'Implemented AI-driven automation using Zapier, Python, and Google Cloud AutoML, reducing manual processes by 50% and built SQL-based ETL pipelines.',
      'Developed forecasting models in Python to predict customer demand, reducing inventory costs by 20%.',
    ],
  },
  {
    title: 'Website Developer & Client Servicing Executive',
    company: 'Cyringe Media',
    location: 'Mumbai, MH',
    date: 'May 2019 – May 2020',
    initials: 'CM',
    iconBg: '#0F1A2A',
    iconColor: '#5EEAD4',
    points: [
      'Deployed client websites using WordPress, Wix, and SquareSpace with best practices in UI/UX and SEO, achieving a 40% uplift in web traffic.',
      'Managed the digital campaign for the Premier Badminton League (PBL) with StarSports, doubling Instagram and Facebook followers and increasing engagement by 115%.',
    ],
  },
]

// ─── CASE STUDIES ────────────────────────────────────────────────────────────
export const projects = [
  {
    slug: 'ai-knowledge-base-chatbot',
    title: 'AI Knowledge Base & Sales Chatbot',
    tagline: 'Turned scattered SOPs and tribal knowledge into a queryable AI assistant that reps could use mid-call.',
    disciplines: ['product', 'data'],
    status: 'shipped',
    year: '2024',
    role: 'Product Manager',
    timeline: '2024 · Phased rollout (V1 live, V2 in progress)',
    stack: ['Microsoft Copilot Studio', 'SharePoint', 'Microsoft Teams', 'Claude API', 'Microsoft 365'],
    stats: [
      { value: '10',    label: 'SOP Sections Unified' },
      { value: 'V1',    label: 'Live in Teams' },
      { value: '2-Phase', label: 'Rollout Strategy' },
    ],
    problem:
      'Sales reps and delivery staff were losing time and deals to a knowledge access problem. SOPs, pricing logic, and past proposal language were scattered across SharePoint, Salesforce, email threads, and individual employees\' memory — and finding the right answer during a live client call could take longer than a prospect was willing to wait.',
    approach:
      'Audited documentation across the org and interviewed sales and delivery staff before proposing any solution. Two findings shaped the roadmap: (1) the knowledge problem had to be solved before the AI problem — no point building a chatbot on fragmented, outdated SOPs; (2) IT approval timelines and existing M365 licensing meant the "best" AI model wasn\'t necessarily the right one for V1. Chose a phased approach: V1 used Microsoft Copilot Studio (already licensed, faster to approve) connected to a newly consolidated 10-section SOP library on SharePoint, deployed inside Teams. V2 scopes full Claude integration as part of a broader company-wide AI platform rollout.',
    result:
      'V1 shipped and live. The 10-section master SOP document — covering Finance, Lead Intake, Pipeline, Proposal/SOW, Auto-Renewal, Commission, and Project Process — became the foundation both for V1 retrieval and V2 planning. Key lesson: an AI chatbot project is a knowledge management project first and a model-selection project second. Teams that skip straight to picking a model end up automating access to bad information faster.',
    featured: true,
  },
  {
    slug: 'renewal-risk-tracker',
    title: 'Renewal Risk & Opportunity Tracker',
    tagline: 'Replaced a spreadsheet-and-memory renewal process with a proactive Salesforce-integrated risk system.',
    disciplines: ['product', 'data'],
    status: 'shipped',
    year: '2024',
    role: 'Product Manager',
    timeline: '2024 · V1 shipped, V2 planned',
    stack: ['Salesforce', 'SQL', 'Power BI', 'Python (V2)'],
    stats: [
      { value: 'V1',     label: 'Shipped & Live' },
      { value: 'RICE',   label: 'Prioritization Method' },
      { value: 'V2',     label: 'Predictive Scoring Planned' },
    ],
    problem:
      'Renewals were tracked manually across Salesforce reports, personal spreadsheets, and account managers\' memory. Renewal risk was invisible until it was too late — teams found out when a client said no, not before. Reporting was backward-looking, and ownership of at-risk accounts was unclear.',
    approach:
      'Pulled and audited existing Salesforce renewal data to understand what signals were actually available (contract end dates, usage data, support ticket volume, last contact date). Most of the raw signal already existed in Salesforce — it just wasn\'t surfaced or scored. Scoped V1 toward a structured tracker rather than a predictive model: fast to ship, uses data that already exists, and generates the labeled churn outcome data needed to build a real predictive model in V2. RICE-scored the full feature backlog — auto-flagging from Salesforce fields and the core risk dashboard scored highest on Reach and Impact.',
    result:
      'V1 tracker shipped as a Salesforce-integrated reporting layer. Account managers can flag accounts as On Track / Watch / At Risk / Churned with a reason and next action. Auto-flagging derives signals from Salesforce activity data. Key lesson: renewal risk usually isn\'t a data problem, it\'s a visibility problem — the people closest to the account already know more than any dashboard will tell them. The highest-leverage version of this tool made that existing knowledge visible and structured before trying to automate it.',
    featured: true,
  },
  {
    slug: 'gtm-ai-onboarding-assistant',
    title: 'GTM Plan: AI Onboarding Assistant',
    tagline: 'A full go-to-market plan for an AI-powered onboarding feature designed to cut trial drop-off in a B2B SaaS tool.',
    disciplines: ['product', 'marketing'],
    status: 'shipped',
    year: '2024',
    role: 'Product Manager (Independent Exercise)',
    timeline: '2024 · Product planning exercise',
    stack: ['Flowline (fictional SaaS)', 'AI/LLM', 'Beta instrumentation', 'A/B testing'],
    stats: [
      { value: '3',  label: 'Launch Phases' },
      { value: '4',  label: 'Risks Documented' },
      { value: '5',  label: 'Success Metrics' },
    ],
    problem:
      'Flowline (a hypothetical B2B PM tool) loses a meaningful share of trial signups before they ever create a real project. Root causes: blank-canvas paralysis when new users are dropped into an empty workspace, generic templates that don\'t match real workflows, and time-to-value that\'s too slow relative to trial length.',
    approach:
      'Designed an AI onboarding assistant that runs a 2-minute conversation to set up a tailored project structure, rather than offering generic templates. Key scoping decision: chose "template + AI refinement" over "full custom generation" for V1 — a wrong AI-generated workspace on first impression is worse than a slightly generic-but-safe one. Planned a beta with a subset of new signups against an instrumented baseline before wide release, with a skip option preserved for power users.',
    result:
      'Full GTM plan delivered: scoped a lower-risk technical approach over the more impressive one, sequenced a beta before full launch, and defined metrics that catch a "fast but shallow" false positive (activation uptick that doesn\'t hold at week 2) rather than just celebrating early numbers. Risks documented upfront: trust risk, scope creep risk, and measurement lag risk.',
    featured: true,
  },
]

// ─── ABOUT ───────────────────────────────────────────────────────────────────
export const about = {
  name: 'Mit Desai',
  tagline: 'Product manager who moves across data, marketing, and web — because the best solutions rarely live inside one function.',
  intro: "I've driven $2M/month in revenue growth, built AI-powered knowledge platforms, and shipped analytics infrastructure from zero to production — across three companies, four disciplines, and a lot of SQL.",
  bio: [
    "I'm a product manager who can't stop breaking out of the PM lane — and I've stopped apologizing for it. My work sits at the intersection of product, data, performance marketing, and web development because that's where the most interesting problems live.",
    "At Ciberspring International I architect analytics platforms, automate business operations, and instrument GA4 for enterprise clients. Before that, at Kitchen365, I led performance marketing for 25+ clients managing $100K+/month in ad spend, built ETL pipelines in SQL and Python, and shipped the company's product demo platform. I hold a Master's in Marketing Analytics from Simon Business School, University of Rochester.",
    "I'm most useful to teams that need someone who can run discovery on Monday, write a SQL query on Tuesday, brief a media buy on Wednesday, and push code on Thursday. If that's the kind of operator you're looking for, let's talk.",
  ],
  location: 'Somerville, NJ',
  toolkit: [
    {
      discipline: 'Product Management',
      tools: ['JIRA / Linear', 'Figma', 'Salesforce', 'GTM Strategy & PRDs', 'OKRs & Roadmapping', 'User Research'],
    },
    {
      discipline: 'Data & Analytics',
      tools: ['SQL (BigQuery / Postgres)', 'Python (pandas, AutoML)', 'Power BI / Tableau', 'Google Analytics 4', 'Microsoft Azure / Hadoop', 'ETL Pipelines'],
    },
    {
      discipline: 'Performance Marketing',
      tools: ['Google Ads', 'Meta Ads', 'Bing Ads', 'Google Search Console', 'Semrush / Oncrawl', 'HubSpot / Zoho'],
    },
    {
      discipline: 'Web Development',
      tools: ['React / JavaScript / CSS', 'WordPress / Wix / SquareSpace', 'Google Tag Manager', 'Microsoft Clarity', 'Power Automate', 'Vercel'],
    },
  ],
}

// ─── CONTACT ─────────────────────────────────────────────────────────────────
export const contact = {
  email: 'mit10desai@gmail.com',
  links: [
    { label: 'LinkedIn', url: 'https://linkedin.com/in/mitdesai10' },
    { label: 'GitHub',   url: 'https://github.com/mitdesai10' },
  ],
  availability: 'Open to senior IC, advisory, and leadership roles — currently based in Somerville, NJ',
}
