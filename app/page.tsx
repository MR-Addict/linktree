import { BsArrowRight } from "react-icons/bs";

import { linktree, linktreeItemType } from "./config";

function LinktreeCard({ linktree }: { linktree: linktreeItemType }) {
  return (
    <div className='flex flex-col gap-2'>
      <h1 className='text-3xl font-bold w-fit'>{linktree.head}</h1>
      <div className='grid gap-5 grid-cols-1 md:grid-cols-3'>
        {linktree.data.map((item, index) => (
          <a
            href={item.link}
            target='_blank'
            key={index}
            className='flex flex-col gap-1 border border-gray-300 rounded-md p-2 hover:shadow-2xl duration-300'
          >
            <div className='w-fit title text-xl'>{item.title}</div>
            <div className='w-fit'>{item.detail}</div>
            <div className='text-theme hover:underline'>Learn More →</div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className='frame flex flex-col gap-10'>
      {linktree.map((item, index) => (
        <LinktreeCard key={index} linktree={item} />
      ))}
    </div>
  );
}
