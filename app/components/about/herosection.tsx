"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

import styles from "./hero.module.css";

export default function AboutHero() {
  const heroRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      timeline
        .fromTo(
          lineRef.current,
          {
            scaleX: 0,
            transformOrigin: "left center",
          },
          {
            scaleX: 1,
            duration: 1,
          }
        )
        .fromTo(
          imageRef.current,
          {
            scale: 1.15,
            opacity: 0,
            y: 30,
          },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 1.5,
          },
          "-=0.5"
        )
        .fromTo(
          contentRef.current,
          {
            x: 70,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 1.2,
          },
          "-=1"
        );
    }, heroRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section ref={heroRef} className={styles.hero}>
      {/* BACKGROUND */}
      <div className={styles.background} />

      <div className={styles.frame}>
        {/* TOP BAR */}
        <header className={styles.topBar}>
          <div className={styles.logo}>ART &amp; SCIENCE</div>

          <div className={styles.pageLabel}>ABOUT / 02</div>

          <button
            type="button"
            className={styles.menu}
            aria-label="Open menu"
          >
            <span />
            <span />
          </button>
        </header>

        {/* MAIN CONTENT */}
        <div className={styles.content}>
          {/* LEFT SIDE */}
          <div className={styles.leftSide}>
            <div className={styles.verticalLabel}>
              <span>私たちについて</span>
              <span>ABOUT THE DOJO</span>
            </div>

            <div
              ref={imageRef}
              className={styles.imageWrapper}
            >
              <Image
                src="https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=1200&q=90"
                alt="Karate practitioner training"
                fill
                priority
                sizes="(max-width: 768px) 82vw, 43vw"
                className={styles.image}
              />
            </div>

            <div className={styles.imageCaption}>
              <span>01</span>
              <span>THE DOJO / MUMBAI</span>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div
            ref={contentRef}
            className={styles.rightSide}
          >
            <div className={styles.intro}>
              <span className={styles.smallLabel}>
                OUR PHILOSOPHY
              </span>

              <div
                ref={lineRef}
                className={styles.line}
              />
            </div>

            <h1>
              BEYOND
              <br />
              THE <em>DOJO</em>
            </h1>

            <p className={styles.description}>
              Karate is more than movement. It is a practice
              of awareness, discipline and continuous
              refinement.
            </p>

            <p className={styles.secondaryText}>
              We believe that every technique carries a
              lesson — and every lesson begins with the
              discipline to begin again.
            </p>

            <div className={styles.details}>
              <div className={styles.detail}>
                <span>01</span>

                <p>
                  DISCIPLINE
                  <br />
                  BEFORE POWER
                </p>
              </div>

              <div className={styles.detail}>
                <span>02</span>

                <p>
                  PRECISION
                  <br />
                  THROUGH PRACTICE
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* LARGE COUNTER */}
        <div className={styles.counter}>
          02 <span>/ 06</span>
        </div>

        {/* BOTTOM BAR */}
        <footer className={styles.bottomBar}>
          <span>GOJU RYU KARATE</span>

          <div className={styles.scroll}>
            <span>SCROLL</span>
            <span className={styles.scrollLine} />
          </div>

          <span>MUMBAI — INDIA</span>
        </footer>
      </div>
    </section>
  );
}