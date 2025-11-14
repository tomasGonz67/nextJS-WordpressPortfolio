// Knowledge base for the AI chatbot
export const knowledge = {
  personalInfo: {
    name: "Tomas Gonzalez",
    role: "Engineer",
    location: "New Jersey, USA",
  },
  
  skills: {
    programming_languages: [
      "Python",
      "JavaScript",
      "TypeScript",
      "Solidity",
      "Bash",
      "SQL"
    ],
  
    frameworks_and_libraries: [
      "FastAPI",
      "Node.js",
      "Express",
      "React",
      "Next.js",
      "Flutter",
      "Playwright",
      "web3dart"
    ],
  
    ai_ml: [
      "InsightFace",
      "RetinaFace",
      "CLIP",
      "Face Embeddings",
      "Cosine Similarity Search",
      "Vector Databases",
      "RAG / Lite-RAG",
      "LLM Integrations (HuggingFace, OpenAI)"
    ],
  
    devops: [
      "Docker",
      "GitHub Actions",
      "CI/CD Pipelines",
      "Linux Server Management",
      "Environment Automation",
      "Monitoring & Logging"
    ],
  
    cloud_infrastructure: [
      "AWS EC2",
      "AWS VPC",
      "AWS NAT / Routing Tables",
      "AWS S3",
      "AWS Glue (ETL)",
      "Load Balancers",
      "Private Networking",
      "IAM Security"
    ],
  
    databases: [
      "Qdrant (Vector DB)",
      "Redis",
      "PostgreSQL",
      "MySQL",
      "MongoDB"
    ],
  
    web3_blockchain: [
      "Solidity",
      "Hardhat",
      "Smart Contract Deployment",
      "Ethereum / EVM",
      "Web3 Integration (web3dart, ethers, etc.)"
    ],
  
    tools_and_platforms: [
      "Git",
      "Jira",
      "Nginx",
      "PM2",
      "Figma",
      "YAML",
      "REST APIs",
      "JSON / TOON Format"
    ],
  
    soft_skills: [
      "Team Leadership",
      "Mentoring",
      "System Architecture Planning",
      "Independent Problem Solving",
      "Cross-Functional Collaboration"
    ]
  },
  
  
  workExperience: [
    {
        company: "Cadooga",
        role: "Engineering Lead / Founding Engineer",
        start: "2025-06-04",
        end: "Present",
        responsibilities: {
          ai: [
            "Architected and deployed an end-to-end AI-powered MVP integrating reverse image search, computer vision, automation, and scalable backend services",
            "Designed a custom reverse image search system using InsightFace (buffalo_l) for embeddings and RetinaFace for detection",
            "Implemented Qdrant vector database with cosine similarity search for high-accuracy facial matching",
            "Built full embedding pipelines for ingestion, preprocessing, embedding generation, and large-scale retrieval",
            "Applied BFS traversal logic to optimize dataset processing and image-matching workflows",
            "Integrated Redis caching to accelerate lookups and reduce inference latency",
            "Developed custom scrapers and automated dataset pipelines to scale data ingestion"
          ],
      
          cloud_infrastructure_and_networking: [
            "Architected, deployed, and managed AWS infrastructure including VPCs, EC2 instances, subnets, routing tables, NAT gateways, and load balancers",
            "Designed secure private networking environments and enforced strict IAM policies and port restrictions",
            "Built a serverless ETL pipeline using AWS Glue to migrate more than 120 GB of data from an external S3 bucket into internal systems",
            "Internalized and refactored an external vendor-managed backend system to improve cost efficiency, reliability, and performance"
          ],
      
          leadership: [
            "Translated CEO-level product goals into actionable engineering plans and scalable architecture",
            "Recruited and hired a small, high-performing engineering team emphasizing collaboration and code quality",
            "Mentored developers on cloud infrastructure, Docker, architectural patterns, and best engineering practices",
            "Conducted code reviews, architecture walkthroughs, and infrastructure sessions to ensure internal consistency",
            "Initiated internal restructuring and processes including Jira task management, QA/testing protocols, structural/positioning and team standups"
          ],
      
          cross_functional: [
            "Collaborated with leadership to define technical roadmaps, budgets, timelines, and launch strategy",
            "Managed vendor relationships to secure datasets and integrate third-party services",
            "Implemented scalable engineering practices that accelerated development cycles and reduced contractor dependency",
            "Worked across product, data, and executive teams to align technology design with business direction"
          ],
      
          tech_stack: [
            "Python", "JavaScript", "TypeScript", "Node.js", "React", "Playwright",
            "InsightFace", "RetinaFace",
            "Qdrant", "Redis", "SQL",
            "AWS (EC2, VPC, S3, NAT, Load Balancer, Routing Tables, Glue)",
            "Docker", "GitHub Actions", "Linux", "Jira"
          ]
        }
    },
    {
        company: "TheoForge",
        role: "Full-Stack / DevOps Engineer",
        start: "2024-12-01",
        end: "2025-06-30",
        responsibilities: {
          devops: [
            "Handled a wide range of DevOps tasks including environment setup, workflow automation, and deployment processes",
            "Wrote and maintained YAML-based configurations for CI/CD pipelines and internal automation tools",
            "Collaborated with senior engineers to ensure deployments followed best practices for reliability and consistency",
            "Improved internal tooling and pipelines to increase development speed and reduce manual overhead"
          ],
      
          cloud_infrastructure: [
            "Worked on cloud infrastructure components with a focus on scalability, maintainability, and cost-efficiency",
            "Maintained and updated cloud resources while ensuring environments stayed stable and production-ready",
            "Assisted with provisioning, troubleshooting, and optimizing infrastructure components under guidance from senior engineers"
          ],
      
          backend_development: [
            "Developed backend components using Python and FastAPI to support core application features",
            "Contributed to API development, data processing workflows, and backend performance improvements",
            "Followed strong software engineering practices including modular design, clean interfaces, and thorough testing"
          ],
      
          frontend_development: [
            "Implemented features and UI components using TypeScript, ensuring consistent design and behavior across the application",
            "Worked closely with designers and senior engineers to create user-friendly, high-clarity interfaces"
          ],
      
          process_and_engineering_practices: [
            "Followed established engineering standards to ensure high-quality, maintainable, and production-ready code",
            "Contributed to documentation and internal guides to support team onboarding and system understanding",
            "Participated in code reviews, incorporating best practices emphasized by senior-level mentors"
          ],
      
          leadership: [
            "Reviewed work from junior developers and provided actionable feedback to help maintain code quality and alignment with engineering standards",
            "Demonstrated independence and self-direction by regularly solving problems without direct supervision",
            "Earned consistent positive recognition from senior engineers with over 10 years of experience"
          ],
      
          tech_stack: [
            "Python", "FastAPI", "TypeScript", "JavaScript", "YAML",
            "Cloud Infrastructure", "DevOps Automation", "CI/CD Pipelines"
          ]
        }
      }
      
  ],  
  
  education: [
    {
      type: "Formal",
      institution: "New Jersey Institute of Technology (NJIT)",
      degree: "Bachelor of Science in Information Technology",
      focus: "Web Development",
      minor: "Computer Science",
      graduation: "2025",
      highlights: [
        "Focused on frontend and backend development",
        "Completed full-stack software engineering coursework",
        "Built multiple real-world projects through group collaborations",
        "Developed skills in algorithms and runtime efficiency",
        "Acted as a leader during team-based software projects",
        "Worked under experience engineers to build real-world projects",
        "DevOps & Cloud Infrastructure",
        "AI / LLM Integrations",
      ]
    },
    {
        type: "Self-Taught",
        focus: "Web Development",
        highlights: [
            "Built multiple real-world projects through self-study",
            "Self taught React, ExpressJS, Socket.io",
            "Made personal projects for fun to learn new technologies and improve my skills",
        ]
    }
  ],  
  
  projects: [
    {
        id: "Fitness-Tracker-App",  
        title: "Fitness Tracker App",
        tech: ["React", "Firebase", "TailwindCSS"],
        summary:
          "My first very big web development project. A Fitness Tracker App that allows users to track their fitness goals and progress.",
        live: "https://host-472cc.web.app"
    },
    {
        id: "dog-app",
        title: "dog-picture-app",
        tech: ["MERN Stack", "MongoDB", "Express", "React", "Node.js"],
        summary:
          "A dog picture app that uses the Dog API to fetch images of dog pictures and display them in a grid. Also lets real users make comments on the pictures.",
        github: "https://github.com/tomasGonz67/IT302-tpg3-Dog/tree/it302Phase5", 
    },
    {
        id: "quake2-mod",
        title: "Quake 2 Mod",
        tech: ["C"],
        summary:
          "A Quake 2 mod that changes weapon functionality, adds a level up system, adds special upgrades",
        github: "https://github.com/tomasGonz67/q2mod", 
        live: ""
    },
    {
        id: "quake4-mod",
        title: "Quake 4 Mod",
        tech: ["C++", "Quake 4 SDK"],
        summary:
          "A Quake 4 mod that changes weapon functionality, adds a level up system, adds special abilities/upgrades, spawns unlimited enemies in waves, and has new UI elements.",
        github: "https://github.com/tomasGonz67/Game-Mod-Q4", 
        live: ""
    },
    {
        id: "wizard-mcpAI-be",
        title: "Wizardry AI",
        tech: ["ExpressJS", "OpenAI", "JsonRPC/MCP"],
        summary:
          "A backend for a Wizardry AI application that uses OpenAI's API to generate a wizardry story based on a user's input. It uses JsonRPC/MCP to communicate with the frontend and with Facebook.",
        type: "Web Application",
        github: "https://github.com/tomasGonz67/wizard-mcpAI-be", 
        live: ""
    },
    {
      id: "terra-intel-ai",
      title: "Terra Intel AI",
      tech: ["SQLite", ".NET MAUI", "OpenAI", "MVVM"],
      summary:
        "An adventure-themed .NET MAUI mobile app that calls OpenAI for a location-based fact, then returns that fact to a user.",
      type: "Mobile AI Application",
      github: "https://github.com/tomasGonz67/TerraIntel-AI",
      live: ""
    },
    {
      id: "nft-minting-app",
      title: "NFT Minting App",
      tech: ["Flutter", "web3dart", "Hardhat", "Ethereum", "Infura"],
      summary:
        "A cross-platform NFT minting dApp allowing users to view and mint NFTs through a Flutter interface connected to Ethereum smart contracts.",
      type: "Mobile + Web3 App",
      github: "https://github.com/tomasGonz67/blockChain",
    },
    {
      id: "portfolio-ai",
      title: "AI-Powered Portfolio",
      tech: ["Next.js", "Strapi CMS", "Lite-RAG", "TOON Format", "HuggingFace/OpenAI"],
      summary:
        "A fully interactive portfolio featuring an AI assistant powered by Lite-RAG retrieval and token-efficient TOON data representation.",
      type: "Web Application",
      github: "https://github.com/tomasGonz67/nextJS-WordpressPortfolio",
      live: "https://portfolio-beige-ten-56.vercel.app"
    },
    {
      id: "hexo-blog",
      title: "Hexo Blog Platform",
      tech: ["Hexo", "GitHub Actions", "Docker", "Playwright"],
      summary:
        "A Markdown-based blog deployed with CI/CD using GitHub Actions and tested with Playwright for stability.",
      type: "Static Site + CI/CD",
      github: "https://github.com/tomasGonz67/is373hexo",
      live: "https://tomasgonz67.github.io/is373hexo/"
    },
    {
      id: "ecommerce-app",
      title: "Wordpress E-Commerce Project",
      tech: ["Wordpress", "WooCommerce", "PHP"],
      summary:
        "A complete e-commerce web app featuring product storage, search, and WooCommerce payment integration.",
      type: "WordPress",
    },
    {
      id: "fantasy-ufc-app",
      title: "",
      tech: ["RabbitMQ", "PHP", "SQL", "HTML", "CSS", "JavaScript, NAGIOS"],
      summary:
        "A full stack IT project that uses API's to get data and display it in a user friendly way, stores the data in a database for caching, monitors with NAGIOS, and has real user interaction with the data and database.",
      type: "Full-Stack Web App",
      github: "https://github.com/tomasGonz67/it490",
      live: ""
    },
    {
        id: "Holistic-Hands-App",  
        title: "Holistic Hands App",
        tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
        summary:
          "A Holistic Hands App uses a MySQL database to store user information and a PHP backend to handle the database operations.",
        github: "", 
        live: ""
    },
    {
        id: "game-of-games",
        title: "Game of Games",
        tech: ["React", "Node.js", "Socket.io"],
        summary:
          "A realtime multiplayer card game that allows uses to play cards with each other.",
        live: ""
    },
    {
        id: "tree-top-fitness",
        title: "Tree Top Fitness",
        tech: ["HTML", "CSS", "JavaScript", "mailchimp"],
        summary:
          "Tree Top Fitness is a functional fitness gym concept built using the Explorer brand archetype and persuasion principles like reciprocity, social proof, and liking. I developed full business documentation including a competitive analysis, SWOT analysis, user personas, sales funnel, user stories, and UX testing to design a compelling, research-backed fitness brand experience.",
        github: "https://github.com/tomasGonz67/IS219Final", 
        live: "https://is-219-final-gamma.vercel.app"
    },
    {
        id: "mock-blog-website", 
        title: "Mock Blog Website",
        tech: ["Drupal Headless CMS", "Docker", "Digital Ocean", "Traefik", "DNS"],
        summary:
          "A mock blog website that uses Docker to host microservices. Including a Drupal Headless CMS to manage the content, traefik as the reverse proxy, and a website hosted with nameCheap Domain that pulls from the drupal CMS.",
        github: "https://github.com/vvh24/IS373UI?tab=readme-ov-file", 
    }
  ],  

  fitnessAchievements: [
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
    "205LB Bench Press",
],
  
  personality: {
    self_description: [`
    I’m a driven, disciplined, and relentlessly motivated engineer who takes full 
    ownership of problems and refuses to quit until things work. I naturally step 
    into leadership roles, lift the team around me, and thrive in fast-paced, 
    high-pressure environments. I break down complex challenges, figure things 
    out independently, and stay locked-in until I deliver a clean, scalable 
    solution. I’m committed to excellence, constant improvement, and pushing 
    myself to the highest standards.
  `],
    traits: [
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
        "Adaptable across multiple stacks and environments",
      ],
    interests: [
        "Fitness and staying active",
        "Working out",
        "Healthy lifestyle",
        "Gaming and video games",
        "Exploring new technologies",
        "Building side projects",
        "Entrepreneurship and startups",
        "Boxing and combat training",
        "Weightlifting",
        "Crossfit",
        "Running",
        "Hiking trails",
        "Climbing"
      ],


  },
};

export default knowledge;

