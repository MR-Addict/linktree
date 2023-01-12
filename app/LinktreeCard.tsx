import { unstable_getServerSession } from "next-auth";

import { EditButton } from "./components";
import { linktreeItemType } from "./config";
import { authOptions } from "../pages/api/auth/[...nextauth]";

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
              {session && <EditButton link={{ ...item, _id: item._id.toString() }} />}
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
