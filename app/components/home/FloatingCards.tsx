"use client";

import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styles from "./FloatingCards.module.css";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    number: "01",
    japanese: "呼吸",
    title: "BREATH",
    text: "Control begins with the breath.",
  },
  {
    number: "02",
    japanese: "動",
    title: "MOVEMENT",
    text: "Every movement has intention.",
  },
  {
    number: "03",
    japanese: "剛柔",
    title: "HARD / SOFT",
    text: "Opposites become one.",
  },
  {
    number: "04",
    japanese: "鍛錬",
    title: "DISCIPLINE",
    text: "Repetition transforms technique.",
  },
];

export default function FloatingCards() {

  const sectionRef =
    useRef<HTMLElement>(null);

  useEffect(() => {

    const ctx = gsap.context(() => {

      gsap.utils
        .toArray<HTMLElement>("[data-card]")
        .forEach((card, index) => {

          gsap.fromTo(

            card,

            {
              opacity: 0,
              y: 150,
              rotate:
                index % 2 === 0
                  ? -5
                  : 5,
            },

            {
              opacity: 1,
              y: 0,
              rotate: 0,

              scrollTrigger: {
                trigger: card,

                start: "top 90%",
                end: "top 55%",

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

      <div className={styles.heading}>

        <span>
          02 — THE PRACTICE
        </span>

        <h2>
          FOUR ELEMENTS
          <br />
          OF GOJU RYU
        </h2>

      </div>


      <div className={styles.cards}>

        {cards.map((card) => (

          <article
            key={card.number}
            className={styles.card}
            data-card
          >

            <div className={styles.cardTop}>

              <span>
                {card.number}
              </span>

              <span>
                {card.japanese}
              </span>

            </div>


            <div>

              <h3>
                {card.title}
              </h3>

              <p>
                {card.text}
              </p>

            </div>


            <div className={styles.line} />

          </article>

        ))}

      </div>

    </section>

  );
}