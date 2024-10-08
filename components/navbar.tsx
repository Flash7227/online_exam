import Link from "next/link";
import Image from "next/image";
import { cookies } from "next/headers";
import UserMenu from "./userMenu";




const Navbar = () => {
  const cookieStore = cookies();
  const name = cookieStore.get("name");
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-cyan-500 h-12 text-white text-sm tracking-tight">
      <div className="container mx-auto h-full">
        <ul className="h-full flex justify-between">
          <Link href="/" className="h-full flex items-center gap-2">
            <div className="relative h-full w-10">
              <Image src="/images/logo.svg" fill alt="logo" className="p-1" />
            </div>
            <span className="font-semibold">{process.env.APP_NAME}</span>
          </Link>
          <UserMenu name={name?.value}/>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
