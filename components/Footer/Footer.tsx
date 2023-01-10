import Image from "next/image";
import Link from "next/link";

import LinkCard from "./LinkCard";
import { links } from "./config";
import MobileFooter from "./MobileFooter";
import logo from "../../public/favicon.png";

export default function Footer() {
  return (
    <footer className='w-full frame bg-gray-100 flex flex-col gap-10 md:gap-20 items-start justify-between'>
      <div className='hidden md:flex w-full flex-row items-start justify-between'>
        {links.map((item1, index1) => (
          <div key={index1} className='flex flex-col gap-5'>
            <h1>{item1.head}</h1>
            <div className='flex flex-col gap-1'>
              {item1.data.map((item2, index2) => (
                <LinkCard item={item2} key={index2} />
              ))}
            </div>
          </div>
        ))}
        <div className='flex flex-col gap-10 items-start'>
          <Link
            href='/'
            className='text-2xl font-bold text-slate-800 italic flex flex-row items-end justify-center gap-2'
          >
            <Image src={logo} width={40} height={40} alt='logo' />
            <h1>Linktree</h1>
          </Link>
        </div>
      </div>
      <MobileFooter />
      <div className='flex flex-row gap-1'>
        <div>Copyright &copy; {new Date().getFullYear()}.</div>
        <div className='flex flex-row gap-1'>
          <span>Powered by</span>
          <a href='https://vercel.com/' target='_blank' className='underline text-gray-800'>
            vercel
          </a>
          <span>&</span>
          <a href='https://www.mongodb.com/atlas/database' target='_blank' className='underline text-gray-800'>
            mongodb
          </a>
          <span>.</span>
        </div>
      </div>
    </footer>
  );
}
