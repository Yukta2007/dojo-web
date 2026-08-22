"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styles from "./JournalFinal.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function JournalFinal() {
  const sectionRef = useRef<HTMLElement>(null);
  const markRef = useRef<HTMLDivElement>(null);
  const japaneseRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      /* =========================================
         INITIAL STATE
      ========================================= */

      gsap.set(
        [
          japaneseRef.current,
          titleRef.current,
          descriptionRef.current,
          buttonRef.current,
        ],
        {
          y: 50,
          opacity: 0,
        }
      );

      gsap.set(markRef.current, {
        scale: 0.7,
        opacity: 0,
      });

      /* =========================================
         ENTER ANIMATION
      ========================================= */

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          end: "top 30%",
          scrub: 1.2,
        },
      });

      timeline
        .to(japaneseRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        })
        .to(
          titleRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.55"
        )
        .to(
          descriptionRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.55"
        )
        .to(
          buttonRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.45"
        )
        .to(
          markRef.current,
          {
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
          },
          "-=0.8"
        );

      /* =========================================
         CIRCLE PARALLAX
      ========================================= */

      gsap.to(markRef.current, {
        y: -80,
        rotate: 10,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      /* =========================================
         TITLE PARALLAX
      ========================================= */

      gsap.to(titleRef.current, {
        y: -25,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  const handleSave = () => {
    console.log("Journal session saved");
  };

  return (
    <section
      ref={sectionRef}
      className={styles.finalSection}
    >
      {/* =========================================
          JAPANESE
      ========================================= */}

      <div
        ref={japaneseRef}
        className={styles.finalJapanese}
      >
        継続
      </div>

      {/* =========================================
          MAIN TITLE
      ========================================= */}

      <h2
        ref={titleRef}
        className={styles.finalTitle}
      >
        KEEP
        <br />
        GOING.
      </h2>

      {/* =========================================
          DESCRIPTION
      ========================================= */}

      <p
        ref={descriptionRef}
        className={styles.finalDescription}
      >
        Progress is built one session at a time.
        <br />
        Keep the record. Continue the practice.
      </p>

      {/* =========================================
          SAVE BUTTON
      ========================================= */}

      <button
        ref={buttonRef}
        type="button"
        className={styles.saveButton}
        onClick={handleSave}
      >
        <span>SAVE SESSION</span>
        <span className={styles.buttonArrow}>
          →
        </span>
      </button>

      {/* =========================================
          DECORATIVE MARK
      ========================================= */}

      <div
        ref={markRef}
        className={styles.finalMark}
        aria-hidden="true"
      >
        <span />
        <span />
        <span />
      </div>

      {/* =========================================
          BOTTOM LABEL
      ========================================= */}

      <div className={styles.finalFooter}>
        <span>06</span>

        <span>
          THE JOURNAL
        </span>

        <span>
          CONTINUE THE PRACTICE
        </span>
      </div>
    </section>
  );
}