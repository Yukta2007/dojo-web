import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>

      <div className={styles.footerMain}>

        {/* BRAND */}

        <div className={styles.footerBrand}>
          <h2>
            Karate
            <br />
            —Do
          </h2>

          <p>
            The way of the empty hand.
            Discipline, movement, balance,
            and the continuous pursuit of mastery.
          </p>
        </div>


        {/* EXPLORE */}

        <div className={styles.footerColumn}>
          <span>Explore</span>

          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/philosophy">Philosophy</Link>
          <Link href="/training">Training</Link>
        </div>


        {/* PRACTICE */}

        <div className={styles.footerColumn}>
          <span>Practice</span>

          <Link href="/training/basics">Basics</Link>
          <Link href="/training/kata">Kata</Link>
          <Link href="/training/kumite">Kumite</Link>
          <Link href="/training/mind">Mind</Link>
        </div>


        {/* CONNECT */}

        <div className={styles.footerColumn}>
          <span>Connect</span>

          <Link href="/contact">Contact</Link>
          <Link href="/dojo">Dojo</Link>
          <Link href="/journal">Journal</Link>
          <Link href="/instagram">Instagram</Link>
        </div>

      </div>


      {/* BOTTOM */}

      <div className={styles.footerBottom}>

        <span>
          © {new Date().getFullYear()} Karate-Do
        </span>

        <span>
          空手道 — The Way of the Empty Hand
        </span>

      </div>

    </footer>
  );
}