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
      'Paid acquisition, attribution modelling, and growth loops. Measured in actual revenue, not vanity metrics.',
    skills: ['Google Ads', 'Meta Ads', 'Bing Ads', 'SEO/SEM', 'Google Search Console', 'Semrush', 'HubSpot'],
  },
  {
    id: 'web',
    label: 'Web Development',
    color: 'amber',
    icon: '◇',
    summary:
      'From quick landing pages to full-stack apps. Enough engineering depth to ship without waiting for a sprint.',
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
      'Architected advanced analytics instrumentation using GA4, Google Tag Manager, and Microsoft Clarity: custom event tracking, scroll depth, and CTA analytics across client properties.',
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
      'Designed and launched demo.kitchen365.com, a digital product demo platform that improved client engagement by 50%.',
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
      'Sales reps and delivery staff were losing time and deals to a knowledge access problem. SOPs, pricing logic, and past proposal language were scattered across SharePoint, Salesforce, email threads, and individual employee memory. Finding the right answer during a live client call could take longer than a prospect was willing to wait.',
    approach:
      'Audited documentation across the org and interviewed sales and delivery staff before proposing any solution. Two findings shaped the roadmap: (1) the knowledge problem had to be solved before the AI problem, no point building a chatbot on fragmented, outdated SOPs; (2) IT approval timelines and existing M365 licensing meant the "best" AI model was not necessarily the right one for V1. Chose a phased approach: V1 used Microsoft Copilot Studio (already licensed, faster to approve) connected to a newly consolidated 10-section SOP library on SharePoint, deployed inside Teams. V2 scopes full Claude integration as part of a broader company-wide AI platform rollout.',
    result:
      'V1 shipped and live. The 10-section master SOP document (covering Finance, Lead Intake, Pipeline, Proposal/SOW, Auto-Renewal, Commission, and Project Process) became the foundation for both V1 retrieval and V2 planning. Key lesson: an AI chatbot project is a knowledge management project first and a model-selection project second. Teams that skip straight to picking a model end up automating access to bad information faster.',
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
      'Renewals were tracked manually across Salesforce reports, personal spreadsheets, and account managers\' memory. Renewal risk was invisible until it was too late. Teams found out when a client said no, not before. Reporting was backward-looking, and ownership of at-risk accounts was unclear.',
    approach:
      'Pulled and audited existing Salesforce renewal data to understand what signals were actually available (contract end dates, usage data, support ticket volume, last contact date). Most of the raw signal already existed in Salesforce but was not surfaced or scored. Scoped V1 toward a structured tracker rather than a predictive model: fast to ship, uses data that already exists, and generates the labeled churn outcome data needed to build a real predictive model in V2. RICE-scored the full feature backlog. Auto-flagging from Salesforce fields and the core risk dashboard scored highest on Reach and Impact.',
    result:
      'V1 tracker shipped as a Salesforce-integrated reporting layer. Account managers can flag accounts as On Track / Watch / At Risk / Churned with a reason and next action. Auto-flagging derives signals from Salesforce activity data. Key lesson: renewal risk is usually a visibility problem, not a data problem. The people closest to the account already know more than any dashboard will tell them. The highest-leverage version of this tool made that existing knowledge visible and structured before trying to automate it.',
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
      'Designed an AI onboarding assistant that runs a 2-minute conversation to set up a tailored project structure, rather than offering generic templates. Key scoping decision: chose "template + AI refinement" over "full custom generation" for V1, because a wrong AI-generated workspace on first impression is worse than a slightly generic-but-safe one. Planned a beta with a subset of new signups against an instrumented baseline before wide release, with a skip option preserved for power users.',
    result:
      'Full GTM plan delivered: scoped a lower-risk technical approach over the more impressive one, sequenced a beta before full launch, and defined metrics that catch a "fast but shallow" false positive (activation uptick that doesn\'t hold at week 2) rather than just celebrating early numbers. Risks documented upfront: trust risk, scope creep risk, and measurement lag risk.',
    featured: true,
  },

  {
    slug: 'telco-churn-analysis',
    title: 'Diagnosing $139K in Monthly Customer Churn',
    tagline: 'Segmented 7,043 customer records to identify the highest-impact retention levers: contract type, tenure, and service tier.',
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
        body: 'Month-to-month customers churn at 42.7% vs 2.8% on two-year contracts, a 15x difference. Converting even 10% of M2M customers to annual contracts would recover ~$8K MRR.',
      },
      {
        icon: '🕐',
        title: 'The first 6 months are make-or-break',
        body: '53% of churned customers leave within the first 6 months, pointing to an onboarding gap. Customers never reach the activation moment that drives long-term retention.',
      },
      {
        icon: '📡',
        title: 'Fiber optic has a product-quality signal',
        body: 'Fiber optic customers churn at 41.9% vs 19% on DSL, despite paying more. High charges combined with poor satisfaction is the likely driver.',
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
        body: 'Orders delivered in under 7 days average 4.41/5. Orders taking 22+ days collapse to 3.03/5, a 1.4-point drop. Just 8.1% of orders arrived late, yet they generate 30% of all 1-star reviews.',
      },
      {
        icon: '📦',
        title: 'Freight erodes unit economics on cheap orders',
        body: 'For orders under R$50, freight averages 33.2% of total transaction value, making free-shipping promotions on small items structurally loss-making. Above R$200, freight drops to 9.1%, where the economics work.',
      },
      {
        icon: '🏪',
        title: 'Top 10% of sellers drive 67.5% of revenue',
        body: 'Of 3,095 sellers, the top 310 account for two-thirds of all GMV. The median seller generates only R$821 in lifetime revenue, a long-tail base that needs better discovery and merchandising to scale.',
      },
    ],
    problem:
      'Olist, a Brazilian e-commerce marketplace, needed to understand what friction points were suppressing customer satisfaction and platform revenue across 99,000+ orders from 3,095 sellers.',
    approach:
      'Joined 9 tables across orders, items, payments, reviews, products, and sellers. Segmented review scores by delivery time bands, modelled freight economics by order value tier, and ran a Pareto breakdown of seller revenue concentration.',
    result:
      'Three platform levers identified: (1) enforce tighter seller SLAs, since the 8.1% of late orders generate 30% of 1-star reviews; (2) raise the free-shipping threshold above R$100 where freight economics become viable; (3) build a seller performance tier to surface high-quality long-tail sellers.',
    featured: false,
  },

  {
    slug: 'payment-fraud-detection',
    title: '$12B at Risk: Transaction Risk Intelligence Across 6.3M Payments',
    tagline: 'Analyzed a synthetic financial dataset of 6.3 million transactions to expose why the existing risk flag system covers only 0.19% of anomalous events — and identify the transaction patterns and amount thresholds that actually predict them.',
    disciplines: ['data', 'product'],
    status: 'shipped',
    year: '2025',
    role: 'Data Analyst / PM',
    timeline: '2025 · Analysis + Roadmap',
    stack: ['Python', 'pandas', 'scikit-learn', 'Matplotlib', 'Seaborn', 'Jupyter'],
    stats: [
      { value: '6.3M',  label: 'Transactions Analysed' },
      { value: '$12B',  label: 'Amount at Risk' },
      { value: '0.19%', label: 'Existing System Coverage' },
    ],
    type: 'analytics-payments',
    dataset: 'PaySim1 Synthetic Financial Dataset · 6,362,620 transactions',
    datasetUrl: 'https://www.kaggle.com/datasets/ealaxi/paysim1',
    kpis: [
      { label: 'Total Transactions', value: '6.3M',   sub: 'Across 743 hours of simulation' },
      { label: 'Total Volume',       value: '$1.1T',  sub: 'Total amount moved across all types' },
      { label: 'High-Risk Events',   value: '8,213',  sub: '0.129% anomaly rate overall' },
      { label: 'Amount at Risk',     value: '$12.1B', sub: 'Avg $1.47M per high-risk transaction' },
    ],
    chartData: {
      byType: [
        { name: 'TRANSFER',  rate: 0.77 },
        { name: 'CASH_OUT',  rate: 0.18 },
        { name: 'PAYMENT',   rate: 0 },
        { name: 'CASH_IN',   rate: 0 },
        { name: 'DEBIT',     rate: 0 },
      ],
      byAmountBand: [
        { band: '<$100K',      pct: 20.6 },
        { band: '$100K-500K',  pct: 32.2 },
        { band: '$500K-1M',    pct: 14.1 },
        { band: '$1M-5M',      pct: 23.9 },
        { band: '$5M+',        pct: 9.1  },
      ],
      byDetection: [
        { method: 'Existing Flag System',          recall: 0.19 },
        { method: 'Rule: TRANSFER/CASHOUT >$200K', recall: 66.6 },
      ],
    },
    roadmap: [
      { phase: '01', label: 'Data Scoping',   detail: 'Mapped 6.3M transactions across 5 types, defined analysis frame and output metrics', status: 'done' },
      { phase: '02', label: 'Risk Profiling', detail: 'Identified risk-concentrated types, amount bands, and coverage gaps in existing system', status: 'done' },
      { phase: '03', label: 'Rule Engine',    detail: 'Define type + threshold rule set covering 66.6% of high-risk events, no ML required', status: 'current' },
      { phase: '04', label: 'ML Model',       detail: 'Supervised model on labeled dataset: XGBoost with SMOTE oversampling for class imbalance', status: 'planned' },
    ],
    findings: [
      {
        icon: '🎯',
        title: 'Risk is confined to exactly two transaction types',
        body: 'Of five transaction types, only TRANSFER (0.77% risk rate) and CASH_OUT (0.18%) contain any anomalous events. PAYMENT, CASH_IN, and DEBIT have zero cases across 3.6M transactions. Filtering to these two types eliminates 57% of false positive surface area before any model runs.',
      },
      {
        icon: '💰',
        title: 'High-risk events concentrate in large transactions',
        body: 'The average high-risk transaction is $1.47M — nearly 8x the average legitimate transaction. 33% of cases exceed $1M. The median of $441K combined with the $10M cap suggests a deliberate pattern of targeting large, one-time transfers that blend into normal treasury activity.',
      },
      {
        icon: '🚨',
        title: 'The existing flag system catches 16 of 8,213 high-risk events',
        body: 'The built-in detection system has a 0.19% coverage rate — it catches 16 events and misses 8,197. A targeted rule flagging all TRANSFER and CASH_OUT transactions above $200K catches 66.6% with no ML required. The current system is not a safety net; it is a false sense of security.',
      },
    ],
    problem:
      'A financial platform processing over $1 trillion in transactions needed to understand why its existing risk detection system was flagging almost nothing, and which transaction patterns actually predicted anomalous activity.',
    approach:
      'Segmented 6.3M transactions across all five transaction types (TRANSFER, CASH_OUT, PAYMENT, CASH_IN, DEBIT) to identify where high-risk events actually occur. Analyzed risk rate by transaction type, amount band, and time step. Quantified the performance of the existing detection system using coverage analysis. Benchmarked it against a simple rule-based approach — flagging all TRANSFER and CASH_OUT transactions above $200K — to establish a baseline before any ML modeling.',
    result:
      'Three findings drove the recommendations: (1) high-risk activity is structurally confined to TRANSFER and CASH_OUT — a two-class filter eliminates 57% of false positives before any model runs; (2) large transactions are the strongest signal, with an average of $1.47M per high-risk case; (3) the existing detection system is near non-functional at 0.19% coverage, missing 8,197 of 8,213 cases. A targeted rule-based baseline reaches 66.6% coverage before any ML investment is needed.',
    featured: false,
  },

  {
    slug: 'corporate-treasury-dashboard',
    title: 'Corporate Treasury Liquidity Dashboard: Product Spec',
    tagline: 'Scoped a real-time liquidity monitoring platform for corporate treasury clients — replacing multi-bank spreadsheet reconciliation with live cash position visibility across accounts, currencies, and entities.',
    disciplines: ['product'],
    status: 'shipped',
    year: '2025',
    role: 'Product Manager',
    timeline: '2025 · Product Planning Exercise',
    stack: ['Bank APIs (REST)', 'FX Rate Feeds', 'SQL', 'JIRA', 'Figma'],
    type: 'pm-treasury',
    stats: [
      { value: '12',  label: 'User Stories' },
      { value: '3',   label: 'Bank API Integrations' },
      { value: 'T+0', label: 'Target Settlement' },
    ],
    kpis: [
      { label: 'User Stories',         value: '12',  sub: 'With full acceptance criteria' },
      { label: 'Personas Mapped',      value: '5',   sub: 'Treasurer, Analyst, FX, Ops, CFO' },
      { label: 'Bank API Integrations',value: '3',   sub: 'Multi-bank live position feed' },
      { label: 'Target Latency',       value: 'T+0', sub: 'Hours of lag reduced to seconds' },
    ],
    roadmap: [
      { phase: '01', label: 'Discovery',      detail: '5 persona interviews, decision-moment mapping, data availability audit across bank feeds', status: 'done' },
      { phase: '02', label: 'V1 Spec',        detail: 'RICE prioritization, 12 user stories with acceptance criteria, 3-bank data dependency map', status: 'done' },
      { phase: '03', label: 'V1 Build',       detail: 'Real-time balance aggregation, multi-currency FX, alert thresholds, async reconciliation fallback', status: 'current' },
      { phase: '04', label: 'V2: Predictive', detail: 'ML-driven cash flow forecasting, automated sweep recommendations, scenario planning', status: 'planned' },
    ],
    chartData: {
      rice: [
        { feature: 'Real-time balance aggregation', score: 1260 },
        { feature: 'Multi-currency FX conversion',  score: 980  },
        { feature: 'Min balance alert thresholds',  score: 840  },
        { feature: 'Multi-entity account mapping',  score: 620  },
        { feature: 'Async reconciliation fallback', score: 560  },
        { feature: 'Cash flow forecasting (V2)',    score: 420  },
      ],
    },
    chartType: 'rice',
    chartTitle: 'Feature Prioritization (RICE Score)',
    chartSub: 'Real-time balance aggregation scores 3× higher than any other feature — V1 scope built around it',
    decisions: [
      { icon: '🔌', title: 'API-first over file-based integration', body: 'File uploads create 4–24h batch delays that make real-time position visibility structurally impossible. Higher V1 implementation cost, but the only path to the product thesis.' },
      { icon: '🔄', title: 'Async reconciliation in V1, not V2', body: 'Partial bank API failures silently break the dashboard. Built the reconciliation fallback into V1 scope — a dashboard that shows wrong positions is worse than no dashboard at all.' },
      { icon: '🏦', title: 'Three-bank ceiling for V1 scope', body: 'RICE scoring showed diminishing returns beyond the top 3 banks by client coverage. A 4th bank would delay launch by 6 weeks for 8% additional account coverage — deferred to V2.' },
    ],
    problem:
      'Corporate treasury teams managing liquidity across multiple accounts, currencies, and banks have no real-time visibility into cash positions. They reconcile via spreadsheets and bank portals, meaning decisions about short-term investments, FX hedging, and working capital allocation are made on data that is hours or days old. A $50M position sitting idle in one account while another entity draws on credit is not a treasury strategy failure — it is a visibility failure.',
    approach:
      'Conducted user research across five treasury personas (Group Treasurer, Cash Manager, FX Analyst, Operations Lead, CFO) to map the decision moments where stale data caused the most commercial damage. Two findings shaped the scope: (1) real-time balance aggregation across bank APIs was the single highest-value feature — everything else depended on it; (2) partial API failures from bank feeds were the hardest edge case to handle and needed an async reconciliation fallback built into V1, not V2. RICE-scored the full feature backlog: real-time balance aggregation, multi-currency conversion with configurable FX feeds, and minimum balance alert thresholds scored highest on Reach and Impact. Wrote 12 user stories with acceptance criteria covering the core position management, alert, and reporting flows. Defined the data dependency map across three bank API integrations and a testing plan covering eight edge case scenarios including partial API failure, FX rate staleness, and multi-entity account mapping conflicts.',
    result:
      'Full product spec delivered: 12 user stories with acceptance criteria, data dependency map across three bank API integrations, testing plan with eight edge case scenarios, and success metrics anchored to time-to-visibility (hours to seconds) and alert response time (under five minutes). Chose API-first integration over file-based reconciliation for V1 despite higher implementation complexity — the latency difference made file-based reconciliation structurally incompatible with the real-time visibility goal. Key insight: the data reliability problem is harder than the UI problem. Solving it requires an async reconciliation layer as a mandatory fallback before any dashboard feature can be trusted.',
    featured: false,
  },

  {
    slug: 'tokenized-deposit-feature-spec',
    title: 'Tokenized Deposit Feature: Product Spec and Rollout Plan',
    tagline: 'Scoped a tokenized deposit product for corporate treasury clients — enabling 24/7 programmable settlement and yield optimization while solving for regulatory compliance, client trust, and operational integration into existing treasury workflows.',
    disciplines: ['product'],
    status: 'shipped',
    year: '2025',
    role: 'Product Manager',
    timeline: '2025 · Product Planning Exercise',
    stack: ['Permissioned Blockchain', 'REST API', 'Smart Contracts', 'JIRA', 'Figma'],
    type: 'pm-tokenized',
    stats: [
      { value: '3',   label: 'Core Flows' },
      { value: 'T+0', label: 'Settlement Target' },
      { value: '4',   label: 'Compliance Gates' },
    ],
    kpis: [
      { label: 'Settlement Target', value: 'T+0', sub: 'Down from T+2 cross-border standard' },
      { label: 'Compliance Gates',  value: '4',   sub: 'All must pass before GA rollout' },
      { label: 'Core User Flows',   value: '3',   sub: 'Deposit, Transfer, Redeem' },
      { label: 'Rollout Phases',    value: '3',   sub: 'Internal → Pilot → GA' },
    ],
    roadmap: [
      { phase: '01', label: 'Internal Test',    detail: 'Internal team validation, compliance gates 1–2, edge case testing across all 3 core flows', status: 'done' },
      { phase: '02', label: '3-Client Pilot',   detail: 'Selected corporate treasury clients, compliance gates 3–4, TMS reconciliation bridge validation', status: 'current' },
      { phase: '03', label: 'General Availability', detail: 'Full client rollout, TMS integration support, 24/7 operational SLA monitoring', status: 'planned' },
    ],
    chartData: {
      settlement: [
        { method: 'Traditional Wire (T+2)', hours: 48 },
        { method: 'SWIFT GPI',              hours: 12 },
        { method: 'Internal Book Transfer', hours: 4  },
        { method: 'Tokenized Deposit (T+0)',hours: 0.02 },
      ],
    },
    chartType: 'settlement',
    chartTitle: 'Settlement Time Comparison',
    chartSub: 'Tokenized deposits settle in under a minute vs 48 hours for traditional cross-border wires',
    decisions: [
      { icon: '🔐', title: 'Permissioned over public chain', body: 'Regulatory clarity, on-chain AML/KYC enforcement, and institutional trust requirements ruled out public chain for this client segment. Permissioned infrastructure enables compliance without sovereign-risk exposure.' },
      { icon: '⚖️', title: 'Compliance-first sequencing', body: 'Mapped all 4 compliance gates before any engineering was committed. A product that cannot get regulatory approval has zero value regardless of how well-built it is — compliance scoped before infrastructure, not after.' },
      { icon: '🔗', title: 'TMS reconciliation bridge in V1', body: 'Tokenized positions must reconcile to traditional accounting and treasury management systems for institutional adoption. The reconciliation bridge was scoped into V1, not deferred — adoption requires trust in existing workflows, not replacement of them.' },
    ],
    problem:
      'Corporate treasury clients hold idle cash in traditional bank accounts earning minimal returns, with cross-border transfers subject to T+2 settlement delays, cut-off times, and correspondent banking friction. Tokenized deposits offer 24/7 programmable settlement, yield optimization, and atomic cross-currency transfers — but institutional adoption requires solving three hard problems simultaneously: regulatory compliance in multiple jurisdictions, client trust in a new asset class, and operational integration into existing treasury management systems without disrupting existing workflows.',
    approach:
      'Structured the scoping process in three layers to avoid the common mistake of leading with technology. First, regulatory and compliance: mapped the e-money licensing requirements, custodian obligations, and on-chain AML/KYC requirements across the target jurisdictions before any engineering investment was committed. Defined four compliance gates that must be satisfied before GA: e-money authorization, custodian agreement, on-chain KYC integration, and audit trail requirements. Second, client journey: mapped five treasury personas through the deposit, transfer, redeem, and yield accrual flows — identifying the moment a cross-border transfer settles in seconds vs waiting two days as the single most powerful adoption driver. Third, technical architecture: defined the permissioned blockchain layer, the API specification for the three core endpoints (deposit, transfer, redeem), and the reconciliation bridge connecting tokenized positions back to traditional accounting and treasury management systems.',
    result:
      'Full product spec delivered covering three core user flows (deposit, transfer, redeem) with acceptance criteria, a phased rollout plan (internal test, pilot with three corporate clients, general availability), four compliance gates, API spec for three core endpoints, and a reconciliation architecture bridging tokenized positions to existing TMS integrations. Primary success metric: cross-border settlement time from T+2 to T+0. Secondary metric: yield on tokenized positions vs equivalent traditional deposit.',
    featured: false,
  },

  {
    slug: 'superstore-profitability-audit',
    title: '$156K in Preventable Losses: A Retail Profitability Audit',
    tagline: 'Audited 9,994 orders across a US retail chain to find where discounting strategy, product mix, and regional execution are quietly destroying a 12.5% margin.',
    disciplines: ['data'],
    status: 'shipped',
    year: '2024',
    role: 'Data Analyst',
    timeline: '2024 · Exploratory Analysis',
    stack: ['Python', 'pandas', 'Matplotlib', 'Seaborn', 'Jupyter'],
    stats: [
      { value: '$2.3M', label: 'Total Sales' },
      { value: '12.5%', label: 'Profit Margin' },
      { value: '18.7%', label: 'Loss-Making Orders' },
    ],
    type: 'analytics-superstore',
    dataset: 'Sample Superstore Dataset · 9,994 orders across 49 US states',
    datasetUrl: 'https://www.kaggle.com/datasets/vivek468/superstore-dataset-final',
    kpis: [
      { label: 'Total Sales',        value: '$2.3M',  sub: '9,994 orders · 49 states' },
      { label: 'Total Profit',       value: '$286K',  sub: '12.5% overall margin' },
      { label: 'Preventable Losses', value: '$156K',  sub: 'From 1,871 loss-making orders' },
      { label: 'Avg Discount',       value: '15.6%',  sub: '48.1% avg on loss-making rows' },
    ],
    chartData: {
      byDiscount: [
        { band: 'No discount', margin: 29.5  },
        { band: '1–10%',       margin: 16.6  },
        { band: '11–20%',      margin: 11.6  },
        { band: '21–30%',      margin: -10.0 },
        { band: '31–50%',      margin: -24.8 },
        { band: '51%+',        margin: -119.2 },
      ],
      bySubCategory: [
        { name: 'Tables',      profit: -17726 },
        { name: 'Bookcases',   profit: -3473  },
        { name: 'Supplies',    profit: -1189  },
        { name: 'Machines',    profit: 3385   },
        { name: 'Chairs',      profit: 26590  },
        { name: 'Accessories', profit: 41937  },
        { name: 'Phones',      profit: 44516  },
        { name: 'Copiers',     profit: 55618  },
      ],
      byRegion: [
        { region: 'Central', margin: 7.9  },
        { region: 'South',   margin: 11.9 },
        { region: 'East',    margin: 13.5 },
        { region: 'West',    margin: 14.9 },
      ],
    },
    findings: [
      {
        icon: '✂️',
        title: 'Discounts above 20% are structurally loss-making',
        body: 'Cross the 20% threshold and margin flips from +11.6% to -10%. At 51%+, every dollar of revenue costs $1.19 to generate. The 1,166 high-discount orders (>30%) account for $124K of the $156K in total losses.',
      },
      {
        icon: '🪑',
        title: 'Furniture is subsidised by Technology and Office Supplies',
        body: 'Tables lose $17.7K on $207K in sales (-8.6% margin). Bookcases add another $3.5K in losses. The whole Furniture category runs at just 2.5% margin while Tech (17.4%) and Office Supplies (17.0%) quietly cover the shortfall.',
      },
      {
        icon: '🗺️',
        title: 'Central region underperforms at every category level',
        body: 'Central margin is 7.9% vs 14.9% in the West. Furniture is cash-negative in Central (-$2,871). Texas, Ohio, and Illinois are all Central-heavy states and the three biggest loss-making states in the business.',
      },
    ],
    problem:
      'A US retail chain with $2.3M in annual sales was posting a 12.5% overall margin with no clear view of which products, discounts, or geographies were dragging profitability down.',
    approach:
      'Segmented 9,994 order rows by discount band, sub-category, region, and state. Used pandas groupby aggregations to isolate margin at each intersection, then ranked loss-makers by total profit impact rather than margin percentage alone.',
    result:
      'Three levers identified: (1) cap discounts at 20%, since high-discount orders cause $124K of the $156K in losses; (2) reprice or discontinue Tables and Bookcases which are loss-making at any discount level; (3) audit Central region execution, particularly in Texas, Ohio, and Illinois.',
    featured: false,
  },

  // ─── HEALTHCARE DATA SCIENCE ─────────────────────────────────────────────────
  {
    slug: 'health-cost-risk-segmentation',
    title: 'Commercial Health Plan Cost Driver Analysis & Member Risk Segmentation',
    tagline: 'Gradient Boosting model with 87.8% R² accuracy identifies smoking status, BMI, and age as the primary cost drivers across 1,338 member records — segmenting the population into three actionable risk tiers with a $34K average cost spread between low and high-risk cohorts.',
    disciplines: ['data'],
    status: 'shipped',
    year: '2025',
    role: 'Data Scientist',
    timeline: '2025 · Predictive Modeling & Segmentation',
    stack: ['Python', 'pandas', 'scikit-learn', 'Gradient Boosting', 'K-Means Clustering', 'Jupyter'],
    type: 'ds-healthcare',
    dataset: 'Medical Cost Personal Dataset · 1,338 member records',
    datasetUrl: 'https://www.kaggle.com/datasets/mirichoi0218/insurance',
    kpis: [
      { label: 'Model R² Score',      value: '87.8%',  sub: 'Gradient Boosting (best of 3 models tested)' },
      { label: 'Risk Segments',       value: '3',      sub: 'K-Means clustering across 1,338 members' },
      { label: 'Smoker Cost Premium', value: '280%',   sub: '$32,050 vs $8,434 avg annual charge' },
      { label: 'High-Risk Avg Cost',  value: '$40.7K', sub: '12% of members, 92.5% smoker rate' },
    ],
    featureImportance: [
      { feature: 'Smoking Status', pct: 67.8 },
      { feature: 'BMI',            pct: 19.0 },
      { feature: 'Age',            pct: 11.7 },
      { feature: 'Dependents',     pct: 1.1  },
      { feature: 'Region',         pct: 0.4  },
      { feature: 'Sex',            pct: 0.1  },
    ],
    segments: [
      { label: 'Low Risk',    members: 605, pct: 45.2, avgCost: 6425,  smokerPct: 10.9 },
      { label: 'Medium Risk', members: 572, pct: 42.8, avgCost: 12787, smokerPct: 10.3 },
      { label: 'High Risk',   members: 161, pct: 12.0, avgCost: 40713, smokerPct: 92.5 },
    ],
    costByAge: [
      { group: '18-30', cost: 9398  },
      { group: '31-45', cost: 12647 },
      { group: '46-60', cost: 16341 },
      { group: '60+',   cost: 21063 },
    ],
    findings: [
      {
        icon: '🚬',
        title: 'Smoking drives 67.8% of cost variance',
        body: 'Smoking status is the dominant predictor by a wide margin. Smokers average $32,050/year vs $8,434 for non-smokers — a 280% premium. The high-risk segment has a 92.5% smoker rate, making cessation programs the highest-ROI intervention for reducing plan cost.',
      },
      {
        icon: '⚖️',
        title: 'BMI and age compound the risk',
        body: 'BMI (19%) and age (11.7%) are the second and third strongest predictors. Members in the 60+ age group cost 2.2× more than 18-30 members ($21,063 vs $9,398), creating a clear opportunity for age-tiered wellness program design.',
      },
      {
        icon: '🎯',
        title: '12% of members drive disproportionate costs',
        body: 'The high-risk segment (161 members, 12% of population) averages $40,713/year. A targeted 15% cost reduction intervention on this cohort saves $0.98M annually — a high-ROI case for predictive outreach rather than blanket wellness programs.',
      },
    ],
    problem: 'Commercial health plans face significant cost unpredictability driven by a small subset of high-cost members. Without a data-driven segmentation model, product and actuarial teams cannot accurately identify which members are likely to generate disproportionate claims — making it impossible to design targeted interventions, wellness programs, or pricing strategies that directly address the root cost drivers.',
    approach: 'Analyzed 1,338 member records covering age, sex, BMI, number of dependents, smoking status, region, and annual insurance charges. Performed exploratory analysis on bivariate relationships between features and charges. Built and compared Linear Regression, Random Forest, and Gradient Boosting models using an 80/20 train-test split. Applied K-Means clustering (k=3) on age, BMI, and charges to derive unsupervised risk segments. Evaluated models on R², MAE, and RMSE.',
    result: 'Gradient Boosting achieved the best performance: R²=0.878, MAE=$2,448, RMSE=$4,353. Smoking status (67.8%), BMI (19%), and age (11.7%) explained 98.5% of model-attributable cost variance. K-Means segmentation identified three distinct member tiers — Low Risk (45.2%, avg $6.4K), Medium Risk (42.8%, avg $12.8K), and High Risk (12%, avg $40.7K). High-risk members show a 92.5% smoker rate, pointing directly to cessation programs as the highest-ROI product intervention for this population.',
    featured: false,
  },

  {
    slug: 'hospital-readmission-ai-advisory',
    title: 'Hospital Readmission Risk Prediction: AI-Powered Clinical Decision Support',
    tagline: 'Gradient Boosting classifier with 88.8% accuracy across 101,766 diabetic patient encounters identifies prior inpatient history as the dominant readmission predictor — enabling AI-driven care coordination with $51.8M savings potential.',
    disciplines: ['data'],
    status: 'shipped',
    year: '2025',
    role: 'Data Scientist',
    timeline: '2025 · Predictive Modeling',
    stack: ['Python', 'pandas', 'scikit-learn', 'Gradient Boosting', 'Logistic Regression', 'Jupyter'],
    type: 'ds-healthcare',
    dataset: 'Diabetes 130-US Hospitals 1999-2008 · 101,766 encounters',
    datasetUrl: 'https://www.kaggle.com/datasets/brandao/diabetes',
    kpis: [
      { label: 'Patient Encounters',      value: '101,766', sub: '71,518 unique patients across 130 hospitals' },
      { label: '30-Day Readmission Rate', value: '11.2%',   sub: '11,357 readmissions in dataset' },
      { label: 'Model Accuracy',          value: '88.8%',   sub: 'Gradient Boosting, AUC-ROC 0.64' },
      { label: 'Potential Savings',       value: '$51.8M',  sub: 'AI-driven 30% readmission reduction' },
    ],
    featureImportance: [
      { feature: 'Prior Inpatient Visits',  pct: 71.6 },
      { feature: 'Emergency Visits',        pct: 5.5  },
      { feature: 'Hospital Stay Duration',  pct: 5.1  },
      { feature: 'Patient Age',             pct: 4.8  },
      { feature: 'Medications Count',       pct: 3.3  },
      { feature: 'Diagnoses Count',         pct: 3.1  },
    ],
    readmitByAge: [
      { group: '20-30', rate: 14.2 },
      { group: '30-40', rate: 11.2 },
      { group: '40-50', rate: 10.6 },
      { group: '50-60', rate: 9.7  },
      { group: '60-70', rate: 11.1 },
      { group: '70-80', rate: 11.8 },
      { group: '80-90', rate: 12.1 },
    ],
    findings: [
      {
        icon: '🏥',
        title: 'Prior hospitalization is the strongest signal',
        body: 'Prior inpatient visits accounts for 71.6% of model feature importance. Patients with 2+ prior inpatient visits have a 21.4% 30-day readmission rate — nearly double the 11.2% population average. This creates a clear, actionable high-risk cohort for targeted discharge care coordination.',
      },
      {
        icon: '💊',
        title: 'Discharge complexity compounds readmission risk',
        body: 'Hospital stay duration (5.1%), medications count (3.3%), and diagnoses count (3.1%) together indicate that clinical complexity at discharge drives readmission risk. Readmitted patients averaged 4.8 hospital days and 7.69 diagnoses vs 4.3 days and 7.39 diagnoses for non-readmitted patients.',
      },
      {
        icon: '🤖',
        title: '$51.8M savings potential from AI-driven intervention',
        body: 'At $15,200 average US readmission cost, 11,357 30-day readmissions represent $172.6M in total cost. An AI-powered care coordination tool reducing readmissions by 30% generates $51.8M in savings — a high-ROI case for deploying ML risk scoring in clinical discharge workflows.',
      },
    ],
    problem: 'Hospital readmission within 30 days is one of the highest-cost, most preventable outcomes in healthcare. For diabetic patients across 130 US hospitals from 1999-2008, an 11.2% 30-day readmission rate across 101,766 encounters represents an estimated $172.6M cost burden. Without a predictive risk model, care teams cannot systematically identify high-risk patients at discharge for targeted intervention.',
    approach: 'Analyzed 101,766 diabetic patient encounters from the UCI/Kaggle 130-US Hospitals dataset. Engineered a binary outcome variable (readmitted within 30 days). Selected 10 clinical and demographic features including time in hospital, lab procedures, medications, outpatient/emergency/inpatient visit history, diagnoses count, age, and medication indicators. Compared Logistic Regression, Random Forest, and Gradient Boosting models on accuracy and AUC-ROC using an 80/20 split.',
    result: 'Gradient Boosting achieved 88.8% accuracy and AUC-ROC 0.64. Prior inpatient visits (71.6%) dominated feature importance, confirming that historical utilization pattern is the primary readmission predictor over acute clinical complexity. Patients with 2+ prior inpatient visits readmit at 21.4% vs 11.2% baseline. The model provides a practical foundation for an AI-powered discharge risk scoring tool that flags high-risk patients for care coordination before leaving the facility.',
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
      'Editorial type pairing: condensed grotesque + classic serif',
      'Blueprint grid overlay throughout',
      'Three colors, two typefaces. No animation gimmicks',
    ],
    file: '/sites/02-kessler-ito-static.html',
    color: 'cyan',
  },
  {
    id: 'portside',
    name: 'Portside',
    subtitle: 'B2B Logistics SaaS',
    format: 'SaaS Marketing Site',
    tagline: 'Full B2B SaaS marketing site with hero, feature grid, pricing tiers, and live-product UI.',
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
      'Atmosphere via gradient firelight, no photography needed',
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
      'Bold saturated palette. Earned visual energy for a festival brand',
    ],
    file: '/sites/05-driftwood-festival-event.html',
    color: 'cyan',
  },
]

// ─── ABOUT ───────────────────────────────────────────────────────────────────
export const about = {
  name: 'Mit Desai',
  tagline: 'Product manager who moves across data, marketing, and web. The best solutions rarely live inside one function.',
  intro: "I've driven $2M/month in revenue growth, built AI-powered knowledge platforms, and shipped analytics infrastructure from zero to production. Three companies, four disciplines, and a lot of SQL.",
  bio: [
    "I'm a product manager who can't stop breaking out of the PM lane, and I've stopped apologizing for it. My work sits at the intersection of product, data, performance marketing, and web development because that's where the most interesting problems live.",
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
  availability: 'Open to senior IC, advisory, and leadership roles. Currently based in Somerville, NJ',
}
