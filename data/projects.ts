export type Project = {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  contribution: string;
  images: string[];
  github: string;
  live?: string;
};

export const projects: Project[] = [
  {
    slug: "iMaster",
    title: "iMaster – College Project (Individual)",
    description:
      "Full-stack MERN web application for managing mobile shop operations. Allows adding products, editing prices and descriptions, tracking inventory, and managing repair jobs by marking them as pending or completed based on their status.",
    tech: ["MongoDB", "Express", "React", "Node.js" ],
    contribution:
      "Designed layout architecture, implemented reusable components, and optimized performance.",
    images: [
      "/projects/demo1.png",
      "/projects/demo2.png",
      "/projects/demo3.png",
    ],
    github: "https://github.com/ERA-46/iMaster.git",
    live: "https://your-live-link.com",
  },
  {
    slug: "ReMeal",
    title: "ReMeal – College Project (Group)",
    description:
      "Web application for saving and distributing excess food. Restaurants can list their surplus inventory with counts and expiry dates, people in need can request food specifying the quantity, and volunteers can deliver food to those who need it.",
    tech: ["React", "Spring Boot", "H2 Database"],
    contribution:
      "Developed the backend of the application.",
    images: [
      "/projects/demo1.png",
      "/projects/demo2.png",
      "/projects/demo3.png",
    ],
    github: "https://github.com/ERA-46/re-meal.git",
    live: "https://your-live-link.com",
  },
  {
    slug: "Computer App",
    title: "Computer Buying Guidance App – Undergraduate Final Year Project (Individual)",
    description:
      "A web application allows customers to shop for computer components and laptops, create custom quotations, and interact with a chatbot that provides answers based on customer needs, including compatibility and price ranges.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "Bootstrap", "PyTorch", "Flask"],
    contribution:
      "-----",
    images: [
      "/projects/demo1.png",
      "/projects/demo2.png",
      "/projects/demo3.png",
    ],
    github: "https://github.com/yourusername/portfolio",
    live: "https://your-live-link.com",
  },
  {
    slug: "Mathematical Game",
    title: "Mathematical Game – University Project (Individual)",
    description:
      "Developed to learn Java RMI, this educational game challenges users to solve 10 randomly ordered math questions within a time limit. The game automatically progresses to the next level once time expires, and after completing level 10, it displays scores using an external API in a chart format.",
    tech: ["Java", "QuickChart", "NetBeans"],
    contribution:
      "--",
    images: [
      "/projects/demo1.png",
      "/projects/demo2.png",
      "/projects/demo3.png",
    ],
    github: "https://github.com/ERA-46/BrainTricleJavaGame.git",
    live: "https://your-live-link.com",
  },
  {
    slug: "Student Management System",
    title: "Student Management System – University Project (Group)",
    description:
      "A Java application designed to manage students, teachers, classes, exams, messages, documents, and transactions of an institute. The admin can log in to manage students, teachers, and classes, including adding, updating, deleting data, and sending emails to students and teachers simultaneously. ",
    tech: ["Java", "SQL Server", "Trello (for project management)"],
    contribution:
      "Implemented the teacher management module and the announcement/email feature.Collaborated with team members on admin functionalities. Project progress was tracked using Trello, following the Waterfall methodology.",
    images: [
      "/projects/demo1.png",
      "/projects/demo2.png",
      "/projects/demo3.png",
    ],
    github: "https://github.com/ERA-46/StudentManagementSystem.git",
    live: "https://your-live-link.com",
  },
];
