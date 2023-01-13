"use client";

export default function Buttons({ isValid, cancelCallback }: { isValid: boolean; cancelCallback: Function }) {
  return (
    <div className='w-full flex flex-row justify-end gap-3'>
      <button
        type='button'
        onClick={() => cancelCallback()}
        className='py-2 px-4 rounded-sm border bg-white border-black hover:shadow-md'
      >
        Cancel
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
