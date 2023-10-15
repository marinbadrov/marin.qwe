import Link from "next/link";
import Avatar from "./Avatar";

export default function Navbar() {
  return (
    <div className="w-full px-4 md:px-6 py-4 flex justify-between items-center bg-nav-bg border-b-black border-b-2">
      <div className="text-xl font-bold">
        home
      </div>
      <Link href="/">
        <Avatar />
      </Link>
    </div>
  );
}
