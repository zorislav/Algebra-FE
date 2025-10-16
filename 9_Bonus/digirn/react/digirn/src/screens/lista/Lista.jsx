
import { use } from 'react';
import { useNavigate } from 'react-router';
import styles from "./Lista.module.css";

import Header from '../../components/header/Header';
import Aside from '../../components/aside/Aside';
import { NaloziContext } from '../../context/NaloziProvider';
import { HamburgermenuContext } from '../../context/HamburgermenuProvider';

export default function Lista() {
  
  const navigate = useNavigate();
  const naloziCtx = use(NaloziContext);
  const hamburgerCtx = use(HamburgermenuContext);

  const menuLista = [
    {label: "Glavna", path: "/"}, 
    {label: "Novi nalog", path: "/unos"}, 
    {label: "Učitaj naloge iz baze", path: "/nalozi"}, 
    {label: "Spremi naloge u bazu", path: "/nalozi"}
  ];

  let nemaNaloga = (naloziCtx.nalozi.listaNaloga.length === 0);

  const odabranNalog = (id) => {
    navigate(`/nalog/${id}`);
  }

  return (
    <>
      <Header menus={menuLista} />
      <section className={styles["section"]}>
        { hamburgerCtx.hamburger.hamburgerOpen && <Aside menus={menuLista} />}
        <h1>Lista Radnih Naloga</h1>
        <table className={styles["table"]}>
          <thead>
            <tr>
              <th>R.br.</th>
              <th>Broj naloga</th>
              <th className={styles["table-col-hide"]}>Datum naloga</th>
              <th className={styles["table-col-hide"]}>Datum početka</th>
              <th className={styles["table-col-hide"]}>Datum završetka</th>
              <th>Naručitelj</th>
              <th>Izvršitelj</th>
              <th className={styles["table-col-hide"]}>Naslov</th>
            </tr>
          </thead>
          <tbody>
            {naloziCtx.nalozi.listaNaloga.map((nalog, index) => {
              return (
                <tr key={nalog.id} onClick={() => odabranNalog(nalog.id)}>
                  <td>{index+1}</td>
                  <td>{nalog.brojNaloga}</td>
                  <td className={styles["table-col-hide"]}>{nalog.datumNaloga}</td>
                  <td className={styles["table-col-hide"]}>{nalog.datumPocetka}</td>
                  <td className={styles["table-col-hide"]}>{nalog.datumZavrsetka}</td>
                  <td>{nalog.narucitelj}</td>
                  <td>{nalog.izvrsitelj}</td>
                  <td className={styles["table-col-hide"]}>{nalog.naslov}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        { nemaNaloga && <p className={styles["nema-naloga"]}>Nema naloga. Upišite novi nalog ili učitajte naloge.</p> }
      </section>
    </>
  );
} 