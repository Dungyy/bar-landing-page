import React from "react";
import styles from "../styles/hero.module.css";
import Link from "next/link";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>WELCOME TO DUNGYS LIQUOR</h1>
        <p className={styles.description}>
          Come drink our fine crafted beer, made 100% in USA
        </p>
        <button className={styles.button}> 
        <Link href="/about">DISCOVER</Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;
