import { use } from 'react';
import Header from '../../components/header/Header';
import Aside from '../../components/aside/Aside';
import styles from "./Glavna.module.css";
//import { HamburgerMenuCtx } from '../../App';
import { HamburgermenuContext } from '../../context/HamburgermenuProvider';

export default function Glavna(){

  const hamburgerCtx = use(HamburgermenuContext);

  const menuLista = [{label: "Nalozi", path: "/nalozi"}];

  return (
    <>
      <Header menus={menuLista} />
      <section className={styles["section"]}>
        { hamburgerCtx.hamburger.hamburgerOpen && <Aside menus={menuLista} />}
        <h1>Dobrodošli u DIGIRN</h1>
        <p>
          DIGIRN je aplikacija za praćenje radnih naloga - DigitalniRadniNalozi
        </p>
        <p>Verzija 4 - REACT</p>
      </section>
    </>
  );
}