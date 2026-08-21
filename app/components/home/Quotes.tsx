"use client";

import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styles from "./Quotes.module.css";

gsap.registerPlugin(ScrollTrigger);

const quotes = [
  {
    japanese: "剛柔流",
    quote:
      "The way of Goju Ryu is found between strength and softness.",
    source: "GOJU RYU",
  },
  {
    japanese: "心技体",
    quote:
      "Mind, technique and body must move as one.",
    source: "THE PRACTICE",
  },
  {
    japanese: "鍛錬",
    quote:
      "Through repetition, movement becomes understanding.",
    source: "DISCIPLINE",
  },
];

export default function Quotes() {

  const sectionRef =
    useRef<HTMLElement>(null);

  useEffect(() => {

    const ctx = gsap.context(() => {

      gsap.utils
        .toArray<HTMLElement>("[data-quote]")
        .forEach((quote) => {

          gsap.fromTo(
            quote,

            {
              opacity: 0,
              y: 100,
            },

            {
              opacity: 1,
              y: 0,

              scrollTrigger: {
                trigger: quote,

                start: "top 80%",
                end: "top 35%",

                scrub: 1,
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
      className={styles.section}
    >

      <div className={styles.header}>

        <span>
          01 — PHILOSOPHY
        </span>

        <span>
          GOJU RYU
        </span>

      </div>


      <div className={styles.quotes}>

        {quotes.map((item, index) => (

          <article
            key={item.source}
            className={styles.quote}
            data-quote
          >

            <span className={styles.number}>
              0{index + 1}
            </span>

            <span className={styles.japanese}>
              {item.japanese}
            </span>

            <h2>
              “{item.quote}”
            </h2>

            <span className={styles.source}>
              — {item.source}
            </span>

          </article>

        ))}

      </div>

    </section>

  );
}