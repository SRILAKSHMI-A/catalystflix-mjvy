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
  id: "slate",
  title: "Slate",
  description: "Host and deploy modern frontend applications with global CDN support, custom domains, and seamless integration with Catalyst backend services.",
  image: "https://media.licdn.com/dms/image/v2/D5622AQEsiZYEIEDZpA/feedshare-shrink_800/B56ZmfrSYGJsAg-/0/1759320549933?e=1772064000&v=beta&t=n6yX1XoSN4Opi6KP05H7wDa69suKi2NTFM6HSHPzuzQ",
  category: "Frontend & Hosting",
  match: 94,
  features: [
    "Static web hosting",
    "Global CDN",
    "Custom domains",
    "HTTPS by default",
    "Seamless Catalyst integration"
  ],
  docsUrl: "https://catalyst.zoho.com/slate/index.html?src=header"
},

  {
    id: "functions",
    title: "Functions",
    description: "Execute backend logic without managing servers. Write code in Java, Node.js, or Python and let Catalyst handle the infrastructure.",
    image: "https://zdblogs.zohowebstatic.com/sites/catalyst/blog/files/users/user901/blog%20submission-21.jpg",
    category: "Serverless",
    match: 99,
    features: ["Java, Node.js, Python support", "Auto-scaling", "Event-driven execution", "Built-in logging"],
    docsUrl: "https://docs.catalyst.zoho.com/en/serverless/help/functions/introduction/",
  },
  {
    id: "appsail",
    title: "AppSail",
    description: "Deploy and scale full-stack applications with a powerful PaaS. Host your web apps with zero DevOps complexity in any language with custom runtime support",
    //image: "https://images.pexels.com/photos/8386437/pexels-photo-8386437.jpeg",
    image: "https://zoho.com/sites/zweb/images/catalyst/cutom-runtime-appsail.png",
    category: "PaaS",
    match: 97,
    features: ["Docker Support","Full-stack hosting", "Custom domains", "SSL certificates", "Git integration"],
    docsUrl: "https://docs.catalyst.zoho.com/en/serverless/help/appsail/introduction/",
  },
  {
    id: "circuits",
    title: "Circuits",
    description: "Orchestrate multi-step processes and manage business logic visually.",
    image: "https://docs.catalyst.zoho.com/images/help/circuits/catalyst_circuits_graph_1.webp",
    category: "Workflows",
    match: 95,
    features: ["Visual workflow builder", "State management", "Error handling", "Parallel execution"],
    docsUrl: "https://docs.catalyst.zoho.com/en/serverless/help/circuits/introduction/",
  },
  {
    id: "job scheduler",
    title: "Job Scheduling",
    description: "Schedule recurring tasks to run at specific intervals. Automate background processes without manual intervention.",
    image: "https://docs.catalyst.zoho.com/images/help/job-scheduling/catalyst_job_scheduling_jobs_home_page_list.webp",
    category: "Scheduling",
    match: 93,
    features: ["Flexible scheduling", "Timezone support", "Execution logs", "Retry policies"],
    docsUrl: "https://docs.catalyst.zoho.com/en/job-scheduling/",
  },
];

