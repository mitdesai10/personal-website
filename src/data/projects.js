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
    iconBg: '#1a0d3a',
    iconColor: '#804dee',
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
    iconBg: '#0a2520',
    iconColor: '#00cea8',
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
    iconBg: '#1a0d3a',
    iconColor: '#804dee',
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
      { value: '10',  label: 'SOP Sections' },
      { value: 'V1',  label: 'Live in Teams' },
      { value: '2',   label: 'Phase Rollout' },
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
      { value: 'V1',   label: 'Shipped & Live' },
      { value: 'RICE', label: 'Prioritization' },
      { value: 'V2',   label: 'Next: Predictive' },
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

  {
    slug: 'telco-churn-analysis',
    title: 'Diagnosing $139K in Monthly Customer Churn',
    tagline: 'Segmented 7,043 customer records to identify the highest-impact retention levers — contract type, tenure, and service tier.',
    disciplines: ['data'],
    status: 'shipped',
    year: '2024',
    role: 'Data Analyst',
    timeline: '2024 · Exploratory Analysis',
    stack: ['Python', 'pandas', 'scikit-learn', 'Matplotlib', 'Seaborn', 'Jupyter'],
    stats: [
      { value: '26.5%', label: 'Churn Rate' },
      { value: '$139K', label: 'MRR at Risk' },
      { value: '15×',   label: 'Contract Impact' },
    ],
    type: 'analytics',
    dataset: 'IBM Telco Customer Churn · 7,043 records',
    datasetUrl: 'https://www.kaggle.com/datasets/blastchar/telco-customer-churn',
    kpis: [
      { label: 'Churn Rate',        value: '26.5%', sub: '1,869 of 7,043 customers lost' },
      { label: 'MRR at Risk',       value: '$139K',  sub: '30.5% of $456K monthly revenue' },
      { label: 'Early-Stage Churn', value: '53.3%', sub: 'Lost within the first 6 months' },
      { label: 'Best Retention',    value: '2.8%',  sub: 'Churn rate on two-year contracts' },
    ],
    chartData: {
      byContract: [
        { name: 'Month-to-month', rate: 42.7 },
        { name: 'One year',       rate: 11.3 },
        { name: 'Two year',       rate: 2.8  },
      ],
      byTenure: [
        { band: '0–6 mo',   rate: 53.3 },
        { band: '7–12 mo',  rate: 35.9 },
        { band: '13–24 mo', rate: 28.7 },
        { band: '25–48 mo', rate: 20.4 },
        { band: '49–72 mo', rate: 9.5  },
      ],
      byService: [
        { name: 'No Internet', rate: 7.4  },
        { name: 'DSL',         rate: 19.0 },
        { name: 'Fiber Optic', rate: 41.9 },
      ],
    },
    findings: [
      {
        icon: '⚡',
        title: 'Contract type is the biggest lever',
        body: 'Month-to-month customers churn at 42.7% vs 2.8% on two-year contracts — a 15× difference. Converting even 10% of M2M customers to annual contracts would recover ~$8K MRR.',
      },
      {
        icon: '🕐',
        title: 'The first 6 months are make-or-break',
        body: '53% of churned customers leave within the first 6 months, pointing to an onboarding gap — customers never reach the activation moment that drives long-term retention.',
      },
      {
        icon: '📡',
        title: 'Fiber optic has a product-quality signal',
        body: 'Fiber optic customers churn at 41.9% vs 19% on DSL — despite paying more. High charges combined with poor satisfaction is the likely driver.',
      },
    ],
    problem:
      'A telecom company was losing 26.5% of its customer base per cycle with no clear picture of why. The goal was to identify the highest-impact retention levers from existing customer data.',
    approach:
      'Ran a full segmentation across contract type, customer tenure, internet service tier, and payment method. Used StandardScaler and K-Means clustering to group customers, with silhouette scoring to validate segments. Translated statistical findings into plain business recommendations.',
    result:
      'Identified three actionable levers: (1) contract conversion from M2M to annual is the single highest-ROI move, (2) a first-90-days onboarding intervention would address 53% early churn, (3) fiber optic pricing needs re-evaluation against satisfaction data.',
    featured: false,
  },

  {
    slug: 'olist-ecommerce-analysis',
    title: 'Finding the Friction Points Across 99K Orders',
    tagline: 'Joined 9 tables across a $16M Brazilian marketplace to pinpoint the delivery, freight, and seller-concentration issues suppressing platform revenue and customer satisfaction.',
    disciplines: ['data'],
    status: 'shipped',
    year: '2024',
    role: 'Data Analyst',
    timeline: '2024 · Exploratory Analysis',
    stack: ['Python', 'pandas', 'Matplotlib', 'Seaborn', 'Jupyter'],
    stats: [
      { value: '99K',   label: 'Orders Analysed' },
      { value: 'R$16M', label: 'Total GMV' },
      { value: '4.09',  label: 'Avg Review Score' },
    ],
    type: 'analytics-olist',
    dataset: 'Brazilian E-Commerce Public Dataset by Olist · 99,441 orders',
    datasetUrl: 'https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce',
    kpis: [
      { label: 'Total Orders',     value: '99,441',  sub: 'Sep 2016 – Aug 2018' },
      { label: 'Total GMV',        value: 'R$16M',   sub: 'R$160.99 avg order value' },
      { label: 'Avg Review Score', value: '4.09/5',  sub: '57.8% of customers give 5 stars' },
      { label: 'On-Time Delivery', value: '91.9%',   sub: '7,826 orders arrived late' },
    ],
    chartData: {
      byDeliveryTime: [
        { bucket: '1–7 days',   score: 4.41 },
        { bucket: '8–14 days',  score: 4.29 },
        { bucket: '15–21 days', score: 4.10 },
        { bucket: '22+ days',   score: 3.03 },
      ],
      monthlyOrders: [
        { month: 'Sep 17', orders: 4150 },
        { month: 'Oct 17', orders: 4478 },
        { month: 'Nov 17', orders: 7289 },
        { month: 'Dec 17', orders: 5513 },
        { month: 'Jan 18', orders: 7069 },
        { month: 'Feb 18', orders: 6555 },
        { month: 'Mar 18', orders: 7003 },
        { month: 'Apr 18', orders: 6798 },
        { month: 'May 18', orders: 6749 },
        { month: 'Jun 18', orders: 6099 },
        { month: 'Jul 18', orders: 6159 },
        { month: 'Aug 18', orders: 6351 },
      ],
      freightByPrice: [
        { band: '<R$50',      pct: 33.2 },
        { band: 'R$50–100',  pct: 18.9 },
        { band: 'R$100–200', pct: 13.5 },
        { band: 'R$200–500', pct: 9.1  },
        { band: 'R$500+',    pct: 5.2  },
      ],
    },
    findings: [
      {
        icon: '🚚',
        title: 'Delivery time directly controls review score',
        body: 'Orders delivered in under 7 days average 4.41/5. Orders taking 22+ days collapse to 3.03/5 — a 1.4-point drop. Just 8.1% of orders arrived late, yet they generate 30% of all 1-star reviews.',
      },
      {
        icon: '📦',
        title: 'Freight erodes unit economics on cheap orders',
        body: 'For orders under R$50, freight averages 33.2% of total transaction value — making free-shipping promotions on small items structurally loss-making. Above R$200, freight drops to 9.1%, where the economics work.',
      },
      {
        icon: '🏪',
        title: 'Top 10% of sellers drive 67.5% of revenue',
        body: 'Of 3,095 sellers, the top 310 account for two-thirds of all GMV. The median seller generates only R$821 in lifetime revenue — a long-tail base that needs better discovery and merchandising to scale.',
      },
    ],
    problem:
      'Olist, a Brazilian e-commerce marketplace, needed to understand what friction points were suppressing customer satisfaction and platform revenue across 99,000+ orders from 3,095 sellers.',
    approach:
      'Joined 9 tables across orders, items, payments, reviews, products, and sellers. Segmented review scores by delivery time bands, modelled freight economics by order value tier, and ran a Pareto breakdown of seller revenue concentration.',
    result:
      'Three platform levers identified: (1) enforce tighter seller SLAs — the 8.1% of late orders generate 30% of 1-star reviews; (2) raise the free-shipping threshold above R$100 where freight economics become viable; (3) build a seller performance tier to surface high-quality long-tail sellers.',
    featured: false,
  },
]

