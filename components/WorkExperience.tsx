import { FaBriefcase } from "react-icons/fa";
import WorkPosition from "./WorkPosition";

type Experience = {
  id: number;
  company: string;
  position: string;
  timeRange: string;
};

const experience: Array<Experience> = [
  {
    id: 3,
    company: "RUBICON",
    position: "Front-end developer",
    timeRange: "2022 - 2023",
  },
  {
    id: 2,
    company: "Optima Soft",
    position: "Front-end developer",
    timeRange: "2021 - 2022",
  },
  {
    id: 1,
    company: "Freelance",
    position: "Full stack developer",
    timeRange: "2019 - Now",
  },
];

export default function WorkExperience() {
  return (
    <div className="flex flex-col space-y-4 md:space-y-6 w-full mt-4 md:mt-6 lg:mt-10 p-4 md:p-6 lg:p-10">
      <div className="w-full flex items-center font-bold">
        <FaBriefcase className="mr-2" /> Work Experience
      </div>
      {experience.map((exp) => (
        <WorkPosition
          key={exp.id}
          company={exp.company}
          position={exp.position}
          timeRange={exp.timeRange}
        />
      ))}
    </div>
  );
}
