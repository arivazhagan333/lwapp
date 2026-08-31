export const initialCourses = [
  // Trending & Premier Programs
  {
    title: 'Python Programming Language',
    slug: 'python-programming',
    category: 'Software Development',
    duration: '60 Hours',
    durationHours: 60,
    isTrending: true,
    badge: 'Trending Course',
    overview: 'Master core and advanced Python concepts including OOPs, data structures, file handling, modules, database connectivity, and backend integration for modern application development.',
    features: ['Hands-on Project Experience', 'Industry Certified Curriculum', 'Placement Assistance', 'Live Code Reviews'],
    careerRoles: ['Python Developer', 'Software Engineer', 'Backend Specialist', 'Automation Engineer'],
    curriculum: [
      { moduleTitle: 'Introduction & Python Basics', topics: ['Syntax & Variables', 'Control Structures', 'Functions & Lambdas'] },
      { moduleTitle: 'OOP & Data Structures', topics: ['Classes & Objects', 'Inheritance', 'Lists, Tuples, Dictionaries'] },
      { moduleTitle: 'Advanced Python & DB', topics: ['File I/O', 'Exception Handling', 'MySQL/SQLite Integration', 'REST APIs'] }
    ]
  },
  {
    title: 'Full Stack Web Development (MERN & MEAN)',
    slug: 'full-stack-development',
    category: 'Software Development',
    duration: '120 Hours',
    durationHours: 120,
    isTrending: true,
    badge: 'High Demand',
    overview: 'Complete full stack development curriculum covering HTML5, CSS3, Tailwind CSS, JavaScript ES6+, React.js, Node.js, Express, and MongoDB along with REST APIs and cloud deployment.',
    features: ['5+ Real-world Projects', 'Git & GitHub Workflow', 'Authentication & JWT', 'Cloud Deployment on Render/Vercel'],
    careerRoles: ['Full Stack Developer', 'MERN Stack Engineer', 'Frontend Engineer', 'Node.js Developer'],
    curriculum: [
      { moduleTitle: 'Frontend Foundations', topics: ['HTML5 & CSS3', 'Responsive Design & Tailwind', 'Modern JavaScript (ES6+)'] },
      { moduleTitle: 'React.js Mastery', topics: ['React Components & Hooks', 'State Management', 'React Router', 'Axios Integration'] },
      { moduleTitle: 'Backend & MongoDB', topics: ['Node.js & Express Architecture', 'MongoDB & Mongoose Schema', 'JWT Authentication', 'Deployment'] }
    ]
  },
  {
    title: 'Data Science using Python',
    slug: 'data-science-python',
    category: 'Special Programs',
    duration: '56 Hours',
    durationHours: 56,
    isTrending: true,
    badge: 'Popular',
    overview: 'Learn data analysis, statistical modeling, data visualization with NumPy, Pandas, Matplotlib, Seaborn, and end-to-end data manipulation pipelines for actionable business insights.',
    features: ['Data Wrangling Projects', 'Interactive Dashboards', 'Kaggle Dataset Practicals', 'Statistical Analysis'],
    careerRoles: ['Data Scientist', 'Data Analyst', 'Business Intelligence Consultant', 'Data Engineer'],
    curriculum: [
      { moduleTitle: 'Python for Data Analysis', topics: ['NumPy Numerical Arrays', 'Pandas Dataframes', 'Data Cleaning & Preprocessing'] },
      { moduleTitle: 'Visualization & Stats', topics: ['Matplotlib & Seaborn', 'Exploratory Data Analysis (EDA)', 'Descriptive & Inferential Stats'] },
      { moduleTitle: 'Predictive Modeling', topics: ['Linear & Logistic Regression', 'Model Evaluation Metrics', 'Capstone Project'] }
    ]
  },
  {
    title: 'Digital Marketing Specialist',
    slug: 'digital-marketing',
    category: 'Special Programs',
    duration: '48 Hours',
    durationHours: 48,
    isTrending: true,
    badge: 'Fast Track',
    overview: 'Comprehensive training in Search Engine Optimization (SEO), Search Engine Marketing (SEM), Social Media Marketing (SMM), Content Strategy, Google Analytics, and Lead Generation campaigns.',
    features: ['Live Ad Campaign Setup', 'Google Ads Certification Prep', 'Real Analytics Tracking', 'Affiliate Marketing Basics'],
    careerRoles: ['Digital Marketing Manager', 'SEO Specialist', 'Performance Marketer', 'Content Strategist'],
    curriculum: [
      { moduleTitle: 'SEO & Content', topics: ['On-Page & Off-Page SEO', 'Keyword Research', 'Technical SEO & Sitemaps'] },
      { moduleTitle: 'Paid Advertising & Social Media', topics: ['Google Search & Display Ads', 'Meta Facebook & Instagram Ads', 'LinkedIn Marketing'] },
      { moduleTitle: 'Analytics & Reporting', topics: ['Google Analytics 4', 'Conversion Tracking', 'ROI Optimization'] }
    ]
  },
  {
    title: 'Java Developer Program',
    slug: 'java-developer',
    category: 'Software Development',
    duration: '64 Hours',
    durationHours: 64,
    isTrending: true,
    badge: 'Core Program',
    overview: 'Deep dive into Core Java, Object Oriented Architecture, Collections framework, Multi-threading, Streams API, JDBC, and Spring Boot foundations for enterprise software development.',
    features: ['Enterprise Architecture', 'Design Patterns', 'JDBC & Hibernate', 'Spring Boot Intro'],
    careerRoles: ['Java Developer', 'Enterprise Software Engineer', 'Application Developer'],
    curriculum: [
      { moduleTitle: 'Core Java Fundamentals', topics: ['Java OOP Concepts', 'Packages & Interfaces', 'Exception Handling'] },
      { moduleTitle: 'Collections & Concurrency', topics: ['Collections Framework', 'Generics', 'Multithreading & Lambda Streams'] },
      { moduleTitle: 'Enterprise Integration', topics: ['JDBC Database Operations', 'Servlet & JSP Basics', 'Spring Boot Starter'] }
    ]
  },
  {
    title: 'Test Automation with Selenium',
    slug: 'test-automation-selenium',
    category: 'Special Programs',
    duration: '80 Hours',
    durationHours: 80,
    isTrending: false,
    badge: 'Industry Essential',
    overview: 'Master manual software testing principles alongside automated QA testing using Selenium WebDriver, Java/Python bindings, TestNG, POM frameworks, and CI/CD integration.',
    features: ['Hybrid Framework Design', 'Cucumber BDD Framework', 'Jenkins CI Integration', 'Cross-browser Testing'],
    careerRoles: ['QA Automation Engineer', 'SDET (Software Dev Engineer in Test)', 'Test Lead'],
    curriculum: [
      { moduleTitle: 'Testing Principles', topics: ['SDLC & STLC', 'Manual Test Cases', 'Bug Tracking Lifecycle'] },
      { moduleTitle: 'Selenium WebDriver', topics: ['Locators & XPath', 'Handling Dynamic Elements', 'TestNG Assertions'] },
      { moduleTitle: 'Frameworks & CI/CD', topics: ['Page Object Model (POM)', 'Cucumber BDD', 'Jenkins Pipeline Execution'] }
    ]
  },
  {
    title: 'Machine Learning & Deep Learning',
    slug: 'machine-learning',
    category: 'Special Programs',
    duration: '96 Hours',
    durationHours: 96,
    isTrending: true,
    badge: 'Cutting Edge',
    overview: 'Learn supervised & unsupervised machine learning algorithms, Scikit-Learn, neural networks, TensorFlow/Keras, NLP basics, and deployment of ML predictive APIs.',
    features: ['Supervised & Unsupervised Algorithms', 'TensorFlow / Keras Neural Nets', 'Model Tuning & Optimization', 'Flask API Deployment'],
    careerRoles: ['Machine Learning Engineer', 'AI Specialist', 'Data Scientist', 'Research Associate'],
    curriculum: [
      { moduleTitle: 'Classical ML Algorithms', topics: ['Regression & Classification', 'Decision Trees & Random Forests', 'Clustering & PCA'] },
      { moduleTitle: 'Deep Learning & Neural Networks', topics: ['Perceptrons & Multi-layer Nets', 'Convolutional Neural Networks (CNN)', 'Recurrent Neural Networks (RNN)'] },
      { moduleTitle: 'MLOps & Deployment', topics: ['Model Serialization', 'Flask/FastAPI Endpoints', 'Containerization Basics'] }
    ]
  },
  {
    title: 'Ethical Hacking & Cybersecurity',
    slug: 'ethical-hacking',
    category: 'IT Infrastructure Management',
    duration: '76 Hours',
    durationHours: 76,
    isTrending: true,
    badge: 'High Security',
    overview: 'Comprehensive security curriculum covering vulnerability assessment, penetration testing, network sniffing, Kali Linux tools, Wireshark, Metasploit, web app security, and defense protocols.',
    features: ['Live Penetration Labs', 'Kali Linux Toolkits', 'OWASP Top 10 Mitigation', 'Vulnerability Assessment Reports'],
    careerRoles: ['Ethical Hacker', 'Cybersecurity Analyst', 'Penetration Tester', 'Security Operations Center (SOC) Analyst'],
    curriculum: [
      { moduleTitle: 'Information Gathering & Scanning', topics: ['Footprinting & Reconnaissance', 'Nmap Port Scanning', 'Network Sniffing with Wireshark'] },
      { moduleTitle: 'System & Web Hacking', topics: ['Metasploit Exploitation', 'OWASP Top 10 Web Vulnerabilities', 'SQL Injection & XSS'] },
      { moduleTitle: 'Defense & Cryptography', topics: ['Firewalls & IDS/IPS', 'Cryptography & Encryption', 'Incident Response'] }
    ]
  },
  {
    title: 'Data Analytics using Power BI',
    slug: 'power-bi-analytics',
    category: 'Special Programs',
    duration: '40 Hours',
    durationHours: 40,
    isTrending: false,
    badge: 'In Demand',
    overview: 'Turn raw data into interactive corporate dashboards with Microsoft Power BI, Power Query data transformation, DAX calculations, and executive reporting visualizations.',
    features: ['DAX Formulas & Measures', 'Custom Visualizations', 'Power BI Service Publishing', 'Real-world Business Case Studies'],
    careerRoles: ['Power BI Developer', 'Business Intelligence Analyst', 'Reporting Specialist'],
    curriculum: [
      { moduleTitle: 'Data Ingestion & Transformation', topics: ['Connecting Data Sources', 'Power Query Transformations', 'Data Modeling & Relationships'] },
      { moduleTitle: 'DAX Calculations', topics: ['Calculated Columns & Measures', 'Time Intelligence Functions', 'Filter Context'] },
      { moduleTitle: 'Dashboard Design & Sharing', topics: ['Interactive Visualizations', 'KPI Cards & Drill-throughs', 'Publishing & Workspaces'] }
    ]
  },
  {
    title: 'Electrical System Design Using ETAP',
    slug: 'etap-electrical-design',
    category: 'Industrial Automation',
    duration: '60 Hours',
    durationHours: 60,
    isTrending: false,
    badge: 'Specialized',
    overview: 'Perform power system simulation, load flow analysis, short circuit analysis, relay coordination, motor starting analysis, and arc flash analysis using industry-standard ETAP software.',
    features: ['Single Line Diagram Modeling', 'Load Flow & Short Circuit Calculations', 'Protective Device Coordination', 'Industrial Compliance'],
    careerRoles: ['Power System Engineer', 'Electrical Design Engineer', 'Substation Engineer'],
    curriculum: [
      { moduleTitle: 'One-Line Diagram Creation', topics: ['Substation Architecture', 'Transformers & Generator Sizing', 'Transmission Line Parameters'] },
      { moduleTitle: 'System Studies', topics: ['Load Flow Analysis', 'ANSI/IEC Short Circuit Analysis', 'Motor Acceleration Studies'] },
      { moduleTitle: 'Protection & Harmonics', topics: ['Overcurrent Relay Coordination', 'Harmonic Analysis', 'Arc Flash Safety Assessment'] }
    ]
  },
  {
    title: 'PLC & SCADA Industrial Automation',
    slug: 'plc-scada-automation',
    category: 'Industrial Automation',
    duration: '80 Hours',
    durationHours: 80,
    isTrending: false,
    badge: 'Core Automation',
    overview: 'Industrial automation training on Programmable Logic Controllers (PLC), ladder logic programming, SCADA screen development, HMI interfacing, sensors, and industrial communication protocols.',
    features: ['Hardware Interfacing Kits', 'Siemens & Allen-Bradley PLCs', 'Wonderware / InTouch SCADA', 'Industrial Fieldbus Protocols'],
    careerRoles: ['Automation Engineer', 'PLC Programmer', 'SCADA Engineer', 'Instrumentation Engineer'],
    curriculum: [
      { moduleTitle: 'PLC Fundamentals', topics: ['PLC Architecture & Hardware', 'Ladder Logic & Functional Block Diagrams', 'Timers, Counters & Comparators'] },
      { moduleTitle: 'SCADA & HMI Integration', topics: ['Tag Database & Graphic Design', 'Alarms & Trending Graphs', 'Recipe Management & Security'] },
      { moduleTitle: 'Industrial Protocols', topics: ['Modbus & Profibus Communication', 'VFD Interfacing', 'Live Industrial Automation Project'] }
    ]
  },
  {
    title: 'Networking Engg - Routing & Switching (CCNA)',
    slug: 'networking-routing-switching',
    category: 'IT Infrastructure Management',
    duration: '60 Hours',
    durationHours: 60,
    isTrending: false,
    badge: 'Cisco Certified',
    overview: 'Prepare for CCNA with hands-on packet tracer and physical router/switch configurations covering IPv4/IPv6 subnetting, OSPF, VLANs, trunking, STP, ACLs, and NAT configuration.',
    features: ['Cisco Packet Tracer Labs', 'Subnetting Mastery', 'Router & Switch Configuration', 'Exam Preparation Guidance'],
    careerRoles: ['Network Engineer', 'Network Administrator', 'Systems Support Specialist'],
    curriculum: [
      { moduleTitle: 'Network Fundamentals', topics: ['OSI & TCP/IP Models', 'IPv4 Subnetting & IPv6 Addressing', 'Cabling & Topologies'] },
      { moduleTitle: 'Switching Technologies', topics: ['VLANs & Inter-VLAN Routing', 'Spanning Tree Protocol (STP)', 'EtherChannel & Port Security'] },
      { moduleTitle: 'Routing & Security', topics: ['OSPF Routing Protocol', 'Access Control Lists (ACLs)', 'NAT & DHCP Services'] }
    ]
  }
];
