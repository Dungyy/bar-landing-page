import React from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import { GiBeerBottle } from "react-icons/Gi";


const Navbar = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title} href="/">DUNGYS LIQUOR<GiBeerBottle/></h2>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link href="/about">About</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/contact">Contact</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/products">Favorites</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
