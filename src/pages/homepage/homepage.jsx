import styles from "./homepage.module.css";
import Navbar from "./components/Navbar.jsx";
import MainContent from "./components/MainContent.jsx";

export default function Homepage() {
  return (
    <div className={styles.main}>
      <Navbar />
      <MainContent />
    </div>
  );
}
