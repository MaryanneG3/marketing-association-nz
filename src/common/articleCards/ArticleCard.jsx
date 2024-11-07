import { NavLink } from "react-router-dom";
import styles from "./ArticleCard.module.css";

function ArticleCard(newsId, title, date, imgSrc) {
  return (
    <div>
      <NavLink
        to="#article-page-link"
        className={styles.articleCard}
        key={newsId}
      >
        <img src={imgSrc} alt={title} />
        <h4>{title}</h4>
        <p>{date}</p>
      </NavLink>
    </div>
  );
}

export default ArticleCard;
