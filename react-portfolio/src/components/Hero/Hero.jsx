import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>I'm Ashutosh</h1>
        <p className={styles.description}>
        I am a web developer passionate about technology with expertise in front-end and back-end technologies, including React, Angular, Django, and various cloud services.
        </p>
        <a href="https://www.linkedin.com/in/ashutosh-gautam-65a905176/" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/profile.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
