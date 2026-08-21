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
      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      timeline
        .fromTo(
          imageRef.current,
          {
            scale: 1.12,
            opacity: 0,
          },
          {
            scale: 1,
            opacity: 1,
            duration: 1.6,
          }
        )
        .fromTo(
          titleRef.current,
          {
            y: 80,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1.1,
          },
          "-=0.8"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className={styles.hero}>
      <div className={styles.outerBackground} />

      <div className={styles.frame}>

        {/* TOP BAR */}

        <div className={styles.topBar}>
          <div className={styles.logo}>
            ART & SCIENCE
          </div>

          <div className={styles.established}>
            EST — 2026
          </div>

          <button className={styles.menu} aria-label="Open menu">
            <span />
            <span />
          </button>
        </div>


        {/* HERO CONTENT */}

        <div className={styles.content}>

          <div className={styles.leftInfo}>
            <span className={styles.japanese}>
              空手
            </span>

            <span className={styles.label}>
              THE WAY OF THE EMPTY HAND
            </span>
          </div>


          {/* UNSPLASH IMAGE */}

          <div
            ref={imageRef}
            className={styles.imageWrapper}
          >
            <Image
              src="https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=1200&q=90"
              alt="Karate training"
              fill
              priority
              sizes="(max-width: 768px) 78vw, 42vw"
              className={styles.image}
            />
          </div>


          <div className={styles.counter}>
            01 / 06
          </div>


          <div
            ref={titleRef}
            className={styles.title}
          >
            <h1>
              ART & SCIENCE
              <br />
              OF KARATE
            </h1>

            <p>
              THE DISCIPLINE OF MOVEMENT.
              <br />
              THE SCIENCE OF PRECISION.
            </p>
          </div>

        </div>


        {/* BOTTOM BAR */}

        <div className={styles.bottomBar}>

          <span>
            GOJU RYU KARATE
          </span>

          <div className={styles.scroll}>
            SCROLL
            <span className={styles.scrollLine} />
          </div>

          <span>
            MUMBAI — INDIA
          </span>

        </div>

      </div>
    </section>
  );
}