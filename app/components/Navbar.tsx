"use client";

import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>

      <div className={styles.navbar}>

        {/* =====================================================
            BRAND
        ====================================================== */}

        <Link href="/" className={styles.brand}>

          <div className={styles.kanji}>
            空手道
          </div>

          <div className={styles.brandText}>
            THE ART & SCIENCE OF
            <br />
            KARATE-DO
          </div>

        </Link>


        {/* =====================================================
            NAVIGATION
        ====================================================== */}

        <nav className={styles.navigation}>

          <Link href="/sanctuaries">
            <span>01</span>
            SANCTUARIES
          </Link>

          <Link href="/dojo">
            <span>02</span>
            DOJO
          </Link>

          <Link href="/lineage">
            <span>03</span>
            LINEAGE
          </Link>

          <Link href="/journal">
            <span>04</span>
            JOURNAL
          </Link>

          <Link href="/achievements">
            <span>05</span>
            ACHIEVEMENTS
          </Link>

          <Link href="/terminology">
            <span>06</span>
            TERMINOLOGY
          </Link>

        </nav>


        {/* =====================================================
            ACTIONS
        ====================================================== */}

        <div className={styles.actions}>

          <button className={styles.modeButton}>
            <span className={styles.moon}>
              ◐
            </span>

            <span>
              DOJO MODE
            </span>
          </button>

          <Link
            href="/logout"
            className={styles.logout}
          >
            LOGOUT
          </Link>

        </div>

      </div>


      {/* =====================================================
          BOTTOM ARCHITECTURAL LINE
      ====================================================== */}

      <div className={styles.bottomLine}>
        <span />
        <span />
        <span />
      </div>

    </header>
  );
}