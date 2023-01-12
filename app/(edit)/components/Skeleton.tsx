import React from "react";

export default function Loading({ children }: { children: React.ReactNode }) {
  return (
    <div className='frame w-full flex flex-col gap-4'>
      <div className='animate-pulse flex flex-col items-start gap-4 p-5 rounded-md border border-gray-300'>
        <div className='h-7 w-32 bg-gray-200 rounded-md'></div>
        <div className='h-72 w-full bg-gray-200 rounded-md'></div>
        {children}
      </div>
    </div>
  );
}
