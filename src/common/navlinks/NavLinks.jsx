import styles from "./NavLinks.module.css";
import { NavLink } from "react-router-dom";

function NavLinks() {
  return (
    <div class={styles.navLinksContainer}>
      <NavLink className={styles.navlink} to="/">
        Home
      </NavLink>
      <NavLink className={styles.navlink} to="/contact">
        Contact
      </NavLink>
      <NavLink className={styles.navlink} to="/about">
        About us
      </NavLink>
      <NavLink className={styles.navlink} id={styles.loginNavlink} to="/login">
        Login
      </NavLink>
    </div>
  );
}

export default NavLinks;
