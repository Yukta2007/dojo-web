"use client";

import { useState } from "react";
import styles from "./JournalHighlights.module.css";

export default function JournalHighlights() {
  const [highlight, setHighlight] = useState("");
  const [improvement, setImprovement] = useState("");
  const [lesson, setLesson] = useState("");

  return (
    <section className={styles.highlightsSection}>
      {/* SECTION NUMBER */}
      <div className={styles.sectionNumber}>
        05
      </div>

      {/* HEADER */}
      <div className={styles.reflectionHeader}>
        <span>LOOK BACK</span>

        <h2>
          THREE THINGS
          <br />
          TO REMEMBER.
        </h2>
      </div>

      {/* REFLECTION CARDS */}
      <div className={styles.reflectionGrid}>
        {/* HIGHLIGHT */}
        <label className={styles.reflectionCard}>
          <span>01 — THE HIGHLIGHT</span>

          <textarea
            value={highlight}
            onChange={(e) => setHighlight(e.target.value)}
            placeholder="What went well?"
            aria-label="Session highlight"
          />

          <small>
            {highlight.length} characters
          </small>
        </label>

        {/* IMPROVEMENT */}
        <label className={styles.reflectionCard}>
          <span>02 — IMPROVEMENT</span>

          <textarea
            value={improvement}
            onChange={(e) => setImprovement(e.target.value)}
            placeholder="What needs more work?"
            aria-label="Session improvement"
          />

          <small>
            {improvement.length} characters
          </small>
        </label>

        {/* LESSON */}
        <label className={styles.reflectionCard}>
          <span>03 — THE LESSON</span>

          <textarea
            value={lesson}
            onChange={(e) => setLesson(e.target.value)}
            placeholder="What will you carry forward?"
            aria-label="Session lesson"
          />

          <small>
            {lesson.length} characters
          </small>
        </label>
      </div>

      {/* BOTTOM MESSAGE */}
      <div className={styles.bottomNote}>
        <span>REFLECT</span>
        <span>LEARN</span>
        <span>CONTINUE</span>
      </div>
    </section>
  );
}