// Cloud Scale - Storage & Database Services
export const cloudScaleServices: CatalystService[] = [
  {
    id: "datastore",
    title: "Data Store",
    description: "A cloud-based relational database for storing persistent application data. Scale seamlessly with built-in reliability.",
    image: "https://zoho.com/sites/zweb/images/catalyst/zoho-app-storage.png",
    category: "Database",
    match: 98,
    features: ["Relational tables", "ZCQL queries", "Auto-scaling", "Role-based access"],
    docsUrl: "https://docs.catalyst.zoho.com/en/cloud-scale/help/data-store/introduction/",
  },
  {
    id: "stratus",
    title: "Stratus",
    description: "High-performance object storage for modern applications.Cloud storage for images, videos, and documents. Organize files in folders with folder-level permissions.",
    image: "https://zoho.com/sites/zweb/images/catalyst/stratus_launch_announcement.jpg",
    category: "Object Storage",
    match: 94,
    features: ["All file formats", "Folder permissions","Direct downloads","SDK access","High throughput","Presigned URLs","Version control","Metadata support"],
    docsUrl: "https://catalyst.zoho.com/stratus.html?src=header",
  },
  {
    id: "cache",
    title: "Cache",
    description: "Lightning-fast key-value store for frequently accessed data. Reduce database load and improve response times.",
    image: "https://media.licdn.com/dms/image/v2/D5622AQESaKPxHAcgyg/feedshare-shrink_800/B56Zrir9ThHAAg-/0/1764739766620?e=1772064000&v=beta&t=oNIqVrrVRkEC0a0pPGej2LkVNKDBpFg854Lku0zXzGc",
    category: "Caching",
    match: 92,
    features: ["Key-value pairs", "TTL support", "Segment isolation", "Instant retrieval"],
    docsUrl: "https://docs.catalyst.zoho.com/en/cloud-scale/help/cache/introduction/",
  },
  {
    id: "zcql",
    title: "ZCQL",
    description: "Zoho Catalyst Query Language for powerful data operations. Execute complex queries with SQL-like syntax.",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&q=80",
    category: "Query",
    match: 97,
    features: ["SQL-like syntax", "Join operations", "Aggregations", "Search integration"],
    docsUrl: "https://docs.catalyst.zoho.com/en/cloud-scale/help/zcql/introduction/",
  },
  {
    id: "nosql",
    title: "NoSQL",
    description: "Schema-less database for flexible data modeling. Perfect for applications with evolving data structures.",
    image: "https://zoho.com/sites/zweb/images/catalyst/new_option_final.jpg",
    category: "Database",
    match: 91,
    features: ["Schema-less", "Flexible modeling", "Index support", "Fast queries"],
    docsUrl: "https://catalyst.zoho.com/nosql.html?src=header",
  },
];

// Zia Services
export const ziaServices: CatalystService[] = [
  {
    id: "ocr",
    title: "Zia OCR ",
    description: "Extract text from images and documents with AI-powered optical character recognition.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&q=80",
    category: "AI Vision",
    match: 98,
    features: ["Multi-language support", "Handwriting recognition", "Document parsing", "High accuracy"],
    docsUrl: "https://catalyst.zoho.com/zia-services.html?src=header",
  },
  {
    id: "faceanalytics",
    title: "Face Analytics",
    description: "Detect faces and analyze facial attributes like age, gender, and emotions from images.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&q=80",
    category: "AI Vision",
    match: 95,
    features: ["Face detection", "Age estimation", "Emotion analysis", "Gender detection"],
    docsUrl: "https://docs.catalyst.zoho.com/en/zia-services/help/face-analytics/introduction/",
  },
  {
    id: "objectrecognition",
    title: "Object Recognition",
    description: "Identify and classify objects within images using advanced machine learning models.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&q=80",
    category: "AI Vision",
    match: 94,
    features: ["1000+ object categories", "Confidence scores", "Multi-object detection", "Fast processing"],
    docsUrl: "https://docs.catalyst.zoho.com/en/zia-services/help/object-recognition/introduction/",
  },
  {
    id: "imagemoderation",
    title: "Image Moderation",
    description: "Automatically detect and filter inappropriate or unsafe content in images.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&q=80",
    category: "AI Safety",
    match: 97,
    features: ["NSFW detection", "Violence detection", "Content scoring", "Auto-flagging"],
    docsUrl: "https://docs.catalyst.zoho.com/en/zia-services/help/image-moderation/introduction/",
  },
  {
    id: "barcodescanner",
    title: "Barcode Scanner",
    description: "Scan and decode barcodes and QR codes from images with high accuracy.",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=400&q=80",
    category: "AI Vision",
    match: 93,
    features: ["QR codes", "Multiple formats", "Batch scanning", "Fast decoding"],
    docsUrl: "https://docs.catalyst.zoho.com/en/zia-services/help/barcode-scanner/introduction/",
  },
  {
    id: "textanalytics",
    title: "Text Analytics",
    description: "Analyze text for sentiment, extract entities, and identify keywords using NLP.",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&q=80",
    category: "AI NLP",
    match: 96,
    features: ["Sentiment analysis", "Named entity recognition", "Keyword extraction", "Multi-language"],
    docsUrl: "https://docs.catalyst.zoho.com/en/zia-services/help/text-analytics/introduction/",
  },
];

