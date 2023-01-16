import { unstable_getServerSession } from "next-auth/next";

import { Mongodb } from "../lib/mongodb";
import { linktreeItemType } from "./config";
import { EditButton } from "./components";
import { authOptions } from "../pages/api/auth/[...nextauth]";

async function LinktreeCard({ links }: { links: linktreeItemType[] }) {
  const session = await unstable_getServerSession(authOptions);

  return (
    <div className='grid gap-7 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {links.map((item, index) => (
        <div
          key={index}
          className='dark:bg-gray-700 dark:border-gray-700 flex flex-col items-center justify-between gap-3 border border-gray-300 rounded-md py-7 px-5 shadow-md hover:shadow-2xl duration-300 group relative cursor-pointer'
        >
          <div className='w-full flex flex-col gap-3'>
            <h1 className='dark:text-white font-bold text-2xl text-center'>{item.title}</h1>
            {session && <EditButton link={item} />}
            <div className='dark:text-gray-300 w-fit'>{item.intro}</div>
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
  );
}

export default async function Page() {
  const mongodb = new Mongodb();
  const links = await mongodb.getlinks();

  if (links.data)
    return (
      <div className='frame flex flex-col gap-10 md:gap-16'>
        {links.data.map((item, index) => (
          <div key={index} className='flex flex-col gap-3'>
            <span className='dark:text-white text-3xl font-bold'>{item._id}</span>
            {/* @ts-expect-error */}
            <LinktreeCard links={item.data} />
          </div>
        ))}
      </div>
    );
}
