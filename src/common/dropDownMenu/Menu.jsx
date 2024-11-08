import { useState } from "react";
import styles from "./Menu.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import NavLinks from "../navlinks/NavLinks";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.menu}>
      <button className={styles.barsBtnContainer} onClick={toggleMenu}>
        <FontAwesomeIcon className={styles.bars} icon={faBars} />
      </button>
      {isOpen && (
        <ul className={styles.menuListContainer}>
          <NavLinks />
        </ul>
      )}
    </div>
  );
}

export default Menu;
