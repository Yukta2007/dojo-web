"use client";

import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navInner}>

        <Link href="/" className={styles.logo}>
          KARATE-DO
        </Link>

        <div className={styles.navLinks}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/philosophy">Philosophy</Link>
          <Link href="/training">Training</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <Link href="/contact" className={styles.navButton}>
          Begin Journey
        </Link>

      </div>
    </nav>
  );
}