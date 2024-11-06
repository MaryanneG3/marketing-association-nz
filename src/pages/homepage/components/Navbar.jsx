import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div class={styles.logoSection}>
        <div className={styles.imageContainer}>
          <img
            className={styles.logo}
            src="./images/marketing-logo.jpg"
            alt="Company logo"
          />
        </div>
        <h2 className={styles.companyTitle}>
          Marketing Association New Zealand
        </h2>
      </div>

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
        <NavLink
          className={styles.navlink}
          id={styles.loginNavlink}
          to="/login"
        >
          Login
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
