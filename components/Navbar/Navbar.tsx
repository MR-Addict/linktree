import Link from "next/link";
import Image from "next/image";

import logo from "../../public/favicon.png";
import NavbarButtons from "./NavbarButtons";

export default function Navbar() {
  return (
    <div className='w-full flex flex-row items-center justify-between px-5 md:px-48 pt-5 md:pt-10'>
      <Link href='/' className='flex flex-row items-end justify-center gap-2'>
        <Image src={logo} width={35} height={35} alt='logo' />
        <h1 className='dark:text-white text-2xl font-bold italic'>Linktree</h1>
      </Link>
      {/* @ts-expect-error */}
      <NavbarButtons />
    </div>
  );
}
