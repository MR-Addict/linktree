"use client";

import { signIn, signOut } from "next-auth/react";

export default function Button({ isLogin }: { isLogin: boolean }) {
  if (isLogin) {
    return (
      <button
        onClick={() => signIn()}
        className='py-1 px-2 md:px-4 border rounded-sm bg-black text-white hover:bg-white hover:text-black border-black'
      >
        Login
      </button>
    );
  } else {
    return (
      <button
        onClick={() => signOut()}
        className='py-1 px-2 md:px-4 border rounded-sm bg-black text-white hover:bg-white hover:text-black border-black'
      >
        Logout
      </button>
    );
  }
}
