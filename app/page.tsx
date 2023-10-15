import { MyLinks, WorkExperience } from "@/components";

export default function Home() {
  return (
    <main className="h-full w-full text-center flex flex-col items-center">
      <div className="text-xl md:text-2xl uppercase font-bold pt-4 md:pt-6 lg:pt-10">
        Full stack software developer
      </div>
      <p className="my-4 text-base md:text-xl">
        Passionate about learning. <br /> Currently working with TypeScript.
      </p>
      <MyLinks />
      <WorkExperience />
    </main>
  );
}
