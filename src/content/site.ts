/**
 * SITE CONTENT — edit everything here.
 * Text, services, projects, pricing, FAQ and links all live in this file,
 * separate from layout, so it can later be moved into a Blogger theme.
 *
 * Values wrapped in [BRACKETS] are placeholders. Links stay disabled
 * until you replace them with real details.
 */

export const brand = {
  name: "Riyad",
  title: "AI Automation Developer",
  headline: "Turn Repetitive Business Processes Into Intelligent Automated Systems.",
  description:
    "I design AI agents and smart workflows that connect your tools, automate repetitive processes, and help your business work more efficiently.",
  capabilities: ["AI Agents", "RAG Systems", "n8n Automation", "Business Process Automation"],
  footerStatement:
    "Practical AI agents and automation workflows for businesses that want less repetitive work.",
};

export const contact = {
  email: "[YOUR_EMAIL]",
  whatsapp: "[YOUR_WHATSAPP_NUMBER]", // digits only with country code, e.g. 8801XXXXXXXXX
  socials: [
    { label: "GitHub", url: "[YOUR_GITHUB_URL]" },
    { label: "LinkedIn", url: "[YOUR_LINKEDIN_URL]" },
    { label: "Fiverr", url: "[YOUR_FIVERR_URL]" },
    { label: "YouTube", url: "[YOUR_YOUTUBE_URL]" },
    { label: "Facebook", url: "[YOUR_FACEBOOK_URL]" },
    { label: "X", url: "[YOUR_X_URL]" },
  ],
};

/** Set to false to hide the pricing section (e.g. custom quotes only). */
export const showPricing = true;
/** Set to false to hide the testimonials section entirely. */
export const showTestimonials = true;

export const isPlaceholder = (v: string) => v.trim().startsWith("[");

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];

export const about = {
  intro:
    "I focus on building practical automation systems that connect business tools, process information, and use AI where it adds real value. My goal is to turn repetitive manual tasks into reliable, understandable workflows that businesses can maintain and improve.",
  pillars: [
    { title: "Philosophy", text: "Automation should be simple to understand. AI is used where it genuinely helps, not as decoration." },
    { title: "Problem first", text: "Every project starts with the business task, the people involved and the outcome you need." },
    { title: "Reliability", text: "Workflows include error handling, fallbacks and human approval steps where it matters." },
    { title: "Business value", text: "The goal is less manual work and clearer operations, documented so your team can maintain it." },
  ],
};

export const skillGroups = [
  {
    title: "AI & LLM",
    items: [
      { name: "AI Agents", desc: "Agents that interpret requests and act within defined workflows." },
      { name: "Large Language Models", desc: "Using LLMs for text understanding, drafting and classification." },
      { name: "RAG", desc: "Grounding AI answers in your approved documents and data." },
      { name: "Prompt Engineering", desc: "Structured prompts for consistent, predictable output." },
      { name: "AI App Integration", desc: "Connecting AI models to existing tools and processes." },
    ],
  },
  {
    title: "Automation",
    items: [
      { name: "n8n", desc: "Visual, maintainable workflow automation." },
      { name: "Workflow Orchestration", desc: "Coordinating multi-step processes and decisions." },
      { name: "Business Process Automation", desc: "Replacing repetitive operational tasks." },
      { name: "Customer Support Automation", desc: "Answering, routing and escalating requests." },
      { name: "Email Automation", desc: "Classifying, processing and responding to email." },
      { name: "Auto-Publishing", desc: "Preparing content for publishing with review steps." },
    ],
  },
  {
    title: "Integration & Development",
    items: [
      { name: "APIs", desc: "Connecting services through their programmatic interfaces." },
      { name: "Webhooks", desc: "Reacting instantly to events from other apps." },
      { name: "HTTP Requests", desc: "Custom calls to any web service." },
      { name: "JSON", desc: "Structuring and transforming data between tools." },
      { name: "Third-Party Integrations", desc: "CRMs, sheets, messaging and more." },
      { name: "Database Integration", desc: "Reading and writing business data reliably." },
      { name: "Custom JavaScript", desc: "Custom logic where no-code isn't enough." },
    ],
  },
];

export type IconName = "agent" | "process" | "rag" | "support" | "mail" | "flow" | "chat" | "send" | "saas";

export const services: { icon: IconName; title: string; text: string; useCase: string }[] = [
  { icon: "agent", title: "AI Agent Development", text: "Agents that use AI to interpret requests and support defined business workflows.", useCase: "Qualify incoming leads and route them to the right person." },
  { icon: "process", title: "Business Process Automation", text: "Automate repetitive operational tasks and connect your business applications.", useCase: "Sync new orders into a spreadsheet and notify the team." },
  { icon: "rag", title: "RAG Systems", text: "Knowledge-grounded assistants that retrieve information from approved documents or data.", useCase: "An internal assistant that answers from your policy documents." },
  { icon: "support", title: "Customer Support Automation", text: "Answer common questions, organise requests and escalate cases when needed.", useCase: "Handle FAQs automatically and hand complex cases to staff." },
  { icon: "mail", title: "Email Automation", text: "Automate email processing, classification, notifications and follow-ups.", useCase: "Sort an inbox by intent and draft replies for review." },
  { icon: "flow", title: "n8n Workflow Automation", text: "Connect APIs, apps, triggers and data steps through maintainable workflows.", useCase: "Link a form, CRM and messaging app in one workflow." },
];

