"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styles from "./KataSection.module.css";
import { kataTechniques } from "./DojoData";

gsap.registerPlugin(ScrollTrigger);

export default function KataSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;

      if (!track) return;

      const getDistance = () =>
        Math.max(
          0,
          track.scrollWidth - window.innerWidth
        );

      gsap.to(track, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${getDistance() + 500}`,
          scrub: 1.5,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={styles.kataSection}
    >
      <div
        ref={trackRef}
        className={styles.kataTrack}
      >
        <div className={styles.kataIntro}>
          <span className={styles.kataNumber}>
            03
          </span>

          <div className={styles.kataJapanese}>
            型
          </div>

          <h2>KATA</h2>

          <p>
            Pre-arranged forms simulating combat against
            multiple opponents. Each movement has practical
            application (bunkai).
          </p>
        </div>

        {kataTechniques.map((kata, index) => (
          <article
            className={styles.kataCard}
            key={kata.name}
          >
            <span>
              {String(index + 1).padStart(2, "0")}
            </span>

            <div>
              <h3>{kata.name}</h3>
              <p>{kata.description}</p>
            </div>
          </article>
        ))}
      </div>

      <div className={styles.sectionLabelBottom}>
        STUDY KATA
      </div>
    </section>
  );
}