import { Link } from "react-router";
import styles from "./Header.module.css";
import logo from "../../assets/digirn.png";
import Hamburger from "../../components/hamburger/Hamburger";
import { firebaseDelete } from "../../shared/functions";

export default function Header({menus}){

  const linkClickHandler = (label, id) =>{
    if(label === "Brisanje naloga"){
      const answer = window.confirm("Obriši nalog?");
      if (answer) {
        firebaseDelete(id);
      }
    };
  }

  return (
    <div className={styles["header"]}>
      <div className={styles["header-container"]}>
        <img src={logo} width="150" alt="digirn logo" />
        <h2 className={styles["h2"]}>DIGIRN</h2>
      </div>
      <nav className={styles["nav"]}>
        <ul className={styles["ul"]}>
          { menus.map((menu, index) => 
            <li key={index} className={styles["li"]}>
              <Link className={styles["link"]} to={menu.path} onClick={()=>{linkClickHandler(menu.label, menu.id)}}>
                {menu.label}
              </Link>
            </li>)
          }
        </ul>
        { menus.length !== 0 && <Hamburger />}
      </nav>
    </div>
  );
}