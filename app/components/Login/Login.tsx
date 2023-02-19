"use client";

import { signIn } from "next-auth/react";
import { useState, useEffect } from "react";
import { FaUserAlt, FaLock } from "react-icons/fa";

import Popup from "../../../components/Popup/Popup";

export default function Login({ isOpenForm, setIsOpenForm }: { isOpenForm: boolean; setIsOpenForm: Function }) {
  const [isLoginFailed, setIsLoginFailed] = useState(false);
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const res = await signIn("credentials", {
      username: formData.username,
      password: formData.password,
      redirect: false,
    });
    if (res && !res.ok) {
      setIsLoginFailed(true);
    } else {
      setIsOpenForm(false);
      document.body.style.overflow = "auto";
      location.reload();
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoginFailed(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, [isLoginFailed]);

  return (
    <div
      className={`${
        isOpenForm ? "scale-100" : "scale-0"
      } z-10 fixed top-0 left-0 frame w-full h-full flex flex-col items-center justify-center bg-black/40`}
    >
      <Popup
        popupData={{ status: false, message: "Usernamer or Password incorrect!" }}
        isPopup={isLoginFailed}
        setIsPopup={setIsLoginFailed}
      />
      <form
        onSubmit={handleSubmit}
        className={`${
          isOpenForm ? "scale-100" : "scale-0"
        } duration-200 dark:bg-gray-700 w-full md:max-w-xs flex flex-col gap-4 rounded-md bg-white p-5 md:p-10`}
      >
        <h1 className='dark:text-white font-bold text-4xl text-center'>Login</h1>
        <div className='flex flex-col gap-6'>
          <div className='flex flex-col w-full gap-1'>
            <label
              htmlFor='username'
              className='flex flex-row items-center gap-2 dark:text-gray-300 text-gray-700 font-semibold'
            >
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
              onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
              className='p-2 rounded-sm border border-black outline-none'
            />
          </div>

          <div className='flex flex-col w-full gap-1'>
            <label
              htmlFor='username'
              className='flex flex-row items-center gap-2 dark:text-gray-300 text-gray-700 font-semibold'
            >
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
              onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
              className='p-2 rounded-sm border border-black outline-none'
            />
          </div>

          <div className='w-full flex flex-row gap-3'>
            <button
              type='button'
              onClick={() => {
                setIsOpenForm(false);
                document.body.style.overflow = "auto";
              }}
              className='w-full py-2 rounded-sm border bg-white border-black hover:shadow-md'
            >
              Cancel
            </button>
            <button
              type='submit'
              className='w-full py-2 rounded-sm border hover:shadow-md bg-black text-white hover:bg-white hover:text-black border-black'
            >
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
