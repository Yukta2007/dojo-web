"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

import styles from "./JournalHero.module.css";

export default function JournalHero() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        `.${styles.heroItem}`,
        {
          y: 70,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.12,
          ease: "power3.out",
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={styles.hero}
    >
      <div
        className={`${styles.heroItem} ${styles.heroMeta}`}
      >
        <span>06</span>
        <span>THE JOURNAL</span>
      </div>

      <div className={styles.heroContent}>
        <div
          className={`${styles.heroItem} ${styles.japanese}`}
        >
          稽古日誌
        </div>

        <h1
          className={`${styles.heroItem} ${styles.heroTitle}`}
        >
          TRAINING
          <br />
          JOURNAL
        </h1>

        <p
          className={`${styles.heroItem} ${styles.heroDescription}`}
        >
          Record the work behind the progress.
          <br />
          Remember what you learned today.
        </p>
      </div>

      <div className={styles.heroSide}>
        <span />
        <span>WRITE YOUR SESSION</span>
      </div>
    </section>
  );
}