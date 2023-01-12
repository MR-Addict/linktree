import { Skeleton } from "../components";

export default function Loading() {
  return (
    <Skeleton>
      <div className='w-full flex flex-row justify-end gap-3'>
        <div className='h-10 w-20 bg-gray-200 rounded-md'></div>
        <div className='h-10 w-20 bg-gray-200 rounded-md'></div>
      </div>
    </Skeleton>
  );
}
