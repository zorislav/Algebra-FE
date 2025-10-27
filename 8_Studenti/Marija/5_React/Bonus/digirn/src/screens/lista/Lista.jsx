import { use, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { ref, onValue } from "firebase/database";
import { HeaderContext } from "../../context/HeaderProvider";
import { HamburgermenuContext } from "../../context/HamburgermenuProvider";
import database from "../../data/firebase";
import styles from "./Lista.module.css";
import Aside from "../../components/aside/Aside";

export default function Lista() {
  const [nemaNaloga, setNemaNaloga] = useState(true);
  const [fireNalozi, setFireNalozi] = useState({});
  const headerCtx = use(HeaderContext);
  const hamburgerCtx = use(HamburgermenuContext);

  const navigate = useNavigate();

  const menuLista = [
    { label: "Glavna", path: "/" },
    { label: "Novi nalog", path: "/unos" },
  ];

  const odabranNalog = (id) => {
    navigate(`/nalog/${id}`);
  };

  useEffect(() => {
    headerCtx.createMenu(menuLista);
  }, []);

  useEffect(() => {
    const dbRef = ref(database, "digirn2/");
    onValue(dbRef, (snapshot) => {
      if (snapshot.exists()) {
        setNemaNaloga(false);
        setFireNalozi(snapshot.val());
      } else {
        setNemaNaloga(true);
        setFireNalozi({});
      }
    });
  }, []);

  return (
    <section className={styles["section"]}>
      {hamburgerCtx.hamburger.hamburgerOpen && <Aside menus={menuLista} />}
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
          {Object.keys(fireNalozi).map((nalog, index) => {
            return (
              <tr key={index} onClick={() => odabranNalog(nalog)}>
                <td>{index + 1}</td>
                <td>{fireNalozi[nalog].brojNaloga}</td>
                <td className={styles["table-col-hide"]}>
                  {fireNalozi[nalog].datumNaloga}
                </td>
                <td className={styles["table-col-hide"]}>
                  {fireNalozi[nalog].datumPocetka}
                </td>
                <td className={styles["table-col-hide"]}>
                  {fireNalozi[nalog].datumZavrsetka}
                </td>
                <td>{fireNalozi[nalog].narucitelj}</td>
                <td>{fireNalozi[nalog].izvrsitelj}</td>
                <td className={styles["table-col-hide"]}>
                  {fireNalozi[nalog].naslov}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {nemaNaloga && <p className={styles["nema-nalog"]}>Nema naloga</p>}
    </section>
  );
}
