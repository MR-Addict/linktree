"use client";

import { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";

export default function ScrollToTop() {
  const [isVisiable, setIsVisiable] = useState(false);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateIsScrollUp = () => {
      const scrollY = window.pageYOffset;
      if (Math.abs(scrollY - lastScrollY) < 100) return;
      if (scrollY < lastScrollY && window.scrollY > 300) setIsVisiable(true);
      else setIsVisiable(false);
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    const handleScroll = () => {
      window.requestAnimationFrame(updateIsScrollUp);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      onClick={() => window.scroll({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-5 md:bottom-10 right-5 md:right-10 duration-300 shadow-md bg-black text-white rounded-full p-2 ${
        isVisiable ? "scale-100" : "scale-0"
      }`}
    >
      <IoIosArrowUp size={30} />
    </button>
  );
}
