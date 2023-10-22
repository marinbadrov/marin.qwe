import { FaBriefcase } from "react-icons/fa";
import WorkPosition from "./WorkPosition";

type Experience = {
  id: number;
  company: string;
  position: string;
  timeRange: string;
  workDescription: string[];
};

const experience: Array<Experience> = [
  {
    id: 3,
    company: "RUBICON",
    position: "frontend developer",
    timeRange: "2022 - 2023",
    workDescription: [
      "Bootstrapped & worked on a Jamstack app for a modern construction company",
      "Created, updated and optimized pages, SEO for the company website",
      "Worked on analyzing and improving an existing codebase for a Customer message board app",
      "Bootstrapped & worked on a Customer portal app",
      "Co-developed a Factory machine parameter tracking app",
      "Contributed to the development of an Event Manager application, incorporating features such as live event hosting, video uploading, and streaming capabilities.",
    ],
  },
  {
    id: 2,
    company: "Optima Soft",
    position: "frontend developer",
    timeRange: "2021 - 2022",
    workDescription: [
      "Implemented frontend requirements for Customer’s admin interface",
      "Contributed to maintaining a large codebase by resolving critical issues, ensuring enhanced application stability and improved user experience",
      "Completed training in C# and .NET framework, gaining proficiency and in-depth understanding of principles such as SOLID, multi-layered architecture, and dependency injection",
    ],
  },
  {
    id: 1,
    company: "Freelance",
    position: "full stack developer",
    timeRange: "2019 - now",
    workDescription: [
      "Created a Jamstack app for a local industrial services company",
      "Implemented frontend features & html2pdf converter for a Telecom app admin interface",
      "Created a NodeJS microservice that monitors API requests while masking sensitive fields like passwords, credit card numbers etc.",
      "Implemented features & maintained a Customer loyalty app",
      "Bootstrapped & worked on an online Restaurant & Bars ordering app",
    ],
  },
];

export default function WorkExperience() {
  return (
    <div className="flex flex-col w-full md:col-span-2 max-w-md space-y-4">
      <div className="w-full flex items-center space-x-2 font-bold text-accent text-2xl">
        <FaBriefcase /> <div>work</div>
      </div>
      {experience.map((exp) => (
        <WorkPosition
          key={exp.id}
          company={exp.company}
          position={exp.position}
          timeRange={exp.timeRange}
          workDescription={exp.workDescription}
        />
      ))}
    </div>
  );
}
