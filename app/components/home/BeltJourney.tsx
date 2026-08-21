"use client";

import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styles from "./BeltJourney.module.css";

gsap.registerPlugin(ScrollTrigger);

const belts = [
  ["白", "WHITE", "BEGINNING"],
  ["黄", "YELLOW", "AWARENESS"],
  ["橙", "ORANGE", "DISCOVERY"],
  ["緑", "GREEN", "GROWTH"],
  ["青", "BLUE", "DEPTH"],
  ["紫", "PURPLE", "CONTROL"],
  ["茶", "BROWN", "MASTERY"],
  ["黒", "BLACK", "CONTINUATION"],
];

export default function BeltJourney() {

  const sectionRef =
    useRef<HTMLElement>(null);

  useEffect(() => {

    const ctx = gsap.context(() => {

      gsap.utils
        .toArray<HTMLElement>("[data-belt]")
        .forEach((belt) => {

          gsap.fromTo(

            belt,

            {
              opacity: 0.2,
            },

            {
              opacity: 1,

              scrollTrigger: {
                trigger: belt,

                start: "top 70%",
                end: "top 35%",

                scrub: true,
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
          03 — THE JOURNEY
        </span>

        <span>
          KYU → DAN
        </span>

      </div>


      <div className={styles.title}>

        <span>
          GRADES
        </span>

        <h2>
          FROM
          <br />
          WHITE
          <br />
          TO BLACK
        </h2>

      </div>


      <div className={styles.belts}>

        {belts.map(
          ([kanji, name, meaning], index) => (

            <div
              key={name}
              className={styles.belt}
              data-belt
            >

              <span className={styles.number}>
                0{index + 1}
              </span>


              <div className={styles.info}>

                <span className={styles.kanji}>
                  {kanji}
                </span>

                <div>

                  <h3>
                    {name}
                  </h3>

                  <p>
                    {meaning}
                  </p>

                </div>

              </div>


              <div className={styles.track}>

                <div
                  className={`${styles.bar} ${styles[name.toLowerCase()]}`}
                />

              </div>

            </div>

          )
        )}

      </div>

    </section>

  );
}