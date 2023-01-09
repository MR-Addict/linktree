"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function Button({ isLogin }: { isLogin: boolean }) {
  const { data: session } = useSession();
  console.log(session);

  if (isLogin) {
    return (
      <button
        onClick={() => signIn()}
        className='py-1 px-4 border rounded-sm border-black hover:text-white hover:bg-black'
      >
        Login
      </button>
    );
  } else {
    return (
      <button
        onClick={() => signOut()}
        className='py-1 px-4 border rounded-sm border-black hover:text-white hover:bg-black'
      >
        Logout
      </button>
    );
  }
}
