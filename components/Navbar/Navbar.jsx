import React, { useState } from "react";
import styles from "../Navbar/Navbar.module.css";
import { GiBeerBottle } from "react-icons/Gi";
import { FaTimes } from "react-icons/Fa";
import { FaBars } from "react-icons/Fa";


const Navbar = () => {
  const [click, setClick] = useState(false);
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <h2 className={styles.logo} href="/">
          DUNGYS LIQUOR
          <GiBeerBottle />
        </h2>
        <div className="menu-icon">
          <i className={click ? <FaTimes/> : <FaBars/>} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
