import NavLinks from "../../../common/navlinks/NavLinks";
import styles from "./Navbar.module.css";

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
      <NavLinks />
    </div>
  );
}

export default Navbar;
