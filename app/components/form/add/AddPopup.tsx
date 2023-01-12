"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";

import Buttons from "./Buttons";
import { Form } from "../components";
import { Popup } from "../..";

export default function AddPopup({ setIsOpenForm }: { setIsOpenForm: Function }) {
  const router = useRouter();
  const openFormRef = useRef<HTMLDivElement>(null);

  const [isPopup, setIsPopup] = useState(false);
  const [popupData, setPopupData] = useState({ status: true, message: "" });

  const [isValid, setIsValid] = useState(false);

  const [formData, setFormData] = useState({ head: "", title: "", link: "", intro: "" });

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (openFormRef.current && !openFormRef.current.contains(target)) {
      setIsOpenForm(false);
      document.body.style.overflow = "auto";
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (formData.head === "" || formData.title === "" || formData.link === "" || formData.intro === "")
      setIsValid(false);
    else setIsValid(true);
  }, [formData]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsValid(false);
    fetch("/api/linktree/insert", {
      method: "POST",
      body: new URLSearchParams(formData),
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    })
      .then((res) => res.json())
      .then((data) => {
        setFormData({ head: "", title: "", link: "", intro: "" });
        setIsPopup(true);
        setPopupData(data);
        if (!data.status) console.error(data.message);
        if (data.status) router.refresh();
      })
      .catch((error) => console.error(error));
  }

  return (
    <div className='z-10 fixed top-0 left-0 frame w-full h-full flex flex-col gap-4 bg-black/40'>
      <div className='bg-white p-5 md:p-10 rounded-md' ref={openFormRef}>
        <Popup popupData={popupData} isPopup={isPopup} setIsPopup={setIsPopup} />
        <h1 className='text-3xl font-bold'>New Link</h1>
        <Form formData={formData} setFormData={setFormData} handleSubmit={handleSubmit}>
          <Buttons
            isValid={isValid}
            cancelCallback={() => {
              setIsOpenForm(false);
              document.body.style.overflow = "auto";
            }}
          />
        </Form>
      </div>
    </div>
  );
}
