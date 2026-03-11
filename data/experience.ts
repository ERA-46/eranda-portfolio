export type ExperienceItem = {
  logo: string;
  company: string;
  position: string;
  years: string;
  description: string;
};

export const experience: ExperienceItem[] = [
  {
    logo: "/staples-logo.png",
    company: "Staples Coquitlam Canada",
    position: "Sales Associate",
    years: "Jan 2026 – Present",
    description:
    "• Provide technical support and sales assistance in the technology department.\n" +
    "• Perform computer diagnostics, troubleshooting, and repair services for customer devices.\n" +
    "• Assist customers with computer setup, software installation, and system optimization.\n" +
    "• Conduct data transfers and device migrations between computers.\n" +
    "• Support customers with account setup, password recovery, and general technical issues.\n" +
    "• Deliver customer-focused solutions while recommending appropriate technology products and services."
  },
  {
    logo: "/icp-logo.png",
    company: "ICP Technologies Sri Lanka",
    position: "Intern Software Engineer",
    years: "Jan 2023 – Mar 2023",
    description:
    "• Built foundational knowledge in modern web development using Node.js and React through guided tutorials and hands-on exercises.\n" +
    "• Implemented application features while learning Ruby development fundamentals.\n" +
    "• Performed manual QA testing by executing test cases, identifying bugs, and documenting issues in detailed test reports.\n" +
    "• Participated in daily stand-up meetings and collaborated with team members using Slack.\n" +
    "• Worked within a collaborative development environment following coding standards and basic Agile practices."
}
];