// Developer Tools & DevOps
export const devToolsServices: CatalystService[] = [
  {
    id: "quickml",
    title: "QuickML",
    description: "Build, train, and deploy machine learning models without writing code. No-code ML for everyone.",
    image: "https://www.zohowebstatic.com/sites/zweb/images/catalyst/ml-quickml.jpg",
    category: "ML Platform",
    match: 96,
    features: ["No-code interface", "Classification & regression", "Model deployment", "AutoML"],
    docsUrl: "https://catalyst.zoho.com/quickml.html",
  },
  {
    id: "smartbrowz",
    title: "SmartBrowz",
    description: "Browser-based automation for screenshots, PDF generation, and automated testing at scale.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&q=80",
    category: "Automation",
    match: 94,
    features: ["Screenshot capture", "PDF generation", "Browser grid", "Test automation"],
    docsUrl: "https://catalyst.zoho.com/smartbrowz.html?src=header",
  },
  {
    id: "convokraft",
    title: "ConvoKraft",
    description: "Build intelligent conversational AI and chatbots with SmartTrain technology.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&q=80",
    category: "Chatbots",
    match: 95,
    features: ["SmartTrain", "Custom training", "Multi-channel", "Context awareness"],
    docsUrl: "https://catalyst.zoho.com/convokraft.html?src=header",
  },
  {
    id: "authentication",
    title: "Authentication",
    description: "Secure user authentication and identity management. Handle sign-ups, logins, and sessions.",
    image: "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?w=400&q=80",
    category: "Security",
    match: 99,
    features: ["User management", "Password reset", "Session handling", "Role-based access"],
    docsUrl: "https://docs.catalyst.zoho.com/en/cloud-scale/help/authentication/introduction/",
  },
  {
    id: "pushnotifications",
    title: "Push Notifications",
    description: "Engage users with push notifications on web, iOS, and Android platforms.",
    image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=400&q=80",
    category: "Messaging",
    match: 92,
    features: ["Web, iOS, Android", "Scheduled sends", "notifications", "Analytics"],
    docsUrl: "https://docs.catalyst.zoho.com/en/cloud-scale/help/push-notifications/introduction/",
  },
  {
    id: "mail",
    title: "Email Service",
    description: "Send transactional emails reliably with high deliverability and tracking.",
    image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=400&q=80",
    category: "Communication",
    match: 94,
    features: ["HTML emails", "Attachments", "Delivery tracking", "Templates"],
    docsUrl: "https://docs.catalyst.zoho.com/en/cloud-scale/help/mail/introduction/",
  },
];

// Top 10 Most Popular Services
export const topTenServices: TopTenService[] = [
  { rank: 1, title: "Slate", image: "https://docs.catalyst.zoho.com/images/help/slate/slate-starter-template.webp", id: "slate" },
  { rank: 2, title: "Functions", image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=200&q=80", id: "functions" },
  { rank: 3, title: "Data Store", image: "https://plus.unsplash.com/premium_photo-1683120968693-9af51578770e?q=80&w=663&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", id: "datastore" },
  { rank: 4, title: "Authentication", image: "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?w=200&q=80", id: "authentication" },
  { rank: 5, title: "AppSail", image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=200&q=80", id: "appsail" },
  { rank: 6, title: "Stratus", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=200&q=80", id: "filestore" },
  { rank: 7, title: "Circuits", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=200&q=80", id: "circuits" },
  { rank: 8, title: "QuickML", image: "https://unsplash.com/photos/a-computer-keyboard-sitting-on-top-of-a-computer-mouse-AMAYQqzQYaI", id: "quickml" },
  { rank: 9, title: "ZCQL", image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=200&q=80", id: "zcql" },
  { rank: 10, title: "Zia OCR", image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=200&q=80", id: "ocr" },
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



