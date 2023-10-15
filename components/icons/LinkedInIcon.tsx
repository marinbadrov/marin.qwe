import { FaLinkedin } from "react-icons/fa";
import IconWrapper from "./IconWrapper";

export default function LinkedInIcon() {
  return (
    <IconWrapper>
      <a href="https://www.linkedin.com/in/marin-badrov/" target="_blank">
        <FaLinkedin size={20} />
      </a>
    </IconWrapper>
  );
}
