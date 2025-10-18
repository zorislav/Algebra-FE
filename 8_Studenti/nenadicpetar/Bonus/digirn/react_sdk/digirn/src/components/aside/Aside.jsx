import { Link } from "react-router";

import { firebaseDelete } from "../../shared/functions";
import styles from "./Aside.module.css";

export default function Aside({ menus }) {
  const linkClickHandler = (label, id) => {
    if (label === "Brisanje naloga") {
      const answer = window.confirm("Obriši nalog?");
      if (answer) {
        firebaseDelete(id);
      }
    }
  };

  return (
    <aside className={styles["aside"]}>
      <nav>
        <ul>
          {menus.map((menu, index) => (
            <li key={index}>
              <Link
                className={styles["link"]}
                to={menu.path}
                onClick={() => {
                  linkClickHandler(menu.label, menu.id);
                }}
              >
                {menu.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
