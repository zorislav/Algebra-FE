import { useState, use, useEffect } from "react";
import { useParams } from "react-router";
import { NaloziContext } from "../../context/NaloziProvider";
import { HamburgermenuContext } from "../../context/HamburgermenuProvider";
import Header from "../../components/header/Header";
import Aside from "../../components/aside/Aside";
import styles from "./Prikaz.module.css";

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
  const naloziCtx = use(NaloziContext);
  const hamburgerCtx = use(HamburgermenuContext);
  const { id } = useParams();

  const menuLista = [
    { label: "Glavna", path: "/" },
    { label: "Nalozi", path: "/nalozi" },
    { label: "Izmjena naloga", path: `/nalog/${id}/izmjena` },
    { label: "Brisanje naloga", path: "/nalozi", id: id },
  ];

  useEffect(() => {
    const odabraniNalog = naloziCtx.nalozi.listaNaloga.find(
      (nalog) => nalog.id === id
    );

    setNalog({
      brojNaloga: odabraniNalog.brojNaloga,
      brojNarudzbe: odabraniNalog.brojNarudzbe,
      datumNaloga: odabraniNalog.datumNaloga,
      datumPocetka: odabraniNalog.datumPocetka,
      vrijemePocetka: odabraniNalog.vrijemePocetka,
      datumZavrsetka: odabraniNalog.datumZavrsetka,
      vrijemeZavrsetka: odabraniNalog.vrijemeZavrsetka,
      narucitelj: odabraniNalog.narucitelj,
      izvrsitelj: odabraniNalog.izvrsitelj,
      mjestoTroska: odabraniNalog.mjestoTroska,
      nositeljTroska: odabraniNalog.nositeljTroska,
      naslov: odabraniNalog.naslov,
      opis: odabraniNalog.opis,
    });
  }, []);

  return (
    <>
      <Header menus={menuLista} />
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
