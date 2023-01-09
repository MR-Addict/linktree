"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { FaUserAlt, FaLock } from "react-icons/fa";

export default function Logout() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  const [formData, setFormData] = useState({ username: "", password: "" });

  const onUpdateInput = (event: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [event.target.name]: event.target.value });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await signIn("credentials", {
      username: formData.username,
      password: formData.password,
      callbackUrl: callbackUrl || "/",
    });
  };

  return (
    <div className='frame w-full flex flex-col items-center justify-center'>
      <form onSubmit={handleSubmit} className='w-full max-w-xs flex flex-col gap-4'>
        <h1 className='text-slate-700 font-bold text-4xl text-center'>Login</h1>
        <div className='flex flex-col gap-6'>
          <div className='flex flex-col w-full gap-1'>
            <label htmlFor='username' className='flex flex-row items-center gap-2 text-gray-700 font-semibold'>
              <FaUserAlt />
              <span>Username</span>
            </label>
            <input
              required
              type='text'
              name='username'
              maxLength={100}
              placeholder='Username'
              value={formData.username}
              onChange={onUpdateInput}
              className='p-2 rounded-sm border border-black outline-none'
            />
          </div>

          <div className='flex flex-col w-full gap-1'>
            <label htmlFor='username' className='flex flex-row items-center gap-2 text-gray-700 font-semibold'>
              <FaLock />
              <span>Password</span>
            </label>
            <input
              required
              type='password'
              name='password'
              maxLength={100}
              placeholder='Password'
              value={formData.password}
              onChange={onUpdateInput}
              className='p-2 rounded-sm border border-black outline-none'
            />
          </div>

          <div className='w-full flex flex-row gap-2'>
            <button
              type='button'
              onClick={() => (callbackUrl ? router.replace(callbackUrl) : router.back())}
              className='w-full py-1 rounded-sm border border-black hover:shadow-md'
            >
              Cancel
            </button>
            <button
              type='submit'
              className='w-full py-1 rounded-sm border hover:shadow-md bg-black text-white hover:bg-white hover:text-black border-black'
            >
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
