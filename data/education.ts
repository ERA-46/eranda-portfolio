export type EducationItem = {
  logo: string;
  degree: string;
  college: string;
  years: string;
  description: string;
};

export const education: EducationItem[] = [
  {
    logo: "/douglas-college-logo.png",
    degree: "Post-Baccalaureate Diploma in Computer & Information Systems",
    college: "Douglas College, New Westminster, BC",
    years: "2023 – 2024",
    description:
      "Operating Systems, Computer Networking and Security, Mobile Application Development, Object-Oriented Programming (Java), Data Structures and Algorithms, Web Development (JavaScript, PHP), Cloud Infrastructure, Database Systems (SQL, Mongo), and Applied Research Project."
  },
  {
    logo: "/uob-logo.png",
    degree: "Bachelor of Science (Honors) in Computer Science and Software Engineering - First Class",
    college: "University of Bedfordshire, United Kingdom",
    years: "2021 – 2022",
    description:
      "Software Engineering Principles, Project Management using the PRINCE2 methodology, and a Final Year Project with areport."
  },
  {
    logo: "/sliit.png",
    degree: "Higher Diploma in Information Technology",
    college: "SLIIT Academy, Sri Lanka",
    years: "2019 – 2021",
    description:
      "Programming in C, C++, and Java, Project and Professional Practice, Database Systems and ORDBMS, Computer Networking and Security, Operating Systems, Data Structures, Design and Analysis of Algorithms, Object-Oriented Analysis and Design, Interactive Design Concepts, and Emerging Technologies." 
  }
];
