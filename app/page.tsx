import { MyLinks, Skills, TechStack, WorkExperience } from "@/components";
import { AboutMe } from "@/components";
import Image from "next/image";
import me from "@/components/images/me.jpeg";

export default function Home() {
  return (
    <main className="h-full w-full max-w-6xl mx-auto px-6 md:px-8 lg:px-10">
      <div className="grid grid-cols-2 gap-6 md:gap-8 my-6 md:my-8">
        <div className="flex flex-col space-y-6 md:space-y-8">
          <p className="text-base font-bold sm:text-xl">
            Passionate about learning. <br />
            Currently working with TypeScript.
          </p>
          <MyLinks />
        </div>
        <Image
          className="w-32 h-32 md:h-40 md:w-40 lg:h-48 lg:w-48 border-2 border-black rounded-md shadow"
          src={me.src}
          alt="Image of Marin"
          height={200}
          width={200}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <AboutMe />
        <div className="flex flex-col space-y-6 md:space-y-8">
          <TechStack />
          <Skills />
        </div>
        <WorkExperience />
      </div>
    </main>
  );
}
