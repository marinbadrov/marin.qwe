import { VscCode } from "react-icons/vsc";

export default function Skills() {
  return (
    <div className="w-full max-w-md flex flex-col">
      <div className="flex space-x-2 text-2xl text-accent font-bold items-center mb-4" >
        <VscCode /> <div>skills</div>
      </div>
      <div className="flex flex-col w-full">
        <p>
          Javascript, HTML, CSS, SASS, Responsive design, C#, .NET, SQL,
          MongoDB, Firebase, REST APIs, GraphQL, Web Sockets
        </p>
      </div>
    </div>
  );
}
