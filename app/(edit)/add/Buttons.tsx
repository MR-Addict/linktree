"use client";

import { useRouter } from "next/navigation";

export default function Buttons({ isValid }: { isValid: boolean }) {
  const router = useRouter();

  return (
    <div className='w-full flex flex-row justify-end gap-3'>
      <button
        type='button'
        onClick={() => {
          router.push("/");
          router.refresh();
        }}
        className='py-2 px-4 rounded-sm border border-black hover:shadow-md'
      >
        Return
      </button>
      {isValid ? (
        <button
          type='submit'
          className='py-2 px-4 rounded-sm border hover:shadow-md bg-black text-white hover:bg-white hover:text-black border-black'
        >
          Create
        </button>
      ) : (
        <button
          disabled
          className='py-2 px-4 rounded-sm border hover:shadow-md cursor-not-allowed bg-black text-white border-black'
        >
          Create
        </button>
      )}
    </div>
  );
}
