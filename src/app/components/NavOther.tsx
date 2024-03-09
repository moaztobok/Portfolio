"use client";
import { Sun } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

const NavOther = () => {
  useEffect(() => {
    const html = document.querySelector("html");
    if (
      window.matchMedia("(prefers-color-scheme:dark").matches ||
      localStorage.getItem("theme") === "dark"
    ) {
      if (html) html.classList.add("dark");
    }
  }, []);
  const handleTheme = () => {
    if (typeof window === "undefined") return;
    else {
      const html = document.querySelector("html");
      if (!html) return;
      if (!html.classList.contains("dark")) {
        html.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        html.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    }
  };
  return (
    <div
      className="absolute bottom-full w-full flex justify-between z-30 p-4"
      id="top-nav"
    >
      <button
        className="w-10 h-10 aspect-square rounded-full bg-primary"
        onClick={handleTheme}
      >
        <Sun
          size={24}
          className="mx-auto fill-primary-foreground stroke-primary-foreground"
        />
      </button>
      <div className="text-primary flex gap-2">
        <Link href={"https://www.behance.net/MoazTobok"}>Behance</Link>
        {" /"}
        <Link href={"https://www.instagram.com/moaztobok/"}>Instagram</Link>
        {" /"}
        <Link href={"https://www.linkedin.com/in/moaztobok/"}>LinkedIn</Link>
      </div>
    </div>
  );
};

export default NavOther;
