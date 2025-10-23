import { use, useEffect } from "react";
import { HeaderContext } from "../../context/HeaderProvider";
import { HamburgermenuContext } from "../../context/HamburgermenuProvider";
import styles from "./Glavna.module.css";
import Aside from "../../components/aside/Aside";

export default function Glavna() {
  const headerCtx = use(HeaderContext);
  const hamburgerCtx = use(HamburgermenuContext);

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
        <p>Verzija 5 - React - Firebase SDK</p>
      </section>
    </>
  );
}
