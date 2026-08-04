import { Project, Experience, SkillCategory, Certification, StatItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Mohammed Shibil P',
  title: 'DevOps Engineer Intern',
  company: 'Akumen Technologies',
  location: 'Kerala, India',
  email: 'mohammedshibilp@gmail.com', // standard format
  phone: '+91 98765 43210',
  github: 'https://github.com/MohammedShibilP',
  linkedin: 'https://linkedin.com/in/mohammedshibilp',
  tagline: 'Building Scalable Systems Through Automation.',
  shortBio:
    'Computer Science graduate currently working as a DevOps Engineer Intern at Akumen Technologies. Passionate about Linux, Cloud Computing, DevOps, Infrastructure Automation, CI/CD pipelines, and Full Stack Development. Continuously learning modern cloud-native technologies and building production-ready applications.',
  fullBio: `I am a Computer Science graduate and a passionate DevOps Engineer Intern currently working at Akumen Technologies in Kerala, India. My journey began in Full Stack & Mobile Development with Flutter before transitioning into the world of Cloud Infrastructure, Linux Systems Administration, and DevOps Automation.

At Akumen Technologies, I focus on constructing resilient deployment pipelines, managing Dockerized containers, orchestrating AWS cloud resources, and automating repetitive tasks with Shell scripts and Ansible. I believe in writing self-healing infrastructure, maintaining zero-downtime deployments, and embedding security at every phase of the CI/CD pipeline.

With a solid background in problem solving, software engineering, and system design, I aim to bridge the gap between development teams and production infrastructure to deliver high-availability cloud solutions.`,
  typingItems: [
    'Linux Engineer',
    'Cloud Enthusiast',
    'DevOps Engineer',
    'Automation Learner',
    'Full Stack Developer',
  ],
  heroBadges: [
    { name: 'Linux', icon: 'SiLinux', color: 'from-amber-400 to-orange-500' },
    { name: 'Docker', icon: 'SiDocker', color: 'from-blue-400 to-cyan-500' },
    { name: 'Kubernetes', icon: 'SiKubernetes', color: 'from-blue-600 to-indigo-600' },
    { name: 'AWS', icon: 'SiAmazonaws', color: 'from-yellow-400 to-amber-600' },
    { name: 'Git', icon: 'SiGit', color: 'from-red-500 to-rose-600' },
    { name: 'Terraform', icon: 'SiTerraform', color: 'from-purple-500 to-indigo-500' },
    { name: 'Ansible', icon: 'SiAnsible', color: 'from-red-600 to-pink-600' },
    { name: 'Jenkins', icon: 'SiJenkins', color: 'from-blue-500 to-sky-600' },
    { name: 'Python', icon: 'SiPython', color: 'from-emerald-400 to-teal-600' },
  ],
};

