"use client";

import { useState } from "react";
import { signOut } from "next-auth/react";

import { Login } from "../../app/components";

export default function LoginLogoutButton({ isNeedLogin }: { isNeedLogin: boolean }) {
  const [isOpenForm, setIsOpenForm] = useState(false);

  if (isNeedLogin) {
    return (
      <div>
        <button
          onClick={() => {
            setIsOpenForm(true);
            document.body.style.overflow = "hidden";
          }}
          className='py-1 px-2 md:px-4 rounded-sm border border-black bg-black text-white hover:bg-white hover:text-black'
        >
          Login
        </button>
        <Login isOpenForm={isOpenForm} setIsOpenForm={setIsOpenForm} />
      </div>
    );
  } else {
    return (
      <button
        type='button'
        onClick={() => signOut()}
        className='py-1 px-2 md:px-4 rounded-sm border border-black bg-black text-white hover:bg-white hover:text-black'
      >
        Logout
      </button>
    );
  }
}
