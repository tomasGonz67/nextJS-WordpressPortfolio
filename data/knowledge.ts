// Knowledge base for the AI chatbot
export const knowledge = 
  {
    "personalInfo": {
      "name": "Tomas Gonzalez",
      "role": "Full-Stack Software Engineer",
      "location": "New Jersey, USA",
      "github": "https://github.com/tomasGonz67",
      "jobStatus": "Actively looking for work",
      "targetRole": "Full-Stack Engineer, Backend Engineer, Software Engineer, or DevOps/Cloud Engineer — open to any tech role that leverages strong backend, infrastructure, security, or AI/ML skills",
      "workPreference": "Fully open — remote, hybrid, in-person, out of state. No restrictions.",
      "companyPreference": "Open to any company size or type — startups, mid-size, or large tech. Thrives in fast-moving environments but adapts to any team structure."
    },
    "aiWorkflow": {
      "summary": "Tomas actively uses AI tools throughout his entire engineering workflow — not just for Cadooga or any single job, but across all projects and day-to-day development.",
      "tools": [
        "Claude Code — used for writing, debugging, refactoring, and shipping code faster across all projects",
        "MCP (Model Context Protocol) — set up MCP server integrations to connect AI directly to tools like Webflow for AI-assisted frontend development",
        "Groq API — integrated into portfolio chatbot for fast, cost-efficient LLM inference",
        "HuggingFace — evaluated and tested open-source models for local and cloud deployment",
        "AI-assisted development is part of his standard workflow — he uses it where it adds real value while maintaining full ownership and understanding of the output"
      ]
    },
    "strength-of-skills": {
      "strong": [
        "AI/ML",
        "Cloud Infrastructure",
        "DevOps",
        "Backend Development",
        "Security",
        "Full-Stack Development"
      ],
      "moderate": [
        "Frontend Development",
        "Networking",
        "Databases",
        "Mobile Development",
        "Quality Assurance",
        "Real-Time Systems (WebSockets)"
      ],
      "less_strong": [
        "Blockchain/Web3",
        "UI/UX Design",
      ]
    },

    "strength-of-soft-skills": {
      "strong": [
        "Leadership and initiative",
        "Mentoring",
        "HIGHLY Independent Problem Solving",
        "Cross-Functional Collaboration",
        "Adaptability",
        "Problem Solving",
        "Self-motivation and drive",
        "I have no weaknesses",
      ],
    },
    "skills": {
      "programming_languages": [
        "Python",
        "JavaScript",
        "TypeScript",
        "YAML",
        "PHP",
        "Bash",
        "SQL",
        "HTML",
        "CSS",
        "C#",
        "Java",
        "C",
        "C++",
      ],
      "frameworks_and_libraries": [
        "React",
        "React Native",
        "Next.js",
        "Express.js",
        "Node.js",
        "Socket.io",
        "OpenAI API",
        "MongoDB Compass",
        "Playwright",
        "Hexo",
        "Tailwind CSS",
        "Nodemailer",
        "Zustand",
        "Supertest",
        "Jest"
      ],
      "ai_ml": [
        "InsightFace",
        "RetinaFace",
        "CLIP",
        "Face Embeddings",
        "Cosine Similarity Search",
        "Vector Databases",
        "RAG / Lite-RAG",
        "LLM Integrations (HuggingFace, Groq, OpenAI)",
        "AI Image Generation (Stable Diffusion)",
        "Understanding VRAM, GPU, Parameters, and Percision.",
        "TensorFlow for deployment"
      ],
      "devops": [
        "Docker",
        "GitHub Actions",
        "CI/CD Pipelines",
        "Linux Server Management",
        "Environment Automation",
        "Monitoring & Logging",
        "RabbitMQ",
        "NAGIOS",
        "Traefik"
      ],
      "cloud_infrastructure": [
        "AWS EC2",
        "AWS VPC",
        "AWS NAT / Routing Tables",
        "AWS S3",
        "AWS Glue (ETL)",
        "Load Balancers",
        "Private Networking",
        "IAM Security",
        "DigitalOcean Droplets",
        "Let's Encrypt SSL",
        "Docker Compose",
      ],
      "networking": [
        "DNS",
        "Domain Registration",
        "Domain Hosting",
        "HTTP/HTTPS",
        "FPS",
        "TCP/IP",
        "Firewall",
        "Websocket",
        "RabbitMQ/Message Queuing",
        "Distributed Systems",
        "API calls"
      ],
      "databases": [
        "Qdrant (Vector DB)",
        "Redis",
        "PostgreSQL",
        "MySQL",
        "MongoDB"
      ],
      "web3_blockchain": [
        "Solidity",
        "Hardhat",
        "Smart Contract Deployment",
        "Ethereum / EVM",
        "Web3 Integration (web3dart, ethers.)"
      ],
      "tools_and_platforms": [
        "Git",
        "Jira",
        "Apache",
        "PM2",
        "Figma",
        "YAML",
        "REST APIs",
        "JSON / TOON Format",
      ],
      "soft_skills": [
        "Team Leadership",
        "Mentoring",
        "System Architecture Planning",
        "Independent Problem Solving",
        "Cross-Functional Collaboration"
      ]
    },
    "workExperience": [
      {
        "company": "Eleutheria",
        "role": "Creator / Solo Developer",
        "start": "2025-12-01",
        "end": "Present",
        "live": "https://eleutheria.lol",
        "responsibilities": {
          "summary": "Designed, developed, and shipped a full-stack anonymous community platform from scratch — solo. Live at eleutheria.lol.",
          "features": [
            "Forums with threaded comments and nested replies",
            "Real-time group chatrooms via WebSockets (Socket.io)",
            "Random 1-on-1 anonymous chat matching",
            "Planned/private 1-on-1 direct messaging",
            "Session-based anonymous identity with Greek-themed usernames and discriminators — no sign-up required",
            "Like/dislike reactions on posts",
            "User and content reporting system",
            "Notification system for replies and chat requests"
          ],
          "security": [
            "Parameterized queries everywhere — no SQL injection surface",
            "SameSite strict + HttpOnly + Secure cookies for CSRF and XSS protection",
            "Multi-layer rate limiting (IP + session) across all endpoints",
            "50KB body size limit to prevent JSON-bomb DoS",
            "Row-level locking (FOR UPDATE SKIP LOCKED) to prevent race conditions in concurrent user matching",
            "Dedicated security test suite covering auth bypass, IDOR, SQL injection, oversized payloads, rate limiting",
            "Pen tested across 8 attack categories — all passed",
            "GDPR/CCPA/ECPA-compliant data retention with automated background jobs",
            "Cookie consent banner — Google Analytics only loads with explicit user consent"
          ],
          "devops": [
            "Containerized with Docker Compose — identical setup across dev, staging, and prod",
            "Deployed to DigitalOcean behind Traefik reverse proxy with Let's Encrypt SSL auto-renewal",
            "GitHub Actions CI/CD pipeline: tests → build → push to Docker Hub → auto-deploy to staging",
            "Separate staging and production environments",
            "DigitalOcean monitoring alerts (CPU + disk), UptimeRobot external uptime checks",
            "Google Analytics with GDPR-compliant consent banner"
          ],
          "tech_stack": [
            "Next.js",
            "TypeScript",
            "React",
            "Tailwind CSS",
            "Zustand",
            "Express.js",
            "Socket.io",
            "PostgreSQL",
            "Docker",
            "Docker Compose",
            "Traefik",
            "GitHub Actions",
            "DigitalOcean",
            "Let's Encrypt",
            "Jest",
            "Supertest"
          ]
        }
      },
      {
        "company": "Cadooga (Startup)",
        "role": "Full Stack Engineer Lead → Full Stack Engineer",
        "note": "Started as Full Stack Engineer Lead (founding team). After company-wide layoffs reduced the team, continued as Full Stack Engineer until April 2026.",
        "start": "2025-06-04",
        "end": "2026-04-01",
        "responsibilities": {
          "ai": [
            "Architected and deployed an end-to-end AI-powered MVP integrating reverse image search, computer vision, automation, and scalable backend services",
            "Designed a custom reverse image search system using InsightFace (buffalo_l) for embeddings and RetinaFace for detection",
            "Implemented Qdrant vector database with cosine similarity search for high-accuracy facial matching",
            "Built full embedding pipelines for ingestion, preprocessing, embedding generation, and large-scale retrieval",
            "Applied BFS traversal logic to optimize dataset processing and image-matching workflows",
            "Integrated Redis caching to accelerate lookups and reduce inference latency",
            "Developed custom scrapers and automated dataset pipelines to scale data ingestion"
          ],
          "cloud_infrastructure_and_networking": [
            "Architected, deployed, and managed AWS infrastructure including VPCs, EC2 instances, subnets, routing tables, NAT gateways, and load balancers",
            "Designed secure private networking environments and enforced strict IAM policies and port restrictions",
            "Built a serverless ETL pipeline using AWS Glue to migrate 128 GB of data from an external S3 bucket into internal systems"
          ],
          "leadership": [
            "Translated CEO-level product goals into actionable engineering plans and scalable architecture",
            "Recruited and hired an engineer, growing the technical team while maintaining high standards for code quality and collaboration",
            "Mentored the engineer on cloud infrastructure, Docker, architectural patterns, and best engineering practices",
            "Conducted code reviews, architecture walkthroughs, and infrastructure sessions to ensure internal consistency",
            "Initiated internal restructuring and processes including Jira task management, QA/testing protocols, structural/positioning and team standups"
          ],
          "development": [
            "Built automated Playwright-based workflows for a public records search system to collect data across all 50 U.S. states while navigating legal constraints.",
            "Implemented backend logic in ExpressJS with a structured SQL database for accurate, high-performance record ingestion and retrieval for a public records search system.",
            "Implemented frontend logic in React Native to create a user-friendly interface for the public records search system.",
            "Configured an MCP server integration with Webflow, enabling AI-assisted frontend development directly within the CMS to accelerate development speed.",
          ],
          "cross_functional": [
            "Collaborated with leadership to define technical roadmaps, budgets, timelines, and launch strategy",
            "Managed vendor relationships to secure datasets and integrate third-party services",
            "Implemented scalable engineering practices that accelerated development cycles and reduced contractor dependency",
            "Worked across product, data, and executive teams to align technology design with business direction"
          ],
          "tech_stack": [
            "Python",
            "JavaScript",
            "TypeScript",
            "Node.js",
            "React Native",
            "Playwright",
            "InsightFace",
            "RetinaFace",
            "Qdrant",
            "Redis",
            "SQL",
            "AWS (EC2, VPC, S3, NAT, Load Balancer, Routing Tables, Glue)",
            "Docker",
            "GitHub Actions",
            "Linux",
            "Jira"
          ]
        }
      },
      {
        "company": "TheoForge (Startup)",
        "role": "Full-Stack / DevOps Engineer",
        "start": "2024-12-01",
        "end": "2025-05-30",
        "responsibilities": {
          "AI/ML": [
            "Deployed and configured Qdrant vector database container — first hands-on experience with vector search infrastructure",
            "Worked on AI model training pipelines and knowledge graph integration"
          ],
          "devops": [
            "Wrote and maintained YAML-based CI/CD pipeline configurations and internal automation tooling",
            "Managed environment setup, deployment processes, and workflow automation across dev and production",
            "Identified and resolved pipeline inefficiencies, reducing manual overhead and improving deployment speed"
          ],
          "cloud_infrastructure": [
            "Provisioned, maintained, and troubleshot cloud infrastructure with a focus on stability and production-readiness",
            "Optimized cloud resources for scalability and cost-efficiency"
          ],
          "backend_development": [
            "Built original backend API from scratch using Python, Jinja, and FastAPI",
            "Owned API development, data processing workflows, and backend performance improvements",
            "Debugged and resolved backend issues independently to keep the application stable"
          ],
          "leadership": [
            "Reviewed junior developer work and delivered actionable feedback to maintain code quality",
            "Operated independently — consistently solved problems without direct supervision",
            "Received consistent positive recognition from senior engineers with 10+ years of experience"
          ],
          "tech_stack": [
            "Python",
            "FastAPI",
            "TypeScript",
            "JavaScript",
            "YAML",
            "Cloud Infrastructure",
            "DevOps Automation",
            "CI/CD Pipelines"
          ]
        }
      }
    ],
    "education": [
      {
        "type": "Formal",
        "institution": "New Jersey Institute of Technology (NJIT)",
        "degree": "Bachelor of Science in Information Technology",
        "focus": "Web Development",
        "minor": "Computer Science",
        "graduation": "2025",
        "highlights": [
          "Focused on frontend and backend development",
          "Completed full-stack software engineering coursework",
          "Built multiple real-world projects through group collaborations",
          "Developed skills in algorithms and runtime efficiency",
          "Acted as a leader during team-based software projects",
          "Worked under experience engineers to build real-world projects",
          "DevOps & Cloud Infrastructure",
          "AI / LLM Integrations"
        ]
      },
      {
        "type": "Self-Taught",
        "focus": "Web Development",
        "highlights": [
          "Built multiple real-world projects through self-study",
          "Self taught React, ExpressJS, Socket.io",
          "Made personal projects for fun to learn new technologies and improve my skills"
        ]
      }
    ],
    "projects": [
      {
        "id": "eleutheria",
        "title": "Eleutheria",
        "tech": ["Next.js", "TypeScript", "React", "Tailwind CSS", "Zustand", "Express.js", "Socket.io", "PostgreSQL", "Docker", "Docker Compose", "Traefik", "Let's Encrypt", "GitHub Actions", "DigitalOcean", "Jest", "Supertest", "Google Analytics"],
        "type": "Full-Stack Web Application — Live Production",
        "github": "https://github.com/tomasGonz67/eleutheria",
        "live": "https://eleutheria.lol",
        "summary": "Eleutheria is my strongest and most complete project — a full-stack anonymous community platform designed, built, and deployed entirely solo from scratch. It is live in production at eleutheria.lol with real users.",
        "architecture": "Next.js frontend (SSR + SSG) communicates with an Express.js backend via REST API and Socket.io for real-time features. PostgreSQL handles persistence. Traefik acts as reverse proxy with path-based routing — /api/* and /socket.io/* go to the backend, everything else to the frontend. All running in Docker Compose on separate DigitalOcean staging and production droplets.",
        "features": [
          "Forums with threaded nested comments and recursive comment count queries",
          "Global Feed aggregating posts across all forums",
          "Real-time group chatrooms via WebSockets (Socket.io) with per-socket rate limiting",
          "Random 1-on-1 anonymous chat matching with row-level locking (FOR UPDATE SKIP LOCKED) to prevent race conditions",
          "Planned/private 1-on-1 direct messaging with floating minimized chat windows",
          "Session-based anonymous identity: Greek-themed username + 8-character discriminator, no sign-up required",
          "Like/dislike reactions on posts",
          "User and content reporting system with report queue",
          "Notification system for replies and incoming chat requests",
          "Smart notification suppression — no ping if user is already in that chat (focusedSessions)",
          "Multi-tab awareness — userSockets map tracks all open tabs per user",
          "Background session expiration job — handles tab crashes and network drops client-side can't cover",
          "Contact form with rate limiting",
          "Cookie consent banner — Google Analytics only loads with explicit user consent (GDPR compliant)"
        ],
        "security": [
          "Parameterized queries everywhere — zero SQL injection surface, pen tested and confirmed",
          "SameSite: strict + HttpOnly + Secure cookies — CSRF and XSS protection",
          "Multi-layer rate limiting: global IP limiter, per-session message limiter, per-socket Socket.io limiter, contact form limiter",
          "50KB body size limit on all endpoints — prevents JSON-bomb DoS attacks",
          "Row-level locking (FOR UPDATE SKIP LOCKED) — prevents double-matching race conditions under concurrent load",
          "IDOR protection — all private chat endpoints verify the requesting user is a participant",
          "Global error handler returns clean JSON — no stack traces or internal errors leaked to clients",
          "No sensitive data (session tokens, etc.) in console logs",
          "Dedicated security test suite: auth bypass, IDOR, SQL injection, oversized payloads, rate limiting — 24 automated tests",
          "Pen tested on staging across 8 attack categories (SQL injection, XSS, auth bypass, cookie manipulation, rate limiting, Socket.io abuse, IDOR, oversized payloads) — all passed",
          "GDPR/CCPA/ECPA-compliant data retention: automated background jobs purge user data on schedule while preserving reported content and law enforcement holds",
          "IP address and browser fingerprint tracking for moderation and ban evasion resistance"
        ],
        "devops_and_infrastructure": [
          "Fully containerized with Docker Compose — identical stack across development, staging, and production",
          "Traefik reverse proxy handles SSL termination, HTTP to HTTPS redirect, and path-based routing with explicit priority rules",
          "Let's Encrypt SSL with automatic cert issuance and renewal — zero manual cert management",
          "Separate staging (68.183.50.71) and production (68.183.147.95 / eleutheria.lol) DigitalOcean droplets",
          "GitHub Actions CI/CD pipeline on the staging branch: runs full Jest test suite, then builds linux/amd64 Docker images, pushes to Docker Hub, SSHes into staging and deploys automatically — deploy is gated on tests passing",
          "Automated disk pruning after every deploy (docker system prune)",
          "DigitalOcean built-in monitoring with alerts for CPU and disk above 80% for 5+ minutes",
          "UptimeRobot external uptime monitoring — pings every 5 minutes, emails on downtime",
          "Google Analytics with GDPR-compliant consent banner",
          "Google Search Console verified and sitemap submitted for SEO indexing",
          "Cross-platform Docker builds using docker buildx for Apple Silicon to linux/amd64 deployment"
        ],
        "database_design": [
          "PostgreSQL with migration-based schema management — numbered idempotent SQL files",
          "withTransaction pattern with proper rollback used for all multi-step writes",
          "FOR UPDATE SKIP LOCKED for concurrent matching without double-booking",
          "Soft deletes with automated hard-delete retention jobs (30 days for posts, 180 days for messages)",
          "Recursive CTEs for threaded comment count aggregation",
          "OFFSET/LIMIT pagination across all list endpoints",
          "Session rolling — last_seen debounced to avoid write amplification",
          "IP change logging and browser fingerprint snapshots for moderation"
        ],
        "testing": [
          "Jest + Supertest for all backend API tests",
          "socket.io-client for real-time Socket.io integration tests",
          "Dedicated security.test.js: 24 tests covering auth bypass, IDOR, SQL injection, oversized payloads, rate limiting",
          "Tests run in CI pipeline — deploy is blocked if any test fails",
          "--forceExit flag handles retention job setInterval cleanup",
          "Postgres service container in GitHub Actions for realistic test environment",
          "Migrations run automatically in CI before tests"
        ],
        "legal_and_compliance": [
          "Internal legal policy document covering ECPA, FOSTA-SESTA, NCMEC CSAM reporting (18 U.S.C. § 2258A), GDPR, and CCPA",
          "Data retention schedule: soft-deleted posts 30 days, private messages 180 days, IP/fingerprint 180 days after last activity",
          "Reported content retained indefinitely until resolved",
          "Law enforcement holds managed manually until legal_hold flag is implemented",
          "Age verification (18+) stated in Terms of Service",
          "Privacy policy explicitly covers Google Analytics consent and data collection"
        ]
      },
      {
        "id": "ai-image-generation",
        "title": "AI Image Generation",
        "tech": ["Stable Diffusion", "OpenAI"],
        "summary": "I created a custom AI image generation system that uses the Stable Diffusion model to generate images based on a user's prompt.",
        "github": "https://github.com/tomasGonz67/is322AIDemo",
      },
      {
        "id": "Fitness-Tracker-App",
        "title": "Fitness Tracker App",
        "tech": ["React", "Firebase", "TailwindCSS"],
        "summary": "My first very big web development project. A Fitness Tracker App that allows users to track their fitness goals and progress.",
        "live": "https://host-472cc.web.app"
      },
      {
        "id": "dog-app",
        "title": "dog-picture-app",
        "tech": ["MERN Stack", "MongoDB", "Express", "React", "Node.js"],
        "summary": "A dog picture app that uses the Dog API to fetch images of dog pictures and display them in a grid. Also lets real users make comments on the pictures.",
        "github": "https://github.com/tomasGonz67/IT302-tpg3-Dog/tree/it302Phase5"
      },
      {
        "id": "quake2-mod",
        "title": "Quake 2 Mod",
        "tech": ["C"],
        "summary": "A Quake 2 mod that changes weapon functionality, adds a level up system, adds special upgrades",
        "github": "https://github.com/tomasGonz67/q2mod",
        "live": ""
      },
      {
        "id": "quake4-mod",
        "title": "Quake 4 Mod",
        "tech": ["C++", "Quake 4 SDK"],
        "summary": "A Quake 4 mod that changes weapon functionality, adds a level level-up system, adds special abilities/upgrades, spawns unlimited enemies in waves, and has new UI elements.",
        "github": "https://github.com/tomasGonz67/Game-Mod-Q4",
        "live": ""
      },
      {
        "id": "wizard-mcpAI-be",
        "title": "Wizardry AI",
        "tech": ["ExpressJS", "OpenAI", "JsonRPC/MCP"],
        "summary": "A backend for a Wizardry AI application that uses OpenAI's API to generate a wizardry story based on a user's input. It uses JsonRPC/MCP to communicate with the frontend and with Facebook.",
        "type": "Web Application",
        "github": "https://github.com/tomasGonz67/wizard-mcpAI-be",
        "live": ""
      },
      {
        "id": "terra-intel-ai",
        "title": "Terra Intel AI",
        "tech": ["SQLite", ".NET MAUI", "OpenAI", "MVVM"],
        "summary": "An adventure-themed .NET MAUI mobile app that calls OpenAI for a location-based fact, then returns that fact to a user.",
        "type": "Mobile AI Application",
        "github": "https://github.com/tomasGonz67/TerraIntel-AI",
        "live": ""
      },
      {
        "id": "nft-minting-app",
        "title": "NFT Minting App",
        "tech": ["Flutter", "web3dart", "Hardhat", "Ethereum", "Infura"],
        "summary": "A cross-platform NFT minting dApp allowing users to view and mint NFTs through a Flutter interface connected to Ethereum smart contracts.",
        "type": "Mobile + Web3 App",
        "github": "https://github.com/tomasGonz67/blockChain"
      },
      {
        "id": "portfolio-ai",
        "title": "AI-Powered Portfolio",
        "tech": ["Next.js", "Strapi CMS", "Lite-RAG", "TOON Format", "Groq"],
        "summary": "A fully interactive portfolio featuring an AI assistant powered by Lite-RAG retrieval and token-efficient TOON data representation.",
        "ai-explenation": "I made this chatbot by carefully weighing the pros and cons of using an API AI vs hosting a hugging facemodel on cloud. I looked at the cost of all the different options, and found that groq API would be the most cost effective and efficient option for this project. I then created a chatbot that uses the Lite-RAG system to retrieve the data from a json file. I chose this because using a vector data base would be over kill for this project. I then experimented with the new TOON format to minimize the cost of tokens being spent. I found that for this specific file, JSON was slightly more cost effective. However under different data sets, TOON could be more cost effective.",
        "type": "Web Application",
        "github": "https://github.com/tomasGonz67/nextJS-WordpressPortfolio",
        "live": "https://tomas-gonzalez-aiportfolio.vercel.app"
      },
      {
        "id": "hexo-blog",
        "title": "Hexo Blog Platform",
        "tech": ["Hexo", "GitHub Actions", "Docker", "Playwright"],
        "summary": "A Markdown-based blog deployed with CI/CD using GitHub Actions and tested with Playwright for stability.",
        "type": "Static Site + CI/CD",
        "github": "https://github.com/tomasGonz67/is373hexo",
        "live": "https://tomasgonz67.github.io/is373hexo/"
      },
      {
        "id": "ecommerce-app",
        "title": "Wordpress E-Commerce Project",
        "tech": ["Wordpress", "WooCommerce", "PHP"],
        "summary": "A complete e-commerce web app featuring product storage, search, and WooCommerce payment integration.",
        "type": "WordPress",
        "note": "No live link — site is no longer hosted."
      },
      {
        "id": "fantasy-ufc-app",
        "title": "Fantasy UFC App",
        "tech": ["RabbitMQ", "PHP", "SQL", "HTML", "CSS", "JavaScript, NAGIOS"],
        "summary": "A full stack IT project that uses API's to get data and display it in a user friendly way, stores the data in a database for caching, monitors with NAGIOS, and has real user interaction with the data and database.",
        "type": "Full-Stack Web App",
        "github": "https://github.com/tomasGonz67/it490",
        "live": ""
      },
      {
        "id": "Holistic-Hands-App",
        "title": "Holistic Hands App",
        "tech": ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "FTPS"],
        "summary": "A Holistic Hands App uses a MySQL database to store user information and a PHP backend to handle the database operations. Used FTPS to transfer files to the webserver."
      },
      {
        "id": "game-of-games",
        "title": "Game of Games",
        "tech": ["React", "Node.js", "Socket.io"],
        "summary": "A realtime multiplayer card game that allows users to play cards with each other.",
        "live": ""
      },
      {
        "id": "tree-top-fitness",
        "title": "Tree Top Fitness",
        "tech": ["HTML", "CSS", "JavaScript", "mailchimp"],
        "summary": "Tree Top Fitness is a functional fitness gym concept built using the Explorer brand archetype and persuasion principles like reciprocity, social proof, and liking. I developed full business documentation including a competitive analysis, SWOT analysis, user personas, sales funnel, user stories, and UX testing to design a compelling, research-backed fitness brand experience.",
        "github": "https://github.com/tomasGonz67/IS219Final",
        "live": "https://is-219-final-gamma.vercel.app"
      },
      {
        "id": "mock-blog-website",
        "title": "Mock Blog Website",
        "tech": ["Drupal Headless CMS", "Docker", "Digital Ocean", "Traefik", "DNS"],
        "summary": "A mock blog website that uses Docker to host microservices. Including a Drupal Headless CMS to manage the content, traefik as the reverse proxy, and a website hosted with nameCheap Domain that pulls from the drupal CMS.",
        "github": "https://github.com/vvh24/IS373UI?tab=readme-ov-file"
      }
    ],
    "fitnessAchievements": [
      "sub 4:30 mile",
      "9:53 2 mile",
      "16:21 5k",
      "312LB Front Squat",
      "225Lb Push Press",
      "235LB Clean and Jerk",
      "170LB Snatch",
      "340LB Back Squat",
      "100LB + Pullups",
      "25 Pullups",
      "58 Pushups",
      "8 Minute Plank",
      "205LB Bench Press"
    ],
    "personality": {
      "self_description": [
        "I’m a driven, disciplined, and relentlessly motivated engineer who takes full ownership of problems and refuses to quit until things work. I naturally step into leadership roles, lift the team around me, and thrive in fast-paced, high-pressure environments. I break down complex challenges, figure things out independently, and stay locked-in until I deliver a clean, scalable solution. I’m committed to excellence, constant improvement, and pushing myself to the highest standards."
      ],
      "traits": [
        "Curious and always exploring new technologies",
        "Highly ambitious with a strong drive for improvement",
        "Disciplined and consistent in both fitness and coding",
        "Problem-solver with a builder mentality",
        "Self-taught and resourceful",
        "Experimental and unafraid to try new approaches",
        "Growth-oriented and constantly learning",
        "Detail-oriented when debugging and optimizing",
        "High-energy with strong personal motivation",
        "Competitive in a healthy, self-driven way",
        "Leadership-minded with experience guiding technical decisions",
        "Adaptable across multiple stacks and environments"
      ],
      "interests": [
        "Fitness and staying active",
        "Working out",
        "Healthy lifestyle",
        "Gaming and video games",
        "Exploring new technologies",
        "Building side projects",
        "Entrepreneurship and startups",
        "Training Boxing, Kickboxing, and Muay Thai",
        "Watching fighting like UFC and ONE Championship",
        "Weightlifting",
        "Crossfit",
        "Running",
        "Hiking trails",
        "Climbing",
        "Listening to music (nearly all genres)"
      ],
    }
  }
  


export default knowledge;

