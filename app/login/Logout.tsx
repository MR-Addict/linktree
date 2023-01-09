"use client";

import { signOut } from "next-auth/react";

export default function Page() {
  return (
    <div className='frame w-full flex flex-col items-center justify-center gap-2'>
      <h1 className=''>You have logged in, please logout first!</h1>
      <button
        onClick={() => signOut()}
        className='py-1 px-4 rounded-sm bg-black text-white hover:bg-white hover:text-black border border-black'
      >
        Logout
      </button>
    </div>
  );
}