export type Project = {
  name: string;
  category: string;
  icon: IconName;
  problem: string;
  approach: string;
  tools: string[];
  features: string[];
  demoUrl?: string; // leave empty until a real demo exists
};

/** All projects below are demonstrations, not client work. */
export const projects: Project[] = [
  { name: "RAG Knowledge Assistant", category: "AI / RAG", icon: "rag", problem: "Staff spend time searching documents for answers.", approach: "Retrieve relevant passages from a knowledge source, then generate a grounded answer.", tools: ["n8n", "LLM", "Vector store"], features: ["Source-grounded replies", "Document ingestion", "Fallback when unsure"] },
  { name: "AI Customer Support Agent", category: "Support", icon: "support", problem: "Repeated customer questions overload the team.", approach: "Classify questions, answer common ones and escalate others to a human.", tools: ["n8n", "LLM", "Webhooks"], features: ["Intent detection", "Human escalation", "Conversation logging"] },
  { name: "Facebook Messenger Automation", category: "Messaging", icon: "chat", problem: "Incoming messages go unanswered outside working hours.", approach: "Receive messages via webhook and connect them to an automated workflow.", tools: ["Messenger API", "n8n", "Webhooks"], features: ["Instant replies", "Lead capture", "Team notifications"] },
  { name: "Email Automation System", category: "Email", icon: "mail", problem: "Manual inbox sorting delays important replies.", approach: "Classify incoming emails, extract details and send appropriate notifications.", tools: ["Gmail API", "LLM", "n8n"], features: ["Auto-classification", "Data extraction", "Alerts"] },
  { name: "Auto-Publishing Workflow", category: "Content", icon: "send", problem: "Preparing and scheduling content is repetitive.", approach: "Draft and organise content, then publish after human review.", tools: ["n8n", "LLM", "CMS API"], features: ["Draft generation", "Approval step", "Scheduled publishing"] },
  { name: "Telegram Automation", category: "Messaging", icon: "chat", problem: "Teams need quick access to workflow actions on mobile.", approach: "A Telegram bot that triggers and reports on automation workflows.", tools: ["Telegram Bot API", "n8n"], features: ["Command triggers", "Status updates", "Notifications"] },
  { name: "SaaS Business Automation", category: "Operations", icon: "saas", problem: "App components and business steps are disconnected.", approach: "Connect application events to a defined, automated business process.", tools: ["APIs", "Database", "n8n"], features: ["Event-driven steps", "Error handling", "Audit trail"] },
];

export const processSteps = [
  { title: "Understand the Business Problem", text: "Identify the repetitive task, business requirement and desired outcome." },
  { title: "Plan the Workflow", text: "Define triggers, data inputs, decision points, integrations and failure cases." },
  { title: "Build the Automation", text: "Develop the workflow and configure the required tools and connections." },
  { title: "Test and Improve", text: "Validate normal behaviour, edge cases, error handling and results." },
  { title: "Deliver and Document", text: "Explain how the system works and document configuration and maintenance." },
];

export const pricing = [
  { name: "Starter Automation", price: "[Add Price]", scope: "[Define Scope]", features: ["One clearly scoped workflow", "Basic integration", "Testing and handover"], featured: false },
  { name: "AI Workflow", price: "[Add Price]", scope: "[Define Scope]", features: ["Advanced AI-assisted workflow", "Multiple processing steps", "Defined integrations & error handling"], featured: true },
  { name: "Custom Automation", price: "Custom quote", scope: "Scope determined after discussion", features: ["Tailored to your requirements", "More complex integrations", "Planning session included"], featured: false },
];

/** Replace with genuine testimonials. Placeholders are shown as such. */
export const testimonials = [
  { quote: "[Add a genuine client testimonial here]", author: "[Client name]", role: "[Role, Company]" },
  { quote: "[Add a genuine client testimonial here]", author: "[Client name]", role: "[Role, Company]" },
];

export const expectations = [
  { title: "Clear communication", text: "Plain-language updates and agreed scope before building." },
  { title: "Reliable workflows", text: "Error handling and fallbacks designed in from the start." },
  { title: "Documentation", text: "A clear handover so your team understands the system." },
];

export const faqs = [
  { q: "What types of business processes can you automate?", a: "Repetitive, rule-based tasks such as data entry, sorting emails, answering common questions, syncing information between apps, sending notifications and preparing reports." },
  { q: "What is an AI agent?", a: "An AI agent is a system that reads a request, decides which steps to take, and uses connected tools to complete a defined task — within limits you set." },
  { q: "What is RAG, and when is it useful?", a: "RAG (Retrieval-Augmented Generation) lets an AI look up information in your own documents before answering. It's useful when answers must be based on your specific, approved content." },
  { q: "Can you connect different applications through APIs?", a: "Yes. Most modern apps offer APIs or webhooks, which allow them to share data and trigger actions in each other automatically." },
  { q: "Can an automation include human approval?", a: "Yes. Workflows can pause for a person to review, edit or approve before anything important is sent or published." },
  { q: "How do you handle errors and failed workflow steps?", a: "Workflows include retries, fallback paths and alerts, so failures are noticed and handled instead of silently breaking." },
  { q: "How is the project scope determined?", a: "Through a short discussion about your current process, the tools you use and the outcome you want. The scope is agreed in writing before work starts." },
  { q: "How can I discuss a custom automation requirement?", a: "Reach out by email or WhatsApp in the contact section with a short description of the workflow you'd like to improve." },
];
