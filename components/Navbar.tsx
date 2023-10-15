import Link from "next/link";
import Avatar from "./Avatar";

export default function Navbar() {
  return (
    <div className="sticky top-0 left-0 right-0 z-20 w-full px-4 md:px-6 py-4 flex justify-between items-center bg-nav-bg border-b-black border-b-2">
      <div className="text-xl font-bold">
        about
      </div>
      <Link href="/">
        <Avatar />
      </Link>
    </div>
  );
}
