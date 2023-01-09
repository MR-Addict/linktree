import Link from "next/link";
import Image from "next/image";

import logo from "../../public/favicon.png";
import Avatar from "../Avatar/Avatar";

export default function Navbar() {
  return (
    <div className='flex flex-row items-center justify-between px-5 md:px-48 py-5'>
      <Link href='/' className='text-2xl font-bold text-gray-500 italic flex flex-row items-end justify-center gap-2'>
        <Image src={logo} width={35} height={35} alt='logo' />
        <h1>Linktree</h1>
      </Link>
      {/* @ts-expect-error Server Component */}
      <Avatar />
    </div>
  );
}
