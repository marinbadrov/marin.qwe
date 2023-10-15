import { MyLinks, WorkExperience } from "@/components";

export default function Home() {
  return (
    <main className="h-full flex flex-col items-start space-y-4 md:space-y-6 lg:space-y-10 mx-4 md:mx-6 lg:mx-10">
      <div className="w-full flex flex-col md:flex-row md:justify-between pt-4 md:pt-6 lg:pt-10">
        <div>
          <div className="text-xl md:text-2xl uppercase font-bold">
            Full stack software developer
          </div>
          <p className="my-4 text-base md:text-xl">
            Passionate about learning. <br /> Currently working with TypeScript.
          </p>
        </div>
        <MyLinks />
      </div>
      <WorkExperience />
    </main>
  );
}
