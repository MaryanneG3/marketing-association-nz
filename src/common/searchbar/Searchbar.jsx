import styles from "./Searchbar.module.css";

function Searchbar() {
  return (
    <div className={styles.searchbarSection}>
      <div className={styles.titleContainer}>
        <h2>Digital News</h2>
      </div>

      <div className={styles.searchbarContainer}>
        <input className={styles.searchbarInput} type="text" name="searchBar" />
        <label className={styles.searchbarLabel} type="text">
          Search
        </label>
      </div>
    </div>
  );
}

export default Searchbar;
