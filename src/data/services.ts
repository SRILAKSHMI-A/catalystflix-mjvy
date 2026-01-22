export interface CatalystService {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  match: number;
  features: string[];
  docsUrl: string;
  badge?: string;
}

export interface TopTenService {
  rank: number;
  title: string;
  image: string;
  id: string;
}

// Serverless & Compute Services
export const serverlessServices: CatalystService[] = [
  {
    id: "functions",
    title: "Functions",
    description: "Execute backend logic without managing servers. Write code in Java, Node.js, or Python and let Catalyst handle the infrastructure.",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400&q=80",
    category: "Serverless",
    match: 99,
    features: ["Java, Node.js, Python support", "Auto-scaling", "Event-driven execution", "Built-in logging"],
    docsUrl: "https://catalyst.zoho.com/help/functions",
  },
  {
    id: "appsail",
    title: "AppSail",
    description: "Deploy and scale full-stack applications with a powerful PaaS. Host your web apps with zero DevOps complexity.",
    image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=400&q=80",
    category: "PaaS",
    match: 97,
    features: ["Full-stack hosting", "Custom domains", "SSL certificates", "Git integration"],
    docsUrl: "https://catalyst.zoho.com/help/appsail",
  },
  {
    id: "circuits",
    title: "Circuits",
    description: "Build complex workflows with visual state machines. Orchestrate multi-step processes and manage business logic visually.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&q=80",
    category: "Workflows",
    match: 95,
    features: ["Visual workflow builder", "State management", "Error handling", "Parallel execution"],
    docsUrl: "https://catalyst.zoho.com/help/circuits",
  },
  {
    id: "cron",
    title: "Cron Jobs",
    description: "Schedule recurring tasks to run at specific intervals. Automate background processes without manual intervention.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&q=80",
    category: "Scheduling",
    match: 93,
    features: ["Flexible scheduling", "Timezone support", "Execution logs", "Retry policies"],
    docsUrl: "https://catalyst.zoho.com/help/cron",
  },
];

// Cloud Scale - Storage & Database Services
export const cloudScaleServices: CatalystService[] = [
  {
    id: "datastore",
    title: "Data Store",
    description: "A cloud-based relational database for storing persistent application data. Scale seamlessly with built-in reliability.",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&q=80",
    category: "Database",
    match: 98,
    features: ["Relational tables", "ZCQL queries", "Auto-scaling", "Role-based access"],
    docsUrl: "https://catalyst.zoho.com/help/data-store",
  },
  {
    id: "filestore",
    title: "File Store",
    description: "Cloud storage for images, videos, and documents. Organize files in folders with folder-level permissions.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80",
    category: "Storage",
    match: 96,
    features: ["All file formats", "Folder permissions", "Direct downloads", "SDK access"],
    docsUrl: "https://catalyst.zoho.com/help/file-store",
  },
  {
    id: "stratus",
    title: "Stratus",
    description: "High-performance object storage for modern applications. A significant upgrade to File Store with enhanced capabilities.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80",
    category: "Object Storage",
    match: 94,
    badge: "Early Access",
    features: ["High throughput", "Presigned URLs", "Version control", "Metadata support"],
    docsUrl: "https://catalyst.zoho.com/help/stratus",
  },
  {
    id: "cache",
    title: "Cache",
    description: "Lightning-fast key-value store for frequently accessed data. Reduce database load and improve response times.",
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=400&q=80",
    category: "Caching",
    match: 92,
    features: ["Key-value pairs", "TTL support", "Segment isolation", "Instant retrieval"],
    docsUrl: "https://catalyst.zoho.com/help/cache",
  },
  {
    id: "zcql",
    title: "ZCQL",
    description: "Zoho Catalyst Query Language for powerful data operations. Execute complex queries with SQL-like syntax.",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&q=80",
    category: "Query",
    match: 97,
    features: ["SQL-like syntax", "Join operations", "Aggregations", "Search integration"],
    docsUrl: "https://catalyst.zoho.com/help/zcql",
  },
  {
    id: "nosql",
    title: "NoSQL",
    description: "Schema-less database for flexible data modeling. Perfect for applications with evolving data structures.",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&q=80",
    category: "Database",
    match: 91,
    features: ["Schema-less", "Flexible modeling", "Index support", "Fast queries"],
    docsUrl: "https://catalyst.zoho.com/help/nosql",
  },
];

