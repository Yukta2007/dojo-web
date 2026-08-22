"use client";

import { useState } from "react";
import styles from "./JournalReflection.module.css";

export default function JournalReflection() {
  const [notes, setNotes] = useState("");

  return (
    <section className={styles.reflectionSection}>
      {/* TOP */}
      <div className={styles.reflectionTop}>
        <span>04 — REFLECTION</span>

        <span>{notes.length} CHARACTERS</span>
      </div>

      {/* TITLE */}
      <h2 className={styles.reflectionTitle}>
        WRITE
        <br />
        FREELY.
      </h2>

      {/* JOURNAL INPUT */}
      <textarea
        className={styles.reflectionTextarea}
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="What happened during your session? What felt different? What challenged you?"
        aria-label="Training session reflection"
      />

      {/* FOOTER */}
      <div className={styles.reflectionFooter}>
        <span>TAKE YOUR TIME</span>

        <span>NO PERFECT ANSWERS</span>
      </div>

      {/* GOLD ACCENT */}
      <div className={styles.reflectionAccent} />
    </section>
  );
}