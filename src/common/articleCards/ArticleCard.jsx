import { NavLink } from "react-router-dom";
import styles from "./ArticleCard.module.css";

function ArticleCard({ newsId, title, date, imgSrc }) {
  return (
    <NavLink
      to="#article-page-link"
      className={styles.articleCard}
      key={newsId}
    >
      <div className={styles.imgContainer}>
        <img src={imgSrc} alt={title} className={styles.articleImg} />
      </div>
      <div className={styles.info}>
        <h4>{title}</h4>
        <p className={styles.date}>{date}</p>
      </div>
    </NavLink>
  );
}

export default ArticleCard;
