export const personalInfo = {
  name: "Muhammad Sami",
  shortName: "M. Sami",
  role: "AI & Full-Stack Software Engineer",
  tagline: "Bridging Computer Vision, Generative AI & High-Performance Web Applications",
  bio: "Software Engineer passionate about building practical, end-to-end solutions through AI, Computer Vision, and modern web development. Currently engineering real-world video analytics and vision models at Hubcom.co, while crafting seamless, interactive user experiences with React and the modern JavaScript ecosystem.",
  location: "Islamabad, Pakistan",
  email: "rana.muhammadsami01@gmail.com",
  phone: "(+92) 03060010333",
  whatsapp: "https://wa.me/923060010333",
  linkedin: "https://linkedin.com/in/rana-muhammad-sami-071045417",
  github: "https://github.com",
  status: "Available for high-impact AI & Full-Stack roles",
  stats: [
    { label: "Core Domains", value: "AI + Full-Stack" },
    { label: "Production & Research Projects", value: "4+" },
    { label: "Industry Certifications", value: "3" },
    { label: "Real-Time AI Pipelines", value: "100%" }
  ]
};

export const experiences = [
  {
    role: "AI and Machine Learning Engineer Intern",
    company: "Hubcom.co",
    companyType: "US-based Technology Company",
    location: "Islamabad, Pakistan",
    period: "02/06/2026 – Present",
    current: true,
    highlights: [
      "Trained and optimized YOLO and YOLOE models for visual prompting, multi-object tracking, and complex activity detection (violence, customer interactions, fire hazards).",
      "Engineered automated OpenCV pipelines integrated with Ollama models to execute advanced video understanding, event recognition, and synchronized metadata generation.",
      "Integrated vision models and vector embeddings for semantic video search, indexing, and automated dataset annotation.",
      "Developed scalable backend services and interactive web interfaces using FastAPI and Streamlit for real-time model interaction and high-speed data retrieval."
    ],
    skills: ["YOLO / YOLOE", "OpenCV", "Ollama", "FastAPI", "Vector Embeddings", "Streamlit", "Python"]
  },
  {
    role: "IT Specialist Intern",
    company: "PEMRA (Pakistan Electronic Media Regulatory Authority)",
    companyType: "Government Media Regulatory Body",
    location: "Islamabad, Pakistan",
    period: "07/03/2025 – 15/06/2025",
    current: false,
    highlights: [
      "Troubleshot and resolved hardware and software malfunctions across IT departments to minimize system downtime and ensure business continuity.",
      "Diagnosed server performance bottlenecks and resolved network connectivity issues to safeguard operational uptime.",
      "Installed, configured, and deployed essential enterprise software applications, operating systems, and security patches across user workstations."
    ],
    skills: ["System Administration", "Network Diagnostics", "Hardware/Software Support", "Workstation Deployment"]
  }
];

export const education = [
  {
    degree: "Bachelors In Software Engineering (BS SE)",
    institution: "International Islamic University Islamabad (IIUI)",
    period: "2022 – 2026",
    location: "Islamabad, Pakistan",
    details: "Focus on Algorithms, Object-Oriented Software Design, Deep Learning, Web Engineering, and Scalable Architectures.",
    link: "https://www.iiu.edu.pk/"
  }
];

export const certifications = [
  {
    title: "JavaScript Specialist (International Certification)",
    issuer: "Pearson VUE",
    date: "15/09/2025",
    type: "International Certification",
    description: "Rigorous certification covering modern JavaScript ES6+, asynchronous programming, DOM architecture, modular design, and full-stack API integration."
  },
  {
    title: "JavaScript Full Stack (MEAN/MERN) Development",
    issuer: "Adan Institute of Technology",
    date: "04/06/2025",
    type: "Project-Based Diploma",
    description: "Hands-on engineering in React.js, Node.js, Express, MongoDB, Three.js, Framer Motion, RESTful APIs, and collaborative Git workflows."
  },
  {
    title: "Introduction To Modern AI",
    issuer: "Cisco Networking Academy",
    date: "10/09/2026",
    type: "Online Specialization",
    description: "Foundational & applied Machine Learning, Computer Vision, Generative AI, Multimodal systems, and LLM prompt engineering."
  }
];

