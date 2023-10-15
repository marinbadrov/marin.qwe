import { FaGithub } from "react-icons/fa";
import IconWrapper from "./IconWrapper";

export default function GithubIcon() {
  return (
    <IconWrapper>
      <a href="https://www.github.com/marinbadrov" target="_blank">
        <FaGithub size={20} />
      </a>
    </IconWrapper>
  );
}
