"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

import styles from "./Hero.module.css";

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.fromTo(
        imageRef.current,
        {
          opacity: 0,
          scale: 1.04,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1.4,
        }
      ).fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: 35,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
        },
        "-=0.8"
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className={styles.hero}>

      {/* BACKGROUND */}
      <div className={styles.background} />

      {/* ARCHITECTURAL GRID */}
      <div className={styles.grid} />

      {/* MAIN FRAME */}
      <div className={styles.frame}>

        {/* TOP INFORMATION */}
        <div className={styles.topInfo}>

          <div className={styles.location}>
            MUMBAI — INDIA
          </div>

          <div className={styles.year}>
            EST. 2026
          </div>

        </div>


        {/* LEFT LABEL */}
        <div className={styles.leftLabel}>
          <span>01</span>
          <span>THE WAY OF THE EMPTY HAND</span>
        </div>


        {/* JAPANESE TITLE */}
        <div className={styles.japanese}>
          空手
        </div>


        {/* MAIN IMAGE */}
        <div
          ref={imageRef}
          className={styles.imageWrapper}
        >
          <Image
            src="https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=1800&q=90"
            alt="Karate practitioner"
            fill
            priority
            sizes="(max-width: 768px) 92vw, 60vw"
            className={styles.image}
          />

          <div className={styles.imageOverlay} />
        </div>


        {/* IMAGE NUMBER */}
        <div className={styles.counter}>
          01 / 06
        </div>


        {/* MAIN TITLE */}
        <div
          ref={titleRef}
          className={styles.title}
        >
          <span className={styles.titleSmall}>
            THE ART & SCIENCE OF
          </span>

          <h1>
            KARATE
          </h1>

          <p>
            THE DISCIPLINE OF MOVEMENT.
            <br />
            THE SCIENCE OF PRECISION.
          </p>
        </div>


        {/* BOTTOM INFORMATION */}
        <div className={styles.bottomInfo}>

          <div>
            <span className={styles.bottomLabel}>
              STYLE
            </span>

            <span>
              GOJU-RYU
            </span>
          </div>


          <div className={styles.scroll}>
            <span>SCROLL TO EXPLORE</span>
            <span className={styles.scrollLine} />
          </div>


          <div>
            <span className={styles.bottomLabel}>
              DISCIPLINE
            </span>

            <span>
              MIND / BODY
            </span>
          </div>

        </div>

      </div>

    </section>
  );
}