function CardSkeleton() {
  return (
    <div className='flex flex-col items-start gap-3 py-7 px-5 rounded-md border border-gray-300 animate-pulse'>
      <div className='h-5 w-2/3 bg-gray-200 rounded-md dark:bg-gray-700'></div>
      <div className='h-32 w-full bg-gray-200 rounded-md dark:bg-gray-700'></div>
    </div>
  );
}

export default function Loading() {
  return (
    <div className='frame w-full flex flex-col gap-3'>
      <div className='h-5 w-24 bg-gray-200 rounded-md dark:bg-gray-700 animate-pulse'></div>
      <div className='grid gap-7 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </div>
  );
}