// Zia Intelligence Services
export const ziaServices: CatalystService[] = [
  {
    id: "ocr",
    title: "Zia OCR",
    description: "Extract text from images and documents with AI-powered optical character recognition.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&q=80",
    category: "AI Vision",
    match: 98,
    features: ["Multi-language support", "Handwriting recognition", "Document parsing", "High accuracy"],
    docsUrl: "https://catalyst.zoho.com/help/zia-ocr",
  },
  {
    id: "faceanalytics",
    title: "Face Analytics",
    description: "Detect faces and analyze facial attributes like age, gender, and emotions from images.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&q=80",
    category: "AI Vision",
    match: 95,
    features: ["Face detection", "Age estimation", "Emotion analysis", "Gender detection"],
    docsUrl: "https://catalyst.zoho.com/help/face-analytics",
  },
  {
    id: "objectrecognition",
    title: "Object Recognition",
    description: "Identify and classify objects within images using advanced machine learning models.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&q=80",
    category: "AI Vision",
    match: 94,
    features: ["1000+ object categories", "Confidence scores", "Multi-object detection", "Fast processing"],
    docsUrl: "https://catalyst.zoho.com/help/object-recognition",
  },
  {
    id: "imagemoderation",
    title: "Image Moderation",
    description: "Automatically detect and filter inappropriate or unsafe content in images.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&q=80",
    category: "AI Safety",
    match: 97,
    features: ["NSFW detection", "Violence detection", "Content scoring", "Auto-flagging"],
    docsUrl: "https://catalyst.zoho.com/help/image-moderation",
  },
  {
    id: "barcodescanner",
    title: "Barcode Scanner",
    description: "Scan and decode barcodes and QR codes from images with high accuracy.",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=400&q=80",
    category: "AI Vision",
    match: 93,
    features: ["QR codes", "Multiple formats", "Batch scanning", "Fast decoding"],
    docsUrl: "https://catalyst.zoho.com/help/barcode-scanner",
  },
  {
    id: "textanalytics",
    title: "Text Analytics",
    description: "Analyze text for sentiment, extract entities, and identify keywords using NLP.",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&q=80",
    category: "AI NLP",
    match: 96,
    features: ["Sentiment analysis", "Named entity recognition", "Keyword extraction", "Multi-language"],
    docsUrl: "https://catalyst.zoho.com/help/text-analytics",
  },
];

// Developer Tools & DevOps
export const devToolsServices: CatalystService[] = [
  {
    id: "quickml",
    title: "QuickML",
    description: "Build, train, and deploy machine learning models without writing code. No-code ML for everyone.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&q=80",
    category: "ML Platform",
    match: 96,
    features: ["No-code interface", "Classification & regression", "Model deployment", "AutoML"],
    docsUrl: "https://catalyst.zoho.com/help/quickml",
  },
  {
    id: "smartbrowz",
    title: "SmartBrowz",
    description: "Browser-based automation for screenshots, PDF generation, and automated testing at scale.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&q=80",
    category: "Automation",
    match: 94,
    features: ["Screenshot capture", "PDF generation", "Browser grid", "Test automation"],
    docsUrl: "https://catalyst.zoho.com/help/smartbrowz",
  },
  {
    id: "convokraft",
    title: "ConvoKraft",
    description: "Build intelligent conversational AI and chatbots with SmartTrain technology.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&q=80",
    category: "Chatbots",
    match: 95,
    features: ["SmartTrain", "Custom training", "Multi-channel", "Context awareness"],
    docsUrl: "https://catalyst.zoho.com/help/convokraft",
  },
  {
    id: "authentication",
    title: "Authentication",
    description: "Secure user authentication and identity management. Handle sign-ups, logins, and sessions.",
    image: "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?w=400&q=80",
    category: "Security",
    match: 99,
    features: ["User management", "Password reset", "Session handling", "Role-based access"],
    docsUrl: "https://catalyst.zoho.com/help/authentication",
  },
  {
    id: "pushnotifications",
    title: "Push Notifications",
    description: "Engage users with push notifications on web, iOS, and Android platforms.",
    image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=400&q=80",
    category: "Messaging",
    match: 92,
    features: ["Web, iOS, Android", "Scheduled sends", "Rich notifications", "Analytics"],
    docsUrl: "https://catalyst.zoho.com/help/push-notifications",
  },
  {
    id: "mail",
    title: "Email Service",
    description: "Send transactional emails reliably with high deliverability and tracking.",
    image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=400&q=80",
    category: "Communication",
    match: 94,
    features: ["HTML emails", "Attachments", "Delivery tracking", "Templates"],
    docsUrl: "https://catalyst.zoho.com/help/mail",
  },
];

// Top 10 Most Popular Services
export const topTenServices: TopTenService[] = [
  { rank: 1, title: "Functions", image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=200&q=80", id: "functions" },
  { rank: 2, title: "Data Store", image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=200&q=80", id: "datastore" },
  { rank: 3, title: "Authentication", image: "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?w=200&q=80", id: "authentication" },
  { rank: 4, title: "AppSail", image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=200&q=80", id: "appsail" },
  { rank: 5, title: "File Store", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=200&q=80", id: "filestore" },
  { rank: 6, title: "Circuits", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=200&q=80", id: "circuits" },
  { rank: 7, title: "QuickML", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=200&q=80", id: "quickml" },
  { rank: 8, title: "ZCQL", image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=200&q=80", id: "zcql" },
  { rank: 9, title: "Zia OCR", image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=200&q=80", id: "ocr" },
  { rank: 10, title: "ConvoKraft", image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=200&q=80", id: "convokraft" },
];

// Helper to find any service by ID
export const getAllServices = (): CatalystService[] => [
  ...serverlessServices,
  ...cloudScaleServices,
  ...ziaServices,
  ...devToolsServices,
];

export const getServiceById = (id: string): CatalystService | undefined => {
  return getAllServices().find(service => service.id === id);
};
