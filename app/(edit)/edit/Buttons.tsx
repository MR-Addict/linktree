"use client";

import { useRouter } from "next/navigation";

export default function Buttons({
  isValid,
  handleDelete,
}: {
  isValid: boolean;
  handleDelete: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}) {
  const router = useRouter();

  return (
    <div className='w-full flex flex-row justify-between gap-3'>
      <button
        type='button'
        onClick={handleDelete}
        className='py-2 px-4 rounded-sm border text-white bg-red-600 hover:shadow-md'
      >
        Delete
      </button>
      <div className='flex flex-row gap-3'>
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
            Update
          </button>
        ) : (
          <button
            disabled
            className='py-2 px-4 rounded-sm border hover:shadow-md cursor-not-allowed bg-black text-white border-black'
          >
            Update
          </button>
        )}
      </div>
    </div>
  );
}
