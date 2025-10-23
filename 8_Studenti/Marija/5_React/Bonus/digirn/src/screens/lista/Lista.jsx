import { use, useEffect } from "react";
import { HeaderContext } from "../../context/HeaderProvider";
import { HamburgermenuContext } from "../../context/HamburgermenuProvider";
import styles from "./Lista.module.css";
import Aside from "../../components/aside/Aside";

export default function Lista() {
  const headerCtx = use(HeaderContext);
  const hamburgerCtx = use(HamburgermenuContext);

  const menuLista = [
    { label: "Glavna", path: "/" },
    { label: "Novi nalog", path: "/unos" },
  ];

  useEffect(() => {
    headerCtx.createMenu(menuLista);
  }, []);

  return (
    <section className={styles["section"]}>
      {hamburgerCtx.hamburger.hamburgerOpen && <Aside menus={menuLista} />}
      <h1>Lista Radnih Naloga</h1>
    </section>
  );
}
