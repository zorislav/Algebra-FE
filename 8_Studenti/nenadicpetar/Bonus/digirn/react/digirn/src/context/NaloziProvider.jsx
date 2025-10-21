import React, { useState, useRef, useEffect } from "react";

//import { dummyNalozi } from "../data/data";

export const NaloziContext = React.createContext();

const NaloziProvider = ({ children }) => {
  const dodajNalog = (noviNalog) => {
    setNalozi((trenutniNalozi) => {
      const azuriraniNalozi = [...trenutniNalozi.listaNaloga, noviNalog];
      return {
        listaNaloga: azuriraniNalozi,
        dodajNalog,
        obrisiNalog,
        izmjeniNalog,
        ucitajNaloge,
        spremiNaloge,
      };
    });
  };

  const obrisiNalog = (nalogId) => {
    setNalozi((trenutniNalozi) => {
      const azuriraniNalozi = trenutniNalozi.listaNaloga.filter(
        (nalog) => nalog.id !== nalogId
      );
      return {
        listaNaloga: azuriraniNalozi,
        dodajNalog,
        obrisiNalog,
        izmjeniNalog,
        ucitajNaloge,
        spremiNaloge,
      };
    });
  };

  const izmjeniNalog = (noviNalog) => {
    setNalozi((trenutniNalozi) => {
      const azuriraniNalogIndex = trenutniNalozi.listaNaloga.findIndex(
        (nalog) => nalog.id === noviNalog.id
      );
      const azuriraniNalozi = trenutniNalozi.listaNaloga.map((nalog, index) =>
        index === azuriraniNalogIndex ? noviNalog : nalog
      );

      return {
        listaNaloga: azuriraniNalozi,
        dodajNalog,
        obrisiNalog,
        izmjeniNalog,
        ucitajNaloge,
        spremiNaloge,
      };
    });
  };

  const ucitajNaloge = async () => {
    try {
      const tmpNalozi = [];

      const response = await fetch(
        "https://algebra-fe-default-rtdb.europe-west1.firebasedatabase.app/digirn.json",
        {
          method: "GET",
        }
      );

      const data = await response.json(response);

      for (let key in data) {
        tmpNalozi.push(data[key]);
      }

      setNalozi((trenutniNalozi) => {
        const azuriraniNalozi = [...tmpNalozi[0]];
        return {
          listaNaloga: azuriraniNalozi,
          dodajNalog,
          obrisiNalog,
          izmjeniNalog,
          ucitajNaloge,
          spremiNaloge,
        };
      });
    } catch (error) {
      alert(error);
    }
  };

  const spremiNaloge = async () => {
    // Obrisi Firebase podatke
    try {
      await fetch(
        "https://algebra-fe-default-rtdb.europe-west1.firebasedatabase.app/digirn.json",
        {
          method: "DELETE",
        }
      );
    } catch (error) {
      alert(error);
    }

    // Zapisi Firebase podatke
    try {
      await fetch(
        "https://algebra-fe-default-rtdb.europe-west1.firebasedatabase.app/digirn.json",
        {
          method: "POST",
          body: JSON.stringify(naloziRef.current.listaNaloga),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      alert(error);
    }
  };

  //const [ nalozi, setNalozi] = useState({ listaNaloga: [], dodajNalog, obrisiNalog, izmjeniNalog, ucitajNaloge, spremiNaloge });
  const [nalozi, setNalozi] = useState({ listaNaloga: [] });
  const naloziRef = useRef(nalozi);

  useEffect(() => {
    naloziRef.current = nalozi;
  }, [nalozi]);

  return (
    <NaloziContext
      value={{
        nalozi,
        dodajNalog,
        obrisiNalog,
        izmjeniNalog,
        ucitajNaloge,
        spremiNaloge,
      }}
    >
      {children}
    </NaloziContext>
  );
};

export default NaloziProvider;
