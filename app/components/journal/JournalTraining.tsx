"use client";

import { useState } from "react";

import styles from "./JournalTraining.module.css";

import { trainingTypes } from "./JournalData";

export default function JournalTraining() {
  const [selected, setSelected] = useState("");

  return (
    <section
      className={`${styles.section} ${styles.greenBlock}`}
    >
      <div className={styles.sectionNumber}>
        02
      </div>

      <div className={styles.sectionHeading}>
        <span>TRAINING</span>

        <h2>
          WHAT DID
          <br />
          YOU TRAIN?
        </h2>

        <p>
          Select the areas that shaped
          today's practice.
        </p>
      </div>

      <div className={styles.optionGrid}>
        {trainingTypes.map((type, index) => (
          <button
            key={type}
            type="button"
            className={`${styles.option} ${
              selected === type
                ? styles.optionActive
                : ""
            }`}
            onClick={() => setSelected(type)}
          >
            <span>
              {String(index + 1).padStart(2, "0")}
            </span>

            {type}
          </button>
        ))}
      </div>
    </section>
  );
}