import { use } from "react";
import { Link } from "react-router";
import { HeaderContext } from "../../context/HeaderProvider";

import styles from "./Aside.module.css";

export default function Aside({ menus }) {
  const headerCtx = use(HeaderContext);

  return (
    <aside className={styles["aside"]}>
      <nav>
        <ul>
          {menus.map((menu, index) => (
            <li key={index}>
              <Link to={menu.path}>{menu.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
