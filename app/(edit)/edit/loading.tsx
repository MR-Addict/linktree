import { Skeleton } from "../components";

export default function Loading() {
  return (
    <Skeleton>
      <div className='w-full flex flex-row justify-between gap-3'>
        <div className='h-7 w-16 md:h-10 md:w-20 bg-gray-200 rounded-md'></div>
        <div className='flex flex-row gap-3'>
          <div className='h-7 w-16 md:h-10 md:w-20 bg-gray-200 rounded-md'></div>
          <div className='h-7 w-16 md:h-10 md:w-20 bg-gray-200 rounded-md'></div>
        </div>
      </div>
    </Skeleton>
  );
}
