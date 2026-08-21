"use client";

import styles from "./FeaturedVideo.module.css";

const VIDEO_ID = "nQR3bZjDkH0";

export default function FeaturedVideo() {
  return (
    <section className={styles.section}>

      {/* HEADER */}

      <div className={styles.header}>
        <span>
          04 — MOVEMENT
        </span>

        <span>
          FEATURED PRACTICE
        </span>
      </div>


      {/* CONTENT */}

      <div className={styles.content}>

        <div className={styles.heading}>

          <span>
            GOJU RYU
          </span>

          <h2>
            THE BODY
            <br />
            IN MOTION
          </h2>

          <p>
            Technique is not only something
            to be seen. It is something to be
            understood through movement.
          </p>

        </div>


        {/* VIDEO */}

        <div className={styles.video}>

          <iframe
            src={`https://www.youtube.com/embed/${VIDEO_ID}`}
            title="Nishiyama Kakeru Karate"
            allow="
              accelerometer;
              autoplay;
              clipboard-write;
              encrypted-media;
              gyroscope;
              picture-in-picture;
              web-share
            "
            allowFullScreen
          />

        </div>

      </div>

    </section>
  );
}