// ─── WEB PROJECTS ────────────────────────────────────────────────────────────
export const webProjects = [
  {
    id: 'ashwood-fen',
    name: 'Ashwood & Fen',
    subtitle: 'Specialty Coffee Roastery',
    format: 'Ecommerce',
    tagline: 'Product-grid ecommerce with batch traceability and cart UX patterns.',
    palette: ['#3b1f0e', '#b87333', '#6b7c45', '#f5f0e8'],
    highlights: [
      'Product card system with origin/batch metadata',
      'Promotional ticker / DTC marquee pattern',
      'Process trust band (source → cup → roast → ship)',
      'Serif + monospace typographic pairing',
    ],
    file: '/sites/01-ashwood-fen-ecommerce.html',
    color: 'amber',
  },
  {
    id: 'kessler-ito',
    name: 'Kessler Ito',
    subtitle: 'Architecture Studio',
    format: 'Static Portfolio',
    tagline: 'Long-form static portfolio with editorial pacing and blueprint-driven layout.',
    palette: ['#1a1a1a', '#2c2c2c', '#f4f1ec', '#9b8b70'],
    highlights: [
      'Single-scroll sticky nav with full-bleed project blocks',
      'Editorial type pairing — condensed grotesque + classic serif',
      'Blueprint grid overlay throughout',
      'Three colors, two typefaces — no animation gimmicks',
    ],
    file: '/sites/02-kessler-ito-static.html',
    color: 'cyan',
  },
  {
    id: 'portside',
    name: 'Portside',
    subtitle: 'B2B Logistics SaaS',
    format: 'SaaS Marketing Site',
    tagline: 'Full B2B SaaS marketing site — hero, feature grid, pricing tiers, and live-product UI.',
    palette: ['#0f1f3d', '#1e3a6e', '#f59e0b', '#94a3b8'],
    highlights: [
      'Full SaaS site: hero, social proof, features, pricing, CTA',
      'Embedded "live product" panel with status pills in the hero',
      'Three-tier pricing table with featured/recommended tier',
      'Logo bar + stats band social proof patterns',
    ],
    file: '/sites/03-portside-corporate.html',
    color: 'cyan',
  },
  {
    id: 'ember-salt',
    name: 'Ember & Salt',
    subtitle: 'Neighborhood Bistro',
    format: 'Restaurant',
    tagline: 'Mood-driven restaurant site with itemized menu and reservation-focused CTAs.',
    palette: ['#1c1008', '#c2440c', '#d4a017', '#f7f0e6'],
    highlights: [
      'Atmosphere via gradient firelight — no photography needed',
      'Menu section with dotted price leaders and italic descriptors',
      'Tight single-CTA strategy (reserve a table)',
      'Italic serif display for hospitality mood',
    ],
    file: '/sites/04-ember-salt-restaurant.html',
    color: 'amber',
  },
  {
    id: 'driftwood-festival',
    name: 'Driftwood Festival',
    subtitle: 'Three-Day Coastal Music Festival',
    format: 'Event & Ticketing',
    tagline: 'High-energy event site with countdown, lineup grid, and tiered ticket sales.',
    palette: ['#2d1b6b', '#e8553b', '#f5c842', '#00c9b1'],
    highlights: [
      'Live countdown timer to event date',
      'Day-tabbed lineup grid for browsability',
      'Tiered ticketing with "most popular" highlight',
      'Bold saturated palette — earned visual energy for a festival brand',
    ],
    file: '/sites/05-driftwood-festival-event.html',
    color: 'cyan',
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
  ],
  availability: 'Open to senior IC, advisory, and leadership roles — currently based in Somerville, NJ',
}
