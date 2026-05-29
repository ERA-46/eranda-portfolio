export type Project = {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  contribution?: string;
  images: string[];
  liveUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "imaster",
    title: "iMaster – College Project",
    description:
      "Full-stack MERN web application for managing mobile shop operations. Allows adding products, editing prices and descriptions, tracking inventory, and managing repair jobs by marking them as pending or completed based on their status.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    images: [
      "/projects/imaster/home.png",
      "/projects/imaster/products.png",
      "/projects/imaster/add item.png",
      "/projects/imaster/jobs.png",
      "/projects/imaster/db.png",
      "/projects/imaster/db2.png",
    ],
    githubUrl: "https://github.com/ERA-46/iMaster.git",
  },
  {
    slug: "computer-app",
    title: "Computer Buying Guidance App – Undergraduate Final Year Project",
    description:
      "A web application that allows customers to shop for computer components and laptops, create custom quotations, and interact with a chatbot that provides answers based on customer needs, including compatibility and price ranges.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "Bootstrap", "PyTorch", "Flask"],
    images: [
      "/projects/buymore/Home.JPG",
      "/projects/buymore/Cpu.JPG",
      "/projects/buymore/GPU.png",
      "/projects/buymore/Home full.png",
      "/projects/buymore/MB.png",
      "/projects/buymore/Quotation.png",
      "/projects/buymore/Quotation download.JPG",
      "/projects/buymore/Chatbot.JPG",
      "/projects/buymore/Chatbot 2.JPG",
      "/projects/buymore/Chatbot 3.JPG",
      "/projects/buymore/Chatbot 4.JPG",
      "/projects/buymore/Login and register.jpg",
      "/projects/buymore/register and error.jpg",
      "/projects/buymore/admin-dashboard.png",
      "/projects/buymore/admin-gaming-lap.png",
      "/projects/buymore/admin-update.png",
    ],
  },
  {
    slug: "mathematical-game",
    title: "Mathematical Game – University Project",
    description:
      "Developed to learn Java RMI, this educational game challenges users to solve 10 randomly ordered math questions within a time limit. The game automatically progresses to the next level once time expires, and after completing level 10, it displays scores using an external API in a chart format.",
    tech: ["Java", "QuickChart", "NetBeans"],
    images: [
      "/projects/braintrickle/login.png",
      "/projects/braintrickle/login 1.png",
      "/projects/braintrickle/lvl.png",
      "/projects/braintrickle/lvl 1.png",
      "/projects/braintrickle/chart.png",
    ],
    githubUrl: "https://github.com/ERA-46/BrainTricleJavaGame.git",
  },
  {
    slug: "movie-app",
    title: "Movie App – University Project",
    description:
      "Developed a Java application for managing and organizing movie data. Implemented Bubble Sort and Selection Sort algorithms to sort movies by title, release year, and rating. Integrated Binary Search for efficient movie retrieval, demonstrating proficiency in data structures, algorithms, and object-oriented programming principles.",
    tech: ["Java", "NetBeans"],
    images: [
      "/projects/movieapp/home.png",
      "/projects/movieapp/add_movie.png",
      "/projects/movieapp/sort_by_name.png",
      "/projects/movieapp/sort_by_year.png",
      "/projects/movieapp/sort_by_rating.png",
      "/projects/movieapp/search_movie.png",
    ],
    githubUrl: "https://github.com/ERA-46/MovieApp.git",
  },
  
];