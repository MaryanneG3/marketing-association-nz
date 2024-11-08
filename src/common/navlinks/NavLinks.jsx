import styles from "./NavLinks.module.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faInfoCircle,
  faCogs,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

function NavLinks({ customClass, iconsOnly }) {
  return (
    <div className={customClass}>
      <NavLink className={styles.navlink} to="/">
        {iconsOnly && <FontAwesomeIcon icon={faHome} />}
        {!iconsOnly && <span className={styles.navText}>Home</span>}
      </NavLink>
      <NavLink className={styles.navlink} to="/contact">
        {iconsOnly && <FontAwesomeIcon icon={faInfoCircle} />}
        {!iconsOnly && <span className={styles.navText}>Contact</span>}
      </NavLink>
      <NavLink className={styles.navlink} to="/about">
        {iconsOnly && <FontAwesomeIcon icon={faCogs} />}
        {!iconsOnly && <span className={styles.navText}>About</span>}
      </NavLink>
      <NavLink className={styles.navlink} id={styles.loginNavlink} to="/login">
        {iconsOnly && <FontAwesomeIcon icon={faUser} />}
        {!iconsOnly && <span className={styles.navText}>Login</span>}
      </NavLink>
    </div>
  );
}

export default NavLinks;
