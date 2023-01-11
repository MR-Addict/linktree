import Link from "next/link";
import { AiFillEdit } from "react-icons/ai";
import { unstable_getServerSession } from "next-auth";

import { linktreeItemType } from "./config";
import { authOptions } from "../pages/api/auth/[...nextauth]";

function Edit({ link }: { link: linktreeItemType }) {
  return (
    <Link
      href={{ pathname: "/edit", query: { ...link, _id: link._id.toString() } }}
      className='scale-0 group-hover:scale-100 duration-200 absolute -right-3 -top-3 p-2 rounded-full border border-black bg-black text-white hover:bg-white hover:text-black'
    >
      <AiFillEdit />
    </Link>
  );
}

export default async function LinktreeCard({ head, links }: { head: string; links: linktreeItemType[] }) {
  const session = await unstable_getServerSession(authOptions);

  return (
    <div className='flex flex-col gap-2'>
      <h1 className='text-3xl font-bold w-fit'>{head}</h1>
      <div className='grid gap-7 grid-cols-1 md:grid-cols-3'>
        {links.map((item, index) => (
          <a
            href={item.link}
            target='_blank'
            key={index}
            className='flex flex-col justify-between gap-1 border border-gray-300 rounded-md p-2 hover:shadow-2xl duration-300 group relative'
          >
            <div className='w-full flex flex-col gap-1'>
              <div className='font-bold text-slate-800 text-xl'>{item.title}</div>
              {session && <Edit link={item} />}
              <div className='w-fit'>{item.intro}</div>
            </div>
            <div className='text-blue-600 hover:underline'>Learn More →</div>
          </a>
        ))}
      </div>
    </div>
  );
}
