"use client";

import { useState, useEffect } from "react";

import Buttons from "./Buttons";
import { Form } from "../components";
import { Popup } from "../../components";

export default function Edit({
  initFormData,
}: {
  initFormData: { _id: string; head: string; title: string; link: string; intro: string };
}) {
  const [isPopup, setIsPopup] = useState(false);
  const [popupData, setPopupData] = useState({ status: true, message: "" });

  const [isValid, setIsValid] = useState(false);
  const [formData, setFormData] = useState(initFormData);

  useEffect(() => {
    if (formData.head === "" || formData.title === "" || formData.link === "" || formData.intro === "")
      setIsValid(false);
    else setIsValid(true);
  }, [formData]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsValid(false);
    fetch("/api/linktree/update", {
      method: "POST",
      body: new URLSearchParams(formData),
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.status) console.error(data.message);
        setIsValid(true);
        setIsPopup(true);
        setPopupData(data);
      })
      .catch((error) => {
        setIsValid(true);
        console.error(error);
      });
  }

  async function handleDelete() {
    fetch("/api/linktree/delete", {
      method: "POST",
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
      <Popup popupData={popupData} isPopup={isPopup} setIsPopup={setIsPopup} />
      <h1 className='text-3xl font-bold'>Edit Link</h1>
      <Form formData={formData} setFormData={setFormData} handleSubmit={handleSubmit}>
        <Buttons isValid={isValid} handleDelete={handleDelete} />
      </Form>
    </div>
  );
}
