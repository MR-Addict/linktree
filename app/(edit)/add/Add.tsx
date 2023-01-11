"use client";

import { useState, useEffect } from "react";

import Buttons from "./Buttons";
import { Popup, Form } from "../components";

export default function Add() {
  const [isPopup, setIsPopup] = useState(false);
  const [popupData, setPopupData] = useState({ status: true, message: "" });

  const [isValid, setIsValid] = useState(false);

  const [formData, setFormData] = useState({ head: "", title: "", link: "", intro: "" });

  useEffect(() => {
    if (formData.head === "" || formData.title === "" || formData.link === "" || formData.intro === "")
      setIsValid(false);
    else setIsValid(true);
  }, [formData]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    fetch("/api/linktree/insert", {
      method: "POST",
      body: new URLSearchParams(formData),
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.status) console.error(data.message);
        setFormData({ head: "", title: "", link: "", intro: "" });
        setIsPopup(true);
        setPopupData(data);
      })
      .catch((error) => console.error(error));
  }

  return (
    <div className='frame w-full flex flex-col gap-4'>
      <div className='flex flex-col md:flex-row gap-4'>
        <h1 className='text-slate-800 text-3xl font-bold'>New Link</h1>
        {isPopup && <Popup popupData={popupData} setPopupData={setPopupData} setIsPopup={setIsPopup} />}
      </div>
      <Form formData={formData} setFormData={setFormData} handleSubmit={handleSubmit}>
        <Buttons isValid={isValid} />
      </Form>
    </div>
  );
}
