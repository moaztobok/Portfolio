"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  let offsetX = 20;
  let offsetY = 10;
  const moveCursor = (e: MouseEvent): void => {
    gsap.to(cursorRef.current, {
      x: e.clientX,
      y: e.clientY,
      duration: 0,
    });
    gsap.to(followerRef.current, {
      x: e.clientX,
      y: e.clientY,
      duration: 0,
    });
  };
  useEffect(() => {
    gsap.set(cursorRef.current, {
      xPercent: 100,
      yPercent: 100,
    });
    gsap.set(followerRef.current, {
      xPercent: 0,
      yPercent: 0,
    });
    window.addEventListener("mousemove", moveCursor);
  }, []);
  return (
    <div>
      <div
        ref={cursorRef}
        className="w-2 h-2 rounded fixed bg-primary pointer-events-none"
      ></div>
      <div
        ref={followerRef}
        className="w-10 h-10 rounded-full fixed border  border-primary z-[999] pointer-events-none"
      ></div>
    </div>
  );
};

export default CustomCursor;
