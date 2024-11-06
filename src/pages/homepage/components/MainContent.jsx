import styles from "./MainContent.module.css";
import Searchbar from "../../../common/searchbar/Searchbar";

function MainContent() {
  return (
    <div className={styles.mainContainer}>
      <Searchbar />
      <div className={styles.contentContainer}></div>
    </div>
  );
}

export default MainContent;