export const STATS_DATA: StatItem[] = [
  {
    id: '1',
    value: '6+',
    label: 'Featured Projects',
    sublabel: 'Full Stack, DevOps & Mobile Apps',
    icon: 'FolderGit2',
  },
  {
    id: '2',
    value: '2+',
    label: 'Internships Completed',
    sublabel: 'DevOps & Flutter Engineering',
    icon: 'Briefcase',
  },
  {
    id: '3',
    value: '15+',
    label: 'Technologies Mastered',
    sublabel: 'Cloud, Linux, Tools & Frameworks',
    icon: 'Cpu',
  },
  {
    id: '4',
    value: '∞',
    label: 'Always Learning',
    sublabel: 'Cloud-Native & System Architecture',
    icon: 'Infinity',
  },
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: 'exp-1',
    role: 'DevOps Engineer Intern',
    company: 'Akumen Technologies',
    period: 'Present',
    type: 'Internship',
    location: 'Kerala, India',
    isCurrent: true,
    description:
      'Engineered continuous integration and continuous deployment pipelines, managed cloud environments on AWS, and optimized Linux server performance through shell automation.',
    responsibilities: [
      'Linux Administration & System Hardening: Configured Ubuntu/CentOS production servers, user permissions, systemd services, and SSH keys.',
      'Containerization & Microservices: Dockerized multi-stage web applications, reducing deployment footprint and image sizes.',
      'CI/CD Pipeline Automation: Built automated GitHub Actions and Jenkins pipelines for automated testing, linting, image building, and container deployments.',
      'Cloud Infrastructure Management: Managed Amazon Web Services (AWS EC2, S3, IAM, VPC, CloudWatch) for scalable cloud hosting.',
      'Infrastructure as Code & Config Management: Provisioned server environments using Terraform blueprints and automated software configuration with Ansible playbooks.',
      'Monitoring & Security: Implemented log monitoring, network topology setups, and basic security scanning within deployment workflows.',
    ],
    technologies: [
      'Linux',
      'Shell Scripting',
      'Git',
      'Docker',
      'CI/CD',
      'AWS',
      'Terraform',
      'Ansible',
      'Jenkins',
      'Networking',
      'Automation',
    ],
  },
  {
    id: 'exp-2',
    role: 'Flutter Developer Intern',
    company: 'Matexa Technologies',
    period: 'Previous',
    type: 'Internship',
    location: 'Kerala, India',
    isCurrent: false,
    description:
      'Developed cross-platform mobile applications in Dart using Flutter framework, integrated REST APIs, and optimized app performance.',
    responsibilities: [
      'Built responsive Flutter mobile user interfaces for Android & iOS targeting high performance and smooth animations.',
      'Integrated RESTful APIs using Provider state management for efficient real-time state updates.',
      'Collaborated with backend engineers using Git version control and Agile development workflow.',
      'Implemented local caching, Firebase database integrations, and secure token authentication.',
    ],
    technologies: ['Flutter', 'Dart', 'Provider', 'REST APIs', 'Firebase', 'Git', 'Agile'],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'DevOps & Cloud',
    iconName: 'Server',
    skills: [
      { name: 'Linux Administration', level: 92, isPrimary: true },
      { name: 'Docker & Containerization', level: 90, isPrimary: true },
      { name: 'AWS (EC2, S3, IAM, VPC)', level: 85, isPrimary: true },
      { name: 'Git & GitHub Workflows', level: 94, isPrimary: true },
      { name: 'CI/CD Pipelines (Jenkins / GitHub Actions)', level: 88, isPrimary: true },
      { name: 'Terraform (IaC)', level: 80, isPrimary: true },
      { name: 'Ansible', level: 78, isPrimary: true },
      { name: 'Kubernetes Fundamentals', level: 75, isPrimary: false },
      { name: 'Azure Fundamentals', level: 72, isPrimary: false },
      { name: 'Networking & Security', level: 84, isPrimary: false },
    ],
  },
  {
    title: 'Programming & Automation',
    iconName: 'Code',
    skills: [
      { name: 'Python', level: 88, isPrimary: true },
      { name: 'Bash / Shell Scripting', level: 90, isPrimary: true },
      { name: 'JavaScript / TypeScript', level: 85, isPrimary: true },
      { name: 'Dart', level: 82, isPrimary: false },
      { name: 'C', level: 75, isPrimary: false },
    ],
  },
  {
    title: 'Frontend Development',
    iconName: 'Layout',
    skills: [
      { name: 'React', level: 88, isPrimary: true },
      { name: 'Flutter', level: 85, isPrimary: true },
      { name: 'Tailwind CSS', level: 90, isPrimary: true },
      { name: 'HTML5 & CSS3', level: 92, isPrimary: false },
    ],
  },
  {
    title: 'Backend & Databases',
    iconName: 'Database',
    skills: [
      { name: 'Node.js & Express', level: 84, isPrimary: true },
      { name: 'REST APIs', level: 90, isPrimary: true },
      { name: 'MongoDB', level: 82, isPrimary: true },
      { name: 'Firebase', level: 80, isPrimary: false },
    ],
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'project-1',
    title: 'Legal Case Management System',
    category: 'Enterprise Web App',
    subtitle: 'Comprehensive Legal Workflow & Document Tracking SaaS',
    description:
      'An enterprise-grade web platform for law firms and legal practitioners to track ongoing litigation, manage clients, handle confidential documents, and generate automated case reports.',
    fullDescription:
      'Legal Case Management System solves the complex documentation and scheduling requirements of modern legal practice. Built with a scalable architecture, it features real-time case status updates, document uploads with role-based access control, client communication logs, interactive calendar schedules, and detailed analytics for firm managers.',
    features: [
      'Comprehensive Case Tracking & History Timeline',
      'Client Portal & Contact Relationship Management',
      'Encrypted Document Upload & Versioning',
      'Interactive Analytics Dashboard & Performance Reports',
      'Role-Based Access Control (RBAC) & Secure JWT Auth',
      'Automated Hearing Reminders & Notification System',
    ],
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Docker', 'AWS S3'],
    githubUrl: 'https://github.com/MohammedShibilP/legal-case-management',
    liveUrl: 'https://legal-case-management.demo.app',
    highlights: ['Microservice Ready', 'Docker Containerized', 'Enterprise RBAC'],
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'project-2',
    title: 'FastTrackedUHub',
    category: 'EdTech SaaS',
    subtitle: 'Next-Gen Educational & Student Portal Platform',
    description:
      'A full-featured EdTech SaaS platform designed to streamline course delivery, student progress analytics, admin content management, and online assessments.',
    fullDescription:
      'FastTrackedUHub offers a unified ecosystem for students and educators. It incorporates interactive video modules, assignment tracking, automated grading algorithms, student progress dashboards, and course monetization features.',
    features: [
      'Student Dashboard with Visual Learning Curves',
      'Admin Control Panel for Course & Content Publishing',
      'Real-Time Student Engagement Analytics',
      'Course Enrollment & Modular Progress Tracking',
      'Secure User Authentication & Profile Management',
      'Responsive Mobile-First Interface',
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB', 'AWS EC2', 'GitHub Actions'],
    githubUrl: 'https://github.com/MohammedShibilP/fasttrackedu-hub',
    liveUrl: 'https://fasttrackedu.demo.app',
    highlights: ['CI/CD Pipeline', 'High Throughput', 'Responsive UI'],
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'project-3',
    title: 'Oxentra Corporate Redesign',
    category: 'Corporate Website',
    subtitle: 'High-Performance Cyberpunk Corporate Interface',
    description:
      'A complete UI/UX and architectural redesign for Oxentra, focusing on ultra-fast loading speed, interactive micro-animations, glassmorphic visual aesthetics, and flawless SEO ranking.',
    fullDescription:
      'Designed to elevate Oxentra brand presence, this redesign features sleek visual components, dark glassmorphism, Framer Motion scroll animations, optimized image assets, and 100/100 Lighthouse performance metrics across mobile and desktop devices.',
    features: [
      'Futuristic Glassmorphic Interface Design',
      'Smooth Scroll & Micro-Animations with Framer Motion',
      'Sub-Second Page Load Times & 100/100 Lighthouse Score',
      'Comprehensive SEO Meta Optimizations',
      'Fully Responsive Across All Viewports',
      'Interactive Product Showcase Carousel',
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite', 'Vercel'],
    githubUrl: 'https://github.com/MohammedShibilP/oxentra-redesign',
    liveUrl: 'https://oxentra.demo.app',
    highlights: ['100 Lighthouse', 'Framer Motion', 'Glassmorphism'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'project-4',
    title: 'GodsEye - AI Accident Detection System',
    category: 'AI & Security',
    subtitle: 'Real-Time Surveillance Accident Detection with YOLOv8 & Blockchain',
    description:
      'An intelligent computer vision system leveraging YOLOv8 for instant traffic accident detection, logging immutable incident records on IPFS/Blockchain and notifying emergency services in real time.',
    fullDescription:
      'GodsEye monitors CCTV feeds using custom-trained YOLOv8 deep learning models. Upon detecting a collision or vehicular emergency, it captures video frames, generates a localized incident alert, stores timestamped forensic proof onto IPFS decentralized storage, and broadcasts urgent alerts to nearby response teams.',
    features: [
      'Real-Time Accident Detection using YOLOv8 AI Model',
      'Decentralized Immutable Proof Storage via IPFS & Blockchain',
      'Emergency Dispatch Alert System with GPS Coordinates',
      'Interactive Live Surveillance Camera Feed Dashboard',
      'Accident Severity Categorization & Confidence Score Logging',
      'Full MongoDB Historical Log Analytics',
    ],
    techStack: ['Python', 'YOLOv8', 'React', 'MongoDB', 'IPFS', 'Blockchain', 'FastAPI'],
    githubUrl: 'https://github.com/MohammedShibilP/godseye-ai-accident-detection',
    liveUrl: 'https://godseye-ai.demo.app',
    highlights: ['YOLOv8 Deep Learning', 'IPFS Blockchain', 'Real-Time Telemetry'],
    image: 'https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'project-5',
    title: 'Image Steganography Suite',
    category: 'Cybersecurity',
    subtitle: 'LSB Encryption & Hidden Payload Security Tool',
    description:
      'A cybersecurity application enabling secret text payload insertion and extraction inside digital image files using Least Significant Bit (LSB) steganographic encryption.',
    fullDescription:
      'Image Steganography Suite enables secure communication by concealing confidential data inside cover images without visually altering the host image. Built with custom Python image processing algorithms and a sleek React frontend interface.',
    features: [
      'Least Significant Bit (LSB) Spatial Domain Steganography',
      'AES Encryption for Secret Text Payloads Prior to Embedding',
      'Zero Visual Distortion Cover Image Generation',
      'Instant Stegano-Image Extraction & Integrity Verification',
      'Support for PNG, BMP, and High-Resolution Images',
      'Interactive GUI for Instant Image Comparison',
    ],
    techStack: ['Python', 'OpenCV', 'React', 'Tailwind CSS', 'Flask'],
    githubUrl: 'https://github.com/MohammedShibilP/image-steganography-security',
    liveUrl: 'https://stegano-security.demo.app',
    highlights: ['LSB Encryption', 'AES Payload Guard', 'OpenCV Engine'],
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'project-6',
    title: 'Restaurant Management Suite',
    category: 'Mobile Application',
    subtitle: 'Cross-Platform Order & Table Management App',
    description:
      'A cross-platform Flutter application built for restaurant staff and diners to manage real-time table reservations, digital menu ordering, kitchen ticket display, and Firebase synchronization.',
    fullDescription:
      'Restaurant Management Suite simplifies dining operations through instant synchronization between waitstaff devices, kitchen screens, and cashier portals. Features live Firebase Firestore database synchronization and offline capabilities.',
    features: [
      'Real-Time Kitchen Order Display (KDS) Synchronization',
      'Interactive Floor Plan & Table Availability Grid',
      'Digital Menu Categorization & Modifier Options',
      'Firebase Real-time Database & Authentication Integration',
      'Instant Bill Generation & Payment Status Updates',
      'Cross-Platform Android & iOS Deployment',
    ],
    techStack: ['Flutter', 'Dart', 'Firebase', 'Provider', 'REST API'],
    githubUrl: 'https://github.com/MohammedShibilP/restaurant-management-flutter',
    liveUrl: 'https://restaurant-app.demo.app',
    highlights: ['Flutter Mobile', 'Firebase Real-time', 'Kitchen Display System'],
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80',
  },
];

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    id: 'cert-1',
    title: 'DevOps Engineering Internship',
    issuer: 'Akumen Technologies',
    date: '2026',
    badgeColor: 'from-cyan-500 to-blue-600',
    icon: 'Server',
    topics: ['Linux Administration', 'Docker', 'AWS Infrastructure', 'CI/CD Pipelines', 'Ansible', 'Terraform'],
  },
  {
    id: 'cert-2',
    title: 'Linux Systems & Shell Automation',
    issuer: 'Linux Foundation / Professional Training',
    date: '2025',
    badgeColor: 'from-amber-500 to-orange-600',
    icon: 'Terminal',
    topics: ['Systemd Services', 'Bash Scripting', 'SSH Hardening', 'Process Management', 'Network Tools'],
  },
  {
    id: 'cert-3',
    title: 'AWS & Cloud Infrastructure Fundamentals',
    issuer: 'Cloud Education',
    date: '2025',
    badgeColor: 'from-purple-500 to-indigo-600',
    icon: 'Cloud',
    topics: ['AWS EC2', 'AWS S3 Storage', 'VPC Networking', 'IAM Policies', 'CloudWatch Monitoring'],
  },
  {
    id: 'cert-4',
    title: 'Python Programming & Automation',
    issuer: 'Tech Academy',
    date: '2024',
    badgeColor: 'from-emerald-500 to-teal-600',
    icon: 'Code',
    topics: ['Python 3', 'Data Structures', 'Automation Scripts', 'REST API Integration', 'File Handling'],
  },
  {
    id: 'cert-5',
    title: 'Flutter Mobile App Development Internship',
    issuer: 'Matexa Technologies',
    date: '2024',
    badgeColor: 'from-pink-500 to-rose-600',
    icon: 'Smartphone',
    topics: ['Flutter Framework', 'Dart Language', 'Provider State Management', 'REST API Integration', 'Firebase'],
  },
];

