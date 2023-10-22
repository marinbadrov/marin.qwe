import { FaLaptopCode } from "react-icons/fa";
import {
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export default function TechStack() {
  return (
    <div className="flex flex-col">
      <div className="flex space-x-2 text-2xl text-accent font-bold items-center mb-4">
        <FaLaptopCode /> <div>primary stack</div>
      </div>
      <div className="flex flex-col w-full space-y-6 md:space-y-8 lg:space-y-10">
        <div className="flex flex-col space-y-2 font-bold">
          <a
            className="w-fit flex space-x-2 items-center"
            href="https://www.typescriptlang.org/"
            target="_blank"
          >
            <SiTypescript /> <div>TypeScript</div>
          </a>
          <a
            className="w-fit flex space-x-2 items-center"
            href="https://react.dev/"
            target="_blank"
          >
            <SiReact /> <div>React</div>
          </a>
          <a
            className="w-fit flex space-x-2 items-center"
            href="https://nextjs.org/"
            target="_blank"
          >
            <SiNextdotjs /> <div>Next.js</div>
          </a>
          <a
            className="w-fit flex space-x-2 items-center"
            href="https://tailwindcss.com/"
            target="_blank"
          >
            <SiTailwindcss /> <div>Tailwindcss</div>
          </a>
          <a
            className="w-fit flex space-x-2 items-center"
            href="https://www.typescriptlang.org/"
            target="_blank"
          >
            <SiNodedotjs /> <div>Node.js</div>
          </a>
        </div>
      </div>
    </div>
  );
}
