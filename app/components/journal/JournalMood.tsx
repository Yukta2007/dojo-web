"use client";

import { useState } from "react";

import styles from "./JournalMood.module.css";
import { moods } from "./JournalData";

export default function JournalMood() {
  const [selectedMood, setSelectedMood] =
    useState("");

  const [intensity, setIntensity] =
    useState(3);

  return (
    <section
      className={`${styles.section} ${styles.moodSection}`}
    >
      <div className={styles.sectionNumber}>
        03
      </div>

      <div className={styles.sectionHeading}>
        <span>STATE OF MIND</span>

        <h2>
          HOW DID
          <br />
          YOU FEEL?
        </h2>
      </div>

      <div className={styles.moodGrid}>
        {moods.map((mood) => (
          <button
            key={mood}
            type="button"
            className={`${styles.mood} ${
              selectedMood === mood
                ? styles.moodActive
                : ""
            }`}
            onClick={() =>
              setSelectedMood(mood)
            }
          >
            {mood}
          </button>
        ))}
      </div>

      <div className={styles.intensity}>
        <div>
          <span>SESSION INTENSITY</span>

          <strong>
            {intensity}/5
          </strong>
        </div>

        <input
          type="range"
          min="1"
          max="5"
          value={intensity}
          onChange={(e) =>
            setIntensity(
              Number(e.target.value)
            )
          }
        />
      </div>
    </section>
  );
}