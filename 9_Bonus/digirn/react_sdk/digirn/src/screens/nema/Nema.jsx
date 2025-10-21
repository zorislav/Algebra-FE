import { use, useEffect } from 'react';
import Aside from '../../components/aside/Aside';
import styles from "./Nema.module.css";

import { HamburgermenuContext } from '../../context/HamburgermenuProvider';
import { HeaderContext } from '../../context/HeaderProvider';

export default function Nema(){

  const hamburgerCtx = use(HamburgermenuContext);
  const headerCtx = use(HeaderContext);

  const menuLista = [
    {label: "Glavna", path: "/"},
    {label: "Nalozi", path: "/nalozi"}
  ];

  useEffect(()=>{
    headerCtx.createMenu(menuLista);
  }, []);

  return (
    <>
      <section className={styles["section"]}>
        { hamburgerCtx.hamburger.hamburgerOpen && <Aside menus={menuLista} />}
        <h1>Stranica nije pronađena</h1>
      </section>
    </>
  );
}