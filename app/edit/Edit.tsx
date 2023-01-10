"use client";

import { RxCross1 } from "react-icons/rx";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { FaShareSquare, FaRegListAlt, FaRegFlag, FaEdit } from "react-icons/fa";

export default function Edit() {
  const router = useRouter();
  const searchParams = useSearchParams();

  let formParams = {
    _id: searchParams.get("_id"),
    head: searchParams.get("head"),
    title: searchParams.get("title"),
    link: searchParams.get("link"),
    intro: searchParams.get("intro"),
  };

  if (!formParams._id || !formParams.head || !formParams.title || !formParams.link || !formParams.intro)
    return (
      <div className='frame w-full flex flex-col items-center justify-center gap-2'>
        <h1>You cannot directly visit this page!</h1>
      </div>
    );

  const [isPopup, setIsPopup] = useState(false);
  const [popupData, setPopupData] = useState({ status: true, message: "" });

  const [isValid, setIsValid] = useState(false);
  const [formData, setFormData] = useState(formParams);

  useEffect(() => {
    if (formData.head === "" || formData.title === "" || formData.link === "" || formData.intro === "")
      setIsValid(false);
    else setIsValid(true);
  }, [formData]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    fetch("/api/updatelink", {
      method: "POST",
      // @ts-expect-error
      body: new URLSearchParams(formData),
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.status) console.error(data.message);
        setIsPopup(true);
        setPopupData(data);
      })
      .catch((error) => console.error(error));
  }

  async function handleDelete() {
    fetch("/api/deletelink", {
      method: "POST",
      // @ts-expect-error
      body: new URLSearchParams({ _id: formData._id }),
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.status) console.error(data.message);
        setFormData({ _id: "", head: "", title: "", link: "", intro: "" });
        setIsPopup(true);
        setPopupData(data);
      })
      .catch((error) => console.error(error));
  }

  function Popup() {
    return (
      <>
        {popupData.status ? (
          <div className='bg-green-100 px-4 py-1 rounded-sm flex flex-row items-center gap-2 w-fit'>
            <h1 className='w-full font-semibold text-center text-green-900'>{popupData.message}</h1>
            <button
              type='button'
              onClick={() => {
                setIsPopup(false);
                setPopupData({ status: true, message: "" });
              }}
              className='bg-green-900 text-white p-1 rounded-full'
            >
              <RxCross1 size={8} />
            </button>
          </div>
        ) : (
          <div className='bg-red-100 px-4 py-1 rounded-sm flex flex-row items-center gap-2 w-fit'>
            <h1 className='w-full font-semibold text-center text-red-900'>{popupData.message}</h1>
            <button
              type='button'
              onClick={() => {
                setIsPopup(false);
                setPopupData({ status: true, message: "" });
              }}
              className='bg-red-900 text-white p-1 rounded-full'
            >
              <RxCross1 size={8} />
            </button>
          </div>
        )}
      </>
    );
  }

  return (
    <div className='frame w-full flex flex-col gap-4'>
      <div className='flex flex-col md:flex-row gap-4'>
        <h1 className='text-slate-800 text-3xl font-bold'>Edit Link</h1>
        {isPopup && <Popup />}
      </div>
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
            // @ts-expect-error
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
            // @ts-expect-error
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
            // @ts-expect-error
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
            // @ts-expect-error
            value={formData.intro}
            onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
            className='h-40 p-2 rounded-sm border border-black outline-none'
          />
        </div>

        <div className='w-full flex flex-row justify-between gap-3'>
          <button
            type='button'
            onClick={handleDelete}
            className='py-2 px-4 rounded-sm border text-white bg-red-600 hover:shadow-md'
          >
            Delete
          </button>
          <div className='flex flex-row gap-3'>
            <button
              type='button'
              onClick={() => {
                router.push("/");
                router.refresh();
              }}
              className='py-2 px-4 rounded-sm border border-black hover:shadow-md'
            >
              Return
            </button>
            {isValid ? (
              <button
                type='submit'
                className='py-2 px-4 rounded-sm border hover:shadow-md bg-black text-white hover:bg-white hover:text-black border-black'
              >
                Confirm
              </button>
            ) : (
              <button
                disabled
                className='py-2 px-4 rounded-sm border hover:shadow-md cursor-not-allowed bg-black text-white border-black'
              >
                Confirm
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
