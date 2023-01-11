import Link from "next/link";
import { AiFillEdit } from "react-icons/ai";
import { unstable_getServerSession } from "next-auth";

import { linktreeItemType } from "./config";
import { authOptions } from "../pages/api/auth/[...nextauth]";

function Edit({ link }: { link: linktreeItemType }) {
  return (
    <Link
      href={{ pathname: "/edit", query: { ...link, _id: link._id.toString() } }}
      className='opacity-0 translate-x-0 translate-y-0 group-hover:opacity-100 group-hover:translate-x-3 group-hover:-translate-y-3 duration-200 absolute right-0 top-0 p-2 rounded-full border border-black bg-black text-white hover:bg-white hover:text-black'
    >
      <AiFillEdit />
    </Link>
  );
}

export default async function LinktreeCard({ head, links }: { head: string; links: linktreeItemType[] }) {
  const session = await unstable_getServerSession(authOptions);

  return (
    <div className='flex flex-col gap-3'>
      <h1 className='text-3xl font-bold w-fit'>{head}</h1>
      <div className='grid gap-7 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {links.map((item, index) => (
          <div
            key={index}
            className='flex flex-col items-center justify-between gap-3 border border-gray-300 rounded-md py-7 px-5 shadow-md hover:shadow-2xl duration-300 group relative cursor-pointer'
          >
            <div className='w-full flex flex-col gap-3'>
              <h1 className='font-bold text-2xl text-center'>{item.title}</h1>
              {session && <Edit link={item} />}
              <div className='w-fit'>{item.intro}</div>
            </div>
            <a
              href={item.link}
              target='_blank'
              className='w-full rounded-md text-center py-1 border duration-300 border-black text-white bg-black hover:bg-white hover:text-black'
            >
              Learn More →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
