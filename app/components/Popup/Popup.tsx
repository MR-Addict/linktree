"use client";

import { useEffect } from "react";
import { RxCross1 } from "react-icons/rx";

export default function Popup({
  popupData,
  isPopup,
  setIsPopup,
}: {
  popupData: { status: boolean; message: string };
  isPopup: boolean;
  setIsPopup: Function;
}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPopup(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [popupData]);

  return (
    <div
      className={`w-full z-10 fixed flex flex-col items-center -top-20 left-[50%] translate-x-[-50%] duration-500 ${
        isPopup ? "translate-y-44" : "translate-y-0"
      }`}
    >
      {popupData.status ? (
        <div className='w-full max-w-xs flex flex-row items-center px-2 py-1 rounded-sm bg-green-100 border border-green-900 border-l-[5px] border-l-green-900'>
          <div className='flex flex-col flex-1'>
            <h1 className='text-green-900 font-bold text-xl'>Success</h1>
            <div className='flex flex-row items-center justify-between gap-2'>
              <h1 className='font-semibold whitespace-nowrap text-green-900'>{popupData.message}</h1>
            </div>
          </div>
          <button
            type='button'
            onClick={() => setIsPopup(false)}
            className='bg-green-900 text-white p-1 rounded-full w-fit h-fit'
          >
            <RxCross1 size={10} />
          </button>
        </div>
      ) : (
        <div className='w-full max-w-xs flex flex-row items-center px-2 py-1 rounded-sm bg-red-100 border border-red-900 border-l-[5px] border-l-red-900'>
          <div className='flex flex-col flex-1'>
            <h1 className='text-red-900 font-bold text-xl'>Error</h1>
            <div className='flex flex-row items-center justify-between gap-2'>
              <h1 className='font-semibold whitespace-nowrap text-red-900'>{popupData.message}</h1>
            </div>
          </div>
          <button
            type='button'
            onClick={() => setIsPopup(false)}
            className='bg-red-900 text-white p-1 rounded-full w-fit h-fit'
          >
            <RxCross1 size={10} />
          </button>
        </div>
      )}
    </div>
  );
}
