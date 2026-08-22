"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styles from "./KumiteSection.module.css";
import { kumiteTechniques } from "./DojoData";

gsap.registerPlugin(ScrollTrigger);

export default function KumiteSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const jpRef = useRef<HTMLDivElement>(null);
  const techniquesRef = useRef<HTMLUListElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const description = descriptionRef.current;
    const jp = jpRef.current;
    const techniques = techniquesRef.current;

    if (
      !section ||
      !title ||
      !description ||
      !jp ||
      !techniques
    ) {
      return;
    }

    const ctx = gsap.context(() => {
      /* =====================================================
         INITIAL STATE
      ===================================================== */

      gsap.set(title, {
        y: 100,
        opacity: 0,
      });

      gsap.set(description, {
        y: 50,
        opacity: 0,
      });

      gsap.set(jp, {
        y: 30,
        opacity: 0,
      });

      gsap.set(techniques.children, {
        y: 20,
        opacity: 0,
      });


      /* =====================================================
         SECTION ENTER
      ===================================================== */

      const enter = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          end: "top 35%",
          scrub: 1.4,
        },
      });

      enter
        .to(title, {
          y: 0,
          opacity: 1,
          ease: "power3.out",
        })

        .to(
          jp,
          {
            y: 0,
            opacity: 1,
            ease: "power3.out",
          },
          "-=0.55"
        )

        .to(
          description,
          {
            y: 0,
            opacity: 1,
            ease: "power3.out",
          },
          "-=0.45"
        )

        .to(
          techniques.children,
          {
            y: 0,
            opacity: 1,
            stagger: 0.025,
            ease: "power2.out",
          },
          "-=0.35"
        );


      /* =====================================================
         SECTION EXIT
      ===================================================== */

      const exit = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "bottom 70%",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      exit
        .to(title, {
          y: -100,
          opacity: 0,
          ease: "power2.inOut",
        })

        .to(
          description,
          {
            y: -50,
            opacity: 0,
            ease: "power2.inOut",
          },
          "<"
        )

        .to(
          jp,
          {
            y: -30,
            opacity: 0,
            ease: "power2.inOut",
          },
          "<"
        )

        .to(
          techniques.children,
          {
            y: -25,
            opacity: 0,
            stagger: 0.02,
            ease: "power2.inOut",
          },
          "<"
        );
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={styles.kumiteSection}
    >
      <div className={styles.kumiteInner}>

        {/* =================================================
            SECTION META
        ================================================= */}

        <div className={styles.meta}>
          <span className={styles.number}>
            04
          </span>

          <span className={styles.label}>
            Study Sparrings
          </span>
        </div>


        {/* =================================================
            JAPANESE
        ================================================= */}

        <div
          ref={jpRef}
          className={styles.jp}
        >
          組手
        </div>


        {/* =================================================
            TITLE
        ================================================= */}

        <h2
          ref={titleRef}
          className={styles.title}
        >
          KUMITE
        </h2>


        {/* =================================================
            DESCRIPTION
        ================================================= */}

        <p
          ref={descriptionRef}
          className={styles.description}
        >
          Sparring practice that applies techniques
          against a live opponent. Develops timing,
          distance, and strategy.
        </p>


        {/* =================================================
            TECHNIQUES
        ================================================= */}

        <ul
          ref={techniquesRef}
          className={styles.techniques}
        >
          {kumiteTechniques.map((technique, index) => (
            <li
              key={`${technique}-${index}`}
              className={styles.technique}
            >
              {technique}
            </li>
          ))}
        </ul>


        {/* =================================================
            SCROLL
        ================================================= */}

        <div className={styles.scrollHint}>
          Scroll
        </div>

      </div>
    </section>
  );
}