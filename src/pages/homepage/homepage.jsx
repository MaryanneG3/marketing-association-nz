import styles from "./homepage.module.css";
import Navbar from "./components/Navbar.jsx";

export default function Homepage() {
  return (
    <div className={styles.main}>
      <Navbar />
    </div>
  );
}
