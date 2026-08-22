"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./cursor.module.css";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    if (!cursor) return;

    // =========================================
    // MOUSE MOVEMENT
    // =========================================

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: "power3.out",
        overwrite: true,
      });
    };

    // =========================================
    // HOVER IN
    // =========================================

    const handleEnter = () => {
      gsap.to(cursor, {
        width: 110,
        height: 110,
        borderColor: "#eee7d9",
        duration: 0.35,
        ease: "power3.out",
      });
    };

    // =========================================
    // HOVER OUT
    // =========================================

    const handleLeave = () => {
      gsap.to(cursor, {
        width: 90,
        height: 90,
        borderColor: "#8fa653",
        duration: 0.35,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);

    const elements = document.querySelectorAll(
      "a, button, [data-cursor]"
    );

    elements.forEach((element) => {
      element.addEventListener("mouseenter", handleEnter);
      element.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);

      elements.forEach((element) => {
        element.removeEventListener("mouseenter", handleEnter);
        element.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  return <div ref={cursorRef} className={styles.cursor} />;
}