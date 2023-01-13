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
      className={`z-10 fixed -top-10 left-[50%] translate-x-[-50%] duration-500 ${
        isPopup ? "translate-y-32" : "translate-y-0"
      }`}
    >
      {popupData.status ? (
        <div className='bg-green-100 border border-green-900 px-4 py-1 rounded-sm flex flex-row items-center gap-2 w-fit'>
          <h1 className='font-semibold whitespace-nowrap text-green-900'>{popupData.message}</h1>
          <button
            type='button'
            onClick={() => {
              setIsPopup(false);
            }}
            className='bg-green-900 text-white p-1 rounded-full'
          >
            <RxCross1 size={8} />
          </button>
        </div>
      ) : (
        <div className='bg-red-100 border border-red-900 px-4 py-1 rounded-sm flex flex-row items-center gap-2 w-fit'>
          <h1 className='font-semibold whitespace-nowrap text-red-900'>{popupData.message}</h1>
          <button
            type='button'
            onClick={() => {
              setIsPopup(false);
            }}
            className='bg-red-900 text-white p-1 rounded-full'
          >
            <RxCross1 size={8} />
          </button>
        </div>
      )}
    </div>
  );
}
