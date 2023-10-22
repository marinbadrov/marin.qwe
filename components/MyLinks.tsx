import { EmailIcon, GithubIcon, LinkedInIcon } from "./icons";

export default function MyLinks() {
  return (
    <div className="h-full flex space-x-4">
      <GithubIcon />
      <LinkedInIcon />
      <EmailIcon />
    </div>
  );
}
