import { use } from "react";
import { Link } from "react-router";
import styles from "./Header.module.css";
import logo from "../../assets/digirn.png";
import { HeaderContext } from "../../context/HeaderProvider";
import Hamburger from "../hamburger/Hamburger";

export default function Header() {
  const headerCtx = use(HeaderContext);

  return (
    <div className={styles["header"]}>
      <div className={styles["header-container"]}>
        <img src={logo} width="150" alt="digirn logo" />
        <h2 className={styles["h2"]}>DIGIRN</h2>
      </div>
      <nav className={styles["nav"]}>
        <ul className={styles["ul"]}>
          {headerCtx.menuLista.map((menu, index) => (
            <li key={index} className={styles["li"]}>
              <Link className={styles["link"]} to={menu.path}>
                {menu.label}
              </Link>
            </li>
          ))}
        </ul>
        <Hamburger />
      </nav>
    </div>
  );
}
