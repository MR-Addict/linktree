"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

import Buttons from "./Buttons";
import { Form } from "../components";
import Popup from "../../../../components/Popup/Popup";

export default function AddPopup({ isOpenForm, setIsOpenForm }: { isOpenForm: boolean; setIsOpenForm: Function }) {
  const router = useRouter();

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
    setIsValid(false);
    fetch("/api/linktree/insertlink", {
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
    <div className={`${isOpenForm ? "scale-100" : "scale-0"} z-10 fixed top-0 left-0 frame w-full h-full bg-black/40`}>
      <Popup popupData={popupData} isPopup={isPopup} setIsPopup={setIsPopup} />
      <div
        className={`${
          isOpenForm ? "scale-100" : "scale-0"
        } duration-200 flex flex-col gap-3 dark:bg-gray-700 bg-white p-5 md:p-10 rounded-md`}
      >
        <h1 className='dark:text-white text-3xl font-bold'>New Link</h1>
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
