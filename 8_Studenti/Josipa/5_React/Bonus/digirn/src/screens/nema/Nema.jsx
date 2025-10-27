import { use, useEffect } from "react";
import { HeaderContext } from "../../context/HeaderProvider";

import styles from "./Nema.module.css";

export default function Nema() {
  const headerCtx = use(HeaderContext);

  const menuLista = [
    { label: "Glavna", path: "/" },
    { label: "Nalozi", path: "/nalozi" },
  ];

  useEffect(() => {
    headerCtx.createMenu(menuLista);
  }, []);

  return (
    <section className={styles["section"]}>
      <h1>Stranica nije pronađena</h1>
    </section>
  );
}
