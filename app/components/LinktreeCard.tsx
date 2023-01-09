import { AiFillEdit } from "react-icons/ai";
import { unstable_getServerSession } from "next-auth";

import { linktreeItemType } from "../config";
import { authOptions } from "../../pages/api/auth/[...nextauth]";

function Edit() {
  return (
    <a
      href='/home'
      className='opacity-0 group-hover:opacity-100 duration-300 absolute -right-3 -top-3 p-2 rounded-full border border-black bg-black text-white hover:bg-white hover:text-black'
    >
      <AiFillEdit />
    </a>
  );
}

export default async function LinktreeCard({ linktree }: { linktree: linktreeItemType }) {
  const session = await unstable_getServerSession(authOptions);

  return (
    <div className='flex flex-col gap-2'>
      <h1 className='text-3xl font-bold w-fit'>{linktree.head}</h1>
      <div className='grid gap-5 grid-cols-1 md:grid-cols-3'>
        {linktree.data.map((item, index) => (
          <a
            href={item.link}
            target='_blank'
            key={index}
            className='flex flex-col gap-1 border border-gray-300 rounded-md p-2 hover:shadow-2xl duration-300 group relative'
          >
            <div className='w-full flex flex-row items-center justify-between'>
              <div className='title text-xl'>{item.title}</div>
              {session && <Edit />}
            </div>
            <div className='w-fit'>{item.detail}</div>
            <div className='text-theme hover:underline'>Learn More →</div>
          </a>
        ))}
      </div>
    </div>
  );
}