export const GITHUB_METRICS = {
  username: 'MohammedShibilP',
  totalContributions: 642,
  repositoriesCount: 24,
  followers: 48,
  stars: 112,
  languages: [
    { name: 'Python', percentage: 35, color: '#3572A5' },
    { name: 'TypeScript / React', percentage: 28, color: '#3178C6' },
    { name: 'Shell / Bash Scripting', percentage: 18, color: '#89E051' },
    { name: 'Dart / Flutter', percentage: 12, color: '#00B4AB' },
    { name: 'HCL / Terraform', percentage: 7, color: '#844FBA' },
  ],
  popularRepos: [
    {
      name: 'devops-automation-scripts',
      description: 'Production-ready bash scripts, ansible playbooks, and terraform modules for AWS & Linux.',
      stars: 42,
      forks: 18,
      language: 'Shell',
    },
    {
      name: 'legal-case-management',
      description: 'Enterprise React & Node.js law firm case tracking application with Docker support.',
      stars: 29,
      forks: 11,
      language: 'TypeScript',
    },
    {
      name: 'godseye-ai-accident-detection',
      description: 'Real-time CCTV YOLOv8 accident detection logged onto IPFS decentralized blockchain.',
      stars: 26,
      forks: 9,
      language: 'Python',
    },
  ],
};
