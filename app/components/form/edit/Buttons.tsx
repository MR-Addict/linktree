"use client";

export default function Buttons({
  isValid,
  handleDelete,
  cancelCallback,
}: {
  isValid: boolean;
  handleDelete: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  cancelCallback: Function;
}) {
  return (
    <div className='w-full flex flex-row justify-between gap-3'>
      <button
        type='button'
        onClick={handleDelete}
        className='py-2 px-4 rounded-sm text-white bg-red-600 hover:shadow-md'
      >
        Delete
      </button>
      <div className='flex flex-row gap-3'>
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
