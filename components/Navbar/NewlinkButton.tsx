"use client";

import { useState } from "react";

import { AddPopup } from "../../app/components";

export default function NewlinkButton() {
  const [isOpenForm, setIsOpenForm] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setIsOpenForm(true);
          document.body.style.overflow = "hidden";
        }}
        className='py-1 px-2 md:px-4 rounded-sm border bg-white border-black hover:shadow-md'
      >
        New Link
      </button>
      <AddPopup isOpenForm={isOpenForm} setIsOpenForm={setIsOpenForm} />
    </>
  );
}
