"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { FaShareSquare, FaRegListAlt, FaRegFlag, FaEdit } from "react-icons/fa";

export default function Add() {
  const router = useRouter();

  const [isValid, setIsValid] = useState(false);
  const [formData, setFormData] = useState({ head: "", title: "", link: "", intro: "" });

  useEffect(() => {
    if (formData.head === "" || formData.title === "" || formData.link === "" || formData.intro === "")
      setIsValid(false);
    else setIsValid(true);
  }, [formData]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetch("/api/insertlink", {
      method: "POST",
      body: new URLSearchParams(formData),
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.status) console.log(data.message);
        setFormData({ head: "", title: "", link: "", intro: "" });
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className='frame w-full flex flex-col gap-4'>
      <h1 className='text-slate-800 text-3xl font-bold'>New Link</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
        <div className='flex flex-col w-full gap-1'>
          <label htmlFor='title' className='flex flex-row items-center gap-1 text-gray-700 font-semibold'>
            <FaRegFlag />
            <span>Title</span>
          </label>
          <input
            required
            type='text'
            name='title'
            maxLength={100}
            placeholder='Title'
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
            className='p-2 rounded-sm border border-black outline-none'
          />
        </div>

        <div className='flex flex-col w-full gap-1'>
          <label htmlFor='Link' className='flex flex-row items-center gap-1 text-gray-700 font-semibold'>
            <FaShareSquare />
            <span>Link</span>
          </label>
          <input
            required
            type='text'
            name='link'
            maxLength={100}
            placeholder='Link'
            value={formData.link}
            onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
            className='p-2 rounded-sm border border-black outline-none'
          />
        </div>

        <div className='flex flex-col w-full gap-1'>
          <label htmlFor='head' className='flex flex-row items-center gap-1 text-gray-700 font-semibold'>
            <FaRegListAlt />
            <span>Category</span>
          </label>
          <input
            required
            type='text'
            name='head'
            maxLength={100}
            placeholder='Category'
            value={formData.head}
            onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
            className='p-2 rounded-sm border border-black outline-none'
          />
        </div>

        <div className='flex flex-col w-full gap-1'>
          <label htmlFor='Link' className='flex flex-row items-center gap-1 text-gray-700 font-semibold'>
            <FaEdit />
            <span>Introduction</span>
          </label>
          <textarea
            required
            name='intro'
            maxLength={100}
            placeholder='Introduction'
            value={formData.intro}
            onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
            className='h-40 p-2 rounded-sm border border-black outline-none'
          />
        </div>

        <div className='w-full flex flex-row justify-end gap-3'>
          <button
            type='button'
            onClick={() => router.replace("/")}
            className='py-2 px-4 rounded-sm border border-black hover:shadow-md'
          >
            Return
          </button>
          {isValid ? (
            <button
              type='submit'
              className='px-4 py-2 rounded-sm border hover:shadow-md bg-black text-white hover:bg-white hover:text-black border-black'
            >
              Create
            </button>
          ) : (
            <button
              disabled
              className='px-4 py-2 rounded-sm border hover:shadow-md cursor-not-allowed bg-black text-white border-black'
            >
              Create
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
