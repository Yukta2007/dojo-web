"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

import styles from "./JournalBasics.module.css";

export default function JournalBasics() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        `.${styles.revealItem}`,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} ${styles.reveal}`}
    >
      <div className={styles.sectionNumber}>
        01
      </div>

      <div className={styles.sectionHeading}>
        <span>BEGIN</span>

        <h2>
          HOW WAS
          <br />
          YOUR SESSION?
        </h2>

        <p>
          Start with the details.
          Every session becomes part
          of your personal record.
        </p>
      </div>

      <div className={styles.formArea}>
        <label className={styles.field}>
          <span>SESSION TITLE</span>

          <input
            type="text"
            placeholder="Morning practice"
          />
        </label>

        <div className={styles.fieldGrid}>
          <label className={styles.field}>
            <span>DATE</span>

            <input type="date" />
          </label>

          <label className={styles.field}>
            <span>DURATION</span>

            <input
              type="text"
              placeholder="90 minutes"
            />
          </label>
        </div>
      </div>
    </section>
  );
}