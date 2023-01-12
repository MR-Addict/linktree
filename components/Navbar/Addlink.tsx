"use client";

import { useState } from "react";

import { AddPopup } from "../../app/components";

export default function Addlink() {
  const [isOpenForm, setIsOpenForm] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setIsOpenForm(true);
          document.body.style.overflow = "hidden";
        }}
        className='py-1 px-2 md:px-4 rounded-sm border border-black hover:shadow-md'
      >
        New Link
      </button>
      {isOpenForm && <AddPopup setIsOpenForm={setIsOpenForm} />}
    </>
  );
}
