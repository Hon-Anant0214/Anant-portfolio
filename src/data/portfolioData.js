// Single source of truth for all portfolio content.
// All content is sourced directly from Anant Shantilal Hon's resume.

export const personalInfo = {
  name: "Anant Shantilal Hon",
  wordmark: "anant",
  role: "AI/ML Engineer",
  email: "honanant6@gmail.com",
  phone: "+91 9209162209",
  location: "Kopargaon, Maharashtra, India",
  github: "https://github.com/Hon-Anant0214",
  githubLabel: "github.com/Hon-Anant0214",
  linkedin: "https://linkedin.com/in/anant-hon818417326",
  linkedinLabel: "linkedin.com/in/anant-hon818417326",
};

export const careerObjective =
  "AI/ML Engineer in training with hands-on experience in building intelligent systems combining machine learning, IoT, and automation. Skilled in developing data-driven applications, AI-powered tools, and embedded systems with real-world impact. Passionate about deploying scalable AI solutions and solving practical engineering problems.";

export const aboutTags = [
  "AI / ML",
  "IoT",
  "Automation",
  "Embedded Systems",
  "Data-driven Applications",
  "AI-powered Tools",
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const heroStats = [
  {
    value: "42,500+",
    description: "Lines of code, experiments, systems and ideas explored.",
  },
  {
    value: "AI + IoT",
    description:
      "Building intelligent systems that connect machine learning, embedded hardware, automation and real-world applications.",
  },
];

export const education = [
  {
    degree: "B.Tech in Artificial Intelligence & Machine Learning",
    institution: "Sanjivani University, Kopargaon",
    period: "2023 – 2027",
    detail: "CGPA: 7.9 / 10",
  },
  {
    degree: "Diploma in Mechatronics",
    institution: "Sanjivani K.B.P. Polytechnic, Kopargaon",
    period: "2021 – 2023",
    detail: "Percentage: 83.93%",
  },
  {
    degree: "SSC",
    institution: "Sant Janardan Swami Maungiri Maharaj Maharshi School, Kopargaon",
    period: "2021",
    detail: "Percentage: 61.43%",
  },
];

export const skillGroups = [
  { title: "Programming", items: ["Python", "C", "Java", "Embedded C"] },
  {
    title: "AI / Machine Learning",
    items: [
      "Supervised Learning",
      "Unsupervised Learning",
      "Regression",
      "Classification",
      "Linear Regression",
      "Decision Trees",
      "KNN",
      "Feature Engineering",
      "Model Training & Evaluation",
      "Data Preprocessing",
    ],
  },
  {
    title: "Python Frameworks & Libraries",
    items: [
      "Flask",
      "FastAPI",
      "Django",
      "Streamlit",
      "NumPy",
      "Pandas",
      "Scikit-learn",
      "Matplotlib",
      "REST API Development",
    ],
  },
  {
    title: "AI Tools & Platforms",
    items: ["ChatGPT", "Claude AI", "Grok AI", "Emergent AI platform"],
  },
  {
    title: "Edge AI & TinyML",
    items: ["Edge AI Concepts", "TensorFlow Lite", "TinyML Model Deployment"],
  },
  {
    title: "Embedded Systems & IoT",
    items: ["ESP32", "Sensor Integration", "Real-time Systems", "UART", "I2C", "SPI"],
  },
  {
    title: "DevOps & Cloud",
    items: ["Git", "GitHub", "Docker", "Kubernetes", "Jenkins", "CI/CD Pipelines", "Cloud Fundamentals"],
  },
  { title: "Databases", items: ["MySQL", "Firebase"] },
  { title: "Tools", items: ["Jupyter Notebook", "Google Colab", "VS Code"] },
  { title: "Operating Systems", items: ["Windows", "Linux"] },
];

export const projects = [
  {
    badge: "FLAGSHIP PROJECT",
    title: "AI-Powered Desk Buddy Robot",
    points: [
      "Designed and developed an AI-enabled robotic assistant using ESP32 for real-time interaction.",
      "Wake word detection → Speech-to-Text → AI processing → Response output.",
      "Speech-to-Text using Vosk.",
      "LLM responses via OpenRouter API.",
      "Text-to-Speech system.",
      "Real-time audio playback using I2S-based microphone and speaker modules.",
      "Edge + cloud hybrid architecture.",
      "Sensor-based environment awareness.",
      "Autonomous navigation.",
      "Future scalability for vision processing.",
      "Object detection.",
      "Intelligent behavior.",
    ],
    technologies: [],
    github: "https://github.com/Hon-Anant0214/DESSKY",
  },
  {
    badge: null,
    title: "AI-Based Intelligent Web Scraping & Content Structuring System",
    points: [
      "Full-stack AI scraping tool using Python and Streamlit.",
      "Automated data extraction using BeautifulSoup.",
      "HTTP pipelines.",
      "OpenRouter API.",
      "Semantic categorization.",
      "Entity extraction.",
      "JSON export.",
      "CSV export.",
      "Excel export.",
      "Reduced manual data processing effort.",
    ],
    technologies: [],
    github: "https://github.com/Hon-Anant0214/Ai-based-smart-Web-Scraper",
  },
  {
    badge: null,
    title: "KisanMitra — AI-Based Agricultural Recommendation System",
    points: [
      "ML models trained on 1000+ agricultural records.",
      "Crop prediction.",
      "Recommendations.",
      "Data preprocessing.",
      "Feature engineering.",
      "Model evaluation.",
      "~15% improved prediction accuracy.",
      "Optimized model selection.",
    ],
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn"],
    github: "https://github.com/Hon-Anant0214/Crop_AI",
  },
  {
    badge: "IoT PROJECT",
    title: "Smart Parking System",
    points: [
      "Real-time parking monitoring.",
      "ESP32.",
      "IR sensors.",
      "10+ parking slots.",
      "Automated slot detection.",
      "~50% reduction in manual monitoring effort.",
      "Embedded control logic.",
      "Real-time occupancy tracking.",
    ],
    technologies: ["ESP32", "Embedded C", "Python"],
    github: null,
  },
];

export const experience = [
  {
    role: "AI & Mechatronics Intern",
    company: "Tecligence Pvt. Ltd.",
    period: "June 2025 – July 2025",
    points: [
      "AI-integrated embedded systems.",
      "Sensors and microcontrollers.",
      "Data collection.",
      "Data preprocessing.",
      "ML-based applications.",
      "System integration.",
      "Testing in real-world environments.",
    ],
  },
  {
    role: "AI/ML & Systems Intern",
    company: "Ramaastra Aerospace & Defence",
    period: "November 2025 – December 2025",
    points: [
      "Developed and trained machine learning models.",
      "Predictive analysis.",
      "Intelligent decision-making.",
      "Data collection.",
      "Data preprocessing.",
      "Feature analysis.",
      "Predictive maintenance.",
      "Smart monitoring.",
      "Engineering and aerospace-related systems.",
    ],
  },
];

export const certifications = [
  { title: "DevOps Fundamentals", issuer: "IBM" },
  { title: "IBM Watson Studio", issuer: "IBM" },
];

export const achievements = [
  {
    title: "AI + IoT Integrated Systems",
    description: "Built AI + IoT integrated systems combining ML and embedded hardware.",
  },
  {
    title: "Real-world AI Applications",
    description: "Developed real-world AI applications with LLM integration.",
  },
  {
    title: "Smart India Hackathon",
    description: "Selected for Smart India Hackathon college-level round.",
  },
];
