"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

import Buttons from "./Buttons";
import { Form, Popup } from "../components";

export default function Edit() {
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
    fetch("/api/linktree/update", {
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
    fetch("/api/linktree/delete", {
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

  return (
    <div className='frame w-full flex flex-col gap-4'>
      <div className='flex flex-col md:flex-row gap-4'>
        <h1 className='text-slate-800 text-3xl font-bold'>Edit Link</h1>
        {isPopup && <Popup popupData={popupData} setPopupData={setPopupData} setIsPopup={setIsPopup} />}
      </div>
      {/* @ts-expect-error */}
      <Form formData={formData} setFormData={setFormData} handleSubmit={handleSubmit}>
        <Buttons isValid={isValid} handleDelete={handleDelete} />
      </Form>
    </div>
  );
}
