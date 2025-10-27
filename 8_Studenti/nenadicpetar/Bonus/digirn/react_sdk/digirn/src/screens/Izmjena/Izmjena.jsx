import { useState, useEffect, use } from "react";
import { useNavigate, useParams } from "react-router";

import { HeaderContext } from "../../context/HeaderProvider";
import { firebaseGetOne, firebaseUpdate } from "../../shared/functions";

import styles from "./Izmjena.module.css";

export default function Izmjena() {
  const headerCtx = use(HeaderContext);

  const { id } = useParams();

  const [brojNaloga, setBrojNaloga] = useState("");
  const [brojNarudzbe, setBrojNarudzbe] = useState("");
  const [datumNaloga, setDatumNaloga] = useState("");
  const [datumPocetka, setDatumPocetka] = useState("");
  const [vrijemePocetka, setVrijemePocetka] = useState("");
  const [datumZavrsetka, setDatumZavrsetka] = useState("");
  const [vrijemeZavrsetka, setVrijemeZavrsetka] = useState("");
  const [narucitelj, setNarucitelj] = useState("");
  const [izvrsitelj, setIzvrsitelj] = useState("");
  const [mjestoTroska, setMjestoTroska] = useState("");
  const [nositeljTroska, setNositeljTroska] = useState("");
  const [naslov, setNaslov] = useState("");
  const [opis, setOpis] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const answer = window.confirm("Spremi nalog?");
    if (answer) {
      const izmjenjeniNalog = {
        brojNaloga: brojNaloga,
        brojNarudzbe: brojNarudzbe,
        datumNaloga: datumNaloga,
        datumPocetka: datumPocetka,
        vrijemePocetka: vrijemePocetka,
        datumZavrsetka: datumZavrsetka,
        vrijemeZavrsetka: vrijemeZavrsetka,
        narucitelj: narucitelj,
        izvrsitelj: izvrsitelj,
        mjestoTroska: mjestoTroska,
        nositeljTroska: nositeljTroska,
        naslov: naslov,
        opis: opis,
      };

      firebaseUpdate(id, izmjenjeniNalog);
      navigate("/nalozi");
    }
  };

  const handleCancelClick = (event) => {
    event.preventDefault();
    const answer = window.confirm("Napusti izmjenu bez spremanja?");
    if (answer) {
      navigate("/nalozi");
    }
  };

  useEffect(() => {
    headerCtx.createMenu([]);
  }, []);

  useEffect(() => {
    const getNalog = async (id) => {
      const nalog = await firebaseGetOne(id);

      setBrojNaloga(nalog.brojNaloga);
      setBrojNarudzbe(nalog.brojNarudzbe);
      setDatumNaloga(nalog.datumNaloga);
      setDatumPocetka(nalog.datumPocetka);
      setVrijemePocetka(nalog.vrijemePocetka);
      setDatumZavrsetka(nalog.datumZavrsetka);
      setVrijemeZavrsetka(nalog.vrijemeZavrsetka);
      setNarucitelj(nalog.narucitelj);
      setIzvrsitelj(nalog.izvrsitelj);
      setMjestoTroska(nalog.mjestoTroska);
      setNositeljTroska(nalog.nositeljTroska);
      setNaslov(nalog.naslov);
      setOpis(nalog.opis);
    };

    getNalog(id);
  }, []);

  return (
    <>
      <section className={styles["section"]}>
        <h1>Izmjena Naloga</h1>
        <form onSubmit={handleSubmit}>
          <hr />
          <div className={styles["container"]}>
            <label htmlFor="broj_naloga">Broj naloga:</label>
            <input
              className={styles["input"]}
              type="text"
              id="broj_naloga"
              value={brojNaloga}
              onChange={(event) => setBrojNaloga(event.target.value)}
              maxLength="10"
              required
            />
            <label htmlFor="narudzbenica">Narudžbenica:</label>
            <input
              className={styles["input"]}
              type="text"
              id="narudzbenica"
              value={brojNarudzbe}
              onChange={(event) => setBrojNarudzbe(event.target.value)}
              maxLength="10"
              required
            />
            <label htmlFor="datum_naloga">Datum otvaranja:</label>
            <input
              type="date"
              className={styles["input"]}
              id="datum_naloga"
              value={datumNaloga}
              onChange={(event) => setDatumNaloga(event.target.value)}
              required
            />
          </div>
          <hr />
          <div className={styles["container"]}>
            <label htmlFor="narucitelj">Naručitelj:</label>
            <input
              className={styles["input"]}
              type="text"
              name="narucitelj"
              id="narucitelj"
              value={narucitelj}
              onChange={(event) => setNarucitelj(event.target.value)}
              maxLength="15"
            />
            <label htmlFor="izvrsitelj">Izvršitelj:</label>
            <input
              className={styles["input"]}
              type="text"
              name="izvrsitelj"
              id="izvrsitelj"
              value={izvrsitelj}
              onChange={(event) => setIzvrsitelj(event.target.value)}
              maxLength="15"
              required
            />
            <label htmlFor="mjesto_troska">Mjesto troška:</label>
            <input
              className={styles["input"]}
              type="text"
              name="mjesto_troska"
              id="mjesto_troska"
              value={mjestoTroska}
              onChange={(event) => setMjestoTroska(event.target.value)}
              maxLength="15"
            />
            <label htmlFor="nositelj_troska">Nositelj troška:</label>
            <input
              className={styles["input"]}
              type="text"
              name="nositelj_troska"
              id="nositelj_troska"
              value={nositeljTroska}
              onChange={(event) => setNositeljTroska(event.target.value)}
              maxLength="15"
            />
          </div>
          <hr />
          <div className={styles["container"]}>
            <label htmlFor="datum_pocetka">Datum početka:</label>
            <input
              className={styles["input"]}
              type="date"
              name="datum_pocetka"
              id="datum_pocetka"
              value={datumPocetka}
              onChange={(event) => setDatumPocetka(event.target.value)}
              required
            />
            <label htmlFor="vrijeme_pocetka">Vrijeme početka:</label>
            <input
              className={styles["input"]}
              type="time"
              name="vrijeme_pocetka"
              id="vrijeme_pocetka"
              value={vrijemePocetka}
              onChange={(event) => setVrijemePocetka(event.target.value)}
              required
            />
            <label htmlFor="datum_zavrsetka">Datum završetka:</label>
            <input
              className={styles["input"]}
              type="date"
              name="datum_zavrsetka"
              id="datum_zavrsetka"
              value={datumZavrsetka}
              onChange={(event) => setDatumZavrsetka(event.target.value)}
              required
            />
            <label htmlFor="vrijeme_zavrsetka">Vrijeme završetka:</label>
            <input
              className={styles["input"]}
              type="time"
              name="vrijeme_zavrsetka"
              id="vrijeme_zavrsetka"
              value={vrijemeZavrsetka}
              onChange={(event) => setVrijemeZavrsetka(event.target.value)}
              required
            />
          </div>
          <hr />
          <div className={styles["container"]}>
            <label htmlFor="naslov">Naslov:</label>
            <input
              className={styles["input"]}
              type="text"
              name="naslov"
              id="naslov"
              value={naslov}
              onChange={(event) => setNaslov(event.target.value)}
              maxLength="20"
              required
            ></input>
          </div>
          <hr />
          <div className={styles["container"]}>
            <label htmlFor="opis">Opis rada:</label>
            <textarea
              className={styles["textarea"]}
              name="opis"
              id="opis"
              value={opis}
              onChange={(event) => setOpis(event.target.value)}
              maxLength="50"
              cols="20"
              rows="5"
            ></textarea>
          </div>
          <hr />
          <div className={styles["button-container"]}>
            <button className={styles["button"]} id="ok" type="submit">
              U redu
            </button>
            <button
              className={styles["button"]}
              id="cancel"
              type="reset"
              onClick={handleCancelClick}
            >
              Poništi
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
