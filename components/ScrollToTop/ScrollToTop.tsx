"use client";

import { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";

export default function ScrollToTop() {
  const [isVisiable, setIsVisiable] = useState(false);

  const toggleVisiability = () => {
    if (window.scrollY > 300) setIsVisiable(true);
    else setIsVisiable(false);
  };

  const scrollToTop = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisiability);
    return () => window.removeEventListener("scroll", toggleVisiability);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-5 md:bottom-10 right-5 md:right-10 duration-300 shadow-md bg-black text-white rounded-full p-2 ${
        isVisiable ? "scale-100" : "scale-0"
      }`}
    >
      <IoIosArrowUp size={30} />
    </button>
  );
}
