"use client";

import { useEffect, useState } from "react";
import { FaShareSquare, FaRegListAlt, FaRegFlag, FaEdit } from "react-icons/fa";

export default function Form({
  formData,
  setFormData,
  handleSubmit,
  children,
}: {
  formData: { _id?: string; head: string; title: string; link: string; intro: string };
  setFormData: Function;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
}) {
  const [availableOptions, setAvailableOptions] = useState([]);

  useEffect(() => {
    fetch("/api/linktree/heads")
      .then((res) => res.json())
      .then((data) => {
        if (data.status) setAvailableOptions(data.data);
        else console.error(data.message);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-3 md:gap-5'>
      <div className='flex flex-col w-full gap-1'>
        <label
          htmlFor='head'
          className='flex flex-row items-center gap-1 dark:text-gray-300 text-gray-700 font-semibold'
        >
          <FaRegListAlt />
          <span>Category</span>
        </label>
        <input
          required
          list='head'
          type='text'
          name='head'
          maxLength={100}
          placeholder='Category'
          value={formData.head}
          onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
          className='p-2 rounded-sm border border-black outline-none'
        />
        <datalist id='head'>
          {availableOptions.map((item, index) => (
            <option key={index}>{item}</option>
          ))}
        </datalist>
      </div>

      <div className='flex flex-col w-full gap-1'>
        <label
          htmlFor='title'
          className='flex flex-row items-center gap-1 dark:text-gray-300 text-gray-700 font-semibold'
        >
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
        <label
          htmlFor='Link'
          className='flex flex-row items-center gap-1 dark:text-gray-300 text-gray-700 font-semibold'
        >
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
        <label
          htmlFor='Link'
          className='flex flex-row items-center gap-1 dark:text-gray-300 text-gray-700 font-semibold'
        >
          <FaEdit />
          <span>Introduction</span>
        </label>
        <textarea
          required
          name='intro'
          maxLength={500}
          placeholder='Introduction'
          value={formData.intro}
          onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
          className='h-40 p-2 rounded-sm border border-black outline-none'
        />
      </div>
      {children}
    </form>
  );
}
