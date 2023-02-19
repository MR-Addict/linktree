"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

import Buttons from "./Buttons";
import { Form } from "../components";
import Popup from "../../../../components/Popup/Popup";

export default function EditPopup({
  initFormData,
  isOpenForm,
  setIsOpenForm,
}: {
  initFormData: { _id: string; head: string; title: string; link: string; intro: string };
  isOpenForm: boolean;
  setIsOpenForm: Function;
}) {
  const router = useRouter();

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
    fetch("/api/linktree/updatelink", {
      method: "POST",
      body: new URLSearchParams(formData),
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    })
      .then((res) => res.json())
      .then((data) => {
        setIsValid(true);
        setIsPopup(true);
        setPopupData(data);
        if (!data.status) console.error(data.message);
        if (data.status) router.refresh();
      })
      .catch((error) => {
        setIsValid(true);
        console.error(error);
      });
  }

  async function handleDelete() {
    fetch("/api/linktree/deletelink", {
      method: "POST",
      body: new URLSearchParams({ _id: formData._id }),
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    })
      .then((res) => res.json())
      .then((data) => {
        setFormData({ _id: "", head: "", title: "", link: "", intro: "" });
        setIsPopup(true);
        setPopupData(data);
        if (!data.status) console.error(data.message);
        if (data.status) router.refresh();
      })
      .catch((error) => console.error(error));
  }

  return (
    <div className={`${isOpenForm ? "scale-100" : "scale-0"} z-10 fixed top-0 left-0 frame w-full h-full bg-black/40`}>
      <Popup popupData={popupData} isPopup={isPopup} setIsPopup={setIsPopup} />
      <div
        className={`${
          isOpenForm ? "scale-100" : "scale-0"
        } duration-200 flex flex-col gap-3 dark:bg-gray-700 bg-white p-5 md:p-10 rounded-md`}
      >
        <h1 className='dark:text-white text-3xl font-bold'>Edit Link</h1>
        <Form formData={formData} setFormData={setFormData} handleSubmit={handleSubmit}>
          <Buttons
            isValid={isValid}
            handleDelete={handleDelete}
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