export const projects = [
  {
    id: "facecraft",
    title: "Face-Craft & Grooming AI",
    subtitle: "Final Year Capstone Project",
    category: "Computer Vision & Full Stack",
    featured: true,
    description: "An intelligent web application that performs real-time facial landmark analysis, facial shape detection, personalized grooming and cosmetic product recommendations, and AI-powered virtual try-on.",
    highlights: [
      "Integrated MediaPipe Face Mesh for 468+ 3D facial landmarks and trained Random Forest classifiers for face-shape detection (round, oval, oblong, heart).",
      "Applied MTCNN-based computer vision for skin analysis detecting acne, pores, wrinkles, and skin tone variations.",
      "Implemented virtual try-on modules for hairstyles and beard styles, paired with an intelligent conversational AI advisor.",
      "Architected complete web platform with authentication, MySQL database, role-based admin panel, notifications, and subscription workflows."
    ],
    technologies: ["MediaPipe", "Python", "MTCNN", "Random Forest", "React.js", "Node.js", "MySQL", "Tailwind CSS"],
    githubUrl: "https://github.com",
    demoUrl: null,
    metrics: "468+ facial landmarks • Sub-second inference • Full auth & payment pipeline"
  },
  {
    id: "semantic-video-search",
    title: "AI Semantic Video Search & Event Retrieval",
    subtitle: "Multimodal Video Analytics",
    category: "AI & Computer Vision",
    featured: true,
    description: "Next-generation semantic video indexing and retrieval system allowing users to search video archives using natural language queries instead of plain keyword tags.",
    highlights: [
      "Engineered automated scene segmentation with PySceneDetect using adaptive thresholds and time-based fallback.",
      "Embedded video frames and text prompts into a unified multimodal latent space using OpenAI CLIP embeddings.",
      "Integrated BLIP for scene captioning and deployed Qwen3-VL through Ollama for human-readable video summarization.",
      "Enables queries like 'person entering building at night' to locate precise timestamps instantly."
    ],
    technologies: ["CLIP", "BLIP", "Qwen3-VL", "Ollama", "PySceneDetect", "Python", "Vector Embeddings", "FastAPI"],
    githubUrl: "https://github.com",
    demoUrl: null,
    metrics: "Natural language search • Frame-level accuracy • Local LLM inference"
  },
  {
    id: "gaze-estimation",
    title: "Deep Neural Network Gaze Estimation",
    subtitle: "Human-Computer Interaction Research",
    category: "Deep Learning",
    featured: true,
    description: "A custom PyTorch Deep Neural Network architecture to accurately estimate 2D on-screen gaze coordinates from facial landmark geometry and iris displacement.",
    highlights: [
      "Extracted 6 standardized gaze features from live video streams using MediaPipe Face Landmarker.",
      "Constructed a multi-layer deep network (128 → 256 → 128 → 64) with Batch Normalization, ReLU, Dropout, and Sigmoid output activation.",
      "Trained model with Adam optimizer and Mean Squared Error (MSE) loss with multi-seed validation for robustness against lighting variations."
    ],
    technologies: ["PyTorch", "MediaPipe", "Computer Vision", "Deep Learning", "NumPy", "OpenCV"],
    githubUrl: "https://github.com",
    demoUrl: null,
    metrics: "Low latency • High-accuracy 2D coordinate regression"
  },
  {
    id: "cctv-rag-bot",
    title: "CCTV Event RAG & Semantic Chatbot",
    subtitle: "Conversational Intelligence for Surveillance",
    category: "RAG & LLMs",
    featured: false,
    description: "An intelligent security event retrieval chatbot combining vector search with exact database querying over large-scale surveillance logs.",
    highlights: [
      "Implemented FAISS vector indexing for natural-language semantic query matching against event descriptions.",
      "Integrated exact MongoDB aggregations for deterministic counts and structured filtering (camera ID, timestamp, site location).",
      "Integrated Ollama for local LLM inference with persistent conversation memory for multi-turn contextual inquiries."
    ],
    technologies: ["FAISS", "MongoDB", "Ollama", "Python", "RAG Pipeline", "FastAPI"],
    githubUrl: "https://github.com",
    demoUrl: null,
    metrics: "Hybrid retrieval (Vector + Filter) • Persistent conversational memory"
  }
];

export const skillCategories = [
  {
    title: "AI, Vision & Machine Learning",
    icon: "Brain",
    accent: "from-cyan-500 to-blue-600",
    skills: [
      { name: "Computer Vision", level: "Advanced" },
      { name: "YOLO & YOLOE", level: "Advanced" },
      { name: "OpenCV", level: "Advanced" },
      { name: "PyTorch & DNNs", level: "Proficient" },
      { name: "MediaPipe", level: "Advanced" },
      { name: "Ollama & Local LLMs", level: "Proficient" },
      { name: "CLIP / Multimodal", level: "Proficient" },
      { name: "FAISS & Vector Search", level: "Proficient" },
      { name: "RAG Architectures", level: "Proficient" }
    ]
  },
  {
    title: "Frontend & Interactive 3D",
    icon: "Layout",
    accent: "from-purple-500 to-indigo-600",
    skills: [
      { name: "React.js", level: "Advanced" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "JavaScript (ES6+)", level: "Expert" },
      { name: "Framer Motion", level: "Proficient" },
      { name: "Three.js (3D Web)", level: "Intermediate" },
      { name: "HTML5 / CSS3", level: "Expert" },
      { name: "Responsive UI/UX", level: "Advanced" }
    ]
  },
  {
    title: "Backend, APIs & Databases",
    icon: "Server",
    accent: "from-emerald-500 to-teal-600",
    skills: [
      { name: "Python", level: "Advanced" },
      { name: "Node.js & Express", level: "Proficient" },
      { name: "FastAPI", level: "Proficient" },
      { name: "RESTful Web APIs", level: "Advanced" },
      { name: "MongoDB", level: "Proficient" },
      { name: "MySQL", level: "Proficient" },
      { name: "Streamlit", level: "Proficient" }
    ]
  },
  {
    title: "Tools, DevOps & Workflows",
    icon: "Cpu",
    accent: "from-amber-500 to-orange-600",
    skills: [
      { name: "Git & GitHub", level: "Advanced" },
      { name: "Linux / Bash", level: "Proficient" },
      { name: "Object Tracking", level: "Advanced" },
      { name: "Model Optimization", level: "Proficient" },
      { name: "Troubleshooting & IT", level: "Advanced" },
      { name: "Data Annotation", level: "Proficient" }
    ]
  }
];

