import { use, useState, useEffect } from "react";
import { useParams } from "react-router";
import { firebaseGetOne } from "../../shared/functions";
import { HamburgermenuContext } from "../../context/HamburgermenuProvider";
import { HeaderContext } from "../../context/HeaderProvider";
import styles from "./Prikaz.module.css";
import Aside from "../../components/aside/Aside";

export default function Prikaz() {
  const [nalog, setNalog] = useState({
    brojNaloga: "",
    brojNarudzbe: "",
    datumNaloga: "",
    datumPocetka: "",
    vrijemePocetka: "",
    datumZavrsetka: "",
    vrijemeZavrsetka: "",
    narucitelj: "",
    izvrsitelj: "",
    mjestoTroska: "",
    nositeljTroska: "",
    naslov: "",
    opis: "",
  });

  const hamburgerCtx = use(HamburgermenuContext);
  const headerCtx = use(HeaderContext);
  const { id } = useParams();

  const menuLista = [
    { label: "Glavna", path: "/" },
    { label: "Nalozi", path: "/nalozi" },
    { label: "Izmjena naloga", path: `/nalog/${id}/izmjena` },
    { label: "Brisanje naloga", path: "/nalozi", id: id },
  ];

  useEffect(() => {
    headerCtx.createMenu(menuLista);
  }, []);

  useEffect(() => {
    const getNalog = async (id) => {
      const nalog = await firebaseGetOne(id);

      setNalog({
        brojNaloga: nalog.brojNaloga,
        brojNarudzbe: nalog.brojNarudzbe,
        datumNaloga: nalog.datumNaloga,
        datumPocetka: nalog.datumPocetka,
        vrijemePocetka: nalog.vrijemePocetka,
        datumZavrsetka: nalog.datumZavrsetka,
        vrijemeZavrsetka: nalog.vrijemeZavrsetka,
        narucitelj: nalog.narucitelj,
        izvrsitelj: nalog.izvrsitelj,
        mjestoTroska: nalog.mjestoTroska,
        nositeljTroska: nalog.nositeljTroska,
        naslov: nalog.naslov,
        opis: nalog.opis,
      });
    };

    getNalog(id);
  }, []);

  return (
    <>
      <section className={styles["section"]}>
        {hamburgerCtx.hamburger.hamburgerOpen && <Aside menus={menuLista} />}
        <h1>Prikaz Naloga</h1>
        <hr />
        <div className={styles["container"]}>
          <p>Broj naloga:</p>
          <p>{nalog.brojNaloga}</p>
          <p>Narudžbenica:</p>
          <p>{nalog.brojNarudzbe}</p>
          <p>Datum otvaranja:</p>
          <p>{nalog.datumNaloga}</p>
        </div>
        <hr />
        <div className={styles["container"]}>
          <p>Naručitelj:</p>
          <p>{nalog.narucitelj}</p>
          <p>Izvršitelj:</p>
          <p>{nalog.izvrsitelj}</p>
          <p>Mjesto troška:</p>
          <p>{nalog.mjestoTroska}</p>
          <p>Nositelj troška:</p>
          <p>{nalog.nositeljTroska}</p>
        </div>
        <hr />
        <div className={styles["container"]}>
          <p>Datum početka:</p>
          <p>{nalog.datumPocetka}</p>
          <p>Vrijeme početka:</p>
          <p>{nalog.vrijemePocetka}</p>
          <p>Datum završetka:</p>
          <p>{nalog.datumZavrsetka}</p>
          <p>Vrijeme završetka:</p>
          <p>{nalog.vrijemeZavrsetka}</p>
        </div>
        <hr />
        <div className={styles["container"]}>
          <p>Naslov:</p>
          <p>{nalog.naslov}</p>
          <p>Opis rada:</p>
          <p>{nalog.opis}</p>
        </div>
        <hr />
      </section>
    </>
  );
}
