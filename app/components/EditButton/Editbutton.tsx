"use client";

import { useState } from "react";
import { AiFillEdit } from "react-icons/ai";

import { linktreeItemType } from "../../config";
import EditPopup from "../form/edit/EditPopup";

export default function EditButton({ link }: { link: linktreeItemType }) {
  const [isOpenForm, setIsOpenForm] = useState(false);

  console.log(link);

  return (
    <>
      <button
        onClick={() => {
          setIsOpenForm(true);
          document.body.style.overflow = "hidden";
        }}
        className='scale-0 translate-x-0 translate-y-0 group-hover:scale-100 group-hover:translate-x-3 group-hover:-translate-y-3 duration-100 absolute right-0 top-0 p-2 rounded-full border border-black bg-black text-white hover:bg-white hover:text-black'
      >
        <AiFillEdit />
      </button>
      {/* @ts-expect-error */}
      <EditPopup initFormData={link} isOpenForm={isOpenForm} setIsOpenForm={setIsOpenForm} />
    </>
  );
}
