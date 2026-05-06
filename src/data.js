export const personalInfo = {
  name: "Maaz Bin Shahid",
  location: "Delhi(NCR), IN",
  phone: "+91-9999852954",
  email: "mzperwez786@gmail.com",
  linkedin: "https://www.linkedin.com/in/maaz-bin-shahid-3a47921a7/",
  github: "https://github.com/Maazbinshahid",
  summary: "Full Stack Software Engineer with 3+ years of experience designing and shipping scalable web applications using React, Next.js, Node.js, and TypeScript. Proven track record of reducing infrastructure costs by 45%, improving system performance by 40%, and delivering high-impact features across complex distributed systems. Published IEEE researcher in cybersecurity. Passionate about code quality, system design, and building products that scale.",
  role: "Full Stack Software Engineer"
};

export const experience = [
  {
    title: "Full Stack Software Engineer",
    company: "91Trucks",
    location: "Gurgaon, IN",
    duration: "2024 – Present",
    achievements: [
      "Promoted from Associate Software Engineer to Software Engineer based on performance and initiative; took end-to-end ownership of cloud infrastructure, DevOps, and project architecture.",
      "Migrated and upgraded cloud infrastructure on AWS and GCP, decreasing monthly server costs by 45%, increasing application performance by 40%, and slashing production build durations by 30% via advanced CI/CD orchestration.",
      "Architected and shipped Leadforge (CMS + LMS) and orchestrated a seamless migration from legacy APIs to a unified backend architecture, improving data consistency and system reliability.",
      "Integrated Ozonetel telephony API into lead management workflows, enabling automated call logging and disposition — reducing manual follow-up time significantly.",
      "Led Core Web Vitals and SEO optimization initiatives across the platform, improving Lighthouse scores and organic search rankings via SSR and structured data implementation.",
      "Engineered reusable component libraries using React Hook Form + Zod for dynamic forms with complex validation, improving developer velocity across teams."
    ]
  },
  {
    title: "Associate Software Engineer",
    company: "91Trucks",
    location: "Gurgaon, IN",
    duration: "2022 – 2024",
    achievements: [
      "Joined through campus placement; built responsive, accessible UI components using React.js and Next.js, contributing to product features across the vehicle marketplace platform.",
      "Designed and integrated REST APIs with MySQL databases, ensuring efficient data retrieval and consistent data integrity across the application.",
      "Collaborated in Agile sprints with cross-functional teams to deliver features on tight release cycles, improving full-stack problem-solving proficiency."
    ]
  }
];

export const skills = {
  Frontend: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React.js", "Next.js", "Angular", "Tailwind CSS", "Framer Motion", "Shadcn UI", "Radix UI"],
  "Backend & DB": ["Node.js", "NestJS", "REST APIs", "Supabase", "Prisma ORM", "MySQL", "MongoDB"],
  "State & Forms": ["React Context API", "Zustand", "React Hook Form", "Zod Validations"],
  "Cloud & DevOps": ["AWS (EC2, S3)", "Google Cloud Platform", "Docker", "Cloudflare CDN", "CI/CD"],
  Tools: ["Git", "Bitbucket", "Jira", "WordPress", "Shopify"],
  Core: ["Responsive Design", "SEO Optimization", "Performance Optimization", "SSR & CSR", "Agile Methodology", "System Design"]
};

export const education = [
  {
    degree: "Master's in Computer Applications",
    university: "Amity University",
    year: "2022",
    gpa: "8.0"
  },
  {
    degree: "Bachelor's in Computer Applications",
    university: "Amity University",
    year: "2019",
    gpa: "7.0"
  }
];

export const projects = [
  {
    title: "DriveLog — AI-Powered Vehicle Maintenance Tracker PWA",
    description: "Developed a full-stack PWA leveraging Google Gemini AI for intelligent maintenance predictions and log analysis, integrated with Supabase and Recharts for data visualization.",
    tech: ["Next.js", "Google Gemini AI", "Supabase", "Recharts", "PWA"],
    links: {}
  },
  {
    title: "ScanMyCar - QR Vehicle Notification",
    description: "Privacy-focused vehicle notification system (frontend + backend) allowing users to alert owners via QR codes without sharing contact details.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "NestJS", "Prisma"],
    links: {
      live: "https://scanmycar-frontend.vercel.app/"
    }
  },
  {
    title: "WorkTime - Work Hours Calculator PWA",
    description: "Shipped a productivity PWA for tracking work hours with offline support, customizable settings, and smart departure time calculation.",
    tech: ["Next.js 16", "PWA", "LocalStorage API", "CSS Modules"],
    links: {
      github: "https://github.com/maazshahid18/workhours",
      live: "https://workhours-sable.vercel.app/"
    }
  },
  {
    title: "Celebration App (Valentine Proposal)",
    description: "Built an interactive personalized proposal app with Razorpay payment integration, Supabase backend, and animated confetti interactions using Framer Motion.",
    tech: ["Next.js", "Razorpay", "Supabase", "Framer Motion"],
    links: {}
  },
  {
    title: "Ecommerce Website",
    description: "Full-fledged e-commerce website from scratch, integrating Next.js for the frontend, NestJS for the backend, and MySQL for database management.",
    tech: ["Next.js", "NestJS", "MySQL"],
    links: {
      live: "https://ecommerce-frontend-smoky-chi.vercel.app/cart"
    }
  },
  {
    title: "Thetecheaven",
    description: "Comprehensive tech blogging website showcasing technical knowledge through in-depth articles and tutorials.",
    tech: ["WordPress", "CMS", "Web Development"],
    links: {}
  },
  {
    title: "FRU Solutions",
    description: "Comprehensive courier partner solution with real-time tracking, inventory management, and end-to-end oversight capabilities.",
    tech: ["Logistics", "Real-time Tracking", "Inventory Management", "API Integrations"],
    links: {}
  }
];

export const publications = [
  {
    title: "A Comprehensive Study on Cybersecurity Awareness and Practices",
    publisher: "IEEE Xplore",
    year: "2023",
    link: "https://ieeexplore.ieee.org/document/10046884"
  }
];
