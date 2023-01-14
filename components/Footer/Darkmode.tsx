"use client";

import { useState, useEffect } from "react";

export default function Darkmode() {
  const [themeMode, setThemeMode] = useState("light");

  useEffect(() => {
    const localThemeMode = localStorage.getItem("theme");
    document.documentElement.classList.toggle("dark", localThemeMode === "dark");
    if (localThemeMode === "dark") setThemeMode("dark");
    else setThemeMode("light");
  }, []);

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    document.documentElement.classList.toggle("dark", e.target.value === "dark");
    localStorage.setItem("theme", e.target.value);
    setThemeMode(e.target.value);
  }

  return (
    <div className='flex flex-row items-center gap-1'>
      <h1>Theme</h1>
      <select
        onChange={handleChange}
        name='theme'
        value={themeMode}
        className='dark:bg-gray-900 dark:text-white border outline-none border-black px-1 rounded-sm'
      >
        <option value='light'>Light</option>
        <option value='dark'>Dark</option>
      </select>
    </div>
  );
}
