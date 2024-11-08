import NavLinks from "../../../common/navlinks/NavLinks";
import Menu from "../../../common/dropDownMenu/Menu";
import styles from "./Navbar.module.css";
import navLinkStyles from "../../../common/navlinks/NavLinks.module.css";
import { useEffect, useState } from "react";

function Navbar() {
  const [isMinimizing, setIsMinimizing] = useState(window.innerWidth <= 915);

  useEffect(() => {
    const handleResize = () => {
      setIsMinimizing(window.innerWidth <= 915);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div className={styles.navbar}>
      <div className={styles.logoSection}>
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
      {isMinimizing ? (
        <Menu />
      ) : (
        <NavLinks customClass={navLinkStyles.defaultNavLinks} />
      )}
    </div>
  );
}

export default Navbar;
