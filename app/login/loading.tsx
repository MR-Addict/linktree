export default function Loading() {
  return (
    <div className='frame w-full flex flex-col items-center justify-center'>
      <div className='w-full max-w-xs flex flex-col items-center gap-4'>
        <div className='h-10 w-1/2 bg-gray-200 rounded-md'></div>
        <div className='h-60 w-full bg-gray-200 rounded-md'></div>
        <div className='w-full flex flex-row justify-between gap-3'>
          <div className='h-10 w-full bg-gray-200 rounded-md'></div>
          <div className='h-10 w-full bg-gray-200 rounded-md'></div>
        </div>
      </div>
    </div>
  );
}
