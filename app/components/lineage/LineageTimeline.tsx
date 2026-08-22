"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styles from "./LineageTimeline.module.css";
gsap.registerPlugin(ScrollTrigger);

const lineage = [
  {
    year: "1600s",
    title: "Okinawan Roots",
    text: `The indigenous martial art of "Te" (hand) develops in Okinawa,
    influenced by Chinese martial artists who visit the Ryukyu Kingdom.
    The banning of weapons by King Sho Shin leads to the refinement of
    empty-hand techniques.`,
  },
  {
    year: "1867",
    title: "Kanryo Higaonna",
    text: `Travels to Fuzhou, China, where he studies under Master Ryu Ryu Ko
    for approximately 13 years. Returns to Okinawa and begins teaching
    "Naha-te," which emphasizes close-range combat and circular movements.`,
  },
  {
    year: "1930",
    title: "Chojun Miyagi",
    text: `Establishes Goju-Ryu Karate-do, naming it after the concepts in
    the "Bubishi" (Go = hard, Ju = soft). Systemizes the curriculum with
    foundational kata Sanchin and advanced kata like Seisan and Suparinpei.`,
  },
  {
    year: "1963",
    title: "Meitoku Yagi",
    text: `Designated as Miyagi's successor. After Miyagi's passing, continues
    to teach and spread Goju-Ryu worldwide while maintaining traditional
    values. Establishes the Meibukan dojo.`,
  },
  {
    year: "Present",
    title: "Digital Dojo",
    text: `Continuing the lineage through modern technology while preserving
    traditional teachings. Making the art accessible worldwide while
    maintaining the essence of Okinawan Goju-Ryu Karate-do.`,
  },
];

export default function LineageTimeline() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      /* =====================================================
         HERO REVEAL
      ===================================================== */

      const heroTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          once: true,
        },
      });

      heroTimeline
        .fromTo(
          `.${styles.heroEyebrow}`,
          {
            y: 30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
          }
        )
        .fromTo(
          `.${styles.heroTitle}`,
          {
            y: 70,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .fromTo(
          `.${styles.heroDescription}`,
          {
            y: 30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.55"
        );


      /* =====================================================
         GOLD LINE
      ===================================================== */

      gsap.fromTo(
        `.${styles.timelineLine}`,
        {
          scaleY: 0,
          transformOrigin: "top",
        },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: `.${styles.timeline}`,
            start: "top 75%",
            end: "bottom 70%",
            scrub: 1.2,
          },
        }
      );


      /* =====================================================
         TIMELINE ITEMS
      ===================================================== */

      const items = gsap.utils.toArray<HTMLElement>(
        `.${styles.timelineItem}`
      );

      items.forEach((item) => {
        const year = item.querySelector(
          `.${styles.timelineYear}`
        );

        const content = item.querySelector(
          `.${styles.timelineContent}`
        );

        const dot = item.querySelector(
          `.${styles.timelineDot}`
        );

        const direction =
          item.dataset.side === "right" ? 60 : -60;

        gsap.fromTo(
          year,
          {
            x: direction,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 78%",
            },
          }
        );

        gsap.fromTo(
          content,
          {
            y: 60,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 78%",
            },
          }
        );

        gsap.fromTo(
          dot,
          {
            scale: 0,
            opacity: 0,
          },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: item,
              start: "top 78%",
            },
          }
        );
      });


      /* =====================================================
         FINAL STATEMENT
      ===================================================== */

      gsap.fromTo(
        `.${styles.closing}`,
        {
          y: 60,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: `.${styles.closing}`,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={styles.lineageSection}
    >

      {/* =====================================================
          HERO
      ===================================================== */}

      <header className={styles.hero}>

        <div className={styles.heroEyebrow}>
          <span>06</span>
          <span>THE LINEAGE</span>
        </div>

        <div className={styles.heroJapanese}>
          系譜
        </div>

        <h1 className={styles.heroTitle}>
          LINEAGE
        </h1>

        <p className={styles.heroDescription}>
          The unbroken chain of knowledge transmission
          from master to student across generations.
        </p>

        <div className={styles.heroMark}>
          <span />
          <span />
          <span />
        </div>

      </header>


      {/* =====================================================
          TIMELINE
      ===================================================== */}

      <div className={styles.timeline}>

        <div className={styles.timelineLine} />

        {lineage.map((item, index) => (
          <article
            key={`${item.year}-${index}`}
            className={styles.timelineItem}
            data-side={index % 2 === 0 ? "left" : "right"}
          >

            <div className={styles.timelineYear}>
              {item.year}
            </div>

            <div className={styles.timelineDot}>
              <span />
            </div>

            <div className={styles.timelineContent}>

              <span className={styles.entryNumber}>
                {String(index + 1).padStart(2, "0")}
              </span>

              <h2>
                {item.title}
              </h2>

              <p>
                {item.text}
              </p>

            </div>

          </article>
        ))}

      </div>


      {/* =====================================================
          CLOSING
      ===================================================== */}

      <div className={styles.closing}>

        <div className={styles.closingJapanese}>
          守破離
        </div>

        <h2>
          PRESERVE.
          <br />
          PRACTICE.
          <br />
          TRANSMIT.
        </h2>

        <p>
          The tradition continues with every student
          who enters the dojo.
        </p>

      </div>

    </section>
  );
}