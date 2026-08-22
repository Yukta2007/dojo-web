"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

import styles from "./DojoHero.module.css";

export default function DojoHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const japaneseRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      timeline
        .fromTo(
          japaneseRef.current,
          {
            y: 40,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
          }
        )
        .fromTo(
          titleRef.current,
          {
            y: 30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
          },
          "-=0.6"
        )
        .fromTo(
          descriptionRef.current,
          {
            y: 20,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
          },
          "-=0.5"
        )
        .fromTo(
          circleRef.current,
          {
            scale: 0.7,
            opacity: 0,
          },
          {
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
          },
          "-=0.7"
        )
        .fromTo(
          bottomRef.current,
          {
            y: 15,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
          },
          "-=0.5"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={styles.dojoHero}
    >
      {/* TOP LEFT */}
      <div className={styles.heroBrand}>
        DOJO
      </div>

      {/* TOP RIGHT */}
      <div className={styles.heroMenu}>
        <span>MENU</span>

        <div className={styles.menuIcon}>
          <span />
          <span />
        </div>
      </div>

      {/* LEFT NUMBER */}
      <div className={styles.heroSectionNumber}>
        <span />
        <p>01</p>
      </div>

      {/* MAIN CONTENT */}
      <div className={styles.heroContent}>
        <div
          ref={japaneseRef}
          className={styles.heroJapanese}
        >
          道場
        </div>

        <h1
          ref={titleRef}
          className={styles.heroTitle}
        >
          THE DOJO
        </h1>

        <p
          ref={descriptionRef}
          className={styles.heroDescription}
        >
          The traditional training hall where mind, body,
          <br />
          and spirit unite through disciplined practice.
        </p>
      </div>

      {/* CIRCLE */}
      <div
        ref={circleRef}
        className={styles.heroCircle}
      />

      {/* BOTTOM */}
      <div
        ref={bottomRef}
        className={styles.heroBottom}
      >
        <div className={styles.heroBadge}>
          N
        </div>

        <div className={styles.scrollPrompt}>
          <span />
          <p>SCROLL TO TRAIN</p>
        </div>
      </div>

      {/* RIGHT DOTS */}
      <div className={styles.heroDots}>
        <span className={styles.activeDot} />
        <span />
        <span />
        <span />
        <span />
      </div>
    </section>
  );
}