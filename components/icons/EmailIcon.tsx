import { FaEnvelope } from "react-icons/fa";
import IconWrapper from "./IconWrapper";

export default function EmailIcon() {
  return (
    <IconWrapper>
      <a href="mailto:marin.badrov.dev@gmail.com">
        <FaEnvelope size={20} />
      </a>
    </IconWrapper>
  );
}
