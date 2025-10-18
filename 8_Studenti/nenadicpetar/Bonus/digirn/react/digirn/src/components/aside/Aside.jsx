import { use } from "react";
import { Link } from "react-router";
import styles from "./Aside.module.css";

import { NaloziContext } from "../../context/NaloziProvider";

export default function Aside({ menus }) {
  const naloziCtx = use(NaloziContext);

  const linkClickHandler = (label, id) => {
    if (label === "Brisanje naloga") {
      const answer = window.confirm("Obriši nalog?");
      if (answer) {
        naloziCtx.obrisiNalog(id);
      }
    } else if (label === "Učitaj naloge iz baze") {
      const answer = window.confirm("Učitaj naloge?");
      if (answer) {
        naloziCtx.ucitajNaloge();
      }
    } else if (label === "Spremi naloge u bazu") {
      const answer = window.confirm("Spremi naloge?");
      if (answer) {
        naloziCtx.spremiNaloge();
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
