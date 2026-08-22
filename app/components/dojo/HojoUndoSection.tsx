"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styles from "./dojo.module.css";
import { hojoUndoTechniques } from "./DojoData";

gsap.registerPlugin(ScrollTrigger);

export default function HojoUndoSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(
        `.${styles.hojoItem}`
      );

      gsap.fromTo(
        `.${styles.hojoTitle}`,
        {
          y: 70,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );

      items.forEach((item, index) => {
        gsap.fromTo(
          item,
          {
            y: 40,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            delay: index * 0.03,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 90%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={styles.hojoSection}
    >
      <div className={styles.sectionTop}>
        <span>05</span>
        <span>THE EQUIPMENT</span>
      </div>

      <div className={styles.hojoHeader}>
        <span className={styles.japanese}>
          補強運動
        </span>

        <h2 className={styles.hojoTitle}>
          HOJO
          <br />
          UNDO
        </h2>

        <p>
          Traditional supplementary training using
          specialized equipment to develop strength,
          power, and conditioning.
        </p>
      </div>

      <div className={styles.hojoGrid}>
        {hojoUndoTechniques.map((item, index) => (
          <div
            className={styles.hojoItem}
            key={item.name}
          >
            <span>
              {String(index + 1).padStart(2, "0")}
            </span>

            <div>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}