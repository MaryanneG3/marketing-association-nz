import { NavLink } from "react-router-dom";
import styles from "./ArticleCard.module.css";

function ArticleCard(news_id, title, date, imgsrc) {
  return (
    <div>
      <NavLink
        to="#article-page-link"
        className={styles.articleCard}
        key={news_id}
      >
        <img src={imgsrc} alt={title} />
        <h4>{title}</h4>
        <p>{date}</p>
      </NavLink>
    </div>
  );
}

export default ArticleCard;
