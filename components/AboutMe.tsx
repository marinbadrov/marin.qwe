import { FaInfoCircle } from "react-icons/fa";

export default function AboutMe() {
  return (
    <div className="w-full max-w-md flex flex-col">
      <div className="flex space-x-2 items-center font-bold text-2xl text-accent mb-4">
        <FaInfoCircle /> <div>about</div>
      </div>
        <p>
          As a software engineer with over three years of experience, I have
          specialized in utilizing the Node.js and React stack to develop robust
          and scalable web applications. I possess a solid understanding of both
          frontend and backend technologies, enabling me to contribute
          effectively across the entire software development lifecycle.
          <br /> <br />

          My expertise lies in designing and implementing RESTful APIs, building
          responsive and intuitive user interfaces, and optimizing application
          performance. I have hands-on experience in developing feature-rich web
          applications using React.js, leveraging state management libraries
          like Redux or MobX to ensure maintainable codebases and seamless user
          experiences.
        </p>
      </div>
  );
}
