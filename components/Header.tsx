import Link from "next/link";
import Avatar from "./Avatar";
import { EmailIcon, GithubIcon, LinkedInIcon } from "./icons";

export default function Header() {
  return (
    <div className="w-full p-6 flex justify-between items-center">
      <div className="text-2xl font-bold font-mono uppercase">
        Full stack software developer
      </div>
      <div className="h-full flex justify-evenly items-center">
        <GithubIcon />
        <LinkedInIcon />
        <EmailIcon />
        <Link href="/">
          <Avatar />
        </Link>
      </div>
    </div>
  );
}
