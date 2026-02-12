export interface CatalystService {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  match: number;
  features: string[];
  docsUrl: string;
  video?: string;
  badge?: string;
}

export interface TopTenService {
  rank: number;
  title: string;
  image: string;
  id: string;
}

/* =========================
   Serverless & Compute
   ========================= */

export const serverlessServices: CatalystService[] = [
  /* 🔥 Priority services (always first) */
  {
    id: "authentication",
    title: "Authentication",
    description:
      "Secure user authentication with built-in login, signup, social auth, and role-based access.",
    image: "https://zoho.com/sites/zweb/images/catalyst/authentication.png",
    category: "Security",
    match: 99,
    features: [
      "User management",
      "Social login",
      "Role-based access",
      "Session handling",
    ],
    docsUrl:
      "https://docs.catalyst.zoho.com/en/cloud-scale/help/authentication/introduction/",
  },
  {
    id: "appsail",
    title: "AppSail",
    description:
      "Deploy full-stack and containerized applications with zero DevOps overhead.",
    image:
      "https://zoho.com/sites/zweb/images/catalyst/cutom-runtime-appsail.png",
    category: "PaaS",
    match: 97,
    features: [
      "Docker support",
      "Custom runtimes",
      "Auto scaling",
      "Zero DevOps",
    ],
    docsUrl:
      "https://docs.catalyst.zoho.com/en/serverless/help/appsail/introduction/",
  },
  {
    id: "circuits",
    title: "Circuits",
    description:
      "Visually orchestrate workflows and manage complex multi-step logic.",
    image:
      "https://docs.catalyst.zoho.com/images/help/circuits/catalyst_circuits_graph_1.webp",
    category: "Workflows",
    match: 95,
    features: [
      "Visual workflow builder",
      "State management",
      "Retries & error handling",
      "Parallel execution",
    ],
    docsUrl:
      "https://docs.catalyst.zoho.com/en/serverless/help/circuits/introduction/",
  },
  {
    id: "datastore",
    title: "Data Store",
    description:
      "A scalable, fully managed relational database for structured application data.",
    image: "https://zoho.com/sites/zweb/images/catalyst/zoho-app-storage.png",
    category: "Database",
    match: 98,
    features: [
      "Relational tables",
      "ZCQL queries",
      "Auto scaling",
      "Role-based access",
    ],
    docsUrl:
      "https://docs.catalyst.zoho.com/en/cloud-scale/help/data-store/introduction/",
  },

  /* Other services */
  {
    id: "functions",
    title: "Functions",
    description:
      "Execute backend logic without managing servers using Java, Node.js, or Python.",
    image:
      "https://zdblogs.zohowebstatic.com/sites/catalyst/blog/files/users/user901/blog%20submission-21.jpg",
    category: "Serverless",
    match: 99,
    features: [
      "Java, Node.js, Python",
      "Auto scaling",
      "Event-driven execution",
      "Built-in logs",
    ],
    docsUrl:
      "https://docs.catalyst.zoho.com/en/serverless/help/functions/introduction/",
  },
  {
    id: "job-scheduler",
    title: "Job Scheduling",
    description:
      "Schedule recurring and background jobs with timezone and retry support.",
    image:
      "https://docs.catalyst.zoho.com/images/help/job-scheduling/catalyst_job_scheduling_jobs_home_page_list.webp",
    category: "Scheduling",
    match: 93,
    features: [
      "Cron scheduling",
      "Timezone support",
      "Execution logs",
      "Retry policies",
    ],
    docsUrl: "https://docs.catalyst.zoho.com/en/job-scheduling/",
  },
  {
    id: "slate",
    title: "Slate",
    description:
      "Host and deploy modern frontend apps with global CDN and custom domains.",
    image:
      "https://media.licdn.com/dms/image/v2/D5622AQEsiZYEIEDZpA/feedshare-shrink_800/B56ZmfrSYGJsAg-/0/1759320549933",
    category: "Frontend & Hosting",
    match: 94,
    features: [
      "Static hosting",
      "Global CDN",
      "Custom domains",
      "HTTPS by default",
    ],
    docsUrl: "https://catalyst.zoho.com/slate/index.html",
  },
];

/* =========================
   Zia AI Services
   ========================= */

export const ziaServices: CatalystService[] = [
  {
    id: "ocr",
    title: "Zia OCR",
    description:
      "Extract text from images and documents using AI-powered OCR.",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&q=80",
    category: "AI Vision",
    match: 98,
    features: [
      "Multi-language",
      "Handwriting recognition",
      "High accuracy",
    ],
    docsUrl: "https://catalyst.zoho.com/zia-services.html",
  },
];

/* =========================
   Top 10 Services
   ========================= */

export const topTenServices: TopTenService[] = [
  {
    rank: 1,
    title: "Authentication",
    image: "https://zoho.com/sites/zweb/images/catalyst/authentication.png",
    id: "authentication",
  },
  {
    rank: 2,
    title: "AppSail",
    image: "https://zoho.com/sites/zweb/images/catalyst/cutom-runtime-appsail.png",
    id: "appsail",
  },
  {
    rank: 3,
    title: "Circuits",
    image:
      "https://docs.catalyst.zoho.com/images/help/circuits/catalyst_circuits_graph_1.webp",
    id: "circuits",
  },
  {
    rank: 4,
    title: "Data Store",
    image: "https://zoho.com/sites/zweb/images/catalyst/zoho-app-storage.png",
    id: "datastore",
  },
  {
    rank: 5,
    title: "Functions",
    image:
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=200&q=80",
    id: "functions",
  },
];

/* =========================
   Helpers
   ========================= */

export const getAllServices = (): CatalystService[] => [
  ...serverlessServices,
  ...ziaServices,
];

export const getServiceById = (
  id: string
): CatalystService | undefined =>
  getAllServices().find((service) => service.id === id);


