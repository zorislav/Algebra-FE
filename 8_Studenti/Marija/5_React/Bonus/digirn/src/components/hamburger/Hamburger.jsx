import { use } from "react";
import { HamburgermenuContext } from "../../context/HamburgermenuProvider";

import styles from "./Hamburger.module.css";

export default function Hamburger() {
  const hamburgerCtx = use(HamburgermenuContext);

  const handleHamburgerClick = (event) => {
    event.stopPropagation();
    hamburgerCtx.toggleHamburger();
  };

  const hamburgerStil = hamburgerCtx.hamburger.hamburgerOpen
    ? `${styles.hamburgericon} ${styles.change}`
    : `${styles.hamburgericon}`;

  return (
    <div className={hamburgerStil} onClick={handleHamburgerClick}>
      <div className={styles["bar1"]}></div>
      <div className={styles["bar2"]}></div>
      <div className={styles["bar3"]}></div>
    </div>
  );
}
