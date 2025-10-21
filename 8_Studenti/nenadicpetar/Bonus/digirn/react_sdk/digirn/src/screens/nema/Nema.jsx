import { use } from "react";
import Header from "../../components/header/Header";
import Aside from "../../components/aside/Aside";
import styles from "./Nema.module.css";

import { HamburgermenuContext } from "../../context/HamburgermenuProvider";

export default function Nema() {
  const hamburgerCtx = use(HamburgermenuContext);

  const menuLista = [
    { label: "Glavna", path: "/" },
    { label: "Nalozi", path: "/nalozi" },
  ];

  return (
    <>
      <Header menus={menuLista} />
      <section className={styles["section"]}>
        {hamburgerCtx.hamburger.hamburgerOpen && <Aside menus={menuLista} />}
        <h1>Stranica nije pronađena</h1>
      </section>
    </>
  );
}
