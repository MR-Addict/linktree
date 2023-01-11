"use client";

import { useEffect } from "react";
import { RxCross1 } from "react-icons/rx";

export default function Popup({
  popupData,
  setPopupData,
  setIsPopup,
}: {
  popupData: { status: boolean; message: string };
  setPopupData: Function;
  setIsPopup: Function;
}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPopup(false);
      setPopupData({ status: true, message: "" });
    }, 5000);
    return () => clearTimeout(timer);
  }, [popupData]);

  return (
    <>
      {popupData.status ? (
        <div className='bg-green-100 px-4 py-1 rounded-sm flex flex-row items-center gap-2 w-fit'>
          <h1 className='w-full font-semibold text-center text-green-900'>{popupData.message}</h1>
          <button
            type='button'
            onClick={() => {
              setIsPopup(false);
              setPopupData({ status: true, message: "" });
            }}
            className='bg-green-900 text-white p-1 rounded-full'
          >
            <RxCross1 size={8} />
          </button>
        </div>
      ) : (
        <div className='bg-red-100 px-4 py-1 rounded-sm flex flex-row items-center gap-2 w-fit'>
          <h1 className='w-full font-semibold text-center text-red-900'>{popupData.message}</h1>
          <button
            type='button'
            onClick={() => {
              setIsPopup(false);
              setPopupData({ status: true, message: "" });
            }}
            className='bg-red-900 text-white p-1 rounded-full'
          >
            <RxCross1 size={8} />
          </button>
        </div>
      )}
    </>
  );
}
