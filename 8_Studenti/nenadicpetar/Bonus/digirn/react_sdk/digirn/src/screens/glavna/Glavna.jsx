import { use, useEffect } from "react";

import Aside from "../../components/aside/Aside";
import styles from "./Glavna.module.css";
import { HamburgermenuContext } from "../../context/HamburgermenuProvider";
import { HeaderContext } from "../../context/HeaderProvider";

export default function Glavna() {
  const hamburgerCtx = use(HamburgermenuContext);
  const headerCtx = use(HeaderContext);

  const menuLista = [{ label: "Nalozi", path: "/nalozi" }];

  useEffect(() => {
    headerCtx.createMenu(menuLista);
  }, []);

  return (
    <>
      <section className={styles["section"]}>
        {hamburgerCtx.hamburger.hamburgerOpen && <Aside menus={menuLista} />}
        <h1>Dobrodošli u DIGIRN</h1>
        <p>
          DIGIRN je aplikacija za praćenje radnih naloga - DigitalniRadniNalozi
        </p>
        <p>Verzija 5 - REACT - Firebase SDK</p>
      </section>
    </>
  );
}
