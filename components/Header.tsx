import Link from "next/link";
import Avatar from "./Avatar";

export default function Header() {
  return (
    <div className="w-full py-4 flex justify-between items-center">
      <div className="text-xl font-bold">
        Home 
      </div>
      <Link href="/">
        <Avatar />
      </Link>
    </div>
  );
}
