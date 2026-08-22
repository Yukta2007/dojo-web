"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styles from "./KihonSection.module.css";
import { kihonTechniques } from "./DojoData";

gsap.registerPlugin(ScrollTrigger);

export default function KihonSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        listRef.current,
        {
          y: 80,
        },
        {
          y: -100,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        }
      );

      const items = gsap.utils.toArray<HTMLElement>(
        `.${styles.kihonItem}`
      );

      items.forEach((item) => {
        gsap.fromTo(
          item,
          {
            x: 50,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
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
      className={styles.kihonSection}
    >
      <div className={styles.sectionTop}>
        <span>02</span>
        <span>CORE TECHNIQUES</span>
      </div>

      <div className={styles.kihonGrid}>
        <div className={styles.sectionIntro}>
          <span className={styles.japanese}>
            基本
          </span>

          <h2>KIHON</h2>

          <p>
            The foundation of karate. Master the basic
            techniques that form the building blocks of all
            advanced movements.
          </p>
        </div>

        <div
          ref={listRef}
          className={styles.techniqueList}
        >
          {kihonTechniques.map((technique, index) => (
            <div
              className={styles.kihonItem}
              key={technique.name}
            >
              <span className={styles.itemNumber}>
                {String(index + 1).padStart(2, "0")}
              </span>

              <div>
                <h3>{technique.name}</h3>
                <p>{technique.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}