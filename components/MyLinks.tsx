import { EmailIcon, GithubIcon, LinkedInIcon } from "./icons";

export default function MyLinks() {
  return (
    <div className="h-full flex justify-between w-32">
      <GithubIcon />
      <LinkedInIcon />
      <EmailIcon />
    </div>
  );
}
